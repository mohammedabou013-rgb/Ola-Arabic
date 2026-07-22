import { t, type GradeData, type CurriculumId } from "./types";

export const uaeGrade2: GradeData = {
  id: "uae-g2",
  number: 2,
  color: "#3B82F6",
  icon: "book",
  title: t("المستوى الثاني", "Stage 2", "Tahun 2", "Kelas 2", "Année 2", "Año 2"),
  description: t("تعلّم الجسم والعائلة والوقت والأصدقاء وأوقات سعيدة", "Learn about the body, family, time, friends and happy times", "Belajar tentang badan, keluarga, masa, rakan dan masa bahagia", "Belajar tentang tubuh, keluarga, waktu, teman dan waktu bahagia", "Apprendre le corps, la famille, le temps, les amis et les bons moments", "Aprender sobre el cuerpo, la familia, el tiempo, los amigos y momentos felices"),
  units: [
    {
      id: "uae-g2u1",
      gradeId: "uae-g2",
      order: 1,
      title: t("جِسْمِي الصَّغِيرُ", "Body", "Badanku yang Kecil", "Tubuhku yang Kecil", "petit corps", "cuerpito"),
      theme: "body",
      lessons: [
        {
          id: "uae-g2u1l1",
          unitId: "uae-g2u1",
          gradeId: "uae-g2",
          order: 1,
          title: t("جِسْمِي", "Body", "Badanku", "Tubuhku", "corps", "cuerpo"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("جِسْمِي لَهُ أَعْضَاءٌ كَثِيرَةٌ، وَأَعْرِفُهَا وَأَسْتَعْمِلُهَا كُلَّ يَوْمٍ.", "My body has many parts, and I know and use them every day.", "Badanku mempunyai banyak bahagian, dan saya mengenalinya serta menggunakannya setiap hari.", "Tubuhku punya banyak bagian, dan aku mengenal serta menggunakannya setiap hari.", "Mon corps a de nombreuses parties, et je les connais et les utilise chaque jour.", "Mi cuerpo tiene muchas partes, y las conozco y las uso cada día."),
          vocabulary: [
            {
              id: "uae-g2u1l1-v1",
              arabic: "رَأْسٌ",
              transliteration: "raʾsun",
              translation: t("رَأْسٌ", "head", "kepala", "kepala", "tête", "cabeza"),
              emoji: "🧠"
            },
            {
              id: "uae-g2u1l1-v2",
              arabic: "عَيْنٌ",
              transliteration: "ʿaynun",
              translation: t("عَيْنٌ", "eye", "mata", "mata", "œil", "ojo"),
              emoji: "👁️"
            },
            {
              id: "uae-g2u1l1-v3",
              arabic: "أُذُنٌ",
              transliteration: "udhunun",
              translation: t("أُذُنٌ", "ear", "telinga", "telinga", "oreille", "oreja"),
              emoji: "👂"
            },
            {
              id: "uae-g2u1l1-v4",
              arabic: "فَمٌ",
              transliteration: "famun",
              translation: t("فَمٌ", "mouth", "mulut", "mulut", "bouche", "boca"),
              emoji: "👄"
            },
            {
              id: "uae-g2u1l1-v5",
              arabic: "يَدٌ",
              transliteration: "yadun",
              translation: t("يَدٌ", "hand", "tangan", "tangan", "main", "mano"),
              emoji: "✋"
            },
            {
              id: "uae-g2u1l1-v6",
              arabic: "رِجْلٌ",
              transliteration: "rijlun",
              translation: t("رِجْلٌ", "leg", "kaki", "kaki", "jambe", "pierna"),
              emoji: "🦵"
            },
            {
              id: "uae-g2u1l1-v7",
              arabic: "إِصْبَعٌ",
              transliteration: "iṣbaʿun",
              translation: t("إِصْبَعٌ", "finger", "jari", "jari", "doigt", "dedo"),
              emoji: "☝️"
            },
            {
              id: "uae-g2u1l1-v8",
              arabic: "قَلْبٌ",
              transliteration: "qalbun",
              translation: t("قَلْبٌ", "heart", "jantung", "jantung", "cœur", "corazón"),
              emoji: "❤️"
            }
          ],
          dialogue: [
            {
              speaker: "المُعَلِّمَةُ",
              arabic: "مَاذَا تَرَى فِي الصُّورَةِ؟",
              translation: t("مَاذَا تَرَى فِي الصُّورَةِ؟", "What do you see in the picture?", "Apakah yang kamu lihat dalam gambar?", "Apa yang kamu lihat di gambar?", "Que vois-tu sur l’image ?", "¿Qué ves en la imagen?")
            },
            {
              speaker: "عُمَر",
              arabic: "أَرَى رَأْسًا وَعَيْنًا وَيَدًا.",
              translation: t("أَرَى رَأْسًا وَعَيْنًا وَيَدًا.", "I see a head, an eye, and a hand.", "Saya nampak kepala, mata dan tangan.", "Aku melihat kepala, mata, dan tangan.", "Je vois une tête, un œil et une main.", "Veo una cabeza, un ojo y una mano.")
            },
            {
              speaker: "المُعَلِّمَةُ",
              arabic: "أَحْسَنْتَ!",
              translation: t("أَحْسَنْتَ!", "Well done!", "Syabas!", "Bagus sekali!", "Bravo !", "¡Muy bien!")
            }
          ],
          exercises: [
            {
              id: "uae-g2u1l1-e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ", "Listen and choose the word", "Dengar dan pilih perkataan", "Dengarkan dan pilih kata", "Écoute et choisis le mot", "Escucha y elige la palabra"),
              arabicText: "رَأْسٌ",
              options: [
                "يَدٌ",
                "رَأْسٌ",
                "رِجْلٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9e0/512.webp"
            },
            {
              id: "uae-g2u1l1-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالصُّورَةِ", "Match the word to the picture", "Padankan perkataan dengan gambar", "Cocokkan kata dengan gambar", "Associe le mot à l’image", "Relaciona la palabra con la imagen"),
              pairs: [
                {
                  a: "رَأْسٌ",
                  b: "🧠"
                },
                {
                  a: "عَيْنٌ",
                  b: "👁️"
                },
                {
                  a: "يَدٌ",
                  b: "✋"
                },
                {
                  a: "رِجْلٌ",
                  b: "🦵"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9e0/512.webp"
            },
            {
              id: "uae-g2u1l1-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنْ أَعْضَاءِ جِسْمِكَ", "Talk about your body parts", "تحدث عن anggota badan kamu", "Bicarakan bagian tubuhmu", "Parle des parties de ton corps", "Habla de las partes de tu cuerpo"),
              arabicText: "رَأْسٌ، عَيْنٌ، أُذُنٌ، يَدٌ، رِجْلٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9e0/512.webp"
            },
            {
              id: "uae-g2u1l1-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَةَ يَدٌ", "Write the word يَدٌ", "Tulis perkataan يَدٌ", "Tulis kata يَدٌ", "Écris le mot يَدٌ", "Escribe la palabra يَدٌ"),
              arabicText: "يَدٌ",
              answer: "يَدٌ",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Hand_%28PSF%29.png/512px-Hand_%28PSF%29.png"
            },
            {
              id: "uae-g2u1l1-e5",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ الْكَلِمَاتِ", "Arrange the words", "Susun perkataan", "Ordena las palabras", "Range les mots", "Ordena las palabras"),
              arabicText: "يَدٌ رَأْسٌ عَيْنٌ",
              answer: "رَأْسٌ، عَيْنٌ، يَدٌ",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Body_parts.svg/512px-Body_parts.svg.png"
            },
            {
              id: "uae-g2u1l1-e6",
              type: "fill_in_blank",
              skill: "writing",
              prompt: t("أَكْمِلِ الْجُمْلَةَ", "Complete the sentence", "Lengkapkan ayat", "Completa la oración", "Complète la phrase", "Completa la oración"),
              arabicText: "أُحِبُّ ___",
              answer: "يَدِي",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9e0/512.webp"
            },
            {
              id: "uae-g2u1l1speakuae-g2u1l1-v6",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "رِجْلٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9b5/512.webp"
            },
            {
              id: "uae-g2u1l1speakuae-g2u1l1-v2",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "عَيْنٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f441-fe0f/512.webp"
            },
            {
              id: "uae-g2u1l1listenuae-g2u1l1-v7",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "إِصْبَعٌ",
              options: [
                "صَدِيقٌ",
                "بَصَرٌ",
                "إِصْبَعٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/261d-fe0f/512.webp"
            },
            {
              id: "uae-g2u1l1writeuae-g2u1l1-v7",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"إِصْبَعٌ\"", "Type the Arabic word for: \"finger\"", "Taip perkataan Arab untuk: \"jari\"", "Ketik kata Arab untuk: \"jari\"", "Tape le mot arabe pour : \"doigt\"", "Escribe la palabra árabe para: \"dedo\""),
              arabicText: "إِصْبَعٌ",
              answer: "إِصْبَعٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/261d-fe0f/512.webp"
            },
            {
              id: "uae-g2u1l1mcquae-g2u1l1-v6",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"رِجْلٌ\"؟", "What does \"leg\" mean?", "Apakah maksud \"kaki\"?", "Apa arti \"kaki\"?", "Que signifie \"jambe\" ?", "¿Qué significa \"pierna\"?"),
              arabicText: "رِجْلٌ",
              options: [
                "leg",
                "March",
                "candle",
                "gift"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9b5/512.webp"
            },
            {
              id: "uae-g2u1l1speakuae-g2u1l1-v7",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "إِصْبَعٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/261d-fe0f/512.webp"
            }
          ]
        },
        {
          id: "uae-g2u1l2",
          unitId: "uae-g2u1",
          gradeId: "uae-g2",
          order: 2,
          title: t("حَوَاسِّيَ الخَمْسُ", "Senses", "Lima Deria", "Lima Indraku", "cinq sens", "cinco sentidos"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("أَتَعَلَّمُ أَنْ أَرَى وَأَسْمَعَ وَأَشُمَّ وَأَذُوقَ وَأَلْمِسَ.", "I learn to see, hear, smell, taste, and touch.", "Saya belajar melihat, mendengar, menghidu, merasa dan menyentuh.", "Aku belajar melihat, mendengar, mencium, mengecap, dan menyentuh.", "J’apprends à voir, entendre, sentir, goûter et toucher.", "Aprendo a ver, oír, oler, saborear y tocar."),
          vocabulary: [
            {
              id: "uae-g2u1l2-v1",
              arabic: "بَصَرٌ",
              transliteration: "baṣarun",
              translation: t("بَصَرٌ", "sight", "penglihatan", "penglihatan", "vue", "vista"),
              emoji: "👁️"
            },
            {
              id: "uae-g2u1l2-v2",
              arabic: "سَمْعٌ",
              transliteration: "samʿun",
              translation: t("سَمْعٌ", "hearing", "pendengaran", "pendengaran", "ouïe", "oído"),
              emoji: "👂"
            },
            {
              id: "uae-g2u1l2-v3",
              arabic: "شَمٌّ",
              transliteration: "shammun",
              translation: t("شَمٌّ", "smell", "bau", "penciuman", "odorat", "olfato"),
              emoji: "👃"
            },
            {
              id: "uae-g2u1l2-v4",
              arabic: "ذَوْقٌ",
              transliteration: "dhawqun",
              translation: t("ذَوْقٌ", "taste", "rasa", "rasa", "goût", "gusto"),
              emoji: "👅"
            },
            {
              id: "uae-g2u1l2-v5",
              arabic: "لَمْسٌ",
              transliteration: "lamsun",
              translation: t("لَمْسٌ", "touch", "sentuhan", "sentuhan", "toucher", "tacto"),
              emoji: "🖐️"
            },
            {
              id: "uae-g2u1l2-v6",
              arabic: "عَيْنٌ",
              transliteration: "ʿaynun",
              translation: t("عَيْنٌ", "eye", "mata", "mata", "œil", "ojo"),
              emoji: "👁️"
            },
            {
              id: "uae-g2u1l2-v7",
              arabic: "أَنْفٌ",
              transliteration: "anfun",
              translation: t("أَنْفٌ", "nose", "hidung", "hidung", "nez", "nariz"),
              emoji: "👃"
            },
            {
              id: "uae-g2u1l2-v8",
              arabic: "لِسَانٌ",
              transliteration: "lisānun",
              translation: t("لِسَانٌ", "tongue", "lidah", "lidah", "langue", "lengua"),
              emoji: "👅"
            }
          ],
          dialogue: [
            {
              speaker: "سَارَة",
              arabic: "بِأَيِّ حَاسَّةٍ نَرَى الأَلْوَانَ؟",
              translation: t("بِأَيِّ حَاسَّةٍ نَرَى الأَلْوَانَ؟", "Which sense do we use to see colors?", "Dengan deria apa kita melihat warna?", "Dengan indra apa kita melihat warna?", "Avec quel sens voyons-nous les couleurs ?", "¿Con qué sentido vemos los colores?")
            },
            {
              speaker: "خَالِد",
              arabic: "نَرَى بِحَاسَّةِ الْبَصَرِ وَبِالْعَيْنِ.",
              translation: t("نَرَى بِحَاسَّةِ الْبَصَرِ وَبِالْعَيْنِ.", "We see with the sense of sight and with the eye.", "Kita melihat dengan deria penglihatan dan mata.", "Kita melihat dengan indra penglihatan dan mata.", "Nous voyons avec le sens de la vue et avec l’œil.", "Vemos con el sentido de la vista y con el ojo.")
            },
            {
              speaker: "سَارَة",
              arabic: "وَنَسْمَعُ بِالأُذُنِ.",
              translation: t("وَنَسْمَعُ بِالأُذُنِ.", "And we hear with the ear.", "Dan kita mendengar dengan telinga.", "Dan kita mendengar dengan telinga.", "Et nous entendons avec l’oreille.", "Y oímos con la oreja.")
            }
          ],
          exercises: [
            {
              id: "uae-g2u1l2-e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْحَاسَّةَ", "Listen and choose the sense", "Dengar dan pilih deria", "Dengarkan dan pilih indra", "Écoute et choisis le sens", "Escucha y elige el sentido"),
              arabicText: "بَصَرٌ",
              options: [
                "سَمْعٌ",
                "بَصَرٌ",
                "لَمْسٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f441-fe0f/512.webp"
            },
            {
              id: "uae-g2u1l2-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْحَاسَّةَ بِعُضْوِهَا", "Match the sense to its organ", "Padankan deria dengan organ", "Cocokkan indra dengan organ", "Associe le sens à son organe", "Relaciona el sentido con su órgano"),
              pairs: [
                {
                  a: "بَصَرٌ",
                  b: "👁️"
                },
                {
                  a: "سَمْعٌ",
                  b: "👂"
                },
                {
                  a: "شَمٌّ",
                  b: "👃"
                },
                {
                  a: "ذَوْقٌ",
                  b: "👅"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f441-fe0f/512.webp"
            },
            {
              id: "uae-g2u1l2-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنْ حَوَاسِّكَ", "Talk about your senses", "تحدث عن deria kamu", "Habla de tus sentidos", "Parle de tes sens", "Habla de tus sentidos"),
              arabicText: "أَرَى، أَسْمَعُ، أَشُمُّ، أَذُوقُ، أَلْمِسُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f441-fe0f/512.webp"
            },
            {
              id: "uae-g2u1l2-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَةَ سَمْعٌ", "Write the word سَمْعٌ", "Tulis perkataan سَمْعٌ", "Tulis kata سَمْعٌ", "Écris le mot سَمْعٌ", "Escribe la palabra سَمْعٌ"),
              arabicText: "سَمْعٌ",
              answer: "سَمْعٌ",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ear_icon.svg/512px-Ear_icon.svg.png"
            },
            {
              id: "uae-g2u1l2-e5",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ الْحَوَاسَّ", "Arrange the senses", "Susun deria", "Ordena los sentidos", "Range les sens", "Ordena los sentidos"),
              arabicText: "بَصَرٌ سَمْعٌ شَمٌّ",
              answer: "بَصَرٌ، سَمْعٌ، شَمٌّ",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Five_senses.svg/512px-Five_senses.svg.png"
            },
            {
              id: "uae-g2u1l2-e6",
              type: "fill_in_blank",
              skill: "writing",
              prompt: t("اِكْمِلِ الْجُمْلَةَ", "Complete the sentence", "Lengkapkan ayat", "Completa la oración", "Complète la phrase", "Completa la oración"),
              arabicText: "أَرَى بِـ ___",
              answer: "الْعَيْنِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f441-fe0f/512.webp"
            },
            {
              id: "uae-g2u1l2spelluae-g2u1l2-v8",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "لِسَانٌ",
              answer: "لِسَانٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f445/512.webp"
            },
            {
              id: "uae-g2u1l2writeuae-g2u1l2-v3",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"شَمٌّ\"", "Type the Arabic word for: \"smell\"", "Taip perkataan Arab untuk: \"bau\"", "Ketik kata Arab untuk: \"penciuman\"", "Tape le mot arabe pour : \"odorat\"", "Escribe la palabra árabe para: \"olfato\""),
              arabicText: "شَمٌّ",
              answer: "شَمٌّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f443/512.webp"
            },
            {
              id: "uae-g2u1l2arrange2",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "نَرَى بِحَاسَّةِ الْبَصَرِ وَبِالْعَيْنِ.",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f441-fe0f/512.webp"
            },
            {
              id: "uae-g2u1l2spelluae-g2u1l2-v2",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "سَمْعٌ",
              answer: "سَمْعٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f442/512.webp"
            },
            {
              id: "uae-g2u1l2spelluae-g2u1l2-v7",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "أَنْفٌ",
              answer: "أَنْفٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f443/512.webp"
            },
            {
              id: "uae-g2u1l2listenuae-g2u1l2-v7",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "أَنْفٌ",
              options: [
                "ضَيْفٌ",
                "عُودٌ",
                "أَنْفٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f443/512.webp"
            }
          ]
        },
        {
          id: "uae-g2u1l3",
          unitId: "uae-g2u1",
          gradeId: "uae-g2",
          order: 3,
          title: t("طَعَامِيَ الصِّحِّيُّ", "Healthy Food", "Makanan Sihat", "Makanan Sehatku", "nourriture saine", "comida saludable"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("أَتَنَاوَلُ الطَّعَامَ الصِّحِّيَّ لِأَكُونَ قَوِيًّا وَنَشِيطًا.", "I eat healthy food to be strong and active.", "Saya makan makanan sihat agar kuat dan cergas.", "Aku makan makanan sehat agar kuat dan aktif.", "Je mange des aliments sains pour être fort et actif.", "Como comida saludable para estar fuerte y activo."),
          vocabulary: [
            {
              id: "uae-g2u1l3-v1",
              arabic: "خُبْزٌ",
              transliteration: "khubzun",
              translation: t("خُبْزٌ", "bread", "roti", "roti", "pain", "pan"),
              emoji: "🍞"
            },
            {
              id: "uae-g2u1l3-v2",
              arabic: "حَلِيبٌ",
              transliteration: "ḥalībun",
              translation: t("حَلِيبٌ", "milk", "susu", "susu", "lait", "leche"),
              emoji: "🥛"
            },
            {
              id: "uae-g2u1l3-v3",
              arabic: "فَاكِهَةٌ",
              transliteration: "fākihah",
              translation: t("فَاكِهَةٌ", "fruit", "buah", "buah", "fruit", "fruta"),
              emoji: "🍎"
            },
            {
              id: "uae-g2u1l3-v4",
              arabic: "خُضَارٌ",
              transliteration: "khuḍārun",
              translation: t("خُضَارٌ", "vegetables", "sayur-sayuran", "sayuran", "légumes", "verduras"),
              emoji: "🥦"
            },
            {
              id: "uae-g2u1l3-v5",
              arabic: "مَاءٌ",
              transliteration: "māʾun",
              translation: t("مَاءٌ", "water", "air", "air", "eau", "agua"),
              emoji: "💧"
            },
            {
              id: "uae-g2u1l3-v6",
              arabic: "لَحْمٌ",
              transliteration: "laḥmun",
              translation: t("لَحْمٌ", "meat", "daging", "daging", "viande", "carne"),
              emoji: "🍗"
            },
            {
              id: "uae-g2u1l3-v7",
              arabic: "تَمْرٌ",
              transliteration: "tamrun",
              translation: t("تَمْرٌ", "dates", "kurma", "kurma", "dattes", "dátiles"),
              emoji: "🌴"
            },
            {
              id: "uae-g2u1l3-v8",
              arabic: "زَيْتُونٌ",
              transliteration: "zaytūnun",
              translation: t("زَيْتُونٌ", "olives", "zaitun", "zaitun", "olives", "aceitunas"),
              emoji: "🫒"
            }
          ],
          dialogue: [
            {
              speaker: "الأُمُّ",
              arabic: "كُلْ خُبْزًا وَحَلِيبًا يَا بُنَيَّ!",
              translation: t("كُلْ خُبْزًا وَحَلِيبًا يَا بُنَيَّ!", "Eat bread and milk, my son!", "Makan roti dan susu, anakku!", "Makan roti dan susu, nak!", "Mange du pain et du lait, mon fils !", "¡Come pan y leche, hijo mío!")
            },
            {
              speaker: "سَامِي",
              arabic: "وَأُحِبُّ أَيْضًا الْفَاكِهَةَ وَالْخُضَارَ.",
              translation: t("وَأُحِبُّ أَيْضًا الْفَاكِهَةَ وَالْخُضَارَ.", "I also like fruit and vegetables.", "Saya juga suka buah dan sayur.", "Aku juga suka buah dan sayur.", "J’aime aussi les fruits et les légumes.", "También me gustan la fruta y las verduras.")
            },
            {
              speaker: "الأُمُّ",
              arabic: "أَحْسَنْتَ، وَلا تَنْسَ شُرْبَ الْمَاءِ.",
              translation: t("أَحْسَنْتَ، وَلا تَنْسَ شُرْبَ الْمَاءِ.", "Well done, and do not forget to drink water.", "Bagus, dan jangan lupa minum air.", "Bagus, dan jangan lupa minum air.", "Bravo, et n’oublie pas de boire de l’eau.", "Muy bien, y no olvides beber agua.")
            }
          ],
          exercises: [
            {
              id: "uae-g2u1l3-e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الطَّعَامَ الصِّحِّيَّ", "Listen and choose the healthy food", "Dengar dan pilih makanan sihat", "Dengarkan dan pilih comida saludable", "Écoute et choisis l’aliment sain", "Escucha y elige la comida saludable"),
              arabicText: "خُضَارٌ",
              options: [
                "حَلْوَى",
                "خُضَارٌ",
                "شِيبْسٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f966/512.webp"
            },
            {
              id: "uae-g2u1l3-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الطَّعَامَ بِالصُّورَةِ", "Match the food to the picture", "Padankan makanan dengan gambar", "Cocokkan makanan dengan gambar", "Associe la nourriture à l’image", "Relaciona la comida con la imagen"),
              pairs: [
                {
                  a: "خُبْزٌ",
                  b: "🍞"
                },
                {
                  a: "حَلِيبٌ",
                  b: "🥛"
                },
                {
                  a: "فَاكِهَةٌ",
                  b: "🍎"
                },
                {
                  a: "خُضَارٌ",
                  b: "🥦"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f35e/512.webp"
            },
            {
              id: "uae-g2u1l3-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنْ طَعَامِكَ", "Talk about your food", "تحدث عن makanan kamu", "Habla de tu comida", "Parle de ta nourriture", "Habla de tu comida"),
              arabicText: "أُحِبُّ الْفَاكِهَةَ وَالْمَاءَ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f35e/512.webp"
            },
            {
              id: "uae-g2u1l3-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَةَ مَاءٌ", "Write the word مَاءٌ", "Tulis perkataan مَاءٌ", "Tulis kata مَاءٌ", "Écris le mot مَاءٌ", "Escribe la palabra مَاءٌ"),
              arabicText: "مَاءٌ",
              answer: "مَاءٌ",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Water_drop.svg/512px-Water_drop.svg.png"
            },
            {
              id: "uae-g2u1l3-e5",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ الْكَلِمَاتِ", "Arrange the words", "Susun perkataan", "Ordena las palabras", "Range les mots", "Ordena las palabras"),
              arabicText: "مَاءٌ حَلِيبٌ خُبْزٌ",
              answer: "خُبْزٌ، حَلِيبٌ، مَاءٌ",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Food_pyramid.png/512px-Food_pyramid.png"
            },
            {
              id: "uae-g2u1l3-e6",
              type: "fill_in_blank",
              skill: "writing",
              prompt: t("اِكْمِلِ الْجُمْلَةَ", "Complete the sentence", "Lengkapkan ayat", "Completa la oración", "Complète la phrase", "Completa la oración"),
              arabicText: "أَشْرَبُ ___ كُلَّ يَوْمٍ",
              answer: "الْمَاءَ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f35e/512.webp"
            },
            {
              id: "uae-g2u1l3spelluae-g2u1l3-v2",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "حَلِيبٌ",
              answer: "حَلِيبٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f95b/512.webp"
            },
            {
              id: "uae-g2u1l3speakuae-g2u1l3-v6",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "لَحْمٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f357/512.webp"
            },
            {
              id: "uae-g2u1l3mcquae-g2u1l3-v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"خُبْزٌ\"؟", "What does \"bread\" mean?", "Apakah maksud \"roti\"?", "Apa arti \"roti\"?", "Que signifie \"pain\" ?", "¿Qué significa \"pan\"?"),
              arabicText: "خُبْزٌ",
              options: [
                "olives",
                "bread",
                "calm",
                "music"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f35e/512.webp"
            },
            {
              id: "uae-g2u1l3mcquae-g2u1l3-v7",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"تَمْرٌ\"؟", "What does \"dates\" mean?", "Apakah maksud \"kurma\"?", "Apa arti \"kurma\"?", "Que signifie \"dattes\" ?", "¿Qué significa \"dátiles\"?"),
              arabicText: "تَمْرٌ",
              options: [
                "dates",
                "touch",
                "date",
                "thanks"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f334/512.webp"
            },
            {
              id: "uae-g2u1l3writeuae-g2u1l3-v3",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"فَاكِهَةٌ\"", "Type the Arabic word for: \"fruit\"", "Taip perkataan Arab untuk: \"buah\"", "Ketik kata Arab untuk: \"buah\"", "Tape le mot arabe pour : \"fruit\"", "Escribe la palabra árabe para: \"fruta\""),
              arabicText: "فَاكِهَةٌ",
              answer: "فَاكِهَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f34e/512.webp"
            },
            {
              id: "uae-g2u1l3writeuae-g2u1l3-v5",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"مَاءٌ\"", "Type the Arabic word for: \"water\"", "Taip perkataan Arab untuk: \"air\"", "Ketik kata Arab untuk: \"air\"", "Tape le mot arabe pour : \"eau\"", "Escribe la palabra árabe para: \"agua\""),
              arabicText: "مَاءٌ",
              answer: "مَاءٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a7/512.webp"
            }
          ]
        },
        {
          id: "uae-g2u1review",
          unitId: "uae-g2u1",
          gradeId: "uae-g2",
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
              id: "uae-g2u1l1-v1",
              arabic: "رَأْسٌ",
              transliteration: "raʾsun",
              translation: t("رَأْسٌ", "head", "kepala", "kepala", "tête", "cabeza"),
              emoji: "🧠"
            },
            {
              id: "uae-g2u1l1-v2",
              arabic: "عَيْنٌ",
              transliteration: "ʿaynun",
              translation: t("عَيْنٌ", "eye", "mata", "mata", "œil", "ojo"),
              emoji: "👁️"
            },
            {
              id: "uae-g2u1l1-v3",
              arabic: "أُذُنٌ",
              transliteration: "udhunun",
              translation: t("أُذُنٌ", "ear", "telinga", "telinga", "oreille", "oreja"),
              emoji: "👂"
            },
            {
              id: "uae-g2u1l1-v4",
              arabic: "فَمٌ",
              transliteration: "famun",
              translation: t("فَمٌ", "mouth", "mulut", "mulut", "bouche", "boca"),
              emoji: "👄"
            },
            {
              id: "uae-g2u1l1-v5",
              arabic: "يَدٌ",
              transliteration: "yadun",
              translation: t("يَدٌ", "hand", "tangan", "tangan", "main", "mano"),
              emoji: "✋"
            },
            {
              id: "uae-g2u1l1-v6",
              arabic: "رِجْلٌ",
              transliteration: "rijlun",
              translation: t("رِجْلٌ", "leg", "kaki", "kaki", "jambe", "pierna"),
              emoji: "🦵"
            },
            {
              id: "uae-g2u1l1-v7",
              arabic: "إِصْبَعٌ",
              transliteration: "iṣbaʿun",
              translation: t("إِصْبَعٌ", "finger", "jari", "jari", "doigt", "dedo"),
              emoji: "☝️"
            },
            {
              id: "uae-g2u1l1-v8",
              arabic: "قَلْبٌ",
              transliteration: "qalbun",
              translation: t("قَلْبٌ", "heart", "jantung", "jantung", "cœur", "corazón"),
              emoji: "❤️"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "uae-g2u1reviewmcquae-g2u1l1-v5",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"يَدٌ\"؟", "What does \"hand\" mean?", "Apakah maksud \"tangan\"?", "Apa arti \"tangan\"?", "Que signifie \"main\" ?", "¿Qué significa \"mano\"?"),
              arabicText: "يَدٌ",
              options: [
                "street",
                "visit",
                "hand",
                "leg"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/270b/512.webp"
            },
            {
              id: "uae-g2u1reviewspeakuae-g2u1l1-v1",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "رَأْسٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9e0/512.webp"
            },
            {
              id: "uae-g2u1reviewspelluae-g2u1l1-v6",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "رِجْلٌ",
              answer: "رِجْلٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9b5/512.webp"
            },
            {
              id: "uae-g2u1reviewmcquae-g2u1l1-v4",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"فَمٌ\"؟", "What does \"mouth\" mean?", "Apakah maksud \"mulut\"?", "Apa arti \"mulut\"?", "Que signifie \"bouche\" ?", "¿Qué significa \"boca\"?"),
              arabicText: "فَمٌ",
              options: [
                "eye",
                "craft",
                "birthday",
                "mouth"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f444/512.webp"
            },
            {
              id: "uae-g2u1reviewspeakuae-g2u1l1-v3",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "أُذُنٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f442/512.webp"
            },
            {
              id: "uae-g2u1reviewspeakuae-g2u1l1-v7",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "إِصْبَعٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/261d-fe0f/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "uae-g2u2",
      gradeId: "uae-g2",
      order: 2,
      title: t("عَالَمِي الصَّغِيرُ", "My World", "Duniaku yang Kecil", "Duniaku yang Kecil", "petit monde", "pequeño mundo"),
      theme: "community",
      lessons: [
        {
          id: "uae-g2u2l1",
          unitId: "uae-g2u2",
          gradeId: "uae-g2",
          order: 1,
          title: t("أَنَا وَعَائِلَتِي", "Family", "Keluarga", "Keluargaku", "famille", "familia"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("عَائِلَتِي تُحِبُّنِي وَأَنَا أُحِبُّهَا.", "My family loves me and I love them.", "Keluarga saya menyayangi saya dan saya menyayangi mereka.", "Keluargaku menyayangiku dan aku menyayangi mereka.", "Ma famille m’aime et je l’aime.", "Mi familia me quiere y yo la quiero."),
          vocabulary: [
            {
              id: "uae-g2u2l1-v1",
              arabic: "أَبٌ",
              transliteration: "abun",
              translation: t("أَبٌ", "father", "ayah", "ayah", "père", "padre"),
              emoji: "👨"
            },
            {
              id: "uae-g2u2l1-v2",
              arabic: "أُمٌّ",
              transliteration: "ummun",
              translation: t("أُمٌّ", "mother", "ibu", "ibu", "mère", "madre"),
              emoji: "👩"
            },
            {
              id: "uae-g2u2l1-v3",
              arabic: "أَخٌ",
              transliteration: "akhun",
              translation: t("أَخٌ", "brother", "abang/adik lelaki", "kakak/adik laki-laki", "frère", "hermano"),
              emoji: "🧒"
            },
            {
              id: "uae-g2u2l1-v4",
              arabic: "أُخْتٌ",
              transliteration: "ukhtun",
              translation: t("أُخْتٌ", "sister", "kakak/adik perempuan", "kakak/adik perempuan", "sœur", "hermana"),
              emoji: "👧"
            },
            {
              id: "uae-g2u2l1-v5",
              arabic: "جَدٌّ",
              transliteration: "jaddun",
              translation: t("جَدٌّ", "grandfather", "datuk", "kakek", "grand-père", "abuelo"),
              emoji: "🧓"
            },
            {
              id: "uae-g2u2l1-v6",
              arabic: "جَدَّةٌ",
              transliteration: "jaddah",
              translation: t("جَدَّةٌ", "grandmother", "nenek", "nenek", "grand-mère", "abuela"),
              emoji: "👵"
            },
            {
              id: "uae-g2u2l1-v7",
              arabic: "أُسْرَةٌ",
              transliteration: "usrah",
              translation: t("أُسْرَةٌ", "family", "keluarga", "keluarga", "famille", "familia"),
              emoji: "🏠"
            },
            {
              id: "uae-g2u2l1-v8",
              arabic: "مَنْزِلٌ",
              transliteration: "manzilun",
              translation: t("مَنْزِلٌ", "home", "rumah", "rumah", "maison", "casa"),
              emoji: "🏡"
            }
          ],
          dialogue: [
            {
              speaker: "لَيْلَى",
              arabic: "مَنْ مَعَكِ فِي الْبَيْتِ؟",
              translation: t("مَنْ مَعَكِ فِي الْبَيْتِ؟", "Who is with you at home?", "Siapakah yang bersama kamu di rumah?", "Siapa yang bersamamu di rumah?", "Qui est avec toi à la maison ?", "¿Quién está contigo en casa?")
            },
            {
              speaker: "نُور",
              arabic: "أُمِّي وَأَبِي وَأَخِي.",
              translation: t("أُمِّي وَأَبِي وَأَخِي.", "My mother, father, and brother.", "Ibu, ayah dan abang saya.", "Ibu, ayah, dan kakakku.", "Ma mère, mon père et mon frère.", "Mi madre, mi padre y mi hermano.")
            },
            {
              speaker: "لَيْلَى",
              arabic: "عَائِلَةٌ جَمِيلَةٌ!",
              translation: t("عَائِلَةٌ جَمِيلَةٌ!", "A beautiful family!", "Keluarga yang indah!", "Keluarga yang indah!", "Une belle famille !", "¡Una familia bonita!")
            }
          ],
          exercises: [
            {
              id: "uae-g2u2l1-e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ", "Listen and choose the word", "Dengar dan pilih perkataan", "Dengarkan dan pilih kata", "Écoute et choisis le mot", "Escucha y elige la palabra"),
              arabicText: "أُمٌّ",
              options: [
                "أَبٌ",
                "أُمٌّ",
                "أَخٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f469/512.webp"
            },
            {
              id: "uae-g2u2l1-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْقَرِيبَ بِالصُّورَةِ", "Match the family member to the picture", "Padankan ahli keluarga dengan gambar", "Cocokkan anggota keluarga dengan gambar", "Associe le membre de la famille à l’image", "Relaciona al familiar con la imagen"),
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
                  a: "جَدٌّ",
                  b: "🧓"
                },
                {
                  a: "جَدَّةٌ",
                  b: "👵"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468/512.webp"
            },
            {
              id: "uae-g2u2l1-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنْ عَائِلَتِكَ", "Talk about your family", "Ceritakan tentang keluarga kamu", "Habla de tu familia", "Parle de ta famille", "Habla de tu familia"),
              arabicText: "أَبِي، أُمِّي، أُخْتِي",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468/512.webp"
            },
            {
              id: "uae-g2u2l1-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَةَ أُسْرَةٌ", "Write the word أُسْرَةٌ", "Tulis perkataan أُسْرَةٌ", "Tulis kata أُسْرَةٌ", "Écris le mot أُسْرَةٌ", "Escribe la palabra أُسْرَةٌ"),
              arabicText: "أُسْرَةٌ",
              answer: "أُسْرَةٌ",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Family_icon.svg/512px-Family_icon.svg.png"
            },
            {
              id: "uae-g2u2l1-e5",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ أَفْرَادَ الْعَائِلَةِ", "Arrange the family members", "Susun ahli keluarga", "Ordena los miembros de la familia", "Range les membres de la famille", "Ordena los miembros de la familia"),
              arabicText: "أُمٌّ أَبٌ أُخْتٌ",
              answer: "أَبٌ، أُمٌّ، أُخْتٌ",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Family_icon.svg/512px-Family_icon.svg.png"
            },
            {
              id: "uae-g2u2l1-e6",
              type: "fill_in_blank",
              skill: "writing",
              prompt: t("أَكْمِلِ الْجُمْلَةَ", "Complete the sentence", "Lengkapkan ayat", "Completa la oración", "Complète la phrase", "Completa la oración"),
              arabicText: "هٰذِهِ ___",
              answer: "أُسْرَتِي",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468/512.webp"
            },
            {
              id: "uae-g2u2l1spelluae-g2u2l1-v4",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "أُخْتٌ",
              answer: "أُخْتٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f467/512.webp"
            },
            {
              id: "uae-g2u2l1listenuae-g2u2l1-v5",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "جَدٌّ",
              options: [
                "مُسَاعَدَةٌ",
                "جَدٌّ",
                "جَمْعَةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9d3/512.webp"
            },
            {
              id: "uae-g2u2l1spelluae-g2u2l1-v6",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "جَدَّةٌ",
              answer: "جَدَّةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f475/512.webp"
            },
            {
              id: "uae-g2u2l1mcquae-g2u2l1-v8",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"مَنْزِلٌ\"؟", "What does \"home\" mean?", "Apakah maksud \"rumah\"?", "Apa arti \"rumah\"?", "Que signifie \"maison\" ?", "¿Qué significa \"casa\"?"),
              arabicText: "مَنْزِلٌ",
              options: [
                "heart",
                "home",
                "memory",
                "peace/greeting"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e1/512.webp"
            },
            {
              id: "uae-g2u2l1writeuae-g2u2l1-v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"أَبٌ\"", "Type the Arabic word for: \"father\"", "Taip perkataan Arab untuk: \"ayah\"", "Ketik kata Arab untuk: \"ayah\"", "Tape le mot arabe pour : \"père\"", "Escribe la palabra árabe para: \"padre\""),
              arabicText: "أَبٌ",
              answer: "أَبٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468/512.webp"
            },
            {
              id: "uae-g2u2l1mcquae-g2u2l1-v6",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"جَدَّةٌ\"؟", "What does \"grandmother\" mean?", "Apakah maksud \"nenek\"?", "Apa arti \"nenek\"?", "Que signifie \"grand-mère\" ?", "¿Qué significa \"abuela\"?"),
              arabicText: "جَدَّةٌ",
              options: [
                "family",
                "meat",
                "grandmother",
                "June"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f475/512.webp"
            }
          ]
        },
        {
          id: "uae-g2u2l2",
          unitId: "uae-g2u2",
          gradeId: "uae-g2",
          order: 2,
          title: t("أَنَا وَأَصْدِقَائِي", "Friends", "Rakan", "Teman-Temanku", "amis", "amigos"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("أَصْدِقَائِي يُسَاعِدُونَنِي وَنَلْعَبُ مَعًا.", "My friends help me and we play together.", "Rakan saya membantu saya dan kami bermain bersama.", "Teman-temanku membantuku dan kami bermain bersama.", "Mes amis m’aident et nous jouons ensemble.", "Mis amigos me ayudan y jugamos juntos."),
          vocabulary: [
            {
              id: "uae-g2u2l2-v1",
              arabic: "صَدِيقٌ",
              transliteration: "ṣadīqun",
              translation: t("صَدِيقٌ", "friend", "kawan", "teman", "ami", "amigo"),
              emoji: "🤝"
            },
            {
              id: "uae-g2u2l2-v2",
              arabic: "لَعِبٌ",
              transliteration: "laʿibun",
              translation: t("لَعِبٌ", "play", "main", "bermain", "jeu", "juego"),
              emoji: "⚽"
            },
            {
              id: "uae-g2u2l2-v3",
              arabic: "مَدْرَسَةٌ",
              transliteration: "madrasah",
              translation: t("مَدْرَسَةٌ", "school", "sekolah", "sekolah", "école", "escuela"),
              emoji: "🏫"
            },
            {
              id: "uae-g2u2l2-v4",
              arabic: "زَمِيلٌ",
              transliteration: "zamīlun",
              translation: t("زَمِيلٌ", "classmate", "rakan sekelas", "teman sekelas", "camarade", "compañero"),
              emoji: "👧"
            },
            {
              id: "uae-g2u2l2-v5",
              arabic: "مَعًا",
              transliteration: "maʿan",
              translation: t("مَعًا", "together", "bersama-sama", "bersama", "ensemble", "juntos"),
              emoji: "👫"
            },
            {
              id: "uae-g2u2l2-v6",
              arabic: "مُسَاعَدَةٌ",
              transliteration: "musāʿadah",
              translation: t("مُسَاعَدَةٌ", "help", "bantuan", "bantuan", "aide", "ayuda"),
              emoji: "🫶"
            },
            {
              id: "uae-g2u2l2-v7",
              arabic: "لَعِبَةٌ",
              transliteration: "laʿibah",
              translation: t("لَعِبَةٌ", "game/toy", "permainan", "permainan", "jeu/jouet", "juego/juguete"),
              emoji: "🎲"
            },
            {
              id: "uae-g2u2l2-v8",
              arabic: "سَعِيدٌ",
              transliteration: "saʿīdun",
              translation: t("سَعِيدٌ", "happy", "gembira", "senang", "heureux", "feliz"),
              emoji: "😊"
            }
          ],
          dialogue: [
            {
              speaker: "أَحْمَد",
              arabic: "مَنْ صَدِيقُكَ؟",
              translation: t("مَنْ صَدِيقُكَ؟", "Who is your friend?", "Siapakah kawan kamu?", "Siapa temanmu?", "Qui est ton ami ?", "¿Quién es tu amigo?")
            },
            {
              speaker: "سَلْمَى",
              arabic: "صَدِيقَتِي نُورٌ. نَلْعَبُ مَعًا.",
              translation: t("صَدِيقَتِي نُورٌ. نَلْعَبُ مَعًا.", "My friend is Noor. We play together.", "Kawan saya Noor. Kami bermain bersama.", "Temanku Noor. Kami bermain bersama.", "Mon amie est Noor. Nous jouons ensemble.", "Mi amiga es Noor. Jugamos juntos.")
            },
            {
              speaker: "أَحْمَد",
              arabic: "هٰذَا جَمِيلٌ!",
              translation: t("هٰذَا جَمِيلٌ!", "That is beautiful!", "Itu indah!", "Itu bagus!", "C’est joli !", "¡Qué bonito!")
            }
          ],
          exercises: [
            {
              id: "uae-g2u2l2-e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الصَّدِيقَ", "Listen and choose the friend", "Dengar dan pilih kawan", "Dengarkan dan pilih teman", "Écoute et choisis l’ami", "Escucha y elige al amigo"),
              arabicText: "صَدِيقٌ",
              options: [
                "لَعِبٌ",
                "صَدِيقٌ",
                "مَدْرَسَةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "uae-g2u2l2-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Associe le mot à son sens", "Relaciona la palabra con su significado"),
              pairs: [
                {
                  a: "صَدِيقٌ",
                  b: "🤝"
                },
                {
                  a: "مَعًا",
                  b: "👫"
                },
                {
                  a: "لَعِبٌ",
                  b: "⚽"
                },
                {
                  a: "سَعِيدٌ",
                  b: "😊"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "uae-g2u2l2-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنْ صَدِيقِكَ", "Talk about your friend", "Ceritakan tentang kawan kamu", "Habla de tu amigo", "Parle de ton ami", "Habla de tu amigo"),
              arabicText: "صَدِيقِي طَيِّبٌ وَسَعِيدٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60a/512.webp"
            },
            {
              id: "uae-g2u2l2-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَةَ صَدِيقٌ", "Write the word صَدِيقٌ", "Tulis perkataan صَدِيقٌ", "Tulis kata صَدِيقٌ", "Écris le mot صَدِيقٌ", "Escribe la palabra صَدِيقٌ"),
              arabicText: "صَدِيقٌ",
              answer: "صَدِيقٌ",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Children_playing.svg/512px-Children_playing.svg.png"
            },
            {
              id: "uae-g2u2l2-e5",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ الْجُمْلَةَ", "Arrange the sentence", "Susun ayat", "Ordena la oración", "Range la phrase", "Ordena la oración"),
              arabicText: "نَلْعَبُ مَعًا نَحْنُ",
              answer: "نَحْنُ نَلْعَبُ مَعًا",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Children_playing.svg/512px-Children_playing.svg.png"
            },
            {
              id: "uae-g2u2l2-e6",
              type: "fill_in_blank",
              skill: "writing",
              prompt: t("أَكْمِلِ الْجُمْلَةَ", "Complete the sentence", "Lengkapkan ayat", "Completa la oración", "Complète la phrase", "Completa la oración"),
              arabicText: "صَدِيقِي ___",
              answer: "جَمِيلٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "uae-g2u2l2speakuae-g2u2l2-v2",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "لَعِبٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "uae-g2u2l2listenuae-g2u2l2-v5",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "مَعًا",
              options: [
                "يَدٌ",
                "مَعًا",
                "شَارِعٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f46b/512.webp"
            },
            {
              id: "uae-g2u2l2writeuae-g2u2l2-v6",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"مُسَاعَدَةٌ\"", "Type the Arabic word for: \"help\"", "Taip perkataan Arab untuk: \"bantuan\"", "Ketik kata Arab untuk: \"bantuan\"", "Tape le mot arabe pour : \"aide\"", "Escribe la palabra árabe para: \"ayuda\""),
              arabicText: "مُسَاعَدَةٌ",
              answer: "مُسَاعَدَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1faf6/512.webp"
            },
            {
              id: "uae-g2u2l2writeuae-g2u2l2-v4",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"زَمِيلٌ\"", "Type the Arabic word for: \"classmate\"", "Taip perkataan Arab untuk: \"rakan sekelas\"", "Ketik kata Arab untuk: \"teman sekelas\"", "Tape le mot arabe pour : \"camarade\"", "Escribe la palabra árabe para: \"compañero\""),
              arabicText: "زَمِيلٌ",
              answer: "زَمِيلٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f467/512.webp"
            },
            {
              id: "uae-g2u2l2spelluae-g2u2l2-v3",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "مَدْرَسَةٌ",
              answer: "مَدْرَسَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3eb/512.webp"
            },
            {
              id: "uae-g2u2l2arrange3",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "هٰذَا جَمِيلٌ!",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            }
          ]
        },
        {
          id: "uae-g2u2l3",
          unitId: "uae-g2u2",
          gradeId: "uae-g2",
          order: 3,
          title: t("أَنَا وَجِيرَانِي", "Neighbours", "Jiran", "Tetanggaku", "voisins", "vecinos"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("أُحَيِّي جِيرَانِي وَأَسْتَأْذِنُهُمْ بِأَدَبٍ.", "I greet my neighbours and ask politely.", "Saya memberi salam kepada jiran dan meminta izin dengan sopan.", "Aku memberi salam kepada tetangga dan meminta izin dengan sopan.", "Je salue mes voisins et je demande poliment.", "Saludo a mis vecinos y pido permiso con educación."),
          vocabulary: [
            {
              id: "uae-g2u2l3-v1",
              arabic: "جَارٌ",
              transliteration: "jārun",
              translation: t("جَارٌ", "neighbour", "jiran", "tetangga", "voisin", "vecino"),
              emoji: "🏘️"
            },
            {
              id: "uae-g2u2l3-v2",
              arabic: "سَلَامٌ",
              transliteration: "salāmun",
              translation: t("سَلَامٌ", "peace/greeting", "salam", "salam", "paix/salut", "paz/saludo"),
              emoji: "👋"
            },
            {
              id: "uae-g2u2l3-v3",
              arabic: "أَدَبٌ",
              transliteration: "adabun",
              translation: t("أَدَبٌ", "manners", "adab", "sopan santun", "politesse", "buenas maneras"),
              emoji: "🙂"
            },
            {
              id: "uae-g2u2l3-v4",
              arabic: "بَيْتٌ",
              transliteration: "baytun",
              translation: t("بَيْتٌ", "house", "rumah", "rumah", "maison", "casa"),
              emoji: "🏠"
            },
            {
              id: "uae-g2u2l3-v5",
              arabic: "بَابٌ",
              transliteration: "bābun",
              translation: t("بَابٌ", "door", "pintu", "pintu", "porte", "puerta"),
              emoji: "🚪"
            },
            {
              id: "uae-g2u2l3-v6",
              arabic: "شَارِعٌ",
              transliteration: "shāriʿun",
              translation: t("شَارِعٌ", "street", "jalan", "jalan", "rue", "calle"),
              emoji: "🛣️"
            },
            {
              id: "uae-g2u2l3-v7",
              arabic: "زِيَارَةٌ",
              transliteration: "ziyārah",
              translation: t("زِيَارَةٌ", "visit", "lawatan", "kunjungan", "visite", "visita"),
              emoji: "🎁"
            },
            {
              id: "uae-g2u2l3-v8",
              arabic: "مُسَاعَدَةٌ",
              transliteration: "musāʿadah",
              translation: t("مُسَاعَدَةٌ", "help", "bantuan", "bantuan", "aide", "ayuda"),
              emoji: "🤲"
            }
          ],
          dialogue: [
            {
              speaker: "سَامِي",
              arabic: "السَّلَامُ عَلَيْكُمْ يَا جَارِي!",
              translation: t("السَّلَامُ عَلَيْكُمْ يَا جَارِي!", "Peace be upon you, my neighbour!", "Assalamualaikum jiran saya!", "Salam untukmu, tetanggaku!", "Bonjour mon voisin !", "¡Hola, vecino mío!")
            },
            {
              speaker: "الْجَارُ",
              arabic: "وَعَلَيْكُمُ السَّلَامُ! تَفَضَّلْ.",
              translation: t("وَعَلَيْكُمُ السَّلَامُ! تَفَضَّلْ.", "And peace be upon you too! Please come in.", "Waalaikumsalam! Silakan.", "Dan salam untukmu! Silakan masuk.", "Et paix sur toi aussi ! Entre, s’il te plaît.", "¡Y paz para ti también! Adelante, por favor.")
            },
            {
              speaker: "سَامِي",
              arabic: "شُكْرًا جَزِيلًا.",
              translation: t("شُكْرًا جَزِيلًا.", "Thank you very much.", "Terima kasih banyak.", "Terima kasih banyak.", "Merci beaucoup.", "Muchas gracias.")
            }
          ],
          exercises: [
            {
              id: "uae-g2u2l3-e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ", "Listen and choose the word", "Dengar dan pilih perkataan", "Dengarkan dan pilih kata", "Écoute et choisis le mot", "Escucha y elige la palabra"),
              arabicText: "جَارٌ",
              options: [
                "بَابٌ",
                "جَارٌ",
                "شَارِعٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d8-fe0f/512.webp"
            },
            {
              id: "uae-g2u2l3-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالصُّورَةِ", "Match the word to the picture", "Padankan perkataan dengan gambar", "Cocokkan kata dengan gambar", "Associe le mot à l’image", "Relaciona la palabra con la imagen"),
              pairs: [
                {
                  a: "جَارٌ",
                  b: "🏘️"
                },
                {
                  a: "بَابٌ",
                  b: "🚪"
                },
                {
                  a: "شَارِعٌ",
                  b: "🛣️"
                },
                {
                  a: "سَلَامٌ",
                  b: "👋"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d8-fe0f/512.webp"
            },
            {
              id: "uae-g2u2l3-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ بِأَدَبٍ", "Speak politely", "Bercakap dengan sopan", "Habla con educación", "Parle poliment", "Habla con educación"),
              arabicText: "السَّلَامُ عَلَيْكُمْ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d8-fe0f/512.webp"
            },
            {
              id: "uae-g2u2l3-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَةَ جَارٌ", "Write the word جَارٌ", "Tulis perkataan جَارٌ", "Tulis kata جَارٌ", "Écris le mot جَارٌ", "Escribe la palabra جَارٌ"),
              arabicText: "جَارٌ",
              answer: "جَارٌ",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Handshake_icon.svg/512px-Handshake_icon.svg.png"
            },
            {
              id: "uae-g2u2l3-e5",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ التَّحِيَّةَ", "Arrange the greeting", "Susun ucapan salam", "Ordena el saludo", "Range la salutation", "Ordena el saludo"),
              arabicText: "عَلَيْكُمْ السَّلَامُ",
              answer: "السَّلَامُ عَلَيْكُمْ",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Handshake_icon.svg/512px-Handshake_icon.svg.png"
            },
            {
              id: "uae-g2u2l3-e6",
              type: "fill_in_blank",
              skill: "writing",
              prompt: t("اِكْمِلِ الْجُمْلَةَ", "Complete the sentence", "Lengkapkan ayat", "Completa la oración", "Complète la phrase", "Completa la oración"),
              arabicText: "أُحَيِّي ___",
              answer: "جِيرَانِي",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d8-fe0f/512.webp"
            },
            {
              id: "uae-g2u2l3speakuae-g2u2l3-v2",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "سَلَامٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp"
            },
            {
              id: "uae-g2u2l3spelluae-g2u2l3-v6",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "شَارِعٌ",
              answer: "شَارِعٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6e3-fe0f/512.webp"
            },
            {
              id: "uae-g2u2l3arrange1",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "السَّلَامُ عَلَيْكُمْ يَا جَارِي!",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d8-fe0f/512.webp"
            },
            {
              id: "uae-g2u2l3mcquae-g2u2l3-v6",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"شَارِعٌ\"؟", "What does \"street\" mean?", "Apakah maksud \"jalan\"?", "Apa arti \"jalan\"?", "Que signifie \"rue\" ?", "¿Qué significa \"calle\"?"),
              arabicText: "شَارِعٌ",
              options: [
                "guest",
                "day",
                "street",
                "visit"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6e3-fe0f/512.webp"
            },
            {
              id: "uae-g2u2l3listenuae-g2u2l3-v4",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "بَيْتٌ",
              options: [
                "بَيْتٌ",
                "الْخَمِيسُ",
                "أَمَانٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e0/512.webp"
            },
            {
              id: "uae-g2u2l3listenuae-g2u2l3-v1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "جَارٌ",
              options: [
                "بَيْتٌ",
                "جَارٌ",
                "هَدِيَّةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d8-fe0f/512.webp"
            }
          ]
        },
        {
          id: "uae-g2u2review",
          unitId: "uae-g2u2",
          gradeId: "uae-g2",
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
              id: "uae-g2u2l1-v1",
              arabic: "أَبٌ",
              transliteration: "abun",
              translation: t("أَبٌ", "father", "ayah", "ayah", "père", "padre"),
              emoji: "👨"
            },
            {
              id: "uae-g2u2l1-v2",
              arabic: "أُمٌّ",
              transliteration: "ummun",
              translation: t("أُمٌّ", "mother", "ibu", "ibu", "mère", "madre"),
              emoji: "👩"
            },
            {
              id: "uae-g2u2l1-v3",
              arabic: "أَخٌ",
              transliteration: "akhun",
              translation: t("أَخٌ", "brother", "abang/adik lelaki", "kakak/adik laki-laki", "frère", "hermano"),
              emoji: "🧒"
            },
            {
              id: "uae-g2u2l1-v4",
              arabic: "أُخْتٌ",
              transliteration: "ukhtun",
              translation: t("أُخْتٌ", "sister", "kakak/adik perempuan", "kakak/adik perempuan", "sœur", "hermana"),
              emoji: "👧"
            },
            {
              id: "uae-g2u2l1-v5",
              arabic: "جَدٌّ",
              transliteration: "jaddun",
              translation: t("جَدٌّ", "grandfather", "datuk", "kakek", "grand-père", "abuelo"),
              emoji: "🧓"
            },
            {
              id: "uae-g2u2l1-v6",
              arabic: "جَدَّةٌ",
              transliteration: "jaddah",
              translation: t("جَدَّةٌ", "grandmother", "nenek", "nenek", "grand-mère", "abuela"),
              emoji: "👵"
            },
            {
              id: "uae-g2u2l1-v7",
              arabic: "أُسْرَةٌ",
              transliteration: "usrah",
              translation: t("أُسْرَةٌ", "family", "keluarga", "keluarga", "famille", "familia"),
              emoji: "🏠"
            },
            {
              id: "uae-g2u2l1-v8",
              arabic: "مَنْزِلٌ",
              transliteration: "manzilun",
              translation: t("مَنْزِلٌ", "home", "rumah", "rumah", "maison", "casa"),
              emoji: "🏡"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "uae-g2u2reviewmcquae-g2u2l1-v5",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"جَدٌّ\"؟", "What does \"grandfather\" mean?", "Apakah maksud \"datuk\"?", "Apa arti \"kakek\"?", "Que signifie \"grand-père\" ?", "¿Qué significa \"abuelo\"?"),
              arabicText: "جَدٌّ",
              options: [
                "grandfather",
                "memory",
                "street",
                "sister"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9d3/512.webp"
            },
            {
              id: "uae-g2u2reviewlistenuae-g2u2l1-v1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "أَبٌ",
              options: [
                "مَسَاءٌ",
                "أَبٌ",
                "رِحْلَةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468/512.webp"
            },
            {
              id: "uae-g2u2reviewlistenuae-g2u2l1-v2",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "أُمٌّ",
              options: [
                "هُدُوءٌ",
                "أُمٌّ",
                "صَبَاحٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f469/512.webp"
            },
            {
              id: "uae-g2u2reviewspeakuae-g2u2l1-v7",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "أُسْرَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e0/512.webp"
            },
            {
              id: "uae-g2u2reviewlistenuae-g2u2l1-v6",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "جَدَّةٌ",
              options: [
                "أُمٌّ",
                "صَدِيقٌ",
                "جَدَّةٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f475/512.webp"
            },
            {
              id: "uae-g2u2reviewmcquae-g2u2l1-v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"أَبٌ\"؟", "What does \"father\" mean?", "Apakah maksud \"ayah\"?", "Apa arti \"ayah\"?", "Que signifie \"père\" ?", "¿Qué significa \"padre\"?"),
              arabicText: "أَبٌ",
              options: [
                "rhythm",
                "father",
                "touch",
                "nose"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "uae-g2u3",
      gradeId: "uae-g2",
      order: 3,
      title: t("الْوَقْتُ", "Time", "Masa", "Waktu", "Le temps", "El tiempo"),
      theme: "time",
      lessons: [
        {
          id: "uae-g2u3l1",
          unitId: "uae-g2u3",
          gradeId: "uae-g2",
          order: 1,
          title: t("السَّاعَةُ وَالتَّارِيخُ", "Clock and Date", "Tarikh", "Tanggal", "L’horloge", "reloj"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("أَسْأَلُ عَنِ السَّاعَةِ وَأَقْرَأُ التَّارِيخَ.", "I ask about the time and read the date.", "Saya bertanya tentang jam dan membaca tarikh.", "Aku menanyakan waktu dan membaca tanggal.", "Je demande l’heure et je lis la date.", "Pregunto la hora y leo la fecha."),
          vocabulary: [
            {
              id: "uae-g2u3l1-v1",
              arabic: "سَاعَةٌ",
              transliteration: "sāʿah",
              translation: t("سَاعَةٌ", "hour/clock", "jam", "jam", "heure/horloge", "hora/reloj"),
              emoji: "🕒"
            },
            {
              id: "uae-g2u3l1-v2",
              arabic: "دَقِيقَةٌ",
              transliteration: "daqīqah",
              translation: t("دَقِيقَةٌ", "minute", "minit", "menit", "minute", "minuto"),
              emoji: "⏱️"
            },
            {
              id: "uae-g2u3l1-v3",
              arabic: "يَوْمٌ",
              transliteration: "yawmun",
              translation: t("يَوْمٌ", "day", "hari", "hari", "jour", "día"),
              emoji: "📅"
            },
            {
              id: "uae-g2u3l1-v4",
              arabic: "تَارِيخٌ",
              transliteration: "tārīkhun",
              translation: t("تَارِيخٌ", "date", "tarikh", "tanggal", "date", "fecha"),
              emoji: "🗓️"
            },
            {
              id: "uae-g2u3l1-v5",
              arabic: "صَبَاحٌ",
              transliteration: "ṣabāḥun",
              translation: t("صَبَاحٌ", "morning", "pagi", "pagi", "matin", "mañana"),
              emoji: "🌅"
            },
            {
              id: "uae-g2u3l1-v6",
              arabic: "مَسَاءٌ",
              transliteration: "masāʾun",
              translation: t("مَسَاءٌ", "evening", "petang", "sore", "soir", "tarde"),
              emoji: "🌇"
            },
            {
              id: "uae-g2u3l1-v7",
              arabic: "نَهَارٌ",
              transliteration: "nahārun",
              translation: t("نَهَارٌ", "daytime", "siang", "siang", "journée", "día"),
              emoji: "☀️"
            },
            {
              id: "uae-g2u3l1-v8",
              arabic: "لَيْلٌ",
              transliteration: "laylun",
              translation: t("لَيْلٌ", "night", "malam", "malam", "nuit", "noche"),
              emoji: "🌙"
            }
          ],
          dialogue: [
            {
              speaker: "المُعَلِّمُ",
              arabic: "كَمِ السَّاعَةُ الآنَ؟",
              translation: t("كَمِ السَّاعَةُ الآنَ؟", "What time is it now?", "Pukul berapa sekarang?", "Jam berapa sekarang?", "Quelle heure est-il maintenant ?", "¿Qué hora es ahora?")
            },
            {
              speaker: "مَرْيَم",
              arabic: "السَّاعَةُ الثَّانِيَةُ.",
              translation: t("السَّاعَةُ الثَّانِيَةُ.", "It is two o’clock.", "Pukul dua.", "Jam dua.", "Il est deux heures.", "Son las dos.")
            },
            {
              speaker: "المُعَلِّمُ",
              arabic: "أَحْسَنْتِ، وَمَا التَّارِيخُ؟",
              translation: t("أَحْسَنْتِ، وَمَا التَّارِيخُ؟", "Well done, and what is the date?", "Bagus, dan apakah tarikhnya?", "Bagus, dan apa tanggalnya?", "Bien, et quelle est la date ?", "Bien, ¿y cuál es la fecha?")
            }
          ],
          exercises: [
            {
              id: "uae-g2u3l1-e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْوَقْتَ", "Listen and choose the time", "Dengar dan pilih waktu", "Dengarkan dan pilih waktu", "Écoute et choisis l’heure", "Escucha y elige la hora"),
              arabicText: "سَاعَةٌ",
              options: [
                "يَوْمٌ",
                "سَاعَةٌ",
                "لَيْلٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f552/512.webp"
            },
            {
              id: "uae-g2u3l1-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالْمَعْنَى", "Match the word to the meaning", "Padankan perkataan dengan makna", "Cocokkan kata dengan arti", "Associe le mot au sens", "Relaciona la palabra con el significado"),
              pairs: [
                {
                  a: "سَاعَةٌ",
                  b: "🕒"
                },
                {
                  a: "دَقِيقَةٌ",
                  b: "⏱️"
                },
                {
                  a: "تَارِيخٌ",
                  b: "🗓️"
                },
                {
                  a: "لَيْلٌ",
                  b: "🌙"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f552/512.webp"
            },
            {
              id: "uae-g2u3l1-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلِ السَّاعَةَ", "Say the time", "Sebut waktu", "Di la hora", "Dis l’heure", "Di la hora"),
              arabicText: "السَّاعَةُ الثَّانِيَةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f552/512.webp"
            },
            {
              id: "uae-g2u3l1-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَةَ سَاعَةٌ", "Write the word سَاعَةٌ", "Tulis perkataan سَاعَةٌ", "Tulis kata سَاعَةٌ", "Écris le mot سَاعَةٌ", "Escribe la palabra سَاعَةٌ"),
              arabicText: "سَاعَةٌ",
              answer: "سَاعَةٌ",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Clock_icon.svg/512px-Clock_icon.svg.png"
            },
            {
              id: "uae-g2u3l1-e5",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ التَّارِيخَ", "Arrange the date", "Susun tarikh", "Ordena la fecha", "Range la date", "Ordena la fecha"),
              arabicText: "التَّارِيخُ يَوْمٌ",
              answer: "يَوْمٌ، تَارِيخٌ",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Calendar_icon.svg/512px-Calendar_icon.svg.png"
            },
            {
              id: "uae-g2u3l1-e6",
              type: "fill_in_blank",
              skill: "writing",
              prompt: t("أَكْمِلِ الْجُمْلَةَ", "Complete the sentence", "Lengkapkan ayat", "Completa la oración", "Complète la phrase", "Completa la oración"),
              arabicText: "الْآنَ السَّاعَةُ ___",
              answer: "الْوَاحِدَةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f552/512.webp"
            },
            {
              id: "uae-g2u3l1listenuae-g2u3l1-v1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "سَاعَةٌ",
              options: [
                "سَاعَةٌ",
                "جَدَّةٌ",
                "نَهَارٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f552/512.webp"
            },
            {
              id: "uae-g2u3l1mcquae-g2u3l1-v6",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"مَسَاءٌ\"؟", "What does \"evening\" mean?", "Apakah maksud \"petang\"?", "Apa arti \"sore\"?", "Que signifie \"soir\" ?", "¿Qué significa \"tarde\"?"),
              arabicText: "مَسَاءٌ",
              options: [
                "family",
                "riding",
                "evening",
                "activity"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f307/512.webp"
            },
            {
              id: "uae-g2u3l1spelluae-g2u3l1-v2",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "دَقِيقَةٌ",
              answer: "دَقِيقَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/23f1-fe0f/512.webp"
            },
            {
              id: "uae-g2u3l1arrange3",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "أَحْسَنْتِ، وَمَا التَّارِيخُ؟",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f552/512.webp"
            },
            {
              id: "uae-g2u3l1writeuae-g2u3l1-v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"سَاعَةٌ\"", "Type the Arabic word for: \"hour/clock\"", "Taip perkataan Arab untuk: \"jam\"", "Ketik kata Arab untuk: \"jam\"", "Tape le mot arabe pour : \"heure/horloge\"", "Escribe la palabra árabe para: \"hora/reloj\""),
              arabicText: "سَاعَةٌ",
              answer: "سَاعَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f552/512.webp"
            },
            {
              id: "uae-g2u3l1mcquae-g2u3l1-v8",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"لَيْلٌ\"؟", "What does \"night\" mean?", "Apakah maksud \"malam\"?", "Apa arti \"malam\"?", "Que signifie \"nuit\" ?", "¿Qué significa \"noche\"?"),
              arabicText: "لَيْلٌ",
              options: [
                "manners",
                "help",
                "night",
                "peace/greeting"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f319/512.webp"
            }
          ]
        },
        {
          id: "uae-g2u3l2",
          unitId: "uae-g2u3",
          gradeId: "uae-g2",
          order: 2,
          title: t("الْأَيَّامُ", "Days", "Hari-Hari", "Hari-Hari", "Les jours", "Los días"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("أَتَعَرَّفُ أَسْمَاءَ أَيَّامِ الْأُسْبُوعِ.", "I learn the names of the days of the week.", "Saya mengenal nama-nama hari dalam seminggu.", "Aku mengenal nama-nama hari dalam seminggu.", "J’apprends les noms des jours de la semaine.", "Aprendo los nombres de los días de la semana."),
          vocabulary: [
            {
              id: "uae-g2u3l2-v1",
              arabic: "الْأَحَدُ",
              transliteration: "al-aḥadu",
              translation: t("الْأَحَدُ", "Sunday", "Ahad", "Minggu", "dimanche", "domingo"),
              emoji: "1️⃣"
            },
            {
              id: "uae-g2u3l2-v2",
              arabic: "الِاثْنَيْنِ",
              transliteration: "al-ithnayni",
              translation: t("الِاثْنَيْنِ", "Monday", "Isnin", "Senin", "lundi", "lunes"),
              emoji: "2️⃣"
            },
            {
              id: "uae-g2u3l2-v3",
              arabic: "الثُّلَاثَاءُ",
              transliteration: "ath-thulāthāʾu",
              translation: t("الثُّلَاثَاءُ", "Tuesday", "Selasa", "Selasa", "mardi", "martes"),
              emoji: "3️⃣"
            },
            {
              id: "uae-g2u3l2-v4",
              arabic: "الْأَرْبِعَاءُ",
              transliteration: "al-arbiʿāʾu",
              translation: t("الْأَرْبِعَاءُ", "Wednesday", "Rabu", "Rabu", "mercredi", "miércoles"),
              emoji: "4️⃣"
            },
            {
              id: "uae-g2u3l2-v5",
              arabic: "الْخَمِيسُ",
              transliteration: "al-khamīs",
              translation: t("الْخَمِيسُ", "Thursday", "Khamis", "Kamis", "jeudi", "jueves"),
              emoji: "5️⃣"
            },
            {
              id: "uae-g2u3l2-v6",
              arabic: "الْجُمُعَةُ",
              transliteration: "al-jumuʿah",
              translation: t("الْجُمُعَةُ", "Friday", "Jumaat", "Jumat", "vendredi", "viernes"),
              emoji: "6️⃣"
            },
            {
              id: "uae-g2u3l2-v7",
              arabic: "السَّبْتُ",
              transliteration: "as-sabt",
              translation: t("السَّبْتُ", "Saturday", "Sabtu", "Sabtu", "samedi", "sábado"),
              emoji: "7️⃣"
            },
            {
              id: "uae-g2u3l2-v8",
              arabic: "أُسْبُوعٌ",
              transliteration: "usbūʿun",
              translation: t("أُسْبُوعٌ", "week", "minggu", "minggu", "semaine", "semana"),
              emoji: "📆"
            }
          ],
          dialogue: [
            {
              speaker: "سَلْمَى",
              arabic: "أَيُّ يَوْمٍ الْيَوْمَ؟",
              translation: t("أَيُّ يَوْمٍ الْيَوْمَ؟", "What day is it today?", "Hari apa hari ini?", "Hari apa hari ini?", "Quel jour sommes-nous aujourd’hui ?", "¿Qué día es hoy?")
            },
            {
              speaker: "نُور",
              arabic: "الْيَوْمَ الْأَرْبِعَاءُ.",
              translation: t("الْيَوْمَ الْأَرْبِعَاءُ.", "Today is Wednesday.", "Hari ini Rabu.", "Hari ini Rabu.", "Aujourd’hui, c’est mercredi.", "Hoy es miércoles.")
            },
            {
              speaker: "سَلْمَى",
              arabic: "أُحِبُّ يَوْمَ الْجُمُعَةِ.",
              translation: t("أُحِبُّ يَوْمَ الْجُمُعَةِ.", "I like Friday.", "Saya suka hari Jumaat.", "Aku suka hari Jumat.", "J’aime le vendredi.", "Me gusta el viernes.")
            }
          ],
          exercises: [
            {
              id: "uae-g2u3l2-e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْيَوْمَ", "Listen and choose the day", "Dengar dan pilih hari", "Dengarkan dan pilih hari", "Écoute et choisis le jour", "Escucha y elige el día"),
              arabicText: "الْخَمِيسُ",
              options: [
                "الْأَحَدُ",
                "الْخَمِيسُ",
                "السَّبْتُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/35-fe0f-20e3/512.webp"
            },
            {
              id: "uae-g2u3l2-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْيَوْمَ بِرَقْمِهِ", "Match the day with its number", "Padankan hari dengan nombornya", "Cococca el día con su número", "Associe le jour à son numéro", "Relaciona el día con su número"),
              pairs: [
                {
                  a: "الْأَحَدُ",
                  b: "1️⃣"
                },
                {
                  a: "الِاثْنَيْنِ",
                  b: "2️⃣"
                },
                {
                  a: "الثُّلَاثَاءُ",
                  b: "3️⃣"
                },
                {
                  a: "الْجُمُعَةُ",
                  b: "6️⃣"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "uae-g2u3l2-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلْ أَيَّ يَوْمٍ تُحِبُّ", "Say which day you like", "Sebut hari yang kamu suka", "Di qué día te gusta", "Dis quel jour tu aimes", "Di qué día te gusta"),
              arabicText: "أُحِبُّ يَوْمَ الْجُمُعَةِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "uae-g2u3l2-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَةَ أُسْبُوعٌ", "Write the word أُسْبُوعٌ", "Tulis perkataan أُسْبُوعٌ", "Tulis kata أُسْبُوعٌ", "Écris le mot أُسْبُوعٌ", "Escribe la palabra أُسْبُوعٌ"),
              arabicText: "أُسْبُوعٌ",
              answer: "أُسْبُوعٌ",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Calendar_icon.svg/512px-Calendar_icon.svg.png"
            },
            {
              id: "uae-g2u3l2-e5",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ أَيَّامَ الْأُسْبُوعِ", "Arrange the days of the week", "Susun hari-hari minggu", "Ordena los días de la semana", "Range les jours de la semaine", "Ordena los días de la semana"),
              arabicText: "الْأَحَدُ الْجُمُعَةُ الْأَرْبِعَاءُ",
              answer: "الْأَحَدُ، الْأَرْبِعَاءُ، الْجُمُعَةُ",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Calendar_icon.svg/512px-Calendar_icon.svg.png"
            },
            {
              id: "uae-g2u3l2-e6",
              type: "fill_in_blank",
              skill: "writing",
              prompt: t("أَكْمِلِ الْجُمْلَةَ", "Complete the sentence", "Lengkapkan ayat", "Completa la oración", "Complète la phrase", "Completa la oración"),
              arabicText: "أَنَا أَذْهَبُ إِلَى الْمَدْرَسَةِ يَوْمَ ___",
              answer: "الْأَحَدِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "uae-g2u3l2mcquae-g2u3l2-v2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"الِاثْنَيْنِ\"؟", "What does \"Monday\" mean?", "Apakah maksud \"Isnin\"?", "Apa arti \"Senin\"?", "Que signifie \"lundi\" ?", "¿Qué significa \"lunes\"?"),
              arabicText: "الِاثْنَيْنِ",
              options: [
                "nose",
                "visit",
                "Monday",
                "bread"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/32-fe0f-20e3/512.webp"
            },
            {
              id: "uae-g2u3l2spelluae-g2u3l2-v1",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "الْأَحَدُ",
              answer: "الْأَحَدُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "uae-g2u3l2writeuae-g2u3l2-v2",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"الِاثْنَيْنِ\"", "Type the Arabic word for: \"Monday\"", "Taip perkataan Arab untuk: \"Isnin\"", "Ketik kata Arab untuk: \"Senin\"", "Tape le mot arabe pour : \"lundi\"", "Escribe la palabra árabe para: \"lunes\""),
              arabicText: "الِاثْنَيْنِ",
              answer: "الِاثْنَيْنِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/32-fe0f-20e3/512.webp"
            },
            {
              id: "uae-g2u3l2listenuae-g2u3l2-v1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الْأَحَدُ",
              options: [
                "الِاثْنَيْنِ",
                "الْأَحَدُ",
                "تَارِيخٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "uae-g2u3l2arrange2",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "الْيَوْمَ الْأَرْبِعَاءُ.",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "uae-g2u3l2spelluae-g2u3l2-v6",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "الْجُمُعَةُ",
              answer: "الْجُمُعَةُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/36-fe0f-20e3/512.webp"
            }
          ]
        },
        {
          id: "uae-g2u3l3",
          unitId: "uae-g2u3",
          gradeId: "uae-g2",
          order: 3,
          title: t("الشُّهُورُ", "Months", "Bulan-Bulan", "Bulan-Bulan", "Les mois", "Los meses"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("أَتَعَرَّفُ الشُّهُورَ وَأَتَذَكَّرُ أَيْامَ السَّنَةِ.", "I learn the months and remember the year.", "Saya mengenal bulan dan mengingati tahun.", "Aku mengenal bulan dan mengingat tahun.", "J’apprends les mois et je me souviens de l’année.", "Aprendo los meses y recuerdo el año."),
          vocabulary: [
            {
              id: "uae-g2u3l3-v1",
              arabic: "يَنَايِرُ",
              transliteration: "yanāyiru",
              translation: t("يَنَايِرُ", "January", "Januari", "Januari", "janvier", "enero"),
              emoji: "1️⃣"
            },
            {
              id: "uae-g2u3l3-v2",
              arabic: "فِبْرَايِرُ",
              transliteration: "fibrāyiru",
              translation: t("فِبْرَايِرُ", "February", "Februari", "Februari", "février", "febrero"),
              emoji: "2️⃣"
            },
            {
              id: "uae-g2u3l3-v3",
              arabic: "مَارِسُ",
              transliteration: "mārisu",
              translation: t("مَارِسُ", "March", "Mac", "Maret", "mars", "marzo"),
              emoji: "3️⃣"
            },
            {
              id: "uae-g2u3l3-v4",
              arabic: "أَبْرِيلُ",
              transliteration: "abrīlu",
              translation: t("أَبْرِيلُ", "April", "April", "April", "avril", "abril"),
              emoji: "4️⃣"
            },
            {
              id: "uae-g2u3l3-v5",
              arabic: "مَايُو",
              transliteration: "māyū",
              translation: t("مَايُو", "May", "Mei", "Mei", "mai", "mayo"),
              emoji: "5️⃣"
            },
            {
              id: "uae-g2u3l3-v6",
              arabic: "يُونْيُو",
              transliteration: "yūnyū",
              translation: t("يُونْيُو", "June", "Jun", "Juni", "juin", "junio"),
              emoji: "6️⃣"
            },
            {
              id: "uae-g2u3l3-v7",
              arabic: "يُولْيُو",
              transliteration: "yūlyū",
              translation: t("يُولْيُو", "July", "Julai", "Juli", "juillet", "julio"),
              emoji: "7️⃣"
            },
            {
              id: "uae-g2u3l3-v8",
              arabic: "شُهُورٌ",
              transliteration: "shuhūr",
              translation: t("شُهُورٌ", "months", "bulan-bulan", "bulan-bulan", "mois", "meses"),
              emoji: "🗓️"
            }
          ],
          dialogue: [
            {
              speaker: "عَلِي",
              arabic: "أَيُّ شَهْرٍ نَحْنُ فِيهِ؟",
              translation: t("أَيُّ شَهْرٍ نَحْنُ فِيهِ؟", "Which month are we in?", "Kita berada dalam bulan apa?", "Kita sedang berada di bulan apa?", "Dans quel mois sommes-nous ?", "¿En qué mes estamos?")
            },
            {
              speaker: "سَلْمَى",
              arabic: "نَحْنُ فِي شَهْرِ مَارِسَ.",
              translation: t("نَحْنُ فِي شَهْرِ مَارِسَ.", "We are in March.", "Kami berada dalam bulan Mac.", "Kita berada di bulan Maret.", "Nous sommes en mars.", "Estamos en marzo.")
            },
            {
              speaker: "عَلِي",
              arabic: "شَهْرٌ جَمِيلٌ!",
              translation: t("شَهْرٌ جَمِيلٌ!", "A lovely month!", "Bulan yang indah!", "Bulan yang indah!", "Un beau mois !", "¡Un mes bonito!")
            }
          ],
          exercises: [
            {
              id: "uae-g2u3l3-e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الشَّهْرَ", "Listen and choose the month", "Dengar dan pilih bulan", "Dengarkan dan pilih bulan", "Écoute et choisis le mois", "Escucha y elige el mes"),
              arabicText: "مَارِسُ",
              options: [
                "يَنَايِرُ",
                "مَارِسُ",
                "مَايُو"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/33-fe0f-20e3/512.webp"
            },
            {
              id: "uae-g2u3l3-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الشَّهْرَ بِرَقْمِهِ", "Match the month with its number", "Padankan bulan dengan nombornya", "Cocokkan bulan dengan nomornya", "Associe le mois à son numéro", "Relaciona el mes con su número"),
              pairs: [
                {
                  a: "يَنَايِرُ",
                  b: "1️⃣"
                },
                {
                  a: "فِبْرَايِرُ",
                  b: "2️⃣"
                },
                {
                  a: "مَارِسُ",
                  b: "3️⃣"
                },
                {
                  a: "أَبْرِيلُ",
                  b: "4️⃣"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "uae-g2u3l3-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("قُلِ الشَّهْرَ", "Say the month", "Sebut bulan", "Di el mes", "Dis le mois", "Di el mes"),
              arabicText: "مَارِسُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/33-fe0f-20e3/512.webp"
            },
            {
              id: "uae-g2u3l3-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَةَ شَهْرٌ", "Write the word شَهْرٌ", "Tulis perkataan شَهْرٌ", "Tulis kata شَهْرٌ", "Écris le mot شَهْرٌ", "Escribe la palabra شَهْرٌ"),
              arabicText: "شَهْرٌ",
              answer: "شَهْرٌ",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Calendar_icon.svg/512px-Calendar_icon.svg.png"
            },
            {
              id: "uae-g2u3l3-e5",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ الشُّهُورَ", "Arrange the months", "Susun bulan-bulan", "Ordena los meses", "Range les mois", "Ordena los meses"),
              arabicText: "مَارِسُ يَنَايِرُ فِبْرَايِرُ",
              answer: "يَنَايِرُ، فِبْرَايِرُ، مَارِسُ",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Calendar_icon.svg/512px-Calendar_icon.svg.png"
            },
            {
              id: "uae-g2u3l3-e6",
              type: "fill_in_blank",
              skill: "writing",
              prompt: t("أَكْمِلِ الْجُمْلَةَ", "Complete the sentence", "Lengkapkan ayat", "Completa la oración", "Complète la phrase", "Completa la oración"),
              arabicText: "شَهْرُ الْيَوْمِ هُوَ ___",
              answer: "مَارِسُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "uae-g2u3l3arrange1",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "أَيُّ شَهْرٍ نَحْنُ فِيهِ؟",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "uae-g2u3l3listenuae-g2u3l3-v4",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "أَبْرِيلُ",
              options: [
                "تَحِيَّةٌ",
                "أَلْوَانٌ",
                "أَبْرِيلُ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/34-fe0f-20e3/512.webp"
            },
            {
              id: "uae-g2u3l3mcquae-g2u3l3-v3",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"مَارِسُ\"؟", "What does \"March\" mean?", "Apakah maksud \"Mac\"?", "Apa arti \"Maret\"?", "Que signifie \"mars\" ?", "¿Qué significa \"marzo\"?"),
              arabicText: "مَارِسُ",
              options: [
                "oud",
                "March",
                "coffee",
                "singing"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/33-fe0f-20e3/512.webp"
            },
            {
              id: "uae-g2u3l3mcquae-g2u3l3-v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"يَنَايِرُ\"؟", "What does \"January\" mean?", "Apakah maksud \"Januari\"?", "Apa arti \"Januari\"?", "Que signifie \"janvier\" ?", "¿Qué significa \"enero\"?"),
              arabicText: "يَنَايِرُ",
              options: [
                "gift",
                "song/anthem",
                "night",
                "January"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/31-fe0f-20e3/512.webp"
            },
            {
              id: "uae-g2u3l3spelluae-g2u3l3-v3",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "مَارِسُ",
              answer: "مَارِسُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/33-fe0f-20e3/512.webp"
            },
            {
              id: "uae-g2u3l3speakuae-g2u3l3-v7",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "يُولْيُو",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/37-fe0f-20e3/512.webp"
            }
          ]
        },
        {
          id: "uae-g2u3review",
          unitId: "uae-g2u3",
          gradeId: "uae-g2",
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
              id: "uae-g2u3l1-v1",
              arabic: "سَاعَةٌ",
              transliteration: "sāʿah",
              translation: t("سَاعَةٌ", "hour/clock", "jam", "jam", "heure/horloge", "hora/reloj"),
              emoji: "🕒"
            },
            {
              id: "uae-g2u3l1-v2",
              arabic: "دَقِيقَةٌ",
              transliteration: "daqīqah",
              translation: t("دَقِيقَةٌ", "minute", "minit", "menit", "minute", "minuto"),
              emoji: "⏱️"
            },
            {
              id: "uae-g2u3l1-v3",
              arabic: "يَوْمٌ",
              transliteration: "yawmun",
              translation: t("يَوْمٌ", "day", "hari", "hari", "jour", "día"),
              emoji: "📅"
            },
            {
              id: "uae-g2u3l1-v4",
              arabic: "تَارِيخٌ",
              transliteration: "tārīkhun",
              translation: t("تَارِيخٌ", "date", "tarikh", "tanggal", "date", "fecha"),
              emoji: "🗓️"
            },
            {
              id: "uae-g2u3l1-v5",
              arabic: "صَبَاحٌ",
              transliteration: "ṣabāḥun",
              translation: t("صَبَاحٌ", "morning", "pagi", "pagi", "matin", "mañana"),
              emoji: "🌅"
            },
            {
              id: "uae-g2u3l1-v6",
              arabic: "مَسَاءٌ",
              transliteration: "masāʾun",
              translation: t("مَسَاءٌ", "evening", "petang", "sore", "soir", "tarde"),
              emoji: "🌇"
            },
            {
              id: "uae-g2u3l1-v7",
              arabic: "نَهَارٌ",
              transliteration: "nahārun",
              translation: t("نَهَارٌ", "daytime", "siang", "siang", "journée", "día"),
              emoji: "☀️"
            },
            {
              id: "uae-g2u3l1-v8",
              arabic: "لَيْلٌ",
              transliteration: "laylun",
              translation: t("لَيْلٌ", "night", "malam", "malam", "nuit", "noche"),
              emoji: "🌙"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "uae-g2u3reviewspeakuae-g2u3l1-v7",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "نَهَارٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2600-fe0f/512.webp"
            },
            {
              id: "uae-g2u3reviewspelluae-g2u3l1-v3",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "يَوْمٌ",
              answer: "يَوْمٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4c5/512.webp"
            },
            {
              id: "uae-g2u3reviewlistenuae-g2u3l1-v2",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "دَقِيقَةٌ",
              options: [
                "مَعًا",
                "مُعَلِّمَةُ الْمُوسِيقَى",
                "دَقِيقَةٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/23f1-fe0f/512.webp"
            },
            {
              id: "uae-g2u3reviewmcquae-g2u3l1-v2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"دَقِيقَةٌ\"؟", "What does \"minute\" mean?", "Apakah maksud \"minit\"?", "Apa arti \"menit\"?", "Que signifie \"minute\" ?", "¿Qué significa \"minuto\"?"),
              arabicText: "دَقِيقَةٌ",
              options: [
                "minute",
                "help",
                "moment",
                "vegetables"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/23f1-fe0f/512.webp"
            },
            {
              id: "uae-g2u3reviewlistenuae-g2u3l1-v3",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "يَوْمٌ",
              options: [
                "يَوْمٌ",
                "مَايُو",
                "كَعْكٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4c5/512.webp"
            },
            {
              id: "uae-g2u3reviewwriteuae-g2u3l1-v2",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"دَقِيقَةٌ\"", "Type the Arabic word for: \"minute\"", "Taip perkataan Arab untuk: \"minit\"", "Ketik kata Arab untuk: \"menit\"", "Tape le mot arabe pour : \"minute\"", "Escribe la palabra árabe para: \"minuto\""),
              arabicText: "دَقِيقَةٌ",
              answer: "دَقِيقَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/23f1-fe0f/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "uae-g2u4",
      gradeId: "uae-g2",
      order: 4,
      title: t("فِي الْمَدْرَسَةِ", "At School", "Di Sekolah", "Di Sekolah", "À l’école", "En la escuela"),
      theme: "school",
      lessons: [
        {
          id: "uae-g2u4l1",
          unitId: "uae-g2u4",
          gradeId: "uae-g2",
          order: 1,
          title: t("فِي غُرْفَةِ الْمُوسِيقَى", "Music Room", "Bilik Muzik", "Ruang Musik", "Dans la salle de musique", "En la sala de música"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("أُحِبُّ الْغِنَاءَ وَالْإِصْغَاءَ إِلَى الْمُوسِيقَى.", "I like singing and listening to music.", "Saya suka menyanyi dan mendengar muzik.", "Aku suka bernyanyi dan mendengarkan musik.", "J’aime chanter et écouter de la musique.", "Me gusta cantar y escuchar música."),
          vocabulary: [
            {
              id: "uae-g2u4l1-v1",
              arabic: "مُوسِيقَى",
              transliteration: "mūsīqā",
              translation: t("مُوسِيقَى", "music", "muzik", "musik", "musique", "música"),
              emoji: "🎵"
            },
            {
              id: "uae-g2u4l1-v2",
              arabic: "غِنَاءٌ",
              transliteration: "ghināʾun",
              translation: t("غِنَاءٌ", "singing", "nyanyian", "nyanyian", "chant", "canto"),
              emoji: "🎤"
            },
            {
              id: "uae-g2u4l1-v3",
              arabic: "طَبْلٌ",
              transliteration: "ṭablun",
              translation: t("طَبْلٌ", "drum", "dram", "drum", "tambour", "tambor"),
              emoji: "🥁"
            },
            {
              id: "uae-g2u4l1-v4",
              arabic: "عُودٌ",
              transliteration: "ʿūdun",
              translation: t("عُودٌ", "oud", "عود", "oud", "oud", "laúd"),
              emoji: "🎼"
            },
            {
              id: "uae-g2u4l1-v5",
              arabic: "نَشِيدٌ",
              transliteration: "nashīdun",
              translation: t("نَشِيدٌ", "song/anthem", "nasyid", "lagu", "chant", "canción"),
              emoji: "📣"
            },
            {
              id: "uae-g2u4l1-v6",
              arabic: "صَوْتٌ",
              transliteration: "ṣawtun",
              translation: t("صَوْتٌ", "sound", "bunyi", "suara", "son", "sonido"),
              emoji: "🔊"
            },
            {
              id: "uae-g2u4l1-v7",
              arabic: "إِيقَاعٌ",
              transliteration: "īqāʿun",
              translation: t("إِيقَاعٌ", "rhythm", "irama", "irama", "rythme", "ritmo"),
              emoji: "🥁"
            },
            {
              id: "uae-g2u4l1-v8",
              arabic: "مُعَلِّمَةُ الْمُوسِيقَى",
              transliteration: "muʿallimat al-mūsīqā",
              translation: t("مُعَلِّمَةُ الْمُوسِيقَى", "music teacher", "guru muzik", "guru musik", "professeure de musique", "profesora de música"),
              emoji: "👩‍🏫"
            }
          ],
          dialogue: [
            {
              speaker: "المُعَلِّمَةُ",
              arabic: "هَلْ تُحِبُّ الْمُوسِيقَى؟",
              translation: t("هَلْ تُحِبُّ الْمُوسِيقَى؟", "Do you like music?", "Adakah kamu suka muzik?", "Apakah kamu suka musik?", "Aimes-tu la musique ?", "¿Te gusta la música?")
            },
            {
              speaker: "حَسَن",
              arabic: "نَعَمْ، أُحِبُّ الْغِنَاءَ.",
              translation: t("نَعَمْ، أُحِبُّ الْغِنَاءَ.", "Yes, I like singing.", "Ya, saya suka nyanyian.", "Ya, aku suka bernyanyi.", "Oui, j’aime chanter.", "Sí, me gusta cantar.")
            },
            {
              speaker: "المُعَلِّمَةُ",
              arabic: "جَمِيلٌ!",
              translation: t("جَمِيلٌ!", "Lovely!", "Indah!", "Bagus!", "Très bien !", "¡Qué bien!")
            }
          ],
          exercises: [
            {
              id: "uae-g2u4l1-e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْآلَةَ", "Listen and choose the instrument", "Dengar dan pilih alat", "Dengarkan dan pilih alat", "Écoute et choisis l’instrument", "Escucha y elige el instrumento"),
              arabicText: "طَبْلٌ",
              options: [
                "طَبْلٌ",
                "كِتَابٌ",
                "كُرَةٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f941/512.webp"
            },
            {
              id: "uae-g2u4l1-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْآلَةَ بِصُورَتِهَا", "Match the instrument to its picture", "Padankan alat dengan gambar", "Cocokkan alat dengan gambar", "Associe l’instrument à son image", "Relaciona el instrumento con su imagen"),
              pairs: [
                {
                  a: "طَبْلٌ",
                  b: "🥁"
                },
                {
                  a: "عُودٌ",
                  b: "🎼"
                },
                {
                  a: "غِنَاءٌ",
                  b: "🎤"
                },
                {
                  a: "مُوسِيقَى",
                  b: "🎵"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3b5/512.webp"
            },
            {
              id: "uae-g2u4l1-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنِ الْمُوسِيقَى", "Talk about music", "Ceritakan tentang muzik", "Habla de la música", "Parle de la musique", "Habla de la música"),
              arabicText: "أُحِبُّ الْمُوسِيقَى",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3b5/512.webp"
            },
            {
              id: "uae-g2u4l1-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَةَ مُوسِيقَى", "Write the word مُوسِيقَى", "Tulis perkataan مُوسِيقَى", "Tulis kata مُوسِيقَى", "Écris le mot مُوسِيقَى", "Escribe la palabra مُوسِيقَى"),
              arabicText: "مُوسِيقَى",
              answer: "مُوسِيقَى",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Musical_notes.svg/512px-Musical_notes.svg.png"
            },
            {
              id: "uae-g2u4l1-e5",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ الْجُمْلَةَ", "Arrange the sentence", "Susun ayat", "Ordena la oración", "Range la phrase", "Ordena la oración"),
              arabicText: "أُحِبُّ الْمُوسِيقَى أَنَا",
              answer: "أَنَا أُحِبُّ الْمُوسِيقَى",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Musical_notes.svg/512px-Musical_notes.svg.png"
            },
            {
              id: "uae-g2u4l1-e6",
              type: "fill_in_blank",
              skill: "writing",
              prompt: t("أَكْمِلِ الْجُمْلَةَ", "Complete the sentence", "Lengkapkan ayat", "Completa la oración", "Complète la phrase", "Completa la oración"),
              arabicText: "أَسْمَعُ ___",
              answer: "الصَّوْتَ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3b5/512.webp"
            },
            {
              id: "uae-g2u4l1writeuae-g2u4l1-v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"مُوسِيقَى\"", "Type the Arabic word for: \"music\"", "Taip perkataan Arab untuk: \"muzik\"", "Ketik kata Arab untuk: \"musik\"", "Tape le mot arabe pour : \"musique\"", "Escribe la palabra árabe para: \"música\""),
              arabicText: "مُوسِيقَى",
              answer: "مُوسِيقَى",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3b5/512.webp"
            },
            {
              id: "uae-g2u4l1listenuae-g2u4l1-v7",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "إِيقَاعٌ",
              options: [
                "تَحِيَّةٌ",
                "إِيقَاعٌ",
                "شَمٌّ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f941/512.webp"
            },
            {
              id: "uae-g2u4l1speakuae-g2u4l1-v7",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "إِيقَاعٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f941/512.webp"
            },
            {
              id: "uae-g2u4l1mcquae-g2u4l1-v5",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"نَشِيدٌ\"؟", "What does \"song/anthem\" mean?", "Apakah maksud \"nasyid\"?", "Apa arti \"lagu\"?", "Que signifie \"chant\" ?", "¿Qué significa \"canción\"?"),
              arabicText: "نَشِيدٌ",
              options: [
                "evening",
                "gift",
                "song/anthem",
                "grandfather"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4e3/512.webp"
            },
            {
              id: "uae-g2u4l1listenuae-g2u4l1-v8",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "مُعَلِّمَةُ الْمُوسِيقَى",
              options: [
                "نَشِيدٌ",
                "يُونْيُو",
                "مُعَلِّمَةُ الْمُوسِيقَى"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f469-200d-1f3eb/512.webp"
            },
            {
              id: "uae-g2u4l1listenuae-g2u4l1-v3",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "طَبْلٌ",
              options: [
                "أُسْبُوعٌ",
                "مُفَاجَأَةٌ",
                "طَبْلٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f941/512.webp"
            }
          ]
        },
        {
          id: "uae-g2u4l2",
          unitId: "uae-g2u4",
          gradeId: "uae-g2",
          order: 2,
          title: t("فِي السَّاحَةِ", "Yard", "Laman", "Lapangan", "Dans la cour", "En el patio"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("فِي السَّاحَةِ نَلْعَبُ وَنَجْرِي وَنَسْعَدُ.", "In the yard we play, run, and enjoy ourselves.", "Di laman kami bermain, berlari dan bergembira.", "Di lapangan kami bermain, berlari, dan bersenang-senang.", "Dans la cour, nous jouons, courons et nous amusons.", "En el patio jugamos, corremos y nos divertimos."),
          vocabulary: [
            {
              id: "uae-g2u4l2-v1",
              arabic: "سَاحَةٌ",
              transliteration: "sāḥah",
              translation: t("سَاحَةٌ", "yard", "sah", "lapangan", "cour", "patio"),
              emoji: "🏟️"
            },
            {
              id: "uae-g2u4l2-v2",
              arabic: "جَرْيٌ",
              transliteration: "jaryun",
              translation: t("جَرْيٌ", "running", "lari", "lari", "course", "carrera"),
              emoji: "🏃"
            },
            {
              id: "uae-g2u4l2-v3",
              arabic: "كُرَةٌ",
              transliteration: "kuratun",
              translation: t("كُرَةٌ", "ball", "bola", "bola", "ballon", "pelota"),
              emoji: "⚽"
            },
            {
              id: "uae-g2u4l2-v4",
              arabic: "لُعْبَةٌ",
              transliteration: "luʿbah",
              translation: t("لُعْبَةٌ", "game", "permainan", "permainan", "jeu", "juego"),
              emoji: "🎯"
            },
            {
              id: "uae-g2u4l2-v5",
              arabic: "نَشَاطٌ",
              transliteration: "nashāṭun",
              translation: t("نَشَاطٌ", "activity", "aktiviti", "kegiatan", "activité", "actividad"),
              emoji: "⚡"
            },
            {
              id: "uae-g2u4l2-v6",
              arabic: "صَدِيقٌ",
              transliteration: "ṣadīqun",
              translation: t("صَدِيقٌ", "friend", "kawan", "teman", "ami", "amigo"),
              emoji: "🤝"
            },
            {
              id: "uae-g2u4l2-v7",
              arabic: "فَرِحٌ",
              transliteration: "fariḥun",
              translation: t("فَرِحٌ", "happy", "gembira", "senang", "content", "contento"),
              emoji: "😄"
            },
            {
              id: "uae-g2u4l2-v8",
              arabic: "لُعْبٌ",
              transliteration: "luʿbun",
              translation: t("لُعْبٌ", "play", "main", "main", "jeu", "juego"),
              emoji: "🎮"
            }
          ],
          dialogue: [
            {
              speaker: "مَرْيَم",
              arabic: "مَاذَا تَفْعَلُ فِي السَّاحَةِ؟",
              translation: t("مَاذَا تَفْعَلُ فِي السَّاحَةِ؟", "What do you do in the yard?", "Apa yang kamu buat di laman?", "Apa yang kamu lakukan di lapangan?", "Que fais-tu dans la cour ?", "¿Qué haces en el patio?")
            },
            {
              speaker: "مُحَمَّد",
              arabic: "أَلْعَبُ الْكُرَةَ مَعَ أَصْدِقَائِي.",
              translation: t("أَلْعَبُ الْكُرَةَ مَعَ أَصْدِقَائِي.", "I play football with my friends.", "Saya bermain bola dengan rakan-rakan.", "Aku bermain bola dengan teman-temanku.", "Je joue au ballon avec mes amis.", "Juego a la pelota con mis amigos.")
            },
            {
              speaker: "مَرْيَم",
              arabic: "هٰذَا مُفِيدٌ وَمُمْتِعٌ.",
              translation: t("هٰذَا مُفِيدٌ وَمُمْتِعٌ.", "This is useful and fun.", "Ini berguna dan menyeronokkan.", "Ini bermanfaat dan menyenangkan.", "C’est utile et amusant.", "Es útil y divertido.")
            }
          ],
          exercises: [
            {
              id: "uae-g2u4l2-e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ اللُّعْبَةَ", "Listen and choose the game", "Dengar dan pilih permainan", "Dengarkan dan pilih juego", "Écoute et choisis le jeu", "Escucha y elige el juego"),
              arabicText: "كُرَةٌ",
              options: [
                "كُرَةٌ",
                "كِتَابٌ",
                "قَلَمٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "uae-g2u4l2-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالصُّورَةِ", "Match the word to the picture", "Padankan perkataan dengan gambar", "Cocokkan kata dengan gambar", "Associe le mot à l’image", "Relaciona la palabra con la imagen"),
              pairs: [
                {
                  a: "سَاحَةٌ",
                  b: "🏟️"
                },
                {
                  a: "كُرَةٌ",
                  b: "⚽"
                },
                {
                  a: "جَرْيٌ",
                  b: "🏃"
                },
                {
                  a: "نَشَاطٌ",
                  b: "⚡"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3df-fe0f/512.webp"
            },
            {
              id: "uae-g2u4l2-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنِ اللُّعْبِ", "Talk about play", "Ceritakan tentang bermain", "Habla sobre jugar", "Parle du jeu", "Habla sobre jugar"),
              arabicText: "أَلْعَبُ مَعَ أَصْدِقَائِي",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3df-fe0f/512.webp"
            },
            {
              id: "uae-g2u4l2-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَةَ كُرَةٌ", "Write the word كُرَةٌ", "Tulis perkataan كُرَةٌ", "Tulis kata كُرَةٌ", "Écris le mot كُرَةٌ", "Escribe la palabra كُرَةٌ"),
              arabicText: "كُرَةٌ",
              answer: "كُرَةٌ",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Children_playing.svg/512px-Children_playing.svg.png"
            },
            {
              id: "uae-g2u4l2-e5",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ الْجُمْلَةَ", "Arrange the sentence", "Susun ayat", "Ordena la oración", "Range la phrase", "Ordena la oración"),
              arabicText: "مَعَ أَصْدِقَائِي أَلْعَبُ",
              answer: "أَلْعَبُ مَعَ أَصْدِقَائِي",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Children_playing.svg/512px-Children_playing.svg.png"
            },
            {
              id: "uae-g2u4l2-e6",
              type: "fill_in_blank",
              skill: "writing",
              prompt: t("اِكْمِلِ الْجُمْلَةَ", "Complete the sentence", "Lengkapkan ayat", "Completa la oración", "Complète la phrase", "Completa la oración"),
              arabicText: "فِي السَّاحَةِ أَلْعَبُ ___",
              answer: "الْكُرَةَ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3df-fe0f/512.webp"
            },
            {
              id: "uae-g2u4l2spelluae-g2u4l2-v2",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "جَرْيٌ",
              answer: "جَرْيٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c3/512.webp"
            },
            {
              id: "uae-g2u4l2writeuae-g2u4l2-v6",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"صَدِيقٌ\"", "Type the Arabic word for: \"friend\"", "Taip perkataan Arab untuk: \"kawan\"", "Ketik kata Arab untuk: \"teman\"", "Tape le mot arabe pour : \"ami\"", "Escribe la palabra árabe para: \"amigo\""),
              arabicText: "صَدِيقٌ",
              answer: "صَدِيقٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "uae-g2u4l2speakuae-g2u4l2-v7",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "فَرِحٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f604/512.webp"
            },
            {
              id: "uae-g2u4l2listenuae-g2u4l2-v1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "سَاحَةٌ",
              options: [
                "مَقْعَدٌ",
                "سَاحَةٌ",
                "مُوسِيقَى"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3df-fe0f/512.webp"
            },
            {
              id: "uae-g2u4l2speakuae-g2u4l2-v3",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "كُرَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "uae-g2u4l2writeuae-g2u4l2-v4",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"لُعْبَةٌ\"", "Type the Arabic word for: \"game\"", "Taip perkataan Arab untuk: \"permainan\"", "Ketik kata Arab untuk: \"permainan\"", "Tape le mot arabe pour : \"jeu\"", "Escribe la palabra árabe para: \"juego\""),
              arabicText: "لُعْبَةٌ",
              answer: "لُعْبَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3af/512.webp"
            }
          ]
        },
        {
          id: "uae-g2u4l3",
          unitId: "uae-g2u4",
          gradeId: "uae-g2",
          order: 3,
          title: t("فِي الْحَافِلَةِ", "Bus", "Bas", "Bus", "Dans le bus", "En el autobús"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("أَرْكَبُ الْحَافِلَةَ بِأَدَبٍ وَأَحْفَظُ النِّظَامَ.", "I ride the bus politely and keep order.", "Saya menaiki bas dengan sopan dan menjaga tertib.", "Aku naik bus dengan sopan dan menjaga ketertiban.", "Je monte dans le bus poliment et je respecte l’ordre.", "Subo al autobús con educación y respeto el orden."),
          vocabulary: [
            {
              id: "uae-g2u4l3-v1",
              arabic: "حَافِلَةٌ",
              transliteration: "ḥāfilah",
              translation: t("حَافِلَةٌ", "bus", "bas", "bus", "bus", "autobús"),
              emoji: "🚌"
            },
            {
              id: "uae-g2u4l3-v2",
              arabic: "مَقْعَدٌ",
              transliteration: "maqʿadun",
              translation: t("مَقْعَدٌ", "seat", "tempat duduk", "tempat duduk", "siège", "asiento"),
              emoji: "💺"
            },
            {
              id: "uae-g2u4l3-v3",
              arabic: "سَائِقٌ",
              transliteration: "sāʾiqun",
              translation: t("سَائِقٌ", "driver", "pemandu", "pengemudi", "chauffeur", "conductor"),
              emoji: "🧑‍✈️"
            },
            {
              id: "uae-g2u4l3-v4",
              arabic: "نِظَامٌ",
              transliteration: "niẓām",
              translation: t("نِظَامٌ", "order", "tertib", "tertib", "ordre", "orden"),
              emoji: "✅"
            },
            {
              id: "uae-g2u4l3-v5",
              arabic: "رُكُوبٌ",
              transliteration: "rukūbun",
              translation: t("رُكُوبٌ", "riding", "menaiki", "naik", "montée", "subida"),
              emoji: "🚍"
            },
            {
              id: "uae-g2u4l3-v6",
              arabic: "بِطَاقَةٌ",
              transliteration: "biṭāqah",
              translation: t("بِطَاقَةٌ", "card", "kad", "kartu", "carte", "tarjeta"),
              emoji: "🪪"
            },
            {
              id: "uae-g2u4l3-v7",
              arabic: "أَمَانٌ",
              transliteration: "amānun",
              translation: t("أَمَانٌ", "safety", "keselamatan", "keselamatan", "sécurité", "seguridad"),
              emoji: "🔒"
            },
            {
              id: "uae-g2u4l3-v8",
              arabic: "تَحِيَّةٌ",
              transliteration: "taḥiyyah",
              translation: t("تَحِيَّةٌ", "greeting", "salam", "sapaan", "salutation", "saludo"),
              emoji: "👋"
            }
          ],
          dialogue: [
            {
              speaker: "الْمُشْرِفُ",
              arabic: "اجْلِسْ بِهُدُوءٍ يَا بُنَيَّ.",
              translation: t("اجْلِسْ بِهُدُوءٍ يَا بُنَيَّ.", "Sit quietly, my son.", "Duduklah dengan tenang, anakku.", "Duduklah dengan tenang, nak.", "Assieds-toi calmement, mon fils.", "Siéntate tranquilo, hijo mío.")
            },
            {
              speaker: "سَعِيد",
              arabic: "سَمْعًا وَطَاعَةً.",
              translation: t("سَمْعًا وَطَاعَةً.", "At your command.", "Baiklah.", "Siap.", "À vos ordres.", "A la orden.")
            },
            {
              speaker: "الْمُشْرِفُ",
              arabic: "أَحْسَنْتَ.",
              translation: t("أَحْسَنْتَ.", "Well done.", "Syabas.", "Bagus.", "Très bien.", "Muy bien.")
            }
          ],
          exercises: [
            {
              id: "uae-g2u4l3-e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْمَقْعَدَ", "Listen and choose the seat", "Dengar dan pilih tempat duduk", "Dengarkan dan pilih asiento", "Écoute et choisis le siège", "Escucha y elige el asiento"),
              arabicText: "مَقْعَدٌ",
              options: [
                "مَقْعَدٌ",
                "حَافِلَةٌ",
                "نِظَامٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4ba/512.webp"
            },
            {
              id: "uae-g2u4l3-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالصُّورَةِ", "Match the word to the picture", "Padankan perkataan dengan gambar", "Cococca la palabra con la imagen", "Associe le mot à l’image", "Relaciona la palabra con la imagen"),
              pairs: [
                {
                  a: "حَافِلَةٌ",
                  b: "🚌"
                },
                {
                  a: "مَقْعَدٌ",
                  b: "💺"
                },
                {
                  a: "نِظَامٌ",
                  b: "✅"
                },
                {
                  a: "أَمَانٌ",
                  b: "🔒"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f68c/512.webp"
            },
            {
              id: "uae-g2u4l3-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنْ الرُّكُوبِ", "Talk about riding", "Ceritakan tentang menaiki", "Habla sobre viajar", "Parle du trajet", "Habla sobre viajar"),
              arabicText: "أَرْكَبُ الْحَافِلَةَ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f68c/512.webp"
            },
            {
              id: "uae-g2u4l3-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَةَ حَافِلَةٌ", "Write the word حَافِلَةٌ", "Tulis perkataan حَافِلَةٌ", "Tulis kata حَافِلَةٌ", "Écris le mot حَافِلَةٌ", "Escribe la palabra حَافِلَةٌ"),
              arabicText: "حَافِلَةٌ",
              answer: "حَافِلَةٌ",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/School_bus_icon.svg/512px-School_bus_icon.svg.png"
            },
            {
              id: "uae-g2u4l3-e5",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ الْجُمْلَةَ", "Arrange the sentence", "Susun ayat", "Ordena la oración", "Range la phrase", "Ordena la oración"),
              arabicText: "الْحَافِلَةَ أَرْكَبُ أَنَا",
              answer: "أَنَا أَرْكَبُ الْحَافِلَةَ",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/School_bus_icon.svg/512px-School_bus_icon.svg.png"
            },
            {
              id: "uae-g2u4l3-e6",
              type: "fill_in_blank",
              skill: "writing",
              prompt: t("أَكْمِلِ الْجُمْلَةَ", "Complete the sentence", "Lengkapkan ayat", "Completa la oración", "Complète la phrase", "Completa la oración"),
              arabicText: "أَجْلِسُ عَلَى ___",
              answer: "الْمَقْعَدِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f68c/512.webp"
            },
            {
              id: "uae-g2u4l3spelluae-g2u4l3-v5",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "رُكُوبٌ",
              answer: "رُكُوبٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f68d/512.webp"
            },
            {
              id: "uae-g2u4l3speakuae-g2u4l3-v7",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "أَمَانٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f512/512.webp"
            },
            {
              id: "uae-g2u4l3speakuae-g2u4l3-v6",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "بِطَاقَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1faaa/512.webp"
            },
            {
              id: "uae-g2u4l3writeuae-g2u4l3-v7",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"أَمَانٌ\"", "Type the Arabic word for: \"safety\"", "Taip perkataan Arab untuk: \"keselamatan\"", "Ketik kata Arab untuk: \"keselamatan\"", "Tape le mot arabe pour : \"sécurité\"", "Escribe la palabra árabe para: \"seguridad\""),
              arabicText: "أَمَانٌ",
              answer: "أَمَانٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f512/512.webp"
            },
            {
              id: "uae-g2u4l3arrange2",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "سَمْعًا وَطَاعَةً.",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f68c/512.webp"
            },
            {
              id: "uae-g2u4l3listenuae-g2u4l3-v4",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "نِظَامٌ",
              options: [
                "نِظَامٌ",
                "لَمْسٌ",
                "الِاثْنَيْنِ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2705/512.webp"
            }
          ]
        },
        {
          id: "uae-g2u4review",
          unitId: "uae-g2u4",
          gradeId: "uae-g2",
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
              id: "uae-g2u4l1-v1",
              arabic: "مُوسِيقَى",
              transliteration: "mūsīqā",
              translation: t("مُوسِيقَى", "music", "muzik", "musik", "musique", "música"),
              emoji: "🎵"
            },
            {
              id: "uae-g2u4l1-v2",
              arabic: "غِنَاءٌ",
              transliteration: "ghināʾun",
              translation: t("غِنَاءٌ", "singing", "nyanyian", "nyanyian", "chant", "canto"),
              emoji: "🎤"
            },
            {
              id: "uae-g2u4l1-v3",
              arabic: "طَبْلٌ",
              transliteration: "ṭablun",
              translation: t("طَبْلٌ", "drum", "dram", "drum", "tambour", "tambor"),
              emoji: "🥁"
            },
            {
              id: "uae-g2u4l1-v4",
              arabic: "عُودٌ",
              transliteration: "ʿūdun",
              translation: t("عُودٌ", "oud", "عود", "oud", "oud", "laúd"),
              emoji: "🎼"
            },
            {
              id: "uae-g2u4l1-v5",
              arabic: "نَشِيدٌ",
              transliteration: "nashīdun",
              translation: t("نَشِيدٌ", "song/anthem", "nasyid", "lagu", "chant", "canción"),
              emoji: "📣"
            },
            {
              id: "uae-g2u4l1-v6",
              arabic: "صَوْتٌ",
              transliteration: "ṣawtun",
              translation: t("صَوْتٌ", "sound", "bunyi", "suara", "son", "sonido"),
              emoji: "🔊"
            },
            {
              id: "uae-g2u4l1-v7",
              arabic: "إِيقَاعٌ",
              transliteration: "īqāʿun",
              translation: t("إِيقَاعٌ", "rhythm", "irama", "irama", "rythme", "ritmo"),
              emoji: "🥁"
            },
            {
              id: "uae-g2u4l1-v8",
              arabic: "مُعَلِّمَةُ الْمُوسِيقَى",
              transliteration: "muʿallimat al-mūsīqā",
              translation: t("مُعَلِّمَةُ الْمُوسِيقَى", "music teacher", "guru muzik", "guru musik", "professeure de musique", "profesora de música"),
              emoji: "👩‍🏫"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "uae-g2u4reviewwriteuae-g2u4l1-v4",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"عُودٌ\"", "Type the Arabic word for: \"oud\"", "Taip perkataan Arab untuk: \"عود\"", "Ketik kata Arab untuk: \"oud\"", "Tape le mot arabe pour : \"oud\"", "Escribe la palabra árabe para: \"laúd\""),
              arabicText: "عُودٌ",
              answer: "عُودٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3bc/512.webp"
            },
            {
              id: "uae-g2u4reviewspelluae-g2u4l1-v2",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "غِنَاءٌ",
              answer: "غِنَاءٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3a4/512.webp"
            },
            {
              id: "uae-g2u4reviewspeakuae-g2u4l1-v3",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "طَبْلٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f941/512.webp"
            },
            {
              id: "uae-g2u4reviewlistenuae-g2u4l1-v2",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "غِنَاءٌ",
              options: [
                "تَحِيَّةٌ",
                "غِنَاءٌ",
                "يَوْمٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3a4/512.webp"
            },
            {
              id: "uae-g2u4reviewwriteuae-g2u4l1-v3",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"طَبْلٌ\"", "Type the Arabic word for: \"drum\"", "Taip perkataan Arab untuk: \"dram\"", "Ketik kata Arab untuk: \"drum\"", "Tape le mot arabe pour : \"tambour\"", "Escribe la palabra árabe para: \"tambor\""),
              arabicText: "طَبْلٌ",
              answer: "طَبْلٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f941/512.webp"
            },
            {
              id: "uae-g2u4reviewwriteuae-g2u4l1-v2",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"غِنَاءٌ\"", "Type the Arabic word for: \"singing\"", "Taip perkataan Arab untuk: \"nyanyian\"", "Ketik kata Arab untuk: \"nyanyian\"", "Tape le mot arabe pour : \"chant\"", "Escribe la palabra árabe para: \"canto\""),
              arabicText: "غِنَاءٌ",
              answer: "غِنَاءٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3a4/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "uae-g2u5",
      gradeId: "uae-g2",
      order: 5,
      title: t("أَصْدِقَاءُ", "Friends", "Rakan-Rakan", "Teman-Teman", "Amis", "Amigos"),
      theme: "friends",
      lessons: [
        {
          id: "uae-g2u5l1",
          unitId: "uae-g2u5",
          gradeId: "uae-g2",
          order: 1,
          title: t("أَعَزُّ أَصْدِقَائِي", "Best Friends", "Rakan Karib", "Teman-Teman Terdekatku", "amis les plus chers", "mejores amigos"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("أُحِبُّ أَصْدِقَائِي وَأَلْعَبُ مَعَهُمْ كُلَّ يَوْمٍ.", "I love my friends and play with them every day.", "Saya sayang rakan-rakan saya dan bermain dengan mereka setiap hari.", "Aku suka teman-temanku dan bermain bersama mereka setiap hari.", "J’aime mes amis et je joue avec eux chaque jour.", "Quiero a mis amigos y juego con ellos cada día."),
          vocabulary: [
            {
              id: "uae-g2u5l1-v1",
              arabic: "صَدِيقٌ",
              transliteration: "ṣadīqun",
              translation: t("صَدِيقٌ", "friend", "rakan", "teman", "ami", "amigo"),
              emoji: "🤝"
            },
            {
              id: "uae-g2u5l1-v2",
              arabic: "أَصْدِقَاءُ",
              transliteration: "aṣdiqāʾu",
              translation: t("أَصْدِقَاءُ", "friends", "rakan-rakan", "teman-teman", "amis", "amigos"),
              emoji: "👫"
            },
            {
              id: "uae-g2u5l1-v3",
              arabic: "لَعِبٌ",
              transliteration: "laʿibun",
              translation: t("لَعِبٌ", "play", "bermain", "bermain", "jeu", "juego"),
              emoji: "⚽"
            },
            {
              id: "uae-g2u5l1-v4",
              arabic: "مَعًا",
              transliteration: "maʿan",
              translation: t("مَعًا", "together", "bersama-sama", "bersama", "ensemble", "juntos"),
              emoji: "👬"
            },
            {
              id: "uae-g2u5l1-v5",
              arabic: "سَعِيدٌ",
              transliteration: "saʿīdun",
              translation: t("سَعِيدٌ", "happy", "gembira", "senang", "heureux", "feliz"),
              emoji: "😊"
            },
            {
              id: "uae-g2u5l1-v6",
              arabic: "زَمِيلٌ",
              transliteration: "zamīlun",
              translation: t("زَمِيلٌ", "classmate", "rakan sekelas", "teman sekelas", "camarade", "compañero"),
              emoji: "🏫"
            },
            {
              id: "uae-g2u5l1-v7",
              arabic: "مُسَاعَدَةٌ",
              transliteration: "musāʿadah",
              translation: t("مُسَاعَدَةٌ", "help", "bantuan", "bantuan", "aide", "ayuda"),
              emoji: "🫶"
            },
            {
              id: "uae-g2u5l1-v8",
              arabic: "رَسْمٌ",
              transliteration: "rasmun",
              translation: t("رَسْمٌ", "drawing", "lukisan", "gambar", "dessin", "dibujo"),
              emoji: "🎨"
            }
          ],
          dialogue: [
            {
              speaker: "المُعَلِّمُ",
              arabic: "مَنْ أَعَزُّ أَصْدِقَائِكَ؟",
              translation: t("مَنْ أَعَزُّ أَصْدِقَائِكَ؟", "Who are your dearest friends?", "Siapakah rakan karib kamu?", "Siapa teman terdekatmu?", "Qui sont tes amis les plus chers ?", "¿Quiénes son tus mejores amigos?")
            },
            {
              speaker: "سَعِيد",
              arabic: "صَدِيقِي عُمَرُ وَصَدِيقَتِي نُورُ.",
              translation: t("صَدِيقِي عُمَرُ وَصَدِيقَتِي نُورُ.", "My friend is Omar and my friend is Noor.", "Rakan saya Omar dan rakan saya Noor.", "Temanku Omar dan temanku Noor.", "Mon ami Omar et mon amie Noor.", "Mi amigo Omar y mi amiga Noor.")
            },
            {
              speaker: "المُعَلِّمُ",
              arabic: "أَحْسَنْتَ، أَصْدِقَاءٌ جَمِيلُونَ!",
              translation: t("أَحْسَنْتَ، أَصْدِقَاءٌ جَمِيلُونَ!", "Well done, beautiful friends!", "Syabas, rakan-rakan yang baik!", "Bagus, teman-teman yang baik!", "Bravo, de beaux amis !", "¡Muy bien, qué buenos amigos!")
            }
          ],
          exercises: [
            {
              id: "uae-g2u5l1-e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ", "Listen and choose the word", "Dengar dan pilih perkataan", "Dengarkan dan pilih kata", "Écoute et choisis le mot", "Escucha y elige la palabra"),
              arabicText: "صَدِيقٌ",
              options: [
                "صَدِيقٌ",
                "رَسْمٌ",
                "زَمِيلٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "uae-g2u5l1-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالصُّورَةِ", "Match the word to the picture", "Padankan perkataan dengan gambar", "Cocokkan kata dengan gambar", "Associe le mot à l’image", "Relaciona la palabra con la imagen"),
              pairs: [
                {
                  a: "صَدِيقٌ",
                  b: "🤝"
                },
                {
                  a: "أَصْدِقَاءُ",
                  b: "👫"
                },
                {
                  a: "لَعِبٌ",
                  b: "⚽"
                },
                {
                  a: "رَسْمٌ",
                  b: "🎨"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "uae-g2u5l1-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنْ أَصْدِقَائِكَ", "Talk about your friends", "تحدث عن rakan-rakan kamu", "Habla de tus amigos", "Parle de tes amis", "Habla de tus amigos"),
              arabicText: "صَدِيقِي طَيِّبٌ وَنَحْنُ نَلْعَبُ مَعًا",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f46c/512.webp"
            },
            {
              id: "uae-g2u5l1-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَةَ صَدِيقٌ", "Write the word صَدِيقٌ", "Tulis perkataan صَدِيقٌ", "Tulis kata صَدِيقٌ", "Écris le mot صَدِيقٌ", "Escribe la palabra صَدِيقٌ"),
              arabicText: "صَدِيقٌ",
              answer: "صَدِيقٌ",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Two_boys_holding_hands.svg/512px-Two_boys_holding_hands.svg.png"
            },
            {
              id: "uae-g2u5l1-e5",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ الْكَلِمَاتِ", "Arrange the words", "Susun perkataan", "Ordena las palabras", "Range les mots", "Ordena las palabras"),
              arabicText: "نَلْعَبُ مَعًا أَصْدِقَاءُ",
              answer: "أَصْدِقَاءُ مَعًا نَلْعَبُ",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Children_playing_in_the_school_yard.jpg/512px-Children_playing_in_the_school_yard.jpg"
            },
            {
              id: "uae-g2u5l1-e6",
              type: "fill_in_blank",
              skill: "writing",
              prompt: t("أَكْمِلِ الْجُمْلَةَ", "Complete the sentence", "Lengkapkan ayat", "Completa la oración", "Complète la phrase", "Completa la oración"),
              arabicText: "أَصْدِقَائِي ___",
              answer: "جَمِيلُونَ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "uae-g2u5l1speakuae-g2u5l1-v1",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "صَدِيقٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "uae-g2u5l1mcquae-g2u5l1-v7",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"مُسَاعَدَةٌ\"؟", "What does \"help\" mean?", "Apakah maksud \"bantuan\"?", "Apa arti \"bantuan\"?", "Que signifie \"aide\" ?", "¿Qué significa \"ayuda\"?"),
              arabicText: "مُسَاعَدَةٌ",
              options: [
                "help",
                "taste",
                "calm",
                "February"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1faf6/512.webp"
            },
            {
              id: "uae-g2u5l1mcquae-g2u5l1-v6",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"زَمِيلٌ\"؟", "What does \"classmate\" mean?", "Apakah maksud \"rakan sekelas\"?", "Apa arti \"teman sekelas\"?", "Que signifie \"camarade\" ?", "¿Qué significa \"compañero\"?"),
              arabicText: "زَمِيلٌ",
              options: [
                "Tuesday",
                "classmate",
                "coffee",
                "door"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3eb/512.webp"
            },
            {
              id: "uae-g2u5l1writeuae-g2u5l1-v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"صَدِيقٌ\"", "Type the Arabic word for: \"friend\"", "Taip perkataan Arab untuk: \"rakan\"", "Ketik kata Arab untuk: \"teman\"", "Tape le mot arabe pour : \"ami\"", "Escribe la palabra árabe para: \"amigo\""),
              arabicText: "صَدِيقٌ",
              answer: "صَدِيقٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "uae-g2u5l1writeuae-g2u5l1-v4",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"مَعًا\"", "Type the Arabic word for: \"together\"", "Taip perkataan Arab untuk: \"bersama-sama\"", "Ketik kata Arab untuk: \"bersama\"", "Tape le mot arabe pour : \"ensemble\"", "Escribe la palabra árabe para: \"juntos\""),
              arabicText: "مَعًا",
              answer: "مَعًا",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f46c/512.webp"
            },
            {
              id: "uae-g2u5l1spelluae-g2u5l1-v5",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "سَعِيدٌ",
              answer: "سَعِيدٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60a/512.webp"
            }
          ]
        },
        {
          id: "uae-g2u5l2",
          unitId: "uae-g2u5",
          gradeId: "uae-g2",
          order: 2,
          title: t("فُنُونٌ ... فَنَّانُونَ", "Arts", "Seni ... Seniman", "Seni ... Seniman", "Arts... artistes", "Artes... artistas"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("أَحِبُّ الرَّسْمَ وَالْغِنَاءَ وَالْعَمَلَ الْيَدَوِيَّ.", "I like drawing, singing, and crafts.", "Saya suka melukis, menyanyi dan kerja tangan.", "Aku suka menggambar, bernyanyi, dan kerajinan tangan.", "J’aime dessiner, chanter et faire des travaux manuels.", "Me gusta dibujar, cantar y hacer manualidades."),
          vocabulary: [
            {
              id: "uae-g2u5l2-v1",
              arabic: "رَسْمٌ",
              transliteration: "rasmun",
              translation: t("رَسْمٌ", "drawing", "lukisan", "gambar", "dessin", "dibujo"),
              emoji: "🎨"
            },
            {
              id: "uae-g2u5l2-v2",
              arabic: "فَنٌّ",
              transliteration: "fannun",
              translation: t("فَنٌّ", "art", "seni", "seni", "art", "arte"),
              emoji: "🖼️"
            },
            {
              id: "uae-g2u5l2-v3",
              arabic: "فَنَّانٌ",
              transliteration: "fannānun",
              translation: t("فَنَّانٌ", "artist", "seniman", "seniman", "artiste", "artista"),
              emoji: "👩‍🎨"
            },
            {
              id: "uae-g2u5l2-v4",
              arabic: "لَوْنٌ",
              transliteration: "lawnun",
              translation: t("لَوْنٌ", "color", "warna", "warna", "couleur", "color"),
              emoji: "🌈"
            },
            {
              id: "uae-g2u5l2-v5",
              arabic: "أَلْوَانٌ",
              transliteration: "alwānun",
              translation: t("أَلْوَانٌ", "colors", "warna-warna", "warna-warni", "couleurs", "colores"),
              emoji: "🖍️"
            },
            {
              id: "uae-g2u5l2-v6",
              arabic: "غِنَاءٌ",
              transliteration: "ghināʾun",
              translation: t("غِنَاءٌ", "singing", "nyanyian", "menyanyi", "chant", "canto"),
              emoji: "🎤"
            },
            {
              id: "uae-g2u5l2-v7",
              arabic: "مُوسِيقَى",
              transliteration: "mūsīqā",
              translation: t("مُوسِيقَى", "music", "muzik", "musik", "musique", "música"),
              emoji: "🎶"
            },
            {
              id: "uae-g2u5l2-v8",
              arabic: "عَمَلٌ يَدَوِيٌّ",
              transliteration: "ʿamalun yadawiyyun",
              translation: t("عَمَلٌ يَدَوِيٌّ", "craft", "kerja tangan", "kerajinan tangan", "travail manuel", "manualidad"),
              emoji: "✂️"
            }
          ],
          dialogue: [
            {
              speaker: "سَلْمَى",
              arabic: "مَاذَا تُحِبُّ أَنْ تَرْسُمَ؟",
              translation: t("مَاذَا تُحِبُّ أَنْ تَرْسُمَ؟", "What do you like to draw?", "Apa yang kamu suka lukis?", "Apa yang kamu suka gambar?", "Que préfères-tu dessiner ?", "¿Qué te gusta dibujar?")
            },
            {
              speaker: "هَنَاء",
              arabic: "أُحِبُّ أَنْ أَرْسُمَ وُرُودًا وَأَلْوَانًا.",
              translation: t("أُحِبُّ أَنْ أَرْسُمَ وُرُودًا وَأَلْوَانًا.", "I like to draw flowers and colors.", "Saya suka melukis bunga dan warna.", "Aku suka menggambar bunga dan warna.", "J’aime dessiner des fleurs et des couleurs.", "Me gusta dibujar flores y colores.")
            },
            {
              speaker: "سَلْمَى",
              arabic: "أَنْتِ فَنَّانَةٌ!",
              translation: t("أَنْتِ فَنَّانَةٌ!", "You are an artist!", "Kamu seorang seniman!", "Kamu adalah seorang seniman!", "Tu es une artiste !", "¡Eres una artista!")
            }
          ],
          exercises: [
            {
              id: "uae-g2u5l2-e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ", "Listen and choose the word", "Dengar dan pilih perkataan", "Dengarkan dan pilih kata", "Écoute et choisis le mot", "Escucha y elige la palabra"),
              arabicText: "فَنَّانٌ",
              options: [
                "فَنٌّ",
                "فَنَّانٌ",
                "غِنَاءٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f469-200d-1f3a8/512.webp"
            },
            {
              id: "uae-g2u5l2-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالصُّورَةِ", "Match the word to the picture", "Padankan perkataan dengan gambar", "Cocokkan kata dengan gambar", "Associe le mot à l’image", "Relaciona la palabra con la imagen"),
              pairs: [
                {
                  a: "رَسْمٌ",
                  b: "🎨"
                },
                {
                  a: "فَنٌّ",
                  b: "🖼️"
                },
                {
                  a: "غِنَاءٌ",
                  b: "🎤"
                },
                {
                  a: "عَمَلٌ يَدَوِيٌّ",
                  b: "✂️"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3a8/512.webp"
            },
            {
              id: "uae-g2u5l2-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنْ فَنِّكَ", "Talk about your art", "Ceritakan tentang seni kamu", "Habla de tu arte", "Parle de ton art", "Habla de tu arte"),
              arabicText: "أُحِبُّ الرَّسْمَ وَالْأَلْوَانَ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3a8/512.webp"
            },
            {
              id: "uae-g2u5l2-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَةَ فَنٌّ", "Write the word فَنٌّ", "Tulis perkataan فَنٌّ", "Tulis kata فَنٌّ", "Écris le mot فَنٌّ", "Escribe la palabra فَنٌّ"),
              arabicText: "فَنٌّ",
              answer: "فَنٌّ",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Palette_icon.svg/512px-Palette_icon.svg.png"
            },
            {
              id: "uae-g2u5l2-e5",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ الْكَلِمَاتِ", "Arrange the words", "Susun perkataan", "Ordena las palabras", "Range les mots", "Ordena las palabras"),
              arabicText: "أَلْوَانٌ رَسْمٌ فَنٌّ",
              answer: "فَنٌّ، رَسْمٌ، أَلْوَانٌ",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Children_drawing.svg/512px-Children_drawing.svg.png"
            },
            {
              id: "uae-g2u5l2-e6",
              type: "fill_in_blank",
              skill: "writing",
              prompt: t("أَكْمِلِ الْجُمْلَةَ", "Complete the sentence", "Lengkapkan ayat", "Completa la oración", "Complète la phrase", "Completa la oración"),
              arabicText: "أَسْمَعُ ___",
              answer: "الْمُوسِيقَى",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3a8/512.webp"
            },
            {
              id: "uae-g2u5l2listenuae-g2u5l2-v5",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "أَلْوَانٌ",
              options: [
                "أَلْوَانٌ",
                "سَمْعٌ",
                "تَهْنِئَةٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f58d-fe0f/512.webp"
            },
            {
              id: "uae-g2u5l2mcquae-g2u5l2-v6",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"غِنَاءٌ\"؟", "What does \"singing\" mean?", "Apakah maksud \"nyanyian\"?", "Apa arti \"menyanyi\"?", "Que signifie \"chant\" ?", "¿Qué significa \"canto\"?"),
              arabicText: "غِنَاءٌ",
              options: [
                "friend",
                "singing",
                "cake",
                "artist"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3a4/512.webp"
            },
            {
              id: "uae-g2u5l2spelluae-g2u5l2-v5",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "أَلْوَانٌ",
              answer: "أَلْوَانٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f58d-fe0f/512.webp"
            },
            {
              id: "uae-g2u5l2arrange3",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "أَنْتِ فَنَّانَةٌ!",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3a8/512.webp"
            },
            {
              id: "uae-g2u5l2mcquae-g2u5l2-v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"رَسْمٌ\"؟", "What does \"drawing\" mean?", "Apakah maksud \"lukisan\"?", "Apa arti \"gambar\"?", "Que signifie \"dessin\" ?", "¿Qué significa \"dibujo\"?"),
              arabicText: "رَسْمٌ",
              options: [
                "April",
                "tea",
                "together",
                "drawing"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3a8/512.webp"
            },
            {
              id: "uae-g2u5l2writeuae-g2u5l2-v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"رَسْمٌ\"", "Type the Arabic word for: \"drawing\"", "Taip perkataan Arab untuk: \"lukisan\"", "Ketik kata Arab untuk: \"gambar\"", "Tape le mot arabe pour : \"dessin\"", "Escribe la palabra árabe para: \"dibujo\""),
              arabicText: "رَسْمٌ",
              answer: "رَسْمٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3a8/512.webp"
            }
          ]
        },
        {
          id: "uae-g2u5l3",
          unitId: "uae-g2u5",
          gradeId: "uae-g2",
          order: 3,
          title: t("لِقَاءٌ وَفِرَاقٌ", "Meeting", "Bertemu", "Bertemu", "Rencontre", "Encuentro"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("أُسَلِّمُ عَلَى أَصْدِقَائِي وَأَقُولُ لَهُمْ إِلَى اللِّقَاءِ.", "I greet my friends and say goodbye to them.", "Saya memberi salam kepada rakan-rakan saya dan mengucapkan selamat tinggal.", "Aku memberi salam kepada teman-temanku dan mengucapkan sampai jumpa.", "Je salue mes amis et je leur dis au revoir.", "Saludo a mis amigos y me despido de ellos."),
          vocabulary: [
            {
              id: "uae-g2u5l3-v1",
              arabic: "لِقَاءٌ",
              transliteration: "liqāʾun",
              translation: t("لِقَاءٌ", "meeting", "pertemuan", "pertemuan", "rencontre", "encuentro"),
              emoji: "🤗"
            },
            {
              id: "uae-g2u5l3-v2",
              arabic: "فِرَاقٌ",
              transliteration: "firāqun",
              translation: t("فِرَاقٌ", "farewell", "perpisahan", "perpisahan", "adieu", "despedida"),
              emoji: "👋"
            },
            {
              id: "uae-g2u5l3-v3",
              arabic: "سَلَامٌ",
              transliteration: "salāmun",
              translation: t("سَلَامٌ", "peace/greeting", "salam", "salam", "salut", "saludo"),
              emoji: "✋"
            },
            {
              id: "uae-g2u5l3-v4",
              arabic: "وَدَاعٌ",
              transliteration: "wadāʿun",
              translation: t("وَدَاعٌ", "farewell", "ucapan selamat tinggal", "ucapan selamat tinggal", "adieu", "despedida"),
              emoji: "👋"
            },
            {
              id: "uae-g2u5l3-v5",
              arabic: "زِيَارَةٌ",
              transliteration: "ziyārah",
              translation: t("زِيَارَةٌ", "visit", "lawatan", "kunjungan", "visite", "visita"),
              emoji: "🏠"
            },
            {
              id: "uae-g2u5l3-v6",
              arabic: "مُحَادَثَةٌ",
              transliteration: "muḥādathah",
              translation: t("مُحَادَثَةٌ", "conversation", "perbualan", "percakapan", "conversation", "conversación"),
              emoji: "💬"
            },
            {
              id: "uae-g2u5l3-v7",
              arabic: "شَوْقٌ",
              transliteration: "shawqun",
              translation: t("شَوْقٌ", "longing", "rindu", "rindu", "nostalgie", "añoranza"),
              emoji: "❤️"
            },
            {
              id: "uae-g2u5l3-v8",
              arabic: "رِسَالَةٌ",
              transliteration: "risālah",
              translation: t("رِسَالَةٌ", "message", "pesanan", "pesan", "message", "mensaje"),
              emoji: "✉️"
            }
          ],
          dialogue: [
            {
              speaker: "مَيْ",
              arabic: "السَّلَامُ عَلَيْكُمْ يَا أَصْدِقَائِي!",
              translation: t("السَّلَامُ عَلَيْكُمْ يَا أَصْدِقَائِي!", "Peace be upon you, my friends!", "Assalamualaikum, rakan-rakanku!", "Salam untuk kalian, teman-temanku!", "Bonjour, mes amis !", "¡Hola, mis amigos!")
            },
            {
              speaker: "مُحَمَّد",
              arabic: "وَعَلَيْكُمُ السَّلَامُ! إِلَى اللِّقَاءِ.",
              translation: t("وَعَلَيْكُمُ السَّلَامُ! إِلَى اللِّقَاءِ.", "And peace be upon you too! See you later.", "Waalaikumsalam! Sampai jumpa.", "Y a ti también. Hasta luego.", "Et à toi aussi ! À bientôt.", "¡Y a ti también! Hasta luego.")
            },
            {
              speaker: "مَيْ",
              arabic: "إِلَى اللِّقَاءِ يَا صَدِيقِي.",
              translation: t("إِلَى اللِّقَاءِ يَا صَدِيقِي.", "See you, my friend.", "Sampai jumpa, kawanku.", "Hasta luego, amigo mío.", "Au revoir, mon ami.", "Hasta luego, amigo mío.")
            }
          ],
          exercises: [
            {
              id: "uae-g2u5l3-e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ", "Listen and choose the word", "Dengar dan pilih perkataan", "Dengarkan dan pilih kata", "Écoute et choisis le mot", "Escucha y elige la palabra"),
              arabicText: "لِقَاءٌ",
              options: [
                "لِقَاءٌ",
                "فِرَاقٌ",
                "رِسَالَةٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f917/512.webp"
            },
            {
              id: "uae-g2u5l3-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالصُّورَةِ", "Match the word to the picture", "Padankan perkataan dengan gambar", "Cocokkan kata dengan gambar", "Associe le mot à l’image", "Relaciona la palabra con la imagen"),
              pairs: [
                {
                  a: "لِقَاءٌ",
                  b: "🤗"
                },
                {
                  a: "فِرَاقٌ",
                  b: "👋"
                },
                {
                  a: "رِسَالَةٌ",
                  b: "✉️"
                },
                {
                  a: "مُحَادَثَةٌ",
                  b: "💬"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f917/512.webp"
            },
            {
              id: "uae-g2u5l3-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عِنْدَ اللِّقَاءِ وَالْوَدَاعِ", "Talk when meeting and saying goodbye", "Bercakap semasa bertemu dan berpisah", "Habla al encontrarte y despedirte", "Parle en te rencontrant et en disant au revoir", "Habla al encontrarte y despedirte"),
              arabicText: "السَّلَامُ عَلَيْكُمْ... إِلَى اللِّقَاءِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f917/512.webp"
            },
            {
              id: "uae-g2u5l3-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَةَ فِرَاقٌ", "Write the word فِرَاقٌ", "Tulis perkataan فِرَاقٌ", "Tulis kata فِرَاقٌ", "Écris le mot فِرَاقٌ", "Escribe la palabra فِرَاقٌ"),
              arabicText: "فِرَاقٌ",
              answer: "فِرَاقٌ",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Handshake_icon.svg/512px-Handshake_icon.svg.png"
            },
            {
              id: "uae-g2u5l3-e5",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ الْكَلِمَاتِ", "Arrange the words", "Susun perkataan", "Ordena las palabras", "Range les mots", "Ordena las palabras"),
              arabicText: "اللِّقَاءِ إِلَى مَعَ السَّلَامُ",
              answer: "السَّلَامُ مَعَ إِلَى اللِّقَاءِ",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/People_meeting_in_the_park.jpg/512px-People_meeting_in_the_park.jpg"
            },
            {
              id: "uae-g2u5l3-e6",
              type: "fill_in_blank",
              skill: "writing",
              prompt: t("أَكْمِلِ الْجُمْلَةَ", "Complete the sentence", "Lengkapkan ayat", "Completa la oración", "Complète la phrase", "Completa la oración"),
              arabicText: "إِلَى ___",
              answer: "اللِّقَاءِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f917/512.webp"
            },
            {
              id: "uae-g2u5l3writeuae-g2u5l3-v4",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"وَدَاعٌ\"", "Type the Arabic word for: \"farewell\"", "Taip perkataan Arab untuk: \"ucapan selamat tinggal\"", "Ketik kata Arab untuk: \"ucapan selamat tinggal\"", "Tape le mot arabe pour : \"adieu\"", "Escribe la palabra árabe para: \"despedida\""),
              arabicText: "وَدَاعٌ",
              answer: "وَدَاعٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp"
            },
            {
              id: "uae-g2u5l3writeuae-g2u5l3-v8",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"رِسَالَةٌ\"", "Type the Arabic word for: \"message\"", "Taip perkataan Arab untuk: \"pesanan\"", "Ketik kata Arab untuk: \"pesan\"", "Tape le mot arabe pour : \"message\"", "Escribe la palabra árabe para: \"mensaje\""),
              arabicText: "رِسَالَةٌ",
              answer: "رِسَالَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2709-fe0f/512.webp"
            },
            {
              id: "uae-g2u5l3spelluae-g2u5l3-v5",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "زِيَارَةٌ",
              answer: "زِيَارَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e0/512.webp"
            },
            {
              id: "uae-g2u5l3listenuae-g2u5l3-v3",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "سَلَامٌ",
              options: [
                "غِنَاءٌ",
                "سَمْعٌ",
                "سَلَامٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/270b/512.webp"
            },
            {
              id: "uae-g2u5l3spelluae-g2u5l3-v3",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "سَلَامٌ",
              answer: "سَلَامٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/270b/512.webp"
            },
            {
              id: "uae-g2u5l3mcquae-g2u5l3-v4",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"وَدَاعٌ\"؟", "What does \"farewell\" mean?", "Apakah maksud \"ucapan selamat tinggal\"?", "Apa arti \"ucapan selamat tinggal\"?", "Que signifie \"adieu\" ?", "¿Qué significa \"despedida\"?"),
              arabicText: "وَدَاعٌ",
              options: [
                "Saturday",
                "happy",
                "farewell",
                "grandfather"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp"
            }
          ]
        },
        {
          id: "uae-g2u5review",
          unitId: "uae-g2u5",
          gradeId: "uae-g2",
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
              id: "uae-g2u5l1-v1",
              arabic: "صَدِيقٌ",
              transliteration: "ṣadīqun",
              translation: t("صَدِيقٌ", "friend", "rakan", "teman", "ami", "amigo"),
              emoji: "🤝"
            },
            {
              id: "uae-g2u5l1-v2",
              arabic: "أَصْدِقَاءُ",
              transliteration: "aṣdiqāʾu",
              translation: t("أَصْدِقَاءُ", "friends", "rakan-rakan", "teman-teman", "amis", "amigos"),
              emoji: "👫"
            },
            {
              id: "uae-g2u5l1-v3",
              arabic: "لَعِبٌ",
              transliteration: "laʿibun",
              translation: t("لَعِبٌ", "play", "bermain", "bermain", "jeu", "juego"),
              emoji: "⚽"
            },
            {
              id: "uae-g2u5l1-v4",
              arabic: "مَعًا",
              transliteration: "maʿan",
              translation: t("مَعًا", "together", "bersama-sama", "bersama", "ensemble", "juntos"),
              emoji: "👬"
            },
            {
              id: "uae-g2u5l1-v5",
              arabic: "سَعِيدٌ",
              transliteration: "saʿīdun",
              translation: t("سَعِيدٌ", "happy", "gembira", "senang", "heureux", "feliz"),
              emoji: "😊"
            },
            {
              id: "uae-g2u5l1-v6",
              arabic: "زَمِيلٌ",
              transliteration: "zamīlun",
              translation: t("زَمِيلٌ", "classmate", "rakan sekelas", "teman sekelas", "camarade", "compañero"),
              emoji: "🏫"
            },
            {
              id: "uae-g2u5l1-v7",
              arabic: "مُسَاعَدَةٌ",
              transliteration: "musāʿadah",
              translation: t("مُسَاعَدَةٌ", "help", "bantuan", "bantuan", "aide", "ayuda"),
              emoji: "🫶"
            },
            {
              id: "uae-g2u5l1-v8",
              arabic: "رَسْمٌ",
              transliteration: "rasmun",
              translation: t("رَسْمٌ", "drawing", "lukisan", "gambar", "dessin", "dibujo"),
              emoji: "🎨"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "uae-g2u5reviewwriteuae-g2u5l1-v2",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"أَصْدِقَاءُ\"", "Type the Arabic word for: \"friends\"", "Taip perkataan Arab untuk: \"rakan-rakan\"", "Ketik kata Arab untuk: \"teman-teman\"", "Tape le mot arabe pour : \"amis\"", "Escribe la palabra árabe para: \"amigos\""),
              arabicText: "أَصْدِقَاءُ",
              answer: "أَصْدِقَاءُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f46b/512.webp"
            },
            {
              id: "uae-g2u5reviewmcquae-g2u5l1-v3",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"لَعِبٌ\"؟", "What does \"play\" mean?", "Apakah maksud \"bermain\"?", "Apa arti \"bermain\"?", "Que signifie \"jeu\" ?", "¿Qué significa \"juego\"?"),
              arabicText: "لَعِبٌ",
              options: [
                "play",
                "months",
                "minute",
                "milk"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "uae-g2u5reviewspelluae-g2u5l1-v4",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "مَعًا",
              answer: "مَعًا",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f46c/512.webp"
            },
            {
              id: "uae-g2u5reviewmcquae-g2u5l1-v7",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"مُسَاعَدَةٌ\"؟", "What does \"help\" mean?", "Apakah maksud \"bantuan\"?", "Apa arti \"bantuan\"?", "Que signifie \"aide\" ?", "¿Qué significa \"ayuda\"?"),
              arabicText: "مُسَاعَدَةٌ",
              options: [
                "taste",
                "help",
                "thanks",
                "eye"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1faf6/512.webp"
            },
            {
              id: "uae-g2u5reviewlistenuae-g2u5l1-v1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "صَدِيقٌ",
              options: [
                "صَدِيقٌ",
                "لُعْبَةٌ",
                "ذَوْقٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "uae-g2u5reviewspelluae-g2u5l1-v6",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "زَمِيلٌ",
              answer: "زَمِيلٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3eb/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "uae-g2u6",
      gradeId: "uae-g2",
      order: 6,
      title: t("أَوْقَاتٌ سَعِيدَةٌ", "Happy Times", "Masa Bahagia", "Waktu Bahagia", "Bons moments", "Momentos felices"),
      theme: "happy-times",
      lessons: [
        {
          id: "uae-g2u6l1",
          unitId: "uae-g2u6",
          gradeId: "uae-g2",
          order: 1,
          title: t("لِقَاءَاتٌ أُسَرِيَّةٌ", "Family", "Berkumpul Keluarga", "Pertemuan Keluarga", "Réunions de famille", "Reuniones familiares"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("تَجْتَمِعُ أُسْرَتِي وَنَفْرَحُ سَوِيًّا.", "My family gathers and we are happy together.", "Keluarga saya berkumpul dan kami gembira bersama.", "Keluargaku berkumpul dan kami senang bersama.", "Ma famille se réunit et nous sommes heureux ensemble.", "Mi familia se reúne y estamos felices juntos."),
          vocabulary: [
            {
              id: "uae-g2u6l1-v1",
              arabic: "أُسْرَةٌ",
              transliteration: "usrah",
              translation: t("أُسْرَةٌ", "family", "keluarga", "keluarga", "famille", "familia"),
              emoji: "👨‍👩‍👧‍👦"
            },
            {
              id: "uae-g2u6l1-v2",
              arabic: "لِقَاءٌ",
              transliteration: "liqāʾun",
              translation: t("لِقَاءٌ", "meeting", "pertemuan", "pertemuan", "rencontre", "encuentro"),
              emoji: "🤗"
            },
            {
              id: "uae-g2u6l1-v3",
              arabic: "جَمْعَةٌ",
              transliteration: "jamʿah",
              translation: t("جَمْعَةٌ", "gathering", "himpunan", "perkumpulan", "réunion", "reunión"),
              emoji: "🏠"
            },
            {
              id: "uae-g2u6l1-v4",
              arabic: "ضَيْفٌ",
              transliteration: "ḍayfun",
              translation: t("ضَيْفٌ", "guest", "tetamu", "tamu", "invité", "invitado"),
              emoji: "🎁"
            },
            {
              id: "uae-g2u6l1-v5",
              arabic: "قَهْوَةٌ",
              transliteration: "qahwah",
              translation: t("قَهْوَةٌ", "coffee", "kopi", "kopi", "café", "café"),
              emoji: "☕"
            },
            {
              id: "uae-g2u6l1-v6",
              arabic: "شَايٌ",
              transliteration: "shāyun",
              translation: t("شَايٌ", "tea", "teh", "teh", "thé", "té"),
              emoji: "🍵"
            },
            {
              id: "uae-g2u6l1-v7",
              arabic: "حَدِيقَةٌ",
              transliteration: "ḥadīqah",
              translation: t("حَدِيقَةٌ", "garden", "taman", "taman", "jardin", "jardín"),
              emoji: "🌳"
            },
            {
              id: "uae-g2u6l1-v8",
              arabic: "فَرَحٌ",
              transliteration: "farah",
              translation: t("فَرَحٌ", "joy", "kegembiraan", "kegembiraan", "joie", "alegría"),
              emoji: "🎉"
            }
          ],
          dialogue: [
            {
              speaker: "الأُمُّ",
              arabic: "هَلْ جَمَعْتُمْ أَفْرَادَ الْأُسْرَةِ؟",
              translation: t("هَلْ جَمَعْتُمْ أَفْرَادَ الْأُسْرَةِ؟", "Have you gathered the family members?", "Adakah kamu sudah mengumpulkan ahli keluarga?", "Apakah kalian sudah berkumpul bersama keluarga?", "Avez-vous réuni les membres de la famille ?", "¿Han reunido a los miembros de la familia?")
            },
            {
              speaker: "سَلْمَى",
              arabic: "نَعَمْ، وَجَدَّتِي وَجَدِّي هُنَا.",
              translation: t("نَعَمْ، وَجَدَّتِي وَجَدِّي هُنَا.", "Yes, my grandmother and grandfather are here.", "Ya, nenek dan datuk saya ada di sini.", "Ya, nenek dan kakekku ada di sini.", "Oui, ma grand-mère et mon grand-père sont ici.", "Sí, mi abuela y mi abuelo están aquí.")
            },
            {
              speaker: "الأُمُّ",
              arabic: "مَا أَجْمَلَ هَذِهِ اللِّقَاءَاتِ!",
              translation: t("مَا أَجْمَلَ هَذِهِ اللِّقَاءَاتِ!", "How beautiful these gatherings are!", "Indahnya perjumpaan ini!", "Betapa indahnya pertemuan ini!", "Que ces réunions sont belles !", "¡Qué bonitas son estas reuniones!")
            }
          ],
          exercises: [
            {
              id: "uae-g2u6l1-e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ", "Listen and choose the word", "Dengar dan pilih perkataan", "Dengarkan dan pilih kata", "Écoute et choisis le mot", "Escucha y elige la palabra"),
              arabicText: "أُسْرَةٌ",
              options: [
                "أُسْرَةٌ",
                "ضَيْفٌ",
                "فَرَحٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468-200d-1f469-200d-1f467-200d-1f466/512.webp"
            },
            {
              id: "uae-g2u6l1-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالصُّورَةِ", "Match the word to the picture", "Padankan perkataan dengan gambar", "Cocokkan kata dengan gambar", "Associe le mot à l’image", "Relaciona la palabra con la imagen"),
              pairs: [
                {
                  a: "أُسْرَةٌ",
                  b: "👨‍👩‍👧‍👦"
                },
                {
                  a: "ضَيْفٌ",
                  b: "🎁"
                },
                {
                  a: "قَهْوَةٌ",
                  b: "☕"
                },
                {
                  a: "شَايٌ",
                  b: "🍵"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468-200d-1f469-200d-1f467-200d-1f466/512.webp"
            },
            {
              id: "uae-g2u6l1-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنْ أُسْرَتِكَ", "Talk about your family", "Ceritakan tentang keluarga kamu", "Habla de tu familia", "Parle de ta famille", "Habla de tu familia"),
              arabicText: "أُسْرَتِي تَجْتَمِعُ وَنَفْرَحُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468-200d-1f469-200d-1f467-200d-1f466/512.webp"
            },
            {
              id: "uae-g2u6l1-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَةَ أُسْرَةٌ", "Write the word أُسْرَةٌ", "Tulis perkataan أُسْرَةٌ", "Tulis kata أُسْرَةٌ", "Écris le mot أُسْرَةٌ", "Escribe la palabra أُسْرَةٌ"),
              arabicText: "أُسْرَةٌ",
              answer: "أُسْرَةٌ",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Family_illustration.svg/512px-Family_illustration.svg.png"
            },
            {
              id: "uae-g2u6l1-e5",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ الْكَلِمَاتِ", "Arrange the words", "Susun perkataan", "Ordena las palabras", "Range les mots", "Ordena las palabras"),
              arabicText: "تَجْتَمِعُ أُسْرَتِي سَوِيًّا",
              answer: "أُسْرَتِي تَجْتَمِعُ سَوِيًّا",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Family_gathering.jpg/512px-Family_gathering.jpg"
            },
            {
              id: "uae-g2u6l1-e6",
              type: "fill_in_blank",
              skill: "writing",
              prompt: t("أَكْمِلِ الْجُمْلَةَ", "Complete the sentence", "Lengkapkan ayat", "Completa la oración", "Complète la phrase", "Completa la oración"),
              arabicText: "هٰذِهِ ___",
              answer: "لِقَاءَاتٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468-200d-1f469-200d-1f467-200d-1f466/512.webp"
            },
            {
              id: "uae-g2u6l1speakuae-g2u6l1-v3",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "جَمْعَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e0/512.webp"
            },
            {
              id: "uae-g2u6l1mcquae-g2u6l1-v3",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"جَمْعَةٌ\"؟", "What does \"gathering\" mean?", "Apakah maksud \"himpunan\"?", "Apa arti \"perkumpulan\"?", "Que signifie \"réunion\" ?", "¿Qué significa \"reunión\"?"),
              arabicText: "جَمْعَةٌ",
              options: [
                "conversation",
                "gathering",
                "door",
                "game"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e0/512.webp"
            },
            {
              id: "uae-g2u6l1listenuae-g2u6l1-v6",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "شَايٌ",
              options: [
                "صَبَاحٌ",
                "شَايٌ",
                "فَرَحٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f375/512.webp"
            },
            {
              id: "uae-g2u6l1listenuae-g2u6l1-v4",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "ضَيْفٌ",
              options: [
                "ضَيْفٌ",
                "شُهُورٌ",
                "تَمْرٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f381/512.webp"
            },
            {
              id: "uae-g2u6l1mcquae-g2u6l1-v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"أُسْرَةٌ\"؟", "What does \"family\" mean?", "Apakah maksud \"keluarga\"?", "Apa arti \"keluarga\"?", "Que signifie \"famille\" ?", "¿Qué significa \"familia\"?"),
              arabicText: "أُسْرَةٌ",
              options: [
                "nose",
                "family",
                "riding",
                "Monday"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468-200d-1f469-200d-1f467-200d-1f466/512.webp"
            },
            {
              id: "uae-g2u6l1mcquae-g2u6l1-v8",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"فَرَحٌ\"؟", "What does \"joy\" mean?", "Apakah maksud \"kegembiraan\"?", "Apa arti \"kegembiraan\"?", "Que signifie \"joie\" ?", "¿Qué significa \"alegría\"?"),
              arabicText: "فَرَحٌ",
              options: [
                "joy",
                "game/toy",
                "peace/greeting",
                "play"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.webp"
            }
          ]
        },
        {
          id: "uae-g2u6l2",
          unitId: "uae-g2u6",
          gradeId: "uae-g2",
          order: 2,
          title: t("عِيدُ مِيلَادِ جَدِّي", "Grandfather's Birthday", "Hari Lahir Datuk Saya", "Ulang Tahun Kakekku", "L’anniversaire de mon grand-père", "El cumpleaños de mi abuelo"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("نُحَضِّرُ هَدَايَا وَنُغَنِّي لِجَدِّي.", "We prepare gifts and sing for my grandfather.", "Kami menyediakan hadiah dan menyanyi untuk datuk saya.", "Kami menyiapkan hadiah dan bernyanyi untuk kakekku.", "Nous préparons des cadeaux et chantons pour mon grand-père.", "Preparamos regalos y cantamos para mi abuelo."),
          vocabulary: [
            {
              id: "uae-g2u6l2-v1",
              arabic: "عِيدُ مِيلَادٍ",
              transliteration: "ʿīd milād",
              translation: t("عِيدُ مِيلَادٍ", "birthday", "hari lahir", "ulang tahun", "anniversaire", "cumpleaños"),
              emoji: "🎂"
            },
            {
              id: "uae-g2u6l2-v2",
              arabic: "جَدٌّ",
              transliteration: "jaddun",
              translation: t("جَدٌّ", "grandfather", "datuk", "kakek", "grand-père", "abuelo"),
              emoji: "🧓"
            },
            {
              id: "uae-g2u6l2-v3",
              arabic: "هَدِيَّةٌ",
              transliteration: "hadiyyah",
              translation: t("هَدِيَّةٌ", "gift", "hadiah", "hadiah", "cadeau", "regalo"),
              emoji: "🎁"
            },
            {
              id: "uae-g2u6l2-v4",
              arabic: "كَعْكٌ",
              transliteration: "kaʿkun",
              translation: t("كَعْكٌ", "cake", "kek", "kue", "gâteau", "pastel"),
              emoji: "🎂"
            },
            {
              id: "uae-g2u6l2-v5",
              arabic: "شَمْعَةٌ",
              transliteration: "shamʿah",
              translation: t("شَمْعَةٌ", "candle", "lilin", "lilin", "bougie", "vela"),
              emoji: "🕯️"
            },
            {
              id: "uae-g2u6l2-v6",
              arabic: "أُغْنِيَةٌ",
              transliteration: "ughniyah",
              translation: t("أُغْنِيَةٌ", "song", "lagu", "lagu", "chanson", "canción"),
              emoji: "🎵"
            },
            {
              id: "uae-g2u6l2-v7",
              arabic: "تَهْنِئَةٌ",
              transliteration: "tahniah",
              translation: t("تَهْنِئَةٌ", "congratulation", "ucapan tahniah", "ucapan selamat", "félicitations", "felicitación"),
              emoji: "👏"
            },
            {
              id: "uae-g2u6l2-v8",
              arabic: "هُدُوءٌ",
              transliteration: "hudūʾun",
              translation: t("هُدُوءٌ", "calm", "tenang", "tenang", "calme", "calma"),
              emoji: "🕊️"
            }
          ],
          dialogue: [
            {
              speaker: "الجَدُّ",
              arabic: "مَا هٰذَا يَا أَحْفَادِي؟",
              translation: t("مَا هٰذَا يَا أَحْفَادِي؟", "What is this, my grandchildren?", "Apa ini, cucu-cucuku?", "Apa ini, cucu-cucuku?", "Qu’est-ce que c’est, mes petits-enfants ?", "¿Qué es esto, mis nietos?")
            },
            {
              speaker: "سَلْمَى",
              arabic: "هٰذَا كَعْكٌ وَهَدِيَّةٌ لَكَ.",
              translation: t("هٰذَا كَعْكٌ وَهَدِيَّةٌ لَكَ.", "This is cake and a gift for you.", "Ini kek dan hadiah untuk datuk.", "Ini kue dan hadiah untukmu.", "C’est un gâteau et un cadeau pour toi.", "Este es un pastel y un regalo para ti.")
            },
            {
              speaker: "الجَدُّ",
              arabic: "شُكْرًا، أَنَا سَعِيدٌ جِدًّا!",
              translation: t("شُكْرًا، أَنَا سَعِيدٌ جِدًّا!", "Thank you, I am very happy!", "Terima kasih, saya sangat gembira!", "Terima kasih, aku sangat senang!", "Merci, je suis très heureux !", "¡Gracias, estoy muy feliz!")
            }
          ],
          exercises: [
            {
              id: "uae-g2u6l2-e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ", "Listen and choose the word", "Dengar dan pilih perkataan", "Dengarkan dan pilih kata", "Écoute et choisis le mot", "Escucha y elige la palabra"),
              arabicText: "هَدِيَّةٌ",
              options: [
                "هَدِيَّةٌ",
                "شَمْعَةٌ",
                "هُدُوءٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f381/512.webp"
            },
            {
              id: "uae-g2u6l2-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالصُّورَةِ", "Match the word to the picture", "Padankan perkataan dengan gambar", "Cocokkan kata dengan gambar", "Associe le mot à l’image", "Relaciona la palabra con la imagen"),
              pairs: [
                {
                  a: "هَدِيَّةٌ",
                  b: "🎁"
                },
                {
                  a: "كَعْكٌ",
                  b: "🎂"
                },
                {
                  a: "شَمْعَةٌ",
                  b: "🕯️"
                },
                {
                  a: "أُغْنِيَةٌ",
                  b: "🎵"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f382/512.webp"
            },
            {
              id: "uae-g2u6l2-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنْ عِيدِ مِيلَادِ جَدِّكَ", "Talk about your grandfather's birthday", "Bercakap tentang hari lahir datuk kamu", "Habla del cumpleaños de tu abuelo", "Parle de l’anniversaire de ton grand-père", "Habla del cumpleaños de tu abuelo"),
              arabicText: "نُغَنِّي لِجَدِّي وَنُقَدِّمُ هَدِيَّةً",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f382/512.webp"
            },
            {
              id: "uae-g2u6l2-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَةَ جَدٌّ", "Write the word جَدٌّ", "Tulis perkataan جَدٌّ", "Tulis kata جَدٌّ", "Écris le mot جَدٌّ", "Escribe la palabra جَدٌّ"),
              arabicText: "جَدٌّ",
              answer: "جَدٌّ",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Grandfather_and_grandchild.svg/512px-Grandfather_and_grandchild.svg.png"
            },
            {
              id: "uae-g2u6l2-e5",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ الْكَلِمَاتِ", "Arrange the words", "Susun perkataan", "Ordena las palabras", "Range les mots", "Ordena las palabras"),
              arabicText: "هَدِيَّةٌ نُقَدِّمُ لِجَدِّي",
              answer: "نُقَدِّمُ هَدِيَّةٌ لِجَدِّي",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Birthday_cake_and_gifts.jpg/512px-Birthday_cake_and_gifts.jpg"
            },
            {
              id: "uae-g2u6l2-e6",
              type: "fill_in_blank",
              skill: "writing",
              prompt: t("أَكْمِلِ الْجُمْلَةَ", "Complete the sentence", "Lengkapkan ayat", "Completa la oración", "Complète la phrase", "Completa la oración"),
              arabicText: "أُغَنِّي ___",
              answer: "لِجَدِّي",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f382/512.webp"
            },
            {
              id: "uae-g2u6l2arrange1",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "مَا هٰذَا يَا أَحْفَادِي؟",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f382/512.webp"
            },
            {
              id: "uae-g2u6l2spelluae-g2u6l2-v7",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "تَهْنِئَةٌ",
              answer: "تَهْنِئَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f44f/512.webp"
            },
            {
              id: "uae-g2u6l2writeuae-g2u6l2-v7",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"تَهْنِئَةٌ\"", "Type the Arabic word for: \"congratulation\"", "Taip perkataan Arab untuk: \"ucapan tahniah\"", "Ketik kata Arab untuk: \"ucapan selamat\"", "Tape le mot arabe pour : \"félicitations\"", "Escribe la palabra árabe para: \"felicitación\""),
              arabicText: "تَهْنِئَةٌ",
              answer: "تَهْنِئَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f44f/512.webp"
            },
            {
              id: "uae-g2u6l2spelluae-g2u6l2-v3",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "هَدِيَّةٌ",
              answer: "هَدِيَّةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f381/512.webp"
            },
            {
              id: "uae-g2u6l2speakuae-g2u6l2-v7",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "تَهْنِئَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f44f/512.webp"
            },
            {
              id: "uae-g2u6l2mcquae-g2u6l2-v4",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"كَعْكٌ\"؟", "What does \"cake\" mean?", "Apakah maksud \"kek\"?", "Apa arti \"kue\"?", "Que signifie \"gâteau\" ?", "¿Qué significa \"pastel\"?"),
              arabicText: "كَعْكٌ",
              options: [
                "cake",
                "music",
                "friend",
                "yard"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f382/512.webp"
            }
          ]
        },
        {
          id: "uae-g2u6l3",
          unitId: "uae-g2u6",
          gradeId: "uae-g2",
          order: 3,
          title: t("لَحَظَاتٌ لَا تُنْسَى", "Unforgettable Moments", "Detik yang Tidak Dilupakan", "Momen yang Tak Terlupakan", "Moments inoubliables", "Momentos inolvidables"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("أَحْفَظُ الذِّكْرَيَاتِ الْجَمِيلَةَ فِي قَلْبِي.", "I keep beautiful memories in my heart.", "Saya menyimpan kenangan indah dalam hati saya.", "Aku menyimpan kenangan indah di hatiku.", "Je garde de beaux souvenirs dans mon cœur.", "Guardo recuerdos bonitos en mi corazón."),
          vocabulary: [
            {
              id: "uae-g2u6l3-v1",
              arabic: "ذِكْرَى",
              transliteration: "dhikrā",
              translation: t("ذِكْرَى", "memory", "kenangan", "kenangan", "souvenir", "recuerdo"),
              emoji: "📸"
            },
            {
              id: "uae-g2u6l3-v2",
              arabic: "لَحْظَةٌ",
              transliteration: "laḥẓah",
              translation: t("لَحْظَةٌ", "moment", "detik", "momen", "instant", "momento"),
              emoji: "⏳"
            },
            {
              id: "uae-g2u6l3-v3",
              arabic: "صُورَةٌ",
              transliteration: "ṣūrah",
              translation: t("صُورَةٌ", "picture", "gambar", "gambar", "image", "imagen"),
              emoji: "🖼️"
            },
            {
              id: "uae-g2u6l3-v4",
              arabic: "فَرَحٌ",
              transliteration: "farah",
              translation: t("فَرَحٌ", "joy", "kegembiraan", "kegembiraan", "joie", "alegría"),
              emoji: "🎉"
            },
            {
              id: "uae-g2u6l3-v5",
              arabic: "شُكْرٌ",
              transliteration: "shukrun",
              translation: t("شُكْرٌ", "thanks", "terima kasih", "terima kasih", "merci", "gracias"),
              emoji: "🙏"
            },
            {
              id: "uae-g2u6l3-v6",
              arabic: "رِحْلَةٌ",
              transliteration: "riḥlah",
              translation: t("رِحْلَةٌ", "trip", "perjalanan", "perjalanan", "voyage", "viaje"),
              emoji: "🧳"
            },
            {
              id: "uae-g2u6l3-v7",
              arabic: "لَعِبَةٌ",
              transliteration: "laʿibah",
              translation: t("لَعِبَةٌ", "game/toy", "permainan", "permainan", "jeu/jouet", "juego/juguete"),
              emoji: "🎲"
            },
            {
              id: "uae-g2u6l3-v8",
              arabic: "مُفَاجَأَةٌ",
              transliteration: "mufājaʾah",
              translation: t("مُفَاجَأَةٌ", "surprise", "kejutan", "kejutan", "surprise", "sorpresa"),
              emoji: "🎁"
            }
          ],
          dialogue: [
            {
              speaker: "المُعَلِّمَةُ",
              arabic: "مَا أَجْمَلَ هٰذِهِ الصُّورَةَ!",
              translation: t("مَا أَجْمَلَ هٰذِهِ الصُّورَةَ!", "How beautiful this picture is!", "Cantiknya gambar ini!", "Betapa indahnya gambar ini!", "Comme cette image est belle !", "¡Qué bonita es esta imagen!")
            },
            {
              speaker: "عَلِيّ",
              arabic: "هٰذِهِ ذِكْرَى رِحْلَتِنَا.",
              translation: t("هٰذِهِ ذِكْرَى رِحْلَتِنَا.", "This is a memory of our trip.", "Ini kenangan perjalanan kami.", "Ini adalah kenangan perjalanan kami.", "C’est un souvenir de notre voyage.", "Este es un recuerdo de nuestro viaje.")
            },
            {
              speaker: "المُعَلِّمَةُ",
              arabic: "اِحْفَظْهَا، فَهِيَ مَحْبُوبَةٌ.",
              translation: t("اِحْفَظْهَا، فَهِيَ مَحْبُوبَةٌ.", "Keep it, it is loved.", "Simpannya, ia sangat disukai.", "Simpanlah, itu disukai.", "Garde-la, elle est précieuse.", "Guárdala, es querida.")
            }
          ],
          exercises: [
            {
              id: "uae-g2u6l3-e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ", "Listen and choose the word", "Dengar dan pilih perkataan", "Dengarkan dan pilih kata", "Écoute et choisis le mot", "Escucha y elige la palabra"),
              arabicText: "ذِكْرَى",
              options: [
                "ذِكْرَى",
                "لَحْظَةٌ",
                "رِحْلَةٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4f8/512.webp"
            },
            {
              id: "uae-g2u6l3-e2",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِالصُّورَةِ", "Match the word to the picture", "Padankan perkataan dengan gambar", "Cocokkan kata dengan gambar", "Associe le mot à l’image", "Relaciona la palabra con la imagen"),
              pairs: [
                {
                  a: "ذِكْرَى",
                  b: "📸"
                },
                {
                  a: "لَحْظَةٌ",
                  b: "⏳"
                },
                {
                  a: "صُورَةٌ",
                  b: "🖼️"
                },
                {
                  a: "مُفَاجَأَةٌ",
                  b: "🎁"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4f8/512.webp"
            },
            {
              id: "uae-g2u6l3-e3",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنْ لَحْظَةٍ جَمِيلَةٍ", "Talk about a beautiful moment", "Ceritakan tentang detik yang indah", "Habla de un momento bonito", "Parle d’un beau moment", "Habla de un momento bonito"),
              arabicText: "هٰذِهِ ذِكْرَى جَمِيلَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4f8/512.webp"
            },
            {
              id: "uae-g2u6l3-e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ كَلِمَةَ ذِكْرَى", "Write the word ذِكْرَى", "Tulis perkataan ذِكْرَى", "Tulis kata ذِكْرَى", "Écris le mot ذِكْرَى", "Escribe la palabra ذِكْرَى"),
              arabicText: "ذِكْرَى",
              answer: "ذِكْرَى",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Photo_camera_icon.svg/512px-Photo_camera_icon.svg.png"
            },
            {
              id: "uae-g2u6l3-e5",
              type: "arrange",
              skill: "reading",
              prompt: t("رَتِّبِ الْكَلِمَاتِ", "Arrange the words", "Susun perkataan", "Ordena las palabras", "Range les mots", "Ordena las palabras"),
              arabicText: "جَمِيلَةٌ ذِكْرَى هٰذِهِ",
              answer: "هٰذِهِ ذِكْرَى جَمِيلَةٌ",
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Memory_album.jpg/512px-Memory_album.jpg"
            },
            {
              id: "uae-g2u6l3-e6",
              type: "fill_in_blank",
              skill: "writing",
              prompt: t("أَكْمِلِ الْجُمْلَةَ", "Complete the sentence", "Lengkapkan ayat", "Completa la oración", "Complète la phrase", "Completa la oración"),
              arabicText: "أَحْفَظُ ___ فِي قَلْبِي",
              answer: "الذِّكْرَيَاتِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4f8/512.webp"
            },
            {
              id: "uae-g2u6l3listenuae-g2u6l3-v3",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "صُورَةٌ",
              options: [
                "لِقَاءٌ",
                "عَيْنٌ",
                "صُورَةٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f5bc-fe0f/512.webp"
            },
            {
              id: "uae-g2u6l3writeuae-g2u6l3-v7",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"لَعِبَةٌ\"", "Type the Arabic word for: \"game/toy\"", "Taip perkataan Arab untuk: \"permainan\"", "Ketik kata Arab untuk: \"permainan\"", "Tape le mot arabe pour : \"jeu/jouet\"", "Escribe la palabra árabe para: \"juego/juguete\""),
              arabicText: "لَعِبَةٌ",
              answer: "لَعِبَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3b2/512.webp"
            },
            {
              id: "uae-g2u6l3spelluae-g2u6l3-v6",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "رِحْلَةٌ",
              answer: "رِحْلَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9f3/512.webp"
            },
            {
              id: "uae-g2u6l3listenuae-g2u6l3-v1",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "ذِكْرَى",
              options: [
                "الِاثْنَيْنِ",
                "لَحْمٌ",
                "ذِكْرَى"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4f8/512.webp"
            },
            {
              id: "uae-g2u6l3writeuae-g2u6l3-v4",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"فَرَحٌ\"", "Type the Arabic word for: \"joy\"", "Taip perkataan Arab untuk: \"kegembiraan\"", "Ketik kata Arab untuk: \"kegembiraan\"", "Tape le mot arabe pour : \"joie\"", "Escribe la palabra árabe para: \"alegría\""),
              arabicText: "فَرَحٌ",
              answer: "فَرَحٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.webp"
            },
            {
              id: "uae-g2u6l3spelluae-g2u6l3-v4",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "فَرَحٌ",
              answer: "فَرَحٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.webp"
            }
          ]
        },
        {
          id: "uae-g2u6review",
          unitId: "uae-g2u6",
          gradeId: "uae-g2",
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
              id: "uae-g2u6l1-v1",
              arabic: "أُسْرَةٌ",
              transliteration: "usrah",
              translation: t("أُسْرَةٌ", "family", "keluarga", "keluarga", "famille", "familia"),
              emoji: "👨‍👩‍👧‍👦"
            },
            {
              id: "uae-g2u6l1-v2",
              arabic: "لِقَاءٌ",
              transliteration: "liqāʾun",
              translation: t("لِقَاءٌ", "meeting", "pertemuan", "pertemuan", "rencontre", "encuentro"),
              emoji: "🤗"
            },
            {
              id: "uae-g2u6l1-v3",
              arabic: "جَمْعَةٌ",
              transliteration: "jamʿah",
              translation: t("جَمْعَةٌ", "gathering", "himpunan", "perkumpulan", "réunion", "reunión"),
              emoji: "🏠"
            },
            {
              id: "uae-g2u6l1-v4",
              arabic: "ضَيْفٌ",
              transliteration: "ḍayfun",
              translation: t("ضَيْفٌ", "guest", "tetamu", "tamu", "invité", "invitado"),
              emoji: "🎁"
            },
            {
              id: "uae-g2u6l1-v5",
              arabic: "قَهْوَةٌ",
              transliteration: "qahwah",
              translation: t("قَهْوَةٌ", "coffee", "kopi", "kopi", "café", "café"),
              emoji: "☕"
            },
            {
              id: "uae-g2u6l1-v6",
              arabic: "شَايٌ",
              transliteration: "shāyun",
              translation: t("شَايٌ", "tea", "teh", "teh", "thé", "té"),
              emoji: "🍵"
            },
            {
              id: "uae-g2u6l1-v7",
              arabic: "حَدِيقَةٌ",
              transliteration: "ḥadīqah",
              translation: t("حَدِيقَةٌ", "garden", "taman", "taman", "jardin", "jardín"),
              emoji: "🌳"
            },
            {
              id: "uae-g2u6l1-v8",
              arabic: "فَرَحٌ",
              transliteration: "farah",
              translation: t("فَرَحٌ", "joy", "kegembiraan", "kegembiraan", "joie", "alegría"),
              emoji: "🎉"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "uae-g2u6reviewspelluae-g2u6l1-v4",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "ضَيْفٌ",
              answer: "ضَيْفٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f381/512.webp"
            },
            {
              id: "uae-g2u6reviewmcquae-g2u6l1-v2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"لِقَاءٌ\"؟", "What does \"meeting\" mean?", "Apakah maksud \"pertemuan\"?", "Apa arti \"pertemuan\"?", "Que signifie \"rencontre\" ?", "¿Qué significa \"encuentro\"?"),
              arabicText: "لِقَاءٌ",
              options: [
                "April",
                "meeting",
                "February",
                "ear"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f917/512.webp"
            },
            {
              id: "uae-g2u6reviewlistenuae-g2u6l1-v5",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "قَهْوَةٌ",
              options: [
                "فَرَحٌ",
                "قَهْوَةٌ",
                "خُضَارٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2615/512.webp"
            },
            {
              id: "uae-g2u6reviewwriteuae-g2u6l1-v2",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"لِقَاءٌ\"", "Type the Arabic word for: \"meeting\"", "Taip perkataan Arab untuk: \"pertemuan\"", "Ketik kata Arab untuk: \"pertemuan\"", "Tape le mot arabe pour : \"rencontre\"", "Escribe la palabra árabe para: \"encuentro\""),
              arabicText: "لِقَاءٌ",
              answer: "لِقَاءٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f917/512.webp"
            },
            {
              id: "uae-g2u6reviewmcquae-g2u6l1-v7",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"حَدِيقَةٌ\"؟", "What does \"garden\" mean?", "Apakah maksud \"taman\"?", "Apa arti \"taman\"?", "Que signifie \"jardin\" ?", "¿Qué significa \"jardín\"?"),
              arabicText: "حَدِيقَةٌ",
              options: [
                "mouth",
                "song/anthem",
                "together",
                "garden"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f333/512.webp"
            },
            {
              id: "uae-g2u6reviewwriteuae-g2u6l1-v3",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"جَمْعَةٌ\"", "Type the Arabic word for: \"gathering\"", "Taip perkataan Arab untuk: \"himpunan\"", "Ketik kata Arab untuk: \"perkumpulan\"", "Tape le mot arabe pour : \"réunion\"", "Escribe la palabra árabe para: \"reunión\""),
              arabicText: "جَمْعَةٌ",
              answer: "جَمْعَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e0/512.webp"
            }
          ]
        }
      ]
    }
  ]
};
