import { t, type GradeData, type Lesson } from "./types";

export const indonesiaGrade2: GradeData = {
  id: "indonesia-g2",
  curriculumId: "indonesia",
  number: 2,
  title: t("المستوى الثاني", "Stage 2", "Tahun 2", "Kelas 2", "Année 2", "Año 2"),
  description: t(
    "نَتَعَلَّمُ فِي هٰذِهِ السَّنَةِ دُرُوسَ الْمَدْرَسَةِ وَالْأَدَوَاتِ وَأَفْرَادَ الْمَدْرَسَةِ وَالْأَرْقَامَ",
    "In this year we learn school lessons, school tools, school members, and numbers",
    "Dalam tahun ini kita belajar pelajaran sekolah, alat sekolah, ahli sekolah, dan nombor",
    "Pada tahun ini kita belajar pelajaran sekolah, alat sekolah, anggota sekolah, dan angka",
    "Cette année, nous apprenons les leçons de l’école, le matériel scolaire, les membres de l’école et les nombres",
    "Este año aprendemos las lecciones de la escuela, los útiles escolares, los miembros de la escuela y los números",
  ),
  color: "#0EA5E9",
  icon: "book-open",
  units: [
    makeUnit("indonesia-g2u1", 1, "أَفْرَادُ الْمَدْرَسَةِ", "School Members", "Ahli Sekolah", "Anggota Sekolah", "Les membres de l’école", "Los miembros de la escuela", "school", [
      makeLesson("indonesia-g2u1l1", "indonesia-g2u1", 1, "أَفْرَادُ الْمَدْرَسَةِ", "School Members", "Ahli Sekolah", "Anggota Sekolah", "Les membres de l’école", "Los miembros de la escuela", [
        ["مُدَرِّسٌ", "teacher", "guru", "guru", "enseignant", "maestro", "👩‍🏫"],
        ["طَالِبٌ", "student", "murid", "siswa", "élève", "estudiante", "🧒"],
        ["طَالِبَةٌ", "girl student", "murid perempuan", "siswi", "élève (f)", "alumna", "👧"],
        ["مُدِيرٌ", "principal", "pengetua", "kepala sekolah", "directeur", "director", "👨‍💼"],
        ["حَارِسٌ", "guard", "pengawal", "penjaga", "gardien", "guardián", "🛡️"],
        ["بَوَّابٌ", "doorkeeper", "jaga pintu", "penjaga pintu", "portier", "portero", "🚪"],
        ["مُوَظَّفٌ", "staff", "petugas", "pegawai", "employé", "empleado", "🧾"],
        ["كَنَّاسٌ", "janitor", "tukang kebersihan", "petugas kebersihan", "agent d’entretien", "conserje", "🧹"],
        ["مَدْرَسَةٌ", "school", "sekolah", "sekolah", "école", "escuela", "🏫"],
        ["فَصْلٌ", "classroom", "bilik darjah", "kelas", "classe", "aula", "🏫"],
        ["مَكْتَبٌ", "desk", "meja", "meja", "bureau", "escritorio", "🪑"],
        ["مَدْخَلٌ", "entrance", "pintu masuk", "pintu masuk", "entrée", "entrada", "🚪"],
      ], [
        ["مُعَلِّمٌ", "مَنْ هٰذَا؟", "Siapakah ini?", "Siapa ini?", "Qui est-ce ?", "¿Quién es este?", "👩‍🏫"],
        ["تِلْمِيذٌ", "هٰذَا مُدَرِّسٌ.", "Ini guru.", "Ini guru.", "C’est un enseignant.", "Este es un maestro.", "👨‍🏫"],
        ["مُعَلِّمٌ", "وَمَنْ هٰذِهِ؟", "Dan siapakah ini?", "Dan siapa ini?", "Et qui est-ce ?", "¿Y quién es esta?", "👩"],
        ["تِلْمِيذٌ", "هٰذِهِ طَالِبَةٌ.", "Ini murid perempuan.", "Ini siswi.", "C’est une élève.", "Esta es una alumna.", "👧"],
        ["تِلْمِيذٌ", "هٰذَا فَصْلٌ.", "Ini kelas.", "Ini kelas.", "C’est une classe.", "Esta es un aula.", "🏫"],
      ], ["mcq", "listening", "speaking", "reading", "writing", "matching", "arrange"]),
      makeLesson("indonesia-g2u1l2", "indonesia-g2u1", 2, "الْحُضُورُ وَالْغِيَابُ", "Attendance and Absence", "Kehadiran dan Ketidakhadiran", "Kehadiran dan Ketidakhadiran", "La présence et l’absence", "La asistencia y la ausencia", [
        ["حَاضِرٌ", "present", "hadir", "hadir", "présent", "presente", "✅"],
        ["غَائِبٌ", "absent", "tidak hadir", "tidak hadir", "absent", "ausente", "❌"],
        ["مُسْتَأْذِنٌ", "excused", "minta izin", "izin", "autorisé", "justificado", "🙋"],
        ["أَيْنَ", "where", "di mana", "di mana", "où", "dónde", "📍"],
        ["فُلانٌ", "so-and-so", "si polan", "si fulan", "untel", "fulano", "👤"],
        ["الْفَصْلُ", "the class", "kelas", "kelas", "la classe", "el aula", "🏫"],
        ["مَوْجُودٌ", "present/there", "ada", "ada", "présent", "presente", "📘"],
        ["مَفْقُودٌ", "missing", "hilang", "hilang", "manquant", "faltante", "🔎"],
        ["يَحْضُرُ", "attends", "hadir", "hadir", "assiste", "asiste", "👣"],
        ["يَغِيبُ", "is absent", "tidak hadir", "tidak hadir", "est absent", "está ausente", "🚫"],
      ], [
        ["مُعَلِّمٌ", "أَيْنَ فُلانٌ؟", "Di mana si Fulan?", "Di mana si Fulan?", "Où est untel ?", "¿Dónde está fulano?", "👤"],
        ["تِلْمِيذٌ", "هُوَ حَاضِرٌ.", "Dia hadir.", "Dia hadir.", "Il est présent.", "Él está presente.", "✅"],
        ["مُعَلِّمٌ", "وَهٰذِهِ؟", "Dan yang ini?", "Dan yang ini?", "Et celle-ci ?", "¿Y esta?", "📍"],
        ["تِلْمِيذٌ", "هِيَ غَائِبَةٌ.", "Dia tidak hadir.", "Dia tidak hadir.", "Elle est absente.", "Ella está ausente.", "❌"],
      ], ["listening", "mcq", "speaking", "reading", "writing", "matching", "arrange"]),
    ]),
    makeUnit("indonesia-g2u2", 2, "الْأَدَوَاتُ الْمَدْرَسِيَّةُ", "School Tools", "Alat Sekolah", "Alat Sekolah", "Les outils scolaires", "Los útiles escolares", "school", [
      makeLesson("indonesia-g2u2l1", "indonesia-g2u2", 1, "الْأَدَوَاتُ الْمَدْرَسِيَّةُ", "School Tools", "Alat Sekolah", "Alat Sekolah", "Les outils scolaires", "Los útiles escolares", [
        ["كِتَابٌ", "book", "buku", "buku", "livre", "libro", "📘"],
        ["دَفْتَرٌ", "notebook", "buku tulis", "buku tulis", "cahier", "cuaderno", "📓"],
        ["قَلَمٌ", "pen", "pen", "pena", "stylo", "bolígrafo", "✏️"],
        ["قَلَمُ الرَّصَاصِ", "pencil", "pensel", "pensil", "crayon", "lápiz", "✏️"],
        ["مِسْطَرَةٌ", "ruler", "pembaris", "penggaris", "règle", "regla", "📏"],
        ["مِمْحَاةٌ", "eraser", "pemadam", "penghapus", "gomme", "borrador", "🧽"],
        ["مِقَصٌّ", "scissors", "gunting", "gunting", "ciseaux", "tijeras", "✂️"],
        ["صَمْغٌ", "glue", "gam", "lem", "colle", "pegamento", "🧴"],
        ["أَلْوَانٌ", "colours", "warna", "warna", "couleurs", "colores", "🖍️"],
        ["سَبُّورَةٌ", "board", "papan tulis", "papan tulis", "tableau", "pizarra", "🟩"],
        ["كُرَّاسَةٌ", "exercise book", "buku latihan", "buku latihan", "cahier d’exercices", "cuaderno de ejercicios", "📒"],
        ["حَقِيبَةٌ", "bag", "beg", "tas", "sac", "bolsa", "🎒"],
      ], [
        ["مُعَلِّمٌ", "مَا هٰذَا؟", "Apakah ini?", "Apa ini?", "Qu’est-ce que c’est ?", "¿Qué es esto?", "❓"],
        ["تِلْمِيذٌ", "هٰذَا كِتَابٌ.", "Ini buku.", "Ini buku.", "C’est un livre.", "Esto es un libro.", "📘"],
        ["مُعَلِّمٌ", "وَمَا هٰذِهِ؟", "Dan apakah ini?", "Dan apa ini?", "Et qu’est-ce que c’est ?", "¿Y qué es esto?", "❓"],
        ["تِلْمِيذٌ", "هٰذِهِ مِسْطَرَةٌ.", "Ini pembaris.", "Ini penggaris.", "C’est une règle.", "Es una regla.", "📏"],
        ["تِلْمِيذٌ", "هٰذَا قَلَمٌ.", "Ini pen.", "Ini pena.", "C’est un stylo.", "Es un bolígrafo.", "✏️"],
      ], ["listening", "mcq", "speaking", "reading", "writing", "matching", "arrange"]),
      makeLesson("indonesia-g2u2l2", "indonesia-g2u2", 2, "فِي حَقِيبَتِي", "In My Bag", "Di Dalam Beg Saya", "Di Dalam Tas Saya", "Dans mon sac", "En mi bolsa", [
        ["حَقِيبَةٌ", "bag", "beg", "tas", "sac", "bolsa", "🎒"],
        ["مِلْفَافٌ", "folder", "fail", "map", "chemise", "carpeta", "📁"],
        ["كُرْتٌ", "card", "kad", "kartu", "carte", "tarjeta", "🪪"],
        ["مِمْحَاةٌ", "eraser", "pemadam", "penghapus", "gomme", "borrador", "🧽"],
        ["مِقْلَمَةٌ", "pencil case", "kotak pensel", "tempat pensil", "trousse", "estuche", "🧰"],
        ["فَتَحَ", "opened", "membuka", "membuka", "ouvrir", "abrir", "🔓"],
        ["أَغْلَقَ", "closed", "menutup", "menutup", "fermer", "cerrar", "🔒"],
        ["يَدٌ", "hand", "tangan", "tangan", "main", "mano", "✋"],
        ["دَفْتَرٌ", "notebook", "buku tulis", "buku tulis", "cahier", "cuaderno", "📓"],
        ["مَدْرَسَةٌ", "school", "sekolah", "sekolah", "école", "escuela", "🏫"],
      ], [
        ["تِلْمِيذٌ", "مَا فِي حَقِيبَتِي؟", "Apa yang ada dalam beg saya?", "Apa yang ada dalam tas saya?", "Qu’y a-t-il dans mon sac ?", "¿Qué hay en mi bolsa?", "❓"],
        ["تِلْمِيذٌ", "فِيْهَا كِتَابٌ وَدَفْتَرٌ.", "Ada buku dan buku tulis di dalamnya.", "Ada buku dan buku tulis di dalamnya.", "Il y a un livre et un cahier.", "Hay un libro y un cuaderno.", "📘📓"],
        ["مُعَلِّمٌ", "هَلْ عِنْدَكَ مِمْحَاةٌ؟", "Adakah kamu ada pemadam?", "Adakah kamu ada penghapus?", "As-tu une gomme ?", "¿Tienes borrador?", "❓"],
        ["تِلْمِيذٌ", "نَعَمْ، عِنْدِي مِمْحَاةٌ.", "Ya, saya ada pemadam.", "Ya, saya ada penghapus.", "Oui, j’ai une gomme.", "Sí, tengo un borrador.", "✅"],
      ], ["listening", "mcq", "speaking", "reading", "writing", "matching", "arrange"]),
    ]),
    makeUnit("indonesia-g2u3", 3, "فِي الْفَصْلِ", "In the Classroom", "Di Dalam Kelas", "Di Dalam Kelas", "Dans la classe", "En el aula", "classroom", [
      makeLesson("indonesia-g2u3l1", "indonesia-g2u3", 1, "فِي الْفَصْلِ", "In the Classroom", "Di Dalam Kelas", "Di Dalam Kelas", "Dans la classe", "En el aula", [
        ["سَبُّورَةٌ", "blackboard", "papan", "papan", "tableau", "pizarra", "🟩"],
        ["مَكْتَبٌ", "desk", "meja", "meja", "bureau", "escritorio", "🪑"],
        ["كُرْسِيٌّ", "chair", "kerusi", "kursi", "chaise", "silla", "🪑"],
        ["بَابٌ", "door", "pintu", "pintu", "porte", "puerta", "🚪"],
        ["نَافِذَةٌ", "window", "tingkap", "jendela", "fenêtre", "ventana", "🪟"],
        ["مِمْحَاةٌ", "eraser", "pemadam", "penghapus", "gomme", "borrador", "🧽"],
        ["قَلَمُ الرَّصَاصِ", "pencil", "pensel", "pensil", "crayon", "lápiz", "✏️"],
        ["مَنْشَفَةٌ", "duster", "kain lap", "kain pengelap", "chiffon", "paño", "🧼"],
        ["كُرَّاسَةٌ", "exercise book", "buku latihan", "buku latihan", "cahier d’exercices", "cuaderno de ejercicios", "📒"],
        ["مُعَلِّمٌ", "teacher", "guru", "guru", "enseignant", "maestro", "👨‍🏫"],
        ["طَاوِلَةٌ", "table", "meja", "meja", "table", "mesa", "🪵"],
        ["صَفٌّ", "row/class", "baris/kelas", "baris/kelas", "rang/classe", "fila/aula", "📚"],
      ], [
        ["مُعَلِّمٌ", "أَيْنَ الْكِتَابُ؟", "Di manakah buku itu?", "Di mana bukunya?", "Où est le livre ?", "¿Dónde está el libro?", "📘"],
        ["تِلْمِيذٌ", "الْكِتَابُ عَلَى الْمَكْتَبِ.", "Buku itu di atas meja.", "Buku itu di atas meja.", "Le livre est sur le bureau.", "El libro está sobre el escritorio.", "🪑"],
        ["مُعَلِّمٌ", "أَيْنَ الْمِمْحَاةُ؟", "Di manakah pemadam?", "Di mana penghapus?", "Où est la gomme ?", "¿Dónde está el borrador?", "🧽"],
        ["تِلْمِيذٌ", "الْمِمْحَاةُ فِي الْحَقِيبَةِ.", "Pemadam itu di dalam beg.", "Penghapus itu di dalam tas.", "La gomme est dans le sac.", "El borrador está en la bolsa.", "🎒"],
      ], ["listening", "mcq", "speaking", "reading", "writing", "matching", "arrange"]),
    ]),
    makeUnit("indonesia-g2u4", 4, "الْأُسْرَةُ وَالْبَيْتُ", "Family and Home", "Keluarga dan Rumah", "Keluarga dan Rumah", "La famille et la maison", "La familia y la casa", "family", [
      makeLesson("indonesia-g2u4l1", "indonesia-g2u4", 1, "الْأُسْرَةُ وَالْبَيْتُ", "Family and Home", "Keluarga dan Rumah", "Keluarga dan Rumah", "La famille et la maison", "La familia y la casa", [
        ["أَبٌ", "father", "bapa", "ayah", "père", "padre", "👨"],
        ["أُمٌّ", "mother", "ibu", "ibu", "mère", "madre", "👩"],
        ["أَخٌ", "brother", "abang/adik lelaki", "saudara laki-laki", "frère", "hermano", "👦"],
        ["أُخْتٌ", "sister", "kakak/adik perempuan", "saudara perempuan", "sœur", "hermana", "👧"],
        ["بَيْتٌ", "house", "rumah", "rumah", "maison", "casa", "🏠"],
        ["غُرْفَةٌ", "room", "bilik", "kamar", "chambre", "habitación", "🛏️"],
        ["مَطْبَخٌ", "kitchen", "dapur", "dapur", "cuisine", "cocina", "🍳"],
        ["حَدِيقَةٌ", "garden", "taman", "taman", "jardin", "jardín", "🌳"],
        ["نَظِيفٌ", "clean", "bersih", "bersih", "propre", "limpio", "✨"],
        ["جَمِيلٌ", "beautiful", "cantik", "indah", "beau", "bonito", "🌷"],
        ["سُرُورٌ", "happiness", "gembira", "gembira", "joie", "alegría", "😊"],
        ["أَثَاثٌ", "furniture", "perabot", "perabot", "mobilier", "muebles", "🪑"],
      ], [
        ["أُمٌّ", "أَيْنَ أَبُوكَ؟", "Di manakah ayah kamu?", "Di mana ayahmu?", "Où est ton père ?", "¿Dónde está tu padre?", "👨"],
        ["طِفْلٌ", "أَبِي فِي الْبَيْتِ.", "Ayah saya di rumah.", "Ayah saya di rumah.", "Mon père est à la maison.", "Mi padre está en casa.", "🏠"],
        ["أُمٌّ", "مَنْ فِي الْبَيْتِ؟", "Siapa di dalam rumah?", "Siapa di dalam rumah?", "Qui est dans la maison ?", "¿Quién está en la casa?", "🏠"],
        ["طِفْلٌ", "أُمِّي وَأَبِي.", "Ibu dan ayah saya.", "Ibu dan ayah saya.", "Ma mère et mon père.", "Mi madre y mi padre.", "👩👨"],
      ], ["listening", "mcq", "speaking", "reading", "writing", "matching", "arrange"]),
    ]),
    makeUnit("indonesia-g2u5", 5, "الْحَيَوَانَاتُ وَالطَّبِيعَةُ", "Animals and Nature", "Haiwan dan Alam", "Hewan dan Alam", "Les animaux et la nature", "Los animales y la naturaleza", "nature", [
      makeLesson("indonesia-g2u5l1", "indonesia-g2u5", 1, "الْحَيَوَانَاتُ وَالطَّبِيعَةُ", "Animals and Nature", "Haiwan dan Alam", "Hewan dan Alam", "Les animaux et la nature", "Los animales y la naturaleza", [
        ["أَسَدٌ", "lion", "singa", "singa", "lion", "león", "🦁"],
        ["قِطَّةٌ", "cat", "kucing", "kucing", "chat", "gato", "🐱"],
        ["كَلْبٌ", "dog", "anjing", "anjing", "chien", "perro", "🐶"],
        ["طَائِرٌ", "bird", "burung", "burung", "oiseau", "pájaro", "🐦"],
        ["سَمَكَةٌ", "fish", "ikan", "ikan", "poisson", "pez", "🐟"],
        ["شَمْسٌ", "sun", "matahari", "matahari", "soleil", "sol", "☀️"],
        ["قَمَرٌ", "moon", "bulan", "bulan", "lune", "luna", "🌙"],
        ["نَجْمٌ", "star", "bintang", "bintang", "étoile", "estrella", "⭐"],
        ["شَجَرَةٌ", "tree", "pokok", "pohon", "arbre", "árbol", "🌳"],
        ["زَهْرَةٌ", "flower", "bunga", "bunga", "fleur", "flor", "🌸"],
        ["خُضْرَةٌ", "greenery", "sayuran hijau", "tanaman hijau", "verdure", "verdor", "🌿"],
        ["مَاءٌ", "water", "air", "air", "eau", "agua", "💧"],
      ], [
        ["مُعَلِّمٌ", "مَا هٰذَا؟", "Apakah ini?", "Apa ini?", "Qu’est-ce que c’est ?", "¿Qué es esto?", "❓"],
        ["تِلْمِيذٌ", "هٰذَا أَسَدٌ.", "Ini singa.", "Ini singa.", "C’est un lion.", "Este es un león.", "🦁"],
        ["مُعَلِّمٌ", "مَا هٰذِهِ؟", "Apakah ini?", "Apa ini?", "Qu’est-ce que c’est ?", "¿Qué es esto?", "❓"],
        ["تِلْمِيذٌ", "هٰذِهِ زَهْرَةٌ.", "Ini bunga.", "Ini bunga.", "C’est une fleur.", "Esta es una flor.", "🌸"],
      ], ["listening", "mcq", "speaking", "reading", "writing", "matching", "arrange"]),
    ]),
    makeUnit("indonesia-g2u6", 6, "الْأَرْقَامُ وَالْعَدُّ", "Numbers and Counting", "Nombor dan Mengira", "Angka dan Menghitung", "Les nombres et le comptage", "Los números y el conteo", "numbers", [
      makeLesson("indonesia-g2u6l1", "indonesia-g2u6", 1, "الْأَرْقَامُ وَالْعَدُّ", "Numbers and Counting", "Nombor dan Mengira", "Angka dan Menghitung", "Les nombres et le comptage", "Los números y el conteo", [
        ["وَاحِدٌ", "one", "satu", "satu", "un", "uno", "1️⃣"],
        ["اثْنَانِ", "two", "dua", "dua", "deux", "dos", "2️⃣"],
        ["ثَلَاثَةٌ", "three", "tiga", "tiga", "trois", "tres", "3️⃣"],
        ["أَرْبَعَةٌ", "four", "empat", "empat", "quatre", "cuatro", "4️⃣"],
        ["خَمْسَةٌ", "five", "lima", "lima", "cinq", "cinco", "5️⃣"],
        ["سِتَّةٌ", "six", "enam", "enam", "six", "seis", "6️⃣"],
        ["سَبْعَةٌ", "seven", "tujuh", "tujuh", "sept", "siete", "7️⃣"],
        ["ثَمَانِيَةٌ", "eight", "lapan", "delapan", "huit", "ocho", "8️⃣"],
        ["تِسْعَةٌ", "nine", "sembilan", "sembilan", "neuf", "nueve", "9️⃣"],
        ["عَشَرَةٌ", "ten", "sepuluh", "sepuluh", "dix", "diez", "🔟"],
        ["كَمْ", "how many", "berapa", "berapa", "combien", "cuántos", "❓"],
        ["عَدَدٌ", "number", "bilangan", "jumlah", "nombre", "número", "🔢"],
      ], [
        ["مُعَلِّمٌ", "كَمْ كِتَابًا هُنَا؟", "Berapa banyak buku di sini?", "Ada berapa buku di sini?", "Combien de livres y a-t-il ici ?", "¿Cuántos libros hay aquí?", "📘"],
        ["تِلْمِيذٌ", "هُنَا ثَلَاثَةُ كُتُبٍ.", "Ada tiga buku di sini.", "Ada tiga buku di sini.", "Il y a trois livres ici.", "Hay tres libros aquí.", "3️⃣"],
        ["مُعَلِّمٌ", "كَمْ طَالِبًا؟", "Berapa murid?", "Berapa orang murid?", "Combien d’élèves ?", "¿Cuántos estudiantes?", "🧒"],
        ["تِلْمِيذٌ", "خَمْسَةُ طُلَّابٍ.", "Lima murid.", "Lima murid.", "Cinq élèves.", "Cinco estudiantes.", "5️⃣"],
      ], ["listening", "mcq", "speaking", "reading", "writing", "matching", "arrange"]),
    ]),
  ],
};

