import { t, type GradeData, type Lesson } from "./types";

export const indonesiaGrade2: GradeData = {
  id: "indonesia-g2",
  curriculumId: "indonesia",
  number: 2,
  title: t("المستوى الثاني", "Stage 2", "Tahun 2", "Kelas 2", "Année 2", "Año 2"),
  description: t("نَتَعَلَّمُ دُرُوسًا عَنْ الْمَدْرَسَةِ وَالْأَدَوَاتِ وَالْأُسْرَةِ وَالْحَيَوَانَاتِ وَالْأَرْقَامِ.", "We learn lessons about school, tools, family, animals, and numbers.", "Kita belajar tentang sekolah, alat, keluarga, haiwan, dan nombor.", "Kita belajar tentang sekolah, alat, keluarga, hewan, dan angka.", "Nous apprenons des leçons sur l’école, les outils, la famille, les animaux et les nombres.", "Aprendemos lecciones sobre la escuela, los útiles, la familia, los animales y los números."),
  color: "#0EA5E9",
  icon: "book-open",
  units: [
    u(1, "أَفْرَادُ الْمَدْرَسَةِ", "School Members", "Ahli Sekolah", "Anggota Sekolah", "Les membres de l’école", "Los miembros de la escuela", "school-members", [
      l(1, "أَفْرَادُ الْمَدْرَسَةِ", "School Members", "Ahli Sekolah", "Anggota Sekolah", "Les membres de l’école", "Los miembros de la escuela",
        [["مُدَرِّسٌ","teacher","guru","guru","enseignant","maestro","👩‍🏫"],["طَالِبٌ","student","murid","siswa","élève","estudiante","🧒"],["طَالِبَةٌ","girl student","murid perempuan","siswi","élève","alumna","👧"],["مُدِيرٌ","principal","pengetua","kepala sekolah","directeur","director","👨‍💼"],["حَارِسٌ","guard","pengawal","penjaga","gardien","guardián","🛡️"],["بَوَّابٌ","doorkeeper","jaga pintu","penjaga pintu","portier","portero","🚪"],["مُوَظَّفٌ","staff","petugas","pegawai","employé","empleado","🧾"],["كَنَّاسٌ","janitor","tukang kebersihan","petugas kebersihan","agent d’entretien","conserje","🧹"],["مَدْرَسَةٌ","school","sekolah","sekolah","école","escuela","🏫"],["فَصْلٌ","classroom","bilik darjah","kelas","classe","aula","🏫"]],
        [["مُعَلِّمٌ","مَنْ هٰذَا؟","Siapa ini?","Siapa ini?","Qui est-ce ?","¿Quién es este?","👩‍🏫"],["تِلْمِيذٌ","هٰذَا مُدَرِّسٌ.","Ini guru.","Ini guru.","C’est un enseignant.","Este es un maestro.","👨‍🏫"],["مُعَلِّمٌ","وَمَنْ هٰذِهِ؟","Dan siapa ini?","Dan siapa ini?","Et qui est-ce ?","¿Y quién es esta?","👧"],["تِلْمِيذٌ","هٰذِهِ طَالِبَةٌ.","Ini murid perempuan.","Ini siswi.","C’est une élève.","Esta es una alumna.","👧"]],[
          ex("mcq","reading",t("اخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ.", "Choose the correct word.", "Pilih perkataan yang betul.", "Pilih kata yang tepat.", "Choisis le mot correct.", "Elige la palabra correcta."),["مُدَرِّسٌ","مُدِيرٌ","بَوَّابٌ"],0,"https://commons.wikimedia.org/wiki/Special:FilePath/Teacher_in_classroom.jpg"),
          ex("matching","reading",t("صِلْ بَيْنَ الْكَلِمَةِ وَالصُّورَةِ.", "Match the word and picture.", "Padankan perkataan dan gambar.", "Cocokkan kata dan gambar.", "Relie le mot et l’image.", "Une la palabra y la imagen."),undefined,undefined,"https://commons.wikimedia.org/wiki/Special:FilePath/School.jpg",null,[{a:"مُدَرِّسٌ",b:"👩‍🏫"},{a:"طَالِبٌ",b:"🧒"},{a:"مَدْرَسَةٌ",b:"🏫"}]),
          ex("speaking","speaking",t("تَحَدَّثْ عَنْ أَفْرَادِ الْمَدْرَسَةِ.", "Speak about school members.", "Bercakap tentang ahli sekolah.", "Bicarakan anggota sekolah.", "Parle des membres de l’école.", "Habla de los miembros de la escuela."),"مُدَرِّسٌ، طَالِبٌ، طَالِبَةٌ"),
          ex("arrange","reading",t("رَتِّبِ الْكَلِمَاتِ.", "Arrange the words.", "Susun perkataan.", "Susun kata-kata.", "Range les mots.", "Ordena las palabras."),"هٰذَا، مُدَرِّسٌ، فِي، الْفَصْلِ"),
          ex("writing","writing",t("اُكْتُبِ الْكَلِمَةَ.", "Write the word.", "Tulis perkataan.", "Tulis kata.", "Écris le mot.", "Escribe la palabra."),"مَدْرَسَةٌ"),
        ]),
    ]),
    u(2, "الْأَدَوَاتُ الْمَدْرَسِيَّةُ", "School Tools", "Alat Sekolah", "Alat Sekolah", "Les outils scolaires", "Los útiles escolares", "school-tools", [
      l(1, "الْأَدَوَاتُ الْمَدْرَسِيَّةُ", "School Tools", "Alat Sekolah", "Alat Sekolah", "Les outils scolaires", "Los útiles escolares",
        [["كِتَابٌ","book","buku","buku","livre","libro","📘"],["دَفْتَرٌ","notebook","buku tulis","buku tulis","cahier","cuaderno","📓"],["قَلَمٌ","pen","pen","pena","stylo","bolígrafo","✏️"],["قَلَمُ الرَّصَاصِ","pencil","pensil","pensil","crayon","lápiz","✏️"],["مِسْطَرَةٌ","ruler","pembaris","penggaris","règle","regla","📏"],["مِمْحَاةٌ","eraser","pemadam","penghapus","gomme","borrador","🧽"],["مِقَصٌّ","scissors","gunting","gunting","ciseaux","tijeras","✂️"],["صَمْغٌ","glue","gam","lem","colle","pegamento","🧴"],["أَلْوَانٌ","colours","warna","warna","couleurs","colores","🖍️"],["حَقِيبَةٌ","bag","beg","tas","sac","bolsa","🎒"]],
        [["مُعَلِّمٌ","مَا هٰذَا؟","Apa ini?","Apa ini?","Qu’est-ce que c’est ?","¿Qué es esto?","📘"],["تِلْمِيذٌ","هٰذَا كِتَابٌ.","Ini buku.","Ini buku.","C’est un livre.","Esto es un libro.","📘"],["مُعَلِّمٌ","وَمَا هٰذِهِ؟","Dan apa ini?","Dan apa ini?","Et qu’est-ce que c’est ?","¿Y qué es esto?","📏"],["تِلْمِيذٌ","هٰذِهِ مِسْطَرَةٌ.","Ini pembaris.","Ini penggaris.","C’est une règle.","Es una regla.","📏"]],[
          ex("listening","listening",t("اِسْتَمِعْ وَاخْتَرْ.", "Listen and choose.", "Dengar dan pilih.", "Dengar dan pilih.", "Écoute et choisis.", "Escucha y elige."),"كِتَابٌ",["كِتَابٌ","مِمْحَاةٌ","مِقَصٌّ"],0,"https://commons.wikimedia.org/wiki/Special:FilePath/Books_in_a_school_bag.jpg"),
          ex("matching","reading",t("صِلْ بَيْنَ الْكَلِمَةِ وَالصُّورَةِ.", "Match the word and picture.", "Padankan perkataan dan gambar.", "Cocokkan kata dan gambar.", "Relie le mot et l’image.", "Une la palabra y la imagen."),undefined,undefined,"https://commons.wikimedia.org/wiki/Special:FilePath/School_supplies.jpg",null,[{a:"كِتَابٌ",b:"📘"},{a:"قَلَمٌ",b:"✏️"},{a:"حَقِيبَةٌ",b:"🎒"}]),
          ex("mcq","reading",t("اخْتَرِ الْجَوَابَ.", "Choose the answer.", "Pilih jawapan.", "Pilih jawaban.", "Choisis la réponse.", "Elige la respuesta."),["مِمْحَاةٌ","دَفْتَرٌ","حَقِيبَةٌ"],1),
          ex("speaking","speaking",t("قُلْ: مَا هٰذَا؟", "Say: What is this?", "Katakan: Apa ini?", "Katakan: Apa ini?", "Dis : qu’est-ce que c’est ?", "Di: ¿qué es esto?"),"هٰذَا كِتَابٌ"),
          ex("writing","writing",t("اُكْتُبْ.", "Write.", "Tulis.", "Tulis.", "Écris.", "Escribe."),"مِمْحَاةٌ"),
        ]),
    ]),
    u(3, "فِي الْفَصْلِ", "In the Classroom", "Di Dalam Kelas", "Di Dalam Kelas", "Dans la classe", "En el aula", "classroom", [
      l(1, "فِي الْفَصْلِ", "In the Classroom", "Di Dalam Kelas", "Di Dalam Kelas", "Dans la classe", "En el aula",
        [["سَبُّورَةٌ","board","papan tulis","papan tulis","tableau","pizarra","🟩"],["مَكْتَبٌ","desk","meja","meja","bureau","escritorio","🪑"],["كُرْسِيٌّ","chair","kerusi","kursi","chaise","silla","🪑"],["بَابٌ","door","pintu","pintu","porte","puerta","🚪"],["نَافِذَةٌ","window","tingkap","jendela","fenêtre","ventana","🪟"],["مَنْشَفَةٌ","duster","kain lap","kain lap","chiffon","paño","🧼"],["طَاوِلَةٌ","table","meja","meja","table","mesa","🪵"],["كُرَّاسَةٌ","exercise book","buku latihan","buku latihan","cahier d’exercices","cuaderno de ejercicios","📒"],["مُعَلِّمٌ","teacher","guru","guru","enseignant","maestro","👨‍🏫"],["صَفٌّ","row/class","baris/kelas","baris/kelas","rang/classe","fila/aula","📚"]],
        [["مُعَلِّمٌ","أَيْنَ الْكِتَابُ؟","Di mana buku itu?","Di mana buku itu?","Où est le livre ?","¿Dónde está el libro?","📘"],["تِلْمِيذٌ","الْكِتَابُ عَلَى الْمَكْتَبِ.","Buku itu di atas meja.","Buku itu di atas meja.","Le livre est sur le bureau.","El libro está sobre la mesa.","🪑"],["مُعَلِّمٌ","أَيْنَ الْمِمْحَاةُ؟","Di mana pemadam?","Di mana penghapus?","Où est la gomme ?","¿Dónde está el borrador?","🧽"],["تِلْمِيذٌ","الْمِمْحَاةُ فِي الْحَقِيبَةِ.","Pemadam di dalam beg.","Penghapus di dalam tas.","La gomme est dans le sac.","El borrador está en la bolsa.","🎒"]],[
          ex("mcq","reading",t("اخْتَرْ.", "Choose.", "Pilih.", "Pilih.", "Choisis.", "Elige."),["بَابٌ","مَكْتَبٌ","نَافِذَةٌ"],2,"https://commons.wikimedia.org/wiki/Special:FilePath/Classroom.jpg"),
          ex("arrange","reading",t("رَتِّبِ الْجُمْلَةَ.", "Arrange the sentence.", "Susun ayat.", "Susun kalimat.", "Range la phrase.", "Ordena la frase."),"الْكِتَابُ، عَلَى، الْمَكْتَبِ"),
          ex("matching","reading",t("صِلْ.", "Match.", "Padankan.", "Cocokkan.", "Relie.", "Une."),undefined,undefined,"https://commons.wikimedia.org/wiki/Special:FilePath/School_classroom.jpg",null,[{a:"سَبُّورَةٌ",b:"🟩"},{a:"مَكْتَبٌ",b:"🪑"},{a:"نَافِذَةٌ",b:"🪟"}]),
          ex("speaking","speaking",t("قُلْ مَا فِي الْفَصْلِ.", "Say what is in the classroom.", "Katakan apa yang ada di kelas.", "Katakan apa yang ada di kelas.", "Dis ce qu’il y a dans la classe.", "Di lo que hay en el aula."),"سَبُّورَةٌ، مَكْتَبٌ، كُرْسِيٌّ"),
          ex("writing","writing",t("اُكْتُبْ.", "Write.", "Tulis.", "Tulis.", "Écris.", "Escribe."),"فَصْلٌ"),
        ]),
    ]),
    u(4, "الْأُسْرَةُ وَالْبَيْتُ", "Family and Home", "Keluarga dan Rumah", "Keluarga dan Rumah", "La famille et la maison", "La familia y la casa", "family-home", [
      l(1, "الْأُسْرَةُ وَالْبَيْتُ", "Family and Home", "Keluarga dan Rumah", "Keluarga dan Rumah", "La famille et la maison", "La familia y la casa",
        [["أَبٌ","father","bapa","ayah","père","padre","👨"],["أُمٌّ","mother","ibu","ibu","mère","madre","👩"],["أَخٌ","brother","abang/adik lelaki","saudara laki-laki","frère","hermano","👦"],["أُخْتٌ","sister","kakak/adik perempuan","saudara perempuan","sœur","hermana","👧"],["بَيْتٌ","house","rumah","rumah","maison","casa","🏠"],["غُرْفَةٌ","room","bilik","kamar","chambre","habitación","🛏️"],["مَطْبَخٌ","kitchen","dapur","dapur","cuisine","cocina","🍳"],["حَدِيقَةٌ","garden","taman","taman","jardin","jardín","🌳"],["نَظِيفٌ","clean","bersih","bersih","propre","limpio","✨"],["جَمِيلٌ","beautiful","cantik","indah","beau","bonito","🌷"]],
        [["أُمٌّ","أَيْنَ أَبُوكَ؟","Di mana ayah kamu?","Di mana ayahmu?","Où est ton père ?","¿Dónde está tu padre?","👨"],["طِفْلٌ","أَبِي فِي الْبَيْتِ.","Ayah saya di rumah.","Ayah saya di rumah.","Mon père est à la maison.","Mi padre está en casa.","🏠"],["أُمٌّ","مَنْ فِي الْبَيْتِ؟","Siapa di dalam rumah?","Siapa di dalam rumah?","Qui est dans la maison ?","¿Quién está en la casa?","🏠"],["طِفْلٌ","أُمِّي وَأَبِي.","Ibu dan ayah saya.","Ibu dan ayah saya.","Ma mère et mon père.","Mi madre y mi padre.","👩👨"]],[
          ex("listening","listening",t("اِسْتَمِعْ وَاخْتَرْ.", "Listen and choose.", "Dengar dan pilih.", "Dengar dan pilih.", "Écoute et choisis.", "Escucha y elige."),"أَبٌ",["أَبٌ","غُرْفَةٌ","جَمِيلٌ"],0,"https://commons.wikimedia.org/wiki/Special:FilePath/Family_icon.jpg"),
          ex("matching","reading",t("صِلْ.", "Match.", "Padankan.", "Cocokkan.", "Relie.", "Une."),undefined,undefined,"https://commons.wikimedia.org/wiki/Special:FilePath/House_icon.jpg",null,[{a:"أَبٌ",b:"👨"},{a:"أُمٌّ",b:"👩"},{a:"بَيْتٌ",b:"🏠"}]),
          ex("mcq","reading",t("اخْتَرْ.", "Choose.", "Pilih.", "Pilih.", "Choisis.", "Elige."),["مَطْبَخٌ","غُرْفَةٌ","بَيْتٌ"],2),
          ex("speaking","speaking",t("تَحَدَّثْ عَنْ أُسْرَتِكَ.", "Speak about your family.", "Bercakap tentang keluargamu.", "Bicarakan keluargamu.", "Parle de ta famille.", "Habla de tu familia."),"أَبِي وَأُمِّي"),
          ex("writing","writing",t("اُكْتُبِ الْكَلِمَةَ.", "Write the word.", "Tulis perkataan.", "Tulis kata.", "Écris le mot.", "Escribe la palabra."),"أُخْتٌ"),
        ]),
    ]),
    u(5, "الْحَيَوَانَاتُ وَالطَّبِيعَةُ", "Animals and Nature", "Haiwan dan Alam", "Hewan dan Alam", "Les animaux et la nature", "Los animales y la naturaleza", "animals-nature", [
      l(1, "الْحَيَوَانَاتُ وَالطَّبِيعَةُ", "Animals and Nature", "Haiwan dan Alam", "Hewan dan Alam", "Les animaux et la nature", "Los animales y la naturaleza",
        [["أَسَدٌ","lion","singa","singa","lion","león","🦁"],["قِطَّةٌ","cat","kucing","kucing","chat","gato","🐱"],["كَلْبٌ","dog","anjing","anjing","chien","perro","🐶"],["طَائِرٌ","bird","burung","burung","oiseau","pájaro","🐦"],["سَمَكَةٌ","fish","ikan","ikan","poisson","pez","🐟"],["شَمْسٌ","sun","matahari","matahari","soleil","sol","☀️"],["قَمَرٌ","moon","bulan","bulan","lune","luna","🌙"],["نَجْمٌ","star","bintang","bintang","étoile","estrella","⭐"],["شَجَرَةٌ","tree","pokok","pohon","arbre","árbol","🌳"],["زَهْرَةٌ","flower","bunga","bunga","fleur","flor","🌸"]],
        [["مُعَلِّمٌ","مَا هٰذَا؟","Apa ini?","Apa ini?","Qu’est-ce que c’est ?","¿Qué es esto?","🦁"],["تِلْمِيذٌ","هٰذَا أَسَدٌ.","Ini singa.","Ini singa.","C’est un lion.","Este es un león.","🦁"],["مُعَلِّمٌ","مَا هٰذِهِ؟","Apa ini?","Apa ini?","Qu’est-ce que c’est ?","¿Qué es esto?","🌸"],["تِلْمِيذٌ","هٰذِهِ زَهْرَةٌ.","Ini bunga.","Ini bunga.","C’est une fleur.","Esta es una flor.","🌸"]],[
          ex("mcq","reading",t("اخْتَرْ.", "Choose.", "Pilih.", "Pilih.", "Choisis.", "Elige."),["أَسَدٌ","قِطَّةٌ","شَمْسٌ"],1,"https://commons.wikimedia.org/wiki/Special:FilePath/Cat_icon.svg"),
          ex("matching","reading",t("صِلْ.", "Match.", "Padankan.", "Cocokkan.", "Relie.", "Une."),undefined,undefined,"https://commons.wikimedia.org/wiki/Special:FilePath/Animals_in_nature.jpg",null,[{a:"أَسَدٌ",b:"🦁"},{a:"شَجَرَةٌ",b:"🌳"},{a:"زَهْرَةٌ",b:"🌸"}]),
          ex("arrange","reading",t("رَتِّبِ.", "Arrange.", "Susun.", "Susun.", "Range.", "Ordena."),"شَجَرَةٌ، زَهْرَةٌ، شَمْسٌ"),
          ex("speaking","speaking",t("قُلْ مَا تَرَى.", "Say what you see.", "Katakan apa yang kamu lihat.", "Katakan apa yang kamu lihat.", "Dis ce que tu vois.", "Di lo que ves."),"شَجَرَةٌ وَزَهْرَةٌ"),
          ex("writing","writing",t("اُكْتُبْ.", "Write.", "Tulis.", "Tulis.", "Écris.", "Escribe."),"طَائِرٌ"),
        ]),
    ]),
    u(6, "الْأَرْقَامُ وَالْعَدُّ", "Numbers and Counting", "Nombor dan Mengira", "Angka dan Menghitung", "Les nombres et le comptage", "Los números y el conteo", "numbers", [
      l(1, "الْأَرْقَامُ وَالْعَدُّ", "Numbers and Counting", "Nombor dan Mengira", "Angka dan Menghitung", "Les nombres et le comptage", "Los números y el conteo",
        [["وَاحِدٌ","one","satu","satu","un","uno","1️⃣"],["اثْنَانِ","two","dua","dua","deux","dos","2️⃣"],["ثَلَاثَةٌ","three","tiga","tiga","trois","tres","3️⃣"],["أَرْبَعَةٌ","four","empat","empat","quatre","cuatro","4️⃣"],["خَمْسَةٌ","five","lima","lima","cinq","cinco","5️⃣"],["سِتَّةٌ","six","enam","enam","six","seis","6️⃣"],["سَبْعَةٌ","seven","tujuh","tujuh","sept","siete","7️⃣"],["ثَمَانِيَةٌ","eight","lapan","delapan","huit","ocho","8️⃣"],["تِسْعَةٌ","nine","sembilan","sembilan","neuf","nueve","9️⃣"],["عَشَرَةٌ","ten","sepuluh","sepuluh","dix","diez","🔟"]],
        [["مُعَلِّمٌ","كَمْ كِتَابًا هُنَا؟","Berapa banyak buku di sini?","Ada berapa buku di sini?","Combien de livres y a-t-il ici ?","¿Cuántos libros hay aquí?","📘"],["تِلْمِيذٌ","هُنَا ثَلَاثَةُ كُتُبٍ.","Ada tiga buku di sini.","Ada tiga buku di sini.","Il y a trois livres ici.","Hay tres libros aquí.","3️⃣"],["مُعَلِّمٌ","كَمْ طَالِبًا؟","Berapa murid?","Berapa murid?","Combien d’élèves ?","¿Cuántos estudiantes?","🧒"],["تِلْمِيذٌ","خَمْسَةُ طُلَّابٍ.","Lima murid.","Lima murid.","Cinq élèves.","Cinco estudiantes.","5️⃣"]],[
          ex("listening","listening",t("اِسْتَمِعْ وَاخْتَرْ.", "Listen and choose.", "Dengar dan pilih.", "Dengar dan pilih.", "Écoute et choisis.", "Escucha y elige."),"ثَلَاثَةٌ",["وَاحِدٌ","ثَلَاثَةٌ","خَمْسَةٌ"],1,"https://commons.wikimedia.org/wiki/Special:FilePath/Arabic_numbers.svg"),
          ex("matching","reading",t("صِلْ بَيْنَ الرَّقْمِ وَالْكَلِمَةِ.", "Match the numeral and the word.", "Padankan angka dan perkataan.", "Cocokkan angka dan kata.", "Relie le chiffre et le mot.", "Une el número y la palabra."),[{a:"وَاحِدٌ",b:"1️⃣"},{a:"ثَلَاثَةٌ",b:"3️⃣"},{a:"خَمْسَةٌ",b:"5️⃣"},{a:"عَشَرَةٌ",b:"🔟"}],undefined,"https://commons.wikimedia.org/wiki/Special:FilePath/Numbers_icon.svg"),
          ex("mcq","reading",t("اخْتَرِ الْجَوَابَ.", "Choose the answer.", "Pilih jawapan.", "Pilih jawaban.", "Choisis la réponse.", "Elige la respuesta."),["4️⃣","3️⃣","2️⃣"],1),
          ex("speaking","speaking",t("عُدَّ مَعَ الزُّمَلَاءِ.", "Count with your friends.", "Kira bersama rakan-rakan.", "Hitung bersama teman.", "Compte avec tes amis.", "Cuenta con tus amigos."),"وَاحِدٌ، اثْنَانِ، ثَلَاثَةٌ"),
          ex("writing","writing",t("اُكْتُبْ.", "Write.", "Tulis.", "Tulis.", "Écris.", "Escribe."),"عَشَرَةٌ"),
        ]),
    ]),
  ],
};

