const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '../artifacts/api-server/src/data');

// Fix indonesia-grade2.ts: currentUnit assignments and comma-separated arrange answers
function fixGrade2(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  // Add currentUnit assignment before each u(N, ...) call at the unit level
  content = content.replace(/^(\s*)u\((\d+),\s*"/gm, (match, indent, n) => {
    return `${indent}currentUnit = ${n};\n${indent}u(${n}, "`;
  });
  // Replace comma-separated arrange answer strings with space-separated ones
  content = content.replace(/"هٰذَا، مُدَرِّسٌ، فِي، الْفَصْلِ"/g, '"هٰذَا مُدَرِّسٌ فِي الْفَصْلِ"');
  content = content.replace(/"الْكِتَابُ، عَلَى، الْمَكْتَبِ"/g, '"الْكِتَابُ عَلَى الْمَكْتَبِ"');
  content = content.replace(/"شَجَرَةٌ، زَهْرَةٌ، شَمْسٌ"/g, '"شَجَرَةٌ زَهْرَةٌ شَمْسٌ"');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed indonesia-grade2.ts');
}

// Fix indonesia-grade3.ts: convert arrange exercises from pairs to answer
function fixGrade3(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const regex = /\{ id: "([^"]+)", type: "arrange", skill: "reading", prompt: t\([^)]+\), pairs: \[([^\]]+)\] \}/g;
  let changed = 0;
  content = content.replace(regex, (match, id, pairsText) => {
    // Extract all { a: "...", b: "..." } pairs and build sentence from a values
    const pairRegex = /\{ a: "([^"]+)", b: "([^"]+)" \}/g;
    const words = [];
    let m;
    while ((m = pairRegex.exec(pairsText)) !== null) {
      words.push(m[1]);
    }
    const sentence = words.join(' ');
    changed++;
    return `{ id: "${id}", type: "arrange", skill: "reading", prompt: t("رَتِّبِ الْكَلِمَاتِ لِتُكَوِّنَ جُمْلَةً", "Arrange the words to make a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata-kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"), answer: "${sentence}" }`;
  });
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed indonesia-grade3.ts: ${changed} arrange exercises`);
}

fixGrade2(path.join(DATA_DIR, 'indonesia-grade2.ts'));
fixGrade3(path.join(DATA_DIR, 'indonesia-grade3.ts'));
