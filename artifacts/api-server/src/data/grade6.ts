import { t, type GradeData } from "./types";

export const grade6: GradeData = {
  id: "g6",
  number: 6,
  title: t("المستوى السادس", "Stage 6", "Tahun 6", "Kelas 6", "Année 6", "Año 6"),
  description: t("نتعلم عن المجتمع والبيئة والصحة والثقافة والتراث", "Learn about community, environment, health and culture & heritage", "Belajar tentang komuniti, alam sekitar, kesihatan dan budaya warisan", "Belajar tentang komunitas, lingkungan, kesehatan dan budaya warisan", "Apprendre la communauté, l'environnement, la santé et la culture", "Aprender sobre comunidad, medio ambiente, salud y cultura"),
  color: "#F59E0B",
  icon: "globe",
  units: [
    {
      id: "g6u1",
      gradeId: "g6",
      order: 1,
      title: t("الْمُجْتَمَعُ", "Community", "Komuniti", "Komunitas", "La communauté", "La comunidad"),
      theme: "community",
      lessons: [
        {
          id: "g6u1l1",
          unitId: "g6u1",
          gradeId: "g6",
          order: 1,
          title: t("أَفْرَادُ الْمُجْتَمَعِ", "Community Members", "Ahli Komuniti", "Anggota Komunitas", "Les membres de la communauté", "Los miembros de la comunidad"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("المجتمع يتكون من أفراد متعاونين! لنتعلّم من هم.", "A community is made of cooperating members! Let's learn who they are.", "Komuniti terdiri daripada ahli yang bekerjasama! Jom kenali mereka.", "Komunitas terdiri dari anggota yang bekerja sama! Ayo kenali mereka.", "La communauté est formée de membres coopérants ! Apprenons qui ils sont.", "¡Una comunidad está formada por miembros cooperantes! Aprendamos quiénes son."),
          vocabulary: [
            {
              id: "g6u1l1v1",
              arabic: "الْمُجْتَمَعُ",
              transliteration: "al-mujtamaʿ",
              translation: t("الْمُجْتَمَعُ", "community", "komuniti", "komunitas", "la communauté", "la comunidad"),
              emoji: "👥"
            },
            {
              id: "g6u1l1v2",
              arabic: "الْمُوَاطِنُ",
              transliteration: "al-muwāṭin",
              translation: t("الْمُوَاطِنُ", "citizen", "warganegara", "warga negara", "le citoyen", "el ciudadano"),
              emoji: "🧑"
            },
            {
              id: "g6u1l1v3",
              arabic: "الشُّرْطِيُّ",
              transliteration: "ash-shurṭiyy",
              translation: t("الشُّرْطِيُّ", "police officer", "polis", "polisi", "le policier", "el policía"),
              emoji: "👮"
            },
            {
              id: "g6u1l1v4",
              arabic: "الطَّبِيبُ",
              transliteration: "aṭ-ṭabīb",
              translation: t("الطَّبِيبُ", "doctor", "doktor", "dokter", "le médecin", "el médico"),
              emoji: "👨‍⚕️"
            },
            {
              id: "g6u1l1v5",
              arabic: "الْمُعَلِّمُ",
              transliteration: "al-muʿallim",
              translation: t("الْمُعَلِّمُ", "teacher", "guru", "guru", "le professeur", "el maestro"),
              emoji: "👨‍🏫"
            }
          ],
          dialogue: [
            {
              speaker: "سَلْمَى",
              arabic: "مَنْ يَحْمِي الْمُجْتَمَعَ؟",
              translation: t("مَنْ يَحْمِي الْمُجْتَمَعَ؟", "Who protects the community?", "Siapa yang melindungi komuniti?", "Siapa yang melindungi komunitas?", "Qui protège la communauté ?", "¿Quién protege a la comunidad?")
            },
            {
              speaker: "خَالِدٌ",
              arabic: "الشُّرْطِيُّ يَحْمِي الْمُجْتَمَعَ وَالطَّبِيبُ يَحْفَظُ صِحَّتَنَا.",
              translation: t("الشُّرْطِيُّ يَحْمِي الْمُجْتَمَعَ وَالطَّبِيبُ يَحْفَظُ صِحَّتَنَا.", "The police protect the community and the doctor safeguards our health.", "Polis melindungi komuniti dan doktor menjaga kesihatan kita.", "Polisi melindungi komunitas dan dokter menjaga kesehatan kita.", "La police protège la communauté et le médecin veille sur notre santé.", "La policía protege a la comunidad y el médico vela por nuestra salud.")
            }
          ],
          exercises: [
            {
              id: "g6u1l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الْمُوَاطِنُ",
              options: [
                "الشُّرْطِيُّ",
                "الْمُوَاطِنُ",
                "الطَّبِيبُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9d1/512.webp"
            },
            {
              id: "g6u1l1e2",
              type: "mcq",
              skill: "reading",
              prompt: t("ما دور الطبيب في المجتمع؟", "What is the doctor's role in the community?", "Apakah peranan doktor dalam komuniti?", "Apa peran dokter dalam komunitas?", "Quel est le rôle du médecin dans la communauté ?", "¿Cuál es el papel del médico en la comunidad?"),
              options: [
                "يَحْفَظُ صِحَّةَ النَّاسِ",
                "يَبْنِي الْمَنَازِلَ",
                "يُدَرِّسُ الطُّلَّابَ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f465/512.webp"
            },
            {
              id: "g6u1l1e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قل دور كل فرد من أفراد المجتمع", "Say the role of each community member", "Sebut peranan setiap ahli komuniti", "Sebutkan peran setiap anggota komunitas", "Dis le rôle de chaque membre de la communauté", "Di el papel de cada miembro de la comunidad"),
              arabicText: "الْمُعَلِّمُ يُعَلِّمُنَا وَالطَّبِيبُ يَعْلَجُنَا وَالشُّرْطِيُّ يَحْمِينَا",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f46e/512.webp"
            },
            {
              id: "g6u1l1e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "مَنْ يَحْمِي الْمُجْتَمَعَ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f465/512.webp"
            },
            {
              id: "g6u1l1writeg6u1l1v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"الْمُجْتَمَعُ\"", "Type the Arabic word for: \"community\"", "Taip perkataan Arab untuk: \"komuniti\"", "Ketik kata Arab untuk: \"komunitas\"", "Tape le mot arabe pour : \"la communauté\"", "Escribe la palabra árabe para: \"la comunidad\""),
              arabicText: "الْمُجْتَمَعُ",
              answer: "الْمُجْتَمَعُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f465/512.webp"
            },
            {
              id: "g6u1l1arrange2",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "الشُّرْطِيُّ يَحْمِي الْمُجْتَمَعَ وَالطَّبِيبُ يَحْفَظُ صِحَّتَنَا.",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f465/512.webp"
            },
            {
              id: "g6u1l1listeng6u1l1v1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الْمُجْتَمَعُ",
              options: [
                "الصِّحَّةُ",
                "الْمُجْتَمَعُ",
                "الْمَرَضُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f465/512.webp"
            },
            {
              id: "g6u1l1listeng6u1l1v5",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الْمُعَلِّمُ",
              options: [
                "الْمُعَلِّمُ",
                "الْأَجْيَالُ الْقَادِمَةُ",
                "نَحْيَا بِهِ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468-200d-1f3eb/512.webp"
            }
          ]
        },
        {
          id: "g6u1l2",
          unitId: "g6u1",
          gradeId: "g6",
          order: 2,
          title: t("الْتَعَاوُنُ الْمُجْتَمَعِيُّ", "Community Cooperation", "Kerjasama Komuniti", "Kerjasama Komunitas", "La coopération communautaire", "La cooperación comunitaria"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("التعاون يبني المجتمعات القوية! لنتعلّم عن أشكال التعاون.", "Cooperation builds strong communities! Let's learn about forms of cooperation.", "Kerjasama membina komuniti yang kukuh! Jom belajar bentuk-bentuk kerjasama.", "Kerjasama membangun komunitas yang kuat! Ayo pelajari bentuk-bentuk kerjasama.", "La coopération construit des communautés fortes ! Apprenons les formes de coopération.", "¡La cooperación construye comunidades fuertes! Aprendamos sobre las formas de cooperación."),
          vocabulary: [
            {
              id: "g6u1l2v1",
              arabic: "نَتَعَاوَنُ",
              transliteration: "nataʿāwanu",
              translation: t("نَتَعَاوَنُ", "we cooperate", "kita bekerjasama", "kita bekerjasama", "nous coopérons", "cooperamos"),
              emoji: "🤝"
            },
            {
              id: "g6u1l2v2",
              arabic: "نُسَاعِدُ",
              transliteration: "nusāʿidu",
              translation: t("نُسَاعِدُ", "we help", "kita membantu", "kita membantu", "nous aidons", "ayudamos"),
              emoji: "🙌"
            },
            {
              id: "g6u1l2v3",
              arabic: "التَّطَوُّعُ",
              transliteration: "at-taṭawwuʿ",
              translation: t("التَّطَوُّعُ", "volunteering", "kerja sukarela", "sukarela", "le bénévolat", "el voluntariado"),
              emoji: "🌟"
            },
            {
              id: "g6u1l2v4",
              arabic: "الْمَسْؤُولِيَّةُ",
              transliteration: "al-masʾūliyya",
              translation: t("الْمَسْؤُولِيَّةُ", "responsibility", "tanggungjawab", "tanggung jawab", "la responsabilité", "la responsabilidad"),
              emoji: "⚖️"
            },
            {
              id: "g6u1l2v5",
              arabic: "مَعًا",
              transliteration: "maʿan",
              translation: t("مَعًا", "together", "bersama", "bersama", "ensemble", "juntos"),
              emoji: "👨‍👩‍👧‍👦"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g6u1l2e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "التَّطَوُّعُ",
              options: [
                "الْمَسْؤُولِيَّةُ",
                "التَّطَوُّعُ",
                "نَتَعَاوَنُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f31f/512.webp"
            },
            {
              id: "g6u1l2e2",
              type: "mcq",
              skill: "reading",
              prompt: t("ما فائدة التعاون في المجتمع؟", "What is the benefit of cooperation in the community?", "Apa faedah kerjasama dalam komuniti?", "Apa manfaat kerjasama dalam komunitas?", "Quel est le bienfait de la coopération dans la communauté ?", "¿Cuál es el beneficio de la cooperación en la comunidad?"),
              options: [
                "يُقَوِّي الْمُجْتَمَعَ",
                "يُفَرِّقُ النَّاسَ",
                "لَا فَائِدَةَ مِنْهُ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "g6u1l2e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قل كيف تتطوع في مجتمعك", "Say how you volunteer in your community", "Sebut cara anda membuat kerja sukarela", "Sebutkan cara kamu bersukarela di komunitasmu", "Dis comment tu fais du bénévolat dans ta communauté", "Di cómo haces voluntariado en tu comunidad"),
              arabicText: "أَتَطَوَّعُ فِي تَنْظِيفِ الشَّارِعِ وَمُسَاعَدَةِ الْجِيرَانِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "g6u1l2e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا نَتَعَاوَنُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "g6u1l2mcqg6u1l2v3",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"التَّطَوُّعُ\"؟", "What does \"volunteering\" mean?", "Apakah maksud \"kerja sukarela\"?", "Apa arti \"sukarela\"?", "Que signifie \"le bénévolat\" ?", "¿Qué significa \"el voluntariado\"?"),
              arabicText: "التَّطَوُّعُ",
              options: [
                "wisdom",
                "active",
                "volunteering",
                "stress"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f31f/512.webp"
            },
            {
              id: "g6u1l2spellg6u1l2v3",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "التَّطَوُّعُ",
              answer: "التَّطَوُّعُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f31f/512.webp"
            },
            {
              id: "g6u1l2spellg6u1l2v5",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "مَعًا",
              answer: "مَعًا",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468-200d-1f469-200d-1f467-200d-1f466/512.webp"
            },
            {
              id: "g6u1l2writeg6u1l2v3",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"التَّطَوُّعُ\"", "Type the Arabic word for: \"volunteering\"", "Taip perkataan Arab untuk: \"kerja sukarela\"", "Ketik kata Arab untuk: \"sukarela\"", "Tape le mot arabe pour : \"le bénévolat\"", "Escribe la palabra árabe para: \"el voluntariado\""),
              arabicText: "التَّطَوُّعُ",
              answer: "التَّطَوُّعُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f31f/512.webp"
            }
          ]
        },
        {
          id: "g6u1l3",
          unitId: "g6u1",
          gradeId: "g6",
          order: 3,
          title: t("الْمَرَافِقُ الْعَامَّةُ", "Public Facilities", "Kemudahan Awam", "Fasilitas Umum", "Les équipements publics", "Las instalaciones públicas"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("المرافق العامة تخدم الجميع! لنتعلّم أسماءها وكيف نحافظ عليها.", "Public facilities serve everyone! Let's learn their names and how to preserve them.", "Kemudahan awam berkhidmat untuk semua! Jom belajar nama dan cara menjaganya.", "Fasilitas umum melayani semua orang! Ayo pelajari nama-nama dan cara menjaganya.", "Les équipements publics servent tout le monde ! Apprenons leurs noms et comment les préserver.", "¡Las instalaciones públicas sirven a todos! Aprendamos sus nombres y cómo conservarlas."),
          vocabulary: [
            {
              id: "g6u1l3v1",
              arabic: "الْمُسْتَشْفَى",
              transliteration: "al-mustashfā",
              translation: t("الْمُسْتَشْفَى", "hospital", "hospital", "rumah sakit", "l'hôpital", "el hospital"),
              emoji: "🏥"
            },
            {
              id: "g6u1l3v2",
              arabic: "الْمَكْتَبَةُ",
              transliteration: "al-maktaba",
              translation: t("الْمَكْتَبَةُ", "library", "perpustakaan", "perpustakaan", "la bibliothèque", "la biblioteca"),
              emoji: "📚"
            },
            {
              id: "g6u1l3v3",
              arabic: "الْمَلْعَبُ",
              transliteration: "al-malʿab",
              translation: t("الْمَلْعَبُ", "playground/stadium", "padang permainan", "lapangan bermain", "le terrain de jeux", "el campo de juego"),
              emoji: "⚽"
            },
            {
              id: "g6u1l3v4",
              arabic: "الْحَدِيقَةُ الْعَامَّةُ",
              transliteration: "al-ḥadīqatu l-ʿāmma",
              translation: t("الْحَدِيقَةُ الْعَامَّةُ", "public park", "taman awam", "taman umum", "le parc public", "el parque público"),
              emoji: "🌳"
            },
            {
              id: "g6u1l3v5",
              arabic: "نُحَافِظُ",
              transliteration: "nuḥāfiẓu",
              translation: t("نُحَافِظُ", "we preserve", "kita jaga", "kita menjaga", "nous préservons", "preservamos"),
              emoji: "🛡️"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g6u1l3e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الْمَكْتَبَةُ",
              options: [
                "الْمُسْتَشْفَى",
                "الْمَكْتَبَةُ",
                "الْمَلْعَبُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp"
            },
            {
              id: "g6u1l3e2",
              type: "mcq",
              skill: "reading",
              prompt: t("أين نذهب لنقرأ الكتب؟", "Where do we go to read books?", "Ke mana kita pergi untuk membaca buku?", "Ke mana kita pergi untuk membaca buku?", "Où va-t-on pour lire des livres ?", "¿Adónde vamos a leer libros?"),
              options: [
                "الْمَكْتَبَةِ",
                "الْمُسْتَشْفَى",
                "الْمَلْعَبِ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e5/512.webp"
            },
            {
              id: "g6u1l3e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قل كيف تحافظ على المرافق العامة", "Say how you preserve public facilities", "Sebut cara anda menjaga kemudahan awam", "Sebutkan cara kamu menjaga fasilitas umum", "Dis comment tu préserves les équipements publics", "Di cómo preservas las instalaciones públicas"),
              arabicText: "أُحَافِظُ عَلَى الْمَرَافِقِ الْعَامَّةِ بِالنَّظَافَةِ وَالِاهْتِمَامِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e5/512.webp"
            },
            {
              id: "g6u1l3e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا الْمُسْتَشْفَى",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e5/512.webp"
            },
            {
              id: "g6u1l3writeg6u1l3v3",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"الْمَلْعَبُ\"", "Type the Arabic word for: \"playground/stadium\"", "Taip perkataan Arab untuk: \"padang permainan\"", "Ketik kata Arab untuk: \"lapangan bermain\"", "Tape le mot arabe pour : \"le terrain de jeux\"", "Escribe la palabra árabe para: \"el campo de juego\""),
              arabicText: "الْمَلْعَبُ",
              answer: "الْمَلْعَبُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "g6u1l3listeng6u1l3v3",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الْمَلْعَبُ",
              options: [
                "الْمَلْعَبُ",
                "الْمُوسِيقَى التُّرَاثِيَّةُ",
                "الْوَصْفَةُ الْمَوْرُوثَةُ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "g6u1l3speakg6u1l3v1",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "الْمُسْتَشْفَى",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e5/512.webp"
            },
            {
              id: "g6u1l3mcqg6u1l3v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"الْمُسْتَشْفَى\"؟", "What does \"hospital\" mean?", "Apakah maksud \"hospital\"?", "Apa arti \"rumah sakit\"?", "Que signifie \"l'hôpital\" ?", "¿Qué significa \"el hospital\"?"),
              arabicText: "الْمُسْتَشْفَى",
              options: [
                "inherited recipe",
                "environment",
                "hospital",
                "inherited/traditional"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e5/512.webp"
            }
          ]
        },
        {
          id: "g6u1l4",
          unitId: "g6u1",
          gradeId: "g6",
          order: 4,
          title: t("الْأَعْيَادُ الْوَطَنِيَّةُ", "National Celebrations", "Perayaan Kebangsaan", "Perayaan Nasional", "Les fêtes nationales", "Las fiestas nacionales"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("الأعياد الوطنية تجمع المجتمع وتقوّي الانتماء! لنتعلّم كيف نحتفل.", "National celebrations unite the community and strengthen belonging! Let's learn how to celebrate.", "Perayaan kebangsaan menyatukan komuniti! Jom belajar cara meraikannya.", "Perayaan nasional menyatukan komunitas! Ayo pelajari cara merayakannya.", "Les fêtes nationales unissent la communauté ! Apprenons comment célébrer.", "¡Las fiestas nacionales unen a la comunidad! Aprendamos cómo celebrar."),
          vocabulary: [
            {
              id: "g6u1l4v1",
              arabic: "عِيدٌ وَطَنِيٌّ",
              transliteration: "ʿīdun waṭaniyy",
              translation: t("عِيدٌ وَطَنِيٌّ", "national celebration", "perayaan kebangsaan", "perayaan nasional", "fête nationale", "fiesta nacional"),
              emoji: "🎉"
            },
            {
              id: "g6u1l4v2",
              arabic: "نَحْتَفِلُ",
              transliteration: "naḥtafilu",
              translation: t("نَحْتَفِلُ", "we celebrate", "kita meraikan", "kita merayakan", "nous célébrons", "celebramos"),
              emoji: "🎊"
            },
            {
              id: "g6u1l4v3",
              arabic: "الْوَطَنُ",
              transliteration: "al-waṭan",
              translation: t("الْوَطَنُ", "homeland", "tanah air", "tanah air", "la patrie", "la patria"),
              emoji: "🏡"
            },
            {
              id: "g6u1l4v4",
              arabic: "الِانْتِمَاءُ",
              transliteration: "al-intimāʾ",
              translation: t("الِانْتِمَاءُ", "belonging", "perasaan kekitaan", "rasa memiliki", "l'appartenance", "la pertenencia"),
              emoji: "🤲"
            },
            {
              id: "g6u1l4v5",
              arabic: "الْفَخْرُ",
              transliteration: "al-fakhr",
              translation: t("الْفَخْرُ", "pride", "kebanggaan", "kebanggaan", "la fierté", "el orgullo"),
              emoji: "🦁"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g6u1l4e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الِانْتِمَاءُ",
              options: [
                "الْفَخْرُ",
                "الِانْتِمَاءُ",
                "نَحْتَفِلُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f932/512.webp"
            },
            {
              id: "g6u1l4e2",
              type: "mcq",
              skill: "reading",
              prompt: t("لماذا نحتفل بالأعياد الوطنية؟", "Why do we celebrate national occasions?", "Kenapa kita raikan hari kebangsaan?", "Mengapa kita merayakan hari nasional?", "Pourquoi célèbre-t-on les fêtes nationales ?", "¿Por qué celebramos las fiestas nacionales?"),
              options: [
                "لِتَعْزِيزِ الِانْتِمَاءِ وَالْوَحْدَةِ",
                "لِلتَّعْطِيلِ فَقَطْ",
                "بِلَا سَبَبٍ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.webp"
            },
            {
              id: "g6u1l4e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قل كيف تحتفل بالأعياد الوطنية", "Say how you celebrate national occasions", "Sebut cara anda meraikan hari kebangsaan", "Sebutkan cara kamu merayakan hari nasional", "Dis comment tu célèbres les fêtes nationales", "Di cómo celebras las fiestas nacionales"),
              arabicText: "نَحْتَفِلُ بِالْأَعْيَادِ الْوَطَنِيَّةِ بِالتَّجَمُّعِ وَالْغِنَاءِ وَالْفَرَحِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f38a/512.webp"
            },
            {
              id: "g6u1l4e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا عِيدٌ وَطَنِيٌّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.webp"
            },
            {
              id: "g6u1l4listeng6u1l4v5",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الْفَخْرُ",
              options: [
                "الْفَخْرُ",
                "نُحَافِظُ",
                "النَّظَافَةُ الشَّخْصِيَّةُ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f981/512.webp"
            },
            {
              id: "g6u1l4listeng6u1l4v3",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الْوَطَنُ",
              options: [
                "التَّغْذِيَةُ",
                "الْوَطَنُ",
                "نُوَثِّقُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e1/512.webp"
            },
            {
              id: "g6u1l4mcqg6u1l4v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"عِيدٌ وَطَنِيٌّ\"؟", "What does \"national celebration\" mean?", "Apakah maksud \"perayaan kebangsaan\"?", "Apa arti \"perayaan nasional\"?", "Que signifie \"fête nationale\" ?", "¿Qué significa \"fiesta nacional\"?"),
              arabicText: "عِيدٌ وَطَنِيٌّ",
              options: [
                "contentment",
                "playground/stadium",
                "community",
                "national celebration"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.webp"
            },
            {
              id: "g6u1l4spellg6u1l4v3",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "الْوَطَنُ",
              answer: "الْوَطَنُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e1/512.webp"
            }
          ]
        },
        {
          id: "g6u1l5",
          unitId: "g6u1",
          gradeId: "g6",
          order: 5,
          title: t("الْإِسْهَامُ فِي الْمُجْتَمَعِ", "Contributing to the Community", "Sumbangan kepada Komuniti", "Kontribusi kepada Komunitas", "La contribution à la communauté", "La contribución a la comunidad"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("كل فرد يستطيع أن يُسهم في تطوير مجتمعه! لنتعلّم كيف.", "Every individual can contribute to developing their community! Let's learn how.", "Setiap individu boleh menyumbang kepada pembangunan komuniti! Jom belajar caranya.", "Setiap individu dapat berkontribusi pada perkembangan komunitasnya! Ayo pelajari caranya.", "Chaque individu peut contribuer au développement de sa communauté ! Apprenons comment.", "¡Cada individuo puede contribuir al desarrollo de su comunidad! Aprendamos cómo."),
          vocabulary: [
            {
              id: "g6u1l5v1",
              arabic: "أُسْهِمُ",
              transliteration: "ushimu",
              translation: t("أُسْهِمُ", "I contribute", "saya menyumbang", "saya berkontribusi", "je contribue", "contribuyo"),
              emoji: "💡"
            },
            {
              id: "g6u1l5v2",
              arabic: "التَّطَوُّعُ",
              transliteration: "at-taṭawwuʿ",
              translation: t("التَّطَوُّعُ", "volunteering", "kerja sukarela", "sukarela", "le bénévolat", "el voluntariado"),
              emoji: "🌟"
            },
            {
              id: "g6u1l5v3",
              arabic: "الْمُبَادَرَةُ",
              transliteration: "al-mubādara",
              translation: t("الْمُبَادَرَةُ", "initiative", "inisiatif", "inisiatif", "l'initiative", "la iniciativa"),
              emoji: "🚀"
            },
            {
              id: "g6u1l5v4",
              arabic: "أُغَيِّرُ",
              transliteration: "ughayyiru",
              translation: t("أُغَيِّرُ", "I change", "saya mengubah", "saya mengubah", "je change", "cambio"),
              emoji: "🔄"
            },
            {
              id: "g6u1l5v5",
              arabic: "إِيجَابِيٌّ",
              transliteration: "ījābiyy",
              translation: t("إِيجَابِيٌّ", "positive", "positif", "positif", "positif", "positivo"),
              emoji: "✅"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g6u1l5e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الْمُبَادَرَةُ",
              options: [
                "التَّطَوُّعُ",
                "الْمُبَادَرَةُ",
                "إِيجَابِيٌّ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.webp"
            },
            {
              id: "g6u1l5e2",
              type: "mcq",
              skill: "reading",
              prompt: t("كيف يمكن للطالب أن يُسهم في مجتمعه؟", "How can a student contribute to their community?", "Bagaimana pelajar boleh menyumbang kepada komunitinya?", "Bagaimana seorang pelajar dapat berkontribusi kepada komunitasnya?", "Comment un élève peut-il contribuer à sa communauté ?", "¿Cómo puede un estudiante contribuir a su comunidad?"),
              options: [
                "بِالتَّطَوُّعِ وَالْمُبَادَرَاتِ الْإِيجَابِيَّةِ",
                "بِعَدَمِ الِاكْتِرَاثِ",
                "بِالتَّغَيُّبِ الدَّائِمِ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/512.webp"
            },
            {
              id: "g6u1l5e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قل مبادرة يمكنك القيام بها في مجتمعك", "Say an initiative you can do in your community", "Sebut inisiatif yang boleh anda lakukan dalam komuniti", "Sebutkan inisiatif yang dapat kamu lakukan di komunitasmu", "Dis une initiative que tu peux faire dans ta communauté", "Di una iniciativa que puedes hacer en tu comunidad"),
              arabicText: "أَسْتَطِيعُ أَنْ أُبَادِرَ بِتَنْظِيفِ الْحَدِيقَةِ الْعَامَّةِ مَعَ أَصْدِقَائِي",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/512.webp"
            },
            {
              id: "g6u1l5e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا أُسْهِمُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/512.webp"
            },
            {
              id: "g6u1l5mcqg6u1l5v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"أُسْهِمُ\"؟", "What does \"I contribute\" mean?", "Apakah maksud \"saya menyumbang\"?", "Apa arti \"saya berkontribusi\"?", "Que signifie \"je contribue\" ?", "¿Qué significa \"contribuyo\"?"),
              arabicText: "أُسْهِمُ",
              options: [
                "belonging",
                "I contribute",
                "we preserve",
                "contentment"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/512.webp"
            },
            {
              id: "g6u1l5spellg6u1l5v4",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "أُغَيِّرُ",
              answer: "أُغَيِّرُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f504/512.webp"
            },
            {
              id: "g6u1l5speakg6u1l5v2",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "التَّطَوُّعُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f31f/512.webp"
            },
            {
              id: "g6u1l5mcqg6u1l5v4",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"أُغَيِّرُ\"؟", "What does \"I change\" mean?", "Apakah maksud \"saya mengubah\"?", "Apa arti \"saya mengubah\"?", "Que signifie \"je change\" ?", "¿Qué significa \"cambio\"?"),
              arabicText: "أُغَيِّرُ",
              options: [
                "initiative",
                "remembrance of God",
                "I change",
                "together"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f504/512.webp"
            }
          ]
        },
        {
          id: "g6u1l6",
          unitId: "g6u1",
          gradeId: "g6",
          order: 6,
          title: t("الْقِيَادَةُ الْمُجْتَمَعِيَّةُ", "Community Leadership", "Kepimpinan Komuniti", "Kepemimpinan Komunitas", "Le leadership communautaire", "El liderazgo comunitario"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("القائد الجيد يخدم مجتمعه بإخلاص! لنتعلّم صفات القيادة.", "A good leader serves their community faithfully! Let's learn leadership qualities.", "Pemimpin yang baik berkhidmat kepada komunitinya dengan ikhlas! Jom belajar sifat kepimpinan.", "Pemimpin yang baik melayani komunitasnya dengan tulus! Ayo pelajari sifat kepemimpinan.", "Un bon leader sert sa communauté fidèlement ! Apprenons les qualités du leadership.", "¡Un buen líder sirve a su comunidad fielmente! Aprendamos las cualidades del liderazgo."),
          vocabulary: [
            {
              id: "g6u1l6v1",
              arabic: "الْقَائِدُ",
              transliteration: "al-qāʾid",
              translation: t("الْقَائِدُ", "leader", "pemimpin", "pemimpin", "le leader", "el líder"),
              emoji: "👑"
            },
            {
              id: "g6u1l6v2",
              arabic: "الْعَدْلُ",
              transliteration: "al-ʿadl",
              translation: t("الْعَدْلُ", "justice", "keadilan", "keadilan", "la justice", "la justicia"),
              emoji: "⚖️"
            },
            {
              id: "g6u1l6v3",
              arabic: "الصِّدْقُ",
              transliteration: "aṣ-ṣidq",
              translation: t("الصِّدْقُ", "honesty", "kejujuran", "kejujuran", "l'honnêteté", "la honestidad"),
              emoji: "💎"
            },
            {
              id: "g6u1l6v4",
              arabic: "يَخْدُمُ",
              transliteration: "yakhdimu",
              translation: t("يَخْدُمُ", "serves", "berkhidmat", "melayani", "sert", "sirve"),
              emoji: "🤲"
            },
            {
              id: "g6u1l6v5",
              arabic: "الثِّقَةُ",
              transliteration: "ath-thiqa",
              translation: t("الثِّقَةُ", "trust/confidence", "kepercayaan", "kepercayaan", "la confiance", "la confianza"),
              emoji: "🤝"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g6u1l6e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الْعَدْلُ",
              options: [
                "الصِّدْقُ",
                "الْعَدْلُ",
                "الثِّقَةُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2696-fe0f/512.webp"
            },
            {
              id: "g6u1l6e2",
              type: "mcq",
              skill: "reading",
              prompt: t("ما أهم صفة في القائد الجيد؟", "What is the most important quality in a good leader?", "Apakah sifat terpenting dalam pemimpin yang baik?", "Apa sifat terpenting dalam pemimpin yang baik?", "Quelle est la qualité la plus importante d'un bon leader ?", "¿Cuál es la cualidad más importante de un buen líder?"),
              options: [
                "الْعَدْلُ وَالصِّدْقُ",
                "الْقَسْوَةُ",
                "الْكَذِبُ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f451/512.webp"
            },
            {
              id: "g6u1l6e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قل الصفات التي تريدها في قائد مجتمعك", "Say the qualities you want in your community leader", "Sebut sifat yang anda inginkan dalam pemimpin komuniti", "Sebutkan sifat yang kamu inginkan pada pemimpin komunitasmu", "Dis les qualités que tu veux dans le leader de ta communauté", "Di las cualidades que quieres en el líder de tu comunidad"),
              arabicText: "أُرِيدُ قَائِدًا عَادِلًا وَصَادِقًا يَخْدُمُ مُجْتَمَعَهُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f932/512.webp"
            },
            {
              id: "g6u1l6e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا الْقَائِدُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f451/512.webp"
            },
            {
              id: "g6u1l6listeng6u1l6v5",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الثِّقَةُ",
              options: [
                "الطَّاقَةُ الشَّمْسِيَّةُ",
                "الثِّقَةُ",
                "إِعَادَةُ التَّدْوِيرِ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "g6u1l6writeg6u1l6v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"الْقَائِدُ\"", "Type the Arabic word for: \"leader\"", "Taip perkataan Arab untuk: \"pemimpin\"", "Ketik kata Arab untuk: \"pemimpin\"", "Tape le mot arabe pour : \"le leader\"", "Escribe la palabra árabe para: \"el líder\""),
              arabicText: "الْقَائِدُ",
              answer: "الْقَائِدُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f451/512.webp"
            },
            {
              id: "g6u1l6mcqg6u1l6v2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"الْعَدْلُ\"؟", "What does \"justice\" mean?", "Apakah maksud \"keadilan\"?", "Apa arti \"keadilan\"?", "Que signifie \"la justice\" ?", "¿Qué significa \"la justicia\"?"),
              arabicText: "الْعَدْلُ",
              options: [
                "justice",
                "inherited/traditional",
                "citizen",
                "we protect"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2696-fe0f/512.webp"
            },
            {
              id: "g6u1l6writeg6u1l6v4",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"يَخْدُمُ\"", "Type the Arabic word for: \"serves\"", "Taip perkataan Arab untuk: \"berkhidmat\"", "Ketik kata Arab untuk: \"melayani\"", "Tape le mot arabe pour : \"sert\"", "Escribe la palabra árabe para: \"sirve\""),
              arabicText: "يَخْدُمُ",
              answer: "يَخْدُمُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f932/512.webp"
            }
          ]
        },
        {
          id: "g6u1review",
          unitId: "g6u1",
          gradeId: "g6",
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
              id: "g6u1l1v1",
              arabic: "الْمُجْتَمَعُ",
              transliteration: "al-mujtamaʿ",
              translation: t("الْمُجْتَمَعُ", "community", "komuniti", "komunitas", "la communauté", "la comunidad"),
              emoji: "👥"
            },
            {
              id: "g6u1l1v2",
              arabic: "الْمُوَاطِنُ",
              transliteration: "al-muwāṭin",
              translation: t("الْمُوَاطِنُ", "citizen", "warganegara", "warga negara", "le citoyen", "el ciudadano"),
              emoji: "🧑"
            },
            {
              id: "g6u1l1v3",
              arabic: "الشُّرْطِيُّ",
              transliteration: "ash-shurṭiyy",
              translation: t("الشُّرْطِيُّ", "police officer", "polis", "polisi", "le policier", "el policía"),
              emoji: "👮"
            },
            {
              id: "g6u1l1v4",
              arabic: "الطَّبِيبُ",
              transliteration: "aṭ-ṭabīb",
              translation: t("الطَّبِيبُ", "doctor", "doktor", "dokter", "le médecin", "el médico"),
              emoji: "👨‍⚕️"
            },
            {
              id: "g6u1l1v5",
              arabic: "الْمُعَلِّمُ",
              transliteration: "al-muʿallim",
              translation: t("الْمُعَلِّمُ", "teacher", "guru", "guru", "le professeur", "el maestro"),
              emoji: "👨‍🏫"
            },
            {
              id: "g6u1l2v1",
              arabic: "نَتَعَاوَنُ",
              transliteration: "nataʿāwanu",
              translation: t("نَتَعَاوَنُ", "we cooperate", "kita bekerjasama", "kita bekerjasama", "nous coopérons", "cooperamos"),
              emoji: "🤝"
            },
            {
              id: "g6u1l2v2",
              arabic: "نُسَاعِدُ",
              transliteration: "nusāʿidu",
              translation: t("نُسَاعِدُ", "we help", "kita membantu", "kita membantu", "nous aidons", "ayudamos"),
              emoji: "🙌"
            },
            {
              id: "g6u1l2v3",
              arabic: "التَّطَوُّعُ",
              transliteration: "at-taṭawwuʿ",
              translation: t("التَّطَوُّعُ", "volunteering", "kerja sukarela", "sukarela", "le bénévolat", "el voluntariado"),
              emoji: "🌟"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g6u1reviewwriteg6u1l2v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"نَتَعَاوَنُ\"", "Type the Arabic word for: \"we cooperate\"", "Taip perkataan Arab untuk: \"kita bekerjasama\"", "Ketik kata Arab untuk: \"kita bekerjasama\"", "Tape le mot arabe pour : \"nous coopérons\"", "Escribe la palabra árabe para: \"cooperamos\""),
              arabicText: "نَتَعَاوَنُ",
              answer: "نَتَعَاوَنُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "g6u1reviewmcqg6u1l1v5",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"الْمُعَلِّمُ\"؟", "What does \"teacher\" mean?", "Apakah maksud \"guru\"?", "Apa arti \"guru\"?", "Que signifie \"le professeur\" ?", "¿Qué significa \"el maestro\"?"),
              arabicText: "الْمُعَلِّمُ",
              options: [
                "teacher",
                "prevention",
                "heritage",
                "identity"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468-200d-1f3eb/512.webp"
            },
            {
              id: "g6u1reviewlisteng6u1l1v4",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الطَّبِيبُ",
              options: [
                "نَسْتَرِيحُ",
                "الطَّبِيبُ",
                "نُطْفِئُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468-200d-2695-fe0f/512.webp"
            },
            {
              id: "g6u1reviewspellg6u1l2v3",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "التَّطَوُّعُ",
              answer: "التَّطَوُّعُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f31f/512.webp"
            },
            {
              id: "g6u1reviewmcqg6u1l2v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"نَتَعَاوَنُ\"؟", "What does \"we cooperate\" mean?", "Apakah maksud \"kita bekerjasama\"?", "Apa arti \"kita bekerjasama\"?", "Que signifie \"nous coopérons\" ?", "¿Qué significa \"cooperamos\"?"),
              arabicText: "نَتَعَاوَنُ",
              options: [
                "trust/confidence",
                "future generations",
                "active",
                "we cooperate"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "g6u1reviewwriteg6u1l1v5",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"الْمُعَلِّمُ\"", "Type the Arabic word for: \"teacher\"", "Taip perkataan Arab untuk: \"guru\"", "Ketik kata Arab untuk: \"guru\"", "Tape le mot arabe pour : \"le professeur\"", "Escribe la palabra árabe para: \"el maestro\""),
              arabicText: "الْمُعَلِّمُ",
              answer: "الْمُعَلِّمُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468-200d-1f3eb/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "g6u2",
      gradeId: "g6",
      order: 2,
      title: t("الْبِيئَةُ", "Environment", "Alam Sekitar", "Lingkungan", "L'environnement", "El medio ambiente"),
      theme: "environment",
      lessons: [
        {
          id: "g6u2l1",
          unitId: "g6u2",
          gradeId: "g6",
          order: 1,
          title: t("نُحَافِظُ عَلَى الْبِيئَةِ", "We Preserve the Environment", "Kita Jaga Alam Sekitar", "Kita Jaga Lingkungan", "Nous préservons l'environnement", "Preservamos el medio ambiente"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("البيئة النظيفة تعني حياة صحية! لنتعلّم كيف نحميها.", "A clean environment means a healthy life! Let's learn how to protect it.", "Alam sekitar yang bersih bermakna kehidupan yang sihat! Jom belajar cara melindunginya.", "Lingkungan yang bersih berarti kehidupan yang sehat! Ayo pelajari cara melindunginya.", "Un environnement propre signifie une vie saine ! Apprenons à le protéger.", "¡Un medio ambiente limpio significa una vida sana! Aprendamos a protegerlo."),
          vocabulary: [
            {
              id: "g6u2l1v1",
              arabic: "الْبِيئَةُ",
              transliteration: "al-bīʾa",
              translation: t("الْبِيئَةُ", "environment", "alam sekitar", "lingkungan", "l'environnement", "el medio ambiente"),
              emoji: "🌍"
            },
            {
              id: "g6u2l1v2",
              arabic: "نُحَافِظُ",
              transliteration: "nuḥāfiẓu",
              translation: t("نُحَافِظُ", "we preserve", "kita jaga", "kita jaga", "nous préservons", "preservamos"),
              emoji: "🛡️"
            },
            {
              id: "g6u2l1v3",
              arabic: "التَّلَوُّثُ",
              transliteration: "at-talawwuth",
              translation: t("التَّلَوُّثُ", "pollution", "pencemaran", "pencemaran", "la pollution", "la contaminación"),
              emoji: "🏭"
            },
            {
              id: "g6u2l1v4",
              arabic: "النَّظَافَةُ",
              transliteration: "an-naẓāfa",
              translation: t("النَّظَافَةُ", "cleanliness", "kebersihan", "kebersihan", "la propreté", "la limpieza"),
              emoji: "✨"
            },
            {
              id: "g6u2l1v5",
              arabic: "نَزْرَعُ",
              transliteration: "nazraʿu",
              translation: t("نَزْرَعُ", "we plant", "kita tanam", "kita tanam", "nous plantons", "plantamos"),
              emoji: "🌱"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g6u2l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "التَّلَوُّثُ",
              options: [
                "النَّظَافَةُ",
                "التَّلَوُّثُ",
                "نَزْرَعُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3ed/512.webp"
            },
            {
              id: "g6u2l1e2",
              type: "mcq",
              skill: "reading",
              prompt: t("ما الذي يسبب تلوث البيئة؟", "What causes environmental pollution?", "Apa yang menyebabkan pencemaran alam sekitar?", "Apa yang menyebabkan pencemaran lingkungan?", "Qu'est-ce qui provoque la pollution de l'environnement ?", "¿Qué causa la contaminación medioambiental?"),
              options: [
                "رَمْيُ الْمُخَلَّفَاتِ فِي غَيْرِ أَمَاكِنِهَا",
                "زَرْعُ الْأَشْجَارِ",
                "النَّظَافَةُ الدَّائِمَةُ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f30d/512.webp"
            },
            {
              id: "g6u2l1e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قل كيف تحافظ على بيئتك", "Say how you preserve your environment", "Sebut cara anda menjaga alam sekitar", "Sebutkan cara kamu menjaga lingkunganmu", "Dis comment tu préserves ton environnement", "Di cómo preservas tu medio ambiente"),
              arabicText: "أُحَافِظُ عَلَى الْبِيئَةِ بِعَدَمِ رَمْيِ الْقُمَامَةِ وَزَرْعِ الْأَشْجَارِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f30d/512.webp"
            },
            {
              id: "g6u2l1e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا الْبِيئَةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f30d/512.webp"
            },
            {
              id: "g6u2l1mcqg6u2l1v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"الْبِيئَةُ\"؟", "What does \"environment\" mean?", "Apakah maksud \"alam sekitar\"?", "Apa arti \"lingkungan\"?", "Que signifie \"l'environnement\" ?", "¿Qué significa \"el medio ambiente\"?"),
              arabicText: "الْبِيئَةُ",
              options: [
                "we help",
                "environment",
                "civilisation",
                "cleanliness"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f30d/512.webp"
            },
            {
              id: "g6u2l1mcqg6u2l1v2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"نُحَافِظُ\"؟", "What does \"we preserve\" mean?", "Apakah maksud \"kita jaga\"?", "Apa arti \"kita jaga\"?", "Que signifie \"nous préservons\" ?", "¿Qué significa \"preservamos\"?"),
              arabicText: "نُحَافِظُ",
              options: [
                "we preserve",
                "stress",
                "energy",
                "we help"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6e1-fe0f/512.webp"
            },
            {
              id: "g6u2l1listeng6u2l1v1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الْبِيئَةُ",
              options: [
                "الْفِيتَامِينَاتُ",
                "الشُّرْطِيُّ",
                "الْبِيئَةُ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f30d/512.webp"
            },
            {
              id: "g6u2l1mcqg6u2l1v3",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"التَّلَوُّثُ\"؟", "What does \"pollution\" mean?", "Apakah maksud \"pencemaran\"?", "Apa arti \"pencemaran\"?", "Que signifie \"la pollution\" ?", "¿Qué significa \"la contaminación\"?"),
              arabicText: "التَّلَوُّثُ",
              options: [
                "I change",
                "we rest",
                "community",
                "pollution"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3ed/512.webp"
            }
          ]
        },
        {
          id: "g6u2l2",
          unitId: "g6u2",
          gradeId: "g6",
          order: 2,
          title: t("الطَّاقَةُ وَالتَّرْشِيدُ", "Energy and Conservation", "Tenaga dan Penjimatan", "Energi dan Konservasi", "L'énergie et l'économie", "La energía y la conservación"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("ترشيد الطاقة مسؤوليتنا تجاه الأجيال القادمة! لنتعلّم كيف.", "Conserving energy is our responsibility towards future generations! Let's learn how.", "Menjimatkan tenaga adalah tanggungjawab kita kepada generasi akan datang! Jom belajar caranya.", "Menghemat energi adalah tanggung jawab kita kepada generasi mendatang! Ayo pelajari caranya.", "Économiser l'énergie est notre responsabilité envers les générations futures ! Apprenons comment.", "¡Conservar energía es nuestra responsabilidad hacia las generaciones futuras! Aprendamos cómo."),
          vocabulary: [
            {
              id: "g6u2l2v1",
              arabic: "الطَّاقَةُ",
              transliteration: "aṭ-ṭāqa",
              translation: t("الطَّاقَةُ", "energy", "tenaga", "energi", "l'énergie", "la energía"),
              emoji: "⚡"
            },
            {
              id: "g6u2l2v2",
              arabic: "نُرَشِّدُ",
              transliteration: "nurashshshidu",
              translation: t("نُرَشِّدُ", "we conserve", "kita jimat", "kita hemat", "nous économisons", "conservamos"),
              emoji: "💡"
            },
            {
              id: "g6u2l2v3",
              arabic: "الطَّاقَةُ الشَّمْسِيَّةُ",
              transliteration: "aṭ-ṭāqatu sh-shamsiyya",
              translation: t("الطَّاقَةُ الشَّمْسِيَّةُ", "solar energy", "tenaga solar", "energi surya", "l'énergie solaire", "la energía solar"),
              emoji: "☀️"
            },
            {
              id: "g6u2l2v4",
              arabic: "نُطْفِئُ",
              transliteration: "nuṭfiʾu",
              translation: t("نُطْفِئُ", "we switch off", "kita padamkan", "kita matikan", "nous éteignons", "apagamos"),
              emoji: "🔌"
            },
            {
              id: "g6u2l2v5",
              arabic: "مُسْتَدَامٌ",
              transliteration: "mustadām",
              translation: t("مُسْتَدَامٌ", "sustainable", "lestari", "berkelanjutan", "durable", "sostenible"),
              emoji: "♻️"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g6u2l2e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الطَّاقَةُ الشَّمْسِيَّةُ",
              options: [
                "الطَّاقَةُ",
                "الطَّاقَةُ الشَّمْسِيَّةُ",
                "مُسْتَدَامٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26a1/512.webp"
            },
            {
              id: "g6u2l2e2",
              type: "mcq",
              skill: "reading",
              prompt: t("كيف نُرشِّد استهلاك الكهرباء؟", "How do we conserve electricity?", "Bagaimana kita menjimatkan elektrik?", "Bagaimana kita menghemat listrik?", "Comment économise-t-on l'électricité ?", "¿Cómo conservamos la electricidad?"),
              options: [
                "نُطْفِئُ الْأَضْوَاءَ عِنْدَ الْخُرُوجِ",
                "نَتْرُكُ الْأَجْهِزَةَ تَعْمَلُ دَائِمًا",
                "نَفْتَحُ النَّوَافِذَ فَقَطْ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26a1/512.webp"
            },
            {
              id: "g6u2l2e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قل طريقة لترشيد الطاقة في منزلك", "Say a way to conserve energy in your home", "Sebut cara menjimatkan tenaga di rumah anda", "Sebutkan cara menghemat energi di rumahmu", "Dis une façon d'économiser l'énergie chez toi", "Di una forma de conservar energía en tu casa"),
              arabicText: "أُطْفِئُ الْأَنْوَارَ وَأَفْصِلُ الْأَجْهِزَةَ الْكَهْرَبَائِيَّةَ عِنْدَ عَدَمِ الِاسْتِخْدَامِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26a1/512.webp"
            },
            {
              id: "g6u2l2e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا الطَّاقَةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26a1/512.webp"
            },
            {
              id: "g6u2l2spellg6u2l2v5",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "مُسْتَدَامٌ",
              answer: "مُسْتَدَامٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/267b-fe0f/512.webp"
            },
            {
              id: "g6u2l2mcqg6u2l2v4",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"نُطْفِئُ\"؟", "What does \"we switch off\" mean?", "Apakah maksud \"kita padamkan\"?", "Apa arti \"kita matikan\"?", "Que signifie \"nous éteignons\" ?", "¿Qué significa \"apagamos\"?"),
              arabicText: "نُطْفِئُ",
              options: [
                "prevention",
                "continuity/consistency",
                "balance",
                "we switch off"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f50c/512.webp"
            },
            {
              id: "g6u2l2writeg6u2l2v2",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"نُرَشِّدُ\"", "Type the Arabic word for: \"we conserve\"", "Taip perkataan Arab untuk: \"kita jimat\"", "Ketik kata Arab untuk: \"kita hemat\"", "Tape le mot arabe pour : \"nous économisons\"", "Escribe la palabra árabe para: \"conservamos\""),
              arabicText: "نُرَشِّدُ",
              answer: "نُرَشِّدُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/512.webp"
            },
            {
              id: "g6u2l2speakg6u2l2v1",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "الطَّاقَةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26a1/512.webp"
            }
          ]
        },
        {
          id: "g6u2l3",
          unitId: "g6u2",
          gradeId: "g6",
          order: 3,
          title: t("إِعَادَةُ التَّدْوِيرِ", "Recycling", "Kitar Semula", "Daur Ulang", "Le recyclage", "El reciclaje"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("إعادة التدوير تحمي الأرض وتُقلِّل النفايات! لنتعلّم عنها.", "Recycling protects the earth and reduces waste! Let's learn about it.", "Kitar semula melindungi bumi dan mengurangkan sisa! Jom belajar tentangnya.", "Daur ulang melindungi bumi dan mengurangi limbah! Ayo pelajari tentangnya.", "Le recyclage protège la terre et réduit les déchets ! Apprenons-en davantage.", "¡El reciclaje protege la tierra y reduce los residuos! Aprendamos sobre ello."),
          vocabulary: [
            {
              id: "g6u2l3v1",
              arabic: "إِعَادَةُ التَّدْوِيرِ",
              transliteration: "iʿādatu t-tadwīr",
              translation: t("إِعَادَةُ التَّدْوِيرِ", "recycling", "kitar semula", "daur ulang", "le recyclage", "el reciclaje"),
              emoji: "♻️"
            },
            {
              id: "g6u2l3v2",
              arabic: "النِّفَايَاتُ",
              transliteration: "an-nifāyāt",
              translation: t("النِّفَايَاتُ", "waste", "sisa/sampah", "sampah", "les déchets", "los residuos"),
              emoji: "🗑️"
            },
            {
              id: "g6u2l3v3",
              arabic: "الزُّجَاجُ",
              transliteration: "az-zujāj",
              translation: t("الزُّجَاجُ", "glass", "kaca", "kaca", "le verre", "el vidrio"),
              emoji: "🫙"
            },
            {
              id: "g6u2l3v4",
              arabic: "الْوَرَقُ",
              transliteration: "al-waraq",
              translation: t("الْوَرَقُ", "paper", "kertas", "kertas", "le papier", "el papel"),
              emoji: "📄"
            },
            {
              id: "g6u2l3v5",
              arabic: "نُفَرِّزُ",
              transliteration: "nufarrizu",
              translation: t("نُفَرِّزُ", "we sort", "kita asingkan", "kita pilah", "nous trions", "clasificamos"),
              emoji: "🗂️"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g6u2l3e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "نُفَرِّزُ",
              options: [
                "النِّفَايَاتُ",
                "نُفَرِّزُ",
                "الزُّجَاجُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f5c2-fe0f/512.webp"
            },
            {
              id: "g6u2l3e2",
              type: "mcq",
              skill: "reading",
              prompt: t("لماذا نُعِيد تدوير النفايات؟", "Why do we recycle waste?", "Kenapa kita kitar semula sisa?", "Mengapa kita mendaur ulang sampah?", "Pourquoi recycle-t-on les déchets ?", "¿Por qué reciclamos los residuos?"),
              options: [
                "لِحِمَايَةِ الْبِيئَةِ وَتَقْلِيلِ التَّلَوُّثِ",
                "لِزِيَادَةِ النِّفَايَاتِ",
                "لَا سَبَبَ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/267b-fe0f/512.webp"
            },
            {
              id: "g6u2l3e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قل كيف تُعِيد التدوير في مدرستك", "Say how you recycle at school", "Sebut cara anda kitar semula di sekolah", "Sebutkan cara kamu mendaur ulang di sekolah", "Dis comment tu recycles à l'école", "Di cómo reciclas en tu escuela"),
              arabicText: "نُفَرِّزُ الْوَرَقَ وَالزُّجَاجَ وَنَضَعُهُمَا فِي صَنَادِيقِ إِعَادَةِ التَّدْوِيرِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f5c2-fe0f/512.webp"
            },
            {
              id: "g6u2l3e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا إِعَادَةُ التَّدْوِيرِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/267b-fe0f/512.webp"
            },
            {
              id: "g6u2l3speakg6u2l3v2",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "النِّفَايَاتُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f5d1-fe0f/512.webp"
            },
            {
              id: "g6u2l3spellg6u2l3v5",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "نُفَرِّزُ",
              answer: "نُفَرِّزُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f5c2-fe0f/512.webp"
            },
            {
              id: "g6u2l3speakg6u2l3v5",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "نُفَرِّزُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f5c2-fe0f/512.webp"
            },
            {
              id: "g6u2l3writeg6u2l3v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"إِعَادَةُ التَّدْوِيرِ\"", "Type the Arabic word for: \"recycling\"", "Taip perkataan Arab untuk: \"kitar semula\"", "Ketik kata Arab untuk: \"daur ulang\"", "Tape le mot arabe pour : \"le recyclage\"", "Escribe la palabra árabe para: \"el reciclaje\""),
              arabicText: "إِعَادَةُ التَّدْوِيرِ",
              answer: "إِعَادَةُ التَّدْوِيرِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/267b-fe0f/512.webp"
            }
          ]
        },
        {
          id: "g6u2l4",
          unitId: "g6u2",
          gradeId: "g6",
          order: 4,
          title: t("الطَّبِيعَةُ وَالْمَحِيطُ", "Nature and Surroundings", "Alam Semula Jadi", "Alam dan Lingkungan", "La nature et l'environnement", "La naturaleza y el entorno"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("الطبيعة هبة عظيمة علينا الحفاظ عليها! لنتعلّم عن جمالها.", "Nature is a great gift we must preserve! Let's learn about its beauty.", "Alam semula jadi adalah kurniaan yang besar yang perlu kita jaga! Jom belajar tentang keindahannya.", "Alam adalah anugerah besar yang harus kita jaga! Ayo pelajari tentang keindahannya.", "La nature est un grand don que nous devons préserver ! Apprenons sa beauté.", "¡La naturaleza es un gran regalo que debemos preservar! Aprendamos sobre su belleza."),
          vocabulary: [
            {
              id: "g6u2l4v1",
              arabic: "الْغَابَةُ",
              transliteration: "al-ghāba",
              translation: t("الْغَابَةُ", "forest", "hutan", "hutan", "la forêt", "el bosque"),
              emoji: "🌲"
            },
            {
              id: "g6u2l4v2",
              arabic: "النَّهْرُ",
              transliteration: "an-nahr",
              translation: t("النَّهْرُ", "river", "sungai", "sungai", "la rivière", "el río"),
              emoji: "🏞️"
            },
            {
              id: "g6u2l4v3",
              arabic: "الْجَبَلُ",
              transliteration: "al-jabal",
              translation: t("الْجَبَلُ", "mountain", "gunung", "gunung", "la montagne", "la montaña"),
              emoji: "⛰️"
            },
            {
              id: "g6u2l4v4",
              arabic: "الْبَحْرُ",
              transliteration: "al-baḥr",
              translation: t("الْبَحْرُ", "sea", "laut", "laut", "la mer", "el mar"),
              emoji: "🌊"
            },
            {
              id: "g6u2l4v5",
              arabic: "نَحْمِي",
              transliteration: "naḥmī",
              translation: t("نَحْمِي", "we protect", "kita lindungi", "kita lindungi", "nous protégeons", "protegemos"),
              emoji: "🛡️"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g6u2l4e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الْغَابَةُ",
              options: [
                "النَّهْرُ",
                "الْغَابَةُ",
                "الْجَبَلُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f332/512.webp"
            },
            {
              id: "g6u2l4e2",
              type: "mcq",
              skill: "reading",
              prompt: t("ما الذي يحمي الغابات من الاندثار؟", "What protects forests from disappearing?", "Apa yang melindungi hutan dari kepupusan?", "Apa yang melindungi hutan dari kepunahan?", "Qu'est-ce qui protège les forêts de la disparition ?", "¿Qué protege los bosques de la desaparición?"),
              options: [
                "الزِّرَاعَةُ وَالْحِمَايَةُ",
                "قَطْعُ الْأَشْجَارِ",
                "إِشْعَالُ النِّيرَانِ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f332/512.webp"
            },
            {
              id: "g6u2l4e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("صف مشهدًا طبيعيًا جميلًا رأيته", "Describe a beautiful nature scene you saw", "Huraikan pemandangan alam semula jadi yang indah yang anda lihat", "Gambarkan pemandangan alam indah yang pernah kamu lihat", "Décris un beau paysage naturel que tu as vu", "Describe un hermoso paisaje natural que hayas visto"),
              arabicText: "رَأَيْتُ غَابَةً خَضْرَاءَ بِجَانِبِ نَهْرٍ جَمِيلٍ وَشَعَرْتُ بِالسَّعَادَةِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f332/512.webp"
            },
            {
              id: "g6u2l4e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا الْغَابَةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f332/512.webp"
            },
            {
              id: "g6u2l4speakg6u2l4v5",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "نَحْمِي",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6e1-fe0f/512.webp"
            },
            {
              id: "g6u2l4spellg6u2l4v2",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "النَّهْرُ",
              answer: "النَّهْرُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3de-fe0f/512.webp"
            },
            {
              id: "g6u2l4listeng6u2l4v2",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "النَّهْرُ",
              options: [
                "نَشِيطٌ",
                "التَّوَازُنُ",
                "النَّهْرُ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3de-fe0f/512.webp"
            },
            {
              id: "g6u2l4mcqg6u2l4v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"الْغَابَةُ\"؟", "What does \"forest\" mean?", "Apakah maksud \"hutan\"?", "Apa arti \"hutan\"?", "Que signifie \"la forêt\" ?", "¿Qué significa \"el bosque\"?"),
              arabicText: "الْغَابَةُ",
              options: [
                "fresh/clean air",
                "forest",
                "vaccine",
                "volunteering"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f332/512.webp"
            }
          ]
        },
        {
          id: "g6u2l5",
          unitId: "g6u2",
          gradeId: "g6",
          order: 5,
          title: t("الْمَاءُ ثَرْوَةٌ", "Water is Wealth", "Air Adalah Kekayaan", "Air Adalah Kekayaan", "L'eau est une richesse", "El agua es riqueza"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("الماء أساس الحياة ويجب الحفاظ عليه! لنتعلّم أهمية الماء.", "Water is the basis of life and must be preserved! Let's learn the importance of water.", "Air adalah asas kehidupan dan mesti dijaga! Jom belajar kepentingan air.", "Air adalah dasar kehidupan dan harus dijaga! Ayo pelajari pentingnya air.", "L'eau est la base de la vie et doit être préservée ! Apprenons l'importance de l'eau.", "¡El agua es la base de la vida y debe preservarse! Aprendamos la importancia del agua."),
          vocabulary: [
            {
              id: "g6u2l5v1",
              arabic: "الْمَاءُ",
              transliteration: "al-māʾ",
              translation: t("الْمَاءُ", "water", "air", "air", "l'eau", "el agua"),
              emoji: "💧"
            },
            {
              id: "g6u2l5v2",
              arabic: "نُوَفِّرُ",
              transliteration: "nuwaffiru",
              translation: t("نُوَفِّرُ", "we save", "kita simpan/jimat", "kita hemat", "nous économisons", "ahorramos"),
              emoji: "💰"
            },
            {
              id: "g6u2l5v3",
              arabic: "التَّبْذِيرُ",
              transliteration: "at-tabdhīr",
              translation: t("التَّبْذِيرُ", "waste", "pembaziran", "pemborosan", "le gaspillage", "el desperdicio"),
              emoji: "🚫"
            },
            {
              id: "g6u2l5v4",
              arabic: "نَظِيفٌ",
              transliteration: "naẓīf",
              translation: t("نَظِيفٌ", "clean", "bersih", "bersih", "propre", "limpio"),
              emoji: "✨"
            },
            {
              id: "g6u2l5v5",
              arabic: "ثَرْوَةٌ",
              transliteration: "tharwa",
              translation: t("ثَرْوَةٌ", "wealth/resource", "kekayaan", "kekayaan", "richesse", "riqueza"),
              emoji: "🌊"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g6u2l5e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "التَّبْذِيرُ",
              options: [
                "نُوَفِّرُ",
                "التَّبْذِيرُ",
                "ثَرْوَةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6ab/512.webp"
            },
            {
              id: "g6u2l5e2",
              type: "mcq",
              skill: "reading",
              prompt: t("كيف نوفّر الماء في حياتنا اليومية؟", "How do we save water in our daily lives?", "Bagaimana kita menjimatkan air dalam kehidupan harian?", "Bagaimana kita menghemat air dalam kehidupan sehari-hari?", "Comment économise-t-on l'eau au quotidien ?", "¿Cómo ahorramos agua en nuestra vida diaria?"),
              options: [
                "بِإِغْلَاقِ الصُّنْبُورِ عِنْدَ عَدَمِ الِاسْتِخْدَامِ",
                "بِتَرْكِ الصُّنْبُورِ مَفْتُوحًا",
                "بِاسْتِخْدَامِ مَاءٍ أَكْثَرَ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a7/512.webp"
            },
            {
              id: "g6u2l5e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قل ثلاث طرق لتوفير الماء", "Say three ways to save water", "Sebut tiga cara menjimatkan air", "Sebutkan tiga cara menghemat air", "Dis trois façons d'économiser l'eau", "Di tres formas de ahorrar agua"),
              arabicText: "نُوَفِّرُ الْمَاءَ بِإِغْلَاقِ الصُّنْبُورِ وَعَدَمِ التَّبْذِيرِ وَإِصْلَاحِ التَّسَرُّبَاتِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4b0/512.webp"
            },
            {
              id: "g6u2l5e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا الْمَاءُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a7/512.webp"
            },
            {
              id: "g6u2l5writeg6u2l5v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"الْمَاءُ\"", "Type the Arabic word for: \"water\"", "Taip perkataan Arab untuk: \"air\"", "Ketik kata Arab untuk: \"air\"", "Tape le mot arabe pour : \"l'eau\"", "Escribe la palabra árabe para: \"el agua\""),
              arabicText: "الْمَاءُ",
              answer: "الْمَاءُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a7/512.webp"
            },
            {
              id: "g6u2l5speakg6u2l5v1",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "الْمَاءُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a7/512.webp"
            },
            {
              id: "g6u2l5writeg6u2l5v2",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"نُوَفِّرُ\"", "Type the Arabic word for: \"we save\"", "Taip perkataan Arab untuk: \"kita simpan/jimat\"", "Ketik kata Arab untuk: \"kita hemat\"", "Tape le mot arabe pour : \"nous économisons\"", "Escribe la palabra árabe para: \"ahorramos\""),
              arabicText: "نُوَفِّرُ",
              answer: "نُوَفِّرُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4b0/512.webp"
            },
            {
              id: "g6u2l5spellg6u2l5v3",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "التَّبْذِيرُ",
              answer: "التَّبْذِيرُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6ab/512.webp"
            }
          ]
        },
        {
          id: "g6u2l6",
          unitId: "g6u2",
          gradeId: "g6",
          order: 6,
          title: t("الزِّرَاعَةُ وَالتَّشْجِيرُ", "Farming and Planting Trees", "Pertanian dan Penanaman Pokok", "Pertanian dan Penanaman Pohon", "L'agriculture et le reboisement", "La agricultura y la reforestación"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("زراعة الأشجار تجمّل البيئة وتنقّي الهواء! لنتعلّم عن الزراعة.", "Planting trees beautifies the environment and purifies the air! Let's learn about farming.", "Menanam pokok memperindah alam dan membersihkan udara! Jom belajar tentang pertanian.", "Menanam pohon memperindah lingkungan dan membersihkan udara! Ayo pelajari tentang pertanian.", "Planter des arbres embellit l'environnement et purifie l'air ! Apprenons l'agriculture.", "¡Plantar árboles embellece el medio ambiente y purifica el aire! Aprendamos sobre la agricultura."),
          vocabulary: [
            {
              id: "g6u2l6v1",
              arabic: "الزِّرَاعَةُ",
              transliteration: "az-zirāʿa",
              translation: t("الزِّرَاعَةُ", "farming/agriculture", "pertanian", "pertanian", "l'agriculture", "la agricultura"),
              emoji: "🌾"
            },
            {
              id: "g6u2l6v2",
              arabic: "نَزْرَعُ",
              transliteration: "nazraʿu",
              translation: t("نَزْرَعُ", "we plant", "kita tanam", "kita tanam", "nous plantons", "plantamos"),
              emoji: "🌱"
            },
            {
              id: "g6u2l6v3",
              arabic: "الشَّجَرَةُ",
              transliteration: "ash-shajara",
              translation: t("الشَّجَرَةُ", "tree", "pokok", "pohon", "l'arbre", "el árbol"),
              emoji: "🌳"
            },
            {
              id: "g6u2l6v4",
              arabic: "الْهَوَاءُ النَّقِيُّ",
              transliteration: "al-hawāʾu n-naqiyy",
              translation: t("الْهَوَاءُ النَّقِيُّ", "fresh/clean air", "udara bersih", "udara bersih", "l'air pur", "el aire puro"),
              emoji: "🌬️"
            },
            {
              id: "g6u2l6v5",
              arabic: "التَّشْجِيرُ",
              transliteration: "at-tashjīr",
              translation: t("التَّشْجِيرُ", "reforestation/tree planting", "penanaman semula", "reboisasi", "le reboisement", "la reforestación"),
              emoji: "🌲"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g6u2l6e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "التَّشْجِيرُ",
              options: [
                "الزِّرَاعَةُ",
                "التَّشْجِيرُ",
                "الشَّجَرَةُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f332/512.webp"
            },
            {
              id: "g6u2l6e2",
              type: "mcq",
              skill: "reading",
              prompt: t("ما فائدة زراعة الأشجار؟", "What is the benefit of planting trees?", "Apa faedah menanam pokok?", "Apa manfaat menanam pohon?", "Quel est le bienfait de la plantation d'arbres ?", "¿Cuál es el beneficio de plantar árboles?"),
              options: [
                "تُنَقِّي الْهَوَاءَ وَتُجَمِّلُ الْبِيئَةَ",
                "تُلَوِّثُ الْهَوَاءَ",
                "لَا فَائِدَةَ مِنْهَا"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f33e/512.webp"
            },
            {
              id: "g6u2l6e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قل لماذا تحب الزراعة والأشجار", "Say why you love farming and trees", "Sebut kenapa anda suka pertanian dan pokok", "Sebutkan mengapa kamu suka pertanian dan pohon", "Dis pourquoi tu aimes l'agriculture et les arbres", "Di por qué te gusta la agricultura y los árboles"),
              arabicText: "أُحِبُّ زِرَاعَةَ الْأَشْجَارِ لِأَنَّهَا تُنَقِّي الْهَوَاءَ وَتُجَمِّلُ بِيئَتَنَا",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f33e/512.webp"
            },
            {
              id: "g6u2l6e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا الزِّرَاعَةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f33e/512.webp"
            },
            {
              id: "g6u2l6speakg6u2l6v1",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "الزِّرَاعَةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f33e/512.webp"
            },
            {
              id: "g6u2l6speakg6u2l6v5",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "التَّشْجِيرُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f332/512.webp"
            },
            {
              id: "g6u2l6writeg6u2l6v3",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"الشَّجَرَةُ\"", "Type the Arabic word for: \"tree\"", "Taip perkataan Arab untuk: \"pokok\"", "Ketik kata Arab untuk: \"pohon\"", "Tape le mot arabe pour : \"l'arbre\"", "Escribe la palabra árabe para: \"el árbol\""),
              arabicText: "الشَّجَرَةُ",
              answer: "الشَّجَرَةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f333/512.webp"
            },
            {
              id: "g6u2l6spellg6u2l6v2",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "نَزْرَعُ",
              answer: "نَزْرَعُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f331/512.webp"
            }
          ]
        },
        {
          id: "g6u2review",
          unitId: "g6u2",
          gradeId: "g6",
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
              id: "g6u2l1v1",
              arabic: "الْبِيئَةُ",
              transliteration: "al-bīʾa",
              translation: t("الْبِيئَةُ", "environment", "alam sekitar", "lingkungan", "l'environnement", "el medio ambiente"),
              emoji: "🌍"
            },
            {
              id: "g6u2l1v2",
              arabic: "نُحَافِظُ",
              transliteration: "nuḥāfiẓu",
              translation: t("نُحَافِظُ", "we preserve", "kita jaga", "kita jaga", "nous préservons", "preservamos"),
              emoji: "🛡️"
            },
            {
              id: "g6u2l1v3",
              arabic: "التَّلَوُّثُ",
              transliteration: "at-talawwuth",
              translation: t("التَّلَوُّثُ", "pollution", "pencemaran", "pencemaran", "la pollution", "la contaminación"),
              emoji: "🏭"
            },
            {
              id: "g6u2l1v4",
              arabic: "النَّظَافَةُ",
              transliteration: "an-naẓāfa",
              translation: t("النَّظَافَةُ", "cleanliness", "kebersihan", "kebersihan", "la propreté", "la limpieza"),
              emoji: "✨"
            },
            {
              id: "g6u2l1v5",
              arabic: "نَزْرَعُ",
              transliteration: "nazraʿu",
              translation: t("نَزْرَعُ", "we plant", "kita tanam", "kita tanam", "nous plantons", "plantamos"),
              emoji: "🌱"
            },
            {
              id: "g6u2l2v1",
              arabic: "الطَّاقَةُ",
              transliteration: "aṭ-ṭāqa",
              translation: t("الطَّاقَةُ", "energy", "tenaga", "energi", "l'énergie", "la energía"),
              emoji: "⚡"
            },
            {
              id: "g6u2l2v2",
              arabic: "نُرَشِّدُ",
              transliteration: "nurashshshidu",
              translation: t("نُرَشِّدُ", "we conserve", "kita jimat", "kita hemat", "nous économisons", "conservamos"),
              emoji: "💡"
            },
            {
              id: "g6u2l2v3",
              arabic: "الطَّاقَةُ الشَّمْسِيَّةُ",
              transliteration: "aṭ-ṭāqatu sh-shamsiyya",
              translation: t("الطَّاقَةُ الشَّمْسِيَّةُ", "solar energy", "tenaga solar", "energi surya", "l'énergie solaire", "la energía solar"),
              emoji: "☀️"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g6u2reviewspeakg6u2l1v1",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "الْبِيئَةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f30d/512.webp"
            },
            {
              id: "g6u2reviewspeakg6u2l2v3",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "الطَّاقَةُ الشَّمْسِيَّةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2600-fe0f/512.webp"
            },
            {
              id: "g6u2reviewmcqg6u2l2v3",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"الطَّاقَةُ الشَّمْسِيَّةُ\"؟", "What does \"solar energy\" mean?", "Apakah maksud \"tenaga solar\"?", "Apa arti \"energi surya\"?", "Que signifie \"l'énergie solaire\" ?", "¿Qué significa \"la energía solar\"?"),
              arabicText: "الطَّاقَةُ الشَّمْسِيَّةُ",
              options: [
                "solar energy",
                "forest",
                "glass",
                "peace of mind"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2600-fe0f/512.webp"
            },
            {
              id: "g6u2reviewlisteng6u2l1v5",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "نَزْرَعُ",
              options: [
                "نَتَعَاوَنُ",
                "نَحْيَا بِهِ",
                "نَزْرَعُ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f331/512.webp"
            },
            {
              id: "g6u2reviewlisteng6u2l2v1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الطَّاقَةُ",
              options: [
                "نَحْتَفِلُ",
                "الطَّاقَةُ",
                "الْحِكْمَةُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26a1/512.webp"
            },
            {
              id: "g6u2reviewwriteg6u2l1v3",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"التَّلَوُّثُ\"", "Type the Arabic word for: \"pollution\"", "Taip perkataan Arab untuk: \"pencemaran\"", "Ketik kata Arab untuk: \"pencemaran\"", "Tape le mot arabe pour : \"la pollution\"", "Escribe la palabra árabe para: \"la contaminación\""),
              arabicText: "التَّلَوُّثُ",
              answer: "التَّلَوُّثُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3ed/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "g6u3",
      gradeId: "g6",
      order: 3,
      title: t("الصِّحَّةُ", "Health", "Kesihatan", "Kesehatan", "La santé", "La salud"),
      theme: "health",
      lessons: [
        {
          id: "g6u3l1",
          unitId: "g6u3",
          gradeId: "g6",
          order: 1,
          title: t("الصِّحَّةُ الْجَسَدِيَّةُ", "Physical Health", "Kesihatan Fizikal", "Kesehatan Fisik", "La santé physique", "La salud física"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("الصحة الجسدية نعمة عظيمة! لنتعلّم كيف نحافظ عليها.", "Physical health is a great blessing! Let's learn how to maintain it.", "Kesihatan fizikal adalah nikmat yang besar! Jom belajar cara menjaganya.", "Kesehatan fisik adalah anugerah yang besar! Ayo pelajari cara menjaganya.", "La santé physique est une grande bénédiction ! Apprenons comment la maintenir.", "¡La salud física es una gran bendición! Aprendamos cómo mantenerla."),
          vocabulary: [
            {
              id: "g6u3l1v1",
              arabic: "الصِّحَّةُ",
              transliteration: "aṣ-ṣiḥḥa",
              translation: t("الصِّحَّةُ", "health", "kesihatan", "kesehatan", "la santé", "la salud"),
              emoji: "💚"
            },
            {
              id: "g6u3l1v2",
              arabic: "الرِّيَاضَةُ",
              transliteration: "ar-riyāḍa",
              translation: t("الرِّيَاضَةُ", "sport/exercise", "sukan/senaman", "olahraga", "le sport", "el deporte"),
              emoji: "🏃"
            },
            {
              id: "g6u3l1v3",
              arabic: "الطَّعَامُ الصِّحِّيُّ",
              transliteration: "aṭ-ṭaʿāmu ṣ-ṣiḥḥiyy",
              translation: t("الطَّعَامُ الصِّحِّيُّ", "healthy food", "makanan sihat", "makanan sehat", "la nourriture saine", "la comida saludable"),
              emoji: "🥗"
            },
            {
              id: "g6u3l1v4",
              arabic: "النَّوْمُ الْكَافِي",
              transliteration: "an-nawmu l-kāfī",
              translation: t("النَّوْمُ الْكَافِي", "enough sleep", "tidur yang cukup", "tidur yang cukup", "le sommeil suffisant", "el sueño suficiente"),
              emoji: "😴"
            },
            {
              id: "g6u3l1v5",
              arabic: "نَشِيطٌ",
              transliteration: "nashīṭ",
              translation: t("نَشِيطٌ", "active", "aktif", "aktif", "actif", "activo"),
              emoji: "⚡"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g6u3l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "النَّوْمُ الْكَافِي",
              options: [
                "الرِّيَاضَةُ",
                "النَّوْمُ الْكَافِي",
                "نَشِيطٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f634/512.webp"
            },
            {
              id: "g6u3l1e2",
              type: "mcq",
              skill: "reading",
              prompt: t("ما أساسيات الصحة الجسدية؟", "What are the basics of physical health?", "Apakah asas kesihatan fizikal?", "Apa dasar-dasar kesehatan fisik?", "Quelles sont les bases de la santé physique ?", "¿Cuáles son las bases de la salud física?"),
              options: [
                "الرِّيَاضَةُ وَالطَّعَامُ الصِّحِّيُّ وَالنَّوْمُ",
                "الطَّعَامُ السَّرِيعُ فَقَطْ",
                "عَدَمُ الْحَرَكَةِ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f49a/512.webp"
            },
            {
              id: "g6u3l1e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قل كيف تحافظ على صحتك الجسدية", "Say how you maintain your physical health", "Sebut cara anda menjaga kesihatan fizikal", "Sebutkan cara kamu menjaga kesehatan fisikmu", "Dis comment tu maintiens ta santé physique", "Di cómo mantienes tu salud física"),
              arabicText: "أُحَافِظُ عَلَى صِحَّتِي بِالرِّيَاضَةِ وَتَنَاوُلِ الطَّعَامِ الصِّحِّيِّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f49a/512.webp"
            },
            {
              id: "g6u3l1e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا الصِّحَّةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f49a/512.webp"
            },
            {
              id: "g6u3l1mcqg6u3l1v2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"الرِّيَاضَةُ\"؟", "What does \"sport/exercise\" mean?", "Apakah maksud \"sukan/senaman\"?", "Apa arti \"olahraga\"?", "Que signifie \"le sport\" ?", "¿Qué significa \"el deporte\"?"),
              arabicText: "الرِّيَاضَةُ",
              options: [
                "proverb",
                "clean",
                "sport/exercise",
                "we plant"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c3/512.webp"
            },
            {
              id: "g6u3l1mcqg6u3l1v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"الصِّحَّةُ\"؟", "What does \"health\" mean?", "Apakah maksud \"kesihatan\"?", "Apa arti \"kesehatan\"?", "Que signifie \"la santé\" ?", "¿Qué significa \"la salud\"?"),
              arabicText: "الصِّحَّةُ",
              options: [
                "we help",
                "positive",
                "health",
                "we learn"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f49a/512.webp"
            },
            {
              id: "g6u3l1listeng6u3l1v5",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "نَشِيطٌ",
              options: [
                "الْمُسْتَشْفَى",
                "نَشِيطٌ",
                "الْأَجْدَادُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26a1/512.webp"
            },
            {
              id: "g6u3l1spellg6u3l1v2",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "الرِّيَاضَةُ",
              answer: "الرِّيَاضَةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c3/512.webp"
            }
          ]
        },
        {
          id: "g6u3l2",
          unitId: "g6u3",
          gradeId: "g6",
          order: 2,
          title: t("الصِّحَّةُ النَّفْسِيَّةُ", "Mental Health", "Kesihatan Mental", "Kesehatan Mental", "La santé mentale", "La salud mental"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("الصحة النفسية بالغة الأهمية! لنتعلّم كيف نعتني بصحتنا النفسية.", "Mental health is very important! Let's learn how to take care of our mental health.", "Kesihatan mental sangat penting! Jom belajar cara menjaga kesihatan mental kita.", "Kesehatan mental sangat penting! Ayo pelajari cara merawat kesehatan mental kita.", "La santé mentale est très importante ! Apprenons à prendre soin de notre santé mentale.", "¡La salud mental es muy importante! Aprendamos a cuidar nuestra salud mental."),
          vocabulary: [
            {
              id: "g6u3l2v1",
              arabic: "الصِّحَّةُ النَّفْسِيَّةُ",
              transliteration: "aṣ-ṣiḥḥatu n-nafsiyya",
              translation: t("الصِّحَّةُ النَّفْسِيَّةُ", "mental health", "kesihatan mental", "kesehatan mental", "la santé mentale", "la salud mental"),
              emoji: "🧠"
            },
            {
              id: "g6u3l2v2",
              arabic: "الطُّمَأْنِينَةُ",
              transliteration: "aṭ-ṭumaʾnīna",
              translation: t("الطُّمَأْنِينَةُ", "serenity/peace", "ketenangan", "ketenangan", "la sérénité", "la serenidad"),
              emoji: "☮️"
            },
            {
              id: "g6u3l2v3",
              arabic: "الضَّغْطُ النَّفْسِيُّ",
              transliteration: "aḍ-ḍaghṭu n-nafsiyy",
              translation: t("الضَّغْطُ النَّفْسِيُّ", "stress", "tekanan", "stres", "le stress", "el estrés"),
              emoji: "😰"
            },
            {
              id: "g6u3l2v4",
              arabic: "نَسْتَرِيحُ",
              transliteration: "nastariḥu",
              translation: t("نَسْتَرِيحُ", "we rest", "kita berehat", "kita beristirahat", "nous nous reposons", "descansamos"),
              emoji: "🛋️"
            },
            {
              id: "g6u3l2v5",
              arabic: "الِاتِّزَانُ",
              transliteration: "al-ittizān",
              translation: t("الِاتِّزَانُ", "balance", "keseimbangan", "keseimbangan", "l'équilibre", "el equilibrio"),
              emoji: "⚖️"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g6u3l2e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الطُّمَأْنِينَةُ",
              options: [
                "الضَّغْطُ النَّفْسِيُّ",
                "الطُّمَأْنِينَةُ",
                "الِاتِّزَانُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/262e-fe0f/512.webp"
            },
            {
              id: "g6u3l2e2",
              type: "mcq",
              skill: "reading",
              prompt: t("كيف نحافظ على صحتنا النفسية؟", "How do we maintain our mental health?", "Bagaimana kita menjaga kesihatan mental kita?", "Bagaimana kita menjaga kesehatan mental kita?", "Comment maintient-on sa santé mentale ?", "¿Cómo mantenemos nuestra salud mental?"),
              options: [
                "بِالرَّاحَةِ وَالِاتِّزَانِ وَالتَّحَدُّثِ عَنِ الْمَشَاعِرِ",
                "بِالصَّمْتِ دَائِمًا",
                "بِالْعَزْلَةِ عَنِ النَّاسِ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9e0/512.webp"
            },
            {
              id: "g6u3l2e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قل كيف تحافظ على صحتك النفسية", "Say how you maintain your mental health", "Sebut cara anda menjaga kesihatan mental", "Sebutkan cara kamu menjaga kesehatan mentalmu", "Dis comment tu maintiens ta santé mentale", "Di cómo mantienes tu salud mental"),
              arabicText: "أَسْتَرِيحُ وَأَتَحَدَّثُ مَعَ أَصْدِقَائِي وَأُمَارِسُ هِوَايَاتِي",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9e0/512.webp"
            },
            {
              id: "g6u3l2e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا الصِّحَّةُ النَّفْسِيَّةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9e0/512.webp"
            },
            {
              id: "g6u3l2speakg6u3l2v3",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "الضَّغْطُ النَّفْسِيُّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f630/512.webp"
            },
            {
              id: "g6u3l2listeng6u3l2v2",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الطُّمَأْنِينَةُ",
              options: [
                "الطُّمَأْنِينَةُ",
                "إِيجَابِيٌّ",
                "الْمُنَاسَبَاتُ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/262e-fe0f/512.webp"
            },
            {
              id: "g6u3l2spellg6u3l2v4",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "نَسْتَرِيحُ",
              answer: "نَسْتَرِيحُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6cb-fe0f/512.webp"
            },
            {
              id: "g6u3l2writeg6u3l2v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"الصِّحَّةُ النَّفْسِيَّةُ\"", "Type the Arabic word for: \"mental health\"", "Taip perkataan Arab untuk: \"kesihatan mental\"", "Ketik kata Arab untuk: \"kesehatan mental\"", "Tape le mot arabe pour : \"la santé mentale\"", "Escribe la palabra árabe para: \"la salud mental\""),
              arabicText: "الصِّحَّةُ النَّفْسِيَّةُ",
              answer: "الصِّحَّةُ النَّفْسِيَّةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9e0/512.webp"
            }
          ]
        },
        {
          id: "g6u3l3",
          unitId: "g6u3",
          gradeId: "g6",
          order: 3,
          title: t("الْوِقَايَةُ وَالسَّلَامَةُ", "Prevention and Safety", "Pencegahan dan Keselamatan", "Pencegahan dan Keselamatan", "La prévention et la sécurité", "La prevención y la seguridad"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("الوقاية خير من العلاج! لنتعلّم كيف نحمي أنفسنا.", "Prevention is better than cure! Let's learn how to protect ourselves.", "Pencegahan lebih baik daripada rawatan! Jom belajar cara melindungi diri.", "Pencegahan lebih baik dari pengobatan! Ayo pelajari cara melindungi diri.", "Mieux vaut prévenir que guérir ! Apprenons à nous protéger.", "¡Más vale prevenir que curar! Aprendamos a protegernos."),
          vocabulary: [
            {
              id: "g6u3l3v1",
              arabic: "الْوِقَايَةُ",
              transliteration: "al-wiqāya",
              translation: t("الْوِقَايَةُ", "prevention", "pencegahan", "pencegahan", "la prévention", "la prevención"),
              emoji: "🛡️"
            },
            {
              id: "g6u3l3v2",
              arabic: "اللِّقَاحُ",
              transliteration: "al-liqāḥ",
              translation: t("اللِّقَاحُ", "vaccine", "vaksin", "vaksin", "le vaccin", "la vacuna"),
              emoji: "💉"
            },
            {
              id: "g6u3l3v3",
              arabic: "النَّظَافَةُ الشَّخْصِيَّةُ",
              transliteration: "an-naẓāfatu sh-shakhṣiyya",
              translation: t("النَّظَافَةُ الشَّخْصِيَّةُ", "personal hygiene", "kebersihan diri", "kebersihan diri", "l'hygiène personnelle", "la higiene personal"),
              emoji: "🧼"
            },
            {
              id: "g6u3l3v4",
              arabic: "الْمَرَضُ",
              transliteration: "al-maraḍ",
              translation: t("الْمَرَضُ", "illness", "penyakit", "penyakit", "la maladie", "la enfermedad"),
              emoji: "🤒"
            },
            {
              id: "g6u3l3v5",
              arabic: "نَتَجَنَّبُ",
              transliteration: "natajannbu",
              translation: t("نَتَجَنَّبُ", "we avoid", "kita elakkan", "kita hindari", "nous évitons", "evitamos"),
              emoji: "🚫"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g6u3l3e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "اللِّقَاحُ",
              options: [
                "الْوِقَايَةُ",
                "اللِّقَاحُ",
                "الْمَرَضُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f489/512.webp"
            },
            {
              id: "g6u3l3e2",
              type: "mcq",
              skill: "reading",
              prompt: t("ما أفضل طريقة لتجنب الأمراض؟", "What is the best way to avoid diseases?", "Apakah cara terbaik untuk menghindari penyakit?", "Apa cara terbaik untuk menghindari penyakit?", "Quelle est la meilleure façon d'éviter les maladies ?", "¿Cuál es la mejor forma de evitar enfermedades?"),
              options: [
                "النَّظَافَةُ وَاللِّقَاحُ وَتَجَنُّبُ الْمُلَوِّثَاتِ",
                "عَدَمُ الِاهْتِمَامِ بِالصِّحَّةِ",
                "تَجَاهُلُ الْأَعْرَاضِ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6e1-fe0f/512.webp"
            },
            {
              id: "g6u3l3e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قل كيف تقي نفسك من الأمراض", "Say how you protect yourself from diseases", "Sebut cara anda melindungi diri dari penyakit", "Sebutkan cara kamu melindungi diri dari penyakit", "Dis comment tu te protèges des maladies", "Di cómo te proteges de las enfermedades"),
              arabicText: "أَتَجَنَّبُ الْأَمْرَاضَ بِالنَّظَافَةِ الشَّخْصِيَّةِ وَالتَّطْعِيمِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6e1-fe0f/512.webp"
            },
            {
              id: "g6u3l3e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا الْوِقَايَةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6e1-fe0f/512.webp"
            },
            {
              id: "g6u3l3listeng6u3l3v2",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "اللِّقَاحُ",
              options: [
                "نَسْتَرِيحُ",
                "اللِّقَاحُ",
                "نَفْتَخِرُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f489/512.webp"
            },
            {
              id: "g6u3l3writeg6u3l3v3",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"النَّظَافَةُ الشَّخْصِيَّةُ\"", "Type the Arabic word for: \"personal hygiene\"", "Taip perkataan Arab untuk: \"kebersihan diri\"", "Ketik kata Arab untuk: \"kebersihan diri\"", "Tape le mot arabe pour : \"l'hygiène personnelle\"", "Escribe la palabra árabe para: \"la higiene personal\""),
              arabicText: "النَّظَافَةُ الشَّخْصِيَّةُ",
              answer: "النَّظَافَةُ الشَّخْصِيَّةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9fc/512.webp"
            },
            {
              id: "g6u3l3spellg6u3l3v1",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "الْوِقَايَةُ",
              answer: "الْوِقَايَةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6e1-fe0f/512.webp"
            },
            {
              id: "g6u3l3listeng6u3l3v5",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "نَتَجَنَّبُ",
              options: [
                "التُّرَاثُ",
                "نَتَجَنَّبُ",
                "الذِّكْرُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6ab/512.webp"
            }
          ]
        },
        {
          id: "g6u3l4",
          unitId: "g6u3",
          gradeId: "g6",
          order: 4,
          title: t("التَّغْذِيَةُ السَّلِيمَةُ", "Balanced Nutrition", "Pemakanan Seimbang", "Nutrisi Seimbang", "La nutrition équilibrée", "La nutrición equilibrada"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("التغذية السليمة هي وقود الجسم! لنتعلّم عن المجموعات الغذائية.", "Balanced nutrition is the body's fuel! Let's learn about food groups.", "Pemakanan seimbang adalah bahan bakar tubuh! Jom belajar tentang kumpulan makanan.", "Nutrisi seimbang adalah bahan bakar tubuh! Ayo pelajari tentang kelompok makanan.", "La nutrition équilibrée est le carburant du corps ! Apprenons les groupes alimentaires.", "¡La nutrición equilibrada es el combustible del cuerpo! Aprendamos sobre los grupos alimenticios."),
          vocabulary: [
            {
              id: "g6u3l4v1",
              arabic: "التَّغْذِيَةُ",
              transliteration: "at-taghdhiya",
              translation: t("التَّغْذِيَةُ", "nutrition", "pemakanan", "nutrisi", "la nutrition", "la nutrición"),
              emoji: "🥗"
            },
            {
              id: "g6u3l4v2",
              arabic: "الْبُرُوتِينُ",
              transliteration: "al-burūtīn",
              translation: t("الْبُرُوتِينُ", "protein", "protein", "protein", "la protéine", "la proteína"),
              emoji: "🥩"
            },
            {
              id: "g6u3l4v3",
              arabic: "الْكَرْبُوهَيْدَرَاتُ",
              transliteration: "al-karbūhaydarāt",
              translation: t("الْكَرْبُوهَيْدَرَاتُ", "carbohydrates", "karbohidrat", "karbohidrat", "les glucides", "los carbohidratos"),
              emoji: "🍞"
            },
            {
              id: "g6u3l4v4",
              arabic: "الْفِيتَامِينَاتُ",
              transliteration: "al-fītāmīnāt",
              translation: t("الْفِيتَامِينَاتُ", "vitamins", "vitamin", "vitamin", "les vitamines", "las vitaminas"),
              emoji: "🍊"
            },
            {
              id: "g6u3l4v5",
              arabic: "مُتَوَازِنٌ",
              transliteration: "mutawāzin",
              translation: t("مُتَوَازِنٌ", "balanced", "seimbang", "seimbang", "équilibré", "equilibrado"),
              emoji: "⚖️"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g6u3l4e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الْفِيتَامِينَاتُ",
              options: [
                "الْبُرُوتِينُ",
                "الْفِيتَامِينَاتُ",
                "الْكَرْبُوهَيْدَرَاتُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f34a/512.webp"
            },
            {
              id: "g6u3l4e2",
              type: "mcq",
              skill: "reading",
              prompt: t("ما الذي يجعل غذاءنا متوازنًا؟", "What makes our nutrition balanced?", "Apa yang menjadikan pemakanan kita seimbang?", "Apa yang membuat nutrisi kita seimbang?", "Qu'est-ce qui rend notre alimentation équilibrée ?", "¿Qué hace que nuestra nutrición sea equilibrada?"),
              options: [
                "تَنَاوُلُ جَمِيعِ الْمَجْمُوعَاتِ الْغِذَائِيَّةِ",
                "الْأَكْلُ بِكَثْرَةٍ",
                "تَجَنُّبُ الْخُضَرِ وَالْفَوَاكِهِ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f957/512.webp"
            },
            {
              id: "g6u3l4e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قل ما تأكله لتحقيق تغذية متوازنة", "Say what you eat to achieve balanced nutrition", "Sebut apa yang anda makan untuk mencapai pemakanan seimbang", "Sebutkan apa yang kamu makan untuk mencapai nutrisi seimbang", "Dis ce que tu manges pour une nutrition équilibrée", "Di qué comes para lograr una nutrición equilibrada"),
              arabicText: "آكُلُ خُضَرًا وَفَوَاكِهَ وَبُرُوتِينًا وَكَرْبُوهَيْدَرَاتٍ لِأَحْقِقَ غِذَاءً مُتَوَازِنًا",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f957/512.webp"
            },
            {
              id: "g6u3l4e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا التَّغْذِيَةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f957/512.webp"
            },
            {
              id: "g6u3l4writeg6u3l4v3",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"الْكَرْبُوهَيْدَرَاتُ\"", "Type the Arabic word for: \"carbohydrates\"", "Taip perkataan Arab untuk: \"karbohidrat\"", "Ketik kata Arab untuk: \"karbohidrat\"", "Tape le mot arabe pour : \"les glucides\"", "Escribe la palabra árabe para: \"los carbohidratos\""),
              arabicText: "الْكَرْبُوهَيْدَرَاتُ",
              answer: "الْكَرْبُوهَيْدَرَاتُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f35e/512.webp"
            },
            {
              id: "g6u3l4spellg6u3l4v5",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "مُتَوَازِنٌ",
              answer: "مُتَوَازِنٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2696-fe0f/512.webp"
            },
            {
              id: "g6u3l4listeng6u3l4v1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "التَّغْذِيَةُ",
              options: [
                "التَّغْذِيَةُ",
                "نَظِيفٌ",
                "الْوَرَقُ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f957/512.webp"
            },
            {
              id: "g6u3l4listeng6u3l4v5",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "مُتَوَازِنٌ",
              options: [
                "مُتَوَازِنٌ",
                "نَسْتَرِيحُ",
                "الْمَاءُ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2696-fe0f/512.webp"
            }
          ]
        },
        {
          id: "g6u3l5",
          unitId: "g6u3",
          gradeId: "g6",
          order: 5,
          title: t("السَّلَامَةُ الرُّوحِيَّةُ", "Spiritual Wellbeing", "Kesejahteraan Rohani", "Kesejahteraan Spiritual", "Le bien-être spirituel", "El bienestar espiritual"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("الروح بحاجة إلى رعاية وغذاء! لنتعلّم عن الاطمئنان الروحي.", "The soul needs care and nourishment! Let's learn about spiritual peace.", "Jiwa memerlukan penjagaan dan makanan! Jom belajar tentang ketenangan rohani.", "Jiwa membutuhkan perawatan dan nutrisi! Ayo pelajari tentang ketenangan spiritual.", "L'âme a besoin de soin et de nourriture ! Apprenons la paix spirituelle.", "¡El alma necesita cuidado y alimento! Aprendamos sobre la paz espiritual."),
          vocabulary: [
            {
              id: "g6u3l5v1",
              arabic: "الِاطْمِئْنَانُ",
              transliteration: "al-iṭmiʾnān",
              translation: t("الِاطْمِئْنَانُ", "peace of mind", "ketenangan", "ketenangan", "la paix intérieure", "la paz interior"),
              emoji: "☮️"
            },
            {
              id: "g6u3l5v2",
              arabic: "الصَّلَاةُ",
              transliteration: "aṣ-ṣalāh",
              translation: t("الصَّلَاةُ", "prayer", "solat", "shalat", "la prière", "la oración"),
              emoji: "🤲"
            },
            {
              id: "g6u3l5v3",
              arabic: "الذِّكْرُ",
              transliteration: "adh-dhikr",
              translation: t("الذِّكْرُ", "remembrance of God", "zikir", "zikir", "le dhikr", "el dikr"),
              emoji: "📿"
            },
            {
              id: "g6u3l5v4",
              arabic: "الْإِيمَانُ",
              transliteration: "al-īmān",
              translation: t("الْإِيمَانُ", "faith", "keimanan", "keimanan", "la foi", "la fe"),
              emoji: "💫"
            },
            {
              id: "g6u3l5v5",
              arabic: "الرِّضَا",
              transliteration: "ar-riḍā",
              translation: t("الرِّضَا", "contentment", "keredaan", "keridaan", "le contentement", "el contentamiento"),
              emoji: "😊"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g6u3l5e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الِاطْمِئْنَانُ",
              options: [
                "الْإِيمَانُ",
                "الِاطْمِئْنَانُ",
                "الرِّضَا"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/262e-fe0f/512.webp"
            },
            {
              id: "g6u3l5e2",
              type: "mcq",
              skill: "reading",
              prompt: t("ما الذي يجلب الاطمئنان للقلب؟", "What brings peace to the heart?", "Apa yang membawa ketenangan kepada hati?", "Apa yang membawa ketenangan pada hati?", "Qu'est-ce qui apporte la paix au cœur ?", "¿Qué trae paz al corazón?"),
              options: [
                "الذِّكْرُ وَالْإِيمَانُ",
                "الْغَضَبُ",
                "الْقَلَقُ الدَّائِمُ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/262e-fe0f/512.webp"
            },
            {
              id: "g6u3l5e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قل كيف تُحقِّق الاطمئنان الروحي", "Say how you achieve spiritual peace", "Sebut cara anda mencapai ketenangan rohani", "Sebutkan cara kamu mencapai ketenangan spiritual", "Dis comment tu atteins la paix spirituelle", "Di cómo logras la paz espiritual"),
              arabicText: "أَجِدُ الِاطْمِئْنَانَ بِالصَّلَاةِ وَالذِّكْرِ وَالرِّضَا بِمَا قَسَمَ اللهُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60a/512.webp"
            },
            {
              id: "g6u3l5e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا الِاطْمِئْنَانُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/262e-fe0f/512.webp"
            },
            {
              id: "g6u3l5listeng6u3l5v2",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الصَّلَاةُ",
              options: [
                "الِاطْمِئْنَانُ",
                "الطَّعَامُ الصِّحِّيُّ",
                "الصَّلَاةُ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f932/512.webp"
            },
            {
              id: "g6u3l5writeg6u3l5v5",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"الرِّضَا\"", "Type the Arabic word for: \"contentment\"", "Taip perkataan Arab untuk: \"keredaan\"", "Ketik kata Arab untuk: \"keridaan\"", "Tape le mot arabe pour : \"le contentement\"", "Escribe la palabra árabe para: \"el contentamiento\""),
              arabicText: "الرِّضَا",
              answer: "الرِّضَا",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60a/512.webp"
            },
            {
              id: "g6u3l5writeg6u3l5v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"الِاطْمِئْنَانُ\"", "Type the Arabic word for: \"peace of mind\"", "Taip perkataan Arab untuk: \"ketenangan\"", "Ketik kata Arab untuk: \"ketenangan\"", "Tape le mot arabe pour : \"la paix intérieure\"", "Escribe la palabra árabe para: \"la paz interior\""),
              arabicText: "الِاطْمِئْنَانُ",
              answer: "الِاطْمِئْنَانُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/262e-fe0f/512.webp"
            },
            {
              id: "g6u3l5spellg6u3l5v5",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "الرِّضَا",
              answer: "الرِّضَا",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60a/512.webp"
            }
          ]
        },
        {
          id: "g6u3l6",
          unitId: "g6u3",
          gradeId: "g6",
          order: 6,
          title: t("حَيَاةٌ صِحِّيَّةٌ مُتَكَامِلَةٌ", "A Complete Healthy Lifestyle", "Gaya Hidup Sihat Menyeluruh", "Gaya Hidup Sehat Menyeluruh", "Un mode de vie sain complet", "Un estilo de vida saludable completo"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("الصحة الحقيقية تشمل الجسم والعقل والروح! لنتعلّم معنى الحياة الصحية المتكاملة.", "True health encompasses body, mind and soul! Let's learn the meaning of a complete healthy life.", "Kesihatan sebenar merangkumi badan, minda dan rohani! Jom belajar makna gaya hidup sihat menyeluruh.", "Kesehatan sejati mencakup tubuh, pikiran dan jiwa! Ayo pelajari makna gaya hidup sehat menyeluruh.", "La vraie santé englobe le corps, l'esprit et l'âme ! Apprenons la signification d'une vie saine complète.", "¡La salud real abarca cuerpo, mente y alma! Aprendamos el significado de una vida saludable completa."),
          vocabulary: [
            {
              id: "g6u3l6v1",
              arabic: "مُتَكَامِلٌ",
              transliteration: "mutakāmil",
              translation: t("مُتَكَامِلٌ", "complete/integrated", "menyeluruh", "menyeluruh", "complet/intégré", "completo/integrado"),
              emoji: "🌟"
            },
            {
              id: "g6u3l6v2",
              arabic: "التَّوَازُنُ",
              transliteration: "at-tawāzun",
              translation: t("التَّوَازُنُ", "balance", "keseimbangan", "keseimbangan", "l'équilibre", "el equilibrio"),
              emoji: "⚖️"
            },
            {
              id: "g6u3l6v3",
              arabic: "أُسْلُوبُ الْحَيَاةِ",
              transliteration: "uslūbu l-ḥayāh",
              translation: t("أُسْلُوبُ الْحَيَاةِ", "lifestyle", "gaya hidup", "gaya hidup", "le mode de vie", "el estilo de vida"),
              emoji: "🌈"
            },
            {
              id: "g6u3l6v4",
              arabic: "الرَّاحَةُ",
              transliteration: "ar-rāḥa",
              translation: t("الرَّاحَةُ", "rest/comfort", "rehat", "istirahat", "le repos", "el descanso"),
              emoji: "😌"
            },
            {
              id: "g6u3l6v5",
              arabic: "الِاسْتِمْرَارُ",
              transliteration: "al-istimrār",
              translation: t("الِاسْتِمْرَارُ", "continuity/consistency", "kesinambungan", "kesinambungan", "la continuité", "la continuidad"),
              emoji: "🔄"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g6u3l6e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "التَّوَازُنُ",
              options: [
                "مُتَكَامِلٌ",
                "التَّوَازُنُ",
                "الرَّاحَةُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2696-fe0f/512.webp"
            },
            {
              id: "g6u3l6e2",
              type: "mcq",
              skill: "reading",
              prompt: t("ما عناصر الحياة الصحية المتكاملة؟", "What are the elements of a complete healthy life?", "Apakah unsur-unsur gaya hidup sihat menyeluruh?", "Apa unsur-unsur gaya hidup sehat menyeluruh?", "Quels sont les éléments d'une vie saine complète ?", "¿Cuáles son los elementos de una vida saludable completa?"),
              options: [
                "صِحَّةُ الْجِسْمِ وَالْعَقْلِ وَالرُّوحِ",
                "الطَّعَامُ فَقَطْ",
                "الرِّيَاضَةُ وَحْدَهَا"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f31f/512.webp"
            },
            {
              id: "g6u3l6e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قل ما هي عناصر حياتك الصحية", "Say what the elements of your healthy life are", "Sebut apa unsur-unsur gaya hidup sihat anda", "Sebutkan apa unsur-unsur gaya hidup sehatmu", "Dis quels sont les éléments de ta vie saine", "Di cuáles son los elementos de tu vida saludable"),
              arabicText: "حَيَاتِي الصِّحِّيَّةُ تَشْمَلُ الرِّيَاضَةَ وَالطَّعَامَ الصِّحِّيَّ وَالرَّاحَةَ وَالِاطْمِئْنَانَ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f31f/512.webp"
            },
            {
              id: "g6u3l6e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا مُتَكَامِلٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f31f/512.webp"
            },
            {
              id: "g6u3l6mcqg6u3l6v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"مُتَكَامِلٌ\"؟", "What does \"complete/integrated\" mean?", "Apakah maksud \"menyeluruh\"?", "Apa arti \"menyeluruh\"?", "Que signifie \"complet/intégré\" ?", "¿Qué significa \"completo/integrado\"?"),
              arabicText: "مُتَكَامِلٌ",
              options: [
                "leader",
                "initiative",
                "local character",
                "complete/integrated"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f31f/512.webp"
            },
            {
              id: "g6u3l6speakg6u3l6v4",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "الرَّاحَةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60c/512.webp"
            },
            {
              id: "g6u3l6writeg6u3l6v5",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"الِاسْتِمْرَارُ\"", "Type the Arabic word for: \"continuity/consistency\"", "Taip perkataan Arab untuk: \"kesinambungan\"", "Ketik kata Arab untuk: \"kesinambungan\"", "Tape le mot arabe pour : \"la continuité\"", "Escribe la palabra árabe para: \"la continuidad\""),
              arabicText: "الِاسْتِمْرَارُ",
              answer: "الِاسْتِمْرَارُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f504/512.webp"
            },
            {
              id: "g6u3l6spellg6u3l6v4",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "الرَّاحَةُ",
              answer: "الرَّاحَةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60c/512.webp"
            }
          ]
        },
        {
          id: "g6u3review",
          unitId: "g6u3",
          gradeId: "g6",
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
              id: "g6u3l1v1",
              arabic: "الصِّحَّةُ",
              transliteration: "aṣ-ṣiḥḥa",
              translation: t("الصِّحَّةُ", "health", "kesihatan", "kesehatan", "la santé", "la salud"),
              emoji: "💚"
            },
            {
              id: "g6u3l1v2",
              arabic: "الرِّيَاضَةُ",
              transliteration: "ar-riyāḍa",
              translation: t("الرِّيَاضَةُ", "sport/exercise", "sukan/senaman", "olahraga", "le sport", "el deporte"),
              emoji: "🏃"
            },
            {
              id: "g6u3l1v3",
              arabic: "الطَّعَامُ الصِّحِّيُّ",
              transliteration: "aṭ-ṭaʿāmu ṣ-ṣiḥḥiyy",
              translation: t("الطَّعَامُ الصِّحِّيُّ", "healthy food", "makanan sihat", "makanan sehat", "la nourriture saine", "la comida saludable"),
              emoji: "🥗"
            },
            {
              id: "g6u3l1v4",
              arabic: "النَّوْمُ الْكَافِي",
              transliteration: "an-nawmu l-kāfī",
              translation: t("النَّوْمُ الْكَافِي", "enough sleep", "tidur yang cukup", "tidur yang cukup", "le sommeil suffisant", "el sueño suficiente"),
              emoji: "😴"
            },
            {
              id: "g6u3l1v5",
              arabic: "نَشِيطٌ",
              transliteration: "nashīṭ",
              translation: t("نَشِيطٌ", "active", "aktif", "aktif", "actif", "activo"),
              emoji: "⚡"
            },
            {
              id: "g6u3l2v1",
              arabic: "الصِّحَّةُ النَّفْسِيَّةُ",
              transliteration: "aṣ-ṣiḥḥatu n-nafsiyya",
              translation: t("الصِّحَّةُ النَّفْسِيَّةُ", "mental health", "kesihatan mental", "kesehatan mental", "la santé mentale", "la salud mental"),
              emoji: "🧠"
            },
            {
              id: "g6u3l2v2",
              arabic: "الطُّمَأْنِينَةُ",
              transliteration: "aṭ-ṭumaʾnīna",
              translation: t("الطُّمَأْنِينَةُ", "serenity/peace", "ketenangan", "ketenangan", "la sérénité", "la serenidad"),
              emoji: "☮️"
            },
            {
              id: "g6u3l2v3",
              arabic: "الضَّغْطُ النَّفْسِيُّ",
              transliteration: "aḍ-ḍaghṭu n-nafsiyy",
              translation: t("الضَّغْطُ النَّفْسِيُّ", "stress", "tekanan", "stres", "le stress", "el estrés"),
              emoji: "😰"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g6u3reviewlisteng6u3l1v3",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الطَّعَامُ الصِّحِّيُّ",
              options: [
                "أُغَيِّرُ",
                "الطَّعَامُ الصِّحِّيُّ",
                "الْحَدِيقَةُ الْعَامَّةُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f957/512.webp"
            },
            {
              id: "g6u3reviewlisteng6u3l1v2",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الرِّيَاضَةُ",
              options: [
                "التَّوَازُنُ",
                "الْعَدْلُ",
                "الرِّيَاضَةُ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c3/512.webp"
            },
            {
              id: "g6u3reviewmcqg6u3l1v2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"الرِّيَاضَةُ\"؟", "What does \"sport/exercise\" mean?", "Apakah maksud \"sukan/senaman\"?", "Apa arti \"olahraga\"?", "Que signifie \"le sport\" ?", "¿Qué significa \"el deporte\"?"),
              arabicText: "الرِّيَاضَةُ",
              options: [
                "we document",
                "identity",
                "heritage music",
                "sport/exercise"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c3/512.webp"
            },
            {
              id: "g6u3reviewspeakg6u3l1v4",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "النَّوْمُ الْكَافِي",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f634/512.webp"
            },
            {
              id: "g6u3reviewwriteg6u3l1v4",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"النَّوْمُ الْكَافِي\"", "Type the Arabic word for: \"enough sleep\"", "Taip perkataan Arab untuk: \"tidur yang cukup\"", "Ketik kata Arab untuk: \"tidur yang cukup\"", "Tape le mot arabe pour : \"le sommeil suffisant\"", "Escribe la palabra árabe para: \"el sueño suficiente\""),
              arabicText: "النَّوْمُ الْكَافِي",
              answer: "النَّوْمُ الْكَافِي",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f634/512.webp"
            },
            {
              id: "g6u3reviewmcqg6u3l2v2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"الطُّمَأْنِينَةُ\"؟", "What does \"serenity/peace\" mean?", "Apakah maksud \"ketenangan\"?", "Apa arti \"ketenangan\"?", "Que signifie \"la sérénité\" ?", "¿Qué significa \"la serenidad\"?"),
              arabicText: "الطُّمَأْنِينَةُ",
              options: [
                "water",
                "serenity/peace",
                "we preserve",
                "we avoid"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/262e-fe0f/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "g6u4",
      gradeId: "g6",
      order: 4,
      title: t("الثَّقَافَةُ وَالتُّرَاثُ", "Culture and Heritage", "Budaya dan Warisan", "Budaya dan Warisan", "La culture et le patrimoine", "La cultura y el patrimonio"),
      theme: "culture",
      lessons: [
        {
          id: "g6u4l1",
          unitId: "g6u4",
          gradeId: "g6",
          order: 1,
          title: t("تُرَاثُنَا الْعَرَبِيُّ", "Our Arab Heritage", "Warisan Arab Kita", "Warisan Arab Kita", "Notre patrimoine arabe", "Nuestro patrimonio árabe"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("التراث العربي ثروة حضارية! لنتعلّم عن جوانب من تراثنا الجميل.", "Arab heritage is a civilizational wealth! Let's learn about aspects of our beautiful heritage.", "Warisan Arab adalah kekayaan tamadun! Jom belajar tentang aspek warisan kita yang indah.", "Warisan Arab adalah kekayaan peradaban! Ayo pelajari tentang aspek warisan kita yang indah.", "Le patrimoine arabe est une richesse civilisationnelle ! Apprenons les aspects de notre beau patrimoine.", "¡El patrimonio árabe es una riqueza civilizacional! Aprendamos aspectos de nuestro hermoso patrimonio."),
          vocabulary: [
            {
              id: "g6u4l1v1",
              arabic: "التُّرَاثُ",
              transliteration: "at-turāth",
              translation: t("التُّرَاثُ", "heritage", "warisan", "warisan", "le patrimoine", "el patrimonio"),
              emoji: "🏛️"
            },
            {
              id: "g6u4l1v2",
              arabic: "الْحَضَارَةُ",
              transliteration: "al-ḥaḍāra",
              translation: t("الْحَضَارَةُ", "civilisation", "tamadun", "peradaban", "la civilisation", "la civilización"),
              emoji: "🌍"
            },
            {
              id: "g6u4l1v3",
              arabic: "الْمَوْرُوثُ",
              transliteration: "al-mawrūth",
              translation: t("الْمَوْرُوثُ", "inherited/traditional", "tradisi turun-temurun", "warisan tradisional", "l'héritage", "lo heredado"),
              emoji: "📜"
            },
            {
              id: "g6u4l1v4",
              arabic: "نَفْتَخِرُ",
              transliteration: "naftakhiru",
              translation: t("نَفْتَخِرُ", "we are proud", "kita bangga", "kita bangga", "nous sommes fiers", "estamos orgullosos"),
              emoji: "🦁"
            },
            {
              id: "g6u4l1v5",
              arabic: "الْأَصَالَةُ",
              transliteration: "al-aṣāla",
              translation: t("الْأَصَالَةُ", "authenticity", "keaslian", "keaslian", "l'authenticité", "la autenticidad"),
              emoji: "🌟"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g6u4l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الْحَضَارَةُ",
              options: [
                "التُّرَاثُ",
                "الْحَضَارَةُ",
                "الْأَصَالَةُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f30d/512.webp"
            },
            {
              id: "g6u4l1e2",
              type: "mcq",
              skill: "reading",
              prompt: t("لماذا يجب أن نحافظ على تراثنا؟", "Why must we preserve our heritage?", "Mengapa kita mesti menjaga warisan kita?", "Mengapa kita harus menjaga warisan kita?", "Pourquoi doit-on préserver notre patrimoine ?", "¿Por qué debemos preservar nuestro patrimonio?"),
              options: [
                "لِأَنَّهُ يَحْمِلُ هُوِيَّتَنَا وَتَارِيخَنَا",
                "لِأَنَّهُ قَدِيمٌ فَقَطْ",
                "لَا دَاعِيَ لِلْحِفَاظِ عَلَيْهِ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3db-fe0f/512.webp"
            },
            {
              id: "g6u4l1e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قل شيئًا تعتز به من تراثنا العربي", "Say something from Arab heritage you are proud of", "Sebut sesuatu yang anda banggakan dari warisan Arab", "Sebutkan sesuatu dari warisan Arab yang kamu banggakan", "Dis quelque chose du patrimoine arabe dont tu es fier", "Di algo del patrimonio árabe del que estás orgulloso"),
              arabicText: "أَعْتَزُّ بِتُرَاثِنَا الْعَرَبِيِّ وَحَضَارَتِنَا الْعَظِيمَةِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3db-fe0f/512.webp"
            },
            {
              id: "g6u4l1e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا التُّرَاثُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3db-fe0f/512.webp"
            },
            {
              id: "g6u4l1spellg6u4l1v4",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "نَفْتَخِرُ",
              answer: "نَفْتَخِرُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f981/512.webp"
            },
            {
              id: "g6u4l1listeng6u4l1v1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "التُّرَاثُ",
              options: [
                "الْمَسْؤُولِيَّةُ",
                "الْمُوسِيقَى التُّرَاثِيَّةُ",
                "التُّرَاثُ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3db-fe0f/512.webp"
            },
            {
              id: "g6u4l1listeng6u4l1v5",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الْأَصَالَةُ",
              options: [
                "لَذِيذٌ",
                "الْمَسْؤُولِيَّةُ",
                "الْأَصَالَةُ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f31f/512.webp"
            },
            {
              id: "g6u4l1speakg6u4l1v3",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "الْمَوْرُوثُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4dc/512.webp"
            }
          ]
        },
        {
          id: "g6u4l2",
          unitId: "g6u4",
          gradeId: "g6",
          order: 2,
          title: t("الْفُنُونُ الشَّعْبِيَّةُ", "Folk Arts", "Seni Rakyat", "Seni Rakyat", "Les arts populaires", "Las artes populares"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("الفنون الشعبية تحكي قصة الأجداد! لنتعلّم عنها.", "Folk arts tell the story of our ancestors! Let's learn about them.", "Seni rakyat menceritakan kisah nenek moyang! Jom belajar tentangnya.", "Seni rakyat menceritakan kisah nenek moyang! Ayo pelajari tentangnya.", "Les arts populaires racontent l'histoire de nos ancêtres ! Apprenons-en davantage.", "¡Las artes populares cuentan la historia de nuestros ancestros! Aprendamos sobre ellas."),
          vocabulary: [
            {
              id: "g6u4l2v1",
              arabic: "الشِّعْرُ الشَّعْبِيُّ",
              transliteration: "ash-shiʿru sh-shaʿbiyy",
              translation: t("الشِّعْرُ الشَّعْبِيُّ", "folk poetry", "puisi rakyat", "puisi rakyat", "la poésie populaire", "la poesía popular"),
              emoji: "📜"
            },
            {
              id: "g6u4l2v2",
              arabic: "الرَّقْصُ التَّقْلِيدِيُّ",
              transliteration: "ar-raqṣu t-taqlīdiyy",
              translation: t("الرَّقْصُ التَّقْلِيدِيُّ", "traditional dance", "tarian tradisional", "tari tradisional", "la danse traditionnelle", "la danza tradicional"),
              emoji: "💃"
            },
            {
              id: "g6u4l2v3",
              arabic: "الْمُوسِيقَى التُّرَاثِيَّةُ",
              transliteration: "al-mūsīqā t-turāthiyya",
              translation: t("الْمُوسِيقَى التُّرَاثِيَّةُ", "heritage music", "muzik warisan", "musik warisan", "la musique patrimoniale", "la música patrimonial"),
              emoji: "🎵"
            },
            {
              id: "g6u4l2v4",
              arabic: "الْحِرَفُ الْيَدَوِيَّةُ",
              transliteration: "al-ḥirafu l-yadawiyya",
              translation: t("الْحِرَفُ الْيَدَوِيَّةُ", "handicrafts", "kraftangan", "kerajinan tangan", "l'artisanat", "la artesanía"),
              emoji: "🧵"
            },
            {
              id: "g6u4l2v5",
              arabic: "نَحْيَا بِهِ",
              transliteration: "naḥyā bihi",
              translation: t("نَحْيَا بِهِ", "we live by it", "kita hidup dengannya", "kita hidup dengannya", "nous en vivons", "vivimos con ello"),
              emoji: "❤️"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g6u4l2e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الْحِرَفُ الْيَدَوِيَّةُ",
              options: [
                "الشِّعْرُ الشَّعْبِيُّ",
                "الْحِرَفُ الْيَدَوِيَّةُ",
                "الرَّقْصُ التَّقْلِيدِيُّ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9f5/512.webp"
            },
            {
              id: "g6u4l2e2",
              type: "mcq",
              skill: "reading",
              prompt: t("ما أهمية الفنون الشعبية؟", "What is the importance of folk arts?", "Apakah kepentingan seni rakyat?", "Apa pentingnya seni rakyat?", "Quelle est l'importance des arts populaires ?", "¿Cuál es la importancia de las artes populares?"),
              options: [
                "تَحْفَظُ الثَّقَافَةَ وَالتُّرَاثَ",
                "لَا أَهَمِّيَّةَ لَهَا",
                "هِيَ مُجَرَّدُ تَسْلِيَةٍ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4dc/512.webp"
            },
            {
              id: "g6u4l2e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قل فنًّا شعبيًا تعرفه وتحبه", "Say a folk art you know and love", "Sebut seni rakyat yang anda tahu dan suka", "Sebutkan seni rakyat yang kamu tahu dan suka", "Dis un art populaire que tu connais et aimes", "Di un arte popular que conoces y amas"),
              arabicText: "أُحِبُّ الشِّعْرَ الشَّعْبِيَّ وَالْحِرَفَ الْيَدَوِيَّةَ لِأَنَّهُمَا يَحْكِيَانِ قِصَّةَ أَجْدَادِنَا",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4dc/512.webp"
            },
            {
              id: "g6u4l2e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا الشِّعْرُ الشَّعْبِيُّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4dc/512.webp"
            },
            {
              id: "g6u4l2writeg6u4l2v3",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"الْمُوسِيقَى التُّرَاثِيَّةُ\"", "Type the Arabic word for: \"heritage music\"", "Taip perkataan Arab untuk: \"muzik warisan\"", "Ketik kata Arab untuk: \"musik warisan\"", "Tape le mot arabe pour : \"la musique patrimoniale\"", "Escribe la palabra árabe para: \"la música patrimonial\""),
              arabicText: "الْمُوسِيقَى التُّرَاثِيَّةُ",
              answer: "الْمُوسِيقَى التُّرَاثِيَّةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3b5/512.webp"
            },
            {
              id: "g6u4l2spellg6u4l2v1",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "الشِّعْرُ الشَّعْبِيُّ",
              answer: "الشِّعْرُ الشَّعْبِيُّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4dc/512.webp"
            },
            {
              id: "g6u4l2listeng6u4l2v5",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "نَحْيَا بِهِ",
              options: [
                "مَعًا",
                "نَحْيَا بِهِ",
                "الصَّلَاةُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2764-fe0f/512.webp"
            },
            {
              id: "g6u4l2speakg6u4l2v4",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "الْحِرَفُ الْيَدَوِيَّةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9f5/512.webp"
            }
          ]
        },
        {
          id: "g6u4l3",
          unitId: "g6u4",
          gradeId: "g6",
          order: 3,
          title: t("الْأَزْيَاءُ التَّقْلِيدِيَّةُ", "Traditional Clothing", "Pakaian Tradisional", "Pakaian Tradisional", "Les vêtements traditionnels", "La vestimenta tradicional"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("الزي التقليدي رمز للهوية والانتماء! لنتعلّم عنه.", "Traditional clothing is a symbol of identity and belonging! Let's learn about it.", "Pakaian tradisional adalah simbol identiti dan kesetiaan! Jom belajar tentangnya.", "Pakaian tradisional adalah simbol identitas dan kesetiaan! Ayo pelajari tentangnya.", "Le vêtement traditionnel est un symbole d'identité et d'appartenance ! Apprenons-en davantage.", "¡La vestimenta tradicional es un símbolo de identidad y pertenencia! Aprendamos sobre ella."),
          vocabulary: [
            {
              id: "g6u4l3v1",
              arabic: "الزِّيُّ التَّقْلِيدِيُّ",
              transliteration: "az-ziyyu t-taqlīdiyy",
              translation: t("الزِّيُّ التَّقْلِيدِيُّ", "traditional clothing", "pakaian tradisional", "pakaian tradisional", "le costume traditionnel", "el traje tradicional"),
              emoji: "👘"
            },
            {
              id: "g6u4l3v2",
              arabic: "الْهُوِيَّةُ",
              transliteration: "al-huwiyya",
              translation: t("الْهُوِيَّةُ", "identity", "identiti", "identitas", "l'identité", "la identidad"),
              emoji: "🪪"
            },
            {
              id: "g6u4l3v3",
              arabic: "مُتَمَيِّزٌ",
              transliteration: "mutamayyiz",
              translation: t("مُتَمَيِّزٌ", "distinctive", "tersendiri", "khas", "distinctif", "distintivo"),
              emoji: "⭐"
            },
            {
              id: "g6u4l3v4",
              arabic: "نَرْتَدِي",
              transliteration: "nartadī",
              translation: t("نَرْتَدِي", "we wear", "kita pakai", "kita kenakan", "nous portons", "vestimos"),
              emoji: "👗"
            },
            {
              id: "g6u4l3v5",
              arabic: "الْمُنَاسَبَاتُ",
              transliteration: "al-munāsabāt",
              translation: t("الْمُنَاسَبَاتُ", "occasions", "majlis/acara", "acara", "les occasions", "las ocasiones"),
              emoji: "🎊"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g6u4l3e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الْهُوِيَّةُ",
              options: [
                "الزِّيُّ التَّقْلِيدِيُّ",
                "الْهُوِيَّةُ",
                "الْمُنَاسَبَاتُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1faaa/512.webp"
            },
            {
              id: "g6u4l3e2",
              type: "mcq",
              skill: "reading",
              prompt: t("متى نرتدي الأزياء التقليدية؟", "When do we wear traditional clothing?", "Bila kita memakai pakaian tradisional?", "Kapan kita mengenakan pakaian tradisional?", "Quand porte-t-on les vêtements traditionnels ?", "¿Cuándo usamos la vestimenta tradicional?"),
              options: [
                "فِي الْمُنَاسَبَاتِ الْوَطَنِيَّةِ وَالثَّقَافِيَّةِ",
                "يَوْمِيًّا فَقَطْ",
                "لَا نَرْتَدِيهَا أَبَدًا"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f458/512.webp"
            },
            {
              id: "g6u4l3e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("صف زيًّا تقليديًّا تعرفه", "Describe a traditional outfit you know", "Huraikan pakaian tradisional yang anda kenal", "Gambarkan pakaian tradisional yang kamu kenal", "Décris un costume traditionnel que tu connais", "Describe un traje tradicional que conozcas"),
              arabicText: "أَعْرِفُ الزِّيَّ التَّقْلِيدِيَّ وَهُوَ مُتَمَيِّزٌ يُعَبِّرُ عَنْ هُوِيَّتِنَا",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2b50/512.webp"
            },
            {
              id: "g6u4l3e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا الزِّيُّ التَّقْلِيدِيُّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f458/512.webp"
            },
            {
              id: "g6u4l3writeg6u4l3v2",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"الْهُوِيَّةُ\"", "Type the Arabic word for: \"identity\"", "Taip perkataan Arab untuk: \"identiti\"", "Ketik kata Arab untuk: \"identitas\"", "Tape le mot arabe pour : \"l'identité\"", "Escribe la palabra árabe para: \"la identidad\""),
              arabicText: "الْهُوِيَّةُ",
              answer: "الْهُوِيَّةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1faaa/512.webp"
            },
            {
              id: "g6u4l3spellg6u4l3v2",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "الْهُوِيَّةُ",
              answer: "الْهُوِيَّةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1faaa/512.webp"
            },
            {
              id: "g6u4l3listeng6u4l3v1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الزِّيُّ التَّقْلِيدِيُّ",
              options: [
                "الصِّحَّةُ النَّفْسِيَّةُ",
                "التَّبْذِيرُ",
                "الزِّيُّ التَّقْلِيدِيُّ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f458/512.webp"
            },
            {
              id: "g6u4l3spellg6u4l3v3",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "مُتَمَيِّزٌ",
              answer: "مُتَمَيِّزٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2b50/512.webp"
            }
          ]
        },
        {
          id: "g6u4l4",
          unitId: "g6u4",
          gradeId: "g6",
          order: 4,
          title: t("الطَّعَامُ التَّقْلِيدِيُّ", "Traditional Food", "Makanan Tradisional", "Makanan Tradisional", "La nourriture traditionnelle", "La comida tradicional"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("المطبخ التقليدي كنز من كنوز التراث! لنتعلّم عن الأطباق التقليدية.", "Traditional cuisine is a treasure of heritage! Let's learn about traditional dishes.", "Masakan tradisional adalah khazanah warisan! Jom belajar tentang hidangan tradisional.", "Masakan tradisional adalah harta warisan! Ayo pelajari tentang hidangan tradisional.", "La cuisine traditionnelle est un trésor patrimonial ! Apprenons les plats traditionnels.", "¡La cocina tradicional es un tesoro patrimonial! Aprendamos sobre los platos tradicionales."),
          vocabulary: [
            {
              id: "g6u4l4v1",
              arabic: "الطَّعَامُ التَّقْلِيدِيُّ",
              transliteration: "aṭ-ṭaʿāmu t-taqlīdiyy",
              translation: t("الطَّعَامُ التَّقْلِيدِيُّ", "traditional food", "makanan tradisional", "makanan tradisional", "la nourriture traditionnelle", "la comida tradicional"),
              emoji: "🍲"
            },
            {
              id: "g6u4l4v2",
              arabic: "الْوَصْفَةُ الْمَوْرُوثَةُ",
              transliteration: "al-waṣfatu l-mawrūtha",
              translation: t("الْوَصْفَةُ الْمَوْرُوثَةُ", "inherited recipe", "resepi turun-temurun", "resep tradisional", "la recette héritée", "la receta heredada"),
              emoji: "📋"
            },
            {
              id: "g6u4l4v3",
              arabic: "الطَّابِعُ الْمَحَلِّيُّ",
              transliteration: "aṭ-ṭābiʿu l-maḥalliyy",
              translation: t("الطَّابِعُ الْمَحَلِّيُّ", "local character", "ciri tempatan", "ciri khas lokal", "le caractère local", "el carácter local"),
              emoji: "📍"
            },
            {
              id: "g6u4l4v4",
              arabic: "التَّوَابِلُ",
              transliteration: "at-tawābil",
              translation: t("التَّوَابِلُ", "spices", "rempah", "rempah-rempah", "les épices", "las especias"),
              emoji: "🌶️"
            },
            {
              id: "g6u4l4v5",
              arabic: "لَذِيذٌ",
              transliteration: "ladhīdh",
              translation: t("لَذِيذٌ", "delicious", "sedap", "lezat", "délicieux", "delicioso"),
              emoji: "😋"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g6u4l4e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "التَّوَابِلُ",
              options: [
                "لَذِيذٌ",
                "التَّوَابِلُ",
                "الطَّابِعُ الْمَحَلِّيُّ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f336-fe0f/512.webp"
            },
            {
              id: "g6u4l4e2",
              type: "mcq",
              skill: "reading",
              prompt: t("لماذا نحافظ على الوصفات التقليدية؟", "Why do we preserve traditional recipes?", "Kenapa kita jaga resepi tradisional?", "Mengapa kita menjaga resep tradisional?", "Pourquoi préserve-t-on les recettes traditionnelles ?", "¿Por qué preservamos las recetas tradicionales?"),
              options: [
                "لِأَنَّهَا جُزْءٌ مِنْ تُرَاثِنَا وَهُوِيَّتِنَا",
                "لِأَنَّهَا تُكَلِّفُ كَثِيرًا",
                "لَا دَاعِيَ لِلْمُحَافَظَةِ عَلَيْهَا"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f372/512.webp"
            },
            {
              id: "g6u4l4e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قل طبقًا تقليديًّا تحبه", "Say a traditional dish you love", "Sebut hidangan tradisional yang anda suka", "Sebutkan hidangan tradisional yang kamu suka", "Dis un plat traditionnel que tu aimes", "Di un plato tradicional que amas"),
              arabicText: "أُحِبُّ الطَّعَامَ التَّقْلِيدِيَّ لِأَنَّهُ لَذِيذٌ وَيَحْمِلُ طَابَعَ هُوِيَّتِنَا",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60b/512.webp"
            },
            {
              id: "g6u4l4e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا الطَّعَامُ التَّقْلِيدِيُّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f372/512.webp"
            },
            {
              id: "g6u4l4spellg6u4l4v1",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "الطَّعَامُ التَّقْلِيدِيُّ",
              answer: "الطَّعَامُ التَّقْلِيدِيُّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f372/512.webp"
            },
            {
              id: "g6u4l4listeng6u4l4v3",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الطَّابِعُ الْمَحَلِّيُّ",
              options: [
                "الطَّابِعُ الْمَحَلِّيُّ",
                "الْمَلْعَبُ",
                "الصِّحَّةُ النَّفْسِيَّةُ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4cd/512.webp"
            },
            {
              id: "g6u4l4writeg6u4l4v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"الطَّعَامُ التَّقْلِيدِيُّ\"", "Type the Arabic word for: \"traditional food\"", "Taip perkataan Arab untuk: \"makanan tradisional\"", "Ketik kata Arab untuk: \"makanan tradisional\"", "Tape le mot arabe pour : \"la nourriture traditionnelle\"", "Escribe la palabra árabe para: \"la comida tradicional\""),
              arabicText: "الطَّعَامُ التَّقْلِيدِيُّ",
              answer: "الطَّعَامُ التَّقْلِيدِيُّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f372/512.webp"
            },
            {
              id: "g6u4l4writeg6u4l4v3",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"الطَّابِعُ الْمَحَلِّيُّ\"", "Type the Arabic word for: \"local character\"", "Taip perkataan Arab untuk: \"ciri tempatan\"", "Ketik kata Arab untuk: \"ciri khas lokal\"", "Tape le mot arabe pour : \"le caractère local\"", "Escribe la palabra árabe para: \"el carácter local\""),
              arabicText: "الطَّابِعُ الْمَحَلِّيُّ",
              answer: "الطَّابِعُ الْمَحَلِّيُّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4cd/512.webp"
            }
          ]
        },
        {
          id: "g6u4l5",
          unitId: "g6u4",
          gradeId: "g6",
          order: 5,
          title: t("الْأَمْثَالُ الشَّعْبِيَّةُ", "Folk Proverbs", "Peribahasa Rakyat", "Peribahasa Rakyat", "Les proverbes populaires", "Los proverbios populares"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("الأمثال الشعبية حكمة الأجداد في كلمات! لنتعلّم بعضها.", "Folk proverbs are the wisdom of ancestors in words! Let's learn some of them.", "Peribahasa rakyat adalah kebijaksanaan nenek moyang dalam kata-kata! Jom belajar beberapa.", "Peribahasa rakyat adalah kebijaksanaan nenek moyang dalam kata-kata! Ayo pelajari beberapa.", "Les proverbes populaires sont la sagesse des ancêtres en mots ! Apprenons-en quelques-uns.", "¡Los proverbios populares son la sabiduría de los ancestros en palabras! Aprendamos algunos."),
          vocabulary: [
            {
              id: "g6u4l5v1",
              arabic: "الْمَثَلُ",
              transliteration: "al-mathal",
              translation: t("الْمَثَلُ", "proverb", "peribahasa", "peribahasa", "le proverbe", "el proverbio"),
              emoji: "💬"
            },
            {
              id: "g6u4l5v2",
              arabic: "الْحِكْمَةُ",
              transliteration: "al-ḥikma",
              translation: t("الْحِكْمَةُ", "wisdom", "kebijaksanaan", "kebijaksanaan", "la sagesse", "la sabiduría"),
              emoji: "🦉"
            },
            {
              id: "g6u4l5v3",
              arabic: "الْأَجْدَادُ",
              transliteration: "al-ajdād",
              translation: t("الْأَجْدَادُ", "ancestors", "nenek moyang", "nenek moyang", "les ancêtres", "los ancestros"),
              emoji: "👴"
            },
            {
              id: "g6u4l5v4",
              arabic: "الْمَعْنَى",
              transliteration: "al-maʿnā",
              translation: t("الْمَعْنَى", "meaning", "makna", "makna", "le sens", "el significado"),
              emoji: "📖"
            },
            {
              id: "g6u4l5v5",
              arabic: "نَتَعَلَّمُ",
              transliteration: "nataʿallamu",
              translation: t("نَتَعَلَّمُ", "we learn", "kita belajar", "kita belajar", "nous apprenons", "aprendemos"),
              emoji: "💡"
            }
          ],
          dialogue: [
            {
              speaker: "مُعَلِّمٌ",
              arabic: "هَلْ تَعْرِفُونَ هَذَا الْمَثَلَ: الصَّبْرُ مِفْتَاحُ الْفَرَجِ؟",
              translation: t("هَلْ تَعْرِفُونَ هَذَا الْمَثَلَ: الصَّبْرُ مِفْتَاحُ الْفَرَجِ؟", "Do you know this proverb: Patience is the key to relief?", "Adakah anda tahu peribahasa ini: Sabar adalah kunci kelapangan?", "Apakah kamu tahu peribahasa ini: Kesabaran adalah kunci kemudahan?", "Connaissez-vous ce proverbe : La patience est la clé du soulagement ?", "¿Conocen este proverbio: La paciencia es la clave del alivio?")
            },
            {
              speaker: "تَلَامِيذُ",
              arabic: "نَعَمْ! مَعْنَاهُ أَنَّ الصَّبْرَ يُوصِلُنَا إِلَى النَّجَاحِ.",
              translation: t("نَعَمْ! مَعْنَاهُ أَنَّ الصَّبْرَ يُوصِلُنَا إِلَى النَّجَاحِ.", "Yes! It means patience leads us to success.", "Ya! Maknanya kesabaran membawa kita kepada kejayaan.", "Ya! Artinya kesabaran membawa kita kepada keberhasilan.", "Oui ! Cela signifie que la patience nous mène au succès.", "¡Sí! Significa que la paciencia nos lleva al éxito.")
            }
          ],
          exercises: [
            {
              id: "g6u4l5e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الْحِكْمَةُ",
              options: [
                "الْمَثَلُ",
                "الْحِكْمَةُ",
                "الْمَعْنَى"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f989/512.webp"
            },
            {
              id: "g6u4l5e2",
              type: "mcq",
              skill: "reading",
              prompt: t("ما معنى مثل: الصبر مفتاح الفرج؟", "What does the proverb 'Patience is the key to relief' mean?", "Apa makna peribahasa: Sabar adalah kunci kelapangan?", "Apa makna peribahasa: Kesabaran adalah kunci kemudahan?", "Que signifie le proverbe : La patience est la clé du soulagement ?", "¿Qué significa el proverbio: La paciencia es la clave del alivio?"),
              options: [
                "الصَّبْرُ يُوصِلُنَا إِلَى النَّجَاحِ",
                "الصَّبْرُ مُضِرٌّ",
                "لَا مَعْنَى لَهُ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4ac/512.webp"
            },
            {
              id: "g6u4l5e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قل مثلًا شعبيًّا تعرفه مع شرح معناه", "Say a folk proverb you know with its meaning", "Sebut peribahasa yang anda tahu beserta maknanya", "Sebutkan peribahasa yang kamu tahu beserta maknanya", "Dis un proverbe populaire que tu connais avec sa signification", "Di un proverbio popular que conozcas con su significado"),
              arabicText: "مَثَلٌ جَمِيلٌ: الصَّبْرُ مِفْتَاحُ الْفَرَجِ، أَيْ أَنَّ الصَّبْرَ يَجْلِبُ النَّجَاحَ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4ac/512.webp"
            },
            {
              id: "g6u4l5e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَلْ تَعْرِفُونَ هَذَا الْمَثَلَ: الصَّبْرُ مِفْتَاحُ الْفَرَجِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4ac/512.webp"
            },
            {
              id: "g6u4l5spellg6u4l5v3",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "الْأَجْدَادُ",
              answer: "الْأَجْدَادُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f474/512.webp"
            },
            {
              id: "g6u4l5arrange2",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "نَعَمْ! مَعْنَاهُ أَنَّ الصَّبْرَ يُوصِلُنَا إِلَى النَّجَاحِ.",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4ac/512.webp"
            },
            {
              id: "g6u4l5speakg6u4l5v2",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "الْحِكْمَةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f989/512.webp"
            },
            {
              id: "g6u4l5spellg6u4l5v2",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "الْحِكْمَةُ",
              answer: "الْحِكْمَةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f989/512.webp"
            }
          ]
        },
        {
          id: "g6u4l6",
          unitId: "g6u4",
          gradeId: "g6",
          order: 6,
          title: t("نَحْفَظُ تُرَاثَنَا", "We Preserve Our Heritage", "Kita Jaga Warisan Kita", "Kita Jaga Warisan Kita", "Nous préservons notre patrimoine", "Preservamos nuestro patrimonio"),
          skills: [
            "listening",
            "speaking",
            "reading"
          ],
          intro: t("حفظ التراث مسؤولية كل فرد منا! لنتعلّم كيف نحمي موروثنا الثقافي.", "Preserving heritage is every individual's responsibility! Let's learn how to protect our cultural heritage.", "Menjaga warisan adalah tanggungjawab setiap individu! Jom belajar cara melindungi warisan budaya kita.", "Menjaga warisan adalah tanggung jawab setiap individu! Ayo pelajari cara melindungi warisan budaya kita.", "Préserver le patrimoine est la responsabilité de chacun ! Apprenons à protéger notre héritage culturel.", "¡Preservar el patrimonio es responsabilidad de todos! Aprendamos a proteger nuestro legado cultural."),
          vocabulary: [
            {
              id: "g6u4l6v1",
              arabic: "نَحْفَظُ",
              transliteration: "naḥfaẓu",
              translation: t("نَحْفَظُ", "we preserve", "kita jaga", "kita jaga", "nous préservons", "preservamos"),
              emoji: "🛡️"
            },
            {
              id: "g6u4l6v2",
              arabic: "نُوَثِّقُ",
              transliteration: "nuwathththiqu",
              translation: t("نُوَثِّقُ", "we document", "kita dokumen", "kita dokumentasikan", "nous documentons", "documentamos"),
              emoji: "📝"
            },
            {
              id: "g6u4l6v3",
              arabic: "الْأَجْيَالُ الْقَادِمَةُ",
              transliteration: "al-ajyālu l-qādima",
              translation: t("الْأَجْيَالُ الْقَادِمَةُ", "future generations", "generasi akan datang", "generasi mendatang", "les générations futures", "las generaciones futuras"),
              emoji: "👶"
            },
            {
              id: "g6u4l6v4",
              arabic: "النَّقْلُ",
              transliteration: "an-naql",
              translation: t("النَّقْلُ", "transmission/passing on", "pemindahan", "penerusan", "la transmission", "la transmisión"),
              emoji: "🔗"
            },
            {
              id: "g6u4l6v5",
              arabic: "الْمَسْؤُولِيَّةُ",
              transliteration: "al-masʾūliyya",
              translation: t("الْمَسْؤُولِيَّةُ", "responsibility", "tanggungjawab", "tanggung jawab", "la responsabilité", "la responsabilidad"),
              emoji: "⚖️"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g6u4l6e1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "نُوَثِّقُ",
              options: [
                "نَحْفَظُ",
                "نُوَثِّقُ",
                "النَّقْلُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4dd/512.webp"
            },
            {
              id: "g6u4l6e2",
              type: "mcq",
              skill: "reading",
              prompt: t("ما أهمية نقل التراث للأجيال القادمة؟", "What is the importance of passing heritage to future generations?", "Apakah kepentingan menyampaikan warisan kepada generasi akan datang?", "Apa pentingnya meneruskan warisan kepada generasi mendatang?", "Quelle est l'importance de transmettre le patrimoine aux générations futures ?", "¿Cuál es la importancia de transmitir el patrimonio a las generaciones futuras?"),
              options: [
                "لِضَمَانِ اسْتِمْرَارِ الْهُوِيَّةِ وَالثَّقَافَةِ",
                "لَا أَهَمِّيَّةَ لِذَلِكَ",
                "لِأَنَّهُ إِجْبَارِيٌّ فَقَطْ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6e1-fe0f/512.webp"
            },
            {
              id: "g6u4l6e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قل كيف تحافظ على تراث بلدك", "Say how you preserve your country's heritage", "Sebut cara anda menjaga warisan negara anda", "Sebutkan cara kamu menjaga warisan negaramu", "Dis comment tu préserves le patrimoine de ton pays", "Di cómo preservas el patrimonio de tu país"),
              arabicText: "أُحَافِظُ عَلَى تُرَاثِنَا بِتَعَلُّمِهِ وَتَعْلِيمِهِ وَتَوْثِيقِهِ لِلْأَجْيَالِ الْقَادِمَةِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6e1-fe0f/512.webp"
            },
            {
              id: "g6u4l6e-arrange",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن جملة", "Arrange the words to make a sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "هَذَا نَحْفَظُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6e1-fe0f/512.webp"
            },
            {
              id: "g6u4l6listeng6u4l6v4",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "النَّقْلُ",
              options: [
                "النَّقْلُ",
                "نُفَرِّزُ",
                "الْأَجْدَادُ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f517/512.webp"
            },
            {
              id: "g6u4l6speakg6u4l6v1",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "نَحْفَظُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6e1-fe0f/512.webp"
            },
            {
              id: "g6u4l6writeg6u4l6v5",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"الْمَسْؤُولِيَّةُ\"", "Type the Arabic word for: \"responsibility\"", "Taip perkataan Arab untuk: \"tanggungjawab\"", "Ketik kata Arab untuk: \"tanggung jawab\"", "Tape le mot arabe pour : \"la responsabilité\"", "Escribe la palabra árabe para: \"la responsabilidad\""),
              arabicText: "الْمَسْؤُولِيَّةُ",
              answer: "الْمَسْؤُولِيَّةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2696-fe0f/512.webp"
            },
            {
              id: "g6u4l6writeg6u4l6v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"نَحْفَظُ\"", "Type the Arabic word for: \"we preserve\"", "Taip perkataan Arab untuk: \"kita jaga\"", "Ketik kata Arab untuk: \"kita jaga\"", "Tape le mot arabe pour : \"nous préservons\"", "Escribe la palabra árabe para: \"preservamos\""),
              arabicText: "نَحْفَظُ",
              answer: "نَحْفَظُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6e1-fe0f/512.webp"
            }
          ]
        },
        {
          id: "g6u4review",
          unitId: "g6u4",
          gradeId: "g6",
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
              id: "g6u4l1v1",
              arabic: "التُّرَاثُ",
              transliteration: "at-turāth",
              translation: t("التُّرَاثُ", "heritage", "warisan", "warisan", "le patrimoine", "el patrimonio"),
              emoji: "🏛️"
            },
            {
              id: "g6u4l1v2",
              arabic: "الْحَضَارَةُ",
              transliteration: "al-ḥaḍāra",
              translation: t("الْحَضَارَةُ", "civilisation", "tamadun", "peradaban", "la civilisation", "la civilización"),
              emoji: "🌍"
            },
            {
              id: "g6u4l1v3",
              arabic: "الْمَوْرُوثُ",
              transliteration: "al-mawrūth",
              translation: t("الْمَوْرُوثُ", "inherited/traditional", "tradisi turun-temurun", "warisan tradisional", "l'héritage", "lo heredado"),
              emoji: "📜"
            },
            {
              id: "g6u4l1v4",
              arabic: "نَفْتَخِرُ",
              transliteration: "naftakhiru",
              translation: t("نَفْتَخِرُ", "we are proud", "kita bangga", "kita bangga", "nous sommes fiers", "estamos orgullosos"),
              emoji: "🦁"
            },
            {
              id: "g6u4l1v5",
              arabic: "الْأَصَالَةُ",
              transliteration: "al-aṣāla",
              translation: t("الْأَصَالَةُ", "authenticity", "keaslian", "keaslian", "l'authenticité", "la autenticidad"),
              emoji: "🌟"
            },
            {
              id: "g6u4l2v1",
              arabic: "الشِّعْرُ الشَّعْبِيُّ",
              transliteration: "ash-shiʿru sh-shaʿbiyy",
              translation: t("الشِّعْرُ الشَّعْبِيُّ", "folk poetry", "puisi rakyat", "puisi rakyat", "la poésie populaire", "la poesía popular"),
              emoji: "📜"
            },
            {
              id: "g6u4l2v2",
              arabic: "الرَّقْصُ التَّقْلِيدِيُّ",
              transliteration: "ar-raqṣu t-taqlīdiyy",
              translation: t("الرَّقْصُ التَّقْلِيدِيُّ", "traditional dance", "tarian tradisional", "tari tradisional", "la danse traditionnelle", "la danza tradicional"),
              emoji: "💃"
            },
            {
              id: "g6u4l2v3",
              arabic: "الْمُوسِيقَى التُّرَاثِيَّةُ",
              transliteration: "al-mūsīqā t-turāthiyya",
              translation: t("الْمُوسِيقَى التُّرَاثِيَّةُ", "heritage music", "muzik warisan", "musik warisan", "la musique patrimoniale", "la música patrimonial"),
              emoji: "🎵"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "g6u4reviewwriteg6u4l1v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"التُّرَاثُ\"", "Type the Arabic word for: \"heritage\"", "Taip perkataan Arab untuk: \"warisan\"", "Ketik kata Arab untuk: \"warisan\"", "Tape le mot arabe pour : \"le patrimoine\"", "Escribe la palabra árabe para: \"el patrimonio\""),
              arabicText: "التُّرَاثُ",
              answer: "التُّرَاثُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3db-fe0f/512.webp"
            },
            {
              id: "g6u4reviewwriteg6u4l2v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"الشِّعْرُ الشَّعْبِيُّ\"", "Type the Arabic word for: \"folk poetry\"", "Taip perkataan Arab untuk: \"puisi rakyat\"", "Ketik kata Arab untuk: \"puisi rakyat\"", "Tape le mot arabe pour : \"la poésie populaire\"", "Escribe la palabra árabe para: \"la poesía popular\""),
              arabicText: "الشِّعْرُ الشَّعْبِيُّ",
              answer: "الشِّعْرُ الشَّعْبِيُّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4dc/512.webp"
            },
            {
              id: "g6u4reviewspeakg6u4l1v2",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "الْحَضَارَةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f30d/512.webp"
            },
            {
              id: "g6u4reviewspellg6u4l1v4",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "نَفْتَخِرُ",
              answer: "نَفْتَخِرُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f981/512.webp"
            },
            {
              id: "g6u4reviewmcqg6u4l2v3",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"الْمُوسِيقَى التُّرَاثِيَّةُ\"؟", "What does \"heritage music\" mean?", "Apakah maksud \"muzik warisan\"?", "Apa arti \"musik warisan\"?", "Que signifie \"la musique patrimoniale\" ?", "¿Qué significa \"la música patrimonial\"?"),
              arabicText: "الْمُوسِيقَى التُّرَاثِيَّةُ",
              options: [
                "playground/stadium",
                "peace of mind",
                "we cooperate",
                "heritage music"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3b5/512.webp"
            },
            {
              id: "g6u4reviewlisteng6u4l1v3",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الْمَوْرُوثُ",
              options: [
                "الْمَوْرُوثُ",
                "الرَّاحَةُ",
                "نَفْتَخِرُ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4dc/512.webp"
            }
          ]
        }
      ]
    }
  ]
};
