import { t, type GradeData, type CurriculumId } from "./types";

export const uaeGrade1: GradeData = {
  id: "uae-g1",
  number: 1,
  color: "#EC4899",
  icon: "star",
  title: t("المستوى الأول", "Stage 1", "Tahun 1", "Kelas 1", "Année 1", "Año 1"),
  description: t("تعلّم التحيات والألوان والحيوانات وحروف الهجاء", "Learn greetings, colors, animals and Arabic letters", "Belajar ucapan, warna, haiwan dan huruf Arab", "Belajar salam, warna, hewan dan huruf Arab", "Apprendre les salutations, couleurs, animaux et lettres", "Aprender saludos, colores, animales y letras"),
  units: [
    {
      id: "uae-g1u1",
      gradeId: "uae-g1",
      order: 1,
      title: t("التَّعَارُف", "Introductions", "Berkenalan", "Berkenalan", "Faire connaissance", "Conocerse"),
      theme: "greetings",
      lessons: [
        {
          id: "uae-g1u1l1",
          unitId: "uae-g1u1",
          gradeId: "uae-g1",
          order: 1,
          title: t("التَّحِيَّةُ", "Greetings", "Ucapan Salam", "Salam", "Les salutations", "Los saludos"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("هيا نتعلم كيف نُحَيِّي بعضنا بعضاً!", "Let's learn how to greet each other!", "Jom belajar cara memberi salam!", "Ayo belajar cara menyapa satu sama lain!", "Apprenons à nous saluer !", "¡Aprendamos a saludarnos!"),
          vocabulary: [
            {
              id: "uae-g1u1l1-v1",
              arabic: "مَرْحَباً",
              transliteration: "marḥaban",
              translation: t("مَرْحَباً", "hello", "hello", "helo", "bonjour", "hola"),
              emoji: "🙋"
            },
            {
              id: "uae-g1u1l1-v2",
              arabic: "أَهْلاً",
              transliteration: "ahlan",
              translation: t("أَهْلاً", "welcome", "selamat datang", "selamat datang", "bienvenue", "bienvenido"),
              emoji: "🤝"
            },
            {
              id: "uae-g1u1l1-v3",
              arabic: "صَبَاحُ الخَيْرِ",
              transliteration: "ṣabāḥ al-khayr",
              translation: t("صَبَاحُ الخَيْرِ", "good morning", "selamat pagi", "selamat pagi", "bonjour", "buenos días"),
              emoji: "🌅"
            },
            {
              id: "uae-g1u1l1-v4",
              arabic: "مَسَاءُ الخَيْرِ",
              transliteration: "masāʾ al-khayr",
              translation: t("مَسَاءُ الخَيْرِ", "good evening", "selamat petang", "selamat petang", "bonsoir", "buenas tardes"),
              emoji: "🌆"
            },
            {
              id: "uae-g1u1l1-v5",
              arabic: "وَدَاعاً",
              transliteration: "wadāʿan",
              translation: t("وَدَاعاً", "goodbye", "selamat tinggal", "selamat tinggal", "au revoir", "adiós"),
              emoji: "👋"
            },
            {
              id: "uae-g1u1l1-v6",
              arabic: "شُكْراً",
              transliteration: "shukran",
              translation: t("شُكْراً", "thank you", "terima kasih", "terima kasih", "merci", "gracias"),
              emoji: "🙏"
            },
            {
              id: "uae-g1u1l1-v7",
              arabic: "عَفْواً",
              transliteration: "ʿafwan",
              translation: t("عَفْواً", "you're welcome / sorry", "sama-sama / maaf", "sama-sama / maaf", "de rien / pardon", "de nada / perdón"),
              emoji: "😊"
            },
            {
              id: "uae-g1u1l1-v8",
              arabic: "مَعَ السَّلَامَةِ",
              transliteration: "maʿa al-salāmah",
              translation: t("مَعَ السَّلَامَةِ", "goodbye (go safely)", "selamat jalan", "selamat jalan", "au revoir (partez en sécurité)", "que te vaya bien"),
              emoji: "🚶"
            },
            {
              id: "uae-g1u1l1-v9",
              arabic: "كَيْفَ حَالُكَ؟",
              transliteration: "kayfa ḥāluka?",
              translation: t("كَيْفَ حَالُكَ؟", "how are you?", "apa khabar?", "apa kabar?", "comment vas-tu ?", "¿cómo estás?"),
              emoji: "❓"
            },
            {
              id: "uae-g1u1l1-v10",
              arabic: "بِخَيْرٍ",
              transliteration: "bikhayrin",
              translation: t("بِخَيْرٍ", "fine / well", "baik", "baik", "bien", "bien"),
              emoji: "👍"
            }
          ],
          dialogue: [
            {
              speaker: "سَارَة",
              arabic: "مَرْحَباً! أَنَا سَارَة.",
              translation: t("مَرْحَباً! أَنَا سَارَة.", "Hello! I am Sara.", "Hello! Saya Sara.", "Halo! Saya Sara.", "Bonjour ! Je suis Sara.", "¡Hola! Soy Sara.")
            },
            {
              speaker: "يُوسُف",
              arabic: "أَهْلاً يَا سَارَة! أَنَا يُوسُف.",
              translation: t("أَهْلاً يَا سَارَة! أَنَا يُوسُف.", "Welcome Sara! I am Yusuf.", "Selamat datang Sara! Saya Yusuf.", "Selamat datang Sara! Saya Yusuf.", "Bienvenue Sara ! Je suis Yusuf.", "¡Bienvenida Sara! Soy Yusuf.")
            },
            {
              speaker: "كِلَاهُمَا",
              arabic: "صَبَاحُ الخَيْرِ!",
              translation: t("صَبَاحُ الخَيْرِ!", "Good morning!", "Selamat pagi!", "Selamat pagi!", "Bonjour !", "¡Buenos días!")
            }
          ],
          exercises: [
            {
              id: "uae-g1u1l1-e1",
              type: "listening",
              skill: "listening",
              prompt: t("مَاذَا تَعْنِي كَلِمَة مَرْحَباً؟", "What does مَرْحَباً mean?", "Apakah maksud مَرْحَباً?", "Apa arti مَرْحَباً?", "Que signifie مَرْحَباً ?", "¿Qué significa مَرْحَباً?"),
              arabicText: "مَرْحَباً",
              options: [
                "hello",
                "goodbye",
                "thank you",
                "yes"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f64b/512.webp"
            },
            {
              id: "uae-g1u1l1-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلْ التَّحِيَّةَ بِوَقْتِ الْيَوْمِ", "Match the greeting to the time of day", "Padankan ucapan dengan waktu hari", "Cocokkan salam dengan waktu hari", "Associe le salut au moment de la journée", "Relaciona el saludo con la hora del día"),
              pairs: [
                {
                  a: "صَبَاحُ الخَيْرِ",
                  b: "🌅 morning"
                },
                {
                  a: "مَسَاءُ الخَيْرِ",
                  b: "🌆 evening"
                },
                {
                  a: "مَرْحَباً",
                  b: "🙋 anytime"
                },
                {
                  a: "وَدَاعاً",
                  b: "👋 leaving"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f64b/512.webp"
            },
            {
              id: "uae-g1u1l1-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلِ التَّحِيَّةَ مَرْحَباً بِصَوْتٍ وَاضِح", "Say the greeting مَرْحَباً clearly", "Sebut salam مَرْحَباً dengan jelas", "Ucapkan salam مَرْحَباً dengan jelas", "Dis le salut مَرْحَباً clairement", "Di el saludo مَرْحَباً claramente"),
              arabicText: "مَرْحَباً",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f64b/512.webp"
            },
            {
              id: "uae-g1u1l1-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة وَدَاعاً", "Write the word وَدَاعاً", "Tulis perkataan وَدَاعاً", "Tulis kata وَدَاعاً", "Écris le mot وَدَاعاً", "Escribe la palabra وَدَاعاً"),
              arabicText: "وَدَاعاً",
              answer: "وَدَاعاً",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp"
            },
            {
              id: "uae-g1u1l1-e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَاذَا تَقُولُ عِنْدَمَا تَشْكُرُ شَخْصاً؟", "What do you say when you thank someone?", "Apa yang anda katakan ketika berterima kasih?", "Apa yang kamu katakan ketika mengucapkan terima kasih?", "Que dis-tu quand tu remercies quelqu'un ?", "¿Qué dices cuando agradeces a alguien?"),
              options: [
                "وَدَاعاً",
                "شُكْراً",
                "مَرْحَباً",
                "مَسَاءُ الخَيْرِ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f64b/512.webp"
            },
            {
              id: "uae-g1u1l1-e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ التَّحِيَّةَ بِمَعْنَاهَا", "Match each greeting to its meaning", "Padankan setiap salam dengan maknanya", "Cocokkan setiap salam dengan artinya", "Associe chaque salutation à sa signification", "Relaciona cada saludo con su significado"),
              pairs: [
                {
                  a: "شُكْراً",
                  b: "thank you"
                },
                {
                  a: "عَفْواً",
                  b: "you're welcome"
                },
                {
                  a: "بِخَيْرٍ",
                  b: "fine"
                },
                {
                  a: "كَيْفَ حَالُكَ؟",
                  b: "how are you?"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f64b/512.webp"
            },
            {
              id: "uae-g1u1l1-e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ كَيْفَ حَالُكَ وَأَجِبْ بِبِخَيْرٍ", "Ask 'how are you?' and answer 'fine'", "Tanya 'apa khabar?' dan jawab 'baik'", "Tanya 'apa kabar?' dan jawab 'baik'", "Demande 'comment vas-tu ?' et réponds 'bien'", "Pregunta '¿cómo estás?' y responde 'bien'"),
              arabicText: "كَيْفَ حَالُكَ؟ — بِخَيْرٍ، شُكْراً!",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f64f/512.webp"
            },
            {
              id: "uae-g1u1l1-e8",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة شُكْراً", "Write the word شُكْراً", "Tulis perkataan شُكْراً", "Tulis kata شُكْراً", "Écris le mot شُكْراً", "Escribe la palabra شُكْراً"),
              arabicText: "شُكْراً",
              answer: "شُكْراً",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f64f/512.webp"
            },
            {
              id: "uae-g1u1l1e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "مَرْحَباً! أَنَا سَارَة",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f64b/512.webp"
            },
            {
              id: "uae-g1u1l1writeuae-g1u1l1-v4",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"مَسَاءُ الخَيْرِ\"", "Type the Arabic word for: \"good evening\"", "Taip perkataan Arab untuk: \"selamat petang\"", "Ketik kata Arab untuk: \"selamat petang\"", "Tape le mot arabe pour : \"bonsoir\"", "Escribe la palabra árabe para: \"buenas tardes\""),
              arabicText: "مَسَاءُ الخَيْرِ",
              answer: "مَسَاءُ الخَيْرِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f306/512.webp"
            },
            {
              id: "uae-g1u1l1mcquae-g1u1l1-v3",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"صَبَاحُ الخَيْرِ\"؟", "What does \"good morning\" mean?", "Apakah maksud \"selamat pagi\"?", "Apa arti \"selamat pagi\"?", "Que signifie \"bonjour\" ?", "¿Qué significa \"buenos días\"?"),
              arabicText: "صَبَاحُ الخَيْرِ",
              options: [
                "good morning",
                "diamond / rhombus",
                "white",
                "sad"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f305/512.webp"
            },
            {
              id: "uae-g1u1l1mcquae-g1u1l1-v10",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"بِخَيْرٍ\"؟", "What does \"fine / well\" mean?", "Apakah maksud \"baik\"?", "Apa arti \"baik\"?", "Que signifie \"bien\" ?", "¿Qué significa \"bien\"?"),
              arabicText: "بِخَيْرٍ",
              options: [
                "defense",
                "road/way",
                "moon",
                "fine / well"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f44d/512.webp"
            }
          ]
        },
        {
          id: "uae-g1u1l2",
          unitId: "uae-g1u1",
          gradeId: "uae-g1",
          order: 2,
          title: t("أَلْوَانٌ", "Colors", "Warna", "Warna", "Les couleurs", "Los colores"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("هيا نتعرف على الألوان الجميلة!", "Let's learn the beautiful colors!", "Jom kenal warna-warna yang cantik!", "Ayo mengenal warna-warna yang indah!", "Découvrons les belles couleurs !", "¡Conozcamos los hermosos colores!"),
          vocabulary: [
            {
              id: "uae-g1u1l2-v1",
              arabic: "أَحْمَرُ",
              transliteration: "aḥmaru",
              translation: t("أَحْمَرُ", "red", "merah", "merah", "rouge", "rojo"),
              emoji: "🔴"
            },
            {
              id: "uae-g1u1l2-v2",
              arabic: "أَزْرَقُ",
              transliteration: "azraqu",
              translation: t("أَزْرَقُ", "blue", "biru", "biru", "bleu", "azul"),
              emoji: "🔵"
            },
            {
              id: "uae-g1u1l2-v3",
              arabic: "أَصْفَرُ",
              transliteration: "aṣfaru",
              translation: t("أَصْفَرُ", "yellow", "kuning", "kuning", "jaune", "amarillo"),
              emoji: "🟡"
            },
            {
              id: "uae-g1u1l2-v4",
              arabic: "أَخْضَرُ",
              transliteration: "akhḍaru",
              translation: t("أَخْضَرُ", "green", "hijau", "hijau", "vert", "verde"),
              emoji: "🟢"
            },
            {
              id: "uae-g1u1l2-v5",
              arabic: "أَبْيَضُ",
              transliteration: "abyaḍu",
              translation: t("أَبْيَضُ", "white", "putih", "putih", "blanc", "blanco"),
              emoji: "⚪"
            },
            {
              id: "uae-g1u1l2-v6",
              arabic: "أَسْوَدُ",
              transliteration: "aswadu",
              translation: t("أَسْوَدُ", "black", "hitam", "hitam", "noir", "negro"),
              emoji: "⚫"
            },
            {
              id: "uae-g1u1l2-v7",
              arabic: "بُرْتُقَالِيٌّ",
              transliteration: "burtuqāliyyun",
              translation: t("بُرْتُقَالِيٌّ", "orange", "oren", "jingga/oranye", "orange", "naranja"),
              emoji: "🟠"
            },
            {
              id: "uae-g1u1l2-v8",
              arabic: "بَنَفْسَجِيٌّ",
              transliteration: "banafsajiyyun",
              translation: t("بَنَفْسَجِيٌّ", "purple", "ungu", "ungu", "violet", "morado"),
              emoji: "🟣"
            },
            {
              id: "uae-g1u1l2-v9",
              arabic: "وَرْدِيٌّ",
              transliteration: "wardiyyun",
              translation: t("وَرْدِيٌّ", "pink", "merah jambu", "merah muda", "rose", "rosa"),
              emoji: "🩷"
            },
            {
              id: "uae-g1u1l2-v10",
              arabic: "بُنِّيٌّ",
              transliteration: "bunniyyun",
              translation: t("بُنِّيٌّ", "brown", "coklat", "coklat", "marron", "marrón"),
              emoji: "🟫"
            }
          ],
          dialogue: [
            {
              speaker: "الْمُعَلِّمَةُ",
              arabic: "مَا لَوْنُ السَّمَاءِ؟",
              translation: t("مَا لَوْنُ السَّمَاءِ؟", "What color is the sky?", "Apa warna langit?", "Apa warna langit?", "De quelle couleur est le ciel ?", "¿De qué color es el cielo?")
            },
            {
              speaker: "الطُّلَّابُ",
              arabic: "السَّمَاءُ زَرْقَاءُ!",
              translation: t("السَّمَاءُ زَرْقَاءُ!", "The sky is blue!", "Langit biru!", "Langit berwarna biru!", "Le ciel est bleu !", "¡El cielo es azul!")
            },
            {
              speaker: "الْمُعَلِّمَةُ",
              arabic: "أَحْسَنْتُمْ! وَمَا لَوْنُ الشَّمْسِ؟",
              translation: t("أَحْسَنْتُمْ! وَمَا لَوْنُ الشَّمْسِ؟", "Well done! And what color is the sun?", "Bagus! Dan apa warna matahari?", "Bagus! Dan apa warna matahari?", "Bravo ! Et de quelle couleur est le soleil ?", "¡Bien hecho! ¿Y de qué color es el sol?")
            }
          ],
          exercises: [
            {
              id: "uae-g1u1l2-e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ اللَّوْنَ الصَّحِيح", "Listen and choose the correct color", "Dengar dan pilih warna yang betul", "Dengarkan dan pilih warna yang benar", "Écoute et choisis la bonne couleur", "Escucha y elige el color correcto"),
              arabicText: "أَحْمَرُ",
              options: [
                "أَزْرَقُ",
                "أَحْمَرُ",
                "أَصْفَرُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f534/512.webp"
            },
            {
              id: "uae-g1u1l2-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلْ اللَّوْنَ بِالرَّمْزِ", "Match the color to the emoji", "Padankan warna dengan emoji", "Cocokkan warna dengan emoji", "Associe la couleur à l'emoji", "Relaciona el color con el emoji"),
              pairs: [
                {
                  a: "أَحْمَرُ",
                  b: "🔴"
                },
                {
                  a: "أَزْرَقُ",
                  b: "🔵"
                },
                {
                  a: "أَصْفَرُ",
                  b: "🟡"
                },
                {
                  a: "أَخْضَرُ",
                  b: "🟢"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f534/512.webp"
            },
            {
              id: "uae-g1u1l2-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلِ اسْمَ اللَّوْنِ بِصَوْتٍ وَاضِح", "Say the color name clearly", "Sebut nama warna dengan jelas", "Ucapkan nama warna dengan jelas", "Dis le nom de la couleur clairement", "Di el nombre del color claramente"),
              arabicText: "أَخْضَرُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f7e2/512.webp"
            },
            {
              id: "uae-g1u1l2-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة أَبْيَضُ", "Write the word أَبْيَضُ", "Tulis perkataan أَبْيَضُ", "Tulis kata أَبْيَضُ", "Écris le mot أَبْيَضُ", "Escribe la palabra أَبْيَضُ"),
              arabicText: "أَبْيَضُ",
              answer: "أَبْيَضُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26aa/512.webp"
            },
            {
              id: "uae-g1u1l2-e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا لَوْنُ السَّمَاءِ الصَّافِيَة؟", "What color is the clear sky?", "Apa warna langit yang cerah?", "Apa warna langit yang cerah?", "De quelle couleur est le ciel bleu ?", "¿De qué color es el cielo despejado?"),
              options: [
                "أَحْمَرُ",
                "أَصْفَرُ",
                "أَزْرَقُ",
                "أَخْضَرُ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f534/512.webp"
            },
            {
              id: "uae-g1u1l2-e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الأَلْوَانَ الجَدِيدَة بِرُمُوزِهَا", "Match the new colors to their emojis", "Padankan warna baru dengan emoji", "Cocokkan warna baru dengan emoji", "Associe les nouvelles couleurs à leurs emojis", "Relaciona los nuevos colores con sus emojis"),
              pairs: [
                {
                  a: "أَسْوَدُ",
                  b: "⚫"
                },
                {
                  a: "بُرْتُقَالِيٌّ",
                  b: "🟠"
                },
                {
                  a: "بَنَفْسَجِيٌّ",
                  b: "🟣"
                },
                {
                  a: "بُنِّيٌّ",
                  b: "🟫"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f534/512.webp"
            },
            {
              id: "uae-g1u1l2-e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("اذْكُرِ الأَلْوَانَ الَّتِي تَعَلَّمْتَهَا", "Name the colors you have learned", "Sebut warna-warna yang telah kamu pelajari", "Sebutkan warna-warna yang telah kamu pelajari", "Nomme les couleurs que tu as apprises", "Nombra los colores que aprendiste"),
              arabicText: "أَحْمَرُ، أَزْرَقُ، أَصْفَرُ، أَخْضَرُ، أَبْيَضُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f534/512.webp"
            },
            {
              id: "uae-g1u1l2-e8",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة أَسْوَدُ", "Write the word أَسْوَدُ", "Tulis perkataan أَسْوَدُ", "Tulis kata أَسْوَدُ", "Écris le mot أَسْوَدُ", "Escribe la palabra أَسْوَدُ"),
              arabicText: "أَسْوَدُ",
              answer: "أَسْوَدُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26ab/512.webp"
            },
            {
              id: "uae-g1u1l2e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "مَا لَوْنُ السَّمَاءِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f534/512.webp"
            },
            {
              id: "uae-g1u1l2listenuae-g1u1l2-v3",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "أَصْفَرُ",
              options: [
                "أَصْفَرُ",
                "بَيْضٌ",
                "دَائِرَةٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f7e1/512.webp"
            },
            {
              id: "uae-g1u1l2arrange1",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "مَا لَوْنُ السَّمَاءِ؟",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f534/512.webp"
            },
            {
              id: "uae-g1u1l2listenuae-g1u1l2-v9",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "وَرْدِيٌّ",
              options: [
                "طَاوُوسٌ",
                "قَمَرٌ",
                "وَرْدِيٌّ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1fa77/512.webp"
            }
          ]
        },
        {
          id: "uae-g1u1l3",
          unitId: "uae-g1u1",
          gradeId: "uae-g1",
          order: 3,
          title: t("الْمَشَاعِرُ", "Feelings", "Perasaan", "Perasaan", "Les émotions", "Los sentimientos"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("كَيْفَ تَشْعُرُ الْيَوْمَ؟ هيا نَتَعَلَّمُ كَلِمَاتِ الْمَشَاعِر!", "How do you feel today? Let's learn feeling words!", "Bagaimana perasaan anda hari ini? Jom belajar perkataan perasaan!", "Bagaimana perasaanmu hari ini? Ayo belajar kata-kata perasaan!", "Comment te sens-tu aujourd'hui ? Apprenons les mots des émotions !", "¿Cómo te sientes hoy? ¡Aprendamos palabras de sentimientos!"),
          vocabulary: [
            {
              id: "uae-g1u1l3-v1",
              arabic: "سَعِيدٌ",
              transliteration: "saʿīdun",
              translation: t("سَعِيدٌ", "happy", "gembira", "senang", "heureux", "feliz"),
              emoji: "😊"
            },
            {
              id: "uae-g1u1l3-v2",
              arabic: "حَزِينٌ",
              transliteration: "ḥazīnun",
              translation: t("حَزِينٌ", "sad", "sedih", "sedih", "triste", "triste"),
              emoji: "😢"
            },
            {
              id: "uae-g1u1l3-v3",
              arabic: "خَائِفٌ",
              transliteration: "khāʾifun",
              translation: t("خَائِفٌ", "scared", "takut", "takut", "effrayé", "asustado"),
              emoji: "😨"
            },
            {
              id: "uae-g1u1l3-v4",
              arabic: "غَاضِبٌ",
              transliteration: "ghāḍibun",
              translation: t("غَاضِبٌ", "angry", "marah", "marah", "en colère", "enojado"),
              emoji: "😠"
            },
            {
              id: "uae-g1u1l3-v5",
              arabic: "مُتَعَجِّبٌ",
              transliteration: "mutaʿajjibun",
              translation: t("مُتَعَجِّبٌ", "surprised", "terkejut", "terkejut", "surpris", "sorprendido"),
              emoji: "😲"
            },
            {
              id: "uae-g1u1l3-v6",
              arabic: "مُتْعَبٌ",
              transliteration: "mutʿabun",
              translation: t("مُتْعَبٌ", "tired", "penat", "lelah", "fatigué", "cansado"),
              emoji: "😴"
            },
            {
              id: "uae-g1u1l3-v7",
              arabic: "جَائِعٌ",
              transliteration: "jāʾiʿun",
              translation: t("جَائِعٌ", "hungry", "lapar", "lapar", "affamé", "hambriento"),
              emoji: "🍽️"
            },
            {
              id: "uae-g1u1l3-v8",
              arabic: "مَرِيضٌ",
              transliteration: "marīḍun",
              translation: t("مَرِيضٌ", "sick", "sakit", "sakit", "malade", "enfermo"),
              emoji: "🤒"
            },
            {
              id: "uae-g1u1l3-v9",
              arabic: "فَرْحَانٌ",
              transliteration: "farḥānun",
              translation: t("فَرْحَانٌ", "joyful", "riang", "gembira", "joyeux", "alegre"),
              emoji: "🥳"
            },
            {
              id: "uae-g1u1l3-v10",
              arabic: "خَجُولٌ",
              transliteration: "khajūlun",
              translation: t("خَجُولٌ", "shy", "pemalu", "pemalu", "timide", "tímido"),
              emoji: "😳"
            }
          ],
          dialogue: [
            {
              speaker: "أَحْمَد",
              arabic: "كَيْفَ حَالُكَ يَا لَيْلَى؟",
              translation: t("كَيْفَ حَالُكَ يَا لَيْلَى؟", "How are you Layla?", "Apa khabar Layla?", "Apa kabar Layla?", "Comment vas-tu Layla ?", "¿Cómo estás Layla?")
            },
            {
              speaker: "لَيْلَى",
              arabic: "أَنَا سَعِيدَةٌ الْيَوْمَ!",
              translation: t("أَنَا سَعِيدَةٌ الْيَوْمَ!", "I am happy today!", "Saya gembira hari ini!", "Saya senang hari ini!", "Je suis heureuse aujourd'hui !", "¡Estoy feliz hoy!")
            },
            {
              speaker: "أَحْمَد",
              arabic: "أَنَا أَيْضاً سَعِيدٌ!",
              translation: t("أَنَا أَيْضاً سَعِيدٌ!", "I am also happy!", "Saya juga gembira!", "Saya juga senang!", "Je suis aussi heureux !", "¡Yo también estoy feliz!")
            }
          ],
          exercises: [
            {
              id: "uae-g1u1l3-e1",
              type: "mcq",
              skill: "reading",
              prompt: t("مَاذَا يَعْنِي سَعِيدٌ؟", "What does سَعِيدٌ mean?", "Apa maksud سَعِيدٌ?", "Apa arti سَعِيدٌ?", "Que signifie سَعِيدٌ ?", "¿Qué significa سَعِيدٌ?"),
              options: [
                "sad",
                "angry",
                "happy",
                "scared"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60a/512.webp"
            },
            {
              id: "uae-g1u1l3-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الشُّعُورَ بِالرَّمْزِ", "Match the feeling to its emoji", "Padankan perasaan dengan emoji", "Cocokkan perasaan dengan emoji", "Associe l'émotion à son emoji", "Relaciona el sentimiento con su emoji"),
              pairs: [
                {
                  a: "سَعِيدٌ",
                  b: "😊"
                },
                {
                  a: "حَزِينٌ",
                  b: "😢"
                },
                {
                  a: "غَاضِبٌ",
                  b: "😠"
                },
                {
                  a: "خَائِفٌ",
                  b: "😨"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60a/512.webp"
            },
            {
              id: "uae-g1u1l3-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ كَيْفَ تَشْعُرُ الْيَوْمَ", "Say how you feel today", "Sebut bagaimana perasaan anda hari ini", "Katakan bagaimana perasaanmu hari ini", "Dis comment tu te sens aujourd'hui", "Di cómo te sientes hoy"),
              arabicText: "أَنَا سَعِيدٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60a/512.webp"
            },
            {
              id: "uae-g1u1l3-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة حَزِينٌ", "Write the word حَزِينٌ", "Tulis perkataan حَزِينٌ", "Tulis kata حَزِينٌ", "Écris le mot حَزِينٌ", "Escribe la palabra حَزِينٌ"),
              arabicText: "حَزِينٌ",
              answer: "حَزِينٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f622/512.webp"
            },
            {
              id: "uae-g1u1l3-e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَاذَا تَشْعُرُ عِنْدَمَا تَكُونُ بِلَا طَعَام؟", "How do you feel when you have no food?", "Bagaimana perasaan kamu ketika tiada makanan?", "Bagaimana perasaanmu ketika tidak ada makanan?", "Comment te sens-tu quand tu n'as pas de nourriture ?", "¿Cómo te sientes cuando no tienes comida?"),
              options: [
                "فَرْحَانٌ",
                "جَائِعٌ",
                "خَجُولٌ",
                "مُتَعَجِّبٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60a/512.webp"
            },
            {
              id: "uae-g1u1l3-e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الشُّعُورَ الجَدِيدَ بِرَمْزِهِ", "Match the new feeling to its emoji", "Padankan perasaan baru dengan emoji", "Cocokkan perasaan baru dengan emoji", "Associe la nouvelle émotion à son emoji", "Relaciona el nuevo sentimiento con su emoji"),
              pairs: [
                {
                  a: "مُتْعَبٌ",
                  b: "😴"
                },
                {
                  a: "جَائِعٌ",
                  b: "🍽️"
                },
                {
                  a: "مَرِيضٌ",
                  b: "🤒"
                },
                {
                  a: "فَرْحَانٌ",
                  b: "🥳"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60a/512.webp"
            },
            {
              id: "uae-g1u1l3-e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("مَثِّلِ الْمَشَاعِرَ التَّالِيَة: سَعِيدٌ، حَزِينٌ، غَاضِبٌ", "Act out the feelings: happy, sad, angry", "Lakonkan perasaan: gembira, sedih, marah", "Peragakan perasaan: senang, sedih, marah", "Mime les émotions : heureux, triste, en colère", "Actúa los sentimientos: feliz, triste, enojado"),
              arabicText: "سَعِيدٌ — حَزِينٌ — غَاضِبٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60a/512.webp"
            },
            {
              id: "uae-g1u1l3-e8",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة مَرِيضٌ", "Write the word مَرِيضٌ", "Tulis perkataan مَرِيضٌ", "Tulis kata مَرِيضٌ", "Écris le mot مَرِيضٌ", "Escribe la palabra مَرِيضٌ"),
              arabicText: "مَرِيضٌ",
              answer: "مَرِيضٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f912/512.webp"
            },
            {
              id: "uae-g1u1l3e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "كَيْفَ حَالُكَ يَا لَيْلَى",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60a/512.webp"
            },
            {
              id: "uae-g1u1l3writeuae-g1u1l3-v7",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"جَائِعٌ\"", "Type the Arabic word for: \"hungry\"", "Taip perkataan Arab untuk: \"lapar\"", "Ketik kata Arab untuk: \"lapar\"", "Tape le mot arabe pour : \"affamé\"", "Escribe la palabra árabe para: \"hambriento\""),
              arabicText: "جَائِعٌ",
              answer: "جَائِعٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f37d-fe0f/512.webp"
            },
            {
              id: "uae-g1u1l3writeuae-g1u1l3-v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"سَعِيدٌ\"", "Type the Arabic word for: \"happy\"", "Taip perkataan Arab untuk: \"gembira\"", "Ketik kata Arab untuk: \"senang\"", "Tape le mot arabe pour : \"heureux\"", "Escribe la palabra árabe para: \"feliz\""),
              arabicText: "سَعِيدٌ",
              answer: "سَعِيدٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60a/512.webp"
            },
            {
              id: "uae-g1u1l3speakuae-g1u1l3-v2",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "حَزِينٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f622/512.webp"
            }
          ]
        },
        {
          id: "uae-g1u1l4",
          unitId: "uae-g1u1",
          gradeId: "uae-g1",
          order: 4,
          title: t("أَرْقَامٌ", "Numbers 1-5", "Nombor 1-5", "Angka 1-5", "Nombres 1-5", "Números 1-5"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("هيا نَعُدَّ مِنْ وَاحِدٍ إِلَى خَمْسَة!", "Let's count from one to five!", "Jom kira dari satu hingga lima!", "Ayo berhitung dari satu sampai lima!", "Comptons de un à cinq !", "¡Contemos del uno al cinco!"),
          vocabulary: [
            {
              id: "uae-g1u1l4-v1",
              arabic: "وَاحِدٌ",
              transliteration: "wāḥidun",
              translation: t("وَاحِدٌ", "one", "satu", "satu", "un", "uno"),
              emoji: "1️⃣"
            },
            {
              id: "uae-g1u1l4-v2",
              arabic: "اثْنَانِ",
              transliteration: "ithnayn",
              translation: t("اثْنَانِ", "two", "dua", "dua", "deux", "dos"),
              emoji: "2️⃣"
            },
            {
              id: "uae-g1u1l4-v3",
              arabic: "ثَلَاثَةٌ",
              transliteration: "thalāthah",
              translation: t("ثَلَاثَةٌ", "three", "tiga", "tiga", "trois", "tres"),
              emoji: "3️⃣"
            },
            {
              id: "uae-g1u1l4-v4",
              arabic: "أَرْبَعَةٌ",
              transliteration: "arbaʿah",
              translation: t("أَرْبَعَةٌ", "four", "empat", "empat", "quatre", "cuatro"),
              emoji: "4️⃣"
            },
            {
              id: "uae-g1u1l4-v5",
              arabic: "خَمْسَةٌ",
              transliteration: "khamsah",
              translation: t("خَمْسَةٌ", "five", "lima", "lima", "cinq", "cinco"),
              emoji: "5️⃣"
            },
            {
              id: "uae-g1u1l4-v6",
              arabic: "سِتَّةٌ",
              transliteration: "sittah",
              translation: t("سِتَّةٌ", "six", "enam", "enam", "six", "seis"),
              emoji: "6️⃣"
            },
            {
              id: "uae-g1u1l4-v7",
              arabic: "سَبْعَةٌ",
              transliteration: "sabʿah",
              translation: t("سَبْعَةٌ", "seven", "tujuh", "tujuh", "sept", "siete"),
              emoji: "7️⃣"
            },
            {
              id: "uae-g1u1l4-v8",
              arabic: "ثَمَانِيَةٌ",
              transliteration: "thamāniyah",
              translation: t("ثَمَانِيَةٌ", "eight", "lapan", "delapan", "huit", "ocho"),
              emoji: "8️⃣"
            },
            {
              id: "uae-g1u1l4-v9",
              arabic: "تِسْعَةٌ",
              transliteration: "tisʿah",
              translation: t("تِسْعَةٌ", "nine", "sembilan", "sembilan", "neuf", "nueve"),
              emoji: "9️⃣"
            },
            {
              id: "uae-g1u1l4-v10",
              arabic: "عَشَرَةٌ",
              transliteration: "ʿasharah",
              translation: t("عَشَرَةٌ", "ten", "sepuluh", "sepuluh", "dix", "diez"),
              emoji: "🔟"
            }
          ],
          dialogue: [
            {
              speaker: "الْمُعَلِّمَةُ",
              arabic: "كَمْ قَلَماً عِنْدَكَ؟",
              translation: t("كَمْ قَلَماً عِنْدَكَ؟", "How many pencils do you have?", "Berapa banyak pensel yang kamu ada?", "Berapa pensil yang kamu punya?", "Combien de crayons as-tu ?", "¿Cuántos lápices tienes?")
            },
            {
              speaker: "عُمَر",
              arabic: "عِنْدِي ثَلَاثَةُ أَقْلَامٍ.",
              translation: t("عِنْدِي ثَلَاثَةُ أَقْلَامٍ.", "I have three pencils.", "Saya ada tiga pensel.", "Saya punya tiga pensil.", "J'ai trois crayons.", "Tengo tres lápices.")
            },
            {
              speaker: "الْمُعَلِّمَةُ",
              arabic: "مُمْتَازٌ! وَكَمْ كِتَاباً؟",
              translation: t("مُمْتَازٌ! وَكَمْ كِتَاباً؟", "Excellent! And how many books?", "Cemerlang! Dan berapa banyak buku?", "Bagus! Dan berapa buku?", "Excellent ! Et combien de livres ?", "¡Excelente! ¿Y cuántos libros?")
            }
          ],
          exercises: [
            {
              id: "uae-g1u1l4-e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الرَّقْمَ الصَّحِيح", "Listen and choose the correct number", "Dengar dan pilih nombor yang betul", "Dengarkan dan pilih angka yang benar", "Écoute et choisis le bon nombre", "Escucha y elige el número correcto"),
              arabicText: "ثَلَاثَةٌ",
              options: [
                "وَاحِدٌ",
                "اثْنَانِ",
                "ثَلَاثَةٌ",
                "أَرْبَعَةٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/33-fe0f-20e3/512.webp"
            },
            {
              id: "uae-g1u1l4-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الرَّقْمَ بِالْكَلِمَة", "Match the numeral to the word", "Padankan nombor dengan perkataan", "Cocokkan angka dengan kata", "Associe le chiffre au mot", "Relaciona el número con la palabra"),
              pairs: [
                {
                  a: "١",
                  b: "وَاحِدٌ"
                },
                {
                  a: "٢",
                  b: "اثْنَانِ"
                },
                {
                  a: "٣",
                  b: "ثَلَاثَةٌ"
                },
                {
                  a: "٥",
                  b: "خَمْسَةٌ"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "uae-g1u1l4-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("عُدَّ مِنْ وَاحِد إِلَى خَمْسَة", "Count from one to five", "Kira dari satu hingga lima", "Hitung dari satu sampai lima", "Compte de un à cinq", "Cuenta del uno al cinco"),
              arabicText: "وَاحِدٌ، اثْنَانِ، ثَلَاثَةٌ، أَرْبَعَةٌ، خَمْسَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "uae-g1u1l4-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة خَمْسَةٌ", "Write the word خَمْسَةٌ", "Tulis perkataan خَمْسَةٌ", "Tulis kata خَمْسَةٌ", "Écris le mot خَمْسَةٌ", "Escribe la palabra خَمْسَةٌ"),
              arabicText: "خَمْسَةٌ",
              answer: "خَمْسَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/35-fe0f-20e3/512.webp"
            },
            {
              id: "uae-g1u1l4-e5",
              type: "mcq",
              skill: "reading",
              prompt: t("كَمْ يُسَاوِي خَمْسَةٌ زَائِدَ خَمْسَة؟", "How much is five plus five?", "Berapa lima tambah lima?", "Berapa lima ditambah lima?", "Combien font cinq plus cinq ?", "¿Cuánto es cinco más cinco?"),
              options: [
                "سِتَّةٌ",
                "سَبْعَةٌ",
                "ثَمَانِيَةٌ",
                "عَشَرَةٌ"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "uae-g1u1l4-e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الأَرْقَامَ الجَدِيدَة بِكَلِمَاتِهَا", "Match the new numbers to their words", "Padankan nombor baru dengan perkataannya", "Cocokkan angka baru dengan katanya", "Associe les nouveaux chiffres à leurs mots", "Relaciona los nuevos números con sus palabras"),
              pairs: [
                {
                  a: "٦",
                  b: "سِتَّةٌ"
                },
                {
                  a: "٧",
                  b: "سَبْعَةٌ"
                },
                {
                  a: "٨",
                  b: "ثَمَانِيَةٌ"
                },
                {
                  a: "١٠",
                  b: "عَشَرَةٌ"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "uae-g1u1l4-e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("عُدَّ مِنْ سِتَّة إِلَى عَشَرَة", "Count from six to ten", "Kira dari enam hingga sepuluh", "Hitung dari enam sampai sepuluh", "Compte de six à dix", "Cuenta del seis al diez"),
              arabicText: "سِتَّةٌ، سَبْعَةٌ، ثَمَانِيَةٌ، تِسْعَةٌ، عَشَرَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/36-fe0f-20e3/512.webp"
            },
            {
              id: "uae-g1u1l4-e8",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة عَشَرَةٌ", "Write the word عَشَرَةٌ", "Tulis perkataan عَشَرَةٌ", "Tulis kata عَشَرَةٌ", "Écris le mot عَشَرَةٌ", "Escribe la palabra عَشَرَةٌ"),
              arabicText: "عَشَرَةٌ",
              answer: "عَشَرَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f51f/512.webp"
            },
            {
              id: "uae-g1u1l4e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "كَمْ قَلَماً عِنْدَكَ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "uae-g1u1l4spelluae-g1u1l4-v2",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "اثْنَانِ",
              answer: "اثْنَانِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/32-fe0f-20e3/512.webp"
            },
            {
              id: "uae-g1u1l4writeuae-g1u1l4-v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"وَاحِدٌ\"", "Type the Arabic word for: \"one\"", "Taip perkataan Arab untuk: \"satu\"", "Ketik kata Arab untuk: \"satu\"", "Tape le mot arabe pour : \"un\"", "Escribe la palabra árabe para: \"uno\""),
              arabicText: "وَاحِدٌ",
              answer: "وَاحِدٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "uae-g1u1l4mcquae-g1u1l4-v3",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"ثَلَاثَةٌ\"؟", "What does \"three\" mean?", "Apakah maksud \"tiga\"?", "Apa arti \"tiga\"?", "Que signifie \"trois\" ?", "¿Qué significa \"tres\"?"),
              arabicText: "ثَلَاثَةٌ",
              options: [
                "three",
                "rice",
                "tent",
                "cold"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/33-fe0f-20e3/512.webp"
            }
          ]
        },
        {
          id: "uae-g1u1l5",
          unitId: "uae-g1u1",
          gradeId: "uae-g1",
          order: 5,
          title: t("أَشْكَالٌ", "Shapes", "Bentuk", "Bentuk", "Les formes", "Las formas"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الْأَشْكَالُ فِي كُلِّ مَكَان! هيا نَتَعَرَّفُ عَلَيْهَا!", "Shapes are everywhere! Let's get to know them!", "Bentuk ada di mana-mana! Jom kenali mereka!", "Bentuk ada di mana-mana! Ayo mengenalinya!", "Les formes sont partout ! Apprenons à les reconnaître !", "¡Las formas están en todas partes! ¡Conozcámoslas!"),
          vocabulary: [
            {
              id: "uae-g1u1l5-v1",
              arabic: "مُثَلَّثٌ",
              transliteration: "muthallathun",
              translation: t("مُثَلَّثٌ", "triangle", "segi tiga", "segitiga", "triangle", "triángulo"),
              emoji: "🔺"
            },
            {
              id: "uae-g1u1l5-v2",
              arabic: "مُرَبَّعٌ",
              transliteration: "murabbаʿun",
              translation: t("مُرَبَّعٌ", "square", "segi empat sama", "persegi", "carré", "cuadrado"),
              emoji: "🟥"
            },
            {
              id: "uae-g1u1l5-v3",
              arabic: "دَائِرَةٌ",
              transliteration: "dāʾiratun",
              translation: t("دَائِرَةٌ", "circle", "bulatan", "lingkaran", "cercle", "círculo"),
              emoji: "⭕"
            },
            {
              id: "uae-g1u1l5-v4",
              arabic: "مُسْتَطِيلٌ",
              transliteration: "mustaṭīlun",
              translation: t("مُسْتَطِيلٌ", "rectangle", "segi empat tepat", "persegi panjang", "rectangle", "rectángulo"),
              emoji: "▬"
            },
            {
              id: "uae-g1u1l5-v5",
              arabic: "نَجْمَةٌ",
              transliteration: "najmah",
              translation: t("نَجْمَةٌ", "star", "bintang", "bintang", "étoile", "estrella"),
              emoji: "⭐"
            },
            {
              id: "uae-g1u1l5-v6",
              arabic: "مُعَيَّنٌ",
              transliteration: "muʿayyanun",
              translation: t("مُعَيَّنٌ", "diamond / rhombus", "berlian / wajik", "belah ketupat", "losange", "rombo"),
              emoji: "🔷"
            },
            {
              id: "uae-g1u1l5-v7",
              arabic: "قَلْبٌ",
              transliteration: "qalbun",
              translation: t("قَلْبٌ", "heart shape", "bentuk hati", "bentuk hati", "cœur", "corazón"),
              emoji: "❤️"
            },
            {
              id: "uae-g1u1l5-v8",
              arabic: "بَيْضَاوِيٌّ",
              transliteration: "bayḍāwiyyun",
              translation: t("بَيْضَاوِيٌّ", "oval", "bujur", "oval", "ovale", "óvalo"),
              emoji: "🥚"
            },
            {
              id: "uae-g1u1l5-v9",
              arabic: "سَدَاسِيٌّ",
              transliteration: "sadāsiyyun",
              translation: t("سَدَاسِيٌّ", "hexagon", "heksagon", "segi enam", "hexagone", "hexágono"),
              emoji: "⬡"
            },
            {
              id: "uae-g1u1l5-v10",
              arabic: "نِصْفُ دَائِرَة",
              transliteration: "niṣf dāʾirah",
              translation: t("نِصْفُ دَائِرَة", "semicircle", "separuh bulatan", "setengah lingkaran", "demi-cercle", "semicírculo"),
              emoji: "🌗"
            }
          ],
          dialogue: [
            {
              speaker: "سَلْمَى",
              arabic: "مَا هَذَا الشَّكْلُ؟",
              translation: t("مَا هَذَا الشَّكْلُ؟", "What is this shape?", "Apakah bentuk ini?", "Apa bentuk ini?", "Quelle est cette forme ?", "¿Qué forma es esta?")
            },
            {
              speaker: "خَالِد",
              arabic: "هَذِهِ دَائِرَةٌ!",
              translation: t("هَذِهِ دَائِرَةٌ!", "This is a circle!", "Ini bulatan!", "Ini lingkaran!", "C'est un cercle !", "¡Es un círculo!")
            },
            {
              speaker: "سَلْمَى",
              arabic: "وَهَذَا مُثَلَّثٌ جَمِيلٌ!",
              translation: t("وَهَذَا مُثَلَّثٌ جَمِيلٌ!", "And this is a beautiful triangle!", "Dan ini segi tiga yang cantik!", "Dan ini segitiga yang indah!", "Et c'est un beau triangle !", "¡Y este es un hermoso triángulo!")
            }
          ],
          exercises: [
            {
              id: "uae-g1u1l5-e1",
              type: "mcq",
              skill: "reading",
              prompt: t("أَيُّ شَكْلٍ لَهُ ثَلَاثَةُ أَضْلَاع؟", "Which shape has three sides?", "Bentuk mana yang mempunyai tiga sisi?", "Bentuk mana yang memiliki tiga sisi?", "Quelle forme a trois côtés ?", "¿Qué forma tiene tres lados?"),
              options: [
                "دَائِرَةٌ",
                "مُرَبَّعٌ",
                "مُثَلَّثٌ",
                "مُسْتَطِيلٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f53a/512.webp"
            },
            {
              id: "uae-g1u1l5-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الشَّكْلَ بِالرَّمْزِ", "Match the shape to its emoji", "Padankan bentuk dengan emoji", "Cocokkan bentuk dengan emoji", "Associe la forme à son emoji", "Relaciona la forma con su emoji"),
              pairs: [
                {
                  a: "مُثَلَّثٌ",
                  b: "🔺"
                },
                {
                  a: "دَائِرَةٌ",
                  b: "⭕"
                },
                {
                  a: "نَجْمَةٌ",
                  b: "⭐"
                },
                {
                  a: "مُرَبَّعٌ",
                  b: "🟥"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f53a/512.webp"
            },
            {
              id: "uae-g1u1l5-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("اذْكُرِ الْأَشْكَالَ الَّتِي تَعْرِفُهَا", "Name the shapes you know", "Sebutkan bentuk yang anda tahu", "Sebutkan bentuk-bentuk yang kamu ketahui", "Nomme les formes que tu connais", "Nombra las formas que conoces"),
              arabicText: "مُثَلَّثٌ، مُرَبَّعٌ، دَائِرَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f53a/512.webp"
            },
            {
              id: "uae-g1u1l5-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة دَائِرَةٌ", "Write the word دَائِرَةٌ", "Tulis perkataan دَائِرَةٌ", "Tulis kata دَائِرَةٌ", "Écris le mot دَائِرَةٌ", "Escribe la palabra دَائِرَةٌ"),
              arabicText: "دَائِرَةٌ",
              answer: "دَائِرَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2b55/512.webp"
            },
            {
              id: "uae-g1u1l5-e5",
              type: "mcq",
              skill: "reading",
              prompt: t("أَيُّ شَكْلٍ لَيْسَ لَهُ أَضْلَاع؟", "Which shape has no sides?", "Bentuk mana yang tidak mempunyai sisi?", "Bentuk mana yang tidak memiliki sisi?", "Quelle forme n'a pas de côtés ?", "¿Qué forma no tiene lados?"),
              options: [
                "مُرَبَّعٌ",
                "مُثَلَّثٌ",
                "دَائِرَةٌ",
                "مُسْتَطِيلٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f53a/512.webp"
            },
            {
              id: "uae-g1u1l5-e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الأَشْكَالَ الجَدِيدَة بِرُمُوزِهَا", "Match new shapes to their emojis", "Padankan bentuk baru dengan emoji", "Cocokkan bentuk baru dengan emoji", "Associe les nouvelles formes à leurs emojis", "Relaciona las nuevas formas con sus emojis"),
              pairs: [
                {
                  a: "مُعَيَّنٌ",
                  b: "🔷"
                },
                {
                  a: "قَلْبٌ",
                  b: "❤️"
                },
                {
                  a: "بَيْضَاوِيٌّ",
                  b: "🥚"
                },
                {
                  a: "نِصْفُ دَائِرَة",
                  b: "🌗"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f53a/512.webp"
            },
            {
              id: "uae-g1u1l5-e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("اذْكُرْ شَيْئاً فِي الصَّفِّ عَلَى شَكْلِ دَائِرَة", "Name something in class that is circular", "Sebutkan sesuatu di kelas yang berbentuk bulatan", "Sebutkan sesuatu di kelas yang berbentuk lingkaran", "Nomme quelque chose en classe qui est de forme circulaire", "Nombra algo en clase que tenga forma circular"),
              arabicText: "السَّاعَةُ دَائِرَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2b55/512.webp"
            },
            {
              id: "uae-g1u1l5-e8",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة مُرَبَّعٌ", "Write the word مُرَبَّعٌ", "Tulis perkataan مُرَبَّعٌ", "Tulis kata مُرَبَّعٌ", "Écris le mot مُرَبَّعٌ", "Escribe la palabra مُرَبَّعٌ"),
              arabicText: "مُرَبَّعٌ",
              answer: "مُرَبَّعٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f7e5/512.webp"
            },
            {
              id: "uae-g1u1l5e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "مَا هَذَا الشَّكْلُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f53a/512.webp"
            },
            {
              id: "uae-g1u1l5speakuae-g1u1l5-v3",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "دَائِرَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2b55/512.webp"
            },
            {
              id: "uae-g1u1l5listenuae-g1u1l5-v10",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "نِصْفُ دَائِرَة",
              options: [
                "تَقَدَّمَ",
                "الجُمُعَةُ",
                "نِصْفُ دَائِرَة"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f317/512.webp"
            },
            {
              id: "uae-g1u1l5speakuae-g1u1l5-v5",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "نَجْمَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2b50/512.webp"
            }
          ]
        },
        {
          id: "uae-g1u1review",
          unitId: "uae-g1u1",
          gradeId: "uae-g1",
          order: 6,
          title: t("مراجعة الوحدة", "Unit Review", "Ulangan Unit", "Ulangan Unit", "Révision de l’unité", "Revisión de la unidad"),
          skills: [
            "listening",
            "reading",
            "writing"
          ],
          intro: t("لنراجع ما تعلّمناه في هذه الوحدة!", "Let’s review what we learned in this unit!", "Mari ulangkaji apa yang kita pelajari dalam unit ini!", "Mari kita ulang apa yang kita pelajari dalam unit ini!", "Révisons ce que nous avons appris dans cette unité !", "¡Repasemos lo que aprendimos en esta unidad!"),
          vocabulary: [
            {
              id: "uae-g1u1l1-v1",
              arabic: "مَرْحَباً",
              transliteration: "marḥaban",
              translation: t("مَرْحَباً", "hello", "hello", "helo", "bonjour", "hola"),
              emoji: "🙋"
            },
            {
              id: "uae-g1u1l1-v2",
              arabic: "أَهْلاً",
              transliteration: "ahlan",
              translation: t("أَهْلاً", "welcome", "selamat datang", "selamat datang", "bienvenue", "bienvenido"),
              emoji: "🤝"
            },
            {
              id: "uae-g1u1l1-v3",
              arabic: "صَبَاحُ الخَيْرِ",
              transliteration: "ṣabāḥ al-khayr",
              translation: t("صَبَاحُ الخَيْرِ", "good morning", "selamat pagi", "selamat pagi", "bonjour", "buenos días"),
              emoji: "🌅"
            },
            {
              id: "uae-g1u1l1-v4",
              arabic: "مَسَاءُ الخَيْرِ",
              transliteration: "masāʾ al-khayr",
              translation: t("مَسَاءُ الخَيْرِ", "good evening", "selamat petang", "selamat petang", "bonsoir", "buenas tardes"),
              emoji: "🌆"
            },
            {
              id: "uae-g1u1l1-v5",
              arabic: "وَدَاعاً",
              transliteration: "wadāʿan",
              translation: t("وَدَاعاً", "goodbye", "selamat tinggal", "selamat tinggal", "au revoir", "adiós"),
              emoji: "👋"
            },
            {
              id: "uae-g1u1l1-v6",
              arabic: "شُكْراً",
              transliteration: "shukran",
              translation: t("شُكْراً", "thank you", "terima kasih", "terima kasih", "merci", "gracias"),
              emoji: "🙏"
            },
            {
              id: "uae-g1u1l1-v7",
              arabic: "عَفْواً",
              transliteration: "ʿafwan",
              translation: t("عَفْواً", "you're welcome / sorry", "sama-sama / maaf", "sama-sama / maaf", "de rien / pardon", "de nada / perdón"),
              emoji: "😊"
            },
            {
              id: "uae-g1u1l1-v8",
              arabic: "مَعَ السَّلَامَةِ",
              transliteration: "maʿa al-salāmah",
              translation: t("مَعَ السَّلَامَةِ", "goodbye (go safely)", "selamat jalan", "selamat jalan", "au revoir (partez en sécurité)", "que te vaya bien"),
              emoji: "🚶"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "uae-g1u1reviewwriteuae-g1u1l1-v5",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"وَدَاعاً\"", "Type the Arabic word for: \"goodbye\"", "Taip perkataan Arab untuk: \"selamat tinggal\"", "Ketik kata Arab untuk: \"selamat tinggal\"", "Tape le mot arabe pour : \"au revoir\"", "Escribe la palabra árabe para: \"adiós\""),
              arabicText: "وَدَاعاً",
              answer: "وَدَاعاً",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp"
            },
            {
              id: "uae-g1u1reviewmcquae-g1u1l1-v3",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"صَبَاحُ الخَيْرِ\"؟", "What does \"good morning\" mean?", "Apakah maksud \"selamat pagi\"?", "Apa arti \"selamat pagi\"?", "Que signifie \"bonjour\" ?", "¿Qué significa \"buenos días\"?"),
              arabicText: "صَبَاحُ الخَيْرِ",
              options: [
                "red",
                "back",
                "good morning",
                "Tuesday"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f305/512.webp"
            },
            {
              id: "uae-g1u1reviewspelluae-g1u1l1-v3",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "صَبَاحُ الخَيْرِ",
              answer: "صَبَاحُ الخَيْرِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f305/512.webp"
            },
            {
              id: "uae-g1u1reviewlistenuae-g1u1l1-v7",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "عَفْواً",
              options: [
                "عَفْواً",
                "سَدَاسِيٌّ",
                "قَرَأَ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60a/512.webp"
            },
            {
              id: "uae-g1u1reviewspelluae-g1u1l1-v4",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "مَسَاءُ الخَيْرِ",
              answer: "مَسَاءُ الخَيْرِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f306/512.webp"
            },
            {
              id: "uae-g1u1reviewmcquae-g1u1l1-v6",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"شُكْراً\"؟", "What does \"thank you\" mean?", "Apakah maksud \"terima kasih\"?", "Apa arti \"terima kasih\"?", "Que signifie \"merci\" ?", "¿Qué significa \"gracias\"?"),
              arabicText: "شُكْراً",
              options: [
                "was happy/glad",
                "was happy/rejoiced",
                "thank you",
                "ear"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f64f/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "uae-g1u2",
      gradeId: "uae-g1",
      order: 2,
      title: t("كَلِمَاتِي الأُولَى", "First Words", "Pertamaku", "Pertamaku", "premiers mots", "primeras palabras"),
      theme: "vocabulary",
      lessons: [
        {
          id: "uae-g1u2l1",
          unitId: "uae-g1u2",
          gradeId: "uae-g1",
          order: 1,
          title: t("الأُسْرَةُ", "Family", "Keluarga", "Keluarga", "La famille", "La familia"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الأُسْرَةُ هِيَ أَحَبُّ النَّاسِ إِلَيْنَا!", "Family is the people we love the most!", "Keluarga adalah orang yang paling kita sayangi!", "Keluarga adalah orang yang paling kita cintai!", "La famille est les personnes qu'on aime le plus !", "¡La familia son las personas que más amamos!"),
          vocabulary: [
            {
              id: "uae-g1u2l1-v1",
              arabic: "أَبٌ",
              transliteration: "abun",
              translation: t("أَبٌ", "father", "ayah", "ayah", "père", "padre"),
              emoji: "👨"
            },
            {
              id: "uae-g1u2l1-v2",
              arabic: "أُمٌّ",
              transliteration: "ummun",
              translation: t("أُمٌّ", "mother", "ibu", "ibu", "mère", "madre"),
              emoji: "👩"
            },
            {
              id: "uae-g1u2l1-v3",
              arabic: "أَخٌ",
              transliteration: "akhun",
              translation: t("أَخٌ", "brother", "abang/adik lelaki", "kakak/adik laki-laki", "frère", "hermano"),
              emoji: "👦"
            },
            {
              id: "uae-g1u2l1-v4",
              arabic: "أُخْتٌ",
              transliteration: "ukhtun",
              translation: t("أُخْتٌ", "sister", "kakak/adik perempuan", "kakak/adik perempuan", "sœur", "hermana"),
              emoji: "👧"
            },
            {
              id: "uae-g1u2l1-v5",
              arabic: "جَدٌّ",
              transliteration: "jaddun",
              translation: t("جَدٌّ", "grandfather", "datuk", "kakek", "grand-père", "abuelo"),
              emoji: "👴"
            },
            {
              id: "uae-g1u2l1-v6",
              arabic: "جَدَّةٌ",
              transliteration: "jaddah",
              translation: t("جَدَّةٌ", "grandmother", "nenek", "nenek", "grand-mère", "abuela"),
              emoji: "👵"
            },
            {
              id: "uae-g1u2l1-v7",
              arabic: "عَمٌّ",
              transliteration: "ʿammun",
              translation: t("عَمٌّ", "uncle (father's brother)", "pak cik", "paman", "oncle", "tío"),
              emoji: "🧔"
            },
            {
              id: "uae-g1u2l1-v8",
              arabic: "عَمَّةٌ",
              transliteration: "ʿammah",
              translation: t("عَمَّةٌ", "aunt (father's sister)", "mak cik", "bibi", "tante", "tía"),
              emoji: "👩‍🦱"
            },
            {
              id: "uae-g1u2l1-v9",
              arabic: "ابْنٌ",
              transliteration: "ibnun",
              translation: t("ابْنٌ", "son", "anak lelaki", "anak laki-laki", "fils", "hijo"),
              emoji: "🧒"
            },
            {
              id: "uae-g1u2l1-v10",
              arabic: "بِنْتٌ",
              transliteration: "bintun",
              translation: t("بِنْتٌ", "daughter / girl", "anak perempuan", "anak perempuan", "fille", "hija"),
              emoji: "👧"
            }
          ],
          dialogue: [
            {
              speaker: "نُورَة",
              arabic: "هَذَا أَبِي وَهَذِهِ أُمِّي.",
              translation: t("هَذَا أَبِي وَهَذِهِ أُمِّي.", "This is my father and this is my mother.", "Ini ayah saya dan ini ibu saya.", "Ini ayah saya dan ini ibu saya.", "Voici mon père et voici ma mère.", "Este es mi padre y esta es mi madre.")
            },
            {
              speaker: "رَاشِد",
              arabic: "وَمَنْ هَذَا؟",
              translation: t("وَمَنْ هَذَا؟", "And who is this?", "Dan siapa ini?", "Dan siapa ini?", "Et qui est-ce ?", "¿Y quién es este?")
            },
            {
              speaker: "نُورَة",
              arabic: "هَذَا أَخِي الصَّغِيرُ!",
              translation: t("هَذَا أَخِي الصَّغِيرُ!", "This is my little brother!", "Ini adik lelaki saya!", "Ini adik laki-laki saya!", "C'est mon petit frère !", "¡Este es mi hermanito!")
            }
          ],
          exercises: [
            {
              id: "uae-g1u2l1-e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "أُمٌّ",
              options: [
                "أَبٌ",
                "أُمٌّ",
                "أَخٌ",
                "جَدٌّ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f469/512.webp"
            },
            {
              id: "uae-g1u2l1-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالرَّمْزِ", "Match the word to its emoji", "Padankan perkataan dengan emoji", "Cocokkan kata dengan emoji", "Associe le mot à son emoji", "Relaciona la palabra con su emoji"),
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
                  a: "أَخٌ",
                  b: "👦"
                },
                {
                  a: "جَدٌّ",
                  b: "👴"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468/512.webp"
            },
            {
              id: "uae-g1u2l1-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلِ اسْمَ أَفْرَادِ أُسْرَتِكَ", "Name your family members", "Sebut ahli keluarga anda", "Sebutkan anggota keluargamu", "Nomme les membres de ta famille", "Nombra los miembros de tu familia"),
              arabicText: "أَبٌ، أُمٌّ، أَخٌ، أُخْتٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468/512.webp"
            },
            {
              id: "uae-g1u2l1-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة أُمٌّ", "Write the word أُمٌّ", "Tulis perkataan أُمٌّ", "Tulis kata أُمٌّ", "Écris le mot أُمٌّ", "Escribe la palabra أُمٌّ"),
              arabicText: "أُمٌّ",
              answer: "أُمٌّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f469/512.webp"
            },
            {
              id: "uae-g1u2l1-e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَنْ هِيَ أُمُّ أَبِيك؟", "Who is your father's mother?", "Siapakah ibu bapa ayah kamu?", "Siapa ibu dari ayahmu?", "Qui est la mère de ton père ?", "¿Quién es la madre de tu padre?"),
              options: [
                "عَمَّةٌ",
                "أُمٌّ",
                "جَدَّةٌ",
                "أُخْتٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468/512.webp"
            },
            {
              id: "uae-g1u2l1-e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ أَفْرَادَ الأُسْرَةِ الجَدِيدَة بِرُمُوزِهِم", "Match the new family members to their emojis", "Padankan ahli keluarga baru dengan emoji", "Cocokkan anggota keluarga baru dengan emoji", "Associe les nouveaux membres de la famille à leurs emojis", "Relaciona los nuevos miembros de la familia con sus emojis"),
              pairs: [
                {
                  a: "جَدَّةٌ",
                  b: "👵"
                },
                {
                  a: "عَمٌّ",
                  b: "🧔"
                },
                {
                  a: "عَمَّةٌ",
                  b: "👩‍🦱"
                },
                {
                  a: "بِنْتٌ",
                  b: "👧"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468/512.webp"
            },
            {
              id: "uae-g1u2l1-e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ جُمْلَةً عَنْ أُسْرَتِك", "Say a sentence about your family", "Ucapkan ayat tentang keluarga kamu", "Ucapkan kalimat tentang keluargamu", "Dis une phrase sur ta famille", "Di una oración sobre tu familia"),
              arabicText: "أُسْرَتِي كَبِيرَةٌ وَأُحِبُّهَا",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468/512.webp"
            },
            {
              id: "uae-g1u2l1-e8",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة جَدٌّ", "Write the word جَدٌّ", "Tulis perkataan جَدٌّ", "Tulis kata جَدٌّ", "Écris le mot جَدٌّ", "Escribe la palabra جَدٌّ"),
              arabicText: "جَدٌّ",
              answer: "جَدٌّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f474/512.webp"
            },
            {
              id: "uae-g1u2l1e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا أَبِي وَهَذِهِ أُمِّي",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468/512.webp"
            },
            {
              id: "uae-g1u2l1mcquae-g1u2l1-v6",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"جَدَّةٌ\"؟", "What does \"grandmother\" mean?", "Apakah maksud \"nenek\"?", "Apa arti \"nenek\"?", "Que signifie \"grand-mère\" ?", "¿Qué significa \"abuela\"?"),
              arabicText: "جَدَّةٌ",
              options: [
                "vegetables",
                "rabbit — Alif",
                "squirrel",
                "grandmother"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f475/512.webp"
            },
            {
              id: "uae-g1u2l1listenuae-g1u2l1-v7",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "عَمٌّ",
              options: [
                "عَمٌّ",
                "بَحْرٌ",
                "مَوْزٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9d4/512.webp"
            },
            {
              id: "uae-g1u2l1writeuae-g1u2l1-v6",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"جَدَّةٌ\"", "Type the Arabic word for: \"grandmother\"", "Taip perkataan Arab untuk: \"nenek\"", "Ketik kata Arab untuk: \"nenek\"", "Tape le mot arabe pour : \"grand-mère\"", "Escribe la palabra árabe para: \"abuela\""),
              arabicText: "جَدَّةٌ",
              answer: "جَدَّةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f475/512.webp"
            }
          ]
        },
        {
          id: "uae-g1u2l2",
          unitId: "uae-g1u2",
          gradeId: "uae-g1",
          order: 2,
          title: t("الْجِسْمُ", "Body", "Badan", "Tubuhku", "corps", "cuerpo"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("جِسْمُنَا مِنَ اللَّهِ عَزَّ وَجَلَّ! تَعَالَوْا نَتَعَرَّفُ عَلَى أَعْضَاءِ جِسْمِنَا!", "Our body is a gift from Allah! Let's learn about the parts of our body!", "Badan kita adalah anugerah dari Allah! Jom kenali bahagian badan kita!", "Tubuh kita adalah karunia dari Allah! Ayo mengenal bagian-bagian tubuh kita!", "Notre corps est un don d'Allah ! Apprenons les parties de notre corps !", "¡Nuestro cuerpo es un regalo de Allah! ¡Aprendamos las partes de nuestro cuerpo!"),
          vocabulary: [
            {
              id: "uae-g1u2l2-v1",
              arabic: "ظَهْرٌ",
              transliteration: "ẓahr",
              translation: t("ظَهْرٌ", "back", "belakang", "punggung", "dos", "espalda"),
              emoji: "🔙"
            },
            {
              id: "uae-g1u2l2-v2",
              arabic: "أُذُنٌ",
              transliteration: "uḏun",
              translation: t("أُذُنٌ", "ear", "telinga", "telinga", "oreille", "oreja"),
              emoji: "👂"
            },
            {
              id: "uae-g1u2l2-v3",
              arabic: "رِجْلٌ",
              transliteration: "rijl",
              translation: t("رِجْلٌ", "leg", "kaki", "kaki", "jambe", "pierna"),
              emoji: "🦵"
            },
            {
              id: "uae-g1u2l2-v4",
              arabic: "أَنْفٌ",
              transliteration: "anf",
              translation: t("أَنْفٌ", "nose", "hidung", "hidung", "nez", "nariz"),
              emoji: "👃"
            },
            {
              id: "uae-g1u2l2-v5",
              arabic: "فَمٌ",
              transliteration: "fam",
              translation: t("فَمٌ", "mouth", "mulut", "mulut", "bouche", "boca"),
              emoji: "👄"
            },
            {
              id: "uae-g1u2l2-v6",
              arabic: "إِصْبَعٌ",
              transliteration: "iṣbaʿ",
              translation: t("إِصْبَعٌ", "finger", "jari", "jari", "doigt", "dedo"),
              emoji: "🫵"
            },
            {
              id: "uae-g1u2l2-v7",
              arabic: "عَيْنٌ",
              transliteration: "ʿayn",
              translation: t("عَيْنٌ", "eye", "mata", "mata", "œil", "ojo"),
              emoji: "👁️"
            },
            {
              id: "uae-g1u2l2-v8",
              arabic: "يَدٌ",
              transliteration: "yad",
              translation: t("يَدٌ", "hand", "tangan", "tangan", "main", "mano"),
              emoji: "✋"
            },
            {
              id: "uae-g1u2l2-v9",
              arabic: "رَأْسٌ",
              transliteration: "raʾs",
              translation: t("رَأْسٌ", "head", "kepala", "kepala", "tête", "cabeza"),
              emoji: "👦"
            },
            {
              id: "uae-g1u2l2-v10",
              arabic: "شَعْرٌ",
              transliteration: "shaʿr",
              translation: t("شَعْرٌ", "hair", "rambut", "rambut", "cheveux", "cabello"),
              emoji: "💇"
            }
          ],
          dialogue: [
            {
              speaker: "الْمُعَلِّمَةُ",
              arabic: "أَيْنَ عَيْنَاكَ يَا سَعِيد؟",
              translation: t("أَيْنَ عَيْنَاكَ يَا سَعِيد؟", "Where are your eyes, Saeed?", "Di manakah mata kamu, Saeed?", "Di manakah matamu, Saeed?", "Où sont tes yeux, Saeed ?", "¿Dónde están tus ojos, Saeed?")
            },
            {
              speaker: "سَعِيد",
              arabic: "هَذِهِ عَيْنَايَ! أَنَا أَرَى بِعَيْنَيَّ.",
              translation: t("هَذِهِ عَيْنَايَ! أَنَا أَرَى بِعَيْنَيَّ.", "These are my eyes! I see with my eyes.", "Ini mata saya! Saya melihat dengan mata saya.", "Ini mataku! Aku melihat dengan mataku.", "Ce sont mes yeux ! Je vois avec mes yeux.", "¡Estos son mis ojos! Veo con mis ojos.")
            },
            {
              speaker: "الْمُعَلِّمَةُ",
              arabic: "أَحْسَنْتَ! وَمَاذَا تَفْعَلُ بِيَدَيْكَ؟",
              translation: t("أَحْسَنْتَ! وَمَاذَا تَفْعَلُ بِيَدَيْكَ؟", "Well done! And what do you do with your hands?", "Bagus! Dan apa yang kamu buat dengan tangan kamu?", "Bagus! Dan apa yang kamu lakukan dengan tanganmu?", "Bravo ! Et que fais-tu avec tes mains ?", "¡Bien hecho! ¿Y qué haces con tus manos?")
            },
            {
              speaker: "سَعِيد",
              arabic: "أَنَا أَكْتُبُ بِيَدَيَّ وَأَمْشِي بِرِجْلَيَّ.",
              translation: t("أَنَا أَكْتُبُ بِيَدَيَّ وَأَمْشِي بِرِجْلَيَّ.", "I write with my hands and I walk with my legs.", "Saya menulis dengan tangan saya dan berjalan dengan kaki saya.", "Aku menulis dengan tanganku dan berjalan dengan kakiku.", "J'écris avec mes mains et je marche avec mes jambes.", "Escribo con mis manos y camino con mis piernas.")
            }
          ],
          exercises: [
            {
              id: "uae-g1u2l2-e1",
              type: "mcq",
              skill: "reading",
              prompt: t("بِمَ نَرَى؟", "What do we see with?", "Dengan apa kita melihat?", "Dengan apa kita melihat?", "Avec quoi voyons-nous ?", "¿Con qué vemos?"),
              options: [
                "الأُذُنُ",
                "الْعَيْنُ",
                "الْفَمُ",
                "الْيَدُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f519/512.webp"
            },
            {
              id: "uae-g1u2l2-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْعُضْوَ بِرَمْزِهِ", "Match the body part to its emoji", "Padankan bahagian badan dengan emojinya", "Cocokkan bagian tubuh dengan emojinya", "Relie la partie du corps à son emoji", "Relaciona la parte del cuerpo con su emoji"),
              pairs: [
                {
                  a: "عَيْنٌ",
                  b: "👁️"
                },
                {
                  a: "أُذُنٌ",
                  b: "👂"
                },
                {
                  a: "فَمٌ",
                  b: "👄"
                },
                {
                  a: "يَدٌ",
                  b: "✋"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f519/512.webp"
            },
            {
              id: "uae-g1u2l2-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلِ اسْمَ هَذِهِ الْأَعْضَاءِ", "Name these body parts", "Sebut nama bahagian badan ini", "Sebutkan nama bagian tubuh ini", "Nomme ces parties du corps", "Nombra estas partes del cuerpo"),
              arabicText: "رِجْلٌ، يَدٌ، أَنْفٌ، فَمٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9b5/512.webp"
            },
            {
              id: "uae-g1u2l2-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة عَيْنٌ", "Write the word عَيْنٌ", "Tulis perkataan عَيْنٌ", "Tulis kata عَيْنٌ", "Écris le mot عَيْنٌ", "Escribe la palabra عَيْنٌ"),
              arabicText: "عَيْنٌ",
              answer: "عَيْنٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f441-fe0f/512.webp"
            },
            {
              id: "uae-g1u2l2-e5",
              type: "mcq",
              skill: "reading",
              prompt: t("بِمَ نَسْمَعُ؟", "What do we hear with?", "Dengan apa kita mendengar?", "Dengan apa kita mendengar?", "Avec quoi entendons-nous ?", "¿Con qué oímos?"),
              options: [
                "الْعَيْنُ",
                "الأُذُنُ",
                "الْفَمُ",
                "الْأَنْفُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f519/512.webp"
            },
            {
              id: "uae-g1u2l2-e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْعُضْوَ بِعَمَلِهِ", "Match the body part to its action", "Padankan bahagian badan dengan tindakannya", "Cocokkan bagian tubuh dengan fungsinya", "Relie la partie du corps à son action", "Relaciona la parte del cuerpo con su acción"),
              pairs: [
                {
                  a: "عَيْنٌ",
                  b: "أَرَى"
                },
                {
                  a: "أُذُنٌ",
                  b: "أَسْمَعُ"
                },
                {
                  a: "فَمٌ",
                  b: "أَتَكَلَّمُ"
                },
                {
                  a: "رِجْلٌ",
                  b: "أَمْشِي"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f519/512.webp"
            },
            {
              id: "uae-g1u2l2-e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ: هَذِهِ يَدِي", "Say: This is my hand", "Ucapkan: Ini tangan saya", "Ucapkan: Ini tanganku", "Dis : c'est ma main", "Di: Esta es mi mano"),
              arabicText: "هَذِهِ يَدِي",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f519/512.webp"
            },
            {
              id: "uae-g1u2l2-e8",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة يَدٌ", "Write the word يَدٌ", "Tulis perkataan يَدٌ", "Tulis kata يَدٌ", "Écris le mot يَدٌ", "Escribe la palabra يَدٌ"),
              arabicText: "يَدٌ",
              answer: "يَدٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/270b/512.webp"
            },
            {
              id: "uae-g1u2l2e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "أَيْنَ عَيْنَاكَ يَا سَعِيد",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f519/512.webp"
            },
            {
              id: "uae-g1u2l2spelluae-g1u2l2-v1",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "ظَهْرٌ",
              answer: "ظَهْرٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f519/512.webp"
            },
            {
              id: "uae-g1u2l2listenuae-g1u2l2-v6",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "إِصْبَعٌ",
              options: [
                "عَمَلٌ",
                "عَيْنٌ",
                "إِصْبَعٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1faf5/512.webp"
            },
            {
              id: "uae-g1u2l2speakuae-g1u2l2-v2",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "أُذُنٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f442/512.webp"
            }
          ]
        },
        {
          id: "uae-g1u2l3",
          unitId: "uae-g1u2",
          gradeId: "uae-g1",
          order: 3,
          title: t("أَكْلَاتٌ لَذِيذَةٌ", "Yummy Foods", "Makanan Lazat", "Makanan Lezat", "Délicieuses nourritures", "Comidas deliciosas"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الطَّعَامُ الصِّحِّيُّ يُقَوِّينَا! هيا نَتَعَرَّفُ عَلَيْه!", "Healthy food makes us strong! Let's learn about it!", "Makanan sihat menguatkan kita! Jom kenali!", "Makanan sehat membuat kita kuat! Ayo mengenalnya!", "La nourriture saine nous renforce ! Apprenons à la connaître !", "¡La comida sana nos fortalece! ¡Aprendamos sobre ella!"),
          vocabulary: [
            {
              id: "uae-g1u2l3-v1",
              arabic: "تُفَّاحَةٌ",
              transliteration: "tuffāḥah",
              translation: t("تُفَّاحَةٌ", "apple", "epal", "apel", "pomme", "manzana"),
              emoji: "🍎"
            },
            {
              id: "uae-g1u2l3-v2",
              arabic: "خُبْزٌ",
              transliteration: "khubzun",
              translation: t("خُبْزٌ", "bread", "roti", "roti", "pain", "pan"),
              emoji: "🍞"
            },
            {
              id: "uae-g1u2l3-v3",
              arabic: "لَبَنٌ",
              transliteration: "labanun",
              translation: t("لَبَنٌ", "milk", "susu", "susu", "lait", "leche"),
              emoji: "🥛"
            },
            {
              id: "uae-g1u2l3-v4",
              arabic: "أَرُزٌّ",
              transliteration: "aruzzun",
              translation: t("أَرُزٌّ", "rice", "nasi", "nasi", "riz", "arroz"),
              emoji: "🍚"
            },
            {
              id: "uae-g1u2l3-v5",
              arabic: "مَاءٌ",
              transliteration: "māʾun",
              translation: t("مَاءٌ", "water", "air", "air", "eau", "agua"),
              emoji: "💧"
            },
            {
              id: "uae-g1u2l3-v6",
              arabic: "مَوْزٌ",
              transliteration: "mawzun",
              translation: t("مَوْزٌ", "banana", "pisang", "pisang", "banane", "plátano"),
              emoji: "🍌"
            },
            {
              id: "uae-g1u2l3-v7",
              arabic: "بَيْضٌ",
              transliteration: "bayḍun",
              translation: t("بَيْضٌ", "egg", "telur", "telur", "œuf", "huevo"),
              emoji: "🥚"
            },
            {
              id: "uae-g1u2l3-v8",
              arabic: "دَجَاجٌ",
              transliteration: "dajājun",
              translation: t("دَجَاجٌ", "chicken", "ayam", "ayam", "poulet", "pollo"),
              emoji: "🍗"
            },
            {
              id: "uae-g1u2l3-v9",
              arabic: "خُضَرٌ",
              transliteration: "khuḍarun",
              translation: t("خُضَرٌ", "vegetables", "sayur-sayuran", "sayuran", "légumes", "verduras"),
              emoji: "🥦"
            },
            {
              id: "uae-g1u2l3-v10",
              arabic: "فَاكِهَةٌ",
              transliteration: "fākihah",
              translation: t("فَاكِهَةٌ", "fruit", "buah-buahan", "buah-buahan", "fruit", "fruta"),
              emoji: "🍇"
            }
          ],
          dialogue: [
            {
              speaker: "الأُمُّ",
              arabic: "مَاذَا تُرِيدُ لِلْغَدَاء؟",
              translation: t("مَاذَا تُرِيدُ لِلْغَدَاء؟", "What do you want for lunch?", "Apa yang kamu nak untuk makan tengahari?", "Apa yang kamu mau untuk makan siang?", "Que veux-tu pour le déjeuner ?", "¿Qué quieres para el almuerzo?")
            },
            {
              speaker: "عَلِيّ",
              arabic: "أُرِيدُ أَرُزًّا وَلَبَناً.",
              translation: t("أُرِيدُ أَرُزًّا وَلَبَناً.", "I want rice and milk.", "Saya nak nasi dan susu.", "Saya mau nasi dan susu.", "Je veux du riz et du lait.", "Quiero arroz y leche.")
            },
            {
              speaker: "الأُمُّ",
              arabic: "وَتُفَّاحَةٌ لِلْحَلْوَى!",
              translation: t("وَتُفَّاحَةٌ لِلْحَلْوَى!", "And an apple for dessert!", "Dan epal untuk pencuci mulut!", "Dan apel untuk pencuci mulut!", "Et une pomme pour le dessert !", "¡Y una manzana de postre!")
            }
          ],
          exercises: [
            {
              id: "uae-g1u2l3-e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الطَّعَامَ الصَّحِيح", "Listen and choose the correct food", "Dengar dan pilih makanan yang betul", "Dengarkan dan pilih makanan yang benar", "Écoute et choisis la bonne nourriture", "Escucha y elige la comida correcta"),
              arabicText: "خُبْزٌ",
              options: [
                "تُفَّاحَةٌ",
                "خُبْزٌ",
                "مَاءٌ",
                "أَرُزٌّ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f35e/512.webp"
            },
            {
              id: "uae-g1u2l3-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الطَّعَامَ بِالرَّمْزِ", "Match the food to its emoji", "Padankan makanan dengan emoji", "Cocokkan makanan dengan emoji", "Associe la nourriture à son emoji", "Relaciona la comida con su emoji"),
              pairs: [
                {
                  a: "تُفَّاحَةٌ",
                  b: "🍎"
                },
                {
                  a: "خُبْزٌ",
                  b: "🍞"
                },
                {
                  a: "لَبَنٌ",
                  b: "🥛"
                },
                {
                  a: "مَاءٌ",
                  b: "💧"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f34e/512.webp"
            },
            {
              id: "uae-g1u2l3-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ أَسْمَاءَ هَذِهِ الأَطْعِمَة", "Name these foods", "Sebut nama makanan ini", "Sebutkan nama makanan ini", "Nomme ces aliments", "Nombra estos alimentos"),
              arabicText: "تُفَّاحَةٌ، خُبْزٌ، لَبَنٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f34e/512.webp"
            },
            {
              id: "uae-g1u2l3-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة مَاءٌ", "Write the word مَاءٌ", "Tulis perkataan مَاءٌ", "Tulis kata مَاءٌ", "Écris le mot مَاءٌ", "Escribe la palabra مَاءٌ"),
              arabicText: "مَاءٌ",
              answer: "مَاءٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a7/512.webp"
            },
            {
              id: "uae-g1u2l3-e5",
              type: "mcq",
              skill: "reading",
              prompt: t("أَيُّ هَذِهِ الأَطْعِمَةِ فَاكِهَة؟", "Which of these is a fruit?", "Yang mana antara ini adalah buah?", "Yang mana dari ini adalah buah?", "Lequel de ces aliments est un fruit ?", "¿Cuál de estos alimentos es una fruta?"),
              options: [
                "خُبْزٌ",
                "مَاءٌ",
                "تُفَّاحَةٌ",
                "أَرُزٌّ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f34e/512.webp"
            },
            {
              id: "uae-g1u2l3-e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الأَطْعِمَةَ الجَدِيدَة بِرُمُوزِهَا", "Match the new foods to their emojis", "Padankan makanan baru dengan emoji", "Cocokkan makanan baru dengan emoji", "Associe les nouveaux aliments à leurs emojis", "Relaciona los nuevos alimentos con sus emojis"),
              pairs: [
                {
                  a: "مَوْزٌ",
                  b: "🍌"
                },
                {
                  a: "بَيْضٌ",
                  b: "🥚"
                },
                {
                  a: "دَجَاجٌ",
                  b: "🍗"
                },
                {
                  a: "خُضَرٌ",
                  b: "🥦"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f34e/512.webp"
            },
            {
              id: "uae-g1u2l3-e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ طَعَامَكَ الْمُفَضَّل", "Say your favorite food", "Sebutkan makanan kegemaran kamu", "Sebutkan makanan favoritmu", "Dis ton aliment préféré", "Di tu comida favorita"),
              arabicText: "طَعَامِي الْمُفَضَّلُ هُوَ...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f34e/512.webp"
            },
            {
              id: "uae-g1u2l3-e8",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة فَاكِهَةٌ", "Write the word فَاكِهَةٌ", "Tulis perkataan فَاكِهَةٌ", "Tulis kata فَاكِهَةٌ", "Écris le mot فَاكِهَةٌ", "Escribe la palabra فَاكِهَةٌ"),
              arabicText: "فَاكِهَةٌ",
              answer: "فَاكِهَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f347/512.webp"
            },
            {
              id: "uae-g1u2l3e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "مَاذَا تُرِيدُ لِلْغَدَاء",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f34e/512.webp"
            },
            {
              id: "uae-g1u2l3spelluae-g1u2l3-v2",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "خُبْزٌ",
              answer: "خُبْزٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f35e/512.webp"
            },
            {
              id: "uae-g1u2l3spelluae-g1u2l3-v3",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "لَبَنٌ",
              answer: "لَبَنٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f95b/512.webp"
            },
            {
              id: "uae-g1u2l3arrange2",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "أُرِيدُ أَرُزًّا وَلَبَناً.",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f34e/512.webp"
            }
          ]
        },
        {
          id: "uae-g1u2l4",
          unitId: "uae-g1u2",
          gradeId: "uae-g1",
          order: 4,
          title: t("الْمِهَنُ", "Jobs", "Pekerjaan", "Pekerjaan", "Les métiers", "Las profesiones"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("مَاذَا تُرِيدُ أَنْ تَكُونَ عِنْدَمَا تَكْبَرُ؟", "What do you want to be when you grow up?", "Apa yang kamu nak jadi apabila besar nanti?", "Apa yang kamu mau jadi ketika dewasa nanti?", "Que veux-tu être quand tu seras grand ?", "¿Qué quieres ser cuando seas grande?"),
          vocabulary: [
            {
              id: "uae-g1u2l4-v1",
              arabic: "مُعَلِّمٌ",
              transliteration: "muʿallimun",
              translation: t("مُعَلِّمٌ", "teacher", "guru", "guru", "enseignant", "maestro"),
              emoji: "👩‍🏫"
            },
            {
              id: "uae-g1u2l4-v2",
              arabic: "طَبِيبٌ",
              transliteration: "ṭabībun",
              translation: t("طَبِيبٌ", "doctor", "doktor", "dokter", "médecin", "médico"),
              emoji: "👨‍⚕️"
            },
            {
              id: "uae-g1u2l4-v3",
              arabic: "مُزَارِعٌ",
              transliteration: "muzāriʿun",
              translation: t("مُزَارِعٌ", "farmer", "petani", "petani", "agriculteur", "agricultor"),
              emoji: "👨‍🌾"
            },
            {
              id: "uae-g1u2l4-v4",
              arabic: "بَنَّاءٌ",
              transliteration: "bannāʾun",
              translation: t("بَنَّاءٌ", "builder", "tukang bina", "tukang bangunan", "maçon", "albañil"),
              emoji: "👷"
            },
            {
              id: "uae-g1u2l4-v5",
              arabic: "طَيَّارٌ",
              transliteration: "ṭayyārun",
              translation: t("طَيَّارٌ", "pilot", "juruterbang", "pilot", "pilote", "piloto"),
              emoji: "✈️"
            },
            {
              id: "uae-g1u2l4-v6",
              arabic: "شُرْطِيٌّ",
              transliteration: "shurṭiyyun",
              translation: t("شُرْطِيٌّ", "police officer", "polis", "polisi", "policier", "policía"),
              emoji: "👮"
            },
            {
              id: "uae-g1u2l4-v7",
              arabic: "مُمَرِّضٌ",
              transliteration: "mumarriḍun",
              translation: t("مُمَرِّضٌ", "nurse", "jururawat", "perawat", "infirmier", "enfermero"),
              emoji: "👩‍⚕️"
            },
            {
              id: "uae-g1u2l4-v8",
              arabic: "طَبَّاخٌ",
              transliteration: "ṭabbākhun",
              translation: t("طَبَّاخٌ", "cook / chef", "tukang masak", "koki", "cuisinier", "cocinero"),
              emoji: "👨‍🍳"
            },
            {
              id: "uae-g1u2l4-v9",
              arabic: "مُهَنْدِسٌ",
              transliteration: "muhandisun",
              translation: t("مُهَنْدِسٌ", "engineer", "jurutera", "insinyur", "ingénieur", "ingeniero"),
              emoji: "👨‍🔧"
            },
            {
              id: "uae-g1u2l4-v10",
              arabic: "رَسَّامٌ",
              transliteration: "rassāmun",
              translation: t("رَسَّامٌ", "artist / painter", "pelukis", "pelukis", "artiste", "artista"),
              emoji: "🎨"
            }
          ],
          dialogue: [
            {
              speaker: "مَرْيَم",
              arabic: "أُرِيدُ أَنْ أَكُونَ طَبِيبَةً!",
              translation: t("أُرِيدُ أَنْ أَكُونَ طَبِيبَةً!", "I want to be a doctor!", "Saya nak jadi doktor!", "Saya mau jadi dokter!", "Je veux être médecin !", "¡Quiero ser médica!")
            },
            {
              speaker: "حَامِد",
              arabic: "وَأَنَا أُرِيدُ أَنْ أَكُونَ طَيَّاراً!",
              translation: t("وَأَنَا أُرِيدُ أَنْ أَكُونَ طَيَّاراً!", "And I want to be a pilot!", "Dan saya nak jadi juruterbang!", "Dan saya mau jadi pilot!", "Et moi je veux être pilote !", "¡Y yo quiero ser piloto!")
            },
            {
              speaker: "الْمُعَلِّمَةُ",
              arabic: "كِلَا الْمِهْنَتَيْنِ رَائِعَتَانِ!",
              translation: t("كِلَا الْمِهْنَتَيْنِ رَائِعَتَانِ!", "Both professions are wonderful!", "Kedua-dua kerjaya itu hebat!", "Kedua profesi itu luar biasa!", "Les deux professions sont merveilleuses !", "¡Ambas profesiones son maravillosas!")
            }
          ],
          exercises: [
            {
              id: "uae-g1u2l4-e1",
              type: "mcq",
              skill: "reading",
              prompt: t("مَنْ يَعْمَلُ فِي الْمُسْتَشْفَى؟", "Who works in a hospital?", "Siapa yang bekerja di hospital?", "Siapa yang bekerja di rumah sakit?", "Qui travaille à l'hôpital ?", "¿Quién trabaja en el hospital?"),
              options: [
                "مُزَارِعٌ",
                "طَيَّارٌ",
                "طَبِيبٌ",
                "بَنَّاءٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f469-200d-1f3eb/512.webp"
            },
            {
              id: "uae-g1u2l4-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْمِهْنَةَ بِالرَّمْزِ", "Match the job to its emoji", "Padankan pekerjaan dengan emoji", "Cocokkan pekerjaan dengan emoji", "Associe le métier à son emoji", "Relaciona el trabajo con su emoji"),
              pairs: [
                {
                  a: "مُعَلِّمٌ",
                  b: "👩‍🏫"
                },
                {
                  a: "طَبِيبٌ",
                  b: "👨‍⚕️"
                },
                {
                  a: "بَنَّاءٌ",
                  b: "👷"
                },
                {
                  a: "طَيَّارٌ",
                  b: "✈️"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f469-200d-1f3eb/512.webp"
            },
            {
              id: "uae-g1u2l4-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ أَسْمَاءَ هَذِهِ الْمِهَن", "Name these jobs", "Sebut nama pekerjaan ini", "Sebutkan nama pekerjaan ini", "Nomme ces métiers", "Nombra estas profesiones"),
              arabicText: "مُعَلِّمٌ، طَبِيبٌ، طَيَّارٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f469-200d-1f3eb/512.webp"
            },
            {
              id: "uae-g1u2l4-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة طَبِيبٌ", "Write the word طَبِيبٌ", "Tulis perkataan طَبِيبٌ", "Tulis kata طَبِيبٌ", "Écris le mot طَبِيبٌ", "Escribe la palabra طَبِيبٌ"),
              arabicText: "طَبِيبٌ",
              answer: "طَبِيبٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468-200d-2695-fe0f/512.webp"
            },
            {
              id: "uae-g1u2l4-e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَنْ يَطْبُخُ الطَّعَامَ فِي الْمَطْعَم؟", "Who cooks food in a restaurant?", "Siapa yang memasak di restoran?", "Siapa yang memasak makanan di restoran?", "Qui cuisine dans un restaurant ?", "¿Quién cocina la comida en un restaurante?"),
              options: [
                "شُرْطِيٌّ",
                "طَبَّاخٌ",
                "مُهَنْدِسٌ",
                "رَسَّامٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f469-200d-1f3eb/512.webp"
            },
            {
              id: "uae-g1u2l4-e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْمِهَنَ الجَدِيدَة بِرُمُوزِهَا", "Match the new jobs to their emojis", "Padankan pekerjaan baru dengan emoji", "Cocokkan pekerjaan baru dengan emoji", "Associe les nouveaux métiers à leurs emojis", "Relaciona los nuevos trabajos con sus emojis"),
              pairs: [
                {
                  a: "شُرْطِيٌّ",
                  b: "👮"
                },
                {
                  a: "طَبَّاخٌ",
                  b: "👨‍🍳"
                },
                {
                  a: "مُهَنْدِسٌ",
                  b: "👨‍🔧"
                },
                {
                  a: "رَسَّامٌ",
                  b: "🎨"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f469-200d-1f3eb/512.webp"
            },
            {
              id: "uae-g1u2l4-e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ مَا تُرِيدُ أَنْ تَكُونَ وَلِمَاذَا", "Say what you want to be and why", "Katakan apa yang kamu nak jadi dan mengapa", "Katakan apa yang kamu mau jadi dan mengapa", "Dis ce que tu veux être et pourquoi", "Di qué quieres ser y por qué"),
              arabicText: "أُرِيدُ أَنْ أَكُونَ... لِأَنِّي أُحِبُّ...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f469-200d-1f3eb/512.webp"
            },
            {
              id: "uae-g1u2l4-e8",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة مُعَلِّمٌ", "Write the word مُعَلِّمٌ", "Tulis perkataan مُعَلِّمٌ", "Tulis kata مُعَلِّمٌ", "Écris le mot مُعَلِّمٌ", "Escribe la palabra مُعَلِّمٌ"),
              arabicText: "مُعَلِّمٌ",
              answer: "مُعَلِّمٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f469-200d-1f3eb/512.webp"
            },
            {
              id: "uae-g1u2l4e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "أُرِيدُ أَنْ أَكُونَ طَبِيبَةً",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f469-200d-1f3eb/512.webp"
            },
            {
              id: "uae-g1u2l4mcquae-g1u2l4-v7",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"مُمَرِّضٌ\"؟", "What does \"nurse\" mean?", "Apakah maksud \"jururawat\"?", "Apa arti \"perawat\"?", "Que signifie \"infirmier\" ?", "¿Qué significa \"enfermero\"?"),
              arabicText: "مُمَرِّضٌ",
              options: [
                "nurse",
                "defense",
                "bee",
                "chick"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f469-200d-2695-fe0f/512.webp"
            },
            {
              id: "uae-g1u2l4spelluae-g1u2l4-v3",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "مُزَارِعٌ",
              answer: "مُزَارِعٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468-200d-1f33e/512.webp"
            },
            {
              id: "uae-g1u2l4listenuae-g1u2l4-v6",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "شُرْطِيٌّ",
              options: [
                "تَلَّةٌ",
                "شُرْطِيٌّ",
                "حُوتٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f46e/512.webp"
            }
          ]
        },
        {
          id: "uae-g1u2l5",
          unitId: "uae-g1u2",
          gradeId: "uae-g1",
          order: 5,
          title: t("أَيَّامُ الأُسْبُوعِ", "Days of the Week", "Hari dalam Seminggu", "Hari dalam Seminggu", "Les jours de la semaine", "Los días de la semana"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الأُسْبُوعُ سَبْعَةُ أَيَّامٍ! هيا نَتَعَلَّمَهَا!", "A week has seven days! Let's learn them!", "Seminggu ada tujuh hari! Jom pelajari!", "Seminggu ada tujuh hari! Ayo pelajari!", "Une semaine a sept jours ! Apprenons-les !", "¡Una semana tiene siete días! ¡Aprendámoslos!"),
          vocabulary: [
            {
              id: "uae-g1u2l5-v1",
              arabic: "الأَحَدُ",
              transliteration: "al-aḥad",
              translation: t("الأَحَدُ", "Sunday", "Ahad", "Minggu", "dimanche", "domingo"),
              emoji: "📅"
            },
            {
              id: "uae-g1u2l5-v2",
              arabic: "الاثْنَيْنُ",
              transliteration: "al-ithnayn",
              translation: t("الاثْنَيْنُ", "Monday", "Isnin", "Senin", "lundi", "lunes"),
              emoji: "📅"
            },
            {
              id: "uae-g1u2l5-v3",
              arabic: "الثُّلَاثَاءُ",
              transliteration: "al-thulāthāʾ",
              translation: t("الثُّلَاثَاءُ", "Tuesday", "Selasa", "Selasa", "mardi", "martes"),
              emoji: "📅"
            },
            {
              id: "uae-g1u2l5-v4",
              arabic: "الأَرْبِعَاءُ",
              transliteration: "al-arbiʿāʾ",
              translation: t("الأَرْبِعَاءُ", "Wednesday", "Rabu", "Rabu", "mercredi", "miércoles"),
              emoji: "📅"
            },
            {
              id: "uae-g1u2l5-v5",
              arabic: "الخَمِيسُ",
              transliteration: "al-khamīs",
              translation: t("الخَمِيسُ", "Thursday", "Khamis", "Kamis", "jeudi", "jueves"),
              emoji: "📅"
            },
            {
              id: "uae-g1u2l5-v6",
              arabic: "الجُمُعَةُ",
              transliteration: "al-jumuʿah",
              translation: t("الجُمُعَةُ", "Friday", "Jumaat", "Jumat", "vendredi", "viernes"),
              emoji: "🕌"
            },
            {
              id: "uae-g1u2l5-v7",
              arabic: "السَّبْتُ",
              transliteration: "al-sabt",
              translation: t("السَّبْتُ", "Saturday", "Sabtu", "Sabtu", "samedi", "sábado"),
              emoji: "🌟"
            },
            {
              id: "uae-g1u2l5-v8",
              arabic: "الْيَوْمُ",
              transliteration: "al-yawm",
              translation: t("الْيَوْمُ", "today", "hari ini", "hari ini", "aujourd'hui", "hoy"),
              emoji: "☀️"
            },
            {
              id: "uae-g1u2l5-v9",
              arabic: "غَداً",
              transliteration: "ghadan",
              translation: t("غَداً", "tomorrow", "esok", "besok", "demain", "mañana"),
              emoji: "🌅"
            },
            {
              id: "uae-g1u2l5-v10",
              arabic: "أَمْسِ",
              transliteration: "amsi",
              translation: t("أَمْسِ", "yesterday", "semalam", "kemarin", "hier", "ayer"),
              emoji: "🌙"
            }
          ],
          dialogue: [
            {
              speaker: "الْمُعَلِّمَةُ",
              arabic: "مَا يَوْمُ الْيَوْمِ؟",
              translation: t("مَا يَوْمُ الْيَوْمِ؟", "What day is today?", "Apa hari ini?", "Hari apa hari ini?", "Quel jour est-on aujourd'hui ?", "¿Qué día es hoy?")
            },
            {
              speaker: "الطُّلَّابُ",
              arabic: "الْيَوْمُ هُوَ الاثْنَيْنُ!",
              translation: t("الْيَوْمُ هُوَ الاثْنَيْنُ!", "Today is Monday!", "Hari ini ialah Isnin!", "Hari ini adalah Senin!", "Aujourd'hui c'est lundi !", "¡Hoy es lunes!")
            },
            {
              speaker: "الْمُعَلِّمَةُ",
              arabic: "وَمَاذَا يَلِي الاثْنَيْنَ؟",
              translation: t("وَمَاذَا يَلِي الاثْنَيْنَ؟", "And what comes after Monday?", "Dan apa selepas Isnin?", "Dan apa setelah Senin?", "Et qu'est-ce qui vient après lundi ?", "¿Y qué viene después del lunes?")
            }
          ],
          exercises: [
            {
              id: "uae-g1u2l5-e1",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ الأَيَّامَ بِالتَّرْتِيبِ الصَّحِيح", "Arrange the days in the correct order", "Susun hari mengikut urutan yang betul", "Urutkan hari dengan urutan yang benar", "Range les jours dans le bon ordre", "Ordena los días en el orden correcto"),
              pairs: [
                {
                  a: "الأَحَدُ",
                  b: "1"
                },
                {
                  a: "الاثْنَيْنُ",
                  b: "2"
                },
                {
                  a: "الثُّلَاثَاءُ",
                  b: "3"
                },
                {
                  a: "الأَرْبِعَاءُ",
                  b: "4"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4c5/512.webp"
            },
            {
              id: "uae-g1u2l5-e2",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْيَوْمَ الصَّحِيح", "Listen and choose the correct day", "Dengar dan pilih hari yang betul", "Dengarkan dan pilih hari yang benar", "Écoute et choisis le bon jour", "Escucha y elige el día correcto"),
              arabicText: "الخَمِيسُ",
              options: [
                "الأَحَدُ",
                "الاثْنَيْنُ",
                "الخَمِيسُ",
                "الثُّلَاثَاءُ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4c5/512.webp"
            },
            {
              id: "uae-g1u2l5-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("اذْكُرِ أَيَّامَ الأُسْبُوع", "Name the days of the week", "Sebut hari-hari dalam seminggu", "Sebutkan hari-hari dalam seminggu", "Nomme les jours de la semaine", "Nombra los días de la semana"),
              arabicText: "الأَحَدُ، الاثْنَيْنُ، الثُّلَاثَاءُ، الأَرْبِعَاءُ، الخَمِيسُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4c5/512.webp"
            },
            {
              id: "uae-g1u2l5-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ يَوْمَ الأَحَد", "Write the day الأَحَدُ", "Tulis hari الأَحَدُ", "Tulis hari الأَحَدُ", "Écris le jour الأَحَدُ", "Escribe el día الأَحَدُ"),
              arabicText: "الأَحَدُ",
              answer: "الأَحَدُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4c5/512.webp"
            },
            {
              id: "uae-g1u2l5-e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا الْيَوْمُ الَّذِي يَلِي الخَمِيس؟", "What day comes after Thursday?", "Hari apakah selepas Khamis?", "Hari apa setelah Kamis?", "Quel jour vient après jeudi ?", "¿Qué día viene después del jueves?"),
              options: [
                "الأَرْبِعَاءُ",
                "الثُّلَاثَاءُ",
                "الجُمُعَةُ",
                "السَّبْتُ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4c5/512.webp"
            },
            {
              id: "uae-g1u2l5-e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الأَيَّامَ الجَدِيدَة بِمَعَانِيهَا", "Match the new days to their meanings", "Padankan hari baru dengan maknanya", "Cocokkan hari baru dengan artinya", "Associe les nouveaux jours à leurs significations", "Relaciona los nuevos días con sus significados"),
              pairs: [
                {
                  a: "الجُمُعَةُ",
                  b: "Friday"
                },
                {
                  a: "السَّبْتُ",
                  b: "Saturday"
                },
                {
                  a: "غَداً",
                  b: "tomorrow"
                },
                {
                  a: "أَمْسِ",
                  b: "yesterday"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4c5/512.webp"
            },
            {
              id: "uae-g1u2l5-e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ أَيَّامَ الأُسْبُوعِ السَّبْعَة كَامِلَة", "Say all seven days of the week", "Ucapkan tujuh hari dalam seminggu", "Ucapkan tujuh hari dalam seminggu", "Dis les sept jours de la semaine", "Di los siete días de la semana"),
              arabicText: "الأَحَدُ، الاثْنَيْنُ، الثُّلَاثَاءُ، الأَرْبِعَاءُ، الخَمِيسُ، الجُمُعَةُ، السَّبْتُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4c5/512.webp"
            },
            {
              id: "uae-g1u2l5-e8",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة الجُمُعَةُ", "Write the word الجُمُعَةُ", "Tulis perkataan الجُمُعَةُ", "Tulis kata الجُمُعَةُ", "Écris le mot الجُمُعَةُ", "Escribe la palabra الجُمُعَةُ"),
              arabicText: "الجُمُعَةُ",
              answer: "الجُمُعَةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f54c/512.webp"
            },
            {
              id: "uae-g1u2l5listenuae-g1u2l5-v10",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "أَمْسِ",
              options: [
                "أَمْسِ",
                "عَمٌّ",
                "ذِئْبٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f319/512.webp"
            },
            {
              id: "uae-g1u2l5spelluae-g1u2l5-v4",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "الأَرْبِعَاءُ",
              answer: "الأَرْبِعَاءُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4c5/512.webp"
            },
            {
              id: "uae-g1u2l5mcquae-g1u2l5-v7",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"السَّبْتُ\"؟", "What does \"Saturday\" mean?", "Apakah maksud \"Sabtu\"?", "Apa arti \"Sabtu\"?", "Que signifie \"samedi\" ?", "¿Qué significa \"sábado\"?"),
              arabicText: "السَّبْتُ",
              options: [
                "Saturday",
                "white",
                "sheep/lamb",
                "pigeon / dove"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f31f/512.webp"
            },
            {
              id: "uae-g1u2l5spelluae-g1u2l5-v2",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "الاثْنَيْنُ",
              answer: "الاثْنَيْنُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4c5/512.webp"
            }
          ]
        },
        {
          id: "uae-g1u2review",
          unitId: "uae-g1u2",
          gradeId: "uae-g1",
          order: 6,
          title: t("مراجعة الوحدة", "Unit Review", "Ulangan Unit", "Ulangan Unit", "Révision de l’unité", "Revisión de la unidad"),
          skills: [
            "listening",
            "reading",
            "writing"
          ],
          intro: t("لنراجع ما تعلّمناه في هذه الوحدة!", "Let’s review what we learned in this unit!", "Mari ulangkaji apa yang kita pelajari dalam unit ini!", "Mari kita ulang apa yang kita pelajari dalam unit ini!", "Révisons ce que nous avons appris dans cette unité !", "¡Repasemos lo que aprendimos en esta unidad!"),
          vocabulary: [
            {
              id: "uae-g1u2l1-v1",
              arabic: "أَبٌ",
              transliteration: "abun",
              translation: t("أَبٌ", "father", "ayah", "ayah", "père", "padre"),
              emoji: "👨"
            },
            {
              id: "uae-g1u2l1-v2",
              arabic: "أُمٌّ",
              transliteration: "ummun",
              translation: t("أُمٌّ", "mother", "ibu", "ibu", "mère", "madre"),
              emoji: "👩"
            },
            {
              id: "uae-g1u2l1-v3",
              arabic: "أَخٌ",
              transliteration: "akhun",
              translation: t("أَخٌ", "brother", "abang/adik lelaki", "kakak/adik laki-laki", "frère", "hermano"),
              emoji: "👦"
            },
            {
              id: "uae-g1u2l1-v4",
              arabic: "أُخْتٌ",
              transliteration: "ukhtun",
              translation: t("أُخْتٌ", "sister", "kakak/adik perempuan", "kakak/adik perempuan", "sœur", "hermana"),
              emoji: "👧"
            },
            {
              id: "uae-g1u2l1-v5",
              arabic: "جَدٌّ",
              transliteration: "jaddun",
              translation: t("جَدٌّ", "grandfather", "datuk", "kakek", "grand-père", "abuelo"),
              emoji: "👴"
            },
            {
              id: "uae-g1u2l1-v6",
              arabic: "جَدَّةٌ",
              transliteration: "jaddah",
              translation: t("جَدَّةٌ", "grandmother", "nenek", "nenek", "grand-mère", "abuela"),
              emoji: "👵"
            },
            {
              id: "uae-g1u2l1-v7",
              arabic: "عَمٌّ",
              transliteration: "ʿammun",
              translation: t("عَمٌّ", "uncle (father's brother)", "pak cik", "paman", "oncle", "tío"),
              emoji: "🧔"
            },
            {
              id: "uae-g1u2l1-v8",
              arabic: "عَمَّةٌ",
              transliteration: "ʿammah",
              translation: t("عَمَّةٌ", "aunt (father's sister)", "mak cik", "bibi", "tante", "tía"),
              emoji: "👩‍🦱"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "uae-g1u2reviewwriteuae-g1u2l1-v2",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"أُمٌّ\"", "Type the Arabic word for: \"mother\"", "Taip perkataan Arab untuk: \"ibu\"", "Ketik kata Arab untuk: \"ibu\"", "Tape le mot arabe pour : \"mère\"", "Escribe la palabra árabe para: \"madre\""),
              arabicText: "أُمٌّ",
              answer: "أُمٌّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f469/512.webp"
            },
            {
              id: "uae-g1u2reviewmcquae-g1u2l1-v8",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"عَمَّةٌ\"؟", "What does \"aunt (father's sister)\" mean?", "Apakah maksud \"mak cik\"?", "Apa arti \"bibi\"?", "Que signifie \"tante\" ?", "¿Qué significa \"tía\"?"),
              arabicText: "عَمَّةٌ",
              options: [
                "hexagon",
                "apple",
                "aunt (father's sister)",
                "mouse/rat"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f469-200d-1f9b1/512.webp"
            },
            {
              id: "uae-g1u2reviewwriteuae-g1u2l1-v7",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"عَمٌّ\"", "Type the Arabic word for: \"uncle (father's brother)\"", "Taip perkataan Arab untuk: \"pak cik\"", "Ketik kata Arab untuk: \"paman\"", "Tape le mot arabe pour : \"oncle\"", "Escribe la palabra árabe para: \"tío\""),
              arabicText: "عَمٌّ",
              answer: "عَمٌّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9d4/512.webp"
            },
            {
              id: "uae-g1u2reviewspelluae-g1u2l1-v1",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "أَبٌ",
              answer: "أَبٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468/512.webp"
            },
            {
              id: "uae-g1u2reviewspeakuae-g1u2l1-v5",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "جَدٌّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f474/512.webp"
            },
            {
              id: "uae-g1u2reviewwriteuae-g1u2l1-v5",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"جَدٌّ\"", "Type the Arabic word for: \"grandfather\"", "Taip perkataan Arab untuk: \"datuk\"", "Ketik kata Arab untuk: \"kakek\"", "Tape le mot arabe pour : \"grand-père\"", "Escribe la palabra árabe para: \"abuelo\""),
              arabicText: "جَدٌّ",
              answer: "جَدٌّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f474/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "uae-g1u3",
      gradeId: "uae-g1",
      order: 3,
      title: t("مِنْ عَالَمِ الحَيَوَانِ 1", "Animal World 1", "Dunia Haiwan 1", "Dunia Hewan 1", "Le monde animal 1", "El mundo animal 1"),
      theme: "animals",
      lessons: [
        {
          id: "uae-g1u3l1",
          unitId: "uae-g1u3",
          gradeId: "uae-g1",
          order: 1,
          title: t("حَرْفُ الأَلِف", "Alif", "Arnab — Huruf Alif", "Kelinci — Huruf Alif", "Le lapin — Lettre Alif", "conejo — Letra Alif"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الأَرْنَبُ حَيَوَانٌ لَطِيفٌ يَبْدَأُ بِحَرْفِ الأَلِف!", "The rabbit is a cute animal that starts with the letter Alif!", "Arnab adalah haiwan comel yang bermula dengan huruf Alif!", "Kelinci adalah hewan lucu yang dimulai dengan huruf Alif!", "Le lapin est un animal mignon qui commence par la lettre Alif !", "¡El conejo es un animal tierno que comienza con la letra Alif!"),
          vocabulary: [
            {
              id: "uae-g1u3l1-v1",
              arabic: "أَرْنَبٌ",
              transliteration: "arnabun",
              translation: t("أَرْنَبٌ", "rabbit", "arnab", "kelinci", "lapin", "conejo"),
              emoji: "🐇"
            },
            {
              id: "uae-g1u3l1-v2",
              arabic: "أَسَدٌ",
              transliteration: "asadun",
              translation: t("أَسَدٌ", "lion", "singa", "singa", "lion", "león"),
              emoji: "🦁"
            },
            {
              id: "uae-g1u3l1-v3",
              arabic: "أُمٌّ",
              transliteration: "ummun",
              translation: t("أُمٌّ", "mother", "ibu", "ibu", "mère", "madre"),
              emoji: "👩"
            },
            {
              id: "uae-g1u3l1-v4",
              arabic: "أَكَلَ",
              transliteration: "akala",
              translation: t("أَكَلَ", "ate/to eat", "makan", "makan", "mangea/manger", "comió/comer"),
              emoji: "🍽️"
            },
            {
              id: "uae-g1u3l1-v5",
              arabic: "أَزْرَقُ",
              transliteration: "azraqu",
              translation: t("أَزْرَقُ", "blue", "biru", "biru", "bleu", "azul"),
              emoji: "🔵"
            },
            {
              id: "uae-g1u3l1-v6",
              arabic: "أَبْيَضُ",
              transliteration: "abyaḍu",
              translation: t("أَبْيَضُ", "white", "putih", "putih", "blanc", "blanco"),
              emoji: "⚪"
            },
            {
              id: "uae-g1u3l1-v7",
              arabic: "أَخٌ",
              transliteration: "akhun",
              translation: t("أَخٌ", "brother", "abang/adik lelaki", "kakak/adik laki-laki", "frère", "hermano"),
              emoji: "👦"
            },
            {
              id: "uae-g1u3l1-v8",
              arabic: "أَرْضٌ",
              transliteration: "arḍun",
              translation: t("أَرْضٌ", "ground / earth", "tanah", "tanah", "terre", "tierra"),
              emoji: "🌍"
            },
            {
              id: "uae-g1u3l1-v9",
              arabic: "أُذُنٌ",
              transliteration: "udhun",
              translation: t("أُذُنٌ", "ear", "telinga", "telinga", "oreille", "oreja"),
              emoji: "👂"
            },
            {
              id: "uae-g1u3l1-v10",
              arabic: "أَمَلٌ",
              transliteration: "amalun",
              translation: t("أَمَلٌ", "hope", "harapan", "harapan", "espoir", "esperanza"),
              emoji: "🌟"
            }
          ],
          dialogue: [
            {
              speaker: "الأُمُّ",
              arabic: "انْظُرْ! هَذَا أَرْنَبٌ صَغِيرٌ!",
              translation: t("انْظُرْ! هَذَا أَرْنَبٌ صَغِيرٌ!", "Look! This is a little rabbit!", "Tengok! Ini arnab kecil!", "Lihat! Ini kelinci kecil!", "Regarde ! C'est un petit lapin !", "¡Mira! ¡Este es un conejito!")
            },
            {
              speaker: "الطِّفْلُ",
              arabic: "مَا أَجْمَلَهُ! أُرِيدُ أَنْ أَلْمَسَهُ.",
              translation: t("مَا أَجْمَلَهُ! أُرِيدُ أَنْ أَلْمَسَهُ.", "How beautiful! I want to touch it.", "Sungguh cantik! Saya nak sentuh.", "Betapa indahnya! Saya mau menyentuhnya.", "Qu'il est beau ! Je veux le toucher.", "¡Qué bonito! Quiero tocarlo.")
            },
            {
              speaker: "الأُمُّ",
              arabic: "بِرِفْقٍ يَا بُنَيَّ! الأَرْنَبُ خَائِفٌ.",
              translation: t("بِرِفْقٍ يَا بُنَيَّ! الأَرْنَبُ خَائِفٌ.", "Gently my son! The rabbit is scared.", "Perlahan anak! Arnab takut.", "Pelan-pelan anakku! Kelinci itu takut.", "Doucement mon fils ! Le lapin a peur.", "¡Con cuidado hijo! El conejo tiene miedo.")
            }
          ],
          exercises: [
            {
              id: "uae-g1u3l1-e1",
              type: "mcq",
              skill: "reading",
              prompt: t("بِأَيِّ حَرْفٍ تَبْدَأُ كَلِمَة أَرْنَبٌ؟", "What letter does أَرْنَبٌ start with?", "Huruf apakah yang memulakan أَرْنَبٌ?", "Huruf apa yang mengawali أَرْنَبٌ?", "Par quelle lettre commence أَرْنَبٌ ?", "¿Con qué letra comienza أَرْنَبٌ?"),
              options: [
                "ب",
                "أ",
                "ت",
                "ن"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f407/512.webp"
            },
            {
              id: "uae-g1u3l1-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالرَّمْزِ", "Match the word to its emoji", "Padankan perkataan dengan emoji", "Cocokkan kata dengan emoji", "Associe le mot à son emoji", "Relaciona la palabra con su emoji"),
              pairs: [
                {
                  a: "أَرْنَبٌ",
                  b: "🐇"
                },
                {
                  a: "أَسَدٌ",
                  b: "🦁"
                },
                {
                  a: "أَكَلَ",
                  b: "🍽️"
                },
                {
                  a: "أَزْرَقُ",
                  b: "🔵"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f407/512.webp"
            },
            {
              id: "uae-g1u3l1-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ كَلِمَة أَرْنَبٌ بِوُضُوح", "Say the word أَرْنَبٌ clearly", "Sebut perkataan أَرْنَبٌ dengan jelas", "Ucapkan kata أَرْنَبٌ dengan jelas", "Dis le mot أَرْنَبٌ clairement", "Di la palabra أَرْنَبٌ claramente"),
              arabicText: "أَرْنَبٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f407/512.webp"
            },
            {
              id: "uae-g1u3l1-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة أَرْنَبٌ", "Write the word أَرْنَبٌ", "Tulis perkataan أَرْنَبٌ", "Tulis kata أَرْنَبٌ", "Écris le mot أَرْنَبٌ", "Escribe la palabra أَرْنَبٌ"),
              arabicText: "أَرْنَبٌ",
              answer: "أَرْنَبٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f407/512.webp"
            },
            {
              id: "uae-g1u3l1-e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا لَوْنُ الأَرْنَبِ عَادَةً؟", "What color is a rabbit usually?", "Apa warna arnab biasanya?", "Apa warna kelinci biasanya?", "De quelle couleur est un lapin en général ?", "¿De qué color es un conejo generalmente?"),
              options: [
                "أَزْرَقُ",
                "أَصْفَرُ",
                "أَبْيَضُ",
                "أَخْضَرُ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f407/512.webp"
            },
            {
              id: "uae-g1u3l1-e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَاتِ الجَدِيدَة بِالأَلِف بِرُمُوزِهَا", "Match new Alif words to their emojis", "Padankan perkataan baru dengan Alif kepada emoji", "Cocokkan kata baru dengan Alif dengan emoji", "Associe les nouveaux mots avec Alif à leurs emojis", "Relaciona las nuevas palabras con Alif con sus emojis"),
              pairs: [
                {
                  a: "أَبْيَضُ",
                  b: "⚪"
                },
                {
                  a: "أَخٌ",
                  b: "👦"
                },
                {
                  a: "أَرْضٌ",
                  b: "🌍"
                },
                {
                  a: "أُذُنٌ",
                  b: "👂"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f407/512.webp"
            },
            {
              id: "uae-g1u3l1-e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("اذْكُرْ خَمْسَ كَلِمَاتٍ تَبْدَأُ بِالأَلِف", "Name five words that start with Alif", "Sebutkan lima perkataan yang bermula dengan Alif", "Sebutkan lima kata yang dimulai dengan Alif", "Nomme cinq mots qui commencent par Alif", "Nombra cinco palabras que empiecen con Alif"),
              arabicText: "أَرْنَبٌ، أَسَدٌ، أُمٌّ، أَزْرَقُ، أَخٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f407/512.webp"
            },
            {
              id: "uae-g1u3l1-e8",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة أَسَدٌ", "Write the word أَسَدٌ", "Tulis perkataan أَسَدٌ", "Tulis kata أَسَدٌ", "Écris le mot أَسَدٌ", "Escribe la palabra أَسَدٌ"),
              arabicText: "أَسَدٌ",
              answer: "أَسَدٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f981/512.webp"
            },
            {
              id: "uae-g1u3l1e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "انْظُرْ! هَذَا أَرْنَبٌ صَغِيرٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f407/512.webp"
            },
            {
              id: "uae-g1u3l1spelluae-g1u3l1-v6",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "أَبْيَضُ",
              answer: "أَبْيَضُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26aa/512.webp"
            },
            {
              id: "uae-g1u3l1listenuae-g1u3l1-v7",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "أَخٌ",
              options: [
                "مَاءٌ",
                "أَخٌ",
                "أَبْيَضُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f466/512.webp"
            },
            {
              id: "uae-g1u3l1mcquae-g1u3l1-v4",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"أَكَلَ\"؟", "What does \"ate/to eat\" mean?", "Apakah maksud \"makan\"?", "Apa arti \"makan\"?", "Que signifie \"mangea/manger\" ?", "¿Qué significa \"comió/comer\"?"),
              arabicText: "أَكَلَ",
              options: [
                "ate/to eat",
                "walked/to walk",
                "knowledge / science",
                "dog"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f37d-fe0f/512.webp"
            }
          ]
        },
        {
          id: "uae-g1u3l2",
          unitId: "uae-g1u3",
          gradeId: "uae-g1",
          order: 2,
          title: t("حَرْفُ الْبَاء", "Ba", "Itik — Huruf Ba", "Bebek — Huruf Ba", "Le canard — Lettre Ba", "pato — Letra Ba"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الْبَطَّةُ تُحِبُّ الْمَاءَ! وَتَبْدَأُ بِحَرْفِ الْبَاء!", "The duck loves water! It starts with the letter Ba!", "Itik suka air! Bermula dengan huruf Ba!", "Bebek suka air! Dimulai dengan huruf Ba!", "Le canard aime l'eau ! Il commence par la lettre Ba !", "¡Al pato le encanta el agua! ¡Comienza con la letra Ba!"),
          vocabulary: [
            {
              id: "uae-g1u3l2-v1",
              arabic: "بَطَّةٌ",
              transliteration: "baṭṭah",
              translation: t("بَطَّةٌ", "duck", "itik", "bebek", "canard", "pato"),
              emoji: "🦆"
            },
            {
              id: "uae-g1u3l2-v2",
              arabic: "بَيْتٌ",
              transliteration: "baytun",
              translation: t("بَيْتٌ", "house", "rumah", "rumah", "maison", "casa"),
              emoji: "🏠"
            },
            {
              id: "uae-g1u3l2-v3",
              arabic: "بَحْرٌ",
              transliteration: "baḥrun",
              translation: t("بَحْرٌ", "sea", "laut", "laut", "mer", "mar"),
              emoji: "🌊"
            },
            {
              id: "uae-g1u3l2-v4",
              arabic: "بُرْتُقَالٌ",
              transliteration: "burtuqālun",
              translation: t("بُرْتُقَالٌ", "orange", "oren", "jeruk", "orange", "naranja"),
              emoji: "🍊"
            },
            {
              id: "uae-g1u3l2-v5",
              arabic: "بَارِدٌ",
              transliteration: "bāridun",
              translation: t("بَارِدٌ", "cold", "sejuk", "dingin", "froid", "frío"),
              emoji: "❄️"
            },
            {
              id: "uae-g1u3l2-v6",
              arabic: "بَقَرَةٌ",
              transliteration: "baqarah",
              translation: t("بَقَرَةٌ", "cow", "lembu", "sapi", "vache", "vaca"),
              emoji: "🐄"
            },
            {
              id: "uae-g1u3l2-v7",
              arabic: "بَابٌ",
              transliteration: "bābun",
              translation: t("بَابٌ", "door", "pintu", "pintu", "porte", "puerta"),
              emoji: "🚪"
            },
            {
              id: "uae-g1u3l2-v8",
              arabic: "بَلَدٌ",
              transliteration: "baladun",
              translation: t("بَلَدٌ", "country / town", "negara/bandar", "negara/kota", "pays/ville", "país/ciudad"),
              emoji: "🏙️"
            },
            {
              id: "uae-g1u3l2-v9",
              arabic: "بَنَى",
              transliteration: "banā",
              translation: t("بَنَى", "built / to build", "membina", "membangun", "construisit/construire", "construyó/construir"),
              emoji: "🏗️"
            },
            {
              id: "uae-g1u3l2-v10",
              arabic: "بُسْتَانٌ",
              transliteration: "bustānun",
              translation: t("بُسْتَانٌ", "orchard / garden", "ladang/taman", "kebun", "verger/jardin", "huerto/jardín"),
              emoji: "🌳"
            }
          ],
          dialogue: [
            {
              speaker: "رِيمَ",
              arabic: "انْظُرِي إِلَى الْبَطَّةِ فِي الْبَحْرِ!",
              translation: t("انْظُرِي إِلَى الْبَطَّةِ فِي الْبَحْرِ!", "Look at the duck in the sea!", "Tengok itik di laut!", "Lihat bebek di laut!", "Regarde le canard dans la mer !", "¡Mira el pato en el mar!")
            },
            {
              speaker: "لَيْلَى",
              arabic: "نَعَمْ! الْبَطَّةُ تَسْبَحُ بِسُرْعَة!",
              translation: t("نَعَمْ! الْبَطَّةُ تَسْبَحُ بِسُرْعَة!", "Yes! The duck swims fast!", "Ya! Itik berenang dengan cepat!", "Ya! Bebek berenang dengan cepat!", "Oui ! Le canard nage vite !", "¡Sí! ¡El pato nada rápido!")
            },
            {
              speaker: "رِيمَ",
              arabic: "لَكِنَّ الْمَاءَ بَارِدٌ جِدًّا!",
              translation: t("لَكِنَّ الْمَاءَ بَارِدٌ جِدًّا!", "But the water is very cold!", "Tapi air itu sangat sejuk!", "Tapi airnya sangat dingin!", "Mais l'eau est très froide !", "¡Pero el agua está muy fría!")
            }
          ],
          exercises: [
            {
              id: "uae-g1u3l2-e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "بَطَّةٌ",
              options: [
                "بَيْتٌ",
                "بَطَّةٌ",
                "بَحْرٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f986/512.webp"
            },
            {
              id: "uae-g1u3l2-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالرَّمْزِ", "Match the word to its emoji", "Padankan perkataan dengan emoji", "Cocokkan kata dengan emoji", "Associe le mot à son emoji", "Relaciona la palabra con su emoji"),
              pairs: [
                {
                  a: "بَطَّةٌ",
                  b: "🦆"
                },
                {
                  a: "بَيْتٌ",
                  b: "🏠"
                },
                {
                  a: "بَحْرٌ",
                  b: "🌊"
                },
                {
                  a: "بَارِدٌ",
                  b: "❄️"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f986/512.webp"
            },
            {
              id: "uae-g1u3l2-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ كَلِمَة بَطَّةٌ بِوُضُوح", "Say the word بَطَّةٌ clearly", "Sebut perkataan بَطَّةٌ dengan jelas", "Ucapkan kata بَطَّةٌ dengan jelas", "Dis le mot بَطَّةٌ clairement", "Di la palabra بَطَّةٌ claramente"),
              arabicText: "بَطَّةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f986/512.webp"
            },
            {
              id: "uae-g1u3l2-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة بَيْتٌ", "Write the word بَيْتٌ", "Tulis perkataan بَيْتٌ", "Tulis kata بَيْتٌ", "Écris le mot بَيْتٌ", "Escribe la palabra بَيْتٌ"),
              arabicText: "بَيْتٌ",
              answer: "بَيْتٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e0/512.webp"
            },
            {
              id: "uae-g1u3l2-e5",
              type: "mcq",
              skill: "reading",
              prompt: t("أَيْنَ تَسْبَحُ الْبَطَّة؟", "Where does the duck swim?", "Di mana itik berenang?", "Di mana bebek berenang?", "Où le canard nage-t-il ?", "¿Dónde nada el pato?"),
              options: [
                "فِي الْجَبَل",
                "فِي الْبَحْر",
                "فِي الصَّحْرَاء",
                "فِي الْبُسْتَان"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f986/512.webp"
            },
            {
              id: "uae-g1u3l2-e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَاتِ الجَدِيدَة بِالْبَاء بِرُمُوزِهَا", "Match new Ba words to their emojis", "Padankan perkataan baru dengan Ba kepada emoji", "Cocokkan kata baru dengan Ba dengan emoji", "Associe les nouveaux mots avec Ba à leurs emojis", "Relaciona las nuevas palabras con Ba con sus emojis"),
              pairs: [
                {
                  a: "بَقَرَةٌ",
                  b: "🐄"
                },
                {
                  a: "بَابٌ",
                  b: "🚪"
                },
                {
                  a: "بَلَدٌ",
                  b: "🏙️"
                },
                {
                  a: "بُسْتَانٌ",
                  b: "🌳"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f986/512.webp"
            },
            {
              id: "uae-g1u3l2-e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("اذْكُرْ خَمْسَ كَلِمَاتٍ تَبْدَأُ بِالْبَاء", "Name five words that start with Ba", "Sebutkan lima perkataan yang bermula dengan Ba", "Sebutkan lima kata yang dimulai dengan Ba", "Nomme cinq mots qui commencent par Ba", "Nombra cinco palabras que empiecen con Ba"),
              arabicText: "بَطَّةٌ، بَيْتٌ، بَحْرٌ، بَقَرَةٌ، بَابٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f986/512.webp"
            },
            {
              id: "uae-g1u3l2-e8",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة بَقَرَةٌ", "Write the word بَقَرَةٌ", "Tulis perkataan بَقَرَةٌ", "Tulis kata بَقَرَةٌ", "Écris le mot بَقَرَةٌ", "Escribe la palabra بَقَرَةٌ"),
              arabicText: "بَقَرَةٌ",
              answer: "بَقَرَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f404/512.webp"
            },
            {
              id: "uae-g1u3l2e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "انْظُرِي إِلَى الْبَطَّةِ فِي الْبَحْرِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f986/512.webp"
            },
            {
              id: "uae-g1u3l2mcquae-g1u3l2-v7",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"بَابٌ\"؟", "What does \"door\" mean?", "Apakah maksud \"pintu\"?", "Apa arti \"pintu\"?", "Que signifie \"porte\" ?", "¿Qué significa \"puerta\"?"),
              arabicText: "بَابٌ",
              options: [
                "door",
                "how are you?",
                "seven",
                "mother"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6aa/512.webp"
            },
            {
              id: "uae-g1u3l2arrange1",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "انْظُرِي إِلَى الْبَطَّةِ فِي الْبَحْرِ!",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f986/512.webp"
            },
            {
              id: "uae-g1u3l2spelluae-g1u3l2-v7",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "بَابٌ",
              answer: "بَابٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6aa/512.webp"
            }
          ]
        },
        {
          id: "uae-g1u3l3",
          unitId: "uae-g1u3",
          gradeId: "uae-g1",
          order: 3,
          title: t("حَرْفُ التَّاء", "Ta", "Buaya — Huruf Ta", "Buaya — Huruf Ta", "Le crocodile — Lettre Ta", "cocodrilo — Letra Ta"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("التِّمْسَاحُ حَيَوَانٌ قَوِيٌّ! وَاسْمُهُ يَبْدَأُ بِالتَّاء!", "The crocodile is a powerful animal! Its name starts with Ta!", "Buaya adalah haiwan yang kuat! Namanya bermula dengan Ta!", "Buaya adalah hewan yang kuat! Namanya dimulai dengan Ta!", "Le crocodile est un animal puissant ! Son nom commence par Ta !", "¡El cocodrilo es un animal poderoso! ¡Su nombre empieza con Ta!"),
          vocabulary: [
            {
              id: "uae-g1u3l3-v1",
              arabic: "تِمْسَاحٌ",
              transliteration: "timsāḥun",
              translation: t("تِمْسَاحٌ", "crocodile", "buaya", "buaya", "crocodile", "cocodrilo"),
              emoji: "🐊"
            },
            {
              id: "uae-g1u3l3-v2",
              arabic: "تُفَّاحَةٌ",
              transliteration: "tuffāḥah",
              translation: t("تُفَّاحَةٌ", "apple", "epal", "apel", "pomme", "manzana"),
              emoji: "🍎"
            },
            {
              id: "uae-g1u3l3-v3",
              arabic: "تَمْرٌ",
              transliteration: "tamrun",
              translation: t("تَمْرٌ", "dates (fruit)", "kurma", "kurma", "dattes", "dátiles"),
              emoji: "🌴"
            },
            {
              id: "uae-g1u3l3-v4",
              arabic: "تَعَلَّمَ",
              transliteration: "taʿallama",
              translation: t("تَعَلَّمَ", "learned/to learn", "belajar", "belajar", "apprit/apprendre", "aprendió/aprender"),
              emoji: "📚"
            },
            {
              id: "uae-g1u3l3-v5",
              arabic: "تَحِيَّةٌ",
              transliteration: "taḥiyyah",
              translation: t("تَحِيَّةٌ", "greeting", "salam", "salam", "salutation", "saludo"),
              emoji: "🙋"
            },
            {
              id: "uae-g1u3l3-v6",
              arabic: "تِلْمِيذٌ",
              transliteration: "tilmīdhun",
              translation: t("تِلْمِيذٌ", "student / pupil", "murid", "murid", "élève", "alumno"),
              emoji: "🧑‍🎓"
            },
            {
              id: "uae-g1u3l3-v7",
              arabic: "تَلَّةٌ",
              transliteration: "tallah",
              translation: t("تَلَّةٌ", "hill", "bukit kecil", "bukit kecil", "colline", "colina"),
              emoji: "🏔️"
            },
            {
              id: "uae-g1u3l3-v8",
              arabic: "تَمْثَالٌ",
              transliteration: "timthālun",
              translation: t("تَمْثَالٌ", "statue", "patung", "patung", "statue", "estatua"),
              emoji: "🗿"
            },
            {
              id: "uae-g1u3l3-v9",
              arabic: "تُرَابٌ",
              transliteration: "turābun",
              translation: t("تُرَابٌ", "soil / dirt", "tanah", "tanah", "terre/sol", "tierra/suelo"),
              emoji: "🌱"
            },
            {
              id: "uae-g1u3l3-v10",
              arabic: "تَقَدَّمَ",
              transliteration: "taqaddama",
              translation: t("تَقَدَّمَ", "advanced / progressed", "maju", "maju", "progressa", "avanzó"),
              emoji: "🚀"
            }
          ],
          dialogue: [
            {
              speaker: "سَامِي",
              arabic: "هَلْ رَأَيْتَ التِّمْسَاحَ فِي الْحَدِيقَة؟",
              translation: t("هَلْ رَأَيْتَ التِّمْسَاحَ فِي الْحَدِيقَة؟", "Did you see the crocodile in the zoo?", "Adakah kamu nampak buaya di zoo?", "Apakah kamu melihat buaya di kebun binatang?", "As-tu vu le crocodile au zoo ?", "¿Viste el cocodrilo en el zoológico?")
            },
            {
              speaker: "دِينَا",
              arabic: "نَعَمْ! إِنَّهُ كَبِيرٌ جِدًّا وَمُخِيف!",
              translation: t("نَعَمْ! إِنَّهُ كَبِيرٌ جِدًّا وَمُخِيف!", "Yes! It's very big and scary!", "Ya! Ia sangat besar dan menakutkan!", "Ya! Sangat besar dan menakutkan!", "Oui ! Il est très grand et effrayant !", "¡Sí! ¡Es muy grande y aterrador!")
            },
            {
              speaker: "سَامِي",
              arabic: "لَكِنَّهُ جَمِيلٌ فِي الطَّبِيعَة!",
              translation: t("لَكِنَّهُ جَمِيلٌ فِي الطَّبِيعَة!", "But it's beautiful in nature!", "Tapi ia cantik di alam semula jadi!", "Tapi indah di alam liar!", "Mais il est magnifique dans la nature !", "¡Pero es hermoso en la naturaleza!")
            }
          ],
          exercises: [
            {
              id: "uae-g1u3l3-e1",
              type: "mcq",
              skill: "reading",
              prompt: t("بِأَيِّ حَرْفٍ تَبْدَأُ كَلِمَة تِمْسَاحٌ؟", "What letter does تِمْسَاحٌ start with?", "Huruf apakah yang memulakan تِمْسَاحٌ?", "Huruf apa yang mengawali تِمْسَاحٌ?", "Par quelle lettre commence تِمْسَاحٌ ?", "¿Con qué letra comienza تِمْسَاحٌ?"),
              options: [
                "أ",
                "ب",
                "ت",
                "ث"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f40a/512.webp"
            },
            {
              id: "uae-g1u3l3-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالرَّمْزِ", "Match the word to its emoji", "Padankan perkataan dengan emoji", "Cocokkan kata dengan emoji", "Associe le mot à son emoji", "Relaciona la palabra con su emoji"),
              pairs: [
                {
                  a: "تِمْسَاحٌ",
                  b: "🐊"
                },
                {
                  a: "تُفَّاحَةٌ",
                  b: "🍎"
                },
                {
                  a: "تَمْرٌ",
                  b: "🌴"
                },
                {
                  a: "تَعَلَّمَ",
                  b: "📚"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f40a/512.webp"
            },
            {
              id: "uae-g1u3l3-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ كَلِمَة تِمْسَاحٌ بِوُضُوح", "Say the word تِمْسَاحٌ clearly", "Sebut perkataan تِمْسَاحٌ dengan jelas", "Ucapkan kata تِمْسَاحٌ dengan jelas", "Dis le mot تِمْسَاحٌ clairement", "Di la palabra تِمْسَاحٌ claramente"),
              arabicText: "تِمْسَاحٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f40a/512.webp"
            },
            {
              id: "uae-g1u3l3-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة تَمْرٌ", "Write the word تَمْرٌ", "Tulis perkataan تَمْرٌ", "Tulis kata تَمْرٌ", "Écris le mot تَمْرٌ", "Escribe la palabra تَمْرٌ"),
              arabicText: "تَمْرٌ",
              answer: "تَمْرٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f334/512.webp"
            },
            {
              id: "uae-g1u3l3-e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَاذَا يَأْكُلُ التِّمْسَاح؟", "What does the crocodile eat?", "Apa yang dimakan buaya?", "Apa yang dimakan buaya?", "Que mange le crocodile ?", "¿Qué come el cocodrilo?"),
              options: [
                "التَّمْر",
                "الأَسْمَاك",
                "الْخُبْز",
                "الأَرُزّ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f40a/512.webp"
            },
            {
              id: "uae-g1u3l3-e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَاتِ الجَدِيدَة بِالتَّاء بِرُمُوزِهَا", "Match new Ta words to their emojis", "Padankan perkataan baru dengan Ta kepada emoji", "Cocokkan kata baru dengan Ta dengan emoji", "Associe les nouveaux mots avec Ta à leurs emojis", "Relaciona las nuevas palabras con Ta con sus emojis"),
              pairs: [
                {
                  a: "تِلْمِيذٌ",
                  b: "🧑‍🎓"
                },
                {
                  a: "تُرَابٌ",
                  b: "🌱"
                },
                {
                  a: "تَقَدَّمَ",
                  b: "🚀"
                },
                {
                  a: "تَحِيَّةٌ",
                  b: "🙋"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f40a/512.webp"
            },
            {
              id: "uae-g1u3l3-e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("صِفِ التِّمْسَاحَ بِثَلَاثِ كَلِمَات", "Describe the crocodile with three words", "Huraikan buaya dengan tiga perkataan", "Deskripsikan buaya dengan tiga kata", "Décris le crocodile avec trois mots", "Describe el cocodrilo con tres palabras"),
              arabicText: "التِّمْسَاحُ كَبِيرٌ وَقَوِيٌّ وَمُخِيفٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f40a/512.webp"
            },
            {
              id: "uae-g1u3l3-e8",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة تِلْمِيذٌ", "Write the word تِلْمِيذٌ", "Tulis perkataan تِلْمِيذٌ", "Tulis kata تِلْمِيذٌ", "Écris le mot تِلْمِيذٌ", "Escribe la palabra تِلْمِيذٌ"),
              arabicText: "تِلْمِيذٌ",
              answer: "تِلْمِيذٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9d1-200d-1f393/512.webp"
            },
            {
              id: "uae-g1u3l3e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَلْ رَأَيْتَ التِّمْسَاحَ فِي الْحَدِيقَة",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f40a/512.webp"
            },
            {
              id: "uae-g1u3l3speakuae-g1u3l3-v10",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "تَقَدَّمَ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.webp"
            },
            {
              id: "uae-g1u3l3mcquae-g1u3l3-v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"تِمْسَاحٌ\"؟", "What does \"crocodile\" mean?", "Apakah maksud \"buaya\"?", "Apa arti \"buaya\"?", "Que signifie \"crocodile\" ?", "¿Qué significa \"cocodrilo\"?"),
              arabicText: "تِمْسَاحٌ",
              options: [
                "writes / to write",
                "appeared/to appear",
                "crocodile",
                "purple"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f40a/512.webp"
            },
            {
              id: "uae-g1u3l3speakuae-g1u3l3-v2",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "تُفَّاحَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f34e/512.webp"
            }
          ]
        },
        {
          id: "uae-g1u3l4",
          unitId: "uae-g1u3",
          gradeId: "uae-g1",
          order: 4,
          title: t("حَرْفُ الثَّاء", "Tha", "Musang — Huruf Tha", "Rubah — Huruf Tsa", "Le renard — Lettre Tha", "zorro — Letra Tha"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الثَّعْلَبُ ذَكِيٌّ! وَاسْمُهُ يَبْدَأُ بِالثَّاء!", "The fox is clever! Its name starts with Tha!", "Musang itu bijak! Namanya bermula dengan Tha!", "Rubah itu cerdas! Namanya dimulai dengan Tsa!", "Le renard est intelligent ! Son nom commence par Tha !", "¡El zorro es listo! ¡Su nombre empieza con Tha!"),
          vocabulary: [
            {
              id: "uae-g1u3l4-v1",
              arabic: "ثَعْلَبٌ",
              transliteration: "thaʿlabun",
              translation: t("ثَعْلَبٌ", "fox", "musang", "rubah", "renard", "zorro"),
              emoji: "🦊"
            },
            {
              id: "uae-g1u3l4-v2",
              arabic: "ثَلَاثَةٌ",
              transliteration: "thalāthah",
              translation: t("ثَلَاثَةٌ", "three", "tiga", "tiga", "trois", "tres"),
              emoji: "3️⃣"
            },
            {
              id: "uae-g1u3l4-v3",
              arabic: "ثَمَرٌ",
              transliteration: "thamarun",
              translation: t("ثَمَرٌ", "fruit", "buah", "buah", "fruit", "fruta"),
              emoji: "🍇"
            },
            {
              id: "uae-g1u3l4-v4",
              arabic: "ثَلْجٌ",
              transliteration: "thaljun",
              translation: t("ثَلْجٌ", "snow/ice", "salji", "salju", "neige", "nieve"),
              emoji: "❄️"
            },
            {
              id: "uae-g1u3l4-v5",
              arabic: "ثَقِيلٌ",
              transliteration: "thaqīlun",
              translation: t("ثَقِيلٌ", "heavy", "berat", "berat", "lourd", "pesado"),
              emoji: "⚖️"
            },
            {
              id: "uae-g1u3l4-v6",
              arabic: "ثَمِينٌ",
              transliteration: "thamīnun",
              translation: t("ثَمِينٌ", "precious / valuable", "berharga", "berharga", "précieux", "precioso"),
              emoji: "💎"
            },
            {
              id: "uae-g1u3l4-v7",
              arabic: "ثَوْبٌ",
              transliteration: "thawbun",
              translation: t("ثَوْبٌ", "robe / garment", "jubah", "jubah", "vêtement/robe", "ropa/vestido"),
              emoji: "👘"
            },
            {
              id: "uae-g1u3l4-v8",
              arabic: "ثُعْبَانٌ",
              transliteration: "thuʿbānun",
              translation: t("ثُعْبَانٌ", "snake", "ular", "ular", "serpent", "serpiente"),
              emoji: "🐍"
            },
            {
              id: "uae-g1u3l4-v9",
              arabic: "ثِقَةٌ",
              transliteration: "thiqah",
              translation: t("ثِقَةٌ", "trust / confidence", "kepercayaan", "kepercayaan", "confiance", "confianza"),
              emoji: "🤝"
            },
            {
              id: "uae-g1u3l4-v10",
              arabic: "ثَرْوَةٌ",
              transliteration: "tharwah",
              translation: t("ثَرْوَةٌ", "wealth / fortune", "kekayaan", "kekayaan", "richesse", "riqueza"),
              emoji: "💰"
            }
          ],
          dialogue: [
            {
              speaker: "الْجَدُّ",
              arabic: "يَا أَطْفَال! اسْمَعُوا قِصَّةَ الثَّعْلَب!",
              translation: t("يَا أَطْفَال! اسْمَعُوا قِصَّةَ الثَّعْلَب!", "Children! Listen to the fox story!", "Budak-budak! Dengar cerita musang!", "Anak-anak! Dengarkan cerita rubah!", "Enfants ! Écoutez l'histoire du renard !", "¡Niños! ¡Escuchen el cuento del zorro!")
            },
            {
              speaker: "الأَطْفَال",
              arabic: "نَعَمْ جَدُّو! نَحْنُ نُحِبُّ الْقِصَص!",
              translation: t("نَعَمْ جَدُّو! نَحْنُ نُحِبُّ الْقِصَص!", "Yes grandpa! We love stories!", "Ya datuk! Kami suka cerita!", "Ya kakek! Kami suka cerita!", "Oui grand-père ! Nous aimons les histoires !", "¡Sí abuelo! ¡Nos encantan los cuentos!")
            },
            {
              speaker: "الْجَدُّ",
              arabic: "الثَّعْلَبُ ذَكِيٌّ لَكِنَّهُ يَجِبُ أَنْ يَكُونَ صَادِقاً!",
              translation: t("الثَّعْلَبُ ذَكِيٌّ لَكِنَّهُ يَجِبُ أَنْ يَكُونَ صَادِقاً!", "The fox is clever but must be honest!", "Musang itu bijak tapi mesti jujur!", "Rubah itu cerdas tapi harus jujur!", "Le renard est intelligent mais doit être honnête !", "¡El zorro es listo pero debe ser honesto!")
            }
          ],
          exercises: [
            {
              id: "uae-g1u3l4-e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "ثَعْلَبٌ",
              options: [
                "ثَلْجٌ",
                "ثَعْلَبٌ",
                "ثَمَرٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f98a/512.webp"
            },
            {
              id: "uae-g1u3l4-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالرَّمْزِ", "Match the word to its emoji", "Padankan perkataan dengan emoji", "Cocokkan kata dengan emoji", "Associe le mot à son emoji", "Relaciona la palabra con su emoji"),
              pairs: [
                {
                  a: "ثَعْلَبٌ",
                  b: "🦊"
                },
                {
                  a: "ثَمَرٌ",
                  b: "🍇"
                },
                {
                  a: "ثَلْجٌ",
                  b: "❄️"
                },
                {
                  a: "ثَقِيلٌ",
                  b: "⚖️"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f98a/512.webp"
            },
            {
              id: "uae-g1u3l4-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ كَلِمَة ثَعْلَبٌ بِوُضُوح", "Say the word ثَعْلَبٌ clearly", "Sebut perkataan ثَعْلَبٌ dengan jelas", "Ucapkan kata ثَعْلَبٌ dengan jelas", "Dis le mot ثَعْلَبٌ clairement", "Di la palabra ثَعْلَبٌ claramente"),
              arabicText: "ثَعْلَبٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f98a/512.webp"
            },
            {
              id: "uae-g1u3l4-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة ثَلْجٌ", "Write the word ثَلْجٌ", "Tulis perkataan ثَلْجٌ", "Tulis kata ثَلْجٌ", "Écris le mot ثَلْجٌ", "Escribe la palabra ثَلْجٌ"),
              arabicText: "ثَلْجٌ",
              answer: "ثَلْجٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2744-fe0f/512.webp"
            },
            {
              id: "uae-g1u3l4-e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا صِفَةُ الثَّعْلَب؟", "What is the fox known for?", "Apakah sifat musang?", "Apa sifat rubah?", "Quelle est la caractéristique du renard ?", "¿Por qué se conoce al zorro?"),
              options: [
                "الْقُوَّة",
                "الذَّكَاء",
                "الْحَجْم",
                "السُّرْعَة"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f98a/512.webp"
            },
            {
              id: "uae-g1u3l4-e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَاتِ الجَدِيدَة بِالثَّاء بِرُمُوزِهَا", "Match new Tha words to their emojis", "Padankan perkataan baru dengan Tha kepada emoji", "Cocokkan kata baru dengan Tsa dengan emoji", "Associe les nouveaux mots avec Tha à leurs emojis", "Relaciona las nuevas palabras con Tha con sus emojis"),
              pairs: [
                {
                  a: "ثَمِينٌ",
                  b: "💎"
                },
                {
                  a: "ثُعْبَانٌ",
                  b: "🐍"
                },
                {
                  a: "ثِقَةٌ",
                  b: "🤝"
                },
                {
                  a: "ثَرْوَةٌ",
                  b: "💰"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f98a/512.webp"
            },
            {
              id: "uae-g1u3l4-e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ جُمْلَةً عَنِ الثَّعْلَب", "Say a sentence about the fox", "Ucapkan ayat tentang musang", "Ucapkan kalimat tentang rubah", "Dis une phrase sur le renard", "Di una oración sobre el zorro"),
              arabicText: "الثَّعْلَبُ حَيَوَانٌ ذَكِيٌّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f98a/512.webp"
            },
            {
              id: "uae-g1u3l4-e8",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة ثَعْلَبٌ", "Write the word ثَعْلَبٌ", "Tulis perkataan ثَعْلَبٌ", "Tulis kata ثَعْلَبٌ", "Écris le mot ثَعْلَبٌ", "Escribe la palabra ثَعْلَبٌ"),
              arabicText: "ثَعْلَبٌ",
              answer: "ثَعْلَبٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f98a/512.webp"
            },
            {
              id: "uae-g1u3l4e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "يَا أَطْفَال! اسْمَعُوا قِصَّةَ الثَّعْلَب",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f98a/512.webp"
            },
            {
              id: "uae-g1u3l4writeuae-g1u3l4-v8",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"ثُعْبَانٌ\"", "Type the Arabic word for: \"snake\"", "Taip perkataan Arab untuk: \"ular\"", "Ketik kata Arab untuk: \"ular\"", "Tape le mot arabe pour : \"serpent\"", "Escribe la palabra árabe para: \"serpiente\""),
              arabicText: "ثُعْبَانٌ",
              answer: "ثُعْبَانٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f40d/512.webp"
            },
            {
              id: "uae-g1u3l4listenuae-g1u3l4-v6",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "ثَمِينٌ",
              options: [
                "فَرَاشَةٌ",
                "ثَمِينٌ",
                "يَدٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f48e/512.webp"
            },
            {
              id: "uae-g1u3l4spelluae-g1u3l4-v8",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "ثُعْبَانٌ",
              answer: "ثُعْبَانٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f40d/512.webp"
            }
          ]
        },
        {
          id: "uae-g1u3l5",
          unitId: "uae-g1u3",
          gradeId: "uae-g1",
          order: 5,
          title: t("حَرْفُ الْجِيم", "Jim", "Unta — Huruf Jim", "Unta — Huruf Jim", "Le chameau — Lettre Jim", "camello — Letra Yim"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الْجَمَلُ سَفِينَةُ الصَّحْرَاء! يَبْدَأُ بِحَرْفِ الْجِيم!", "The camel is the ship of the desert! It starts with the letter Jim!", "Unta adalah kapal padang pasir! Bermula dengan huruf Jim!", "Unta adalah kapal padang pasir! Dimulai dengan huruf Jim!", "Le chameau est le vaisseau du désert ! Il commence par la lettre Jim !", "¡El camello es el barco del desierto! ¡Empieza con la letra Yim!"),
          vocabulary: [
            {
              id: "uae-g1u3l5-v1",
              arabic: "جَمَلٌ",
              transliteration: "jamalun",
              translation: t("جَمَلٌ", "camel", "unta", "unta", "chameau", "camello"),
              emoji: "🐪"
            },
            {
              id: "uae-g1u3l5-v2",
              arabic: "جَبَلٌ",
              transliteration: "jabalun",
              translation: t("جَبَلٌ", "mountain", "gunung", "gunung", "montagne", "montaña"),
              emoji: "⛰️"
            },
            {
              id: "uae-g1u3l5-v3",
              arabic: "جَمِيلٌ",
              transliteration: "jamīlun",
              translation: t("جَمِيلٌ", "beautiful", "cantik", "cantik/indah", "beau", "hermoso"),
              emoji: "✨"
            },
            {
              id: "uae-g1u3l5-v4",
              arabic: "جَرَى",
              transliteration: "jarā",
              translation: t("جَرَى", "ran/to run", "berlari", "berlari", "courut/courir", "corrió/correr"),
              emoji: "🏃"
            },
            {
              id: "uae-g1u3l5-v5",
              arabic: "جَنَّةٌ",
              transliteration: "jannah",
              translation: t("جَنَّةٌ", "paradise/garden", "syurga", "surga", "paradis", "paraíso"),
              emoji: "🌸"
            },
            {
              id: "uae-g1u3l5-v6",
              arabic: "جَزِيرَةٌ",
              transliteration: "jazīrah",
              translation: t("جَزِيرَةٌ", "island", "pulau", "pulau", "île", "isla"),
              emoji: "🏝️"
            },
            {
              id: "uae-g1u3l5-v7",
              arabic: "جَوٌّ",
              transliteration: "jawwun",
              translation: t("جَوٌّ", "weather / air", "cuaca/udara", "cuaca/udara", "météo/air", "clima/aire"),
              emoji: "⛅"
            },
            {
              id: "uae-g1u3l5-v8",
              arabic: "جِسْرٌ",
              transliteration: "jisrun",
              translation: t("جِسْرٌ", "bridge", "jambatan", "jembatan", "pont", "puente"),
              emoji: "🌉"
            },
            {
              id: "uae-g1u3l5-v9",
              arabic: "جَدِيدٌ",
              transliteration: "jadīdun",
              translation: t("جَدِيدٌ", "new", "baru", "baru", "nouveau", "nuevo"),
              emoji: "🆕"
            },
            {
              id: "uae-g1u3l5-v10",
              arabic: "جُنْدِيٌّ",
              transliteration: "jundiyyun",
              translation: t("جُنْدِيٌّ", "soldier", "askar", "prajurit", "soldat", "soldado"),
              emoji: "💂"
            }
          ],
          dialogue: [
            {
              speaker: "فَاطِمَة",
              arabic: "هَلْ رَكِبْتَ جَمَلاً مِنْ قَبْل؟",
              translation: t("هَلْ رَكِبْتَ جَمَلاً مِنْ قَبْل؟", "Have you ever ridden a camel?", "Pernahkah kamu menunggang unta?", "Pernahkah kamu menunggangi unta?", "As-tu déjà monté un chameau ?", "¿Has montado alguna vez en camello?")
            },
            {
              speaker: "يَاسِر",
              arabic: "نَعَمْ! الْجَمَلُ قَوِيٌّ وَجَمِيلٌ!",
              translation: t("نَعَمْ! الْجَمَلُ قَوِيٌّ وَجَمِيلٌ!", "Yes! The camel is strong and beautiful!", "Ya! Unta itu kuat dan cantik!", "Ya! Unta itu kuat dan indah!", "Oui ! Le chameau est fort et beau !", "¡Sí! ¡El camello es fuerte y hermoso!")
            },
            {
              speaker: "فَاطِمَة",
              arabic: "أُرِيدُ أَنْ أَرْكَبَهُ فِي الصَّحْرَاء!",
              translation: t("أُرِيدُ أَنْ أَرْكَبَهُ فِي الصَّحْرَاء!", "I want to ride it in the desert!", "Saya nak menungganginya di padang pasir!", "Saya mau menungganginya di padang pasir!", "Je veux le monter dans le désert !", "¡Quiero montarlo en el desierto!")
            }
          ],
          exercises: [
            {
              id: "uae-g1u3l5-e1",
              type: "mcq",
              skill: "reading",
              prompt: t("مَاذَا يُسَمَّى الْجَمَلُ؟", "What is the camel called?", "Apakah nama unta?", "Apa nama unta?", "Comment appelle-t-on le chameau ?", "¿Cómo se llama el camello?"),
              options: [
                "سَفِينَةُ الصَّحْرَاء",
                "مَلِكُ الْغَابَة",
                "طَائِرُ السَّمَاء",
                "سَمَكُ الْبَحْر"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f42a/512.webp"
            },
            {
              id: "uae-g1u3l5-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالرَّمْزِ", "Match the word to its emoji", "Padankan perkataan dengan emoji", "Cocokkan kata dengan emoji", "Associe le mot à son emoji", "Relaciona la palabra con su emoji"),
              pairs: [
                {
                  a: "جَمَلٌ",
                  b: "🐪"
                },
                {
                  a: "جَبَلٌ",
                  b: "⛰️"
                },
                {
                  a: "جَمِيلٌ",
                  b: "✨"
                },
                {
                  a: "جَنَّةٌ",
                  b: "🌸"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f42a/512.webp"
            },
            {
              id: "uae-g1u3l5-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ كَلِمَة جَمَلٌ بِوُضُوح", "Say the word جَمَلٌ clearly", "Sebut perkataan جَمَلٌ dengan jelas", "Ucapkan kata جَمَلٌ dengan jelas", "Dis le mot جَمَلٌ clairement", "Di la palabra جَمَلٌ claramente"),
              arabicText: "جَمَلٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f42a/512.webp"
            },
            {
              id: "uae-g1u3l5-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة جَمِيلٌ", "Write the word جَمِيلٌ", "Tulis perkataan جَمِيلٌ", "Tulis kata جَمِيلٌ", "Écris le mot جَمِيلٌ", "Escribe la palabra جَمِيلٌ"),
              arabicText: "جَمِيلٌ",
              answer: "جَمِيلٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.webp"
            },
            {
              id: "uae-g1u3l5-e5",
              type: "mcq",
              skill: "reading",
              prompt: t("أَيْنَ يَعِيشُ الْجَمَل؟", "Where does the camel live?", "Di mana unta hidup?", "Di mana unta hidup?", "Où le chameau vit-il ?", "¿Dónde vive el camello?"),
              options: [
                "فِي الْبَحْر",
                "فِي الصَّحْرَاء",
                "فِي الْغَابَة",
                "فِي الْجَبَل"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f42a/512.webp"
            },
            {
              id: "uae-g1u3l5-e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَاتِ الجَدِيدَة بِالْجِيم بِرُمُوزِهَا", "Match new Jim words to their emojis", "Padankan perkataan baru dengan Jim kepada emoji", "Cocokkan kata baru dengan Jim dengan emoji", "Associe les nouveaux mots avec Jim à leurs emojis", "Relaciona las nuevas palabras con Yim con sus emojis"),
              pairs: [
                {
                  a: "جَزِيرَةٌ",
                  b: "🏝️"
                },
                {
                  a: "جِسْرٌ",
                  b: "🌉"
                },
                {
                  a: "جَدِيدٌ",
                  b: "🆕"
                },
                {
                  a: "جُنْدِيٌّ",
                  b: "💂"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f42a/512.webp"
            },
            {
              id: "uae-g1u3l5-e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("اذْكُرْ خَمْسَ كَلِمَاتٍ تَبْدَأُ بِالْجِيم", "Name five words that start with Jim", "Sebutkan lima perkataan yang bermula dengan Jim", "Sebutkan lima kata yang dimulai dengan Jim", "Nomme cinq mots qui commencent par Jim", "Nombra cinco palabras que empiecen con Yim"),
              arabicText: "جَمَلٌ، جَبَلٌ، جَمِيلٌ، جَزِيرَةٌ، جَدِيدٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f42a/512.webp"
            },
            {
              id: "uae-g1u3l5-e8",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة جَبَلٌ", "Write the word جَبَلٌ", "Tulis perkataan جَبَلٌ", "Tulis kata جَبَلٌ", "Écris le mot جَبَلٌ", "Escribe la palabra جَبَلٌ"),
              arabicText: "جَبَلٌ",
              answer: "جَبَلٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26f0-fe0f/512.webp"
            },
            {
              id: "uae-g1u3l5e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَلْ رَكِبْتَ جَمَلاً مِنْ قَبْل",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f42a/512.webp"
            },
            {
              id: "uae-g1u3l5speakuae-g1u3l5-v3",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "جَمِيلٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.webp"
            },
            {
              id: "uae-g1u3l5mcquae-g1u3l5-v8",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"جِسْرٌ\"؟", "What does \"bridge\" mean?", "Apakah maksud \"jambatan\"?", "Apa arti \"jembatan\"?", "Que signifie \"pont\" ?", "¿Qué significa \"puente\"?"),
              arabicText: "جِسْرٌ",
              options: [
                "bridge",
                "Thursday",
                "mouse/rat",
                "thank you"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f309/512.webp"
            },
            {
              id: "uae-g1u3l5speakuae-g1u3l5-v1",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "جَمَلٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f42a/512.webp"
            }
          ]
        },
        {
          id: "uae-g1u3review",
          unitId: "uae-g1u3",
          gradeId: "uae-g1",
          order: 6,
          title: t("مراجعة الوحدة", "Unit Review", "Ulangan Unit", "Ulangan Unit", "Révision de l’unité", "Revisión de la unidad"),
          skills: [
            "listening",
            "reading",
            "writing"
          ],
          intro: t("لنراجع ما تعلّمناه في هذه الوحدة!", "Let’s review what we learned in this unit!", "Mari ulangkaji apa yang kita pelajari dalam unit ini!", "Mari kita ulang apa yang kita pelajari dalam unit ini!", "Révisons ce que nous avons appris dans cette unité !", "¡Repasemos lo que aprendimos en esta unidad!"),
          vocabulary: [
            {
              id: "uae-g1u3l1-v1",
              arabic: "أَرْنَبٌ",
              transliteration: "arnabun",
              translation: t("أَرْنَبٌ", "rabbit", "arnab", "kelinci", "lapin", "conejo"),
              emoji: "🐇"
            },
            {
              id: "uae-g1u3l1-v2",
              arabic: "أَسَدٌ",
              transliteration: "asadun",
              translation: t("أَسَدٌ", "lion", "singa", "singa", "lion", "león"),
              emoji: "🦁"
            },
            {
              id: "uae-g1u3l1-v3",
              arabic: "أُمٌّ",
              transliteration: "ummun",
              translation: t("أُمٌّ", "mother", "ibu", "ibu", "mère", "madre"),
              emoji: "👩"
            },
            {
              id: "uae-g1u3l1-v4",
              arabic: "أَكَلَ",
              transliteration: "akala",
              translation: t("أَكَلَ", "ate/to eat", "makan", "makan", "mangea/manger", "comió/comer"),
              emoji: "🍽️"
            },
            {
              id: "uae-g1u3l1-v5",
              arabic: "أَزْرَقُ",
              transliteration: "azraqu",
              translation: t("أَزْرَقُ", "blue", "biru", "biru", "bleu", "azul"),
              emoji: "🔵"
            },
            {
              id: "uae-g1u3l1-v6",
              arabic: "أَبْيَضُ",
              transliteration: "abyaḍu",
              translation: t("أَبْيَضُ", "white", "putih", "putih", "blanc", "blanco"),
              emoji: "⚪"
            },
            {
              id: "uae-g1u3l1-v7",
              arabic: "أَخٌ",
              transliteration: "akhun",
              translation: t("أَخٌ", "brother", "abang/adik lelaki", "kakak/adik laki-laki", "frère", "hermano"),
              emoji: "👦"
            },
            {
              id: "uae-g1u3l1-v8",
              arabic: "أَرْضٌ",
              transliteration: "arḍun",
              translation: t("أَرْضٌ", "ground / earth", "tanah", "tanah", "terre", "tierra"),
              emoji: "🌍"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "uae-g1u3reviewlistenuae-g1u3l1-v2",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "أَسَدٌ",
              options: [
                "عَشَرَةٌ",
                "ضَجِيجٌ",
                "أَسَدٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f981/512.webp"
            },
            {
              id: "uae-g1u3reviewmcquae-g1u3l1-v3",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"أُمٌّ\"؟", "What does \"mother\" mean?", "Apakah maksud \"ibu\"?", "Apa arti \"ibu\"?", "Que signifie \"mère\" ?", "¿Qué significa \"madre\"?"),
              arabicText: "أُمٌّ",
              options: [
                "yellow",
                "sister",
                "studied/to study",
                "mother"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f469/512.webp"
            },
            {
              id: "uae-g1u3reviewlistenuae-g1u3l1-v8",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "أَرْضٌ",
              options: [
                "تَمْثَالٌ",
                "أَرْضٌ",
                "عِلْمٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f30d/512.webp"
            },
            {
              id: "uae-g1u3reviewspelluae-g1u3l1-v8",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "أَرْضٌ",
              answer: "أَرْضٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f30d/512.webp"
            },
            {
              id: "uae-g1u3reviewspeakuae-g1u3l1-v2",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "أَسَدٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f981/512.webp"
            },
            {
              id: "uae-g1u3reviewmcquae-g1u3l1-v8",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"أَرْضٌ\"؟", "What does \"ground / earth\" mean?", "Apakah maksud \"tanah\"?", "Apa arti \"tanah\"?", "Que signifie \"terre\" ?", "¿Qué significa \"tierra\"?"),
              arabicText: "أَرْضٌ",
              options: [
                "stone / rock",
                "banana",
                "yesterday",
                "ground / earth"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f30d/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "uae-g1u4",
      gradeId: "uae-g1",
      order: 4,
      title: t("مِنْ عَالَمِ الحَيَوَانِ 2", "Animal World 2", "Dunia Haiwan 2", "Dunia Hewan 2", "Le monde animal 2", "El mundo animal 2"),
      theme: "animals",
      lessons: [
        {
          id: "uae-g1u4l1",
          unitId: "uae-g1u4",
          gradeId: "uae-g1",
          order: 1,
          title: t("حَرْفُ الْحَاء", "Ha", "Ikan Paus — Huruf Ha", "Ikan Paus — Huruf Ha", "baleine — Lettre Ha", "ballena — Letra Ha"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الْحُوتُ أَكْبَرُ حَيَوَانٍ فِي الْبَحْر! يَبْدَأُ بِالْحَاء!", "The whale is the biggest animal in the sea! Starts with Ha!", "Ikan paus adalah haiwan terbesar di laut! Bermula dengan Ha!", "Ikan paus adalah hewan terbesar di laut! Dimulai dengan Ha!", "La baleine est le plus grand animal de la mer ! Commence par Ha !", "¡La ballena es el animal más grande del mar! ¡Empieza con Ha!"),
          vocabulary: [
            {
              id: "uae-g1u4l1-v1",
              arabic: "حُوتٌ",
              transliteration: "ḥūtun",
              translation: t("حُوتٌ", "whale", "ikan paus", "ikan paus", "baleine", "ballena"),
              emoji: "🐋"
            },
            {
              id: "uae-g1u4l1-v2",
              arabic: "حَلِيبٌ",
              transliteration: "ḥalībun",
              translation: t("حَلِيبٌ", "milk", "susu", "susu", "lait", "leche"),
              emoji: "🥛"
            },
            {
              id: "uae-g1u4l1-v3",
              arabic: "حَدِيقَةٌ",
              transliteration: "ḥadīqah",
              translation: t("حَدِيقَةٌ", "garden/park", "taman", "taman", "jardin", "jardín"),
              emoji: "🌳"
            },
            {
              id: "uae-g1u4l1-v4",
              arabic: "حَارٌّ",
              transliteration: "ḥārrun",
              translation: t("حَارٌّ", "hot", "panas", "panas", "chaud", "caliente"),
              emoji: "🌡️"
            },
            {
              id: "uae-g1u4l1-v5",
              arabic: "حِذَاءٌ",
              transliteration: "ḥidhāʾun",
              translation: t("حِذَاءٌ", "shoe", "kasut", "sepatu", "chaussure", "zapato"),
              emoji: "👟"
            },
            {
              id: "uae-g1u4l1-v6",
              arabic: "حَصَانٌ",
              transliteration: "ḥaṣānun",
              translation: t("حَصَانٌ", "horse", "kuda", "kuda", "cheval", "caballo"),
              emoji: "🐴"
            },
            {
              id: "uae-g1u4l1-v7",
              arabic: "حُلْمٌ",
              transliteration: "ḥulmun",
              translation: t("حُلْمٌ", "dream", "mimpi", "mimpi", "rêve", "sueño"),
              emoji: "💭"
            },
            {
              id: "uae-g1u4l1-v8",
              arabic: "حَجَرٌ",
              transliteration: "ḥajarun",
              translation: t("حَجَرٌ", "stone / rock", "batu", "batu", "pierre", "piedra"),
              emoji: "🪨"
            },
            {
              id: "uae-g1u4l1-v9",
              arabic: "حَمَامٌ",
              transliteration: "ḥamāmun",
              translation: t("حَمَامٌ", "pigeon / dove", "merpati", "merpati", "pigeon", "paloma"),
              emoji: "🕊️"
            },
            {
              id: "uae-g1u4l1-v10",
              arabic: "حُبٌّ",
              transliteration: "ḥubbun",
              translation: t("حُبٌّ", "love", "cinta/kasih", "cinta", "amour", "amor"),
              emoji: "❤️"
            }
          ],
          dialogue: [
            {
              speaker: "الأَب",
              arabic: "الْحُوتُ يَعِيشُ فِي الْمُحِيط!",
              translation: t("الْحُوتُ يَعِيشُ فِي الْمُحِيط!", "The whale lives in the ocean!", "Ikan paus hidup di lautan!", "Ikan paus hidup di samudra!", "La baleine vit dans l'océan !", "¡La ballena vive en el océano!")
            },
            {
              speaker: "الطِّفْلَةُ",
              arabic: "وَاوْ! كَمْ هُوَ كَبِيرٌ!",
              translation: t("وَاوْ! كَمْ هُوَ كَبِيرٌ!", "Wow! How big it is!", "Wah! Betapa besarnya!", "Wah! Betapa besarnya!", "Wow ! Qu'il est grand !", "¡Guau! ¡Qué grande es!")
            },
            {
              speaker: "الأَب",
              arabic: "نَعَمْ! وَهُوَ يَأْكُلُ أَسْمَاكاً صَغِيرَة!",
              translation: t("نَعَمْ! وَهُوَ يَأْكُلُ أَسْمَاكاً صَغِيرَة!", "Yes! And it eats small fish!", "Ya! Dan ia makan ikan kecil!", "Ya! Dan ia makan ikan kecil!", "Oui ! Et il mange de petits poissons !", "¡Sí! ¡Y come peces pequeños!")
            }
          ],
          exercises: [
            {
              id: "uae-g1u4l1-e1",
              type: "mcq",
              skill: "reading",
              prompt: t("أَيْنَ يَعِيشُ الْحُوت؟", "Where does the whale live?", "Di mana ikan paus hidup?", "Di mana ikan paus hidup?", "Où vit la baleine ?", "¿Dónde vive la ballena?"),
              options: [
                "فِي الْجَبَل",
                "فِي الْمُحِيط",
                "فِي الصَّحْرَاء",
                "فِي الْغَابَة"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f40b/512.webp"
            },
            {
              id: "uae-g1u4l1-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالرَّمْزِ", "Match the word to its emoji", "Padankan perkataan dengan emoji", "Cocokkan kata dengan emoji", "Associe le mot à son emoji", "Relaciona la palabra con su emoji"),
              pairs: [
                {
                  a: "حُوتٌ",
                  b: "🐋"
                },
                {
                  a: "حَلِيبٌ",
                  b: "🥛"
                },
                {
                  a: "حَارٌّ",
                  b: "🌡️"
                },
                {
                  a: "حِذَاءٌ",
                  b: "👟"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f40b/512.webp"
            },
            {
              id: "uae-g1u4l1-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ كَلِمَة حُوتٌ بِوُضُوح", "Say the word حُوتٌ clearly", "Sebut perkataan حُوتٌ dengan jelas", "Ucapkan kata حُوتٌ dengan jelas", "Dis le mot حُوتٌ clairement", "Di la palabra حُوتٌ claramente"),
              arabicText: "حُوتٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f40b/512.webp"
            },
            {
              id: "uae-g1u4l1-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة حَدِيقَةٌ", "Write the word حَدِيقَةٌ", "Tulis perkataan حَدِيقَةٌ", "Tulis kata حَدِيقَةٌ", "Écris le mot حَدِيقَةٌ", "Escribe la palabra حَدِيقَةٌ"),
              arabicText: "حَدِيقَةٌ",
              answer: "حَدِيقَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f333/512.webp"
            },
            {
              id: "uae-g1u4l1-e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا أَكْبَرُ حَيَوَانٍ فِي الْبَحْر؟", "What is the biggest animal in the sea?", "Apakah haiwan terbesar di laut?", "Apa hewan terbesar di laut?", "Quel est le plus grand animal de la mer ?", "¿Cuál es el animal más grande del mar?"),
              options: [
                "السَّمَكَة",
                "الْحُوتُ",
                "السُّلَحْفَاة",
                "الدُّلْفِين"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f40b/512.webp"
            },
            {
              id: "uae-g1u4l1-e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَاتِ الجَدِيدَة بِالْحَاء بِرُمُوزِهَا", "Match new Ha words to their emojis", "Padankan perkataan baru dengan Ha kepada emoji", "Cocokkan kata baru dengan Ha dengan emoji", "Associe les nouveaux mots avec Ha à leurs emojis", "Relaciona las nuevas palabras con Ha con sus emojis"),
              pairs: [
                {
                  a: "حَصَانٌ",
                  b: "🐴"
                },
                {
                  a: "حُلْمٌ",
                  b: "💭"
                },
                {
                  a: "حَمَامٌ",
                  b: "🕊️"
                },
                {
                  a: "حُبٌّ",
                  b: "❤️"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f40b/512.webp"
            },
            {
              id: "uae-g1u4l1-e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ جُمْلَةً عَنِ الْحُوت", "Say a sentence about the whale", "Ucapkan ayat tentang ikan paus", "Ucapkan kalimat tentang ikan paus", "Dis une phrase sur la baleine", "Di una oración sobre la ballena"),
              arabicText: "الْحُوتُ يَعِيشُ فِي الْمُحِيطِ وَهُوَ كَبِيرٌ جِدًّا",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f40b/512.webp"
            },
            {
              id: "uae-g1u4l1-e8",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة حَصَانٌ", "Write the word حَصَانٌ", "Tulis perkataan حَصَانٌ", "Tulis kata حَصَانٌ", "Écris le mot حَصَانٌ", "Escribe la palabra حَصَانٌ"),
              arabicText: "حَصَانٌ",
              answer: "حَصَانٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f434/512.webp"
            },
            {
              id: "uae-g1u4l1e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "الْحُوتُ يَعِيشُ فِي الْمُحِيط",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f40b/512.webp"
            },
            {
              id: "uae-g1u4l1mcquae-g1u4l1-v9",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"حَمَامٌ\"؟", "What does \"pigeon / dove\" mean?", "Apakah maksud \"merpati\"?", "Apa arti \"merpati\"?", "Que signifie \"pigeon\" ?", "¿Qué significa \"paloma\"?"),
              arabicText: "حَمَامٌ",
              options: [
                "loves/to love",
                "sun",
                "sleeps / to sleep",
                "pigeon / dove"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f54a-fe0f/512.webp"
            },
            {
              id: "uae-g1u4l1mcquae-g1u4l1-v2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"حَلِيبٌ\"؟", "What does \"milk\" mean?", "Apakah maksud \"susu\"?", "Apa arti \"susu\"?", "Que signifie \"lait\" ?", "¿Qué significa \"leche\"?"),
              arabicText: "حَلِيبٌ",
              options: [
                "good evening",
                "milk",
                "oil",
                "water"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f95b/512.webp"
            },
            {
              id: "uae-g1u4l1mcquae-g1u4l1-v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"حُوتٌ\"؟", "What does \"whale\" mean?", "Apakah maksud \"ikan paus\"?", "Apa arti \"ikan paus\"?", "Que signifie \"baleine\" ?", "¿Qué significa \"ballena\"?"),
              arabicText: "حُوتٌ",
              options: [
                "laughed/to laugh",
                "snake",
                "whale",
                "country / town"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f40b/512.webp"
            }
          ]
        },
        {
          id: "uae-g1u4l2",
          unitId: "uae-g1u4",
          gradeId: "uae-g1",
          order: 2,
          title: t("حَرْفُ الْخَاء", "Kha", "Biri-biri — Huruf Kha", "Domba — Huruf Kha", "Le mouton — Lettre Kha", "oveja — Letra Kha"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الْخَرُوفُ حَيَوَانٌ وَدِيعٌ! يَبْدَأُ بِحَرْفِ الْخَاء!", "The sheep is a gentle animal! Starts with Kha!", "Biri-biri adalah haiwan yang lembut! Bermula dengan Kha!", "Domba adalah hewan yang lembut! Dimulai dengan Kha!", "Le mouton est un animal doux ! Commence par Kha !", "¡La oveja es un animal manso! ¡Empieza con Kha!"),
          vocabulary: [
            {
              id: "uae-g1u4l2-v1",
              arabic: "خَرُوفٌ",
              transliteration: "kharūfun",
              translation: t("خَرُوفٌ", "sheep/lamb", "biri-biri", "domba", "mouton", "oveja"),
              emoji: "🐑"
            },
            {
              id: "uae-g1u4l2-v2",
              arabic: "خُبْزٌ",
              transliteration: "khubzun",
              translation: t("خُبْزٌ", "bread", "roti", "roti", "pain", "pan"),
              emoji: "🍞"
            },
            {
              id: "uae-g1u4l2-v3",
              arabic: "خَضْرَاءُ",
              transliteration: "khaḍrāʾu",
              translation: t("خَضْرَاءُ", "green (fem.)", "hijau", "hijau", "verte", "verde"),
              emoji: "🌿"
            },
            {
              id: "uae-g1u4l2-v4",
              arabic: "خَاتَمٌ",
              transliteration: "khātamun",
              translation: t("خَاتَمٌ", "ring", "cincin", "cincin", "bague", "anillo"),
              emoji: "💍"
            },
            {
              id: "uae-g1u4l2-v5",
              arabic: "خَرَجَ",
              transliteration: "kharaja",
              translation: t("خَرَجَ", "went out/to go out", "keluar", "keluar", "sortit/sortir", "salió/salir"),
              emoji: "🚶"
            },
            {
              id: "uae-g1u4l2-v6",
              arabic: "خَرِيطَةٌ",
              transliteration: "kharīṭah",
              translation: t("خَرِيطَةٌ", "map", "peta", "peta", "carte", "mapa"),
              emoji: "🗺️"
            },
            {
              id: "uae-g1u4l2-v7",
              arabic: "خَيْمَةٌ",
              transliteration: "khaymah",
              translation: t("خَيْمَةٌ", "tent", "khemah", "tenda", "tente", "tienda de campaña"),
              emoji: "⛺"
            },
            {
              id: "uae-g1u4l2-v8",
              arabic: "خَشَبٌ",
              transliteration: "khashabun",
              translation: t("خَشَبٌ", "wood", "kayu", "kayu", "bois", "madera"),
              emoji: "🪵"
            },
            {
              id: "uae-g1u4l2-v9",
              arabic: "خَوْفٌ",
              transliteration: "khawfun",
              translation: t("خَوْفٌ", "fear", "ketakutan", "ketakutan", "peur", "miedo"),
              emoji: "😨"
            },
            {
              id: "uae-g1u4l2-v10",
              arabic: "خَيْرٌ",
              transliteration: "khayrun",
              translation: t("خَيْرٌ", "goodness / well-being", "kebaikan", "kebaikan", "bien", "bondad"),
              emoji: "✨"
            }
          ],
          dialogue: [
            {
              speaker: "الْمُزَارِع",
              arabic: "الْخَرُوفُ يَأْكُلُ الْعُشْبَ الأَخْضَر!",
              translation: t("الْخَرُوفُ يَأْكُلُ الْعُشْبَ الأَخْضَر!", "The sheep eats green grass!", "Biri-biri makan rumput hijau!", "Domba memakan rumput hijau!", "Le mouton mange l'herbe verte !", "¡La oveja come hierba verde!")
            },
            {
              speaker: "الطِّفْل",
              arabic: "وَهَلْ يَشْرَبُ الْمَاءَ أَيْضاً؟",
              translation: t("وَهَلْ يَشْرَبُ الْمَاءَ أَيْضاً؟", "And does it drink water too?", "Dan adakah ia minum air juga?", "Dan apakah ia minum air juga?", "Et boit-il aussi de l'eau ?", "¿Y también bebe agua?")
            },
            {
              speaker: "الْمُزَارِع",
              arabic: "نَعَمْ! كُلُّ حَيَوَانٍ يَحْتَاجُ الْمَاء!",
              translation: t("نَعَمْ! كُلُّ حَيَوَانٍ يَحْتَاجُ الْمَاء!", "Yes! Every animal needs water!", "Ya! Setiap haiwan perlukan air!", "Ya! Setiap hewan membutuhkan air!", "Oui ! Chaque animal a besoin d'eau !", "¡Sí! ¡Todo animal necesita agua!")
            }
          ],
          exercises: [
            {
              id: "uae-g1u4l2-e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "خَرُوفٌ",
              options: [
                "خُبْزٌ",
                "خَاتَمٌ",
                "خَرُوفٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f411/512.webp"
            },
            {
              id: "uae-g1u4l2-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالرَّمْزِ", "Match the word to its emoji", "Padankan perkataan dengan emoji", "Cocokkan kata dengan emoji", "Associe le mot à son emoji", "Relaciona la palabra con su emoji"),
              pairs: [
                {
                  a: "خَرُوفٌ",
                  b: "🐑"
                },
                {
                  a: "خُبْزٌ",
                  b: "🍞"
                },
                {
                  a: "خَضْرَاءُ",
                  b: "🌿"
                },
                {
                  a: "خَاتَمٌ",
                  b: "💍"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f411/512.webp"
            },
            {
              id: "uae-g1u4l2-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ كَلِمَة خَرُوفٌ بِوُضُوح", "Say the word خَرُوفٌ clearly", "Sebut perkataan خَرُوفٌ dengan jelas", "Ucapkan kata خَرُوفٌ dengan jelas", "Dis le mot خَرُوفٌ clairement", "Di la palabra خَرُوفٌ claramente"),
              arabicText: "خَرُوفٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f411/512.webp"
            },
            {
              id: "uae-g1u4l2-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة خُبْزٌ", "Write the word خُبْزٌ", "Tulis perkataan خُبْزٌ", "Tulis kata خُبْزٌ", "Écris le mot خُبْزٌ", "Escribe la palabra خُبْزٌ"),
              arabicText: "خُبْزٌ",
              answer: "خُبْزٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f35e/512.webp"
            },
            {
              id: "uae-g1u4l2-e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَاذَا يَأْكُلُ الْخَرُوف؟", "What does the sheep eat?", "Apa yang dimakan biri-biri?", "Apa yang dimakan domba?", "Que mange le mouton ?", "¿Qué come la oveja?"),
              options: [
                "الأَسْمَاك",
                "اللَّحْم",
                "الْعُشْبَ الأَخْضَر",
                "الْفَاكِهَة"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f411/512.webp"
            },
            {
              id: "uae-g1u4l2-e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَاتِ الجَدِيدَة بِالْخَاء بِرُمُوزِهَا", "Match new Kha words to their emojis", "Padankan perkataan baru dengan Kha kepada emoji", "Cocokkan kata baru dengan Kha dengan emoji", "Associe les nouveaux mots avec Kha à leurs emojis", "Relaciona las nuevas palabras con Kha con sus emojis"),
              pairs: [
                {
                  a: "خَرِيطَةٌ",
                  b: "🗺️"
                },
                {
                  a: "خَيْمَةٌ",
                  b: "⛺"
                },
                {
                  a: "خَشَبٌ",
                  b: "🪵"
                },
                {
                  a: "خَوْفٌ",
                  b: "😨"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f411/512.webp"
            },
            {
              id: "uae-g1u4l2-e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("صِفِ الْخَرُوفَ بِجُمْلَة", "Describe the sheep in a sentence", "Huraikan biri-biri dengan ayat", "Deskripsikan domba dalam kalimat", "Décris le mouton en une phrase", "Describe la oveja en una oración"),
              arabicText: "الْخَرُوفُ حَيَوَانٌ وَدِيعٌ يَأْكُلُ الْعُشْب",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f411/512.webp"
            },
            {
              id: "uae-g1u4l2-e8",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة خَيْمَةٌ", "Write the word خَيْمَةٌ", "Tulis perkataan خَيْمَةٌ", "Tulis kata خَيْمَةٌ", "Écris le mot خَيْمَةٌ", "Escribe la palabra خَيْمَةٌ"),
              arabicText: "خَيْمَةٌ",
              answer: "خَيْمَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26fa/512.webp"
            },
            {
              id: "uae-g1u4l2e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "الْخَرُوفُ يَأْكُلُ الْعُشْبَ الأَخْضَر",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f411/512.webp"
            },
            {
              id: "uae-g1u4l2speakuae-g1u4l2-v1",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "خَرُوفٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f411/512.webp"
            },
            {
              id: "uae-g1u4l2spelluae-g1u4l2-v3",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "خَضْرَاءُ",
              answer: "خَضْرَاءُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f33f/512.webp"
            },
            {
              id: "uae-g1u4l2writeuae-g1u4l2-v10",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"خَيْرٌ\"", "Type the Arabic word for: \"goodness / well-being\"", "Taip perkataan Arab untuk: \"kebaikan\"", "Ketik kata Arab untuk: \"kebaikan\"", "Tape le mot arabe pour : \"bien\"", "Escribe la palabra árabe para: \"bondad\""),
              arabicText: "خَيْرٌ",
              answer: "خَيْرٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.webp"
            }
          ]
        },
        {
          id: "uae-g1u4l3",
          unitId: "uae-g1u4",
          gradeId: "uae-g1",
          order: 3,
          title: t("د / ذ", "Dal/Dhal", "Beruang & Serigala — Dal/Dhal", "Beruang & Serigala — Dal/Dzal", "L'ours", "oso"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("حَيَوَانَانِ قَوِيَّانِ يَبْدَآنِ بِحَرْفَيِ الدَّال وَالذَّال!", "Two strong animals that start with Dal and Dhal!", "Dua haiwan kuat bermula dengan Dal dan Dhal!", "Dua hewan kuat dimulai dengan Dal dan Dzal!", "Deux animaux forts qui commencent par Dal et Dhal !", "¡Dos animales fuertes que empiezan con Dal y Dzal!"),
          vocabulary: [
            {
              id: "uae-g1u4l3-v1",
              arabic: "دُبٌّ",
              transliteration: "dubbun",
              translation: t("دُبٌّ", "bear", "beruang", "beruang", "ours", "oso"),
              emoji: "🐻"
            },
            {
              id: "uae-g1u4l3-v2",
              arabic: "ذِئْبٌ",
              transliteration: "dhiʾbun",
              translation: t("ذِئْبٌ", "wolf", "serigala", "serigala", "loup", "lobo"),
              emoji: "🐺"
            },
            {
              id: "uae-g1u4l3-v3",
              arabic: "دَرَسَ",
              transliteration: "darasa",
              translation: t("دَرَسَ", "studied/to study", "belajar", "belajar", "étudia/étudier", "estudió/estudiar"),
              emoji: "📚"
            },
            {
              id: "uae-g1u4l3-v4",
              arabic: "ذَهَبَ",
              transliteration: "dhahaba",
              translation: t("ذَهَبَ", "went/to go", "pergi", "pergi", "alla/aller", "fue/ir"),
              emoji: "🚶"
            },
            {
              id: "uae-g1u4l3-v5",
              arabic: "دَيْكٌ",
              transliteration: "daykun",
              translation: t("دَيْكٌ", "rooster", "ayam jantan", "ayam jago", "coq", "gallo"),
              emoji: "🐓"
            },
            {
              id: "uae-g1u4l3-v6",
              arabic: "دُولْفِينٌ",
              transliteration: "dulfīnun",
              translation: t("دُولْفِينٌ", "dolphin", "lumba-lumba", "lumba-lumba", "dauphin", "delfín"),
              emoji: "🐬"
            },
            {
              id: "uae-g1u4l3-v7",
              arabic: "ذَكَاءٌ",
              transliteration: "dhakāʾun",
              translation: t("ذَكَاءٌ", "intelligence", "kecerdasan", "kecerdasan", "intelligence", "inteligencia"),
              emoji: "🧠"
            },
            {
              id: "uae-g1u4l3-v8",
              arabic: "دَجَاجَةٌ",
              transliteration: "dajājah",
              translation: t("دَجَاجَةٌ", "hen / chicken", "ayam betina", "ayam", "poule", "gallina"),
              emoji: "🐔"
            },
            {
              id: "uae-g1u4l3-v9",
              arabic: "ذَنَبٌ",
              transliteration: "dhanabun",
              translation: t("ذَنَبٌ", "tail", "ekor", "ekor", "queue", "cola"),
              emoji: "🦊"
            },
            {
              id: "uae-g1u4l3-v10",
              arabic: "دِفَاعٌ",
              transliteration: "difāʿun",
              translation: t("دِفَاعٌ", "defense", "pertahanan", "pertahanan", "défense", "defensa"),
              emoji: "🛡️"
            }
          ],
          dialogue: [
            {
              speaker: "الدُّبُّ",
              arabic: "أَنَا الدُّبُّ! أَسْكُنُ فِي الْغَابَة!",
              translation: t("أَنَا الدُّبُّ! أَسْكُنُ فِي الْغَابَة!", "I am the bear! I live in the forest!", "Saya beruang! Saya tinggal di hutan!", "Saya adalah beruang! Saya tinggal di hutan!", "Je suis l'ours ! J'habite dans la forêt !", "¡Soy el oso! ¡Vivo en el bosque!")
            },
            {
              speaker: "الذِّئْبُ",
              arabic: "وَأَنَا الذِّئْبُ! أَعِيشُ مَعَ قَطِيعِي!",
              translation: t("وَأَنَا الذِّئْبُ! أَعِيشُ مَعَ قَطِيعِي!", "And I am the wolf! I live with my pack!", "Dan saya serigala! Saya hidup dengan kawanan saya!", "Dan saya serigala! Saya hidup bersama kawanan saya!", "Et moi je suis le loup ! Je vis avec ma meute !", "¡Y yo soy el lobo! ¡Vivo con mi manada!")
            },
            {
              speaker: "الطِّفْل",
              arabic: "كِلَاكُمَا قَوِيَّانِ وَجَمِيلَان!",
              translation: t("كِلَاكُمَا قَوِيَّانِ وَجَمِيلَان!", "You are both strong and beautiful!", "Kamu berdua kuat dan cantik!", "Kalian berdua kuat dan indah!", "Vous êtes tous les deux forts et beaux !", "¡Los dos sois fuertes y hermosos!")
            }
          ],
          exercises: [
            {
              id: "uae-g1u4l3-e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْحَيَوَانَ الصَّحِيح", "Listen and choose the correct animal", "Dengar dan pilih haiwan yang betul", "Dengarkan dan pilih hewan yang benar", "Écoute et choisis le bon animal", "Escucha y elige el animal correcto"),
              arabicText: "دُبٌّ",
              options: [
                "ذِئْبٌ",
                "دُبٌّ",
                "دَيْكٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f43b/512.webp"
            },
            {
              id: "uae-g1u4l3-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْحَيَوَانَ بِالْحَرْف", "Match the animal to its letter", "Padankan haiwan dengan hurufnya", "Cocokkan hewan dengan hurufnya", "Associe l'animal à sa lettre", "Relaciona el animal con su letra"),
              pairs: [
                {
                  a: "دُبٌّ",
                  b: "د"
                },
                {
                  a: "ذِئْبٌ",
                  b: "ذ"
                },
                {
                  a: "دَرَسَ",
                  b: "📚"
                },
                {
                  a: "دَيْكٌ",
                  b: "🐓"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f43b/512.webp"
            },
            {
              id: "uae-g1u4l3-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلِ الْجُمْلَةَ: الدُّبُّ يَسْكُنُ فِي الْغَابَة", "Say the sentence: The bear lives in the forest", "Sebut ayat: Beruang tinggal di hutan", "Ucapkan kalimat: Beruang tinggal di hutan", "Dis la phrase: L'ours habite dans la forêt", "Di la oración: El oso vive en el bosque"),
              arabicText: "الدُّبُّ يَسْكُنُ فِي الْغَابَة",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f43b/512.webp"
            },
            {
              id: "uae-g1u4l3-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة ذِئْبٌ", "Write the word ذِئْبٌ", "Tulis perkataan ذِئْبٌ", "Tulis kata ذِئْبٌ", "Écris le mot ذِئْبٌ", "Escribe la palabra ذِئْبٌ"),
              arabicText: "ذِئْبٌ",
              answer: "ذِئْبٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f43a/512.webp"
            },
            {
              id: "uae-g1u4l3-e5",
              type: "mcq",
              skill: "reading",
              prompt: t("أَيْنَ يَعِيشُ الدُّبّ؟", "Where does the bear live?", "Di mana beruang hidup?", "Di mana beruang hidup?", "Où vit l'ours ?", "¿Dónde vive el oso?"),
              options: [
                "فِي الصَّحْرَاء",
                "فِي الْغَابَة",
                "فِي الْبَحْر",
                "فِي الْمَدِينَة"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f43b/512.webp"
            },
            {
              id: "uae-g1u4l3-e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَاتِ الجَدِيدَة بِرُمُوزِهَا", "Match new words to their emojis", "Padankan perkataan baru dengan emoji", "Cocokkan kata baru dengan emoji", "Associe les nouveaux mots à leurs emojis", "Relaciona las nuevas palabras con sus emojis"),
              pairs: [
                {
                  a: "دُولْفِينٌ",
                  b: "🐬"
                },
                {
                  a: "ذَكَاءٌ",
                  b: "🧠"
                },
                {
                  a: "دَجَاجَةٌ",
                  b: "🐔"
                },
                {
                  a: "دِفَاعٌ",
                  b: "🛡️"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f43b/512.webp"
            },
            {
              id: "uae-g1u4l3-e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("قَارِنْ بَيْنَ الدُّبِّ وَالذِّئْب", "Compare the bear and the wolf", "Bandingkan antara beruang dan serigala", "Bandingkan beruang dan serigala", "Compare l'ours et le loup", "Compara el oso y el lobo"),
              arabicText: "الدُّبُّ يَسْكُنُ وَحْدَهُ وَالذِّئْبُ يَعِيشُ مَعَ قَطِيعِه",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f43b/512.webp"
            },
            {
              id: "uae-g1u4l3-e8",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة دُولْفِينٌ", "Write the word دُولْفِينٌ", "Tulis perkataan دُولْفِينٌ", "Tulis kata دُولْفِينٌ", "Écris le mot دُولْفِينٌ", "Escribe la palabra دُولْفِينٌ"),
              arabicText: "دُولْفِينٌ",
              answer: "دُولْفِينٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f42c/512.webp"
            },
            {
              id: "uae-g1u4l3e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "أَنَا الدُّبُّ! أَسْكُنُ فِي الْغَابَة",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f43b/512.webp"
            },
            {
              id: "uae-g1u4l3arrange3",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "كِلَاكُمَا قَوِيَّانِ وَجَمِيلَان!",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f43b/512.webp"
            },
            {
              id: "uae-g1u4l3spelluae-g1u4l3-v7",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "ذَكَاءٌ",
              answer: "ذَكَاءٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9e0/512.webp"
            },
            {
              id: "uae-g1u4l3arrange1",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "أَنَا الدُّبُّ! أَسْكُنُ فِي الْغَابَة!",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f43b/512.webp"
            }
          ]
        },
        {
          id: "uae-g1u4l4",
          unitId: "uae-g1u4",
          gradeId: "uae-g1",
          order: 4,
          title: t("ر / ز", "Ra/Zay", "Rusa & Zirafah — Ra/Zai", "Rusa & Jerapah — Ra/Zai", "gazelle", "gacela"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("حَيَوَانَانِ رَشِيقَانِ مِنَ الصَّحْرَاء وَالسَّافَانَّا!", "Two graceful animals from the desert and savanna!", "Dua haiwan anggun dari padang pasir dan savana!", "Dua hewan anggun dari padang pasir dan sabana!", "Deux animaux gracieux du désert et de la savane !", "¡Dos animales elegantes del desierto y la sabana!"),
          vocabulary: [
            {
              id: "uae-g1u4l4-v1",
              arabic: "رِيمٌ",
              transliteration: "rīmun",
              translation: t("رِيمٌ", "white gazelle", "rusa putih", "rusa putih", "gazelle blanche", "gacela blanca"),
              emoji: "🦌"
            },
            {
              id: "uae-g1u4l4-v2",
              arabic: "زَرَافَةٌ",
              transliteration: "zarāfah",
              translation: t("زَرَافَةٌ", "giraffe", "zirafah", "jerapah", "girafe", "jirafa"),
              emoji: "🦒"
            },
            {
              id: "uae-g1u4l4-v3",
              arabic: "رَسَمَ",
              transliteration: "rasama",
              translation: t("رَسَمَ", "drew/to draw", "melukis", "menggambar", "dessina/dessiner", "dibujó/dibujar"),
              emoji: "🎨"
            },
            {
              id: "uae-g1u4l4-v4",
              arabic: "زَهْرَةٌ",
              transliteration: "zahrah",
              translation: t("زَهْرَةٌ", "flower", "bunga", "bunga", "fleur", "flor"),
              emoji: "🌺"
            },
            {
              id: "uae-g1u4l4-v5",
              arabic: "رِيحٌ",
              transliteration: "rīḥun",
              translation: t("رِيحٌ", "wind", "angin", "angin", "vent", "viento"),
              emoji: "💨"
            },
            {
              id: "uae-g1u4l4-v6",
              arabic: "رَمْلٌ",
              transliteration: "ramlun",
              translation: t("رَمْلٌ", "sand", "pasir", "pasir", "sable", "arena"),
              emoji: "🏜️"
            },
            {
              id: "uae-g1u4l4-v7",
              arabic: "زَرْعٌ",
              transliteration: "zarʿun",
              translation: t("زَرْعٌ", "plants / crops", "tanaman", "tanaman", "culture/plantes", "cultivos/plantas"),
              emoji: "🌾"
            },
            {
              id: "uae-g1u4l4-v8",
              arabic: "رَبِيعٌ",
              transliteration: "rabīʿun",
              translation: t("رَبِيعٌ", "spring (season)", "musim bunga", "musim semi", "printemps", "primavera"),
              emoji: "🌸"
            },
            {
              id: "uae-g1u4l4-v9",
              arabic: "زَيْتٌ",
              transliteration: "zaytun",
              translation: t("زَيْتٌ", "oil", "minyak", "minyak", "huile", "aceite"),
              emoji: "🫙"
            },
            {
              id: "uae-g1u4l4-v10",
              arabic: "رَاحَةٌ",
              transliteration: "rāḥah",
              translation: t("رَاحَةٌ", "rest / comfort", "rehat/keselesaan", "istirahat", "repos/confort", "descanso/comodidad"),
              emoji: "😌"
            }
          ],
          dialogue: [
            {
              speaker: "الزَّرَافَةُ",
              arabic: "أَنَا أَطَوَلُ حَيَوَانٍ فِي الْعَالَم!",
              translation: t("أَنَا أَطَوَلُ حَيَوَانٍ فِي الْعَالَم!", "I am the tallest animal in the world!", "Saya haiwan tertinggi di dunia!", "Saya adalah hewan tertinggi di dunia!", "Je suis l'animal le plus grand du monde !", "¡Soy el animal más alto del mundo!")
            },
            {
              speaker: "الرِّيمُ",
              arabic: "وَأَنَا أَسْرَعُ مِنْكِ فِي الْعَدْو!",
              translation: t("وَأَنَا أَسْرَعُ مِنْكِ فِي الْعَدْو!", "And I am faster than you in running!", "Dan saya lebih pantas daripadamu!", "Dan saya lebih cepat darimu dalam berlari!", "Et moi je cours plus vite que toi !", "¡Y yo soy más rápida que tú corriendo!")
            },
            {
              speaker: "الطِّفْل",
              arabic: "كِلَاكُمَا رَائِعٌ بِطَرِيقَتِهِ!",
              translation: t("كِلَاكُمَا رَائِعٌ بِطَرِيقَتِهِ!", "You are both wonderful in your own way!", "Kamu berdua menakjubkan dengan cara tersendiri!", "Kalian berdua luar biasa dengan caranya masing-masing!", "Vous êtes tous les deux merveilleux à votre façon !", "¡Los dos sois maravillosos a vuestra manera!")
            }
          ],
          exercises: [
            {
              id: "uae-g1u4l4-e1",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا أَطْوَلُ حَيَوَانٍ فِي الْعَالَم؟", "What is the tallest animal in the world?", "Apakah haiwan tertinggi di dunia?", "Apa hewan tertinggi di dunia?", "Quel est l'animal le plus grand du monde ?", "¿Cuál es el animal más alto del mundo?"),
              options: [
                "الرِّيمُ",
                "الزَّرَافَةُ",
                "الدُّبُّ",
                "الْحُوتُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f98c/512.webp"
            },
            {
              id: "uae-g1u4l4-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالرَّمْزِ", "Match the word to its emoji", "Padankan perkataan dengan emoji", "Cocokkan kata dengan emoji", "Associe le mot à son emoji", "Relaciona la palabra con su emoji"),
              pairs: [
                {
                  a: "رِيمٌ",
                  b: "🦌"
                },
                {
                  a: "زَرَافَةٌ",
                  b: "🦒"
                },
                {
                  a: "زَهْرَةٌ",
                  b: "🌺"
                },
                {
                  a: "رِيحٌ",
                  b: "💨"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f98c/512.webp"
            },
            {
              id: "uae-g1u4l4-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("صِفِ الزَّرَافَةَ بِكَلِمَة وَاحِدَة", "Describe the giraffe in one word", "Huraikan zirafah dengan satu perkataan", "Deskripsikan jerapah dengan satu kata", "Décris la girafe en un mot", "Describe la jirafa con una palabra"),
              arabicText: "الزَّرَافَةُ طَوِيلَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f98c/512.webp"
            },
            {
              id: "uae-g1u4l4-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة زَهْرَةٌ", "Write the word زَهْرَةٌ", "Tulis perkataan زَهْرَةٌ", "Tulis kata زَهْرَةٌ", "Écris le mot زَهْرَةٌ", "Escribe la palabra زَهْرَةٌ"),
              arabicText: "زَهْرَةٌ",
              answer: "زَهْرَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f33a/512.webp"
            },
            {
              id: "uae-g1u4l4-e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا الَّذِي تَأْكُلُهُ الزَّرَافَة؟", "What does the giraffe eat?", "Apa yang dimakan zirafah?", "Apa yang dimakan jerapah?", "Que mange la girafe ?", "¿Qué come la jirafa?"),
              options: [
                "الأَسْمَاك",
                "أَوْرَاقَ الأَشْجَار",
                "الرَّمْل",
                "الْعُشْب"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f98c/512.webp"
            },
            {
              id: "uae-g1u4l4-e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَاتِ الجَدِيدَة بِالرَّاء وَالزَّاي بِرُمُوزِهَا", "Match new Ra/Zay words to their emojis", "Padankan perkataan baru dengan Ra/Zai kepada emoji", "Cocokkan kata baru dengan Ra/Zai dengan emoji", "Associe les nouveaux mots avec Ra/Zay à leurs emojis", "Relaciona las nuevas palabras con Ra/Zay con sus emojis"),
              pairs: [
                {
                  a: "رَمْلٌ",
                  b: "🏜️"
                },
                {
                  a: "زَرْعٌ",
                  b: "🌾"
                },
                {
                  a: "رَبِيعٌ",
                  b: "🌸"
                },
                {
                  a: "رَاحَةٌ",
                  b: "😌"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f98c/512.webp"
            },
            {
              id: "uae-g1u4l4-e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("قَارِنْ بَيْنَ الرِّيمِ وَالزَّرَافَة", "Compare the gazelle and the giraffe", "Bandingkan antara rusa dan zirafah", "Bandingkan rusa dan jerapah", "Compare la gazelle et la girafe", "Compara la gacela y la jirafa"),
              arabicText: "الرِّيمُ سَرِيعٌ وَالزَّرَافَةُ طَوِيلَة",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f98c/512.webp"
            },
            {
              id: "uae-g1u4l4-e8",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة رَبِيعٌ", "Write the word رَبِيعٌ", "Tulis perkataan رَبِيعٌ", "Tulis kata رَبِيعٌ", "Écris le mot رَبِيعٌ", "Escribe la palabra رَبِيعٌ"),
              arabicText: "رَبِيعٌ",
              answer: "رَبِيعٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f338/512.webp"
            },
            {
              id: "uae-g1u4l4e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "أَنَا أَطَوَلُ حَيَوَانٍ فِي الْعَالَم",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f98c/512.webp"
            },
            {
              id: "uae-g1u4l4spelluae-g1u4l4-v10",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "رَاحَةٌ",
              answer: "رَاحَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60c/512.webp"
            },
            {
              id: "uae-g1u4l4mcquae-g1u4l4-v2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"زَرَافَةٌ\"؟", "What does \"giraffe\" mean?", "Apakah maksud \"zirafah\"?", "Apa arti \"jerapah\"?", "Que signifie \"girafe\" ?", "¿Qué significa \"jirafa\"?"),
              arabicText: "زَرَافَةٌ",
              options: [
                "tomorrow",
                "giraffe",
                "diamond / rhombus",
                "dog — Kaf"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f992/512.webp"
            },
            {
              id: "uae-g1u4l4speakuae-g1u4l4-v5",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "رِيحٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a8/512.webp"
            }
          ]
        },
        {
          id: "uae-g1u4l5",
          unitId: "uae-g1u4",
          gradeId: "uae-g1",
          order: 5,
          title: t("س / ش", "Sin/Shin", "Tupai & Anak Singa — Sin/Syin", "Tupai & Anak Singa — Sin/Syin", "L'écureuil", "ardilla"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("السَّنْجَابُ وَالشِّبْلُ! حَرْفَا السِّين وَالشِّين!", "The squirrel and the cub! Letters Sin and Shin!", "Tupai dan anak singa! Huruf Sin dan Syin!", "Tupai dan anak singa! Huruf Sin dan Syin!", "L'écureuil et le lionceau ! Lettres Sin et Shin !", "¡La ardilla y el cachorro! ¡Letras Sin y Shin!"),
          vocabulary: [
            {
              id: "uae-g1u4l5-v1",
              arabic: "سَنْجَابٌ",
              transliteration: "sanjābun",
              translation: t("سَنْجَابٌ", "squirrel", "tupai", "tupai", "écureuil", "ardilla"),
              emoji: "🐿️"
            },
            {
              id: "uae-g1u4l5-v2",
              arabic: "شِبْلٌ",
              transliteration: "shiblun",
              translation: t("شِبْلٌ", "lion cub", "anak singa", "anak singa", "lionceau", "cachorro de león"),
              emoji: "🦁"
            },
            {
              id: "uae-g1u4l5-v3",
              arabic: "سَمَكٌ",
              transliteration: "samakun",
              translation: t("سَمَكٌ", "fish", "ikan", "ikan", "poisson", "pez"),
              emoji: "🐟"
            },
            {
              id: "uae-g1u4l5-v4",
              arabic: "شَجَرَةٌ",
              transliteration: "shajarah",
              translation: t("شَجَرَةٌ", "tree", "pokok", "pohon", "arbre", "árbol"),
              emoji: "🌲"
            },
            {
              id: "uae-g1u4l5-v5",
              arabic: "سَعِيدٌ",
              transliteration: "saʿīdun",
              translation: t("سَعِيدٌ", "happy", "gembira", "senang", "heureux", "feliz"),
              emoji: "😊"
            },
            {
              id: "uae-g1u4l5-v6",
              arabic: "شَمْسٌ",
              transliteration: "shamsun",
              translation: t("شَمْسٌ", "sun", "matahari", "matahari", "soleil", "sol"),
              emoji: "☀️"
            },
            {
              id: "uae-g1u4l5-v7",
              arabic: "سَمَاءٌ",
              transliteration: "samāʾun",
              translation: t("سَمَاءٌ", "sky", "langit", "langit", "ciel", "cielo"),
              emoji: "🌤️"
            },
            {
              id: "uae-g1u4l5-v8",
              arabic: "شِتَاءٌ",
              transliteration: "shitāʾun",
              translation: t("شِتَاءٌ", "winter", "musim sejuk", "musim dingin", "hiver", "invierno"),
              emoji: "❄️"
            },
            {
              id: "uae-g1u4l5-v9",
              arabic: "سَيَّارَةٌ",
              transliteration: "sayyārah",
              translation: t("سَيَّارَةٌ", "car", "kereta", "mobil", "voiture", "coche"),
              emoji: "🚗"
            },
            {
              id: "uae-g1u4l5-v10",
              arabic: "شَارِعٌ",
              transliteration: "shāriʿun",
              translation: t("شَارِعٌ", "street / road", "jalan raya", "jalan", "rue", "calle"),
              emoji: "🛣️"
            }
          ],
          dialogue: [
            {
              speaker: "السَّنْجَابُ",
              arabic: "أَنَا أَعِيشُ عَلَى الشَّجَرَة!",
              translation: t("أَنَا أَعِيشُ عَلَى الشَّجَرَة!", "I live on the tree!", "Saya tinggal di atas pokok!", "Saya hidup di atas pohon!", "Je vis sur l'arbre !", "¡Vivo en el árbol!")
            },
            {
              speaker: "الشِّبْلُ",
              arabic: "وَأَنَا أَعِيشُ مَعَ أُمِّي الأَسَد!",
              translation: t("وَأَنَا أَعِيشُ مَعَ أُمِّي الأَسَد!", "And I live with my lion mother!", "Dan saya tinggal dengan ibu singa saya!", "Dan saya hidup bersama induk singa saya!", "Et moi je vis avec ma mère la lionne !", "¡Y yo vivo con mi madre leona!")
            },
            {
              speaker: "الطِّفْل",
              arabic: "أَنْتُمَا سَعِيدَانِ فِي الطَّبِيعَة!",
              translation: t("أَنْتُمَا سَعِيدَانِ فِي الطَّبِيعَة!", "You are both happy in nature!", "Kamu berdua gembira di alam semula jadi!", "Kalian berdua senang di alam liar!", "Vous êtes tous les deux heureux dans la nature !", "¡Los dos sois felices en la naturaleza!")
            }
          ],
          exercises: [
            {
              id: "uae-g1u4l5-e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "سَنْجَابٌ",
              options: [
                "شِبْلٌ",
                "سَمَكٌ",
                "سَنْجَابٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f43f-fe0f/512.webp"
            },
            {
              id: "uae-g1u4l5-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالرَّمْزِ", "Match the word to its emoji", "Padankan perkataan dengan emoji", "Cocokkan kata dengan emoji", "Associe le mot à son emoji", "Relaciona la palabra con su emoji"),
              pairs: [
                {
                  a: "سَنْجَابٌ",
                  b: "🐿️"
                },
                {
                  a: "شِبْلٌ",
                  b: "🦁"
                },
                {
                  a: "شَجَرَةٌ",
                  b: "🌲"
                },
                {
                  a: "سَعِيدٌ",
                  b: "😊"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f43f-fe0f/512.webp"
            },
            {
              id: "uae-g1u4l5-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ أَيْنَ يَعِيشُ السَّنْجَاب", "Say where the squirrel lives", "Sebut di mana tupai hidup", "Katakan di mana tupai hidup", "Dis où vit l'écureuil", "Di dónde vive la ardilla"),
              arabicText: "السَّنْجَابُ يَعِيشُ عَلَى الشَّجَرَة",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f43f-fe0f/512.webp"
            },
            {
              id: "uae-g1u4l5-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة شَجَرَةٌ", "Write the word شَجَرَةٌ", "Tulis perkataan شَجَرَةٌ", "Tulis kata شَجَرَةٌ", "Écris le mot شَجَرَةٌ", "Escribe la palabra شَجَرَةٌ"),
              arabicText: "شَجَرَةٌ",
              answer: "شَجَرَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f332/512.webp"
            },
            {
              id: "uae-g1u4l5-e5",
              type: "mcq",
              skill: "reading",
              prompt: t("أَيْنَ يَعِيشُ السَّنْجَاب؟", "Where does the squirrel live?", "Di mana tupai hidup?", "Di mana tupai hidup?", "Où vit l'écureuil ?", "¿Dónde vive la ardilla?"),
              options: [
                "فِي الْبَحْر",
                "فِي الصَّحْرَاء",
                "عَلَى الشَّجَرَة",
                "فِي الْجَبَل"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f43f-fe0f/512.webp"
            },
            {
              id: "uae-g1u4l5-e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَاتِ الجَدِيدَة بِالسِّين وَالشِّين بِرُمُوزِهَا", "Match new Sin/Shin words to their emojis", "Padankan perkataan baru dengan Sin/Syin kepada emoji", "Cocokkan kata baru dengan Sin/Syin dengan emoji", "Associe les nouveaux mots avec Sin/Shin à leurs emojis", "Relaciona las nuevas palabras con Sin/Shin con sus emojis"),
              pairs: [
                {
                  a: "شَمْسٌ",
                  b: "☀️"
                },
                {
                  a: "سَمَاءٌ",
                  b: "🌤️"
                },
                {
                  a: "سَيَّارَةٌ",
                  b: "🚗"
                },
                {
                  a: "شَارِعٌ",
                  b: "🛣️"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f43f-fe0f/512.webp"
            },
            {
              id: "uae-g1u4l5-e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ جُمْلَةً عَنِ الشِّبْل", "Say a sentence about the lion cub", "Ucapkan ayat tentang anak singa", "Ucapkan kalimat tentang anak singa", "Dis une phrase sur le lionceau", "Di una oración sobre el cachorro de león"),
              arabicText: "الشِّبْلُ يَعِيشُ مَعَ أُمِّهِ الأَسَد",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f43f-fe0f/512.webp"
            },
            {
              id: "uae-g1u4l5-e8",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة شَمْسٌ", "Write the word شَمْسٌ", "Tulis perkataan شَمْسٌ", "Tulis kata شَمْسٌ", "Écris le mot شَمْسٌ", "Escribe la palabra شَمْسٌ"),
              arabicText: "شَمْسٌ",
              answer: "شَمْسٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2600-fe0f/512.webp"
            },
            {
              id: "uae-g1u4l5e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "أَنَا أَعِيشُ عَلَى الشَّجَرَة",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f43f-fe0f/512.webp"
            },
            {
              id: "uae-g1u4l5speakuae-g1u4l5-v9",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "سَيَّارَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f697/512.webp"
            },
            {
              id: "uae-g1u4l5speakuae-g1u4l5-v5",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "سَعِيدٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60a/512.webp"
            },
            {
              id: "uae-g1u4l5writeuae-g1u4l5-v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"سَنْجَابٌ\"", "Type the Arabic word for: \"squirrel\"", "Taip perkataan Arab untuk: \"tupai\"", "Ketik kata Arab untuk: \"tupai\"", "Tape le mot arabe pour : \"écureuil\"", "Escribe la palabra árabe para: \"ardilla\""),
              arabicText: "سَنْجَابٌ",
              answer: "سَنْجَابٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f43f-fe0f/512.webp"
            }
          ]
        },
        {
          id: "uae-g1u4review",
          unitId: "uae-g1u4",
          gradeId: "uae-g1",
          order: 6,
          title: t("مراجعة الوحدة", "Unit Review", "Ulangan Unit", "Ulangan Unit", "Révision de l’unité", "Revisión de la unidad"),
          skills: [
            "listening",
            "reading",
            "writing"
          ],
          intro: t("لنراجع ما تعلّمناه في هذه الوحدة!", "Let’s review what we learned in this unit!", "Mari ulangkaji apa yang kita pelajari dalam unit ini!", "Mari kita ulang apa yang kita pelajari dalam unit ini!", "Révisons ce que nous avons appris dans cette unité !", "¡Repasemos lo que aprendimos en esta unidad!"),
          vocabulary: [
            {
              id: "uae-g1u4l1-v1",
              arabic: "حُوتٌ",
              transliteration: "ḥūtun",
              translation: t("حُوتٌ", "whale", "ikan paus", "ikan paus", "baleine", "ballena"),
              emoji: "🐋"
            },
            {
              id: "uae-g1u4l1-v2",
              arabic: "حَلِيبٌ",
              transliteration: "ḥalībun",
              translation: t("حَلِيبٌ", "milk", "susu", "susu", "lait", "leche"),
              emoji: "🥛"
            },
            {
              id: "uae-g1u4l1-v3",
              arabic: "حَدِيقَةٌ",
              transliteration: "ḥadīqah",
              translation: t("حَدِيقَةٌ", "garden/park", "taman", "taman", "jardin", "jardín"),
              emoji: "🌳"
            },
            {
              id: "uae-g1u4l1-v4",
              arabic: "حَارٌّ",
              transliteration: "ḥārrun",
              translation: t("حَارٌّ", "hot", "panas", "panas", "chaud", "caliente"),
              emoji: "🌡️"
            },
            {
              id: "uae-g1u4l1-v5",
              arabic: "حِذَاءٌ",
              transliteration: "ḥidhāʾun",
              translation: t("حِذَاءٌ", "shoe", "kasut", "sepatu", "chaussure", "zapato"),
              emoji: "👟"
            },
            {
              id: "uae-g1u4l1-v6",
              arabic: "حَصَانٌ",
              transliteration: "ḥaṣānun",
              translation: t("حَصَانٌ", "horse", "kuda", "kuda", "cheval", "caballo"),
              emoji: "🐴"
            },
            {
              id: "uae-g1u4l1-v7",
              arabic: "حُلْمٌ",
              transliteration: "ḥulmun",
              translation: t("حُلْمٌ", "dream", "mimpi", "mimpi", "rêve", "sueño"),
              emoji: "💭"
            },
            {
              id: "uae-g1u4l1-v8",
              arabic: "حَجَرٌ",
              transliteration: "ḥajarun",
              translation: t("حَجَرٌ", "stone / rock", "batu", "batu", "pierre", "piedra"),
              emoji: "🪨"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "uae-g1u4reviewwriteuae-g1u4l1-v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"حُوتٌ\"", "Type the Arabic word for: \"whale\"", "Taip perkataan Arab untuk: \"ikan paus\"", "Ketik kata Arab untuk: \"ikan paus\"", "Tape le mot arabe pour : \"baleine\"", "Escribe la palabra árabe para: \"ballena\""),
              arabicText: "حُوتٌ",
              answer: "حُوتٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f40b/512.webp"
            },
            {
              id: "uae-g1u4reviewmcquae-g1u4l1-v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"حُوتٌ\"؟", "What does \"whale\" mean?", "Apakah maksud \"ikan paus\"?", "Apa arti \"ikan paus\"?", "Que signifie \"baleine\" ?", "¿Qué significa \"ballena\"?"),
              arabicText: "حُوتٌ",
              options: [
                "goodbye (go safely)",
                "whale",
                "river",
                "plants / crops"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f40b/512.webp"
            },
            {
              id: "uae-g1u4reviewlistenuae-g1u4l1-v6",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "حَصَانٌ",
              options: [
                "تُفَّاحَةٌ",
                "تَحِيَّةٌ",
                "حَصَانٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f434/512.webp"
            },
            {
              id: "uae-g1u4reviewwriteuae-g1u4l1-v7",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"حُلْمٌ\"", "Type the Arabic word for: \"dream\"", "Taip perkataan Arab untuk: \"mimpi\"", "Ketik kata Arab untuk: \"mimpi\"", "Tape le mot arabe pour : \"rêve\"", "Escribe la palabra árabe para: \"sueño\""),
              arabicText: "حُلْمٌ",
              answer: "حُلْمٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4ad/512.webp"
            },
            {
              id: "uae-g1u4reviewspelluae-g1u4l1-v5",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "حِذَاءٌ",
              answer: "حِذَاءٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f45f/512.webp"
            },
            {
              id: "uae-g1u4reviewmcquae-g1u4l1-v2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"حَلِيبٌ\"؟", "What does \"milk\" mean?", "Apakah maksud \"susu\"?", "Apa arti \"susu\"?", "Que signifie \"lait\" ?", "¿Qué significa \"leche\"?"),
              arabicText: "حَلِيبٌ",
              options: [
                "milk",
                "bee",
                "homeland / country",
                "police officer"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f95b/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "uae-g1u5",
      gradeId: "uae-g1",
      order: 5,
      title: t("مِنْ عَالَمِ الحَيَوَانِ 3", "Animal World 3", "Dunia Haiwan 3", "Dunia Hewan 3", "Le monde animal 3", "El mundo animal 3"),
      theme: "animals",
      lessons: [
        {
          id: "uae-g1u5l1",
          unitId: "uae-g1u5",
          gradeId: "uae-g1",
          order: 1,
          title: t("حَرْفُ الصَّاد", "Sad", "Anak Ayam Kecil — Huruf Sad", "Anak Ayam Kecil — Huruf Shad", "Le petit poussin — Lettre Sad", "pollito — Letra Sad"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الصَّوْصُ الصَّغِيرُ يَبْدَأُ بِحَرْفِ الصَّاد!", "The little chick starts with the letter Sad!", "Anak ayam kecil bermula dengan huruf Sad!", "Anak ayam kecil dimulai dengan huruf Shad!", "Le petit poussin commence par la lettre Sad !", "¡El pollito empieza con la letra Sad!"),
          vocabulary: [
            {
              id: "uae-g1u5l1-v1",
              arabic: "صَوْصٌ",
              transliteration: "ṣawṣun",
              translation: t("صَوْصٌ", "chick", "anak ayam", "anak ayam", "poussin", "pollito"),
              emoji: "🐥"
            },
            {
              id: "uae-g1u5l1-v2",
              arabic: "صَغِيرٌ",
              transliteration: "ṣaghīrun",
              translation: t("صَغِيرٌ", "small/little", "kecil", "kecil", "petit", "pequeño"),
              emoji: "👶"
            },
            {
              id: "uae-g1u5l1-v3",
              arabic: "صَبَاحٌ",
              transliteration: "ṣabāḥun",
              translation: t("صَبَاحٌ", "morning", "pagi", "pagi", "matin", "mañana"),
              emoji: "🌅"
            },
            {
              id: "uae-g1u5l1-v4",
              arabic: "صَدِيقٌ",
              transliteration: "ṣadīqun",
              translation: t("صَدِيقٌ", "friend", "kawan", "teman", "ami", "amigo"),
              emoji: "🤝"
            },
            {
              id: "uae-g1u5l1-v5",
              arabic: "صَوْتٌ",
              transliteration: "ṣawtun",
              translation: t("صَوْتٌ", "sound/voice", "bunyi/suara", "suara", "son/voix", "sonido/voz"),
              emoji: "🔊"
            },
            {
              id: "uae-g1u5l1-v6",
              arabic: "صِحَّةٌ",
              transliteration: "ṣiḥḥah",
              translation: t("صِحَّةٌ", "health", "kesihatan", "kesehatan", "santé", "salud"),
              emoji: "🏥"
            },
            {
              id: "uae-g1u5l1-v7",
              arabic: "صِدْقٌ",
              transliteration: "ṣidqun",
              translation: t("صِدْقٌ", "honesty / truth", "kejujuran", "kejujuran", "honnêteté/vérité", "honestidad/verdad"),
              emoji: "💯"
            },
            {
              id: "uae-g1u5l1-v8",
              arabic: "صَخْرَةٌ",
              transliteration: "ṣakhrah",
              translation: t("صَخْرَةٌ", "rock / boulder", "batu besar", "batu besar", "rocher", "roca"),
              emoji: "🪨"
            },
            {
              id: "uae-g1u5l1-v9",
              arabic: "صِيَادٌ",
              transliteration: "ṣiyyādun",
              translation: t("صِيَادٌ", "fisherman / hunter", "nelayan/pemburu", "nelayan/pemburu", "pêcheur/chasseur", "pescador/cazador"),
              emoji: "🎣"
            },
            {
              id: "uae-g1u5l1-v10",
              arabic: "صُورَةٌ",
              transliteration: "ṣūrah",
              translation: t("صُورَةٌ", "picture / photo", "gambar/foto", "gambar/foto", "image/photo", "imagen/foto"),
              emoji: "🖼️"
            }
          ],
          dialogue: [
            {
              speaker: "الصَّوْصُ",
              arabic: "بِيبْ بِيبْ! أَنَا صَوْصٌ صَغِيرٌ!",
              translation: t("بِيبْ بِيبْ! أَنَا صَوْصٌ صَغِيرٌ!", "Peep peep! I am a little chick!", "Cicit cicit! Saya anak ayam kecil!", "Cuit cuit! Saya anak ayam kecil!", "Piou piou ! Je suis un petit poussin !", "¡Pío pío! ¡Soy un pollito!")
            },
            {
              speaker: "الطِّفْلَةُ",
              arabic: "مَا أَجْمَلَكَ يَا صَوْصُ!",
              translation: t("مَا أَجْمَلَكَ يَا صَوْصُ!", "How beautiful you are little chick!", "Betapa cantiknya kamu anak ayam!", "Betapa indahnya kamu anak ayam!", "Que tu es beau petit poussin !", "¡Qué bonito eres pollito!")
            },
            {
              speaker: "الصَّوْصُ",
              arabic: "شُكْراً! أَنَا أُحِبُّ الصَّبَاح!",
              translation: t("شُكْراً! أَنَا أُحِبُّ الصَّبَاح!", "Thank you! I love the morning!", "Terima kasih! Saya suka pagi!", "Terima kasih! Saya suka pagi hari!", "Merci ! J'adore le matin !", "¡Gracias! ¡Me encanta la mañana!")
            }
          ],
          exercises: [
            {
              id: "uae-g1u5l1-e1",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا صَوْتُ الصَّوْص؟", "What sound does the chick make?", "Apakah bunyi anak ayam?", "Apa suara anak ayam?", "Quel son fait le poussin ?", "¿Qué sonido hace el pollito?"),
              options: [
                "مُواء",
                "بِيبْ بِيبْ",
                "هَرِير",
                "نُبَاح"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f425/512.webp"
            },
            {
              id: "uae-g1u5l1-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالرَّمْزِ", "Match the word to its emoji", "Padankan perkataan dengan emoji", "Cocokkan kata dengan emoji", "Associe le mot à son emoji", "Relaciona la palabra con su emoji"),
              pairs: [
                {
                  a: "صَوْصٌ",
                  b: "🐥"
                },
                {
                  a: "صَبَاحٌ",
                  b: "🌅"
                },
                {
                  a: "صَدِيقٌ",
                  b: "🤝"
                },
                {
                  a: "صَوْتٌ",
                  b: "🔊"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f425/512.webp"
            },
            {
              id: "uae-g1u5l1-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلِ الْجُمْلَة: أَنَا صَوْصٌ صَغِيرٌ", "Say: I am a little chick", "Sebut: Saya anak ayam kecil", "Ucapkan: Saya anak ayam kecil", "Dis : Je suis un petit poussin", "Di: Soy un pollito"),
              arabicText: "أَنَا صَوْصٌ صَغِيرٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f425/512.webp"
            },
            {
              id: "uae-g1u5l1-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة صَدِيقٌ", "Write the word صَدِيقٌ", "Tulis perkataan صَدِيقٌ", "Tulis kata صَدِيقٌ", "Écris le mot صَدِيقٌ", "Escribe la palabra صَدِيقٌ"),
              arabicText: "صَدِيقٌ",
              answer: "صَدِيقٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "uae-g1u5l1-e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا مَعْنَى صِحَّةٌ؟", "What does صِحَّةٌ mean?", "Apa maksud صِحَّةٌ?", "Apa arti صِحَّةٌ?", "Que signifie صِحَّةٌ ?", "¿Qué significa صِحَّةٌ?"),
              options: [
                "friendship",
                "health",
                "honesty",
                "voice"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f425/512.webp"
            },
            {
              id: "uae-g1u5l1-e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَاتِ الجَدِيدَة بِالصَّاد بِرُمُوزِهَا", "Match new Sad words to their emojis", "Padankan perkataan baru dengan Sad kepada emoji", "Cocokkan kata baru dengan Shad dengan emoji", "Associe les nouveaux mots avec Sad à leurs emojis", "Relaciona las nuevas palabras con Sad con sus emojis"),
              pairs: [
                {
                  a: "صِحَّةٌ",
                  b: "🏥"
                },
                {
                  a: "صِدْقٌ",
                  b: "💯"
                },
                {
                  a: "صِيَادٌ",
                  b: "🎣"
                },
                {
                  a: "صُورَةٌ",
                  b: "🖼️"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f425/512.webp"
            },
            {
              id: "uae-g1u5l1-e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ جُمْلَةً عَنِ الصَّبَاح", "Say a sentence about the morning", "Ucapkan ayat tentang pagi", "Ucapkan kalimat tentang pagi", "Dis une phrase sur le matin", "Di una oración sobre la mañana"),
              arabicText: "الصَّبَاحُ جَمِيلٌ وَالصَّوْصُ يُغَنِّي",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f425/512.webp"
            },
            {
              id: "uae-g1u5l1-e8",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة صُورَةٌ", "Write the word صُورَةٌ", "Tulis perkataan صُورَةٌ", "Tulis kata صُورَةٌ", "Écris le mot صُورَةٌ", "Escribe la palabra صُورَةٌ"),
              arabicText: "صُورَةٌ",
              answer: "صُورَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f5bc-fe0f/512.webp"
            },
            {
              id: "uae-g1u5l1e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "بِيبْ بِيبْ! أَنَا صَوْصٌ صَغِيرٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f425/512.webp"
            },
            {
              id: "uae-g1u5l1spelluae-g1u5l1-v8",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "صَخْرَةٌ",
              answer: "صَخْرَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1faa8/512.webp"
            },
            {
              id: "uae-g1u5l1mcquae-g1u5l1-v9",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"صِيَادٌ\"؟", "What does \"fisherman / hunter\" mean?", "Apakah maksud \"nelayan/pemburu\"?", "Apa arti \"nelayan/pemburu\"?", "Que signifie \"pêcheur/chasseur\" ?", "¿Qué significa \"pescador/cazador\"?"),
              arabicText: "صِيَادٌ",
              options: [
                "eye",
                "fisherman / hunter",
                "good morning",
                "soil / dirt"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3a3/512.webp"
            },
            {
              id: "uae-g1u5l1listenuae-g1u5l1-v1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "صَوْصٌ",
              options: [
                "ذِئْبٌ",
                "حَلِيبٌ",
                "صَوْصٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f425/512.webp"
            }
          ]
        },
        {
          id: "uae-g1u5l2",
          unitId: "uae-g1u5",
          gradeId: "uae-g1",
          order: 2,
          title: t("حَرْفُ الضَّاد", "Dad", "Katak Lemah — Huruf Dad", "Katak Lemah — Huruf Dhad", "grenouille faible — Lettre Dad", "rana débil — Letra Dad"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الضِّفْدَعُ يَقْفِزُ! وَاسْمُهُ يَبْدَأُ بِحَرْفِ الضَّاد!", "The frog jumps! Its name starts with Dad!", "Katak melompat! Namanya bermula dengan Dad!", "Katak melompat! Namanya dimulai dengan Dhad!", "La grenouille saute ! Son nom commence par Dad !", "¡La rana salta! ¡Su nombre empieza con Dad!"),
          vocabulary: [
            {
              id: "uae-g1u5l2-v1",
              arabic: "ضِفْدَعٌ",
              transliteration: "ḍifdaʿun",
              translation: t("ضِفْدَعٌ", "frog", "katak", "katak", "grenouille", "rana"),
              emoji: "🐸"
            },
            {
              id: "uae-g1u5l2-v2",
              arabic: "ضَعِيفٌ",
              transliteration: "ḍaʿīfun",
              translation: t("ضَعِيفٌ", "weak", "lemah", "lemah", "faible", "débil"),
              emoji: "😔"
            },
            {
              id: "uae-g1u5l2-v3",
              arabic: "ضَوْءٌ",
              transliteration: "ḍawʾun",
              translation: t("ضَوْءٌ", "light", "cahaya", "cahaya", "lumière", "luz"),
              emoji: "💡"
            },
            {
              id: "uae-g1u5l2-v4",
              arabic: "ضَحِكَ",
              transliteration: "ḍaḥika",
              translation: t("ضَحِكَ", "laughed/to laugh", "ketawa", "tertawa", "rit/rire", "rió/reír"),
              emoji: "😄"
            },
            {
              id: "uae-g1u5l2-v5",
              arabic: "ضَيْفٌ",
              transliteration: "ḍayfun",
              translation: t("ضَيْفٌ", "guest", "tetamu", "tamu", "invité", "invitado"),
              emoji: "🧑‍🤝‍🧑"
            },
            {
              id: "uae-g1u5l2-v6",
              arabic: "ضَرَبَ",
              transliteration: "ḍaraba",
              translation: t("ضَرَبَ", "hit / struck", "memukul", "memukul", "frappa/frapper", "golpeó/golpear"),
              emoji: "👊"
            },
            {
              id: "uae-g1u5l2-v7",
              arabic: "ضَرُورِيٌّ",
              transliteration: "ḍarūriyyun",
              translation: t("ضَرُورِيٌّ", "necessary / essential", "perlu/penting", "perlu/penting", "nécessaire/essentiel", "necesario/esencial"),
              emoji: "⚠️"
            },
            {
              id: "uae-g1u5l2-v8",
              arabic: "ضِفَّةٌ",
              transliteration: "ḍiffah",
              translation: t("ضِفَّةٌ", "bank (of river)", "tebing sungai", "tepi sungai", "rive/berge", "orilla/ribera"),
              emoji: "🏞️"
            },
            {
              id: "uae-g1u5l2-v9",
              arabic: "ضَجِيجٌ",
              transliteration: "ḍajījun",
              translation: t("ضَجِيجٌ", "noise / clamor", "bunyi bising", "kebisingan", "bruit/tapage", "ruido/alboroto"),
              emoji: "📢"
            },
            {
              id: "uae-g1u5l2-v10",
              arabic: "ضِحْكَةٌ",
              transliteration: "ḍiḥkah",
              translation: t("ضِحْكَةٌ", "laugh / laughter", "tawa/gelak", "tawa", "rire", "risa"),
              emoji: "😂"
            }
          ],
          dialogue: [
            {
              speaker: "الضِّفْدَعُ",
              arabic: "قُرْقُرْ! أَنَا أُحِبُّ الْبِرَكَ وَالأَنْهَار!",
              translation: t("قُرْقُرْ! أَنَا أُحِبُّ الْبِرَكَ وَالأَنْهَار!", "Croak! I love ponds and rivers!", "Kuak kuak! Saya suka kolam dan sungai!", "Kwek kwek! Saya suka kolam dan sungai!", "Coâ ! J'adore les étangs et les rivières !", "¡Croac! ¡Me encantan los estanques y los ríos!")
            },
            {
              speaker: "الطِّفْل",
              arabic: "هَلْ تَسْتَطِيعُ الْقَفْزَ بَعِيداً؟",
              translation: t("هَلْ تَسْتَطِيعُ الْقَفْزَ بَعِيداً؟", "Can you jump far?", "Bolehkah kamu melompat jauh?", "Bisakah kamu melompat jauh?", "Peux-tu sauter loin ?", "¿Puedes saltar lejos?")
            },
            {
              speaker: "الضِّفْدَعُ",
              arabic: "نَعَمْ! أَنَا أَقْفِزُ بِسُرْعَةٍ وَأَضْحَكُ!",
              translation: t("نَعَمْ! أَنَا أَقْفِزُ بِسُرْعَةٍ وَأَضْحَكُ!", "Yes! I jump fast and laugh!", "Ya! Saya melompat dengan cepat dan ketawa!", "Ya! Saya melompat cepat dan tertawa!", "Oui ! Je saute vite et je ris !", "¡Sí! ¡Salto rápido y me río!")
            }
          ],
          exercises: [
            {
              id: "uae-g1u5l2-e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "ضِفْدَعٌ",
              options: [
                "ضَيْفٌ",
                "ضَوْءٌ",
                "ضِفْدَعٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f438/512.webp"
            },
            {
              id: "uae-g1u5l2-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالرَّمْزِ", "Match the word to its emoji", "Padankan perkataan dengan emoji", "Cocokkan kata dengan emoji", "Associe le mot à son emoji", "Relaciona la palabra con su emoji"),
              pairs: [
                {
                  a: "ضِفْدَعٌ",
                  b: "🐸"
                },
                {
                  a: "ضَوْءٌ",
                  b: "💡"
                },
                {
                  a: "ضَحِكَ",
                  b: "😄"
                },
                {
                  a: "ضَيْفٌ",
                  b: "🧑‍🤝‍🧑"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f438/512.webp"
            },
            {
              id: "uae-g1u5l2-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلِ الْجُمْلَة: الضِّفْدَعُ يَقْفِزُ", "Say: The frog jumps", "Sebut: Katak melompat", "Ucapkan: Katak melompat", "Dis : La grenouille saute", "Di: La rana salta"),
              arabicText: "الضِّفْدَعُ يَقْفِزُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f438/512.webp"
            },
            {
              id: "uae-g1u5l2-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة ضَوْءٌ", "Write the word ضَوْءٌ", "Tulis perkataan ضَوْءٌ", "Tulis kata ضَوْءٌ", "Écris le mot ضَوْءٌ", "Escribe la palabra ضَوْءٌ"),
              arabicText: "ضَوْءٌ",
              answer: "ضَوْءٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/512.webp"
            },
            {
              id: "uae-g1u5l2-e5",
              type: "mcq",
              skill: "reading",
              prompt: t("أَيْنَ يَعِيشُ الضِّفْدَع؟", "Where does the frog live?", "Di mana katak hidup?", "Di mana katak hidup?", "Où vit la grenouille ?", "¿Dónde vive la rana?"),
              options: [
                "فِي الصَّحْرَاء",
                "فِي الْجَبَل",
                "فِي الْبِرَكِ وَالأَنْهَار",
                "فِي الأَشْجَار"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f438/512.webp"
            },
            {
              id: "uae-g1u5l2-e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَاتِ الجَدِيدَة بِالضَّاد بِرُمُوزِهَا", "Match new Dad words to their emojis", "Padankan perkataan baru dengan Dad kepada emoji", "Cocokkan kata baru dengan Dhad dengan emoji", "Associe les nouveaux mots avec Dad à leurs emojis", "Relaciona las nuevas palabras con Dad con sus emojis"),
              pairs: [
                {
                  a: "ضَجِيجٌ",
                  b: "📢"
                },
                {
                  a: "ضِحْكَةٌ",
                  b: "😂"
                },
                {
                  a: "ضَرُورِيٌّ",
                  b: "⚠️"
                },
                {
                  a: "ضِفَّةٌ",
                  b: "🏞️"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f438/512.webp"
            },
            {
              id: "uae-g1u5l2-e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("صِفِ الضِّفْدَعَ بِجُمْلَة", "Describe the frog in a sentence", "Huraikan katak dengan ayat", "Deskripsikan katak dalam kalimat", "Décris la grenouille en une phrase", "Describe la rana en una oración"),
              arabicText: "الضِّفْدَعُ حَيَوَانٌ صَغِيرٌ يَقْفِزُ وَيَعِيشُ فِي الْمَاء",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f438/512.webp"
            },
            {
              id: "uae-g1u5l2-e8",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة ضَعِيفٌ", "Write the word ضَعِيفٌ", "Tulis perkataan ضَعِيفٌ", "Tulis kata ضَعِيفٌ", "Écris le mot ضَعِيفٌ", "Escribe la palabra ضَعِيفٌ"),
              arabicText: "ضَعِيفٌ",
              answer: "ضَعِيفٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f614/512.webp"
            },
            {
              id: "uae-g1u5l2e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "قُرْقُرْ! أَنَا أُحِبُّ الْبِرَكَ وَالأَنْهَار",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f438/512.webp"
            },
            {
              id: "uae-g1u5l2mcquae-g1u5l2-v3",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"ضَوْءٌ\"؟", "What does \"light\" mean?", "Apakah maksud \"cahaya\"?", "Apa arti \"cahaya\"?", "Que signifie \"lumière\" ?", "¿Qué significa \"luz\"?"),
              arabicText: "ضَوْءٌ",
              options: [
                "light",
                "farewell / goodbye",
                "son",
                "orchard / garden"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/512.webp"
            },
            {
              id: "uae-g1u5l2mcquae-g1u5l2-v2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"ضَعِيفٌ\"؟", "What does \"weak\" mean?", "Apakah maksud \"lemah\"?", "Apa arti \"lemah\"?", "Que signifie \"faible\" ?", "¿Qué significa \"débil\"?"),
              arabicText: "ضَعِيفٌ",
              options: [
                "soil / dirt",
                "built / to build",
                "happy",
                "weak"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f614/512.webp"
            },
            {
              id: "uae-g1u5l2mcquae-g1u5l2-v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"ضِفْدَعٌ\"؟", "What does \"frog\" mean?", "Apakah maksud \"katak\"?", "Apa arti \"katak\"?", "Que signifie \"grenouille\" ?", "¿Qué significa \"rana\"?"),
              arabicText: "ضِفْدَعٌ",
              options: [
                "frog",
                "squirrel",
                "oil",
                "Sunday"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f438/512.webp"
            }
          ]
        },
        {
          id: "uae-g1u5l3",
          unitId: "uae-g1u5",
          gradeId: "uae-g1",
          order: 3,
          title: t("الطَّاوُوسُ الجَمِيلُ — ط / ظ", "Ta/Dha", "Merak Cantik — Ta/Dha", "Merak Cantik — Tha/Zha", "Le beau paon — Ta/Dha", "hermoso pavo real — Ta/Dha"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الطَّاوُوسُ أَجْمَلُ طَائِرٍ! يَبْدَأُ بِحَرْفِ الطَّاء!", "The peacock is the most beautiful bird! Starts with Ta!", "Merak adalah burung paling cantik! Bermula dengan Ta!", "Merak adalah burung paling indah! Dimulai dengan Tha!", "Le paon est le plus bel oiseau ! Commence par Ta !", "¡El pavo real es el pájaro más hermoso! ¡Empieza con Ta!"),
          vocabulary: [
            {
              id: "uae-g1u5l3-v1",
              arabic: "طَاوُوسٌ",
              transliteration: "ṭāwūsun",
              translation: t("طَاوُوسٌ", "peacock", "merak", "merak", "paon", "pavo real"),
              emoji: "🦚"
            },
            {
              id: "uae-g1u5l3-v2",
              arabic: "ظَبْيٌ",
              transliteration: "ẓabyun",
              translation: t("ظَبْيٌ", "gazelle", "kijang", "kijang", "gazelle", "gacela"),
              emoji: "🦌"
            },
            {
              id: "uae-g1u5l3-v3",
              arabic: "طَارَ",
              transliteration: "ṭāra",
              translation: t("طَارَ", "flew/to fly", "terbang", "terbang", "vola/voler", "voló/volar"),
              emoji: "🕊️"
            },
            {
              id: "uae-g1u5l3-v4",
              arabic: "ظَهَرَ",
              transliteration: "ẓahara",
              translation: t("ظَهَرَ", "appeared/to appear", "muncul", "muncul", "apparut/apparaître", "apareció/aparecer"),
              emoji: "👀"
            },
            {
              id: "uae-g1u5l3-v5",
              arabic: "طَرِيقٌ",
              transliteration: "ṭarīqun",
              translation: t("طَرِيقٌ", "road/way", "jalan", "jalan", "route/chemin", "camino"),
              emoji: "🛣️"
            },
            {
              id: "uae-g1u5l3-v6",
              arabic: "طَعَامٌ",
              transliteration: "ṭaʿāmun",
              translation: t("طَعَامٌ", "food", "makanan", "makanan", "nourriture", "comida"),
              emoji: "🍽️"
            },
            {
              id: "uae-g1u5l3-v7",
              arabic: "ظِلٌّ",
              transliteration: "ẓillun",
              translation: t("ظِلٌّ", "shade / shadow", "teduhan/bayangan", "teduhan/bayangan", "ombre", "sombra"),
              emoji: "🌫️"
            },
            {
              id: "uae-g1u5l3-v8",
              arabic: "طَلَبَ",
              transliteration: "ṭalaba",
              translation: t("طَلَبَ", "requested / asked for", "meminta", "meminta", "demanda/demander", "pidió/pedir"),
              emoji: "🙋"
            },
            {
              id: "uae-g1u5l3-v9",
              arabic: "ظُلْمٌ",
              transliteration: "ẓulmun",
              translation: t("ظُلْمٌ", "injustice / oppression", "kezaliman", "kezaliman", "injustice", "injusticia"),
              emoji: "⚖️"
            },
            {
              id: "uae-g1u5l3-v10",
              arabic: "طِفْلٌ",
              transliteration: "ṭiflun",
              translation: t("طِفْلٌ", "child", "kanak-kanak", "anak", "enfant", "niño"),
              emoji: "👶"
            }
          ],
          dialogue: [
            {
              speaker: "الطَّاوُوسُ",
              arabic: "انْظُرُوا إِلَى رِيشِي الْجَمِيل!",
              translation: t("انْظُرُوا إِلَى رِيشِي الْجَمِيل!", "Look at my beautiful feathers!", "Tengok bulu saya yang cantik!", "Lihat bulu-bulu saya yang indah!", "Regardez mes belles plumes !", "¡Miren mis hermosas plumas!")
            },
            {
              speaker: "الطِّفْلَةُ",
              arabic: "وَاوْ! رِيشُكَ أَلْوَانٌ كَثِيرَة!",
              translation: t("وَاوْ! رِيشُكَ أَلْوَانٌ كَثِيرَة!", "Wow! Your feathers have many colors!", "Wah! Bulu kamu berwarna-warni!", "Wah! Bulumu berwarna-warni!", "Wow ! Tes plumes ont plein de couleurs !", "¡Guau! ¡Tus plumas tienen muchos colores!")
            },
            {
              speaker: "الطَّاوُوسُ",
              arabic: "شُكْراً! أَنَا أَفْخَرُ بِجَمَالِي!",
              translation: t("شُكْراً! أَنَا أَفْخَرُ بِجَمَالِي!", "Thank you! I am proud of my beauty!", "Terima kasih! Saya bangga dengan kecantikan saya!", "Terima kasih! Saya bangga dengan keindahan saya!", "Merci ! Je suis fier de ma beauté !", "¡Gracias! ¡Estoy orgulloso de mi belleza!")
            }
          ],
          exercises: [
            {
              id: "uae-g1u5l3-e1",
              type: "mcq",
              skill: "reading",
              prompt: t("لِمَاذَا الطَّاوُوسُ جَمِيل؟", "Why is the peacock beautiful?", "Mengapa merak itu cantik?", "Mengapa merak itu indah?", "Pourquoi le paon est-il beau ?", "¿Por qué es hermoso el pavo real?"),
              options: [
                "بِسَبَبِ صَوْتِهِ",
                "بِسَبَبِ رِيشِهِ الْمُلَوَّن",
                "بِسَبَبِ سُرْعَتِهِ",
                "بِسَبَبِ حَجْمِهِ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f99a/512.webp"
            },
            {
              id: "uae-g1u5l3-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالرَّمْزِ", "Match the word to its emoji", "Padankan perkataan dengan emoji", "Cocokkan kata dengan emoji", "Associe le mot à son emoji", "Relaciona la palabra con su emoji"),
              pairs: [
                {
                  a: "طَاوُوسٌ",
                  b: "🦚"
                },
                {
                  a: "ظَبْيٌ",
                  b: "🦌"
                },
                {
                  a: "طَارَ",
                  b: "🕊️"
                },
                {
                  a: "طَرِيقٌ",
                  b: "🛣️"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f99a/512.webp"
            },
            {
              id: "uae-g1u5l3-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("صِفِ الطَّاوُوسَ بِجُمْلَة", "Describe the peacock in a sentence", "Huraikan merak dengan ayat", "Deskripsikan merak dengan sebuah kalimat", "Décris le paon en une phrase", "Describe el pavo real en una oración"),
              arabicText: "الطَّاوُوسُ جَمِيلٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f99a/512.webp"
            },
            {
              id: "uae-g1u5l3-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة طَرِيقٌ", "Write the word طَرِيقٌ", "Tulis perkataan طَرِيقٌ", "Tulis kata طَرِيقٌ", "Écris le mot طَرِيقٌ", "Escribe la palabra طَرِيقٌ"),
              arabicText: "طَرِيقٌ",
              answer: "طَرِيقٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6e3-fe0f/512.webp"
            },
            {
              id: "uae-g1u5l3-e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا مَعْنَى طِفْلٌ؟", "What does طِفْلٌ mean?", "Apa maksud طِفْلٌ?", "Apa arti طِفْلٌ?", "Que signifie طِفْلٌ ?", "¿Qué significa طِفْلٌ?"),
              options: [
                "road",
                "bird",
                "child",
                "food"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f99a/512.webp"
            },
            {
              id: "uae-g1u5l3-e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَاتِ الجَدِيدَة بِالطَّاء وَالظَّاء بِرُمُوزِهَا", "Match new Ta/Dha words to their emojis", "Padankan perkataan baru dengan Ta/Dha kepada emoji", "Cocokkan kata baru dengan Tha/Zha dengan emoji", "Associe les nouveaux mots avec Ta/Dha à leurs emojis", "Relaciona las nuevas palabras con Ta/Dha con sus emojis"),
              pairs: [
                {
                  a: "طَعَامٌ",
                  b: "🍽️"
                },
                {
                  a: "ظِلٌّ",
                  b: "🌫️"
                },
                {
                  a: "طَلَبَ",
                  b: "🙋"
                },
                {
                  a: "طِفْلٌ",
                  b: "👶"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f99a/512.webp"
            },
            {
              id: "uae-g1u5l3-e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ كَيْفَ يَطِيرُ الطَّاوُوس", "Describe how the peacock flies", "Ucapkan bagaimana merak terbang", "Ucapkan bagaimana merak terbang", "Décris comment le paon vole", "Di cómo vuela el pavo real"),
              arabicText: "الطَّاوُوسُ يَطِيرُ بِجَنَاحَيْهِ الجَمِيلَيْن",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f99a/512.webp"
            },
            {
              id: "uae-g1u5l3-e8",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة طَعَامٌ", "Write the word طَعَامٌ", "Tulis perkataan طَعَامٌ", "Tulis kata طَعَامٌ", "Écris le mot طَعَامٌ", "Escribe la palabra طَعَامٌ"),
              arabicText: "طَعَامٌ",
              answer: "طَعَامٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f37d-fe0f/512.webp"
            },
            {
              id: "uae-g1u5l3e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "انْظُرُوا إِلَى رِيشِي الْجَمِيل",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f99a/512.webp"
            },
            {
              id: "uae-g1u5l3speakuae-g1u5l3-v7",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "ظِلٌّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f32b-fe0f/512.webp"
            },
            {
              id: "uae-g1u5l3arrange1",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "انْظُرُوا إِلَى رِيشِي الْجَمِيل!",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f99a/512.webp"
            },
            {
              id: "uae-g1u5l3spelluae-g1u5l3-v10",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "طِفْلٌ",
              answer: "طِفْلٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f476/512.webp"
            }
          ]
        },
        {
          id: "uae-g1u5l4",
          unitId: "uae-g1u5",
          gradeId: "uae-g1",
          order: 4,
          title: t("الْعُصْفُورُ وَالْغُرَابُ — ع / غ", "Ain/Ghain", "Pipit & Gagak — Ain/Ghain", "Pipit & Gagak — Ain/Ghain", "Le moineau", "gorrión"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("طَائِرَانِ يَبْدَآنِ بِحَرْفَيِ الْعَيْنِ وَالْغَيْن!", "Two birds that start with Ain and Ghain!", "Dua burung bermula dengan Ain dan Ghain!", "Dua burung dimulai dengan Ain dan Ghain!", "Deux oiseaux qui commencent par Ain et Ghain !", "¡Dos pájaros que empiezan con Ain y Ghain!"),
          vocabulary: [
            {
              id: "uae-g1u5l4-v1",
              arabic: "عُصْفُورٌ",
              transliteration: "ʿuṣfūrun",
              translation: t("عُصْفُورٌ", "sparrow", "pipit", "pipit", "moineau", "gorrión"),
              emoji: "🐦"
            },
            {
              id: "uae-g1u5l4-v2",
              arabic: "غُرَابٌ",
              transliteration: "ghurābun",
              translation: t("غُرَابٌ", "crow/raven", "gagak", "gagak", "corbeau", "cuervo"),
              emoji: "🐦‍⬛"
            },
            {
              id: "uae-g1u5l4-v3",
              arabic: "عَيْنٌ",
              transliteration: "ʿaynun",
              translation: t("عَيْنٌ", "eye", "mata", "mata", "œil", "ojo"),
              emoji: "👁️"
            },
            {
              id: "uae-g1u5l4-v4",
              arabic: "غَابَةٌ",
              transliteration: "ghābah",
              translation: t("غَابَةٌ", "forest", "hutan", "hutan", "forêt", "bosque"),
              emoji: "🌲"
            },
            {
              id: "uae-g1u5l4-v5",
              arabic: "عَادَ",
              transliteration: "ʿāda",
              translation: t("عَادَ", "returned/to return", "kembali", "kembali", "revint/revenir", "regresó/regresar"),
              emoji: "🔄"
            },
            {
              id: "uae-g1u5l4-v6",
              arabic: "عِلْمٌ",
              transliteration: "ʿilmun",
              translation: t("عِلْمٌ", "knowledge / science", "ilmu", "ilmu", "savoir/science", "conocimiento/ciencia"),
              emoji: "📖"
            },
            {
              id: "uae-g1u5l4-v7",
              arabic: "غَنَّى",
              transliteration: "ghannā",
              translation: t("غَنَّى", "sang / to sing", "menyanyi", "menyanyi", "chanta/chanter", "cantó/cantar"),
              emoji: "🎵"
            },
            {
              id: "uae-g1u5l4-v8",
              arabic: "عَمَلٌ",
              transliteration: "ʿamalun",
              translation: t("عَمَلٌ", "work / job", "kerja", "kerja", "travail/emploi", "trabajo/empleo"),
              emoji: "💼"
            },
            {
              id: "uae-g1u5l4-v9",
              arabic: "غَرِيبٌ",
              transliteration: "gharībun",
              translation: t("غَرِيبٌ", "strange / foreign", "pelik/asing", "aneh/asing", "étrange/étranger", "extraño/extranjero"),
              emoji: "🤔"
            },
            {
              id: "uae-g1u5l4-v10",
              arabic: "عَصَا",
              transliteration: "ʿaṣā",
              translation: t("عَصَا", "stick / cane", "tongkat", "tongkat", "bâton/canne", "palo/bastón"),
              emoji: "🪄"
            }
          ],
          dialogue: [
            {
              speaker: "الْعُصْفُورُ",
              arabic: "أَنَا أُغَنِّي كُلَّ صَبَاح!",
              translation: t("أَنَا أُغَنِّي كُلَّ صَبَاح!", "I sing every morning!", "Saya menyanyi setiap pagi!", "Saya bernyanyi setiap pagi!", "Je chante chaque matin !", "¡Canto cada mañana!")
            },
            {
              speaker: "الْغُرَابُ",
              arabic: "وَأَنَا أَحْرُسُ الأَشْجَار!",
              translation: t("وَأَنَا أَحْرُسُ الأَشْجَار!", "And I guard the trees!", "Dan saya menjaga pokok-pokok!", "Dan saya menjaga pohon-pohon!", "Et moi je garde les arbres !", "¡Y yo cuido los árboles!")
            },
            {
              speaker: "الطِّفْل",
              arabic: "كِلَاكُمَا مُهِمَّانِ فِي الطَّبِيعَة!",
              translation: t("كِلَاكُمَا مُهِمَّانِ فِي الطَّبِيعَة!", "You are both important in nature!", "Kamu berdua penting di alam semula jadi!", "Kalian berdua penting di alam!", "Vous êtes tous les deux importants dans la nature !", "¡Los dos sois importantes en la naturaleza!")
            }
          ],
          exercises: [
            {
              id: "uae-g1u5l4-e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الطَّائِرَ الصَّحِيح", "Listen and choose the correct bird", "Dengar dan pilih burung yang betul", "Dengarkan dan pilih burung yang benar", "Écoute et choisis le bon oiseau", "Escucha y elige el pájaro correcto"),
              arabicText: "عُصْفُورٌ",
              options: [
                "غُرَابٌ",
                "عُصْفُورٌ",
                "طَاوُوسٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f426/512.webp"
            },
            {
              id: "uae-g1u5l4-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الطَّائِرَ بِالْحَرْف", "Match the bird to its letter", "Padankan burung dengan hurufnya", "Cocokkan burung dengan hurufnya", "Associe l'oiseau à sa lettre", "Relaciona el pájaro con su letra"),
              pairs: [
                {
                  a: "عُصْفُورٌ",
                  b: "ع"
                },
                {
                  a: "غُرَابٌ",
                  b: "غ"
                },
                {
                  a: "عَيْنٌ",
                  b: "👁️"
                },
                {
                  a: "غَابَةٌ",
                  b: "🌲"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f426/512.webp"
            },
            {
              id: "uae-g1u5l4-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلِ الْجُمْلَة: الْعُصْفُورُ يُغَنِّي", "Say: The sparrow sings", "Sebut: Pipit menyanyi", "Ucapkan: Pipit bernyanyi", "Dis : Le moineau chante", "Di: El gorrión canta"),
              arabicText: "الْعُصْفُورُ يُغَنِّي",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f426/512.webp"
            },
            {
              id: "uae-g1u5l4-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة غَابَةٌ", "Write the word غَابَةٌ", "Tulis perkataan غَابَةٌ", "Tulis kata غَابَةٌ", "Écris le mot غَابَةٌ", "Escribe la palabra غَابَةٌ"),
              arabicText: "غَابَةٌ",
              answer: "غَابَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f332/512.webp"
            },
            {
              id: "uae-g1u5l4-e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَاذَا يَفْعَلُ الْعُصْفُورُ كُلَّ صَبَاح؟", "What does the sparrow do every morning?", "Apa yang pipit lakukan setiap pagi?", "Apa yang pipit lakukan setiap pagi?", "Que fait le moineau chaque matin ?", "¿Qué hace el gorrión cada mañana?"),
              options: [
                "يَنَامُ",
                "يُغَنِّي",
                "يَحْرُسُ",
                "يَأْكُل"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f426/512.webp"
            },
            {
              id: "uae-g1u5l4-e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَاتِ الجَدِيدَة بِالْعَيْنِ وَالْغَيْن بِرُمُوزِهَا", "Match new Ain/Ghain words to their emojis", "Padankan perkataan baru dengan Ain/Ghain kepada emoji", "Cocokkan kata baru dengan Ain/Ghain dengan emoji", "Associe les nouveaux mots avec Ain/Ghain à leurs emojis", "Relaciona las nuevas palabras con Ain/Ghain con sus emojis"),
              pairs: [
                {
                  a: "عِلْمٌ",
                  b: "📖"
                },
                {
                  a: "غَنَّى",
                  b: "🎵"
                },
                {
                  a: "عَمَلٌ",
                  b: "💼"
                },
                {
                  a: "عَصَا",
                  b: "🪄"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f426/512.webp"
            },
            {
              id: "uae-g1u5l4-e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("قَارِنْ بَيْنَ الْعُصْفُورِ وَالْغُرَاب", "Compare the sparrow and the crow", "Bandingkan antara pipit dan gagak", "Bandingkan pipit dan gagak", "Compare le moineau et le corbeau", "Compara el gorrión y el cuervo"),
              arabicText: "الْعُصْفُورُ يُغَنِّي وَالْغُرَابُ يَحْرُسُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f426/512.webp"
            },
            {
              id: "uae-g1u5l4-e8",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة عِلْمٌ", "Write the word عِلْمٌ", "Tulis perkataan عِلْمٌ", "Tulis kata عِلْمٌ", "Écris le mot عِلْمٌ", "Escribe la palabra عِلْمٌ"),
              arabicText: "عِلْمٌ",
              answer: "عِلْمٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4d6/512.webp"
            },
            {
              id: "uae-g1u5l4e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "أَنَا أُغَنِّي كُلَّ صَبَاح",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f426/512.webp"
            },
            {
              id: "uae-g1u5l4writeuae-g1u5l4-v8",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"عَمَلٌ\"", "Type the Arabic word for: \"work / job\"", "Taip perkataan Arab untuk: \"kerja\"", "Ketik kata Arab untuk: \"kerja\"", "Tape le mot arabe pour : \"travail/emploi\"", "Escribe la palabra árabe para: \"trabajo/empleo\""),
              arabicText: "عَمَلٌ",
              answer: "عَمَلٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4bc/512.webp"
            },
            {
              id: "uae-g1u5l4mcquae-g1u5l4-v2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"غُرَابٌ\"؟", "What does \"crow/raven\" mean?", "Apakah maksud \"gagak\"?", "Apa arti \"gagak\"?", "Que signifie \"corbeau\" ?", "¿Qué significa \"cuervo\"?"),
              arabicText: "غُرَابٌ",
              options: [
                "necessary / essential",
                "new",
                "crow/raven",
                "goodness / well-being"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f426-200d-2b1b/512.webp"
            },
            {
              id: "uae-g1u5l4spelluae-g1u5l4-v8",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "عَمَلٌ",
              answer: "عَمَلٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4bc/512.webp"
            }
          ]
        },
        {
          id: "uae-g1u5l5",
          unitId: "uae-g1u5",
          gradeId: "uae-g1",
          order: 5,
          title: t("الْفَأْرُ وَالْقِطُّ — ف / ق", "Fa/Qaf", "Tikus & Kucing — Fa/Qaf", "Tikus & Kucing — Fa/Qaf", "souris", "ratón"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الْفَأْرُ وَالْقِطُّ! قِصَّةٌ مَشْهُورَة! حَرْفَا الْفَاء وَالْقَاف!", "The mouse and the cat! A famous story! Letters Fa and Qaf!", "Tikus dan kucing! Cerita terkenal! Huruf Fa dan Qaf!", "Tikus dan kucing! Cerita terkenal! Huruf Fa dan Qaf!", "La souris et le chat ! Une histoire célèbre ! Lettres Fa et Qaf !", "¡El ratón y el gato! ¡Una historia famosa! ¡Letras Fa y Qaf!"),
          vocabulary: [
            {
              id: "uae-g1u5l5-v1",
              arabic: "فَأْرٌ",
              transliteration: "faʾrun",
              translation: t("فَأْرٌ", "mouse/rat", "tikus", "tikus", "souris", "ratón"),
              emoji: "🐭"
            },
            {
              id: "uae-g1u5l5-v2",
              arabic: "قِطٌّ",
              transliteration: "qiṭṭun",
              translation: t("قِطٌّ", "cat", "kucing", "kucing", "chat", "gato"),
              emoji: "🐱"
            },
            {
              id: "uae-g1u5l5-v3",
              arabic: "فِيلٌ",
              transliteration: "fīlun",
              translation: t("فِيلٌ", "elephant", "gajah", "gajah", "éléphant", "elefante"),
              emoji: "🐘"
            },
            {
              id: "uae-g1u5l5-v4",
              arabic: "قَلَمٌ",
              transliteration: "qalamun",
              translation: t("قَلَمٌ", "pen/pencil", "pensel", "pensil", "crayon", "lápiz"),
              emoji: "✏️"
            },
            {
              id: "uae-g1u5l5-v5",
              arabic: "فَرِحَ",
              transliteration: "fariḥa",
              translation: t("فَرِحَ", "was happy/rejoiced", "gembira", "bersuka cita", "se réjouit", "se alegró"),
              emoji: "😄"
            },
            {
              id: "uae-g1u5l5-v6",
              arabic: "قَمَرٌ",
              transliteration: "qamarun",
              translation: t("قَمَرٌ", "moon", "bulan", "bulan", "lune", "luna"),
              emoji: "🌙"
            },
            {
              id: "uae-g1u5l5-v7",
              arabic: "فَرَاشَةٌ",
              transliteration: "farāshah",
              translation: t("فَرَاشَةٌ", "butterfly", "rama-rama", "kupu-kupu", "papillon", "mariposa"),
              emoji: "🦋"
            },
            {
              id: "uae-g1u5l5-v8",
              arabic: "قِرْدٌ",
              transliteration: "qirdun",
              translation: t("قِرْدٌ", "monkey", "monyet", "monyet", "singe", "mono"),
              emoji: "🐒"
            },
            {
              id: "uae-g1u5l5-v9",
              arabic: "فَتَحَ",
              transliteration: "fataḥa",
              translation: t("فَتَحَ", "opened / to open", "membuka", "membuka", "ouvrit/ouvrir", "abrió/abrir"),
              emoji: "🚪"
            },
            {
              id: "uae-g1u5l5-v10",
              arabic: "قَرَأَ",
              transliteration: "qaraʾa",
              translation: t("قَرَأَ", "read / to read", "membaca", "membaca", "lut/lire", "leyó/leer"),
              emoji: "📖"
            }
          ],
          dialogue: [
            {
              speaker: "الْقِطُّ",
              arabic: "أَيْنَ أَنْتَ يَا فَأْر؟",
              translation: t("أَيْنَ أَنْتَ يَا فَأْر؟", "Where are you mouse?", "Di mana kamu tikus?", "Di mana kamu tikus?", "Où es-tu souris ?", "¿Dónde estás ratoncito?")
            },
            {
              speaker: "الْفَأْرُ",
              arabic: "أَنَا هُنَا خَلْفَ الْجُبْن!",
              translation: t("أَنَا هُنَا خَلْفَ الْجُبْن!", "I am here behind the cheese!", "Saya di sini di belakang keju!", "Saya di sini di belakang keju!", "Je suis là derrière le fromage !", "¡Estoy aquí detrás del queso!")
            },
            {
              speaker: "الطِّفْل",
              arabic: "هَهَهَ! الْفَأْرُ ذَكِيٌّ!",
              translation: t("هَهَهَ! الْفَأْرُ ذَكِيٌّ!", "Ha ha ha! The mouse is clever!", "Ha ha ha! Tikus itu bijak!", "Ha ha ha! Tikus itu cerdas!", "Ha ha ha ! La souris est intelligente !", "¡Ja ja ja! ¡El ratón es listo!")
            }
          ],
          exercises: [
            {
              id: "uae-g1u5l5-e1",
              type: "mcq",
              skill: "reading",
              prompt: t("مَنْ يَلْحَقُ الْفَأْرَ عَادَةً؟", "Who usually chases the mouse?", "Siapa yang selalu mengejar tikus?", "Siapa yang biasanya mengejar tikus?", "Qui chasse habituellement la souris ?", "¿Quién suele perseguir al ratón?"),
              options: [
                "الْكَلْبُ",
                "الْقِطُّ",
                "الدُّبُّ",
                "الثَّعْلَبُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f42d/512.webp"
            },
            {
              id: "uae-g1u5l5-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالرَّمْزِ", "Match the word to its emoji", "Padankan perkataan dengan emoji", "Cocokkan kata dengan emoji", "Associe le mot à son emoji", "Relaciona la palabra con su emoji"),
              pairs: [
                {
                  a: "فَأْرٌ",
                  b: "🐭"
                },
                {
                  a: "قِطٌّ",
                  b: "🐱"
                },
                {
                  a: "فِيلٌ",
                  b: "🐘"
                },
                {
                  a: "قَلَمٌ",
                  b: "✏️"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f42d/512.webp"
            },
            {
              id: "uae-g1u5l5-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلِ الْجُمْلَة: الْقِطُّ يَلْحَقُ الْفَأْر", "Say: The cat chases the mouse", "Sebut: Kucing mengejar tikus", "Ucapkan: Kucing mengejar tikus", "Dis : Le chat chasse la souris", "Di: El gato persigue al ratón"),
              arabicText: "الْقِطُّ يَلْحَقُ الْفَأْر",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f42d/512.webp"
            },
            {
              id: "uae-g1u5l5-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة قَلَمٌ", "Write the word قَلَمٌ", "Tulis perkataan قَلَمٌ", "Tulis kata قَلَمٌ", "Écris le mot قَلَمٌ", "Escribe la palabra قَلَمٌ"),
              arabicText: "قَلَمٌ",
              answer: "قَلَمٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/270f-fe0f/512.webp"
            },
            {
              id: "uae-g1u5l5-e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا أَكْبَرُ حَيَوَانٍ بَرِّيٍّ عَلَى الأَرْض؟", "What is the largest land animal on Earth?", "Apakah haiwan darat terbesar di Bumi?", "Apa hewan darat terbesar di Bumi?", "Quel est le plus grand animal terrestre sur Terre ?", "¿Cuál es el animal terrestre más grande de la Tierra?"),
              options: [
                "الْقِطٌّ",
                "الْفَأْرُ",
                "الْفِيلُ",
                "الْقِرْدُ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f42d/512.webp"
            },
            {
              id: "uae-g1u5l5-e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَاتِ الجَدِيدَة بِالْفَاء وَالْقَاف بِرُمُوزِهَا", "Match new Fa/Qaf words to their emojis", "Padankan perkataan baru dengan Fa/Qaf kepada emoji", "Cocokkan kata baru dengan Fa/Qaf dengan emoji", "Associe les nouveaux mots avec Fa/Qaf à leurs emojis", "Relaciona las nuevas palabras con Fa/Qaf con sus emojis"),
              pairs: [
                {
                  a: "قَمَرٌ",
                  b: "🌙"
                },
                {
                  a: "فَرَاشَةٌ",
                  b: "🦋"
                },
                {
                  a: "قِرْدٌ",
                  b: "🐒"
                },
                {
                  a: "قَرَأَ",
                  b: "📖"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f42d/512.webp"
            },
            {
              id: "uae-g1u5l5-e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ جُمْلَةً عَنِ الْقِطِّ وَالْفَأْر", "Say a sentence about the cat and mouse", "Ucapkan ayat tentang kucing dan tikus", "Ucapkan kalimat tentang kucing dan tikus", "Dis une phrase sur le chat et la souris", "Di una oración sobre el gato y el ratón"),
              arabicText: "الْقِطُّ يَلْحَقُ الْفَأْرَ وَالْفَأْرُ يَهْرُب",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f42d/512.webp"
            },
            {
              id: "uae-g1u5l5-e8",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة فَرَاشَةٌ", "Write the word فَرَاشَةٌ", "Tulis perkataan فَرَاشَةٌ", "Tulis kata فَرَاشَةٌ", "Écris le mot فَرَاشَةٌ", "Escribe la palabra فَرَاشَةٌ"),
              arabicText: "فَرَاشَةٌ",
              answer: "فَرَاشَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f98b/512.webp"
            },
            {
              id: "uae-g1u5l5e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "أَيْنَ أَنْتَ يَا فَأْر",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f42d/512.webp"
            },
            {
              id: "uae-g1u5l5listenuae-g1u5l5-v4",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "قَلَمٌ",
              options: [
                "ذَكَاءٌ",
                "قَلَمٌ",
                "ذَنَبٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/270f-fe0f/512.webp"
            },
            {
              id: "uae-g1u5l5mcquae-g1u5l5-v2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"قِطٌّ\"؟", "What does \"cat\" mean?", "Apakah maksud \"kucing\"?", "Apa arti \"kucing\"?", "Que signifie \"chat\" ?", "¿Qué significa \"gato\"?"),
              arabicText: "قِطٌّ",
              options: [
                "three",
                "cat",
                "two",
                "dolphin"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f431/512.webp"
            },
            {
              id: "uae-g1u5l5writeuae-g1u5l5-v10",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"قَرَأَ\"", "Type the Arabic word for: \"read / to read\"", "Taip perkataan Arab untuk: \"membaca\"", "Ketik kata Arab untuk: \"membaca\"", "Tape le mot arabe pour : \"lut/lire\"", "Escribe la palabra árabe para: \"leyó/leer\""),
              arabicText: "قَرَأَ",
              answer: "قَرَأَ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4d6/512.webp"
            }
          ]
        },
        {
          id: "uae-g1u5review",
          unitId: "uae-g1u5",
          gradeId: "uae-g1",
          order: 6,
          title: t("مراجعة الوحدة", "Unit Review", "Ulangan Unit", "Ulangan Unit", "Révision de l’unité", "Revisión de la unidad"),
          skills: [
            "listening",
            "reading",
            "writing"
          ],
          intro: t("لنراجع ما تعلّمناه في هذه الوحدة!", "Let’s review what we learned in this unit!", "Mari ulangkaji apa yang kita pelajari dalam unit ini!", "Mari kita ulang apa yang kita pelajari dalam unit ini!", "Révisons ce que nous avons appris dans cette unité !", "¡Repasemos lo que aprendimos en esta unidad!"),
          vocabulary: [
            {
              id: "uae-g1u5l1-v1",
              arabic: "صَوْصٌ",
              transliteration: "ṣawṣun",
              translation: t("صَوْصٌ", "chick", "anak ayam", "anak ayam", "poussin", "pollito"),
              emoji: "🐥"
            },
            {
              id: "uae-g1u5l1-v2",
              arabic: "صَغِيرٌ",
              transliteration: "ṣaghīrun",
              translation: t("صَغِيرٌ", "small/little", "kecil", "kecil", "petit", "pequeño"),
              emoji: "👶"
            },
            {
              id: "uae-g1u5l1-v3",
              arabic: "صَبَاحٌ",
              transliteration: "ṣabāḥun",
              translation: t("صَبَاحٌ", "morning", "pagi", "pagi", "matin", "mañana"),
              emoji: "🌅"
            },
            {
              id: "uae-g1u5l1-v4",
              arabic: "صَدِيقٌ",
              transliteration: "ṣadīqun",
              translation: t("صَدِيقٌ", "friend", "kawan", "teman", "ami", "amigo"),
              emoji: "🤝"
            },
            {
              id: "uae-g1u5l1-v5",
              arabic: "صَوْتٌ",
              transliteration: "ṣawtun",
              translation: t("صَوْتٌ", "sound/voice", "bunyi/suara", "suara", "son/voix", "sonido/voz"),
              emoji: "🔊"
            },
            {
              id: "uae-g1u5l1-v6",
              arabic: "صِحَّةٌ",
              transliteration: "ṣiḥḥah",
              translation: t("صِحَّةٌ", "health", "kesihatan", "kesehatan", "santé", "salud"),
              emoji: "🏥"
            },
            {
              id: "uae-g1u5l1-v7",
              arabic: "صِدْقٌ",
              transliteration: "ṣidqun",
              translation: t("صِدْقٌ", "honesty / truth", "kejujuran", "kejujuran", "honnêteté/vérité", "honestidad/verdad"),
              emoji: "💯"
            },
            {
              id: "uae-g1u5l1-v8",
              arabic: "صَخْرَةٌ",
              transliteration: "ṣakhrah",
              translation: t("صَخْرَةٌ", "rock / boulder", "batu besar", "batu besar", "rocher", "roca"),
              emoji: "🪨"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "uae-g1u5reviewspelluae-g1u5l1-v3",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "صَبَاحٌ",
              answer: "صَبَاحٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f305/512.webp"
            },
            {
              id: "uae-g1u5reviewspeakuae-g1u5l1-v3",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "صَبَاحٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f305/512.webp"
            },
            {
              id: "uae-g1u5reviewspeakuae-g1u5l1-v7",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "صِدْقٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4af/512.webp"
            },
            {
              id: "uae-g1u5reviewwriteuae-g1u5l1-v2",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"صَغِيرٌ\"", "Type the Arabic word for: \"small/little\"", "Taip perkataan Arab untuk: \"kecil\"", "Ketik kata Arab untuk: \"kecil\"", "Tape le mot arabe pour : \"petit\"", "Escribe la palabra árabe para: \"pequeño\""),
              arabicText: "صَغِيرٌ",
              answer: "صَغِيرٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f476/512.webp"
            },
            {
              id: "uae-g1u5reviewspeakuae-g1u5l1-v2",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "صَغِيرٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f476/512.webp"
            },
            {
              id: "uae-g1u5reviewspeakuae-g1u5l1-v5",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "صَوْتٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f50a/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "uae-g1u6",
      gradeId: "uae-g1",
      order: 6,
      title: t("مِنْ عَالَمِ الحَيَوَانِ 4", "Animal World 4", "Dunia Haiwan 4", "Dunia Hewan 4", "Le monde animal 4", "El mundo animal 4"),
      theme: "animals",
      lessons: [
        {
          id: "uae-g1u6l1",
          unitId: "uae-g1u6",
          gradeId: "uae-g1",
          order: 1,
          title: t("الْكَلْبُ وَاللَّامَةُ — ك / ل", "Kaf/Lam", "Anjing & Llama — Kaf/Lam", "Anjing & Llama — Kaf/Lam", "Le chien", "perro"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الْكَلْبُ وَاللَّامَةُ! حَرْفَا الْكَاف وَاللَّام!", "The dog and the llama! Letters Kaf and Lam!", "Anjing dan llama! Huruf Kaf dan Lam!", "Anjing dan llama! Huruf Kaf dan Lam!", "Le chien et le lama ! Lettres Kaf et Lam !", "¡El perro y la llama! ¡Letras Kaf y Lam!"),
          vocabulary: [
            {
              id: "uae-g1u6l1-v1",
              arabic: "كَلْبٌ",
              transliteration: "kalbun",
              translation: t("كَلْبٌ", "dog", "anjing", "anjing", "chien", "perro"),
              emoji: "🐕"
            },
            {
              id: "uae-g1u6l1-v2",
              arabic: "لَبَنٌ",
              transliteration: "labanun",
              translation: t("لَبَنٌ", "milk/yogurt", "susu", "susu", "lait", "leche"),
              emoji: "🥛"
            },
            {
              id: "uae-g1u6l1-v3",
              arabic: "كَبِيرٌ",
              transliteration: "kabīrun",
              translation: t("كَبِيرٌ", "big/large", "besar", "besar", "grand", "grande"),
              emoji: "📏"
            },
            {
              id: "uae-g1u6l1-v4",
              arabic: "لَوْنٌ",
              transliteration: "lawnun",
              translation: t("لَوْنٌ", "color", "warna", "warna", "couleur", "color"),
              emoji: "🎨"
            },
            {
              id: "uae-g1u6l1-v5",
              arabic: "كَتَبَ",
              transliteration: "kataba",
              translation: t("كَتَبَ", "wrote/to write", "menulis", "menulis", "écrivit/écrire", "escribió/escribir"),
              emoji: "✍️"
            },
            {
              id: "uae-g1u6l1-v6",
              arabic: "كِتَابٌ",
              transliteration: "kitābun",
              translation: t("كِتَابٌ", "book", "buku", "buku", "livre", "libro"),
              emoji: "📚"
            },
            {
              id: "uae-g1u6l1-v7",
              arabic: "لَيْلٌ",
              transliteration: "laylun",
              translation: t("لَيْلٌ", "night", "malam", "malam", "nuit", "noche"),
              emoji: "🌙"
            },
            {
              id: "uae-g1u6l1-v8",
              arabic: "كُرَةٌ",
              transliteration: "kurah",
              translation: t("كُرَةٌ", "ball", "bola", "bola", "balle", "pelota"),
              emoji: "⚽"
            },
            {
              id: "uae-g1u6l1-v9",
              arabic: "لَعِبَ",
              transliteration: "laʿiba",
              translation: t("لَعِبَ", "played / to play", "bermain", "bermain", "joua/jouer", "jugó/jugar"),
              emoji: "🎮"
            },
            {
              id: "uae-g1u6l1-v10",
              arabic: "كَرِيمٌ",
              transliteration: "karīmun",
              translation: t("كَرِيمٌ", "generous / noble", "murah hati", "murah hati", "généreux/noble", "generoso/noble"),
              emoji: "🤲"
            }
          ],
          dialogue: [
            {
              speaker: "الطِّفْل",
              arabic: "كَلْبِي كَبِيرٌ وَلَوْنُهُ بُنِّيٌّ!",
              translation: t("كَلْبِي كَبِيرٌ وَلَوْنُهُ بُنِّيٌّ!", "My dog is big and brown!", "Anjing saya besar dan berwarna coklat!", "Anjing saya besar dan berwarna coklat!", "Mon chien est grand et brun !", "¡Mi perro es grande y marrón!")
            },
            {
              speaker: "الصَّدِيق",
              arabic: "وَهَلْ هُوَ وَدُودٌ؟",
              translation: t("وَهَلْ هُوَ وَدُودٌ؟", "And is it friendly?", "Dan adakah ia mesra?", "Dan apakah dia ramah?", "Est-il gentil ?", "¿Y es amistoso?")
            },
            {
              speaker: "الطِّفْل",
              arabic: "نَعَمْ! وَهُوَ يُحِبُّ اللَّعِبَ كَثِيراً!",
              translation: t("نَعَمْ! وَهُوَ يُحِبُّ اللَّعِبَ كَثِيراً!", "Yes! And he loves playing a lot!", "Ya! Dan dia suka bermain banyak!", "Ya! Dan dia suka bermain banyak!", "Oui ! Et il adore beaucoup jouer !", "¡Sí! ¡Y le encanta jugar mucho!")
            }
          ],
          exercises: [
            {
              id: "uae-g1u6l1-e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "كَلْبٌ",
              options: [
                "لَبَنٌ",
                "كَبِيرٌ",
                "كَلْبٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f415/512.webp"
            },
            {
              id: "uae-g1u6l1-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالرَّمْزِ", "Match the word to its emoji", "Padankan perkataan dengan emoji", "Cocokkan kata dengan emoji", "Associe le mot à son emoji", "Relaciona la palabra con su emoji"),
              pairs: [
                {
                  a: "كَلْبٌ",
                  b: "🐕"
                },
                {
                  a: "لَبَنٌ",
                  b: "🥛"
                },
                {
                  a: "لَوْنٌ",
                  b: "🎨"
                },
                {
                  a: "كَتَبَ",
                  b: "✍️"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f415/512.webp"
            },
            {
              id: "uae-g1u6l1-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("صِفْ كَلْبَكَ أَوْ كَلْباً تَعْرِفُه", "Describe your dog or a dog you know", "Huraikan anjing kamu atau anjing yang kamu kenal", "Deskripsikan anjingmu atau anjing yang kamu kenal", "Décris ton chien ou un chien que tu connais", "Describe tu perro o un perro que conozcas"),
              arabicText: "الْكَلْبُ كَبِيرٌ وَوَدُودٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4cf/512.webp"
            },
            {
              id: "uae-g1u6l1-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة كَبِيرٌ", "Write the word كَبِيرٌ", "Tulis perkataan كَبِيرٌ", "Tulis kata كَبِيرٌ", "Écris le mot كَبِيرٌ", "Escribe la palabra كَبِيرٌ"),
              arabicText: "كَبِيرٌ",
              answer: "كَبِيرٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4cf/512.webp"
            },
            {
              id: "uae-g1u6l1-e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا مَعْنَى كِتَابٌ؟", "What does كِتَابٌ mean?", "Apa maksud كِتَابٌ?", "Apa arti كِتَابٌ?", "Que signifie كِتَابٌ ?", "¿Qué significa كِتَابٌ?"),
              options: [
                "dog",
                "color",
                "book",
                "night"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f415/512.webp"
            },
            {
              id: "uae-g1u6l1-e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَاتِ الجَدِيدَة بِالْكَاف وَاللَّام بِرُمُوزِهَا", "Match new Kaf/Lam words to their emojis", "Padankan perkataan baru dengan Kaf/Lam kepada emoji", "Cocokkan kata baru dengan Kaf/Lam dengan emoji", "Associe les nouveaux mots avec Kaf/Lam à leurs emojis", "Relaciona las nuevas palabras con Kaf/Lam con sus emojis"),
              pairs: [
                {
                  a: "كِتَابٌ",
                  b: "📚"
                },
                {
                  a: "لَيْلٌ",
                  b: "🌙"
                },
                {
                  a: "كُرَةٌ",
                  b: "⚽"
                },
                {
                  a: "لَعِبَ",
                  b: "🎮"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f415/512.webp"
            },
            {
              id: "uae-g1u6l1-e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ جُمْلَةً عَنِ الْكَلْب", "Say a sentence about the dog", "Ucapkan ayat tentang anjing", "Ucapkan kalimat tentang anjing", "Dis une phrase sur le chien", "Di una oración sobre el perro"),
              arabicText: "الْكَلْبُ حَيَوَانٌ وَفِيٌّ وَيُحِبُّ اللَّعِب",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f415/512.webp"
            },
            {
              id: "uae-g1u6l1-e8",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة كِتَابٌ", "Write the word كِتَابٌ", "Tulis perkataan كِتَابٌ", "Tulis kata كِتَابٌ", "Écris le mot كِتَابٌ", "Escribe la palabra كِتَابٌ"),
              arabicText: "كِتَابٌ",
              answer: "كِتَابٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp"
            },
            {
              id: "uae-g1u6l1e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "كَلْبِي كَبِيرٌ وَلَوْنُهُ بُنِّيٌّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4cf/512.webp"
            },
            {
              id: "uae-g1u6l1writeuae-g1u6l1-v6",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"كِتَابٌ\"", "Type the Arabic word for: \"book\"", "Taip perkataan Arab untuk: \"buku\"", "Ketik kata Arab untuk: \"buku\"", "Tape le mot arabe pour : \"livre\"", "Escribe la palabra árabe para: \"libro\""),
              arabicText: "كِتَابٌ",
              answer: "كِتَابٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp"
            },
            {
              id: "uae-g1u6l1mcquae-g1u6l1-v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"كَلْبٌ\"؟", "What does \"dog\" mean?", "Apakah maksud \"anjing\"?", "Apa arti \"anjing\"?", "Que signifie \"chien\" ?", "¿Qué significa \"perro\"?"),
              arabicText: "كَلْبٌ",
              options: [
                "dog",
                "sound/voice",
                "bridge",
                "happy"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f415/512.webp"
            },
            {
              id: "uae-g1u6l1speakuae-g1u6l1-v1",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "كَلْبٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f415/512.webp"
            }
          ]
        },
        {
          id: "uae-g1u6l2",
          unitId: "uae-g1u6",
          gradeId: "uae-g1",
          order: 2,
          title: t("الْمَاعِزُ وَالنَّحْلَةُ — م / ن", "Mim/Nun", "Kambing & Lebah — Mim/Nun", "Kambing & Lebah — Mim/Nun", "chèvre", "cabra"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الْمَاعِزُ وَالنَّحْلَةُ! حَرْفَا الْمِيمِ وَالنُّون!", "The goat and the bee! Letters Mim and Nun!", "Kambing dan lebah! Huruf Mim dan Nun!", "Kambing dan lebah! Huruf Mim dan Nun!", "La chèvre et l'abeille ! Lettres Mim et Nun !", "¡La cabra y la abeja! ¡Letras Mim y Nun!"),
          vocabulary: [
            {
              id: "uae-g1u6l2-v1",
              arabic: "مَاعِزٌ",
              transliteration: "māʿizun",
              translation: t("مَاعِزٌ", "goat", "kambing", "kambing", "chèvre", "cabra"),
              emoji: "🐐"
            },
            {
              id: "uae-g1u6l2-v2",
              arabic: "نَحْلَةٌ",
              transliteration: "naḥlah",
              translation: t("نَحْلَةٌ", "bee", "lebah", "lebah", "abeille", "abeja"),
              emoji: "🐝"
            },
            {
              id: "uae-g1u6l2-v3",
              arabic: "مَاءٌ",
              transliteration: "māʾun",
              translation: t("مَاءٌ", "water", "air", "air", "eau", "agua"),
              emoji: "💧"
            },
            {
              id: "uae-g1u6l2-v4",
              arabic: "نَهَرٌ",
              transliteration: "naharun",
              translation: t("نَهَرٌ", "river", "sungai", "sungai", "rivière", "río"),
              emoji: "🏞️"
            },
            {
              id: "uae-g1u6l2-v5",
              arabic: "مَشَى",
              transliteration: "mashā",
              translation: t("مَشَى", "walked/to walk", "berjalan", "berjalan", "marcha/marcher", "caminó/caminar"),
              emoji: "🚶"
            },
            {
              id: "uae-g1u6l2-v6",
              arabic: "مَدِينَةٌ",
              transliteration: "madīnah",
              translation: t("مَدِينَةٌ", "city", "bandar raya", "kota", "ville", "ciudad"),
              emoji: "🏙️"
            },
            {
              id: "uae-g1u6l2-v7",
              arabic: "نُجُومٌ",
              transliteration: "nujūmun",
              translation: t("نُجُومٌ", "stars", "bintang-bintang", "bintang-bintang", "étoiles", "estrellas"),
              emoji: "⭐"
            },
            {
              id: "uae-g1u6l2-v8",
              arabic: "مَسْجِدٌ",
              transliteration: "masjidun",
              translation: t("مَسْجِدٌ", "mosque", "masjid", "masjid", "mosquée", "mezquita"),
              emoji: "🕌"
            },
            {
              id: "uae-g1u6l2-v9",
              arabic: "نَوْمٌ",
              transliteration: "nawmun",
              translation: t("نَوْمٌ", "sleep", "tidur", "tidur", "sommeil", "sueño"),
              emoji: "😴"
            },
            {
              id: "uae-g1u6l2-v10",
              arabic: "مَرَحٌ",
              transliteration: "maraḥun",
              translation: t("مَرَحٌ", "joy / fun", "kegembiraan", "kegembiraan", "joie/amusement", "alegría/diversión"),
              emoji: "🎉"
            }
          ],
          dialogue: [
            {
              speaker: "النَّحْلَةُ",
              arabic: "أَنَا أَجْمَعُ الرَّحِيقَ مِنَ الأَزْهَار!",
              translation: t("أَنَا أَجْمَعُ الرَّحِيقَ مِنَ الأَزْهَار!", "I collect nectar from flowers!", "Saya mengumpul nektar dari bunga!", "Saya mengumpulkan nektar dari bunga!", "Je récolte le nectar des fleurs !", "¡Recolecto néctar de las flores!")
            },
            {
              speaker: "الْمَاعِزُ",
              arabic: "وَأَنَا آكُلُ الْعُشْبَ بِجَانِبِ النَّهَر!",
              translation: t("وَأَنَا آكُلُ الْعُشْبَ بِجَانِبِ النَّهَر!", "And I eat grass beside the river!", "Dan saya makan rumput di tepi sungai!", "Dan saya makan rumput di tepi sungai!", "Et moi je mange de l'herbe au bord de la rivière !", "¡Y yo como hierba junto al río!")
            },
            {
              speaker: "الطِّفْل",
              arabic: "النَّحْلَةُ تُعْطِينَا الْعَسَلَ وَالْمَاعِزُ تُعْطِينَا اللَّبَن!",
              translation: t("النَّحْلَةُ تُعْطِينَا الْعَسَلَ وَالْمَاعِزُ تُعْطِينَا اللَّبَن!", "The bee gives us honey and the goat gives us milk!", "Lebah beri kita madu dan kambing beri kita susu!", "Lebah memberi kita madu dan kambing memberi kita susu!", "L'abeille nous donne du miel et la chèvre du lait !", "¡La abeja nos da miel y la cabra nos da leche!")
            }
          ],
          exercises: [
            {
              id: "uae-g1u6l2-e1",
              type: "mcq",
              skill: "reading",
              prompt: t("مَاذَا تُعْطِينَا النَّحْلَة؟", "What does the bee give us?", "Apa yang lebah beri kita?", "Apa yang lebah berikan kepada kita?", "Que nous donne l'abeille ?", "¿Qué nos da la abeja?"),
              options: [
                "اللَّبَن",
                "الْعَسَل",
                "الرَّحِيق",
                "الْمَاء"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f410/512.webp"
            },
            {
              id: "uae-g1u6l2-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالرَّمْزِ", "Match the word to its emoji", "Padankan perkataan dengan emoji", "Cocokkan kata dengan emoji", "Associe le mot à son emoji", "Relaciona la palabra con su emoji"),
              pairs: [
                {
                  a: "مَاعِزٌ",
                  b: "🐐"
                },
                {
                  a: "نَحْلَةٌ",
                  b: "🐝"
                },
                {
                  a: "نَهَرٌ",
                  b: "🏞️"
                },
                {
                  a: "مَاءٌ",
                  b: "💧"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f410/512.webp"
            },
            {
              id: "uae-g1u6l2-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ مَا تُعْطِينَا النَّحْلَة", "Say what the bee gives us", "Sebut apa yang lebah berikan kepada kita", "Katakan apa yang lebah berikan kepada kita", "Dis ce que l'abeille nous donne", "Di qué nos da la abeja"),
              arabicText: "النَّحْلَةُ تُعْطِينَا الْعَسَل",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f410/512.webp"
            },
            {
              id: "uae-g1u6l2-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة نَهَرٌ", "Write the word نَهَرٌ", "Tulis perkataan نَهَرٌ", "Tulis kata نَهَرٌ", "Écris le mot نَهَرٌ", "Escribe la palabra نَهَرٌ"),
              arabicText: "نَهَرٌ",
              answer: "نَهَرٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3de-fe0f/512.webp"
            },
            {
              id: "uae-g1u6l2-e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَاذَا تُعْطِينَا الْمَاعِز؟", "What does the goat give us?", "Apa yang kambing berikan kepada kita?", "Apa yang kambing berikan kepada kita?", "Que nous donne la chèvre ?", "¿Qué nos da la cabra?"),
              options: [
                "الْعَسَل",
                "اللَّبَن",
                "اللَّحْم",
                "الصُّوف"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f410/512.webp"
            },
            {
              id: "uae-g1u6l2-e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَاتِ الجَدِيدَة بِالْمِيمِ وَالنُّون بِرُمُوزِهَا", "Match new Mim/Nun words to their emojis", "Padankan perkataan baru dengan Mim/Nun kepada emoji", "Cocokkan kata baru dengan Mim/Nun dengan emoji", "Associe les nouveaux mots avec Mim/Nun à leurs emojis", "Relaciona las nuevas palabras con Mim/Nun con sus emojis"),
              pairs: [
                {
                  a: "مَدِينَةٌ",
                  b: "🏙️"
                },
                {
                  a: "نُجُومٌ",
                  b: "⭐"
                },
                {
                  a: "مَسْجِدٌ",
                  b: "🕌"
                },
                {
                  a: "مَرَحٌ",
                  b: "🎉"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f410/512.webp"
            },
            {
              id: "uae-g1u6l2-e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ فَائِدَةَ النَّحْلَةِ وَالْمَاعِز", "Say the benefit of the bee and the goat", "Ucapkan manfaat lebah dan kambing", "Ucapkan manfaat lebah dan kambing", "Dis l'utilité de l'abeille et de la chèvre", "Di el beneficio de la abeja y la cabra"),
              arabicText: "النَّحْلَةُ تُعْطِينَا الْعَسَلَ وَالْمَاعِزُ تُعْطِينَا اللَّبَن",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f410/512.webp"
            },
            {
              id: "uae-g1u6l2-e8",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة مَسْجِدٌ", "Write the word مَسْجِدٌ", "Tulis perkataan مَسْجِدٌ", "Tulis kata مَسْجِدٌ", "Écris le mot مَسْجِدٌ", "Escribe la palabra مَسْجِدٌ"),
              arabicText: "مَسْجِدٌ",
              answer: "مَسْجِدٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f54c/512.webp"
            },
            {
              id: "uae-g1u6l2e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "أَنَا أَجْمَعُ الرَّحِيقَ مِنَ الأَزْهَار",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f410/512.webp"
            },
            {
              id: "uae-g1u6l2mcquae-g1u6l2-v8",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"مَسْجِدٌ\"؟", "What does \"mosque\" mean?", "Apakah maksud \"masjid\"?", "Apa arti \"masjid\"?", "Que signifie \"mosquée\" ?", "¿Qué significa \"mezquita\"?"),
              arabicText: "مَسْجِدٌ",
              options: [
                "mosque",
                "good morning",
                "fish",
                "flower"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f54c/512.webp"
            },
            {
              id: "uae-g1u6l2speakuae-g1u6l2-v6",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "مَدِينَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d9-fe0f/512.webp"
            },
            {
              id: "uae-g1u6l2writeuae-g1u6l2-v6",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"مَدِينَةٌ\"", "Type the Arabic word for: \"city\"", "Taip perkataan Arab untuk: \"bandar raya\"", "Ketik kata Arab untuk: \"kota\"", "Tape le mot arabe pour : \"ville\"", "Escribe la palabra árabe para: \"ciudad\""),
              arabicText: "مَدِينَةٌ",
              answer: "مَدِينَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d9-fe0f/512.webp"
            }
          ]
        },
        {
          id: "uae-g1u6l3",
          unitId: "uae-g1u6",
          gradeId: "uae-g1",
          order: 3,
          title: t("الْهُدْهُدُ وَالْوَرَل — ه / و", "Ha/Waw", "Burung Hudhud & Biawak — Ha/Waw", "Burung Hudhud & Biawak — Ha/Waw", "huppe", "abubilla"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الْهُدْهُدُ وَالْوَرَل! حَرْفَا الْهَاء وَالْوَاو!", "The hoopoe and monitor lizard! Letters Ha and Waw!", "Burung hudhud dan biawak! Huruf Ha dan Waw!", "Burung hudhud dan biawak! Huruf Ha dan Waw!", "La huppe et le varan ! Lettres Ha et Waw !", "¡La abubilla y el varano! ¡Letras Ha y Waw!"),
          vocabulary: [
            {
              id: "uae-g1u6l3-v1",
              arabic: "هُدْهُدٌ",
              transliteration: "hudhudun",
              translation: t("هُدْهُدٌ", "hoopoe (bird)", "burung hudhud", "burung hudhud", "huppe fasciée", "abubilla"),
              emoji: "🦅"
            },
            {
              id: "uae-g1u6l3-v2",
              arabic: "وَرَلٌ",
              transliteration: "waralun",
              translation: t("وَرَلٌ", "monitor lizard", "biawak", "biawak", "varan", "varano"),
              emoji: "🦎"
            },
            {
              id: "uae-g1u6l3-v3",
              arabic: "هَوَاءٌ",
              transliteration: "hawāʾun",
              translation: t("هَوَاءٌ", "air/wind", "udara/angin", "udara/angin", "air/vent", "aire/viento"),
              emoji: "🌬️"
            },
            {
              id: "uae-g1u6l3-v4",
              arabic: "وَرَدَةٌ",
              transliteration: "wardah",
              translation: t("وَرَدَةٌ", "rose", "mawar", "mawar", "rose", "rosa"),
              emoji: "🌹"
            },
            {
              id: "uae-g1u6l3-v5",
              arabic: "هَنِئَ",
              transliteration: "haniʾa",
              translation: t("هَنِئَ", "was happy/glad", "gembira/senang", "berbahagia", "fut heureux", "fue feliz"),
              emoji: "😊"
            },
            {
              id: "uae-g1u6l3-v6",
              arabic: "وَطَنٌ",
              transliteration: "waṭanun",
              translation: t("وَطَنٌ", "homeland / country", "tanah air", "tanah air", "patrie/pays", "patria/país"),
              emoji: "🏳️"
            },
            {
              id: "uae-g1u6l3-v7",
              arabic: "هِلَالٌ",
              transliteration: "hilālun",
              translation: t("هِلَالٌ", "crescent moon", "anak bulan", "bulan sabit", "croissant de lune", "luna creciente"),
              emoji: "🌙"
            },
            {
              id: "uae-g1u6l3-v8",
              arabic: "وَقْتٌ",
              transliteration: "waqtun",
              translation: t("وَقْتٌ", "time", "masa/waktu", "waktu", "temps", "tiempo"),
              emoji: "⏰"
            },
            {
              id: "uae-g1u6l3-v9",
              arabic: "هَدِيَّةٌ",
              transliteration: "hadiyyah",
              translation: t("هَدِيَّةٌ", "gift / present", "hadiah", "hadiah", "cadeau", "regalo"),
              emoji: "🎁"
            },
            {
              id: "uae-g1u6l3-v10",
              arabic: "وَدَاعٌ",
              transliteration: "wadāʿun",
              translation: t("وَدَاعٌ", "farewell / goodbye", "perpisahan/selamat tinggal", "perpisahan", "adieu/au revoir", "despedida/adiós"),
              emoji: "👋"
            }
          ],
          dialogue: [
            {
              speaker: "الْهُدْهُدُ",
              arabic: "أَنَا طَائِرٌ مَذْكُورٌ فِي الْقُرْآنِ الْكَرِيم!",
              translation: t("أَنَا طَائِرٌ مَذْكُورٌ فِي الْقُرْآنِ الْكَرِيم!", "I am a bird mentioned in the Holy Quran!", "Saya burung yang disebut dalam Al-Quran!", "Saya adalah burung yang disebutkan dalam Al-Quran!", "Je suis un oiseau mentionné dans le Saint Coran !", "¡Soy un pájaro mencionado en el Santo Corán!")
            },
            {
              speaker: "الطِّفْل",
              arabic: "وَاوْ! أَنْتَ طَائِرٌ مُبَارَكٌ!",
              translation: t("وَاوْ! أَنْتَ طَائِرٌ مُبَارَكٌ!", "Wow! You are a blessed bird!", "Wah! Kamu burung yang diberkati!", "Wah! Kamu adalah burung yang diberkahi!", "Wow ! Tu es un oiseau béni !", "¡Guau! ¡Eres un pájaro bendito!")
            },
            {
              speaker: "الْهُدْهُدُ",
              arabic: "نَعَمْ! وَأَنَا أُحِبُّ الطَّبِيعَة وَالْهَوَاء!",
              translation: t("نَعَمْ! وَأَنَا أُحِبُّ الطَّبِيعَة وَالْهَوَاء!", "Yes! And I love nature and fresh air!", "Ya! Dan saya suka alam dan udara!", "Ya! Dan saya suka alam dan udara!", "Oui ! Et j'adore la nature et l'air frais !", "¡Sí! ¡Y me encanta la naturaleza y el aire!")
            }
          ],
          exercises: [
            {
              id: "uae-g1u6l3-e1",
              type: "mcq",
              skill: "reading",
              prompt: t("أَيْنَ ذُكِرَ الْهُدْهُد؟", "Where is the hoopoe mentioned?", "Di mana hudhud disebut?", "Di mana hudhud disebutkan?", "Où la huppe est-elle mentionnée ?", "¿Dónde se menciona la abubilla?"),
              options: [
                "فِي قِصَّةٍ قَدِيمَة",
                "فِي الْقُرْآنِ الْكَرِيم",
                "فِي كِتَابِ الْعِلْم",
                "فِي أَغْنِيَةٍ جَمِيلَة"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f985/512.webp"
            },
            {
              id: "uae-g1u6l3-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالرَّمْزِ", "Match the word to its emoji", "Padankan perkataan dengan emoji", "Cocokkan kata dengan emoji", "Associe le mot à son emoji", "Relaciona la palabra con su emoji"),
              pairs: [
                {
                  a: "هُدْهُدٌ",
                  b: "🦅"
                },
                {
                  a: "وَرَلٌ",
                  b: "🦎"
                },
                {
                  a: "هَوَاءٌ",
                  b: "🌬️"
                },
                {
                  a: "وَرَدَةٌ",
                  b: "🌹"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f985/512.webp"
            },
            {
              id: "uae-g1u6l3-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ جُمْلَةً عَنِ الْهُدْهُد", "Say a sentence about the hoopoe", "Sebut ayat tentang hudhud", "Ucapkan kalimat tentang hudhud", "Dis une phrase sur la huppe", "Di una oración sobre la abubilla"),
              arabicText: "الْهُدْهُدُ طَائِرٌ جَمِيلٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f985/512.webp"
            },
            {
              id: "uae-g1u6l3-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة وَرَدَةٌ", "Write the word وَرَدَةٌ", "Tulis perkataan وَرَدَةٌ", "Tulis kata وَرَدَةٌ", "Écris le mot وَرَدَةٌ", "Escribe la palabra وَرَدَةٌ"),
              arabicText: "وَرَدَةٌ",
              answer: "وَرَدَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f339/512.webp"
            },
            {
              id: "uae-g1u6l3-e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا مَعْنَى وَطَنٌ؟", "What does وَطَنٌ mean?", "Apa maksud وَطَنٌ?", "Apa arti وَطَنٌ?", "Que signifie وَطَنٌ ?", "¿Qué significa وَطَنٌ?"),
              options: [
                "time",
                "gift",
                "rose",
                "homeland"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f985/512.webp"
            },
            {
              id: "uae-g1u6l3-e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَاتِ الجَدِيدَة بِالْهَاء وَالْوَاو بِرُمُوزِهَا", "Match new Ha/Waw words to their emojis", "Padankan perkataan baru dengan Ha/Waw kepada emoji", "Cocokkan kata baru dengan Ha/Waw dengan emoji", "Associe les nouveaux mots avec Ha/Waw à leurs emojis", "Relaciona las nuevas palabras con Ha/Waw con sus emojis"),
              pairs: [
                {
                  a: "وَطَنٌ",
                  b: "🏳️"
                },
                {
                  a: "هِلَالٌ",
                  b: "🌙"
                },
                {
                  a: "هَدِيَّةٌ",
                  b: "🎁"
                },
                {
                  a: "وَقْتٌ",
                  b: "⏰"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f985/512.webp"
            },
            {
              id: "uae-g1u6l3-e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ لِمَاذَا الْهُدْهُدُ طَائِرٌ مُبَارَك", "Say why the hoopoe is a blessed bird", "Ucapkan mengapa hudhud adalah burung yang diberkati", "Ucapkan mengapa hudhud adalah burung yang diberkahi", "Dis pourquoi la huppe est un oiseau béni", "Di por qué la abubilla es un pájaro bendito"),
              arabicText: "الْهُدْهُدُ مَذْكُورٌ فِي الْقُرْآنِ الْكَرِيمِ وَهُوَ طَائِرٌ مُبَارَك",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f985/512.webp"
            },
            {
              id: "uae-g1u6l3-e8",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة هَدِيَّةٌ", "Write the word هَدِيَّةٌ", "Tulis perkataan هَدِيَّةٌ", "Tulis kata هَدِيَّةٌ", "Écris le mot هَدِيَّةٌ", "Escribe la palabra هَدِيَّةٌ"),
              arabicText: "هَدِيَّةٌ",
              answer: "هَدِيَّةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f381/512.webp"
            },
            {
              id: "uae-g1u6l3e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "أَنَا طَائِرٌ مَذْكُورٌ فِي الْقُرْآنِ الْكَرِيم",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f985/512.webp"
            },
            {
              id: "uae-g1u6l3speakuae-g1u6l3-v10",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "وَدَاعٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp"
            },
            {
              id: "uae-g1u6l3speakuae-g1u6l3-v2",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "وَرَلٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f98e/512.webp"
            },
            {
              id: "uae-g1u6l3writeuae-g1u6l3-v8",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"وَقْتٌ\"", "Type the Arabic word for: \"time\"", "Taip perkataan Arab untuk: \"masa/waktu\"", "Ketik kata Arab untuk: \"waktu\"", "Tape le mot arabe pour : \"temps\"", "Escribe la palabra árabe para: \"tiempo\""),
              arabicText: "وَقْتٌ",
              answer: "وَقْتٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/23f0/512.webp"
            }
          ]
        },
        {
          id: "uae-g1u6l4",
          unitId: "uae-g1u6",
          gradeId: "uae-g1",
          order: 4,
          title: t("حَرْفُ الْيَاء", "Ya", "Merpati — Huruf Ya", "Merpati — Huruf Ya", "colombe — Lettre Ya", "paloma — Letra Ya"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الْيَمَامَةُ رَمْزُ السَّلَامِ! يَبْدَأُ اسْمُهَا بِحَرْفِ الْيَاء!", "The dove is a symbol of peace! Its name starts with Ya!", "Merpati adalah simbol perdamaian! Namanya bermula dengan Ya!", "Merpati adalah simbol perdamaian! Namanya dimulai dengan Ya!", "La colombe est le symbole de la paix ! Son nom commence par Ya !", "¡La paloma es símbolo de paz! ¡Su nombre empieza con Ya!"),
          vocabulary: [
            {
              id: "uae-g1u6l4-v1",
              arabic: "يَمَامَةٌ",
              transliteration: "yamāmah",
              translation: t("يَمَامَةٌ", "dove/pigeon", "merpati", "merpati", "colombe", "paloma"),
              emoji: "🕊️"
            },
            {
              id: "uae-g1u6l4-v2",
              arabic: "يَدٌ",
              transliteration: "yadun",
              translation: t("يَدٌ", "hand", "tangan", "tangan", "main", "mano"),
              emoji: "🖐️"
            },
            {
              id: "uae-g1u6l4-v3",
              arabic: "يَوْمٌ",
              transliteration: "yawmun",
              translation: t("يَوْمٌ", "day", "hari", "hari", "jour", "día"),
              emoji: "📅"
            },
            {
              id: "uae-g1u6l4-v4",
              arabic: "يَلْعَبُ",
              transliteration: "yalʿabu",
              translation: t("يَلْعَبُ", "plays/to play", "bermain", "bermain", "joue/jouer", "juega/jugar"),
              emoji: "⚽"
            },
            {
              id: "uae-g1u6l4-v5",
              arabic: "يُحِبُّ",
              transliteration: "yuḥibbu",
              translation: t("يُحِبُّ", "loves/to love", "menyayangi", "mencintai", "aime/aimer", "ama/amar"),
              emoji: "❤️"
            },
            {
              id: "uae-g1u6l4-v6",
              arabic: "يَقْرَأُ",
              transliteration: "yaqraʾu",
              translation: t("يَقْرَأُ", "reads / to read", "membaca", "membaca", "lit/lire", "lee/leer"),
              emoji: "📖"
            },
            {
              id: "uae-g1u6l4-v7",
              arabic: "يَكْتُبُ",
              transliteration: "yaktubu",
              translation: t("يَكْتُبُ", "writes / to write", "menulis", "menulis", "écrit/écrire", "escribe/escribir"),
              emoji: "✍️"
            },
            {
              id: "uae-g1u6l4-v8",
              arabic: "يَمْشِي",
              transliteration: "yamshī",
              translation: t("يَمْشِي", "walks / to walk", "berjalan", "berjalan", "marche/marcher", "camina/caminar"),
              emoji: "🚶"
            },
            {
              id: "uae-g1u6l4-v9",
              arabic: "يَنَامُ",
              transliteration: "yanāmu",
              translation: t("يَنَامُ", "sleeps / to sleep", "tidur", "tidur", "dort/dormir", "duerme/dormir"),
              emoji: "😴"
            },
            {
              id: "uae-g1u6l4-v10",
              arabic: "يَأْكُلُ",
              transliteration: "yaʾkulu",
              translation: t("يَأْكُلُ", "eats / to eat", "makan", "makan", "mange/manger", "come/comer"),
              emoji: "🍽️"
            }
          ],
          dialogue: [
            {
              speaker: "الطِّفْلَةُ",
              arabic: "انْظُرُوا! يَمَامَةٌ بَيْضَاءُ جَمِيلَة!",
              translation: t("انْظُرُوا! يَمَامَةٌ بَيْضَاءُ جَمِيلَة!", "Look! A beautiful white dove!", "Tengok! Merpati putih yang cantik!", "Lihat! Merpati putih yang indah!", "Regardez ! Une belle colombe blanche !", "¡Miren! ¡Una hermosa paloma blanca!")
            },
            {
              speaker: "الأَب",
              arabic: "الْيَمَامَةُ رَمْزُ الأَمَانِ وَالسَّلَام!",
              translation: t("الْيَمَامَةُ رَمْزُ الأَمَانِ وَالسَّلَام!", "The dove is a symbol of safety and peace!", "Merpati adalah simbol keselamatan dan perdamaian!", "Merpati adalah simbol keamanan dan perdamaian!", "La colombe est le symbole de la sécurité et de la paix !", "¡La paloma es símbolo de seguridad y paz!")
            },
            {
              speaker: "الطِّفْلَةُ",
              arabic: "أُحِبُّ الْيَمَامَةَ كَثِيراً!",
              translation: t("أُحِبُّ الْيَمَامَةَ كَثِيراً!", "I love the dove so much!", "Saya sangat suka merpati!", "Saya sangat mencintai merpati!", "J'adore beaucoup la colombe !", "¡Amo muchísimo a la paloma!")
            }
          ],
          exercises: [
            {
              id: "uae-g1u6l4-e1",
              type: "mcq",
              skill: "reading",
              prompt: t("مَاذَا تَرْمُزُ الْيَمَامَة؟", "What does the dove symbolize?", "Apa yang dilambangkan oleh merpati?", "Apa yang disimbolkan merpati?", "Que symbolise la colombe ?", "¿Qué simboliza la paloma?"),
              options: [
                "الْقُوَّة",
                "السُّرْعَة",
                "السَّلَام",
                "الذَّكَاء"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f54a-fe0f/512.webp"
            },
            {
              id: "uae-g1u6l4-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالرَّمْزِ", "Match the word to its emoji", "Padankan perkataan dengan emoji", "Cocokkan kata dengan emoji", "Associe le mot à son emoji", "Relaciona la palabra con su emoji"),
              pairs: [
                {
                  a: "يَمَامَةٌ",
                  b: "🕊️"
                },
                {
                  a: "يَدٌ",
                  b: "🖐️"
                },
                {
                  a: "يَلْعَبُ",
                  b: "⚽"
                },
                {
                  a: "يُحِبُّ",
                  b: "❤️"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f54a-fe0f/512.webp"
            },
            {
              id: "uae-g1u6l4-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلِ الْجُمْلَة: الْيَمَامَةُ رَمْزُ السَّلَام", "Say: The dove is a symbol of peace", "Sebut: Merpati adalah simbol perdamaian", "Ucapkan: Merpati adalah simbol perdamaian", "Dis : La colombe est le symbole de la paix", "Di: La paloma es símbolo de paz"),
              arabicText: "الْيَمَامَةُ رَمْزُ السَّلَام",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f54a-fe0f/512.webp"
            },
            {
              id: "uae-g1u6l4-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة يَوْمٌ", "Write the word يَوْمٌ", "Tulis perkataan يَوْمٌ", "Tulis kata يَوْمٌ", "Écris le mot يَوْمٌ", "Escribe la palabra يَوْمٌ"),
              arabicText: "يَوْمٌ",
              answer: "يَوْمٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4c5/512.webp"
            },
            {
              id: "uae-g1u6l4-e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَاذَا يَعْنِي يَقْرَأُ؟", "What does يَقْرَأُ mean?", "Apa maksud يَقْرَأُ?", "Apa arti يَقْرَأُ?", "Que signifie يَقْرَأُ ?", "¿Qué significa يَقْرَأُ?"),
              options: [
                "sleeps",
                "plays",
                "reads",
                "walks"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f54a-fe0f/512.webp"
            },
            {
              id: "uae-g1u6l4-e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الأَفْعَالَ الجَدِيدَة بِالْيَاء بِرُمُوزِهَا", "Match new Ya verbs to their emojis", "Padankan kata kerja baru dengan Ya kepada emoji", "Cocokkan kata kerja baru dengan Ya dengan emoji", "Associe les nouveaux verbes avec Ya à leurs emojis", "Relaciona los nuevos verbos con Ya con sus emojis"),
              pairs: [
                {
                  a: "يَقْرَأُ",
                  b: "📖"
                },
                {
                  a: "يَكْتُبُ",
                  b: "✍️"
                },
                {
                  a: "يَنَامُ",
                  b: "😴"
                },
                {
                  a: "يَأْكُلُ",
                  b: "🍽️"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f54a-fe0f/512.webp"
            },
            {
              id: "uae-g1u6l4-e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ مَا تَفْعَلُهُ كُلَّ يَوْم", "Say what you do every day", "Ucapkan apa yang kamu lakukan setiap hari", "Ucapkan apa yang kamu lakukan setiap hari", "Dis ce que tu fais chaque jour", "Di qué haces cada día"),
              arabicText: "أَنَا أَقْرَأُ وَأَكْتُبُ وَأَلْعَبُ وَآكُلُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f54a-fe0f/512.webp"
            },
            {
              id: "uae-g1u6l4-e8",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَة يَمَامَةٌ", "Write the word يَمَامَةٌ", "Tulis perkataan يَمَامَةٌ", "Tulis kata يَمَامَةٌ", "Écris le mot يَمَامَةٌ", "Escribe la palabra يَمَامَةٌ"),
              arabicText: "يَمَامَةٌ",
              answer: "يَمَامَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f54a-fe0f/512.webp"
            },
            {
              id: "uae-g1u6l4e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "انْظُرُوا! يَمَامَةٌ بَيْضَاءُ جَمِيلَة",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f54a-fe0f/512.webp"
            },
            {
              id: "uae-g1u6l4spelluae-g1u6l4-v4",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "يَلْعَبُ",
              answer: "يَلْعَبُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "uae-g1u6l4mcquae-g1u6l4-v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"يَمَامَةٌ\"؟", "What does \"dove/pigeon\" mean?", "Apakah maksud \"merpati\"?", "Apa arti \"merpati\"?", "Que signifie \"colombe\" ?", "¿Qué significa \"paloma\"?"),
              arabicText: "يَمَامَةٌ",
              options: [
                "garden/park",
                "writes / to write",
                "dove/pigeon",
                "bridge"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f54a-fe0f/512.webp"
            },
            {
              id: "uae-g1u6l4arrange2",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "الْيَمَامَةُ رَمْزُ الأَمَانِ وَالسَّلَام!",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f54a-fe0f/512.webp"
            }
          ]
        },
        {
          id: "uae-g1u6l5",
          unitId: "uae-g1u6",
          gradeId: "uae-g1",
          order: 5,
          title: t("الْحُرُوفُ الْعَرَبِيَّةُ — مُرَاجَعَة", "Review", "Huruf Arab — Ulang Kaji", "Huruf Arab — Ulasan", "Lettres arabes — Révision", "Letras árabes — Repaso"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("هيا نُرَاجِعُ الْحُرُوفَ الْعَرَبِيَّةَ مَعَ أَسْمَاءِ الْحَيَوَانَات!", "Let's review the Arabic letters with animal names!", "Jom ulang kaji huruf Arab dengan nama-nama haiwan!", "Ayo mengulang huruf Arab dengan nama-nama hewan!", "Révisons les lettres arabes avec les noms d'animaux !", "¡Repasemos las letras árabes con nombres de animales!"),
          vocabulary: [
            {
              id: "uae-g1u6l5-v1",
              arabic: "أَرْنَبٌ",
              transliteration: "arnabun",
              translation: t("أَرْنَبٌ", "rabbit — Alif", "arnab — Alif", "kelinci — Alif", "lapin — Alif", "conejo — Alif"),
              emoji: "🐇"
            },
            {
              id: "uae-g1u6l5-v2",
              arabic: "جَمَلٌ",
              transliteration: "jamalun",
              translation: t("جَمَلٌ", "camel — Jim", "unta — Jim", "unta — Jim", "chameau — Jim", "camello — Yim"),
              emoji: "🐪"
            },
            {
              id: "uae-g1u6l5-v3",
              arabic: "سَنْجَابٌ",
              transliteration: "sanjābun",
              translation: t("سَنْجَابٌ", "squirrel — Sin", "tupai — Sin", "tupai — Sin", "écureuil — Sin", "ardilla — Sin"),
              emoji: "🐿️"
            },
            {
              id: "uae-g1u6l5-v4",
              arabic: "كَلْبٌ",
              transliteration: "kalbun",
              translation: t("كَلْبٌ", "dog — Kaf", "anjing — Kaf", "anjing — Kaf", "chien — Kaf", "perro — Kaf"),
              emoji: "🐕"
            },
            {
              id: "uae-g1u6l5-v5",
              arabic: "يَمَامَةٌ",
              transliteration: "yamāmah",
              translation: t("يَمَامَةٌ", "dove — Ya", "merpati — Ya", "merpati — Ya", "colombe — Ya", "paloma — Ya"),
              emoji: "🕊️"
            },
            {
              id: "uae-g1u6l5-v6",
              arabic: "بَطَّةٌ",
              transliteration: "baṭṭah",
              translation: t("بَطَّةٌ", "duck — Ba", "itik — Ba", "bebek — Ba", "canard — Ba", "pato — Ba"),
              emoji: "🦆"
            },
            {
              id: "uae-g1u6l5-v7",
              arabic: "تِمْسَاحٌ",
              transliteration: "timsāḥun",
              translation: t("تِمْسَاحٌ", "crocodile — Ta", "buaya — Ta", "buaya — Ta", "crocodile — Ta", "cocodrilo — Ta"),
              emoji: "🐊"
            },
            {
              id: "uae-g1u6l5-v8",
              arabic: "حُوتٌ",
              transliteration: "ḥūtun",
              translation: t("حُوتٌ", "whale — Ha", "ikan paus — Ha", "ikan paus — Ha", "baleine — Ha", "ballena — Ha"),
              emoji: "🐋"
            },
            {
              id: "uae-g1u6l5-v9",
              arabic: "طَاوُوسٌ",
              transliteration: "ṭāwūsun",
              translation: t("طَاوُوسٌ", "peacock — Ta", "merak — Ta", "merak — Ta", "paon — Ta", "pavo real — Ta"),
              emoji: "🦚"
            },
            {
              id: "uae-g1u6l5-v10",
              arabic: "فَأْرٌ",
              transliteration: "faʾrun",
              translation: t("فَأْرٌ", "mouse — Fa", "tikus — Fa", "tikus — Fa", "souris — Fa", "ratón — Fa"),
              emoji: "🐭"
            }
          ],
          dialogue: [
            {
              speaker: "الْمُعَلِّمَةُ",
              arabic: "مَنْ يَتَذَكَّرُ الْحُرُوفَ الَّتِي تَعَلَّمْنَاهَا؟",
              translation: t("مَنْ يَتَذَكَّرُ الْحُرُوفَ الَّتِي تَعَلَّمْنَاهَا؟", "Who remembers the letters we learned?", "Siapa yang ingat huruf yang kita pelajari?", "Siapa yang ingat huruf yang telah kita pelajari?", "Qui se souvient des lettres que nous avons apprises ?", "¿Quién recuerda las letras que aprendimos?")
            },
            {
              speaker: "الطُّلَّابُ",
              arabic: "أَ، بَ، تَ، ثَ... حَتَّى الْيَاء!",
              translation: t("أَ، بَ، تَ، ثَ... حَتَّى الْيَاء!", "Alif, Ba, Ta, Tha... all the way to Ya!", "Alif, Ba, Ta, Tha... sampai Ya!", "Alif, Ba, Ta, Tsa... sampai Ya!", "Alif, Ba, Ta, Tha... jusqu'au Ya !", "¡Alif, Ba, Ta, Za... hasta Ya!")
            },
            {
              speaker: "الْمُعَلِّمَةُ",
              arabic: "مُمْتَازٌ! أَنْتُمْ تَعَلَّمْتُمُ الأَبْجَدِيَّةَ الْعَرَبِيَّة!",
              translation: t("مُمْتَازٌ! أَنْتُمْ تَعَلَّمْتُمُ الأَبْجَدِيَّةَ الْعَرَبِيَّة!", "Excellent! You have learned the Arabic alphabet!", "Cemerlang! Anda telah belajar abjad Arab!", "Luar biasa! Kalian telah mempelajari abjad Arab!", "Excellent ! Vous avez appris l'alphabet arabe !", "¡Excelente! ¡Han aprendido el alfabeto árabe!")
            }
          ],
          exercises: [
            {
              id: "uae-g1u6l5-e1",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْحَيَوَانَ بِأَوَّلِ حَرْفٍ مِنِ اسْمِهِ", "Match the animal to the first letter of its name", "Padankan haiwan dengan huruf pertama namanya", "Cocokkan hewan dengan huruf pertama namanya", "Associe l'animal à la première lettre de son nom", "Relaciona el animal con la primera letra de su nombre"),
              pairs: [
                {
                  a: "أَرْنَبٌ",
                  b: "أ"
                },
                {
                  a: "جَمَلٌ",
                  b: "ج"
                },
                {
                  a: "سَنْجَابٌ",
                  b: "س"
                },
                {
                  a: "يَمَامَةٌ",
                  b: "ي"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f407/512.webp"
            },
            {
              id: "uae-g1u6l5-e2",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ الْحُرُوفَ بِالتَّرْتِيبِ الصَّحِيح", "Arrange the letters in the correct order", "Susun huruf mengikut urutan yang betul", "Urutkan huruf dengan urutan yang benar", "Range les lettres dans le bon ordre", "Ordena las letras en el orden correcto"),
              pairs: [
                {
                  a: "أ",
                  b: "1"
                },
                {
                  a: "ب",
                  b: "2"
                },
                {
                  a: "ت",
                  b: "3"
                },
                {
                  a: "ج",
                  b: "5"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f407/512.webp"
            },
            {
              id: "uae-g1u6l5-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("اذْكُرْ خَمْسَةَ حَيَوَانَاتٍ تَعَلَّمْتَهَا مَعَ أَوَّلِ حَرْفٍ مِنِ اسْمِهَا", "Name five animals you learned with the first letter of their name", "Sebut lima haiwan yang kamu pelajari dengan huruf pertama namanya", "Sebutkan lima hewan yang kamu pelajari dengan huruf pertama namanya", "Nomme cinq animaux appris avec la première lettre de leur nom", "Nombra cinco animales que aprendiste con la primera letra de su nombre"),
              arabicText: "أَرْنَبٌ - أ، بَطَّةٌ - ب، جَمَلٌ - ج، كَلْبٌ - ك، يَمَامَةٌ - ي",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f407/512.webp"
            },
            {
              id: "uae-g1u6l5-e4",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالرَّمْزِ", "Match the word to its emoji", "Padankan perkataan dengan emoji", "Cocokkan kata dengan emoji", "Associe le mot à son emoji", "Relaciona la palabra con su emoji"),
              pairs: [
                {
                  a: "أَرْنَبٌ",
                  b: "🐇"
                },
                {
                  a: "سَنْجَابٌ",
                  b: "🐿️"
                },
                {
                  a: "كَلْبٌ",
                  b: "🐕"
                },
                {
                  a: "يَمَامَةٌ",
                  b: "🕊️"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f407/512.webp"
            },
            {
              id: "uae-g1u6l5-e5",
              type: "mcq",
              skill: "reading",
              prompt: t("بِأَيِّ حَرْفٍ يَبْدَأُ اسْمُ الطَّاوُوس؟", "What letter does الطَّاوُوسُ start with?", "Dengan huruf apakah nama merak bermula?", "Dengan huruf apakah nama merak dimulai?", "Par quelle lettre commence le nom du paon ?", "¿Con qué letra empieza el nombre del pavo real?"),
              options: [
                "ث",
                "د",
                "ط",
                "ظ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f407/512.webp"
            },
            {
              id: "uae-g1u6l5-e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْحَيَوَانَاتِ الجَدِيدَة بِأَوَّلِ حُرُوفِهَا", "Match new animals to their first letters", "Padankan haiwan baru dengan huruf pertama mereka", "Cocokkan hewan baru dengan huruf pertama mereka", "Associe les nouveaux animaux à leurs premières lettres", "Relaciona los nuevos animales con sus primeras letras"),
              pairs: [
                {
                  a: "بَطَّةٌ",
                  b: "ب"
                },
                {
                  a: "تِمْسَاحٌ",
                  b: "ت"
                },
                {
                  a: "حُوتٌ",
                  b: "ح"
                },
                {
                  a: "فَأْرٌ",
                  b: "ف"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f407/512.webp"
            },
            {
              id: "uae-g1u6l5-e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("اذْكُرِ الْحُرُوفَ الْعَرَبِيَّةَ مِنَ الأَلِفِ إِلَى الْيَاء", "Recite the Arabic letters from Alif to Ya", "Sebutkan huruf Arab dari Alif hingga Ya", "Sebutkan huruf Arab dari Alif sampai Ya", "Récite les lettres arabes de Alif à Ya", "Recita las letras árabes de Alif a Ya"),
              arabicText: "أَ، بَ، تَ، ثَ، جَ، حَ، خَ، دَ، ذَ، رَ، زَ، سَ، شَ، صَ، ضَ، طَ، ظَ، عَ، غَ، فَ، قَ، كَ، لَ، مَ، نَ، هَ، وَ، يَ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f407/512.webp"
            },
            {
              id: "uae-g1u6l5-e8",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ أَوَّلَ خَمْسَةِ حُرُوفٍ فِي الأَبْجَدِيَّة", "Write the first five letters of the alphabet", "Tulis lima huruf pertama abjad Arab", "Tulis lima huruf pertama abjad Arab", "Écris les cinq premières lettres de l'alphabet", "Escribe las primeras cinco letras del alfabeto"),
              arabicText: "أ، ب، ت، ث، ج",
              answer: "أ ب ت ث ج",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f407/512.webp"
            },
            {
              id: "uae-g1u6l5speakuae-g1u6l5-v9",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "طَاوُوسٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f99a/512.webp"
            },
            {
              id: "uae-g1u6l5writeuae-g1u6l5-v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"أَرْنَبٌ\"", "Type the Arabic word for: \"rabbit — Alif\"", "Taip perkataan Arab untuk: \"arnab — Alif\"", "Ketik kata Arab untuk: \"kelinci — Alif\"", "Tape le mot arabe pour : \"lapin — Alif\"", "Escribe la palabra árabe para: \"conejo — Alif\""),
              arabicText: "أَرْنَبٌ",
              answer: "أَرْنَبٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f407/512.webp"
            },
            {
              id: "uae-g1u6l5mcquae-g1u6l5-v6",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"بَطَّةٌ\"؟", "What does \"duck — Ba\" mean?", "Apakah maksud \"itik — Ba\"?", "Apa arti \"bebek — Ba\"?", "Que signifie \"canard — Ba\" ?", "¿Qué significa \"pato — Ba\"?"),
              arabicText: "بَطَّةٌ",
              options: [
                "pink",
                "builder",
                "road/way",
                "duck — Ba"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f986/512.webp"
            },
            {
              id: "uae-g1u6l5mcquae-g1u6l5-v2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"جَمَلٌ\"؟", "What does \"camel — Jim\" mean?", "Apakah maksud \"unta — Jim\"?", "Apa arti \"unta — Jim\"?", "Que signifie \"chameau — Jim\" ?", "¿Qué significa \"camello — Yim\"?"),
              arabicText: "جَمَلٌ",
              options: [
                "greeting",
                "camel — Jim",
                "circle",
                "reads / to read"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f42a/512.webp"
            }
          ]
        },
        {
          id: "uae-g1u6review",
          unitId: "uae-g1u6",
          gradeId: "uae-g1",
          order: 6,
          title: t("مراجعة الوحدة", "Unit Review", "Ulangan Unit", "Ulangan Unit", "Révision de l’unité", "Revisión de la unidad"),
          skills: [
            "listening",
            "reading",
            "writing"
          ],
          intro: t("لنراجع ما تعلّمناه في هذه الوحدة!", "Let’s review what we learned in this unit!", "Mari ulangkaji apa yang kita pelajari dalam unit ini!", "Mari kita ulang apa yang kita pelajari dalam unit ini!", "Révisons ce que nous avons appris dans cette unité !", "¡Repasemos lo que aprendimos en esta unidad!"),
          vocabulary: [
            {
              id: "uae-g1u6l1-v1",
              arabic: "كَلْبٌ",
              transliteration: "kalbun",
              translation: t("كَلْبٌ", "dog", "anjing", "anjing", "chien", "perro"),
              emoji: "🐕"
            },
            {
              id: "uae-g1u6l1-v2",
              arabic: "لَبَنٌ",
              transliteration: "labanun",
              translation: t("لَبَنٌ", "milk/yogurt", "susu", "susu", "lait", "leche"),
              emoji: "🥛"
            },
            {
              id: "uae-g1u6l1-v3",
              arabic: "كَبِيرٌ",
              transliteration: "kabīrun",
              translation: t("كَبِيرٌ", "big/large", "besar", "besar", "grand", "grande"),
              emoji: "📏"
            },
            {
              id: "uae-g1u6l1-v4",
              arabic: "لَوْنٌ",
              transliteration: "lawnun",
              translation: t("لَوْنٌ", "color", "warna", "warna", "couleur", "color"),
              emoji: "🎨"
            },
            {
              id: "uae-g1u6l1-v5",
              arabic: "كَتَبَ",
              transliteration: "kataba",
              translation: t("كَتَبَ", "wrote/to write", "menulis", "menulis", "écrivit/écrire", "escribió/escribir"),
              emoji: "✍️"
            },
            {
              id: "uae-g1u6l1-v6",
              arabic: "كِتَابٌ",
              transliteration: "kitābun",
              translation: t("كِتَابٌ", "book", "buku", "buku", "livre", "libro"),
              emoji: "📚"
            },
            {
              id: "uae-g1u6l1-v7",
              arabic: "لَيْلٌ",
              transliteration: "laylun",
              translation: t("لَيْلٌ", "night", "malam", "malam", "nuit", "noche"),
              emoji: "🌙"
            },
            {
              id: "uae-g1u6l1-v8",
              arabic: "كُرَةٌ",
              transliteration: "kurah",
              translation: t("كُرَةٌ", "ball", "bola", "bola", "balle", "pelota"),
              emoji: "⚽"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "uae-g1u6reviewlistenuae-g1u6l1-v1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "كَلْبٌ",
              options: [
                "يَكْتُبُ",
                "كَلْبٌ",
                "شِتَاءٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f415/512.webp"
            },
            {
              id: "uae-g1u6reviewwriteuae-g1u6l1-v8",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"كُرَةٌ\"", "Type the Arabic word for: \"ball\"", "Taip perkataan Arab untuk: \"bola\"", "Ketik kata Arab untuk: \"bola\"", "Tape le mot arabe pour : \"balle\"", "Escribe la palabra árabe para: \"pelota\""),
              arabicText: "كُرَةٌ",
              answer: "كُرَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "uae-g1u6reviewspeakuae-g1u6l1-v3",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "كَبِيرٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4cf/512.webp"
            },
            {
              id: "uae-g1u6reviewmcquae-g1u6l1-v3",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"كَبِيرٌ\"؟", "What does \"big/large\" mean?", "Apakah maksud \"besar\"?", "Apa arti \"besar\"?", "Que signifie \"grand\" ?", "¿Qué significa \"grande\"?"),
              arabicText: "كَبِيرٌ",
              options: [
                "rice",
                "big/large",
                "oval",
                "crocodile — Ta"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4cf/512.webp"
            },
            {
              id: "uae-g1u6reviewmcquae-g1u6l1-v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"كَلْبٌ\"؟", "What does \"dog\" mean?", "Apakah maksud \"anjing\"?", "Apa arti \"anjing\"?", "Que signifie \"chien\" ?", "¿Qué significa \"perro\"?"),
              arabicText: "كَلْبٌ",
              options: [
                "six",
                "dog",
                "shy",
                "honesty / truth"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f415/512.webp"
            },
            {
              id: "uae-g1u6reviewspelluae-g1u6l1-v5",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "كَتَبَ",
              answer: "كَتَبَ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/270d-fe0f/512.webp"
            }
          ]
        }
      ]
    }
  ]
};