function u(order:number, ar:string, en:string, ms:string, id:string, fr:string, es:string, theme:string, lessons:Lesson[]) {
  return { id:`indonesia-g2u${order}`, gradeId:"indonesia-g2", order, title:t(ar,en,ms,id,fr,es), theme, lessons };
}

function l(order:number, ar:string, en:string, ms:string, id:string, fr:string, es:string, vocab:any[], dialogue:any[], exercises:any[]): Lesson {
  const unit = `indonesia-g2u${currentUnit}`;
  return {
    id: `${unit}l${order}`,
    unitId: unit,
    gradeId: "indonesia-g2",
    order,
    title: t(ar,en,ms,id,fr,es),
    skills: ["listening","speaking","reading","writing"],
    intro: t("نَتَعَلَّمُ الْكَلِمَاتِ وَنُتَدَرِّبُ عَلَى الْحِوَارِ وَالْقِرَاءَةِ وَالْكِتَابَةِ.", "We learn words and practice dialogue, reading, and writing.", "Kita belajar perkataan dan berlatih dialog, membaca, dan menulis.", "Kita belajar kata dan berlatih dialog, membaca, dan menulis.", "Nous apprenons des mots et pratiquons le dialogue, la lecture et l’écriture.", "Aprendemos palabras y practicamos el diálogo, la lectura y la escritura."),
    vocabulary: vocab.map((v, i) => ({ id:`indonesia-g2u${currentUnit}l${order}v${i+1}`, arabic:v[0], transliteration:v[1], translation:t(v[0],v[1],v[2],v[3],v[4],v[5]), emoji:v[6] })),
    dialogue: dialogue.map((d:any) => ({ speaker:d[0], arabic:d[1], translation:t(d[1],d[2],d[3],d[4],d[5],d[6]) })),
    exercises: exercises.map((e:any, i:number) => ({ id:`indonesia-g2u${currentUnit}l${order}e${i+1}`, ...e })),
  };
}

let currentUnit = 1;
function ex(type:any, skill:any, prompt:any, a?:any, b?:any, c?:any, d?:any, e?:any) {
  // Calls use two shapes: (type, skill, prompt, options, correctIndex, imageUrl) or
  // (type, skill, prompt, arabicText, options, correctIndex, imageUrl). Normalize at runtime.
  let arabicText: any, options: any, correctIndex: any, imageUrl: any, pairs: any;
  if (typeof a === "string") {
    arabicText = a; options = b; correctIndex = c; imageUrl = d; pairs = e;
  } else {
    options = a; correctIndex = b; imageUrl = c; arabicText = d; pairs = e;
  }
  return { type, skill, prompt, options, correctIndex, imageUrl: imageUrl ?? null, arabicText: arabicText ?? null, pairs };
}