function makeUnit(id: string, order: number, ar: string, en: string, ms: string, idn: string, fr: string, es: string, theme: string, lessons: Lesson[]) {
  return { id, gradeId: "indonesia-g2", order, title: t(ar, en, ms, idn, fr, es), theme, lessons };
}

function makeLesson(id: string, unitId: string, order: number, ar: string, en: string, ms: string, idn: string, fr: string, es: string, vocab: Array<[string, string, string, string, string, string, string]>, dialogue: Array<[string, string, string, string, string, string, string]>, exerciseTypes: Array<"mcq" | "listening" | "speaking" | "reading" | "writing" | "matching" | "arrange">): Lesson {
  return {
    id,
    unitId,
    gradeId: "indonesia-g2",
    order,
    title: t(ar, en, ms, idn, fr, es),
    skills: ["listening", "speaking", "reading", "writing"],
    intro: t("نَتَعَلَّمُ الْكَلِمَاتِ وَنُتَدَرِّبُ عَلَى الْحِوَارِ وَالْقِرَاءَةِ وَالْكِتَابَةِ.", "We learn words and practice dialogue, reading, and writing.", "Kita belajar kata-kata dan berlatih dialog, membaca, dan menulis.", "Kita belajar kata-kata dan berlatih dialog, membaca, dan menulis.", "Nous apprenons des mots et nous entraînons au dialogue, à la lecture et à l’écriture.", "Aprendemos palabras y practicamos el diálogo, la lectura y la escritura."),
    vocabulary: vocab.map(([arabic, enText, msText, idText, frText, esText, emoji], idx) => ({ id: `${id}v${idx + 1}`, arabic, transliteration: enText.toLowerCase().replace(/\s+/g, "-"), translation: t(arabic, enText, msText, idText, frText, esText), emoji })),
    dialogue: dialogue.map(([speaker, arText, idText, enText, msText, frText, esText]) => ({ speaker, arabic: arText, translation: t(arText, enText, msText, idText, frText, esText) })),
    exercises: exerciseTypes.map((type, idx) => buildExercise(id, idx + 1, type, vocab)),
  };
}

