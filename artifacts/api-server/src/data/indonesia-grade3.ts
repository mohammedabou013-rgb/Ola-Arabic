import { t, type GradeData } from "./types";

export const indonesiaGrade3: GradeData = {
  id: "indonesia-g3",
  number: 3,
  title: t("المستوى الثالث", "Stage 3", "Tahun 3", "Kelas 3", "Année 3", "Año 3"),
  description: t("مِنْهَاجُ اللُّغَةِ الْعَرَبِيَّةِ لِمَدَارِسِ إِبْتِدَائِيَّةِ إِنْدُونِيسِيَّا", "Arabic curriculum for Indonesian MI schools", "Kurikulum bahasa Arab untuk MI Indonesia", "Kurikulum bahasa Arab untuk MI Indonesia", "Programme d’arabe pour les MI d’Indonésie", "Plan de estudios de árabe para MI de Indonesia"),
  color: "#F59E0B",
  icon: "book-open",
  units: [
    {
      id: "indonesia-g3u1",
      gradeId: "indonesia-g3",
      order: 1,
      title: t("المَوَادُّ الدِّرَاسِيَّةُ", "School Subjects", "Mata Pelajaran", "Mata Pelajaran", "Matières scolaires", "Asignaturas escolares"),
      theme: "school",
      lessons: [
        {
          id: "indonesia-g3u1l1",
          unitId: "indonesia-g3u1",
          gradeId: "indonesia-g3",
          order: 1,
          title: t("المَوَادُّ الدِّرَاسِيَّةُ", "School Subjects", "Mata Pelajaran", "Mata Pelajaran", "Matières scolaires", "Asignaturas escolares"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("نَتَعَلَّمُ الْمَفَاهِيمَ وَالْكَلِمَاتِ الْجَدِيدَةَ فِي هٰذَا الدَّرْسِ.", "We learn new concepts and words in this lesson.", "Kita belajar konsep dan kata baharu dalam pelajaran ini.", "Kita belajar konsep dan kata baru dalam pelajaran ini.", "Nous apprenons de nouveaux concepts et mots dans cette leçon.", "Aprendemos nuevos conceptos y palabras en esta lección."),
          vocabulary: [
            {
              id: "indonesia-g3u1l1v1",
              arabic: "المَدْرَسَةُ",
              transliteration: "al-madrasa",
              translation: t("المَدْرَسَةُ", "school", "sekolah", "sekolah", "école", "escuela"),
              emoji: "🏫"
            },
            {
              id: "indonesia-g3u1l1v2",
              arabic: "الْفَصْلُ",
              transliteration: "al-faṣl",
              translation: t("الْفَصْلُ", "classroom", "kelas", "kelas", "classe", "aula"),
              emoji: "🧑‍🏫"
            },
            {
              id: "indonesia-g3u1l1v3",
              arabic: "الْجَدْوَلُ الدِّرَاسِيُّ",
              transliteration: "al-jadwalu d-dirāsiyy",
              translation: t("الْجَدْوَلُ الدِّرَاسِيُّ", "timetable", "jadual pelajaran", "jadwal pelajaran", "emploi du temps", "horario"),
              emoji: "🗓️"
            },
            {
              id: "indonesia-g3u1l1v4",
              arabic: "الْمُعَلِّمُ",
              transliteration: "al-muʿallim",
              translation: t("الْمُعَلِّمُ", "teacher", "guru", "guru", "enseignant", "maestro"),
              emoji: "👨‍🏫"
            },
            {
              id: "indonesia-g3u1l1v5",
              arabic: "الطَّالِبُ",
              transliteration: "aṭ-ṭālib",
              translation: t("الطَّالِبُ", "student", "murid", "siswa", "élève", "estudiante"),
              emoji: "👦"
            },
            {
              id: "indonesia-g3u1l1v6",
              arabic: "الْكِتَابُ",
              transliteration: "al-kitāb",
              translation: t("الْكِتَابُ", "book", "buku", "buku", "livre", "libro"),
              emoji: "📚"
            },
            {
              id: "indonesia-g3u1l1v7",
              arabic: "الدَّفْتَرُ",
              transliteration: "ad-dafṭar",
              translation: t("الدَّفْتَرُ", "notebook", "buku tulis", "buku tulis", "cahier", "cuaderno"),
              emoji: "📒"
            },
            {
              id: "indonesia-g3u1l1v8",
              arabic: "الْقَلَمُ",
              transliteration: "al-qalam",
              translation: t("الْقَلَمُ", "pen", "pen", "pena", "stylo", "bolígrafo"),
              emoji: "✏️"
            },
            {
              id: "indonesia-g3u1l1v9",
              arabic: "دَرْسُ اللُّغَةِ الْعَرَبِيَّةِ",
              transliteration: "dars al-lugha al-ʿarabiyya",
              translation: t("دَرْسُ اللُّغَةِ الْعَرَبِيَّةِ", "Arabic lesson", "pelajaran bahasa Arab", "pelajaran bahasa Arab", "leçon d’arabe", "clase de árabe"),
              emoji: "📝"
            },
            {
              id: "indonesia-g3u1l1v10",
              arabic: "يَوْمُ الْإِثْنَيْنِ",
              transliteration: "yawm al-ithnayn",
              translation: t("يَوْمُ الْإِثْنَيْنِ", "Monday", "hari Isnin", "hari Senin", "lundi", "lunes"),
              emoji: "1️⃣"
            }
          ],
          dialogue: [
            {
              speaker: "أَحْمَدُ",
              arabic: "مَا الدَّرْسُ الْيَوْمَ؟",
              translation: t("مَا الدَّرْسُ الْيَوْمَ؟", "What is the lesson today?", "Apakah pelajaran hari ini?", "Apa pelajaran hari ini?", "Quelle est la leçon aujourd’hui ?", "¿Cuál es la lección de hoy?")
            },
            {
              speaker: "خَلِيلٌ",
              arabic: "الْيَوْمَ دَرْسُ اللُّغَةِ الْعَرَبِيَّةِ.",
              translation: t("الْيَوْمَ دَرْسُ اللُّغَةِ الْعَرَبِيَّةِ.", "Today is Arabic class.", "Hari ini pelajaran bahasa Arab.", "Hari ini pelajaran bahasa Arab.", "Aujourd’hui, c’est le cours d’arabe.", "Hoy es la clase de árabe.")
            },
            {
              speaker: "أَحْمَدُ",
              arabic: "أَيْنَ كِتَابِي؟",
              translation: t("أَيْنَ كِتَابِي؟", "Where is my book?", "Di mana buku saya?", "Di mana bukuku?", "Où est mon livre ?", "¿Dónde está mi libro?")
            },
            {
              speaker: "خَلِيلٌ",
              arabic: "هٰذَا كِتَابُ اللُّغَةِ الْعَرَبِيَّةِ.",
              translation: t("هٰذَا كِتَابُ اللُّغَةِ الْعَرَبِيَّةِ.", "This is the Arabic book.", "Ini buku bahasa Arab.", "Ini buku bahasa Arab.", "Voici le livre d’arabe.", "Este es el libro de árabe.")
            }
          ],
          exercises: [
            {
              id: "indonesia-g3u1l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الْجَدْوَلُ الدِّرَاسِيُّ",
              options: [
                "الْمَدْرَسَةُ",
                "الْجَدْوَلُ الدِّرَاسِيُّ",
                "الْكِتَابُ"
              ],
              correctIndex: 1,
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/School%20schedule.png"
            },
            {
              id: "indonesia-g3u1l1e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan maknanya", "Relie le mot à son sens", "Relaciona la palabra con su significado"),
              pairs: [
                {
                  a: "الْمُعَلِّمُ",
                  b: "teacher"
                },
                {
                  a: "الطَّالِبُ",
                  b: "student"
                },
                {
                  a: "الدَّفْتَرُ",
                  b: "notebook"
                },
                {
                  a: "يَوْمُ الْإِثْنَيْنِ",
                  b: "Monday"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3eb/512.webp"
            },
            {
              id: "indonesia-g3u1l1e3",
              type: "mcq",
              skill: "reading",
              prompt: t("اخْتَرِ الْجَوَابَ الصَّحِيحَ", "Choose the correct answer", "Pilih jawapan yang betul", "Pilih jawaban yang benar", "Choisis la bonne réponse", "Elige la respuesta correcta"),
              options: [
                "دَرْسُ التَّارِيخِ",
                "دَرْسُ اللُّغَةِ الْعَرَبِيَّةِ",
                "دَرْسُ الرِّيَاضَةِ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3eb/512.webp"
            },
            {
              id: "indonesia-g3u1l1e4",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ", "Speak", "Bercakap", "Bicara", "Parle", "Habla"),
              arabicText: "مَا الدَّرْسُ الْيَوْمَ؟ / الْيَوْمَ دَرْسُ اللُّغَةِ الْعَرَبِيَّةِ.",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4dd/512.webp"
            },
            {
              id: "indonesia-g3u1l1e5",
              type: "writing",
              skill: "writing",
              prompt: t("اُكْتُبِ الْكَلِمَاتِ", "Write the words", "Tulis perkataan", "Tulis kata-kata", "Écris les mots", "Escribe las palabras"),
              arabicText: "الْمَدْرَسَةُ، الْفَصْلُ، الْجَدْوَلُ الدِّرَاسِيُّ، الْمُعَلِّمُ، الطَّالِبُ، الْكِتَابُ، الدَّفْتَرُ، الْقَلَمُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9d1-200d-1f3eb/512.webp"
            },
            {
              id: "indonesia-g3u1l1e6",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ الْكَلِمَاتِ لِتُكَوِّنَ جُمْلَةً", "Arrange the words to make a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata-kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هٰذَا كِتَابُ اللُّغَةِ الْعَرَبِيَّةِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3eb/512.webp"
            },
            {
              id: "indonesia-g3u1l1writeindonesia-g3u1l1v3",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"الْجَدْوَلُ الدِّرَاسِيُّ\"", "Type the Arabic word for: \"timetable\"", "Taip perkataan Arab untuk: \"jadual pelajaran\"", "Ketik kata Arab untuk: \"jadwal pelajaran\"", "Tape le mot arabe pour : \"emploi du temps\"", "Escribe la palabra árabe para: \"horario\""),
              arabicText: "الْجَدْوَلُ الدِّرَاسِيُّ",
              answer: "الْجَدْوَلُ الدِّرَاسِيُّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f5d3-fe0f/512.webp"
            },
            {
              id: "indonesia-g3u1l1listenindonesia-g3u1l1v10",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "يَوْمُ الْإِثْنَيْنِ",
              options: [
                "الْجَدْوَلُ الدِّرَاسِيُّ",
                "سَمَكَةٌ",
                "يَوْمُ الْإِثْنَيْنِ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "indonesia-g3u1l1spellindonesia-g3u1l1v3",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "الْجَدْوَلُ الدِّرَاسِيُّ",
              answer: "الْجَدْوَلُ الدِّرَاسِيُّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f5d3-fe0f/512.webp"
            },
            {
              id: "indonesia-g3u1l1spellindonesia-g3u1l1v9",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "دَرْسُ اللُّغَةِ الْعَرَبِيَّةِ",
              answer: "دَرْسُ اللُّغَةِ الْعَرَبِيَّةِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4dd/512.webp"
            },
            {
              id: "indonesia-g3u1l1mcqindonesia-g3u1l1v9",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"دَرْسُ اللُّغَةِ الْعَرَبِيَّةِ\"؟", "What does \"Arabic lesson\" mean?", "Apakah maksud \"pelajaran bahasa Arab\"?", "Apa arti \"pelajaran bahasa Arab\"?", "Que signifie \"leçon d’arabe\" ?", "¿Qué significa \"clase de árabe\"?"),
              arabicText: "دَرْسُ اللُّغَةِ الْعَرَبِيَّةِ",
              options: [
                "Arabic lesson",
                "school",
                "sick",
                "grass"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4dd/512.webp"
            },
            {
              id: "indonesia-g3u1l1spellindonesia-g3u1l1v1",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "المَدْرَسَةُ",
              answer: "المَدْرَسَةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3eb/512.webp"
            }
          ]
        },
        {
          id: "indonesia-g3u1review",
          unitId: "indonesia-g3u1",
          gradeId: "indonesia-g3",
          order: 2,
          title: t("مراجعة الوحدة", "Unit Review", "Ulangan Unit", "Ulangan Unit", "Révision de l’unité", "Revisión de la unidad"),
          skills: [
            "listening",
            "reading",
            "writing"
          ],
          intro: t("لنراجع ما تعلّمناه في هذه الوحدة!", "Let’s review what we learned in this unit!", "Mari ulangkaji apa yang kita pelajari dalam unit ini!", "Mari kita ulang apa yang kita pelajari dalam unit ini!", "Révisons ce que nous avons appris dans cette unité !", "¡Repasemos lo que aprendimos en esta unidad!"),
          vocabulary: [
            {
              id: "indonesia-g3u1l1v1",
              arabic: "المَدْرَسَةُ",
              transliteration: "al-madrasa",
              translation: t("المَدْرَسَةُ", "school", "sekolah", "sekolah", "école", "escuela"),
              emoji: "🏫"
            },
            {
              id: "indonesia-g3u1l1v2",
              arabic: "الْفَصْلُ",
              transliteration: "al-faṣl",
              translation: t("الْفَصْلُ", "classroom", "kelas", "kelas", "classe", "aula"),
              emoji: "🧑‍🏫"
            },
            {
              id: "indonesia-g3u1l1v3",
              arabic: "الْجَدْوَلُ الدِّرَاسِيُّ",
              transliteration: "al-jadwalu d-dirāsiyy",
              translation: t("الْجَدْوَلُ الدِّرَاسِيُّ", "timetable", "jadual pelajaran", "jadwal pelajaran", "emploi du temps", "horario"),
              emoji: "🗓️"
            },
            {
              id: "indonesia-g3u1l1v4",
              arabic: "الْمُعَلِّمُ",
              transliteration: "al-muʿallim",
              translation: t("الْمُعَلِّمُ", "teacher", "guru", "guru", "enseignant", "maestro"),
              emoji: "👨‍🏫"
            },
            {
              id: "indonesia-g3u1l1v5",
              arabic: "الطَّالِبُ",
              transliteration: "aṭ-ṭālib",
              translation: t("الطَّالِبُ", "student", "murid", "siswa", "élève", "estudiante"),
              emoji: "👦"
            },
            {
              id: "indonesia-g3u1l1v6",
              arabic: "الْكِتَابُ",
              transliteration: "al-kitāb",
              translation: t("الْكِتَابُ", "book", "buku", "buku", "livre", "libro"),
              emoji: "📚"
            },
            {
              id: "indonesia-g3u1l1v7",
              arabic: "الدَّفْتَرُ",
              transliteration: "ad-dafṭar",
              translation: t("الدَّفْتَرُ", "notebook", "buku tulis", "buku tulis", "cahier", "cuaderno"),
              emoji: "📒"
            },
            {
              id: "indonesia-g3u1l1v8",
              arabic: "الْقَلَمُ",
              transliteration: "al-qalam",
              translation: t("الْقَلَمُ", "pen", "pen", "pena", "stylo", "bolígrafo"),
              emoji: "✏️"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "indonesia-g3u1reviewspellindonesia-g3u1l1v5",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "الطَّالِبُ",
              answer: "الطَّالِبُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f466/512.webp"
            },
            {
              id: "indonesia-g3u1reviewlistenindonesia-g3u1l1v2",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الْفَصْلُ",
              options: [
                "الْجَرْيُ",
                "الصِّحَّةُ",
                "الْفَصْلُ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9d1-200d-1f3eb/512.webp"
            },
            {
              id: "indonesia-g3u1reviewspeakindonesia-g3u1l1v7",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "الدَّفْتَرُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4d2/512.webp"
            },
            {
              id: "indonesia-g3u1reviewwriteindonesia-g3u1l1v6",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"الْكِتَابُ\"", "Type the Arabic word for: \"book\"", "Taip perkataan Arab untuk: \"buku\"", "Ketik kata Arab untuk: \"buku\"", "Tape le mot arabe pour : \"livre\"", "Escribe la palabra árabe para: \"libro\""),
              arabicText: "الْكِتَابُ",
              answer: "الْكِتَابُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp"
            },
            {
              id: "indonesia-g3u1reviewspellindonesia-g3u1l1v4",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "الْمُعَلِّمُ",
              answer: "الْمُعَلِّمُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468-200d-1f3eb/512.webp"
            },
            {
              id: "indonesia-g3u1reviewspellindonesia-g3u1l1v2",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "الْفَصْلُ",
              answer: "الْفَصْلُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9d1-200d-1f3eb/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "indonesia-g3u2",
      gradeId: "indonesia-g3",
      order: 2,
      title: t("أَسْمَاءُ الْحَيَوَانَاتِ", "Animal Names", "Nama Haiwan", "Nama Hewan", "Noms d'animaux", "Nombres de animales"),
      theme: "animals",
      lessons: [
        {
          id: "indonesia-g3u2l1",
          unitId: "indonesia-g3u2",
          gradeId: "indonesia-g3",
          order: 1,
          title: t("أَسْمَاءُ الْحَيَوَانَاتِ", "Animal Names", "Nama Haiwan", "Nama Hewan", "Noms d'animaux", "Nombres de animales"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("نَتَعَلَّمُ الْمَفَاهِيمَ وَالْكَلِمَاتِ الْجَدِيدَةَ فِي هٰذَا الدَّرْسِ.", "We learn new concepts and words in this lesson.", "Kita belajar konsep dan kata baharu dalam pelajaran ini.", "Kita belajar konsep dan kata baru dalam pelajaran ini.", "Nous apprenons de nouveaux concepts et mots dans cette leçon.", "Aprendemos nuevos conceptos y palabras en esta lección."),
          vocabulary: [
            {
              id: "indonesia-g3u2l1v1",
              arabic: "أَسَدٌ",
              transliteration: "asad",
              translation: t("أَسَدٌ", "lion", "singa", "singa", "lion", "león"),
              emoji: "🦁"
            },
            {
              id: "indonesia-g3u2l1v2",
              arabic: "قِطَّةٌ",
              transliteration: "qiṭṭa",
              translation: t("قِطَّةٌ", "cat", "kucing", "kucing", "chat", "gato"),
              emoji: "🐱"
            },
            {
              id: "indonesia-g3u2l1v3",
              arabic: "كَلْبٌ",
              transliteration: "kalb",
              translation: t("كَلْبٌ", "dog", "anjing", "anjing", "chien", "perro"),
              emoji: "🐶"
            },
            {
              id: "indonesia-g3u2l1v4",
              arabic: "فَرَسٌ",
              transliteration: "faras",
              translation: t("فَرَسٌ", "horse", "kuda", "kuda", "cheval", "caballo"),
              emoji: "🐴"
            },
            {
              id: "indonesia-g3u2l1v5",
              arabic: "جَمَلٌ",
              transliteration: "jamal",
              translation: t("جَمَلٌ", "camel", "unta", "unta", "chameau", "camello"),
              emoji: "🐪"
            },
            {
              id: "indonesia-g3u2l1v6",
              arabic: "فِيلٌ",
              transliteration: "fīl",
              translation: t("فِيلٌ", "elephant", "gajah", "gajah", "éléphant", "elefante"),
              emoji: "🐘"
            },
            {
              id: "indonesia-g3u2l1v7",
              arabic: "طَائِرٌ",
              transliteration: "ṭāʾir",
              translation: t("طَائِرٌ", "bird", "burung", "burung", "oiseau", "pájaro"),
              emoji: "🐦"
            },
            {
              id: "indonesia-g3u2l1v8",
              arabic: "سَمَكَةٌ",
              transliteration: "samakah",
              translation: t("سَمَكَةٌ", "fish", "ikan", "ikan", "poisson", "pez"),
              emoji: "🐟"
            },
            {
              id: "indonesia-g3u2l1v9",
              arabic: "أَرْنَبٌ",
              transliteration: "arnab",
              translation: t("أَرْنَبٌ", "rabbit", "arnab", "kelinci", "lapin", "conejo"),
              emoji: "🐰"
            },
            {
              id: "indonesia-g3u2l1v10",
              arabic: "دِيكٌ",
              transliteration: "dīk",
              translation: t("دِيكٌ", "rooster", "ayam jantan", "ayam jantan", "coq", "gallo"),
              emoji: "🐓"
            }
          ],
          dialogue: [
            {
              speaker: "الْمُعَلِّمُ",
              arabic: "مَا هٰذَا؟",
              translation: t("مَا هٰذَا؟", "What is this?", "Apakah ini?", "Apa ini?", "Qu’est-ce que c’est ?", "¿Qué es esto?")
            },
            {
              speaker: "الطَّالِبُ",
              arabic: "هٰذَا أَسَدٌ.",
              translation: t("هٰذَا أَسَدٌ.", "This is a lion.", "Ini singa.", "Ini singa.", "C’est un lion.", "Este es un león.")
            },
            {
              speaker: "الْمُعَلِّمُ",
              arabic: "مَا هٰذِهِ؟",
              translation: t("مَا هٰذِهِ؟", "What is this?", "Apakah ini?", "Apa ini?", "Qu’est-ce que c’est ?", "¿Qué es esto?")
            },
            {
              speaker: "الطَّالِبُ",
              arabic: "هٰذِهِ قِطَّةٌ.",
              translation: t("هٰذِهِ قِطَّةٌ.", "This is a cat.", "Ini kucing.", "Ini kucing.", "C’est un chat.", "Este es un gato.")
            }
          ],
          exercises: [
            {
              id: "indonesia-g3u2l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "أَرْنَبٌ",
              options: [
                "أَرْنَبٌ",
                "أَسَدٌ",
                "فَرَسٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Rabbit.jpg"
            },
            {
              id: "indonesia-g3u2l1e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan maknanya", "Relie le mot à son sens", "Relaciona la palabra con su significado"),
              pairs: [
                {
                  a: "أَسَدٌ",
                  b: "lion"
                },
                {
                  a: "قِطَّةٌ",
                  b: "cat"
                },
                {
                  a: "فِيلٌ",
                  b: "elephant"
                },
                {
                  a: "دِيكٌ",
                  b: "rooster"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f981/512.webp"
            },
            {
              id: "indonesia-g3u2l1e3",
              type: "mcq",
              skill: "reading",
              prompt: t("اخْتَرِ الْجَوَابَ الصَّحِيحَ", "Choose the correct answer", "Pilih jawapan yang betul", "Pilih jawaban yang benar", "Choisis la bonne réponse", "Elige la respuesta correcta"),
              options: [
                "فِيلٌ",
                "طَائِرٌ",
                "بَقَرَةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f981/512.webp"
            },
            {
              id: "indonesia-g3u2l1e4",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ", "Speak", "Bercakap", "Bicara", "Parle", "Habla"),
              arabicText: "هٰذَا أَسَدٌ. / هٰذِهِ قِطَّةٌ.",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f981/512.webp"
            },
            {
              id: "indonesia-g3u2l1e5",
              type: "writing",
              skill: "writing",
              prompt: t("اُكْتُبِ الْكَلِمَاتِ", "Write the words", "Tulis perkataan", "Tulis kata-kata", "Écris les mots", "Escribe las palabras"),
              arabicText: "أَسَدٌ، قِطَّةٌ، كَلْبٌ، فَرَسٌ، جَمَلٌ، فِيلٌ، طَائِرٌ، سَمَكَةٌ، أَرْنَبٌ، دِيكٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f981/512.webp"
            },
            {
              id: "indonesia-g3u2l1e6",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ الْكَلِمَاتِ لِتُكَوِّنَ جُمْلَةً", "Arrange the words to make a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata-kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هٰذَا أَسَدٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f981/512.webp"
            },
            {
              id: "indonesia-g3u2l1writeindonesia-g3u2l1v2",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"قِطَّةٌ\"", "Type the Arabic word for: \"cat\"", "Taip perkataan Arab untuk: \"kucing\"", "Ketik kata Arab untuk: \"kucing\"", "Tape le mot arabe pour : \"chat\"", "Escribe la palabra árabe para: \"gato\""),
              arabicText: "قِطَّةٌ",
              answer: "قِطَّةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f431/512.webp"
            },
            {
              id: "indonesia-g3u2l1writeindonesia-g3u2l1v10",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"دِيكٌ\"", "Type the Arabic word for: \"rooster\"", "Taip perkataan Arab untuk: \"ayam jantan\"", "Ketik kata Arab untuk: \"ayam jantan\"", "Tape le mot arabe pour : \"coq\"", "Escribe la palabra árabe para: \"gallo\""),
              arabicText: "دِيكٌ",
              answer: "دِيكٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f413/512.webp"
            },
            {
              id: "indonesia-g3u2l1mcqindonesia-g3u2l1v9",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"أَرْنَبٌ\"؟", "What does \"rabbit\" mean?", "Apakah maksud \"arnab\"?", "Apa arti \"kelinci\"?", "Que signifie \"lapin\" ?", "¿Qué significa \"conejo\"?"),
              arabicText: "أَرْنَبٌ",
              options: [
                "notebook",
                "book",
                "sport",
                "rabbit"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f430/512.webp"
            },
            {
              id: "indonesia-g3u2l1listenindonesia-g3u2l1v10",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "دِيكٌ",
              options: [
                "جَمَلٌ",
                "السِّبَاحَةُ",
                "دِيكٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f413/512.webp"
            },
            {
              id: "indonesia-g3u2l1speakindonesia-g3u2l1v6",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "فِيلٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f418/512.webp"
            },
            {
              id: "indonesia-g3u2l1mcqindonesia-g3u2l1v10",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"دِيكٌ\"؟", "What does \"rooster\" mean?", "Apakah maksud \"ayam jantan\"?", "Apa arti \"ayam jantan\"?", "Que signifie \"coq\" ?", "¿Qué significa \"gallo\"?"),
              arabicText: "دِيكٌ",
              options: [
                "sun",
                "rooster",
                "sport",
                "cough"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f413/512.webp"
            }
          ]
        },
        {
          id: "indonesia-g3u2review",
          unitId: "indonesia-g3u2",
          gradeId: "indonesia-g3",
          order: 2,
          title: t("مراجعة الوحدة", "Unit Review", "Ulangan Unit", "Ulangan Unit", "Révision de l’unité", "Revisión de la unidad"),
          skills: [
            "listening",
            "reading",
            "writing"
          ],
          intro: t("لنراجع ما تعلّمناه في هذه الوحدة!", "Let’s review what we learned in this unit!", "Mari ulangkaji apa yang kita pelajari dalam unit ini!", "Mari kita ulang apa yang kita pelajari dalam unit ini!", "Révisons ce que nous avons appris dans cette unité !", "¡Repasemos lo que aprendimos en esta unidad!"),
          vocabulary: [
            {
              id: "indonesia-g3u2l1v1",
              arabic: "أَسَدٌ",
              transliteration: "asad",
              translation: t("أَسَدٌ", "lion", "singa", "singa", "lion", "león"),
              emoji: "🦁"
            },
            {
              id: "indonesia-g3u2l1v2",
              arabic: "قِطَّةٌ",
              transliteration: "qiṭṭa",
              translation: t("قِطَّةٌ", "cat", "kucing", "kucing", "chat", "gato"),
              emoji: "🐱"
            },
            {
              id: "indonesia-g3u2l1v3",
              arabic: "كَلْبٌ",
              transliteration: "kalb",
              translation: t("كَلْبٌ", "dog", "anjing", "anjing", "chien", "perro"),
              emoji: "🐶"
            },
            {
              id: "indonesia-g3u2l1v4",
              arabic: "فَرَسٌ",
              transliteration: "faras",
              translation: t("فَرَسٌ", "horse", "kuda", "kuda", "cheval", "caballo"),
              emoji: "🐴"
            },
            {
              id: "indonesia-g3u2l1v5",
              arabic: "جَمَلٌ",
              transliteration: "jamal",
              translation: t("جَمَلٌ", "camel", "unta", "unta", "chameau", "camello"),
              emoji: "🐪"
            },
            {
              id: "indonesia-g3u2l1v6",
              arabic: "فِيلٌ",
              transliteration: "fīl",
              translation: t("فِيلٌ", "elephant", "gajah", "gajah", "éléphant", "elefante"),
              emoji: "🐘"
            },
            {
              id: "indonesia-g3u2l1v7",
              arabic: "طَائِرٌ",
              transliteration: "ṭāʾir",
              translation: t("طَائِرٌ", "bird", "burung", "burung", "oiseau", "pájaro"),
              emoji: "🐦"
            },
            {
              id: "indonesia-g3u2l1v8",
              arabic: "سَمَكَةٌ",
              transliteration: "samakah",
              translation: t("سَمَكَةٌ", "fish", "ikan", "ikan", "poisson", "pez"),
              emoji: "🐟"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "indonesia-g3u2reviewspeakindonesia-g3u2l1v1",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "أَسَدٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f981/512.webp"
            },
            {
              id: "indonesia-g3u2reviewmcqindonesia-g3u2l1v4",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"فَرَسٌ\"؟", "What does \"horse\" mean?", "Apakah maksud \"kuda\"?", "Apa arti \"kuda\"?", "Que signifie \"cheval\" ?", "¿Qué significa \"caballo\"?"),
              arabicText: "فَرَسٌ",
              options: [
                "horse",
                "classroom",
                "medicine",
                "sick"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f434/512.webp"
            },
            {
              id: "indonesia-g3u2reviewlistenindonesia-g3u2l1v8",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "سَمَكَةٌ",
              options: [
                "سَمَكَةٌ",
                "شَجَرَةٌ",
                "مَعِي"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f41f/512.webp"
            },
            {
              id: "indonesia-g3u2reviewspellindonesia-g3u2l1v8",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "سَمَكَةٌ",
              answer: "سَمَكَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f41f/512.webp"
            },
            {
              id: "indonesia-g3u2reviewwriteindonesia-g3u2l1v7",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"طَائِرٌ\"", "Type the Arabic word for: \"bird\"", "Taip perkataan Arab untuk: \"burung\"", "Ketik kata Arab untuk: \"burung\"", "Tape le mot arabe pour : \"oiseau\"", "Escribe la palabra árabe para: \"pájaro\""),
              arabicText: "طَائِرٌ",
              answer: "طَائِرٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f426/512.webp"
            },
            {
              id: "indonesia-g3u2reviewlistenindonesia-g3u2l1v6",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "فِيلٌ",
              options: [
                "فِيلٌ",
                "الْمَلْعَبُ",
                "مَرِيضٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f418/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "indonesia-g3u3",
      gradeId: "indonesia-g3",
      order: 3,
      title: t("الْمَرَضُ وَالصِّحَّةُ", "Illness and Health", "Penyakit dan Kesihatan", "Penyakit dan Kesehatan", "La maladie et la santé", "La enfermedad y la salud"),
      theme: "health",
      lessons: [
        {
          id: "indonesia-g3u3l1",
          unitId: "indonesia-g3u3",
          gradeId: "indonesia-g3",
          order: 1,
          title: t("الْمَرَضُ وَالصِّحَّةُ", "Illness and Health", "Penyakit dan Kesihatan", "Penyakit dan Kesehatan", "La maladie et la santé", "La enfermedad y la salud"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("نَتَعَلَّمُ الْمَفَاهِيمَ وَالْكَلِمَاتِ الْجَدِيدَةَ فِي هٰذَا الدَّرْسِ.", "We learn new concepts and words in this lesson.", "Kita belajar konsep dan kata baharu dalam pelajaran ini.", "Kita belajar konsep dan kata baru dalam pelajaran ini.", "Nous apprenons de nouveaux concepts et mots dans cette leçon.", "Aprendemos nuevos conceptos y palabras en esta lección."),
          vocabulary: [
            {
              id: "indonesia-g3u3l1v1",
              arabic: "مَرِيضٌ",
              transliteration: "marīḍ",
              translation: t("مَرِيضٌ", "sick", "sakit", "sakit", "malade", "enfermo"),
              emoji: "🤒"
            },
            {
              id: "indonesia-g3u3l1v2",
              arabic: "طَبِيبٌ",
              transliteration: "ṭabīb",
              translation: t("طَبِيبٌ", "doctor", "doktor", "dokter", "médecin", "médico"),
              emoji: "🧑‍⚕️"
            },
            {
              id: "indonesia-g3u3l1v3",
              arabic: "مُسْتَشْفًى",
              transliteration: "mustashfā",
              translation: t("مُسْتَشْفًى", "hospital", "hospital", "rumah sakit", "hôpital", "hospital"),
              emoji: "🏥"
            },
            {
              id: "indonesia-g3u3l1v4",
              arabic: "دَوَاءٌ",
              transliteration: "dawāʾ",
              translation: t("دَوَاءٌ", "medicine", "ubat", "obat", "médicament", "medicina"),
              emoji: "💊"
            },
            {
              id: "indonesia-g3u3l1v5",
              arabic: "حُمَّى",
              transliteration: "ḥummā",
              translation: t("حُمَّى", "fever", "demam", "demam", "fièvre", "fiebre"),
              emoji: "🌡️"
            },
            {
              id: "indonesia-g3u3l1v6",
              arabic: "سُعَالٌ",
              transliteration: "suʿāl",
              translation: t("سُعَالٌ", "cough", "batuk", "batuk", "toux", "tos"),
              emoji: "😷"
            },
            {
              id: "indonesia-g3u3l1v7",
              arabic: "أَلَمٌ",
              transliteration: "alam",
              translation: t("أَلَمٌ", "pain", "sakit", "nyeri", "douleur", "dolor"),
              emoji: "🤕"
            },
            {
              id: "indonesia-g3u3l1v8",
              arabic: "صِحَّةٌ",
              transliteration: "ṣiḥḥa",
              translation: t("صِحَّةٌ", "health", "sihat", "sehat", "santé", "salud"),
              emoji: "💚"
            },
            {
              id: "indonesia-g3u3l1v9",
              arabic: "نَظَافَةٌ",
              transliteration: "naẓāfa",
              translation: t("نَظَافَةٌ", "cleanliness", "kebersihan", "kebersihan", "propreté", "limpieza"),
              emoji: "🧼"
            },
            {
              id: "indonesia-g3u3l1v10",
              arabic: "تَعَبٌ",
              transliteration: "taʿab",
              translation: t("تَعَبٌ", "tiredness", "letih", "lelah", "fatigue", "cansancio"),
              emoji: "😴"
            }
          ],
          dialogue: [
            {
              speaker: "الْبِطَلُ",
              arabic: "أَنَا مَرِيضٌ يَا أُمِّي.",
              translation: t("أَنَا مَرِيضٌ يَا أُمِّي.", "I am sick, Mother.", "Saya sakit, ibu.", "Saya sakit, Ibu.", "Je suis malade, maman.", "Estoy enfermo, mamá.")
            },
            {
              speaker: "أُمُّهُ",
              arabic: "مَا الَّذِي يُؤْلِمُكَ؟",
              translation: t("مَا الَّذِي يُؤْلِمُكَ؟", "What hurts you?", "Apa yang sakit?", "Apa yang sakit?", "Qu’est-ce qui te fait mal ?", "¿Qué te duele?")
            },
            {
              speaker: "الْبِطَلُ",
              arabic: "عِنْدِي حُمَّى وَسُعَالٌ.",
              translation: t("عِنْدِي حُمَّى وَسُعَالٌ.", "I have fever and cough.", "Saya demam dan batuk.", "Saya demam dan batuk.", "J’ai de la fièvre et une toux.", "Tengo fiebre y tos.")
            },
            {
              speaker: "أُمُّهُ",
              arabic: "نَذْهَبُ إِلَى الطَّبِيبِ.",
              translation: t("نَذْهَبُ إِلَى الطَّبِيبِ.", "We go to the doctor.", "Kita pergi ke doktor.", "Kita pergi ke dokter.", "Nous allons chez le médecin.", "Vamos al médico.")
            }
          ],
          exercises: [
            {
              id: "indonesia-g3u3l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "حُمَّى",
              options: [
                "حُمَّى",
                "دَوَاءٌ",
                "صِحَّةٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Thermometer.jpg"
            },
            {
              id: "indonesia-g3u3l1e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan maknanya", "Relie le mot à son sens", "Relaciona la palabra con su significado"),
              pairs: [
                {
                  a: "مَرِيضٌ",
                  b: "sick"
                },
                {
                  a: "طَبِيبٌ",
                  b: "doctor"
                },
                {
                  a: "مُسْتَشْفًى",
                  b: "hospital"
                },
                {
                  a: "دَوَاءٌ",
                  b: "medicine"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f912/512.webp"
            },
            {
              id: "indonesia-g3u3l1e3",
              type: "mcq",
              skill: "reading",
              prompt: t("اخْتَرِ الْجَوَابَ الصَّحِيحَ", "Choose the correct answer", "Pilih jawapan yang betul", "Pilih jawaban yang benar", "Choisis la bonne réponse", "Elige la respuesta correcta"),
              options: [
                "طَبِيبٌ",
                "تَعَبٌ",
                "نَظَافَةٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f912/512.webp"
            },
            {
              id: "indonesia-g3u3l1e4",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ", "Speak", "Bercakap", "Bicara", "Parle", "Habla"),
              arabicText: "أَنَا مَرِيضٌ يَا أُمِّي. / عِنْدِي حُمَّى وَسُعَالٌ.",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f912/512.webp"
            },
            {
              id: "indonesia-g3u3l1e5",
              type: "writing",
              skill: "writing",
              prompt: t("اُكْتُبِ الْكَلِمَاتِ", "Write the words", "Tulis perkataan", "Tulis kata-kata", "Écris les mots", "Escribe las palabras"),
              arabicText: "مَرِيضٌ، طَبِيبٌ، مُسْتَشْفًى، دَوَاءٌ، حُمَّى، سُعَالٌ، صِحَّةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f912/512.webp"
            },
            {
              id: "indonesia-g3u3l1e6",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ الْكَلِمَاتِ لِتُكَوِّنَ جُمْلَةً", "Arrange the words to make a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata-kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "نَذْهَبُ إِلَى الطَّبِيبِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f912/512.webp"
            },
            {
              id: "indonesia-g3u3l1spellindonesia-g3u3l1v8",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "صِحَّةٌ",
              answer: "صِحَّةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f49a/512.webp"
            },
            {
              id: "indonesia-g3u3l1spellindonesia-g3u3l1v9",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "نَظَافَةٌ",
              answer: "نَظَافَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9fc/512.webp"
            },
            {
              id: "indonesia-g3u3l1writeindonesia-g3u3l1v3",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"مُسْتَشْفًى\"", "Type the Arabic word for: \"hospital\"", "Taip perkataan Arab untuk: \"hospital\"", "Ketik kata Arab untuk: \"rumah sakit\"", "Tape le mot arabe pour : \"hôpital\"", "Escribe la palabra árabe para: \"hospital\""),
              arabicText: "مُسْتَشْفًى",
              answer: "مُسْتَشْفًى",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e5/512.webp"
            },
            {
              id: "indonesia-g3u3l1mcqindonesia-g3u3l1v10",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"تَعَبٌ\"؟", "What does \"tiredness\" mean?", "Apakah maksud \"letih\"?", "Apa arti \"lelah\"?", "Que signifie \"fatigue\" ?", "¿Qué significa \"cansancio\"?"),
              arabicText: "تَعَبٌ",
              options: [
                "pain",
                "age",
                "pen",
                "tiredness"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f634/512.webp"
            },
            {
              id: "indonesia-g3u3l1speakindonesia-g3u3l1v5",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "حُمَّى",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f321-fe0f/512.webp"
            },
            {
              id: "indonesia-g3u3l1writeindonesia-g3u3l1v4",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"دَوَاءٌ\"", "Type the Arabic word for: \"medicine\"", "Taip perkataan Arab untuk: \"ubat\"", "Ketik kata Arab untuk: \"obat\"", "Tape le mot arabe pour : \"médicament\"", "Escribe la palabra árabe para: \"medicina\""),
              arabicText: "دَوَاءٌ",
              answer: "دَوَاءٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f48a/512.webp"
            }
          ]
        },
        {
          id: "indonesia-g3u3review",
          unitId: "indonesia-g3u3",
          gradeId: "indonesia-g3",
          order: 2,
          title: t("مراجعة الوحدة", "Unit Review", "Ulangan Unit", "Ulangan Unit", "Révision de l’unité", "Revisión de la unidad"),
          skills: [
            "listening",
            "reading",
            "writing"
          ],
          intro: t("لنراجع ما تعلّمناه في هذه الوحدة!", "Let’s review what we learned in this unit!", "Mari ulangkaji apa yang kita pelajari dalam unit ini!", "Mari kita ulang apa yang kita pelajari dalam unit ini!", "Révisons ce que nous avons appris dans cette unité !", "¡Repasemos lo que aprendimos en esta unidad!"),
          vocabulary: [
            {
              id: "indonesia-g3u3l1v1",
              arabic: "مَرِيضٌ",
              transliteration: "marīḍ",
              translation: t("مَرِيضٌ", "sick", "sakit", "sakit", "malade", "enfermo"),
              emoji: "🤒"
            },
            {
              id: "indonesia-g3u3l1v2",
              arabic: "طَبِيبٌ",
              transliteration: "ṭabīb",
              translation: t("طَبِيبٌ", "doctor", "doktor", "dokter", "médecin", "médico"),
              emoji: "🧑‍⚕️"
            },
            {
              id: "indonesia-g3u3l1v3",
              arabic: "مُسْتَشْفًى",
              transliteration: "mustashfā",
              translation: t("مُسْتَشْفًى", "hospital", "hospital", "rumah sakit", "hôpital", "hospital"),
              emoji: "🏥"
            },
            {
              id: "indonesia-g3u3l1v4",
              arabic: "دَوَاءٌ",
              transliteration: "dawāʾ",
              translation: t("دَوَاءٌ", "medicine", "ubat", "obat", "médicament", "medicina"),
              emoji: "💊"
            },
            {
              id: "indonesia-g3u3l1v5",
              arabic: "حُمَّى",
              transliteration: "ḥummā",
              translation: t("حُمَّى", "fever", "demam", "demam", "fièvre", "fiebre"),
              emoji: "🌡️"
            },
            {
              id: "indonesia-g3u3l1v6",
              arabic: "سُعَالٌ",
              transliteration: "suʿāl",
              translation: t("سُعَالٌ", "cough", "batuk", "batuk", "toux", "tos"),
              emoji: "😷"
            },
            {
              id: "indonesia-g3u3l1v7",
              arabic: "أَلَمٌ",
              transliteration: "alam",
              translation: t("أَلَمٌ", "pain", "sakit", "nyeri", "douleur", "dolor"),
              emoji: "🤕"
            },
            {
              id: "indonesia-g3u3l1v8",
              arabic: "صِحَّةٌ",
              transliteration: "ṣiḥḥa",
              translation: t("صِحَّةٌ", "health", "sihat", "sehat", "santé", "salud"),
              emoji: "💚"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "indonesia-g3u3reviewspeakindonesia-g3u3l1v6",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "سُعَالٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f637/512.webp"
            },
            {
              id: "indonesia-g3u3reviewwriteindonesia-g3u3l1v2",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"طَبِيبٌ\"", "Type the Arabic word for: \"doctor\"", "Taip perkataan Arab untuk: \"doktor\"", "Ketik kata Arab untuk: \"dokter\"", "Tape le mot arabe pour : \"médecin\"", "Escribe la palabra árabe para: \"médico\""),
              arabicText: "طَبِيبٌ",
              answer: "طَبِيبٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9d1-200d-2695-fe0f/512.webp"
            },
            {
              id: "indonesia-g3u3reviewmcqindonesia-g3u3l1v7",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"أَلَمٌ\"؟", "What does \"pain\" mean?", "Apakah maksud \"sakit\"?", "Apa arti \"nyeri\"?", "Que signifie \"douleur\" ?", "¿Qué significa \"dolor\"?"),
              arabicText: "أَلَمٌ",
              options: [
                "school",
                "football",
                "friend",
                "pain"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f915/512.webp"
            },
            {
              id: "indonesia-g3u3reviewmcqindonesia-g3u3l1v4",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"دَوَاءٌ\"؟", "What does \"medicine\" mean?", "Apakah maksud \"ubat\"?", "Apa arti \"obat\"?", "Que signifie \"médicament\" ?", "¿Qué significa \"medicina\"?"),
              arabicText: "دَوَاءٌ",
              options: [
                "cleanliness",
                "field",
                "medicine",
                "hospital"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f48a/512.webp"
            },
            {
              id: "indonesia-g3u3reviewmcqindonesia-g3u3l1v6",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"سُعَالٌ\"؟", "What does \"cough\" mean?", "Apakah maksud \"batuk\"?", "Apa arti \"batuk\"?", "Que signifie \"toux\" ?", "¿Qué significa \"tos\"?"),
              arabicText: "سُعَالٌ",
              options: [
                "age",
                "sport",
                "flower",
                "cough"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f637/512.webp"
            },
            {
              id: "indonesia-g3u3reviewspellindonesia-g3u3l1v1",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "مَرِيضٌ",
              answer: "مَرِيضٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f912/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "indonesia-g3u4",
      gradeId: "indonesia-g3",
      order: 4,
      title: t("الرِّيَاضَةُ", "Sports", "Sukan", "Olahraga", "Sports", "Deportes"),
      theme: "sports",
      lessons: [
        {
          id: "indonesia-g3u4l1",
          unitId: "indonesia-g3u4",
          gradeId: "indonesia-g3",
          order: 1,
          title: t("الرِّيَاضَةُ", "Sports", "Sukan", "Olahraga", "Sports", "Deportes"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("نَتَعَلَّمُ الْمَفَاهِيمَ وَالْكَلِمَاتِ الْجَدِيدَةَ فِي هٰذَا الدَّرْسِ.", "We learn new concepts and words in this lesson.", "Kita belajar konsep dan kata baharu dalam pelajaran ini.", "Kita belajar konsep dan kata baru dalam pelajaran ini.", "Nous apprenons de nouveaux concepts et mots dans cette leçon.", "Aprendemos nuevos conceptos y palabras en esta lección."),
          vocabulary: [
            {
              id: "indonesia-g3u4l1v1",
              arabic: "رِيَاضَةٌ",
              transliteration: "riyāḍa",
              translation: t("رِيَاضَةٌ", "sport", "sukan", "olahraga", "sport", "deporte"),
              emoji: "⚽"
            },
            {
              id: "indonesia-g3u4l1v2",
              arabic: "كُرَةُ الْقَدَمِ",
              transliteration: "kurat al-qadam",
              translation: t("كُرَةُ الْقَدَمِ", "football", "bola sepak", "sepak bola", "football", "fútbol"),
              emoji: "⚽"
            },
            {
              id: "indonesia-g3u4l1v3",
              arabic: "السِّبَاحَةُ",
              transliteration: "as-sibāḥa",
              translation: t("السِّبَاحَةُ", "swimming", "renang", "renang", "natation", "natación"),
              emoji: "🏊"
            },
            {
              id: "indonesia-g3u4l1v4",
              arabic: "اللَّعِبُ",
              transliteration: "al-laʿib",
              translation: t("اللَّعِبُ", "play", "bermain", "bermain", "jouer", "jugar"),
              emoji: "🎮"
            },
            {
              id: "indonesia-g3u4l1v5",
              arabic: "الْجَرْيُ",
              transliteration: "al-jary",
              translation: t("الْجَرْيُ", "running", "lari", "lari", "course", "carrera"),
              emoji: "🏃"
            },
            {
              id: "indonesia-g3u4l1v6",
              arabic: "الْمَلْعَبُ",
              transliteration: "al-malʿab",
              translation: t("الْمَلْعَبُ", "field", "padang", "lapangan", "terrain", "campo"),
              emoji: "🏟️"
            },
            {
              id: "indonesia-g3u4l1v7",
              arabic: "الْفَوْزُ",
              transliteration: "al-fawz",
              translation: t("الْفَوْزُ", "winning", "kemenangan", "kemenangan", "victoire", "victoria"),
              emoji: "🏆"
            },
            {
              id: "indonesia-g3u4l1v8",
              arabic: "الصِّحَّةُ",
              transliteration: "aṣ-ṣiḥḥa",
              translation: t("الصِّحَّةُ", "health", "sihat", "sehat", "santé", "salud"),
              emoji: "💪"
            }
          ],
          dialogue: [
            {
              speaker: "الْبِطَلُ",
              arabic: "أَنَا أُحِبُّ الرِّيَاضَةَ.",
              translation: t("أَنَا أُحِبُّ الرِّيَاضَةَ.", "I like sports.", "Saya suka sukan.", "Saya suka olahraga.", "J’aime le sport.", "Me gusta el deporte.")
            },
            {
              speaker: "زَمِيلُهُ",
              arabic: "مَا الرِّيَاضَةُ الَّتِي تُحِبُّهَا؟",
              translation: t("مَا الرِّيَاضَةُ الَّتِي تُحِبُّهَا؟", "Which sport do you like?", "Sukan apa yang kamu suka?", "Olahraga apa yang kamu suka?", "Quel sport aimes-tu ?", "¿Qué deporte te gusta?")
            },
            {
              speaker: "الْبِطَلُ",
              arabic: "أُحِبُّ كُرَةَ الْقَدَمِ.",
              translation: t("أُحِبُّ كُرَةَ الْقَدَمِ.", "I like football.", "Saya suka bola sepak.", "Saya suka sepak bola.", "J’aime le football.", "Me gusta el fútbol.")
            },
            {
              speaker: "زَمِيلُهُ",
              arabic: "وَأَنَا أُحِبُّ السِّبَاحَةَ.",
              translation: t("وَأَنَا أُحِبُّ السِّبَاحَةَ.", "And I like swimming.", "Dan saya suka renang.", "Dan saya suka renang.", "Et moi, j’aime la natation.", "Y yo, me gusta la natación.")
            }
          ],
          exercises: [
            {
              id: "indonesia-g3u4l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "كُرَةُ الْقَدَمِ",
              options: [
                "كُرَةُ الْقَدَمِ",
                "السِّبَاحَةُ",
                "الْمَلْعَبُ"
              ],
              correctIndex: 0,
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Soccer-ball.png"
            },
            {
              id: "indonesia-g3u4l1e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan maknanya", "Relie le mot à son sens", "Relaciona la palabra con su significado"),
              pairs: [
                {
                  a: "رِيَاضَةٌ",
                  b: "sport"
                },
                {
                  a: "كُرَةُ الْقَدَمِ",
                  b: "football"
                },
                {
                  a: "السِّبَاحَةُ",
                  b: "swimming"
                },
                {
                  a: "الْفَوْزُ",
                  b: "winning"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "indonesia-g3u4l1e3",
              type: "mcq",
              skill: "reading",
              prompt: t("اخْتَرِ الْجَوَابَ الصَّحِيحَ", "Choose the correct answer", "Pilih jawapan yang betul", "Pilih jawaban yang benar", "Choisis la bonne réponse", "Elige la respuesta correcta"),
              options: [
                "الْمَلْعَبُ",
                "الصِّحَّةُ",
                "كُرَةٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "indonesia-g3u4l1e4",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ", "Speak", "Bercakap", "Bicara", "Parle", "Habla"),
              arabicText: "أَنَا أُحِبُّ الرِّيَاضَةَ. / أُحِبُّ كُرَةَ الْقَدَمِ.",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "indonesia-g3u4l1e5",
              type: "writing",
              skill: "writing",
              prompt: t("اُكْتُبِ الْكَلِمَاتِ", "Write the words", "Tulis perkataan", "Tulis kata-kata", "Écris les mots", "Escribe las palabras"),
              arabicText: "رِيَاضَةٌ، كُرَةُ الْقَدَمِ، السِّبَاحَةُ، الْجَرْيُ، الْمَلْعَبُ، الْفَوْزُ، الصِّحَّةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "indonesia-g3u4l1e6",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ الْكَلِمَاتِ لِتُكَوِّنَ جُمْلَةً", "Arrange the words to make a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata-kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "أُحِبُّ كُرَةَ الْقَدَمِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "indonesia-g3u4l1arrange1",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "أَنَا أُحِبُّ الرِّيَاضَةَ.",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "indonesia-g3u4l1arrange2",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "مَا الرِّيَاضَةُ الَّتِي تُحِبُّهَا؟",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "indonesia-g3u4l1listenindonesia-g3u4l1v4",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "اللَّعِبُ",
              options: [
                "اللَّعِبُ",
                "طَائِرٌ",
                "الْفَصْلُ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3ae/512.webp"
            },
            {
              id: "indonesia-g3u4l1spellindonesia-g3u4l1v6",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "الْمَلْعَبُ",
              answer: "الْمَلْعَبُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3df-fe0f/512.webp"
            },
            {
              id: "indonesia-g3u4l1mcqindonesia-g3u4l1v8",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"الصِّحَّةُ\"؟", "What does \"health\" mean?", "Apakah maksud \"sihat\"?", "Apa arti \"sehat\"?", "Que signifie \"santé\" ?", "¿Qué significa \"salud\"?"),
              arabicText: "الصِّحَّةُ",
              options: [
                "health",
                "sick",
                "flower",
                "lion"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4aa/512.webp"
            },
            {
              id: "indonesia-g3u4l1mcqindonesia-g3u4l1v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"رِيَاضَةٌ\"؟", "What does \"sport\" mean?", "Apakah maksud \"sukan\"?", "Apa arti \"olahraga\"?", "Que signifie \"sport\" ?", "¿Qué significa \"deporte\"?"),
              arabicText: "رِيَاضَةٌ",
              options: [
                "sport",
                "my school",
                "age",
                "horse"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            }
          ]
        },
        {
          id: "indonesia-g3u4review",
          unitId: "indonesia-g3u4",
          gradeId: "indonesia-g3",
          order: 2,
          title: t("مراجعة الوحدة", "Unit Review", "Ulangan Unit", "Ulangan Unit", "Révision de l’unité", "Revisión de la unidad"),
          skills: [
            "listening",
            "reading",
            "writing"
          ],
          intro: t("لنراجع ما تعلّمناه في هذه الوحدة!", "Let’s review what we learned in this unit!", "Mari ulangkaji apa yang kita pelajari dalam unit ini!", "Mari kita ulang apa yang kita pelajari dalam unit ini!", "Révisons ce que nous avons appris dans cette unité !", "¡Repasemos lo que aprendimos en esta unidad!"),
          vocabulary: [
            {
              id: "indonesia-g3u4l1v1",
              arabic: "رِيَاضَةٌ",
              transliteration: "riyāḍa",
              translation: t("رِيَاضَةٌ", "sport", "sukan", "olahraga", "sport", "deporte"),
              emoji: "⚽"
            },
            {
              id: "indonesia-g3u4l1v2",
              arabic: "كُرَةُ الْقَدَمِ",
              transliteration: "kurat al-qadam",
              translation: t("كُرَةُ الْقَدَمِ", "football", "bola sepak", "sepak bola", "football", "fútbol"),
              emoji: "⚽"
            },
            {
              id: "indonesia-g3u4l1v3",
              arabic: "السِّبَاحَةُ",
              transliteration: "as-sibāḥa",
              translation: t("السِّبَاحَةُ", "swimming", "renang", "renang", "natation", "natación"),
              emoji: "🏊"
            },
            {
              id: "indonesia-g3u4l1v4",
              arabic: "اللَّعِبُ",
              transliteration: "al-laʿib",
              translation: t("اللَّعِبُ", "play", "bermain", "bermain", "jouer", "jugar"),
              emoji: "🎮"
            },
            {
              id: "indonesia-g3u4l1v5",
              arabic: "الْجَرْيُ",
              transliteration: "al-jary",
              translation: t("الْجَرْيُ", "running", "lari", "lari", "course", "carrera"),
              emoji: "🏃"
            },
            {
              id: "indonesia-g3u4l1v6",
              arabic: "الْمَلْعَبُ",
              transliteration: "al-malʿab",
              translation: t("الْمَلْعَبُ", "field", "padang", "lapangan", "terrain", "campo"),
              emoji: "🏟️"
            },
            {
              id: "indonesia-g3u4l1v7",
              arabic: "الْفَوْزُ",
              transliteration: "al-fawz",
              translation: t("الْفَوْزُ", "winning", "kemenangan", "kemenangan", "victoire", "victoria"),
              emoji: "🏆"
            },
            {
              id: "indonesia-g3u4l1v8",
              arabic: "الصِّحَّةُ",
              transliteration: "aṣ-ṣiḥḥa",
              translation: t("الصِّحَّةُ", "health", "sihat", "sehat", "santé", "salud"),
              emoji: "💪"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "indonesia-g3u4reviewspellindonesia-g3u4l1v4",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "اللَّعِبُ",
              answer: "اللَّعِبُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3ae/512.webp"
            },
            {
              id: "indonesia-g3u4reviewlistenindonesia-g3u4l1v3",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "السِّبَاحَةُ",
              options: [
                "السِّبَاحَةُ",
                "مُسْتَشْفًى",
                "الدَّفْتَرُ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3ca/512.webp"
            },
            {
              id: "indonesia-g3u4reviewspellindonesia-g3u4l1v7",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "الْفَوْزُ",
              answer: "الْفَوْزُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c6/512.webp"
            },
            {
              id: "indonesia-g3u4reviewlistenindonesia-g3u4l1v4",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "اللَّعِبُ",
              options: [
                "اللَّعِبُ",
                "صَدِيقٌ",
                "عُمْرٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3ae/512.webp"
            },
            {
              id: "indonesia-g3u4reviewmcqindonesia-g3u4l1v2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"كُرَةُ الْقَدَمِ\"؟", "What does \"football\" mean?", "Apakah maksud \"bola sepak\"?", "Apa arti \"sepak bola\"?", "Que signifie \"football\" ?", "¿Qué significa \"fútbol\"?"),
              arabicText: "كُرَةُ الْقَدَمِ",
              options: [
                "running",
                "football",
                "pen",
                "medicine"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "indonesia-g3u4reviewspellindonesia-g3u4l1v3",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "السِّبَاحَةُ",
              answer: "السِّبَاحَةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3ca/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "indonesia-g3u5",
      gradeId: "indonesia-g3",
      order: 5,
      title: t("أَصْدِقَائِي", "My Friends", "Kawan-kawan Saya", "Teman-teman Saya", "Mes amis", "Mis amigos"),
      theme: "friends",
      lessons: [
        {
          id: "indonesia-g3u5l1",
          unitId: "indonesia-g3u5",
          gradeId: "indonesia-g3",
          order: 1,
          title: t("أَصْدِقَائِي", "My Friends", "Kawan-kawan Saya", "Teman-teman Saya", "Mes amis", "Mis amigos"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("نَتَعَلَّمُ الْمَفَاهِيمَ وَالْكَلِمَاتِ الْجَدِيدَةَ فِي هٰذَا الدَّرْسِ.", "We learn new concepts and words in this lesson.", "Kita belajar konsep dan kata baharu dalam pelajaran ini.", "Kita belajar konsep dan kata baru dalam pelajaran ini.", "Nous apprenons de nouveaux concepts et mots dans cette leçon.", "Aprendemos nuevos conceptos y palabras en esta lección."),
          vocabulary: [
            {
              id: "indonesia-g3u5l1v1",
              arabic: "صَدِيقٌ",
              transliteration: "ṣadīq",
              translation: t("صَدِيقٌ", "friend", "kawan", "teman", "ami", "amigo"),
              emoji: "👦"
            },
            {
              id: "indonesia-g3u5l1v2",
              arabic: "صَدِيقَتِي",
              transliteration: "ṣadīqatī",
              translation: t("صَدِيقَتِي", "my female friend", "kawan saya", "teman saya", "mon amie", "mi amiga"),
              emoji: "👧"
            },
            {
              id: "indonesia-g3u5l1v3",
              arabic: "مَعِي",
              transliteration: "maʿī",
              translation: t("مَعِي", "with me", "dengan saya", "bersama saya", "avec moi", "conmigo"),
              emoji: "🤝"
            },
            {
              id: "indonesia-g3u5l1v4",
              arabic: "مَدْرَسَتِي",
              transliteration: "madrasatī",
              translation: t("مَدْرَسَتِي", "my school", "sekolah saya", "sekolahku", "mon école", "mi escuela"),
              emoji: "🏫"
            },
            {
              id: "indonesia-g3u5l1v5",
              arabic: "فَصْلِي",
              transliteration: "faṣlī",
              translation: t("فَصْلِي", "my classroom", "kelas saya", "kelasku", "ma classe", "mi aula"),
              emoji: "🧑‍🏫"
            },
            {
              id: "indonesia-g3u5l1v6",
              arabic: "اسْمٌ",
              transliteration: "ism",
              translation: t("اسْمٌ", "name", "nama", "nama", "nom", "nombre"),
              emoji: "🏷️"
            },
            {
              id: "indonesia-g3u5l1v7",
              arabic: "عُمْرٌ",
              transliteration: "ʿumr",
              translation: t("عُمْرٌ", "age", "umur", "usia", "âge", "edad"),
              emoji: "🎂"
            },
            {
              id: "indonesia-g3u5l1v8",
              arabic: "جَدِيدٌ",
              transliteration: "jadīd",
              translation: t("جَدِيدٌ", "new", "baru", "baru", "nouveau", "nuevo"),
              emoji: "✨"
            },
            {
              id: "indonesia-g3u5l1v9",
              arabic: "سَعِيدٌ",
              transliteration: "saʿīd",
              translation: t("سَعِيدٌ", "happy", "gembira", "senang", "heureux", "feliz"),
              emoji: "😊"
            },
            {
              id: "indonesia-g3u5l1v10",
              arabic: "تَعَارُفٌ",
              transliteration: "taʿāruf",
              translation: t("تَعَارُفٌ", "introducing oneself", "berkenalan", "perkenalan", "présentation", "presentación"),
              emoji: "👋"
            }
          ],
          dialogue: [
            {
              speaker: "الْبِطَلُ",
              arabic: "السَّلَامُ عَلَيْكَ، مَا اسْمُكَ؟",
              translation: t("السَّلَامُ عَلَيْكَ، مَا اسْمُكَ؟", "Peace be upon you, what is your name?", "Assalamualaikum, siapa nama kamu?", "Assalamualaikum, siapa nama kamu?", "Bonjour, comment t’appelles-tu ?", "Hola, ¿cómo te llamas?")
            },
            {
              speaker: "زَمِيلُهُ",
              arabic: "أَنَا أَحْمَدُ، وَأَنْتَ؟",
              translation: t("أَنَا أَحْمَدُ، وَأَنْتَ؟", "I am Ahmad, and you?", "Saya Ahmad, dan kamu?", "Saya Ahmad, dan kamu?", "Je suis Ahmad, et toi ?", "Soy Ahmad, ¿y tú?")
            },
            {
              speaker: "الْبِطَلُ",
              arabic: "أَنَا خَلِيلٌ، وَهٰذِهِ صَدِيقَتِي.",
              translation: t("أَنَا خَلِيلٌ، وَهٰذِهِ صَدِيقَتِي.", "I am Khalil, and this is my female friend.", "Saya Khalil, dan ini kawan saya.", "Saya Khalil, dan ini teman saya.", "Je suis Khalil, et voici mon amie.", "Soy Jalil, y esta es mi amiga.")
            },
            {
              speaker: "زَمِيلُهُ",
              arabic: "أَهْلًا وَسَهْلًا.",
              translation: t("أَهْلًا وَسَهْلًا.", "Welcome.", "Selamat datang.", "Selamat datang.", "Bienvenue.", "Bienvenido.")
            }
          ],
          exercises: [
            {
              id: "indonesia-g3u5l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "صَدِيقٌ",
              options: [
                "صَدِيقٌ",
                "زَمِيلٌ",
                "تَعَارُفٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Children%20talking.jpg"
            },
            {
              id: "indonesia-g3u5l1e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan maknanya", "Relie le mot à son sens", "Relaciona la palabra con su significado"),
              pairs: [
                {
                  a: "صَدِيقٌ",
                  b: "friend"
                },
                {
                  a: "صَدِيقَتِي",
                  b: "my female friend"
                },
                {
                  a: "مَعِي",
                  b: "with me"
                },
                {
                  a: "تَعَارُفٌ",
                  b: "introducing oneself"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f466/512.webp"
            },
            {
              id: "indonesia-g3u5l1e3",
              type: "mcq",
              skill: "reading",
              prompt: t("اخْتَرِ الْجَوَابَ الصَّحِيحَ", "Choose the correct answer", "Pilih jawapan yang betul", "Pilih jawaban yang benar", "Choisis la bonne réponse", "Elige la respuesta correcta"),
              options: [
                "مَدْرَسَتِي",
                "فَصْلِي",
                "اسْمٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f466/512.webp"
            },
            {
              id: "indonesia-g3u5l1e4",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ", "Speak", "Bercakap", "Bicara", "Parle", "Habla"),
              arabicText: "مَا اسْمُكَ؟ / أَنَا خَلِيلٌ.",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f466/512.webp"
            },
            {
              id: "indonesia-g3u5l1e5",
              type: "writing",
              skill: "writing",
              prompt: t("اُكْتُبِ الْكَلِمَاتِ", "Write the words", "Tulis perkataan", "Tulis kata-kata", "Écris les mots", "Escribe las palabras"),
              arabicText: "صَدِيقٌ، صَدِيقَتِي، مَعِي، مَدْرَسَتِي، فَصْلِي، اسْمٌ، عُمْرٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f466/512.webp"
            },
            {
              id: "indonesia-g3u5l1e6",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ الْكَلِمَاتِ لِتُكَوِّنَ جُمْلَةً", "Arrange the words to make a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata-kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "أَنَا خَلِيلٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f466/512.webp"
            },
            {
              id: "indonesia-g3u5l1writeindonesia-g3u5l1v8",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"جَدِيدٌ\"", "Type the Arabic word for: \"new\"", "Taip perkataan Arab untuk: \"baru\"", "Ketik kata Arab untuk: \"baru\"", "Tape le mot arabe pour : \"nouveau\"", "Escribe la palabra árabe para: \"nuevo\""),
              arabicText: "جَدِيدٌ",
              answer: "جَدِيدٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.webp"
            },
            {
              id: "indonesia-g3u5l1listenindonesia-g3u5l1v4",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "مَدْرَسَتِي",
              options: [
                "قِطَّةٌ",
                "شَمْسٌ",
                "مَدْرَسَتِي"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3eb/512.webp"
            },
            {
              id: "indonesia-g3u5l1writeindonesia-g3u5l1v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"صَدِيقٌ\"", "Type the Arabic word for: \"friend\"", "Taip perkataan Arab untuk: \"kawan\"", "Ketik kata Arab untuk: \"teman\"", "Tape le mot arabe pour : \"ami\"", "Escribe la palabra árabe para: \"amigo\""),
              arabicText: "صَدِيقٌ",
              answer: "صَدِيقٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f466/512.webp"
            },
            {
              id: "indonesia-g3u5l1mcqindonesia-g3u5l1v5",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"فَصْلِي\"؟", "What does \"my classroom\" mean?", "Apakah maksud \"kelas saya\"?", "Apa arti \"kelasku\"?", "Que signifie \"ma classe\" ?", "¿Qué significa \"mi aula\"?"),
              arabicText: "فَصْلِي",
              options: [
                "my classroom",
                "running",
                "with me",
                "fish"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9d1-200d-1f3eb/512.webp"
            },
            {
              id: "indonesia-g3u5l1speakindonesia-g3u5l1v5",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "فَصْلِي",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9d1-200d-1f3eb/512.webp"
            },
            {
              id: "indonesia-g3u5l1spellindonesia-g3u5l1v8",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "جَدِيدٌ",
              answer: "جَدِيدٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.webp"
            }
          ]
        },
        {
          id: "indonesia-g3u5review",
          unitId: "indonesia-g3u5",
          gradeId: "indonesia-g3",
          order: 2,
          title: t("مراجعة الوحدة", "Unit Review", "Ulangan Unit", "Ulangan Unit", "Révision de l’unité", "Revisión de la unidad"),
          skills: [
            "listening",
            "reading",
            "writing"
          ],
          intro: t("لنراجع ما تعلّمناه في هذه الوحدة!", "Let’s review what we learned in this unit!", "Mari ulangkaji apa yang kita pelajari dalam unit ini!", "Mari kita ulang apa yang kita pelajari dalam unit ini!", "Révisons ce que nous avons appris dans cette unité !", "¡Repasemos lo que aprendimos en esta unidad!"),
          vocabulary: [
            {
              id: "indonesia-g3u5l1v1",
              arabic: "صَدِيقٌ",
              transliteration: "ṣadīq",
              translation: t("صَدِيقٌ", "friend", "kawan", "teman", "ami", "amigo"),
              emoji: "👦"
            },
            {
              id: "indonesia-g3u5l1v2",
              arabic: "صَدِيقَتِي",
              transliteration: "ṣadīqatī",
              translation: t("صَدِيقَتِي", "my female friend", "kawan saya", "teman saya", "mon amie", "mi amiga"),
              emoji: "👧"
            },
            {
              id: "indonesia-g3u5l1v3",
              arabic: "مَعِي",
              transliteration: "maʿī",
              translation: t("مَعِي", "with me", "dengan saya", "bersama saya", "avec moi", "conmigo"),
              emoji: "🤝"
            },
            {
              id: "indonesia-g3u5l1v4",
              arabic: "مَدْرَسَتِي",
              transliteration: "madrasatī",
              translation: t("مَدْرَسَتِي", "my school", "sekolah saya", "sekolahku", "mon école", "mi escuela"),
              emoji: "🏫"
            },
            {
              id: "indonesia-g3u5l1v5",
              arabic: "فَصْلِي",
              transliteration: "faṣlī",
              translation: t("فَصْلِي", "my classroom", "kelas saya", "kelasku", "ma classe", "mi aula"),
              emoji: "🧑‍🏫"
            },
            {
              id: "indonesia-g3u5l1v6",
              arabic: "اسْمٌ",
              transliteration: "ism",
              translation: t("اسْمٌ", "name", "nama", "nama", "nom", "nombre"),
              emoji: "🏷️"
            },
            {
              id: "indonesia-g3u5l1v7",
              arabic: "عُمْرٌ",
              transliteration: "ʿumr",
              translation: t("عُمْرٌ", "age", "umur", "usia", "âge", "edad"),
              emoji: "🎂"
            },
            {
              id: "indonesia-g3u5l1v8",
              arabic: "جَدِيدٌ",
              transliteration: "jadīd",
              translation: t("جَدِيدٌ", "new", "baru", "baru", "nouveau", "nuevo"),
              emoji: "✨"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "indonesia-g3u5reviewspeakindonesia-g3u5l1v4",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "مَدْرَسَتِي",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3eb/512.webp"
            },
            {
              id: "indonesia-g3u5reviewlistenindonesia-g3u5l1v4",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "مَدْرَسَتِي",
              options: [
                "المَدْرَسَةُ",
                "مَدْرَسَتِي",
                "دِيكٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3eb/512.webp"
            },
            {
              id: "indonesia-g3u5reviewspellindonesia-g3u5l1v3",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "مَعِي",
              answer: "مَعِي",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "indonesia-g3u5reviewmcqindonesia-g3u5l1v2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"صَدِيقَتِي\"؟", "What does \"my female friend\" mean?", "Apakah maksud \"kawan saya\"?", "Apa arti \"teman saya\"?", "Que signifie \"mon amie\" ?", "¿Qué significa \"mi amiga\"?"),
              arabicText: "صَدِيقَتِي",
              options: [
                "tiredness",
                "dog",
                "new",
                "my female friend"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f467/512.webp"
            },
            {
              id: "indonesia-g3u5reviewspellindonesia-g3u5l1v4",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "مَدْرَسَتِي",
              answer: "مَدْرَسَتِي",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3eb/512.webp"
            },
            {
              id: "indonesia-g3u5reviewspeakindonesia-g3u5l1v5",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "فَصْلِي",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9d1-200d-1f3eb/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "indonesia-g3u6",
      gradeId: "indonesia-g3",
      order: 6,
      title: t("الْحَدِيقَةُ", "The Garden", "Taman", "Taman", "Le jardin", "El jardín"),
      theme: "garden",
      lessons: [
        {
          id: "indonesia-g3u6l1",
          unitId: "indonesia-g3u6",
          gradeId: "indonesia-g3",
          order: 1,
          title: t("الْحَدِيقَةُ", "The Garden", "Taman", "Taman", "Le jardin", "El jardín"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("نَتَعَلَّمُ الْمَفَاهِيمَ وَالْكَلِمَاتِ الْجَدِيدَةَ فِي هٰذَا الدَّرْسِ.", "We learn new concepts and words in this lesson.", "Kita belajar konsep dan kata baharu dalam pelajaran ini.", "Kita belajar konsep dan kata baru dalam pelajaran ini.", "Nous apprenons de nouveaux concepts et mots dans cette leçon.", "Aprendemos nuevos conceptos y palabras en esta lección."),
          vocabulary: [
            {
              id: "indonesia-g3u6l1v1",
              arabic: "حَدِيقَةٌ",
              transliteration: "ḥadīqa",
              translation: t("حَدِيقَةٌ", "garden", "kebun", "taman", "jardin", "jardín"),
              emoji: "🌳"
            },
            {
              id: "indonesia-g3u6l1v2",
              arabic: "شَجَرَةٌ",
              transliteration: "shajarah",
              translation: t("شَجَرَةٌ", "tree", "pokok", "pohon", "arbre", "árbol"),
              emoji: "🌳"
            },
            {
              id: "indonesia-g3u6l1v3",
              arabic: "زَهْرَةٌ",
              transliteration: "zahra",
              translation: t("زَهْرَةٌ", "flower", "bunga", "bunga", "fleur", "flor"),
              emoji: "🌸"
            },
            {
              id: "indonesia-g3u6l1v4",
              arabic: "عُشْبٌ",
              transliteration: "ʿushb",
              translation: t("عُشْبٌ", "grass", "rumput", "rumput", "herbe", "pasto"),
              emoji: "🌿"
            },
            {
              id: "indonesia-g3u6l1v5",
              arabic: "مَاءٌ",
              transliteration: "māʾ",
              translation: t("مَاءٌ", "water", "air", "air", "eau", "agua"),
              emoji: "💧"
            },
            {
              id: "indonesia-g3u6l1v6",
              arabic: "طَيْرٌ",
              transliteration: "ṭayr",
              translation: t("طَيْرٌ", "bird", "burung", "burung", "oiseau", "pájaro"),
              emoji: "🐦"
            },
            {
              id: "indonesia-g3u6l1v7",
              arabic: "فَرَاشَةٌ",
              transliteration: "farāsha",
              translation: t("فَرَاشَةٌ", "butterfly", "rama-rama", "kupu-kupu", "papillon", "mariposa"),
              emoji: "🦋"
            },
            {
              id: "indonesia-g3u6l1v8",
              arabic: "شَمْسٌ",
              transliteration: "shams",
              translation: t("شَمْسٌ", "sun", "matahari", "matahari", "soleil", "sol"),
              emoji: "☀️"
            }
          ],
          dialogue: [
            {
              speaker: "الْبِطَلُ",
              arabic: "هٰذِهِ حَدِيقَةٌ جَمِيلَةٌ.",
              translation: t("هٰذِهِ حَدِيقَةٌ جَمِيلَةٌ.", "This is a beautiful garden.", "Ini taman yang cantik.", "Ini taman yang indah.", "C’est un beau jardin.", "Este es un jardín hermoso.")
            },
            {
              speaker: "زَمِيلُهُ",
              arabic: "فِيهَا شَجَرَةٌ وَزَهْرَةٌ.",
              translation: t("فِيهَا شَجَرَةٌ وَزَهْرَةٌ.", "There is a tree and a flower in it.", "Di situ ada pokok dan bunga.", "Di situ ada pohon dan bunga.", "Il y a un arbre et une fleur.", "Hay un árbol y una flor.")
            },
            {
              speaker: "الْبِطَلُ",
              arabic: "وَهٰذَا مَاءٌ لِلزَّهْرَةِ.",
              translation: t("وَهٰذَا مَاءٌ لِلزَّهْرَةِ.", "And this is water for the flower.", "Dan ini air untuk bunga.", "Dan ini air untuk bunga.", "Et voici de l’eau pour la fleur.", "Y esta es agua para la flor.")
            },
            {
              speaker: "زَمِيلُهُ",
              arabic: "الْحَدِيقَةُ جَمِيلَةٌ.",
              translation: t("الْحَدِيقَةُ جَمِيلَةٌ.", "The garden is beautiful.", "Taman ini cantik.", "Taman ini indah.", "Le jardin est beau.", "El jardín es hermoso.")
            }
          ],
          exercises: [
            {
              id: "indonesia-g3u6l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "زَهْرَةٌ",
              options: [
                "زَهْرَةٌ",
                "شَجَرَةٌ",
                "مَاءٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Flower%20garden.jpg"
            },
            {
              id: "indonesia-g3u6l1e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan maknanya", "Relie le mot à son sens", "Relaciona la palabra con su significado"),
              pairs: [
                {
                  a: "حَدِيقَةٌ",
                  b: "garden"
                },
                {
                  a: "شَجَرَةٌ",
                  b: "tree"
                },
                {
                  a: "زَهْرَةٌ",
                  b: "flower"
                },
                {
                  a: "فَرَاشَةٌ",
                  b: "butterfly"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f333/512.webp"
            },
            {
              id: "indonesia-g3u6l1e3",
              type: "mcq",
              skill: "reading",
              prompt: t("اخْتَرِ الْجَوَابَ الصَّحِيحَ", "Choose the correct answer", "Pilih jawapan yang betul", "Pilih jawaban yang benar", "Choisis la bonne réponse", "Elige la respuesta correcta"),
              options: [
                "حَدِيقَةٌ",
                "عُشْبٌ",
                "شَمْسٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f333/512.webp"
            },
            {
              id: "indonesia-g3u6l1e4",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ", "Speak", "Bercakap", "Bicara", "Parle", "Habla"),
              arabicText: "هٰذِهِ حَدِيقَةٌ جَمِيلَةٌ. / فِيهَا شَجَرَةٌ وَزَهْرَةٌ.",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f333/512.webp"
            },
            {
              id: "indonesia-g3u6l1e5",
              type: "writing",
              skill: "writing",
              prompt: t("اُكْتُبِ الْكَلِمَاتِ", "Write the words", "Tulis perkataan", "Tulis kata-kata", "Écris les mots", "Escribe las palabras"),
              arabicText: "حَدِيقَةٌ، شَجَرَةٌ، زَهْرَةٌ، عُشْبٌ، مَاءٌ، فَرَاشَةٌ، شَمْسٌ، طَيْرٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f333/512.webp"
            },
            {
              id: "indonesia-g3u6l1e6",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ الْكَلِمَاتِ لِتُكَوِّنَ جُمْلَةً", "Arrange the words to make a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata-kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "الْحَدِيقَةُ جَمِيلَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f333/512.webp"
            },
            {
              id: "indonesia-g3u6l1mcqindonesia-g3u6l1v3",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"زَهْرَةٌ\"؟", "What does \"flower\" mean?", "Apakah maksud \"bunga\"?", "Apa arti \"bunga\"?", "Que signifie \"fleur\" ?", "¿Qué significa \"flor\"?"),
              arabicText: "زَهْرَةٌ",
              options: [
                "flower",
                "teacher",
                "pain",
                "Arabic lesson"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f338/512.webp"
            },
            {
              id: "indonesia-g3u6l1speakindonesia-g3u6l1v1",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "حَدِيقَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f333/512.webp"
            },
            {
              id: "indonesia-g3u6l1writeindonesia-g3u6l1v7",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"فَرَاشَةٌ\"", "Type the Arabic word for: \"butterfly\"", "Taip perkataan Arab untuk: \"rama-rama\"", "Ketik kata Arab untuk: \"kupu-kupu\"", "Tape le mot arabe pour : \"papillon\"", "Escribe la palabra árabe para: \"mariposa\""),
              arabicText: "فَرَاشَةٌ",
              answer: "فَرَاشَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f98b/512.webp"
            },
            {
              id: "indonesia-g3u6l1mcqindonesia-g3u6l1v6",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"طَيْرٌ\"؟", "What does \"bird\" mean?", "Apakah maksud \"burung\"?", "Apa arti \"burung\"?", "Que signifie \"oiseau\" ?", "¿Qué significa \"pájaro\"?"),
              arabicText: "طَيْرٌ",
              options: [
                "flower",
                "bird",
                "health",
                "name"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f426/512.webp"
            },
            {
              id: "indonesia-g3u6l1spellindonesia-g3u6l1v6",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "طَيْرٌ",
              answer: "طَيْرٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f426/512.webp"
            },
            {
              id: "indonesia-g3u6l1listenindonesia-g3u6l1v4",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "عُشْبٌ",
              options: [
                "عُشْبٌ",
                "سَعِيدٌ",
                "يَوْمُ الْإِثْنَيْنِ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f33f/512.webp"
            }
          ]
        },
        {
          id: "indonesia-g3u6review",
          unitId: "indonesia-g3u6",
          gradeId: "indonesia-g3",
          order: 2,
          title: t("مراجعة الوحدة", "Unit Review", "Ulangan Unit", "Ulangan Unit", "Révision de l’unité", "Revisión de la unidad"),
          skills: [
            "listening",
            "reading",
            "writing"
          ],
          intro: t("لنراجع ما تعلّمناه في هذه الوحدة!", "Let’s review what we learned in this unit!", "Mari ulangkaji apa yang kita pelajari dalam unit ini!", "Mari kita ulang apa yang kita pelajari dalam unit ini!", "Révisons ce que nous avons appris dans cette unité !", "¡Repasemos lo que aprendimos en esta unidad!"),
          vocabulary: [
            {
              id: "indonesia-g3u6l1v1",
              arabic: "حَدِيقَةٌ",
              transliteration: "ḥadīqa",
              translation: t("حَدِيقَةٌ", "garden", "kebun", "taman", "jardin", "jardín"),
              emoji: "🌳"
            },
            {
              id: "indonesia-g3u6l1v2",
              arabic: "شَجَرَةٌ",
              transliteration: "shajarah",
              translation: t("شَجَرَةٌ", "tree", "pokok", "pohon", "arbre", "árbol"),
              emoji: "🌳"
            },
            {
              id: "indonesia-g3u6l1v3",
              arabic: "زَهْرَةٌ",
              transliteration: "zahra",
              translation: t("زَهْرَةٌ", "flower", "bunga", "bunga", "fleur", "flor"),
              emoji: "🌸"
            },
            {
              id: "indonesia-g3u6l1v4",
              arabic: "عُشْبٌ",
              transliteration: "ʿushb",
              translation: t("عُشْبٌ", "grass", "rumput", "rumput", "herbe", "pasto"),
              emoji: "🌿"
            },
            {
              id: "indonesia-g3u6l1v5",
              arabic: "مَاءٌ",
              transliteration: "māʾ",
              translation: t("مَاءٌ", "water", "air", "air", "eau", "agua"),
              emoji: "💧"
            },
            {
              id: "indonesia-g3u6l1v6",
              arabic: "طَيْرٌ",
              transliteration: "ṭayr",
              translation: t("طَيْرٌ", "bird", "burung", "burung", "oiseau", "pájaro"),
              emoji: "🐦"
            },
            {
              id: "indonesia-g3u6l1v7",
              arabic: "فَرَاشَةٌ",
              transliteration: "farāsha",
              translation: t("فَرَاشَةٌ", "butterfly", "rama-rama", "kupu-kupu", "papillon", "mariposa"),
              emoji: "🦋"
            },
            {
              id: "indonesia-g3u6l1v8",
              arabic: "شَمْسٌ",
              transliteration: "shams",
              translation: t("شَمْسٌ", "sun", "matahari", "matahari", "soleil", "sol"),
              emoji: "☀️"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "indonesia-g3u6reviewmcqindonesia-g3u6l1v2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"شَجَرَةٌ\"؟", "What does \"tree\" mean?", "Apakah maksud \"pokok\"?", "Apa arti \"pohon\"?", "Que signifie \"arbre\" ?", "¿Qué significa \"árbol\"?"),
              arabicText: "شَجَرَةٌ",
              options: [
                "new",
                "swimming",
                "tree",
                "doctor"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f333/512.webp"
            },
            {
              id: "indonesia-g3u6reviewmcqindonesia-g3u6l1v5",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"مَاءٌ\"؟", "What does \"water\" mean?", "Apakah maksud \"air\"?", "Apa arti \"air\"?", "Que signifie \"eau\" ?", "¿Qué significa \"agua\"?"),
              arabicText: "مَاءٌ",
              options: [
                "tiredness",
                "book",
                "water",
                "hospital"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a7/512.webp"
            },
            {
              id: "indonesia-g3u6reviewlistenindonesia-g3u6l1v4",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "عُشْبٌ",
              options: [
                "عُمْرٌ",
                "عُشْبٌ",
                "زَهْرَةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f33f/512.webp"
            },
            {
              id: "indonesia-g3u6reviewspeakindonesia-g3u6l1v4",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "عُشْبٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f33f/512.webp"
            },
            {
              id: "indonesia-g3u6reviewlistenindonesia-g3u6l1v5",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "مَاءٌ",
              options: [
                "مَاءٌ",
                "أَسَدٌ",
                "شَجَرَةٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a7/512.webp"
            },
            {
              id: "indonesia-g3u6reviewspeakindonesia-g3u6l1v5",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "مَاءٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a7/512.webp"
            }
          ]
        }
      ]
    }
  ]
};
