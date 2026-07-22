import { t, type GradeData } from "./types";

export const indonesiaGrade6: GradeData = {
  id: "indonesia-g6",
  number: 6,
  title: t("المستوى السادس", "Stage 6", "Tahun 6", "Kelas 6", "Année 6", "Año 6"),
  description: t("منهج اللغة العربية للصف السادس في المدرسة الإبتدائية الإسلامية الإندونيسية: الوقت، الروتين اليومي، المواد الدراسية، الهوايات، الطعام والشراب، والسفر", "Arabic curriculum for Indonesian Islamic elementary Grade 6: time, daily routine, school subjects, hobbies, food and drink, and travel", "Kurikulum bahasa Arab kelas 6 MI Indonesia: waktu, rutin harian, mata pelajaran, hobi, makanan dan minuman, serta perjalanan", "Kurikulum bahasa Arab kelas 6 MI Indonesia: waktu, rutinitas harian, mata pelajaran, hobi, makanan dan minuman, serta perjalanan", "Programme d'arabe pour la 6e année MI en Indonésie : l'heure, la routine quotidienne, les matières scolaires, les loisirs, la nourriture et les voyages", "Currículo de árabe para 6.º grado de MI en Indonesia: la hora, la rutina diaria, las asignaturas, las aficiones, la comida y los viajes"),
  color: "#0EA5E9",
  icon: "book-open",
  units: [
    {
      id: "indonesia-g6u1",
      gradeId: "indonesia-g6",
      order: 1,
      title: t("الْوَقْتُ", "Time", "Masa", "Waktu", "L'heure", "La hora"),
      theme: "time",
      lessons: [
        {
          id: "indonesia-g6u1l1",
          unitId: "indonesia-g6u1",
          gradeId: "indonesia-g6",
          order: 1,
          title: t("كَمِ السَّاعَةُ؟", "What Time Is It?", "Pukul Berapa?", "Jam Berapa?", "Quelle heure est-il ?", "¿Qué hora es?"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("نَتَعَلَّمُ كَيْفَ نَسْأَلُ عَنِ الْوَقْتِ وَنَقُولُهُ بِاللُّغَةِ الْعَرَبِيَّةِ.", "We learn how to ask and tell the time in Arabic.", "Kita belajar cara bertanya dan menyatakan waktu dalam bahasa Arab.", "Kita belajar cara menanyakan dan menyebut waktu dalam bahasa Arab.", "Nous apprenons à demander et dire l'heure en arabe.", "Aprendemos a preguntar y decir la hora en árabe."),
          vocabulary: [
            {
              id: "indonesia-g6u1l1v1",
              arabic: "سَاعَةٌ",
              transliteration: "sāʿa",
              translation: t("سَاعَةٌ", "hour / clock", "jam", "jam", "heure / horloge", "hora / reloj"),
              emoji: "🕒"
            },
            {
              id: "indonesia-g6u1l1v2",
              arabic: "وَقْتٌ",
              transliteration: "waqt",
              translation: t("وَقْتٌ", "time", "masa", "waktu", "temps", "tiempo"),
              emoji: "⏰"
            },
            {
              id: "indonesia-g6u1l1v3",
              arabic: "صَبَاحٌ",
              transliteration: "ṣabāḥ",
              translation: t("صَبَاحٌ", "morning", "pagi", "pagi", "matin", "mañana"),
              emoji: "🌅"
            },
            {
              id: "indonesia-g6u1l1v4",
              arabic: "مَسَاءٌ",
              transliteration: "masāʾ",
              translation: t("مَسَاءٌ", "evening", "petang", "sore", "soir", "tarde"),
              emoji: "🌆"
            },
            {
              id: "indonesia-g6u1l1v5",
              arabic: "لَيْلٌ",
              transliteration: "layl",
              translation: t("لَيْلٌ", "night", "malam", "malam", "nuit", "noche"),
              emoji: "🌙"
            },
            {
              id: "indonesia-g6u1l1v6",
              arabic: "نَهَارٌ",
              transliteration: "nahār",
              translation: t("نَهَارٌ", "daytime", "siang", "siang", "jour", "día"),
              emoji: "☀️"
            },
            {
              id: "indonesia-g6u1l1v7",
              arabic: "دَقِيقَةٌ",
              transliteration: "daqīqa",
              translation: t("دَقِيقَةٌ", "minute", "minit", "menit", "minute", "minuto"),
              emoji: "⏱️"
            },
            {
              id: "indonesia-g6u1l1v8",
              arabic: "نِصْفٌ",
              transliteration: "niṣf",
              translation: t("نِصْفٌ", "half", "setengah", "setengah", "demi", "media"),
              emoji: "🌓"
            },
            {
              id: "indonesia-g6u1l1v9",
              arabic: "رُبْعٌ",
              transliteration: "rubʿ",
              translation: t("رُبْعٌ", "quarter", "suku", "seperempat", "quart", "cuarto"),
              emoji: "⏲️"
            },
            {
              id: "indonesia-g6u1l1v10",
              arabic: "كَمِ السَّاعَةُ؟",
              transliteration: "kami s-sāʿa",
              translation: t("كَمِ السَّاعَةُ؟", "What time is it?", "Pukul berapa?", "Jam berapa?", "Quelle heure est-il ?", "¿Qué hora es?"),
              emoji: "❓"
            }
          ],
          dialogue: [
            {
              speaker: "أَحْمَدُ",
              arabic: "كَمِ السَّاعَةُ يَا سَلْمَى؟",
              translation: t("كَمِ السَّاعَةُ يَا سَلْمَى؟", "What time is it, Salma?", "Pukul berapa, Salma?", "Jam berapa, Salma?", "Quelle heure est-il, Salma ?", "¿Qué hora es, Salma?")
            },
            {
              speaker: "سَلْمَى",
              arabic: "السَّاعَةُ الرَّابِعَةُ وَالنِّصْفُ.",
              translation: t("السَّاعَةُ الرَّابِعَةُ وَالنِّصْفُ.", "It is half past four.", "Pukul empat setengah.", "Jam empat lewat setengah.", "Il est quatre heures et demie.", "Son las cuatro y media.")
            },
            {
              speaker: "أَحْمَدُ",
              arabic: "مَتَى تَذْهَبُ إِلَى الْمَدْرَسَةِ؟",
              translation: t("مَتَى تَذْهَبُ إِلَى الْمَدْرَسَةِ؟", "When do you go to school?", "Bilakah kamu pergi ke sekolah?", "Kapan kamu pergi ke sekolah?", "Quand vas-tu à l'école ?", "¿Cuándo vas a la escuela?")
            },
            {
              speaker: "سَلْمَى",
              arabic: "أَذْهَبُ فِي السَّاعَةِ السَّادِسَةِ صَبَاحًا.",
              translation: t("أَذْهَبُ فِي السَّاعَةِ السَّادِسَةِ صَبَاحًا.", "I go at six o'clock in the morning.", "Saya pergi pada pukul enam pagi.", "Saya pergi jam enam pagi.", "Je vais à six heures du matin.", "Voy a las seis de la mañana.")
            }
          ],
          exercises: [
            {
              id: "indonesia-g6u1l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("اِسْتَمِعْ وَاخْتَرِ الْوَقْتَ الصَّحِيحَ", "Listen and choose the correct time", "Dengar dan pilih waktu yang betul", "Dengarkan dan pilih waktu yang benar", "Écoute et choisis l'heure correcte", "Escucha y elige la hora correcta"),
              arabicText: "السَّاعَةُ الثَّالِثَةُ",
              options: [
                "السَّاعَةُ الثَّالِثَةُ",
                "السَّاعَةُ السَّادِسَةُ",
                "السَّاعَةُ التَّاسِعَةُ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f552/512.webp"
            },
            {
              id: "indonesia-g6u1l1e2",
              type: "mcq",
              skill: "reading",
              prompt: t("مَاذَا نَقُولُ لِنَسْأَلَ عَنِ الْوَقْتِ؟", "What do we say to ask about time?", "Apa yang kita ucapkan untuk bertanya waktu?", "Apa yang kita ucapkan untuk menanyakan waktu?", "Que dit-on pour demander l'heure ?", "¿Qué decimos para preguntar la hora?"),
              options: [
                "كَمِ السَّاعَةُ؟",
                "مَا اسْمُكَ؟",
                "أَيْنَ بَيْتُكَ؟"
              ],
              correctIndex: 0,
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Clock_face.jpg"
            },
            {
              id: "indonesia-g6u1l1e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ: أَذْهَبُ إِلَى الْمَدْرَسَةِ فِي السَّاعَةِ السَّادِسَةِ", "Say: I go to school at six o'clock", "Katakan: Saya pergi ke sekolah pada pukul enam", "Katakan: Saya pergi ke sekolah jam enam", "Dis : Je vais à l'école à six heures", "Di: Voy a la escuela a las seis"),
              arabicText: "أَذْهَبُ إِلَى الْمَدْرَسَةِ فِي السَّاعَةِ السَّادِسَةِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f552/512.webp"
            },
            {
              id: "indonesia-g6u1l1e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ الْأَوْقَاتَ: صَبَاحٌ، مَسَاءٌ، لَيْلٌ", "Write the times: morning, evening, night", "Tulis masa: pagi, petang, malam", "Tulis waktu: pagi, sore, malam", "Écris les moments : matin, soir, nuit", "Escribe los momentos: mañana, tarde, noche"),
              answer: "صَبَاحٌ، مَسَاءٌ، لَيْلٌ",
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Day_and_night.jpg"
            },
            {
              id: "indonesia-g6u1l1e5",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْوَقْتَ بِالصُّورَةِ", "Match the time to the picture", "Padankan masa dengan gambar", "Cocokkan waktu dengan gambar", "Relie le moment à l'image", "Relaciona el momento con la imagen"),
              pairs: [
                {
                  a: "صَبَاحٌ",
                  b: "🌅"
                },
                {
                  a: "مَسَاءٌ",
                  b: "🌆"
                },
                {
                  a: "لَيْلٌ",
                  b: "🌙"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f552/512.webp"
            },
            {
              id: "indonesia-g6u1l1e6",
              type: "fill_in_blank",
              skill: "writing",
              prompt: t("اِكْمِلِ: السَّاعَةُ الرَّابِعَةُ وَ....", "Complete: It is half past ...", "Lengkapkan: Pukul empat ...", "Lengkapi: Jam empat ...", "Complète : Il est quatre heures et ...", "Completa: Son las cuatro y ..."),
              arabicText: "النِّصْفُ",
              answer: "النِّصْفُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f552/512.webp"
            },
            {
              id: "indonesia-g6u1l1e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "كَمِ السَّاعَةُ يَا سَلْمَى",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f552/512.webp"
            },
            {
              id: "indonesia-g6u1l1mcqindonesia-g6u1l1v2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"وَقْتٌ\"؟", "What does \"time\" mean?", "Apakah maksud \"masa\"?", "Apa arti \"waktu\"?", "Que signifie \"temps\" ?", "¿Qué significa \"tiempo\"?"),
              arabicText: "وَقْتٌ",
              options: [
                "geography",
                "chicken",
                "sport",
                "time"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/23f0/512.webp"
            },
            {
              id: "indonesia-g6u1l1speakindonesia-g6u1l1v9",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "رُبْعٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/23f2-fe0f/512.webp"
            },
            {
              id: "indonesia-g6u1l1mcqindonesia-g6u1l1v3",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"صَبَاحٌ\"؟", "What does \"morning\" mean?", "Apakah maksud \"pagi\"?", "Apa arti \"pagi\"?", "Que signifie \"matin\" ?", "¿Qué significa \"mañana\"?"),
              arabicText: "صَبَاحٌ",
              options: [
                "takes a bath",
                "morning",
                "subject",
                "reads"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f305/512.webp"
            },
            {
              id: "indonesia-g6u1l1speakindonesia-g6u1l1v10",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "كَمِ السَّاعَةُ؟",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2753/512.webp"
            },
            {
              id: "indonesia-g6u1l1speakindonesia-g6u1l1v5",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "لَيْلٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f319/512.webp"
            }
          ]
        },
        {
          id: "indonesia-g6u1review",
          unitId: "indonesia-g6u1",
          gradeId: "indonesia-g6",
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
              id: "indonesia-g6u1l1v1",
              arabic: "سَاعَةٌ",
              transliteration: "sāʿa",
              translation: t("سَاعَةٌ", "hour / clock", "jam", "jam", "heure / horloge", "hora / reloj"),
              emoji: "🕒"
            },
            {
              id: "indonesia-g6u1l1v2",
              arabic: "وَقْتٌ",
              transliteration: "waqt",
              translation: t("وَقْتٌ", "time", "masa", "waktu", "temps", "tiempo"),
              emoji: "⏰"
            },
            {
              id: "indonesia-g6u1l1v3",
              arabic: "صَبَاحٌ",
              transliteration: "ṣabāḥ",
              translation: t("صَبَاحٌ", "morning", "pagi", "pagi", "matin", "mañana"),
              emoji: "🌅"
            },
            {
              id: "indonesia-g6u1l1v4",
              arabic: "مَسَاءٌ",
              transliteration: "masāʾ",
              translation: t("مَسَاءٌ", "evening", "petang", "sore", "soir", "tarde"),
              emoji: "🌆"
            },
            {
              id: "indonesia-g6u1l1v5",
              arabic: "لَيْلٌ",
              transliteration: "layl",
              translation: t("لَيْلٌ", "night", "malam", "malam", "nuit", "noche"),
              emoji: "🌙"
            },
            {
              id: "indonesia-g6u1l1v6",
              arabic: "نَهَارٌ",
              transliteration: "nahār",
              translation: t("نَهَارٌ", "daytime", "siang", "siang", "jour", "día"),
              emoji: "☀️"
            },
            {
              id: "indonesia-g6u1l1v7",
              arabic: "دَقِيقَةٌ",
              transliteration: "daqīqa",
              translation: t("دَقِيقَةٌ", "minute", "minit", "menit", "minute", "minuto"),
              emoji: "⏱️"
            },
            {
              id: "indonesia-g6u1l1v8",
              arabic: "نِصْفٌ",
              transliteration: "niṣf",
              translation: t("نِصْفٌ", "half", "setengah", "setengah", "demi", "media"),
              emoji: "🌓"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "indonesia-g6u1reviewlistenindonesia-g6u1l1v3",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "صَبَاحٌ",
              options: [
                "صَبَاحٌ",
                "دَجَاجٌ",
                "لُغَةٌ إِنْجِلِيزِيَّةٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f305/512.webp"
            },
            {
              id: "indonesia-g6u1reviewspeakindonesia-g6u1l1v1",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "سَاعَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f552/512.webp"
            },
            {
              id: "indonesia-g6u1reviewwriteindonesia-g6u1l1v4",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"مَسَاءٌ\"", "Type the Arabic word for: \"evening\"", "Taip perkataan Arab untuk: \"petang\"", "Ketik kata Arab untuk: \"sore\"", "Tape le mot arabe pour : \"soir\"", "Escribe la palabra árabe para: \"tarde\""),
              arabicText: "مَسَاءٌ",
              answer: "مَسَاءٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f306/512.webp"
            },
            {
              id: "indonesia-g6u1reviewwriteindonesia-g6u1l1v3",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"صَبَاحٌ\"", "Type the Arabic word for: \"morning\"", "Taip perkataan Arab untuk: \"pagi\"", "Ketik kata Arab untuk: \"pagi\"", "Tape le mot arabe pour : \"matin\"", "Escribe la palabra árabe para: \"mañana\""),
              arabicText: "صَبَاحٌ",
              answer: "صَبَاحٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f305/512.webp"
            },
            {
              id: "indonesia-g6u1reviewmcqindonesia-g6u1l1v8",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"نِصْفٌ\"؟", "What does \"half\" mean?", "Apakah maksud \"setengah\"?", "Apa arti \"setengah\"?", "Que signifie \"demi\" ?", "¿Qué significa \"media\"?"),
              arabicText: "نِصْفٌ",
              options: [
                "vegetables",
                "English language",
                "meat",
                "half"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f313/512.webp"
            },
            {
              id: "indonesia-g6u1reviewlistenindonesia-g6u1l1v5",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "لَيْلٌ",
              options: [
                "غِنَاءٌ",
                "لَيْلٌ",
                "طَعَامٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f319/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "indonesia-g6u2",
      gradeId: "indonesia-g6",
      order: 2,
      title: t("الْيَوْمُ الْعَادِيُّ", "Daily Routine", "Rutin Harian", "Rutinitas Harian", "La routine quotidienne", "La rutina diaria"),
      theme: "daily-routine",
      lessons: [
        {
          id: "indonesia-g6u2l1",
          unitId: "indonesia-g6u2",
          gradeId: "indonesia-g6",
          order: 1,
          title: t("يَوْمِي", "My Day", "Hari Saya", "Hariku", "Ma journée", "Mi día"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("نَتَعَرَّفُ عَلَى أَفْعَالِ الْيَوْمِ الْعَادِيِّ وَنَصِفُ يَوْمَنَا.", "We learn the actions of a daily routine and describe our day.", "Kita belajar perbuatan rutin harian dan menyifatkan hari kita.", "Kita belajar kata kerja rutinitas harian dan mendeskripsikan hari kita.", "Nous apprenons les actions de la routine quotidienne et décrivons notre journée.", "Aprendemos las acciones de la rutina diaria y describimos nuestro día."),
          vocabulary: [
            {
              id: "indonesia-g6u2l1v1",
              arabic: "يَسْتَيْقِظُ",
              transliteration: "yastayqīẓu",
              translation: t("يَسْتَيْقِظُ", "wakes up", "bangun", "bangun", "se réveille", "despierta"),
              emoji: "⏰"
            },
            {
              id: "indonesia-g6u2l1v2",
              arabic: "يَأْكُلُ",
              transliteration: "yaʾkulu",
              translation: t("يَأْكُلُ", "eats", "makan", "makan", "mange", "come"),
              emoji: "🍽️"
            },
            {
              id: "indonesia-g6u2l1v3",
              arabic: "يَذْهَبُ",
              transliteration: "yadhhabu",
              translation: t("يَذْهَبُ", "goes", "pergi", "pergi", "va", "va"),
              emoji: "🚶"
            },
            {
              id: "indonesia-g6u2l1v4",
              arabic: "يَدْرُسُ",
              transliteration: "yadrusu",
              translation: t("يَدْرُسُ", "studies", "belajar", "belajar", "étudie", "estudia"),
              emoji: "📖"
            },
            {
              id: "indonesia-g6u2l1v5",
              arabic: "يَلْعَبُ",
              transliteration: "yalʿabu",
              translation: t("يَلْعَبُ", "plays", "bermain", "bermain", "joue", "juega"),
              emoji: "⚽"
            },
            {
              id: "indonesia-g6u2l1v6",
              arabic: "يَنَامُ",
              transliteration: "yanāmu",
              translation: t("يَنَامُ", "sleeps", "tidur", "tidur", "dort", "duerme"),
              emoji: "😴"
            },
            {
              id: "indonesia-g6u2l1v7",
              arabic: "يَسْتَحِمُّ",
              transliteration: "yastaḥimmu",
              translation: t("يَسْتَحِمُّ", "takes a bath", "mandi", "mandi", "prend un bain", "se baña"),
              emoji: "🚿"
            },
            {
              id: "indonesia-g6u2l1v8",
              arabic: "يَكْتُبُ",
              transliteration: "yaktubu",
              translation: t("يَكْتُبُ", "writes", "menulis", "menulis", "écrit", "escribe"),
              emoji: "✍️"
            },
            {
              id: "indonesia-g6u2l1v9",
              arabic: "يَقْرَأُ",
              transliteration: "yaqraʾu",
              translation: t("يَقْرَأُ", "reads", "membaca", "membaca", "lit", "lee"),
              emoji: "📚"
            },
            {
              id: "indonesia-g6u2l1v10",
              arabic: "يُصَلِّي",
              transliteration: "yuṣallī",
              translation: t("يُصَلِّي", "prays", "sembahyang", "shalat", "prie", "reza"),
              emoji: "🕌"
            }
          ],
          dialogue: [
            {
              speaker: "خَلِيلٌ",
              arabic: "مَاذَا تَفْعَلُ صَبَاحًا؟",
              translation: t("مَاذَا تَفْعَلُ صَبَاحًا؟", "What do you do in the morning?", "Apa yang kamu lakukan pada pagi?", "Apa yang kamu lakukan di pagi hari?", "Que fais-tu le matin ?", "¿Qué haces por la mañana?")
            },
            {
              speaker: "فَاطِمَةُ",
              arabic: "أَسْتَيْقِظُ فِي السَّاعَةِ السَّادِسَةِ، ثُمَّ أَتَوَضَّأُ وَأُصَلِّي.",
              translation: t("أَسْتَيْقِظُ فِي السَّاعَةِ السَّادِسَةِ، ثُمَّ أَتَوَضَّأُ وَأُصَلِّي.", "I wake up at six o'clock, then I perform ablution and pray.", "Saya bangun pukul enam, kemudian berwudu dan sembahyang.", "Saya bangun jam enam, lalu berwudu dan shalat.", "Je me réveille à six heures, puis je fais mes ablutions et je prie.", "Me despierto a las seis, luego me abluco y rezo.")
            },
            {
              speaker: "خَلِيلٌ",
              arabic: "مَتَى تَذْهَبِينَ إِلَى الْمَدْرَسَةِ؟",
              translation: t("مَتَى تَذْهَبِينَ إِلَى الْمَدْرَسَةِ؟", "When do you go to school?", "Bilakah kamu pergi ke sekolah?", "Kapan kamu pergi ke sekolah?", "Quand vas-tu à l'école ?", "¿Cuándo vas a la escuela?")
            },
            {
              speaker: "فَاطِمَةُ",
              arabic: "أَذْهَبُ بَعْدَ الْفَطُورِ.",
              translation: t("أَذْهَبُ بَعْدَ الْفَطُورِ.", "I go after breakfast.", "Saya pergi selepas sarapan.", "Saya pergi setelah sarapan.", "Je vais après le petit déjeuner.", "Voy después del desayuno.")
            }
          ],
          exercises: [
            {
              id: "indonesia-g6u2l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("اِسْتَمِعْ وَاخْتَرِ الْفِعْلَ الصَّحِيحَ", "Listen and choose the correct verb", "Dengar dan pilih kata kerja yang betul", "Dengarkan dan pilih kata kerja yang benar", "Écoute et choisis le verbe correct", "Escucha y elige el verbo correcto"),
              arabicText: "يَدْرُسُ",
              options: [
                "يَدْرُسُ",
                "يَأْكُلُ",
                "يَنَامُ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4d6/512.webp"
            },
            {
              id: "indonesia-g6u2l1e2",
              type: "mcq",
              skill: "reading",
              prompt: t("مَتَى تَسْتَيْقِظُ فَاطِمَةُ؟", "When does Fatima wake up?", "Bilakah Fatima bangun?", "Kapan Fatima bangun?", "Quand Fatima se réveille-t-elle ?", "¿Cuándo se despierta Fátima?"),
              options: [
                "فِي السَّاعَةِ السَّادِسَةِ",
                "فِي السَّاعَةِ الثَّامِنَةِ",
                "فِي السَّاعَةِ العَاشِرَةِ"
              ],
              correctIndex: 0,
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Waking_up.jpg"
            },
            {
              id: "indonesia-g6u2l1e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنْ يَوْمِكَ", "Talk about your day", "Bercakap tentang hari kamu", "Bicara tentang harimu", "Parle de ta journée", "Habla de tu día"),
              arabicText: "أَسْتَيْقِظُ فِي السَّاعَةِ ... ثُمَّ أَذْهَبُ إِلَى الْمَدْرَسَةِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/23f0/512.webp"
            },
            {
              id: "indonesia-g6u2l1e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ خَمْسَةَ أَفْعَالٍ مِنْ يَوْمِكَ", "Write five actions from your day", "Tulis lima perbuatan dari hari kamu", "Tulis lima kata kerja dari harimu", "Écris cinq actions de ta journée", "Escribe cinco acciones de tu día"),
              answer: "أَسْتَيْقِظُ، أَأْكُلُ، أَذْهَبُ، أَدْرُسُ، أَنَامُ",
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Daily_routine.jpg"
            },
            {
              id: "indonesia-g6u2l1e5",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْفِعْلَ بِالصُّورَةِ", "Match the verb to the picture", "Padangkan kata kerja dengan gambar", "Cocokkan kata kerja dengan gambar", "Relie le verbe à l'image", "Relaciona el verbo con la imagen"),
              pairs: [
                {
                  a: "يَأْكُلُ",
                  b: "🍽️"
                },
                {
                  a: "يَنَامُ",
                  b: "😴"
                },
                {
                  a: "يَكْتُبُ",
                  b: "✍️"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/23f0/512.webp"
            },
            {
              id: "indonesia-g6u2l1e6",
              type: "fill_in_blank",
              skill: "writing",
              prompt: t("اِكْمِلِ: أَذْهَبُ إِلَى الْمَدْرَسَةِ بَعْدَ ....", "Complete: I go to school after ...", "Lengkapkan: Saya pergi ke sekolah selepas ...", "Lengkapi: Saya pergi ke sekolah setelah ...", "Complète : Je vais à l'école après ...", "Completa: Voy a la escuela después de ..."),
              arabicText: "الْفَطُورِ",
              answer: "الْفَطُورِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/23f0/512.webp"
            },
            {
              id: "indonesia-g6u2l1e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "مَاذَا تَفْعَلُ صَبَاحًا",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/23f0/512.webp"
            },
            {
              id: "indonesia-g6u2l1speakindonesia-g6u2l1v8",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "يَكْتُبُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/270d-fe0f/512.webp"
            },
            {
              id: "indonesia-g6u2l1speakindonesia-g6u2l1v6",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "يَنَامُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f634/512.webp"
            },
            {
              id: "indonesia-g6u2l1speakindonesia-g6u2l1v5",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "يَلْعَبُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "indonesia-g6u2l1mcqindonesia-g6u2l1v7",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"يَسْتَحِمُّ\"؟", "What does \"takes a bath\" mean?", "Apakah maksud \"mandi\"?", "Apa arti \"mandi\"?", "Que signifie \"prend un bain\" ?", "¿Qué significa \"se baña\"?"),
              arabicText: "يَسْتَحِمُّ",
              options: [
                "football",
                "takes a bath",
                "chicken",
                "sleeps"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6bf/512.webp"
            },
            {
              id: "indonesia-g6u2l1writeindonesia-g6u2l1v7",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"يَسْتَحِمُّ\"", "Type the Arabic word for: \"takes a bath\"", "Taip perkataan Arab untuk: \"mandi\"", "Ketik kata Arab untuk: \"mandi\"", "Tape le mot arabe pour : \"prend un bain\"", "Escribe la palabra árabe para: \"se baña\""),
              arabicText: "يَسْتَحِمُّ",
              answer: "يَسْتَحِمُّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6bf/512.webp"
            }
          ]
        },
        {
          id: "indonesia-g6u2review",
          unitId: "indonesia-g6u2",
          gradeId: "indonesia-g6",
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
              id: "indonesia-g6u2l1v1",
              arabic: "يَسْتَيْقِظُ",
              transliteration: "yastayqīẓu",
              translation: t("يَسْتَيْقِظُ", "wakes up", "bangun", "bangun", "se réveille", "despierta"),
              emoji: "⏰"
            },
            {
              id: "indonesia-g6u2l1v2",
              arabic: "يَأْكُلُ",
              transliteration: "yaʾkulu",
              translation: t("يَأْكُلُ", "eats", "makan", "makan", "mange", "come"),
              emoji: "🍽️"
            },
            {
              id: "indonesia-g6u2l1v3",
              arabic: "يَذْهَبُ",
              transliteration: "yadhhabu",
              translation: t("يَذْهَبُ", "goes", "pergi", "pergi", "va", "va"),
              emoji: "🚶"
            },
            {
              id: "indonesia-g6u2l1v4",
              arabic: "يَدْرُسُ",
              transliteration: "yadrusu",
              translation: t("يَدْرُسُ", "studies", "belajar", "belajar", "étudie", "estudia"),
              emoji: "📖"
            },
            {
              id: "indonesia-g6u2l1v5",
              arabic: "يَلْعَبُ",
              transliteration: "yalʿabu",
              translation: t("يَلْعَبُ", "plays", "bermain", "bermain", "joue", "juega"),
              emoji: "⚽"
            },
            {
              id: "indonesia-g6u2l1v6",
              arabic: "يَنَامُ",
              transliteration: "yanāmu",
              translation: t("يَنَامُ", "sleeps", "tidur", "tidur", "dort", "duerme"),
              emoji: "😴"
            },
            {
              id: "indonesia-g6u2l1v7",
              arabic: "يَسْتَحِمُّ",
              transliteration: "yastaḥimmu",
              translation: t("يَسْتَحِمُّ", "takes a bath", "mandi", "mandi", "prend un bain", "se baña"),
              emoji: "🚿"
            },
            {
              id: "indonesia-g6u2l1v8",
              arabic: "يَكْتُبُ",
              transliteration: "yaktubu",
              translation: t("يَكْتُبُ", "writes", "menulis", "menulis", "écrit", "escribe"),
              emoji: "✍️"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "indonesia-g6u2reviewwriteindonesia-g6u2l1v2",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"يَأْكُلُ\"", "Type the Arabic word for: \"eats\"", "Taip perkataan Arab untuk: \"makan\"", "Ketik kata Arab untuk: \"makan\"", "Tape le mot arabe pour : \"mange\"", "Escribe la palabra árabe para: \"come\""),
              arabicText: "يَأْكُلُ",
              answer: "يَأْكُلُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f37d-fe0f/512.webp"
            },
            {
              id: "indonesia-g6u2reviewwriteindonesia-g6u2l1v6",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"يَنَامُ\"", "Type the Arabic word for: \"sleeps\"", "Taip perkataan Arab untuk: \"tidur\"", "Ketik kata Arab untuk: \"tidur\"", "Tape le mot arabe pour : \"dort\"", "Escribe la palabra árabe para: \"duerme\""),
              arabicText: "يَنَامُ",
              answer: "يَنَامُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f634/512.webp"
            },
            {
              id: "indonesia-g6u2reviewlistenindonesia-g6u2l1v2",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "يَأْكُلُ",
              options: [
                "مَحَطَّةٌ",
                "يَأْكُلُ",
                "طَعَامٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f37d-fe0f/512.webp"
            },
            {
              id: "indonesia-g6u2reviewspellindonesia-g6u2l1v5",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "يَلْعَبُ",
              answer: "يَلْعَبُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "indonesia-g6u2reviewlistenindonesia-g6u2l1v8",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "يَكْتُبُ",
              options: [
                "يَكْتُبُ",
                "جُغْرَافِيَا",
                "أَرُزٌّ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/270d-fe0f/512.webp"
            },
            {
              id: "indonesia-g6u2reviewlistenindonesia-g6u2l1v7",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "يَسْتَحِمُّ",
              options: [
                "يَسْتَحِمُّ",
                "لُغَةٌ عَرَبِيَّةٌ",
                "سَاعَةٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6bf/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "indonesia-g6u3",
      gradeId: "indonesia-g6",
      order: 3,
      title: t("الْمَوَادُّ الدِّرَاسِيَّةُ", "School Subjects", "Mata Pelajaran", "Mata Pelajaran", "Les matières scolaires", "Las asignaturas"),
      theme: "school-subjects",
      lessons: [
        {
          id: "indonesia-g6u3l1",
          unitId: "indonesia-g6u3",
          gradeId: "indonesia-g6",
          order: 1,
          title: t("مَوَادِّي الدِّرَاسِيَّةُ", "My School Subjects", "Mata Pelajaran Saya", "Mata Pelajaranku", "Mes matières scolaires", "Mis asignaturas"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("نَتَعَرَّفُ عَلَى أَسْمَاءِ الْمَوَادِّ الدِّرَاسِيَّةِ وَنَتَحَدَّثُ عَنْهَا.", "We learn the names of school subjects and talk about them.", "Kita belajar nama mata pelajaran dan bercakap tentangnya.", "Kita belajar nama mata pelajaran dan berbicara tentangnya.", "Nous apprenons les noms des matières scolaires et parlons d'elles.", "Aprendemos los nombres de las asignaturas y hablamos de ellas."),
          vocabulary: [
            {
              id: "indonesia-g6u3l1v1",
              arabic: "مَادَّةٌ",
              transliteration: "mādda",
              translation: t("مَادَّةٌ", "subject", "mata pelajaran", "mata pelajaran", "matière", "asignatura"),
              emoji: "📚"
            },
            {
              id: "indonesia-g6u3l1v2",
              arabic: "رِيَاضِيَاتٌ",
              transliteration: "riyāḍiyāt",
              translation: t("رِيَاضِيَاتٌ", "mathematics", "matematik", "matematika", "mathématiques", "matemáticas"),
              emoji: "🔢"
            },
            {
              id: "indonesia-g6u3l1v3",
              arabic: "عُلُومٌ",
              transliteration: "ʿulūm",
              translation: t("عُلُومٌ", "science", "sains", "sains", "sciences", "ciencias"),
              emoji: "🔬"
            },
            {
              id: "indonesia-g6u3l1v4",
              arabic: "لُغَةٌ عَرَبِيَّةٌ",
              transliteration: "lughatun ʿarabiyya",
              translation: t("لُغَةٌ عَرَبِيَّةٌ", "Arabic language", "bahasa Arab", "bahasa Arab", "langue arabe", "lengua árabe"),
              emoji: "📜"
            },
            {
              id: "indonesia-g6u3l1v5",
              arabic: "لُغَةٌ إِنْجِلِيزِيَّةٌ",
              transliteration: "lughatun injilīziyya",
              translation: t("لُغَةٌ إِنْجِلِيزِيَّةٌ", "English language", "bahasa Inggeris", "bahasa Inggris", "langue anglaise", "lengua inglesa"),
              emoji: "🇬🇧"
            },
            {
              id: "indonesia-g6u3l1v6",
              arabic: "تَارِيخٌ",
              transliteration: "tārīkh",
              translation: t("تَارِيخٌ", "history", "sejarah", "sejarah", "histoire", "historia"),
              emoji: "🏛️"
            },
            {
              id: "indonesia-g6u3l1v7",
              arabic: "جُغْرَافِيَا",
              transliteration: "jughrāfiyā",
              translation: t("جُغْرَافِيَا", "geography", "geografi", "geografi", "géographie", "geografía"),
              emoji: "🌍"
            },
            {
              id: "indonesia-g6u3l1v8",
              arabic: "تَرْبِيَةٌ إِسْلَامِيَّةٌ",
              transliteration: "tarbiya islamiyya",
              translation: t("تَرْبِيَةٌ إِسْلَامِيَّةٌ", "Islamic education", "pendidikan Islam", "pendidikan Agama Islam", "éducation islamique", "educación islámica"),
              emoji: "☪️"
            },
            {
              id: "indonesia-g6u3l1v9",
              arabic: "فَنٌّ",
              transliteration: "fann",
              translation: t("فَنٌّ", "art", "seni", "seni", "art", "arte"),
              emoji: "🎨"
            },
            {
              id: "indonesia-g6u3l1v10",
              arabic: "رِيَاضَةٌ",
              transliteration: "riyāḍa",
              translation: t("رِيَاضَةٌ", "sports", "sukan", "olahraga", "sport", "deporte"),
              emoji: "🏃"
            }
          ],
          dialogue: [
            {
              speaker: "مُعَلِّمٌ",
              arabic: "مَا مَادَّتُكَ الْمُفَضَّلَةُ؟",
              translation: t("مَا مَادَّتُكَ الْمُفَضَّلَةُ؟", "What is your favorite subject?", "Apakah mata pelajaran kegemaran kamu?", "Apa mata pelajaran favoritmu?", "Quelle est ta matière préférée ?", "¿Cuál es tu asignatura favorita?")
            },
            {
              speaker: "تِلْمِيذٌ",
              arabic: "مَادَّتِي الْمُفَضَّلَةُ اللُّغَةُ الْعَرَبِيَّةُ.",
              translation: t("مَادَّتِي الْمُفَضَّلَةُ اللُّغَةُ الْعَرَبِيَّةُ.", "My favorite subject is Arabic language.", "Mata pelajaran kegemaran saya bahasa Arab.", "Mata pelajaran favoritku bahasa Arab.", "Ma matière préférée est la langue arabe.", "Mi asignatura favorita es la lengua árabe.")
            },
            {
              speaker: "مُعَلِّمٌ",
              arabic: "هَلْ تُحِبُّ الرِّيَاضِيَاتَ؟",
              translation: t("هَلْ تُحِبُّ الرِّيَاضِيَاتَ؟", "Do you like mathematics?", "Adakah kamu suka matematik?", "Apakah kamu suka matematika?", "Aimes-tu les mathématiques ?", "¿Te gustan las matemáticas?")
            },
            {
              speaker: "تِلْمِيذٌ",
              arabic: "نَعَمْ، أُحِبُّهَا لِأَنَّهَا مُفِيدَةٌ.",
              translation: t("نَعَمْ، أُحِبُّهَا لِأَنَّهَا مُفِيدَةٌ.", "Yes, I like it because it is useful.", "Ya, saya suka kerana ia berguna.", "Ya, saya suka karena bermanfaat.", "Oui, j'aime ça car c'est utile.", "Sí, me gusta porque es útil.")
            }
          ],
          exercises: [
            {
              id: "indonesia-g6u3l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("اِسْتَمِعْ وَاخْتَرِ الْمَادَّةَ الصَّحِيحَةَ", "Listen and choose the correct subject", "Dengar dan pilih mata pelajaran yang betul", "Dengarkan dan pilih mata pelajaran yang benar", "Écoute et choisis la matière correcte", "Escucha y elige la asignatura correcta"),
              arabicText: "اللُّغَةُ الْعَرَبِيَّةُ",
              options: [
                "اللُّغَةُ الْعَرَبِيَّةُ",
                "الرِّيَاضِيَاتُ",
                "الْعُلُومُ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp"
            },
            {
              id: "indonesia-g6u3l1e2",
              type: "mcq",
              skill: "reading",
              prompt: t("أَيُّ مَادَّةٍ تَعْنِي «الْأَرْقَامَ»؟", "Which subject means 'numbers'?", "Mata pelajaran manakah yang bermaksud 'nombor'?", "Mata pelajaran mana yang berarti 'angka'?", "Quelle matière signifie 'nombres' ?", "¿Qué asignatura significa 'números'?"),
              options: [
                "الْعُلُومُ",
                "الرِّيَاضِيَاتُ",
                "التَّارِيخُ"
              ],
              correctIndex: 1,
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Mathematics.jpg"
            },
            {
              id: "indonesia-g6u3l1e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنْ مَادَّتِكَ الْمُفَضَّلَةِ", "Talk about your favorite subject", "Bercakap tentang mata pelajaran kegemaran kamu", "Bicara tentang mata pelajaran favoritmu", "Parle de ta matière préférée", "Habla de tu asignatura favorita"),
              arabicText: "مَادَّتِي الْمُفَضَّلَةُ ...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp"
            },
            {
              id: "indonesia-g6u3l1e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ خَمْسَةَ مَوَادَّ دِرَاسِيَّةٍ", "Write five school subjects", "Tulis lima mata pelajaran", "Tulis lima mata pelajaran", "Écris cinq matières scolaires", "Escribe cinco asignaturas"),
              answer: "رِيَاضِيَاتٌ، عُلُومٌ، لُغَةٌ عَرَبِيَّةٌ، تَارِيخٌ، جُغْرَافِيَا",
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/School_subjects.jpg"
            },
            {
              id: "indonesia-g6u3l1e5",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْمَادَّةَ بِالصُّورَةِ", "Match the subject to the picture", "Padankan mata pelajaran dengan gambar", "Cocokkan mata pelajaran dengan gambar", "Relie la matière à l'image", "Relaciona la asignatura con la imagen"),
              pairs: [
                {
                  a: "رِيَاضِيَاتٌ",
                  b: "🔢"
                },
                {
                  a: "عُلُومٌ",
                  b: "🔬"
                },
                {
                  a: "فَنٌّ",
                  b: "🎨"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp"
            },
            {
              id: "indonesia-g6u3l1e6",
              type: "fill_in_blank",
              skill: "writing",
              prompt: t("اِكْمِلِ: مَادَّتِي الْمُفَضَّلَةُ ....", "Complete: My favorite subject is ...", "Lengkapkan: Mata pelajaran kegemaran saya ...", "Lengkapi: Mata pelajaran favoritku ...", "Complète : Ma matière préférée est ...", "Completa: Mi asignatura favorita es ..."),
              arabicText: "اللُّغَةُ الْعَرَبِيَّةُ",
              answer: "اللُّغَةُ الْعَرَبِيَّةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp"
            },
            {
              id: "indonesia-g6u3l1e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "مَا مَادَّتُكَ الْمُفَضَّلَةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp"
            },
            {
              id: "indonesia-g6u3l1speakindonesia-g6u3l1v10",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "رِيَاضَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c3/512.webp"
            },
            {
              id: "indonesia-g6u3l1arrange4",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "نَعَمْ، أُحِبُّهَا لِأَنَّهَا مُفِيدَةٌ.",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp"
            },
            {
              id: "indonesia-g6u3l1arrange1",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "مَا مَادَّتُكَ الْمُفَضَّلَةُ؟",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp"
            },
            {
              id: "indonesia-g6u3l1speakindonesia-g6u3l1v7",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "جُغْرَافِيَا",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f30d/512.webp"
            },
            {
              id: "indonesia-g6u3l1arrange3",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "هَلْ تُحِبُّ الرِّيَاضِيَاتَ؟",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp"
            }
          ]
        },
        {
          id: "indonesia-g6u3review",
          unitId: "indonesia-g6u3",
          gradeId: "indonesia-g6",
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
              id: "indonesia-g6u3l1v1",
              arabic: "مَادَّةٌ",
              transliteration: "mādda",
              translation: t("مَادَّةٌ", "subject", "mata pelajaran", "mata pelajaran", "matière", "asignatura"),
              emoji: "📚"
            },
            {
              id: "indonesia-g6u3l1v2",
              arabic: "رِيَاضِيَاتٌ",
              transliteration: "riyāḍiyāt",
              translation: t("رِيَاضِيَاتٌ", "mathematics", "matematik", "matematika", "mathématiques", "matemáticas"),
              emoji: "🔢"
            },
            {
              id: "indonesia-g6u3l1v3",
              arabic: "عُلُومٌ",
              transliteration: "ʿulūm",
              translation: t("عُلُومٌ", "science", "sains", "sains", "sciences", "ciencias"),
              emoji: "🔬"
            },
            {
              id: "indonesia-g6u3l1v4",
              arabic: "لُغَةٌ عَرَبِيَّةٌ",
              transliteration: "lughatun ʿarabiyya",
              translation: t("لُغَةٌ عَرَبِيَّةٌ", "Arabic language", "bahasa Arab", "bahasa Arab", "langue arabe", "lengua árabe"),
              emoji: "📜"
            },
            {
              id: "indonesia-g6u3l1v5",
              arabic: "لُغَةٌ إِنْجِلِيزِيَّةٌ",
              transliteration: "lughatun injilīziyya",
              translation: t("لُغَةٌ إِنْجِلِيزِيَّةٌ", "English language", "bahasa Inggeris", "bahasa Inggris", "langue anglaise", "lengua inglesa"),
              emoji: "🇬🇧"
            },
            {
              id: "indonesia-g6u3l1v6",
              arabic: "تَارِيخٌ",
              transliteration: "tārīkh",
              translation: t("تَارِيخٌ", "history", "sejarah", "sejarah", "histoire", "historia"),
              emoji: "🏛️"
            },
            {
              id: "indonesia-g6u3l1v7",
              arabic: "جُغْرَافِيَا",
              transliteration: "jughrāfiyā",
              translation: t("جُغْرَافِيَا", "geography", "geografi", "geografi", "géographie", "geografía"),
              emoji: "🌍"
            },
            {
              id: "indonesia-g6u3l1v8",
              arabic: "تَرْبِيَةٌ إِسْلَامِيَّةٌ",
              transliteration: "tarbiya islamiyya",
              translation: t("تَرْبِيَةٌ إِسْلَامِيَّةٌ", "Islamic education", "pendidikan Islam", "pendidikan Agama Islam", "éducation islamique", "educación islámica"),
              emoji: "☪️"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "indonesia-g6u3reviewmcqindonesia-g6u3l1v7",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"جُغْرَافِيَا\"؟", "What does \"geography\" mean?", "Apakah maksud \"geografi\"?", "Apa arti \"geografi\"?", "Que signifie \"géographie\" ?", "¿Qué significa \"geografía\"?"),
              arabicText: "جُغْرَافِيَا",
              options: [
                "takes a bath",
                "geography",
                "reads",
                "vegetables"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f30d/512.webp"
            },
            {
              id: "indonesia-g6u3reviewmcqindonesia-g6u3l1v5",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"لُغَةٌ إِنْجِلِيزِيَّةٌ\"؟", "What does \"English language\" mean?", "Apakah maksud \"bahasa Inggeris\"?", "Apa arti \"bahasa Inggris\"?", "Que signifie \"langue anglaise\" ?", "¿Qué significa \"lengua inglesa\"?"),
              arabicText: "لُغَةٌ إِنْجِلِيزِيَّةٌ",
              options: [
                "train",
                "English language",
                "prays",
                "reading"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f1ec-1f1e7/512.webp"
            },
            {
              id: "indonesia-g6u3reviewwriteindonesia-g6u3l1v3",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"عُلُومٌ\"", "Type the Arabic word for: \"science\"", "Taip perkataan Arab untuk: \"sains\"", "Ketik kata Arab untuk: \"sains\"", "Tape le mot arabe pour : \"sciences\"", "Escribe la palabra árabe para: \"ciencias\""),
              arabicText: "عُلُومٌ",
              answer: "عُلُومٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f52c/512.webp"
            },
            {
              id: "indonesia-g6u3reviewspeakindonesia-g6u3l1v3",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "عُلُومٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f52c/512.webp"
            },
            {
              id: "indonesia-g6u3reviewspeakindonesia-g6u3l1v8",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "تَرْبِيَةٌ إِسْلَامِيَّةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/262a-fe0f/512.webp"
            },
            {
              id: "indonesia-g6u3reviewspellindonesia-g6u3l1v8",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "تَرْبِيَةٌ إِسْلَامِيَّةٌ",
              answer: "تَرْبِيَةٌ إِسْلَامِيَّةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/262a-fe0f/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "indonesia-g6u4",
      gradeId: "indonesia-g6",
      order: 4,
      title: t("الْهَوَايَاتُ", "Hobbies", "Hobi", "Hobi", "Les loisirs", "Las aficiones"),
      theme: "hobbies",
      lessons: [
        {
          id: "indonesia-g6u4l1",
          unitId: "indonesia-g6u4",
          gradeId: "indonesia-g6",
          order: 1,
          title: t("هِوَايَاتِي", "My Hobbies", "Hobi Saya", "Hobiku", "Mes loisirs", "Mis aficiones"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("نَتَعَرَّفُ عَلَى هِوَايَاتٍ مُخْتَلِفَةٍ وَنَتَحَدَّثُ عَمَّا نُحِبُّ فِي أَوْقَاتِ فَرَاغِنَا.", "We learn different hobbies and talk about what we like in our free time.", "Kita belajar hobi yang berbeza dan bercakap tentang apa yang kita suka pada masa lapang.", "Kita belajar hobi berbeda dan berbicara tentang apa yang kita sukai di waktu luang.", "Nous apprenons différents loisirs et parlons de ce que nous aimons pendant nos temps libres.", "Aprendemos diferentes aficiones y hablamos de lo que nos gusta en nuestro tiempo libre."),
          vocabulary: [
            {
              id: "indonesia-g6u4l1v1",
              arabic: "هِوَايَةٌ",
              transliteration: "hiwāya",
              translation: t("هِوَايَةٌ", "hobby", "hobi", "hobi", "loisir", "afición"),
              emoji: "🎯"
            },
            {
              id: "indonesia-g6u4l1v2",
              arabic: "قِرَاءَةٌ",
              transliteration: "qirāʾa",
              translation: t("قِرَاءَةٌ", "reading", "membaca", "membaca", "lecture", "lectura"),
              emoji: "📖"
            },
            {
              id: "indonesia-g6u4l1v3",
              arabic: "رَسْمٌ",
              transliteration: "rasm",
              translation: t("رَسْمٌ", "drawing", "melukis", "menggambar", "dessin", "dibujo"),
              emoji: "🎨"
            },
            {
              id: "indonesia-g6u4l1v4",
              arabic: "رِيَاضَةٌ",
              transliteration: "riyāḍa",
              translation: t("رِيَاضَةٌ", "sport", "sukan", "olahraga", "sport", "deporte"),
              emoji: "⚽"
            },
            {
              id: "indonesia-g6u4l1v5",
              arabic: "سِبَاحَةٌ",
              transliteration: "sibāḥa",
              translation: t("سِبَاحَةٌ", "swimming", "berenang", "berenang", "natation", "natación"),
              emoji: "🏊"
            },
            {
              id: "indonesia-g6u4l1v6",
              arabic: "مُوسِيقَى",
              transliteration: "mūsīqā",
              translation: t("مُوسِيقَى", "music", "muzik", "musik", "musique", "música"),
              emoji: "🎵"
            },
            {
              id: "indonesia-g6u4l1v7",
              arabic: "غِنَاءٌ",
              transliteration: "ghināʾ",
              translation: t("غِنَاءٌ", "singing", "menyanyi", "menyanyi", "chant", "canto"),
              emoji: "🎤"
            },
            {
              id: "indonesia-g6u4l1v8",
              arabic: "رَقْصٌ",
              transliteration: "raqṣ",
              translation: t("رَقْصٌ", "dancing", "menari", "menari", "danse", "baile"),
              emoji: "💃"
            },
            {
              id: "indonesia-g6u4l1v9",
              arabic: "جَرْيٌ",
              transliteration: "jary",
              translation: t("جَرْيٌ", "running", "berlari", "berlari", "course", "correr"),
              emoji: "🏃"
            },
            {
              id: "indonesia-g6u4l1v10",
              arabic: "كُرَةُ الْقَدَمِ",
              transliteration: "kuratu l-qadam",
              translation: t("كُرَةُ الْقَدَمِ", "football", "bola sepak", "sepak bola", "football", "fútbol"),
              emoji: "⚽"
            }
          ],
          dialogue: [
            {
              speaker: "عَلِيٌّ",
              arabic: "مَا هِوَايَتُكَ يَا سَارَةُ؟",
              translation: t("مَا هِوَايَتُكَ يَا سَارَةُ؟", "What is your hobby, Sara?", "Apakah hobi kamu, Sara?", "Apa hobimu, Sara?", "Quel est ton loisir, Sara ?", "¿Cuál es tu afición, Sara?")
            },
            {
              speaker: "سَارَةُ",
              arabic: "هِوَايَتِي الرَّسْمُ وَالْقِرَاءَةُ.",
              translation: t("هِوَايَتِي الرَّسْمُ وَالْقِرَاءَةُ.", "My hobbies are drawing and reading.", "Hobi saya melukis dan membaca.", "Hobiku menggambar dan membaca.", "Mes loisirs sont le dessin et la lecture.", "Mis aficiones son dibujar y leer.")
            },
            {
              speaker: "عَلِيٌّ",
              arabic: "وَمَاذَا تَفْعَلِينَ فِي أَوْقَاتِ الْفَرَاغِ؟",
              translation: t("وَمَاذَا تَفْعَلِينَ فِي أَوْقَاتِ الْفَرَاغِ؟", "And what do you do in your free time?", "Dan apa yang kamu lakukan pada masa lapang?", "Dan apa yang kamu lakukan di waktu luang?", "Et que fais-tu pendant ton temps libre ?", "¿Y qué haces en tu tiempo libre?")
            },
            {
              speaker: "سَارَةُ",
              arabic: "أَلْعَبُ كُرَةَ الْقَدَمِ مَعَ أَصْدِقَائِي.",
              translation: t("أَلْعَبُ كُرَةَ الْقَدَمِ مَعَ أَصْدِقَائِي.", "I play football with my friends.", "Saya bermain bola sepak dengan rakan-rakan.", "Saya bermain sepak bola dengan teman-teman.", "Je joue au football avec mes amis.", "Juego al fútbol con mis amigos.")
            }
          ],
          exercises: [
            {
              id: "indonesia-g6u4l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("اِسْتَمِعْ وَاخْتَرِ الْهِوَايَةَ الصَّحِيحَةَ", "Listen and choose the correct hobby", "Dengar dan pilih hobi yang betul", "Dengarkan dan pilih hobi yang benar", "Écoute et choisis le bon loisir", "Escucha y elige la afición correcta"),
              arabicText: "سِبَاحَةٌ",
              options: [
                "رَسْمٌ",
                "سِبَاحَةٌ",
                "غِنَاءٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3ca/512.webp"
            },
            {
              id: "indonesia-g6u4l1e2",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا هِوَايَةُ سَارَةَ؟", "What is Sara's hobby?", "Apakah hobi Sara?", "Apa hobi Sara?", "Quel est le loisir de Sara ?", "¿Cuál es la afición de Sara?"),
              options: [
                "الرَّسْمُ وَالْقِرَاءَةُ",
                "الرِّيَاضَةُ فَقَطْ",
                "الْمُوسِيقَى"
              ],
              correctIndex: 0,
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Drawing.jpg"
            },
            {
              id: "indonesia-g6u4l1e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنْ هِوَايَتِكَ", "Talk about your hobby", "Bercakap tentang hobi kamu", "Bicara tentang hobimu", "Parle de ton loisir", "Habla de tu afición"),
              arabicText: "هِوَايَتِي ... وَأُحِبُّ أَنْ أَلْعَبَ ...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3af/512.webp"
            },
            {
              id: "indonesia-g6u4l1e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ أَرْبَعَ هِوَايَاتٍ", "Write four hobbies", "Tulis empat hobi", "Tulis empat hobi", "Écris quatre loisirs", "Escribe cuatro aficiones"),
              answer: "قِرَاءَةٌ، رَسْمٌ، رِيَاضَةٌ، سِبَاحَةٌ",
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Hobbies.jpg"
            },
            {
              id: "indonesia-g6u4l1e5",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْهِوَايَةَ بِالصُّورَةِ", "Match the hobby to the picture", "Padankan hobi dengan gambar", "Cocokkan hobi dengan gambar", "Relie le loisir à l'image", "Relaciona la afición con la imagen"),
              pairs: [
                {
                  a: "رَسْمٌ",
                  b: "🎨"
                },
                {
                  a: "سِبَاحَةٌ",
                  b: "🏊"
                },
                {
                  a: "كُرَةُ الْقَدَمِ",
                  b: "⚽"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3af/512.webp"
            },
            {
              id: "indonesia-g6u4l1e6",
              type: "fill_in_blank",
              skill: "writing",
              prompt: t("اِكْمِلِ: أَلْعَبُ كُرَةَ ....", "Complete: I play ... football", "Lengkapkan: Saya bermain bola ...", "Lengkapi: Saya bermain sepak ...", "Complète : Je joue au football", "Completa: Juego al fútbol"),
              arabicText: "الْقَدَمِ",
              answer: "الْقَدَمِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3af/512.webp"
            },
            {
              id: "indonesia-g6u4l1e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "مَا هِوَايَتُكَ يَا سَارَةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3af/512.webp"
            },
            {
              id: "indonesia-g6u4l1writeindonesia-g6u4l1v5",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"سِبَاحَةٌ\"", "Type the Arabic word for: \"swimming\"", "Taip perkataan Arab untuk: \"berenang\"", "Ketik kata Arab untuk: \"berenang\"", "Tape le mot arabe pour : \"natation\"", "Escribe la palabra árabe para: \"natación\""),
              arabicText: "سِبَاحَةٌ",
              answer: "سِبَاحَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3ca/512.webp"
            },
            {
              id: "indonesia-g6u4l1speakindonesia-g6u4l1v3",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "رَسْمٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3a8/512.webp"
            },
            {
              id: "indonesia-g6u4l1arrange1",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "مَا هِوَايَتُكَ يَا سَارَةُ؟",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3af/512.webp"
            },
            {
              id: "indonesia-g6u4l1arrange3",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "وَمَاذَا تَفْعَلِينَ فِي أَوْقَاتِ الْفَرَاغِ؟",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3af/512.webp"
            },
            {
              id: "indonesia-g6u4l1writeindonesia-g6u4l1v3",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"رَسْمٌ\"", "Type the Arabic word for: \"drawing\"", "Taip perkataan Arab untuk: \"melukis\"", "Ketik kata Arab untuk: \"menggambar\"", "Tape le mot arabe pour : \"dessin\"", "Escribe la palabra árabe para: \"dibujo\""),
              arabicText: "رَسْمٌ",
              answer: "رَسْمٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3a8/512.webp"
            }
          ]
        },
        {
          id: "indonesia-g6u4review",
          unitId: "indonesia-g6u4",
          gradeId: "indonesia-g6",
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
              id: "indonesia-g6u4l1v1",
              arabic: "هِوَايَةٌ",
              transliteration: "hiwāya",
              translation: t("هِوَايَةٌ", "hobby", "hobi", "hobi", "loisir", "afición"),
              emoji: "🎯"
            },
            {
              id: "indonesia-g6u4l1v2",
              arabic: "قِرَاءَةٌ",
              transliteration: "qirāʾa",
              translation: t("قِرَاءَةٌ", "reading", "membaca", "membaca", "lecture", "lectura"),
              emoji: "📖"
            },
            {
              id: "indonesia-g6u4l1v3",
              arabic: "رَسْمٌ",
              transliteration: "rasm",
              translation: t("رَسْمٌ", "drawing", "melukis", "menggambar", "dessin", "dibujo"),
              emoji: "🎨"
            },
            {
              id: "indonesia-g6u4l1v4",
              arabic: "رِيَاضَةٌ",
              transliteration: "riyāḍa",
              translation: t("رِيَاضَةٌ", "sport", "sukan", "olahraga", "sport", "deporte"),
              emoji: "⚽"
            },
            {
              id: "indonesia-g6u4l1v5",
              arabic: "سِبَاحَةٌ",
              transliteration: "sibāḥa",
              translation: t("سِبَاحَةٌ", "swimming", "berenang", "berenang", "natation", "natación"),
              emoji: "🏊"
            },
            {
              id: "indonesia-g6u4l1v6",
              arabic: "مُوسِيقَى",
              transliteration: "mūsīqā",
              translation: t("مُوسِيقَى", "music", "muzik", "musik", "musique", "música"),
              emoji: "🎵"
            },
            {
              id: "indonesia-g6u4l1v7",
              arabic: "غِنَاءٌ",
              transliteration: "ghināʾ",
              translation: t("غِنَاءٌ", "singing", "menyanyi", "menyanyi", "chant", "canto"),
              emoji: "🎤"
            },
            {
              id: "indonesia-g6u4l1v8",
              arabic: "رَقْصٌ",
              transliteration: "raqṣ",
              translation: t("رَقْصٌ", "dancing", "menari", "menari", "danse", "baile"),
              emoji: "💃"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "indonesia-g6u4reviewmcqindonesia-g6u4l1v6",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"مُوسِيقَى\"؟", "What does \"music\" mean?", "Apakah maksud \"muzik\"?", "Apa arti \"musik\"?", "Que signifie \"musique\" ?", "¿Qué significa \"música\"?"),
              arabicText: "مُوسِيقَى",
              options: [
                "music",
                "takes a bath",
                "chicken",
                "reading"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3b5/512.webp"
            },
            {
              id: "indonesia-g6u4reviewspellindonesia-g6u4l1v8",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "رَقْصٌ",
              answer: "رَقْصٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f483/512.webp"
            },
            {
              id: "indonesia-g6u4reviewmcqindonesia-g6u4l1v2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"قِرَاءَةٌ\"؟", "What does \"reading\" mean?", "Apakah maksud \"membaca\"?", "Apa arti \"membaca\"?", "Que signifie \"lecture\" ?", "¿Qué significa \"lectura\"?"),
              arabicText: "قِرَاءَةٌ",
              options: [
                "reading",
                "history",
                "minute",
                "port"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4d6/512.webp"
            },
            {
              id: "indonesia-g6u4reviewmcqindonesia-g6u4l1v3",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"رَسْمٌ\"؟", "What does \"drawing\" mean?", "Apakah maksud \"melukis\"?", "Apa arti \"menggambar\"?", "Que signifie \"dessin\" ?", "¿Qué significa \"dibujo\"?"),
              arabicText: "رَسْمٌ",
              options: [
                "time",
                "port",
                "swimming",
                "drawing"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3a8/512.webp"
            },
            {
              id: "indonesia-g6u4reviewmcqindonesia-g6u4l1v5",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"سِبَاحَةٌ\"؟", "What does \"swimming\" mean?", "Apakah maksud \"berenang\"?", "Apa arti \"berenang\"?", "Que signifie \"natation\" ?", "¿Qué significa \"natación\"?"),
              arabicText: "سِبَاحَةٌ",
              options: [
                "road",
                "swimming",
                "night",
                "airport"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3ca/512.webp"
            },
            {
              id: "indonesia-g6u4reviewlistenindonesia-g6u4l1v4",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "رِيَاضَةٌ",
              options: [
                "مِينَاءٌ",
                "رِيَاضَةٌ",
                "أَرُزٌّ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "indonesia-g6u5",
      gradeId: "indonesia-g6",
      order: 5,
      title: t("الطَّعَامُ وَالشَّرَابُ", "Food and Drink", "Makanan dan Minuman", "Makanan dan Minuman", "La nourriture et les boissons", "La comida y la bebida"),
      theme: "food-drink",
      lessons: [
        {
          id: "indonesia-g6u5l1",
          unitId: "indonesia-g6u5",
          gradeId: "indonesia-g6",
          order: 1,
          title: t("طَعَامٌ صِحِّيٌّ", "Healthy Food", "Makanan Sihat", "Makanan Sehat", "Une alimentation saine", "Comida saludable"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("نَتَعَرَّفُ عَلَى أَطْعِمَةٍ وَمَشْرُوبَاتٍ صِحِّيَّةٍ وَنَتَحَدَّثُ عَنْهَا.", "We learn about healthy foods and drinks and talk about them.", "Kita belajar makanan dan minuman sihat serta bercakap tentangnya.", "Kita belajar makanan dan minuman sehat serta berbicara tentangnya.", "Nous apprenons des aliments et boissons sains et en parlons.", "Aprendemos sobre comidas y bebidas saludables y hablamos de ellas."),
          vocabulary: [
            {
              id: "indonesia-g6u5l1v1",
              arabic: "طَعَامٌ",
              transliteration: "ṭaʿām",
              translation: t("طَعَامٌ", "food", "makanan", "makanan", "nourriture", "comida"),
              emoji: "🍽️"
            },
            {
              id: "indonesia-g6u5l1v2",
              arabic: "شَرَابٌ",
              transliteration: "sharāb",
              translation: t("شَرَابٌ", "drink", "minuman", "minuman", "boisson", "bebida"),
              emoji: "🥤"
            },
            {
              id: "indonesia-g6u5l1v3",
              arabic: "فَاكِهَةٌ",
              transliteration: "fākih",
              translation: t("فَاكِهَةٌ", "fruit", "buah", "buah", "fruit", "fruta"),
              emoji: "🍎"
            },
            {
              id: "indonesia-g6u5l1v4",
              arabic: "خَضْرَوَاتٌ",
              transliteration: "khaḍrawāt",
              translation: t("خَضْرَوَاتٌ", "vegetables", "sayur-sayuran", "sayuran", "légumes", "verduras"),
              emoji: "🥦"
            },
            {
              id: "indonesia-g6u5l1v5",
              arabic: "لَحْمٌ",
              transliteration: "laḥm",
              translation: t("لَحْمٌ", "meat", "daging", "daging", "viande", "carne"),
              emoji: "🥩"
            },
            {
              id: "indonesia-g6u5l1v6",
              arabic: "دَجَاجٌ",
              transliteration: "dajāj",
              translation: t("دَجَاجٌ", "chicken", "ayam", "ayam", "poulet", "pollo"),
              emoji: "🍗"
            },
            {
              id: "indonesia-g6u5l1v7",
              arabic: "سَمَكٌ",
              transliteration: "samak",
              translation: t("سَمَكٌ", "fish", "ikan", "ikan", "poisson", "pescado"),
              emoji: "🐟"
            },
            {
              id: "indonesia-g6u5l1v8",
              arabic: "أَرُزٌّ",
              transliteration: "aruzz",
              translation: t("أَرُزٌّ", "rice", "nasi", "nasi", "riz", "arroz"),
              emoji: "🍚"
            },
            {
              id: "indonesia-g6u5l1v9",
              arabic: "خُبْزٌ",
              transliteration: "khubz",
              translation: t("خُبْزٌ", "bread", "roti", "roti", "pain", "pan"),
              emoji: "🍞"
            },
            {
              id: "indonesia-g6u5l1v10",
              arabic: "مَاءٌ",
              transliteration: "māʾ",
              translation: t("مَاءٌ", "water", "air", "air", "eau", "agua"),
              emoji: "💧"
            }
          ],
          dialogue: [
            {
              speaker: "الأُمُّ",
              arabic: "مَاذَا تَأْكُلُ فِي الْفَطُورِ؟",
              translation: t("مَاذَا تَأْكُلُ فِي الْفَطُورِ؟", "What do you eat for breakfast?", "Apa yang kamu makan untuk sarapan?", "Apa yang kamu makan untuk sarapan?", "Que manges-tu au petit déjeuner ?", "¿Qué comes para el desayuno?")
            },
            {
              speaker: "الابْنُ",
              arabic: "آكُلُ خُبْزًا وَأَشْرَبُ حَلِيبًا.",
              translation: t("آكُلُ خُبْزًا وَأَشْرَبُ حَلِيبًا.", "I eat bread and drink milk.", "Saya makan roti dan minum susu.", "Saya makan roti dan minum susu.", "Je mange du pain et je bois du lait.", "Como pan y bebo leche.")
            },
            {
              speaker: "الأُمُّ",
              arabic: "هَلْ تَأْكُلُ فَاكِهَةً؟",
              translation: t("هَلْ تَأْكُلُ فَاكِهَةً؟", "Do you eat fruit?", "Adakah kamu makan buah?", "Apakah kamu makan buah?", "Manges-tu des fruits ?", "¿Comes fruta?")
            },
            {
              speaker: "الابْنُ",
              arabic: "نَعَمْ، آكُلُ تُفَّاحَةً أَوْ مَوْزَةً.",
              translation: t("نَعَمْ، آكُلُ تُفَّاحَةً أَوْ مَوْزَةً.", "Yes, I eat an apple or a banana.", "Ya, saya makan epal atau pisang.", "Ya, saya makan apel atau pisang.", "Oui, je mange une pomme ou une banane.", "Sí, como una manzana o un plátano.")
            }
          ],
          exercises: [
            {
              id: "indonesia-g6u5l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("اِسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le mot correct", "Escucha y elige la palabra correcta"),
              arabicText: "خُبْزٌ",
              options: [
                "خُبْزٌ",
                "مَاءٌ",
                "تُفَّاحَةٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f35e/512.webp"
            },
            {
              id: "indonesia-g6u5l1e2",
              type: "mcq",
              skill: "reading",
              prompt: t("أَيُّ مَا يَأْتِي فِئَةَ فَوَاكِهَ؟", "Which of these is a fruit?", "Yang manakah merupakan buah?", "Yang mana merupakan buah?", "Lequel est un fruit ?", "¿Cuál es una fruta?"),
              options: [
                "خَضْرَوَاتٌ",
                "فَاكِهَةٌ",
                "لَحْمٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Fruit.jpg"
            },
            {
              id: "indonesia-g6u5l1e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنْ فَطُورِكَ الصِّحِّيِّ", "Talk about your healthy breakfast", "Bercakap tentang sarapan sihat kamu", "Bicara tentang sarapan sehatmu", "Parle de ton petit déjeuner sain", "Habla de tu desayuno saludable"),
              arabicText: "فِي الْفَطُورِ آكُلُ ... وَأَشْرَبُ ...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f37d-fe0f/512.webp"
            },
            {
              id: "indonesia-g6u5l1e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ خَمْسَةَ أَطْعِمَةٍ صِحِّيَّةٍ", "Write five healthy foods", "Tulis lima makanan sihat", "Tulis lima makanan sehat", "Écris cinq aliments sains", "Escribe cinco alimentos saludables"),
              answer: "فَاكِهَةٌ، خَضْرَوَاتٌ، سَمَكٌ، خُبْزٌ، مَاءٌ",
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Healthy_food.jpg"
            },
            {
              id: "indonesia-g6u5l1e5",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَاتِ بِالْمَعَانِي", "Match the words to the meanings", "Padankan perkataan dengan makna", "Cocokkan kata dengan makna", "Relie les mots à leurs sens", "Relaciona las palabras con sus significados"),
              pairs: [
                {
                  a: "فَاكِهَةٌ",
                  b: "fruit"
                },
                {
                  a: "خَضْرَوَاتٌ",
                  b: "vegetables"
                },
                {
                  a: "لَحْمٌ",
                  b: "meat"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f37d-fe0f/512.webp"
            },
            {
              id: "indonesia-g6u5l1e6",
              type: "fill_in_blank",
              skill: "writing",
              prompt: t("اِكْمِلِ: أَشْرَبُ .... فِي الصَّبَاحِ", "Complete: I drink ... in the morning", "Lengkapkan: Saya minum ... pada pagi", "Lengkapi: Saya minum ... di pagi hari", "Complète : Je bois ... le matin", "Completa: Bebo ... por la mañana"),
              arabicText: "مَاءً",
              answer: "مَاءً",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f37d-fe0f/512.webp"
            },
            {
              id: "indonesia-g6u5l1e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "مَاذَا تَأْكُلُ فِي الْفَطُورِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f37d-fe0f/512.webp"
            },
            {
              id: "indonesia-g6u5l1arrange1",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "مَاذَا تَأْكُلُ فِي الْفَطُورِ؟",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f37d-fe0f/512.webp"
            },
            {
              id: "indonesia-g6u5l1speakindonesia-g6u5l1v5",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "لَحْمٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f969/512.webp"
            },
            {
              id: "indonesia-g6u5l1spellindonesia-g6u5l1v6",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "دَجَاجٌ",
              answer: "دَجَاجٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f357/512.webp"
            },
            {
              id: "indonesia-g6u5l1speakindonesia-g6u5l1v6",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "دَجَاجٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f357/512.webp"
            },
            {
              id: "indonesia-g6u5l1writeindonesia-g6u5l1v9",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"خُبْزٌ\"", "Type the Arabic word for: \"bread\"", "Taip perkataan Arab untuk: \"roti\"", "Ketik kata Arab untuk: \"roti\"", "Tape le mot arabe pour : \"pain\"", "Escribe la palabra árabe para: \"pan\""),
              arabicText: "خُبْزٌ",
              answer: "خُبْزٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f35e/512.webp"
            }
          ]
        },
        {
          id: "indonesia-g6u5review",
          unitId: "indonesia-g6u5",
          gradeId: "indonesia-g6",
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
              id: "indonesia-g6u5l1v1",
              arabic: "طَعَامٌ",
              transliteration: "ṭaʿām",
              translation: t("طَعَامٌ", "food", "makanan", "makanan", "nourriture", "comida"),
              emoji: "🍽️"
            },
            {
              id: "indonesia-g6u5l1v2",
              arabic: "شَرَابٌ",
              transliteration: "sharāb",
              translation: t("شَرَابٌ", "drink", "minuman", "minuman", "boisson", "bebida"),
              emoji: "🥤"
            },
            {
              id: "indonesia-g6u5l1v3",
              arabic: "فَاكِهَةٌ",
              transliteration: "fākih",
              translation: t("فَاكِهَةٌ", "fruit", "buah", "buah", "fruit", "fruta"),
              emoji: "🍎"
            },
            {
              id: "indonesia-g6u5l1v4",
              arabic: "خَضْرَوَاتٌ",
              transliteration: "khaḍrawāt",
              translation: t("خَضْرَوَاتٌ", "vegetables", "sayur-sayuran", "sayuran", "légumes", "verduras"),
              emoji: "🥦"
            },
            {
              id: "indonesia-g6u5l1v5",
              arabic: "لَحْمٌ",
              transliteration: "laḥm",
              translation: t("لَحْمٌ", "meat", "daging", "daging", "viande", "carne"),
              emoji: "🥩"
            },
            {
              id: "indonesia-g6u5l1v6",
              arabic: "دَجَاجٌ",
              transliteration: "dajāj",
              translation: t("دَجَاجٌ", "chicken", "ayam", "ayam", "poulet", "pollo"),
              emoji: "🍗"
            },
            {
              id: "indonesia-g6u5l1v7",
              arabic: "سَمَكٌ",
              transliteration: "samak",
              translation: t("سَمَكٌ", "fish", "ikan", "ikan", "poisson", "pescado"),
              emoji: "🐟"
            },
            {
              id: "indonesia-g6u5l1v8",
              arabic: "أَرُزٌّ",
              transliteration: "aruzz",
              translation: t("أَرُزٌّ", "rice", "nasi", "nasi", "riz", "arroz"),
              emoji: "🍚"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "indonesia-g6u5reviewmcqindonesia-g6u5l1v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"طَعَامٌ\"؟", "What does \"food\" mean?", "Apakah maksud \"makanan\"?", "Apa arti \"makanan\"?", "Que signifie \"nourriture\" ?", "¿Qué significa \"comida\"?"),
              arabicText: "طَعَامٌ",
              options: [
                "football",
                "bread",
                "food",
                "drawing"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f37d-fe0f/512.webp"
            },
            {
              id: "indonesia-g6u5reviewspeakindonesia-g6u5l1v8",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "أَرُزٌّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f35a/512.webp"
            },
            {
              id: "indonesia-g6u5reviewmcqindonesia-g6u5l1v2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"شَرَابٌ\"؟", "What does \"drink\" mean?", "Apakah maksud \"minuman\"?", "Apa arti \"minuman\"?", "Que signifie \"boisson\" ?", "¿Qué significa \"bebida\"?"),
              arabicText: "شَرَابٌ",
              options: [
                "quarter",
                "drink",
                "food",
                "English language"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f964/512.webp"
            },
            {
              id: "indonesia-g6u5reviewmcqindonesia-g6u5l1v3",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"فَاكِهَةٌ\"؟", "What does \"fruit\" mean?", "Apakah maksud \"buah\"?", "Apa arti \"buah\"?", "Que signifie \"fruit\" ?", "¿Qué significa \"fruta\"?"),
              arabicText: "فَاكِهَةٌ",
              options: [
                "fruit",
                "singing",
                "chicken",
                "dancing"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f34e/512.webp"
            },
            {
              id: "indonesia-g6u5reviewspeakindonesia-g6u5l1v1",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "طَعَامٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f37d-fe0f/512.webp"
            },
            {
              id: "indonesia-g6u5reviewwriteindonesia-g6u5l1v6",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"دَجَاجٌ\"", "Type the Arabic word for: \"chicken\"", "Taip perkataan Arab untuk: \"ayam\"", "Ketik kata Arab untuk: \"ayam\"", "Tape le mot arabe pour : \"poulet\"", "Escribe la palabra árabe para: \"pollo\""),
              arabicText: "دَجَاجٌ",
              answer: "دَجَاجٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f357/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "indonesia-g6u6",
      gradeId: "indonesia-g6",
      order: 6,
      title: t("السَّفَرُ", "Travel", "Perjalanan", "Perjalanan", "Les voyages", "Los viajes"),
      theme: "travel",
      lessons: [
        {
          id: "indonesia-g6u6l1",
          unitId: "indonesia-g6u6",
          gradeId: "indonesia-g6",
          order: 1,
          title: t("رِحْلَتُنَا", "Our Trip", "Perjalanan Kami", "Perjalanan Kami", "Notre voyage", "Nuestro viaje"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("نَتَعَرَّفُ عَلَى أَسْمَاءِ وَسَائِلِ السَّفَرِ وَالْمَوَاضِعِ الْمُهِمَّةِ.", "We learn the names of means of transport and important places.", "Kita belajar nama kenderaan dan tempat-tempat penting dalam perjalanan.", "Kita belajar nama kendaraan dan tempat-tempat penting dalam perjalanan.", "Nous apprenons les noms des moyens de transport et des lieux importants.", "Aprendemos los nombres de los medios de transporte y los lugares importantes."),
          vocabulary: [
            {
              id: "indonesia-g6u6l1v1",
              arabic: "سَفَرٌ",
              transliteration: "safar",
              translation: t("سَفَرٌ", "travel", "perjalanan", "perjalanan", "voyage", "viaje"),
              emoji: "🧳"
            },
            {
              id: "indonesia-g6u6l1v2",
              arabic: "سَيَّارَةٌ",
              transliteration: "sayyāra",
              translation: t("سَيَّارَةٌ", "car", "kereta", "mobil", "voiture", "coche"),
              emoji: "🚗"
            },
            {
              id: "indonesia-g6u6l1v3",
              arabic: "حَافِلَةٌ",
              transliteration: "ḥāfila",
              translation: t("حَافِلَةٌ", "bus", "bas", "bus", "bus", "autobús"),
              emoji: "🚌"
            },
            {
              id: "indonesia-g6u6l1v4",
              arabic: "طَائِرَةٌ",
              transliteration: "ṭāʾira",
              translation: t("طَائِرَةٌ", "airplane", "kapal terbang", "pesawat", "avion", "avión"),
              emoji: "✈️"
            },
            {
              id: "indonesia-g6u6l1v5",
              arabic: "قِطَارٌ",
              transliteration: "qiṭār",
              translation: t("قِطَارٌ", "train", "kereta api", "kereta api", "train", "tren"),
              emoji: "🚆"
            },
            {
              id: "indonesia-g6u6l1v6",
              arabic: "سَفِينَةٌ",
              transliteration: "safīna",
              translation: t("سَفِينَةٌ", "ship", "kapal", "kapal", "bateau", "barco"),
              emoji: "🚢"
            },
            {
              id: "indonesia-g6u6l1v7",
              arabic: "طَرِيقٌ",
              transliteration: "ṭarīq",
              translation: t("طَرِيقٌ", "road", "jalan", "jalan", "route", "carretera"),
              emoji: "🛣️"
            },
            {
              id: "indonesia-g6u6l1v8",
              arabic: "مَحَطَّةٌ",
              transliteration: "maḥaṭṭa",
              translation: t("مَحَطَّةٌ", "station", "stesen", "stasiun", "station", "estación"),
              emoji: "🚉"
            },
            {
              id: "indonesia-g6u6l1v9",
              arabic: "مَطَارٌ",
              transliteration: "maṭār",
              translation: t("مَطَارٌ", "airport", "lapangan terbang", "bandara", "aéroport", "aeropuerto"),
              emoji: "🛫"
            },
            {
              id: "indonesia-g6u6l1v10",
              arabic: "مِينَاءٌ",
              transliteration: "mīnāʾ",
              translation: t("مِينَاءٌ", "port", "pelabuhan", "pelabuhan", "port", "puerto"),
              emoji: "⚓"
            }
          ],
          dialogue: [
            {
              speaker: "أَبٌ",
              arabic: "كَيْفَ نَذْهَبُ إِلَى جَاكَرْتَا؟",
              translation: t("كَيْفَ نَذْهَبُ إِلَى جَاكَرْتَا؟", "How do we go to Jakarta?", "Bagaimana kita pergi ke Jakarta?", "Bagaimana kita pergi ke Jakarta?", "Comment allons-nous à Jakarta ?", "¿Cómo vamos a Yakarta?")
            },
            {
              speaker: "أُمٌّ",
              arabic: "نَذْهَبُ بِالطَّائِرَةِ، فَهِيَ سَرِيعَةٌ.",
              translation: t("نَذْهَبُ بِالطَّائِرَةِ، فَهِيَ سَرِيعَةٌ.", "We go by airplane, it is fast.", "Kita pergi dengan kapal terbang, ia pantas.", "Kita pergi dengan pesawat, itu cepat.", "Nous allons en avion, c'est rapide.", "Vamos en avión, es rápido.")
            },
            {
              speaker: "ابْنٌ",
              arabic: "وَمَاذَا عَنِ الْحَافِلَةِ؟",
              translation: t("وَمَاذَا عَنِ الْحَافِلَةِ؟", "And what about the bus?", "Dan bagaimana dengan bas?", "Dan bagaimana dengan bus?", "Et qu'en est-il du bus ?", "¿Y qué hay del autobús?")
            },
            {
              speaker: "أُمٌّ",
              arabic: "الْحَافِلَةُ جَيِّدَةٌ لِلْمَدَارِسِ الْقَرِيبَةِ.",
              translation: t("الْحَافِلَةُ جَيِّدَةٌ لِلْمَدَارِسِ الْقَرِيبَةِ.", "The bus is good for nearby schools.", "Bas sesuai untuk sekolah berdekatan.", "Bus baik untuk sekolah terdekat.", "Le bus est bien pour les écoles proches.", "El autobús es bueno para las escuelas cercanas.")
            }
          ],
          exercises: [
            {
              id: "indonesia-g6u6l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("اِسْتَمِعْ وَاخْتَرِ وَسِيلَةَ السَّفَرِ", "Listen and choose the means of transport", "Dengar dan pilih kenderaan", "Dengarkan dan pilih kendaraan", "Écoute et choisis le moyen de transport", "Escucha y elige el medio de transporte"),
              arabicText: "طَائِرَةٌ",
              options: [
                "سَيَّارَةٌ",
                "طَائِرَةٌ",
                "قِطَارٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2708-fe0f/512.webp"
            },
            {
              id: "indonesia-g6u6l1e2",
              type: "mcq",
              skill: "reading",
              prompt: t("أَيُّ وَسِيلَةٍ تَطِيرُ فِي السَّمَاءِ؟", "Which means of transport flies in the sky?", "Kenderaan manakah yang terbang di langit?", "Kendaraan mana yang terbang di langit?", "Quel moyen de transport vole dans le ciel ?", "¿Qué medio de transporte vuela en el cielo?"),
              options: [
                "حَافِلَةٌ",
                "سَفِينَةٌ",
                "طَائِرَةٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Airplane.jpg"
            },
            {
              id: "indonesia-g6u6l1e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنْ رِحْلَةٍ قُمْتَ بِهَا", "Talk about a trip you took", "Bercakap tentang perjalanan yang pernah kamu lakukan", "Bicara tentang perjalanan yang pernah kamu lakukan", "Parle d'un voyage que tu as fait", "Habla de un viaje que hiciste"),
              arabicText: "ذَهَبْتُ إِلَى ... بِالْ...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9f3/512.webp"
            },
            {
              id: "indonesia-g6u6l1e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ خَمْسَ وَسَائِلِ سَفَرٍ", "Write five means of transport", "Tulis lima kenderaan", "Tulis lima kendaraan", "Écris cinq moyens de transport", "Escribe cinco medios de transporte"),
              answer: "سَيَّارَةٌ، حَافِلَةٌ، طَائِرَةٌ، قِطَارٌ، سَفِينَةٌ",
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Transport.jpg"
            },
            {
              id: "indonesia-g6u6l1e5",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْوَسِيلَةَ بِالْمَكَانِ", "Match the transport to the place", "Padankan kenderaan dengan tempat", "Cocokkan kendaraan dengan tempat", "Relie le transport au lieu", "Relaciona el transporte con el lugar"),
              pairs: [
                {
                  a: "طَائِرَةٌ",
                  b: "airport"
                },
                {
                  a: "قِطَارٌ",
                  b: "station"
                },
                {
                  a: "سَفِينَةٌ",
                  b: "port"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9f3/512.webp"
            },
            {
              id: "indonesia-g6u6l1e6",
              type: "fill_in_blank",
              skill: "writing",
              prompt: t("اِكْمِلِ: نَذْهَبُ إِلَى جَاكَرْتَا بِالْ....", "Complete: We go to Jakarta by ...", "Lengkapkan: Kita pergi ke Jakarta dengan ...", "Lengkapi: Kita pergi ke Jakarta dengan ...", "Complète : Nous allons à Jakarta en ...", "Completa: Vamos a Yakarta en ..."),
              arabicText: "طَائِرَةِ",
              answer: "طَائِرَةِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9f3/512.webp"
            },
            {
              id: "indonesia-g6u6l1e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "كَيْفَ نَذْهَبُ إِلَى جَاكَرْتَا",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9f3/512.webp"
            },
            {
              id: "indonesia-g6u6l1speakindonesia-g6u6l1v3",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "حَافِلَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f68c/512.webp"
            },
            {
              id: "indonesia-g6u6l1speakindonesia-g6u6l1v6",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "سَفِينَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6a2/512.webp"
            },
            {
              id: "indonesia-g6u6l1mcqindonesia-g6u6l1v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"سَفَرٌ\"؟", "What does \"travel\" mean?", "Apakah maksud \"perjalanan\"?", "Apa arti \"perjalanan\"?", "Que signifie \"voyage\" ?", "¿Qué significa \"viaje\"?"),
              arabicText: "سَفَرٌ",
              options: [
                "running",
                "travel",
                "chicken",
                "science"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9f3/512.webp"
            },
            {
              id: "indonesia-g6u6l1writeindonesia-g6u6l1v8",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"مَحَطَّةٌ\"", "Type the Arabic word for: \"station\"", "Taip perkataan Arab untuk: \"stesen\"", "Ketik kata Arab untuk: \"stasiun\"", "Tape le mot arabe pour : \"station\"", "Escribe la palabra árabe para: \"estación\""),
              arabicText: "مَحَطَّةٌ",
              answer: "مَحَطَّةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f689/512.webp"
            },
            {
              id: "indonesia-g6u6l1spellindonesia-g6u6l1v9",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "مَطَارٌ",
              answer: "مَطَارٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6eb/512.webp"
            }
          ]
        },
        {
          id: "indonesia-g6u6review",
          unitId: "indonesia-g6u6",
          gradeId: "indonesia-g6",
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
              id: "indonesia-g6u6l1v1",
              arabic: "سَفَرٌ",
              transliteration: "safar",
              translation: t("سَفَرٌ", "travel", "perjalanan", "perjalanan", "voyage", "viaje"),
              emoji: "🧳"
            },
            {
              id: "indonesia-g6u6l1v2",
              arabic: "سَيَّارَةٌ",
              transliteration: "sayyāra",
              translation: t("سَيَّارَةٌ", "car", "kereta", "mobil", "voiture", "coche"),
              emoji: "🚗"
            },
            {
              id: "indonesia-g6u6l1v3",
              arabic: "حَافِلَةٌ",
              transliteration: "ḥāfila",
              translation: t("حَافِلَةٌ", "bus", "bas", "bus", "bus", "autobús"),
              emoji: "🚌"
            },
            {
              id: "indonesia-g6u6l1v4",
              arabic: "طَائِرَةٌ",
              transliteration: "ṭāʾira",
              translation: t("طَائِرَةٌ", "airplane", "kapal terbang", "pesawat", "avion", "avión"),
              emoji: "✈️"
            },
            {
              id: "indonesia-g6u6l1v5",
              arabic: "قِطَارٌ",
              transliteration: "qiṭār",
              translation: t("قِطَارٌ", "train", "kereta api", "kereta api", "train", "tren"),
              emoji: "🚆"
            },
            {
              id: "indonesia-g6u6l1v6",
              arabic: "سَفِينَةٌ",
              transliteration: "safīna",
              translation: t("سَفِينَةٌ", "ship", "kapal", "kapal", "bateau", "barco"),
              emoji: "🚢"
            },
            {
              id: "indonesia-g6u6l1v7",
              arabic: "طَرِيقٌ",
              transliteration: "ṭarīq",
              translation: t("طَرِيقٌ", "road", "jalan", "jalan", "route", "carretera"),
              emoji: "🛣️"
            },
            {
              id: "indonesia-g6u6l1v8",
              arabic: "مَحَطَّةٌ",
              transliteration: "maḥaṭṭa",
              translation: t("مَحَطَّةٌ", "station", "stesen", "stasiun", "station", "estación"),
              emoji: "🚉"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "indonesia-g6u6reviewspellindonesia-g6u6l1v8",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "مَحَطَّةٌ",
              answer: "مَحَطَّةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f689/512.webp"
            },
            {
              id: "indonesia-g6u6reviewspeakindonesia-g6u6l1v3",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "حَافِلَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f68c/512.webp"
            },
            {
              id: "indonesia-g6u6reviewlistenindonesia-g6u6l1v2",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "سَيَّارَةٌ",
              options: [
                "خَضْرَوَاتٌ",
                "سَيَّارَةٌ",
                "هِوَايَةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f697/512.webp"
            },
            {
              id: "indonesia-g6u6reviewlistenindonesia-g6u6l1v4",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "طَائِرَةٌ",
              options: [
                "سَفَرٌ",
                "خَضْرَوَاتٌ",
                "طَائِرَةٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2708-fe0f/512.webp"
            },
            {
              id: "indonesia-g6u6reviewwriteindonesia-g6u6l1v5",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"قِطَارٌ\"", "Type the Arabic word for: \"train\"", "Taip perkataan Arab untuk: \"kereta api\"", "Ketik kata Arab untuk: \"kereta api\"", "Tape le mot arabe pour : \"train\"", "Escribe la palabra árabe para: \"tren\""),
              arabicText: "قِطَارٌ",
              answer: "قِطَارٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f686/512.webp"
            },
            {
              id: "indonesia-g6u6reviewspellindonesia-g6u6l1v7",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "طَرِيقٌ",
              answer: "طَرِيقٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6e3-fe0f/512.webp"
            }
          ]
        }
      ]
    }
  ]
};
