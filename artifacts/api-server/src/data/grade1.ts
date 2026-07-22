import { t, type GradeData } from "./types";

export const grade1: GradeData = {
  id: "g1",
  number: 1,
  title: t("المستوى الأول", "Stage 1", "Tahun 1", "Kelas 1", "Année 1", "Año 1"),
  description: t("نتعلم حروف الهجاء العربية والكلمات الأساسية والتحيات والأرقام", "Learn Arabic letters, basic words, greetings and numbers", "Belajar huruf Arab, perkataan asas, ucapan salam dan nombor", "Belajar huruf Arab, kata-kata dasar, salam dan angka", "Apprendre les lettres arabes, les mots de base, les salutations et les chiffres", "Aprender las letras árabes, palabras básicas, saludos y números"),
  color: "#EF4444",
  icon: "star",
  units: [
    {
      id: "g1u1",
      gradeId: "g1",
      order: 1,
      title: t("الْحُرُوفُ الْعَرَبِيَّةُ", "Arabic Letters", "Huruf Arab", "Huruf Arab", "Les lettres arabes", "Las letras árabes"),
      theme: "letters",
      lessons: [
        {
          id: "g1u1l1",
          unitId: "g1u1",
          gradeId: "g1",
          order: 1,
          title: t("أ ب ت ث", "Alif, Ba, Ta, Tha", "Alif, Ba, Ta, Tha", "Alif, Ba, Ta, Tha", "Alif, Ba, Ta, Tha", "Alif, Ba, Ta, Tha"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("نبدأ رحلتنا مع أوائل حروف اللغة العربية الجميلة!", "We begin our journey with the first Arabic letters!", "Kita mula perjalanan dengan huruf-huruf Arab pertama!", "Kita mulai perjalanan dengan huruf-huruf Arab pertama!", "Nous commençons notre voyage avec les premières lettres arabes !", "¡Comenzamos nuestro viaje con las primeras letras árabes!"),
          vocabulary: [
            {
              id: "g1u1l1v1",
              arabic: "أَلِفْ",
              transliteration: "alif",
              translation: t("أَلِفْ", "Alif (A)", "Alif (A)", "Alif (A)", "Alif (A)", "Alif (A)"),
              emoji: "🅰️"
            },
            {
              id: "g1u1l1v2",
              arabic: "بَاء",
              transliteration: "bāʾ",
              translation: t("بَاء", "Ba (B)", "Ba (B)", "Ba (B)", "Ba (B)", "Ba (B)"),
              emoji: "🐟"
            },
            {
              id: "g1u1l1v3",
              arabic: "تَاء",
              transliteration: "tāʾ",
              translation: t("تَاء", "Ta (T)", "Ta (T)", "Ta (T)", "Ta (T)", "Ta (T)"),
              emoji: "🍎"
            },
            {
              id: "g1u1l1v4",
              arabic: "ثَاء",
              transliteration: "thāʾ",
              translation: t("ثَاء", "Tha (Th)", "Tha (Th)", "Tha (Th)", "Tha (Th)", "Tha (Th)"),
              emoji: "⭐"
            },
            {
              id: "g1u1l1v5",
              arabic: "بَيْتٌ",
              transliteration: "bayt",
              translation: t("بَيْتٌ", "house", "rumah", "rumah", "maison", "casa"),
              emoji: "🏠"
            }
          ],
          dialogue: [
            {
              speaker: "مُعَلِّمٌ",
              arabic: "قُولُوا مَعِي: أَلِفْ، بَاء، تَاء، ثَاء!",
              translation: t("قُولُوا مَعِي: أَلِفْ، بَاء، تَاء، ثَاء!", "Say with me: Alif, Ba, Ta, Tha!", "Sebut bersama saya: Alif, Ba, Ta, Tha!", "Ucapkan bersama saya: Alif, Ba, Ta, Tha!", "Dites avec moi : Alif, Ba, Ta, Tha !", "¡Digan conmigo: Alif, Ba, Ta, Tha!")
            },
            {
              speaker: "تَلَامِيذُ",
              arabic: "أَلِفْ، بَاء، تَاء، ثَاء!",
              translation: t("أَلِفْ، بَاء، تَاء، ثَاء!", "Alif, Ba, Ta, Tha!", "Alif, Ba, Ta, Tha!", "Alif, Ba, Ta, Tha!", "Alif, Ba, Ta, Tha !", "¡Alif, Ba, Ta, Tha!")
            }
          ],
          exercises: [
            {
              id: "g1u1l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الحرف الصحيح", "Listen and choose the correct letter", "Dengar dan pilih huruf yang betul", "Dengarkan dan pilih huruf yang benar", "Écoute et choisis la bonne lettre", "Escucha y elige la letra correcta"),
              arabicText: "بَاء",
              options: [
                "أَلِفْ",
                "بَاء",
                "تَاء"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f41f/512.webp"
            },
            {
              id: "g1u1l1e2",
              type: "mcq",
              skill: "reading",
              prompt: t("ما الحرف الأول في كلمة بيت؟", "What is the first letter in the word 'bayt' (house)?", "Apa huruf pertama dalam perkataan 'bayt' (rumah)?", "Apa huruf pertama dalam kata 'bayt' (rumah)?", "Quelle est la première lettre du mot 'bayt' (maison) ?", "¿Cuál es la primera letra de la palabra 'bayt' (casa)?"),
              options: [
                "أَلِفْ",
                "بَاء",
                "تَاء"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f170-fe0f/512.webp"
            },
            {
              id: "g1u1l1e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الحروف الأربعة بصوت واضح", "Pronounce the four letters clearly", "Sebut empat huruf dengan jelas", "Ucapkan empat huruf dengan jelas", "Prononce les quatre lettres clairement", "Pronuncia las cuatro letras claramente"),
              arabicText: "أَلِفْ — بَاء — تَاء — ثَاء",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f170-fe0f/512.webp"
            },
            {
              id: "g1u1l1e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "قُولُوا مَعِي: أَلِفْ، بَاء، تَاء، ثَاء",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f170-fe0f/512.webp"
            },
            {
              id: "g1u1l1mcqg1u1l1v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"أَلِفْ\"؟", "What does \"Alif (A)\" mean?", "Apakah maksud \"Alif (A)\"?", "Apa arti \"Alif (A)\"?", "Que signifie \"Alif (A)\" ?", "¿Qué significa \"Alif (A)\"?"),
              arabicText: "أَلِفْ",
              options: [
                "nine (9)",
                "Alif (A)",
                "we count",
                "trousers"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f170-fe0f/512.webp"
            },
            {
              id: "g1u1l1listeng1u1l1v5",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "بَيْتٌ",
              options: [
                "حِذَاءٌ",
                "شَمْسٌ",
                "بَيْتٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e0/512.webp"
            },
            {
              id: "g1u1l1spellg1u1l1v4",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "ثَاء",
              answer: "ثَاء",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2b50/512.webp"
            },
            {
              id: "g1u1l1speakg1u1l1v1",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "أَلِفْ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f170-fe0f/512.webp"
            }
          ]
        },
        {
          id: "g1u1l2",
          unitId: "g1u1",
          gradeId: "g1",
          order: 2,
          title: t("ج ح خ د", "Jim, Ha, Kha, Dal", "Jim, Ha, Kha, Dal", "Jim, Ha, Kha, Dal", "Jim, Ha, Kha, Dal", "Jim, Ha, Kha, Dal"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("نواصل تعلّم الحروف العربية الجميلة!", "We continue learning the beautiful Arabic letters!", "Kita teruskan belajar huruf-huruf Arab yang cantik!", "Kita lanjutkan belajar huruf-huruf Arab yang indah!", "Nous continuons à apprendre les belles lettres arabes !", "¡Continuamos aprendiendo las hermosas letras árabes!"),
          vocabulary: [
            {
              id: "g1u1l2v1",
              arabic: "جِيمْ",
              transliteration: "jīm",
              translation: t("جِيمْ", "Jim (J)", "Jim (J)", "Jim (J)", "Jim (J)", "Jim (J)"),
              emoji: "🌴"
            },
            {
              id: "g1u1l2v2",
              arabic: "حَاء",
              transliteration: "ḥāʾ",
              translation: t("حَاء", "Ha (H)", "Ha (H)", "Ha (H)", "Ha (H)", "Ha (H)"),
              emoji: "🐎"
            },
            {
              id: "g1u1l2v3",
              arabic: "خَاء",
              transliteration: "khāʾ",
              translation: t("خَاء", "Kha (Kh)", "Kha (Kh)", "Kha (Kh)", "Kha (Kh)", "Kha (Kh)"),
              emoji: "🍞"
            },
            {
              id: "g1u1l2v4",
              arabic: "دَال",
              transliteration: "dāl",
              translation: t("دَال", "Dal (D)", "Dal (D)", "Dal (D)", "Dal (D)", "Dal (D)"),
              emoji: "🐻"
            },
            {
              id: "g1u1l2v5",
              arabic: "جَمَلٌ",
              transliteration: "jamal",
              translation: t("جَمَلٌ", "camel", "unta", "unta", "chameau", "camello"),
              emoji: "🐪"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g1u1l2e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الحرف الصحيح", "Listen and choose the correct letter", "Dengar dan pilih huruf yang betul", "Dengarkan dan pilih huruf yang benar", "Écoute et choisis la bonne lettre", "Escucha y elige la letra correcta"),
              arabicText: "حَاء",
              options: [
                "جِيمْ",
                "حَاء",
                "خَاء"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f40e/512.webp"
            },
            {
              id: "g1u1l2e2",
              type: "mcq",
              skill: "reading",
              prompt: t("ما الحرف الأول في كلمة جمل؟", "What is the first letter in the word 'jamal' (camel)?", "Apa huruf pertama dalam perkataan 'jamal' (unta)?", "Apa huruf pertama dalam kata 'jamal' (unta)?", "Quelle est la première lettre du mot 'jamal' (chameau) ?", "¿Cuál es la primera letra de la palabra 'jamal' (camello)?"),
              options: [
                "حَاء",
                "جِيمْ",
                "دَال"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f334/512.webp"
            },
            {
              id: "g1u1l2e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الحروف الأربعة بصوت واضح", "Pronounce the four letters clearly", "Sebut empat huruf dengan jelas", "Ucapkan empat huruf dengan jelas", "Prononce les quatre lettres clairement", "Pronuncia las cuatro letras claramente"),
              arabicText: "جِيمْ — حَاء — خَاء — دَال",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f334/512.webp"
            },
            {
              id: "g1u1l2e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا جِيمْ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f334/512.webp"
            },
            {
              id: "g1u1l2speakg1u1l2v4",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "دَال",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f43b/512.webp"
            },
            {
              id: "g1u1l2listeng1u1l2v2",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "حَاء",
              options: [
                "فَاء",
                "أَخْضَرُ",
                "حَاء"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f40e/512.webp"
            },
            {
              id: "g1u1l2mcqg1u1l2v5",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"جَمَلٌ\"؟", "What does \"camel\" mean?", "Apakah maksud \"unta\"?", "Apa arti \"unta\"?", "Que signifie \"chameau\" ?", "¿Qué significa \"camello\"?"),
              arabicText: "جَمَلٌ",
              options: [
                "bread",
                "camel",
                "seven (7)",
                "hand"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f42a/512.webp"
            },
            {
              id: "g1u1l2spellg1u1l2v2",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "حَاء",
              answer: "حَاء",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f40e/512.webp"
            }
          ]
        },
        {
          id: "g1u1l3",
          unitId: "g1u1",
          gradeId: "g1",
          order: 3,
          title: t("ذ ر ز س", "Dhal, Ra, Zay, Sin", "Dhal, Ra, Zay, Sin", "Dhal, Ra, Zay, Sin", "Dhal, Ra, Zay, Sin", "Dhal, Ra, Zay, Sin"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("نكمل مشوارنا مع حروف جديدة رائعة!", "We complete our journey with new wonderful letters!", "Kita sambung perjalanan dengan huruf-huruf baru yang menakjubkan!", "Kita lanjutkan perjalanan dengan huruf-huruf baru yang menakjubkan!", "Nous poursuivons notre voyage avec de nouvelles lettres merveilleuses !", "¡Continuamos nuestro viaje con nuevas y maravillosas letras!"),
          vocabulary: [
            {
              id: "g1u1l3v1",
              arabic: "ذَال",
              transliteration: "dhāl",
              translation: t("ذَال", "Dhal (Dh)", "Dhal (Dh)", "Dhal (Dh)", "Dhal (Dh)", "Dhal (Dh)"),
              emoji: "🦌"
            },
            {
              id: "g1u1l3v2",
              arabic: "رَاء",
              transliteration: "rāʾ",
              translation: t("رَاء", "Ra (R)", "Ra (R)", "Ra (R)", "Ra (R)", "Ra (R)"),
              emoji: "🌹"
            },
            {
              id: "g1u1l3v3",
              arabic: "زَاي",
              transliteration: "zāy",
              translation: t("زَاي", "Zay (Z)", "Zay (Z)", "Zay (Z)", "Zay (Z)", "Zay (Z)"),
              emoji: "🌻"
            },
            {
              id: "g1u1l3v4",
              arabic: "سِين",
              transliteration: "sīn",
              translation: t("سِين", "Sin (S)", "Sin (S)", "Sin (S)", "Sin (S)", "Sin (S)"),
              emoji: "🐟"
            },
            {
              id: "g1u1l3v5",
              arabic: "رَأْسٌ",
              transliteration: "raʾs",
              translation: t("رَأْسٌ", "head", "kepala", "kepala", "tête", "cabeza"),
              emoji: "🗣️"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g1u1l3e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الحرف الصحيح", "Listen and choose the correct letter", "Dengar dan pilih huruf yang betul", "Dengarkan dan pilih huruf yang benar", "Écoute et choisis la bonne lettre", "Escucha y elige la letra correcta"),
              arabicText: "زَاي",
              options: [
                "رَاء",
                "زَاي",
                "سِين"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f33b/512.webp"
            },
            {
              id: "g1u1l3e2",
              type: "mcq",
              skill: "reading",
              prompt: t("ما الحرف الأول في كلمة رأس؟", "What is the first letter in 'raʾs' (head)?", "Apa huruf pertama dalam 'raʾs' (kepala)?", "Apa huruf pertama dalam 'raʾs' (kepala)?", "Quelle est la première lettre de 'raʾs' (tête) ?", "¿Cuál es la primera letra de 'raʾs' (cabeza)?"),
              options: [
                "ذَال",
                "رَاء",
                "زَاي"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f98c/512.webp"
            },
            {
              id: "g1u1l3e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الحروف الأربعة بصوت واضح", "Pronounce the four letters clearly", "Sebut empat huruf dengan jelas", "Ucapkan empat huruf dengan jelas", "Prononce les quatre lettres clairement", "Pronuncia las cuatro letras claramente"),
              arabicText: "ذَال — رَاء — زَاي — سِين",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f98c/512.webp"
            },
            {
              id: "g1u1l3e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا ذَال",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f98c/512.webp"
            },
            {
              id: "g1u1l3speakg1u1l3v5",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "رَأْسٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f5e3-fe0f/512.webp"
            },
            {
              id: "g1u1l3listeng1u1l3v3",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "زَاي",
              options: [
                "ظَاء",
                "زَاي",
                "تُفَّاحَةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f33b/512.webp"
            },
            {
              id: "g1u1l3mcqg1u1l3v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"ذَال\"؟", "What does \"Dhal (Dh)\" mean?", "Apakah maksud \"Dhal (Dh)\"?", "Apa arti \"Dhal (Dh)\"?", "Que signifie \"Dhal (Dh)\" ?", "¿Qué significa \"Dhal (Dh)\"?"),
              arabicText: "ذَال",
              options: [
                "Dhal (Dh)",
                "Mim (M)",
                "I am fine",
                "three (3)"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f98c/512.webp"
            },
            {
              id: "g1u1l3spellg1u1l3v2",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "رَاء",
              answer: "رَاء",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f339/512.webp"
            }
          ]
        },
        {
          id: "g1u1l4",
          unitId: "g1u1",
          gradeId: "g1",
          order: 4,
          title: t("ش ص ض ط", "Shin, Sad, Dad, Ta", "Shin, Sad, Dad, Ta", "Shin, Sad, Dad, Ta", "Shin, Sad, Dad, Ta", "Shin, Sad, Dad, Ta"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("حروف جديدة ننطقها بفم مفتوح وقلب فرح!", "New letters we pronounce with open mouth and happy heart!", "Huruf-huruf baru kita sebut dengan mulut terbuka dan hati gembira!", "Huruf-huruf baru kita ucapkan dengan mulut terbuka dan hati gembira!", "De nouvelles lettres que nous prononçons avec une bouche ouverte et un cœur joyeux !", "¡Nuevas letras que pronunciamos con la boca abierta y el corazón alegre!"),
          vocabulary: [
            {
              id: "g1u1l4v1",
              arabic: "شِين",
              transliteration: "shīn",
              translation: t("شِين", "Shin (Sh)", "Shin (Sh)", "Shin (Sh)", "Shin (Sh)", "Shin (Sh)"),
              emoji: "☀️"
            },
            {
              id: "g1u1l4v2",
              arabic: "صَاد",
              transliteration: "ṣād",
              translation: t("صَاد", "Sad (S)", "Sad (S)", "Sad (S)", "Sad (S)", "Sad (S)"),
              emoji: "🦁"
            },
            {
              id: "g1u1l4v3",
              arabic: "ضَاد",
              transliteration: "ḍād",
              translation: t("ضَاد", "Dad (D)", "Dad (D)", "Dad (D)", "Dad (D)", "Dad (D)"),
              emoji: "🐸"
            },
            {
              id: "g1u1l4v4",
              arabic: "طَاء",
              transliteration: "ṭāʾ",
              translation: t("طَاء", "Ta (T)", "Ta (T)", "Ta (T)", "Ta (T)", "Ta (T)"),
              emoji: "🦅"
            },
            {
              id: "g1u1l4v5",
              arabic: "شَمْسٌ",
              transliteration: "shams",
              translation: t("شَمْسٌ", "sun", "matahari", "matahari", "soleil", "sol"),
              emoji: "☀️"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g1u1l4e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الحرف الصحيح", "Listen and choose the correct letter", "Dengar dan pilih huruf yang betul", "Dengarkan dan pilih huruf yang benar", "Écoute et choisis la bonne lettre", "Escucha y elige la letra correcta"),
              arabicText: "صَاد",
              options: [
                "شِين",
                "صَاد",
                "ضَاد"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f981/512.webp"
            },
            {
              id: "g1u1l4e2",
              type: "mcq",
              skill: "reading",
              prompt: t("ما الحرف الأول في كلمة شمس؟", "What is the first letter in 'shams' (sun)?", "Apa huruf pertama dalam 'shams' (matahari)?", "Apa huruf pertama dalam 'shams' (matahari)?", "Quelle est la première lettre de 'shams' (soleil) ?", "¿Cuál es la primera letra de 'shams' (sol)?"),
              options: [
                "صَاد",
                "شِين",
                "ضَاد"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2600-fe0f/512.webp"
            },
            {
              id: "g1u1l4e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الحروف الأربعة بوضوح", "Pronounce the four letters clearly", "Sebut empat huruf dengan jelas", "Ucapkan empat huruf dengan jelas", "Prononce les quatre lettres clairement", "Pronuncia las cuatro letras claramente"),
              arabicText: "شِين — صَاد — ضَاد — طَاء",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2600-fe0f/512.webp"
            },
            {
              id: "g1u1l4e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا شِين",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2600-fe0f/512.webp"
            },
            {
              id: "g1u1l4speakg1u1l4v4",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "طَاء",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f985/512.webp"
            },
            {
              id: "g1u1l4listeng1u1l4v4",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "طَاء",
              options: [
                "الْحَمْدُ لِلَّهِ",
                "صَمْغٌ",
                "طَاء"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f985/512.webp"
            },
            {
              id: "g1u1l4speakg1u1l4v5",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "شَمْسٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2600-fe0f/512.webp"
            },
            {
              id: "g1u1l4mcqg1u1l4v5",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"شَمْسٌ\"؟", "What does \"sun\" mean?", "Apakah maksud \"matahari\"?", "Apa arti \"matahari\"?", "Que signifie \"soleil\" ?", "¿Qué significa \"sol\"?"),
              arabicText: "شَمْسٌ",
              options: [
                "eight (8)",
                "moon",
                "sun",
                "blue"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2600-fe0f/512.webp"
            }
          ]
        },
        {
          id: "g1u1l5",
          unitId: "g1u1",
          gradeId: "g1",
          order: 5,
          title: t("ظ ع غ ف", "Dha, Ain, Ghain, Fa", "Dha, Ain, Ghain, Fa", "Dha, Ain, Ghain, Fa", "Dha, Ain, Ghain, Fa", "Dha, Ain, Ghain, Fa"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("خمسة حروف جديدة نتعلمها اليوم بفرح!", "Five new letters we learn today with joy!", "Lima huruf baru kita belajar hari ini dengan gembira!", "Lima huruf baru kita pelajari hari ini dengan gembira!", "Cinq nouvelles lettres que nous apprenons aujourd'hui avec joie !", "¡Cinco nuevas letras que aprendemos hoy con alegría!"),
          vocabulary: [
            {
              id: "g1u1l5v1",
              arabic: "ظَاء",
              transliteration: "ẓāʾ",
              translation: t("ظَاء", "Dha (Dh)", "Dha (Dh)", "Dha (Dh)", "Dha (Dh)", "Dha (Dh)"),
              emoji: "🌿"
            },
            {
              id: "g1u1l5v2",
              arabic: "عَيْن",
              transliteration: "ʿayn",
              translation: t("عَيْن", "Ain (')", "Ain (')", "Ain (')", "Ain (')", "Ain (')"),
              emoji: "👁️"
            },
            {
              id: "g1u1l5v3",
              arabic: "غَيْن",
              transliteration: "ghayn",
              translation: t("غَيْن", "Ghain (Gh)", "Ghain (Gh)", "Ghain (Gh)", "Ghain (Gh)", "Ghain (Gh)"),
              emoji: "🌲"
            },
            {
              id: "g1u1l5v4",
              arabic: "فَاء",
              transliteration: "fāʾ",
              translation: t("فَاء", "Fa (F)", "Fa (F)", "Fa (F)", "Fa (F)", "Fa (F)"),
              emoji: "🐘"
            },
            {
              id: "g1u1l5v5",
              arabic: "عَيْنٌ",
              transliteration: "ʿayn",
              translation: t("عَيْنٌ", "eye", "mata", "mata", "œil", "ojo"),
              emoji: "👁️"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g1u1l5e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الحرف الصحيح", "Listen and choose the correct letter", "Dengar dan pilih huruf yang betul", "Dengarkan dan pilih huruf yang benar", "Écoute et choisis la bonne lettre", "Escucha y elige la letra correcta"),
              arabicText: "عَيْن",
              options: [
                "ظَاء",
                "عَيْن",
                "غَيْن"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f441-fe0f/512.webp"
            },
            {
              id: "g1u1l5e2",
              type: "mcq",
              skill: "reading",
              prompt: t("ما الحرف الأول في كلمة عين؟", "What is the first letter in 'ayn' (eye)?", "Apa huruf pertama dalam 'ayn' (mata)?", "Apa huruf pertama dalam 'ayn' (mata)?", "Quelle est la première lettre de 'ayn' (œil) ?", "¿Cuál es la primera letra de 'ayn' (ojo)?"),
              options: [
                "ظَاء",
                "عَيْن",
                "غَيْن"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f33f/512.webp"
            },
            {
              id: "g1u1l5e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الأربعة حروف بوضوح", "Pronounce the four letters clearly", "Sebut empat huruf dengan jelas", "Ucapkan empat huruf dengan jelas", "Prononce les quatre lettres clairement", "Pronuncia las cuatro letras claramente"),
              arabicText: "ظَاء — عَيْن — غَيْن — فَاء",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f33f/512.webp"
            },
            {
              id: "g1u1l5e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا ظَاء",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f33f/512.webp"
            },
            {
              id: "g1u1l5listeng1u1l5v1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "ظَاء",
              options: [
                "قَمَرٌ",
                "تَاء",
                "ظَاء"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f33f/512.webp"
            },
            {
              id: "g1u1l5spellg1u1l5v2",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "عَيْن",
              answer: "عَيْن",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f441-fe0f/512.webp"
            },
            {
              id: "g1u1l5writeg1u1l5v2",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"عَيْن\"", "Type the Arabic word for: \"Ain (')\"", "Taip perkataan Arab untuk: \"Ain (')\"", "Ketik kata Arab untuk: \"Ain (')\"", "Tape le mot arabe pour : \"Ain (')\"", "Escribe la palabra árabe para: \"Ain (')\""),
              arabicText: "عَيْن",
              answer: "عَيْن",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f441-fe0f/512.webp"
            },
            {
              id: "g1u1l5mcqg1u1l5v3",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"غَيْن\"؟", "What does \"Ghain (Gh)\" mean?", "Apakah maksud \"Ghain (Gh)\"?", "Apa arti \"Ghain (Gh)\"?", "Que signifie \"Ghain (Gh)\" ?", "¿Qué significa \"Ghain (Gh)\"?"),
              arabicText: "غَيْن",
              options: [
                "And upon you peace",
                "total",
                "Ghain (Gh)",
                "four (4)"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f332/512.webp"
            }
          ]
        },
        {
          id: "g1u1l6",
          unitId: "g1u1",
          gradeId: "g1",
          order: 6,
          title: t("ق ك ل م ن و ه ي", "Qaf to Ya", "Qaf hingga Ya", "Qaf hingga Ya", "Qaf jusqu'à Ya", "Qaf hasta Ya"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("نختم الحروف العربية بأواخرها الجميلة!", "We conclude Arabic letters with their beautiful endings!", "Kita tamatkan huruf Arab dengan akhiran yang cantik!", "Kita selesaikan huruf Arab dengan akhiran yang indah!", "Nous terminons les lettres arabes avec leurs belles fins !", "¡Concluimos las letras árabes con sus hermosos finales!"),
          vocabulary: [
            {
              id: "g1u1l6v1",
              arabic: "قَاف",
              transliteration: "qāf",
              translation: t("قَاف", "Qaf (Q)", "Qaf (Q)", "Qaf (Q)", "Qaf (Q)", "Qaf (Q)"),
              emoji: "🌙"
            },
            {
              id: "g1u1l6v2",
              arabic: "كَاف",
              transliteration: "kāf",
              translation: t("كَاف", "Kaf (K)", "Kaf (K)", "Kaf (K)", "Kaf (K)", "Kaf (K)"),
              emoji: "🐶"
            },
            {
              id: "g1u1l6v3",
              arabic: "لَام",
              transliteration: "lām",
              translation: t("لَام", "Lam (L)", "Lam (L)", "Lam (L)", "Lam (L)", "Lam (L)"),
              emoji: "🎯"
            },
            {
              id: "g1u1l6v4",
              arabic: "مِيم",
              transliteration: "mīm",
              translation: t("مِيم", "Mim (M)", "Mim (M)", "Mim (M)", "Mim (M)", "Mim (M)"),
              emoji: "🌊"
            },
            {
              id: "g1u1l6v5",
              arabic: "قَمَرٌ",
              transliteration: "qamar",
              translation: t("قَمَرٌ", "moon", "bulan", "bulan", "lune", "luna"),
              emoji: "🌙"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g1u1l6e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الحرف الصحيح", "Listen and choose the correct letter", "Dengar dan pilih huruf yang betul", "Dengarkan dan pilih huruf yang benar", "Écoute et choisis la bonne lettre", "Escucha y elige la letra correcta"),
              arabicText: "لَام",
              options: [
                "كَاف",
                "لَام",
                "مِيم"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3af/512.webp"
            },
            {
              id: "g1u1l6e2",
              type: "mcq",
              skill: "reading",
              prompt: t("ما الحرف الأول في كلمة قمر؟", "What is the first letter in 'qamar' (moon)?", "Apa huruf pertama dalam 'qamar' (bulan)?", "Apa huruf pertama dalam 'qamar' (bulan)?", "Quelle est la première lettre de 'qamar' (lune) ?", "¿Cuál es la primera letra de 'qamar' (luna)?"),
              options: [
                "كَاف",
                "قَاف",
                "لَام"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f319/512.webp"
            },
            {
              id: "g1u1l6e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الحروف الأربعة بوضوح", "Pronounce the four letters clearly", "Sebut empat huruf dengan jelas", "Ucapkan empat huruf dengan jelas", "Prononce les quatre lettres clairement", "Pronuncia las cuatro letras claramente"),
              arabicText: "قَاف — كَاف — لَام — مِيم",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f319/512.webp"
            },
            {
              id: "g1u1l6e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا قَاف",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f319/512.webp"
            },
            {
              id: "g1u1l6spellg1u1l6v5",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "قَمَرٌ",
              answer: "قَمَرٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f319/512.webp"
            },
            {
              id: "g1u1l6spellg1u1l6v1",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "قَاف",
              answer: "قَاف",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f319/512.webp"
            },
            {
              id: "g1u1l6listeng1u1l6v5",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "قَمَرٌ",
              options: [
                "طَاء",
                "قَمَرٌ",
                "شَجَرَةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f319/512.webp"
            },
            {
              id: "g1u1l6listeng1u1l6v2",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "كَاف",
              options: [
                "وَاحِدٌ",
                "ذَال",
                "كَاف"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f436/512.webp"
            }
          ]
        },
        {
          id: "g1u1review",
          unitId: "g1u1",
          gradeId: "g1",
          order: 7,
          title: t("مراجعة الوحدة", "Unit Review", "Ulangan Unit", "Ulangan Unit", "Révision de l’unité", "Revisión de la unidad"),
          skills: [
            "listening",
            "reading",
            "writing"
          ],
          intro: t("لنراجع ما تعلّمناه في هذه الوحدة!", "Let’s review what we learned in this unit!", "Mari ulangkaji apa yang kita pelajari dalam unit ini!", "Mari kita ulang apa yang kita pelajari dalam unit ini!", "Révisons ce que nous avons appris dans cette unité !", "¡Repasemos lo que aprendimos en esta unidad!"),
          vocabulary: [
            {
              id: "g1u1l1v1",
              arabic: "أَلِفْ",
              transliteration: "alif",
              translation: t("أَلِفْ", "Alif (A)", "Alif (A)", "Alif (A)", "Alif (A)", "Alif (A)"),
              emoji: "🅰️"
            },
            {
              id: "g1u1l1v2",
              arabic: "بَاء",
              transliteration: "bāʾ",
              translation: t("بَاء", "Ba (B)", "Ba (B)", "Ba (B)", "Ba (B)", "Ba (B)"),
              emoji: "🐟"
            },
            {
              id: "g1u1l1v3",
              arabic: "تَاء",
              transliteration: "tāʾ",
              translation: t("تَاء", "Ta (T)", "Ta (T)", "Ta (T)", "Ta (T)", "Ta (T)"),
              emoji: "🍎"
            },
            {
              id: "g1u1l1v4",
              arabic: "ثَاء",
              transliteration: "thāʾ",
              translation: t("ثَاء", "Tha (Th)", "Tha (Th)", "Tha (Th)", "Tha (Th)", "Tha (Th)"),
              emoji: "⭐"
            },
            {
              id: "g1u1l1v5",
              arabic: "بَيْتٌ",
              transliteration: "bayt",
              translation: t("بَيْتٌ", "house", "rumah", "rumah", "maison", "casa"),
              emoji: "🏠"
            },
            {
              id: "g1u1l2v1",
              arabic: "جِيمْ",
              transliteration: "jīm",
              translation: t("جِيمْ", "Jim (J)", "Jim (J)", "Jim (J)", "Jim (J)", "Jim (J)"),
              emoji: "🌴"
            },
            {
              id: "g1u1l2v2",
              arabic: "حَاء",
              transliteration: "ḥāʾ",
              translation: t("حَاء", "Ha (H)", "Ha (H)", "Ha (H)", "Ha (H)", "Ha (H)"),
              emoji: "🐎"
            },
            {
              id: "g1u1l2v3",
              arabic: "خَاء",
              transliteration: "khāʾ",
              translation: t("خَاء", "Kha (Kh)", "Kha (Kh)", "Kha (Kh)", "Kha (Kh)", "Kha (Kh)"),
              emoji: "🍞"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g1u1reviewlisteng1u1l1v5",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "بَيْتٌ",
              options: [
                "بَيْتٌ",
                "غَيْن",
                "قَمَرٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e0/512.webp"
            },
            {
              id: "g1u1reviewspellg1u1l1v5",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "بَيْتٌ",
              answer: "بَيْتٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e0/512.webp"
            },
            {
              id: "g1u1reviewspellg1u1l2v3",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "خَاء",
              answer: "خَاء",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f35e/512.webp"
            },
            {
              id: "g1u1reviewlisteng1u1l2v1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "جِيمْ",
              options: [
                "جِيمْ",
                "سِتَّةٌ",
                "تُصْبِحُ عَلَى خَيْرٍ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f334/512.webp"
            },
            {
              id: "g1u1reviewmcqg1u1l1v4",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"ثَاء\"؟", "What does \"Tha (Th)\" mean?", "Apakah maksud \"Tha (Th)\"?", "Apa arti \"Tha (Th)\"?", "Que signifie \"Tha (Th)\" ?", "¿Qué significa \"Tha (Th)\"?"),
              arabicText: "ثَاء",
              options: [
                "Tha (Th)",
                "milk",
                "hat",
                "See you tomorrow"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2b50/512.webp"
            },
            {
              id: "g1u1reviewlisteng1u1l1v3",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "تَاء",
              options: [
                "شَمْسٌ",
                "تِسْعَةٌ",
                "تَاء"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f34e/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "g1u2",
      gradeId: "g1",
      order: 2,
      title: t("مُفْرَدَاتٌ أَسَاسِيَّةٌ", "Basic Vocabulary", "Perbendaharaan Kata Asas", "Kosakata Dasar", "Vocabulaire de base", "Vocabulario básico"),
      theme: "vocabulary",
      lessons: [
        {
          id: "g1u2l1",
          unitId: "g1u2",
          gradeId: "g1",
          order: 1,
          title: t("أَسْمَاءُ الْأَشْيَاءِ", "Names of Things", "Nama Benda", "Nama Benda", "Les noms des choses", "Los nombres de las cosas"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("العالم مليء بالأشياء الجميلة! لنتعلّم أسماءها.", "The world is full of beautiful things! Let's learn their names.", "Dunia penuh benda indah! Jom belajar namanya.", "Dunia penuh benda indah! Ayo pelajari namanya.", "Le monde est plein de belles choses ! Apprenons leurs noms.", "¡El mundo está lleno de cosas hermosas! Aprendamos sus nombres."),
          vocabulary: [
            {
              id: "g1u2l1v1",
              arabic: "كِتَابٌ",
              transliteration: "kitāb",
              translation: t("كِتَابٌ", "book", "buku", "buku", "livre", "libro"),
              emoji: "📚"
            },
            {
              id: "g1u2l1v2",
              arabic: "قَلَمٌ",
              transliteration: "qalam",
              translation: t("قَلَمٌ", "pen", "pen", "pena", "stylo", "bolígrafo"),
              emoji: "✏️"
            },
            {
              id: "g1u2l1v3",
              arabic: "كُرَةٌ",
              transliteration: "kura",
              translation: t("كُرَةٌ", "ball", "bola", "bola", "balle", "pelota"),
              emoji: "⚽"
            },
            {
              id: "g1u2l1v4",
              arabic: "حَقِيبَةٌ",
              transliteration: "ḥaqība",
              translation: t("حَقِيبَةٌ", "bag", "beg", "tas", "sac", "bolso"),
              emoji: "🎒"
            },
            {
              id: "g1u2l1v5",
              arabic: "طَاوِلَةٌ",
              transliteration: "ṭāwila",
              translation: t("طَاوِلَةٌ", "table", "meja", "meja", "table", "mesa"),
              emoji: "🪑"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g1u2l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "كُرَةٌ",
              options: [
                "كِتَابٌ",
                "كُرَةٌ",
                "قَلَمٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "g1u2l1e2",
              type: "matching",
              skill: "reading",
              prompt: t("صل الكلمة بصورتها", "Match the word to its picture", "Padankan perkataan dengan gambarnya", "Cocokkan kata dengan gambarnya", "Relie le mot à son image", "Une la palabra con su imagen"),
              pairs: [
                {
                  a: "كِتَابٌ",
                  b: "📚"
                },
                {
                  a: "قَلَمٌ",
                  b: "✏️"
                },
                {
                  a: "كُرَةٌ",
                  b: "⚽"
                },
                {
                  a: "حَقِيبَةٌ",
                  b: "🎒"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp"
            },
            {
              id: "g1u2l1e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("سمِّ ثلاثة أشياء في فصلك", "Name three things in your classroom", "Namakan tiga benda di kelas anda", "Sebutkan tiga benda di kelasmu", "Nomme trois choses dans ta classe", "Nombra tres cosas en tu aula"),
              arabicText: "فِي فَصْلِي كِتَابٌ وَقَلَمٌ وَطَاوِلَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp"
            },
            {
              id: "g1u2l1e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا كِتَابٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp"
            },
            {
              id: "g1u2l1listeng1u2l1v4",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "حَقِيبَةٌ",
              options: [
                "وَعَلَيْكُمُ السَّلَامُ",
                "حَقِيبَةٌ",
                "قُبَّعَةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f392/512.webp"
            },
            {
              id: "g1u2l1speakg1u2l1v3",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "كُرَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "g1u2l1speakg1u2l1v1",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "كِتَابٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp"
            },
            {
              id: "g1u2l1writeg1u2l1v5",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"طَاوِلَةٌ\"", "Type the Arabic word for: \"table\"", "Taip perkataan Arab untuk: \"meja\"", "Ketik kata Arab untuk: \"meja\"", "Tape le mot arabe pour : \"table\"", "Escribe la palabra árabe para: \"mesa\""),
              arabicText: "طَاوِلَةٌ",
              answer: "طَاوِلَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1fa91/512.webp"
            }
          ]
        },
        {
          id: "g1u2l2",
          unitId: "g1u2",
          gradeId: "g1",
          order: 2,
          title: t("الْأَلْوَانُ", "Colours", "Warna", "Warna", "Les couleurs", "Los colores"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("الألوان تجعل حياتنا أجمل! لنتعلّم أسماءها.", "Colours make our life more beautiful! Let's learn their names.", "Warna menjadikan hidup lebih cantik! Jom belajar namanya.", "Warna membuat hidup lebih indah! Ayo pelajari namanya.", "Les couleurs rendent notre vie plus belle ! Apprenons leurs noms.", "¡Los colores hacen nuestra vida más bella! Aprendamos sus nombres."),
          vocabulary: [
            {
              id: "g1u2l2v1",
              arabic: "أَحْمَرُ",
              transliteration: "aḥmar",
              translation: t("أَحْمَرُ", "red", "merah", "merah", "rouge", "rojo"),
              emoji: "🔴"
            },
            {
              id: "g1u2l2v2",
              arabic: "أَزْرَقُ",
              transliteration: "azraq",
              translation: t("أَزْرَقُ", "blue", "biru", "biru", "bleu", "azul"),
              emoji: "🔵"
            },
            {
              id: "g1u2l2v3",
              arabic: "أَصْفَرُ",
              transliteration: "aṣfar",
              translation: t("أَصْفَرُ", "yellow", "kuning", "kuning", "jaune", "amarillo"),
              emoji: "🟡"
            },
            {
              id: "g1u2l2v4",
              arabic: "أَخْضَرُ",
              transliteration: "akhḍar",
              translation: t("أَخْضَرُ", "green", "hijau", "hijau", "vert", "verde"),
              emoji: "🟢"
            },
            {
              id: "g1u2l2v5",
              arabic: "أَبْيَضُ",
              transliteration: "abyaḍ",
              translation: t("أَبْيَضُ", "white", "putih", "putih", "blanc", "blanco"),
              emoji: "⚪"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g1u2l2e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر اللون الصحيح", "Listen and choose the correct colour", "Dengar dan pilih warna yang betul", "Dengarkan dan pilih warna yang benar", "Écoute et choisis la bonne couleur", "Escucha y elige el color correcto"),
              arabicText: "أَصْفَرُ",
              options: [
                "أَحْمَرُ",
                "أَصْفَرُ",
                "أَزْرَقُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f7e1/512.webp"
            },
            {
              id: "g1u2l2e2",
              type: "mcq",
              skill: "reading",
              prompt: t("ما لون البرتقالة؟", "What colour is an orange?", "Apa warna buah oren?", "Apa warna jeruk?", "De quelle couleur est une orange ?", "¿De qué color es una naranja?"),
              options: [
                "أَزْرَقُ",
                "أَصْفَرُ",
                "أَخْضَرُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f534/512.webp"
            },
            {
              id: "g1u2l2e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قل لون ثلاثة أشياء حولك", "Say the colour of three things around you", "Sebut warna tiga benda di sekeliling anda", "Sebutkan warna tiga benda di sekitarmu", "Dis la couleur de trois choses autour de toi", "Di el color de tres cosas a tu alrededor"),
              arabicText: "قَلَمِي أَحْمَرُ وَكِتَابِي أَزْرَقُ وَحَقِيبَتِي خَضْرَاءُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f534/512.webp"
            },
            {
              id: "g1u2l2e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا أَحْمَرُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f534/512.webp"
            },
            {
              id: "g1u2l2listeng1u2l2v5",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "أَبْيَضُ",
              options: [
                "شِين",
                "أَبْيَضُ",
                "زَهْرَةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26aa/512.webp"
            },
            {
              id: "g1u2l2speakg1u2l2v2",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "أَزْرَقُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f535/512.webp"
            },
            {
              id: "g1u2l2writeg1u2l2v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"أَحْمَرُ\"", "Type the Arabic word for: \"red\"", "Taip perkataan Arab untuk: \"merah\"", "Ketik kata Arab untuk: \"merah\"", "Tape le mot arabe pour : \"rouge\"", "Escribe la palabra árabe para: \"rojo\""),
              arabicText: "أَحْمَرُ",
              answer: "أَحْمَرُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f534/512.webp"
            },
            {
              id: "g1u2l2spellg1u2l2v2",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "أَزْرَقُ",
              answer: "أَزْرَقُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f535/512.webp"
            }
          ]
        },
        {
          id: "g1u2l3",
          unitId: "g1u2",
          gradeId: "g1",
          order: 3,
          title: t("الْحَيَوَانَاتُ", "Animals", "Haiwan", "Hewan", "Les animaux", "Los animales"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("الحيوانات خلق الله الجميل! لنتعلّم أسماء بعضها.", "Animals are God's beautiful creation! Let's learn some of their names.", "Haiwan adalah ciptaan Allah yang indah! Jom belajar nama-namanya.", "Hewan adalah ciptaan Allah yang indah! Ayo pelajari nama-namanya.", "Les animaux sont la belle création de Dieu ! Apprenons leurs noms.", "¡Los animales son la hermosa creación de Dios! Aprendamos sus nombres."),
          vocabulary: [
            {
              id: "g1u2l3v1",
              arabic: "أَسَدٌ",
              transliteration: "asad",
              translation: t("أَسَدٌ", "lion", "singa", "singa", "lion", "león"),
              emoji: "🦁"
            },
            {
              id: "g1u2l3v2",
              arabic: "قِطَّةٌ",
              transliteration: "qiṭṭa",
              translation: t("قِطَّةٌ", "cat", "kucing", "kucing", "chat", "gato"),
              emoji: "🐱"
            },
            {
              id: "g1u2l3v3",
              arabic: "كَلْبٌ",
              transliteration: "kalb",
              translation: t("كَلْبٌ", "dog", "anjing", "anjing", "chien", "perro"),
              emoji: "🐶"
            },
            {
              id: "g1u2l3v4",
              arabic: "طَائِرٌ",
              transliteration: "ṭāʾir",
              translation: t("طَائِرٌ", "bird", "burung", "burung", "oiseau", "pájaro"),
              emoji: "🐦"
            },
            {
              id: "g1u2l3v5",
              arabic: "سَمَكَةٌ",
              transliteration: "samaka",
              translation: t("سَمَكَةٌ", "fish", "ikan", "ikan", "poisson", "pez"),
              emoji: "🐠"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g1u2l3e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الحيوان الصحيح", "Listen and choose the correct animal", "Dengar dan pilih haiwan yang betul", "Dengarkan dan pilih hewan yang benar", "Écoute et choisis le bon animal", "Escucha y elige el animal correcto"),
              arabicText: "قِطَّةٌ",
              options: [
                "أَسَدٌ",
                "قِطَّةٌ",
                "كَلْبٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f431/512.webp"
            },
            {
              id: "g1u2l3e2",
              type: "mcq",
              skill: "reading",
              prompt: t("ما الحيوان الذي يعيش في الماء؟", "Which animal lives in water?", "Haiwan apa yang hidup dalam air?", "Hewan apa yang hidup di air?", "Quel animal vit dans l'eau ?", "¿Qué animal vive en el agua?"),
              options: [
                "أَسَدٌ",
                "سَمَكَةٌ",
                "طَائِرٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f981/512.webp"
            },
            {
              id: "g1u2l3e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قل حيوانك المفضل ولونه", "Say your favourite animal and its colour", "Sebut haiwan kegemaran anda dan warnanya", "Sebutkan hewan favoritmu dan warnanya", "Dis ton animal préféré et sa couleur", "Di tu animal favorito y su color"),
              arabicText: "حَيَوَانِي الْمُفَضَّلُ الْقِطَّةُ وَلَوْنُهَا أَبْيَضُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f981/512.webp"
            },
            {
              id: "g1u2l3e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا أَسَدٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f981/512.webp"
            },
            {
              id: "g1u2l3spellg1u2l3v2",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "قِطَّةٌ",
              answer: "قِطَّةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f431/512.webp"
            },
            {
              id: "g1u2l3spellg1u2l3v1",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "أَسَدٌ",
              answer: "أَسَدٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f981/512.webp"
            },
            {
              id: "g1u2l3mcqg1u2l3v4",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"طَائِرٌ\"؟", "What does \"bird\" mean?", "Apakah maksud \"burung\"?", "Apa arti \"burung\"?", "Que signifie \"oiseau\" ?", "¿Qué significa \"pájaro\"?"),
              arabicText: "طَائِرٌ",
              options: [
                "colour pencils",
                "shirt",
                "bird",
                "camel"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f426/512.webp"
            },
            {
              id: "g1u2l3listeng1u2l3v4",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "طَائِرٌ",
              options: [
                "طَائِرٌ",
                "كَاف",
                "عَشَرَةٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f426/512.webp"
            }
          ]
        },
        {
          id: "g1u2l4",
          unitId: "g1u2",
          gradeId: "g1",
          order: 4,
          title: t("الطَّعَامُ", "Food", "Makanan", "Makanan", "La nourriture", "La comida"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("الطعام يعطينا القوة والنشاط! لنتعلّم أسماء الأطعمة.", "Food gives us strength and energy! Let's learn food names.", "Makanan memberi kita tenaga! Jom belajar nama makanan.", "Makanan memberi kita energi! Ayo pelajari nama makanan.", "La nourriture nous donne force et énergie ! Apprenons les noms des aliments.", "¡La comida nos da fuerza y energía! Aprendamos los nombres de los alimentos."),
          vocabulary: [
            {
              id: "g1u2l4v1",
              arabic: "خُبْزٌ",
              transliteration: "khubz",
              translation: t("خُبْزٌ", "bread", "roti", "roti", "pain", "pan"),
              emoji: "🍞"
            },
            {
              id: "g1u2l4v2",
              arabic: "تُفَّاحَةٌ",
              transliteration: "tuffāḥa",
              translation: t("تُفَّاحَةٌ", "apple", "epal", "apel", "pomme", "manzana"),
              emoji: "🍎"
            },
            {
              id: "g1u2l4v3",
              arabic: "مَوْزَةٌ",
              transliteration: "mawza",
              translation: t("مَوْزَةٌ", "banana", "pisang", "pisang", "banane", "plátano"),
              emoji: "🍌"
            },
            {
              id: "g1u2l4v4",
              arabic: "لَبَنٌ",
              transliteration: "laban",
              translation: t("لَبَنٌ", "milk", "susu", "susu", "lait", "leche"),
              emoji: "🥛"
            },
            {
              id: "g1u2l4v5",
              arabic: "أَرُزٌّ",
              transliteration: "aruzz",
              translation: t("أَرُزٌّ", "rice", "nasi", "nasi", "riz", "arroz"),
              emoji: "🍚"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g1u2l4e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الطعام الصحيح", "Listen and choose the correct food", "Dengar dan pilih makanan yang betul", "Dengarkan dan pilih makanan yang benar", "Écoute et choisis le bon aliment", "Escucha y elige el alimento correcto"),
              arabicText: "مَوْزَةٌ",
              options: [
                "تُفَّاحَةٌ",
                "مَوْزَةٌ",
                "خُبْزٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f34c/512.webp"
            },
            {
              id: "g1u2l4e2",
              type: "mcq",
              skill: "reading",
              prompt: t("ما الطعام الذي نشربه؟", "Which food item do we drink?", "Makanan apa yang kita minum?", "Makanan apa yang kita minum?", "Quel aliment boit-on ?", "¿Qué alimento bebemos?"),
              options: [
                "خُبْزٌ",
                "لَبَنٌ",
                "أَرُزٌّ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f35e/512.webp"
            },
            {
              id: "g1u2l4e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قل طعامك المفضل", "Say your favourite food", "Sebut makanan kegemaran anda", "Sebutkan makanan favoritmu", "Dis ta nourriture préférée", "Di tu comida favorita"),
              arabicText: "طَعَامِي الْمُفَضَّلُ هُوَ الْأَرُزُّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f35e/512.webp"
            },
            {
              id: "g1u2l4e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا خُبْزٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f35e/512.webp"
            },
            {
              id: "g1u2l4writeg1u2l4v3",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"مَوْزَةٌ\"", "Type the Arabic word for: \"banana\"", "Taip perkataan Arab untuk: \"pisang\"", "Ketik kata Arab untuk: \"pisang\"", "Tape le mot arabe pour : \"banane\"", "Escribe la palabra árabe para: \"plátano\""),
              arabicText: "مَوْزَةٌ",
              answer: "مَوْزَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f34c/512.webp"
            },
            {
              id: "g1u2l4listeng1u2l4v1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "خُبْزٌ",
              options: [
                "بِخَيْرٍ",
                "خُبْزٌ",
                "شَمْسٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f35e/512.webp"
            },
            {
              id: "g1u2l4listeng1u2l4v4",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "لَبَنٌ",
              options: [
                "أَرْبَعَةٌ",
                "خَاء",
                "لَبَنٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f95b/512.webp"
            },
            {
              id: "g1u2l4spellg1u2l4v1",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "خُبْزٌ",
              answer: "خُبْزٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f35e/512.webp"
            }
          ]
        },
        {
          id: "g1u2l5",
          unitId: "g1u2",
          gradeId: "g1",
          order: 5,
          title: t("أَعْضَاءُ الْجِسْمِ", "Body Parts", "Anggota Badan", "Anggota Tubuh", "Les parties du corps", "Las partes del cuerpo"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("جسمنا نعمة! لنتعلّم أسماء أجزائه.", "Our body is a blessing! Let's learn its parts.", "Badan kita adalah nikmat! Jom belajar nama bahagiannya.", "Tubuh kita adalah nikmat! Ayo pelajari nama-nama bagiannya.", "Notre corps est une bénédiction ! Apprenons ses parties.", "¡Nuestro cuerpo es una bendición! Aprendamos sus partes."),
          vocabulary: [
            {
              id: "g1u2l5v1",
              arabic: "رَأْسٌ",
              transliteration: "raʾs",
              translation: t("رَأْسٌ", "head", "kepala", "kepala", "tête", "cabeza"),
              emoji: "🗣️"
            },
            {
              id: "g1u2l5v2",
              arabic: "يَدٌ",
              transliteration: "yad",
              translation: t("يَدٌ", "hand", "tangan", "tangan", "main", "mano"),
              emoji: "✋"
            },
            {
              id: "g1u2l5v3",
              arabic: "رِجْلٌ",
              transliteration: "rijl",
              translation: t("رِجْلٌ", "leg", "kaki", "kaki", "jambe", "pierna"),
              emoji: "🦵"
            },
            {
              id: "g1u2l5v4",
              arabic: "عَيْنٌ",
              transliteration: "ʿayn",
              translation: t("عَيْنٌ", "eye", "mata", "mata", "œil", "ojo"),
              emoji: "👁️"
            },
            {
              id: "g1u2l5v5",
              arabic: "أَنْفٌ",
              transliteration: "anf",
              translation: t("أَنْفٌ", "nose", "hidung", "hidung", "nez", "nariz"),
              emoji: "👃"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g1u2l5e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر العضو الصحيح", "Listen and choose the correct body part", "Dengar dan pilih anggota badan yang betul", "Dengarkan dan pilih anggota tubuh yang benar", "Écoute et choisis la bonne partie du corps", "Escucha y elige la parte del cuerpo correcta"),
              arabicText: "أَنْفٌ",
              options: [
                "عَيْنٌ",
                "أَنْفٌ",
                "يَدٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f443/512.webp"
            },
            {
              id: "g1u2l5e2",
              type: "mcq",
              skill: "reading",
              prompt: t("بماذا نرى؟", "What do we see with?", "Dengan apa kita melihat?", "Dengan apa kita melihat?", "Avec quoi voit-on ?", "¿Con qué vemos?"),
              options: [
                "بِالْأَنْفِ",
                "بِالْعَيْنِ",
                "بِالْيَدِ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f5e3-fe0f/512.webp"
            },
            {
              id: "g1u2l5e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("أشر إلى ثلاثة أعضاء وسمِّها", "Point to three body parts and name them", "Tunjuk tiga anggota badan dan namakan", "Tunjuk tiga anggota tubuh dan sebutkan", "Montre trois parties du corps et nomme-les", "Señala tres partes del cuerpo y nómbralas"),
              arabicText: "هَذِهِ عَيْنِي وَهَذَا أَنْفِي وَهَذِهِ يَدِي",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f5e3-fe0f/512.webp"
            },
            {
              id: "g1u2l5e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا رَأْسٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f5e3-fe0f/512.webp"
            },
            {
              id: "g1u2l5writeg1u2l5v3",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"رِجْلٌ\"", "Type the Arabic word for: \"leg\"", "Taip perkataan Arab untuk: \"kaki\"", "Ketik kata Arab untuk: \"kaki\"", "Tape le mot arabe pour : \"jambe\"", "Escribe la palabra árabe para: \"pierna\""),
              arabicText: "رِجْلٌ",
              answer: "رِجْلٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9b5/512.webp"
            },
            {
              id: "g1u2l5speakg1u2l5v1",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "رَأْسٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f5e3-fe0f/512.webp"
            },
            {
              id: "g1u2l5writeg1u2l5v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"رَأْسٌ\"", "Type the Arabic word for: \"head\"", "Taip perkataan Arab untuk: \"kepala\"", "Ketik kata Arab untuk: \"kepala\"", "Tape le mot arabe pour : \"tête\"", "Escribe la palabra árabe para: \"cabeza\""),
              arabicText: "رَأْسٌ",
              answer: "رَأْسٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f5e3-fe0f/512.webp"
            },
            {
              id: "g1u2l5listeng1u2l5v5",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "أَنْفٌ",
              options: [
                "صَمْغٌ",
                "أَنْفٌ",
                "وَعَلَيْكُمُ السَّلَامُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f443/512.webp"
            }
          ]
        },
        {
          id: "g1u2l6",
          unitId: "g1u2",
          gradeId: "g1",
          order: 6,
          title: t("الطَّبِيعَةُ", "Nature", "Alam Semula Jadi", "Alam", "La nature", "La naturaleza"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("الطبيعة جميلة وتملؤنا بالسعادة! لنتعلّم كلماتها.", "Nature is beautiful and fills us with happiness! Let's learn its words.", "Alam semula jadi indah dan memenuhi kita dengan kegembiraan! Jom belajar katanya.", "Alam indah dan memenuhi kita dengan kebahagiaan! Ayo pelajari katanya.", "La nature est belle et nous remplit de bonheur ! Apprenons ses mots.", "¡La naturaleza es hermosa y nos llena de felicidad! Aprendamos sus palabras."),
          vocabulary: [
            {
              id: "g1u2l6v1",
              arabic: "شَمْسٌ",
              transliteration: "shams",
              translation: t("شَمْسٌ", "sun", "matahari", "matahari", "soleil", "sol"),
              emoji: "☀️"
            },
            {
              id: "g1u2l6v2",
              arabic: "قَمَرٌ",
              transliteration: "qamar",
              translation: t("قَمَرٌ", "moon", "bulan", "bulan", "lune", "luna"),
              emoji: "🌙"
            },
            {
              id: "g1u2l6v3",
              arabic: "نَجْمٌ",
              transliteration: "najm",
              translation: t("نَجْمٌ", "star", "bintang", "bintang", "étoile", "estrella"),
              emoji: "⭐"
            },
            {
              id: "g1u2l6v4",
              arabic: "شَجَرَةٌ",
              transliteration: "shajara",
              translation: t("شَجَرَةٌ", "tree", "pokok", "pohon", "arbre", "árbol"),
              emoji: "🌳"
            },
            {
              id: "g1u2l6v5",
              arabic: "زَهْرَةٌ",
              transliteration: "zahra",
              translation: t("زَهْرَةٌ", "flower", "bunga", "bunga", "fleur", "flor"),
              emoji: "🌸"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g1u2l6e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "نَجْمٌ",
              options: [
                "قَمَرٌ",
                "نَجْمٌ",
                "شَمْسٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2b50/512.webp"
            },
            {
              id: "g1u2l6e2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا نرى في السماء ليلًا؟", "What do we see in the sky at night?", "Apa yang kita lihat di langit waktu malam?", "Apa yang kita lihat di langit waktu malam?", "Que voit-on dans le ciel la nuit ?", "¿Qué vemos en el cielo de noche?"),
              options: [
                "الشَّمْسَ",
                "الْقَمَرَ وَالنُّجُومَ",
                "الزَّهْرَةَ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2600-fe0f/512.webp"
            },
            {
              id: "g1u2l6e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قل ما تراه في السماء", "Say what you see in the sky", "Sebut apa yang anda lihat di langit", "Sebutkan apa yang kamu lihat di langit", "Dis ce que tu vois dans le ciel", "Di qué ves en el cielo"),
              arabicText: "أَرَى فِي السَّمَاءِ شَمْسًا وَقَمَرًا وَنُجُومًا",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2600-fe0f/512.webp"
            },
            {
              id: "g1u2l6e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا شَمْسٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2600-fe0f/512.webp"
            },
            {
              id: "g1u2l6mcqg1u2l6v3",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"نَجْمٌ\"؟", "What does \"star\" mean?", "Apakah maksud \"bintang\"?", "Apa arti \"bintang\"?", "Que signifie \"étoile\" ?", "¿Qué significa \"estrella\"?"),
              arabicText: "نَجْمٌ",
              options: [
                "lion",
                "book",
                "star",
                "I am fine"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2b50/512.webp"
            },
            {
              id: "g1u2l6spellg1u2l6v2",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "قَمَرٌ",
              answer: "قَمَرٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f319/512.webp"
            },
            {
              id: "g1u2l6mcqg1u2l6v5",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"زَهْرَةٌ\"؟", "What does \"flower\" mean?", "Apakah maksud \"bunga\"?", "Apa arti \"bunga\"?", "Que signifie \"fleur\" ?", "¿Qué significa \"flor\"?"),
              arabicText: "زَهْرَةٌ",
              options: [
                "flower",
                "Ta (T)",
                "shoe",
                "eye"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f338/512.webp"
            },
            {
              id: "g1u2l6writeg1u2l6v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"شَمْسٌ\"", "Type the Arabic word for: \"sun\"", "Taip perkataan Arab untuk: \"matahari\"", "Ketik kata Arab untuk: \"matahari\"", "Tape le mot arabe pour : \"soleil\"", "Escribe la palabra árabe para: \"sol\""),
              arabicText: "شَمْسٌ",
              answer: "شَمْسٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2600-fe0f/512.webp"
            }
          ]
        },
        {
          id: "g1u2l7",
          unitId: "g1u2",
          gradeId: "g1",
          order: 7,
          title: t("الْمَلَابِسُ", "Clothes", "Pakaian", "Pakaian", "Les vêtements", "La ropa"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("الملابس تحمينا وتجعلنا نبدو حسنًا! لنتعلّم أسماءها.", "Clothes protect us and make us look good! Let's learn their names.", "Pakaian melindungi kita dan menjadikan kita kelihatan kemas! Jom belajar namanya.", "Pakaian melindungi kita dan membuat kita terlihat baik! Ayo pelajari namanya.", "Les vêtements nous protègent et nous font paraître bien ! Apprenons leurs noms.", "¡La ropa nos protege y nos hace lucir bien! Aprendamos sus nombres."),
          vocabulary: [
            {
              id: "g1u2l7v1",
              arabic: "قَمِيصٌ",
              transliteration: "qamīṣ",
              translation: t("قَمِيصٌ", "shirt", "baju", "kemeja", "chemise", "camisa"),
              emoji: "👕"
            },
            {
              id: "g1u2l7v2",
              arabic: "بَنْطَلُونٌ",
              transliteration: "banṭalūn",
              translation: t("بَنْطَلُونٌ", "trousers", "seluar", "celana", "pantalon", "pantalón"),
              emoji: "👖"
            },
            {
              id: "g1u2l7v3",
              arabic: "حِذَاءٌ",
              transliteration: "ḥidhāʾ",
              translation: t("حِذَاءٌ", "shoe", "kasut", "sepatu", "chaussure", "zapato"),
              emoji: "👟"
            },
            {
              id: "g1u2l7v4",
              arabic: "قُبَّعَةٌ",
              transliteration: "qubbaʿa",
              translation: t("قُبَّعَةٌ", "hat", "topi", "topi", "chapeau", "sombrero"),
              emoji: "🧢"
            },
            {
              id: "g1u2l7v5",
              arabic: "جَوْرَبٌ",
              transliteration: "jawrab",
              translation: t("جَوْرَبٌ", "sock", "stokin", "kaus kaki", "chaussette", "calcetín"),
              emoji: "🧦"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g1u2l7e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الملبس الصحيح", "Listen and choose the correct clothing", "Dengar dan pilih pakaian yang betul", "Dengarkan dan pilih pakaian yang benar", "Écoute et choisis le bon vêtement", "Escucha y elige la prenda correcta"),
              arabicText: "قُبَّعَةٌ",
              options: [
                "قَمِيصٌ",
                "قُبَّعَةٌ",
                "حِذَاءٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9e2/512.webp"
            },
            {
              id: "g1u2l7e2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا نلبس في قدمينا؟", "What do we wear on our feet?", "Apa yang kita pakai di kaki?", "Apa yang kita kenakan di kaki?", "Que met-on à ses pieds ?", "¿Qué ponemos en los pies?"),
              options: [
                "قُبَّعَةً",
                "قَمِيصًا",
                "حِذَاءً وَجَوْرَبًا"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f455/512.webp"
            },
            {
              id: "g1u2l7e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قل ما ترتديه اليوم", "Say what you are wearing today", "Sebut apa yang anda pakai hari ini", "Sebutkan apa yang kamu kenakan hari ini", "Dis ce que tu portes aujourd'hui", "Di qué llevas puesto hoy"),
              arabicText: "أَرْتَدِي الْيَوْمَ قَمِيصًا أَخْضَرَ وَبَنْطَلُونًا أَزْرَقَ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f455/512.webp"
            },
            {
              id: "g1u2l7e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا قَمِيصٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f455/512.webp"
            },
            {
              id: "g1u2l7speakg1u2l7v4",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "قُبَّعَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9e2/512.webp"
            },
            {
              id: "g1u2l7spellg1u2l7v5",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "جَوْرَبٌ",
              answer: "جَوْرَبٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9e6/512.webp"
            },
            {
              id: "g1u2l7speakg1u2l7v3",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "حِذَاءٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f45f/512.webp"
            },
            {
              id: "g1u2l7listeng1u2l7v3",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "حِذَاءٌ",
              options: [
                "حِذَاءٌ",
                "دَال",
                "عَيْنٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f45f/512.webp"
            }
          ]
        },
        {
          id: "g1u2l8",
          unitId: "g1u2",
          gradeId: "g1",
          order: 8,
          title: t("أَدَوَاتُ الْمَدْرَسَةِ", "School Tools", "Alatan Sekolah", "Alat Sekolah", "Les fournitures scolaires", "Los útiles escolares"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("أدوات المدرسة تساعدنا في التعلم! لنتعلّم أسماءها.", "School tools help us learn! Let's learn their names.", "Alatan sekolah membantu kita belajar! Jom belajar namanya.", "Alat sekolah membantu kita belajar! Ayo pelajari namanya.", "Les fournitures scolaires nous aident à apprendre ! Apprenons leurs noms.", "¡Los útiles escolares nos ayudan a aprender! Aprendamos sus nombres."),
          vocabulary: [
            {
              id: "g1u2l8v1",
              arabic: "مِقَصٌّ",
              transliteration: "miqaṣṣ",
              translation: t("مِقَصٌّ", "scissors", "gunting", "gunting", "ciseaux", "tijeras"),
              emoji: "✂️"
            },
            {
              id: "g1u2l8v2",
              arabic: "مِسْطَرَةٌ",
              transliteration: "misṭara",
              translation: t("مِسْطَرَةٌ", "ruler", "pembaris", "penggaris", "règle", "regla"),
              emoji: "📏"
            },
            {
              id: "g1u2l8v3",
              arabic: "صَمْغٌ",
              transliteration: "ṣamgh",
              translation: t("صَمْغٌ", "glue", "gam", "lem", "colle", "pegamento"),
              emoji: "🖊️"
            },
            {
              id: "g1u2l8v4",
              arabic: "أَلْوَانٌ",
              transliteration: "alwān",
              translation: t("أَلْوَانٌ", "colour pencils", "pensel warna", "pensil warna", "crayons de couleur", "lápices de colores"),
              emoji: "🖍️"
            },
            {
              id: "g1u2l8v5",
              arabic: "دَفْتَرٌ",
              transliteration: "daftar",
              translation: t("دَفْتَرٌ", "notebook", "buku nota", "buku catatan", "cahier", "cuaderno"),
              emoji: "📓"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g1u2l8e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الأداة الصحيحة", "Listen and choose the correct tool", "Dengar dan pilih alatan yang betul", "Dengarkan dan pilih alat yang benar", "Écoute et choisis le bon outil", "Escucha y elige el útil correcto"),
              arabicText: "مِسْطَرَةٌ",
              options: [
                "مِقَصٌّ",
                "مِسْطَرَةٌ",
                "صَمْغٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4cf/512.webp"
            },
            {
              id: "g1u2l8e2",
              type: "mcq",
              skill: "reading",
              prompt: t("بماذا نقطع الورق؟", "What do we use to cut paper?", "Apa yang kita gunakan untuk memotong kertas?", "Apa yang kita gunakan untuk memotong kertas?", "Avec quoi coupe-t-on le papier ?", "¿Con qué cortamos el papel?"),
              options: [
                "بِالصَّمْغِ",
                "بِالْمِقَصِّ",
                "بِالدَّفْتَرِ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2702-fe0f/512.webp"
            },
            {
              id: "g1u2l8e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("سمِّ ثلاث أدوات في حقيبتك", "Name three tools in your bag", "Namakan tiga alatan dalam beg anda", "Sebutkan tiga alat dalam tasmu", "Nomme trois outils dans ton sac", "Nombra tres útiles en tu mochila"),
              arabicText: "فِي حَقِيبَتِي مِسْطَرَةٌ وَمِقَصٌّ وَأَلْوَانٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2702-fe0f/512.webp"
            },
            {
              id: "g1u2l8e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا مِقَصٌّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2702-fe0f/512.webp"
            },
            {
              id: "g1u2l8writeg1u2l8v4",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"أَلْوَانٌ\"", "Type the Arabic word for: \"colour pencils\"", "Taip perkataan Arab untuk: \"pensel warna\"", "Ketik kata Arab untuk: \"pensil warna\"", "Tape le mot arabe pour : \"crayons de couleur\"", "Escribe la palabra árabe para: \"lápices de colores\""),
              arabicText: "أَلْوَانٌ",
              answer: "أَلْوَانٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f58d-fe0f/512.webp"
            },
            {
              id: "g1u2l8speakg1u2l8v2",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "مِسْطَرَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4cf/512.webp"
            },
            {
              id: "g1u2l8mcqg1u2l8v5",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"دَفْتَرٌ\"؟", "What does \"notebook\" mean?", "Apakah maksud \"buku nota\"?", "Apa arti \"buku catatan\"?", "Que signifie \"cahier\" ?", "¿Qué significa \"cuaderno\"?"),
              arabicText: "دَفْتَرٌ",
              options: [
                "Dad (D)",
                "tree",
                "sock",
                "notebook"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4d3/512.webp"
            },
            {
              id: "g1u2l8listeng1u2l8v4",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "أَلْوَانٌ",
              options: [
                "عَفْوًا",
                "شَجَرَةٌ",
                "أَلْوَانٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f58d-fe0f/512.webp"
            }
          ]
        },
        {
          id: "g1u2review",
          unitId: "g1u2",
          gradeId: "g1",
          order: 9,
          title: t("مراجعة الوحدة", "Unit Review", "Ulangan Unit", "Ulangan Unit", "Révision de l’unité", "Revisión de la unidad"),
          skills: [
            "listening",
            "reading",
            "writing"
          ],
          intro: t("لنراجع ما تعلّمناه في هذه الوحدة!", "Let’s review what we learned in this unit!", "Mari ulangkaji apa yang kita pelajari dalam unit ini!", "Mari kita ulang apa yang kita pelajari dalam unit ini!", "Révisons ce que nous avons appris dans cette unité !", "¡Repasemos lo que aprendimos en esta unidad!"),
          vocabulary: [
            {
              id: "g1u2l1v1",
              arabic: "كِتَابٌ",
              transliteration: "kitāb",
              translation: t("كِتَابٌ", "book", "buku", "buku", "livre", "libro"),
              emoji: "📚"
            },
            {
              id: "g1u2l1v2",
              arabic: "قَلَمٌ",
              transliteration: "qalam",
              translation: t("قَلَمٌ", "pen", "pen", "pena", "stylo", "bolígrafo"),
              emoji: "✏️"
            },
            {
              id: "g1u2l1v3",
              arabic: "كُرَةٌ",
              transliteration: "kura",
              translation: t("كُرَةٌ", "ball", "bola", "bola", "balle", "pelota"),
              emoji: "⚽"
            },
            {
              id: "g1u2l1v4",
              arabic: "حَقِيبَةٌ",
              transliteration: "ḥaqība",
              translation: t("حَقِيبَةٌ", "bag", "beg", "tas", "sac", "bolso"),
              emoji: "🎒"
            },
            {
              id: "g1u2l1v5",
              arabic: "طَاوِلَةٌ",
              transliteration: "ṭāwila",
              translation: t("طَاوِلَةٌ", "table", "meja", "meja", "table", "mesa"),
              emoji: "🪑"
            },
            {
              id: "g1u2l2v1",
              arabic: "أَحْمَرُ",
              transliteration: "aḥmar",
              translation: t("أَحْمَرُ", "red", "merah", "merah", "rouge", "rojo"),
              emoji: "🔴"
            },
            {
              id: "g1u2l2v2",
              arabic: "أَزْرَقُ",
              transliteration: "azraq",
              translation: t("أَزْرَقُ", "blue", "biru", "biru", "bleu", "azul"),
              emoji: "🔵"
            },
            {
              id: "g1u2l2v3",
              arabic: "أَصْفَرُ",
              transliteration: "aṣfar",
              translation: t("أَصْفَرُ", "yellow", "kuning", "kuning", "jaune", "amarillo"),
              emoji: "🟡"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g1u2reviewlisteng1u2l2v2",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "أَزْرَقُ",
              options: [
                "رَأْسٌ",
                "قُبَّعَةٌ",
                "أَزْرَقُ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f535/512.webp"
            },
            {
              id: "g1u2reviewmcqg1u2l1v4",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"حَقِيبَةٌ\"؟", "What does \"bag\" mean?", "Apakah maksud \"beg\"?", "Apa arti \"tas\"?", "Que signifie \"sac\" ?", "¿Qué significa \"bolso\"?"),
              arabicText: "حَقِيبَةٌ",
              options: [
                "camel",
                "colour pencils",
                "bag",
                "sock"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f392/512.webp"
            },
            {
              id: "g1u2reviewmcqg1u2l1v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"كِتَابٌ\"؟", "What does \"book\" mean?", "Apakah maksud \"buku\"?", "Apa arti \"buku\"?", "Que signifie \"livre\" ?", "¿Qué significa \"libro\"?"),
              arabicText: "كِتَابٌ",
              options: [
                "Zay (Z)",
                "book",
                "Ain (')",
                "dog"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp"
            },
            {
              id: "g1u2reviewspeakg1u2l1v2",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "قَلَمٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/270f-fe0f/512.webp"
            },
            {
              id: "g1u2reviewspeakg1u2l1v5",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "طَاوِلَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1fa91/512.webp"
            },
            {
              id: "g1u2reviewspeakg1u2l2v2",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "أَزْرَقُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f535/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "g1u3",
      gradeId: "g1",
      order: 3,
      title: t("التَّحِيَّاتُ", "Greetings", "Ucapan Salam", "Salam", "Les salutations", "Los saludos"),
      theme: "greetings",
      lessons: [
        {
          id: "g1u3l1",
          unitId: "g1u3",
          gradeId: "g1",
          order: 1,
          title: t("السَّلَامُ عَلَيْكُمْ", "Peace Be Upon You", "Assalamualaikum", "Assalamualaikum", "Assalamou alaykoum", "La paz sea contigo"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("التحية أول خطوة في التعارف! لنتعلّم كيف نسلّم.", "Greeting is the first step in getting acquainted! Let's learn how to say hello.", "Ucapan salam adalah langkah pertama berkenalan! Jom belajar cara memberi salam.", "Salam adalah langkah pertama berkenalan! Ayo pelajari cara memberi salam.", "La salutation est la première étape pour faire connaissance ! Apprenons à saluer.", "¡El saludo es el primer paso para conocerse! Aprendamos a saludar."),
          vocabulary: [
            {
              id: "g1u3l1v1",
              arabic: "السَّلَامُ عَلَيْكُمْ",
              transliteration: "as-salāmu ʿalaykum",
              translation: t("السَّلَامُ عَلَيْكُمْ", "Peace be upon you", "Assalamualaikum", "Assalamualaikum", "Assalamou alaykoum", "La paz sea contigo"),
              emoji: "🤝"
            },
            {
              id: "g1u3l1v2",
              arabic: "وَعَلَيْكُمُ السَّلَامُ",
              transliteration: "wa-ʿalaykumu s-salām",
              translation: t("وَعَلَيْكُمُ السَّلَامُ", "And upon you peace", "Wa'alaikumsalam", "Wa'alaikumsalam", "Wa alaykoumou ssalam", "Y la paz sea contigo"),
              emoji: "😊"
            },
            {
              id: "g1u3l1v3",
              arabic: "أَهْلًا وَسَهْلًا",
              transliteration: "ahlan wa-sahlan",
              translation: t("أَهْلًا وَسَهْلًا", "Welcome", "Selamat datang", "Selamat datang", "Bienvenue", "Bienvenido"),
              emoji: "👋"
            },
            {
              id: "g1u3l1v4",
              arabic: "مَرْحَبًا",
              transliteration: "marḥaban",
              translation: t("مَرْحَبًا", "Hello", "Hai/Helo", "Halo", "Bonjour", "Hola"),
              emoji: "🙋"
            },
            {
              id: "g1u3l1v5",
              arabic: "صَبَاحُ الْخَيْرِ",
              transliteration: "ṣabāḥu l-khayr",
              translation: t("صَبَاحُ الْخَيْرِ", "Good morning", "Selamat pagi", "Selamat pagi", "Bonjour", "Buenos días"),
              emoji: "🌅"
            }
          ],
          dialogue: [
            {
              speaker: "أَحْمَد",
              arabic: "السَّلَامُ عَلَيْكُمْ!",
              translation: t("السَّلَامُ عَلَيْكُمْ!", "Peace be upon you!", "Assalamualaikum!", "Assalamualaikum!", "Assalamou alaykoum !", "¡La paz sea contigo!")
            },
            {
              speaker: "مَرْيَم",
              arabic: "وَعَلَيْكُمُ السَّلَامُ! أَهْلًا يَا أَحْمَد!",
              translation: t("وَعَلَيْكُمُ السَّلَامُ! أَهْلًا يَا أَحْمَد!", "And upon you peace! Welcome Ahmed!", "Wa'alaikumsalam! Selamat datang Ahmad!", "Wa'alaikumsalam! Selamat datang Ahmad!", "Wa alaykoumou ssalam ! Bienvenue Ahmed !", "¡Y la paz sea contigo! ¡Bienvenido Ahmed!")
            }
          ],
          exercises: [
            {
              id: "g1u3l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر التحية الصحيحة", "Listen and choose the correct greeting", "Dengar dan pilih ucapan salam yang betul", "Dengarkan dan pilih salam yang benar", "Écoute et choisis la bonne salutation", "Escucha y elige el saludo correcto"),
              arabicText: "مَرْحَبًا",
              options: [
                "صَبَاحُ الْخَيْرِ",
                "مَرْحَبًا",
                "أَهْلًا وَسَهْلًا"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f64b/512.webp"
            },
            {
              id: "g1u3l1e2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا نقول صباحًا عند اللقاء؟", "What do we say in the morning when we meet?", "Apa yang kita ucapkan di pagi hari ketika bertemu?", "Apa yang kita ucapkan di pagi hari saat bertemu?", "Que dit-on le matin quand on se rencontre ?", "¿Qué decimos por la mañana al encontrarnos?"),
              options: [
                "مَسَاءُ الْخَيْرِ",
                "صَبَاحُ الْخَيْرِ",
                "تُصْبِحُ عَلَى خَيْرٍ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "g1u3l1e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("سلّم على زميلك بالعربية", "Greet your classmate in Arabic", "Beri salam kepada rakan anda dalam bahasa Arab", "Beri salam kepada temanmu dalam bahasa Arab", "Salue ton camarade en arabe", "Saluda a tu compañero en árabe"),
              arabicText: "السَّلَامُ عَلَيْكُمْ! صَبَاحُ الْخَيْرِ يَا صَدِيقِي!",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "g1u3l1e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "السَّلَامُ عَلَيْكُمْ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "g1u3l1spellg1u3l1v2",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "وَعَلَيْكُمُ السَّلَامُ",
              answer: "وَعَلَيْكُمُ السَّلَامُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60a/512.webp"
            },
            {
              id: "g1u3l1spellg1u3l1v1",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "السَّلَامُ عَلَيْكُمْ",
              answer: "السَّلَامُ عَلَيْكُمْ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "g1u3l1speakg1u3l1v3",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "أَهْلًا وَسَهْلًا",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp"
            },
            {
              id: "g1u3l1speakg1u3l1v1",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "السَّلَامُ عَلَيْكُمْ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            }
          ]
        },
        {
          id: "g1u3l2",
          unitId: "g1u3",
          gradeId: "g1",
          order: 2,
          title: t("كَيْفَ حَالُكَ؟", "How Are You?", "Apa Khabar?", "Apa Kabar?", "Comment vas-tu ?", "¿Cómo estás?"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("السؤال عن الحال من حسن الأخلاق! لنتعلّم كيف نسأل.", "Asking how someone is shows good manners! Let's learn how to ask.", "Bertanya khabar adalah budi pekerti yang baik! Jom belajar cara bertanya.", "Menanyakan kabar adalah budi pekerti yang baik! Ayo pelajari cara bertanya.", "Demander comment ça va est un signe de bonnes manières ! Apprenons à demander.", "¡Preguntar cómo estás muestra buenos modales! Aprendamos a preguntar."),
          vocabulary: [
            {
              id: "g1u3l2v1",
              arabic: "كَيْفَ حَالُكَ؟",
              transliteration: "kayfa ḥāluk?",
              translation: t("كَيْفَ حَالُكَ؟", "How are you?", "Apa khabar?", "Apa kabar?", "Comment vas-tu ?", "¿Cómo estás?"),
              emoji: "🙂"
            },
            {
              id: "g1u3l2v2",
              arabic: "بِخَيْرٍ",
              transliteration: "bi-khayr",
              translation: t("بِخَيْرٍ", "I am fine", "Baik", "Baik", "Je vais bien", "Estoy bien"),
              emoji: "😊"
            },
            {
              id: "g1u3l2v3",
              arabic: "الْحَمْدُ لِلَّهِ",
              transliteration: "al-ḥamdu lillāh",
              translation: t("الْحَمْدُ لِلَّهِ", "Praise God / Thank God", "Alhamdulillah", "Alhamdulillah", "Louange à Dieu", "Alabado sea Dios"),
              emoji: "🙏"
            },
            {
              id: "g1u3l2v4",
              arabic: "شُكْرًا",
              transliteration: "shukran",
              translation: t("شُكْرًا", "Thank you", "Terima kasih", "Terima kasih", "Merci", "Gracias"),
              emoji: "🤝"
            },
            {
              id: "g1u3l2v5",
              arabic: "عَفْوًا",
              transliteration: "ʿafwan",
              translation: t("عَفْوًا", "You're welcome / Sorry", "Sama-sama / Maaf", "Sama-sama / Maaf", "De rien / Pardon", "De nada / Perdón"),
              emoji: "🤲"
            }
          ],
          dialogue: [
            {
              speaker: "يُوسُفُ",
              arabic: "كَيْفَ حَالُكَ يَا زَيْنَب؟",
              translation: t("كَيْفَ حَالُكَ يَا زَيْنَب؟", "How are you, Zainab?", "Apa khabar kamu, Zainab?", "Apa kabar kamu, Zainab?", "Comment vas-tu, Zainab ?", "¿Cómo estás, Zainab?")
            },
            {
              speaker: "زَيْنَب",
              arabic: "بِخَيْرٍ الْحَمْدُ لِلَّهِ، وَأَنْتَ؟",
              translation: t("بِخَيْرٍ الْحَمْدُ لِلَّهِ، وَأَنْتَ؟", "I am fine, praise God. And you?", "Baik alhamdulillah, kamu bagaimana?", "Baik alhamdulillah, bagaimana kamu?", "Je vais bien, Dieu merci, et toi ?", "Estoy bien, gracias a Dios, ¿y tú?")
            }
          ],
          exercises: [
            {
              id: "g1u3l2e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الإجابة الصحيحة", "Listen and choose the correct answer", "Dengar dan pilih jawapan yang betul", "Dengarkan dan pilih jawaban yang benar", "Écoute et choisis la bonne réponse", "Escucha y elige la respuesta correcta"),
              arabicText: "بِخَيْرٍ",
              options: [
                "شُكْرًا",
                "بِخَيْرٍ",
                "عَفْوًا"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60a/512.webp"
            },
            {
              id: "g1u3l2e2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا نقول عندما يشكرنا أحد؟", "What do we say when someone thanks us?", "Apa yang kita ucapkan ketika seseorang berterima kasih?", "Apa yang kita ucapkan ketika seseorang berterima kasih?", "Que dit-on quand quelqu'un nous remercie ?", "¿Qué decimos cuando alguien nos agradece?"),
              options: [
                "شُكْرًا",
                "عَفْوًا",
                "مَرْحَبًا"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f642/512.webp"
            },
            {
              id: "g1u3l2e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("اسأل زميلك عن حاله وردّ عليه", "Ask your classmate how they are and reply", "Tanya rakan anda tentang khabarnya dan balas", "Tanya temanmu tentang kabarnya dan balas", "Demande à ton camarade comment il va et réponds", "Pregunta a tu compañero cómo está y responde"),
              arabicText: "كَيْفَ حَالُكَ؟ بِخَيْرٍ الْحَمْدُ لِلَّهِ، شُكْرًا!",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f642/512.webp"
            },
            {
              id: "g1u3l2e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "كَيْفَ حَالُكَ يَا زَيْنَب",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f642/512.webp"
            },
            {
              id: "g1u3l2spellg1u3l2v5",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "عَفْوًا",
              answer: "عَفْوًا",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f932/512.webp"
            },
            {
              id: "g1u3l2speakg1u3l2v1",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "كَيْفَ حَالُكَ؟",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f642/512.webp"
            },
            {
              id: "g1u3l2spellg1u3l2v2",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "بِخَيْرٍ",
              answer: "بِخَيْرٍ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60a/512.webp"
            },
            {
              id: "g1u3l2writeg1u3l2v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"كَيْفَ حَالُكَ؟\"", "Type the Arabic word for: \"How are you?\"", "Taip perkataan Arab untuk: \"Apa khabar?\"", "Ketik kata Arab untuk: \"Apa kabar?\"", "Tape le mot arabe pour : \"Comment vas-tu ?\"", "Escribe la palabra árabe para: \"¿Cómo estás?\""),
              arabicText: "كَيْفَ حَالُكَ؟",
              answer: "كَيْفَ حَالُكَ؟",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f642/512.webp"
            }
          ]
        },
        {
          id: "g1u3l3",
          unitId: "g1u3",
          gradeId: "g1",
          order: 3,
          title: t("مَعَ السَّلَامَةِ", "Goodbye", "Selamat Tinggal", "Selamat Tinggal", "Au revoir", "Adiós"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("الوداع آخر لقاء! لنتعلّم كيف نودّع بأجمل الكلمات.", "Farewell is the last meeting! Let's learn how to say goodbye with the most beautiful words.", "Perpisahan adalah pertemuan terakhir! Jom belajar cara berpisah dengan kata-kata indah.", "Perpisahan adalah pertemuan terakhir! Ayo pelajari cara berpisah dengan kata-kata indah.", "L'au revoir est la dernière rencontre ! Apprenons à dire au revoir avec les plus beaux mots.", "¡La despedida es el último encuentro! Aprendamos a decir adiós con las palabras más hermosas."),
          vocabulary: [
            {
              id: "g1u3l3v1",
              arabic: "مَعَ السَّلَامَةِ",
              transliteration: "maʿa s-salāma",
              translation: t("مَعَ السَّلَامَةِ", "Goodbye (go safely)", "Selamat tinggal", "Selamat tinggal", "Au revoir", "Adiós"),
              emoji: "👋"
            },
            {
              id: "g1u3l3v2",
              arabic: "إِلَى اللِّقَاءِ",
              transliteration: "ilā l-liqāʾ",
              translation: t("إِلَى اللِّقَاءِ", "See you again", "Jumpa lagi", "Sampai jumpa", "À bientôt", "Hasta la vista"),
              emoji: "🙋"
            },
            {
              id: "g1u3l3v3",
              arabic: "تُصْبِحُ عَلَى خَيْرٍ",
              transliteration: "tuṣbiḥu ʿalā khayr",
              translation: t("تُصْبِحُ عَلَى خَيْرٍ", "Good night", "Selamat malam", "Selamat malam", "Bonne nuit", "Buenas noches"),
              emoji: "🌙"
            },
            {
              id: "g1u3l3v4",
              arabic: "نَرَاكَ غَدًا",
              transliteration: "narāka ghadan",
              translation: t("نَرَاكَ غَدًا", "See you tomorrow", "Jumpa esok", "Sampai besok", "À demain", "Hasta mañana"),
              emoji: "📅"
            },
            {
              id: "g1u3l3v5",
              arabic: "فِي أَمَانِ اللهِ",
              transliteration: "fī amāni llāh",
              translation: t("فِي أَمَانِ اللهِ", "Go in God's protection", "Pergi dalam jagaan Allah", "Pergi dalam perlindungan Allah", "Allez en paix", "Ve en la protección de Dios"),
              emoji: "🤲"
            }
          ],
          dialogue: [
            {
              speaker: "سَمِيرٌ",
              arabic: "مَعَ السَّلَامَةِ يَا مُعَلِّمَةُ!",
              translation: t("مَعَ السَّلَامَةِ يَا مُعَلِّمَةُ!", "Goodbye, teacher!", "Selamat tinggal, cikgu!", "Selamat tinggal, ibu guru!", "Au revoir, madame !", "¡Adiós, maestra!")
            },
            {
              speaker: "مُعَلِّمَةٌ",
              arabic: "مَعَ السَّلَامَةِ! نَرَاكُمْ غَدًا إِنْ شَاءَ اللهُ!",
              translation: t("مَعَ السَّلَامَةِ! نَرَاكُمْ غَدًا إِنْ شَاءَ اللهُ!", "Goodbye! See you tomorrow God willing!", "Selamat tinggal! Jumpa esok insya-Allah!", "Selamat tinggal! Sampai besok insya-Allah!", "Au revoir ! À demain, si Dieu le veut !", "¡Adiós! ¡Hasta mañana si Dios quiere!")
            }
          ],
          exercises: [
            {
              id: "g1u3l3e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر كلمة الوداع الصحيحة", "Listen and choose the correct farewell", "Dengar dan pilih kata perpisahan yang betul", "Dengarkan dan pilih kata perpisahan yang benar", "Écoute et choisis le bon au revoir", "Escucha y elige la despedida correcta"),
              arabicText: "إِلَى اللِّقَاءِ",
              options: [
                "مَعَ السَّلَامَةِ",
                "إِلَى اللِّقَاءِ",
                "نَرَاكَ غَدًا"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f64b/512.webp"
            },
            {
              id: "g1u3l3e2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا نقول لصديقنا عند الذهاب للنوم؟", "What do we say to our friend before going to sleep?", "Apa yang kita ucapkan kepada teman sebelum tidur?", "Apa yang kita ucapkan kepada teman sebelum tidur?", "Que dit-on à son ami avant d'aller dormir ?", "¿Qué decimos a nuestro amigo antes de dormir?"),
              options: [
                "صَبَاحُ الْخَيْرِ",
                "تُصْبِحُ عَلَى خَيْرٍ",
                "مَرْحَبًا"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp"
            },
            {
              id: "g1u3l3e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("ودّع زميلك بعبارات جميلة", "Say farewell to your classmate with beautiful phrases", "Ucapkan selamat tinggal kepada rakan dengan kata-kata indah", "Ucapkan selamat tinggal kepada temanmu dengan kata-kata indah", "Dis au revoir à ton camarade avec de belles phrases", "Despídete de tu compañero con frases hermosas"),
              arabicText: "مَعَ السَّلَامَةِ يَا صَدِيقِي! إِلَى اللِّقَاءِ!",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp"
            },
            {
              id: "g1u3l3e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "مَعَ السَّلَامَةِ يَا مُعَلِّمَةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp"
            },
            {
              id: "g1u3l3listeng1u3l3v4",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "نَرَاكَ غَدًا",
              options: [
                "حَاء",
                "نَرَاكَ غَدًا",
                "رِجْلٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4c5/512.webp"
            },
            {
              id: "g1u3l3mcqg1u3l3v5",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"فِي أَمَانِ اللهِ\"؟", "What does \"Go in God's protection\" mean?", "Apakah maksud \"Pergi dalam jagaan Allah\"?", "Apa arti \"Pergi dalam perlindungan Allah\"?", "Que signifie \"Allez en paix\" ?", "¿Qué significa \"Ve en la protección de Dios\"?"),
              arabicText: "فِي أَمَانِ اللهِ",
              options: [
                "Shin (Sh)",
                "trousers",
                "blue",
                "Go in God's protection"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f932/512.webp"
            },
            {
              id: "g1u3l3spellg1u3l3v2",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "إِلَى اللِّقَاءِ",
              answer: "إِلَى اللِّقَاءِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f64b/512.webp"
            },
            {
              id: "g1u3l3speakg1u3l3v4",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "نَرَاكَ غَدًا",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4c5/512.webp"
            }
          ]
        },
        {
          id: "g1u3review",
          unitId: "g1u3",
          gradeId: "g1",
          order: 4,
          title: t("مراجعة الوحدة", "Unit Review", "Ulangan Unit", "Ulangan Unit", "Révision de l’unité", "Revisión de la unidad"),
          skills: [
            "listening",
            "reading",
            "writing"
          ],
          intro: t("لنراجع ما تعلّمناه في هذه الوحدة!", "Let’s review what we learned in this unit!", "Mari ulangkaji apa yang kita pelajari dalam unit ini!", "Mari kita ulang apa yang kita pelajari dalam unit ini!", "Révisons ce que nous avons appris dans cette unité !", "¡Repasemos lo que aprendimos en esta unidad!"),
          vocabulary: [
            {
              id: "g1u3l1v1",
              arabic: "السَّلَامُ عَلَيْكُمْ",
              transliteration: "as-salāmu ʿalaykum",
              translation: t("السَّلَامُ عَلَيْكُمْ", "Peace be upon you", "Assalamualaikum", "Assalamualaikum", "Assalamou alaykoum", "La paz sea contigo"),
              emoji: "🤝"
            },
            {
              id: "g1u3l1v2",
              arabic: "وَعَلَيْكُمُ السَّلَامُ",
              transliteration: "wa-ʿalaykumu s-salām",
              translation: t("وَعَلَيْكُمُ السَّلَامُ", "And upon you peace", "Wa'alaikumsalam", "Wa'alaikumsalam", "Wa alaykoumou ssalam", "Y la paz sea contigo"),
              emoji: "😊"
            },
            {
              id: "g1u3l1v3",
              arabic: "أَهْلًا وَسَهْلًا",
              transliteration: "ahlan wa-sahlan",
              translation: t("أَهْلًا وَسَهْلًا", "Welcome", "Selamat datang", "Selamat datang", "Bienvenue", "Bienvenido"),
              emoji: "👋"
            },
            {
              id: "g1u3l1v4",
              arabic: "مَرْحَبًا",
              transliteration: "marḥaban",
              translation: t("مَرْحَبًا", "Hello", "Hai/Helo", "Halo", "Bonjour", "Hola"),
              emoji: "🙋"
            },
            {
              id: "g1u3l1v5",
              arabic: "صَبَاحُ الْخَيْرِ",
              transliteration: "ṣabāḥu l-khayr",
              translation: t("صَبَاحُ الْخَيْرِ", "Good morning", "Selamat pagi", "Selamat pagi", "Bonjour", "Buenos días"),
              emoji: "🌅"
            },
            {
              id: "g1u3l2v1",
              arabic: "كَيْفَ حَالُكَ؟",
              transliteration: "kayfa ḥāluk?",
              translation: t("كَيْفَ حَالُكَ؟", "How are you?", "Apa khabar?", "Apa kabar?", "Comment vas-tu ?", "¿Cómo estás?"),
              emoji: "🙂"
            },
            {
              id: "g1u3l2v2",
              arabic: "بِخَيْرٍ",
              transliteration: "bi-khayr",
              translation: t("بِخَيْرٍ", "I am fine", "Baik", "Baik", "Je vais bien", "Estoy bien"),
              emoji: "😊"
            },
            {
              id: "g1u3l2v3",
              arabic: "الْحَمْدُ لِلَّهِ",
              transliteration: "al-ḥamdu lillāh",
              translation: t("الْحَمْدُ لِلَّهِ", "Praise God / Thank God", "Alhamdulillah", "Alhamdulillah", "Louange à Dieu", "Alabado sea Dios"),
              emoji: "🙏"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g1u3reviewspellg1u3l1v1",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "السَّلَامُ عَلَيْكُمْ",
              answer: "السَّلَامُ عَلَيْكُمْ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "g1u3reviewlisteng1u3l1v4",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "مَرْحَبًا",
              options: [
                "لَبَنٌ",
                "فِي أَمَانِ اللهِ",
                "مَرْحَبًا"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f64b/512.webp"
            },
            {
              id: "g1u3reviewwriteg1u3l1v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"السَّلَامُ عَلَيْكُمْ\"", "Type the Arabic word for: \"Peace be upon you\"", "Taip perkataan Arab untuk: \"Assalamualaikum\"", "Ketik kata Arab untuk: \"Assalamualaikum\"", "Tape le mot arabe pour : \"Assalamou alaykoum\"", "Escribe la palabra árabe para: \"La paz sea contigo\""),
              arabicText: "السَّلَامُ عَلَيْكُمْ",
              answer: "السَّلَامُ عَلَيْكُمْ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "g1u3reviewlisteng1u3l2v3",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الْحَمْدُ لِلَّهِ",
              options: [
                "تِسْعَةٌ",
                "الْحَمْدُ لِلَّهِ",
                "فَاء"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f64f/512.webp"
            },
            {
              id: "g1u3reviewspellg1u3l2v1",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "كَيْفَ حَالُكَ؟",
              answer: "كَيْفَ حَالُكَ؟",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f642/512.webp"
            },
            {
              id: "g1u3reviewlisteng1u3l1v2",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "وَعَلَيْكُمُ السَّلَامُ",
              options: [
                "عَيْنٌ",
                "وَعَلَيْكُمُ السَّلَامُ",
                "سِتَّةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60a/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "g1u4",
      gradeId: "g1",
      order: 4,
      title: t("الْأَرْقَامُ", "Numbers", "Nombor", "Angka", "Les chiffres", "Los números"),
      theme: "numbers",
      lessons: [
        {
          id: "g1u4l1",
          unitId: "g1u4",
          gradeId: "g1",
          order: 1,
          title: t("الْأَرْقَامُ مِنْ ١ إِلَى ٥", "Numbers 1 to 5", "Nombor 1 hingga 5", "Angka 1 sampai 5", "Chiffres 1 à 5", "Números del 1 al 5"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("الأرقام مفتاح الرياضيات! لنتعلّم أرقامًا من واحد إلى خمسة.", "Numbers are the key to mathematics! Let's learn numbers from one to five.", "Nombor adalah kunci matematik! Jom belajar nombor dari satu hingga lima.", "Angka adalah kunci matematika! Ayo pelajari angka dari satu sampai lima.", "Les chiffres sont la clé des mathématiques ! Apprenons les chiffres de un à cinq.", "¡Los números son la clave de las matemáticas! Aprendamos los números del uno al cinco."),
          vocabulary: [
            {
              id: "g1u4l1v1",
              arabic: "وَاحِدٌ",
              transliteration: "wāḥid",
              translation: t("وَاحِدٌ", "one (1)", "satu (1)", "satu (1)", "un (1)", "uno (1)"),
              emoji: "1️⃣"
            },
            {
              id: "g1u4l1v2",
              arabic: "اثْنَانِ",
              transliteration: "ithnān",
              translation: t("اثْنَانِ", "two (2)", "dua (2)", "dua (2)", "deux (2)", "dos (2)"),
              emoji: "2️⃣"
            },
            {
              id: "g1u4l1v3",
              arabic: "ثَلَاثَةٌ",
              transliteration: "thalātha",
              translation: t("ثَلَاثَةٌ", "three (3)", "tiga (3)", "tiga (3)", "trois (3)", "tres (3)"),
              emoji: "3️⃣"
            },
            {
              id: "g1u4l1v4",
              arabic: "أَرْبَعَةٌ",
              transliteration: "arbaʿa",
              translation: t("أَرْبَعَةٌ", "four (4)", "empat (4)", "empat (4)", "quatre (4)", "cuatro (4)"),
              emoji: "4️⃣"
            },
            {
              id: "g1u4l1v5",
              arabic: "خَمْسَةٌ",
              transliteration: "khamsa",
              translation: t("خَمْسَةٌ", "five (5)", "lima (5)", "lima (5)", "cinq (5)", "cinco (5)"),
              emoji: "5️⃣"
            }
          ],
          dialogue: [
            {
              speaker: "مُعَلِّمٌ",
              arabic: "عُدُّوا مَعِي: وَاحِد، اثنانِ، ثَلَاثَة، أَرْبَعَة، خَمْسَة!",
              translation: t("عُدُّوا مَعِي: وَاحِد، اثنانِ، ثَلَاثَة، أَرْبَعَة، خَمْسَة!", "Count with me: one, two, three, four, five!", "Kira bersama saya: satu, dua, tiga, empat, lima!", "Hitung bersama saya: satu, dua, tiga, empat, lima!", "Comptez avec moi : un, deux, trois, quatre, cinq !", "¡Cuenten conmigo: uno, dos, tres, cuatro, cinco!")
            },
            {
              speaker: "تَلَامِيذُ",
              arabic: "وَاحِد، اثنانِ، ثَلَاثَة، أَرْبَعَة، خَمْسَة!",
              translation: t("وَاحِد، اثنانِ، ثَلَاثَة، أَرْبَعَة، خَمْسَة!", "One, two, three, four, five!", "Satu, dua, tiga, empat, lima!", "Satu, dua, tiga, empat, lima!", "Un, deux, trois, quatre, cinq !", "¡Uno, dos, tres, cuatro, cinco!")
            }
          ],
          exercises: [
            {
              id: "g1u4l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الرقم الصحيح", "Listen and choose the correct number", "Dengar dan pilih nombor yang betul", "Dengarkan dan pilih angka yang benar", "Écoute et choisis le bon chiffre", "Escucha y elige el número correcto"),
              arabicText: "ثَلَاثَةٌ",
              options: [
                "اثْنَانِ",
                "ثَلَاثَةٌ",
                "أَرْبَعَةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/33-fe0f-20e3/512.webp"
            },
            {
              id: "g1u4l1e2",
              type: "mcq",
              skill: "reading",
              prompt: t("كم عدد أصابع يدٍ واحدة؟", "How many fingers are on one hand?", "Berapa banyak jari di satu tangan?", "Berapa banyak jari di satu tangan?", "Combien y a-t-il de doigts sur une main ?", "¿Cuántos dedos hay en una mano?"),
              options: [
                "أَرْبَعَةٌ",
                "خَمْسَةٌ",
                "ثَلَاثَةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "g1u4l1e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("عُدَّ من واحد إلى خمسة بصوت واضح", "Count from one to five clearly", "Kira dari satu hingga lima dengan jelas", "Hitung dari satu sampai lima dengan jelas", "Compte de un à cinq clairement", "Cuenta del uno al cinco claramente"),
              arabicText: "وَاحِد، اثنانِ، ثَلَاثَة، أَرْبَعَة، خَمْسَة",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "g1u4l1e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "عُدُّوا مَعِي: وَاحِد، اثنانِ، ثَلَاثَة، أَرْبَعَة، خَمْسَة",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "g1u4l1speakg1u4l1v3",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "ثَلَاثَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/33-fe0f-20e3/512.webp"
            },
            {
              id: "g1u4l1writeg1u4l1v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"وَاحِدٌ\"", "Type the Arabic word for: \"one (1)\"", "Taip perkataan Arab untuk: \"satu (1)\"", "Ketik kata Arab untuk: \"satu (1)\"", "Tape le mot arabe pour : \"un (1)\"", "Escribe la palabra árabe para: \"uno (1)\""),
              arabicText: "وَاحِدٌ",
              answer: "وَاحِدٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "g1u4l1mcqg1u4l1v3",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"ثَلَاثَةٌ\"؟", "What does \"three (3)\" mean?", "Apakah maksud \"tiga (3)\"?", "Apa arti \"tiga (3)\"?", "Que signifie \"trois (3)\" ?", "¿Qué significa \"tres (3)\"?"),
              arabicText: "ثَلَاثَةٌ",
              options: [
                "See you tomorrow",
                "sock",
                "glue",
                "three (3)"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/33-fe0f-20e3/512.webp"
            },
            {
              id: "g1u4l1listeng1u4l1v3",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "ثَلَاثَةٌ",
              options: [
                "ثَلَاثَةٌ",
                "زَهْرَةٌ",
                "أَبْيَضُ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/33-fe0f-20e3/512.webp"
            }
          ]
        },
        {
          id: "g1u4l2",
          unitId: "g1u4",
          gradeId: "g1",
          order: 2,
          title: t("الْأَرْقَامُ مِنْ ٦ إِلَى ١٠", "Numbers 6 to 10", "Nombor 6 hingga 10", "Angka 6 sampai 10", "Chiffres 6 à 10", "Números del 6 al 10"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("نكمل تعلّم الأرقام حتى العشرة!", "We complete learning numbers up to ten!", "Kita sempurnakan belajar nombor sehingga sepuluh!", "Kita selesaikan belajar angka sampai sepuluh!", "Nous finissons d'apprendre les chiffres jusqu'à dix !", "¡Completamos el aprendizaje de los números hasta el diez!"),
          vocabulary: [
            {
              id: "g1u4l2v1",
              arabic: "سِتَّةٌ",
              transliteration: "sitta",
              translation: t("سِتَّةٌ", "six (6)", "enam (6)", "enam (6)", "six (6)", "seis (6)"),
              emoji: "6️⃣"
            },
            {
              id: "g1u4l2v2",
              arabic: "سَبْعَةٌ",
              transliteration: "sabʿa",
              translation: t("سَبْعَةٌ", "seven (7)", "tujuh (7)", "tujuh (7)", "sept (7)", "siete (7)"),
              emoji: "7️⃣"
            },
            {
              id: "g1u4l2v3",
              arabic: "ثَمَانِيَةٌ",
              transliteration: "thamāniya",
              translation: t("ثَمَانِيَةٌ", "eight (8)", "lapan (8)", "delapan (8)", "huit (8)", "ocho (8)"),
              emoji: "8️⃣"
            },
            {
              id: "g1u4l2v4",
              arabic: "تِسْعَةٌ",
              transliteration: "tisʿa",
              translation: t("تِسْعَةٌ", "nine (9)", "sembilan (9)", "sembilan (9)", "neuf (9)", "nueve (9)"),
              emoji: "9️⃣"
            },
            {
              id: "g1u4l2v5",
              arabic: "عَشَرَةٌ",
              transliteration: "ʿashara",
              translation: t("عَشَرَةٌ", "ten (10)", "sepuluh (10)", "sepuluh (10)", "dix (10)", "diez (10)"),
              emoji: "🔟"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g1u4l2e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الرقم الصحيح", "Listen and choose the correct number", "Dengar dan pilih nombor yang betul", "Dengarkan dan pilih angka yang benar", "Écoute et choisis le bon chiffre", "Escucha y elige el número correcto"),
              arabicText: "سَبْعَةٌ",
              options: [
                "سِتَّةٌ",
                "سَبْعَةٌ",
                "ثَمَانِيَةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/37-fe0f-20e3/512.webp"
            },
            {
              id: "g1u4l2e2",
              type: "mcq",
              skill: "reading",
              prompt: t("ما الرقم الذي يأتي بعد تسعة؟", "What number comes after nine?", "Nombor apa yang datang selepas sembilan?", "Angka apa yang datang setelah sembilan?", "Quel chiffre vient après neuf ?", "¿Qué número viene después del nueve?"),
              options: [
                "ثَمَانِيَةٌ",
                "عَشَرَةٌ",
                "سِتَّةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/36-fe0f-20e3/512.webp"
            },
            {
              id: "g1u4l2e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("عُدَّ من ستة إلى عشرة بصوت واضح", "Count from six to ten clearly", "Kira dari enam hingga sepuluh dengan jelas", "Hitung dari enam sampai sepuluh dengan jelas", "Compte de six à dix clairement", "Cuenta del seis al diez claramente"),
              arabicText: "سِتَّة، سَبْعَة، ثَمَانِيَة، تِسْعَة، عَشَرَة",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/36-fe0f-20e3/512.webp"
            },
            {
              id: "g1u4l2e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا سِتَّةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/36-fe0f-20e3/512.webp"
            },
            {
              id: "g1u4l2listeng1u4l2v1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "سِتَّةٌ",
              options: [
                "سِتَّةٌ",
                "مِقَصٌّ",
                "كَيْفَ حَالُكَ؟"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/36-fe0f-20e3/512.webp"
            },
            {
              id: "g1u4l2writeg1u4l2v3",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"ثَمَانِيَةٌ\"", "Type the Arabic word for: \"eight (8)\"", "Taip perkataan Arab untuk: \"lapan (8)\"", "Ketik kata Arab untuk: \"delapan (8)\"", "Tape le mot arabe pour : \"huit (8)\"", "Escribe la palabra árabe para: \"ocho (8)\""),
              arabicText: "ثَمَانِيَةٌ",
              answer: "ثَمَانِيَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/38-fe0f-20e3/512.webp"
            },
            {
              id: "g1u4l2mcqg1u4l2v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"سِتَّةٌ\"؟", "What does \"six (6)\" mean?", "Apakah maksud \"enam (6)\"?", "Apa arti \"enam (6)\"?", "Que signifie \"six (6)\" ?", "¿Qué significa \"seis (6)\"?"),
              arabicText: "سِتَّةٌ",
              options: [
                "house",
                "six (6)",
                "table",
                "Good morning"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/36-fe0f-20e3/512.webp"
            },
            {
              id: "g1u4l2mcqg1u4l2v3",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"ثَمَانِيَةٌ\"؟", "What does \"eight (8)\" mean?", "Apakah maksud \"lapan (8)\"?", "Apa arti \"delapan (8)\"?", "Que signifie \"huit (8)\" ?", "¿Qué significa \"ocho (8)\"?"),
              arabicText: "ثَمَانِيَةٌ",
              options: [
                "milk",
                "dog",
                "Sad (S)",
                "eight (8)"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/38-fe0f-20e3/512.webp"
            }
          ]
        },
        {
          id: "g1u4l3",
          unitId: "g1u4",
          gradeId: "g1",
          order: 3,
          title: t("نَعُدُّ الْأَشْيَاءَ", "We Count Things", "Kita Kira Benda", "Kita Menghitung Benda", "Nous comptons les choses", "Contamos cosas"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("نستخدم الأرقام في حياتنا اليومية! لنتعلّم كيف نعدّ الأشياء.", "We use numbers in our daily life! Let's learn how to count things.", "Kita gunakan nombor dalam kehidupan harian! Jom belajar cara mengira benda.", "Kita menggunakan angka dalam kehidupan sehari-hari! Ayo pelajari cara menghitung benda.", "On utilise les chiffres dans notre vie quotidienne ! Apprenons à compter les choses.", "¡Usamos los números en nuestra vida diaria! Aprendamos a contar cosas."),
          vocabulary: [
            {
              id: "g1u4l3v1",
              arabic: "كَمْ؟",
              transliteration: "kam?",
              translation: t("كَمْ؟", "How many?", "Berapa?", "Berapa?", "Combien ?", "¿Cuántos?"),
              emoji: "🔢"
            },
            {
              id: "g1u4l3v2",
              arabic: "هُنَاكَ",
              transliteration: "hunāka",
              translation: t("هُنَاكَ", "there is/are", "ada", "ada", "il y a", "hay"),
              emoji: "👉"
            },
            {
              id: "g1u4l3v3",
              arabic: "مَجْمُوعٌ",
              transliteration: "majmūʿ",
              translation: t("مَجْمُوعٌ", "total", "jumlah", "jumlah", "total", "total"),
              emoji: "➕"
            },
            {
              id: "g1u4l3v4",
              arabic: "نَعُدُّ",
              transliteration: "naʿuddu",
              translation: t("نَعُدُّ", "we count", "kita kira", "kita hitung", "nous comptons", "contamos"),
              emoji: "🖐️"
            },
            {
              id: "g1u4l3v5",
              arabic: "عَشَرَةٌ",
              transliteration: "ʿashara",
              translation: t("عَشَرَةٌ", "ten", "sepuluh", "sepuluh", "dix", "diez"),
              emoji: "🔟"
            }
          ],
          dialogue: [
            {
              speaker: "مُعَلِّمٌ",
              arabic: "كَمْ كِتَابًا عَلَى الطَّاوِلَةِ؟",
              translation: t("كَمْ كِتَابًا عَلَى الطَّاوِلَةِ؟", "How many books are on the table?", "Berapa buku di atas meja?", "Berapa buku di atas meja?", "Combien de livres y a-t-il sur la table ?", "¿Cuántos libros hay sobre la mesa?")
            },
            {
              speaker: "تِلْمِيذٌ",
              arabic: "هُنَاكَ ثَلَاثَةُ كُتُبٍ!",
              translation: t("هُنَاكَ ثَلَاثَةُ كُتُبٍ!", "There are three books!", "Ada tiga buku!", "Ada tiga buku!", "Il y a trois livres !", "¡Hay tres libros!")
            }
          ],
          exercises: [
            {
              id: "g1u4l3e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر العدد الصحيح", "Listen and choose the correct number", "Dengar dan pilih nombor yang betul", "Dengarkan dan pilih angka yang benar", "Écoute et choisis le bon nombre", "Escucha y elige el número correcto"),
              arabicText: "خَمْسَةٌ",
              options: [
                "أَرْبَعَةٌ",
                "خَمْسَةٌ",
                "سِتَّةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f522/512.webp"
            },
            {
              id: "g1u4l3e2",
              type: "mcq",
              skill: "reading",
              prompt: t("كم عدد أيام الأسبوع؟", "How many days are in a week?", "Berapa hari dalam seminggu?", "Berapa hari dalam seminggu?", "Combien de jours y a-t-il dans une semaine ?", "¿Cuántos días hay en una semana?"),
              options: [
                "خَمْسَةٌ",
                "سَبْعَةٌ",
                "عَشَرَةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f522/512.webp"
            },
            {
              id: "g1u4l3e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("عُدَّ الأشياء الموجودة أمامك", "Count the objects in front of you", "Kira benda-benda yang ada di hadapan anda", "Hitung benda-benda yang ada di depanmu", "Compte les objets devant toi", "Cuenta los objetos frente a ti"),
              arabicText: "هُنَاكَ وَاحِد، اثنانِ، ثَلَاثَة — ثَلَاثَةُ أَشْيَاءَ!",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f449/512.webp"
            },
            {
              id: "g1u4l3e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "كَمْ كِتَابًا عَلَى الطَّاوِلَةِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f522/512.webp"
            },
            {
              id: "g1u4l3spellg1u4l3v1",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "كَمْ؟",
              answer: "كَمْ؟",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f522/512.webp"
            },
            {
              id: "g1u4l3writeg1u4l3v5",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"عَشَرَةٌ\"", "Type the Arabic word for: \"ten\"", "Taip perkataan Arab untuk: \"sepuluh\"", "Ketik kata Arab untuk: \"sepuluh\"", "Tape le mot arabe pour : \"dix\"", "Escribe la palabra árabe para: \"diez\""),
              arabicText: "عَشَرَةٌ",
              answer: "عَشَرَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f51f/512.webp"
            },
            {
              id: "g1u4l3speakg1u4l3v4",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "نَعُدُّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f590-fe0f/512.webp"
            },
            {
              id: "g1u4l3listeng1u4l3v3",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "مَجْمُوعٌ",
              options: [
                "ظَاء",
                "مَجْمُوعٌ",
                "شِين"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2795/512.webp"
            }
          ]
        },
        {
          id: "g1u4review",
          unitId: "g1u4",
          gradeId: "g1",
          order: 4,
          title: t("مراجعة الوحدة", "Unit Review", "Ulangan Unit", "Ulangan Unit", "Révision de l’unité", "Revisión de la unidad"),
          skills: [
            "listening",
            "reading",
            "writing"
          ],
          intro: t("لنراجع ما تعلّمناه في هذه الوحدة!", "Let’s review what we learned in this unit!", "Mari ulangkaji apa yang kita pelajari dalam unit ini!", "Mari kita ulang apa yang kita pelajari dalam unit ini!", "Révisons ce que nous avons appris dans cette unité !", "¡Repasemos lo que aprendimos en esta unidad!"),
          vocabulary: [
            {
              id: "g1u4l1v1",
              arabic: "وَاحِدٌ",
              transliteration: "wāḥid",
              translation: t("وَاحِدٌ", "one (1)", "satu (1)", "satu (1)", "un (1)", "uno (1)"),
              emoji: "1️⃣"
            },
            {
              id: "g1u4l1v2",
              arabic: "اثْنَانِ",
              transliteration: "ithnān",
              translation: t("اثْنَانِ", "two (2)", "dua (2)", "dua (2)", "deux (2)", "dos (2)"),
              emoji: "2️⃣"
            },
            {
              id: "g1u4l1v3",
              arabic: "ثَلَاثَةٌ",
              transliteration: "thalātha",
              translation: t("ثَلَاثَةٌ", "three (3)", "tiga (3)", "tiga (3)", "trois (3)", "tres (3)"),
              emoji: "3️⃣"
            },
            {
              id: "g1u4l1v4",
              arabic: "أَرْبَعَةٌ",
              transliteration: "arbaʿa",
              translation: t("أَرْبَعَةٌ", "four (4)", "empat (4)", "empat (4)", "quatre (4)", "cuatro (4)"),
              emoji: "4️⃣"
            },
            {
              id: "g1u4l1v5",
              arabic: "خَمْسَةٌ",
              transliteration: "khamsa",
              translation: t("خَمْسَةٌ", "five (5)", "lima (5)", "lima (5)", "cinq (5)", "cinco (5)"),
              emoji: "5️⃣"
            },
            {
              id: "g1u4l2v1",
              arabic: "سِتَّةٌ",
              transliteration: "sitta",
              translation: t("سِتَّةٌ", "six (6)", "enam (6)", "enam (6)", "six (6)", "seis (6)"),
              emoji: "6️⃣"
            },
            {
              id: "g1u4l2v2",
              arabic: "سَبْعَةٌ",
              transliteration: "sabʿa",
              translation: t("سَبْعَةٌ", "seven (7)", "tujuh (7)", "tujuh (7)", "sept (7)", "siete (7)"),
              emoji: "7️⃣"
            },
            {
              id: "g1u4l2v3",
              arabic: "ثَمَانِيَةٌ",
              transliteration: "thamāniya",
              translation: t("ثَمَانِيَةٌ", "eight (8)", "lapan (8)", "delapan (8)", "huit (8)", "ocho (8)"),
              emoji: "8️⃣"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g1u4reviewlisteng1u4l1v3",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "ثَلَاثَةٌ",
              options: [
                "ثَلَاثَةٌ",
                "شِين",
                "عَشَرَةٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/33-fe0f-20e3/512.webp"
            },
            {
              id: "g1u4reviewwriteg1u4l1v5",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"خَمْسَةٌ\"", "Type the Arabic word for: \"five (5)\"", "Taip perkataan Arab untuk: \"lima (5)\"", "Ketik kata Arab untuk: \"lima (5)\"", "Tape le mot arabe pour : \"cinq (5)\"", "Escribe la palabra árabe para: \"cinco (5)\""),
              arabicText: "خَمْسَةٌ",
              answer: "خَمْسَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/35-fe0f-20e3/512.webp"
            },
            {
              id: "g1u4reviewlisteng1u4l1v4",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "أَرْبَعَةٌ",
              options: [
                "نَجْمٌ",
                "أَرْبَعَةٌ",
                "ذَال"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/34-fe0f-20e3/512.webp"
            },
            {
              id: "g1u4reviewmcqg1u4l2v2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"سَبْعَةٌ\"؟", "What does \"seven (7)\" mean?", "Apakah maksud \"tujuh (7)\"?", "Apa arti \"tujuh (7)\"?", "Que signifie \"sept (7)\" ?", "¿Qué significa \"siete (7)\"?"),
              arabicText: "سَبْعَةٌ",
              options: [
                "ruler",
                "seven (7)",
                "Praise God / Thank God",
                "shirt"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/37-fe0f-20e3/512.webp"
            },
            {
              id: "g1u4reviewlisteng1u4l1v1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "وَاحِدٌ",
              options: [
                "أَصْفَرُ",
                "أَزْرَقُ",
                "وَاحِدٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "g1u4reviewspellg1u4l2v3",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "ثَمَانِيَةٌ",
              answer: "ثَمَانِيَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/38-fe0f-20e3/512.webp"
            }
          ]
        }
      ]
    }
  ]
};