function buildExercise(lessonId: string, n: number, type: "mcq" | "listening" | "speaking" | "reading" | "writing" | "matching" | "arrange", vocab: Array<[string, string, string, string, string, string, string]>): any {
  if (type === "matching") return { id: `${lessonId}e${n}`, type, skill: "reading", prompt: t("صِلْ", "Match", "Padankan", "Cocokkan", "Relie", "Une"), pairs: vocab.slice(0, 6).map(([a, , , , , , e]) => ({ a, b: e })) };
  if (type === "arrange") return { id: `${lessonId}e${n}`, type, skill: "reading", prompt: t("رَتِّبْ", "Arrange", "Susun", "Susun", "Range", "Ordena"), arabicText: vocab.slice(0, 4).map(v => v[0]).join("، ") };
  if (type === "speaking") return { id: `${lessonId}e${n}`, type, skill: "speaking", prompt: t("تَحَدَّثْ", "speaking", "Bertutur", "speaking", "Parle", "Habla"), arabicText: vocab.slice(0, 3).map(v => v[0]).join("، ") };
  if (type === "listening") return { id: `${lessonId}e${n}`, type, skill: "listening", prompt: t("اِسْتَمِعْ", "Listen", "Dengar", "Dengarkan", "Écoute", "Escucha"), arabicText: vocab[0][0], options: [vocab[1][0], vocab[0][0], vocab[2][0]], correctIndex: 1 };
  if (type === "writing") return { id: `${lessonId}e${n}`, type, skill: "writing", prompt: t("اُكْتُبْ", "Write", "Tulis", "Tulis", "Écris", "Escribe"), arabicText: vocab[0][0] };
  return { id: `${lessonId}e${n}`, type: "mcq", skill: "reading", prompt: t("اخْتَرْ", "Choose", "Pilih", "Pilih", "Choisis", "Elige"), options: [vocab[0][0], vocab[1][0], vocab[2][0]], correctIndex: 0 };
}
