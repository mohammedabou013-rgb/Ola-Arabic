const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '../artifacts/api-server/src/data');
const FILES = [
  'grade1.ts', 'grade2.ts', 'grade3.ts', 'grade4.ts', 'grade5.ts', 'grade6.ts',
  'uae-grade1.ts', 'uae-grade2.ts', 'uae-grade3.ts', 'uae-grade4.ts', 'uae-grade5.ts', 'uae-grade6.ts', 'uae-grade7.ts', 'uae-grade8.ts',
  'indonesia-grade1.ts', 'indonesia-grade2.ts', 'indonesia-grade3.ts', 'indonesia-grade4.ts', 'indonesia-grade5.ts', 'indonesia-grade6.ts',
];

const PROMPT = 'رتّب الكلمات لتكوّن جملة';
const PROMPT_EN = 'Arrange the words to make a sentence';
const PROMPT_MS = 'Susun perkataan untuk membina ayat';
const PROMPT_ID = 'Susun kata untuk membuat kalimat';
const PROMPT_FR = 'Rangez les mots pour former une phrase';
const PROMPT_ES = 'Ordena las palabras para formar una oración';

function tCall(ar, en, ms, id, fr, es) {
  return `t("${ar}", "${en}", "${ms}", "${id}", "${fr}", "${es}")`;
}

function stripPunctuation(str) {
  return str.replace(/[.!?؟،,:;]+$/, '').trim();
}

function findFirstArabic(content, arrayName) {
  const regex = new RegExp(`${arrayName}:\\s*\\[\\s*\\{[^}]*arabic:\\s*"([^"]+)"`, 's');
  const match = content.match(regex);
  return match ? match[1] : null;
}

function findExercisesArrays(content) {
  const results = [];
  const regex = /exercises:\s*\[/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const start = match.index + match[0].length;
    let depth = 1;
    let i = start;
    while (i < content.length && depth > 0) {
      const ch = content[i];
      if (ch === '[') depth++;
      else if (ch === ']') depth--;
      i++;
    }
    if (depth === 0) {
      results.push({ start: start, end: i - 1, fullStart: match.index, fullEnd: i });
    }
  }
  return results;
}

function findLessonBlock(content, exercisesStart) {
  // Find the start of the lesson object by looking backward for `id: "...",\n  unitId:`
  const before = content.slice(0, exercisesStart);
  const lessonStartRegex = /\{\s*\n\s*id:\s*"([^"]+)",\s*\n\s*unitId:/g;
  let lastMatch = null;
  let m;
  while ((m = lessonStartRegex.exec(before)) !== null) {
    lastMatch = m;
  }
  return lastMatch ? before.slice(lastMatch.index) : null;
}

function generateSentence(lessonBlock) {
  // Try dialogue first
  const dialogueArabic = findFirstArabic(lessonBlock, 'dialogue');
  if (dialogueArabic) {
    return stripPunctuation(dialogueArabic);
  }
  // Fall back to vocabulary
  const vocabArabic = findFirstArabic(lessonBlock, 'vocabulary');
  if (vocabArabic) {
    return `هَذَا ${stripPunctuation(vocabArabic)}`;
  }
  return null;
}

function findLessonId(lessonBlock) {
  const match = lessonBlock.match(/id:\s*"([^"]+)"/);
  return match ? match[1] : null;
}

function insertArrangeExercise(content, fileName) {
  const arrays = findExercisesArrays(content);
  let offset = 0;
  let inserted = 0;
  for (const arr of arrays) {
    const arrayStart = arr.fullStart + offset;
    const arrayEnd = arr.fullEnd + offset;
    const arrayContent = content.slice(arrayStart, arrayEnd);
    const lessonBlock = findLessonBlock(content.slice(0, arrayStart), arrayStart);
    const lessonId = lessonBlock ? findLessonId(lessonBlock) : null;
    const sentence = lessonBlock ? generateSentence(lessonBlock) : null;
    if (!sentence) continue;

    // Check if arrange already exists
    if (arrayContent.includes('type: "arrange"')) continue;

    const exerciseId = lessonId ? `${lessonId}e-arrange` : `${fileName}-arrange-${inserted}`;
    const exercise = `\n            { id: "${exerciseId}", type: "arrange", skill: "reading", prompt: ${tCall(PROMPT, PROMPT_EN, PROMPT_MS, PROMPT_ID, PROMPT_FR, PROMPT_ES)}, answer: "${sentence}" },`;

    // Insert before the closing `]`
    const insertPos = arr.end + offset;
    content = content.slice(0, insertPos) + exercise + content.slice(insertPos);
    offset += exercise.length;
    inserted++;
  }
  return { content, inserted };
}

let totalInserted = 0;
for (const file of FILES) {
  const filePath = path.join(DATA_DIR, file);
  if (!fs.existsSync(filePath)) {
    console.log(`Missing: ${file}`);
    continue;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  const { content: newContent, inserted } = insertArrangeExercise(content, file);
  if (inserted > 0) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`${file}: inserted ${inserted} arrange exercises`);
    totalInserted += inserted;
  } else {
    console.log(`${file}: no changes`);
  }
}

console.log(`\nTotal inserted: ${totalInserted}`);
