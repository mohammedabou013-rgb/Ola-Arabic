import { t, type GradeData, type CurriculumId } from "./types";

export const uaeGrade5: GradeData = {
  id: "uae-g5",
  number: 5,
  color: "#10B981",
  icon: "star",
  title: t("المستوى الخامس", "Stage 5", "Tahun 5", "Kelas 5", "Année 5", "Año 5"),
  description: t("نتعلم اللغة العربية من خلال الرياضات والمدن والتواصل والذكاء", "Learn Arabic through sports, cities, communication and intelligence topics", "Belajar bahasa Arab melalui sukan, bandar, komunikasi dan kecerdasan", "Belajar bahasa Arab melalui olahraga, kota, komunikasi dan kecerdasan", "Apprendre l'arabe à travers le sport, les villes, la communication et l'intelligence", "Aprender árabe a través de deportes, ciudades, comunicación e inteligencia"),
  units: [
    {
      id: "uae-g5u1",
      gradeId: "uae-g5",
      order: 1,
      title: t("الرِّيَاضَاتُ وَالْهِوَايَاتُ", "Sports", "Sukan", "Olahraga", "Sports", "Deportes"),
      theme: "#10B981",
      lessons: [
        {
          id: "uae-g5u1l1",
          unitId: "uae-g5u1",
          gradeId: "uae-g5",
          order: 1,
          title: t("أَلْعَابُ الْكُرَةِ", "Ball Games", "Permainan Bola", "Permainan Bola", "Jeux de ballon", "Juegos de pelota"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("أَلْعَابُ الْكُرَةِ مِنْ أَكْثَرِ الرِّيَاضَاتِ شُعْبِيَّةً فِي الْعَالَمِ!", "Ball games are among the most popular sports in the world!", "Permainan bola adalah antara sukan paling popular di dunia!", "Permainan bola adalah salah satu olahraga paling populer di dunia!", "Les jeux de ballon sont parmi les sports les plus populaires au monde !", "¡Los juegos de pelota son de los deportes más populares del mundo!"),
          vocabulary: [
            {
              id: "uae-g5u1l1v1",
              arabic: "كُرَةُ الْقَدَمِ",
              transliteration: "kurat al-qadam",
              translation: t("كُرَةُ الْقَدَمِ", "football", "bola sepak", "sepak bola", "football", "fútbol"),
              emoji: "⚽"
            },
            {
              id: "uae-g5u1l1v2",
              arabic: "كُرَةُ السَّلَّةِ",
              transliteration: "kurat al-salla",
              translation: t("كُرَةُ السَّلَّةِ", "basketball", "bola keranjang", "bola basket", "basket-ball", "baloncesto"),
              emoji: "🏀"
            },
            {
              id: "uae-g5u1l1v3",
              arabic: "كُرَةُ الطَّائِرَةِ",
              transliteration: "kurat al-tā'ira",
              translation: t("كُرَةُ الطَّائِرَةِ", "volleyball", "bola tampar", "bola voli", "volley-ball", "voleibol"),
              emoji: "🏐"
            },
            {
              id: "uae-g5u1l1v4",
              arabic: "مَرْمَى",
              transliteration: "marmā",
              translation: t("مَرْمَى", "goal", "gol", "gawang", "but", "portería"),
              emoji: "🥅"
            },
            {
              id: "uae-g5u1l1v5",
              arabic: "فَرِيقٌ",
              transliteration: "farīq",
              translation: t("فَرِيقٌ", "team", "pasukan", "tim", "équipe", "equipo"),
              emoji: "👥"
            },
            {
              id: "uae-g5u1l1v6",
              arabic: "مُدَرِّبٌ",
              transliteration: "mudarrib",
              translation: t("مُدَرِّبٌ", "coach / trainer", "jurulatih", "pelatih", "entraîneur", "entrenador"),
              emoji: "🧑‍🏫"
            },
            {
              id: "uae-g5u1l1v7",
              arabic: "مَلْعَبٌ",
              transliteration: "malʿab",
              translation: t("مَلْعَبٌ", "stadium / pitch", "padang", "lapangan", "stade", "estadio"),
              emoji: "🏟️"
            },
            {
              id: "uae-g5u1l1v8",
              arabic: "بَطَلٌ",
              transliteration: "baṭal",
              translation: t("بَطَلٌ", "champion / hero", "wira", "pahlawan", "champion", "campeón"),
              emoji: "🏅"
            },
            {
              id: "uae-g5u1l1v9",
              arabic: "مُنَافَسَةٌ",
              transliteration: "munāfasa",
              translation: t("مُنَافَسَةٌ", "competition", "pertandingan", "kompetisi", "compétition", "competencia"),
              emoji: "🤼"
            },
            {
              id: "uae-g5u1l1v10",
              arabic: "تَسْجِيلٌ",
              transliteration: "tasjīl",
              translation: t("تَسْجِيلٌ", "scoring / recording", "jaringan gol", "mencetak gol", "but marqué", "marcador"),
              emoji: "📊"
            }
          ],
          dialogue: [
            {
              speaker: "سَالِم",
              arabic: "هَلْ تُحِبُّ كُرَةَ الْقَدَمِ يَا أَحْمَد؟",
              translation: t("هَلْ تُحِبُّ كُرَةَ الْقَدَمِ يَا أَحْمَد؟", "Do you like football Ahmed?", "Adakah kamu suka bola sepak Ahmad?", "Apakah kamu suka sepak bola Ahmad?", "Tu aimes le football Ahmed ?", "¿Te gusta el fútbol Ahmed?")
            },
            {
              speaker: "أَحْمَد",
              arabic: "نَعَمْ، أَلْعَبُ مَعَ فَرِيقِي كُلَّ أُسْبُوعٍ وَنُحَاوِلُ تَسْجِيلَ أَكْبَرِ عَدَدٍ مِنَ الْأَهْدَافِ.",
              translation: t("نَعَمْ، أَلْعَبُ مَعَ فَرِيقِي كُلَّ أُسْبُوعٍ وَنُحَاوِلُ تَسْجِيلَ أَكْبَرِ عَدَدٍ مِنَ الْأَهْدَافِ.", "Yes, I play with my team every week and we try to score as many goals as possible.", "Ya, saya bermain dengan pasukan saya setiap minggu dan cuba menjaringkan sebanyak mungkin gol.", "Ya, saya bermain dengan tim saya setiap minggu dan mencoba mencetak gol sebanyak mungkin.", "Oui, je joue avec mon équipe chaque semaine et nous essayons de marquer le plus de buts possible.", "Sí, juego con mi equipo cada semana e intentamos marcar la mayor cantidad de goles posible.")
            },
            {
              speaker: "سَالِم",
              arabic: "رَائِعٌ! الْمَرْمَى الَّذِي أَحْرَزْتُمُوهُ أَمْسِ كَانَ جَمِيلًا جِدًّا.",
              translation: t("رَائِعٌ! الْمَرْمَى الَّذِي أَحْرَزْتُمُوهُ أَمْسِ كَانَ جَمِيلًا جِدًّا.", "Wonderful! The goal you scored yesterday was very beautiful.", "Hebat! Gol yang kamu jaringkan semalam sangat cantik.", "Luar biasa! Gol yang kamu cetak kemarin sangat indah.", "Magnifique ! Le but que vous avez marqué hier était très beau.", "¡Maravilloso! El gol que marcaron ayer fue muy bonito.")
            }
          ],
          exercises: [
            {
              id: "uae-g5u1l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الرِّيَاضَةَ الصَّحِيحَةَ", "Listen and choose the correct sport", "Dengar dan pilih sukan yang betul", "Dengarkan dan pilih olahraga yang benar", "Écoute et choisis le bon sport", "Escucha y elige el deporte correcto"),
              arabicText: "كُرَةُ الْقَدَمِ",
              options: [
                "كُرَةُ السَّلَّةِ",
                "كُرَةُ الْقَدَمِ",
                "كُرَةُ الطَّائِرَةِ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "uae-g5u1l1e2",
              type: "mcq",
              skill: "reading",
              prompt: t("مَاذَا نُسَمِّي مَجْمُوعَةً مِنَ اللَّاعِبِينَ؟", "What do we call a group of players?", "Apa yang kita panggil sekumpulan pemain?", "Apa yang kita sebut sekelompok pemain?", "Comment appelle-t-on un groupe de joueurs ?", "¿Cómo llamamos a un grupo de jugadores?"),
              options: [
                "مَرْمَى",
                "فَرِيقٌ",
                "مِضْمَارٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "uae-g5u1l1e3",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الرِّيَاضَةَ بِرَمْزِهَا", "Match the sport to its symbol", "Padankan sukan dengan simbolnya", "Cocokkan olahraga dengan simbolnya", "Relie le sport à son symbole", "Une el deporte con su símbolo"),
              pairs: [
                {
                  a: "كُرَةُ الْقَدَمِ",
                  b: "⚽"
                },
                {
                  a: "كُرَةُ السَّلَّةِ",
                  b: "🏀"
                },
                {
                  a: "كُرَةُ الطَّائِرَةِ",
                  b: "🏐"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "uae-g5u1l1e4",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنْ رِيَاضَتِكَ الْمُفَضَّلَةِ", "Talk about your favourite sport", "Bercakap tentang sukan kegemaran anda", "Bicarakan tentang olahraga favoritmu", "Parle de ton sport préféré", "Habla sobre tu deporte favorito"),
              arabicText: "رِيَاضَتِي الْمُفَضَّلَةُ هِيَ...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "uae-g5u1l1e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا دَوْرُ الْمُدَرِّبِ فِي الْفَرِيقِ؟", "What is the coach's role in the team?", "Apakah peranan jurulatih dalam pasukan?", "Apa peran pelatih dalam tim?", "Quel est le rôle de l'entraîneur dans l'équipe ?", "¿Cuál es el papel del entrenador en el equipo?"),
              options: [
                "يَلْعَبُ بَدَلًا عَنِ اللَّاعِبِينَ",
                "يُدَرِّبُ وَيُرَشِّدُ الْفَرِيقَ",
                "يَبِيعُ التَّذَاكِرَ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "uae-g5u1l1e6",
              type: "arrange",
              skill: "writing",
              prompt: t("رَتِّبِ الْكَلِمَاتِ لِتَكْوِينِ جُمْلَةٍ", "Arrange the words to form a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "يَلْعَبُ فَرِيقِي فِي الْمَلْعَبِ كُلَّ أُسْبُوعٍ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "uae-g5u1l1e7",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ جُمْلَةً تَصِفُ فِيهَا مُنَافَسَةً رِيَاضِيَّةً", "Write a sentence describing a sports competition", "Tulis ayat menggambarkan pertandingan sukan", "Tulis kalimat yang menggambarkan kompetisi olahraga", "Écris une phrase décrivant une compétition sportive", "Escribe una oración describiendo una competencia deportiva"),
              answer: "شَاهَدْتُ مُنَافَسَةً رِيَاضِيَّةً رَائِعَةً فِي الْمَلْعَبِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "uae-g5u1l1e8",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا بِالْعَرَبِيَّةِ", "Match the word to its Arabic meaning", "Padankan perkataan dengan maksudnya dalam bahasa Arab", "Cocokkan kata dengan artinya dalam bahasa Arab", "Relie le mot à son sens en arabe", "Une la palabra con su significado en árabe"),
              pairs: [
                {
                  a: "مُدَرِّبٌ",
                  b: "coach"
                },
                {
                  a: "بَطَلٌ",
                  b: "champion"
                },
                {
                  a: "مَلْعَبٌ",
                  b: "stadium"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "uae-g5u1l1listenuae-g5u1l1v2",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "كُرَةُ السَّلَّةِ",
              options: [
                "تَوَاصُلٌ",
                "فُرْشَاةٌ",
                "كُرَةُ السَّلَّةِ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c0/512.webp"
            },
            {
              id: "uae-g5u1l1spelluae-g5u1l1v1",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "كُرَةُ الْقَدَمِ",
              answer: "كُرَةُ الْقَدَمِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "uae-g5u1l1writeuae-g5u1l1v3",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"كُرَةُ الطَّائِرَةِ\"", "Type the Arabic word for: \"volleyball\"", "Taip perkataan Arab untuk: \"bola tampar\"", "Ketik kata Arab untuk: \"bola voli\"", "Tape le mot arabe pour : \"volley-ball\"", "Escribe la palabra árabe para: \"voleibol\""),
              arabicText: "كُرَةُ الطَّائِرَةِ",
              answer: "كُرَةُ الطَّائِرَةِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d0/512.webp"
            },
            {
              id: "uae-g5u1l1mcquae-g5u1l1v2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"كُرَةُ السَّلَّةِ\"؟", "What does \"basketball\" mean?", "Apakah maksud \"bola keranjang\"?", "Apa arti \"bola basket\"?", "Que signifie \"basket-ball\" ?", "¿Qué significa \"baloncesto\"?"),
              arabicText: "كُرَةُ السَّلَّةِ",
              options: [
                "royal park",
                "environment / habitat",
                "sculpture",
                "basketball"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c0/512.webp"
            }
          ]
        },
        {
          id: "uae-g5u1l2",
          unitId: "uae-g5u1",
          gradeId: "uae-g5",
          order: 2,
          title: t("رُكُوبُ الْخَيْلِ", "Horse Riding", "Menunggang Kuda", "Berkuda", "Équitation", "Equitación"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("رُكُوبُ الْخَيْلِ رِيَاضَةٌ أَصِيلَةٌ تُعَبِّرُ عَنِ التُّرَاثِ الْعَرَبِيِّ الْعَرِيقِ!", "Horse riding is an authentic sport that expresses the ancient Arab heritage!", "Menunggang kuda adalah sukan tulen yang mencerminkan warisan Arab yang kuno!", "Berkuda adalah olahraga asli yang mencerminkan warisan Arab kuno!", "L'équitation est un sport authentique qui exprime le patrimoine arabe ancien !", "¡La equitación es un deporte auténtico que expresa el antiguo patrimonio árabe!"),
          vocabulary: [
            {
              id: "uae-g5u1l2v1",
              arabic: "حِصَانٌ",
              transliteration: "ḥiṣān",
              translation: t("حِصَانٌ", "horse", "kuda", "kuda", "cheval", "caballo"),
              emoji: "🐴"
            },
            {
              id: "uae-g5u1l2v2",
              arabic: "سَرْجٌ",
              transliteration: "sarj",
              translation: t("سَرْجٌ", "saddle", "pelana", "pelana", "selle", "silla de montar"),
              emoji: "🪑"
            },
            {
              id: "uae-g5u1l2v3",
              arabic: "مِضْمَارٌ",
              transliteration: "miḍmār",
              translation: t("مِضْمَارٌ", "racetrack", "litar lumba", "lintasan balap", "piste", "pista de carreras"),
              emoji: "🏁"
            },
            {
              id: "uae-g5u1l2v4",
              arabic: "تَدْرِيبٌ",
              transliteration: "tadrīb",
              translation: t("تَدْرِيبٌ", "training", "latihan", "latihan", "entraînement", "entrenamiento"),
              emoji: "💪"
            },
            {
              id: "uae-g5u1l2v5",
              arabic: "مُتَسَابِقٌ",
              transliteration: "mutasābiq",
              translation: t("مُتَسَابِقٌ", "competitor / racer", "peserta lumba", "peserta balap", "concurrent", "competidor"),
              emoji: "🏇"
            },
            {
              id: "uae-g5u1l2v6",
              arabic: "لِجَامٌ",
              transliteration: "lijām",
              translation: t("لِجَامٌ", "bridle / reins", "tali kekang", "tali kekang", "bride", "brida"),
              emoji: "🎽"
            },
            {
              id: "uae-g5u1l2v7",
              arabic: "إِسْطَبْلٌ",
              transliteration: "isṭabl",
              translation: t("إِسْطَبْلٌ", "stable", "kandang kuda", "kandang kuda", "écurie", "establo"),
              emoji: "🏠"
            },
            {
              id: "uae-g5u1l2v8",
              arabic: "فَارِسٌ",
              transliteration: "fāris",
              translation: t("فَارِسٌ", "horseman / knight", "penunggang kuda", "penunggang kuda", "cavalier", "jinete"),
              emoji: "🤺"
            },
            {
              id: "uae-g5u1l2v9",
              arabic: "وَثَبَ",
              transliteration: "wathaba",
              translation: t("وَثَبَ", "he jumped / leaped", "dia melompat", "dia melompat", "il a sauté", "saltó"),
              emoji: "⬆️"
            },
            {
              id: "uae-g5u1l2v10",
              arabic: "تُرَاثٌ",
              transliteration: "turāth",
              translation: t("تُرَاثٌ", "heritage", "warisan", "warisan", "patrimoine", "patrimonio"),
              emoji: "🏺"
            }
          ],
          dialogue: [
            {
              speaker: "سَارَة",
              arabic: "هَلْ تَعَلَّمْتَ رُكُوبَ الْخَيْلِ مِنْ قَبْلُ يَا خَالِد؟",
              translation: t("هَلْ تَعَلَّمْتَ رُكُوبَ الْخَيْلِ مِنْ قَبْلُ يَا خَالِد؟", "Have you learned horse riding before Khalid?", "Adakah kamu pernah belajar menunggang kuda Khalid?", "Apakah kamu pernah belajar berkuda Khalid?", "As-tu déjà appris l'équitation Khalid ?", "¿Has aprendido equitación antes Khalid?")
            },
            {
              speaker: "خَالِد",
              arabic: "نَعَمْ، أَتَدَرَّبُ عَلَى الْحِصَانِ كُلَّ أُسْبُوعٍ فِي الْمِضْمَارِ مَعَ الْمُتَسَابِقِينَ.",
              translation: t("نَعَمْ، أَتَدَرَّبُ عَلَى الْحِصَانِ كُلَّ أُسْبُوعٍ فِي الْمِضْمَارِ مَعَ الْمُتَسَابِقِينَ.", "Yes, I train on horse every week at the racetrack with the competitors.", "Ya, saya berlatih menunggang kuda setiap minggu di litar lumba bersama peserta lumba.", "Ya, saya berlatih berkuda setiap minggu di lintasan balap bersama peserta balap.", "Oui, je m'entraîne à cheval chaque semaine sur la piste avec les concurrents.", "Sí, entreno a caballo cada semana en la pista con los competidores.")
            },
            {
              speaker: "سَارَة",
              arabic: "هَلْ يَصْعُبُ وَضْعُ السَّرْجِ عَلَى الْحِصَانِ؟",
              translation: t("هَلْ يَصْعُبُ وَضْعُ السَّرْجِ عَلَى الْحِصَانِ؟", "Is it difficult to put the saddle on the horse?", "Adakah susah untuk meletakkan pelana pada kuda?", "Apakah sulit meletakkan pelana pada kuda?", "Est-il difficile de mettre la selle sur le cheval ?", "¿Es difícil poner la silla de montar en el caballo?")
            }
          ],
          exercises: [
            {
              id: "uae-g5u1l2e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "حِصَانٌ",
              options: [
                "سَرْجٌ",
                "حِصَانٌ",
                "مِضْمَارٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f434/512.webp"
            },
            {
              id: "uae-g5u1l2e2",
              type: "mcq",
              skill: "reading",
              prompt: t("أَيْنَ يَتَسَابَقُ الْفُرْسَانُ؟", "Where do riders compete?", "Di mana penunggang bersaing?", "Di mana para penunggang bersaing?", "Où les cavaliers font-ils la course ?", "¿Dónde compiten los jinetes?"),
              options: [
                "فِي الْبَيْتِ",
                "فِي الْمِضْمَارِ",
                "فِي الْمَدْرَسَةِ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f434/512.webp"
            },
            {
              id: "uae-g5u1l2e3",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Relie le mot à son sens", "Une la palabra con su significado"),
              pairs: [
                {
                  a: "حِصَانٌ",
                  b: "🐴"
                },
                {
                  a: "سَرْجٌ",
                  b: "🪑"
                },
                {
                  a: "مِضْمَارٌ",
                  b: "🏁"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f434/512.webp"
            },
            {
              id: "uae-g5u1l2e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ جُمْلَةً عَنْ رُكُوبِ الْخَيْلِ", "Write a sentence about horse riding", "Tulis ayat tentang menunggang kuda", "Tulis kalimat tentang berkuda", "Écris une phrase sur l'équitation", "Escribe una oración sobre la equitación"),
              answer: "أُحِبُّ رُكُوبَ الْخَيْلِ فِي الْمِضْمَارِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f434/512.webp"
            },
            {
              id: "uae-g5u1l2e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا الَّذِي يَضَعُهُ الْفَارِسُ عَلَى ظَهْرِ الْحِصَانِ لِيَجْلِسَ؟", "What does the horseman place on the horse's back to sit on?", "Apa yang diletakkan penunggang di belakang kuda untuk duduk?", "Apa yang diletakkan penunggang di punggung kuda untuk duduk?", "Que le cavalier pose-t-il sur le dos du cheval pour s'asseoir ?", "¿Qué pone el jinete en el lomo del caballo para sentarse?"),
              options: [
                "اللِّجَامُ",
                "السَّرْجُ",
                "الإِسْطَبْلُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f434/512.webp"
            },
            {
              id: "uae-g5u1l2e6",
              type: "arrange",
              skill: "writing",
              prompt: t("رَتِّبِ الْكَلِمَاتِ لِتَكْوِينِ جُمْلَةٍ", "Arrange the words to form a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "الْفَارِسُ يَرْكَبُ الْحِصَانَ فِي الْمِضْمَارِ بِسُرْعَةٍ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f434/512.webp"
            },
            {
              id: "uae-g5u1l2e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنْ رُكُوبِ الْخَيْلِ وَالتُّرَاثِ الْعَرَبِيِّ", "Talk about horse riding and Arab heritage", "Bercakap tentang menunggang kuda dan warisan Arab", "Bicarakan tentang berkuda dan warisan Arab", "Parle de l'équitation et du patrimoine arabe", "Habla sobre la equitación y el patrimonio árabe"),
              arabicText: "رُكُوبُ الْخَيْلِ جُزْءٌ مِنَ التُّرَاثِ الْعَرَبِيِّ...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f434/512.webp"
            },
            {
              id: "uae-g5u1l2e8",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Relie le mot à son sens", "Une la palabra con su significado"),
              pairs: [
                {
                  a: "فَارِسٌ",
                  b: "horseman"
                },
                {
                  a: "تُرَاثٌ",
                  b: "heritage"
                },
                {
                  a: "إِسْطَبْلٌ",
                  b: "stable"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f434/512.webp"
            },
            {
              id: "uae-g5u1l2writeuae-g5u1l2v2",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"سَرْجٌ\"", "Type the Arabic word for: \"saddle\"", "Taip perkataan Arab untuk: \"pelana\"", "Ketik kata Arab untuk: \"pelana\"", "Tape le mot arabe pour : \"selle\"", "Escribe la palabra árabe para: \"silla de montar\""),
              arabicText: "سَرْجٌ",
              answer: "سَرْجٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1fa91/512.webp"
            },
            {
              id: "uae-g5u1l2writeuae-g5u1l2v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"حِصَانٌ\"", "Type the Arabic word for: \"horse\"", "Taip perkataan Arab untuk: \"kuda\"", "Ketik kata Arab untuk: \"kuda\"", "Tape le mot arabe pour : \"cheval\"", "Escribe la palabra árabe para: \"caballo\""),
              arabicText: "حِصَانٌ",
              answer: "حِصَانٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f434/512.webp"
            },
            {
              id: "uae-g5u1l2spelluae-g5u1l2v2",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "سَرْجٌ",
              answer: "سَرْجٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1fa91/512.webp"
            },
            {
              id: "uae-g5u1l2listenuae-g5u1l2v7",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "إِسْطَبْلٌ",
              options: [
                "تَوَاصُلٌ اجْتِمَاعِيٌّ",
                "حُرِّيَّةٌ",
                "إِسْطَبْلٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3e0/512.webp"
            }
          ]
        },
        {
          id: "uae-g5u1l3",
          unitId: "uae-g5u1",
          gradeId: "uae-g5",
          order: 3,
          title: t("الْجَرْيُ", "Running", "Berlari", "Berlari", "La course", "La carrera"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الْجَرْيُ رِيَاضَةٌ صِحِّيَّةٌ تَمْنَحُكَ الطَّاقَةَ وَتُقَوِّي عَضَلَاتِكَ!", "Running is a healthy sport that gives you energy and strengthens your muscles!", "Berlari adalah sukan sihat yang memberi tenaga dan menguatkan otot anda!", "Berlari adalah olahraga sehat yang memberi energi dan memperkuat ototmu!", "La course est un sport sain qui vous donne de l'énergie et renforce vos muscles !", "¡Correr es un deporte saludable que te da energía y fortalece tus músculos!"),
          vocabulary: [
            {
              id: "uae-g5u1l3v1",
              arabic: "سِبَاقٌ",
              transliteration: "sibāq",
              translation: t("سِبَاقٌ", "race", "lumba lari", "perlombaan lari", "course", "carrera"),
              emoji: "🏃"
            },
            {
              id: "uae-g5u1l3v2",
              arabic: "مَسَارٌ",
              transliteration: "masār",
              translation: t("مَسَارٌ", "track / path", "laluan", "jalur", "piste", "pista"),
              emoji: "🛣️"
            },
            {
              id: "uae-g5u1l3v3",
              arabic: "تَوَقَّفَ",
              transliteration: "tawaqqufa",
              translation: t("تَوَقَّفَ", "he stopped", "dia berhenti", "dia berhenti", "il s'est arrêté", "se detuvo"),
              emoji: "⛔"
            },
            {
              id: "uae-g5u1l3v4",
              arabic: "سُرْعَةٌ",
              transliteration: "surʿa",
              translation: t("سُرْعَةٌ", "speed", "kelajuan", "kecepatan", "vitesse", "velocidad"),
              emoji: "⚡"
            },
            {
              id: "uae-g5u1l3v5",
              arabic: "بُطُولَةٌ",
              transliteration: "buṭūla",
              translation: t("بُطُولَةٌ", "championship", "kejohanan", "kejuaraan", "championnat", "campeonato"),
              emoji: "🏆"
            },
            {
              id: "uae-g5u1l3v6",
              arabic: "عَضَلَةٌ",
              transliteration: "ʿaḍala",
              translation: t("عَضَلَةٌ", "muscle", "otot", "otot", "muscle", "músculo"),
              emoji: "💪"
            },
            {
              id: "uae-g5u1l3v7",
              arabic: "خَطُّ النِّهَايَةِ",
              transliteration: "khaṭṭ al-nihāya",
              translation: t("خَطُّ النِّهَايَةِ", "finish line", "garisan penamat", "garis finis", "ligne d'arrivée", "línea de meta"),
              emoji: "🏁"
            },
            {
              id: "uae-g5u1l3v8",
              arabic: "تَحَمُّلٌ",
              transliteration: "taḥammul",
              translation: t("تَحَمُّلٌ", "endurance / stamina", "daya tahan", "daya tahan", "endurance", "resistencia"),
              emoji: "🔋"
            },
            {
              id: "uae-g5u1l3v9",
              arabic: "فَازَ",
              transliteration: "fāza",
              translation: t("فَازَ", "he won", "dia menang", "dia menang", "il a gagné", "ganó"),
              emoji: "🥇"
            },
            {
              id: "uae-g5u1l3v10",
              arabic: "تَمْرِينٌ",
              transliteration: "tamrīn",
              translation: t("تَمْرِينٌ", "exercise / drill", "senaman", "latihan", "exercice", "ejercicio"),
              emoji: "🤸"
            }
          ],
          dialogue: [
            {
              speaker: "مُدَرِّب",
              arabic: "عَلَيْكَ زِيَادَةُ سُرْعَتِكَ فِي الْمَسَارِ لِتَفُوزَ بِالسِّبَاقِ!",
              translation: t("عَلَيْكَ زِيَادَةُ سُرْعَتِكَ فِي الْمَسَارِ لِتَفُوزَ بِالسِّبَاقِ!", "You must increase your speed on the track to win the race!", "Anda perlu meningkatkan kelajuan di laluan untuk memenangi lumba!", "Kamu perlu meningkatkan kecepatanmu di jalur untuk memenangkan perlombaan!", "Tu dois augmenter ta vitesse sur la piste pour gagner la course !", "¡Debes aumentar tu velocidad en la pista para ganar la carrera!")
            },
            {
              speaker: "لَاعِب",
              arabic: "حَاضِرٌ يَا مُدَرِّبُ! لَنْ أَتَوَقَّفَ حَتَّى أَصِلَ إِلَى خَطِّ النِّهَايَةِ.",
              translation: t("حَاضِرٌ يَا مُدَرِّبُ! لَنْ أَتَوَقَّفَ حَتَّى أَصِلَ إِلَى خَطِّ النِّهَايَةِ.", "Ready coach! I will not stop until I reach the finish line.", "Sedia jurulatih! Saya tidak akan berhenti sehingga sampai ke garisan penamat.", "Siap pelatih! Saya tidak akan berhenti sampai mencapai garis finish.", "Prêt entraîneur ! Je ne m'arrêterai pas jusqu'à la ligne d'arrivée.", "¡Listo entrenador! No me detendré hasta llegar a la línea de meta.")
            },
            {
              speaker: "مُدَرِّب",
              arabic: "هَذِهِ هِيَ رُوحُ الْبُطُولَةِ الْحَقِيقِيَّةِ!",
              translation: t("هَذِهِ هِيَ رُوحُ الْبُطُولَةِ الْحَقِيقِيَّةِ!", "This is the spirit of true championship!", "Inilah semangat kejohanan yang sebenar!", "Inilah semangat kejuaraan yang sesungguhnya!", "C'est l'esprit du vrai championnat !", "¡Este es el espíritu del verdadero campeonato!")
            }
          ],
          exercises: [
            {
              id: "uae-g5u1l3e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "سُرْعَةٌ",
              options: [
                "سِبَاقٌ",
                "مَسَارٌ",
                "سُرْعَةٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26a1/512.webp"
            },
            {
              id: "uae-g5u1l3e2",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا الَّذِي يَحْتَاجُهُ اللَّاعِبُ لِيَفُوزَ فِي السِّبَاقِ؟", "What does the player need to win the race?", "Apa yang diperlukan pemain untuk menang dalam lumba?", "Apa yang dibutuhkan pemain untuk menang dalam perlombaan?", "De quoi le joueur a-t-il besoin pour gagner la course ?", "¿Qué necesita el jugador para ganar la carrera?"),
              options: [
                "الرَّاحَةُ",
                "السُّرْعَةُ",
                "الطَّعَامُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c3/512.webp"
            },
            {
              id: "uae-g5u1l3e3",
              type: "arrange",
              skill: "writing",
              prompt: t("رَتِّبِ الْكَلِمَاتِ لِتَكْوِينِ جُمْلَةٍ", "Arrange the words to form a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "أَجْرِي بِسُرْعَةٍ فِي الْمَسَارِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c3/512.webp"
            },
            {
              id: "uae-g5u1l3e4",
              type: "speaking",
              skill: "speaking",
              prompt: t("صِفْ سِبَاقَ الْجَرْيِ بِجُمْلَتَيْنِ", "Describe a running race in two sentences", "Huraikan lumba lari dalam dua ayat", "Deskripsikan perlombaan lari dalam dua kalimat", "Décris une course en deux phrases", "Describe una carrera en dos oraciones"),
              arabicText: "السِّبَاقُ رِيَاضَةٌ رَائِعَةٌ...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c3/512.webp"
            },
            {
              id: "uae-g5u1l3e5",
              type: "mcq",
              skill: "reading",
              prompt: t("لِمَاذَا يُفِيدُ الْجَرْيُ صِحَّةَ الإِنْسَانِ؟", "Why is running beneficial to human health?", "Mengapa berlari bermanfaat untuk kesihatan manusia?", "Mengapa berlari bermanfaat bagi kesehatan manusia?", "Pourquoi la course est-elle bénéfique pour la santé humaine ?", "¿Por qué correr es beneficioso para la salud humana?"),
              options: [
                "يُضْعِفُ الْعَضَلَاتِ",
                "يُقَوِّي الْعَضَلَاتِ وَيَمْنَحُ الطَّاقَةَ",
                "يُسَبِّبُ التَّعَبَ فَقَطْ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c3/512.webp"
            },
            {
              id: "uae-g5u1l3e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Relie le mot à son sens", "Une la palabra con su significado"),
              pairs: [
                {
                  a: "عَضَلَةٌ",
                  b: "muscle"
                },
                {
                  a: "تَحَمُّلٌ",
                  b: "endurance"
                },
                {
                  a: "فَازَ",
                  b: "won"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c3/512.webp"
            },
            {
              id: "uae-g5u1l3e7",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ عَنْ فَوَائِدِ الْجَرْيِ الصِّحِّيَّةِ", "Write about the health benefits of running", "Tulis tentang manfaat kesihatan berlari", "Tulis tentang manfaat kesehatan berlari", "Écris sur les bienfaits de la course pour la santé", "Escribe sobre los beneficios de salud de correr"),
              answer: "الْجَرْيُ يُقَوِّي الْعَضَلَاتِ وَيَزِيدُ التَّحَمُّلَ وَيَمْنَحُ الطَّاقَةَ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c3/512.webp"
            },
            {
              id: "uae-g5u1l3e8",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "بُطُولَةٌ",
              options: [
                "بُطُولَةٌ",
                "تَمْرِينٌ",
                "خَطُّ النِّهَايَةِ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c6/512.webp"
            },
            {
              id: "uae-g5u1l3arrange3",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "هَذِهِ هِيَ رُوحُ الْبُطُولَةِ الْحَقِيقِيَّةِ!",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c3/512.webp"
            },
            {
              id: "uae-g5u1l3listenuae-g5u1l3v5",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "بُطُولَةٌ",
              options: [
                "نِظَامٌ",
                "قُمَاشٌ",
                "بُطُولَةٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c6/512.webp"
            },
            {
              id: "uae-g5u1l3mcquae-g5u1l3v5",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"بُطُولَةٌ\"؟", "What does \"championship\" mean?", "Apakah maksud \"kejohanan\"?", "Apa arti \"kejuaraan\"?", "Que signifie \"championnat\" ?", "¿Qué significa \"campeonato\"?"),
              arabicText: "بُطُولَةٌ",
              options: [
                "holiday / vacation",
                "history",
                "punishment",
                "championship"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c6/512.webp"
            },
            {
              id: "uae-g5u1l3spelluae-g5u1l3v8",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "تَحَمُّلٌ",
              answer: "تَحَمُّلٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f50b/512.webp"
            }
          ]
        },
        {
          id: "uae-g5u1l4",
          unitId: "uae-g5u1",
          gradeId: "uae-g5",
          order: 4,
          title: t("الْفُنُونُ", "Arts", "Seni", "Seni", "arts", "Las artes"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الْفُنُونُ تُعَبِّرُ عَنِ الْجَمَالِ وَتُنَمِّي الْإِبْدَاعَ فِي نُفُوسِنَا!", "Arts express beauty and develop creativity within us!", "Seni melahirkan keindahan dan mengembangkan kreativiti dalam diri kita!", "Seni mengungkapkan keindahan dan mengembangkan kreativitas dalam diri kita!", "Les arts expriment la beauté et développent la créativité en nous !", "¡Las artes expresan la belleza y desarrollan la creatividad en nosotros!"),
          vocabulary: [
            {
              id: "uae-g5u1l4v1",
              arabic: "رَسْمٌ",
              transliteration: "rasm",
              translation: t("رَسْمٌ", "drawing / painting", "lukisan", "menggambar", "dessin", "dibujo"),
              emoji: "🎨"
            },
            {
              id: "uae-g5u1l4v2",
              arabic: "مُوسِيقَى",
              transliteration: "mūsīqā",
              translation: t("مُوسِيقَى", "music", "muzik", "musik", "musique", "música"),
              emoji: "🎵"
            },
            {
              id: "uae-g5u1l4v3",
              arabic: "تَمْثِيلٌ",
              transliteration: "tamthīl",
              translation: t("تَمْثِيلٌ", "acting / drama", "lakonan", "akting", "théâtre", "actuación"),
              emoji: "🎭"
            },
            {
              id: "uae-g5u1l4v4",
              arabic: "نَحْتٌ",
              transliteration: "naḥt",
              translation: t("نَحْتٌ", "sculpture", "ukiran", "seni pahat", "sculpture", "escultura"),
              emoji: "🗿"
            },
            {
              id: "uae-g5u1l4v5",
              arabic: "إِبْدَاعٌ",
              transliteration: "ibdāʿ",
              translation: t("إِبْدَاعٌ", "creativity", "kreativiti", "kreativitas", "créativité", "creatividad"),
              emoji: "✨"
            },
            {
              id: "uae-g5u1l4v6",
              arabic: "لَوْحَةٌ",
              transliteration: "lawḥa",
              translation: t("لَوْحَةٌ", "painting / canvas", "lukisan kanvas", "lukisan", "tableau", "cuadro"),
              emoji: "🖼️"
            },
            {
              id: "uae-g5u1l4v7",
              arabic: "فُرْشَاةٌ",
              transliteration: "furshāh",
              translation: t("فُرْشَاةٌ", "paintbrush", "berus cat", "kuas cat", "pinceau", "pincel"),
              emoji: "🖌️"
            },
            {
              id: "uae-g5u1l4v8",
              arabic: "آلَةٌ مُوسِيقِيَّةٌ",
              transliteration: "āla mūsīqiyya",
              translation: t("آلَةٌ مُوسِيقِيَّةٌ", "musical instrument", "alat muzik", "alat musik", "instrument de musique", "instrumento musical"),
              emoji: "🎻"
            },
            {
              id: "uae-g5u1l4v9",
              arabic: "مَعْرِضٌ",
              transliteration: "maʿriḍ",
              translation: t("مَعْرِضٌ", "exhibition / gallery", "pameran", "pameran", "exposition", "exposición"),
              emoji: "🏛️"
            },
            {
              id: "uae-g5u1l4v10",
              arabic: "تَعْبِيرٌ",
              transliteration: "taʿbīr",
              translation: t("تَعْبِيرٌ", "expression", "ekspresi", "ekspresi", "expression", "expresión"),
              emoji: "💬"
            }
          ],
          dialogue: [
            {
              speaker: "مَرْيَم",
              arabic: "مَا الْفَنُّ الَّذِي تُفَضِّلُهُ يَا عُمَر؟",
              translation: t("مَا الْفَنُّ الَّذِي تُفَضِّلُهُ يَا عُمَر؟", "What art do you prefer Omar?", "Apakah seni yang kamu sukai Omar?", "Seni apa yang kamu sukai Omar?", "Quel art préfères-tu Omar ?", "¿Qué arte prefieres Omar?")
            },
            {
              speaker: "عُمَر",
              arabic: "أُحِبُّ الرَّسْمَ كَثِيرًا لِأَنَّهُ يُعَبِّرُ عَنْ مَشَاعِرِي بِإِبْدَاعٍ.",
              translation: t("أُحِبُّ الرَّسْمَ كَثِيرًا لِأَنَّهُ يُعَبِّرُ عَنْ مَشَاعِرِي بِإِبْدَاعٍ.", "I love drawing a lot because it expresses my feelings creatively.", "Saya sangat suka melukis kerana ia melahirkan perasaan saya dengan kreatif.", "Saya sangat suka menggambar karena mengungkapkan perasaan saya dengan kreatif.", "J'aime beaucoup dessiner parce que cela exprime mes sentiments de manière créative.", "Me encanta dibujar porque expresa mis sentimientos de manera creativa.")
            },
            {
              speaker: "مَرْيَم",
              arabic: "أَنَا أُفَضِّلُ الْمُوسِيقَى وَالتَّمْثِيلَ لِأَنَّهُمَا يَجْعَلَانِنِي سَعِيدَةً.",
              translation: t("أَنَا أُفَضِّلُ الْمُوسِيقَى وَالتَّمْثِيلَ لِأَنَّهُمَا يَجْعَلَانِنِي سَعِيدَةً.", "I prefer music and acting because they make me happy.", "Saya lebih suka muzik dan lakonan kerana ia membuat saya gembira.", "Saya lebih suka musik dan akting karena membuat saya senang.", "Je préfère la musique et le théâtre parce qu'ils me rendent heureuse.", "Prefiero la música y la actuación porque me hacen feliz.")
            }
          ],
          exercises: [
            {
              id: "uae-g5u1l4e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْفَنَّ الصَّحِيحَ", "Listen and choose the correct art", "Dengar dan pilih seni yang betul", "Dengarkan dan pilih seni yang benar", "Écoute et choisis le bon art", "Escucha y elige el arte correcto"),
              arabicText: "مُوسِيقَى",
              options: [
                "رَسْمٌ",
                "مُوسِيقَى",
                "نَحْتٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3b5/512.webp"
            },
            {
              id: "uae-g5u1l4e2",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا الْفَنُّ الَّذِي يَعْتَمِدُ عَلَى صُنْعِ التَّمَاثِيلِ؟", "What art relies on making statues?", "Apakah seni yang bergantung pada pembuatan patung?", "Seni apa yang bergantung pada pembuatan patung?", "Quel art repose sur la fabrication de statues ?", "¿Qué arte se basa en hacer estatuas?"),
              options: [
                "الرَّسْمُ",
                "التَّمْثِيلُ",
                "النَّحْتُ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3a8/512.webp"
            },
            {
              id: "uae-g5u1l4e3",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْفَنَّ بِرَمْزِهِ", "Match the art to its symbol", "Padankan seni dengan simbolnya", "Cocokkan seni dengan simbolnya", "Relie l'art à son symbole", "Une el arte con su símbolo"),
              pairs: [
                {
                  a: "رَسْمٌ",
                  b: "🎨"
                },
                {
                  a: "مُوسِيقَى",
                  b: "🎵"
                },
                {
                  a: "تَمْثِيلٌ",
                  b: "🎭"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3a8/512.webp"
            },
            {
              id: "uae-g5u1l4e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ عَنْ فَنِّكَ الْمُفَضَّلِ", "Write about your favourite art", "Tulis tentang seni kegemaran anda", "Tulis tentang seni favoritmu", "Écris sur ton art préféré", "Escribe sobre tu arte favorito"),
              answer: "فَنِّي الْمُفَضَّلُ هُوَ الرَّسْمُ لِأَنَّهُ يُعَبِّرُ عَنِ الْإِبْدَاعِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3a8/512.webp"
            },
            {
              id: "uae-g5u1l4e5",
              type: "mcq",
              skill: "reading",
              prompt: t("أَيْنَ نَذْهَبُ لِنُشَاهِدَ اللَّوْحَاتِ الْفَنِّيَّةَ؟", "Where do we go to see paintings?", "Ke mana kita pergi untuk melihat lukisan?", "Ke mana kita pergi untuk melihat lukisan?", "Où allons-nous pour voir des tableaux ?", "¿Adónde vamos para ver cuadros?"),
              options: [
                "الْمَطْعَمُ",
                "الْمَعْرِضُ",
                "الْمَلْعَبُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3a8/512.webp"
            },
            {
              id: "uae-g5u1l4e6",
              type: "arrange",
              skill: "writing",
              prompt: t("رَتِّبِ الْكَلِمَاتِ لِتَكْوِينِ جُمْلَةٍ", "Arrange the words to form a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "أَرْسُمُ لَوْحَةً جَمِيلَةً بِالْفُرْشَاةِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3a8/512.webp"
            },
            {
              id: "uae-g5u1l4e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("صِفِ الأَدَوَاتِ الَّتِي يَحْتَاجُهَا الرَّسَّامُ", "Describe the tools a painter needs", "Huraikan alat yang diperlukan pelukis", "Deskripsikan alat yang dibutuhkan pelukis", "Décris les outils dont le peintre a besoin", "Describe las herramientas que necesita un pintor"),
              arabicText: "يَحْتَاجُ الرَّسَّامُ إِلَى...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3a8/512.webp"
            },
            {
              id: "uae-g5u1l4e8",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Relie le mot à son sens", "Une la palabra con su significado"),
              pairs: [
                {
                  a: "لَوْحَةٌ",
                  b: "painting"
                },
                {
                  a: "مَعْرِضٌ",
                  b: "exhibition"
                },
                {
                  a: "تَعْبِيرٌ",
                  b: "expression"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3a8/512.webp"
            },
            {
              id: "uae-g5u1l4writeuae-g5u1l4v3",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"تَمْثِيلٌ\"", "Type the Arabic word for: \"acting / drama\"", "Taip perkataan Arab untuk: \"lakonan\"", "Ketik kata Arab untuk: \"akting\"", "Tape le mot arabe pour : \"théâtre\"", "Escribe la palabra árabe para: \"actuación\""),
              arabicText: "تَمْثِيلٌ",
              answer: "تَمْثِيلٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3ad/512.webp"
            },
            {
              id: "uae-g5u1l4writeuae-g5u1l4v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"رَسْمٌ\"", "Type the Arabic word for: \"drawing / painting\"", "Taip perkataan Arab untuk: \"lukisan\"", "Ketik kata Arab untuk: \"menggambar\"", "Tape le mot arabe pour : \"dessin\"", "Escribe la palabra árabe para: \"dibujo\""),
              arabicText: "رَسْمٌ",
              answer: "رَسْمٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3a8/512.webp"
            },
            {
              id: "uae-g5u1l4mcquae-g5u1l4v6",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"لَوْحَةٌ\"؟", "What does \"painting / canvas\" mean?", "Apakah maksud \"lukisan kanvas\"?", "Apa arti \"lukisan\"?", "Que signifie \"tableau\" ?", "¿Qué significa \"cuadro\"?"),
              arabicText: "لَوْحَةٌ",
              options: [
                "instinct",
                "competition",
                "painting / canvas",
                "respect"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f5bc-fe0f/512.webp"
            },
            {
              id: "uae-g5u1l4mcquae-g5u1l4v8",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"آلَةٌ مُوسِيقِيَّةٌ\"؟", "What does \"musical instrument\" mean?", "Apakah maksud \"alat muzik\"?", "Apa arti \"alat musik\"?", "Que signifie \"instrument de musique\" ?", "¿Qué significa \"instrumento musical\"?"),
              arabicText: "آلَةٌ مُوسِيقِيَّةٌ",
              options: [
                "right",
                "credibility",
                "Colosseum",
                "musical instrument"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3bb/512.webp"
            }
          ]
        },
        {
          id: "uae-g5u1l5",
          unitId: "uae-g5u1",
          gradeId: "uae-g5",
          order: 5,
          title: t("الْقِرَاءَةُ", "Reading", "Membaca", "Membaca", "La lecture", "La lectura"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الْقِرَاءَةُ نَافِذَةٌ تَفْتَحُ لَكَ آفَاقَ الْعِلْمِ وَالْمَعْرِفَةِ!", "Reading is a window that opens horizons of knowledge and learning for you!", "Membaca adalah tingkap yang membuka cakerawala ilmu dan pengetahuan untukmu!", "Membaca adalah jendela yang membuka cakrawala ilmu dan pengetahuan bagimu!", "La lecture est une fenêtre qui t'ouvre les horizons du savoir et de la connaissance !", "¡La lectura es una ventana que te abre los horizontes del conocimiento!"),
          vocabulary: [
            {
              id: "uae-g5u1l5v1",
              arabic: "كِتَابٌ",
              transliteration: "kitāb",
              translation: t("كِتَابٌ", "book", "buku", "buku", "livre", "libro"),
              emoji: "📚"
            },
            {
              id: "uae-g5u1l5v2",
              arabic: "رِوَايَةٌ",
              transliteration: "riwāya",
              translation: t("رِوَايَةٌ", "novel", "novel", "novel", "roman", "novela"),
              emoji: "📖"
            },
            {
              id: "uae-g5u1l5v3",
              arabic: "قِصَّةٌ",
              transliteration: "qiṣṣa",
              translation: t("قِصَّةٌ", "story", "cerita", "cerita", "histoire", "historia"),
              emoji: "📗"
            },
            {
              id: "uae-g5u1l5v4",
              arabic: "مَكْتَبَةٌ",
              transliteration: "maktaba",
              translation: t("مَكْتَبَةٌ", "library", "perpustakaan", "perpustakaan", "bibliothèque", "biblioteca"),
              emoji: "🏛️"
            },
            {
              id: "uae-g5u1l5v5",
              arabic: "خَيَالٌ",
              transliteration: "khayāl",
              translation: t("خَيَالٌ", "imagination", "imaginasi", "imajinasi", "imagination", "imaginación"),
              emoji: "💭"
            },
            {
              id: "uae-g5u1l5v6",
              arabic: "مُؤَلِّفٌ",
              transliteration: "muʾallif",
              translation: t("مُؤَلِّفٌ", "author", "pengarang", "pengarang", "auteur", "autor"),
              emoji: "✍️"
            },
            {
              id: "uae-g5u1l5v7",
              arabic: "فَصْلٌ",
              transliteration: "faṣl",
              translation: t("فَصْلٌ", "chapter", "bab", "bab", "chapitre", "capítulo"),
              emoji: "📄"
            },
            {
              id: "uae-g5u1l5v8",
              arabic: "شِعْرٌ",
              transliteration: "shiʿr",
              translation: t("شِعْرٌ", "poetry", "puisi", "puisi", "poésie", "poesía"),
              emoji: "📝"
            },
            {
              id: "uae-g5u1l5v9",
              arabic: "مَعْلُومَاتٌ",
              transliteration: "maʿlūmāt",
              translation: t("مَعْلُومَاتٌ", "information", "maklumat", "informasi", "informations", "información"),
              emoji: "ℹ️"
            },
            {
              id: "uae-g5u1l5v10",
              arabic: "فَهِمَ",
              transliteration: "fahima",
              translation: t("فَهِمَ", "he understood", "dia faham", "dia mengerti", "il a compris", "entendió"),
              emoji: "💡"
            }
          ],
          dialogue: [
            {
              speaker: "نُورَة",
              arabic: "هَلْ زُرْتِ الْمَكْتَبَةَ الْعَامَّةَ يَا لَيْلَى؟",
              translation: t("هَلْ زُرْتِ الْمَكْتَبَةَ الْعَامَّةَ يَا لَيْلَى؟", "Have you visited the public library Layla?", "Adakah kamu pernah pergi ke perpustakaan awam Layla?", "Apakah kamu pernah mengunjungi perpustakaan umum Layla?", "As-tu visité la bibliothèque publique Layla ?", "¿Has visitado la biblioteca pública Layla?")
            },
            {
              speaker: "لَيْلَى",
              arabic: "نَعَمْ، وَجَدْتُ فِيهَا رِوَايَاتٍ وَقِصَصًا رَائِعَةً تَمْتَلِئُ بِالْخَيَالِ!",
              translation: t("نَعَمْ، وَجَدْتُ فِيهَا رِوَايَاتٍ وَقِصَصًا رَائِعَةً تَمْتَلِئُ بِالْخَيَالِ!", "Yes, I found wonderful novels and stories full of imagination!", "Ya, saya menemui novel dan cerita yang penuh dengan imaginasi!", "Ya, saya menemukan novel dan cerita yang penuh imajinasi!", "Oui, j'y ai trouvé des romans et des histoires magnifiques pleines d'imagination !", "¡Sí, encontré novelas y cuentos maravillosos llenos de imaginación!")
            },
            {
              speaker: "نُورَة",
              arabic: "الْقِرَاءَةُ تُوَسِّعُ عَقْلَنَا وَتُطَوِّرُ لُغَتَنَا بِشَكْلٍ رَائِعٍ.",
              translation: t("الْقِرَاءَةُ تُوَسِّعُ عَقْلَنَا وَتُطَوِّرُ لُغَتَنَا بِشَكْلٍ رَائِعٍ.", "Reading broadens our mind and develops our language wonderfully.", "Membaca meluaskan fikiran kita dan mengembangkan bahasa kita dengan cara yang menakjubkan.", "Membaca memperluas pikiran kita dan mengembangkan bahasa kita dengan cara yang luar biasa.", "La lecture élargit notre esprit et développe notre langue merveilleusement.", "La lectura amplía nuestra mente y desarrolla nuestro idioma maravillosamente.")
            }
          ],
          exercises: [
            {
              id: "uae-g5u1l5e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "مَكْتَبَةٌ",
              options: [
                "كِتَابٌ",
                "مَكْتَبَةٌ",
                "رِوَايَةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3db-fe0f/512.webp"
            },
            {
              id: "uae-g5u1l5e2",
              type: "mcq",
              skill: "reading",
              prompt: t("أَيْنَ نَجِدُ كُتُبًا كَثِيرَةً لِلْقِرَاءَةِ؟", "Where do we find many books to read?", "Di mana kita boleh menemui banyak buku untuk dibaca?", "Di mana kita menemukan banyak buku untuk dibaca?", "Où trouve-t-on beaucoup de livres à lire ?", "¿Dónde encontramos muchos libros para leer?"),
              options: [
                "فِي الْمَطْعَمِ",
                "فِي الْمَكْتَبَةِ",
                "فِي الْمَلْعَبِ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp"
            },
            {
              id: "uae-g5u1l5e3",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Relie le mot à son sens", "Une la palabra con su significado"),
              pairs: [
                {
                  a: "كِتَابٌ",
                  b: "book"
                },
                {
                  a: "قِصَّةٌ",
                  b: "story"
                },
                {
                  a: "خَيَالٌ",
                  b: "imagination"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp"
            },
            {
              id: "uae-g5u1l5e4",
              type: "speaking",
              skill: "speaking",
              prompt: t("أَخْبِرْ زَمِيلَكَ عَنْ كِتَابٍ أَحْبَبْتَهُ", "Tell your classmate about a book you loved", "Beritahu rakan sekelas tentang buku yang kamu suka", "Ceritakan pada teman sekelasmu tentang buku yang kamu sukai", "Parle à ton camarade d'un livre que tu as aimé", "Cuéntale a tu compañero sobre un libro que te gustó"),
              arabicText: "قَرَأْتُ كِتَابًا رَائِعًا اسْمُهُ...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp"
            },
            {
              id: "uae-g5u1l5e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَنِ الشَّخْصُ الَّذِي يَكْتُبُ الْكُتُبَ وَالرِّوَايَاتِ؟", "Who is the person who writes books and novels?", "Siapakah orang yang menulis buku dan novel?", "Siapa orang yang menulis buku dan novel?", "Qui est la personne qui écrit des livres et des romans ?", "¿Quién es la persona que escribe libros y novelas?"),
              options: [
                "الطَّبِيبُ",
                "الْمُؤَلِّفُ",
                "الْمُهَنْدِسُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp"
            },
            {
              id: "uae-g5u1l5e6",
              type: "arrange",
              skill: "writing",
              prompt: t("رَتِّبِ الْكَلِمَاتِ لِتَكْوِينِ جُمْلَةٍ", "Arrange the words to form a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "أَقْرَأُ فَصْلًا جَدِيدًا مِنَ الرِّوَايَةِ كُلَّ يَوْمٍ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp"
            },
            {
              id: "uae-g5u1l5e7",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ عَنْ أَهَمِّيَّةِ الْقِرَاءَةِ فِي حَيَاتِنَا", "Write about the importance of reading in our lives", "Tulis tentang kepentingan membaca dalam kehidupan kita", "Tulis tentang pentingnya membaca dalam kehidupan kita", "Écris sur l'importance de la lecture dans notre vie", "Escribe sobre la importancia de la lectura en nuestra vida"),
              answer: "الْقِرَاءَةُ تُوَسِّعُ الْمَعْلُومَاتِ وَتُنَمِّي الْخَيَالَ وَتُطَوِّرُ اللُّغَةَ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp"
            },
            {
              id: "uae-g5u1l5e8",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Relie le mot à son sens", "Une la palabra con su significado"),
              pairs: [
                {
                  a: "مُؤَلِّفٌ",
                  b: "author"
                },
                {
                  a: "شِعْرٌ",
                  b: "poetry"
                },
                {
                  a: "فَصْلٌ",
                  b: "chapter"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp"
            },
            {
              id: "uae-g5u1l5arrange3",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "الْقِرَاءَةُ تُوَسِّعُ عَقْلَنَا وَتُطَوِّرُ لُغَتَنَا بِشَكْلٍ رَائِعٍ.",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp"
            },
            {
              id: "uae-g5u1l5arrange2",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "نَعَمْ، وَجَدْتُ فِيهَا رِوَايَاتٍ وَقِصَصًا رَائِعَةً تَمْتَلِئُ بِالْخَيَالِ!",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp"
            },
            {
              id: "uae-g5u1l5listenuae-g5u1l5v7",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "فَصْلٌ",
              options: [
                "صَخْرَةٌ",
                "هَاتِفٌ ذَكِيٌّ",
                "فَصْلٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4c4/512.webp"
            },
            {
              id: "uae-g5u1l5mcquae-g5u1l5v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"كِتَابٌ\"؟", "What does \"book\" mean?", "Apakah maksud \"buku\"?", "Apa arti \"buku\"?", "Que signifie \"livre\" ?", "¿Qué significa \"libro\"?"),
              arabicText: "كِتَابٌ",
              options: [
                "book",
                "museum",
                "music",
                "fruits"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp"
            }
          ]
        },
        {
          id: "uae-g5u1review",
          unitId: "uae-g5u1",
          gradeId: "uae-g5",
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
              id: "uae-g5u1l1v1",
              arabic: "كُرَةُ الْقَدَمِ",
              transliteration: "kurat al-qadam",
              translation: t("كُرَةُ الْقَدَمِ", "football", "bola sepak", "sepak bola", "football", "fútbol"),
              emoji: "⚽"
            },
            {
              id: "uae-g5u1l1v2",
              arabic: "كُرَةُ السَّلَّةِ",
              transliteration: "kurat al-salla",
              translation: t("كُرَةُ السَّلَّةِ", "basketball", "bola keranjang", "bola basket", "basket-ball", "baloncesto"),
              emoji: "🏀"
            },
            {
              id: "uae-g5u1l1v3",
              arabic: "كُرَةُ الطَّائِرَةِ",
              transliteration: "kurat al-tā'ira",
              translation: t("كُرَةُ الطَّائِرَةِ", "volleyball", "bola tampar", "bola voli", "volley-ball", "voleibol"),
              emoji: "🏐"
            },
            {
              id: "uae-g5u1l1v4",
              arabic: "مَرْمَى",
              transliteration: "marmā",
              translation: t("مَرْمَى", "goal", "gol", "gawang", "but", "portería"),
              emoji: "🥅"
            },
            {
              id: "uae-g5u1l1v5",
              arabic: "فَرِيقٌ",
              transliteration: "farīq",
              translation: t("فَرِيقٌ", "team", "pasukan", "tim", "équipe", "equipo"),
              emoji: "👥"
            },
            {
              id: "uae-g5u1l1v6",
              arabic: "مُدَرِّبٌ",
              transliteration: "mudarrib",
              translation: t("مُدَرِّبٌ", "coach / trainer", "jurulatih", "pelatih", "entraîneur", "entrenador"),
              emoji: "🧑‍🏫"
            },
            {
              id: "uae-g5u1l1v7",
              arabic: "مَلْعَبٌ",
              transliteration: "malʿab",
              translation: t("مَلْعَبٌ", "stadium / pitch", "padang", "lapangan", "stade", "estadio"),
              emoji: "🏟️"
            },
            {
              id: "uae-g5u1l1v8",
              arabic: "بَطَلٌ",
              transliteration: "baṭal",
              translation: t("بَطَلٌ", "champion / hero", "wira", "pahlawan", "champion", "campeón"),
              emoji: "🏅"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "uae-g5u1reviewspeakuae-g5u1l1v2",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "كُرَةُ السَّلَّةِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c0/512.webp"
            },
            {
              id: "uae-g5u1reviewmcquae-g5u1l1v2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"كُرَةُ السَّلَّةِ\"؟", "What does \"basketball\" mean?", "Apakah maksud \"bola keranjang\"?", "Apa arti \"bola basket\"?", "Que signifie \"basket-ball\" ?", "¿Qué significa \"baloncesto\"?"),
              arabicText: "كُرَةُ السَّلَّةِ",
              options: [
                "pigeon / dove",
                "painting / canvas",
                "video conference",
                "basketball"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c0/512.webp"
            },
            {
              id: "uae-g5u1reviewspelluae-g5u1l1v1",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "كُرَةُ الْقَدَمِ",
              answer: "كُرَةُ الْقَدَمِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp"
            },
            {
              id: "uae-g5u1reviewlistenuae-g5u1l1v3",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "كُرَةُ الطَّائِرَةِ",
              options: [
                "تَسْجِيلٌ",
                "كُرَةُ الطَّائِرَةِ",
                "مَغَارَةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d0/512.webp"
            },
            {
              id: "uae-g5u1reviewwriteuae-g5u1l1v3",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"كُرَةُ الطَّائِرَةِ\"", "Type the Arabic word for: \"volleyball\"", "Taip perkataan Arab untuk: \"bola tampar\"", "Ketik kata Arab untuk: \"bola voli\"", "Tape le mot arabe pour : \"volley-ball\"", "Escribe la palabra árabe para: \"voleibol\""),
              arabicText: "كُرَةُ الطَّائِرَةِ",
              answer: "كُرَةُ الطَّائِرَةِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d0/512.webp"
            },
            {
              id: "uae-g5u1reviewmcquae-g5u1l1v3",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"كُرَةُ الطَّائِرَةِ\"؟", "What does \"volleyball\" mean?", "Apakah maksud \"bola tampar\"?", "Apa arti \"bola voli\"?", "Que signifie \"volley-ball\" ?", "¿Qué significa \"voleibol\"?"),
              arabicText: "كُرَةُ الطَّائِرَةِ",
              options: [
                "Manama",
                "volleyball",
                "embassy",
                "food chain"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d0/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "uae-g5u2",
      gradeId: "uae-g5",
      order: 2,
      title: t("حُقُوقِي وَوَاجِبَاتِي", "Rights", "Hak", "Hak", "droits", "derechos"),
      theme: "#8B5CF6",
      lessons: [
        {
          id: "uae-g5u2l1",
          unitId: "uae-g5u2",
          gradeId: "uae-g5",
          order: 1,
          title: t("فِي مَدْرَسَتِي", "In My School", "Di Sekolah Saya", "Di Sekolah Saya", "Dans mon école", "En mi escuela"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("لِكُلِّ طَالِبٍ حُقُوقٌ وَوَاجِبَاتٌ فِي مَدْرَسَتِهِ يَجِبُ أَنْ يَلْتَزِمَ بِهَا!", "Every student has rights and duties at their school that they must commit to!", "Setiap pelajar mempunyai hak dan kewajipan di sekolah mereka yang mesti dipatuhi!", "Setiap siswa memiliki hak dan kewajiban di sekolahnya yang harus dipatuhi!", "Chaque élève a des droits et des devoirs à l'école qu'il doit respecter !", "¡Todo alumno tiene derechos y deberes en su escuela que debe cumplir!"),
          vocabulary: [
            {
              id: "uae-g5u2l1v1",
              arabic: "نِظَامٌ",
              transliteration: "niẓām",
              translation: t("نِظَامٌ", "system / order", "sistem", "sistem", "système", "sistema"),
              emoji: "📋"
            },
            {
              id: "uae-g5u2l1v2",
              arabic: "وَاجِبٌ",
              transliteration: "wājib",
              translation: t("وَاجِبٌ", "duty / homework", "kewajipan", "kewajiban", "devoir", "deber"),
              emoji: "📝"
            },
            {
              id: "uae-g5u2l1v3",
              arabic: "حَقٌّ",
              transliteration: "ḥaqq",
              translation: t("حَقٌّ", "right", "hak", "hak", "droit", "derecho"),
              emoji: "⚖️"
            },
            {
              id: "uae-g5u2l1v4",
              arabic: "الْتِزَامٌ",
              transliteration: "iltizām",
              translation: t("الْتِزَامٌ", "commitment", "komitmen", "komitmen", "engagement", "compromiso"),
              emoji: "✅"
            },
            {
              id: "uae-g5u2l1v5",
              arabic: "احْتِرَامٌ",
              transliteration: "iḥtirām",
              translation: t("احْتِرَامٌ", "respect", "hormat", "rasa hormat", "respect", "respeto"),
              emoji: "🙏"
            },
            {
              id: "uae-g5u2l1v6",
              arabic: "قَانُونٌ",
              transliteration: "qānūn",
              translation: t("قَانُونٌ", "law / rule", "undang-undang", "peraturan", "loi", "ley"),
              emoji: "📜"
            },
            {
              id: "uae-g5u2l1v7",
              arabic: "عِقَابٌ",
              transliteration: "ʿiqāb",
              translation: t("عِقَابٌ", "punishment", "hukuman", "hukuman", "punition", "castigo"),
              emoji: "❌"
            },
            {
              id: "uae-g5u2l1v8",
              arabic: "مَسَاوَاةٌ",
              transliteration: "musāwāh",
              translation: t("مَسَاوَاةٌ", "equality", "kesamaan", "kesetaraan", "égalité", "igualdad"),
              emoji: "🤝"
            },
            {
              id: "uae-g5u2l1v9",
              arabic: "حُرِّيَّةٌ",
              transliteration: "ḥurriyya",
              translation: t("حُرِّيَّةٌ", "freedom", "kebebasan", "kebebasan", "liberté", "libertad"),
              emoji: "🕊️"
            },
            {
              id: "uae-g5u2l1v10",
              arabic: "أَمَانٌ",
              transliteration: "amān",
              translation: t("أَمَانٌ", "safety / security", "keselamatan", "keamanan", "sécurité", "seguridad"),
              emoji: "🛡️"
            }
          ],
          dialogue: [
            {
              speaker: "الْمُعَلِّم",
              arabic: "مَا وَاجِبَاتُ الطَّالِبِ فِي الْمَدْرَسَةِ؟",
              translation: t("مَا وَاجِبَاتُ الطَّالِبِ فِي الْمَدْرَسَةِ؟", "What are the student's duties at school?", "Apakah kewajipan pelajar di sekolah?", "Apa kewajiban siswa di sekolah?", "Quelles sont les obligations de l'élève à l'école ?", "¿Cuáles son los deberes del alumno en la escuela?")
            },
            {
              speaker: "فَاطِمَة",
              arabic: "يَجِبُ عَلَى الطَّالِبِ احْتِرَامُ الْمُعَلِّمِينَ وَالِالْتِزَامُ بِنِظَامِ الْمَدْرَسَةِ.",
              translation: t("يَجِبُ عَلَى الطَّالِبِ احْتِرَامُ الْمُعَلِّمِينَ وَالِالْتِزَامُ بِنِظَامِ الْمَدْرَسَةِ.", "The student must respect the teachers and commit to the school system.", "Pelajar mesti menghormati guru dan mematuhi sistem sekolah.", "Siswa harus menghormati guru dan mematuhi sistem sekolah.", "L'élève doit respecter les enseignants et s'engager dans le système scolaire.", "El alumno debe respetar a los maestros y comprometerse con el sistema escolar.")
            },
            {
              speaker: "الْمُعَلِّم",
              arabic: "أَحْسَنْتِ! وَمِنْ حَقِّ الطَّالِبِ أَنْ يَتَعَلَّمَ فِي بِيئَةٍ آمِنَةٍ.",
              translation: t("أَحْسَنْتِ! وَمِنْ حَقِّ الطَّالِبِ أَنْ يَتَعَلَّمَ فِي بِيئَةٍ آمِنَةٍ.", "Well done! And the student has the right to learn in a safe environment.", "Bagus! Dan pelajar berhak belajar dalam persekitaran yang selamat.", "Bagus! Dan siswa berhak belajar di lingkungan yang aman.", "Bravo ! Et l'élève a le droit d'apprendre dans un environnement sûr.", "¡Muy bien! Y el alumno tiene derecho a aprender en un ambiente seguro.")
            }
          ],
          exercises: [
            {
              id: "uae-g5u2l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الْتِزَامٌ",
              options: [
                "نِظَامٌ",
                "الْتِزَامٌ",
                "احْتِرَامٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2705/512.webp"
            },
            {
              id: "uae-g5u2l1e2",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا مَعْنَى كَلِمَةِ حَقٌّ؟", "What is the meaning of the word right?", "Apakah maksud perkataan hak?", "Apa arti kata hak?", "Que signifie le mot droit ?", "¿Qué significa la palabra derecho?"),
              options: [
                "وَاجِبٌ",
                "نِظَامٌ",
                "حَقٌّ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4cb/512.webp"
            },
            {
              id: "uae-g5u2l1e3",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Relie le mot à son sens", "Une la palabra con su significado"),
              pairs: [
                {
                  a: "وَاجِبٌ",
                  b: "duty"
                },
                {
                  a: "حَقٌّ",
                  b: "right"
                },
                {
                  a: "احْتِرَامٌ",
                  b: "respect"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4cb/512.webp"
            },
            {
              id: "uae-g5u2l1e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ جُمْلَةً عَنْ وَاجِبَاتِكَ فِي الْمَدْرَسَةِ", "Write a sentence about your duties at school", "Tulis ayat tentang kewajipan anda di sekolah", "Tulis kalimat tentang kewajibanmu di sekolah", "Écris une phrase sur tes devoirs à l'école", "Escribe una oración sobre tus deberes en la escuela"),
              answer: "مِنْ وَاجِبَاتِي احْتِرَامُ الْمُعَلِّمِ وَإِتْمَامُ الْوَاجِبِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4cb/512.webp"
            },
            {
              id: "uae-g5u2l1e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا حَقُّ الطَّالِبِ فِي الْبِيئَةِ الْمَدْرَسِيَّةِ؟", "What is the student's right in the school environment?", "Apakah hak pelajar dalam persekitaran sekolah?", "Apa hak siswa di lingkungan sekolah?", "Quel est le droit de l'élève dans l'environnement scolaire ?", "¿Cuál es el derecho del alumno en el entorno escolar?"),
              options: [
                "الْفَوْضَى",
                "التَّعَلُّمُ فِي بِيئَةٍ آمِنَةٍ",
                "عَدَمُ الِالْتِزَامِ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4cb/512.webp"
            },
            {
              id: "uae-g5u2l1e6",
              type: "arrange",
              skill: "writing",
              prompt: t("رَتِّبِ الْكَلِمَاتِ لِتَكْوِينِ جُمْلَةٍ", "Arrange the words to form a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "مِنْ حَقِّي الْأَمَانُ وَالْمَسَاوَاةُ فِي الْمَدْرَسَةِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4cb/512.webp"
            },
            {
              id: "uae-g5u2l1e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنِ الْفَرْقِ بَيْنَ الْحُقُوقِ وَالْوَاجِبَاتِ", "Talk about the difference between rights and duties", "Bercakap tentang perbezaan antara hak dan kewajipan", "Bicarakan tentang perbedaan antara hak dan kewajiban", "Parle de la différence entre droits et devoirs", "Habla sobre la diferencia entre derechos y deberes"),
              arabicText: "الْحُقُوقُ هِيَ مَا نَحْصُلُ عَلَيْهِ، وَالْوَاجِبَاتُ هِيَ مَا نَقُومُ بِهِ...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4cb/512.webp"
            },
            {
              id: "uae-g5u2l1e8",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Relie le mot à son sens", "Une la palabra con su significado"),
              pairs: [
                {
                  a: "حُرِّيَّةٌ",
                  b: "freedom"
                },
                {
                  a: "أَمَانٌ",
                  b: "safety"
                },
                {
                  a: "مَسَاوَاةٌ",
                  b: "equality"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4cb/512.webp"
            },
            {
              id: "uae-g5u2l1writeuae-g5u2l1v6",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"قَانُونٌ\"", "Type the Arabic word for: \"law / rule\"", "Taip perkataan Arab untuk: \"undang-undang\"", "Ketik kata Arab untuk: \"peraturan\"", "Tape le mot arabe pour : \"loi\"", "Escribe la palabra árabe para: \"ley\""),
              arabicText: "قَانُونٌ",
              answer: "قَانُونٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4dc/512.webp"
            },
            {
              id: "uae-g5u2l1writeuae-g5u2l1v9",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"حُرِّيَّةٌ\"", "Type the Arabic word for: \"freedom\"", "Taip perkataan Arab untuk: \"kebebasan\"", "Ketik kata Arab untuk: \"kebebasan\"", "Tape le mot arabe pour : \"liberté\"", "Escribe la palabra árabe para: \"libertad\""),
              arabicText: "حُرِّيَّةٌ",
              answer: "حُرِّيَّةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f54a-fe0f/512.webp"
            },
            {
              id: "uae-g5u2l1listenuae-g5u2l1v7",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "عِقَابٌ",
              options: [
                "خَبَرٌ",
                "عِقَابٌ",
                "مُشَارَكَةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/274c/512.webp"
            },
            {
              id: "uae-g5u2l1writeuae-g5u2l1v10",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"أَمَانٌ\"", "Type the Arabic word for: \"safety / security\"", "Taip perkataan Arab untuk: \"keselamatan\"", "Ketik kata Arab untuk: \"keamanan\"", "Tape le mot arabe pour : \"sécurité\"", "Escribe la palabra árabe para: \"seguridad\""),
              arabicText: "أَمَانٌ",
              answer: "أَمَانٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6e1-fe0f/512.webp"
            }
          ]
        },
        {
          id: "uae-g5u2l2",
          unitId: "uae-g5u2",
          gradeId: "uae-g5",
          order: 2,
          title: t("فِي بَيْتِي", "In My Home", "Di Rumah Saya", "Di Rumah Saya", "Dans ma maison", "En mi casa"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الْبَيْتُ مَكَانٌ دَافِئٌ يَجِبُ أَنْ نَتَعَاوَنَ جَمِيعًا لِلْحِفَاظِ عَلَيْهِ!", "Home is a warm place we must all cooperate to maintain!", "Rumah adalah tempat yang hangat dan kita semua harus bekerjasama untuk menjaganya!", "Rumah adalah tempat yang hangat dan kita semua harus bekerja sama untuk menjaganya!", "La maison est un endroit chaleureux que nous devons tous coopérer pour maintenir !", "¡El hogar es un lugar cálido en el que todos debemos cooperar para mantenerlo!"),
          vocabulary: [
            {
              id: "uae-g5u2l2v1",
              arabic: "مُسَاعَدَةٌ",
              transliteration: "musāʿada",
              translation: t("مُسَاعَدَةٌ", "help / assistance", "bantuan", "bantuan", "aide", "ayuda"),
              emoji: "🤝"
            },
            {
              id: "uae-g5u2l2v2",
              arabic: "تَرْتِيبٌ",
              transliteration: "tartīb",
              translation: t("تَرْتِيبٌ", "tidying / arrangement", "kemas", "membereskan", "rangement", "ordenar"),
              emoji: "🗂️"
            },
            {
              id: "uae-g5u2l2v3",
              arabic: "مَسْؤُولِيَّةٌ",
              transliteration: "masʾūliyya",
              translation: t("مَسْؤُولِيَّةٌ", "responsibility", "tanggungjawab", "tanggung jawab", "responsabilité", "responsabilidad"),
              emoji: "💼"
            },
            {
              id: "uae-g5u2l2v4",
              arabic: "تَعَاوُنٌ",
              transliteration: "taʿāwun",
              translation: t("تَعَاوُنٌ", "cooperation", "kerjasama", "kerja sama", "coopération", "cooperación"),
              emoji: "🤜"
            },
            {
              id: "uae-g5u2l2v5",
              arabic: "مُشَارَكَةٌ",
              transliteration: "mushāraka",
              translation: t("مُشَارَكَةٌ", "participation / sharing", "penyertaan", "partisipasi", "participation", "participación"),
              emoji: "🔗"
            },
            {
              id: "uae-g5u2l2v6",
              arabic: "نَظَافَةٌ",
              transliteration: "naẓāfa",
              translation: t("نَظَافَةٌ", "cleanliness", "kebersihan", "kebersihan", "propreté", "limpieza"),
              emoji: "🧹"
            },
            {
              id: "uae-g5u2l2v7",
              arabic: "طَبَخَ",
              transliteration: "ṭabaqa",
              translation: t("طَبَخَ", "he cooked", "dia memasak", "dia memasak", "il a cuisiné", "cocinó"),
              emoji: "🍳"
            },
            {
              id: "uae-g5u2l2v8",
              arabic: "أُسْرَةٌ",
              transliteration: "usra",
              translation: t("أُسْرَةٌ", "family", "keluarga", "keluarga", "famille", "familia"),
              emoji: "👨‍👩‍👧‍👦"
            },
            {
              id: "uae-g5u2l2v9",
              arabic: "تَنْظِيفٌ",
              transliteration: "tanẓīf",
              translation: t("تَنْظِيفٌ", "cleaning", "pembersihan", "pembersihan", "nettoyage", "limpieza"),
              emoji: "🧽"
            },
            {
              id: "uae-g5u2l2v10",
              arabic: "وَاجِبَاتُ الْمَنْزِلِ",
              transliteration: "wājibāt al-manzil",
              translation: t("وَاجِبَاتُ الْمَنْزِلِ", "household chores", "kerja rumah", "pekerjaan rumah", "tâches ménagères", "quehaceres del hogar"),
              emoji: "🏠"
            }
          ],
          dialogue: [
            {
              speaker: "الْأُمّ",
              arabic: "هَيَّا يَا أَوْلَادُ، نَحْتَاجُ إِلَى تَرْتِيبِ الْبَيْتِ مَعًا.",
              translation: t("هَيَّا يَا أَوْلَادُ، نَحْتَاجُ إِلَى تَرْتِيبِ الْبَيْتِ مَعًا.", "Come on children, we need to tidy the house together.", "Ayuh anak-anak, kita perlu mengemas rumah bersama-sama.", "Ayo anak-anak, kita perlu membereskan rumah bersama.", "Allez les enfants, nous devons ranger la maison ensemble.", "Vamos niños, necesitamos ordenar la casa juntos.")
            },
            {
              speaker: "يُوسُف",
              arabic: "حَاضِرٌ يَا أُمِّي، التَّعَاوُنُ وَالْمُشَارَكَةُ مَسْؤُولِيَّةُ الْجَمِيعِ.",
              translation: t("حَاضِرٌ يَا أُمِّي، التَّعَاوُنُ وَالْمُشَارَكَةُ مَسْؤُولِيَّةُ الْجَمِيعِ.", "Ready mum, cooperation and participation are everyone's responsibility.", "Sedia ibu, kerjasama dan penyertaan adalah tanggungjawab semua orang.", "Siap ibu, kerja sama dan partisipasi adalah tanggung jawab semua orang.", "Prêt maman, la coopération et la participation sont la responsabilité de tous.", "Lista mamá, la cooperación y la participación son responsabilidad de todos.")
            },
            {
              speaker: "الْأُمّ",
              arabic: "أَحْسَنْتَ يَا يُوسُف! مُسَاعَدَتُكَ تَجْعَلُ الْبَيْتَ أَجْمَلَ وَأَنْظَفَ.",
              translation: t("أَحْسَنْتَ يَا يُوسُف! مُسَاعَدَتُكَ تَجْعَلُ الْبَيْتَ أَجْمَلَ وَأَنْظَفَ.", "Well done Yusuf! Your help makes the home more beautiful and cleaner.", "Bagus Yusuf! Bantuan kamu menjadikan rumah lebih cantik dan bersih.", "Bagus Yusuf! Bantuanmu membuat rumah lebih indah dan bersih.", "Bravo Youssef ! Ton aide rend la maison plus belle et plus propre.", "¡Muy bien Yusuf! Tu ayuda hace que el hogar sea más hermoso y limpio.")
            }
          ],
          exercises: [
            {
              id: "uae-g5u2l2e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "تَعَاوُنٌ",
              options: [
                "مُسَاعَدَةٌ",
                "تَعَاوُنٌ",
                "تَرْتِيبٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91c/512.webp"
            },
            {
              id: "uae-g5u2l2e2",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا الَّذِي يَجْعَلُ الْبَيْتَ مَرِيحًا وَجَمِيلًا؟", "What makes a home comfortable and beautiful?", "Apakah yang menjadikan rumah selesa dan cantik?", "Apa yang membuat rumah nyaman dan indah?", "Qu'est-ce qui rend la maison confortable et belle ?", "¿Qué hace que el hogar sea cómodo y hermoso?"),
              options: [
                "الْفَوْضَى",
                "التَّرْتِيبُ وَالنَّظَافَةُ",
                "الضَّوْضَاءُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "uae-g5u2l2e3",
              type: "arrange",
              skill: "writing",
              prompt: t("رَتِّبِ الْكَلِمَاتِ لِتَكْوِينِ جُمْلَةٍ", "Arrange the words to form a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "أُسَاعِدُ أُمِّي فِي تَرْتِيبِ الْبَيْتِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "uae-g5u2l2e4",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنْ مَسْؤُولِيَّاتِكَ فِي الْبَيْتِ", "Talk about your responsibilities at home", "Bercakap tentang tanggungjawab anda di rumah", "Bicarakan tentang tanggung jawabmu di rumah", "Parle de tes responsabilités à la maison", "Habla sobre tus responsabilidades en casa"),
              arabicText: "مِنْ مَسْؤُولِيَّاتِي فِي الْبَيْتِ...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "uae-g5u2l2e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا أَثَرُ التَّعَاوُنِ فِي الْأُسْرَةِ؟", "What is the effect of cooperation in the family?", "Apakah kesan kerjasama dalam keluarga?", "Apa pengaruh kerja sama dalam keluarga?", "Quel est l'effet de la coopération dans la famille ?", "¿Cuál es el efecto de la cooperación en la familia?"),
              options: [
                "يُسَبِّبُ الْخِلَافَ",
                "يُقَوِّي الرَّوَابِطَ وَيُسَعِدُ الْجَمِيعَ",
                "يُضْعِفُ الْأُسْرَةَ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "uae-g5u2l2e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Relie le mot à son sens", "Une la palabra con su significado"),
              pairs: [
                {
                  a: "نَظَافَةٌ",
                  b: "cleanliness"
                },
                {
                  a: "أُسْرَةٌ",
                  b: "family"
                },
                {
                  a: "تَنْظِيفٌ",
                  b: "cleaning"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "uae-g5u2l2e7",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ عَنْ دَوْرِكَ فِي الْحِفَاظِ عَلَى نَظَافَةِ الْبَيْتِ", "Write about your role in keeping the house clean", "Tulis tentang peranan anda dalam menjaga kebersihan rumah", "Tulis tentang peranmu dalam menjaga kebersihan rumah", "Écris sur ton rôle dans le maintien de la propreté de la maison", "Escribe sobre tu papel en mantener la limpieza del hogar"),
              answer: "أُسَاعِدُ فِي تَنْظِيفِ الْبَيْتِ وَتَرْتِيبِهِ لِأَنَّ النَّظَافَةَ مَسْؤُولِيَّةُ الْجَمِيعِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.webp"
            },
            {
              id: "uae-g5u2l2e8",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "مَسْؤُولِيَّةٌ",
              options: [
                "تَرْتِيبٌ",
                "نَظَافَةٌ",
                "مَسْؤُولِيَّةٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4bc/512.webp"
            },
            {
              id: "uae-g5u2l2writeuae-g5u2l2v7",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"طَبَخَ\"", "Type the Arabic word for: \"he cooked\"", "Taip perkataan Arab untuk: \"dia memasak\"", "Ketik kata Arab untuk: \"dia memasak\"", "Tape le mot arabe pour : \"il a cuisiné\"", "Escribe la palabra árabe para: \"cocinó\""),
              arabicText: "طَبَخَ",
              answer: "طَبَخَ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f373/512.webp"
            },
            {
              id: "uae-g5u2l2speakuae-g5u2l2v5",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "مُشَارَكَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f517/512.webp"
            },
            {
              id: "uae-g5u2l2spelluae-g5u2l2v6",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "نَظَافَةٌ",
              answer: "نَظَافَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9f9/512.webp"
            },
            {
              id: "uae-g5u2l2mcquae-g5u2l2v7",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"طَبَخَ\"؟", "What does \"he cooked\" mean?", "Apakah maksud \"dia memasak\"?", "Apa arti \"dia memasak\"?", "Que signifie \"il a cuisiné\" ?", "¿Qué significa \"cocinó\"?"),
              arabicText: "طَبَخَ",
              options: [
                "heritage",
                "fog / mist",
                "sculpture",
                "he cooked"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f373/512.webp"
            }
          ]
        },
        {
          id: "uae-g5u2l3",
          unitId: "uae-g5u2",
          gradeId: "uae-g5",
          order: 3,
          title: t("طَعَامِي", "Food", "Makanan", "Makanan", "nourriture", "comida"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الطَّعَامُ الصِّحِّيُّ يَمْنَحُنَا الطَّاقَةَ وَيَحْفَظُ صِحَّتَنَا!", "Healthy food gives us energy and preserves our health!", "Makanan sihat memberi kita tenaga dan menjaga kesihatan kita!", "Makanan sehat memberi kita energi dan menjaga kesehatan kita!", "Une alimentation saine nous donne de l'énergie et préserve notre santé !", "¡La comida saludable nos da energía y preserva nuestra salud!"),
          vocabulary: [
            {
              id: "uae-g5u2l3v1",
              arabic: "وَجْبَةٌ",
              transliteration: "wajba",
              translation: t("وَجْبَةٌ", "meal", "hidangan", "hidangan", "repas", "comida"),
              emoji: "🍽️"
            },
            {
              id: "uae-g5u2l3v2",
              arabic: "صِحِّيٌّ",
              transliteration: "ṣiḥḥī",
              translation: t("صِحِّيٌّ", "healthy", "sihat", "sehat", "sain", "saludable"),
              emoji: "🥗"
            },
            {
              id: "uae-g5u2l3v3",
              arabic: "فِيتَامِينٌ",
              transliteration: "fītāmīn",
              translation: t("فِيتَامِينٌ", "vitamin", "vitamin", "vitamin", "vitamine", "vitamina"),
              emoji: "💊"
            },
            {
              id: "uae-g5u2l3v4",
              arabic: "تَنَوُّعٌ",
              transliteration: "tanawwuʿ",
              translation: t("تَنَوُّعٌ", "variety", "kepelbagaian", "keragaman", "variété", "variedad"),
              emoji: "🌈"
            },
            {
              id: "uae-g5u2l3v5",
              arabic: "غِذَاءٌ",
              transliteration: "ghidhāʾ",
              translation: t("غِذَاءٌ", "nutrition / food", "pemakanan", "nutrisi", "nutrition", "nutrición"),
              emoji: "🥑"
            },
            {
              id: "uae-g5u2l3v6",
              arabic: "بُرُوتِينٌ",
              transliteration: "burūtīn",
              translation: t("بُرُوتِينٌ", "protein", "protein", "protein", "protéine", "proteína"),
              emoji: "🥩"
            },
            {
              id: "uae-g5u2l3v7",
              arabic: "كَرْبُوهَيْدْرَاتٌ",
              transliteration: "karbūhaydirāt",
              translation: t("كَرْبُوهَيْدْرَاتٌ", "carbohydrates", "karbohidrat", "karbohidrat", "glucides", "carbohidratos"),
              emoji: "🍞"
            },
            {
              id: "uae-g5u2l3v8",
              arabic: "هَضْمٌ",
              transliteration: "haḍm",
              translation: t("هَضْمٌ", "digestion", "penghadaman", "pencernaan", "digestion", "digestión"),
              emoji: "🫃"
            },
            {
              id: "uae-g5u2l3v9",
              arabic: "خُضَرٌ",
              transliteration: "khuḍar",
              translation: t("خُضَرٌ", "vegetables", "sayur-sayuran", "sayuran", "légumes", "verduras"),
              emoji: "🥦"
            },
            {
              id: "uae-g5u2l3v10",
              arabic: "فَوَاكِهُ",
              transliteration: "fawākih",
              translation: t("فَوَاكِهُ", "fruits", "buah-buahan", "buah-buahan", "fruits", "frutas"),
              emoji: "🍎"
            }
          ],
          dialogue: [
            {
              speaker: "الطَّبِيب",
              arabic: "هَلْ تَتَنَاوَلُ وَجَبَاتٍ صِحِّيَّةً مُتَنَوِّعَةً كُلَّ يَوْمٍ؟",
              translation: t("هَلْ تَتَنَاوَلُ وَجَبَاتٍ صِحِّيَّةً مُتَنَوِّعَةً كُلَّ يَوْمٍ؟", "Do you eat healthy and varied meals every day?", "Adakah anda makan hidangan sihat dan pelbagai setiap hari?", "Apakah kamu makan hidangan sehat dan beragam setiap hari?", "Mangez-vous des repas sains et variés chaque jour ?", "¿Come usted comidas saludables y variadas todos los días?")
            },
            {
              speaker: "وَلِيد",
              arabic: "نَعَمْ، أَتَنَاوَلُ الْخُضَرَ وَالْفَوَاكِهَ لِأَنَّهَا غَنِيَّةٌ بِالْفِيتَامِينَاتِ وَالْغِذَاءِ الصِّحِّيِّ.",
              translation: t("نَعَمْ، أَتَنَاوَلُ الْخُضَرَ وَالْفَوَاكِهَ لِأَنَّهَا غَنِيَّةٌ بِالْفِيتَامِينَاتِ وَالْغِذَاءِ الصِّحِّيِّ.", "Yes, I eat vegetables and fruits because they are rich in vitamins and healthy nutrition.", "Ya, saya makan sayur dan buah kerana kaya dengan vitamin dan pemakanan sihat.", "Ya, saya makan sayur dan buah karena kaya vitamin dan nutrisi sehat.", "Oui, je mange des légumes et des fruits car ils sont riches en vitamines et en nutrition saine.", "Sí, como verduras y frutas porque son ricas en vitaminas y nutrición saludable.")
            },
            {
              speaker: "الطَّبِيب",
              arabic: "مُمْتَازٌ! التَّنَوُّعُ فِي الطَّعَامِ مُهِمٌّ جِدًّا لِلصِّحَّةِ.",
              translation: t("مُمْتَازٌ! التَّنَوُّعُ فِي الطَّعَامِ مُهِمٌّ جِدًّا لِلصِّحَّةِ.", "Excellent! Variety in food is very important for health.", "Cemerlang! Kepelbagaian dalam makanan sangat penting untuk kesihatan.", "Luar biasa! Keragaman dalam makanan sangat penting untuk kesehatan.", "Excellent ! La variété alimentaire est très importante pour la santé.", "¡Excelente! La variedad en la comida es muy importante para la salud.")
            }
          ],
          exercises: [
            {
              id: "uae-g5u2l3e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "وَجْبَةٌ",
              options: [
                "وَجْبَةٌ",
                "فِيتَامِينٌ",
                "غِذَاءٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f37d-fe0f/512.webp"
            },
            {
              id: "uae-g5u2l3e2",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا الَّذِي يُوجَدُ بِكَثْرَةٍ فِي الْخُضَرِ وَالْفَوَاكِهِ؟", "What is found in abundance in vegetables and fruits?", "Apakah yang terdapat banyak dalam sayur dan buah?", "Apa yang banyak terdapat dalam sayur dan buah?", "Qu'est-ce qui se trouve en abondance dans les légumes et les fruits ?", "¿Qué se encuentra en abundancia en las verduras y frutas?"),
              options: [
                "الدُّهُونُ",
                "الْفِيتَامِينَاتُ",
                "السُّكَّرُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f37d-fe0f/512.webp"
            },
            {
              id: "uae-g5u2l3e3",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Relie le mot à son sens", "Une la palabra con su significado"),
              pairs: [
                {
                  a: "وَجْبَةٌ",
                  b: "meal"
                },
                {
                  a: "صِحِّيٌّ",
                  b: "healthy"
                },
                {
                  a: "غِذَاءٌ",
                  b: "nutrition"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f37d-fe0f/512.webp"
            },
            {
              id: "uae-g5u2l3e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ عَنْ وَجْبَتِكَ الْمُفَضَّلَةِ وَلِمَاذَا هِيَ صِحِّيَّةٌ", "Write about your favourite meal and why it is healthy", "Tulis tentang hidangan kegemaran anda dan mengapa ia sihat", "Tulis tentang hidangan favoritmu dan mengapa itu sehat", "Écris sur ton repas préféré et pourquoi il est sain", "Escribe sobre tu comida favorita y por qué es saludable"),
              answer: "وَجْبَتِي الْمُفَضَّلَةُ هِيَ السَّلَطَةُ لِأَنَّهَا غَنِيَّةٌ بِالْفِيتَامِينَاتِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f37d-fe0f/512.webp"
            },
            {
              id: "uae-g5u2l3e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا الْمَادَّةُ الْغِذَائِيَّةُ الَّتِي تَمْنَحُنَا الطَّاقَةَ لِلْحَرَكَةِ؟", "What nutrient gives us energy for movement?", "Apakah nutrien yang memberi kita tenaga untuk bergerak?", "Nutrisi apa yang memberi kita energi untuk bergerak?", "Quel nutriment nous donne de l'énergie pour bouger ?", "¿Qué nutriente nos da energía para movernos?"),
              options: [
                "الْبُرُوتِينُ",
                "الْكَرْبُوهَيْدْرَاتُ",
                "الْفِيتَامِينَاتُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f37d-fe0f/512.webp"
            },
            {
              id: "uae-g5u2l3e6",
              type: "arrange",
              skill: "writing",
              prompt: t("رَتِّبِ الْكَلِمَاتِ لِتَكْوِينِ جُمْلَةٍ", "Arrange the words to form a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "أَتَنَاوَلُ الْخُضَرَ وَالْفَوَاكِهَ لِلْحُصُولِ عَلَى الْفِيتَامِينَاتِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f37d-fe0f/512.webp"
            },
            {
              id: "uae-g5u2l3e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("صِفْ وَجْبَةً صِحِّيَّةً مُتَكَامِلَةً", "Describe a complete healthy meal", "Huraikan hidangan sihat yang lengkap", "Deskripsikan hidangan sehat yang lengkap", "Décris un repas sain complet", "Describe una comida saludable completa"),
              arabicText: "الْوَجْبَةُ الصِّحِّيَّةُ تَحْتَوِي عَلَى...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f37d-fe0f/512.webp"
            },
            {
              id: "uae-g5u2l3e8",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Relie le mot à son sens", "Une la palabra con su significado"),
              pairs: [
                {
                  a: "بُرُوتِينٌ",
                  b: "protein"
                },
                {
                  a: "هَضْمٌ",
                  b: "digestion"
                },
                {
                  a: "كَرْبُوهَيْدْرَاتٌ",
                  b: "carbohydrates"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f37d-fe0f/512.webp"
            },
            {
              id: "uae-g5u2l3writeuae-g5u2l3v2",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"صِحِّيٌّ\"", "Type the Arabic word for: \"healthy\"", "Taip perkataan Arab untuk: \"sihat\"", "Ketik kata Arab untuk: \"sehat\"", "Tape le mot arabe pour : \"sain\"", "Escribe la palabra árabe para: \"saludable\""),
              arabicText: "صِحِّيٌّ",
              answer: "صِحِّيٌّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f957/512.webp"
            },
            {
              id: "uae-g5u2l3speakuae-g5u2l3v2",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "صِحِّيٌّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f957/512.webp"
            },
            {
              id: "uae-g5u2l3arrange3",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "مُمْتَازٌ! التَّنَوُّعُ فِي الطَّعَامِ مُهِمٌّ جِدًّا لِلصِّحَّةِ.",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f37d-fe0f/512.webp"
            },
            {
              id: "uae-g5u2l3speakuae-g5u2l3v4",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "تَنَوُّعٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f308/512.webp"
            }
          ]
        },
        {
          id: "uae-g5u2l4",
          unitId: "uae-g5u2",
          gradeId: "uae-g5",
          order: 4,
          title: t("أَلْبِسَتِي وَمَوْضَتِي", "Style & Fashion", "Pakaian", "Pakaian", "tenue", "estilo"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("اخْتِيَارُ الْمَلَابِسِ الْمُنَاسِبَةِ يَعْكِسُ شَخْصِيَّتَنَا وَيُنَاسِبُ كُلَّ مَقَامٍ!", "Choosing appropriate clothes reflects our personality and suits every occasion!", "Memilih pakaian yang sesuai mencerminkan personaliti kita dan sesuai untuk setiap majlis!", "Memilih pakaian yang tepat mencerminkan kepribadian kita dan sesuai untuk setiap kesempatan!", "Choisir des vêtements appropriés reflète notre personnalité et convient à chaque occasion !", "¡Elegir ropa apropiada refleja nuestra personalidad y se adapta a cada ocasión!"),
          vocabulary: [
            {
              id: "uae-g5u2l4v1",
              arabic: "مُنَاسِبٌ",
              transliteration: "munāsib",
              translation: t("مُنَاسِبٌ", "appropriate / suitable", "sesuai", "sesuai", "approprié", "apropiado"),
              emoji: "👔"
            },
            {
              id: "uae-g5u2l4v2",
              arabic: "مَدْرَسِيٌّ",
              transliteration: "madrasī",
              translation: t("مَدْرَسِيٌّ", "school uniform", "seragam sekolah", "seragam sekolah", "uniforme scolaire", "uniforme escolar"),
              emoji: "🎒"
            },
            {
              id: "uae-g5u2l4v3",
              arabic: "رَسْمِيٌّ",
              transliteration: "rasmī",
              translation: t("رَسْمِيٌّ", "formal", "formal", "formal", "formel", "formal"),
              emoji: "👗"
            },
            {
              id: "uae-g5u2l4v4",
              arabic: "رِيَاضِيٌّ",
              transliteration: "riyāḍī",
              translation: t("رِيَاضِيٌّ", "sportswear", "pakaian sukan", "pakaian olahraga", "sportif", "ropa deportiva"),
              emoji: "👟"
            },
            {
              id: "uae-g5u2l4v5",
              arabic: "طَقْسٌ",
              transliteration: "ṭaqs",
              translation: t("طَقْسٌ", "weather", "cuaca", "cuaca", "temps", "clima"),
              emoji: "🌤️"
            },
            {
              id: "uae-g5u2l4v6",
              arabic: "قُمَاشٌ",
              transliteration: "qumāsh",
              translation: t("قُمَاشٌ", "fabric / cloth", "kain", "kain", "tissu", "tela"),
              emoji: "🧵"
            },
            {
              id: "uae-g5u2l4v7",
              arabic: "شَتَوِيٌّ",
              transliteration: "shatawī",
              translation: t("شَتَوِيٌّ", "winter (clothing)", "pakaian musim sejuk", "pakaian musim dingin", "hivernal", "ropa de invierno"),
              emoji: "🧥"
            },
            {
              id: "uae-g5u2l4v8",
              arabic: "صَيْفِيٌّ",
              transliteration: "ṣayfī",
              translation: t("صَيْفِيٌّ", "summer (clothing)", "pakaian musim panas", "pakaian musim panas", "estival", "ropa de verano"),
              emoji: "👒"
            },
            {
              id: "uae-g5u2l4v9",
              arabic: "أَنَاقَةٌ",
              transliteration: "anāqa",
              translation: t("أَنَاقَةٌ", "elegance", "keanggunan", "keanggunan", "élégance", "elegancia"),
              emoji: "✨"
            },
            {
              id: "uae-g5u2l4v10",
              arabic: "مُوضَةٌ",
              transliteration: "mūḍa",
              translation: t("مُوضَةٌ", "fashion / trend", "fesyen", "mode", "mode", "moda"),
              emoji: "👠"
            }
          ],
          dialogue: [
            {
              speaker: "هِنْد",
              arabic: "مَاذَا سَتَرْتَدِي فِي حَفْلَةِ الْمَدْرَسَةِ غَدًا؟",
              translation: t("مَاذَا سَتَرْتَدِي فِي حَفْلَةِ الْمَدْرَسَةِ غَدًا؟", "What will you wear to the school party tomorrow?", "Apa yang akan kamu pakai ke majlis sekolah esok?", "Apa yang akan kamu pakai ke pesta sekolah besok?", "Que vas-tu porter à la fête de l'école demain ?", "¿Qué vas a ponerte en la fiesta de la escuela mañana?")
            },
            {
              speaker: "رِيَم",
              arabic: "سَأَرْتَدِي الزِّيَّ الرَّسْمِيَّ لِأَنَّهُ مُنَاسِبٌ لِلْمُنَاسَبَاتِ الرَّسْمِيَّةِ.",
              translation: t("سَأَرْتَدِي الزِّيَّ الرَّسْمِيَّ لِأَنَّهُ مُنَاسِبٌ لِلْمُنَاسَبَاتِ الرَّسْمِيَّةِ.", "I will wear formal attire because it is suitable for formal occasions.", "Saya akan memakai pakaian rasmi kerana ia sesuai untuk majlis rasmi.", "Saya akan memakai pakaian formal karena sesuai untuk kesempatan formal.", "Je porterai une tenue formelle car elle est appropriée pour les occasions formelles.", "Llevaré ropa formal porque es apropiada para las ocasiones formales.")
            },
            {
              speaker: "هِنْد",
              arabic: "لَا تَنْسِي أَنْ تُلَائِمِي مَلَابِسَكِ مَعَ الطَّقْسِ أَيْضًا!",
              translation: t("لَا تَنْسِي أَنْ تُلَائِمِي مَلَابِسَكِ مَعَ الطَّقْسِ أَيْضًا!", "Don't forget to match your clothes with the weather too!", "Jangan lupa padankan pakaian dengan cuaca juga!", "Jangan lupa sesuaikan pakaianmu dengan cuaca juga!", "N'oublie pas d'assortir tes vêtements à la météo aussi !", "¡No olvides combinar tu ropa con el clima también!")
            }
          ],
          exercises: [
            {
              id: "uae-g5u2l4e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "رَسْمِيٌّ",
              options: [
                "مُنَاسِبٌ",
                "رَسْمِيٌّ",
                "رِيَاضِيٌّ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f457/512.webp"
            },
            {
              id: "uae-g5u2l4e2",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا الْمَلَابِسُ الْمُنَاسِبَةُ لِحِصَّةِ الرِّيَاضَةِ؟", "What clothes are suitable for PE class?", "Apakah pakaian yang sesuai untuk kelas sukan?", "Pakaian apa yang sesuai untuk kelas olahraga?", "Quels vêtements sont appropriés pour la classe de sport ?", "¿Qué ropa es apropiada para la clase de educación física?"),
              options: [
                "الزِّيُّ الرَّسْمِيُّ",
                "الزِّيُّ الرِّيَاضِيُّ",
                "الزِّيُّ الْمَدْرَسِيُّ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f454/512.webp"
            },
            {
              id: "uae-g5u2l4e3",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِرَمْزِهَا", "Match the word to its symbol", "Padankan perkataan dengan simbolnya", "Cocokkan kata dengan simbolnya", "Relie le mot à son symbole", "Une la palabra con su símbolo"),
              pairs: [
                {
                  a: "رَسْمِيٌّ",
                  b: "👗"
                },
                {
                  a: "رِيَاضِيٌّ",
                  b: "👟"
                },
                {
                  a: "طَقْسٌ",
                  b: "🌤️"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f454/512.webp"
            },
            {
              id: "uae-g5u2l4e4",
              type: "speaking",
              skill: "speaking",
              prompt: t("صِفْ مَلَابِسَكَ الْمُفَضَّلَةَ", "Describe your favourite clothes", "Huraikan pakaian kegemaran anda", "Deskripsikan pakaian favoritmu", "Décris tes vêtements préférés", "Describe tu ropa favorita"),
              arabicText: "مَلَابِسِي الْمُفَضَّلَةُ هِيَ...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f454/512.webp"
            },
            {
              id: "uae-g5u2l4e5",
              type: "mcq",
              skill: "reading",
              prompt: t("أَيُّ مَلَابِسَ نَرْتَدِي فِي فَصْلِ الشِّتَاءِ؟", "What clothes do we wear in winter?", "Pakaian apa yang kita pakai pada musim sejuk?", "Pakaian apa yang kita pakai di musim dingin?", "Quels vêtements portons-nous en hiver ?", "¿Qué ropa usamos en invierno?"),
              options: [
                "الْمَلَابِسُ الصَّيْفِيَّةُ الْخَفِيفَةُ",
                "الْمَلَابِسُ الشَّتَوِيَّةُ الدَّافِئَةُ",
                "الزِّيُّ الرِّيَاضِيُّ فَقَطْ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f454/512.webp"
            },
            {
              id: "uae-g5u2l4e6",
              type: "arrange",
              skill: "writing",
              prompt: t("رَتِّبِ الْكَلِمَاتِ لِتَكْوِينِ جُمْلَةٍ", "Arrange the words to form a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "أَخْتَارُ مَلَابِسِي حَسَبَ الطَّقْسِ وَالْمُنَاسَبَةِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f454/512.webp"
            },
            {
              id: "uae-g5u2l4e7",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ عَنِ الْفَرْقِ بَيْنَ الْمَلَابِسِ الرَّسْمِيَّةِ وَالرِّيَاضِيَّةِ", "Write about the difference between formal and sports clothes", "Tulis tentang perbezaan antara pakaian rasmi dan sukan", "Tulis tentang perbedaan antara pakaian formal dan olahraga", "Écris sur la différence entre vêtements formels et sportifs", "Escribe sobre la diferencia entre ropa formal y deportiva"),
              answer: "الزِّيُّ الرَّسْمِيُّ لِلْمُنَاسَبَاتِ الرَّسْمِيَّةِ وَالزِّيُّ الرِّيَاضِيُّ لِلتَّدْرِيبِ وَالرِّيَاضَةِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f454/512.webp"
            },
            {
              id: "uae-g5u2l4e8",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Relie le mot à son sens", "Une la palabra con su significado"),
              pairs: [
                {
                  a: "أَنَاقَةٌ",
                  b: "elegance"
                },
                {
                  a: "مُوضَةٌ",
                  b: "fashion"
                },
                {
                  a: "قُمَاشٌ",
                  b: "fabric"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f454/512.webp"
            },
            {
              id: "uae-g5u2l4mcquae-g5u2l4v9",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"أَنَاقَةٌ\"؟", "What does \"elegance\" mean?", "Apakah maksud \"keanggunan\"?", "Apa arti \"keanggunan\"?", "Que signifie \"élégance\" ?", "¿Qué significa \"elegancia\"?"),
              arabicText: "أَنَاقَةٌ",
              options: [
                "he jumped / leaped",
                "activity",
                "elegance",
                "researcher / scientist"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.webp"
            },
            {
              id: "uae-g5u2l4spelluae-g5u2l4v6",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "قُمَاشٌ",
              answer: "قُمَاشٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9f5/512.webp"
            },
            {
              id: "uae-g5u2l4writeuae-g5u2l4v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"مُنَاسِبٌ\"", "Type the Arabic word for: \"appropriate / suitable\"", "Taip perkataan Arab untuk: \"sesuai\"", "Ketik kata Arab untuk: \"sesuai\"", "Tape le mot arabe pour : \"approprié\"", "Escribe la palabra árabe para: \"apropiado\""),
              arabicText: "مُنَاسِبٌ",
              answer: "مُنَاسِبٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f454/512.webp"
            },
            {
              id: "uae-g5u2l4speakuae-g5u2l4v6",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "قُمَاشٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9f5/512.webp"
            }
          ]
        },
        {
          id: "uae-g5u2l5",
          unitId: "uae-g5u2",
          gradeId: "uae-g5",
          order: 5,
          title: t("وَقْتُ الْمَرَحِ", "Fun Time", "Waktu Berseronok", "Waktu Bermain", "Temps de plaisir", "Tiempo de diversión"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("وَقْتُ الْمَرَحِ ضَرُورِيٌّ لِلتَّعَلُّمِ وَالنُّمُوِّ الصِّحِّيِّ!", "Fun time is essential for learning and healthy growth!", "Masa berseronok adalah penting untuk pembelajaran dan pertumbuhan yang sihat!", "Waktu bermain sangat penting untuk pembelajaran dan pertumbuhan yang sehat!", "Le temps de plaisir est essentiel pour l'apprentissage et une croissance saine !", "¡El tiempo de diversión es esencial para el aprendizaje y el crecimiento saludable!"),
          vocabulary: [
            {
              id: "uae-g5u2l5v1",
              arabic: "لُعْبَةٌ",
              transliteration: "luʿba",
              translation: t("لُعْبَةٌ", "game / toy", "permainan", "permainan", "jeu", "juego"),
              emoji: "🎮"
            },
            {
              id: "uae-g5u2l5v2",
              arabic: "تَرْفِيهٌ",
              transliteration: "tarfīh",
              translation: t("تَرْفِيهٌ", "entertainment", "hiburan", "hiburan", "divertissement", "entretenimiento"),
              emoji: "🎠"
            },
            {
              id: "uae-g5u2l5v3",
              arabic: "رِحْلَةٌ",
              transliteration: "riḥla",
              translation: t("رِحْلَةٌ", "trip / excursion", "lawatan", "perjalanan", "excursion", "excursión"),
              emoji: "🧳"
            },
            {
              id: "uae-g5u2l5v4",
              arabic: "تَرَاخٍ",
              transliteration: "tarākhin",
              translation: t("تَرَاخٍ", "relaxation", "bersantai", "bersantai", "détente", "relajación"),
              emoji: "😌"
            },
            {
              id: "uae-g5u2l5v5",
              arabic: "مُتْعَةٌ",
              transliteration: "mutʿa",
              translation: t("مُتْعَةٌ", "fun / enjoyment", "keseronokan", "kesenangan", "plaisir", "diversión"),
              emoji: "🎉"
            },
            {
              id: "uae-g5u2l5v6",
              arabic: "نَشَاطٌ",
              transliteration: "nashāṭ",
              translation: t("نَشَاطٌ", "activity", "aktiviti", "aktivitas", "activité", "actividad"),
              emoji: "🤸"
            },
            {
              id: "uae-g5u2l5v7",
              arabic: "حَدِيقَةٌ",
              transliteration: "ḥadīqa",
              translation: t("حَدِيقَةٌ", "garden / park", "taman", "taman", "jardin", "jardín"),
              emoji: "🌳"
            },
            {
              id: "uae-g5u2l5v8",
              arabic: "صَدِيقٌ",
              transliteration: "ṣadīq",
              translation: t("صَدِيقٌ", "friend", "kawan", "teman", "ami", "amigo"),
              emoji: "👫"
            },
            {
              id: "uae-g5u2l5v9",
              arabic: "ضَحِكَ",
              transliteration: "ḍaḥika",
              translation: t("ضَحِكَ", "he laughed", "dia ketawa", "dia tertawa", "il a ri", "se rió"),
              emoji: "😂"
            },
            {
              id: "uae-g5u2l5v10",
              arabic: "عُطْلَةٌ",
              transliteration: "ʿuṭla",
              translation: t("عُطْلَةٌ", "holiday / vacation", "cuti", "liburan", "vacances", "vacaciones"),
              emoji: "🏖️"
            }
          ],
          dialogue: [
            {
              speaker: "عَلِي",
              arabic: "مَا الَّذِي سَتَفْعَلُهُ فِي الْعُطْلَةِ يَا سَامِي؟",
              translation: t("مَا الَّذِي سَتَفْعَلُهُ فِي الْعُطْلَةِ يَا سَامِي؟", "What will you do during the holiday Sami?", "Apa yang akan kamu lakukan semasa cuti Sami?", "Apa yang akan kamu lakukan saat liburan Sami?", "Que feras-tu pendant les vacances Sami ?", "¿Qué harás durante las vacaciones Sami?")
            },
            {
              speaker: "سَامِي",
              arabic: "سَأَذْهَبُ فِي رِحْلَةٍ مَعَ عَائِلَتِي وَسَنَلْعَبُ أَلْعَابًا كَثِيرَةً لِلتَّرْفِيهِ وَالْمُتْعَةِ.",
              translation: t("سَأَذْهَبُ فِي رِحْلَةٍ مَعَ عَائِلَتِي وَسَنَلْعَبُ أَلْعَابًا كَثِيرَةً لِلتَّرْفِيهِ وَالْمُتْعَةِ.", "I will go on a trip with my family and we will play many games for entertainment and fun.", "Saya akan pergi melancong bersama keluarga dan kami akan bermain banyak permainan untuk hiburan dan keseronokan.", "Saya akan pergi dalam perjalanan bersama keluarga dan kami akan bermain banyak permainan untuk hiburan dan kesenangan.", "Je vais partir en voyage avec ma famille et nous jouerons à beaucoup de jeux pour le divertissement et le plaisir.", "Iré de viaje con mi familia y jugaremos muchos juegos para entretenimiento y diversión.")
            },
            {
              speaker: "عَلِي",
              arabic: "رَائِعٌ! التَّرَاخِي أَحْيَانًا يَمْنَحُنَا طَاقَةً لِلْعَمَلِ مِنْ جَدِيدٍ.",
              translation: t("رَائِعٌ! التَّرَاخِي أَحْيَانًا يَمْنَحُنَا طَاقَةً لِلْعَمَلِ مِنْ جَدِيدٍ.", "Wonderful! Relaxation sometimes gives us energy to work again.", "Hebat! Bersantai kadang-kadang memberi kita tenaga untuk bekerja semula.", "Luar biasa! Bersantai kadang-kadang memberi kita energi untuk bekerja kembali.", "Magnifique ! La détente nous donne parfois de l'énergie pour travailler à nouveau.", "¡Maravilloso! La relajación a veces nos da energía para trabajar de nuevo.")
            }
          ],
          exercises: [
            {
              id: "uae-g5u2l5e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "مُتْعَةٌ",
              options: [
                "تَرْفِيهٌ",
                "رِحْلَةٌ",
                "مُتْعَةٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.webp"
            },
            {
              id: "uae-g5u2l5e2",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا الَّذِي يَمْنَحُنَا طَاقَةً لِلْعَمَلِ مِنْ جَدِيدٍ؟", "What gives us energy to work again?", "Apakah yang memberi kita tenaga untuk bekerja semula?", "Apa yang memberi kita energi untuk bekerja kembali?", "Qu'est-ce qui nous donne de l'énergie pour travailler à nouveau ?", "¿Qué nos da energía para trabajar de nuevo?"),
              options: [
                "الدِّرَاسَةُ الْمُسْتَمِرَّةُ",
                "التَّرَاخِي وَالرَّاحَةُ",
                "الطَّعَامُ فَقَطْ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3ae/512.webp"
            },
            {
              id: "uae-g5u2l5e3",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِرَمْزِهَا", "Match the word to its symbol", "Padankan perkataan dengan simbolnya", "Cocokkan kata dengan simbolnya", "Relie le mot à son symbole", "Une la palabra con su símbolo"),
              pairs: [
                {
                  a: "لُعْبَةٌ",
                  b: "🎮"
                },
                {
                  a: "رِحْلَةٌ",
                  b: "🧳"
                },
                {
                  a: "مُتْعَةٌ",
                  b: "🎉"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3ae/512.webp"
            },
            {
              id: "uae-g5u2l5e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ عَنْ نَشَاطِكَ الْمُفَضَّلِ فِي وَقْتِ الْفَرَاغِ", "Write about your favourite activity in free time", "Tulis tentang aktiviti kegemaran anda pada waktu lapang", "Tulis tentang kegiatan favoritmu di waktu luang", "Écris sur ton activité préférée pendant le temps libre", "Escribe sobre tu actividad favorita en el tiempo libre"),
              answer: "فِي وَقْتِ الْفَرَاغِ أُحِبُّ الْلَّعِبَ وَالتَّرَاخِي مَعَ الْأُسْرَةِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3ae/512.webp"
            },
            {
              id: "uae-g5u2l5e5",
              type: "mcq",
              skill: "reading",
              prompt: t("لِمَاذَا يَحْتَاجُ الطَّالِبُ إِلَى وَقْتِ الْمَرَحِ؟", "Why does the student need fun time?", "Mengapa pelajar memerlukan masa berseronok?", "Mengapa siswa membutuhkan waktu bermain?", "Pourquoi l'élève a-t-il besoin de temps de plaisir ?", "¿Por qué el alumno necesita tiempo de diversión?"),
              options: [
                "لِيَتَكَاسَلَ",
                "لِيَنْمُوَ وَيَسْتَرِيحَ وَيَتَجَدَّدَ",
                "لِيَتَجَنَّبَ الدِّرَاسَةَ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3ae/512.webp"
            },
            {
              id: "uae-g5u2l5e6",
              type: "arrange",
              skill: "writing",
              prompt: t("رَتِّبِ الْكَلِمَاتِ لِتَكْوِينِ جُمْلَةٍ", "Arrange the words to form a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "أَلْعَبُ مَعَ أَصْدِقَائِي فِي الْحَدِيقَةِ وَقْتَ الْعُطْلَةِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3ae/512.webp"
            },
            {
              id: "uae-g5u2l5e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنْ رِحْلَةٍ مَمْتِعَةٍ قُمْتَ بِهَا", "Talk about a fun trip you went on", "Bercakap tentang lawatan yang menyeronokkan yang anda lakukan", "Bicarakan tentang perjalanan menyenangkan yang kamu lakukan", "Parle d'un voyage amusant que tu as fait", "Habla sobre un viaje divertido que hiciste"),
              arabicText: "ذَهَبْتُ فِي رِحْلَةٍ رَائِعَةٍ إِلَى...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3ae/512.webp"
            },
            {
              id: "uae-g5u2l5e8",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Relie le mot à son sens", "Une la palabra con su significado"),
              pairs: [
                {
                  a: "نَشَاطٌ",
                  b: "activity"
                },
                {
                  a: "عُطْلَةٌ",
                  b: "holiday"
                },
                {
                  a: "صَدِيقٌ",
                  b: "friend"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3ae/512.webp"
            },
            {
              id: "uae-g5u2l5spelluae-g5u2l5v1",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "لُعْبَةٌ",
              answer: "لُعْبَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3ae/512.webp"
            },
            {
              id: "uae-g5u2l5listenuae-g5u2l5v9",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "ضَحِكَ",
              options: [
                "حَدِيثٌ",
                "نِظَامٌ",
                "ضَحِكَ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f602/512.webp"
            },
            {
              id: "uae-g5u2l5spelluae-g5u2l5v7",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "حَدِيقَةٌ",
              answer: "حَدِيقَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f333/512.webp"
            },
            {
              id: "uae-g5u2l5mcquae-g5u2l5v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"لُعْبَةٌ\"؟", "What does \"game / toy\" mean?", "Apakah maksud \"permainan\"?", "Apa arti \"permainan\"?", "Que signifie \"jeu\" ?", "¿Qué significa \"juego\"?"),
              arabicText: "لُعْبَةٌ",
              options: [
                "civilization",
                "carbohydrates",
                "game / toy",
                "experiment"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3ae/512.webp"
            }
          ]
        },
        {
          id: "uae-g5u2review",
          unitId: "uae-g5u2",
          gradeId: "uae-g5",
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
              id: "uae-g5u2l1v1",
              arabic: "نِظَامٌ",
              transliteration: "niẓām",
              translation: t("نِظَامٌ", "system / order", "sistem", "sistem", "système", "sistema"),
              emoji: "📋"
            },
            {
              id: "uae-g5u2l1v2",
              arabic: "وَاجِبٌ",
              transliteration: "wājib",
              translation: t("وَاجِبٌ", "duty / homework", "kewajipan", "kewajiban", "devoir", "deber"),
              emoji: "📝"
            },
            {
              id: "uae-g5u2l1v3",
              arabic: "حَقٌّ",
              transliteration: "ḥaqq",
              translation: t("حَقٌّ", "right", "hak", "hak", "droit", "derecho"),
              emoji: "⚖️"
            },
            {
              id: "uae-g5u2l1v4",
              arabic: "الْتِزَامٌ",
              transliteration: "iltizām",
              translation: t("الْتِزَامٌ", "commitment", "komitmen", "komitmen", "engagement", "compromiso"),
              emoji: "✅"
            },
            {
              id: "uae-g5u2l1v5",
              arabic: "احْتِرَامٌ",
              transliteration: "iḥtirām",
              translation: t("احْتِرَامٌ", "respect", "hormat", "rasa hormat", "respect", "respeto"),
              emoji: "🙏"
            },
            {
              id: "uae-g5u2l1v6",
              arabic: "قَانُونٌ",
              transliteration: "qānūn",
              translation: t("قَانُونٌ", "law / rule", "undang-undang", "peraturan", "loi", "ley"),
              emoji: "📜"
            },
            {
              id: "uae-g5u2l1v7",
              arabic: "عِقَابٌ",
              transliteration: "ʿiqāb",
              translation: t("عِقَابٌ", "punishment", "hukuman", "hukuman", "punition", "castigo"),
              emoji: "❌"
            },
            {
              id: "uae-g5u2l1v8",
              arabic: "مَسَاوَاةٌ",
              transliteration: "musāwāh",
              translation: t("مَسَاوَاةٌ", "equality", "kesamaan", "kesetaraan", "égalité", "igualdad"),
              emoji: "🤝"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "uae-g5u2reviewlistenuae-g5u2l1v4",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "الْتِزَامٌ",
              options: [
                "أَرْسَلَ",
                "الْتِزَامٌ",
                "مُتْعَةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2705/512.webp"
            },
            {
              id: "uae-g5u2reviewmcquae-g5u2l1v2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"وَاجِبٌ\"؟", "What does \"duty / homework\" mean?", "Apakah maksud \"kewajipan\"?", "Apa arti \"kewajiban\"?", "Que signifie \"devoir\" ?", "¿Qué significa \"deber\"?"),
              arabicText: "وَاجِبٌ",
              options: [
                "duty / homework",
                "appropriate / suitable",
                "acting / drama",
                "social media"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4dd/512.webp"
            },
            {
              id: "uae-g5u2reviewspelluae-g5u2l1v7",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "عِقَابٌ",
              answer: "عِقَابٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/274c/512.webp"
            },
            {
              id: "uae-g5u2reviewlistenuae-g5u2l1v7",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "عِقَابٌ",
              options: [
                "عِقَابٌ",
                "تِلِفِزْيُونٌ",
                "مُشَارَكَةٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/274c/512.webp"
            },
            {
              id: "uae-g5u2reviewmcquae-g5u2l1v4",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"الْتِزَامٌ\"؟", "What does \"commitment\" mean?", "Apakah maksud \"komitmen\"?", "Apa arti \"komitmen\"?", "Que signifie \"engagement\" ?", "¿Qué significa \"compromiso\"?"),
              arabicText: "الْتِزَامٌ",
              options: [
                "commitment",
                "adapted",
                "rock / boulder",
                "stadium / pitch"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2705/512.webp"
            },
            {
              id: "uae-g5u2reviewmcquae-g5u2l1v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"نِظَامٌ\"؟", "What does \"system / order\" mean?", "Apakah maksud \"sistem\"?", "Apa arti \"sistem\"?", "Que signifie \"système\" ?", "¿Qué significa \"sistema\"?"),
              arabicText: "نِظَامٌ",
              options: [
                "system / order",
                "variety",
                "credibility",
                "fog / mist"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4cb/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "uae-g5u3",
      gradeId: "uae-g5",
      order: 3,
      title: t("مُدُنٌ عَالَمِيَّةٌ", "World Cities", "Bandar Dunia", "Kota Dunia", "Villes mondiales", "Ciudades del mundo"),
      theme: "#F59E0B",
      lessons: [
        {
          id: "uae-g5u3l1",
          unitId: "uae-g5u3",
          gradeId: "uae-g5",
          order: 1,
          title: t("مُدُنٌ عَرَبِيَّةٌ", "Arab Cities", "Bandar Arab", "Kota Arab", "Villes arabes", "Ciudades árabes"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الْمُدُنُ الْعَرَبِيَّةُ تَجْمَعُ بَيْنَ التُّرَاثِ الْعَرِيقِ وَالْحَدَاثَةِ الرَّائِعَةِ!", "Arab cities combine ancient heritage with wonderful modernity!", "Bandar-bandar Arab menggabungkan warisan kuno dengan kemodenan yang menakjubkan!", "Kota-kota Arab menggabungkan warisan kuno dengan modernitas yang luar biasa!", "Les villes arabes allient patrimoine ancien et merveilleuse modernité !", "¡Las ciudades árabes combinan patrimonio antiguo con modernidad maravillosa!"),
          vocabulary: [
            {
              id: "uae-g5u3l1v1",
              arabic: "دُبَيٌّ",
              transliteration: "Dubayy",
              translation: t("دُبَيٌّ", "Dubai", "Dubai", "Dubai", "Dubaï", "Dubái"),
              emoji: "🏙️"
            },
            {
              id: "uae-g5u3l1v2",
              arabic: "الرِّيَاضُ",
              transliteration: "al-Riyāḍ",
              translation: t("الرِّيَاضُ", "Riyadh", "Riyadh", "Riyadh", "Riyad", "Riad"),
              emoji: "🏙️"
            },
            {
              id: "uae-g5u3l1v3",
              arabic: "الْقَاهِرَةُ",
              transliteration: "al-Qāhira",
              translation: t("الْقَاهِرَةُ", "Cairo", "Kaherah", "Kairo", "Le Caire", "El Cairo"),
              emoji: "🏛️"
            },
            {
              id: "uae-g5u3l1v4",
              arabic: "عَمَّانُ",
              transliteration: "ʿAmmān",
              translation: t("عَمَّانُ", "Amman", "Amman", "Amman", "Amman", "Amán"),
              emoji: "🌉"
            },
            {
              id: "uae-g5u3l1v5",
              arabic: "مَنَامَةٌ",
              transliteration: "Manāma",
              translation: t("مَنَامَةٌ", "Manama", "Manama", "Manama", "Manama", "Manama"),
              emoji: "🌆"
            },
            {
              id: "uae-g5u3l1v6",
              arabic: "عَاصِمَةٌ",
              transliteration: "ʿāṣima",
              translation: t("عَاصِمَةٌ", "capital city", "ibu kota", "ibu kota", "capitale", "capital"),
              emoji: "🏛️"
            },
            {
              id: "uae-g5u3l1v7",
              arabic: "سِيَاحَةٌ",
              transliteration: "siyāḥa",
              translation: t("سِيَاحَةٌ", "tourism", "pelancongan", "pariwisata", "tourisme", "turismo"),
              emoji: "📸"
            },
            {
              id: "uae-g5u3l1v8",
              arabic: "نَاطِحَةُ سَحَابٍ",
              transliteration: "nāṭiḥat saḥāb",
              translation: t("نَاطِحَةُ سَحَابٍ", "skyscraper", "bangunan pencakar langit", "gedung pencakar langit", "gratte-ciel", "rascacielos"),
              emoji: "🏗️"
            },
            {
              id: "uae-g5u3l1v9",
              arabic: "تُرَاثٌ",
              transliteration: "turāth",
              translation: t("تُرَاثٌ", "heritage", "warisan", "warisan", "patrimoine", "patrimonio"),
              emoji: "🏺"
            },
            {
              id: "uae-g5u3l1v10",
              arabic: "حَضَارَةٌ",
              transliteration: "ḥaḍāra",
              translation: t("حَضَارَةٌ", "civilization", "tamadun", "peradaban", "civilisation", "civilización"),
              emoji: "🌍"
            }
          ],
          dialogue: [
            {
              speaker: "تَامِر",
              arabic: "أَيُّ الْمُدُنِ الْعَرَبِيَّةِ زُرْتَ مِنْ قَبْلُ يَا نَاصِر؟",
              translation: t("أَيُّ الْمُدُنِ الْعَرَبِيَّةِ زُرْتَ مِنْ قَبْلُ يَا نَاصِر؟", "Which Arab cities have you visited before Nasser?", "Bandar Arab mana yang pernah kamu lawati Nasser?", "Kota Arab mana yang pernah kamu kunjungi Nasser?", "Quelles villes arabes as-tu visitées auparavant Nasser ?", "¿Qué ciudades árabes has visitado antes Nasser?")
            },
            {
              speaker: "نَاصِر",
              arabic: "زُرْتُ دُبَيٌّ وَالْقَاهِرَةَ، وَكَانَتَا رَائِعَتَيْنِ وَمُثِيرَتَيْنِ.",
              translation: t("زُرْتُ دُبَيٌّ وَالْقَاهِرَةَ، وَكَانَتَا رَائِعَتَيْنِ وَمُثِيرَتَيْنِ.", "I visited Dubai and Cairo, and they were wonderful and exciting.", "Saya melawat Dubai dan Kaherah, dan keduanya sangat menakjubkan dan menarik.", "Saya mengunjungi Dubai dan Kairo, dan keduanya luar biasa dan menarik.", "J'ai visité Dubaï et Le Caire, et elles étaient toutes les deux magnifiques et excitantes.", "Visité Dubái y El Cairo, y fueron maravillosas y emocionantes.")
            },
            {
              speaker: "تَامِر",
              arabic: "أَتَمَنَّى أَنْ أَزُورَ عَمَّانَ وَمَنَامَةَ فِي الْمُسْتَقْبَلِ!",
              translation: t("أَتَمَنَّى أَنْ أَزُورَ عَمَّانَ وَمَنَامَةَ فِي الْمُسْتَقْبَلِ!", "I hope to visit Amman and Manama in the future!", "Saya berharap dapat melawat Amman dan Manama pada masa hadapan!", "Saya berharap bisa mengunjungi Amman dan Manama di masa depan!", "J'espère visiter Amman et Manama à l'avenir !", "¡Espero visitar Amán y Manama en el futuro!")
            }
          ],
          exercises: [
            {
              id: "uae-g5u3l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْمَدِينَةَ الصَّحِيحَةَ", "Listen and choose the correct city", "Dengar dan pilih bandar yang betul", "Dengarkan dan pilih kota yang benar", "Écoute et choisis la bonne ville", "Escucha y elige la ciudad correcta"),
              arabicText: "دُبَيٌّ",
              options: [
                "الرِّيَاضُ",
                "دُبَيٌّ",
                "الْقَاهِرَةُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d9-fe0f/512.webp"
            },
            {
              id: "uae-g5u3l1e2",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا عَاصِمَةُ مِصْرَ؟", "What is the capital of Egypt?", "Apakah ibu kota Mesir?", "Apa ibu kota Mesir?", "Quelle est la capitale de l'Égypte ?", "¿Cuál es la capital de Egipto?"),
              options: [
                "عَمَّانُ",
                "الْقَاهِرَةُ",
                "مَنَامَةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d9-fe0f/512.webp"
            },
            {
              id: "uae-g5u3l1e3",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْمَدِينَةَ بِرَمْزِهَا", "Match the city to its symbol", "Padankan bandar dengan simbolnya", "Cocokkan kota dengan simbolnya", "Relie la ville à son symbole", "Une la ciudad con su símbolo"),
              pairs: [
                {
                  a: "دُبَيٌّ",
                  b: "🏙️"
                },
                {
                  a: "الْقَاهِرَةُ",
                  b: "🏛️"
                },
                {
                  a: "عَمَّانُ",
                  b: "🌉"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d9-fe0f/512.webp"
            },
            {
              id: "uae-g5u3l1e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ عَنْ مَدِينَةٍ عَرَبِيَّةٍ تُحِبُّهَا", "Write about an Arab city you love", "Tulis tentang bandar Arab yang anda sukai", "Tulis tentang kota Arab yang kamu sukai", "Écris sur une ville arabe que tu aimes", "Escribe sobre una ciudad árabe que te guste"),
              answer: "أُحِبُّ مَدِينَةَ دُبَيٍّ لِأَنَّهَا مَدِينَةٌ حَدِيثَةٌ وَجَمِيلَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d9-fe0f/512.webp"
            },
            {
              id: "uae-g5u3l1e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَاذَا تَجْمَعُ الْمُدُنُ الْعَرَبِيَّةُ؟", "What do Arab cities combine?", "Apakah yang digabungkan oleh bandar-bandar Arab?", "Apa yang digabungkan oleh kota-kota Arab?", "Que combinent les villes arabes ?", "¿Qué combinan las ciudades árabes?"),
              options: [
                "الْفَوْضَى فَقَطْ",
                "التُّرَاثَ الْعَرِيقَ وَالْحَدَاثَةَ",
                "الطَّبِيعَةَ فَقَطْ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d9-fe0f/512.webp"
            },
            {
              id: "uae-g5u3l1e6",
              type: "arrange",
              skill: "writing",
              prompt: t("رَتِّبِ الْكَلِمَاتِ لِتَكْوِينِ جُمْلَةٍ", "Arrange the words to form a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "دُبَيٌّ مَدِينَةٌ عَرَبِيَّةٌ مَشْهُورَةٌ بِنَاطِحَاتِ سَحَابِهَا",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d9-fe0f/512.webp"
            },
            {
              id: "uae-g5u3l1e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("قَارِنْ بَيْنَ مَدِينَتَيْنِ عَرَبِيَّتَيْنِ", "Compare two Arab cities", "Bandingkan dua bandar Arab", "Bandingkan dua kota Arab", "Compare deux villes arabes", "Compara dos ciudades árabes"),
              arabicText: "الْقَاهِرَةُ وَدُبَيٌّ كِلْتَاهُمَا مَدِينَتَانِ رَائِعَتَانِ لَكِنَّهُمَا...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d9-fe0f/512.webp"
            },
            {
              id: "uae-g5u3l1e8",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Relie le mot à son sens", "Une la palabra con su significado"),
              pairs: [
                {
                  a: "عَاصِمَةٌ",
                  b: "capital city"
                },
                {
                  a: "سِيَاحَةٌ",
                  b: "tourism"
                },
                {
                  a: "حَضَارَةٌ",
                  b: "civilization"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d9-fe0f/512.webp"
            },
            {
              id: "uae-g5u3l1mcquae-g5u3l1v3",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"الْقَاهِرَةُ\"؟", "What does \"Cairo\" mean?", "Apakah maksud \"Kaherah\"?", "Apa arti \"Kairo\"?", "Que signifie \"Le Caire\" ?", "¿Qué significa \"El Cairo\"?"),
              arabicText: "الْقَاهِرَةُ",
              options: [
                "Cairo",
                "variety",
                "skyscraper",
                "sportswear"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3db-fe0f/512.webp"
            },
            {
              id: "uae-g5u3l1writeuae-g5u3l1v10",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"حَضَارَةٌ\"", "Type the Arabic word for: \"civilization\"", "Taip perkataan Arab untuk: \"tamadun\"", "Ketik kata Arab untuk: \"peradaban\"", "Tape le mot arabe pour : \"civilisation\"", "Escribe la palabra árabe para: \"civilización\""),
              arabicText: "حَضَارَةٌ",
              answer: "حَضَارَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f30d/512.webp"
            },
            {
              id: "uae-g5u3l1mcquae-g5u3l1v1",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"دُبَيٌّ\"؟", "What does \"Dubai\" mean?", "Apakah maksud \"Dubai\"?", "Apa arti \"Dubai\"?", "Que signifie \"Dubaï\" ?", "¿Qué significa \"Dubái\"?"),
              arabicText: "دُبَيٌّ",
              options: [
                "news",
                "reliable / trustworthy",
                "Dubai",
                "future"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d9-fe0f/512.webp"
            },
            {
              id: "uae-g5u3l1spelluae-g5u3l1v5",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "مَنَامَةٌ",
              answer: "مَنَامَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f306/512.webp"
            }
          ]
        },
        {
          id: "uae-g5u3l2",
          unitId: "uae-g5u3",
          gradeId: "uae-g5",
          order: 2,
          title: t("لَنْدَنُ", "London", "London", "London", "Londres", "Londres"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("لَنْدَنُ مَدِينَةٌ عَالَمِيَّةٌ تَجْمَعُ الثَّقَافَاتِ مِنْ جَمِيعِ أَنْحَاءِ الْعَالَمِ!", "London is a world city that brings together cultures from all over the world!", "London adalah bandar dunia yang menyatukan budaya dari seluruh dunia!", "London adalah kota dunia yang menyatukan budaya dari seluruh dunia!", "Londres est une ville mondiale qui rassemble les cultures du monde entier !", "¡Londres es una ciudad mundial que reúne culturas de todo el mundo!"),
          vocabulary: [
            {
              id: "uae-g5u3l2v1",
              arabic: "بِگْ بِنْ",
              transliteration: "Big Ben",
              translation: t("بِگْ بِنْ", "Big Ben", "Big Ben", "Big Ben", "Big Ben", "Big Ben"),
              emoji: "⏰"
            },
            {
              id: "uae-g5u3l2v2",
              arabic: "مِتْرُو",
              transliteration: "mitrū",
              translation: t("مِتْرُو", "metro / underground", "metro", "metro", "métro", "metro"),
              emoji: "🚇"
            },
            {
              id: "uae-g5u3l2v3",
              arabic: "مُتْحَفٌ",
              transliteration: "mutḥaf",
              translation: t("مُتْحَفٌ", "museum", "muzium", "museum", "musée", "museo"),
              emoji: "🏛️"
            },
            {
              id: "uae-g5u3l2v4",
              arabic: "حَافِلَةٌ",
              transliteration: "ḥāfila",
              translation: t("حَافِلَةٌ", "bus", "bas", "bus", "bus", "autobús"),
              emoji: "🚌"
            },
            {
              id: "uae-g5u3l2v5",
              arabic: "ضَبَابٌ",
              transliteration: "ḍabāb",
              translation: t("ضَبَابٌ", "fog / mist", "kabus", "kabut", "brouillard", "niebla"),
              emoji: "🌫️"
            },
            {
              id: "uae-g5u3l2v6",
              arabic: "مَمْلَكَةٌ",
              transliteration: "mamlaka",
              translation: t("مَمْلَكَةٌ", "kingdom", "kerajaan", "kerajaan", "royaume", "reino"),
              emoji: "👑"
            },
            {
              id: "uae-g5u3l2v7",
              arabic: "جِسْرٌ",
              transliteration: "jisr",
              translation: t("جِسْرٌ", "bridge", "jambatan", "jembatan", "pont", "puente"),
              emoji: "🌉"
            },
            {
              id: "uae-g5u3l2v8",
              arabic: "حَدِيقَةٌ مَلَكِيَّةٌ",
              transliteration: "ḥadīqa malakiyya",
              translation: t("حَدِيقَةٌ مَلَكِيَّةٌ", "royal park", "taman diraja", "taman kerajaan", "parc royal", "parque real"),
              emoji: "🌿"
            },
            {
              id: "uae-g5u3l2v9",
              arabic: "نَهْرٌ",
              transliteration: "nahr",
              translation: t("نَهْرٌ", "river", "sungai", "sungai", "rivière", "río"),
              emoji: "🌊"
            },
            {
              id: "uae-g5u3l2v10",
              arabic: "سَفَارَةٌ",
              transliteration: "safāra",
              translation: t("سَفَارَةٌ", "embassy", "kedutaan", "kedutaan", "ambassade", "embajada"),
              emoji: "🏢"
            }
          ],
          dialogue: [
            {
              speaker: "سَائِح",
              arabic: "كَيْفَ أَصِلُ إِلَى مُتْحَفِ الْبِرِيطَانِيِّ مِنْ هُنَا؟",
              translation: t("كَيْفَ أَصِلُ إِلَى مُتْحَفِ الْبِرِيطَانِيِّ مِنْ هُنَا؟", "How do I get to the British Museum from here?", "Bagaimana saya sampai ke Muzium British dari sini?", "Bagaimana cara saya menuju Museum Inggris dari sini?", "Comment puis-je me rendre au British Museum d'ici ?", "¿Cómo llego al Museo Británico desde aquí?")
            },
            {
              speaker: "مُوَاطِن",
              arabic: "يُمْكِنُكَ رُكُوبُ الْحَافِلَةِ أَوِ الْمِتْرُو، وَهُمَا أَسْهَلُ وَسِيلَتَيْنِ فِي لَنْدَنَ.",
              translation: t("يُمْكِنُكَ رُكُوبُ الْحَافِلَةِ أَوِ الْمِتْرُو، وَهُمَا أَسْهَلُ وَسِيلَتَيْنِ فِي لَنْدَنَ.", "You can take the bus or metro, they are the easiest means in London.", "Anda boleh naik bas atau metro, keduanya adalah cara paling mudah di London.", "Kamu bisa naik bus atau metro, keduanya adalah sarana termudah di London.", "Vous pouvez prendre le bus ou le métro, ce sont les moyens les plus faciles à Londres.", "Puedes tomar el autobús o el metro, son los medios más fáciles en Londres.")
            },
            {
              speaker: "سَائِح",
              arabic: "شُكْرًا! هَلِ الضَّبَابُ شَدِيدٌ هَذِهِ الْأَيَّامَ؟",
              translation: t("شُكْرًا! هَلِ الضَّبَابُ شَدِيدٌ هَذِهِ الْأَيَّامَ؟", "Thank you! Is the fog heavy these days?", "Terima kasih! Adakah kabus tebal hari-hari ini?", "Terima kasih! Apakah kabut tebal hari-hari ini?", "Merci ! Le brouillard est-il dense ces jours-ci ?", "¡Gracias! ¿La niebla es intensa estos días?")
            }
          ],
          exercises: [
            {
              id: "uae-g5u3l2e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "مُتْحَفٌ",
              options: [
                "مِتْرُو",
                "مُتْحَفٌ",
                "حَافِلَةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3db-fe0f/512.webp"
            },
            {
              id: "uae-g5u3l2e2",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا الْبُرْجُ الشَّهِيرُ فِي لَنْدَنَ؟", "What is the famous tower in London?", "Apakah menara terkenal di London?", "Apa menara terkenal di London?", "Quelle est la tour célèbre de Londres ?", "¿Cuál es la famosa torre de Londres?"),
              options: [
                "بُرْجُ إِيفِلَ",
                "بِگْ بِنْ",
                "بُرْجُ خَلِيفَةَ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/23f0/512.webp"
            },
            {
              id: "uae-g5u3l2e3",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Relie le mot à son sens", "Une la palabra con su significado"),
              pairs: [
                {
                  a: "مِتْرُو",
                  b: "🚇"
                },
                {
                  a: "حَافِلَةٌ",
                  b: "🚌"
                },
                {
                  a: "ضَبَابٌ",
                  b: "🌫️"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/23f0/512.webp"
            },
            {
              id: "uae-g5u3l2e4",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنْ مَعَالِمِ لَنْدَنَ", "Talk about London landmarks", "Bercakap tentang tarikan London", "Bicarakan tentang landmark London", "Parle des sites de Londres", "Habla sobre los lugares de interés de Londres"),
              arabicText: "فِي لَنْدَنَ يُوجَدُ...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/23f0/512.webp"
            },
            {
              id: "uae-g5u3l2e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا وَسِيلَةُ النَّقْلِ الَّتِي تَسِيرُ تَحْتَ الأَرْضِ فِي لَنْدَنَ؟", "What means of transport runs underground in London?", "Apakah pengangkutan yang bergerak di bawah tanah di London?", "Apa sarana transportasi yang berjalan di bawah tanah di London?", "Quel moyen de transport circule sous terre à Londres ?", "¿Qué medio de transporte circula bajo tierra en Londres?"),
              options: [
                "الْحَافِلَةُ",
                "الْمِتْرُو",
                "السَّيَّارَةُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/23f0/512.webp"
            },
            {
              id: "uae-g5u3l2e6",
              type: "arrange",
              skill: "writing",
              prompt: t("رَتِّبِ الْكَلِمَاتِ لِتَكْوِينِ جُمْلَةٍ", "Arrange the words to form a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "لَنْدَنُ مَدِينَةٌ عَالَمِيَّةٌ مَشْهُورَةٌ بِالضَّبَابِ وَالتَّارِيخِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/23f0/512.webp"
            },
            {
              id: "uae-g5u3l2e7",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ فَقْرَةً قَصِيرَةً عَنْ لَنْدَنَ", "Write a short paragraph about London", "Tulis perenggan pendek tentang London", "Tulis paragraf singkat tentang London", "Écris un court paragraphe sur Londres", "Escribe un párrafo corto sobre Londres"),
              answer: "لَنْدَنُ عَاصِمَةُ الْمَمْلَكَةِ الْمُتَّحِدَةِ وَفِيهَا مُتَاحِفُ وَجُسُورٌ وَمَعَالِمُ تَارِيخِيَّةٌ رَائِعَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/23f0/512.webp"
            },
            {
              id: "uae-g5u3l2e8",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Relie le mot à son sens", "Une la palabra con su significado"),
              pairs: [
                {
                  a: "جِسْرٌ",
                  b: "bridge"
                },
                {
                  a: "نَهْرٌ",
                  b: "river"
                },
                {
                  a: "مَمْلَكَةٌ",
                  b: "kingdom"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/23f0/512.webp"
            },
            {
              id: "uae-g5u3l2speakuae-g5u3l2v1",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "بِگْ بِنْ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/23f0/512.webp"
            },
            {
              id: "uae-g5u3l2writeuae-g5u3l2v6",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"مَمْلَكَةٌ\"", "Type the Arabic word for: \"kingdom\"", "Taip perkataan Arab untuk: \"kerajaan\"", "Ketik kata Arab untuk: \"kerajaan\"", "Tape le mot arabe pour : \"royaume\"", "Escribe la palabra árabe para: \"reino\""),
              arabicText: "مَمْلَكَةٌ",
              answer: "مَمْلَكَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f451/512.webp"
            },
            {
              id: "uae-g5u3l2listenuae-g5u3l2v2",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "مِتْرُو",
              options: [
                "حُرِّيَّةٌ",
                "سِلْسِلَةٌ غِذَائِيَّةٌ",
                "مِتْرُو"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f687/512.webp"
            },
            {
              id: "uae-g5u3l2writeuae-g5u3l2v7",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"جِسْرٌ\"", "Type the Arabic word for: \"bridge\"", "Taip perkataan Arab untuk: \"jambatan\"", "Ketik kata Arab untuk: \"jembatan\"", "Tape le mot arabe pour : \"pont\"", "Escribe la palabra árabe para: \"puente\""),
              arabicText: "جِسْرٌ",
              answer: "جِسْرٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f309/512.webp"
            }
          ]
        },
        {
          id: "uae-g5u3l3",
          unitId: "uae-g5u3",
          gradeId: "uae-g5",
          order: 3,
          title: t("شَنْغَهَايُ", "Shanghai", "Shanghai", "Shanghai", "Shanghai", "Shanghái"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("شَنْغَهَايُ مَدِينَةٌ صِينِيَّةٌ عَمْلَاقَةٌ تَجْمَعُ بَيْنَ التَّارِيخِ وَالتِّكْنُولُوجِيَا!", "Shanghai is a giant Chinese city that combines history and technology!", "Shanghai adalah bandar Cina yang besar yang menggabungkan sejarah dan teknologi!", "Shanghai adalah kota Cina yang besar yang menggabungkan sejarah dan teknologi!", "Shanghai est une gigantesque ville chinoise qui allie histoire et technologie !", "¡Shanghái es una enorme ciudad china que combina historia y tecnología!"),
          vocabulary: [
            {
              id: "uae-g5u3l3v1",
              arabic: "بُرْجٌ",
              transliteration: "burj",
              translation: t("بُرْجٌ", "tower", "menara", "menara", "tour", "torre"),
              emoji: "🗼"
            },
            {
              id: "uae-g5u3l3v2",
              arabic: "صِينٌ",
              transliteration: "Ṣīn",
              translation: t("صِينٌ", "China", "China", "Cina", "Chine", "China"),
              emoji: "🇨🇳"
            },
            {
              id: "uae-g5u3l3v3",
              arabic: "مَطْعَمٌ",
              transliteration: "maṭʿam",
              translation: t("مَطْعَمٌ", "restaurant", "restoran", "restoran", "restaurant", "restaurante"),
              emoji: "🍜"
            },
            {
              id: "uae-g5u3l3v4",
              arabic: "مِيْنَاءٌ",
              transliteration: "mīnāʾ",
              translation: t("مِيْنَاءٌ", "port / harbour", "pelabuhan", "pelabuhan", "port", "puerto"),
              emoji: "⚓"
            },
            {
              id: "uae-g5u3l3v5",
              arabic: "تِكْنُولُوجِيَا",
              transliteration: "tiknūlūjiyā",
              translation: t("تِكْنُولُوجِيَا", "technology", "teknologi", "teknologi", "technologie", "tecnología"),
              emoji: "💻"
            },
            {
              id: "uae-g5u3l3v6",
              arabic: "تِجَارَةٌ",
              transliteration: "tijāra",
              translation: t("تِجَارَةٌ", "trade / commerce", "perdagangan", "perdagangan", "commerce", "comercio"),
              emoji: "🛒"
            },
            {
              id: "uae-g5u3l3v7",
              arabic: "شَارِعٌ",
              transliteration: "shāriʿ",
              translation: t("شَارِعٌ", "street / avenue", "jalan", "jalan", "rue", "calle"),
              emoji: "🛣️"
            },
            {
              id: "uae-g5u3l3v8",
              arabic: "سَكَّانٌ",
              transliteration: "sukkān",
              translation: t("سَكَّانٌ", "residents / population", "penduduk", "penduduk", "habitants", "habitantes"),
              emoji: "👨‍👩‍👧‍👦"
            },
            {
              id: "uae-g5u3l3v9",
              arabic: "حَدِيثٌ",
              transliteration: "ḥadīth",
              translation: t("حَدِيثٌ", "modern / contemporary", "moden", "modern", "moderne", "moderno"),
              emoji: "🆕"
            },
            {
              id: "uae-g5u3l3v10",
              arabic: "اقْتِصَادٌ",
              transliteration: "iqtiṣād",
              translation: t("اقْتِصَادٌ", "economy", "ekonomi", "ekonomi", "économie", "economía"),
              emoji: "📈"
            }
          ],
          dialogue: [
            {
              speaker: "أُسْتَاذ",
              arabic: "هَلْ تَعْرِفُ مَدِينَةَ شَنْغَهَايَ يَا طَالِب؟",
              translation: t("هَلْ تَعْرِفُ مَدِينَةَ شَنْغَهَايَ يَا طَالِب؟", "Do you know the city of Shanghai student?", "Adakah kamu mengenal bandar Shanghai pelajar?", "Apakah kamu mengenal kota Shanghai siswa?", "Connais-tu la ville de Shanghai étudiant ?", "¿Conoces la ciudad de Shanghái estudiante?")
            },
            {
              speaker: "طَالِب",
              arabic: "نَعَمْ، شَنْغَهَايُ مَشْهُورَةٌ بِأَبْرَاجِهَا الشَّاهِقَةِ وَتِكْنُولُوجِيَاهَا الْمُتَقَدِّمَةِ.",
              translation: t("نَعَمْ، شَنْغَهَايُ مَشْهُورَةٌ بِأَبْرَاجِهَا الشَّاهِقَةِ وَتِكْنُولُوجِيَاهَا الْمُتَقَدِّمَةِ.", "Yes, Shanghai is famous for its skyscrapers and advanced technology.", "Ya, Shanghai terkenal dengan menaranya yang tinggi dan teknologi maju.", "Ya, Shanghai terkenal dengan menara-menaranya yang tinggi dan teknologinya yang maju.", "Oui, Shanghai est connue pour ses gratte-ciel et sa technologie avancée.", "Sí, Shanghái es famosa por sus rascacielos y su tecnología avanzada.")
            },
            {
              speaker: "أُسْتَاذ",
              arabic: "صَحِيحٌ! وَمِيْنَاؤُهَا مِنَ الْأَكْثَرِ نَشَاطًا فِي الْعَالَمِ.",
              translation: t("صَحِيحٌ! وَمِيْنَاؤُهَا مِنَ الْأَكْثَرِ نَشَاطًا فِي الْعَالَمِ.", "Correct! And its port is one of the most active in the world.", "Betul! Dan pelabuhannya adalah antara yang paling aktif di dunia.", "Benar! Dan pelabuhannya adalah salah satu yang paling aktif di dunia.", "Exact ! Et son port est l'un des plus actifs au monde.", "¡Correcto! Y su puerto es uno de los más activos del mundo.")
            }
          ],
          exercises: [
            {
              id: "uae-g5u3l3e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "مِيْنَاءٌ",
              options: [
                "بُرْجٌ",
                "مَطْعَمٌ",
                "مِيْنَاءٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2693/512.webp"
            },
            {
              id: "uae-g5u3l3e2",
              type: "mcq",
              skill: "reading",
              prompt: t("فِي أَيِّ دَوْلَةٍ تَقَعُ شَنْغَهَايُ؟", "In which country is Shanghai located?", "Di negara mana Shanghai terletak?", "Di negara mana Shanghai berada?", "Dans quel pays se trouve Shanghai ?", "¿En qué país se encuentra Shanghái?"),
              options: [
                "الْيَابَانُ",
                "كُورِيَا",
                "الصِّينُ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f5fc/512.webp"
            },
            {
              id: "uae-g5u3l3e3",
              type: "arrange",
              skill: "writing",
              prompt: t("رَتِّبِ الْكَلِمَاتِ لِتَكْوِينِ جُمْلَةٍ", "Arrange the words to form a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "شَنْغَهَايُ مَدِينَةٌ مَشْهُورَةٌ فِي الصِّينِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f5fc/512.webp"
            },
            {
              id: "uae-g5u3l3e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ فَقْرَةً قَصِيرَةً عَنْ شَنْغَهَايَ", "Write a short paragraph about Shanghai", "Tulis perenggan pendek tentang Shanghai", "Tulis paragraf singkat tentang Shanghai", "Écris un court paragraphe sur Shanghai", "Escribe un párrafo corto sobre Shanghái"),
              answer: "شَنْغَهَايُ مَدِينَةٌ صِينِيَّةٌ كَبِيرَةٌ مَشْهُورَةٌ بِأَبْرَاجِهَا وَتِكْنُولُوجِيَاهَا وَمِيْنَائِهَا",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4bb/512.webp"
            },
            {
              id: "uae-g5u3l3e5",
              type: "mcq",
              skill: "reading",
              prompt: t("لِمَاذَا يُعَدُّ مِيْنَاءُ شَنْغَهَايَ مُهِمًّا؟", "Why is Shanghai's port considered important?", "Mengapa pelabuhan Shanghai dianggap penting?", "Mengapa pelabuhan Shanghai dianggap penting?", "Pourquoi le port de Shanghai est-il considéré important ?", "¿Por qué se considera importante el puerto de Shanghái?"),
              options: [
                "لِأَنَّهُ صَغِيرٌ",
                "لِأَنَّهُ مِنَ الأَكْثَرِ نَشَاطًا فِي الْعَالَمِ",
                "لِأَنَّهُ مَغْلُوقٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f5fc/512.webp"
            },
            {
              id: "uae-g5u3l3e6",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Relie le mot à son sens", "Une la palabra con su significado"),
              pairs: [
                {
                  a: "تِجَارَةٌ",
                  b: "trade"
                },
                {
                  a: "سَكَّانٌ",
                  b: "residents"
                },
                {
                  a: "اقْتِصَادٌ",
                  b: "economy"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f5fc/512.webp"
            },
            {
              id: "uae-g5u3l3e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("قَارِنْ بَيْنَ لَنْدَنَ وَشَنْغَهَايَ", "Compare London and Shanghai", "Bandingkan London dan Shanghai", "Bandingkan London dan Shanghai", "Compare Londres et Shanghai", "Compara Londres y Shanghái"),
              arabicText: "لَنْدَنُ وَشَنْغَهَايُ كِلْتَاهُمَا مَدِينَتَانِ عَالَمِيَّتَانِ لَكِنَّهُمَا تَخْتَلِفَانِ فِي...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f5fc/512.webp"
            },
            {
              id: "uae-g5u3l3e8",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "تِكْنُولُوجِيَا",
              options: [
                "تِجَارَةٌ",
                "تِكْنُولُوجِيَا",
                "اقْتِصَادٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4bb/512.webp"
            },
            {
              id: "uae-g5u3l3listenuae-g5u3l3v6",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "تِجَارَةٌ",
              options: [
                "تَدَرَّبَ",
                "تِجَارَةٌ",
                "حُرِّيَّةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f6d2/512.webp"
            },
            {
              id: "uae-g5u3l3mcquae-g5u3l3v9",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"حَدِيثٌ\"؟", "What does \"modern / contemporary\" mean?", "Apakah maksud \"moden\"?", "Apa arti \"modern\"?", "Que signifie \"moderne\" ?", "¿Qué significa \"moderno\"?"),
              arabicText: "حَدِيثٌ",
              options: [
                "modern / contemporary",
                "credibility",
                "history",
                "Colosseum"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f195/512.webp"
            },
            {
              id: "uae-g5u3l3mcquae-g5u3l3v4",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"مِيْنَاءٌ\"؟", "What does \"port / harbour\" mean?", "Apakah maksud \"pelabuhan\"?", "Apa arti \"pelabuhan\"?", "Que signifie \"port\" ?", "¿Qué significa \"puerto\"?"),
              arabicText: "مِيْنَاءٌ",
              options: [
                "he built",
                "port / harbour",
                "solar energy",
                "Chichen Itza"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2693/512.webp"
            },
            {
              id: "uae-g5u3l3speakuae-g5u3l3v10",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "اقْتِصَادٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4c8/512.webp"
            }
          ]
        },
        {
          id: "uae-g5u3review",
          unitId: "uae-g5u3",
          gradeId: "uae-g5",
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
              id: "uae-g5u3l1v1",
              arabic: "دُبَيٌّ",
              transliteration: "Dubayy",
              translation: t("دُبَيٌّ", "Dubai", "Dubai", "Dubai", "Dubaï", "Dubái"),
              emoji: "🏙️"
            },
            {
              id: "uae-g5u3l1v2",
              arabic: "الرِّيَاضُ",
              transliteration: "al-Riyāḍ",
              translation: t("الرِّيَاضُ", "Riyadh", "Riyadh", "Riyadh", "Riyad", "Riad"),
              emoji: "🏙️"
            },
            {
              id: "uae-g5u3l1v3",
              arabic: "الْقَاهِرَةُ",
              transliteration: "al-Qāhira",
              translation: t("الْقَاهِرَةُ", "Cairo", "Kaherah", "Kairo", "Le Caire", "El Cairo"),
              emoji: "🏛️"
            },
            {
              id: "uae-g5u3l1v4",
              arabic: "عَمَّانُ",
              transliteration: "ʿAmmān",
              translation: t("عَمَّانُ", "Amman", "Amman", "Amman", "Amman", "Amán"),
              emoji: "🌉"
            },
            {
              id: "uae-g5u3l1v5",
              arabic: "مَنَامَةٌ",
              transliteration: "Manāma",
              translation: t("مَنَامَةٌ", "Manama", "Manama", "Manama", "Manama", "Manama"),
              emoji: "🌆"
            },
            {
              id: "uae-g5u3l1v6",
              arabic: "عَاصِمَةٌ",
              transliteration: "ʿāṣima",
              translation: t("عَاصِمَةٌ", "capital city", "ibu kota", "ibu kota", "capitale", "capital"),
              emoji: "🏛️"
            },
            {
              id: "uae-g5u3l1v7",
              arabic: "سِيَاحَةٌ",
              transliteration: "siyāḥa",
              translation: t("سِيَاحَةٌ", "tourism", "pelancongan", "pariwisata", "tourisme", "turismo"),
              emoji: "📸"
            },
            {
              id: "uae-g5u3l1v8",
              arabic: "نَاطِحَةُ سَحَابٍ",
              transliteration: "nāṭiḥat saḥāb",
              translation: t("نَاطِحَةُ سَحَابٍ", "skyscraper", "bangunan pencakar langit", "gedung pencakar langit", "gratte-ciel", "rascacielos"),
              emoji: "🏗️"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "uae-g5u3reviewspelluae-g5u3l1v6",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "عَاصِمَةٌ",
              answer: "عَاصِمَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3db-fe0f/512.webp"
            },
            {
              id: "uae-g5u3reviewwriteuae-g5u3l1v4",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"عَمَّانُ\"", "Type the Arabic word for: \"Amman\"", "Taip perkataan Arab untuk: \"Amman\"", "Ketik kata Arab untuk: \"Amman\"", "Tape le mot arabe pour : \"Amman\"", "Escribe la palabra árabe para: \"Amán\""),
              arabicText: "عَمَّانُ",
              answer: "عَمَّانُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f309/512.webp"
            },
            {
              id: "uae-g5u3reviewwriteuae-g5u3l1v8",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"نَاطِحَةُ سَحَابٍ\"", "Type the Arabic word for: \"skyscraper\"", "Taip perkataan Arab untuk: \"bangunan pencakar langit\"", "Ketik kata Arab untuk: \"gedung pencakar langit\"", "Tape le mot arabe pour : \"gratte-ciel\"", "Escribe la palabra árabe para: \"rascacielos\""),
              arabicText: "نَاطِحَةُ سَحَابٍ",
              answer: "نَاطِحَةُ سَحَابٍ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d7-fe0f/512.webp"
            },
            {
              id: "uae-g5u3reviewspelluae-g5u3l1v4",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "عَمَّانُ",
              answer: "عَمَّانُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f309/512.webp"
            },
            {
              id: "uae-g5u3reviewspeakuae-g5u3l1v8",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "نَاطِحَةُ سَحَابٍ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d7-fe0f/512.webp"
            },
            {
              id: "uae-g5u3reviewlistenuae-g5u3l1v8",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "نَاطِحَةُ سَحَابٍ",
              options: [
                "نَاطِحَةُ سَحَابٍ",
                "مَحْمِيَّةٌ",
                "فَصْلٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d7-fe0f/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "uae-g5u4",
      gradeId: "uae-g5",
      order: 4,
      title: t("غَرَائِبُ وَعَجَائِبُ", "Wonders", "Keajaiban", "Keajaiban", "Merveilles", "Maravillas"),
      theme: "#EC4899",
      lessons: [
        {
          id: "uae-g5u4l1",
          unitId: "uae-g5u4",
          gradeId: "uae-g5",
          order: 1,
          title: t("عَجَائِبُ الدُّنْيَا السَّبْعُ", "Seven Wonders of the World", "Tujuh Keajaiban Dunia", "Tujuh Keajaiban Dunia", "sept merveilles du monde", "Las siete maravillas del mundo"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("عَجَائِبُ الدُّنْيَا السَّبْعُ إِبْدَاعَاتٌ بَشَرِيَّةٌ تَأْسِرُ الْعُقُولَ وَتَبْهَرُ الْأَبْصَارَ!", "The Seven Wonders of the World are human creations that captivate minds and dazzle eyes!", "Tujuh Keajaiban Dunia adalah ciptaan manusia yang memukau minda dan mempesonakan mata!", "Tujuh Keajaiban Dunia adalah kreasi manusia yang memikat pikiran dan memukau mata!", "Les sept merveilles du monde sont des créations humaines qui captivent les esprits !", "¡Las siete maravillas del mundo son creaciones humanas que cautivan mentes y deslumbran ojos!"),
          vocabulary: [
            {
              id: "uae-g5u4l1v1",
              arabic: "هَرَمٌ",
              transliteration: "haram",
              translation: t("هَرَمٌ", "pyramid", "piramid", "piramida", "pyramide", "pirámide"),
              emoji: "🏛️"
            },
            {
              id: "uae-g5u4l1v2",
              arabic: "سُورٌ",
              transliteration: "sūr",
              translation: t("سُورٌ", "wall", "tembok", "dinding", "mur", "muro"),
              emoji: "🧱"
            },
            {
              id: "uae-g5u4l1v3",
              arabic: "كُولُوسِيُّومٌ",
              transliteration: "kūlūsiyyūm",
              translation: t("كُولُوسِيُّومٌ", "Colosseum", "Colosseum", "Colosseum", "Colisée", "Coliseo"),
              emoji: "🏟️"
            },
            {
              id: "uae-g5u4l1v4",
              arabic: "تَاجُ مَحَلٍّ",
              transliteration: "Tāj Maḥall",
              translation: t("تَاجُ مَحَلٍّ", "Taj Mahal", "Taj Mahal", "Taj Mahal", "Taj Mahal", "Taj Mahal"),
              emoji: "🕌"
            },
            {
              id: "uae-g5u4l1v5",
              arabic: "تِيكَا خُوتِيَّةٌ",
              transliteration: "Tīkā Khūtiyya",
              translation: t("تِيكَا خُوتِيَّةٌ", "Chichen Itza", "Chichen Itza", "Chichen Itza", "Chichen Itza", "Chichen Itza"),
              emoji: "🗿"
            },
            {
              id: "uae-g5u4l1v6",
              arabic: "أُعْجُوبَةٌ",
              transliteration: "uʿjūba",
              translation: t("أُعْجُوبَةٌ", "wonder / marvel", "keajaiban", "keajaiban", "merveille", "maravilla"),
              emoji: "🌟"
            },
            {
              id: "uae-g5u4l1v7",
              arabic: "قَدِيمٌ",
              transliteration: "qadīm",
              translation: t("قَدِيمٌ", "ancient / old", "kuno", "kuno", "ancien", "antiguo"),
              emoji: "⌛"
            },
            {
              id: "uae-g5u4l1v8",
              arabic: "بَنَى",
              transliteration: "banā",
              translation: t("بَنَى", "he built", "dia membina", "dia membangun", "il a construit", "construyó"),
              emoji: "🏗️"
            },
            {
              id: "uae-g5u4l1v9",
              arabic: "حَضَارَةٌ",
              transliteration: "ḥaḍāra",
              translation: t("حَضَارَةٌ", "civilization", "tamadun", "peradaban", "civilisation", "civilización"),
              emoji: "🌍"
            },
            {
              id: "uae-g5u4l1v10",
              arabic: "مَشْهُورٌ",
              transliteration: "mashhūr",
              translation: t("مَشْهُورٌ", "famous", "terkenal", "terkenal", "célèbre", "famoso"),
              emoji: "⭐"
            }
          ],
          dialogue: [
            {
              speaker: "رَنَا",
              arabic: "مَا أَجْمَلُ عَجِيبَةٍ مِنْ عَجَائِبِ الدُّنْيَا فِي رَأْيِكَ؟",
              translation: t("مَا أَجْمَلُ عَجِيبَةٍ مِنْ عَجَائِبِ الدُّنْيَا فِي رَأْيِكَ؟", "What is the most beautiful wonder of the world in your opinion?", "Apakah keajaiban dunia yang paling indah menurut kamu?", "Apa keajaiban dunia yang paling indah menurut kamu?", "Quelle est la plus belle merveille du monde selon toi ?", "¿Cuál es la maravilla del mundo más hermosa en tu opinión?")
            },
            {
              speaker: "زِيَاد",
              arabic: "أَعْتَقِدُ أَنَّ تَاجَ مَحَلٍّ هُوَ الْأَجْمَلُ لِأَنَّهُ يَرْمُزُ لِلْحُبِّ الْخَالِدِ.",
              translation: t("أَعْتَقِدُ أَنَّ تَاجَ مَحَلٍّ هُوَ الْأَجْمَلُ لِأَنَّهُ يَرْمُزُ لِلْحُبِّ الْخَالِدِ.", "I think Taj Mahal is the most beautiful because it symbolizes eternal love.", "Saya rasa Taj Mahal yang paling cantik kerana melambangkan cinta abadi.", "Saya pikir Taj Mahal yang paling indah karena melambangkan cinta abadi.", "Je pense que le Taj Mahal est le plus beau car il symbolise l'amour éternel.", "Creo que el Taj Mahal es el más hermoso porque simboliza el amor eterno.")
            },
            {
              speaker: "رَنَا",
              arabic: "أَنَا أُفَضِّلُ الْأَهْرَامَ الْمِصْرِيَّةَ لِأَنَّهَا مِنْ أَقْدَمِ عَجَائِبِ الدُّنْيَا.",
              translation: t("أَنَا أُفَضِّلُ الْأَهْرَامَ الْمِصْرِيَّةَ لِأَنَّهَا مِنْ أَقْدَمِ عَجَائِبِ الدُّنْيَا.", "I prefer the Egyptian pyramids because they are among the oldest wonders of the world.", "Saya lebih suka piramid Mesir kerana ia antara keajaiban dunia yang paling lama.", "Saya lebih suka piramida Mesir karena merupakan salah satu keajaiban dunia tertua.", "Je préfère les pyramides d'Égypte car elles font partie des plus anciennes merveilles du monde.", "Prefiero las pirámides de Egipto porque son de las maravillas del mundo más antiguas.")
            }
          ],
          exercises: [
            {
              id: "uae-g5u4l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْعَجِيبَةَ الصَّحِيحَةَ", "Listen and choose the correct wonder", "Dengar dan pilih keajaiban yang betul", "Dengarkan dan pilih keajaiban yang benar", "Écoute et choisis la bonne merveille", "Escucha y elige la maravilla correcta"),
              arabicText: "هَرَمٌ",
              options: [
                "سُورٌ",
                "هَرَمٌ",
                "كُولُوسِيُّومٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3db-fe0f/512.webp"
            },
            {
              id: "uae-g5u4l1e2",
              type: "mcq",
              skill: "reading",
              prompt: t("فِي أَيِّ دَوْلَةٍ يُوجَدُ تَاجُ مَحَلٍّ؟", "In which country is the Taj Mahal located?", "Di negara mana Taj Mahal berada?", "Di negara mana Taj Mahal berada?", "Dans quel pays se trouve le Taj Mahal ?", "¿En qué país se encuentra el Taj Mahal?"),
              options: [
                "مِصْرُ",
                "الْهِنْدُ",
                "إِيطَالِيَا"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3db-fe0f/512.webp"
            },
            {
              id: "uae-g5u4l1e3",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْعَجِيبَةَ بِرَمْزِهَا", "Match the wonder to its symbol", "Padankan keajaiban dengan simbolnya", "Cocokkan keajaiban dengan simbolnya", "Relie la merveille à son symbole", "Une la maravilla con su símbolo"),
              pairs: [
                {
                  a: "هَرَمٌ",
                  b: "🏛️"
                },
                {
                  a: "كُولُوسِيُّومٌ",
                  b: "🏟️"
                },
                {
                  a: "تَاجُ مَحَلٍّ",
                  b: "🕌"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3db-fe0f/512.webp"
            },
            {
              id: "uae-g5u4l1e4",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنْ عَجِيبَةٍ مِنْ عَجَائِبِ الدُّنْيَا", "Talk about one of the wonders of the world", "Bercakap tentang satu daripada keajaiban dunia", "Bicarakan tentang salah satu keajaiban dunia", "Parle d'une des merveilles du monde", "Habla sobre una de las maravillas del mundo"),
              arabicText: "مِنْ أَجْمَلِ عَجَائِبِ الدُّنْيَا...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3db-fe0f/512.webp"
            },
            {
              id: "uae-g5u4l1e5",
              type: "mcq",
              skill: "reading",
              prompt: t("كَمْ عَجِيبَةً تَضُمُّ عَجَائِبُ الدُّنْيَا السَّبْعُ الْجَدِيدَةُ؟", "How many wonders are in the New Seven Wonders of the World?", "Berapa keajaiban dalam Tujuh Keajaiban Dunia Baru?", "Berapa keajaiban dalam Tujuh Keajaiban Dunia Baru?", "Combien de merveilles y a-t-il dans les sept nouvelles merveilles du monde ?", "¿Cuántas maravillas hay en las Nuevas Siete Maravillas del Mundo?"),
              options: [
                "خَمْسٌ",
                "سَبْعٌ",
                "عَشَرَةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3db-fe0f/512.webp"
            },
            {
              id: "uae-g5u4l1e6",
              type: "arrange",
              skill: "writing",
              prompt: t("رَتِّبِ الْكَلِمَاتِ لِتَكْوِينِ جُمْلَةٍ", "Arrange the words to form a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "الأَهْرَامُ الْمِصْرِيَّةُ مِنْ أَقْدَمِ عَجَائِبِ الدُّنْيَا",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3db-fe0f/512.webp"
            },
            {
              id: "uae-g5u4l1e7",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ عَنْ عَجِيبَةٍ مِنْ عَجَائِبِ الدُّنْيَا", "Write about one of the wonders of the world", "Tulis tentang salah satu keajaiban dunia", "Tulis tentang salah satu keajaiban dunia", "Écris sur une des merveilles du monde", "Escribe sobre una de las maravillas del mundo"),
              answer: "تَاجُ مَحَلٍّ أُعْجُوبَةٌ مَشْهُورَةٌ بَنَاهَا الإِمْبِرَاطُورُ الْمُغُولِيُّ فِي الْهِنْدِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f54c/512.webp"
            },
            {
              id: "uae-g5u4l1e8",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Relie le mot à son sens", "Une la palabra con su significado"),
              pairs: [
                {
                  a: "أُعْجُوبَةٌ",
                  b: "wonder"
                },
                {
                  a: "حَضَارَةٌ",
                  b: "civilization"
                },
                {
                  a: "مَشْهُورٌ",
                  b: "famous"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3db-fe0f/512.webp"
            },
            {
              id: "uae-g5u4l1spelluae-g5u4l1v3",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "كُولُوسِيُّومٌ",
              answer: "كُولُوسِيُّومٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3df-fe0f/512.webp"
            },
            {
              id: "uae-g5u4l1speakuae-g5u4l1v4",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "تَاجُ مَحَلٍّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f54c/512.webp"
            },
            {
              id: "uae-g5u4l1arrange3",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "أَنَا أُفَضِّلُ الْأَهْرَامَ الْمِصْرِيَّةَ لِأَنَّهَا مِنْ أَقْدَمِ عَجَائِبِ الدُّنْيَا.",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3db-fe0f/512.webp"
            },
            {
              id: "uae-g5u4l1spelluae-g5u4l1v7",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "قَدِيمٌ",
              answer: "قَدِيمٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/231b/512.webp"
            }
          ]
        },
        {
          id: "uae-g5u4l2",
          unitId: "uae-g5u4",
          gradeId: "uae-g5",
          order: 2,
          title: t("الْكُهُوفُ وَالْجُزُرُ", "Caves", "Gua", "Gua", "Grottes", "Cuevas e islas"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الْكُهُوفُ وَالْجُزُرُ عَوَالِمُ سِحْرِيَّةٌ تَنْتَظِرُ الْمُكْتَشِفِينَ الشُّجْعَانَ!", "Caves and islands are magical worlds waiting for brave explorers!", "Gua dan pulau adalah dunia magis yang menunggu penjelajah yang berani!", "Gua dan pulau adalah dunia magis yang menunggu para penjelajah yang berani!", "Les grottes et les îles sont des mondes magiques qui attendent des explorateurs courageux !", "¡Las cuevas y las islas son mundos mágicos que esperan a exploradores valientes!"),
          vocabulary: [
            {
              id: "uae-g5u4l2v1",
              arabic: "كَهْفٌ",
              transliteration: "kahf",
              translation: t("كَهْفٌ", "cave", "gua", "gua", "grotte", "cueva"),
              emoji: "🕳️"
            },
            {
              id: "uae-g5u4l2v2",
              arabic: "جَزِيرَةٌ",
              transliteration: "jazīra",
              translation: t("جَزِيرَةٌ", "island", "pulau", "pulau", "île", "isla"),
              emoji: "🏝️"
            },
            {
              id: "uae-g5u4l2v3",
              arabic: "مَغَارَةٌ",
              transliteration: "maghāra",
              translation: t("مَغَارَةٌ", "cavern / grotto", "gua besar", "gua besar", "caverne", "caverna"),
              emoji: "⛏️"
            },
            {
              id: "uae-g5u4l2v4",
              arabic: "بَحِيرَةٌ",
              transliteration: "buḥayra",
              translation: t("بَحِيرَةٌ", "lake", "tasik", "danau", "lac", "lago"),
              emoji: "💧"
            },
            {
              id: "uae-g5u4l2v5",
              arabic: "مُكْتَشِفٌ",
              transliteration: "muktashif",
              translation: t("مُكْتَشِفٌ", "explorer / discoverer", "penjelajah", "penjelajah", "explorateur", "explorador"),
              emoji: "🔦"
            },
            {
              id: "uae-g5u4l2v6",
              arabic: "شُجَاعٌ",
              transliteration: "shujāʿ",
              translation: t("شُجَاعٌ", "brave / courageous", "berani", "berani", "courageux", "valiente"),
              emoji: "🦁"
            },
            {
              id: "uae-g5u4l2v7",
              arabic: "صَخْرَةٌ",
              transliteration: "ṣakhra",
              translation: t("صَخْرَةٌ", "rock / boulder", "batu", "batu", "rocher", "roca"),
              emoji: "🪨"
            },
            {
              id: "uae-g5u4l2v8",
              arabic: "شَعَبٌ مَرْجَانِيٌّ",
              transliteration: "shaʿab marjānī",
              translation: t("شَعَبٌ مَرْجَانِيٌّ", "coral reef", "batu karang", "terumbu karang", "récif corallien", "arrecife de coral"),
              emoji: "🐠"
            },
            {
              id: "uae-g5u4l2v9",
              arabic: "مَحِيطٌ",
              transliteration: "muḥīṭ",
              translation: t("مَحِيطٌ", "ocean", "lautan", "samudra", "océan", "océano"),
              emoji: "🌊"
            },
            {
              id: "uae-g5u4l2v10",
              arabic: "اسْتَكْشَفَ",
              transliteration: "istakshafa",
              translation: t("اسْتَكْشَفَ", "he explored", "dia meneroka", "dia menjelajahi", "il a exploré", "exploró"),
              emoji: "🔭"
            }
          ],
          dialogue: [
            {
              speaker: "مَاجِد",
              arabic: "هَلْ سَبَقَ أَنْ دَخَلْتَ كَهْفًا طَبِيعِيًّا يَا سَعِيد؟",
              translation: t("هَلْ سَبَقَ أَنْ دَخَلْتَ كَهْفًا طَبِيعِيًّا يَا سَعِيد؟", "Have you ever entered a natural cave Saeed?", "Pernahkah kamu masuk ke dalam gua semulajadi Saeed?", "Pernahkah kamu masuk ke dalam gua alami Saeed?", "As-tu déjà pénétré dans une grotte naturelle Saeed ?", "¿Has entrado alguna vez en una cueva natural Saeed?")
            },
            {
              speaker: "سَعِيد",
              arabic: "نَعَمْ! زُرْنَا مَغَارَةً كَبِيرَةً قَرِيبَةً مِنْ بَحِيرَةٍ جَمِيلَةٍ وَكَانَ الْمَنْظَرُ رَائِعًا.",
              translation: t("نَعَمْ! زُرْنَا مَغَارَةً كَبِيرَةً قَرِيبَةً مِنْ بَحِيرَةٍ جَمِيلَةٍ وَكَانَ الْمَنْظَرُ رَائِعًا.", "Yes! We visited a large cavern near a beautiful lake and the view was amazing.", "Ya! Kami melawat gua besar berhampiran tasik yang cantik dan pemandangannya menakjubkan.", "Ya! Kami mengunjungi gua besar dekat danau yang indah dan pemandangannya luar biasa.", "Oui ! Nous avons visité une grande caverne près d'un beau lac et la vue était magnifique.", "¡Sí! Visitamos una gran caverna cerca de un hermoso lago y la vista era increíble.")
            },
            {
              speaker: "مَاجِد",
              arabic: "أُرِيدُ أَنْ أَكُونَ مُكْتَشِفًا وَأَزُورَ الْجُزُرَ النَّائِيَةَ.",
              translation: t("أُرِيدُ أَنْ أَكُونَ مُكْتَشِفًا وَأَزُورَ الْجُزُرَ النَّائِيَةَ.", "I want to be an explorer and visit remote islands.", "Saya ingin menjadi penjelajah dan melawat pulau-pulau terpencil.", "Saya ingin menjadi penjelajah dan mengunjungi pulau-pulau terpencil.", "Je veux être un explorateur et visiter des îles lointaines.", "Quiero ser un explorador y visitar islas remotas.")
            }
          ],
          exercises: [
            {
              id: "uae-g5u4l2e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "جَزِيرَةٌ",
              options: [
                "كَهْفٌ",
                "جَزِيرَةٌ",
                "بَحِيرَةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3dd-fe0f/512.webp"
            },
            {
              id: "uae-g5u4l2e2",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا الْفَرْقُ بَيْنَ الْكَهْفِ وَالْمَغَارَةِ؟", "What is the difference between a cave and a cavern?", "Apakah perbezaan antara gua dan gua besar?", "Apa perbedaan antara gua dan gua besar?", "Quelle est la différence entre une grotte et une caverne ?", "¿Cuál es la diferencia entre una cueva y una caverna?"),
              options: [
                "لَا فَرْقَ بَيْنَهُمَا",
                "الْمَغَارَةُ أَكْبَرُ مِنَ الْكَهْفِ",
                "الْكَهْفُ فِي الْبَحْرِ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f573-fe0f/512.webp"
            },
            {
              id: "uae-g5u4l2e3",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِرَمْزِهَا", "Match the word to its symbol", "Padankan perkataan dengan simbolnya", "Cocokkan kata dengan simbolnya", "Relie le mot à son symbole", "Une la palabra con su símbolo"),
              pairs: [
                {
                  a: "كَهْفٌ",
                  b: "🕳️"
                },
                {
                  a: "جَزِيرَةٌ",
                  b: "🏝️"
                },
                {
                  a: "بَحِيرَةٌ",
                  b: "💧"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f573-fe0f/512.webp"
            },
            {
              id: "uae-g5u4l2e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ عَنْ رِحْلَةٍ إِلَى جَزِيرَةٍ", "Write about a trip to an island", "Tulis tentang perjalanan ke pulau", "Tulis tentang perjalanan ke pulau", "Écris sur un voyage dans une île", "Escribe sobre un viaje a una isla"),
              answer: "أَتَمَنَّى أَنْ أَزُورَ جَزِيرَةً جَمِيلَةً وَأَسْتَكْشِفَ كُهُوفَهَا",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f573-fe0f/512.webp"
            },
            {
              id: "uae-g5u4l2e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا الصِّفَةُ الَّتِي يَجِبُ أَنْ يَتَمَتَّعَ بِهَا الْمُكْتَشِفُ؟", "What quality must an explorer possess?", "Apakah sifat yang perlu dimiliki oleh penjelajah?", "Sifat apa yang harus dimiliki oleh seorang penjelajah?", "Quelle qualité l'explorateur doit-il posséder ?", "¿Qué cualidad debe poseer un explorador?"),
              options: [
                "الْخَوْفُ",
                "الشَّجَاعَةُ وَالإِقْدَامُ",
                "الْكَسَلُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f573-fe0f/512.webp"
            },
            {
              id: "uae-g5u4l2e6",
              type: "arrange",
              skill: "writing",
              prompt: t("رَتِّبِ الْكَلِمَاتِ لِتَكْوِينِ جُمْلَةٍ", "Arrange the words to form a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "الْمُكْتَشِفُ الشُّجَاعُ يَسْتَكْشِفُ الْكُهُوفَ وَالْجُزُرَ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f573-fe0f/512.webp"
            },
            {
              id: "uae-g5u4l2e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("صِفْ جَزِيرَةً تَحْلُمُ بِزِيَارَتِهَا", "Describe an island you dream of visiting", "Huraikan pulau yang anda impikan untuk dilawati", "Deskripsikan pulau yang kamu impikan untuk dikunjungi", "Décris une île dont tu rêves de visiter", "Describe una isla que sueñas visitar"),
              arabicText: "أَحْلُمُ بِزِيَارَةِ جَزِيرَةٍ فِيهَا...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f573-fe0f/512.webp"
            },
            {
              id: "uae-g5u4l2e8",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Relie le mot à son sens", "Une la palabra con su significado"),
              pairs: [
                {
                  a: "شُجَاعٌ",
                  b: "brave"
                },
                {
                  a: "مَحِيطٌ",
                  b: "ocean"
                },
                {
                  a: "صَخْرَةٌ",
                  b: "rock"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f573-fe0f/512.webp"
            },
            {
              id: "uae-g5u4l2writeuae-g5u4l2v4",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"بَحِيرَةٌ\"", "Type the Arabic word for: \"lake\"", "Taip perkataan Arab untuk: \"tasik\"", "Ketik kata Arab untuk: \"danau\"", "Tape le mot arabe pour : \"lac\"", "Escribe la palabra árabe para: \"lago\""),
              arabicText: "بَحِيرَةٌ",
              answer: "بَحِيرَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a7/512.webp"
            },
            {
              id: "uae-g5u4l2spelluae-g5u4l2v4",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "بَحِيرَةٌ",
              answer: "بَحِيرَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a7/512.webp"
            },
            {
              id: "uae-g5u4l2spelluae-g5u4l2v8",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "شَعَبٌ مَرْجَانِيٌّ",
              answer: "شَعَبٌ مَرْجَانِيٌّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f420/512.webp"
            },
            {
              id: "uae-g5u4l2mcquae-g5u4l2v10",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"اسْتَكْشَفَ\"؟", "What does \"he explored\" mean?", "Apakah maksud \"dia meneroka\"?", "Apa arti \"dia menjelajahi\"?", "Que signifie \"il a exploré\" ?", "¿Qué significa \"exploró\"?"),
              arabicText: "اسْتَكْشَفَ",
              options: [
                "royal park",
                "he explored",
                "drawing / painting",
                "novel"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f52d/512.webp"
            }
          ]
        },
        {
          id: "uae-g5u4l3",
          unitId: "uae-g5u4",
          gradeId: "uae-g5",
          order: 3,
          title: t("عَجَائِبُ الْكَائِنَاتِ الْحَيَّةِ", "Wonders of Living Creatures", "Keajaiban Makhluk Hidup", "Keajaiban Makhluk Hidup", "Merveilles des êtres vivants", "Maravillas de los seres vivos"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الْكَائِنَاتُ الْحَيَّةُ مَلِيئَةٌ بِالْعَجَائِبِ الَّتِي تُدْهِشُ الْعُلَمَاءَ وَتَبْهَرُ الْمُتَأَمِّلِينَ!", "Living creatures are full of wonders that astonish scientists and amaze observers!", "Makhluk hidup penuh dengan keajaiban yang mengagumkan para saintis dan menakjubkan pemerhati!", "Makhluk hidup penuh dengan keajaiban yang menakjubkan para ilmuwan dan memukau pengamat!", "Les êtres vivants sont pleins de merveilles qui étonnent les scientifiques !", "¡Los seres vivos están llenos de maravillas que asombran a los científicos!"),
          vocabulary: [
            {
              id: "uae-g5u4l3v1",
              arabic: "حَيَوَانٌ نَادِرٌ",
              transliteration: "ḥayawān nādir",
              translation: t("حَيَوَانٌ نَادِرٌ", "rare animal", "haiwan nadir", "hewan langka", "animal rare", "animal raro"),
              emoji: "🦋"
            },
            {
              id: "uae-g5u4l3v2",
              arabic: "مُتَكَيِّفٌ",
              transliteration: "mutakāyyif",
              translation: t("مُتَكَيِّفٌ", "adapted", "beradaptasi", "beradaptasi", "adapté", "adaptado"),
              emoji: "🌡️"
            },
            {
              id: "uae-g5u4l3v3",
              arabic: "سُمٌّ",
              transliteration: "summ",
              translation: t("سُمٌّ", "poison / venom", "racun", "racun", "venin", "veneno"),
              emoji: "☠️"
            },
            {
              id: "uae-g5u4l3v4",
              arabic: "تَمْوِيهٌ",
              transliteration: "tamwīh",
              translation: t("تَمْوِيهٌ", "camouflage", "kamuflaj", "kamuflase", "camouflage", "camuflaje"),
              emoji: "🎭"
            },
            {
              id: "uae-g5u4l3v5",
              arabic: "هِجْرَةٌ",
              transliteration: "hijra",
              translation: t("هِجْرَةٌ", "migration", "penghijrahan", "migrasi", "migration", "migración"),
              emoji: "✈️"
            },
            {
              id: "uae-g5u4l3v6",
              arabic: "بِيئَةٌ",
              transliteration: "bīʾa",
              translation: t("بِيئَةٌ", "environment / habitat", "alam sekitar", "lingkungan", "environnement", "medio ambiente"),
              emoji: "🌿"
            },
            {
              id: "uae-g5u4l3v7",
              arabic: "سِلْسِلَةٌ غِذَائِيَّةٌ",
              transliteration: "silsila ghidhāʾiyya",
              translation: t("سِلْسِلَةٌ غِذَائِيَّةٌ", "food chain", "rantai makanan", "rantai makanan", "chaîne alimentaire", "cadena alimentaria"),
              emoji: "🔗"
            },
            {
              id: "uae-g5u4l3v8",
              arabic: "تَكَاثَرَ",
              transliteration: "takāthara",
              translation: t("تَكَاثَرَ", "reproduced / multiplied", "membiak", "berkembang biak", "s'est reproduit", "se reprodujo"),
              emoji: "🐣"
            },
            {
              id: "uae-g5u4l3v9",
              arabic: "انْقَرَضَ",
              transliteration: "inqaraḍa",
              translation: t("انْقَرَضَ", "became extinct", "pupus", "punah", "s'est éteint", "se extinguió"),
              emoji: "💀"
            },
            {
              id: "uae-g5u4l3v10",
              arabic: "مَحْمِيَّةٌ",
              transliteration: "maḥmiyya",
              translation: t("مَحْمِيَّةٌ", "nature reserve", "kawasan terlindung", "cagar alam", "réserve naturelle", "reserva natural"),
              emoji: "🌳"
            }
          ],
          dialogue: [
            {
              speaker: "مُعَلِّمَة",
              arabic: "هَلْ تَعْرِفُونَ مَا هُوَ التَّمْوِيهُ فِي عَالَمِ الْحَيَوَانِ؟",
              translation: t("هَلْ تَعْرِفُونَ مَا هُوَ التَّمْوِيهُ فِي عَالَمِ الْحَيَوَانِ؟", "Do you know what camouflage is in the animal world?", "Adakah kamu tahu apa itu kamuflaj dalam dunia haiwan?", "Apakah kamu tahu apa itu kamuflase dalam dunia hewan?", "Savez-vous ce qu'est le camouflage dans le monde animal ?", "¿Saben qué es el camuflaje en el mundo animal?")
            },
            {
              speaker: "طُلَّاب",
              arabic: "نَعَمْ! التَّمْوِيهُ يَجْعَلُ الْحَيَوَانَ يَخْتَفِي فِي بِيئَتِهِ لِيَحْمِيَ نَفْسَهُ مِنَ الْأَعْدَاءِ.",
              translation: t("نَعَمْ! التَّمْوِيهُ يَجْعَلُ الْحَيَوَانَ يَخْتَفِي فِي بِيئَتِهِ لِيَحْمِيَ نَفْسَهُ مِنَ الْأَعْدَاءِ.", "Yes! Camouflage makes the animal disappear in its environment to protect itself from enemies.", "Ya! Kamuflaj menyebabkan haiwan menghilang dalam persekitarannya untuk melindungi diri dari musuh.", "Ya! Kamuflase membuat hewan menghilang di lingkungannya untuk melindungi diri dari musuh.", "Oui ! Le camouflage fait disparaître l'animal dans son environnement pour se protéger des ennemis.", "¡Sí! El camuflaje hace que el animal desaparezca en su entorno para protegerse de los enemigos.")
            },
            {
              speaker: "مُعَلِّمَة",
              arabic: "أَحْسَنْتُمْ! وَبَعْضُ الْحَيَوَانَاتِ النَّادِرَةِ تَقُومُ بِهِجْرَةٍ طَوِيلَةٍ كُلَّ عَامٍ.",
              translation: t("أَحْسَنْتُمْ! وَبَعْضُ الْحَيَوَانَاتِ النَّادِرَةِ تَقُومُ بِهِجْرَةٍ طَوِيلَةٍ كُلَّ عَامٍ.", "Well done! And some rare animals undertake a long migration every year.", "Bagus! Dan beberapa haiwan nadir melakukan penghijrahan yang panjang setiap tahun.", "Bagus! Dan beberapa hewan langka melakukan migrasi panjang setiap tahun.", "Bravo ! Et certains animaux rares effectuent une longue migration chaque année.", "¡Muy bien! Y algunos animales raros realizan una larga migración cada año.")
            }
          ],
          exercises: [
            {
              id: "uae-g5u4l3e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "تَمْوِيهٌ",
              options: [
                "هِجْرَةٌ",
                "تَمْوِيهٌ",
                "سُمٌّ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3ad/512.webp"
            },
            {
              id: "uae-g5u4l3e2",
              type: "mcq",
              skill: "reading",
              prompt: t("لِمَاذَا يَسْتَخْدِمُ الْحَيَوَانُ التَّمْوِيهَ؟", "Why does the animal use camouflage?", "Mengapa haiwan menggunakan kamuflaj?", "Mengapa hewan menggunakan kamuflase?", "Pourquoi l'animal utilise-t-il le camouflage ?", "¿Por qué usa el animal el camuflaje?"),
              options: [
                "لِلزِّينَةِ",
                "لِلْحِمَايَةِ مِنَ الْأَعْدَاءِ",
                "لِلنَّوْمِ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f98b/512.webp"
            },
            {
              id: "uae-g5u4l3e3",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Relie le mot à son sens", "Une la palabra con su significado"),
              pairs: [
                {
                  a: "تَمْوِيهٌ",
                  b: "camouflage"
                },
                {
                  a: "هِجْرَةٌ",
                  b: "migration"
                },
                {
                  a: "سُمٌّ",
                  b: "venom"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f98b/512.webp"
            },
            {
              id: "uae-g5u4l3e4",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنْ حَيَوَانٍ عَجِيبٍ تَعْرِفُهُ", "Talk about an amazing animal you know", "Bercakap tentang haiwan menakjubkan yang anda kenali", "Bicarakan tentang hewan menakjubkan yang kamu ketahui", "Parle d'un animal étonnant que tu connais", "Habla sobre un animal asombroso que conozcas"),
              arabicText: "الْحَيَوَانُ الْعَجِيبُ الَّذِي أَعْرِفُهُ هُوَ...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f98b/512.webp"
            },
            {
              id: "uae-g5u4l3e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا الْخَطَرُ الَّذِي يُهَدِّدُ الْحَيَوَانَاتِ النَّادِرَةَ؟", "What danger threatens rare animals?", "Apakah bahaya yang mengancam haiwan nadir?", "Apa bahaya yang mengancam hewan langka?", "Quel danger menace les animaux rares ?", "¿Qué peligro amenaza a los animales raros?"),
              options: [
                "كَثْرَةُ الطَّعَامِ",
                "الاِنْقِرَاضُ وَفَقْدَانُ الْبِيئَةِ",
                "الْهِجْرَةُ الطَّوِيلَةُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f98b/512.webp"
            },
            {
              id: "uae-g5u4l3e6",
              type: "arrange",
              skill: "writing",
              prompt: t("رَتِّبِ الْكَلِمَاتِ لِتَكْوِينِ جُمْلَةٍ", "Arrange the words to form a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "تُحْمَى الْحَيَوَانَاتُ النَّادِرَةُ فِي الْمَحْمِيَّاتِ الطَّبِيعِيَّةِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f98b/512.webp"
            },
            {
              id: "uae-g5u4l3e7",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ عَنْ أَهَمِّيَّةِ حِمَايَةِ الْحَيَوَانَاتِ النَّادِرَةِ", "Write about the importance of protecting rare animals", "Tulis tentang kepentingan melindungi haiwan nadir", "Tulis tentang pentingnya melindungi hewan langka", "Écris sur l'importance de protéger les animaux rares", "Escribe sobre la importancia de proteger los animales raros"),
              answer: "يَجِبُ حِمَايَةُ الْحَيَوَانَاتِ النَّادِرَةِ مِنَ الاِنْقِرَاضِ وَالْحِفَاظُ عَلَى بِيئَتِهَا",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f98b/512.webp"
            },
            {
              id: "uae-g5u4l3e8",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Relie le mot à son sens", "Une la palabra con su significado"),
              pairs: [
                {
                  a: "انْقَرَضَ",
                  b: "extinct"
                },
                {
                  a: "مَحْمِيَّةٌ",
                  b: "reserve"
                },
                {
                  a: "بِيئَةٌ",
                  b: "environment"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f98b/512.webp"
            },
            {
              id: "uae-g5u4l3listenuae-g5u4l3v3",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "سُمٌّ",
              options: [
                "سُمٌّ",
                "فَوَاكِهُ",
                "شَعَبٌ مَرْجَانِيٌّ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2620-fe0f/512.webp"
            },
            {
              id: "uae-g5u4l3mcquae-g5u4l3v5",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"هِجْرَةٌ\"؟", "What does \"migration\" mean?", "Apakah maksud \"penghijrahan\"?", "Apa arti \"migrasi\"?", "Que signifie \"migration\" ?", "¿Qué significa \"migración\"?"),
              arabicText: "هِجْرَةٌ",
              options: [
                "trade / commerce",
                "message / letter",
                "migration",
                "residents / population"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2708-fe0f/512.webp"
            },
            {
              id: "uae-g5u4l3spelluae-g5u4l3v3",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "سُمٌّ",
              answer: "سُمٌّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2620-fe0f/512.webp"
            },
            {
              id: "uae-g5u4l3writeuae-g5u4l3v6",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"بِيئَةٌ\"", "Type the Arabic word for: \"environment / habitat\"", "Taip perkataan Arab untuk: \"alam sekitar\"", "Ketik kata Arab untuk: \"lingkungan\"", "Tape le mot arabe pour : \"environnement\"", "Escribe la palabra árabe para: \"medio ambiente\""),
              arabicText: "بِيئَةٌ",
              answer: "بِيئَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f33f/512.webp"
            }
          ]
        },
        {
          id: "uae-g5u4review",
          unitId: "uae-g5u4",
          gradeId: "uae-g5",
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
              id: "uae-g5u4l1v1",
              arabic: "هَرَمٌ",
              transliteration: "haram",
              translation: t("هَرَمٌ", "pyramid", "piramid", "piramida", "pyramide", "pirámide"),
              emoji: "🏛️"
            },
            {
              id: "uae-g5u4l1v2",
              arabic: "سُورٌ",
              transliteration: "sūr",
              translation: t("سُورٌ", "wall", "tembok", "dinding", "mur", "muro"),
              emoji: "🧱"
            },
            {
              id: "uae-g5u4l1v3",
              arabic: "كُولُوسِيُّومٌ",
              transliteration: "kūlūsiyyūm",
              translation: t("كُولُوسِيُّومٌ", "Colosseum", "Colosseum", "Colosseum", "Colisée", "Coliseo"),
              emoji: "🏟️"
            },
            {
              id: "uae-g5u4l1v4",
              arabic: "تَاجُ مَحَلٍّ",
              transliteration: "Tāj Maḥall",
              translation: t("تَاجُ مَحَلٍّ", "Taj Mahal", "Taj Mahal", "Taj Mahal", "Taj Mahal", "Taj Mahal"),
              emoji: "🕌"
            },
            {
              id: "uae-g5u4l1v5",
              arabic: "تِيكَا خُوتِيَّةٌ",
              transliteration: "Tīkā Khūtiyya",
              translation: t("تِيكَا خُوتِيَّةٌ", "Chichen Itza", "Chichen Itza", "Chichen Itza", "Chichen Itza", "Chichen Itza"),
              emoji: "🗿"
            },
            {
              id: "uae-g5u4l1v6",
              arabic: "أُعْجُوبَةٌ",
              transliteration: "uʿjūba",
              translation: t("أُعْجُوبَةٌ", "wonder / marvel", "keajaiban", "keajaiban", "merveille", "maravilla"),
              emoji: "🌟"
            },
            {
              id: "uae-g5u4l1v7",
              arabic: "قَدِيمٌ",
              transliteration: "qadīm",
              translation: t("قَدِيمٌ", "ancient / old", "kuno", "kuno", "ancien", "antiguo"),
              emoji: "⌛"
            },
            {
              id: "uae-g5u4l1v8",
              arabic: "بَنَى",
              transliteration: "banā",
              translation: t("بَنَى", "he built", "dia membina", "dia membangun", "il a construit", "construyó"),
              emoji: "🏗️"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "uae-g5u4reviewwriteuae-g5u4l1v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"هَرَمٌ\"", "Type the Arabic word for: \"pyramid\"", "Taip perkataan Arab untuk: \"piramid\"", "Ketik kata Arab untuk: \"piramida\"", "Tape le mot arabe pour : \"pyramide\"", "Escribe la palabra árabe para: \"pirámide\""),
              arabicText: "هَرَمٌ",
              answer: "هَرَمٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3db-fe0f/512.webp"
            },
            {
              id: "uae-g5u4reviewspelluae-g5u4l1v2",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "سُورٌ",
              answer: "سُورٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9f1/512.webp"
            },
            {
              id: "uae-g5u4reviewmcquae-g5u4l1v7",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"قَدِيمٌ\"؟", "What does \"ancient / old\" mean?", "Apakah maksud \"kuno\"?", "Apa arti \"kuno\"?", "Que signifie \"ancien\" ?", "¿Qué significa \"antiguo\"?"),
              arabicText: "قَدِيمٌ",
              options: [
                "competitor / racer",
                "ancient / old",
                "ancient / old",
                "saddle"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/231b/512.webp"
            },
            {
              id: "uae-g5u4reviewmcquae-g5u4l1v8",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"بَنَى\"؟", "What does \"he built\" mean?", "Apakah maksud \"dia membina\"?", "Apa arti \"dia membangun\"?", "Que signifie \"il a construit\" ?", "¿Qué significa \"construyó\"?"),
              arabicText: "بَنَى",
              options: [
                "poison / venom",
                "formal",
                "participation / sharing",
                "he built"
              ],
              correctIndex: 3,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d7-fe0f/512.webp"
            },
            {
              id: "uae-g5u4reviewlistenuae-g5u4l1v7",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "قَدِيمٌ",
              options: [
                "مِضْمَارٌ",
                "مُكْتَشِفٌ",
                "قَدِيمٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/231b/512.webp"
            },
            {
              id: "uae-g5u4reviewspeakuae-g5u4l1v5",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "تِيكَا خُوتِيَّةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f5ff/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "uae-g5u5",
      gradeId: "uae-g5",
      order: 5,
      title: t("التَّوَاصُلُ", "Communication", "Komunikasi", "Komunikasi", "La communication", "La comunicación"),
      theme: "#3B82F6",
      lessons: [
        {
          id: "uae-g5u5l1",
          unitId: "uae-g5u5",
          gradeId: "uae-g5",
          order: 1,
          title: t("الْحَمَامُ الزَّاجِلُ", "Carrier Pigeons", "Merpati Pos", "Merpati Pos", "Les pigeons voyageurs", "Las palomas mensajeras"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الْحَمَامُ الزَّاجِلُ كَانَ وَسِيلَةَ التَّوَاصُلِ الْأُولَى عَبْرَ التَّارِيخِ!", "Carrier pigeons were the first means of communication throughout history!", "Merpati pos adalah cara komunikasi pertama sepanjang sejarah!", "Merpati pos adalah sarana komunikasi pertama sepanjang sejarah!", "Les pigeons voyageurs étaient le premier moyen de communication à travers l'histoire !", "¡Las palomas mensajeras fueron el primer medio de comunicación a lo largo de la historia!"),
          vocabulary: [
            {
              id: "uae-g5u5l1v1",
              arabic: "حَمَامٌ",
              transliteration: "ḥamām",
              translation: t("حَمَامٌ", "pigeon / dove", "merpati", "merpati", "pigeon", "paloma"),
              emoji: "🕊️"
            },
            {
              id: "uae-g5u5l1v2",
              arabic: "رِسَالَةٌ",
              transliteration: "risāla",
              translation: t("رِسَالَةٌ", "message / letter", "mesej", "pesan", "message", "mensaje"),
              emoji: "📜"
            },
            {
              id: "uae-g5u5l1v3",
              arabic: "تَوَاصُلٌ",
              transliteration: "tawāṣul",
              translation: t("تَوَاصُلٌ", "communication", "komunikasi", "komunikasi", "communication", "comunicación"),
              emoji: "📡"
            },
            {
              id: "uae-g5u5l1v4",
              arabic: "تَارِيخٌ",
              transliteration: "tārīkh",
              translation: t("تَارِيخٌ", "history", "sejarah", "sejarah", "histoire", "historia"),
              emoji: "⌛"
            },
            {
              id: "uae-g5u5l1v5",
              arabic: "سُرْعَةٌ",
              transliteration: "surʿa",
              translation: t("سُرْعَةٌ", "speed", "kelajuan", "kecepatan", "vitesse", "velocidad"),
              emoji: "⚡"
            },
            {
              id: "uae-g5u5l1v6",
              arabic: "أَرْسَلَ",
              transliteration: "arsala",
              translation: t("أَرْسَلَ", "he sent", "dia menghantar", "dia mengirim", "il a envoyé", "envió"),
              emoji: "📨"
            },
            {
              id: "uae-g5u5l1v7",
              arabic: "وَسِيلَةٌ",
              transliteration: "wasīla",
              translation: t("وَسِيلَةٌ", "means / tool", "cara", "sarana", "moyen", "medio"),
              emoji: "🔧"
            },
            {
              id: "uae-g5u5l1v8",
              arabic: "قَدِيمٌ",
              transliteration: "qadīm",
              translation: t("قَدِيمٌ", "ancient / old", "kuno", "kuno", "ancien", "antiguo"),
              emoji: "📿"
            },
            {
              id: "uae-g5u5l1v9",
              arabic: "مَسَافَةٌ",
              transliteration: "masāfa",
              translation: t("مَسَافَةٌ", "distance", "jarak", "jarak", "distance", "distancia"),
              emoji: "📏"
            },
            {
              id: "uae-g5u5l1v10",
              arabic: "مَوْثُوقٌ",
              transliteration: "mawthūq",
              translation: t("مَوْثُوقٌ", "reliable / trustworthy", "boleh dipercayai", "dapat dipercaya", "fiable", "confiable"),
              emoji: "✅"
            }
          ],
          dialogue: [
            {
              speaker: "جَدّ",
              arabic: "هَلْ تَعْرِفُ كَيْفَ كَانَ النَّاسُ يَتَوَاصَلُونَ قَبْلَ الْهَاتِفِ يَا حَفِيدِي؟",
              translation: t("هَلْ تَعْرِفُ كَيْفَ كَانَ النَّاسُ يَتَوَاصَلُونَ قَبْلَ الْهَاتِفِ يَا حَفِيدِي؟", "Do you know how people communicated before the phone my grandson?", "Adakah kamu tahu bagaimana orang berkomunikasi sebelum telefon cucuku?", "Apakah kamu tahu bagaimana orang berkomunikasi sebelum telepon cucuku?", "Sais-tu comment les gens communiquaient avant le téléphone mon petit-fils ?", "¿Sabes cómo se comunicaba la gente antes del teléfono nieto mío?")
            },
            {
              speaker: "حَفِيد",
              arabic: "نَعَمْ يَا جَدِّي! كَانُوا يُرْسِلُونَ رَسَائِلَ عَنْ طَرِيقِ الْحَمَامِ الزَّاجِلِ بِسُرْعَةٍ كَبِيرَةٍ.",
              translation: t("نَعَمْ يَا جَدِّي! كَانُوا يُرْسِلُونَ رَسَائِلَ عَنْ طَرِيقِ الْحَمَامِ الزَّاجِلِ بِسُرْعَةٍ كَبِيرَةٍ.", "Yes grandfather! They sent messages via carrier pigeons at great speed.", "Ya tok! Mereka menghantar mesej melalui merpati pos dengan kelajuan tinggi.", "Ya kakek! Mereka mengirim pesan melalui merpati pos dengan kecepatan tinggi.", "Oui grand-père ! Ils envoyaient des messages via des pigeons voyageurs à grande vitesse.", "¡Sí abuelo! Enviaban mensajes a través de palomas mensajeras a gran velocidad.")
            },
            {
              speaker: "جَدّ",
              arabic: "أَحْسَنْتَ! الْحَمَامُ الزَّاجِلُ كَانَ وَسِيلَةَ تَوَاصُلٍ مَشْهُورَةً فِي التَّارِيخِ.",
              translation: t("أَحْسَنْتَ! الْحَمَامُ الزَّاجِلُ كَانَ وَسِيلَةَ تَوَاصُلٍ مَشْهُورَةً فِي التَّارِيخِ.", "Well done! Carrier pigeons were a famous means of communication in history.", "Bagus! Merpati pos adalah alat komunikasi yang terkenal dalam sejarah.", "Bagus! Merpati pos adalah sarana komunikasi yang terkenal dalam sejarah.", "Bravo ! Les pigeons voyageurs étaient un moyen de communication célèbre dans l'histoire.", "¡Muy bien! Las palomas mensajeras eran un famoso medio de comunicación en la historia.")
            }
          ],
          exercises: [
            {
              id: "uae-g5u5l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "رِسَالَةٌ",
              options: [
                "حَمَامٌ",
                "رِسَالَةٌ",
                "تَوَاصُلٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4dc/512.webp"
            },
            {
              id: "uae-g5u5l1e2",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا وَسِيلَةُ التَّوَاصُلِ الْقَدِيمَةِ الَّتِي تَحْمِلُ الرَّسَائِلَ؟", "What ancient means of communication carries messages?", "Apakah alat komunikasi kuno yang membawa mesej?", "Apa sarana komunikasi kuno yang membawa pesan?", "Quel ancien moyen de communication transporte les messages ?", "¿Cuál es el antiguo medio de comunicación que lleva mensajes?"),
              options: [
                "الْهَاتِفُ",
                "الْحَمَامُ الزَّاجِلُ",
                "الإِنْتِرْنِتُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f54a-fe0f/512.webp"
            },
            {
              id: "uae-g5u5l1e3",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Relie le mot à son sens", "Une la palabra con su significado"),
              pairs: [
                {
                  a: "حَمَامٌ",
                  b: "pigeon"
                },
                {
                  a: "رِسَالَةٌ",
                  b: "message"
                },
                {
                  a: "تَوَاصُلٌ",
                  b: "communication"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f54a-fe0f/512.webp"
            },
            {
              id: "uae-g5u5l1e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ عَنِ الْحَمَامِ الزَّاجِلِ وَدَوْرِهِ فِي التَّارِيخِ", "Write about carrier pigeons and their role in history", "Tulis tentang merpati pos dan peranannya dalam sejarah", "Tulis tentang merpati pos dan perannya dalam sejarah", "Écris sur les pigeons voyageurs et leur rôle dans l'histoire", "Escribe sobre las palomas mensajeras y su papel en la historia"),
              answer: "اسْتَخْدَمَ النَّاسُ الْحَمَامَ الزَّاجِلَ لِإِرْسَالِ الرَّسَائِلِ عَبْرَ التَّارِيخِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f54a-fe0f/512.webp"
            },
            {
              id: "uae-g5u5l1e5",
              type: "mcq",
              skill: "reading",
              prompt: t("لِمَاذَا كَانَ الْحَمَامُ الزَّاجِلُ وَسِيلَةً مُفَضَّلَةً لِنَقْلِ الرَّسَائِلِ؟", "Why was the carrier pigeon a preferred means of delivering messages?", "Mengapa merpati pos menjadi cara yang disukai untuk menghantar mesej?", "Mengapa merpati pos menjadi sarana pilihan untuk menyampaikan pesan?", "Pourquoi le pigeon voyageur était-il un moyen préféré pour transporter les messages ?", "¿Por qué la paloma mensajera era un medio preferido para entregar mensajes?"),
              options: [
                "لِأَنَّهُ بَطِيءٌ",
                "لِأَنَّهُ مَوْثُوقٌ وَسَرِيعٌ لِلْمَسَافَاتِ الطَّوِيلَةِ",
                "لِأَنَّهُ رَخِيصٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f54a-fe0f/512.webp"
            },
            {
              id: "uae-g5u5l1e6",
              type: "arrange",
              skill: "writing",
              prompt: t("رَتِّبِ الْكَلِمَاتِ لِتَكْوِينِ جُمْلَةٍ", "Arrange the words to form a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "أَرْسَلَ الْجُنُودُ رَسَائِلَهُمْ بِالْحَمَامِ الزَّاجِلِ فِي الْحَرْبِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4e8/512.webp"
            },
            {
              id: "uae-g5u5l1e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("قَارِنْ بَيْنَ وَسَائِلِ التَّوَاصُلِ الْقَدِيمَةِ وَالْحَدِيثَةِ", "Compare old and modern means of communication", "Bandingkan cara komunikasi lama dan moden", "Bandingkan sarana komunikasi lama dan modern", "Compare les anciens et modernes moyens de communication", "Compara los medios de comunicación antiguos y modernos"),
              arabicText: "فِي الْمَاضِي كَانَ النَّاسُ يَتَوَاصَلُونَ بِـ... أَمَّا الْيَوْمَ فَيَسْتَخْدِمُونَ...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f54a-fe0f/512.webp"
            },
            {
              id: "uae-g5u5l1e8",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Relie le mot à son sens", "Une la palabra con su significado"),
              pairs: [
                {
                  a: "مَسَافَةٌ",
                  b: "distance"
                },
                {
                  a: "مَوْثُوقٌ",
                  b: "reliable"
                },
                {
                  a: "أَرْسَلَ",
                  b: "sent"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f54a-fe0f/512.webp"
            },
            {
              id: "uae-g5u5l1arrange3",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "أَحْسَنْتَ! الْحَمَامُ الزَّاجِلُ كَانَ وَسِيلَةَ تَوَاصُلٍ مَشْهُورَةً فِي التَّارِيخِ.",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f54a-fe0f/512.webp"
            },
            {
              id: "uae-g5u5l1writeuae-g5u5l1v7",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"وَسِيلَةٌ\"", "Type the Arabic word for: \"means / tool\"", "Taip perkataan Arab untuk: \"cara\"", "Ketik kata Arab untuk: \"sarana\"", "Tape le mot arabe pour : \"moyen\"", "Escribe la palabra árabe para: \"medio\""),
              arabicText: "وَسِيلَةٌ",
              answer: "وَسِيلَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f527/512.webp"
            },
            {
              id: "uae-g5u5l1spelluae-g5u5l1v1",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "حَمَامٌ",
              answer: "حَمَامٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f54a-fe0f/512.webp"
            },
            {
              id: "uae-g5u5l1mcquae-g5u5l1v10",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"مَوْثُوقٌ\"؟", "What does \"reliable / trustworthy\" mean?", "Apakah maksud \"boleh dipercayai\"?", "Apa arti \"dapat dipercaya\"?", "Que signifie \"fiable\" ?", "¿Qué significa \"confiable\"?"),
              arabicText: "مَوْثُوقٌ",
              options: [
                "reliable / trustworthy",
                "future",
                "correspondent / reporter",
                "he trained / practiced"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2705/512.webp"
            }
          ]
        },
        {
          id: "uae-g5u5l2",
          unitId: "uae-g5u5",
          gradeId: "uae-g5",
          order: 2,
          title: t("الإِعْلَامُ", "Media", "Media", "Media", "médias", "medios de comunicación"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الإِعْلَامُ يَنْقُلُ الأَخْبَارَ وَيَرْبِطُ النَّاسَ بِالْعَالَمِ مِنْ حَوْلِهِمْ!", "The media transmits news and connects people with the world around them!", "Media menyampaikan berita dan menghubungkan manusia dengan dunia di sekeliling mereka!", "Media menyampaikan berita dan menghubungkan orang dengan dunia di sekitar mereka!", "Les médias transmettent les nouvelles et relient les gens au monde qui les entoure !", "¡Los medios transmiten noticias y conectan a las personas con el mundo que los rodea!"),
          vocabulary: [
            {
              id: "uae-g5u5l2v1",
              arabic: "تِلِفِزْيُونٌ",
              transliteration: "tilifiziyūn",
              translation: t("تِلِفِزْيُونٌ", "television", "televisyen", "televisi", "télévision", "televisión"),
              emoji: "📺"
            },
            {
              id: "uae-g5u5l2v2",
              arabic: "صَحِيفَةٌ",
              transliteration: "ṣaḥīfa",
              translation: t("صَحِيفَةٌ", "newspaper", "akhbar", "koran", "journal", "periódico"),
              emoji: "📰"
            },
            {
              id: "uae-g5u5l2v3",
              arabic: "إِذَاعَةٌ",
              transliteration: "idhāʿa",
              translation: t("إِذَاعَةٌ", "radio broadcasting", "radio", "siaran radio", "radio", "radio"),
              emoji: "📻"
            },
            {
              id: "uae-g5u5l2v4",
              arabic: "مُرَاسِلٌ",
              transliteration: "murāsil",
              translation: t("مُرَاسِلٌ", "correspondent / reporter", "wartawan", "koresponden", "correspondant", "corresponsal"),
              emoji: "📡"
            },
            {
              id: "uae-g5u5l2v5",
              arabic: "خَبَرٌ",
              transliteration: "khabar",
              translation: t("خَبَرٌ", "news", "berita", "berita", "nouvelle", "noticia"),
              emoji: "📢"
            },
            {
              id: "uae-g5u5l2v6",
              arabic: "مَقَالٌ",
              transliteration: "maqāl",
              translation: t("مَقَالٌ", "article", "artikel", "artikel", "article", "artículo"),
              emoji: "📄"
            },
            {
              id: "uae-g5u5l2v7",
              arabic: "مُذِيعٌ",
              transliteration: "mudhīʿ",
              translation: t("مُذِيعٌ", "broadcaster / presenter", "pembawa berita", "pembawa acara", "présentateur", "presentador"),
              emoji: "🎙️"
            },
            {
              id: "uae-g5u5l2v8",
              arabic: "بَثَّ",
              transliteration: "baththa",
              translation: t("بَثَّ", "he broadcast", "dia menyiarkan", "dia menyiarkan", "il a diffusé", "transmitió"),
              emoji: "📡"
            },
            {
              id: "uae-g5u5l2v9",
              arabic: "تَقْرِيرٌ",
              transliteration: "taqrīr",
              translation: t("تَقْرِيرٌ", "report", "laporan", "laporan", "rapport", "informe"),
              emoji: "📋"
            },
            {
              id: "uae-g5u5l2v10",
              arabic: "مَصْدَاقِيَّةٌ",
              transliteration: "maṣdāqiyya",
              translation: t("مَصْدَاقِيَّةٌ", "credibility", "kredibiliti", "kredibilitas", "crédibilité", "credibilidad"),
              emoji: "✅"
            }
          ],
          dialogue: [
            {
              speaker: "وَالِد",
              arabic: "مِنْ أَيْنَ تَحْصُلُ عَلَى الأَخْبَارِ يَا وَلَدِي؟",
              translation: t("مِنْ أَيْنَ تَحْصُلُ عَلَى الأَخْبَارِ يَا وَلَدِي؟", "Where do you get the news my son?", "Dari mana kamu mendapat berita anakku?", "Dari mana kamu mendapat berita anakku?", "D'où obtiens-tu les nouvelles mon fils ?", "¿De dónde obtienes las noticias hijo mío?")
            },
            {
              speaker: "وَلَد",
              arabic: "أُشَاهِدُ الأَخْبَارَ فِي التِّلِفِزْيُونِ وَأَقْرَأُ الصَّحِيفَةَ الإِلِكْتِرُونِيَّةَ.",
              translation: t("أُشَاهِدُ الأَخْبَارَ فِي التِّلِفِزْيُونِ وَأَقْرَأُ الصَّحِيفَةَ الإِلِكْتِرُونِيَّةَ.", "I watch the news on television and read the electronic newspaper.", "Saya menonton berita di televisyen dan membaca akhbar elektronik.", "Saya menonton berita di televisi dan membaca koran elektronik.", "Je regarde les nouvelles à la télévision et lis le journal électronique.", "Veo las noticias en televisión y leo el periódico electrónico.")
            },
            {
              speaker: "وَالِد",
              arabic: "مُمْتَازٌ! الإِعْلَامُ الْمُتَنَوِّعُ يَمْنَحُنَا صُورَةً شَامِلَةً عَنِ الْعَالَمِ.",
              translation: t("مُمْتَازٌ! الإِعْلَامُ الْمُتَنَوِّعُ يَمْنَحُنَا صُورَةً شَامِلَةً عَنِ الْعَالَمِ.", "Excellent! Diverse media gives us a comprehensive picture of the world.", "Cemerlang! Media yang pelbagai memberikan kita gambaran menyeluruh tentang dunia.", "Luar biasa! Media yang beragam memberi kita gambaran menyeluruh tentang dunia.", "Excellent ! Des médias diversifiés nous donnent une image complète du monde.", "¡Excelente! Los medios diversos nos dan una imagen completa del mundo.")
            }
          ],
          exercises: [
            {
              id: "uae-g5u5l2e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ وَسِيلَةَ الإِعْلَامِ الصَّحِيحَةَ", "Listen and choose the correct media", "Dengar dan pilih media yang betul", "Dengarkan dan pilih media yang benar", "Écoute et choisis le bon média", "Escucha y elige el medio correcto"),
              arabicText: "صَحِيفَةٌ",
              options: [
                "تِلِفِزْيُونٌ",
                "صَحِيفَةٌ",
                "إِذَاعَةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4f0/512.webp"
            },
            {
              id: "uae-g5u5l2e2",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا الشَّخْصُ الَّذِي يَكْتُبُ الأَخْبَارَ فِي الصَّحِيفَةِ؟", "What person writes news in the newspaper?", "Siapakah orang yang menulis berita dalam akhbar?", "Siapa orang yang menulis berita di koran?", "Quelle est la personne qui écrit les nouvelles dans le journal ?", "¿Qué persona escribe noticias en el periódico?"),
              options: [
                "الطَّبِيبُ",
                "الْمُعَلِّمُ",
                "الْمُرَاسِلُ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4fa/512.webp"
            },
            {
              id: "uae-g5u5l2e3",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ وَسِيلَةَ الإِعْلَامِ بِرَمْزِهَا", "Match the media to its symbol", "Padankan media dengan simbolnya", "Cocokkan media dengan simbolnya", "Relie le média à son symbole", "Une el medio con su símbolo"),
              pairs: [
                {
                  a: "تِلِفِزْيُونٌ",
                  b: "📺"
                },
                {
                  a: "صَحِيفَةٌ",
                  b: "📰"
                },
                {
                  a: "إِذَاعَةٌ",
                  b: "📻"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4fa/512.webp"
            },
            {
              id: "uae-g5u5l2e4",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنْ وَسِيلَةِ إِعْلَامٍ تُفَضِّلُهَا", "Talk about a media outlet you prefer", "Bercakap tentang media yang anda sukai", "Bicarakan tentang media yang kamu sukai", "Parle d'un média que tu préfères", "Habla sobre un medio de comunicación que prefieras"),
              arabicText: "وَسِيلَةُ الإِعْلَامِ الَّتِي أُفَضِّلُهَا هِيَ...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4fa/512.webp"
            },
            {
              id: "uae-g5u5l2e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا الشَّخْصُ الَّذِي يُقَدِّمُ الأَخْبَارَ فِي التِّلِفِزْيُونِ؟", "What person presents news on television?", "Siapakah orang yang membentangkan berita di televisyen?", "Siapa orang yang menyajikan berita di televisi?", "Quelle est la personne qui présente les nouvelles à la télévision ?", "¿Qué persona presenta las noticias en televisión?"),
              options: [
                "الْمُهَنْدِسُ",
                "الْمُذِيعُ",
                "الطَّبِيبُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4fa/512.webp"
            },
            {
              id: "uae-g5u5l2e6",
              type: "arrange",
              skill: "writing",
              prompt: t("رَتِّبِ الْكَلِمَاتِ لِتَكْوِينِ جُمْلَةٍ", "Arrange the words to form a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "يَبُثُّ الْمُذِيعُ الأَخْبَارَ الْمُهِمَّةَ لِلنَّاسِ كُلَّ يَوْمٍ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4fa/512.webp"
            },
            {
              id: "uae-g5u5l2e7",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ عَنْ أَهَمِّيَّةِ الإِعْلَامِ فِي حَيَاتِنَا", "Write about the importance of media in our lives", "Tulis tentang kepentingan media dalam kehidupan kita", "Tulis tentang pentingnya media dalam kehidupan kita", "Écris sur l'importance des médias dans notre vie", "Escribe sobre la importancia de los medios en nuestra vida"),
              answer: "الإِعْلَامُ مُهِمٌّ لِنَقْلِ الأَخْبَارِ وَتَوْعِيَةِ النَّاسِ وَرَبْطِهِمْ بِالْعَالَمِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4fa/512.webp"
            },
            {
              id: "uae-g5u5l2e8",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Relie le mot à son sens", "Une la palabra con su significado"),
              pairs: [
                {
                  a: "مَقَالٌ",
                  b: "article"
                },
                {
                  a: "تَقْرِيرٌ",
                  b: "report"
                },
                {
                  a: "مَصْدَاقِيَّةٌ",
                  b: "credibility"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4fa/512.webp"
            },
            {
              id: "uae-g5u5l2writeuae-g5u5l2v5",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"خَبَرٌ\"", "Type the Arabic word for: \"news\"", "Taip perkataan Arab untuk: \"berita\"", "Ketik kata Arab untuk: \"berita\"", "Tape le mot arabe pour : \"nouvelle\"", "Escribe la palabra árabe para: \"noticia\""),
              arabicText: "خَبَرٌ",
              answer: "خَبَرٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4e2/512.webp"
            },
            {
              id: "uae-g5u5l2speakuae-g5u5l2v2",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "صَحِيفَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4f0/512.webp"
            },
            {
              id: "uae-g5u5l2spelluae-g5u5l2v10",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "مَصْدَاقِيَّةٌ",
              answer: "مَصْدَاقِيَّةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2705/512.webp"
            },
            {
              id: "uae-g5u5l2listenuae-g5u5l2v10",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "مَصْدَاقِيَّةٌ",
              options: [
                "مَصْدَاقِيَّةٌ",
                "مُتْعَةٌ",
                "تَرْتِيبٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2705/512.webp"
            }
          ]
        },
        {
          id: "uae-g5u5l3",
          unitId: "uae-g5u5",
          gradeId: "uae-g5",
          order: 3,
          title: t("وَسَائِلُ التَّوَاصُلِ", "Communication Tools", "Alat Komunikasi", "Alat Komunikasi", "Les outils de communication", "Las herramientas de comunicación"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("وَسَائِلُ التَّوَاصُلِ الْحَدِيثَةُ جَعَلَتِ الْعَالَمَ قَرْيَةً صَغِيرَةً!", "Modern communication tools have made the world a small village!", "Alat komunikasi moden telah menjadikan dunia seperti sebuah perkampungan kecil!", "Alat komunikasi modern telah menjadikan dunia seperti desa kecil!", "Les outils de communication modernes ont fait du monde un petit village !", "¡Los medios de comunicación modernos han hecho del mundo una pequeña aldea!"),
          vocabulary: [
            {
              id: "uae-g5u5l3v1",
              arabic: "إِنْتِرْنِتٌ",
              transliteration: "intarnit",
              translation: t("إِنْتِرْنِتٌ", "internet", "internet", "internet", "internet", "internet"),
              emoji: "🌐"
            },
            {
              id: "uae-g5u5l3v2",
              arabic: "تَطْبِيقٌ",
              transliteration: "taṭbīq",
              translation: t("تَطْبِيقٌ", "application / app", "aplikasi", "aplikasi", "application", "aplicación"),
              emoji: "📱"
            },
            {
              id: "uae-g5u5l3v3",
              arabic: "تَوَاصُلٌ اجْتِمَاعِيٌّ",
              transliteration: "tawāṣul ijtimāʿī",
              translation: t("تَوَاصُلٌ اجْتِمَاعِيٌّ", "social media", "media sosial", "media sosial", "médias sociaux", "redes sociales"),
              emoji: "👥"
            },
            {
              id: "uae-g5u5l3v4",
              arabic: "مُحَادَثَةٌ",
              transliteration: "muḥādatha",
              translation: t("مُحَادَثَةٌ", "conversation / chat", "perbualan", "percakapan", "conversation", "conversación"),
              emoji: "💬"
            },
            {
              id: "uae-g5u5l3v5",
              arabic: "مُشَارَكَةٌ",
              transliteration: "mushāraka",
              translation: t("مُشَارَكَةٌ", "sharing", "perkongsian", "berbagi", "partage", "compartir"),
              emoji: "🔗"
            },
            {
              id: "uae-g5u5l3v6",
              arabic: "هَاتِفٌ ذَكِيٌّ",
              transliteration: "hātif dhakī",
              translation: t("هَاتِفٌ ذَكِيٌّ", "smartphone", "telefon pintar", "ponsel pintar", "smartphone", "teléfono inteligente"),
              emoji: "📲"
            },
            {
              id: "uae-g5u5l3v7",
              arabic: "أَمَانٌ رَقْمِيٌّ",
              transliteration: "amān raqmī",
              translation: t("أَمَانٌ رَقْمِيٌّ", "digital safety", "keselamatan digital", "keamanan digital", "sécurité numérique", "seguridad digital"),
              emoji: "🔒"
            },
            {
              id: "uae-g5u5l3v8",
              arabic: "بَرِيدٌ إِلِكْتِرُونِيٌّ",
              transliteration: "barīd iliktrunī",
              translation: t("بَرِيدٌ إِلِكْتِرُونِيٌّ", "email", "e-mel", "email", "courriel", "correo electrónico"),
              emoji: "📧"
            },
            {
              id: "uae-g5u5l3v9",
              arabic: "مُؤْتَمَرٌ مَرْئِيٌّ",
              transliteration: "muʾtamar marʾī",
              translation: t("مُؤْتَمَرٌ مَرْئِيٌّ", "video conference", "persidangan video", "konferensi video", "vidéoconférence", "videoconferencia"),
              emoji: "💻"
            },
            {
              id: "uae-g5u5l3v10",
              arabic: "مَسْؤُولِيَّةٌ رَقْمِيَّةٌ",
              transliteration: "masʾūliyya raqmiyya",
              translation: t("مَسْؤُولِيَّةٌ رَقْمِيَّةٌ", "digital responsibility", "tanggungjawab digital", "tanggung jawab digital", "responsabilité numérique", "responsabilidad digital"),
              emoji: "🛡️"
            }
          ],
          dialogue: [
            {
              speaker: "رِيَم",
              arabic: "كَيْفَ تَتَوَاصَلُ مَعَ أَصْدِقَائِكَ يَا طَلَال؟",
              translation: t("كَيْفَ تَتَوَاصَلُ مَعَ أَصْدِقَائِكَ يَا طَلَال؟", "How do you communicate with your friends Talal?", "Bagaimana kamu berkomunikasi dengan rakan-rakan kamu Talal?", "Bagaimana kamu berkomunikasi dengan teman-temanmu Talal?", "Comment communiques-tu avec tes amis Talal ?", "¿Cómo te comunicas con tus amigos Talal?")
            },
            {
              speaker: "طَلَال",
              arabic: "أَسْتَخْدِمُ تَطْبِيقَاتِ التَّوَاصُلِ الاجْتِمَاعِيِّ عَبْرَ الإِنْتِرْنِتِ لِلْمُحَادَثَةِ وَالْمُشَارَكَةِ.",
              translation: t("أَسْتَخْدِمُ تَطْبِيقَاتِ التَّوَاصُلِ الاجْتِمَاعِيِّ عَبْرَ الإِنْتِرْنِتِ لِلْمُحَادَثَةِ وَالْمُشَارَكَةِ.", "I use social communication apps through the internet for conversation and sharing.", "Saya menggunakan aplikasi media sosial melalui internet untuk perbualan dan perkongsian.", "Saya menggunakan aplikasi media sosial melalui internet untuk percakapan dan berbagi.", "J'utilise des applications de médias sociaux sur internet pour les conversations et le partage.", "Uso aplicaciones de redes sociales a través de internet para conversaciones y compartir.")
            },
            {
              speaker: "رِيَم",
              arabic: "يَجِبُ أَنْ نَسْتَخْدِمَ هَذِهِ الْوَسَائِلَ بِمَسْؤُولِيَّةٍ وَحِكْمَةٍ.",
              translation: t("يَجِبُ أَنْ نَسْتَخْدِمَ هَذِهِ الْوَسَائِلَ بِمَسْؤُولِيَّةٍ وَحِكْمَةٍ.", "We must use these tools responsibly and wisely.", "Kita mesti menggunakan alat-alat ini dengan penuh tanggungjawab dan bijaksana.", "Kita harus menggunakan alat-alat ini dengan penuh tanggung jawab dan bijaksana.", "Nous devons utiliser ces outils de manière responsable et sage.", "Debemos usar estas herramientas de manera responsable y sabia.")
            }
          ],
          exercises: [
            {
              id: "uae-g5u5l3e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "تَطْبِيقٌ",
              options: [
                "إِنْتِرْنِتٌ",
                "تَطْبِيقٌ",
                "مُحَادَثَةٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4f1/512.webp"
            },
            {
              id: "uae-g5u5l3e2",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا الَّذِي نَسْتَخْدِمُهُ لِلتَّوَاصُلِ مَعَ الْأَصْدِقَاءِ عَبْرَ الإِنْتِرْنِتِ؟", "What do we use to communicate with friends via the internet?", "Apa yang kita gunakan untuk berkomunikasi dengan rakan melalui internet?", "Apa yang kita gunakan untuk berkomunikasi dengan teman melalui internet?", "Qu'utilisons-nous pour communiquer avec des amis via internet ?", "¿Qué usamos para comunicarnos con amigos por internet?"),
              options: [
                "الصَّحِيفَةُ",
                "الإِذَاعَةُ",
                "تَطْبِيقَاتُ التَّوَاصُلِ الاجْتِمَاعِيِّ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f310/512.webp"
            },
            {
              id: "uae-g5u5l3e3",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Relie le mot à son sens", "Une la palabra con su significado"),
              pairs: [
                {
                  a: "إِنْتِرْنِتٌ",
                  b: "🌐"
                },
                {
                  a: "تَطْبِيقٌ",
                  b: "📱"
                },
                {
                  a: "مُحَادَثَةٌ",
                  b: "💬"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f310/512.webp"
            },
            {
              id: "uae-g5u5l3e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ عَنْ فَوَائِدِ التَّوَاصُلِ الاجْتِمَاعِيِّ وَمَخَاطِرِهِ", "Write about the benefits and risks of social media", "Tulis tentang manfaat dan risiko media sosial", "Tulis tentang manfaat dan risiko media sosial", "Écris sur les avantages et les risques des médias sociaux", "Escribe sobre los beneficios y riesgos de las redes sociales"),
              answer: "التَّوَاصُلُ الاجْتِمَاعِيُّ مُفِيدٌ لِلتَّوَاصُلِ لَكِنَّ يَجِبُ اسْتِخْدَامُهُ بِحِكْمَةٍ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f310/512.webp"
            },
            {
              id: "uae-g5u5l3e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا الْمَسْؤُولِيَّةُ الرَّقْمِيَّةُ؟", "What is digital responsibility?", "Apakah tanggungjawab digital?", "Apa tanggung jawab digital?", "Qu'est-ce que la responsabilité numérique ?", "¿Qué es la responsabilidad digital?"),
              options: [
                "اسْتِخْدَامُ الإِنْتِرْنِتِ بِلَا قُيُودٍ",
                "الاسْتِخْدَامُ الآمِنُ وَالأَخْلَاقِيُّ لِلتِّقْنِيَّةِ",
                "تَجَاهُلُ الأَمَانِ الرَّقْمِيِّ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f310/512.webp"
            },
            {
              id: "uae-g5u5l3e6",
              type: "arrange",
              skill: "writing",
              prompt: t("رَتِّبِ الْكَلِمَاتِ لِتَكْوِينِ جُمْلَةٍ", "Arrange the words to form a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "أَسْتَخْدِمُ الإِنْتِرْنِتَ بِمَسْؤُولِيَّةٍ لِلتَّعَلُّمِ وَالتَّوَاصُلِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f310/512.webp"
            },
            {
              id: "uae-g5u5l3e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنْ كَيْفِيَّةِ اسْتِخْدَامِ الإِنْتِرْنِتِ بِأَمَانٍ", "Talk about how to use the internet safely", "Bercakap tentang cara menggunakan internet dengan selamat", "Bicarakan tentang cara menggunakan internet dengan aman", "Parle de la façon d'utiliser internet en toute sécurité", "Habla sobre cómo usar internet de forma segura"),
              arabicText: "لِاسْتِخْدَامِ الإِنْتِرْنِتِ بِأَمَانٍ يَجِبُ عَلَيْنَا...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f310/512.webp"
            },
            {
              id: "uae-g5u5l3e8",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Relie le mot à son sens", "Une la palabra con su significado"),
              pairs: [
                {
                  a: "بَرِيدٌ إِلِكْتِرُونِيٌّ",
                  b: "email"
                },
                {
                  a: "أَمَانٌ رَقْمِيٌّ",
                  b: "digital safety"
                },
                {
                  a: "هَاتِفٌ ذَكِيٌّ",
                  b: "smartphone"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f310/512.webp"
            },
            {
              id: "uae-g5u5l3mcquae-g5u5l3v3",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"تَوَاصُلٌ اجْتِمَاعِيٌّ\"؟", "What does \"social media\" mean?", "Apakah maksud \"media sosial\"?", "Apa arti \"media sosial\"?", "Que signifie \"médias sociaux\" ?", "¿Qué significa \"redes sociales\"?"),
              arabicText: "تَوَاصُلٌ اجْتِمَاعِيٌّ",
              options: [
                "social media",
                "school uniform",
                "Amman",
                "conversation / chat"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f465/512.webp"
            },
            {
              id: "uae-g5u5l3writeuae-g5u5l3v5",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"مُشَارَكَةٌ\"", "Type the Arabic word for: \"sharing\"", "Taip perkataan Arab untuk: \"perkongsian\"", "Ketik kata Arab untuk: \"berbagi\"", "Tape le mot arabe pour : \"partage\"", "Escribe la palabra árabe para: \"compartir\""),
              arabicText: "مُشَارَكَةٌ",
              answer: "مُشَارَكَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f517/512.webp"
            },
            {
              id: "uae-g5u5l3writeuae-g5u5l3v7",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"أَمَانٌ رَقْمِيٌّ\"", "Type the Arabic word for: \"digital safety\"", "Taip perkataan Arab untuk: \"keselamatan digital\"", "Ketik kata Arab untuk: \"keamanan digital\"", "Tape le mot arabe pour : \"sécurité numérique\"", "Escribe la palabra árabe para: \"seguridad digital\""),
              arabicText: "أَمَانٌ رَقْمِيٌّ",
              answer: "أَمَانٌ رَقْمِيٌّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f512/512.webp"
            },
            {
              id: "uae-g5u5l3writeuae-g5u5l3v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"إِنْتِرْنِتٌ\"", "Type the Arabic word for: \"internet\"", "Taip perkataan Arab untuk: \"internet\"", "Ketik kata Arab untuk: \"internet\"", "Tape le mot arabe pour : \"internet\"", "Escribe la palabra árabe para: \"internet\""),
              arabicText: "إِنْتِرْنِتٌ",
              answer: "إِنْتِرْنِتٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f310/512.webp"
            }
          ]
        },
        {
          id: "uae-g5u5review",
          unitId: "uae-g5u5",
          gradeId: "uae-g5",
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
              id: "uae-g5u5l1v1",
              arabic: "حَمَامٌ",
              transliteration: "ḥamām",
              translation: t("حَمَامٌ", "pigeon / dove", "merpati", "merpati", "pigeon", "paloma"),
              emoji: "🕊️"
            },
            {
              id: "uae-g5u5l1v2",
              arabic: "رِسَالَةٌ",
              transliteration: "risāla",
              translation: t("رِسَالَةٌ", "message / letter", "mesej", "pesan", "message", "mensaje"),
              emoji: "📜"
            },
            {
              id: "uae-g5u5l1v3",
              arabic: "تَوَاصُلٌ",
              transliteration: "tawāṣul",
              translation: t("تَوَاصُلٌ", "communication", "komunikasi", "komunikasi", "communication", "comunicación"),
              emoji: "📡"
            },
            {
              id: "uae-g5u5l1v4",
              arabic: "تَارِيخٌ",
              transliteration: "tārīkh",
              translation: t("تَارِيخٌ", "history", "sejarah", "sejarah", "histoire", "historia"),
              emoji: "⌛"
            },
            {
              id: "uae-g5u5l1v5",
              arabic: "سُرْعَةٌ",
              transliteration: "surʿa",
              translation: t("سُرْعَةٌ", "speed", "kelajuan", "kecepatan", "vitesse", "velocidad"),
              emoji: "⚡"
            },
            {
              id: "uae-g5u5l1v6",
              arabic: "أَرْسَلَ",
              transliteration: "arsala",
              translation: t("أَرْسَلَ", "he sent", "dia menghantar", "dia mengirim", "il a envoyé", "envió"),
              emoji: "📨"
            },
            {
              id: "uae-g5u5l1v7",
              arabic: "وَسِيلَةٌ",
              transliteration: "wasīla",
              translation: t("وَسِيلَةٌ", "means / tool", "cara", "sarana", "moyen", "medio"),
              emoji: "🔧"
            },
            {
              id: "uae-g5u5l1v8",
              arabic: "قَدِيمٌ",
              transliteration: "qadīm",
              translation: t("قَدِيمٌ", "ancient / old", "kuno", "kuno", "ancien", "antiguo"),
              emoji: "📿"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "uae-g5u5reviewspelluae-g5u5l1v1",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "حَمَامٌ",
              answer: "حَمَامٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f54a-fe0f/512.webp"
            },
            {
              id: "uae-g5u5reviewlistenuae-g5u5l1v3",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "تَوَاصُلٌ",
              options: [
                "قَدِيمٌ",
                "مُؤْتَمَرٌ مَرْئِيٌّ",
                "تَوَاصُلٌ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4e1/512.webp"
            },
            {
              id: "uae-g5u5reviewspeakuae-g5u5l1v6",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "أَرْسَلَ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4e8/512.webp"
            },
            {
              id: "uae-g5u5reviewwriteuae-g5u5l1v8",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"قَدِيمٌ\"", "Type the Arabic word for: \"ancient / old\"", "Taip perkataan Arab untuk: \"kuno\"", "Ketik kata Arab untuk: \"kuno\"", "Tape le mot arabe pour : \"ancien\"", "Escribe la palabra árabe para: \"antiguo\""),
              arabicText: "قَدِيمٌ",
              answer: "قَدِيمٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4ff/512.webp"
            },
            {
              id: "uae-g5u5reviewwriteuae-g5u5l1v1",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"حَمَامٌ\"", "Type the Arabic word for: \"pigeon / dove\"", "Taip perkataan Arab untuk: \"merpati\"", "Ketik kata Arab untuk: \"merpati\"", "Tape le mot arabe pour : \"pigeon\"", "Escribe la palabra árabe para: \"paloma\""),
              arabicText: "حَمَامٌ",
              answer: "حَمَامٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f54a-fe0f/512.webp"
            },
            {
              id: "uae-g5u5reviewmcquae-g5u5l1v3",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"تَوَاصُلٌ\"؟", "What does \"communication\" mean?", "Apakah maksud \"komunikasi\"?", "Apa arti \"komunikasi\"?", "Que signifie \"communication\" ?", "¿Qué significa \"comunicación\"?"),
              arabicText: "تَوَاصُلٌ",
              options: [
                "network",
                "communication",
                "commitment",
                "author"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4e1/512.webp"
            }
          ]
        }
      ]
    },
    {
      id: "uae-g5u6",
      gradeId: "uae-g5",
      order: 6,
      title: t("كُلُّنَا أَذْكِيَاءُ", "We Are All Smart", "Kita Semua Bijak", "Kita Semua Cerdas", "Nous sommes tous intelligents", "Todos somos inteligentes"),
      theme: "#6366F1",
      lessons: [
        {
          id: "uae-g5u6l1",
          unitId: "uae-g5u6",
          gradeId: "uae-g5",
          order: 1,
          title: t("الْحَيَوَانُ وَالذَّكَاءُ", "Animals", "Haiwan", "Hewan", "animaux", "animales"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الْحَيَوَانَاتُ تُدْهِشُنَا بِذَكَائِهَا وَقُدْرَتِهَا عَلَى التَّعَلُّمِ وَحَلِّ الْمَشَاكِلِ!", "Animals amaze us with their intelligence and ability to learn and solve problems!", "Haiwan menakjubkan kita dengan kecerdasan dan kemampuan mereka untuk belajar dan menyelesaikan masalah!", "Hewan menakjubkan kita dengan kecerdasan dan kemampuan mereka untuk belajar dan memecahkan masalah!", "Les animaux nous étonnent par leur intelligence et leur capacité à apprendre et résoudre des problèmes !", "¡Los animales nos asombran con su inteligencia y capacidad para aprender y resolver problemas!"),
          vocabulary: [
            {
              id: "uae-g5u6l1v1",
              arabic: "دَلَافِينُ",
              transliteration: "dalāfīn",
              translation: t("دَلَافِينُ", "dolphins", "lumba-lumba", "lumba-lumba", "dauphins", "delfines"),
              emoji: "🐬"
            },
            {
              id: "uae-g5u6l1v2",
              arabic: "قِرَدَةٌ",
              transliteration: "qirada",
              translation: t("قِرَدَةٌ", "monkeys", "monyet", "monyet", "singes", "monos"),
              emoji: "🐒"
            },
            {
              id: "uae-g5u6l1v3",
              arabic: "ذَكَاءٌ",
              transliteration: "dhakāʾ",
              translation: t("ذَكَاءٌ", "intelligence", "kecerdasan", "kecerdasan", "intelligence", "inteligencia"),
              emoji: "🧠"
            },
            {
              id: "uae-g5u6l1v4",
              arabic: "تَعَلَّمَ",
              transliteration: "taʿallama",
              translation: t("تَعَلَّمَ", "he learned", "dia belajar", "dia belajar", "il a appris", "aprendió"),
              emoji: "📚"
            },
            {
              id: "uae-g5u6l1v5",
              arabic: "حَلَّ مُشْكِلَةً",
              transliteration: "ḥalla mushkila",
              translation: t("حَلَّ مُشْكِلَةً", "solved a problem", "selesaikan masalah", "memecahkan masalah", "résoudre un problème", "resolvió un problema"),
              emoji: "💡"
            },
            {
              id: "uae-g5u6l1v6",
              arabic: "سُلُوكٌ",
              transliteration: "sulūk",
              translation: t("سُلُوكٌ", "behaviour", "tingkah laku", "perilaku", "comportement", "comportamiento"),
              emoji: "🔍"
            },
            {
              id: "uae-g5u6l1v7",
              arabic: "تَدَرَّبَ",
              transliteration: "tadarraba",
              translation: t("تَدَرَّبَ", "he trained / practiced", "dia berlatih", "dia berlatih", "il s'est entraîné", "se entrenó"),
              emoji: "🏋️"
            },
            {
              id: "uae-g5u6l1v8",
              arabic: "غَرِيزَةٌ",
              transliteration: "gharīza",
              translation: t("غَرِيزَةٌ", "instinct", "naluri", "insting", "instinct", "instinto"),
              emoji: "⚡"
            },
            {
              id: "uae-g5u6l1v9",
              arabic: "بَاحِثٌ",
              transliteration: "bāḥith",
              translation: t("بَاحِثٌ", "researcher / scientist", "penyelidik", "peneliti", "chercheur", "investigador"),
              emoji: "🔬"
            },
            {
              id: "uae-g5u6l1v10",
              arabic: "تَجْرِبَةٌ",
              transliteration: "tajriba",
              translation: t("تَجْرِبَةٌ", "experiment", "eksperimen", "eksperimen", "expérience", "experimento"),
              emoji: "🧪"
            }
          ],
          dialogue: [
            {
              speaker: "بَاحِث",
              arabic: "أَثْبَتَتِ الدِّرَاسَاتُ أَنَّ الدَّلَافِينَ مِنْ أَذْكَى الْحَيَوَانَاتِ فِي الْعَالَمِ.",
              translation: t("أَثْبَتَتِ الدِّرَاسَاتُ أَنَّ الدَّلَافِينَ مِنْ أَذْكَى الْحَيَوَانَاتِ فِي الْعَالَمِ.", "Studies have proven that dolphins are among the smartest animals in the world.", "Kajian telah membuktikan bahawa lumba-lumba adalah antara haiwan paling cerdas di dunia.", "Penelitian telah membuktikan bahwa lumba-lumba adalah salah satu hewan paling cerdas di dunia.", "Les études ont prouvé que les dauphins sont parmi les animaux les plus intelligents au monde.", "Los estudios han demostrado que los delfines están entre los animales más inteligentes del mundo.")
            },
            {
              speaker: "طَالِب",
              arabic: "كَيْفَ تُثْبِتُ أَنَّ الْقِرَدَةَ أَيْضًا ذَكِيَّةٌ؟",
              translation: t("كَيْفَ تُثْبِتُ أَنَّ الْقِرَدَةَ أَيْضًا ذَكِيَّةٌ؟", "How do you prove that monkeys are also intelligent?", "Bagaimana kamu membuktikan bahawa monyet juga cerdas?", "Bagaimana kamu membuktikan bahwa monyet juga cerdas?", "Comment prouvez-vous que les singes sont aussi intelligents ?", "¿Cómo demuestras que los monos también son inteligentes?")
            },
            {
              speaker: "بَاحِث",
              arabic: "الْقِرَدَةُ تَسْتَطِيعُ التَّعَلُّمَ وَحَلَّ الْمَشَاكِلِ الْمُعَقَّدَةِ بِسُرْعَةٍ مُذْهِلَةٍ.",
              translation: t("الْقِرَدَةُ تَسْتَطِيعُ التَّعَلُّمَ وَحَلَّ الْمَشَاكِلِ الْمُعَقَّدَةِ بِسُرْعَةٍ مُذْهِلَةٍ.", "Monkeys can learn and solve complex problems at an amazing speed.", "Monyet boleh belajar dan menyelesaikan masalah yang kompleks dengan kelajuan yang menakjubkan.", "Monyet dapat belajar dan memecahkan masalah yang kompleks dengan kecepatan yang menakjubkan.", "Les singes peuvent apprendre et résoudre des problèmes complexes à une vitesse étonnante.", "Los monos pueden aprender y resolver problemas complejos a una velocidad asombrosa.")
            }
          ],
          exercises: [
            {
              id: "uae-g5u6l1e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْحَيَوَانَ الصَّحِيحَ", "Listen and choose the correct animal", "Dengar dan pilih haiwan yang betul", "Dengarkan dan pilih hewan yang benar", "Écoute et choisis le bon animal", "Escucha y elige el animal correcto"),
              arabicText: "دَلَافِينُ",
              options: [
                "قِرَدَةٌ",
                "دَلَافِينُ",
                "أَسَدٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f42c/512.webp"
            },
            {
              id: "uae-g5u6l1e2",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا أَذْكَى الْحَيَوَانَاتِ الْبَحْرِيَّةِ؟", "What are the smartest sea animals?", "Apakah haiwan laut yang paling cerdas?", "Apa hewan laut yang paling cerdas?", "Quels sont les animaux marins les plus intelligents ?", "¿Cuáles son los animales marinos más inteligentes?"),
              options: [
                "الأَسْمَاكُ",
                "الدَّلَافِينُ",
                "السَّلَاحِفُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f42c/512.webp"
            },
            {
              id: "uae-g5u6l1e3",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Relie le mot à son sens", "Une la palabra con su significado"),
              pairs: [
                {
                  a: "دَلَافِينُ",
                  b: "dolphins"
                },
                {
                  a: "ذَكَاءٌ",
                  b: "intelligence"
                },
                {
                  a: "تَعَلَّمَ",
                  b: "learned"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f42c/512.webp"
            },
            {
              id: "uae-g5u6l1e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ عَنْ حَيَوَانٍ ذَكِيٍّ تَعْرِفُهُ", "Write about an intelligent animal you know", "Tulis tentang haiwan cerdas yang anda kenal", "Tulis tentang hewan cerdas yang kamu ketahui", "Écris sur un animal intelligent que tu connais", "Escribe sobre un animal inteligente que conozcas"),
              answer: "الدَّلَافِينُ حَيَوَانَاتٌ ذَكِيَّةٌ تَسْتَطِيعُ التَّعَلُّمَ وَحَلَّ الْمَشَاكِلِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f42c/512.webp"
            },
            {
              id: "uae-g5u6l1e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا الْفَرْقُ بَيْنَ الذَّكَاءِ وَالْغَرِيزَةِ عِنْدَ الْحَيَوَانَاتِ؟", "What is the difference between intelligence and instinct in animals?", "Apakah perbezaan antara kecerdasan dan naluri pada haiwan?", "Apa perbedaan antara kecerdasan dan insting pada hewan?", "Quelle est la différence entre intelligence et instinct chez les animaux ?", "¿Cuál es la diferencia entre inteligencia e instinto en los animales?"),
              options: [
                "لَا فَرْقَ بَيْنَهُمَا",
                "الذَّكَاءُ مُكْتَسَبٌ وَالْغَرِيزَةُ فِطْرِيَّةٌ",
                "الْغَرِيزَةُ أَفْضَلُ مِنَ الذَّكَاءِ دَائِمًا"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f42c/512.webp"
            },
            {
              id: "uae-g5u6l1e6",
              type: "arrange",
              skill: "writing",
              prompt: t("رَتِّبِ الْكَلِمَاتِ لِتَكْوِينِ جُمْلَةٍ", "Arrange the words to form a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "أَثْبَتَتِ التَّجَارِبُ أَنَّ الدَّلَافِينَ تَمْتَلِكُ ذَكَاءً عَالِيًا",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f42c/512.webp"
            },
            {
              id: "uae-g5u6l1e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنِ الْحَيَوَانَاتِ الذَّكِيَّةِ وَكَيْفَ تَسْتَفِيدُ مِنْهَا الْبَشَرُ", "Talk about intelligent animals and how humans benefit from them", "Bercakap tentang haiwan cerdas dan bagaimana manusia mendapat manfaat dari mereka", "Bicarakan tentang hewan cerdas dan bagaimana manusia mendapat manfaat dari mereka", "Parle des animaux intelligents et comment les humains en bénéficient", "Habla sobre los animales inteligentes y cómo los humanos se benefician de ellos"),
              arabicText: "الْحَيَوَانَاتُ الذَّكِيَّةُ مِثْلُ الدَّلَافِينِ تُسَاعِدُ الإِنْسَانَ فِي...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f42c/512.webp"
            },
            {
              id: "uae-g5u6l1e8",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Relie le mot à son sens", "Une la palabra con su significado"),
              pairs: [
                {
                  a: "بَاحِثٌ",
                  b: "researcher"
                },
                {
                  a: "تَجْرِبَةٌ",
                  b: "experiment"
                },
                {
                  a: "غَرِيزَةٌ",
                  b: "instinct"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f42c/512.webp"
            },
            {
              id: "uae-g5u6l1speakuae-g5u6l1v8",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "غَرِيزَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26a1/512.webp"
            },
            {
              id: "uae-g5u6l1writeuae-g5u6l1v9",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"بَاحِثٌ\"", "Type the Arabic word for: \"researcher / scientist\"", "Taip perkataan Arab untuk: \"penyelidik\"", "Ketik kata Arab untuk: \"peneliti\"", "Tape le mot arabe pour : \"chercheur\"", "Escribe la palabra árabe para: \"investigador\""),
              arabicText: "بَاحِثٌ",
              answer: "بَاحِثٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f52c/512.webp"
            },
            {
              id: "uae-g5u6l1writeuae-g5u6l1v3",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"ذَكَاءٌ\"", "Type the Arabic word for: \"intelligence\"", "Taip perkataan Arab untuk: \"kecerdasan\"", "Ketik kata Arab untuk: \"kecerdasan\"", "Tape le mot arabe pour : \"intelligence\"", "Escribe la palabra árabe para: \"inteligencia\""),
              arabicText: "ذَكَاءٌ",
              answer: "ذَكَاءٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9e0/512.webp"
            },
            {
              id: "uae-g5u6l1speakuae-g5u6l1v7",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "تَدَرَّبَ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3cb-fe0f/512.webp"
            }
          ]
        },
        {
          id: "uae-g5u6l2",
          unitId: "uae-g5u6",
          gradeId: "uae-g5",
          order: 2,
          title: t("الإِنْسَانُ وَالذَّكَاءُ", "Humans", "Manusia", "Manusia", "L'être humain", "ser humano"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الإِنْسَانُ يَمْتَلِكُ ذَكَاءً فَرِيدًا يُمَكِّنُهُ مِنَ الْإِبْدَاعِ وَتَغْيِيرِ الْعَالَمِ!", "Humans possess unique intelligence that enables them to create and change the world!", "Manusia memiliki kecerdasan unik yang membolehkan mereka berkreasi dan mengubah dunia!", "Manusia memiliki kecerdasan unik yang memungkinkan mereka berkreasi dan mengubah dunia!", "L'être humain possède une intelligence unique qui lui permet de créer et de changer le monde !", "¡El ser humano posee una inteligencia única que le permite crear y cambiar el mundo!"),
          vocabulary: [
            {
              id: "uae-g5u6l2v1",
              arabic: "إِبْدَاعٌ",
              transliteration: "ibdāʿ",
              translation: t("إِبْدَاعٌ", "creativity", "kreativiti", "kreativitas", "créativité", "creatividad"),
              emoji: "✨"
            },
            {
              id: "uae-g5u6l2v2",
              arabic: "اخْتِرَاعٌ",
              transliteration: "ikhtirāʿ",
              translation: t("اخْتِرَاعٌ", "invention", "ciptaan", "penemuan", "invention", "invención"),
              emoji: "💡"
            },
            {
              id: "uae-g5u6l2v3",
              arabic: "فَنٌّ",
              transliteration: "fann",
              translation: t("فَنٌّ", "art", "seni", "seni", "art", "arte"),
              emoji: "🎨"
            },
            {
              id: "uae-g5u6l2v4",
              arabic: "عِلْمٌ",
              transliteration: "ʿilm",
              translation: t("عِلْمٌ", "science", "sains", "sains", "science", "ciencia"),
              emoji: "🔬"
            },
            {
              id: "uae-g5u6l2v5",
              arabic: "ذَكَاءٌ اصْطِنَاعِيٌّ",
              transliteration: "dhakāʾ iṣṭināʿī",
              translation: t("ذَكَاءٌ اصْطِنَاعِيٌّ", "artificial intelligence", "kecerdasan buatan", "kecerdasan buatan", "intelligence artificielle", "inteligencia artificial"),
              emoji: "🤖"
            },
            {
              id: "uae-g5u6l2v6",
              arabic: "عَقْلٌ",
              transliteration: "ʿaql",
              translation: t("عَقْلٌ", "mind / reason", "akal", "akal", "raison", "razón"),
              emoji: "🧠"
            },
            {
              id: "uae-g5u6l2v7",
              arabic: "تَفْكِيرٌ نَقْدِيٌّ",
              transliteration: "tafkīr naqdī",
              translation: t("تَفْكِيرٌ نَقْدِيٌّ", "critical thinking", "pemikiran kritis", "pemikiran kritis", "pensée critique", "pensamiento crítico"),
              emoji: "🔍"
            },
            {
              id: "uae-g5u6l2v8",
              arabic: "حَلَّ الْمُشْكِلَاتِ",
              transliteration: "ḥall al-mushkilāt",
              translation: t("حَلَّ الْمُشْكِلَاتِ", "problem solving", "penyelesaian masalah", "pemecahan masalah", "résolution de problèmes", "resolución de problemas"),
              emoji: "🧩"
            },
            {
              id: "uae-g5u6l2v9",
              arabic: "مُخْتَرِعٌ",
              transliteration: "mukhtariʿ",
              translation: t("مُخْتَرِعٌ", "inventor", "pencipta", "penemu", "inventeur", "inventor"),
              emoji: "👨‍🔬"
            },
            {
              id: "uae-g5u6l2v10",
              arabic: "إِنْجَازٌ",
              transliteration: "injāz",
              translation: t("إِنْجَازٌ", "achievement", "pencapaian", "pencapaian", "réalisation", "logro"),
              emoji: "🏅"
            }
          ],
          dialogue: [
            {
              speaker: "مُعَلِّم",
              arabic: "الإِنْسَانُ مَيَّزَهُ اللهُ بِالْعَقْلِ وَالإِبْدَاعِ عَنْ سَائِرِ الْمَخْلُوقَاتِ.",
              translation: t("الإِنْسَانُ مَيَّزَهُ اللهُ بِالْعَقْلِ وَالإِبْدَاعِ عَنْ سَائِرِ الْمَخْلُوقَاتِ.", "God distinguished humans with reason and creativity from all other creatures.", "Allah membezakan manusia dengan akal dan kreativiti daripada makhluk lain.", "Allah membedakan manusia dengan akal dan kreativitas dari makhluk lainnya.", "Dieu a distingué l'être humain par la raison et la créativité de toutes les autres créatures.", "Dios distinguió a los humanos con razón y creatividad de todas las demás criaturas.")
            },
            {
              speaker: "طَالِبَة",
              arabic: "وَالذَّكَاءُ الاصْطِنَاعِيُّ هَلْ هُوَ أَذْكَى مِنَ الإِنْسَانِ؟",
              translation: t("وَالذَّكَاءُ الاصْطِنَاعِيُّ هَلْ هُوَ أَذْكَى مِنَ الإِنْسَانِ؟", "And is artificial intelligence smarter than humans?", "Dan adakah kecerdasan buatan lebih bijak daripada manusia?", "Dan apakah kecerdasan buatan lebih cerdas dari manusia?", "Et l'intelligence artificielle est-elle plus intelligente que l'homme ?", "¿Y es la inteligencia artificial más inteligente que los humanos?")
            },
            {
              speaker: "مُعَلِّم",
              arabic: "الذَّكَاءُ الاصْطِنَاعِيُّ صَنِيعَةُ الإِنْسَانِ وَيَخْدُمُهُ، لَكِنَّ الإِبْدَاعَ الإِنْسَانِيَّ لَا يُضَاهِيهِ شَيْءٌ.",
              translation: t("الذَّكَاءُ الاصْطِنَاعِيُّ صَنِيعَةُ الإِنْسَانِ وَيَخْدُمُهُ، لَكِنَّ الإِبْدَاعَ الإِنْسَانِيَّ لَا يُضَاهِيهِ شَيْءٌ.", "Artificial intelligence is a human creation that serves humans, but nothing matches human creativity.", "Kecerdasan buatan adalah ciptaan manusia yang melayaninya, tetapi kreativiti manusia tiada tandingannya.", "Kecerdasan buatan adalah ciptaan manusia yang melayaninya, tetapi kreativitas manusia tidak ada tandingannya.", "L'intelligence artificielle est une création humaine qui le sert, mais rien n'égale la créativité humaine.", "La inteligencia artificial es una creación humana que le sirve, pero nada iguala la creatividad humana.")
            }
          ],
          exercises: [
            {
              id: "uae-g5u6l2e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "اخْتِرَاعٌ",
              options: [
                "إِبْدَاعٌ",
                "اخْتِرَاعٌ",
                "عِلْمٌ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/512.webp"
            },
            {
              id: "uae-g5u6l2e2",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا الَّذِي يُمَيِّزُ الإِنْسَانَ عَنْ غَيْرِهِ مِنَ الْمَخْلُوقَاتِ؟", "What distinguishes humans from other creatures?", "Apakah yang membezakan manusia daripada makhluk lain?", "Apa yang membedakan manusia dari makhluk lainnya?", "Qu'est-ce qui distingue les humains des autres créatures ?", "¿Qué distingue a los humanos de otras criaturas?"),
              options: [
                "الْجِسْمُ الْكَبِيرُ",
                "الْعَقْلُ وَالإِبْدَاعُ",
                "السُّرْعَةُ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.webp"
            },
            {
              id: "uae-g5u6l2e3",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِرَمْزِهَا", "Match the word to its symbol", "Padankan perkataan dengan simbolnya", "Cocokkan kata dengan simbolnya", "Relie le mot à son symbole", "Une la palabra con su símbolo"),
              pairs: [
                {
                  a: "إِبْدَاعٌ",
                  b: "✨"
                },
                {
                  a: "عِلْمٌ",
                  b: "🔬"
                },
                {
                  a: "ذَكَاءٌ اصْطِنَاعِيٌّ",
                  b: "🤖"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.webp"
            },
            {
              id: "uae-g5u6l2e4",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنِ اخْتِرَاعٍ تُحِبُّهُ وَكَيْفَ أَفَادَ الإِنْسَانِيَّةَ", "Talk about an invention you like and how it benefited humanity", "Bercakap tentang ciptaan yang anda sukai dan bagaimana ia memberi manfaat kepada manusia", "Bicarakan tentang penemuan yang kamu sukai dan bagaimana itu bermanfaat bagi kemanusiaan", "Parle d'une invention que tu aimes et comment elle a bénéficié à l'humanité", "Habla sobre un invento que te guste y cómo benefició a la humanidad"),
              arabicText: "الاخْتِرَاعُ الَّذِي أُحِبُّهُ هُوَ...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.webp"
            },
            {
              id: "uae-g5u6l2e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا التَّفْكِيرُ النَّقْدِيُّ؟", "What is critical thinking?", "Apakah pemikiran kritis?", "Apa pemikiran kritis?", "Qu'est-ce que la pensée critique ?", "¿Qué es el pensamiento crítico?"),
              options: [
                "قَبُولُ كُلِّ الأَفْكَارِ دُونَ تَمْحِيصٍ",
                "تَحْلِيلُ الأَفْكَارِ وَتَقْيِيمُهَا بِمَنْطِقٍ",
                "رَفْضُ كُلِّ الأَفْكَارِ الْجَدِيدَةِ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.webp"
            },
            {
              id: "uae-g5u6l2e6",
              type: "arrange",
              skill: "writing",
              prompt: t("رَتِّبِ الْكَلِمَاتِ لِتَكْوِينِ جُمْلَةٍ", "Arrange the words to form a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "يَسْتَخْدِمُ الإِنْسَانُ عَقْلَهُ وَإِبْدَاعَهُ لِصُنْعِ الاخْتِرَاعَاتِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.webp"
            },
            {
              id: "uae-g5u6l2e7",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ عَنِ الْفَرْقِ بَيْنَ الذَّكَاءِ الطَّبِيعِيِّ وَالذَّكَاءِ الاصْطِنَاعِيِّ", "Write about the difference between natural and artificial intelligence", "Tulis tentang perbezaan antara kecerdasan semulajadi dan kecerdasan buatan", "Tulis tentang perbedaan antara kecerdasan alami dan kecerdasan buatan", "Écris sur la différence entre l'intelligence naturelle et artificielle", "Escribe sobre la diferencia entre la inteligencia natural y artificial"),
              answer: "الذَّكَاءُ الطَّبِيعِيُّ هِبَةٌ مِنَ اللهِ لِلإِنْسَانِ وَالذَّكَاءُ الاصْطِنَاعِيُّ صَنَعَهُ الإِنْسَانُ لِيَخْدِمَهُ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.webp"
            },
            {
              id: "uae-g5u6l2e8",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Relie le mot à son sens", "Une la palabra con su significado"),
              pairs: [
                {
                  a: "مُخْتَرِعٌ",
                  b: "inventor"
                },
                {
                  a: "إِنْجَازٌ",
                  b: "achievement"
                },
                {
                  a: "عَقْلٌ",
                  b: "mind"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.webp"
            },
            {
              id: "uae-g5u6l2mcquae-g5u6l2v4",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"عِلْمٌ\"؟", "What does \"science\" mean?", "Apakah maksud \"sains\"?", "Apa arti \"sains\"?", "Que signifie \"science\" ?", "¿Qué significa \"ciencia\"?"),
              arabicText: "عِلْمٌ",
              options: [
                "horse",
                "weather",
                "science",
                "island"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f52c/512.webp"
            },
            {
              id: "uae-g5u6l2mcquae-g5u6l2v2",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"اخْتِرَاعٌ\"؟", "What does \"invention\" mean?", "Apakah maksud \"ciptaan\"?", "Apa arti \"penemuan\"?", "Que signifie \"invention\" ?", "¿Qué significa \"invención\"?"),
              arabicText: "اخْتِرَاعٌ",
              options: [
                "poetry",
                "invention",
                "carbohydrates",
                "clean energy"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/512.webp"
            },
            {
              id: "uae-g5u6l2spelluae-g5u6l2v9",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "مُخْتَرِعٌ",
              answer: "مُخْتَرِعٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f468-200d-1f52c/512.webp"
            },
            {
              id: "uae-g5u6l2speakuae-g5u6l2v1",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "إِبْدَاعٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.webp"
            }
          ]
        },
        {
          id: "uae-g5u6l3",
          unitId: "uae-g5u6",
          gradeId: "uae-g5",
          order: 3,
          title: t("مُدُنٌ ذَكِيَّةٌ", "Smart Cities", "Bandar Pintar", "Kota Pintar", "Villes intelligentes", "Ciudades inteligentes"),
          skills: [
            "listening",
            "speaking",
            "reading",
            "writing"
          ],
          intro: t("الْمُدُنُ الذَّكِيَّةُ تَسْتَخْدِمُ التِّكْنُولُوجِيَا لِتَحْسِينِ حَيَاةِ سُكَّانِهَا!", "Smart cities use technology to improve the lives of their residents!", "Bandar pintar menggunakan teknologi untuk meningkatkan kehidupan penduduknya!", "Kota pintar menggunakan teknologi untuk meningkatkan kehidupan penghuninya!", "Les villes intelligentes utilisent la technologie pour améliorer la vie de leurs habitants !", "¡Las ciudades inteligentes usan tecnología para mejorar la vida de sus residentes!"),
          vocabulary: [
            {
              id: "uae-g5u6l3v1",
              arabic: "شَبَكَةٌ",
              transliteration: "shabaka",
              translation: t("شَبَكَةٌ", "network", "rangkaian", "jaringan", "réseau", "red"),
              emoji: "🌐"
            },
            {
              id: "uae-g5u6l3v2",
              arabic: "طَاقَةٌ نَظِيفَةٌ",
              transliteration: "ṭāqa naẓīfa",
              translation: t("طَاقَةٌ نَظِيفَةٌ", "clean energy", "tenaga bersih", "energi bersih", "énergie propre", "energía limpia"),
              emoji: "♻️"
            },
            {
              id: "uae-g5u6l3v3",
              arabic: "مُوَاصَلَاتٌ ذَكِيَّةٌ",
              transliteration: "muwāṣalāt dhakiyya",
              translation: t("مُوَاصَلَاتٌ ذَكِيَّةٌ", "smart transport", "pengangkutan pintar", "transportasi cerdas", "transport intelligent", "transporte inteligente"),
              emoji: "🚊"
            },
            {
              id: "uae-g5u6l3v4",
              arabic: "مُرَاقَبَةٌ",
              transliteration: "murāqaba",
              translation: t("مُرَاقَبَةٌ", "monitoring / surveillance", "pemantauan", "pemantauan", "surveillance", "vigilancia"),
              emoji: "📹"
            },
            {
              id: "uae-g5u6l3v5",
              arabic: "بِيئَةٌ مُسْتَدَامَةٌ",
              transliteration: "bīʾa mustadāma",
              translation: t("بِيئَةٌ مُسْتَدَامَةٌ", "sustainable environment", "alam sekitar mampan", "lingkungan berkelanjutan", "environnement durable", "medio ambiente sostenible"),
              emoji: "🌿"
            },
            {
              id: "uae-g5u6l3v6",
              arabic: "بَيَانَاتٌ",
              transliteration: "bayānāt",
              translation: t("بَيَانَاتٌ", "data", "data", "data", "données", "datos"),
              emoji: "📊"
            },
            {
              id: "uae-g5u6l3v7",
              arabic: "تَطْبِيقٌ ذَكِيٌّ",
              transliteration: "taṭbīq dhakī",
              translation: t("تَطْبِيقٌ ذَكِيٌّ", "smart app", "aplikasi pintar", "aplikasi cerdas", "application intelligente", "aplicación inteligente"),
              emoji: "📱"
            },
            {
              id: "uae-g5u6l3v8",
              arabic: "طَاقَةٌ شَمْسِيَّةٌ",
              transliteration: "ṭāqa shamsiyya",
              translation: t("طَاقَةٌ شَمْسِيَّةٌ", "solar energy", "tenaga suria", "energi surya", "énergie solaire", "energía solar"),
              emoji: "☀️"
            },
            {
              id: "uae-g5u6l3v9",
              arabic: "إِدَارَةٌ",
              transliteration: "idāra",
              translation: t("إِدَارَةٌ", "management / administration", "pengurusan", "manajemen", "gestion", "gestión"),
              emoji: "🏢"
            },
            {
              id: "uae-g5u6l3v10",
              arabic: "مُسْتَقْبَلٌ",
              transliteration: "mustaqbal",
              translation: t("مُسْتَقْبَلٌ", "future", "masa depan", "masa depan", "avenir", "futuro"),
              emoji: "🔮"
            }
          ],
          dialogue: [
            {
              speaker: "مُهَنْدِس",
              arabic: "الْمُدُنُ الذَّكِيَّةُ تَعْتَمِدُ عَلَى شَبَكَاتٍ مُتَطَوِّرَةٍ لِإِدَارَةِ كُلِّ شَيْءٍ.",
              translation: t("الْمُدُنُ الذَّكِيَّةُ تَعْتَمِدُ عَلَى شَبَكَاتٍ مُتَطَوِّرَةٍ لِإِدَارَةِ كُلِّ شَيْءٍ.", "Smart cities rely on advanced networks to manage everything.", "Bandar pintar bergantung pada rangkaian canggih untuk menguruskan segala sesuatu.", "Kota pintar bergantung pada jaringan canggih untuk mengelola segalanya.", "Les villes intelligentes s'appuient sur des réseaux avancés pour tout gérer.", "Las ciudades inteligentes dependen de redes avanzadas para gestionar todo.")
            },
            {
              speaker: "طَالِب",
              arabic: "هَلْ تَسْتَخْدِمُ الطَّاقَةَ النَّظِيفَةَ لِحِمَايَةِ الْبِيئَةِ؟",
              translation: t("هَلْ تَسْتَخْدِمُ الطَّاقَةَ النَّظِيفَةَ لِحِمَايَةِ الْبِيئَةِ؟", "Do they use clean energy to protect the environment?", "Adakah mereka menggunakan tenaga bersih untuk melindungi alam sekitar?", "Apakah mereka menggunakan energi bersih untuk melindungi lingkungan?", "Utilisent-elles de l'énergie propre pour protéger l'environnement ?", "¿Usan energía limpia para proteger el medio ambiente?")
            },
            {
              speaker: "مُهَنْدِس",
              arabic: "نَعَمْ! وَتَسْتَخْدِمُ أَيْضًا مُوَاصَلَاتٍ ذَكِيَّةً وَمُرَاقَبَةً مُتَطَوِّرَةً لِبِيئَةٍ مُسْتَدَامَةٍ.",
              translation: t("نَعَمْ! وَتَسْتَخْدِمُ أَيْضًا مُوَاصَلَاتٍ ذَكِيَّةً وَمُرَاقَبَةً مُتَطَوِّرَةً لِبِيئَةٍ مُسْتَدَامَةٍ.", "Yes! And they also use smart transport and advanced monitoring for a sustainable environment.", "Ya! Dan mereka juga menggunakan pengangkutan pintar dan pemantauan canggih untuk persekitaran yang mampan.", "Ya! Dan mereka juga menggunakan transportasi cerdas dan pemantauan canggih untuk lingkungan yang berkelanjutan.", "Oui ! Elles utilisent aussi des transports intelligents et une surveillance avancée pour un environnement durable.", "¡Sí! Y también usan transporte inteligente y monitoreo avanzado para un entorno sostenible.")
            }
          ],
          exercises: [
            {
              id: "uae-g5u6l3e1",
              type: "listening",
              skill: "listening",
              prompt: t("اسْتَمِعْ وَاخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "شَبَكَةٌ",
              options: [
                "شَبَكَةٌ",
                "طَاقَةٌ نَظِيفَةٌ",
                "مُرَاقَبَةٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f310/512.webp"
            },
            {
              id: "uae-g5u6l3e2",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا الْهَدَفُ مِنَ الطَّاقَةِ النَّظِيفَةِ فِي الْمُدُنِ الذَّكِيَّةِ؟", "What is the purpose of clean energy in smart cities?", "Apakah tujuan tenaga bersih dalam bandar pintar?", "Apa tujuan energi bersih di kota pintar?", "Quel est le but de l'énergie propre dans les villes intelligentes ?", "¿Cuál es el propósito de la energía limpia en las ciudades inteligentes?"),
              options: [
                "لِلتَّلَوُّثِ",
                "لِحِمَايَةِ الْبِيئَةِ",
                "لِلتَّبْذِيرِ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f310/512.webp"
            },
            {
              id: "uae-g5u6l3e3",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِرَمْزِهَا", "Match the word to its symbol", "Padankan perkataan dengan simbolnya", "Cocokkan kata dengan simbolnya", "Relie le mot à son symbole", "Une la palabra con su símbolo"),
              pairs: [
                {
                  a: "طَاقَةٌ نَظِيفَةٌ",
                  b: "♻️"
                },
                {
                  a: "مُوَاصَلَاتٌ ذَكِيَّةٌ",
                  b: "🚊"
                },
                {
                  a: "بِيئَةٌ مُسْتَدَامَةٌ",
                  b: "🌿"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f310/512.webp"
            },
            {
              id: "uae-g5u6l3e4",
              type: "writing",
              skill: "writing",
              prompt: t("اكْتُبْ عَنْ مَيِّزَاتِ الْمُدُنِ الذَّكِيَّةِ", "Write about the features of smart cities", "Tulis tentang ciri-ciri bandar pintar", "Tulis tentang fitur-fitur kota pintar", "Écris sur les caractéristiques des villes intelligentes", "Escribe sobre las características de las ciudades inteligentes"),
              answer: "الْمُدُنُ الذَّكِيَّةُ تَسْتَخْدِمُ الطَّاقَةَ النَّظِيفَةَ وَالشَّبَكَاتِ الذَّكِيَّةَ لِبِيئَةٍ أَفْضَلَ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f310/512.webp"
            },
            {
              id: "uae-g5u6l3e5",
              type: "mcq",
              skill: "reading",
              prompt: t("مَا دَوْرُ الطَّاقَةِ الشَّمْسِيَّةِ فِي الْمُدُنِ الذَّكِيَّةِ؟", "What is the role of solar energy in smart cities?", "Apakah peranan tenaga suria dalam bandar pintar?", "Apa peran energi surya di kota pintar?", "Quel est le rôle de l'énergie solaire dans les villes intelligentes ?", "¿Cuál es el papel de la energía solar en las ciudades inteligentes?"),
              options: [
                "تَلْوِيثُ الْبِيئَةِ",
                "تَوْفِيرُ طَاقَةٍ نَظِيفَةٍ وَمُسْتَدَامَةٍ",
                "زِيَادَةُ الازْدِحَامِ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f310/512.webp"
            },
            {
              id: "uae-g5u6l3e6",
              type: "arrange",
              skill: "writing",
              prompt: t("رَتِّبِ الْكَلِمَاتِ لِتَكْوِينِ جُمْلَةٍ", "Arrange the words to form a sentence", "Susun perkataan untuk membentuk ayat", "Susun kata untuk membentuk kalimat", "Range les mots pour former une phrase", "Ordena las palabras para formar una oración"),
              answer: "تَسْتَخْدِمُ الْمُدُنُ الذَّكِيَّةُ الطَّاقَةَ الشَّمْسِيَّةَ لِتَقْلِيلِ التَّلَوُّثِ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f310/512.webp"
            },
            {
              id: "uae-g5u6l3e7",
              type: "speaking",
              skill: "speaking",
              prompt: t("تَحَدَّثْ عَنْ مُدُنِ الْمُسْتَقْبَلِ الذَّكِيَّةِ", "Talk about smart cities of the future", "Bercakap tentang bandar pintar masa depan", "Bicarakan tentang kota pintar masa depan", "Parle des villes intelligentes du futur", "Habla sobre las ciudades inteligentes del futuro"),
              arabicText: "فِي الْمُسْتَقْبَلِ سَتَكُونُ مُدُنُنَا أَكْثَرَ ذَكَاءً لِأَنَّهَا سَتَسْتَخْدِمُ...",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f310/512.webp"
            },
            {
              id: "uae-g5u6l3e8",
              type: "matching",
              skill: "reading",
              prompt: t("صِلِ الْكَلِمَةَ بِمَعْنَاهَا", "Match the word to its meaning", "Padankan perkataan dengan maknanya", "Cocokkan kata dengan artinya", "Relie le mot à son sens", "Une la palabra con su significado"),
              pairs: [
                {
                  a: "بَيَانَاتٌ",
                  b: "data"
                },
                {
                  a: "طَاقَةٌ شَمْسِيَّةٌ",
                  b: "solar energy"
                },
                {
                  a: "مُسْتَقْبَلٌ",
                  b: "future"
                }
              ],
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f310/512.webp"
            },
            {
              id: "uae-g5u6l3mcquae-g5u6l3v10",
              type: "mcq",
              skill: "reading",
              prompt: t("ماذا تعني كلمة \"مُسْتَقْبَلٌ\"؟", "What does \"future\" mean?", "Apakah maksud \"masa depan\"?", "Apa arti \"masa depan\"?", "Que signifie \"avenir\" ?", "¿Qué significa \"futuro\"?"),
              arabicText: "مُسْتَقْبَلٌ",
              options: [
                "future",
                "residents / population",
                "scoring / recording",
                "entertainment"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f52e/512.webp"
            },
            {
              id: "uae-g5u6l3speakuae-g5u6l3v7",
              type: "speaking",
              skill: "speaking",
              prompt: t("انطق الكلمة", "Say this word", "Sebut perkataan ini", "Ucapkan kata ini", "Dis ce mot", "Di esta palabra"),
              arabicText: "تَطْبِيقٌ ذَكِيٌّ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4f1/512.webp"
            },
            {
              id: "uae-g5u6l3arrange2",
              type: "arrange",
              skill: "reading",
              prompt: t("رتّب الكلمات لتكوّن الجملة", "Arrange the words to make the sentence", "Susun perkataan untuk membina ayat", "Susun kata untuk membuat kalimat", "Rangez les mots pour former la phrase", "Ordena las palabras para formar la oración"),
              answer: "هَلْ تَسْتَخْدِمُ الطَّاقَةَ النَّظِيفَةَ لِحِمَايَةِ الْبِيئَةِ؟",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f310/512.webp"
            },
            {
              id: "uae-g5u6l3spelluae-g5u6l3v4",
              type: "spell",
              skill: "writing",
              prompt: t("كون الكلمة من الحروف", "Build the word from the letters", "Bina perkataan dari huruf-huruf", "Susun kata dari huruf-hurufnya", "Forme le mot avec les lettres", "Forma la palabra con las letras"),
              arabicText: "مُرَاقَبَةٌ",
              answer: "مُرَاقَبَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4f9/512.webp"
            }
          ]
        },
        {
          id: "uae-g5u6review",
          unitId: "uae-g5u6",
          gradeId: "uae-g5",
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
              id: "uae-g5u6l1v1",
              arabic: "دَلَافِينُ",
              transliteration: "dalāfīn",
              translation: t("دَلَافِينُ", "dolphins", "lumba-lumba", "lumba-lumba", "dauphins", "delfines"),
              emoji: "🐬"
            },
            {
              id: "uae-g5u6l1v2",
              arabic: "قِرَدَةٌ",
              transliteration: "qirada",
              translation: t("قِرَدَةٌ", "monkeys", "monyet", "monyet", "singes", "monos"),
              emoji: "🐒"
            },
            {
              id: "uae-g5u6l1v3",
              arabic: "ذَكَاءٌ",
              transliteration: "dhakāʾ",
              translation: t("ذَكَاءٌ", "intelligence", "kecerdasan", "kecerdasan", "intelligence", "inteligencia"),
              emoji: "🧠"
            },
            {
              id: "uae-g5u6l1v4",
              arabic: "تَعَلَّمَ",
              transliteration: "taʿallama",
              translation: t("تَعَلَّمَ", "he learned", "dia belajar", "dia belajar", "il a appris", "aprendió"),
              emoji: "📚"
            },
            {
              id: "uae-g5u6l1v5",
              arabic: "حَلَّ مُشْكِلَةً",
              transliteration: "ḥalla mushkila",
              translation: t("حَلَّ مُشْكِلَةً", "solved a problem", "selesaikan masalah", "memecahkan masalah", "résoudre un problème", "resolvió un problema"),
              emoji: "💡"
            },
            {
              id: "uae-g5u6l1v6",
              arabic: "سُلُوكٌ",
              transliteration: "sulūk",
              translation: t("سُلُوكٌ", "behaviour", "tingkah laku", "perilaku", "comportement", "comportamiento"),
              emoji: "🔍"
            },
            {
              id: "uae-g5u6l1v7",
              arabic: "تَدَرَّبَ",
              transliteration: "tadarraba",
              translation: t("تَدَرَّبَ", "he trained / practiced", "dia berlatih", "dia berlatih", "il s'est entraîné", "se entrenó"),
              emoji: "🏋️"
            },
            {
              id: "uae-g5u6l1v8",
              arabic: "غَرِيزَةٌ",
              transliteration: "gharīza",
              translation: t("غَرِيزَةٌ", "instinct", "naluri", "insting", "instinct", "instinto"),
              emoji: "⚡"
            }
          ],
          dialogue: [],
          exercises: [
            {
              id: "uae-g5u6reviewwriteuae-g5u6l1v4",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"تَعَلَّمَ\"", "Type the Arabic word for: \"he learned\"", "Taip perkataan Arab untuk: \"dia belajar\"", "Ketik kata Arab untuk: \"dia belajar\"", "Tape le mot arabe pour : \"il a appris\"", "Escribe la palabra árabe para: \"aprendió\""),
              arabicText: "تَعَلَّمَ",
              answer: "تَعَلَّمَ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp"
            },
            {
              id: "uae-g5u6reviewlistenuae-g5u6l1v4",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "تَعَلَّمَ",
              options: [
                "تَعَلَّمَ",
                "سُمٌّ",
                "سَكَّانٌ"
              ],
              correctIndex: 0,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp"
            },
            {
              id: "uae-g5u6reviewwriteuae-g5u6l1v5",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"حَلَّ مُشْكِلَةً\"", "Type the Arabic word for: \"solved a problem\"", "Taip perkataan Arab untuk: \"selesaikan masalah\"", "Ketik kata Arab untuk: \"memecahkan masalah\"", "Tape le mot arabe pour : \"résoudre un problème\"", "Escribe la palabra árabe para: \"resolvió un problema\""),
              arabicText: "حَلَّ مُشْكِلَةً",
              answer: "حَلَّ مُشْكِلَةً",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/512.webp"
            },
            {
              id: "uae-g5u6reviewwriteuae-g5u6l1v8",
              type: "writing",
              skill: "writing",
              prompt: t("اكتب الكلمة: \"غَرِيزَةٌ\"", "Type the Arabic word for: \"instinct\"", "Taip perkataan Arab untuk: \"naluri\"", "Ketik kata Arab untuk: \"insting\"", "Tape le mot arabe pour : \"instinct\"", "Escribe la palabra árabe para: \"instinto\""),
              arabicText: "غَرِيزَةٌ",
              answer: "غَرِيزَةٌ",
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/26a1/512.webp"
            },
            {
              id: "uae-g5u6reviewlistenuae-g5u6l1v7",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "تَدَرَّبَ",
              options: [
                "مُكْتَشِفٌ",
                "خَبَرٌ",
                "تَدَرَّبَ"
              ],
              correctIndex: 2,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3cb-fe0f/512.webp"
            },
            {
              id: "uae-g5u6reviewlistenuae-g5u6l1v6",
              type: "listening",
              skill: "listening",
              prompt: t("استمع واختر الكلمة الصحيحة", "Listen and choose the correct word", "Dengar dan pilih perkataan yang betul", "Dengarkan dan pilih kata yang benar", "Écoute et choisis le bon mot", "Escucha y elige la palabra correcta"),
              arabicText: "سُلُوكٌ",
              options: [
                "تَاجُ مَحَلٍّ",
                "سُلُوكٌ",
                "كُرَةُ الطَّائِرَةِ"
              ],
              correctIndex: 1,
              imageUrl: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f50d/512.webp"
            }
          ]
        }
      ]
    }
  ]
};
