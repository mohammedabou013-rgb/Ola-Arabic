import { t, type GradeData, type Lesson } from "./types";

export const indonesiaGrade2: GradeData = {
  id: "indonesia-g2",
  number: 2,
  title: t("المستوى الثاني", "Stage 2", "Tahun 2", "Kelas 2", "Année 2", "Año 2"),
  description: t("نَتَعَلَّمُ دُرُوسًا عَنْ الْمَدْرَسَةِ وَالْأَدَوَاتِ وَالْأُسْرَةِ وَالْحَيَوَانَاتِ وَالْأَرْقَامِ.", "We learn lessons about school, tools, family, animals, and numbers.", "Kita belajar tentang sekolah, alat, keluarga, haiwan, dan nombor.", "Kita belajar tentang sekolah, alat, keluarga, hewan, dan angka.", "Nous apprenons des leçons sur l’école, les outils, la famille, les animaux et les nombres.", "Aprendemos lecciones sobre la escuela, los útiles, la familia, los animales y los números."),
  color: "#0EA5E9",
  icon: "book-open",
  units: [
    {
      id: "indonesia-g2u1",
      gradeId: "indonesia-g2",
      order: 1,
      title: t("أَفْرَادُ الْمَدْرَسَةِ", "School Members", "Ahli Sekolah", "Anggota Sekolah", "Les membres de l’école", "Los miembros de la escuela"),
      theme: "school-members",
      lessons: [
        {
          id: "indonesia-g2u1l1",
          unitId: "indonesia-g2u1",
          gradeId: "indonesia-g2",
          order: 1,
          title: t("أَفْرَادُ الْمَدْرَسَةِ", "School Members", "Ahli Sekolah", "Anggota Sekolah", "Les membres de l’école", "Los miembros de la escuela"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("نَتَعَلَّمُ الْكَلِمَاتِ وَنُتَدَرِّبُ عَلَى الْحِوَارِ وَالْقِرَاءَةِ وَالْكِتَابَةِ.", "We learn words and practice dialogue, reading, and writing.", "Kita belajar perkataan dan berlatih dialog, membaca, dan menulis.", "Kita belajar kata dan berlatih dialog, membaca, dan menulis.", "Nous apprenons des mots et pratiquons le dialogue, la lecture et l’écriture.", "Aprendemos palabras y practicamos el diálogo, la lectura y la escritura."),
          vocabulary: [
            {
              id: "indonesia-g2u1l1v1",
              arabic: "مُدَرِّسٌ",
              transliteration: "teacher",
              translation: t("مُدَرِّسٌ", "teacher", "guru", "guru", "enseignant", "maestro"),
              emoji: "👩‍🏫"
            },
            {
              id: "indonesia-g2u1l1v2",
              arabic: "طَالِبٌ",
              transliteration: "student",
              translation: t("طَالِبٌ", "student", "murid", "siswa", "élève", "estudiante"),
              emoji: "🧒"
            },
            {
              id: "indonesia-g2u1l1v3",
              arabic: "طَالِبَةٌ",
              transliteration: "girl student",
              translation: t("طَالِبَةٌ", "girl student", "murid perempuan", "siswi", "élève", "alumna"),
              emoji: "👧"
            },
            {
              id: "indonesia-g2u1l1v4",
              arabic: "مُدِيرٌ",
              transliteration: "principal",
              translation: t("مُدِيرٌ", "principal", "pengetua", "kepala sekolah", "directeur", "director"),
              emoji: "👨‍💼"
            },
            {
              id: "indonesia-g2u1l1v5",
              arabic: "حَارِسٌ",
              transliteration: "guard",
              translation: t("حَارِسٌ", "guard", "pengawal", "penjaga", "gardien", "guardián"),
              emoji: "🛡️"
            },
            {
              id: "indonesia-g2u1l1v6",
              arabic: "بَوَّابٌ",
              transliteration: "doorkeeper",
              translation: t("بَوَّابٌ", "doorkeeper", "jaga pintu", "penjaga pintu", "portier", "portero"),
              emoji: "🚪"
            },
            {
              id: "indonesia-g2u1l1v7",
              arabic: "مُوَظَّفٌ",
              transliteration: "staff",
              translation: t("مُوَظَّفٌ", "staff", "petugas", "pegawai", "employé", "empleado"),
              emoji: "🧾"
            },
            {
              id: "indonesia-g2u1l1v8",
              arabic: "كَنَّاسٌ",
              transliteration: "janitor",
              translation: t("كَنَّاسٌ", "janitor", "tukang kebersihan", "petugas kebersihan", "agent d’entretien", "conserje"),
              emoji: "🧹"
            },
            {
              id: "indonesia-g2u1l1v9",
              arabic: "مَدْرَسَةٌ",
              transliteration: "school",
              translation: t("مَدْرَسَةٌ", "school", "sekolah", "sekolah", "école", "escuela"),
              emoji: "🏫"
            },
            {
              id: "indonesia-g2u1l1v10",
              arabic: "فَصْلٌ",
              transliteration: "classroom",
              translation: t("فَصْلٌ", "classroom", "bilik darjah", "kelas", "classe", "aula"),
              emoji: "🏫"
            }
          ],
          dialogue: [
            {
              speaker: "مُعَلِّمٌ",
              arabic: "مَنْ هٰذَا؟",
              translation: t("مَنْ هٰذَا؟", "Siapa ini?", "Siapa ini?", "Qui est-ce ?", "¿Quién es este?", "👩‍🏫")
            },
            {
              speaker: "تِلْمِيذٌ",
              arabic: "هٰذَا مُدَرِّسٌ.",
              translation: t("هٰذَا مُدَرِّسٌ.", "Ini guru.", "Ini guru.", "C’est un enseignant.", "Este es un maestro.", "👨‍🏫")
            },
            {
              speaker: "مُعَلِّمٌ",
              arabic: "وَمَنْ هٰذِهِ؟",
              translation: t("وَمَنْ هٰذِهِ؟", "Dan siapa ini?", "Dan siapa ini?", "Et qui est-ce ?", "¿Y quién es esta?", "👧")
            },
            {
              speaker: "تِلْمِيذٌ",
              arabic: "هٰذِهِ طَالِبَةٌ.",
              translation: t("هٰذِهِ طَالِبَةٌ.", "Ini murid perempuan.", "Ini siswi.", "C’est une élève.", "Esta es una alumna.", "👧")
            }
          ],
          exercises: [
            {
              id: "indonesia-g2u1l1e1",
              type: "mcq",
              skill: "reading",
              prompt: t("اخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ.", "Choose the correct word.", "Pilih perkataan yang betul.", "Pilih kata yang tepat.", "Choisis le mot correct.", "Elige la palabra correcta."),
              options: [
                "مُدَرِّسٌ",
                "مُدِيرٌ",
                "بَوَّابٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Teacher_in_classroom.jpg"
            },
            {
              id: "indonesia-g2u1l1e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلْ بَيْنَ الْكَلِمَةِ وَالصُّورَةِ.", "Match the word and picture.", "Padankan perkataan dan gambar.", "Cocokkan kata dan gambar.", "Relie le mot et l’image.", "Une la palabra y la imagen."),
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/School.jpg",
              pairs: [
                {
                  a: "مُدَرِّسٌ",
                  b: "👩‍🏫"
                },
                {
                  a: "طَالِبٌ",
                  b: "🧒"
                },
                {
                  a: "مَدْرَسَةٌ",
                  b: "🏫"
                }
              ]
            },
            {
              id: "indonesia-g2u1l1e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنْ أَفْرَادِ الْمَدْرَسَةِ.", "Speak about school members.", "Bercakap tentang ahli sekolah.", "Bicarakan anggota sekolah.", "Parle des membres de l’école.", "Habla de los miembros de la escuela."),
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f469-200d-1f3eb/512.webp",
              arabicText: "مُدَرِّسٌ، طَالِبٌ، طَالِبَةٌ"
            },
            {
              id: "indonesia-g2u1l1e4",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ الْكَلِمَاتِ.", "Arrange the words.", "Susun perkataan.", "Susun kata-kata.", "Range les mots.", "Ordena las palabras."),
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f469-200d-1f3eb/512.webp",
              arabicText: "هٰذَا مُدَرِّسٌ فِي الْفَصْلِ",
              answer: "هٰذَا مُدَرِّسٌ فِي الْفَصْلِ"
            },
            {
              id: "indonesia-g2u1l1e5",
              type: "writing",
              skill: "writing",
              prompt: t("اُكْتُبِ الْكَلِمَةَ.", "Write the word.", "Tulis perkataan.", "Tulis kata.", "Écris le mot.", "Escribe la palabra."),
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3eb/512.webp",
              arabicText: "مَدْرَسَةٌ",
              answer: "مَدْرَسَةٌ"
            },
            {
              id: "indonesia-g2u1l1speakindonesia-g2u1l1v3",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "طَالِبَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f467/512.webp"
            },
            {
              id: "indonesia-g2u1l1arrange4",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "هٰذِهِ طَالِبَةٌ.",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f469-200d-1f3eb/512.webp"
            },
            {
              id: "indonesia-g2u1l1arrange3",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "وَمَنْ هٰذِهِ؟",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f469-200d-1f3eb/512.webp"
            },
            {
              id: "indonesia-g2u1l1speakindonesia-g2u1l1v5",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "حَارِسٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6e1-fe0f/512.webp"
            },
            {
              id: "indonesia-g2u1l1writeindonesia-g2u1l1v8",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"كَنَّاسٌ\"", "Type the Arabic word for: \"janitor\"", "Taip perkataan Arab untuk: \"tukang kebersihan\"", "Ketik kata Arab untuk: \"petugas kebersihan\"", "Tape le mot arabe pour : \"agent d’entretien\"", "Escribe la palabra árabe para: \"conserje\""),
              arabicText: "كَنَّاسٌ",
              answer: "كَنَّاسٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9f9/512.webp"
            }
          ]
        },
        {
          id: "indonesia-g2u1review",
          unitId: "indonesia-g2u1",
          gradeId: "indonesia-g2",
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
              id: "indonesia-g2u1l1v1",
              arabic: "مُدَرِّسٌ",
              transliteration: "teacher",
              translation: t("مُدَرِّسٌ", "teacher", "guru", "guru", "enseignant", "maestro"),
              emoji: "👩‍🏫"
            },
            {
              id: "indonesia-g2u1l1v2",
              arabic: "طَالِبٌ",
              transliteration: "student",
              translation: t("طَالِبٌ", "student", "murid", "siswa", "élève", "estudiante"),
              emoji: "🧒"
            },
            {
              id: "indonesia-g2u1l1v3",
              arabic: "طَالِبَةٌ",
              transliteration: "girl student",
              translation: t("طَالِبَةٌ", "girl student", "murid perempuan", "siswi", "élève", "alumna"),
              emoji: "👧"
            },
            {
              id: "indonesia-g2u1l1v4",
              arabic: "مُدِيرٌ",
              transliteration: "principal",
              translation: t("مُدِيرٌ", "principal", "pengetua", "kepala sekolah", "directeur", "director"),
              emoji: "👨‍💼"
            },
            {
              id: "indonesia-g2u1l1v5",
              arabic: "حَارِسٌ",
              transliteration: "guard",
              translation: t("حَارِسٌ", "guard", "pengawal", "penjaga", "gardien", "guardián"),
              emoji: "🛡️"
            },
            {
              id: "indonesia-g2u1l1v6",
              arabic: "بَوَّابٌ",
              transliteration: "doorkeeper",
              translation: t("بَوَّابٌ", "doorkeeper", "jaga pintu", "penjaga pintu", "portier", "portero"),
              emoji: "🚪"
            },
            {
              id: "indonesia-g2u1l1v7",
              arabic: "مُوَظَّفٌ",
              transliteration: "staff",
              translation: t("مُوَظَّفٌ", "staff", "petugas", "pegawai", "employé", "empleado"),
              emoji: "🧾"
            },
            {
              id: "indonesia-g2u1l1v8",
              arabic: "كَنَّاسٌ",
              transliteration: "janitor",
              translation: t("كَنَّاسٌ", "janitor", "tukang kebersihan", "petugas kebersihan", "agent d’entretien", "conserje"),
              emoji: "🧹"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "indonesia-g2u1reviewspeakindonesia-g2u1l1v8",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "كَنَّاسٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9f9/512.webp"
            },
            {
              id: "indonesia-g2u1reviewmcqindonesia-g2u1l1v8",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"كَنَّاسٌ\"؟", "What does \"janitor\" mean?", "Apakah maksud \"tukang kebersihan\"?", "Apa arti \"petugas kebersihan\"?", "Que signifie \"agent d’entretien\" ?", "¿Qué significa \"conserje\"?"),
              arabicText: "كَنَّاسٌ",
              options: [
                "kitchen",
                "janitor",
                "father",
                "garden"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9f9/512.webp"
            },
            {
              id: "indonesia-g2u1reviewlistenindonesia-g2u1l1v5",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "حَارِسٌ",
              options: [
                "خَمْسَةٌ",
                "أُخْتٌ",
                "حَارِسٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6e1-fe0f/512.webp"
            },
            {
              id: "indonesia-g2u1reviewmcqindonesia-g2u1l1v7",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"مُوَظَّفٌ\"؟", "What does \"staff\" mean?", "Apakah maksud \"petugas\"?", "Apa arti \"pegawai\"?", "Que signifie \"employé\" ?", "¿Qué significa \"empleado\"?"),
              arabicText: "مُوَظَّفٌ",
              options: [
                "window",
                "dog",
                "board",
                "staff"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9fe/512.webp"
            },
            {
              id: "indonesia-g2u1reviewlistenindonesia-g2u1l1v6",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "بَوَّابٌ",
              options: [
                "بَوَّابٌ",
                "أُمٌّ",
                "مَدْرَسَةٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6aa/512.webp"
            },
            {
              id: "indonesia-g2u1reviewmcqindonesia-g2u1l1v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"مُدَرِّسٌ\"؟", "What does \"teacher\" mean?", "Apakah maksud \"guru\"?", "Apa arti \"guru\"?", "Que signifie \"enseignant\" ?", "¿Qué significa \"maestro\"?"),
              arabicText: "مُدَرِّسٌ",
              options: [
                "tree",
                "classroom",
                "teacher",
                "row/class"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f469-200d-1f3eb/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "indonesia-g2u2",
      gradeId: "indonesia-g2",
      order: 2,
      title: t("الْأَدَوَاتُ الْمَدْرَسِيَّةُ", "School Tools", "Alat Sekolah", "Alat Sekolah", "Les outils scolaires", "Los útiles escolares"),
      theme: "school-tools",
      lessons: [
        {
          id: "indonesia-g2u2l1",
          unitId: "indonesia-g2u2",
          gradeId: "indonesia-g2",
          order: 1,
          title: t("الْأَدَوَاتُ الْمَدْرَسِيَّةُ", "School Tools", "Alat Sekolah", "Alat Sekolah", "Les outils scolaires", "Los útiles escolares"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("نَتَعَلَّمُ الْكَلِمَاتِ وَنُتَدَرِّبُ عَلَى الْحِوَارِ وَالْقِرَاءَةِ وَالْكِتَابَةِ.", "We learn words and practice dialogue, reading, and writing.", "Kita belajar perkataan dan berlatih dialog, membaca, dan menulis.", "Kita belajar kata dan berlatih dialog, membaca, dan menulis.", "Nous apprenons des mots et pratiquons le dialogue, la lecture et l’écriture.", "Aprendemos palabras y practicamos el diálogo, la lectura y la escritura."),
          vocabulary: [
            {
              id: "indonesia-g2u2l1v1",
              arabic: "كِتَابٌ",
              transliteration: "book",
              translation: t("كِتَابٌ", "book", "buku", "buku", "livre", "libro"),
              emoji: "📘"
            },
            {
              id: "indonesia-g2u2l1v2",
              arabic: "دَفْتَرٌ",
              transliteration: "notebook",
              translation: t("دَفْتَرٌ", "notebook", "buku tulis", "buku tulis", "cahier", "cuaderno"),
              emoji: "📓"
            },
            {
              id: "indonesia-g2u2l1v3",
              arabic: "قَلَمٌ",
              transliteration: "pen",
              translation: t("قَلَمٌ", "pen", "pen", "pena", "stylo", "bolígrafo"),
              emoji: "✏️"
            },
            {
              id: "indonesia-g2u2l1v4",
              arabic: "قَلَمُ الرَّصَاصِ",
              transliteration: "pencil",
              translation: t("قَلَمُ الرَّصَاصِ", "pencil", "pensil", "pensil", "crayon", "lápiz"),
              emoji: "✏️"
            },
            {
              id: "indonesia-g2u2l1v5",
              arabic: "مِسْطَرَةٌ",
              transliteration: "ruler",
              translation: t("مِسْطَرَةٌ", "ruler", "pembaris", "penggaris", "règle", "regla"),
              emoji: "📏"
            },
            {
              id: "indonesia-g2u2l1v6",
              arabic: "مِمْحَاةٌ",
              transliteration: "eraser",
              translation: t("مِمْحَاةٌ", "eraser", "pemadam", "penghapus", "gomme", "borrador"),
              emoji: "🧽"
            },
            {
              id: "indonesia-g2u2l1v7",
              arabic: "مِقَصٌّ",
              transliteration: "scissors",
              translation: t("مِقَصٌّ", "scissors", "gunting", "gunting", "ciseaux", "tijeras"),
              emoji: "✂️"
            },
            {
              id: "indonesia-g2u2l1v8",
              arabic: "صَمْغٌ",
              transliteration: "glue",
              translation: t("صَمْغٌ", "glue", "gam", "lem", "colle", "pegamento"),
              emoji: "🧴"
            },
            {
              id: "indonesia-g2u2l1v9",
              arabic: "أَلْوَانٌ",
              transliteration: "colours",
              translation: t("أَلْوَانٌ", "colours", "warna", "warna", "couleurs", "colores"),
              emoji: "🖍️"
            },
            {
              id: "indonesia-g2u2l1v10",
              arabic: "حَقِيبَةٌ",
              transliteration: "bag",
              translation: t("حَقِيبَةٌ", "bag", "beg", "tas", "sac", "bolsa"),
              emoji: "🎒"
            }
          ],
          dialogue: [
            {
              speaker: "مُعَلِّمٌ",
              arabic: "مَا هٰذَا؟",
              translation: t("مَا هٰذَا؟", "Apa ini?", "Apa ini?", "Qu’est-ce que c’est ?", "¿Qué es esto?", "📘")
            },
            {
              speaker: "تِلْمِيذٌ",
              arabic: "هٰذَا كِتَابٌ.",
              translation: t("هٰذَا كِتَابٌ.", "Ini buku.", "Ini buku.", "C’est un livre.", "Esto es un libro.", "📘")
            },
            {
              speaker: "مُعَلِّمٌ",
              arabic: "وَمَا هٰذِهِ؟",
              translation: t("وَمَا هٰذِهِ؟", "Dan apa ini?", "Dan apa ini?", "Et qu’est-ce que c’est ?", "¿Y qué es esto?", "📏")
            },
            {
              speaker: "تِلْمِيذٌ",
              arabic: "هٰذِهِ مِسْطَرَةٌ.",
              translation: t("هٰذِهِ مِسْطَرَةٌ.", "Ini pembaris.", "Ini penggaris.", "C’est une règle.", "Es una regla.", "📏")
            }
          ],
          exercises: [
            {
              id: "indonesia-g2u2l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("اِسْتَمِعْ وَاخْتَرْ.", "Listen and choose.", "Dengar dan pilih.", "Dengar dan pilih.", "Écoute et choisis.", "Escucha y elige."),
              options: [
                "كِتَابٌ",
                "مِمْحَاةٌ",
                "مِقَصٌّ"
              ],
              correctIndex: 0,
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Books_in_a_school_bag.jpg",
              arabicText: "كِتَابٌ"
            },
            {
              id: "indonesia-g2u2l1e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلْ بَيْنَ الْكَلِمَةِ وَالصُّورَةِ.", "Match the word and picture.", "Padankan perkataan dan gambar.", "Cocokkan kata dan gambar.", "Relie le mot et l’image.", "Une la palabra y la imagen."),
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/School_supplies.jpg",
              pairs: [
                {
                  a: "كِتَابٌ",
                  b: "📘"
                },
                {
                  a: "قَلَمٌ",
                  b: "✏️"
                },
                {
                  a: "حَقِيبَةٌ",
                  b: "🎒"
                }
              ]
            },
            {
              id: "indonesia-g2u2l1e3",
              type: "mcq",
              skill: "reading",
              prompt: t("اخْتَرِ الْجَوَابَ.", "Choose the answer.", "Pilih jawapan.", "Pilih jawaban.", "Choisis la réponse.", "Elige la respuesta."),
              options: [
                "مِمْحَاةٌ",
                "دَفْتَرٌ",
                "حَقِيبَةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4d8/512.webp"
            },
            {
              id: "indonesia-g2u2l1e4",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ: مَا هٰذَا؟", "Say: What is this?", "Katakan: Apa ini?", "Katakan: Apa ini?", "Dis : qu’est-ce que c’est ?", "Di: ¿qué es esto?"),
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4d8/512.webp",
              arabicText: "هٰذَا كِتَابٌ"
            },
            {
              id: "indonesia-g2u2l1e5",
              type: "writing",
              skill: "writing",
              prompt: t("اُكْتُبْ.", "Write.", "Tulis.", "Tulis.", "Écris.", "Escribe."),
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9fd/512.webp",
              arabicText: "مِمْحَاةٌ",
              answer: "مِمْحَاةٌ"
            },
            {
              id: "indonesia-g2u2l1e6",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ الْكَلِمَاتِ", "Arrange the words", "Susun perkataan", "Susun kata-kata", "Range les mots", "Ordena las palabras"),
              answer: "مَا هٰذَا؟",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4d8/512.webp"
            },
            {
              id: "indonesia-g2u2l1mcqindonesia-g2u2l1v6",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"مِمْحَاةٌ\"؟", "What does \"eraser\" mean?", "Apakah maksud \"pemadam\"?", "Apa arti \"penghapus\"?", "Que signifie \"gomme\" ?", "¿Qué significa \"borrador\"?"),
              arabicText: "مِمْحَاةٌ",
              options: [
                "brother",
                "eraser",
                "bag",
                "desk"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9fd/512.webp"
            },
            {
              id: "indonesia-g2u2l1writeindonesia-g2u2l1v3",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"قَلَمٌ\"", "Type the Arabic word for: \"pen\"", "Taip perkataan Arab untuk: \"pen\"", "Ketik kata Arab untuk: \"pena\"", "Tape le mot arabe pour : \"stylo\"", "Escribe la palabra árabe para: \"bolígrafo\""),
              arabicText: "قَلَمٌ",
              answer: "قَلَمٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/270f-fe0f/512.webp"
            },
            {
              id: "indonesia-g2u2l1mcqindonesia-g2u2l1v4",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"قَلَمُ الرَّصَاصِ\"؟", "What does \"pencil\" mean?", "Apakah maksud \"pensil\"?", "Apa arti \"pensil\"?", "Que signifie \"crayon\" ?", "¿Qué significa \"lápiz\"?"),
              arabicText: "قَلَمُ الرَّصَاصِ",
              options: [
                "five",
                "pencil",
                "school",
                "pen"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/270f-fe0f/512.webp"
            },
            {
              id: "indonesia-g2u2l1listenindonesia-g2u2l1v4",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "قَلَمُ الرَّصَاصِ",
              options: [
                "حَارِسٌ",
                "صَمْغٌ",
                "قَلَمُ الرَّصَاصِ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/270f-fe0f/512.webp"
            },
            {
              id: "indonesia-g2u2l1writeindonesia-g2u2l1v7",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"مِقَصٌّ\"", "Type the Arabic word for: \"scissors\"", "Taip perkataan Arab untuk: \"gunting\"", "Ketik kata Arab untuk: \"gunting\"", "Tape le mot arabe pour : \"ciseaux\"", "Escribe la palabra árabe para: \"tijeras\""),
              arabicText: "مِقَصٌّ",
              answer: "مِقَصٌّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2702-fe0f/512.webp"
            },
            {
              id: "indonesia-g2u2l1mcqindonesia-g2u2l1v2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"دَفْتَرٌ\"؟", "What does \"notebook\" mean?", "Apakah maksud \"buku tulis\"?", "Apa arti \"buku tulis\"?", "Que signifie \"cahier\" ?", "¿Qué significa \"cuaderno\"?"),
              arabicText: "دَفْتَرٌ",
              options: [
                "student",
                "pencil",
                "five",
                "notebook"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4d3/512.webp"
            }
          ]
        },
        {
          id: "indonesia-g2u2review",
          unitId: "indonesia-g2u2",
          gradeId: "indonesia-g2",
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
              id: "indonesia-g2u2l1v1",
              arabic: "كِتَابٌ",
              transliteration: "book",
              translation: t("كِتَابٌ", "book", "buku", "buku", "livre", "libro"),
              emoji: "📘"
            },
            {
              id: "indonesia-g2u2l1v2",
              arabic: "دَفْتَرٌ",
              transliteration: "notebook",
              translation: t("دَفْتَرٌ", "notebook", "buku tulis", "buku tulis", "cahier", "cuaderno"),
              emoji: "📓"
            },
            {
              id: "indonesia-g2u2l1v3",
              arabic: "قَلَمٌ",
              transliteration: "pen",
              translation: t("قَلَمٌ", "pen", "pen", "pena", "stylo", "bolígrafo"),
              emoji: "✏️"
            },
            {
              id: "indonesia-g2u2l1v4",
              arabic: "قَلَمُ الرَّصَاصِ",
              transliteration: "pencil",
              translation: t("قَلَمُ الرَّصَاصِ", "pencil", "pensil", "pensil", "crayon", "lápiz"),
              emoji: "✏️"
            },
            {
              id: "indonesia-g2u2l1v5",
              arabic: "مِسْطَرَةٌ",
              transliteration: "ruler",
              translation: t("مِسْطَرَةٌ", "ruler", "pembaris", "penggaris", "règle", "regla"),
              emoji: "📏"
            },
            {
              id: "indonesia-g2u2l1v6",
              arabic: "مِمْحَاةٌ",
              transliteration: "eraser",
              translation: t("مِمْحَاةٌ", "eraser", "pemadam", "penghapus", "gomme", "borrador"),
              emoji: "🧽"
            },
            {
              id: "indonesia-g2u2l1v7",
              arabic: "مِقَصٌّ",
              transliteration: "scissors",
              translation: t("مِقَصٌّ", "scissors", "gunting", "gunting", "ciseaux", "tijeras"),
              emoji: "✂️"
            },
            {
              id: "indonesia-g2u2l1v8",
              arabic: "صَمْغٌ",
              transliteration: "glue",
              translation: t("صَمْغٌ", "glue", "gam", "lem", "colle", "pegamento"),
              emoji: "🧴"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "indonesia-g2u2reviewspeakindonesia-g2u2l1v5",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "مِسْطَرَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4cf/512.webp"
            },
            {
              id: "indonesia-g2u2reviewspeakindonesia-g2u2l1v7",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "مِقَصٌّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2702-fe0f/512.webp"
            },
            {
              id: "indonesia-g2u2reviewmcqindonesia-g2u2l1v6",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"مِمْحَاةٌ\"؟", "What does \"eraser\" mean?", "Apakah maksud \"pemadam\"?", "Apa arti \"penghapus\"?", "Que signifie \"gomme\" ?", "¿Qué significa \"borrador\"?"),
              arabicText: "مِمْحَاةٌ",
              options: [
                "moon",
                "nine",
                "eraser",
                "father"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9fd/512.webp"
            },
            {
              id: "indonesia-g2u2reviewlistenindonesia-g2u2l1v4",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "قَلَمُ الرَّصَاصِ",
              options: [
                "أَرْبَعَةٌ",
                "حَارِسٌ",
                "قَلَمُ الرَّصَاصِ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/270f-fe0f/512.webp"
            },
            {
              id: "indonesia-g2u2reviewwriteindonesia-g2u2l1v5",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"مِسْطَرَةٌ\"", "Type the Arabic word for: \"ruler\"", "Taip perkataan Arab untuk: \"pembaris\"", "Ketik kata Arab untuk: \"penggaris\"", "Tape le mot arabe pour : \"règle\"", "Escribe la palabra árabe para: \"regla\""),
              arabicText: "مِسْطَرَةٌ",
              answer: "مِسْطَرَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4cf/512.webp"
            },
            {
              id: "indonesia-g2u2reviewwriteindonesia-g2u2l1v4",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"قَلَمُ الرَّصَاصِ\"", "Type the Arabic word for: \"pencil\"", "Taip perkataan Arab untuk: \"pensil\"", "Ketik kata Arab untuk: \"pensil\"", "Tape le mot arabe pour : \"crayon\"", "Escribe la palabra árabe para: \"lápiz\""),
              arabicText: "قَلَمُ الرَّصَاصِ",
              answer: "قَلَمُ الرَّصَاصِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/270f-fe0f/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "indonesia-g2u3",
      gradeId: "indonesia-g2",
      order: 3,
      title: t("فِي الْفَصْلِ", "In the Classroom", "Di Dalam Kelas", "Di Dalam Kelas", "Dans la classe", "En el aula"),
      theme: "classroom",
      lessons: [
        {
          id: "indonesia-g2u3l1",
          unitId: "indonesia-g2u3",
          gradeId: "indonesia-g2",
          order: 1,
          title: t("فِي الْفَصْلِ", "In the Classroom", "Di Dalam Kelas", "Di Dalam Kelas", "Dans la classe", "En el aula"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("نَتَعَلَّمُ الْكَلِمَاتِ وَنُتَدَرِّبُ عَلَى الْحِوَارِ وَالْقِرَاءَةِ وَالْكِتَابَةِ.", "We learn words and practice dialogue, reading, and writing.", "Kita belajar perkataan dan berlatih dialog, membaca, dan menulis.", "Kita belajar kata dan berlatih dialog, membaca, dan menulis.", "Nous apprenons des mots et pratiquons le dialogue, la lecture et l’écriture.", "Aprendemos palabras y practicamos el diálogo, la lectura y la escritura."),
          vocabulary: [
            {
              id: "indonesia-g2u3l1v1",
              arabic: "سَبُّورَةٌ",
              transliteration: "board",
              translation: t("سَبُّورَةٌ", "board", "papan tulis", "papan tulis", "tableau", "pizarra"),
              emoji: "🟩"
            },
            {
              id: "indonesia-g2u3l1v2",
              arabic: "مَكْتَبٌ",
              transliteration: "desk",
              translation: t("مَكْتَبٌ", "desk", "meja", "meja", "bureau", "escritorio"),
              emoji: "🪑"
            },
            {
              id: "indonesia-g2u3l1v3",
              arabic: "كُرْسِيٌّ",
              transliteration: "chair",
              translation: t("كُرْسِيٌّ", "chair", "kerusi", "kursi", "chaise", "silla"),
              emoji: "🪑"
            },
            {
              id: "indonesia-g2u3l1v4",
              arabic: "بَابٌ",
              transliteration: "door",
              translation: t("بَابٌ", "door", "pintu", "pintu", "porte", "puerta"),
              emoji: "🚪"
            },
            {
              id: "indonesia-g2u3l1v5",
              arabic: "نَافِذَةٌ",
              transliteration: "window",
              translation: t("نَافِذَةٌ", "window", "tingkap", "jendela", "fenêtre", "ventana"),
              emoji: "🪟"
            },
            {
              id: "indonesia-g2u3l1v6",
              arabic: "مَنْشَفَةٌ",
              transliteration: "duster",
              translation: t("مَنْشَفَةٌ", "duster", "kain lap", "kain lap", "chiffon", "paño"),
              emoji: "🧼"
            },
            {
              id: "indonesia-g2u3l1v7",
              arabic: "طَاوِلَةٌ",
              transliteration: "table",
              translation: t("طَاوِلَةٌ", "table", "meja", "meja", "table", "mesa"),
              emoji: "🪵"
            },
            {
              id: "indonesia-g2u3l1v8",
              arabic: "كُرَّاسَةٌ",
              transliteration: "exercise book",
              translation: t("كُرَّاسَةٌ", "exercise book", "buku latihan", "buku latihan", "cahier d’exercices", "cuaderno de ejercicios"),
              emoji: "📒"
            },
            {
              id: "indonesia-g2u3l1v9",
              arabic: "مُعَلِّمٌ",
              transliteration: "teacher",
              translation: t("مُعَلِّمٌ", "teacher", "guru", "guru", "enseignant", "maestro"),
              emoji: "👨‍🏫"
            },
            {
              id: "indonesia-g2u3l1v10",
              arabic: "صَفٌّ",
              transliteration: "row/class",
              translation: t("صَفٌّ", "row/class", "baris/kelas", "baris/kelas", "rang/classe", "fila/aula"),
              emoji: "📚"
            }
          ],
          dialogue: [
            {
              speaker: "مُعَلِّمٌ",
              arabic: "أَيْنَ الْكِتَابُ؟",
              translation: t("أَيْنَ الْكِتَابُ؟", "Di mana buku itu?", "Di mana buku itu?", "Où est le livre ?", "¿Dónde está el libro?", "📘")
            },
            {
              speaker: "تِلْمِيذٌ",
              arabic: "الْكِتَابُ عَلَى الْمَكْتَبِ.",
              translation: t("الْكِتَابُ عَلَى الْمَكْتَبِ.", "Buku itu di atas meja.", "Buku itu di atas meja.", "Le livre est sur le bureau.", "El libro está sobre la mesa.", "🪑")
            },
            {
              speaker: "مُعَلِّمٌ",
              arabic: "أَيْنَ الْمِمْحَاةُ؟",
              translation: t("أَيْنَ الْمِمْحَاةُ؟", "Di mana pemadam?", "Di mana penghapus?", "Où est la gomme ?", "¿Dónde está el borrador?", "🧽")
            },
            {
              speaker: "تِلْمِيذٌ",
              arabic: "الْمِمْحَاةُ فِي الْحَقِيبَةِ.",
              translation: t("الْمِمْحَاةُ فِي الْحَقِيبَةِ.", "Pemadam di dalam beg.", "Penghapus di dalam tas.", "La gomme est dans le sac.", "El borrador está en la bolsa.", "🎒")
            }
          ],
          exercises: [
            {
              id: "indonesia-g2u3l1e1",
              type: "mcq",
              skill: "reading",
              prompt: t("اخْتَرْ.", "Choose.", "Pilih.", "Pilih.", "Choisis.", "Elige."),
              options: [
                "بَابٌ",
                "مَكْتَبٌ",
                "نَافِذَةٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Classroom.jpg"
            },
            {
              id: "indonesia-g2u3l1e2",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ الْجُمْلَةَ.", "Arrange the sentence.", "Susun ayat.", "Susun kalimat.", "Range la phrase.", "Ordena la frase."),
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f7e9/512.webp",
              arabicText: "الْكِتَابُ عَلَى الْمَكْتَبِ",
              answer: "الْكِتَابُ عَلَى الْمَكْتَبِ"
            },
            {
              id: "indonesia-g2u3l1e3",
              type: "matching",
              skill: "reading",
              prompt: t("صِلْ.", "Match.", "Padankan.", "Cocokkan.", "Relie.", "Une."),
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/School_classroom.jpg",
              pairs: [
                {
                  a: "سَبُّورَةٌ",
                  b: "🟩"
                },
                {
                  a: "مَكْتَبٌ",
                  b: "🪑"
                },
                {
                  a: "نَافِذَةٌ",
                  b: "🪟"
                }
              ]
            },
            {
              id: "indonesia-g2u3l1e4",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ مَا فِي الْفَصْلِ.", "Say what is in the classroom.", "Katakan apa yang ada di kelas.", "Katakan apa yang ada di kelas.", "Dis ce qu’il y a dans la classe.", "Di lo que hay en el aula."),
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f7e9/512.webp",
              arabicText: "سَبُّورَةٌ، مَكْتَبٌ، كُرْسِيٌّ"
            },
            {
              id: "indonesia-g2u3l1e5",
              type: "writing",
              skill: "writing",
              prompt: t("اُكْتُبْ.", "Write.", "Tulis.", "Tulis.", "Écris.", "Escribe."),
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f7e9/512.webp",
              arabicText: "فَصْلٌ",
              answer: "فَصْلٌ"
            },
            {
              id: "indonesia-g2u3l1spellindonesia-g2u3l1v4",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "بَابٌ",
              answer: "بَابٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6aa/512.webp"
            },
            {
              id: "indonesia-g2u3l1speakindonesia-g2u3l1v4",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "بَابٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6aa/512.webp"
            },
            {
              id: "indonesia-g2u3l1writeindonesia-g2u3l1v4",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"بَابٌ\"", "Type the Arabic word for: \"door\"", "Taip perkataan Arab untuk: \"pintu\"", "Ketik kata Arab untuk: \"pintu\"", "Tape le mot arabe pour : \"porte\"", "Escribe la palabra árabe para: \"puerta\""),
              arabicText: "بَابٌ",
              answer: "بَابٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6aa/512.webp"
            },
            {
              id: "indonesia-g2u3l1speakindonesia-g2u3l1v6",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "مَنْشَفَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9fc/512.webp"
            },
            {
              id: "indonesia-g2u3l1writeindonesia-g2u3l1v3",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"كُرْسِيٌّ\"", "Type the Arabic word for: \"chair\"", "Taip perkataan Arab untuk: \"kerusi\"", "Ketik kata Arab untuk: \"kursi\"", "Tape le mot arabe pour : \"chaise\"", "Escribe la palabra árabe para: \"silla\""),
              arabicText: "كُرْسِيٌّ",
              answer: "كُرْسِيٌّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1fa91/512.webp"
            }
          ]
        },
        {
          id: "indonesia-g2u3review",
          unitId: "indonesia-g2u3",
          gradeId: "indonesia-g2",
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
              id: "indonesia-g2u3l1v1",
              arabic: "سَبُّورَةٌ",
              transliteration: "board",
              translation: t("سَبُّورَةٌ", "board", "papan tulis", "papan tulis", "tableau", "pizarra"),
              emoji: "🟩"
            },
            {
              id: "indonesia-g2u3l1v2",
              arabic: "مَكْتَبٌ",
              transliteration: "desk",
              translation: t("مَكْتَبٌ", "desk", "meja", "meja", "bureau", "escritorio"),
              emoji: "🪑"
            },
            {
              id: "indonesia-g2u3l1v3",
              arabic: "كُرْسِيٌّ",
              transliteration: "chair",
              translation: t("كُرْسِيٌّ", "chair", "kerusi", "kursi", "chaise", "silla"),
              emoji: "🪑"
            },
            {
              id: "indonesia-g2u3l1v4",
              arabic: "بَابٌ",
              transliteration: "door",
              translation: t("بَابٌ", "door", "pintu", "pintu", "porte", "puerta"),
              emoji: "🚪"
            },
            {
              id: "indonesia-g2u3l1v5",
              arabic: "نَافِذَةٌ",
              transliteration: "window",
              translation: t("نَافِذَةٌ", "window", "tingkap", "jendela", "fenêtre", "ventana"),
              emoji: "🪟"
            },
            {
              id: "indonesia-g2u3l1v6",
              arabic: "مَنْشَفَةٌ",
              transliteration: "duster",
              translation: t("مَنْشَفَةٌ", "duster", "kain lap", "kain lap", "chiffon", "paño"),
              emoji: "🧼"
            },
            {
              id: "indonesia-g2u3l1v7",
              arabic: "طَاوِلَةٌ",
              transliteration: "table",
              translation: t("طَاوِلَةٌ", "table", "meja", "meja", "table", "mesa"),
              emoji: "🪵"
            },
            {
              id: "indonesia-g2u3l1v8",
              arabic: "كُرَّاسَةٌ",
              transliteration: "exercise book",
              translation: t("كُرَّاسَةٌ", "exercise book", "buku latihan", "buku latihan", "cahier d’exercices", "cuaderno de ejercicios"),
              emoji: "📒"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "indonesia-g2u3reviewlistenindonesia-g2u3l1v3",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "كُرْسِيٌّ",
              options: [
                "كُرْسِيٌّ",
                "مَكْتَبٌ",
                "ثَلَاثَةٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1fa91/512.webp"
            },
            {
              id: "indonesia-g2u3reviewspellindonesia-g2u3l1v6",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "مَنْشَفَةٌ",
              answer: "مَنْشَفَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9fc/512.webp"
            },
            {
              id: "indonesia-g2u3reviewmcqindonesia-g2u3l1v8",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"كُرَّاسَةٌ\"؟", "What does \"exercise book\" mean?", "Apakah maksud \"buku latihan\"?", "Apa arti \"buku latihan\"?", "Que signifie \"cahier d’exercices\" ?", "¿Qué significa \"cuaderno de ejercicios\"?"),
              arabicText: "كُرَّاسَةٌ",
              options: [
                "three",
                "cat",
                "sun",
                "exercise book"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4d2/512.webp"
            },
            {
              id: "indonesia-g2u3reviewspellindonesia-g2u3l1v8",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "كُرَّاسَةٌ",
              answer: "كُرَّاسَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4d2/512.webp"
            },
            {
              id: "indonesia-g2u3reviewwriteindonesia-g2u3l1v7",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"طَاوِلَةٌ\"", "Type the Arabic word for: \"table\"", "Taip perkataan Arab untuk: \"meja\"", "Ketik kata Arab untuk: \"meja\"", "Tape le mot arabe pour : \"table\"", "Escribe la palabra árabe para: \"mesa\""),
              arabicText: "طَاوِلَةٌ",
              answer: "طَاوِلَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1fab5/512.webp"
            },
            {
              id: "indonesia-g2u3reviewspellindonesia-g2u3l1v7",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "طَاوِلَةٌ",
              answer: "طَاوِلَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1fab5/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "indonesia-g2u4",
      gradeId: "indonesia-g2",
      order: 4,
      title: t("الْأُسْرَةُ وَالْبَيْتُ", "Family and Home", "Keluarga dan Rumah", "Keluarga dan Rumah", "La famille et la maison", "La familia y la casa"),
      theme: "family-home",
      lessons: [
        {
          id: "indonesia-g2u4l1",
          unitId: "indonesia-g2u4",
          gradeId: "indonesia-g2",
          order: 1,
          title: t("الْأُسْرَةُ وَالْبَيْتُ", "Family and Home", "Keluarga dan Rumah", "Keluarga dan Rumah", "La famille et la maison", "La familia y la casa"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("نَتَعَلَّمُ الْكَلِمَاتِ وَنُتَدَرِّبُ عَلَى الْحِوَارِ وَالْقِرَاءَةِ وَالْكِتَابَةِ.", "We learn words and practice dialogue, reading, and writing.", "Kita belajar perkataan dan berlatih dialog, membaca, dan menulis.", "Kita belajar kata dan berlatih dialog, membaca, dan menulis.", "Nous apprenons des mots et pratiquons le dialogue, la lecture et l’écriture.", "Aprendemos palabras y practicamos el diálogo, la lectura y la escritura."),
          vocabulary: [
            {
              id: "indonesia-g2u4l1v1",
              arabic: "أَبٌ",
              transliteration: "father",
              translation: t("أَبٌ", "father", "bapa", "ayah", "père", "padre"),
              emoji: "👨"
            },
            {
              id: "indonesia-g2u4l1v2",
              arabic: "أُمٌّ",
              transliteration: "mother",
              translation: t("أُمٌّ", "mother", "ibu", "ibu", "mère", "madre"),
              emoji: "👩"
            },
            {
              id: "indonesia-g2u4l1v3",
              arabic: "أَخٌ",
              transliteration: "brother",
              translation: t("أَخٌ", "brother", "abang/adik lelaki", "saudara laki-laki", "frère", "hermano"),
              emoji: "👦"
            },
            {
              id: "indonesia-g2u4l1v4",
              arabic: "أُخْتٌ",
              transliteration: "sister",
              translation: t("أُخْتٌ", "sister", "kakak/adik perempuan", "saudara perempuan", "sœur", "hermana"),
              emoji: "👧"
            },
            {
              id: "indonesia-g2u4l1v5",
              arabic: "بَيْتٌ",
              transliteration: "house",
              translation: t("بَيْتٌ", "house", "rumah", "rumah", "maison", "casa"),
              emoji: "🏠"
            },
            {
              id: "indonesia-g2u4l1v6",
              arabic: "غُرْفَةٌ",
              transliteration: "room",
              translation: t("غُرْفَةٌ", "room", "bilik", "kamar", "chambre", "habitación"),
              emoji: "🛏️"
            },
            {
              id: "indonesia-g2u4l1v7",
              arabic: "مَطْبَخٌ",
              transliteration: "kitchen",
              translation: t("مَطْبَخٌ", "kitchen", "dapur", "dapur", "cuisine", "cocina"),
              emoji: "🍳"
            },
            {
              id: "indonesia-g2u4l1v8",
              arabic: "حَدِيقَةٌ",
              transliteration: "garden",
              translation: t("حَدِيقَةٌ", "garden", "taman", "taman", "jardin", "jardín"),
              emoji: "🌳"
            },
            {
              id: "indonesia-g2u4l1v9",
              arabic: "نَظِيفٌ",
              transliteration: "clean",
              translation: t("نَظِيفٌ", "clean", "bersih", "bersih", "propre", "limpio"),
              emoji: "✨"
            },
            {
              id: "indonesia-g2u4l1v10",
              arabic: "جَمِيلٌ",
              transliteration: "beautiful",
              translation: t("جَمِيلٌ", "beautiful", "cantik", "indah", "beau", "bonito"),
              emoji: "🌷"
            }
          ],
          dialogue: [
            {
              speaker: "أُمٌّ",
              arabic: "أَيْنَ أَبُوكَ؟",
              translation: t("أَيْنَ أَبُوكَ؟", "Di mana ayah kamu?", "Di mana ayahmu?", "Où est ton père ?", "¿Dónde está tu padre?", "👨")
            },
            {
              speaker: "طِفْلٌ",
              arabic: "أَبِي فِي الْبَيْتِ.",
              translation: t("أَبِي فِي الْبَيْتِ.", "Ayah saya di rumah.", "Ayah saya di rumah.", "Mon père est à la maison.", "Mi padre está en casa.", "🏠")
            },
            {
              speaker: "أُمٌّ",
              arabic: "مَنْ فِي الْبَيْتِ؟",
              translation: t("مَنْ فِي الْبَيْتِ؟", "Siapa di dalam rumah?", "Siapa di dalam rumah?", "Qui est dans la maison ?", "¿Quién está en la casa?", "🏠")
            },
            {
              speaker: "طِفْلٌ",
              arabic: "أُمِّي وَأَبِي.",
              translation: t("أُمِّي وَأَبِي.", "Ibu dan ayah saya.", "Ibu dan ayah saya.", "Ma mère et mon père.", "Mi madre y mi padre.", "👩👨")
            }
          ],
          exercises: [
            {
              id: "indonesia-g2u4l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("اِسْتَمِعْ وَاخْتَرْ.", "Listen and choose.", "Dengar dan pilih.", "Dengar dan pilih.", "Écoute et choisis.", "Escucha y elige."),
              options: [
                "أَبٌ",
                "غُرْفَةٌ",
                "جَمِيلٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Family_icon.jpg",
              arabicText: "أَبٌ"
            },
            {
              id: "indonesia-g2u4l1e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلْ.", "Match.", "Padankan.", "Cocokkan.", "Relie.", "Une."),
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/House_icon.jpg",
              pairs: [
                {
                  a: "أَبٌ",
                  b: "👨"
                },
                {
                  a: "أُمٌّ",
                  b: "👩"
                },
                {
                  a: "بَيْتٌ",
                  b: "🏠"
                }
              ]
            },
            {
              id: "indonesia-g2u4l1e3",
              type: "mcq",
              skill: "reading",
              prompt: t("اخْتَرْ.", "Choose.", "Pilih.", "Pilih.", "Choisis.", "Elige."),
              options: [
                "مَطْبَخٌ",
                "غُرْفَةٌ",
                "بَيْتٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468/512.webp"
            },
            {
              id: "indonesia-g2u4l1e4",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنْ أُسْرَتِكَ.", "Speak about your family.", "Bercakap tentang keluargamu.", "Bicarakan keluargamu.", "Parle de ta famille.", "Habla de tu familia."),
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468/512.webp",
              arabicText: "أَبِي وَأُمِّي"
            },
            {
              id: "indonesia-g2u4l1e5",
              type: "writing",
              skill: "writing",
              prompt: t("اُكْتُبِ الْكَلِمَةَ.", "Write the word.", "Tulis perkataan.", "Tulis kata.", "Écris le mot.", "Escribe la palabra."),
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f467/512.webp",
              arabicText: "أُخْتٌ",
              answer: "أُخْتٌ"
            },
            {
              id: "indonesia-g2u4l1e6",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ الْكَلِمَاتِ", "Arrange the words", "Susun perkataan", "Susun kata-kata", "Range les mots", "Ordena las palabras"),
              answer: "أَيْنَ أَبُوكَ؟",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468/512.webp"
            },
            {
              id: "indonesia-g2u4l1spellindonesia-g2u4l1v9",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "نَظِيفٌ",
              answer: "نَظِيفٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.webp"
            },
            {
              id: "indonesia-g2u4l1spellindonesia-g2u4l1v1",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "أَبٌ",
              answer: "أَبٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468/512.webp"
            },
            {
              id: "indonesia-g2u4l1writeindonesia-g2u4l1v8",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"حَدِيقَةٌ\"", "Type the Arabic word for: \"garden\"", "Taip perkataan Arab untuk: \"taman\"", "Ketik kata Arab untuk: \"taman\"", "Tape le mot arabe pour : \"jardin\"", "Escribe la palabra árabe para: \"jardín\""),
              arabicText: "حَدِيقَةٌ",
              answer: "حَدِيقَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f333/512.webp"
            },
            {
              id: "indonesia-g2u4l1writeindonesia-g2u4l1v9",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"نَظِيفٌ\"", "Type the Arabic word for: \"clean\"", "Taip perkataan Arab untuk: \"bersih\"", "Ketik kata Arab untuk: \"bersih\"", "Tape le mot arabe pour : \"propre\"", "Escribe la palabra árabe para: \"limpio\""),
              arabicText: "نَظِيفٌ",
              answer: "نَظِيفٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.webp"
            },
            {
              id: "indonesia-g2u4l1writeindonesia-g2u4l1v7",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"مَطْبَخٌ\"", "Type the Arabic word for: \"kitchen\"", "Taip perkataan Arab untuk: \"dapur\"", "Ketik kata Arab untuk: \"dapur\"", "Tape le mot arabe pour : \"cuisine\"", "Escribe la palabra árabe para: \"cocina\""),
              arabicText: "مَطْبَخٌ",
              answer: "مَطْبَخٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f373/512.webp"
            },
            {
              id: "indonesia-g2u4l1speakindonesia-g2u4l1v4",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "أُخْتٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f467/512.webp"
            }
          ]
        },
        {
          id: "indonesia-g2u4review",
          unitId: "indonesia-g2u4",
          gradeId: "indonesia-g2",
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
              id: "indonesia-g2u4l1v1",
              arabic: "أَبٌ",
              transliteration: "father",
              translation: t("أَبٌ", "father", "bapa", "ayah", "père", "padre"),
              emoji: "👨"
            },
            {
              id: "indonesia-g2u4l1v2",
              arabic: "أُمٌّ",
              transliteration: "mother",
              translation: t("أُمٌّ", "mother", "ibu", "ibu", "mère", "madre"),
              emoji: "👩"
            },
            {
              id: "indonesia-g2u4l1v3",
              arabic: "أَخٌ",
              transliteration: "brother",
              translation: t("أَخٌ", "brother", "abang/adik lelaki", "saudara laki-laki", "frère", "hermano"),
              emoji: "👦"
            },
            {
              id: "indonesia-g2u4l1v4",
              arabic: "أُخْتٌ",
              transliteration: "sister",
              translation: t("أُخْتٌ", "sister", "kakak/adik perempuan", "saudara perempuan", "sœur", "hermana"),
              emoji: "👧"
            },
            {
              id: "indonesia-g2u4l1v5",
              arabic: "بَيْتٌ",
              transliteration: "house",
              translation: t("بَيْتٌ", "house", "rumah", "rumah", "maison", "casa"),
              emoji: "🏠"
            },
            {
              id: "indonesia-g2u4l1v6",
              arabic: "غُرْفَةٌ",
              transliteration: "room",
              translation: t("غُرْفَةٌ", "room", "bilik", "kamar", "chambre", "habitación"),
              emoji: "🛏️"
            },
            {
              id: "indonesia-g2u4l1v7",
              arabic: "مَطْبَخٌ",
              transliteration: "kitchen",
              translation: t("مَطْبَخٌ", "kitchen", "dapur", "dapur", "cuisine", "cocina"),
              emoji: "🍳"
            },
            {
              id: "indonesia-g2u4l1v8",
              arabic: "حَدِيقَةٌ",
              transliteration: "garden",
              translation: t("حَدِيقَةٌ", "garden", "taman", "taman", "jardin", "jardín"),
              emoji: "🌳"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "indonesia-g2u4reviewwriteindonesia-g2u4l1v8",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"حَدِيقَةٌ\"", "Type the Arabic word for: \"garden\"", "Taip perkataan Arab untuk: \"taman\"", "Ketik kata Arab untuk: \"taman\"", "Tape le mot arabe pour : \"jardin\"", "Escribe la palabra árabe para: \"jardín\""),
              arabicText: "حَدِيقَةٌ",
              answer: "حَدِيقَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f333/512.webp"
            },
            {
              id: "indonesia-g2u4reviewspellindonesia-g2u4l1v6",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "غُرْفَةٌ",
              answer: "غُرْفَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6cf-fe0f/512.webp"
            },
            {
              id: "indonesia-g2u4reviewmcqindonesia-g2u4l1v5",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"بَيْتٌ\"؟", "What does \"house\" mean?", "Apakah maksud \"rumah\"?", "Apa arti \"rumah\"?", "Que signifie \"maison\" ?", "¿Qué significa \"casa\"?"),
              arabicText: "بَيْتٌ",
              options: [
                "house",
                "pencil",
                "ten",
                "one"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e0/512.webp"
            },
            {
              id: "indonesia-g2u4reviewspellindonesia-g2u4l1v1",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "أَبٌ",
              answer: "أَبٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468/512.webp"
            },
            {
              id: "indonesia-g2u4reviewwriteindonesia-g2u4l1v7",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"مَطْبَخٌ\"", "Type the Arabic word for: \"kitchen\"", "Taip perkataan Arab untuk: \"dapur\"", "Ketik kata Arab untuk: \"dapur\"", "Tape le mot arabe pour : \"cuisine\"", "Escribe la palabra árabe para: \"cocina\""),
              arabicText: "مَطْبَخٌ",
              answer: "مَطْبَخٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f373/512.webp"
            },
            {
              id: "indonesia-g2u4reviewspellindonesia-g2u4l1v8",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "حَدِيقَةٌ",
              answer: "حَدِيقَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f333/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "indonesia-g2u5",
      gradeId: "indonesia-g2",
      order: 5,
      title: t("الْحَيَوَانَاتُ وَالطَّبِيعَةُ", "Animals and Nature", "Haiwan dan Alam", "Hewan dan Alam", "Les animaux et la nature", "Los animales y la naturaleza"),
      theme: "animals-nature",
      lessons: [
        {
          id: "indonesia-g2u5l1",
          unitId: "indonesia-g2u5",
          gradeId: "indonesia-g2",
          order: 1,
          title: t("الْحَيَوَانَاتُ وَالطَّبِيعَةُ", "Animals and Nature", "Haiwan dan Alam", "Hewan dan Alam", "Les animaux et la nature", "Los animales y la naturaleza"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("نَتَعَلَّمُ الْكَلِمَاتِ وَنُتَدَرِّبُ عَلَى الْحِوَارِ وَالْقِرَاءَةِ وَالْكِتَابَةِ.", "We learn words and practice dialogue, reading, and writing.", "Kita belajar perkataan dan berlatih dialog, membaca, dan menulis.", "Kita belajar kata dan berlatih dialog, membaca, dan menulis.", "Nous apprenons des mots et pratiquons le dialogue, la lecture et l’écriture.", "Aprendemos palabras y practicamos el diálogo, la lectura y la escritura."),
          vocabulary: [
            {
              id: "indonesia-g2u5l1v1",
              arabic: "أَسَدٌ",
              transliteration: "lion",
              translation: t("أَسَدٌ", "lion", "singa", "singa", "lion", "león"),
              emoji: "🦁"
            },
            {
              id: "indonesia-g2u5l1v2",
              arabic: "قِطَّةٌ",
              transliteration: "cat",
              translation: t("قِطَّةٌ", "cat", "kucing", "kucing", "chat", "gato"),
              emoji: "🐱"
            },
            {
              id: "indonesia-g2u5l1v3",
              arabic: "كَلْبٌ",
              transliteration: "dog",
              translation: t("كَلْبٌ", "dog", "anjing", "anjing", "chien", "perro"),
              emoji: "🐶"
            },
            {
              id: "indonesia-g2u5l1v4",
              arabic: "طَائِرٌ",
              transliteration: "bird",
              translation: t("طَائِرٌ", "bird", "burung", "burung", "oiseau", "pájaro"),
              emoji: "🐦"
            },
            {
              id: "indonesia-g2u5l1v5",
              arabic: "سَمَكَةٌ",
              transliteration: "fish",
              translation: t("سَمَكَةٌ", "fish", "ikan", "ikan", "poisson", "pez"),
              emoji: "🐟"
            },
            {
              id: "indonesia-g2u5l1v6",
              arabic: "شَمْسٌ",
              transliteration: "sun",
              translation: t("شَمْسٌ", "sun", "matahari", "matahari", "soleil", "sol"),
              emoji: "☀️"
            },
            {
              id: "indonesia-g2u5l1v7",
              arabic: "قَمَرٌ",
              transliteration: "moon",
              translation: t("قَمَرٌ", "moon", "bulan", "bulan", "lune", "luna"),
              emoji: "🌙"
            },
            {
              id: "indonesia-g2u5l1v8",
              arabic: "نَجْمٌ",
              transliteration: "star",
              translation: t("نَجْمٌ", "star", "bintang", "bintang", "étoile", "estrella"),
              emoji: "⭐"
            },
            {
              id: "indonesia-g2u5l1v9",
              arabic: "شَجَرَةٌ",
              transliteration: "tree",
              translation: t("شَجَرَةٌ", "tree", "pokok", "pohon", "arbre", "árbol"),
              emoji: "🌳"
            },
            {
              id: "indonesia-g2u5l1v10",
              arabic: "زَهْرَةٌ",
              transliteration: "flower",
              translation: t("زَهْرَةٌ", "flower", "bunga", "bunga", "fleur", "flor"),
              emoji: "🌸"
            }
          ],
          dialogue: [
            {
              speaker: "مُعَلِّمٌ",
              arabic: "مَا هٰذَا؟",
              translation: t("مَا هٰذَا؟", "Apa ini?", "Apa ini?", "Qu’est-ce que c’est ?", "¿Qué es esto?", "🦁")
            },
            {
              speaker: "تِلْمِيذٌ",
              arabic: "هٰذَا أَسَدٌ.",
              translation: t("هٰذَا أَسَدٌ.", "Ini singa.", "Ini singa.", "C’est un lion.", "Este es un león.", "🦁")
            },
            {
              speaker: "مُعَلِّمٌ",
              arabic: "مَا هٰذِهِ؟",
              translation: t("مَا هٰذِهِ؟", "Apa ini?", "Apa ini?", "Qu’est-ce que c’est ?", "¿Qué es esto?", "🌸")
            },
            {
              speaker: "تِلْمِيذٌ",
              arabic: "هٰذِهِ زَهْرَةٌ.",
              translation: t("هٰذِهِ زَهْرَةٌ.", "Ini bunga.", "Ini bunga.", "C’est une fleur.", "Esta es una flor.", "🌸")
            }
          ],
          exercises: [
            {
              id: "indonesia-g2u5l1e1",
              type: "mcq",
              skill: "reading",
              prompt: t("اخْتَرْ.", "Choose.", "Pilih.", "Pilih.", "Choisis.", "Elige."),
              options: [
                "أَسَدٌ",
                "قِطَّةٌ",
                "شَمْسٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Cat_icon.svg"
            },
            {
              id: "indonesia-g2u5l1e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلْ.", "Match.", "Padankan.", "Cocokkan.", "Relie.", "Une."),
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Animals_in_nature.jpg",
              pairs: [
                {
                  a: "أَسَدٌ",
                  b: "🦁"
                },
                {
                  a: "شَجَرَةٌ",
                  b: "🌳"
                },
                {
                  a: "زَهْرَةٌ",
                  b: "🌸"
                }
              ]
            },
            {
              id: "indonesia-g2u5l1e3",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ.", "Arrange.", "Susun.", "Susun.", "Range.", "Ordena."),
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2600-fe0f/512.webp",
              arabicText: "شَجَرَةٌ زَهْرَةٌ شَمْسٌ",
              answer: "شَجَرَةٌ زَهْرَةٌ شَمْسٌ"
            },
            {
              id: "indonesia-g2u5l1e4",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ مَا تَرَى.", "Say what you see.", "Katakan apa yang kamu lihat.", "Katakan apa yang kamu lihat.", "Dis ce que tu vois.", "Di lo que ves."),
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f333/512.webp",
              arabicText: "شَجَرَةٌ وَزَهْرَةٌ"
            },
            {
              id: "indonesia-g2u5l1e5",
              type: "writing",
              skill: "writing",
              prompt: t("اُكْتُبْ.", "Write.", "Tulis.", "Tulis.", "Écris.", "Escribe."),
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f426/512.webp",
              arabicText: "طَائِرٌ",
              answer: "طَائِرٌ"
            },
            {
              id: "indonesia-g2u5l1writeindonesia-g2u5l1v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"أَسَدٌ\"", "Type the Arabic word for: \"lion\"", "Taip perkataan Arab untuk: \"singa\"", "Ketik kata Arab untuk: \"singa\"", "Tape le mot arabe pour : \"lion\"", "Escribe la palabra árabe para: \"león\""),
              arabicText: "أَسَدٌ",
              answer: "أَسَدٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f981/512.webp"
            },
            {
              id: "indonesia-g2u5l1mcqindonesia-g2u5l1v7",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"قَمَرٌ\"؟", "What does \"moon\" mean?", "Apakah maksud \"bulan\"?", "Apa arti \"bulan\"?", "Que signifie \"lune\" ?", "¿Qué significa \"luna\"?"),
              arabicText: "قَمَرٌ",
              options: [
                "moon",
                "duster",
                "table",
                "brother"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f319/512.webp"
            },
            {
              id: "indonesia-g2u5l1spellindonesia-g2u5l1v8",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "نَجْمٌ",
              answer: "نَجْمٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2b50/512.webp"
            },
            {
              id: "indonesia-g2u5l1listenindonesia-g2u5l1v10",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "زَهْرَةٌ",
              options: [
                "زَهْرَةٌ",
                "غُرْفَةٌ",
                "دَفْتَرٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f338/512.webp"
            },
            {
              id: "indonesia-g2u5l1mcqindonesia-g2u5l1v4",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"طَائِرٌ\"؟", "What does \"bird\" mean?", "Apakah maksud \"burung\"?", "Apa arti \"burung\"?", "Que signifie \"oiseau\" ?", "¿Qué significa \"pájaro\"?"),
              arabicText: "طَائِرٌ",
              options: [
                "board",
                "bird",
                "house",
                "fish"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f426/512.webp"
            }
          ]
        },
        {
          id: "indonesia-g2u5review",
          unitId: "indonesia-g2u5",
          gradeId: "indonesia-g2",
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
              id: "indonesia-g2u5l1v1",
              arabic: "أَسَدٌ",
              transliteration: "lion",
              translation: t("أَسَدٌ", "lion", "singa", "singa", "lion", "león"),
              emoji: "🦁"
            },
            {
              id: "indonesia-g2u5l1v2",
              arabic: "قِطَّةٌ",
              transliteration: "cat",
              translation: t("قِطَّةٌ", "cat", "kucing", "kucing", "chat", "gato"),
              emoji: "🐱"
            },
            {
              id: "indonesia-g2u5l1v3",
              arabic: "كَلْبٌ",
              transliteration: "dog",
              translation: t("كَلْبٌ", "dog", "anjing", "anjing", "chien", "perro"),
              emoji: "🐶"
            },
            {
              id: "indonesia-g2u5l1v4",
              arabic: "طَائِرٌ",
              transliteration: "bird",
              translation: t("طَائِرٌ", "bird", "burung", "burung", "oiseau", "pájaro"),
              emoji: "🐦"
            },
            {
              id: "indonesia-g2u5l1v5",
              arabic: "سَمَكَةٌ",
              transliteration: "fish",
              translation: t("سَمَكَةٌ", "fish", "ikan", "ikan", "poisson", "pez"),
              emoji: "🐟"
            },
            {
              id: "indonesia-g2u5l1v6",
              arabic: "شَمْسٌ",
              transliteration: "sun",
              translation: t("شَمْسٌ", "sun", "matahari", "matahari", "soleil", "sol"),
              emoji: "☀️"
            },
            {
              id: "indonesia-g2u5l1v7",
              arabic: "قَمَرٌ",
              transliteration: "moon",
              translation: t("قَمَرٌ", "moon", "bulan", "bulan", "lune", "luna"),
              emoji: "🌙"
            },
            {
              id: "indonesia-g2u5l1v8",
              arabic: "نَجْمٌ",
              transliteration: "star",
              translation: t("نَجْمٌ", "star", "bintang", "bintang", "étoile", "estrella"),
              emoji: "⭐"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "indonesia-g2u5reviewspellindonesia-g2u5l1v8",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "نَجْمٌ",
              answer: "نَجْمٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2b50/512.webp"
            },
            {
              id: "indonesia-g2u5reviewspeakindonesia-g2u5l1v3",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "كَلْبٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f436/512.webp"
            },
            {
              id: "indonesia-g2u5reviewwriteindonesia-g2u5l1v8",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"نَجْمٌ\"", "Type the Arabic word for: \"star\"", "Taip perkataan Arab untuk: \"bintang\"", "Ketik kata Arab untuk: \"bintang\"", "Tape le mot arabe pour : \"étoile\"", "Escribe la palabra árabe para: \"estrella\""),
              arabicText: "نَجْمٌ",
              answer: "نَجْمٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2b50/512.webp"
            },
            {
              id: "indonesia-g2u5reviewmcqindonesia-g2u5l1v6",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"شَمْسٌ\"؟", "What does \"sun\" mean?", "Apakah maksud \"matahari\"?", "Apa arti \"matahari\"?", "Que signifie \"soleil\" ?", "¿Qué significa \"sol\"?"),
              arabicText: "شَمْسٌ",
              options: [
                "sun",
                "board",
                "clean",
                "colours"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2600-fe0f/512.webp"
            },
            {
              id: "indonesia-g2u5reviewmcqindonesia-g2u5l1v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"أَسَدٌ\"؟", "What does \"lion\" mean?", "Apakah maksud \"singa\"?", "Apa arti \"singa\"?", "Que signifie \"lion\" ?", "¿Qué significa \"león\"?"),
              arabicText: "أَسَدٌ",
              options: [
                "one",
                "lion",
                "scissors",
                "ruler"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f981/512.webp"
            },
            {
              id: "indonesia-g2u5reviewlistenindonesia-g2u5l1v2",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "قِطَّةٌ",
              options: [
                "حَارِسٌ",
                "جَمِيلٌ",
                "قِطَّةٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f431/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "indonesia-g2u6",
      gradeId: "indonesia-g2",
      order: 6,
      title: t("الْأَرْقَامُ وَالْعَدُّ", "Numbers and Counting", "Nombor dan Mengira", "Angka dan Menghitung", "Les nombres et le comptage", "Los números y el conteo"),
      theme: "numbers",
      lessons: [
        {
          id: "indonesia-g2u6l1",
          unitId: "indonesia-g2u6",
          gradeId: "indonesia-g2",
          order: 1,
          title: t("الْأَرْقَامُ وَالْعَدُّ", "Numbers and Counting", "Nombor dan Mengira", "Angka dan Menghitung", "Les nombres et le comptage", "Los números y el conteo"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("نَتَعَلَّمُ الْكَلِمَاتِ وَنُتَدَرِّبُ عَلَى الْحِوَارِ وَالْقِرَاءَةِ وَالْكِتَابَةِ.", "We learn words and practice dialogue, reading, and writing.", "Kita belajar perkataan dan berlatih dialog, membaca, dan menulis.", "Kita belajar kata dan berlatih dialog, membaca, dan menulis.", "Nous apprenons des mots et pratiquons le dialogue, la lecture et l’écriture.", "Aprendemos palabras y practicamos el diálogo, la lectura y la escritura."),
          vocabulary: [
            {
              id: "indonesia-g2u6l1v1",
              arabic: "وَاحِدٌ",
              transliteration: "one",
              translation: t("وَاحِدٌ", "one", "satu", "satu", "un", "uno"),
              emoji: "1️⃣"
            },
            {
              id: "indonesia-g2u6l1v2",
              arabic: "اثْنَانِ",
              transliteration: "two",
              translation: t("اثْنَانِ", "two", "dua", "dua", "deux", "dos"),
              emoji: "2️⃣"
            },
            {
              id: "indonesia-g2u6l1v3",
              arabic: "ثَلَاثَةٌ",
              transliteration: "three",
              translation: t("ثَلَاثَةٌ", "three", "tiga", "tiga", "trois", "tres"),
              emoji: "3️⃣"
            },
            {
              id: "indonesia-g2u6l1v4",
              arabic: "أَرْبَعَةٌ",
              transliteration: "four",
              translation: t("أَرْبَعَةٌ", "four", "empat", "empat", "quatre", "cuatro"),
              emoji: "4️⃣"
            },
            {
              id: "indonesia-g2u6l1v5",
              arabic: "خَمْسَةٌ",
              transliteration: "five",
              translation: t("خَمْسَةٌ", "five", "lima", "lima", "cinq", "cinco"),
              emoji: "5️⃣"
            },
            {
              id: "indonesia-g2u6l1v6",
              arabic: "سِتَّةٌ",
              transliteration: "six",
              translation: t("سِتَّةٌ", "six", "enam", "enam", "six", "seis"),
              emoji: "6️⃣"
            },
            {
              id: "indonesia-g2u6l1v7",
              arabic: "سَبْعَةٌ",
              transliteration: "seven",
              translation: t("سَبْعَةٌ", "seven", "tujuh", "tujuh", "sept", "siete"),
              emoji: "7️⃣"
            },
            {
              id: "indonesia-g2u6l1v8",
              arabic: "ثَمَانِيَةٌ",
              transliteration: "eight",
              translation: t("ثَمَانِيَةٌ", "eight", "lapan", "delapan", "huit", "ocho"),
              emoji: "8️⃣"
            },
            {
              id: "indonesia-g2u6l1v9",
              arabic: "تِسْعَةٌ",
              transliteration: "nine",
              translation: t("تِسْعَةٌ", "nine", "sembilan", "sembilan", "neuf", "nueve"),
              emoji: "9️⃣"
            },
            {
              id: "indonesia-g2u6l1v10",
              arabic: "عَشَرَةٌ",
              transliteration: "ten",
              translation: t("عَشَرَةٌ", "ten", "sepuluh", "sepuluh", "dix", "diez"),
              emoji: "🔟"
            }
          ],
          dialogue: [
            {
              speaker: "مُعَلِّمٌ",
              arabic: "كَمْ كِتَابًا هُنَا؟",
              translation: t("كَمْ كِتَابًا هُنَا؟", "Berapa banyak buku di sini?", "Ada berapa buku di sini?", "Combien de livres y a-t-il ici ?", "¿Cuántos libros hay aquí?", "📘")
            },
            {
              speaker: "تِلْمِيذٌ",
              arabic: "هُنَا ثَلَاثَةُ كُتُبٍ.",
              translation: t("هُنَا ثَلَاثَةُ كُتُبٍ.", "Ada tiga buku di sini.", "Ada tiga buku di sini.", "Il y a trois livres ici.", "Hay tres libros aquí.", "3️⃣")
            },
            {
              speaker: "مُعَلِّمٌ",
              arabic: "كَمْ طَالِبًا؟",
              translation: t("كَمْ طَالِبًا؟", "Berapa murid?", "Berapa murid?", "Combien d’élèves ?", "¿Cuántos estudiantes?", "🧒")
            },
            {
              speaker: "تِلْمِيذٌ",
              arabic: "خَمْسَةُ طُلَّابٍ.",
              translation: t("خَمْسَةُ طُلَّابٍ.", "Lima murid.", "Lima murid.", "Cinq élèves.", "Cinco estudiantes.", "5️⃣")
            }
          ],
          exercises: [
            {
              id: "indonesia-g2u6l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("اِسْتَمِعْ وَاخْتَرْ.", "Listen and choose.", "Dengar dan pilih.", "Dengar dan pilih.", "Écoute et choisis.", "Escucha y elige."),
              options: [
                "وَاحِدٌ",
                "ثَلَاثَةٌ",
                "خَمْسَةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Arabic_numbers.svg",
              arabicText: "ثَلَاثَةٌ"
            },
            {
              id: "indonesia-g2u6l1e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلْ بَيْنَ الرَّقْمِ وَالْكَلِمَةِ.", "Match the numeral and the word.", "Padankan angka dan perkataan.", "Cocokkan angka dan kata.", "Relie le chiffre et le mot.", "Une el número y la palabra."),
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Numbers_icon.svg",
              pairs: [
                {
                  a: "وَاحِدٌ",
                  b: "1️⃣"
                },
                {
                  a: "ثَلَاثَةٌ",
                  b: "3️⃣"
                },
                {
                  a: "خَمْسَةٌ",
                  b: "5️⃣"
                },
                {
                  a: "عَشَرَةٌ",
                  b: "🔟"
                }
              ]
            },
            {
              id: "indonesia-g2u6l1e3",
              type: "mcq",
              skill: "reading",
              prompt: t("اخْتَرِ الْجَوَابَ.", "Choose the answer.", "Pilih jawapan.", "Pilih jawaban.", "Choisis la réponse.", "Elige la respuesta."),
              options: [
                "4️⃣",
                "3️⃣",
                "2️⃣"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "indonesia-g2u6l1e4",
              type: "speaking",
              skill: "speaking",
              prompt: t("عُدَّ مَعَ الزُّمَلَاءِ.", "Count with your friends.", "Kira bersama rakan-rakan.", "Hitung bersama teman.", "Compte avec tes amis.", "Cuenta con tus amigos."),
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp",
              arabicText: "وَاحِدٌ، اثْنَانِ، ثَلَاثَةٌ"
            },
            {
              id: "indonesia-g2u6l1e5",
              type: "writing",
              skill: "writing",
              prompt: t("اُكْتُبْ.", "Write.", "Tulis.", "Tulis.", "Écris.", "Escribe."),
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f51f/512.webp",
              arabicText: "عَشَرَةٌ",
              answer: "عَشَرَةٌ"
            },
            {
              id: "indonesia-g2u6l1e6",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ الْكَلِمَاتِ", "Arrange the words", "Susun perkataan", "Susun kata-kata", "Range les mots", "Ordena las palabras"),
              answer: "كَمْ كِتَابًا هُنَا؟",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "indonesia-g2u6l1listenindonesia-g2u6l1v4",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "أَرْبَعَةٌ",
              options: [
                "صَمْغٌ",
                "أَرْبَعَةٌ",
                "شَمْسٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/34-fe0f-20e3/512.webp"
            },
            {
              id: "indonesia-g2u6l1speakindonesia-g2u6l1v7",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "سَبْعَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/37-fe0f-20e3/512.webp"
            },
            {
              id: "indonesia-g2u6l1mcqindonesia-g2u6l1v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"وَاحِدٌ\"؟", "What does \"one\" mean?", "Apakah maksud \"satu\"?", "Apa arti \"satu\"?", "Que signifie \"un\" ?", "¿Qué significa \"uno\"?"),
              arabicText: "وَاحِدٌ",
              options: [
                "one",
                "door",
                "seven",
                "staff"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "indonesia-g2u6l1listenindonesia-g2u6l1v5",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "خَمْسَةٌ",
              options: [
                "خَمْسَةٌ",
                "طَالِبٌ",
                "نَافِذَةٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/35-fe0f-20e3/512.webp"
            },
            {
              id: "indonesia-g2u6l1writeindonesia-g2u6l1v9",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"تِسْعَةٌ\"", "Type the Arabic word for: \"nine\"", "Taip perkataan Arab untuk: \"sembilan\"", "Ketik kata Arab untuk: \"sembilan\"", "Tape le mot arabe pour : \"neuf\"", "Escribe la palabra árabe para: \"nueve\""),
              arabicText: "تِسْعَةٌ",
              answer: "تِسْعَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/39-fe0f-20e3/512.webp"
            },
            {
              id: "indonesia-g2u6l1spellindonesia-g2u6l1v5",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "خَمْسَةٌ",
              answer: "خَمْسَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/35-fe0f-20e3/512.webp"
            }
          ]
        },
        {
          id: "indonesia-g2u6review",
          unitId: "indonesia-g2u6",
          gradeId: "indonesia-g2",
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
              id: "indonesia-g2u6l1v1",
              arabic: "وَاحِدٌ",
              transliteration: "one",
              translation: t("وَاحِدٌ", "one", "satu", "satu", "un", "uno"),
              emoji: "1️⃣"
            },
            {
              id: "indonesia-g2u6l1v2",
              arabic: "اثْنَانِ",
              transliteration: "two",
              translation: t("اثْنَانِ", "two", "dua", "dua", "deux", "dos"),
              emoji: "2️⃣"
            },
            {
              id: "indonesia-g2u6l1v3",
              arabic: "ثَلَاثَةٌ",
              transliteration: "three",
              translation: t("ثَلَاثَةٌ", "three", "tiga", "tiga", "trois", "tres"),
              emoji: "3️⃣"
            },
            {
              id: "indonesia-g2u6l1v4",
              arabic: "أَرْبَعَةٌ",
              transliteration: "four",
              translation: t("أَرْبَعَةٌ", "four", "empat", "empat", "quatre", "cuatro"),
              emoji: "4️⃣"
            },
            {
              id: "indonesia-g2u6l1v5",
              arabic: "خَمْسَةٌ",
              transliteration: "five",
              translation: t("خَمْسَةٌ", "five", "lima", "lima", "cinq", "cinco"),
              emoji: "5️⃣"
            },
            {
              id: "indonesia-g2u6l1v6",
              arabic: "سِتَّةٌ",
              transliteration: "six",
              translation: t("سِتَّةٌ", "six", "enam", "enam", "six", "seis"),
              emoji: "6️⃣"
            },
            {
              id: "indonesia-g2u6l1v7",
              arabic: "سَبْعَةٌ",
              transliteration: "seven",
              translation: t("سَبْعَةٌ", "seven", "tujuh", "tujuh", "sept", "siete"),
              emoji: "7️⃣"
            },
            {
              id: "indonesia-g2u6l1v8",
              arabic: "ثَمَانِيَةٌ",
              transliteration: "eight",
              translation: t("ثَمَانِيَةٌ", "eight", "lapan", "delapan", "huit", "ocho"),
              emoji: "8️⃣"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "indonesia-g2u6reviewlistenindonesia-g2u6l1v7",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "سَبْعَةٌ",
              options: [
                "سَبْعَةٌ",
                "كِتَابٌ",
                "مُدَرِّسٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/37-fe0f-20e3/512.webp"
            },
            {
              id: "indonesia-g2u6reviewmcqindonesia-g2u6l1v6",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"سِتَّةٌ\"؟", "What does \"six\" mean?", "Apakah maksud \"enam\"?", "Apa arti \"enam\"?", "Que signifie \"six\" ?", "¿Qué significa \"seis\"?"),
              arabicText: "سِتَّةٌ",
              options: [
                "room",
                "six",
                "bird",
                "cat"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/36-fe0f-20e3/512.webp"
            },
            {
              id: "indonesia-g2u6reviewwriteindonesia-g2u6l1v7",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"سَبْعَةٌ\"", "Type the Arabic word for: \"seven\"", "Taip perkataan Arab untuk: \"tujuh\"", "Ketik kata Arab untuk: \"tujuh\"", "Tape le mot arabe pour : \"sept\"", "Escribe la palabra árabe para: \"siete\""),
              arabicText: "سَبْعَةٌ",
              answer: "سَبْعَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/37-fe0f-20e3/512.webp"
            },
            {
              id: "indonesia-g2u6reviewwriteindonesia-g2u6l1v4",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"أَرْبَعَةٌ\"", "Type the Arabic word for: \"four\"", "Taip perkataan Arab untuk: \"empat\"", "Ketik kata Arab untuk: \"empat\"", "Tape le mot arabe pour : \"quatre\"", "Escribe la palabra árabe para: \"cuatro\""),
              arabicText: "أَرْبَعَةٌ",
              answer: "أَرْبَعَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/34-fe0f-20e3/512.webp"
            },
            {
              id: "indonesia-g2u6reviewlistenindonesia-g2u6l1v1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "وَاحِدٌ",
              options: [
                "قَمَرٌ",
                "تِسْعَةٌ",
                "وَاحِدٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "indonesia-g2u6reviewmcqindonesia-g2u6l1v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"وَاحِدٌ\"؟", "What does \"one\" mean?", "Apakah maksud \"satu\"?", "Apa arti \"satu\"?", "Que signifie \"un\" ?", "¿Qué significa \"uno\"?"),
              arabicText: "وَاحِدٌ",
              options: [
                "one",
                "seven",
                "cat",
                "board"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            }
          ]
        }
      ]
    }
  ]
};
