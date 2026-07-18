import { t, type GradeData, type CurriculumId } from "./types";

export const indonesiaGrade6: GradeData = {
  id: "indonesia-g6",
  number: 6,
  curriculumId: "indonesia" as CurriculumId,
  title: t("المستوى السادس", "Stage 6", "Tahun 6", "Kelas 6", "Année 6", "Año 6"),
  description: t(
    "نَتَعَلَّمُ السَّاعَةَ وَالْمَدْرَسَةَ وَالْحَيَاةَ الْيَوْمِيَّةَ وَالْحِوَارَاتِ الْبَسِيطَةَ",
    "We learn time, school life, daily life and simple dialogues",
    "Kita belajar waktu, kehidupan sekolah, kehidupan harian dan dialog mudah",
    "Kita belajar waktu, kehidupan sekolah, kehidupan sehari-hari, dan dialog sederhana",
    "Nous apprenons l'heure, la vie scolaire, la vie quotidienne et des dialogues simples",
    "Aprendemos la hora, la vida escolar, la vida diaria y diálogos sencillos",
  ),
  color: "#0EA5E9",
  icon: "book-open",
  units: [
    {
      id: "indonesia-g6u1",
      gradeId: "indonesia-g6",
      order: 1,
      title: t("السَّاعَةُ", "Time", "Masa", "Waktu", "L'heure", "La hora"),
      theme: "time",
      lessons: [
        {
          id: "indonesia-g6u1l1",
          unitId: "indonesia-g6u1",
          gradeId: "indonesia-g6",
          order: 1,
          title: t("كَمِ السَّاعَةُ؟", "What time is it?", "Pukul berapa?", "Jam berapa?", "Quelle heure est-il ?", "¿Qué hora es?"),
          skills: ["listening", "speaking", "reading", "writing"],
          intro: t("نَتَعَلَّمُ كَيْفَ نَسْأَلُ عَنِ السَّاعَةِ وَنَقُولُهَا بِوُضُوحٍ.", "We learn how to ask and tell the time clearly.", "Kita belajar cara bertanya dan menyebut waktu dengan jelas.", "Kita belajar cara menanyakan dan menyebut waktu dengan jelas.", "Nous apprenons à demander et dire l'heure clairement.", "Aprendemos a preguntar y decir la hora con claridad."),
          vocabulary: [
            { id: "indonesia-g6u1l1v1", arabic: "السَّاعَةُ", transliteration: "as-sāʿah", translation: t("السَّاعَةُ", "hour / clock", "jam", "jam", "l'heure / l'horloge", "la hora / el reloj"), emoji: "🕒" },
            { id: "indonesia-g6u1l1v2", arabic: "كَمْ", transliteration: "kam", translation: t("كَمْ", "how many / what time", "berapa", "berapa", "combien / quelle heure", "cuánto / qué hora"), emoji: "❓" },
            { id: "indonesia-g6u1l1v3", arabic: "نِصْفٌ", transliteration: "niṣf", translation: t("نِصْفٌ", "half", "setengah", "setengah", "demi", "media"), emoji: "🌓" },
            { id: "indonesia-g6u1l1v4", arabic: "رُبْعٌ", transliteration: "rubʿ", translation: t("رُبْعٌ", "quarter", "seperempat", "seperempat", "quart", "cuarto"), emoji: "⏰" },
            { id: "indonesia-g6u1l1v5", arabic: "تَمَامًا", transliteration: "tamāman", translation: t("تَمَامًا", "exactly", "tepat", "tepat", "exactement", "exactamente"), emoji: "✅" },
            { id: "indonesia-g6u1l1v6", arabic: "صَبَاحًا", transliteration: "ṣabāḥan", translation: t("صَبَاحًا", "in the morning", "pagi", "pagi", "le matin", "por la mañana"), emoji: "🌅" },
            { id: "indonesia-g6u1l1v7", arabic: "نَهَارًا", transliteration: "nahāran", translation: t("نَهَارًا", "in daytime", "siang", "siang", "pendant la journée", "de día"), emoji: "☀️" },
            { id: "indonesia-g6u1l1v8", arabic: "لَيْلًا", transliteration: "laylan", translation: t("لَيْلًا", "at night", "malam", "malam", "la nuit", "por la noche"), emoji: "🌙" },
            { id: "indonesia-g6u1l1v9", arabic: "دَقِيقَةٌ", transliteration: "daqīqah", translation: t("دَقِيقَةٌ", "minute", "minit", "menit", "minute", "minuto"), emoji: "⏱️" },
            { id: "indonesia-g6u1l1v10", arabic: "مَوْعِدٌ", transliteration: "mawʿid", translation: t("مَوْعِدٌ", "appointment / time", "waktu", "waktu", "rendez-vous / moment", "cita / momento"), emoji: "🗓️" },
          ],
          dialogue: [
            { speaker: "مُعَلِّمٌ", arabic: "كَمِ السَّاعَةُ اَلْآنَ؟", translation: t("كَمِ السَّاعَةُ اَلْآنَ؟", "What time is it now?", "Pukul berapa sekarang?", "Jam berapa sekarang?", "Quelle heure est-il maintenant ?", "¿Qué hora es ahora?") },
            { speaker: "تِلْمِيذٌ", arabic: "السَّاعَةُ الرَّابِعَةُ وَنِصْفٌ.", translation: t("السَّاعَةُ الرَّابِعَةُ وَنِصْفٌ.", "It is half past four.", "Pukul empat setengah.", "Jam empat lewat setengah.", "Il est quatre heures et demie.", "Son las cuatro y media.") },
            { speaker: "مُعَلِّمٌ", arabic: "مَتَى تَذْهَبُ إِلَى الْمَدْرَسَةِ؟", translation: t("مَتَى تَذْهَبُ إِلَى الْمَدْرَسَةِ؟", "When do you go to school?", "Bilakah kamu pergi ke sekolah?", "Kapan kamu pergi ke sekolah?", "Quand vas-tu à l'école ?", "¿Cuándo vas a la escuela?") },
            { speaker: "تِلْمِيذٌ", arabic: "أَذْهَبُ إِلَى الْمَدْرَسَةِ فِي السَّاعَةِ السَّادِسَةِ.", translation: t("أَذْهَبُ إِلَى الْمَدْرَسَةِ فِي السَّاعَةِ السَّادِسَةِ.", "I go to school at six o'clock.", "Saya pergi ke sekolah pada pukul enam.", "Saya pergi ke sekolah jam enam.", "Je vais à l'école à six heures.", "Voy a la escuela a las seis." ) },
          ],
          exercises: [
            { id: "indonesia-g6u1l1e1", type: "listening", skill: "listening", prompt: t("اِسْتَمِعْ وَاخْتَرِ الْوَقْتَ الصَّحِيحَ", "Listen and choose the correct time", "Dengar dan pilih waktu yang betul", "Dengarkan dan pilih waktu yang benar", "Écoute et choisis l'heure correcte", "Escucha y elige la hora correcta"), arabicText: "السَّاعَةُ الرَّابِعَةُ وَنِصْفٌ", options: ["السَّاعَةُ الثَّالِثَةُ", "السَّاعَةُ الرَّابِعَةُ وَنِصْفٌ", "السَّاعَةُ السَّادِسَةُ"], correctIndex: 1 },
            { id: "indonesia-g6u1l1e2", type: "mcq", skill: "reading", prompt: t("مَاذَا نَقُولُ لِلسُّؤَالِ عَنِ الْوَقْتِ؟", "What do we say to ask about time?", "Apa yang kita ucapkan untuk bertanya waktu?", "Apa yang kita ucapkan untuk menanyakan waktu?", "Que dit-on pour demander l'heure ?", "¿Qué decimos para preguntar la hora?"), options: ["كَمِ السَّاعَةُ؟", "مَا اسْمُكَ؟", "مَاذَا تُرِيدُ؟"], correctIndex: 0 },
            { id: "indonesia-g6u1l1e3", type: "speaking", skill: "speaking", prompt: t("قُلِ السَّاعَةَ الْمَوْجُودَةَ فِي هَاتِفِكَ", "Say the time shown on your phone", "Sebut waktu yang ada pada telefonmu", "Sebutkan waktu yang ada di ponselmu", "Dis l'heure affichée sur ton téléphone", "Di la hora que muestra tu teléfono"), arabicText: "السَّاعَةُ ..." },
            { id: "indonesia-g6u1l1e4", type: "writing", skill: "writing", prompt: t("اكْتُبِ السَّاعَةَ بِالْأَرْقَامِ وَالْكَلِمَاتِ", "Write the time in numbers and words", "Tulis waktu dengan angka dan perkataan", "Tulis waktu dengan angka dan kata", "Écris l'heure en chiffres et en mots", "Escribe la hora en números y palabras"), arabicText: "السَّاعَةُ الثَّانِيَةُ وَالرُّبْعُ", answer: "السَّاعَةُ الثَّانِيَةُ وَالرُّبْعُ" },
            { id: "indonesia-g6u1l1e5", type: "matching", skill: "reading", prompt: t("صِلِ الْوَقْتَ بِمَعْنَاهُ", "Match the time with its meaning", "Padankan waktu dengan maknanya", "Cocokkan waktu dengan artinya", "Associe l'heure à sa signification", "Relaciona la hora con su significado"), pairs: [{ a: "نِصْفٌ", b: "🌓" }, { a: "رُبْعٌ", b: "⏰" }, { a: "تَمَامًا", b: "✅" }] },
            { id: "indonesia-g6u1l1e6", type: "arrange", skill: "reading", prompt: t("رَتِّبِ الْكَلِمَاتِ", "Arrange the words", "Susun perkataan", "Ordena las palabras", "Range les mots", "Ordena las palabras"), pairs: [{ a: "أَذْهَبُ", b: "I go" }, { a: "إِلَى", b: "to" }, { a: "الْمَدْرَسَةِ", b: "school" }] }
          ]
        }
      ]
    },
    {
      id: "indonesia-g6u2",
      gradeId: "indonesia-g6",
      order: 2,
      title: t("الْمَدْرَسَةُ", "School", "Sekolah", "Sekolah", "L'école", "La escuela"),
      theme: "school",
      lessons: [
        {
          id: "indonesia-g6u2l1",
          unitId: "indonesia-g6u2",
          gradeId: "indonesia-g6",
          order: 1,
          title: t("فِي الْفَصْلِ", "In the classroom", "Di dalam kelas", "Di kelas", "Dans la classe", "En el aula"),
          skills: ["listening", "speaking", "reading", "writing"],
          intro: t("نَتَعَرَّفُ عَلَى أَدَوَاتِ الْفَصْلِ وَمَا نَسْتَعْمِلُهُ فِي الدِّرَاسَةِ.", "We explore classroom tools and what we use for learning.", "Kita mengenal alat kelas dan apa yang kita gunakan untuk belajar.", "Kita mengenal alat-alat kelas dan apa yang kita gunakan untuk belajar.", "Nous découvrons les outils de la classe et ce que nous utilisons pour apprendre.", "Conocemos los objetos del aula y lo que usamos para aprender."),
          vocabulary: [
            { id: "indonesia-g6u2l1v1", arabic: "فَصْلٌ", transliteration: "faṣl", translation: t("فَصْلٌ", "classroom", "kelas", "kelas", "classe", "aula"), emoji: "🏫" },
            { id: "indonesia-g6u2l1v2", arabic: "مَقْعَدٌ", transliteration: "maqʿad", translation: t("مَقْعَدٌ", "seat", "tempat duduk", "tempat duduk", "siège", "asiento"), emoji: "🪑" },
            { id: "indonesia-g6u2l1v3", arabic: "سَبُّورَةٌ", transliteration: "sabbūrah", translation: t("سَبُّورَةٌ", "board", "papan", "papan", "tableau", "pizarra"), emoji: "🧽" },
            { id: "indonesia-g6u2l1v4", arabic: "كِتَابٌ", transliteration: "kitāb", translation: t("كِتَابٌ", "book", "buku", "buku", "livre", "libro"), emoji: "📘" },
            { id: "indonesia-g6u2l1v5", arabic: "دَفْتَرٌ", transliteration: "daftar", translation: t("دَفْتَرٌ", "notebook", "buku catatan", "buku catatan", "cahier", "cuaderno"), emoji: "📒" },
            { id: "indonesia-g6u2l1v6", arabic: "قَلَمٌ", transliteration: "qalam", translation: t("قَلَمٌ", "pen", "pen", "pena", "stylo", "bolígrafo"), emoji: "✒️" },
            { id: "indonesia-g6u2l1v7", arabic: "مِسْطَرَةٌ", transliteration: "misṭarah", translation: t("مِسْطَرَةٌ", "ruler", "pembaris", "penggaris", "règle", "regla"), emoji: "📏" },
            { id: "indonesia-g6u2l1v8", arabic: "مِمْحَاةٌ", transliteration: "mimḥāh", translation: t("مِمْحَاةٌ", "eraser", "pemadam", "penghapus", "gomme", "borrador"), emoji: "🧼" },
            { id: "indonesia-g6u2l1v9", arabic: "مُعَلِّمٌ", transliteration: "muʿallim", translation: t("مُعَلِّمٌ", "teacher", "guru lelaki", "guru laki-laki", "enseignant", "profesor"), emoji: "👨‍🏫" },
            { id: "indonesia-g6u2l1v10", arabic: "مُعَلِّمَةٌ", transliteration: "muʿallimah", translation: t("مُعَلِّمَةٌ", "teacher (female)", "guru perempuan", "guru perempuan", "enseignante", "profesora"), emoji: "👩‍🏫" }
          ],
          dialogue: [
            { speaker: "مُعَلِّمَةٌ", arabic: "أَيْنَ دَفْتَرُكَ يَا عَلِيُّ؟", translation: t("أَيْنَ دَفْتَرُكَ يَا عَلِيُّ؟", "Where is your notebook, Ali?", "Di mana buku catatan kamu, Ali?", "Di mana buku catatanmu, Ali?", "Où est ton cahier, Ali ?", "¿Dónde está tu cuaderno, Ali?") },
            { speaker: "عَلِيٌّ", arabic: "دَفْتَرِي عَلَى الْمَقْعَدِ يَا مُعَلِّمَتِي.", translation: t("دَفْتَرِي عَلَى الْمَقْعَدِ يَا مُعَلِّمَتِي.", "My notebook is on the seat, my teacher.", "Buku catatan saya di atas tempat duduk, cikgu.", "Buku catatan saya di bangku, bu guru.", "Mon cahier est sur le siège, maîtresse.", "Mi cuaderno está sobre el asiento, maestra.") },
            { speaker: "مُعَلِّمٌ", arabic: "مَاذَا تَكْتُبُ؟", translation: t("مَاذَا تَكْتُبُ؟", "What are you writing?", "Apa yang kamu tulis?", "Apa yang kamu tulis?", "Qu'écris-tu ?", "¿Qué escribes?") },
            { speaker: "عَلِيٌّ", arabic: "أَكْتُبُ الدَّرْسَ وَأَقْرَأُ الْكِتَابَ.", translation: t("أَكْتُبُ الدَّرْسَ وَأَقْرَأُ الْكِتَابَ.", "I write the lesson and read the book.", "Saya menulis pelajaran dan membaca buku.", "Saya menulis pelajaran dan membaca buku.", "J'écris la leçon et je lis le livre.", "Escribo la lección y leo el libro.") }
          ],
          exercises: [
            { id: "indonesia-g6u2l1e1", type: "listening", skill: "listening", prompt: t("اِسْتَمِعْ وَاخْتَرِ الْأَدَاةَ الصَّحِيحَةَ", "Listen and choose the correct tool", "Dengar dan pilih alat yang betul", "Dengarkan dan pilih alat yang benar", "Écoute et choisis le bon outil", "Escucha y elige el útil correcto"), arabicText: "قَلَمٌ", options: ["قَلَمٌ", "مِسْطَرَةٌ", "مِمْحَاةٌ"], correctIndex: 0 },
            { id: "indonesia-g6u2l1e2", type: "mcq", skill: "reading", prompt: t("مَا الَّذِي نَكْتُبُ بِهِ؟", "What do we write with?", "Apa yang kita gunakan untuk menulis?", "Apa yang kita gunakan untuk menulis?", "Avec quoi écrit-on ?", "¿Con qué escribimos?"), options: ["بِالْمِمْحَاةِ", "بِالْقَلَمِ", "بِالْمَقْعَدِ"], correctIndex: 1 },
            { id: "indonesia-g6u2l1e3", type: "speaking", skill: "speaking", prompt: t("صِفْ فَصْلَكَ وَاذْكُرْ ثَلَاثَةَ أَدَوَاتٍ", "Describe your classroom and mention three tools", "Huraikan kelas kamu dan sebut tiga alat", "Jelaskan kelasmu dan sebutkan tiga alat", "Décris ta classe et mentionne trois outils", "Describe tu aula y menciona tres útiles"), arabicText: "فِي فَصْلِي كِتَابٌ وَقَلَمٌ وَسَبُّورَةٌ" },
            { id: "indonesia-g6u2l1e4", type: "writing", skill: "writing", prompt: t("اكْتُبْ أَسْمَاءَ أَدَوَاتِ الْفَصْلِ", "Write the classroom items", "Tulis nama-nama alat kelas", "Tulis nama alat-alat kelas", "Écris les objets de la classe", "Escribe los objetos del aula"), arabicText: "كِتَابٌ، قَلَمٌ، دَفْتَرٌ", answer: "كِتَابٌ، قَلَمٌ، دَفْتَرٌ" },
            { id: "indonesia-g6u2l1e5", type: "matching", skill: "reading", prompt: t("صِلِ الْكَلِمَةَ بِالصُّورَةِ", "Match the word to the picture", "Padankan perkataan dengan gambar", "Cocokkan kata dengan gambar", "Associe le mot à l'image", "Relaciona la palabra con la imagen"), pairs: [{ a: "كِتَابٌ", b: "📘" }, { a: "قَلَمٌ", b: "✒️" }, { a: "مِسْطَرَةٌ", b: "📏" }] },
            { id: "indonesia-g6u2l1e6", type: "arrange", skill: "reading", prompt: t("رَتِّبِ الْكَلِمَاتِ لِتُكَوِّنَ جُمْلَةً", "Arrange the words to make a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata-kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"), pairs: [{ a: "فِي", b: "in" }, { a: "الْفَصْلِ", b: "classroom" }, { a: "كِتَابٌ", b: "book" }] }
          ]
        }
      ]
    }
  ]
};
