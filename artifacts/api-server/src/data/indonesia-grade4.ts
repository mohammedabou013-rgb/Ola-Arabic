import { t, type GradeData } from "./types";

export const indonesiaGrade4: GradeData = {
  id: "indonesia-g4",
  number: 4,
  title: t("المستوى الرابع", "Stage 4", "Tahun 4", "Kelas 4", "Année 4", "Año 4"),
  description: t("منهج اللغة العربية للصف الرابع في المدرسة الإبتدائية الإسلامية الإندونيسية: العنوان، المهنة، الأسرة، البيت، المدرسة، والبيئة اليومية", "Arabic curriculum for Indonesian Islamic elementary Grade 4: address, professions, family, home, school, and daily surroundings", "Kurikulum bahasa Arab kelas 4 MI Indonesia: alamat, pekerjaan, keluarga, rumah, sekolah, dan lingkungan harian", "Kurikulum bahasa Arab kelas 4 MI Indonesia: alamat, pekerjaan, keluarga, rumah, sekolah, dan lingkungan harian", "Programme d'arabe pour la 4e année MI en Indonésie : adresse, métiers, famille, maison, école et environnement quotidien", "Currículo de árabe para 4.º grado de MI en Indonesia: dirección, profesiones, familia, casa, escuela y entorno diario"),
  color: "#16A34A",
  icon: "book-open",
  units: [
    {
      id: "indonesia-g4u1",
      gradeId: "indonesia-g4",
      order: 1,
      title: t("الْعُنْوَانُ", "Address", "Alamat", "Alamat", "L'adresse", "La dirección"),
      theme: "address",
      lessons: [
        {
          id: "indonesia-g4u1l1",
          unitId: "indonesia-g4u1",
          gradeId: "indonesia-g4",
          order: 1,
          title: t("عُنْوَانِي", "My Address", "Alamat Saya", "Alamat Saya", "Mon adresse", "Mi dirección"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("نَتَعَلَّمُ الْعُنْوَانَ وَالرَّقْمَ وَنَسْأَلُ: أَيْنَ بَيْتُكَ؟", "We learn address and numbers and ask: Where is your house?", "Kita belajar alamat dan nombor serta bertanya: Di mana rumahmu?", "Kita belajar alamat dan angka serta bertanya: Di mana rumahmu?", "Nous apprenons l'adresse et les nombres et demandons : où est ta maison ?", "Aprendemos la dirección y los números y preguntamos: ¿dónde está tu casa?"),
          vocabulary: [
            {
              id: "indonesia-g4u1l1v1",
              arabic: "عُنْوَانٌ",
              transliteration: "ʿunwān",
              translation: t("عُنْوَانٌ", "address", "alamat", "alamat", "adresse", "dirección"),
              emoji: "🏠"
            },
            {
              id: "indonesia-g4u1l1v2",
              arabic: "بَيْتٌ",
              transliteration: "bayt",
              translation: t("بَيْتٌ", "house", "rumah", "rumah", "maison", "casa"),
              emoji: "🏡"
            },
            {
              id: "indonesia-g4u1l1v3",
              arabic: "شَارِعٌ",
              transliteration: "shāriʿ",
              translation: t("شَارِعٌ", "street", "jalan", "jalan", "rue", "calle"),
              emoji: "🛣️"
            },
            {
              id: "indonesia-g4u1l1v4",
              arabic: "مَدِينَةٌ",
              transliteration: "madīna",
              translation: t("مَدِينَةٌ", "city", "bandar", "kota", "ville", "ciudad"),
              emoji: "🏙️"
            },
            {
              id: "indonesia-g4u1l1v5",
              arabic: "قَرْيَةٌ",
              transliteration: "qarya",
              translation: t("قَرْيَةٌ", "village", "kampung", "desa", "village", "pueblo"),
              emoji: "🏘️"
            },
            {
              id: "indonesia-g4u1l1v6",
              arabic: "رَقْمٌ",
              transliteration: "raqm",
              translation: t("رَقْمٌ", "number", "nombor", "angka", "nombre", "número"),
              emoji: "🔢"
            },
            {
              id: "indonesia-g4u1l1v7",
              arabic: "قَرِيبٌ",
              transliteration: "qarīb",
              translation: t("قَرِيبٌ", "near", "dekat", "dekat", "près", "cerca"),
              emoji: "📍"
            },
            {
              id: "indonesia-g4u1l1v8",
              arabic: "بَعِيدٌ",
              transliteration: "baʿīd",
              translation: t("بَعِيدٌ", "far", "jauh", "jauh", "loin", "lejos"),
              emoji: "🧭"
            },
            {
              id: "indonesia-g4u1l1v9",
              arabic: "هُنَا",
              transliteration: "hunā",
              translation: t("هُنَا", "here", "di sini", "di sini", "ici", "aquí"),
              emoji: "📌"
            },
            {
              id: "indonesia-g4u1l1v10",
              arabic: "هُنَاكَ",
              transliteration: "hunāka",
              translation: t("هُنَاكَ", "there", "di sana", "di sana", "là-bas", "allí"),
              emoji: "➡️"
            }
          ],
          dialogue: [
            {
              speaker: "عَلِيٌّ",
              arabic: "السَّلَامُ عَلَيْكُمْ",
              translation: t("السَّلَامُ عَلَيْكُمْ", "Peace be upon you", "Sejahtera atas kamu", "Assalamualaikum", "Que la paix soit sur vous", "La paz sea contigo")
            },
            {
              speaker: "سُلَيْمَانُ",
              arabic: "وَعَلَيْكُمُ السَّلَامُ",
              translation: t("وَعَلَيْكُمُ السَّلَامُ", "And peace be upon you", "Dan sejahtera atas kamu", "Dan Assalamualaikum", "Et que la paix soit sur vous", "Y la paz sea contigo")
            },
            {
              speaker: "عَلِيٌّ",
              arabic: "أَيْنَ بَيْتُكَ؟",
              translation: t("أَيْنَ بَيْتُكَ؟", "Where is your house?", "Di mana rumah kamu?", "Di mana rumahmu?", "Où est ta maison ?", "¿Dónde está tu casa?")
            },
            {
              speaker: "سُلَيْمَانُ",
              arabic: "بَيْتِي فِي شَارِعِ أَحْمَدَ رَقْمُ تِسْعَةٍ.",
              translation: t("بَيْتِي فِي شَارِعِ أَحْمَدَ رَقْمُ تِسْعَةٍ.", "My house is in Ahmad Street, number nine.", "Rumah saya di Jalan Ahmad, nombor sembilan.", "Rumah saya di Jalan Ahmad, nomor sembilan.", "Ma maison est dans la rue Ahmad, numéro neuf.", "Mi casa está en la calle Ahmad, número nueve.")
            },
            {
              speaker: "عَلِيٌّ",
              arabic: "هَلْ هُوَ قَرِيبٌ مِنَ الْمَدْرَسَةِ؟",
              translation: t("هَلْ هُوَ قَرِيبٌ مِنَ الْمَدْرَسَةِ؟", "Is it near the school?", "Adakah ia dekat dengan sekolah?", "Apakah itu dekat sekolah?", "Est-ce près de l'école ?", "¿Está cerca de la escuela?")
            }
          ],
          exercises: [
            {
              id: "indonesia-g4u1l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("اِسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le mot correct", "Escucha y elige la palabra correcta"),
              arabicText: "عُنْوَانٌ",
              options: [
                "عُنْوَانٌ",
                "رَقْمٌ",
                "شَارِعٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e0/512.webp"
            },
            {
              id: "indonesia-g4u1l1e2",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا مَعْنَى «شَارِعٌ»؟", "What does 'shāriʿ' mean?", "Apakah makna 'shāriʿ'?", "Apa arti 'shāriʿ'?", "Que signifie 'shāriʿ' ?", "¿Qué significa 'shāriʿ'?"),
              options: [
                "street",
                "house",
                "city"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e0/512.webp"
            },
            {
              id: "indonesia-g4u1l1e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ عُنْوَانَكَ بِلُغَةٍ بَسِيطَةٍ", "Say your address in simple Arabic", "Sebutkan alamat kamu dalam bahasa Arab mudah", "Sebutkan alamatmu dalam bahasa Arab sederhana", "Dis ton adresse en arabe simple", "Di tu dirección en árabe sencillo"),
              arabicText: "بَيْتِي فِي شَارِعِ ...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e0/512.webp"
            },
            {
              id: "indonesia-g4u1l1e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبِ الْعُنْوَانَ بِكَلِمَتَيْنِ", "Write the address in two words", "Tulis alamat dengan dua perkataan", "Tulis alamat dengan dua kata", "Écris l'adresse en deux mots", "Escribe la dirección en dos palabras"),
              answer: "شَارِعٌ، بَيْتٌ",
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Street%20in%20Jakarta.jpg"
            },
            {
              id: "indonesia-g4u1l1e5",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَاتِ بِالْمَعَانِي", "Match the words to the meanings", "Padankan perkataan dengan makna", "Cocokkan kata dengan maknanya", "Relie les mots à leurs sens", "Relaciona las palabras con sus significados"),
              pairs: [
                {
                  a: "قَرِيبٌ",
                  b: "near"
                },
                {
                  a: "بَعِيدٌ",
                  b: "far"
                },
                {
                  a: "رَقْمٌ",
                  b: "number"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e0/512.webp"
            },
            {
              id: "indonesia-g4u1l1e6",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ الْكَلِمَاتِ لِتُكَوِّنَ جُمْلَةً", "Arrange the words to make a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata-kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              pairs: [
                {
                  a: "بَيْتِي",
                  b: "my house"
                },
                {
                  a: "فِي",
                  b: "in"
                },
                {
                  a: "شَارِعٍ",
                  b: "a street"
                }
              ],
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/House%20number%20sign.jpg"
            },
            {
              id: "indonesia-g4u1l1speakindonesia-g4u1l1v1",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "عُنْوَانٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e0/512.webp"
            },
            {
              id: "indonesia-g4u1l1writeindonesia-g4u1l1v6",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"رَقْمٌ\"", "Type the Arabic word for: \"number\"", "Taip perkataan Arab untuk: \"nombor\"", "Ketik kata Arab untuk: \"angka\"", "Tape le mot arabe pour : \"nombre\"", "Escribe la palabra árabe para: \"número\""),
              arabicText: "رَقْمٌ",
              answer: "رَقْمٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f522/512.webp"
            },
            {
              id: "indonesia-g4u1l1mcqindonesia-g4u1l1v3",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"شَارِعٌ\"؟", "What does \"street\" mean?", "Apakah maksud \"jalan\"?", "Apa arti \"jalan\"?", "Que signifie \"rue\" ?", "¿Qué significa \"calle\"?"),
              arabicText: "شَارِعٌ",
              options: [
                "street",
                "after that",
                "one",
                "nine"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6e3-fe0f/512.webp"
            },
            {
              id: "indonesia-g4u1l1mcqindonesia-g4u1l1v4",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"مَدِينَةٌ\"؟", "What does \"city\" mean?", "Apakah maksud \"bandar\"?", "Apa arti \"kota\"?", "Que signifie \"ville\" ?", "¿Qué significa \"ciudad\"?"),
              arabicText: "مَدِينَةٌ",
              options: [
                "grandmother",
                "nine",
                "two",
                "city"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d9-fe0f/512.webp"
            },
            {
              id: "indonesia-g4u1l1spellindonesia-g4u1l1v7",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "قَرِيبٌ",
              answer: "قَرِيبٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4cd/512.webp"
            },
            {
              id: "indonesia-g4u1l1mcqindonesia-g4u1l1v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"عُنْوَانٌ\"؟", "What does \"address\" mean?", "Apakah maksud \"alamat\"?", "Apa arti \"alamat\"?", "Que signifie \"adresse\" ?", "¿Qué significa \"dirección\"?"),
              arabicText: "عُنْوَانٌ",
              options: [
                "address",
                "far",
                "four",
                "I study"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e0/512.webp"
            }
          ]
        },
        {
          id: "indonesia-g4u1review",
          unitId: "indonesia-g4u1",
          gradeId: "indonesia-g4",
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
              id: "indonesia-g4u1l1v1",
              arabic: "عُنْوَانٌ",
              transliteration: "ʿunwān",
              translation: t("عُنْوَانٌ", "address", "alamat", "alamat", "adresse", "dirección"),
              emoji: "🏠"
            },
            {
              id: "indonesia-g4u1l1v2",
              arabic: "بَيْتٌ",
              transliteration: "bayt",
              translation: t("بَيْتٌ", "house", "rumah", "rumah", "maison", "casa"),
              emoji: "🏡"
            },
            {
              id: "indonesia-g4u1l1v3",
              arabic: "شَارِعٌ",
              transliteration: "shāriʿ",
              translation: t("شَارِعٌ", "street", "jalan", "jalan", "rue", "calle"),
              emoji: "🛣️"
            },
            {
              id: "indonesia-g4u1l1v4",
              arabic: "مَدِينَةٌ",
              transliteration: "madīna",
              translation: t("مَدِينَةٌ", "city", "bandar", "kota", "ville", "ciudad"),
              emoji: "🏙️"
            },
            {
              id: "indonesia-g4u1l1v5",
              arabic: "قَرْيَةٌ",
              transliteration: "qarya",
              translation: t("قَرْيَةٌ", "village", "kampung", "desa", "village", "pueblo"),
              emoji: "🏘️"
            },
            {
              id: "indonesia-g4u1l1v6",
              arabic: "رَقْمٌ",
              transliteration: "raqm",
              translation: t("رَقْمٌ", "number", "nombor", "angka", "nombre", "número"),
              emoji: "🔢"
            },
            {
              id: "indonesia-g4u1l1v7",
              arabic: "قَرِيبٌ",
              transliteration: "qarīb",
              translation: t("قَرِيبٌ", "near", "dekat", "dekat", "près", "cerca"),
              emoji: "📍"
            },
            {
              id: "indonesia-g4u1l1v8",
              arabic: "بَعِيدٌ",
              transliteration: "baʿīd",
              translation: t("بَعِيدٌ", "far", "jauh", "jauh", "loin", "lejos"),
              emoji: "🧭"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "indonesia-g4u1reviewmcqindonesia-g4u1l1v2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"بَيْتٌ\"؟", "What does \"house\" mean?", "Apakah maksud \"rumah\"?", "Apa arti \"rumah\"?", "Que signifie \"maison\" ?", "¿Qué significa \"casa\"?"),
              arabicText: "بَيْتٌ",
              options: [
                "house",
                "I drink",
                "pencil case",
                "I study"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e1/512.webp"
            },
            {
              id: "indonesia-g4u1reviewspeakindonesia-g4u1l1v6",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "رَقْمٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f522/512.webp"
            },
            {
              id: "indonesia-g4u1reviewwriteindonesia-g4u1l1v2",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"بَيْتٌ\"", "Type the Arabic word for: \"house\"", "Taip perkataan Arab untuk: \"rumah\"", "Ketik kata Arab untuk: \"rumah\"", "Tape le mot arabe pour : \"maison\"", "Escribe la palabra árabe para: \"casa\""),
              arabicText: "بَيْتٌ",
              answer: "بَيْتٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e1/512.webp"
            },
            {
              id: "indonesia-g4u1reviewspellindonesia-g4u1l1v4",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "مَدِينَةٌ",
              answer: "مَدِينَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d9-fe0f/512.webp"
            },
            {
              id: "indonesia-g4u1reviewspeakindonesia-g4u1l1v2",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "بَيْتٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e1/512.webp"
            },
            {
              id: "indonesia-g4u1reviewspellindonesia-g4u1l1v1",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "عُنْوَانٌ",
              answer: "عُنْوَانٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e0/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "indonesia-g4u2",
      gradeId: "indonesia-g4",
      order: 2,
      title: t("الْمِهْنَةُ", "Professions", "Pekerjaan", "Pekerjaan", "Les métiers", "Las profesiones"),
      theme: "professions",
      lessons: [
        {
          id: "indonesia-g4u2l1",
          unitId: "indonesia-g4u2",
          gradeId: "indonesia-g4",
          order: 1,
          title: t("مِنْ أَعْمَالِ النَّاسِ", "People's Jobs", "Kerja-kerja Orang", "Pekerjaan Orang", "Les métiers des gens", "Los trabajos de las personas"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("نَتَعَرَّفُ عَلَى الْمِهَنِ وَنَسْأَلُ: مَاذَا يَعْمَلُ أَبُوكَ؟", "We learn jobs and ask: What does your father do?", "Kami belajar pekerjaan dan bertanya: Apa kerja ayah kamu?", "Kami belajar pekerjaan dan bertanya: Apa pekerjaan ayahmu?", "Nous apprenons les métiers et demandons : que fait ton père ?", "Aprendemos profesiones y preguntamos: ¿qué hace tu padre?"),
          vocabulary: [
            {
              id: "indonesia-g4u2l1v1",
              arabic: "مِهْنَةٌ",
              transliteration: "mihna",
              translation: t("مِهْنَةٌ", "profession", "pekerjaan", "pekerjaan", "métier", "profesión"),
              emoji: "🧰"
            },
            {
              id: "indonesia-g4u2l1v2",
              arabic: "مُعَلِّمٌ",
              transliteration: "muʿallim",
              translation: t("مُعَلِّمٌ", "teacher", "guru lelaki", "guru laki-laki", "enseignant", "maestro"),
              emoji: "👨‍🏫"
            },
            {
              id: "indonesia-g4u2l1v3",
              arabic: "مُعَلِّمَةٌ",
              transliteration: "muʿallima",
              translation: t("مُعَلِّمَةٌ", "female teacher", "guru perempuan", "guru perempuan", "enseignante", "maestra"),
              emoji: "👩‍🏫"
            },
            {
              id: "indonesia-g4u2l1v4",
              arabic: "طَبِيبٌ",
              transliteration: "ṭabīb",
              translation: t("طَبِيبٌ", "doctor", "doktor", "dokter", "médecin", "médico"),
              emoji: "👨‍⚕️"
            },
            {
              id: "indonesia-g4u2l1v5",
              arabic: "طَبِيبَةٌ",
              transliteration: "ṭabība",
              translation: t("طَبِيبَةٌ", "female doctor", "doktor perempuan", "dokter perempuan", "médecin femme", "médica"),
              emoji: "👩‍⚕️"
            },
            {
              id: "indonesia-g4u2l1v6",
              arabic: "فَلَّاحٌ",
              transliteration: "fallāḥ",
              translation: t("فَلَّاحٌ", "farmer", "petani lelaki", "petani laki-laki", "agriculteur", "agricultor"),
              emoji: "🌾"
            },
            {
              id: "indonesia-g4u2l1v7",
              arabic: "خَبَّازٌ",
              transliteration: "khabbāz",
              translation: t("خَبَّازٌ", "baker", "tukang roti", "pembuat roti", "boulanger", "panadero"),
              emoji: "🥖"
            },
            {
              id: "indonesia-g4u2l1v8",
              arabic: "سَائِقٌ",
              transliteration: "sāʾiq",
              translation: t("سَائِقٌ", "driver", "pemandu", "pengemudi", "chauffeur", "conductor"),
              emoji: "🚗"
            },
            {
              id: "indonesia-g4u2l1v9",
              arabic: "نَجَّارٌ",
              transliteration: "najjār",
              translation: t("نَجَّارٌ", "carpenter", "tukang kayu", "tukang kayu", "charpentier", "carpintero"),
              emoji: "🪚"
            },
            {
              id: "indonesia-g4u2l1v10",
              arabic: "بَائِعٌ",
              transliteration: "bāʾiʿ",
              translation: t("بَائِعٌ", "seller", "peniaga", "penjual", "vendeur", "vendedor"),
              emoji: "🛍️"
            }
          ],
          dialogue: [
            {
              speaker: "عُمَرُ",
              arabic: "السَّلَامُ عَلَيْكَ يَا حَسَنُ",
              translation: t("السَّلَامُ عَلَيْكَ يَا حَسَنُ", "Peace be upon you, Hasan", "Sejahtera atas kamu, Hasan", "Assalamualaikum, Hasan", "Que la paix soit sur toi, Hasan", "La paz sea contigo, Hasan")
            },
            {
              speaker: "حَسَنُ",
              arabic: "وَعَلَيْكَ السَّلَامُ",
              translation: t("وَعَلَيْكَ السَّلَامُ", "And peace be upon you", "Dan sejahtera atas kamu", "Dan Assalamualaikum", "Et que la paix soit sur toi", "Y la paz sea contigo")
            },
            {
              speaker: "عُمَرُ",
              arabic: "مَاذَا يَعْمَلُ أَبُوكَ؟",
              translation: t("مَاذَا يَعْمَلُ أَبُوكَ؟", "What does your father do?", "Apa kerja ayah kamu?", "Apa pekerjaan ayahmu?", "Que fait ton père ?", "¿Qué hace tu padre?")
            },
            {
              speaker: "حَسَنُ",
              arabic: "أَبِي مُعَلِّمٌ فِي الْمَدْرَسَةِ.",
              translation: t("أَبِي مُعَلِّمٌ فِي الْمَدْرَسَةِ.", "My father is a teacher at school.", "Ayah saya guru di sekolah.", "Ayahku guru di sekolah.", "Mon père est enseignant à l'école.", "Mi padre es maestro en la escuela.")
            },
            {
              speaker: "عُمَرُ",
              arabic: "وَأُمُّكَ؟",
              translation: t("وَأُمُّكَ؟", "And your mother?", "Dan ibu kamu?", "Dan ibumu?", "Et ta mère ?", "¿Y tu madre?")
            }
          ],
          exercises: [
            {
              id: "indonesia-g4u2l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("اِسْتَمِعْ وَاخْتَرِ الْمِهْنَةَ الصَّحِيحَةَ", "Listen and choose the correct profession", "Dengar dan pilih pekerjaan yang betul", "Dengarkan dan pilih pekerjaan yang benar", "Écoute et choisis le métier correct", "Escucha y elige la profesión correcta"),
              arabicText: "طَبِيبٌ",
              options: [
                "طَبِيبٌ",
                "بَيْتٌ",
                "رَقْمٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468-200d-2695-fe0f/512.webp"
            },
            {
              id: "indonesia-g4u2l1e2",
              type: "mcq",
              skill: "reading",
              prompt: t("مَنْ يَعْمَلُ فِي الْمَسْتَشْفَى؟", "Who works in the hospital?", "Siapa bekerja di hospital?", "Siapa yang bekerja di rumah sakit?", "Qui travaille à l'hôpital ?", "¿Quién trabaja en el hospital?"),
              options: [
                "طَبِيبٌ",
                "فَلَّاحٌ",
                "خَبَّازٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9f0/512.webp"
            },
            {
              id: "indonesia-g4u2l1e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنْ مِهْنَةِ أَحَدِ وَالِدَيْكَ", "Speak about one parent's job", "Bertutur tentang pekerjaan salah seorang ibu bapa", "Bicara tentang pekerjaan salah satu orang tuamu", "Parle du métier d'un de tes parents", "Habla del trabajo de uno de tus padres"),
              arabicText: "أَبِي ... وَأُمِّي ...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9f0/512.webp"
            },
            {
              id: "indonesia-g4u2l1e4",
              type: "writing",
              skill: "writing",
              prompt: t("اُكْتُبْ اسْمَ مِهْنَتَيْنِ", "Write the names of two professions", "Tulis nama dua pekerjaan", "Tulis nama dua profesi", "Écris le nom de deux métiers", "Escribe los nombres de dos profesiones"),
              answer: "مُعَلِّمٌ، طَبِيبٌ",
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Teacher%20in%20classroom.jpg"
            },
            {
              id: "indonesia-g4u2l1e5",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْمِهْنَةَ بِالْمَعْنَى", "Match the profession with the meaning", "Padankan pekerjaan dengan makna", "Cocokkan pekerjaan dengan makna", "Relie le métier à son sens", "Relaciona la profesión con su significado"),
              pairs: [
                {
                  a: "فَلَّاحٌ",
                  b: "farmer"
                },
                {
                  a: "سَائِقٌ",
                  b: "driver"
                },
                {
                  a: "بَائِعٌ",
                  b: "seller"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9f0/512.webp"
            },
            {
              id: "indonesia-g4u2l1e6",
              type: "fill_in_blank",
              skill: "writing",
              prompt: t("اِكْمِلِ: أَبِي .... فِي الْمَدْرَسَةِ", "Complete: My father ... at school", "Lengkapkan: Ayah saya ... di sekolah", "Lengkapi: Ayahku ... di sekolah", "Complète : Mon père ... à l'école", "Completa: Mi padre ... en la escuela"),
              arabicText: "مُعَلِّمٌ",
              answer: "مُعَلِّمٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468-200d-1f3eb/512.webp"
            },
            {
              id: "indonesia-g4u2l1e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "السَّلَامُ عَلَيْكَ يَا حَسَنُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9f0/512.webp"
            },
            {
              id: "indonesia-g4u2l1speakindonesia-g4u2l1v3",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "مُعَلِّمَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f469-200d-1f3eb/512.webp"
            },
            {
              id: "indonesia-g4u2l1mcqindonesia-g4u2l1v5",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"طَبِيبَةٌ\"؟", "What does \"female doctor\" mean?", "Apakah maksud \"doktor perempuan\"?", "Apa arti \"dokter perempuan\"?", "Que signifie \"médecin femme\" ?", "¿Qué significa \"médica\"?"),
              arabicText: "طَبِيبَةٌ",
              options: [
                "desk",
                "female doctor",
                "pen",
                "board"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f469-200d-2695-fe0f/512.webp"
            },
            {
              id: "indonesia-g4u2l1spellindonesia-g4u2l1v4",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "طَبِيبٌ",
              answer: "طَبِيبٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468-200d-2695-fe0f/512.webp"
            },
            {
              id: "indonesia-g4u2l1writeindonesia-g4u2l1v5",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"طَبِيبَةٌ\"", "Type the Arabic word for: \"female doctor\"", "Taip perkataan Arab untuk: \"doktor perempuan\"", "Ketik kata Arab untuk: \"dokter perempuan\"", "Tape le mot arabe pour : \"médecin femme\"", "Escribe la palabra árabe para: \"médica\""),
              arabicText: "طَبِيبَةٌ",
              answer: "طَبِيبَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f469-200d-2695-fe0f/512.webp"
            },
            {
              id: "indonesia-g4u2l1speakindonesia-g4u2l1v1",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "مِهْنَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9f0/512.webp"
            }
          ]
        },
        {
          id: "indonesia-g4u2review",
          unitId: "indonesia-g4u2",
          gradeId: "indonesia-g4",
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
              id: "indonesia-g4u2l1v1",
              arabic: "مِهْنَةٌ",
              transliteration: "mihna",
              translation: t("مِهْنَةٌ", "profession", "pekerjaan", "pekerjaan", "métier", "profesión"),
              emoji: "🧰"
            },
            {
              id: "indonesia-g4u2l1v2",
              arabic: "مُعَلِّمٌ",
              transliteration: "muʿallim",
              translation: t("مُعَلِّمٌ", "teacher", "guru lelaki", "guru laki-laki", "enseignant", "maestro"),
              emoji: "👨‍🏫"
            },
            {
              id: "indonesia-g4u2l1v3",
              arabic: "مُعَلِّمَةٌ",
              transliteration: "muʿallima",
              translation: t("مُعَلِّمَةٌ", "female teacher", "guru perempuan", "guru perempuan", "enseignante", "maestra"),
              emoji: "👩‍🏫"
            },
            {
              id: "indonesia-g4u2l1v4",
              arabic: "طَبِيبٌ",
              transliteration: "ṭabīb",
              translation: t("طَبِيبٌ", "doctor", "doktor", "dokter", "médecin", "médico"),
              emoji: "👨‍⚕️"
            },
            {
              id: "indonesia-g4u2l1v5",
              arabic: "طَبِيبَةٌ",
              transliteration: "ṭabība",
              translation: t("طَبِيبَةٌ", "female doctor", "doktor perempuan", "dokter perempuan", "médecin femme", "médica"),
              emoji: "👩‍⚕️"
            },
            {
              id: "indonesia-g4u2l1v6",
              arabic: "فَلَّاحٌ",
              transliteration: "fallāḥ",
              translation: t("فَلَّاحٌ", "farmer", "petani lelaki", "petani laki-laki", "agriculteur", "agricultor"),
              emoji: "🌾"
            },
            {
              id: "indonesia-g4u2l1v7",
              arabic: "خَبَّازٌ",
              transliteration: "khabbāz",
              translation: t("خَبَّازٌ", "baker", "tukang roti", "pembuat roti", "boulanger", "panadero"),
              emoji: "🥖"
            },
            {
              id: "indonesia-g4u2l1v8",
              arabic: "سَائِقٌ",
              transliteration: "sāʾiq",
              translation: t("سَائِقٌ", "driver", "pemandu", "pengemudi", "chauffeur", "conductor"),
              emoji: "🚗"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "indonesia-g4u2reviewspellindonesia-g4u2l1v4",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "طَبِيبٌ",
              answer: "طَبِيبٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468-200d-2695-fe0f/512.webp"
            },
            {
              id: "indonesia-g4u2reviewmcqindonesia-g4u2l1v7",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"خَبَّازٌ\"؟", "What does \"baker\" mean?", "Apakah maksud \"tukang roti\"?", "Apa arti \"pembuat roti\"?", "Que signifie \"boulanger\" ?", "¿Qué significa \"panadero\"?"),
              arabicText: "خَبَّازٌ",
              options: [
                "farmer",
                "I sleep",
                "with",
                "baker"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f956/512.webp"
            },
            {
              id: "indonesia-g4u2reviewmcqindonesia-g4u2l1v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"مِهْنَةٌ\"؟", "What does \"profession\" mean?", "Apakah maksud \"pekerjaan\"?", "Apa arti \"pekerjaan\"?", "Que signifie \"métier\" ?", "¿Qué significa \"profesión\"?"),
              arabicText: "مِهْنَةٌ",
              options: [
                "classroom",
                "profession",
                "female doctor",
                "exercise book"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9f0/512.webp"
            },
            {
              id: "indonesia-g4u2reviewwriteindonesia-g4u2l1v5",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"طَبِيبَةٌ\"", "Type the Arabic word for: \"female doctor\"", "Taip perkataan Arab untuk: \"doktor perempuan\"", "Ketik kata Arab untuk: \"dokter perempuan\"", "Tape le mot arabe pour : \"médecin femme\"", "Escribe la palabra árabe para: \"médica\""),
              arabicText: "طَبِيبَةٌ",
              answer: "طَبِيبَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f469-200d-2695-fe0f/512.webp"
            },
            {
              id: "indonesia-g4u2reviewspeakindonesia-g4u2l1v5",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "طَبِيبَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f469-200d-2695-fe0f/512.webp"
            },
            {
              id: "indonesia-g4u2reviewwriteindonesia-g4u2l1v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"مِهْنَةٌ\"", "Type the Arabic word for: \"profession\"", "Taip perkataan Arab untuk: \"pekerjaan\"", "Ketik kata Arab untuk: \"pekerjaan\"", "Tape le mot arabe pour : \"métier\"", "Escribe la palabra árabe para: \"profesión\""),
              arabicText: "مِهْنَةٌ",
              answer: "مِهْنَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9f0/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "indonesia-g4u3",
      gradeId: "indonesia-g4",
      order: 3,
      title: t("الْأُسْرَةُ", "Family", "Keluarga", "Keluarga", "La famille", "La familia"),
      theme: "family",
      lessons: [
        {
          id: "indonesia-g4u3l1",
          unitId: "indonesia-g4u3",
          gradeId: "indonesia-g4",
          order: 1,
          title: t("أَفْرَادُ أُسْرَتِي", "Members of My Family", "Ahli Keluarga Saya", "Anggota Keluargaku", "Les membres de ma famille", "Los miembros de mi familia"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("نَتَعَلَّمُ أَسْمَاءَ أَفْرَادِ الْأُسْرَةِ وَنَصِفُهُمْ بِجُمَلٍ قَصِيرَةٍ.", "We learn family member names and describe them with short sentences.", "Kami belajar nama ahli keluarga dan menerangkan mereka dengan ayat pendek.", "Kami belajar nama anggota keluarga dan menjelaskan mereka dengan kalimat pendek.", "Nous apprenons les membres de la famille et les décrivons avec de courtes phrases.", "Aprendemos los miembros de la familia y los describimos con oraciones cortas."),
          vocabulary: [
            {
              id: "indonesia-g4u3l1v1",
              arabic: "أَبٌ",
              transliteration: "ab",
              translation: t("أَبٌ", "father", "ayah", "ayah", "père", "padre"),
              emoji: "👨"
            },
            {
              id: "indonesia-g4u3l1v2",
              arabic: "أُمٌّ",
              transliteration: "umm",
              translation: t("أُمٌّ", "mother", "ibu", "ibu", "mère", "madre"),
              emoji: "👩"
            },
            {
              id: "indonesia-g4u3l1v3",
              arabic: "أَخٌ",
              transliteration: "akh",
              translation: t("أَخٌ", "brother", "abang/adik lelaki", "saudara laki-laki", "frère", "hermano"),
              emoji: "👦"
            },
            {
              id: "indonesia-g4u3l1v4",
              arabic: "أُخْتٌ",
              transliteration: "ukht",
              translation: t("أُخْتٌ", "sister", "kakak/adik perempuan", "saudara perempuan", "sœur", "hermana"),
              emoji: "👧"
            },
            {
              id: "indonesia-g4u3l1v5",
              arabic: "جَدٌّ",
              transliteration: "jadd",
              translation: t("جَدٌّ", "grandfather", "datuk", "kakek", "grand-père", "abuelo"),
              emoji: "👴"
            },
            {
              id: "indonesia-g4u3l1v6",
              arabic: "جَدَّةٌ",
              transliteration: "jadda",
              translation: t("جَدَّةٌ", "grandmother", "nenek", "nenek", "grand-mère", "abuela"),
              emoji: "👵"
            },
            {
              id: "indonesia-g4u3l1v7",
              arabic: "أُسْرَةٌ",
              transliteration: "usra",
              translation: t("أُسْرَةٌ", "family", "keluarga", "keluarga", "famille", "familia"),
              emoji: "👨‍👩‍👧‍👦"
            },
            {
              id: "indonesia-g4u3l1v8",
              arabic: "مَعَ",
              transliteration: "maʿa",
              translation: t("مَعَ", "with", "dengan", "dengan", "avec", "con"),
              emoji: "🤝"
            },
            {
              id: "indonesia-g4u3l1v9",
              arabic: "يُحِبُّ",
              transliteration: "yuḥibbu",
              translation: t("يُحِبُّ", "loves", "sayang", "sayang", "aime", "ama"),
              emoji: "❤️"
            },
            {
              id: "indonesia-g4u3l1v10",
              arabic: "يَسْكُنُ",
              transliteration: "yaskunu",
              translation: t("يَسْكُنُ", "lives", "tinggal", "tinggal", "habite", "vive"),
              emoji: "🏡"
            }
          ],
          dialogue: [
            {
              speaker: "تِلْمِيذَةٌ",
              arabic: "مَنْ هٰذَا؟",
              translation: t("مَنْ هٰذَا؟", "Who is this?", "Siapakah ini?", "Siapakah ini?", "Qui est-ce ?", "¿Quién es este?")
            },
            {
              speaker: "تِلْمِيذٌ",
              arabic: "هٰذَا أَبِي وَهٰذِهِ أُمِّي.",
              translation: t("هٰذَا أَبِي وَهٰذِهِ أُمِّي.", "This is my father and this is my mother.", "Ini ayah saya dan ini ibu saya.", "Ini ayah saya dan ini ibu saya.", "Voici mon père et voici ma mère.", "Este es mi padre y esta es mi madre.")
            },
            {
              speaker: "تِلْمِيذَةٌ",
              arabic: "هَلْ تُحِبُّ أُسْرَتَكَ؟",
              translation: t("هَلْ تُحِبُّ أُسْرَتَكَ؟", "Do you love your family?", "Adakah kamu sayang keluarga kamu?", "Apakah kamu menyayangi keluargamu?", "Aimes-tu ta famille ?", "¿Amas a tu familia?")
            },
            {
              speaker: "تِلْمِيذٌ",
              arabic: "نَعَمْ، أَنَا أُحِبُّ أُسْرَتِي.",
              translation: t("نَعَمْ، أَنَا أُحِبُّ أُسْرَتِي.", "Yes, I love my family.", "Ya, saya sayang keluarga saya.", "Ya, saya sayangi keluargaku.", "Oui, j'aime ma famille.", "Sí, amo a mi familia.")
            },
            {
              speaker: "تِلْمِيذَةٌ",
              arabic: "أَيْنَ تَسْكُنُونَ؟",
              translation: t("أَيْنَ تَسْكُنُونَ؟", "Where do you live?", "Di mana kamu tinggal?", "Di mana kalian tinggal?", "Où habitez-vous ?", "¿Dónde viven?")
            }
          ],
          exercises: [
            {
              id: "indonesia-g4u3l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("اِسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le mot correct", "Escucha y elige la palabra correcta"),
              arabicText: "أُسْرَةٌ",
              options: [
                "أُسْرَةٌ",
                "أَبٌ",
                "بَيْتٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468-200d-1f469-200d-1f467-200d-1f466/512.webp"
            },
            {
              id: "indonesia-g4u3l1e2",
              type: "mcq",
              skill: "reading",
              prompt: t("مَنْ هُوَ أَبُ الْأَبِ؟", "Who is the father's father?", "Siapa bapa kepada ayah?", "Siapa ayah dari ayah?", "Qui est le père du père ?", "¿Quién es el padre del padre?"),
              options: [
                "جَدٌّ",
                "أَخٌ",
                "عَمٌّ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468/512.webp"
            },
            {
              id: "indonesia-g4u3l1e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("صِفْ أُسْرَتَكَ بِثَلَاثِ كَلِمَاتٍ", "Describe your family in three words", "Terangkan keluarga kamu dengan tiga perkataan", "Describe tu familia con tres palabras", "Décris ta famille en trois mots", "Describe a tu familia con tres palabras"),
              arabicText: "أُسْرَتِي كَبِيرَةٌ وَجَمِيلَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468/512.webp"
            },
            {
              id: "indonesia-g4u3l1e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ اسْمَيْنِ مِنْ أَفْرَادِ أُسْرَتِكَ", "Write two family member names", "Tulis dua nama ahli keluarga", "Tulis dua nama anggota keluarga", "Écris deux noms de membres de ta famille", "Escribe dos nombres de miembros de tu familia"),
              answer: "أَبٌ، أُمٌّ",
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Family%20portrait.jpg"
            },
            {
              id: "indonesia-g4u3l1e5",
              type: "matching",
              skill: "reading",
              prompt: t("صِلْ بَيْنَ الْكَلِمَةِ وَالْمَعْنَى", "Match the word and the meaning", "Padankan perkataan dan makna", "Cocokkan kata dan makna", "Relie le mot et le sens", "Relaciona la palabra y el significado"),
              pairs: [
                {
                  a: "جَدَّةٌ",
                  b: "grandmother"
                },
                {
                  a: "أُخْتٌ",
                  b: "sister"
                },
                {
                  a: "أَخٌ",
                  b: "brother"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468/512.webp"
            },
            {
              id: "indonesia-g4u3l1e6",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ الْكَلِمَاتِ", "Arrange the words", "Susun perkataan", "Susun kata-kata", "Range les mots", "Ordena las palabras"),
              pairs: [
                {
                  a: "هٰذَا",
                  b: "this is"
                },
                {
                  a: "أَبِي",
                  b: "my father"
                },
                {
                  a: "وَ",
                  b: "and"
                },
                {
                  a: "أُمِّي",
                  b: "my mother"
                }
              ],
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Parents%20and%20children.jpg"
            },
            {
              id: "indonesia-g4u3l1listenindonesia-g4u3l1v3",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "أَخٌ",
              options: [
                "رَقْمٌ",
                "أَخٌ",
                "هُنَاكَ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f466/512.webp"
            },
            {
              id: "indonesia-g4u3l1writeindonesia-g4u3l1v8",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"مَعَ\"", "Type the Arabic word for: \"with\"", "Taip perkataan Arab untuk: \"dengan\"", "Ketik kata Arab untuk: \"dengan\"", "Tape le mot arabe pour : \"avec\"", "Escribe la palabra árabe para: \"con\""),
              arabicText: "مَعَ",
              answer: "مَعَ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "indonesia-g4u3l1speakindonesia-g4u3l1v7",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "أُسْرَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468-200d-1f469-200d-1f467-200d-1f466/512.webp"
            },
            {
              id: "indonesia-g4u3l1speakindonesia-g4u3l1v8",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "مَعَ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "indonesia-g4u3l1speakindonesia-g4u3l1v5",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "جَدٌّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f474/512.webp"
            },
            {
              id: "indonesia-g4u3l1mcqindonesia-g4u3l1v9",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"يُحِبُّ\"؟", "What does \"loves\" mean?", "Apakah maksud \"sayang\"?", "Apa arti \"sayang\"?", "Que signifie \"aime\" ?", "¿Qué significa \"ama\"?"),
              arabicText: "يُحِبُّ",
              options: [
                "seven",
                "driver",
                "loves",
                "carpenter"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2764-fe0f/512.webp"
            }
          ]
        },
        {
          id: "indonesia-g4u3review",
          unitId: "indonesia-g4u3",
          gradeId: "indonesia-g4",
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
              id: "indonesia-g4u3l1v1",
              arabic: "أَبٌ",
              transliteration: "ab",
              translation: t("أَبٌ", "father", "ayah", "ayah", "père", "padre"),
              emoji: "👨"
            },
            {
              id: "indonesia-g4u3l1v2",
              arabic: "أُمٌّ",
              transliteration: "umm",
              translation: t("أُمٌّ", "mother", "ibu", "ibu", "mère", "madre"),
              emoji: "👩"
            },
            {
              id: "indonesia-g4u3l1v3",
              arabic: "أَخٌ",
              transliteration: "akh",
              translation: t("أَخٌ", "brother", "abang/adik lelaki", "saudara laki-laki", "frère", "hermano"),
              emoji: "👦"
            },
            {
              id: "indonesia-g4u3l1v4",
              arabic: "أُخْتٌ",
              transliteration: "ukht",
              translation: t("أُخْتٌ", "sister", "kakak/adik perempuan", "saudara perempuan", "sœur", "hermana"),
              emoji: "👧"
            },
            {
              id: "indonesia-g4u3l1v5",
              arabic: "جَدٌّ",
              transliteration: "jadd",
              translation: t("جَدٌّ", "grandfather", "datuk", "kakek", "grand-père", "abuelo"),
              emoji: "👴"
            },
            {
              id: "indonesia-g4u3l1v6",
              arabic: "جَدَّةٌ",
              transliteration: "jadda",
              translation: t("جَدَّةٌ", "grandmother", "nenek", "nenek", "grand-mère", "abuela"),
              emoji: "👵"
            },
            {
              id: "indonesia-g4u3l1v7",
              arabic: "أُسْرَةٌ",
              transliteration: "usra",
              translation: t("أُسْرَةٌ", "family", "keluarga", "keluarga", "famille", "familia"),
              emoji: "👨‍👩‍👧‍👦"
            },
            {
              id: "indonesia-g4u3l1v8",
              arabic: "مَعَ",
              transliteration: "maʿa",
              translation: t("مَعَ", "with", "dengan", "dengan", "avec", "con"),
              emoji: "🤝"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "indonesia-g4u3reviewwriteindonesia-g4u3l1v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"أَبٌ\"", "Type the Arabic word for: \"father\"", "Taip perkataan Arab untuk: \"ayah\"", "Ketik kata Arab untuk: \"ayah\"", "Tape le mot arabe pour : \"père\"", "Escribe la palabra árabe para: \"padre\""),
              arabicText: "أَبٌ",
              answer: "أَبٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468/512.webp"
            },
            {
              id: "indonesia-g4u3reviewlistenindonesia-g4u3l1v8",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "مَعَ",
              options: [
                "يُحِبُّ",
                "عَشَرَةٌ",
                "مَعَ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "indonesia-g4u3reviewwriteindonesia-g4u3l1v7",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"أُسْرَةٌ\"", "Type the Arabic word for: \"family\"", "Taip perkataan Arab untuk: \"keluarga\"", "Ketik kata Arab untuk: \"keluarga\"", "Tape le mot arabe pour : \"famille\"", "Escribe la palabra árabe para: \"familia\""),
              arabicText: "أُسْرَةٌ",
              answer: "أُسْرَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468-200d-1f469-200d-1f467-200d-1f466/512.webp"
            },
            {
              id: "indonesia-g4u3reviewspeakindonesia-g4u3l1v4",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "أُخْتٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f467/512.webp"
            },
            {
              id: "indonesia-g4u3reviewwriteindonesia-g4u3l1v6",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"جَدَّةٌ\"", "Type the Arabic word for: \"grandmother\"", "Taip perkataan Arab untuk: \"nenek\"", "Ketik kata Arab untuk: \"nenek\"", "Tape le mot arabe pour : \"grand-mère\"", "Escribe la palabra árabe para: \"abuela\""),
              arabicText: "جَدَّةٌ",
              answer: "جَدَّةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f475/512.webp"
            },
            {
              id: "indonesia-g4u3reviewspellindonesia-g4u3l1v5",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "جَدٌّ",
              answer: "جَدٌّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f474/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "indonesia-g4u4",
      gradeId: "indonesia-g4",
      order: 4,
      title: t("الْمَدْرَسَةُ", "School", "Sekolah", "Sekolah", "L'école", "La escuela"),
      theme: "school",
      lessons: [
        {
          id: "indonesia-g4u4l1",
          unitId: "indonesia-g4u4",
          gradeId: "indonesia-g4",
          order: 1,
          title: t("فِي الْفَصْلِ", "In the Classroom", "Di Dalam Kelas", "Di Dalam Kelas", "Dans la classe", "En el aula"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("نَتَعَلَّمُ أَدَوَاتِ الْمَدْرَسَةِ وَنَصِفُ مَا نَرَاهُ فِي الْفَصْلِ.", "We learn school tools and describe what we see in class.", "Kami belajar alat sekolah dan menerangkan apa yang kami lihat di kelas.", "Kami belajar alat sekolah dan mendeskripsikan apa yang kami lihat di kelas.", "Nous apprenons les outils scolaires et décrivons ce que nous voyons en classe.", "Aprendemos útiles escolares y describimos lo que vemos en clase."),
          vocabulary: [
            {
              id: "indonesia-g4u4l1v1",
              arabic: "فَصْلٌ",
              transliteration: "faṣl",
              translation: t("فَصْلٌ", "classroom", "kelas", "kelas", "classe", "aula"),
              emoji: "🏫"
            },
            {
              id: "indonesia-g4u4l1v2",
              arabic: "سَبُّورَةٌ",
              transliteration: "sabūra",
              translation: t("سَبُّورَةٌ", "board", "papan tulis", "papan tulis", "tableau", "pizarra"),
              emoji: "🧑‍🏫"
            },
            {
              id: "indonesia-g4u4l1v3",
              arabic: "مِمْحَاةٌ",
              transliteration: "mimḥāh",
              translation: t("مِمْحَاةٌ", "eraser", "pemadam", "penghapus", "gomme", "borrador"),
              emoji: "🧽"
            },
            {
              id: "indonesia-g4u4l1v4",
              arabic: "قَلَمٌ",
              transliteration: "qalam",
              translation: t("قَلَمٌ", "pen", "pen", "pulpen", "stylo", "bolígrafo"),
              emoji: "🖊️"
            },
            {
              id: "indonesia-g4u4l1v5",
              arabic: "كِتَابٌ",
              transliteration: "kitāb",
              translation: t("كِتَابٌ", "book", "buku", "buku", "livre", "libro"),
              emoji: "📘"
            },
            {
              id: "indonesia-g4u4l1v6",
              arabic: "دَفْتَرٌ",
              transliteration: "daftar",
              translation: t("دَفْتَرٌ", "exercise book", "buku latihan", "buku latihan", "cahier", "cuaderno"),
              emoji: "📒"
            },
            {
              id: "indonesia-g4u4l1v7",
              arabic: "مِقْلَمَةٌ",
              transliteration: "miqlama",
              translation: t("مِقْلَمَةٌ", "pencil case", "bekas pensel", "tempat pensil", "trousse", "estuche"),
              emoji: "🧰"
            },
            {
              id: "indonesia-g4u4l1v8",
              arabic: "مَكْتَبٌ",
              transliteration: "maktab",
              translation: t("مَكْتَبٌ", "desk", "meja", "meja", "bureau", "escritorio"),
              emoji: "🪑"
            },
            {
              id: "indonesia-g4u4l1v9",
              arabic: "نَقْرَأُ",
              transliteration: "naqraʾu",
              translation: t("نَقْرَأُ", "we read", "kami membaca", "kami membaca", "nous lisons", "leemos"),
              emoji: "📖"
            },
            {
              id: "indonesia-g4u4l1v10",
              arabic: "نَكْتُبُ",
              transliteration: "naktubu",
              translation: t("نَكْتُبُ", "we write", "kami menulis", "kami menulis", "nous écrivons", "escribimos"),
              emoji: "✍️"
            }
          ],
          dialogue: [
            {
              speaker: "الْمُعَلِّمَةُ",
              arabic: "مَاذَا تَرَى فِي الْفَصْلِ؟",
              translation: t("مَاذَا تَرَى فِي الْفَصْلِ؟", "What do you see in the classroom?", "Apa yang kamu lihat di kelas?", "Apa yang kamu lihat di kelas?", "Que vois-tu dans la classe ?", "¿Qué ves en el aula?")
            },
            {
              speaker: "تِلْمِيذٌ",
              arabic: "أَرَى سَبُّورَةً وَكِتَابًا وَقَلَمًا.",
              translation: t("أَرَى سَبُّورَةً وَكِتَابًا وَقَلَمًا.", "I see a board, a book, and a pen.", "Saya melihat papan tulis, buku, dan pen.", "Saya melihat papan tulis, buku, dan pulpen.", "Je vois un tableau, un livre et un stylo.", "Veo una pizarra, un libro y un bolígrafo.")
            },
            {
              speaker: "الْمُعَلِّمَةُ",
              arabic: "أَحْسَنْتَ!",
              translation: t("أَحْسَنْتَ!", "Well done!", "Bagus sekali!", "Bagus sekali!", "Très bien !", "¡Muy bien!")
            },
            {
              speaker: "تِلْمِيذٌ",
              arabic: "نَحْنُ نَقْرَأُ وَنَكْتُبُ فِي الْفَصْلِ.",
              translation: t("نَحْنُ نَقْرَأُ وَنَكْتُبُ فِي الْفَصْلِ.", "We read and write in class.", "Kami membaca dan menulis di kelas.", "Kami membaca dan menulis di kelas.", "Nous lisons et écrivons en classe.", "Leemos y escribimos en clase.")
            },
            {
              speaker: "الْمُعَلِّمَةُ",
              arabic: "رَائِعٌ!",
              translation: t("رَائِعٌ!", "Great!", "Hebat!", "Hebat!", "Super !", "¡Genial!")
            }
          ],
          exercises: [
            {
              id: "indonesia-g4u4l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("اِسْتَمِعْ وَاخْتَرِ الْأَدَاةَ الصَّحِيحَةَ", "Listen and choose the correct tool", "Dengar dan pilih alat yang betul", "Dengarkan dan pilih alat yang benar", "Écoute et choisis l'outil correct", "Escucha y elige el útil correcto"),
              arabicText: "قَلَمٌ",
              options: [
                "قَلَمٌ",
                "بَيْتٌ",
                "أُمٌّ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f58a-fe0f/512.webp"
            },
            {
              id: "indonesia-g4u4l1e2",
              type: "mcq",
              skill: "reading",
              prompt: t("بِمَاذَا نَكْتُبُ؟", "What do we write with?", "Dengan apa kita menulis?", "Dengan apa kita menulis?", "Avec quoi écrivons-nous ?", "¿Con qué escribimos?"),
              options: [
                "قَلَمٌ",
                "كِتَابٌ",
                "دَفْتَرٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3eb/512.webp"
            },
            {
              id: "indonesia-g4u4l1e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("صِفْ مَا فِي فَصْلِكَ", "Describe what is in your classroom", "Terangkan apa yang ada di kelas kamu", "Describe lo que hay en tu aula", "Décris ce qu'il y a dans ta classe", "Describe lo que hay en tu aula"),
              arabicText: "فِي فَصْلِي ...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3eb/512.webp"
            },
            {
              id: "indonesia-g4u4l1e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ ثَلَاثَةَ أَدَوَاتٍ مَدْرَسِيَّةٍ", "Write three school tools", "Tulis tiga alat sekolah", "Tulis tiga alat sekolah", "Écris trois outils scolaires", "Escribe tres útiles escolares"),
              answer: "قَلَمٌ، كِتَابٌ، دَفْتَرٌ",
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Classroom.jpg"
            },
            {
              id: "indonesia-g4u4l1e5",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالْمَعْنَى", "Match the word with the meaning", "Padankan perkataan dengan makna", "Cocokkan kata dengan makna", "Relie le mot au sens", "Relaciona la palabra con el significado"),
              pairs: [
                {
                  a: "مِمْحَاةٌ",
                  b: "eraser"
                },
                {
                  a: "مِقْلَمَةٌ",
                  b: "pencil case"
                },
                {
                  a: "مَكْتَبٌ",
                  b: "desk"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3eb/512.webp"
            },
            {
              id: "indonesia-g4u4l1e6",
              type: "fill_in_blank",
              skill: "writing",
              prompt: t("اِكْمِلِ: نَحْنُ .... وَ.... فِي الْفَصْلِ", "Complete: We ... and ... in class", "Lengkapkan: Kami ... dan ... di kelas", "Lengkapi: Kami ... dan ... di kelas", "Complète : Nous ... et ... en classe", "Completa: Nosotros ... y ... en clase"),
              arabicText: "نَقْرَأُ وَنَكْتُبُ",
              answer: "نَقْرَأُ وَنَكْتُبُ",
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/School%20supplies.jpg"
            },
            {
              id: "indonesia-g4u4l1e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "مَاذَا تَرَى فِي الْفَصْلِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3eb/512.webp"
            },
            {
              id: "indonesia-g4u4l1mcqindonesia-g4u4l1v5",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"كِتَابٌ\"؟", "What does \"book\" mean?", "Apakah maksud \"buku\"?", "Apa arti \"buku\"?", "Que signifie \"livre\" ?", "¿Qué significa \"libro\"?"),
              arabicText: "كِتَابٌ",
              options: [
                "book",
                "then",
                "mother",
                "address"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4d8/512.webp"
            },
            {
              id: "indonesia-g4u4l1listenindonesia-g4u4l1v5",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "كِتَابٌ",
              options: [
                "كِتَابٌ",
                "مِقْلَمَةٌ",
                "شَارِعٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4d8/512.webp"
            },
            {
              id: "indonesia-g4u4l1writeindonesia-g4u4l1v9",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"نَقْرَأُ\"", "Type the Arabic word for: \"we read\"", "Taip perkataan Arab untuk: \"kami membaca\"", "Ketik kata Arab untuk: \"kami membaca\"", "Tape le mot arabe pour : \"nous lisons\"", "Escribe la palabra árabe para: \"leemos\""),
              arabicText: "نَقْرَأُ",
              answer: "نَقْرَأُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4d6/512.webp"
            },
            {
              id: "indonesia-g4u4l1mcqindonesia-g4u4l1v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"فَصْلٌ\"؟", "What does \"classroom\" mean?", "Apakah maksud \"kelas\"?", "Apa arti \"kelas\"?", "Que signifie \"classe\" ?", "¿Qué significa \"aula\"?"),
              arabicText: "فَصْلٌ",
              options: [
                "then",
                "driver",
                "classroom",
                "doctor"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3eb/512.webp"
            },
            {
              id: "indonesia-g4u4l1spellindonesia-g4u4l1v6",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "دَفْتَرٌ",
              answer: "دَفْتَرٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4d2/512.webp"
            }
          ]
        },
        {
          id: "indonesia-g4u4review",
          unitId: "indonesia-g4u4",
          gradeId: "indonesia-g4",
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
              id: "indonesia-g4u4l1v1",
              arabic: "فَصْلٌ",
              transliteration: "faṣl",
              translation: t("فَصْلٌ", "classroom", "kelas", "kelas", "classe", "aula"),
              emoji: "🏫"
            },
            {
              id: "indonesia-g4u4l1v2",
              arabic: "سَبُّورَةٌ",
              transliteration: "sabūra",
              translation: t("سَبُّورَةٌ", "board", "papan tulis", "papan tulis", "tableau", "pizarra"),
              emoji: "🧑‍🏫"
            },
            {
              id: "indonesia-g4u4l1v3",
              arabic: "مِمْحَاةٌ",
              transliteration: "mimḥāh",
              translation: t("مِمْحَاةٌ", "eraser", "pemadam", "penghapus", "gomme", "borrador"),
              emoji: "🧽"
            },
            {
              id: "indonesia-g4u4l1v4",
              arabic: "قَلَمٌ",
              transliteration: "qalam",
              translation: t("قَلَمٌ", "pen", "pen", "pulpen", "stylo", "bolígrafo"),
              emoji: "🖊️"
            },
            {
              id: "indonesia-g4u4l1v5",
              arabic: "كِتَابٌ",
              transliteration: "kitāb",
              translation: t("كِتَابٌ", "book", "buku", "buku", "livre", "libro"),
              emoji: "📘"
            },
            {
              id: "indonesia-g4u4l1v6",
              arabic: "دَفْتَرٌ",
              transliteration: "daftar",
              translation: t("دَفْتَرٌ", "exercise book", "buku latihan", "buku latihan", "cahier", "cuaderno"),
              emoji: "📒"
            },
            {
              id: "indonesia-g4u4l1v7",
              arabic: "مِقْلَمَةٌ",
              transliteration: "miqlama",
              translation: t("مِقْلَمَةٌ", "pencil case", "bekas pensel", "tempat pensil", "trousse", "estuche"),
              emoji: "🧰"
            },
            {
              id: "indonesia-g4u4l1v8",
              arabic: "مَكْتَبٌ",
              transliteration: "maktab",
              translation: t("مَكْتَبٌ", "desk", "meja", "meja", "bureau", "escritorio"),
              emoji: "🪑"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "indonesia-g4u4reviewmcqindonesia-g4u4l1v2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"سَبُّورَةٌ\"؟", "What does \"board\" mean?", "Apakah maksud \"papan tulis\"?", "Apa arti \"papan tulis\"?", "Que signifie \"tableau\" ?", "¿Qué significa \"pizarra\"?"),
              arabicText: "سَبُّورَةٌ",
              options: [
                "board",
                "book",
                "eight",
                "village"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9d1-200d-1f3eb/512.webp"
            },
            {
              id: "indonesia-g4u4reviewspeakindonesia-g4u4l1v3",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "مِمْحَاةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9fd/512.webp"
            },
            {
              id: "indonesia-g4u4reviewwriteindonesia-g4u4l1v5",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"كِتَابٌ\"", "Type the Arabic word for: \"book\"", "Taip perkataan Arab untuk: \"buku\"", "Ketik kata Arab untuk: \"buku\"", "Tape le mot arabe pour : \"livre\"", "Escribe la palabra árabe para: \"libro\""),
              arabicText: "كِتَابٌ",
              answer: "كِتَابٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4d8/512.webp"
            },
            {
              id: "indonesia-g4u4reviewspellindonesia-g4u4l1v7",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "مِقْلَمَةٌ",
              answer: "مِقْلَمَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9f0/512.webp"
            },
            {
              id: "indonesia-g4u4reviewwriteindonesia-g4u4l1v6",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"دَفْتَرٌ\"", "Type the Arabic word for: \"exercise book\"", "Taip perkataan Arab untuk: \"buku latihan\"", "Ketik kata Arab untuk: \"buku latihan\"", "Tape le mot arabe pour : \"cahier\"", "Escribe la palabra árabe para: \"cuaderno\""),
              arabicText: "دَفْتَرٌ",
              answer: "دَفْتَرٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4d2/512.webp"
            },
            {
              id: "indonesia-g4u4reviewlistenindonesia-g4u4l1v5",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "كِتَابٌ",
              options: [
                "أُخْتٌ",
                "كِتَابٌ",
                "مِمْحَاةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4d8/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "indonesia-g4u5",
      gradeId: "indonesia-g4",
      order: 5,
      title: t("الْأَرْقَامُ", "Numbers", "Angka", "Angka", "Les nombres", "Los números"),
      theme: "numbers",
      lessons: [
        {
          id: "indonesia-g4u5l1",
          unitId: "indonesia-g4u5",
          gradeId: "indonesia-g4",
          order: 1,
          title: t("الأَرْقَامُ مِنْ وَاحِدٍ إِلَى عَشَرَةٍ", "Numbers from One to Ten", "Angka dari Satu hingga Sepuluh", "Angka dari Satu sampai Sepuluh", "Les nombres de un à dix", "Los números del uno al diez"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("نَتَعَلَّمُ الْأَرْقَامَ وَنَسْتَعْمِلُهَا فِي الْعُنْوَانِ وَالْعُمْرِ.", "We learn numbers and use them in address and age.", "Kami belajar angka dan menggunakannya dalam alamat dan umur.", "Kami belajar angka dan menggunakannya dalam alamat dan umur.", "Nous apprenons les nombres et les utilisons pour l'adresse et l'âge.", "Aprendemos los números y los usamos en la dirección y la edad."),
          vocabulary: [
            {
              id: "indonesia-g4u5l1v1",
              arabic: "وَاحِدٌ",
              transliteration: "wāḥid",
              translation: t("وَاحِدٌ", "one", "satu", "satu", "un", "uno"),
              emoji: "1️⃣"
            },
            {
              id: "indonesia-g4u5l1v2",
              arabic: "اِثْنَانِ",
              transliteration: "ithnān",
              translation: t("اِثْنَانِ", "two", "dua", "dua", "deux", "dos"),
              emoji: "2️⃣"
            },
            {
              id: "indonesia-g4u5l1v3",
              arabic: "ثَلَاثَةٌ",
              transliteration: "thalātha",
              translation: t("ثَلَاثَةٌ", "three", "tiga", "tiga", "trois", "tres"),
              emoji: "3️⃣"
            },
            {
              id: "indonesia-g4u5l1v4",
              arabic: "أَرْبَعَةٌ",
              transliteration: "arbaʿa",
              translation: t("أَرْبَعَةٌ", "four", "empat", "empat", "quatre", "cuatro"),
              emoji: "4️⃣"
            },
            {
              id: "indonesia-g4u5l1v5",
              arabic: "خَمْسَةٌ",
              transliteration: "khamsa",
              translation: t("خَمْسَةٌ", "five", "lima", "lima", "cinq", "cinco"),
              emoji: "5️⃣"
            },
            {
              id: "indonesia-g4u5l1v6",
              arabic: "سِتَّةٌ",
              transliteration: "sitta",
              translation: t("سِتَّةٌ", "six", "enam", "enam", "six", "seis"),
              emoji: "6️⃣"
            },
            {
              id: "indonesia-g4u5l1v7",
              arabic: "سَبْعَةٌ",
              transliteration: "sabʿa",
              translation: t("سَبْعَةٌ", "seven", "tujuh", "tujuh", "sept", "siete"),
              emoji: "7️⃣"
            },
            {
              id: "indonesia-g4u5l1v8",
              arabic: "ثَمَانِيَةٌ",
              transliteration: "thamāniya",
              translation: t("ثَمَانِيَةٌ", "eight", "lapan", "delapan", "huit", "ocho"),
              emoji: "8️⃣"
            },
            {
              id: "indonesia-g4u5l1v9",
              arabic: "تِسْعَةٌ",
              transliteration: "tisʿa",
              translation: t("تِسْعَةٌ", "nine", "sembilan", "sembilan", "neuf", "nueve"),
              emoji: "9️⃣"
            },
            {
              id: "indonesia-g4u5l1v10",
              arabic: "عَشَرَةٌ",
              transliteration: "ʿashara",
              translation: t("عَشَرَةٌ", "ten", "sepuluh", "sepuluh", "dix", "diez"),
              emoji: "🔟"
            }
          ],
          dialogue: [
            {
              speaker: "سُلَيْمَانُ",
              arabic: "كَمْ عُمْرُكَ؟",
              translation: t("كَمْ عُمْرُكَ؟", "How old are you?", "Berapakah umur kamu?", "Berapa umurmu?", "Quel âge as-tu ?", "¿Cuántos años tienes?")
            },
            {
              speaker: "أَحْمَدُ",
              arabic: "عُمْرِي تِسْعُ سِنِينَ.",
              translation: t("عُمْرِي تِسْعُ سِنِينَ.", "I am nine years old.", "Umur saya sembilan tahun.", "Umurku sembilan tahun.", "J'ai neuf ans.", "Tengo nueve años.")
            },
            {
              speaker: "سُلَيْمَانُ",
              arabic: "كَمْ بَيْتًا فِي شَارِعِكَ؟",
              translation: t("كَمْ بَيْتًا فِي شَارِعِكَ؟", "How many houses are in your street?", "Berapa rumah di jalan kamu?", "Berapa rumah di jalanmu?", "Combien de maisons y a-t-il dans ta rue ?", "¿Cuántas casas hay en tu calle?")
            },
            {
              speaker: "أَحْمَدُ",
              arabic: "فِي شَارِعِي خَمْسَةُ بُيُوتٍ.",
              translation: t("فِي شَارِعِي خَمْسَةُ بُيُوتٍ.", "There are five houses in my street.", "Ada lima rumah di jalan saya.", "Ada lima rumah di jalanku.", "Il y a cinq maisons dans ma rue.", "Hay cinco casas en mi calle.")
            }
          ],
          exercises: [
            {
              id: "indonesia-g4u5l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("اِسْتَمِعْ وَاخْتَرِ الْعَدَدَ الصَّحِيحَ", "Listen and choose the correct number", "Dengar dan pilih bilangan yang betul", "Dengarkan dan pilih angka yang benar", "Écoute et choisis le bon nombre", "Escucha y elige el número correcto"),
              arabicText: "خَمْسَةٌ",
              options: [
                "ثَلَاثَةٌ",
                "خَمْسَةٌ",
                "سَبْعَةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/35-fe0f-20e3/512.webp"
            },
            {
              id: "indonesia-g4u5l1e2",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا الْعَدَدُ بَعْدَ أَرْبَعَةٍ؟", "What number comes after four?", "Apakah bilangan selepas empat?", "Angka berapa setelah empat?", "Quel nombre vient après quatre ?", "¿Qué número viene después de cuatro?"),
              options: [
                "خَمْسَةٌ",
                "ثَلَاثَةٌ",
                "سِتَّةٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "indonesia-g4u5l1e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("عُدَّ مِنْ وَاحِدٍ إِلَى عَشَرَةٍ", "Count from one to ten", "Kira dari satu hingga sepuluh", "Cuenta del uno al diez", "Compte de un à dix", "Cuenta del uno al diez"),
              arabicText: "وَاحِدٌ، اِثْنَانِ، ...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "indonesia-g4u5l1e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبِ الْأَرْقَامَ الثَّلَاثَةَ الْأُولَى", "Write the first three numbers", "Tulis tiga angka pertama", "Tulis tiga angka pertama", "Écris les trois premiers nombres", "Escribe los tres primeros números"),
              answer: "وَاحِدٌ، اِثْنَانِ، ثَلَاثَةٌ",
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Counting%20blocks.jpg"
            },
            {
              id: "indonesia-g4u5l1e5",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْعَدَدَ بِالْكَلِمَةِ", "Match the number with the word", "Padankan angka dengan perkataan", "Cocokkan angka dengan kata", "Relie le nombre au mot", "Relaciona el número con la palabra"),
              pairs: [
                {
                  a: "٣",
                  b: "three"
                },
                {
                  a: "٧",
                  b: "seven"
                },
                {
                  a: "١٠",
                  b: "ten"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "indonesia-g4u5l1e6",
              type: "fill_in_blank",
              skill: "writing",
              prompt: t("اِكْمِلِ: عُمْرِي .... سِنِينَ", "Complete: I am ... years old", "Lengkapkan: Umur saya ... tahun", "Lengkapi: Umurku ... tahun", "Complète : J'ai ... ans", "Completa: Tengo ... años"),
              arabicText: "تِسْعُ",
              answer: "تِسْعُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "indonesia-g4u5l1e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "كَمْ عُمْرُكَ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "indonesia-g4u5l1arrange2",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "عُمْرِي تِسْعُ سِنِينَ.",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "indonesia-g4u5l1writeindonesia-g4u5l1v3",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"ثَلَاثَةٌ\"", "Type the Arabic word for: \"three\"", "Taip perkataan Arab untuk: \"tiga\"", "Ketik kata Arab untuk: \"tiga\"", "Tape le mot arabe pour : \"trois\"", "Escribe la palabra árabe para: \"tres\""),
              arabicText: "ثَلَاثَةٌ",
              answer: "ثَلَاثَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/33-fe0f-20e3/512.webp"
            },
            {
              id: "indonesia-g4u5l1listenindonesia-g4u5l1v1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "وَاحِدٌ",
              options: [
                "فَلَّاحٌ",
                "وَاحِدٌ",
                "قَرْيَةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "indonesia-g4u5l1mcqindonesia-g4u5l1v10",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"عَشَرَةٌ\"؟", "What does \"ten\" mean?", "Apakah maksud \"sepuluh\"?", "Apa arti \"sepuluh\"?", "Que signifie \"dix\" ?", "¿Qué significa \"diez\"?"),
              arabicText: "عَشَرَةٌ",
              options: [
                "ten",
                "three",
                "loves",
                "classroom"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f51f/512.webp"
            },
            {
              id: "indonesia-g4u5l1listenindonesia-g4u5l1v2",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "اِثْنَانِ",
              options: [
                "مِهْنَةٌ",
                "اِثْنَانِ",
                "أُخْتٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/32-fe0f-20e3/512.webp"
            }
          ]
        },
        {
          id: "indonesia-g4u5review",
          unitId: "indonesia-g4u5",
          gradeId: "indonesia-g4",
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
              id: "indonesia-g4u5l1v1",
              arabic: "وَاحِدٌ",
              transliteration: "wāḥid",
              translation: t("وَاحِدٌ", "one", "satu", "satu", "un", "uno"),
              emoji: "1️⃣"
            },
            {
              id: "indonesia-g4u5l1v2",
              arabic: "اِثْنَانِ",
              transliteration: "ithnān",
              translation: t("اِثْنَانِ", "two", "dua", "dua", "deux", "dos"),
              emoji: "2️⃣"
            },
            {
              id: "indonesia-g4u5l1v3",
              arabic: "ثَلَاثَةٌ",
              transliteration: "thalātha",
              translation: t("ثَلَاثَةٌ", "three", "tiga", "tiga", "trois", "tres"),
              emoji: "3️⃣"
            },
            {
              id: "indonesia-g4u5l1v4",
              arabic: "أَرْبَعَةٌ",
              transliteration: "arbaʿa",
              translation: t("أَرْبَعَةٌ", "four", "empat", "empat", "quatre", "cuatro"),
              emoji: "4️⃣"
            },
            {
              id: "indonesia-g4u5l1v5",
              arabic: "خَمْسَةٌ",
              transliteration: "khamsa",
              translation: t("خَمْسَةٌ", "five", "lima", "lima", "cinq", "cinco"),
              emoji: "5️⃣"
            },
            {
              id: "indonesia-g4u5l1v6",
              arabic: "سِتَّةٌ",
              transliteration: "sitta",
              translation: t("سِتَّةٌ", "six", "enam", "enam", "six", "seis"),
              emoji: "6️⃣"
            },
            {
              id: "indonesia-g4u5l1v7",
              arabic: "سَبْعَةٌ",
              transliteration: "sabʿa",
              translation: t("سَبْعَةٌ", "seven", "tujuh", "tujuh", "sept", "siete"),
              emoji: "7️⃣"
            },
            {
              id: "indonesia-g4u5l1v8",
              arabic: "ثَمَانِيَةٌ",
              transliteration: "thamāniya",
              translation: t("ثَمَانِيَةٌ", "eight", "lapan", "delapan", "huit", "ocho"),
              emoji: "8️⃣"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "indonesia-g4u5reviewlistenindonesia-g4u5l1v4",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "أَرْبَعَةٌ",
              options: [
                "أَشْرَبُ",
                "أَرْبَعَةٌ",
                "مَكْتَبٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/34-fe0f-20e3/512.webp"
            },
            {
              id: "indonesia-g4u5reviewwriteindonesia-g4u5l1v5",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"خَمْسَةٌ\"", "Type the Arabic word for: \"five\"", "Taip perkataan Arab untuk: \"lima\"", "Ketik kata Arab untuk: \"lima\"", "Tape le mot arabe pour : \"cinq\"", "Escribe la palabra árabe para: \"cinco\""),
              arabicText: "خَمْسَةٌ",
              answer: "خَمْسَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/35-fe0f-20e3/512.webp"
            },
            {
              id: "indonesia-g4u5reviewspeakindonesia-g4u5l1v6",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "سِتَّةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/36-fe0f-20e3/512.webp"
            },
            {
              id: "indonesia-g4u5reviewwriteindonesia-g4u5l1v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"وَاحِدٌ\"", "Type the Arabic word for: \"one\"", "Taip perkataan Arab untuk: \"satu\"", "Ketik kata Arab untuk: \"satu\"", "Tape le mot arabe pour : \"un\"", "Escribe la palabra árabe para: \"uno\""),
              arabicText: "وَاحِدٌ",
              answer: "وَاحِدٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "indonesia-g4u5reviewlistenindonesia-g4u5l1v6",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "سِتَّةٌ",
              options: [
                "سِتَّةٌ",
                "طَبِيبٌ",
                "أُسْرَةٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/36-fe0f-20e3/512.webp"
            },
            {
              id: "indonesia-g4u5reviewmcqindonesia-g4u5l1v7",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"سَبْعَةٌ\"؟", "What does \"seven\" mean?", "Apakah maksud \"tujuh\"?", "Apa arti \"tujuh\"?", "Que signifie \"sept\" ?", "¿Qué significa \"siete\"?"),
              arabicText: "سَبْعَةٌ",
              options: [
                "eight",
                "two",
                "seven",
                "then"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/37-fe0f-20e3/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "indonesia-g4u6",
      gradeId: "indonesia-g4",
      order: 6,
      title: t("الْحَيَاةُ الْيَوْمِيَّةُ", "Daily Life", "Kehidupan Seharian", "Kehidupan Sehari-hari", "La vie quotidienne", "La vida diaria"),
      theme: "daily-life",
      lessons: [
        {
          id: "indonesia-g4u6l1",
          unitId: "indonesia-g4u6",
          gradeId: "indonesia-g4",
          order: 1,
          title: t("يَوْمِي", "My Day", "Hariku", "Hari-Hariku", "Ma journée", "Mi día"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("نَتَحَدَّثُ عَنْ أَفْعَالِنَا فِي الصَّبَاحِ وَبَعْدَ الظُّهْرِ وَالْمَسَاءِ.", "We talk about our actions in the morning, afternoon, and evening.", "Kami berbicara tentang aktiviti kami pada pagi, tengah hari, dan malam.", "Kami membicarakan kegiatan kami di pagi, siang, dan malam.", "Nous parlons de nos actions le matin, l'après-midi et le soir.", "Hablamos de nuestras acciones por la mañana, la tarde y la noche."),
          vocabulary: [
            {
              id: "indonesia-g4u6l1v1",
              arabic: "أَصْحُو",
              transliteration: "aṣḥū",
              translation: t("أَصْحُو", "I wake up", "saya bangun", "saya bangun", "je me réveille", "me despierto"),
              emoji: "🌅"
            },
            {
              id: "indonesia-g4u6l1v2",
              arabic: "أَتَوَضَّأُ",
              transliteration: "atawaḍḍaʾu",
              translation: t("أَتَوَضَّأُ", "I make wudu", "saya berwuduk", "saya berwudu", "je fais les ablutions", "hago la ablución"),
              emoji: "💧"
            },
            {
              id: "indonesia-g4u6l1v3",
              arabic: "أَذْهَبُ",
              transliteration: "adhhabu",
              translation: t("أَذْهَبُ", "I go", "saya pergi", "saya pergi", "je vais", "voy"),
              emoji: "🚶"
            },
            {
              id: "indonesia-g4u6l1v4",
              arabic: "أَدْرُسُ",
              transliteration: "adrusu",
              translation: t("أَدْرُسُ", "I study", "saya belajar", "saya belajar", "j'étudie", "estudio"),
              emoji: "📘"
            },
            {
              id: "indonesia-g4u6l1v5",
              arabic: "أَكُلُ",
              transliteration: "ākulu",
              translation: t("أَكُلُ", "I eat", "saya makan", "saya makan", "je mange", "como"),
              emoji: "🍽️"
            },
            {
              id: "indonesia-g4u6l1v6",
              arabic: "أَشْرَبُ",
              transliteration: "ashrabu",
              translation: t("أَشْرَبُ", "I drink", "saya minum", "saya minum", "je bois", "bebo"),
              emoji: "🥤"
            },
            {
              id: "indonesia-g4u6l1v7",
              arabic: "أَلْعَبُ",
              transliteration: "alʿabu",
              translation: t("أَلْعَبُ", "I play", "saya bermain", "saya bermain", "je joue", "juego"),
              emoji: "⚽"
            },
            {
              id: "indonesia-g4u6l1v8",
              arabic: "أَنَامُ",
              transliteration: "anāmu",
              translation: t("أَنَامُ", "I sleep", "saya tidur", "saya tidur", "je dors", "duermo"),
              emoji: "🌙"
            },
            {
              id: "indonesia-g4u6l1v9",
              arabic: "ثُمَّ",
              transliteration: "thumma",
              translation: t("ثُمَّ", "then", "kemudian", "lalu", "puis", "luego"),
              emoji: "⏭️"
            },
            {
              id: "indonesia-g4u6l1v10",
              arabic: "بَعْدَ ذٰلِكَ",
              transliteration: "baʿda dhālika",
              translation: t("بَعْدَ ذٰلِكَ", "after that", "selepas itu", "setelah itu", "après cela", "después de eso"),
              emoji: "➡️"
            }
          ],
          dialogue: [
            {
              speaker: "حَسَنُ",
              arabic: "مَاذَا تَفْعَلُ بَعْدَ الْمَدْرَسَةِ؟",
              translation: t("مَاذَا تَفْعَلُ بَعْدَ الْمَدْرَسَةِ؟", "What do you do after school?", "Apa yang kamu buat selepas sekolah?", "Apa yang kamu lakukan setelah sekolah?", "Que fais-tu après l'école ?", "¿Qué haces después de la escuela?")
            },
            {
              speaker: "إِبْرَاهِيمُ",
              arabic: "أَذْهَبُ إِلَى الْبَيْتِ ثُمَّ أَدْرُسُ.",
              translation: t("أَذْهَبُ إِلَى الْبَيْتِ ثُمَّ أَدْرُسُ.", "I go home, then I study.", "Saya pergi ke rumah kemudian belajar.", "Saya pergi ke rumah lalu belajar.", "Je vais à la maison puis j'étudie.", "Voy a casa y luego estudio.")
            },
            {
              speaker: "حَسَنُ",
              arabic: "مَتَى تَلْعَبُ؟",
              translation: t("مَتَى تَلْعَبُ؟", "When do you play?", "Bilakah kamu bermain?", "Kapan kamu bermain?", "Quand joues-tu ?", "¿Cuándo juegas?")
            },
            {
              speaker: "إِبْرَاهِيمُ",
              arabic: "أَلْعَبُ بَعْدَ الْعَصْرِ.",
              translation: t("أَلْعَبُ بَعْدَ الْعَصْرِ.", "I play after afternoon prayer time.", "Saya bermain selepas asar.", "Saya bermain setelah asar.", "Je joue après l'ʿasr.", "Juego después de la tarde.")
            }
          ],
          exercises: [
            {
              id: "indonesia-g4u6l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("اِسْتَمِعْ وَاخْتَرِ الْفِعْلَ الصَّحِيحَ", "Listen and choose the correct verb", "Dengar dan pilih kata kerja yang betul", "Dengarkan dan pilih kata kerja yang benar", "Écoute et choisis le verbe correct", "Escucha y elige el verbo correcto"),
              arabicText: "أَدْرُسُ",
              options: [
                "أَكُلُ",
                "أَدْرُسُ",
                "أَنَامُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4d8/512.webp"
            },
            {
              id: "indonesia-g4u6l1e2",
              type: "mcq",
              skill: "reading",
              prompt: t("مَتَى نَنَامُ؟", "When do we sleep?", "Bilakah kita tidur?", "Kapan kita tidur?", "Quand dormons-nous ?", "¿Cuándo dormimos?"),
              options: [
                "الْمَسَاءُ",
                "الصَّبَاحُ",
                "الظُّهْرُ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f305/512.webp"
            },
            {
              id: "indonesia-g4u6l1e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنْ رُوتِينِكَ الْيَوْمِيِّ", "Talk about your daily routine", "Bertutur tentang rutin harian kamu", "Habla de tu rutina diaria", "Parle de ta routine quotidienne", "Habla de tu rutina diaria"),
              arabicText: "أَصْحُو ثُمَّ أَدْرُسُ ...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f305/512.webp"
            },
            {
              id: "indonesia-g4u6l1e4",
              type: "writing",
              skill: "writing",
              prompt: t("اُكْتُبْ ثَلَاثَ أَفْعَالٍ يَوْمِيَّةٍ", "Write three daily actions", "Tulis tiga tindakan harian", "Tulis tiga kegiatan harian", "Écris trois actions quotidiennes", "Escribe tres acciones diarias"),
              answer: "أَصْحُو، أَدْرُسُ، أَنَامُ",
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Morning%20routine.jpg"
            },
            {
              id: "indonesia-g4u6l1e5",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ الْكَلِمَاتِ لِتُكَوِّنَ جُمْلَةً", "Arrange the words to make a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata-kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              pairs: [
                {
                  a: "أَصْحُو",
                  b: "I wake up"
                },
                {
                  a: "ثُمَّ",
                  b: "then"
                },
                {
                  a: "أَدْرُسُ",
                  b: "I study"
                }
              ],
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Waking%20up%20in%20the%20morning.jpg"
            },
            {
              id: "indonesia-g4u6l1e6",
              type: "fill_in_blank",
              skill: "writing",
              prompt: t("اِكْمِلِ: أَذْهَبُ إِلَى الْبَيْتِ .... أَدْرُسُ", "Complete: I go home ... I study", "Lengkapkan: Saya pergi ke rumah ... saya belajar", "Lengkapi: Saya pergi ke rumah ... saya belajar", "Complète : Je vais à la maison ... j'étudie", "Completa: Voy a casa ... estudio"),
              arabicText: "ثُمَّ",
              answer: "ثُمَّ",
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Study%20desk.jpg"
            },
            {
              id: "indonesia-g4u6l1speakindonesia-g4u6l1v1",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "أَصْحُو",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f305/512.webp"
            },
            {
              id: "indonesia-g4u6l1writeindonesia-g4u6l1v9",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"ثُمَّ\"", "Type the Arabic word for: \"then\"", "Taip perkataan Arab untuk: \"kemudian\"", "Ketik kata Arab untuk: \"lalu\"", "Tape le mot arabe pour : \"puis\"", "Escribe la palabra árabe para: \"luego\""),
              arabicText: "ثُمَّ",
              answer: "ثُمَّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/23ed-fe0f/512.webp"
            },
            {
              id: "indonesia-g4u6l1spellindonesia-g4u6l1v1",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "أَصْحُو",
              answer: "أَصْحُو",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f305/512.webp"
            },
            {
              id: "indonesia-g4u6l1speakindonesia-g4u6l1v4",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "أَدْرُسُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4d8/512.webp"
            },
            {
              id: "indonesia-g4u6l1writeindonesia-g4u6l1v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"أَصْحُو\"", "Type the Arabic word for: \"I wake up\"", "Taip perkataan Arab untuk: \"saya bangun\"", "Ketik kata Arab untuk: \"saya bangun\"", "Tape le mot arabe pour : \"je me réveille\"", "Escribe la palabra árabe para: \"me despierto\""),
              arabicText: "أَصْحُو",
              answer: "أَصْحُو",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f305/512.webp"
            },
            {
              id: "indonesia-g4u6l1mcqindonesia-g4u6l1v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"أَصْحُو\"؟", "What does \"I wake up\" mean?", "Apakah maksud \"saya bangun\"?", "Apa arti \"saya bangun\"?", "Que signifie \"je me réveille\" ?", "¿Qué significa \"me despierto\"?"),
              arabicText: "أَصْحُو",
              options: [
                "after that",
                "I wake up",
                "seven",
                "loves"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f305/512.webp"
            }
          ]
        },
        {
          id: "indonesia-g4u6review",
          unitId: "indonesia-g4u6",
          gradeId: "indonesia-g4",
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
              id: "indonesia-g4u6l1v1",
              arabic: "أَصْحُو",
              transliteration: "aṣḥū",
              translation: t("أَصْحُو", "I wake up", "saya bangun", "saya bangun", "je me réveille", "me despierto"),
              emoji: "🌅"
            },
            {
              id: "indonesia-g4u6l1v2",
              arabic: "أَتَوَضَّأُ",
              transliteration: "atawaḍḍaʾu",
              translation: t("أَتَوَضَّأُ", "I make wudu", "saya berwuduk", "saya berwudu", "je fais les ablutions", "hago la ablución"),
              emoji: "💧"
            },
            {
              id: "indonesia-g4u6l1v3",
              arabic: "أَذْهَبُ",
              transliteration: "adhhabu",
              translation: t("أَذْهَبُ", "I go", "saya pergi", "saya pergi", "je vais", "voy"),
              emoji: "🚶"
            },
            {
              id: "indonesia-g4u6l1v4",
              arabic: "أَدْرُسُ",
              transliteration: "adrusu",
              translation: t("أَدْرُسُ", "I study", "saya belajar", "saya belajar", "j'étudie", "estudio"),
              emoji: "📘"
            },
            {
              id: "indonesia-g4u6l1v5",
              arabic: "أَكُلُ",
              transliteration: "ākulu",
              translation: t("أَكُلُ", "I eat", "saya makan", "saya makan", "je mange", "como"),
              emoji: "🍽️"
            },
            {
              id: "indonesia-g4u6l1v6",
              arabic: "أَشْرَبُ",
              transliteration: "ashrabu",
              translation: t("أَشْرَبُ", "I drink", "saya minum", "saya minum", "je bois", "bebo"),
              emoji: "🥤"
            },
            {
              id: "indonesia-g4u6l1v7",
              arabic: "أَلْعَبُ",
              transliteration: "alʿabu",
              translation: t("أَلْعَبُ", "I play", "saya bermain", "saya bermain", "je joue", "juego"),
              emoji: "⚽"
            },
            {
              id: "indonesia-g4u6l1v8",
              arabic: "أَنَامُ",
              transliteration: "anāmu",
              translation: t("أَنَامُ", "I sleep", "saya tidur", "saya tidur", "je dors", "duermo"),
              emoji: "🌙"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "indonesia-g4u6reviewmcqindonesia-g4u6l1v2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"أَتَوَضَّأُ\"؟", "What does \"I make wudu\" mean?", "Apakah maksud \"saya berwuduk\"?", "Apa arti \"saya berwudu\"?", "Que signifie \"je fais les ablutions\" ?", "¿Qué significa \"hago la ablución\"?"),
              arabicText: "أَتَوَضَّأُ",
              options: [
                "one",
                "I wake up",
                "I study",
                "I make wudu"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a7/512.webp"
            },
            {
              id: "indonesia-g4u6reviewspeakindonesia-g4u6l1v2",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "أَتَوَضَّأُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a7/512.webp"
            },
            {
              id: "indonesia-g4u6reviewmcqindonesia-g4u6l1v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"أَصْحُو\"؟", "What does \"I wake up\" mean?", "Apakah maksud \"saya bangun\"?", "Apa arti \"saya bangun\"?", "Que signifie \"je me réveille\" ?", "¿Qué significa \"me despierto\"?"),
              arabicText: "أَصْحُو",
              options: [
                "female teacher",
                "we write",
                "I wake up",
                "there"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f305/512.webp"
            },
            {
              id: "indonesia-g4u6reviewspeakindonesia-g4u6l1v7",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "أَلْعَبُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "indonesia-g4u6reviewlistenindonesia-g4u6l1v5",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "أَكُلُ",
              options: [
                "هُنَاكَ",
                "قَرْيَةٌ",
                "أَكُلُ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f37d-fe0f/512.webp"
            },
            {
              id: "indonesia-g4u6reviewwriteindonesia-g4u6l1v6",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"أَشْرَبُ\"", "Type the Arabic word for: \"I drink\"", "Taip perkataan Arab untuk: \"saya minum\"", "Ketik kata Arab untuk: \"saya minum\"", "Tape le mot arabe pour : \"je bois\"", "Escribe la palabra árabe para: \"bebo\""),
              arabicText: "أَشْرَبُ",
              answer: "أَشْرَبُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f964/512.webp"
            }
          ]
        }
      ]
    }
  ]
};
