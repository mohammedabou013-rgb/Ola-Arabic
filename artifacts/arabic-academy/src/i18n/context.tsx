import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type SupportedLanguage = 'ar' | 'en' | 'ms' | 'id' | 'fr' | 'es';

interface I18nContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string, replacements?: Record<string, string>) => string;
}

const translations: Record<SupportedLanguage, Record<string, string>> = {
  ar: {
    home: "الرئيسية",
    practice: "تدريب",
    tutor: "المعلم الآلي",
    progress: "تقدمي",
    start_learning: "ابدأ التعلم",
    your_progress: "تقدمك",
    xp: "نقاط الخبرة",
    streak: "أيام متتالية",
    skills: "المهارات",
    listening: "استماع",
    speaking: "تحدث",
    reading: "قراءة",
    writing: "كتابة",
    unit: "الوحدة {n}",
    lesson: "الدرس {n}",
    play: "تشغيل",
    check: "تحقق",
    next: "التالي",
    finish: "إنهاء",
    correct: "أحسنت!",
    wrong: "حاول مرة أخرى",
    say_this: "قل هذا:",
    type_here: "اكتب هنا...",
    loading: "جاري التحميل...",
    error: "حدث خطأ ما",
    chat_placeholder: "تحدث مع المعلم...",
    send: "إرسال",
    achievements: "الإنجازات",
    badges: "الشارات",
    completed: "مكتمل",
    locked: "مغلق",
    vocabulary: "المفردات",
    dialogue: "حوار",
    exercises: "التمارين",
    practice_subtitle: "حافظ على مهاراتك من خلال الألعاب الصغيرة!",
    game_match: "مطابقة الكلمات",
    game_speed: "تحدي السرعة",
    game_listen: "استمع واختر",
    play_now: "العب الآن",
    tutor_subtitle: "دائماً هنا لمساعدتك على التدرب",
    thinking: "يفكر...",
    keep_playing: "استمر في اللعب لكسب الشارات!",
    not_found: "الصفحة غير موجودة",
    return_home: "العودة للرئيسية",
    page_moved: "عفواً! الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
    continue: "استمر"
  },
  en: {
    home: "Home",
    practice: "Practice",
    tutor: "AI Tutor",
    progress: "Progress",
    start_learning: "Start Learning",
    your_progress: "Your Progress",
    xp: "XP",
    streak: "Streak",
    skills: "Skills",
    listening: "Listening",
    speaking: "Speaking",
    reading: "Reading",
    writing: "Writing",
    unit: "Unit {n}",
    lesson: "Lesson {n}",
    play: "Play",
    check: "Check",
    next: "Next",
    finish: "Finish",
    correct: "Great job!",
    wrong: "Try again",
    say_this: "Say this:",
    type_here: "Type here...",
    loading: "Loading...",
    error: "Something went wrong",
    chat_placeholder: "Chat with your tutor...",
    send: "Send",
    achievements: "Achievements",
    badges: "Badges",
    completed: "Completed",
    locked: "Locked",
    vocabulary: "Vocabulary",
    dialogue: "Dialogue",
    exercises: "Exercises",
    practice_subtitle: "Keep your skills sharp with mini-games!",
    game_match: "Vocab Match",
    game_speed: "Speed Run",
    game_listen: "Listen & Pick",
    play_now: "Play Now",
    tutor_subtitle: "Always here to help you practice",
    thinking: "Thinking...",
    keep_playing: "Keep playing to earn badges!",
    not_found: "Page not found",
    return_home: "Return Home",
    page_moved: "Oops! The page you're looking for doesn't exist or has been moved.",
    continue: "Continue"
  },
  ms: {
    home: "Laman Utama",
    practice: "Latihan",
    tutor: "Tutor AI",
    progress: "Kemajuan",
    start_learning: "Mula Belajar",
    your_progress: "Kemajuan Anda",
    xp: "XP",
    streak: "Rentetan",
    skills: "Kemahiran",
    listening: "Mendengar",
    speaking: "Bercakap",
    reading: "Membaca",
    writing: "Menulis",
    unit: "Unit {n}",
    lesson: "Pelajaran {n}",
    play: "Main",
    check: "Semak",
    next: "Seterusnya",
    finish: "Tamat",
    correct: "Bagus!",
    wrong: "Cuba lagi",
    say_this: "Sebut ini:",
    type_here: "Taip di sini...",
    loading: "Sedang dimuatkan...",
    error: "Ralat berlaku",
    chat_placeholder: "Berbual dengan tutor...",
    send: "Hantar",
    achievements: "Pencapaian",
    badges: "Lencana",
    completed: "Selesai",
    locked: "Kunci",
    vocabulary: "Kosa kata",
    dialogue: "Dialog",
    exercises: "Latihan",
    practice_subtitle: "Kekalkan kemahiran anda dengan permainan mini!",
    game_match: "Padan Kosa Kata",
    game_speed: "Lari Laju",
    game_listen: "Dengar & Pilih",
    play_now: "Main Sekarang",
    tutor_subtitle: "Sentiasa di sini untuk membantu anda berlatih",
    thinking: "Sedang berfikir...",
    keep_playing: "Teruskan bermain untuk mendapatkan lencana!",
    not_found: "Halaman tidak dijumpai",
    return_home: "Kembali ke Laman Utama",
    page_moved: "Alamak! Halaman yang anda cari tidak wujud atau telah dipindahkan.",
    continue: "Teruskan"
  },
  id: {
    home: "Beranda",
    practice: "Latihan",
    tutor: "Tutor AI",
    progress: "Kemajuan",
    start_learning: "Mulai Belajar",
    your_progress: "Kemajuan Anda",
    xp: "XP",
    streak: "Beruntun",
    skills: "Keterampilan",
    listening: "Mendengar",
    speaking: "Berbicara",
    reading: "Membaca",
    writing: "Menulis",
    unit: "Unit {n}",
    lesson: "Pelajaran {n}",
    play: "Mainkan",
    check: "Periksa",
    next: "Berikutnya",
    finish: "Selesai",
    correct: "Bagus sekali!",
    wrong: "Coba lagi",
    say_this: "Katakan ini:",
    type_here: "Ketik di sini...",
    loading: "Memuat...",
    error: "Terjadi kesalahan",
    chat_placeholder: "Mengobrol dengan tutor...",
    send: "Kirim",
    achievements: "Pencapaian",
    badges: "Lencana",
    completed: "Selesai",
    locked: "Terkunci",
    vocabulary: "Kosakata",
    dialogue: "Dialog",
    exercises: "Latihan",
    practice_subtitle: "Asah kemampuanmu dengan permainan mini!",
    game_match: "Cocok Kosakata",
    game_speed: "Lari Cepat",
    game_listen: "Dengar & Pilih",
    play_now: "Main Sekarang",
    tutor_subtitle: "Selalu di sini untuk membantumu berlatih",
    thinking: "Sedang berpikir...",
    keep_playing: "Terus bermain untuk mendapatkan lencana!",
    not_found: "Halaman tidak ditemukan",
    return_home: "Kembali ke Beranda",
    page_moved: "Ups! Halaman yang Anda cari tidak ada atau telah dipindahkan.",
    continue: "Lanjutkan"
  },
  fr: {
    home: "Accueil",
    practice: "Pratique",
    tutor: "Tuteur IA",
    progress: "Progrès",
    start_learning: "Commencer",
    your_progress: "Vos progrès",
    xp: "XP",
    streak: "Série",
    skills: "Compétences",
    listening: "Écoute",
    speaking: "Parler",
    reading: "Lecture",
    writing: "Écriture",
    unit: "Unité {n}",
    lesson: "Leçon {n}",
    play: "Jouer",
    check: "Vérifier",
    next: "Suivant",
    finish: "Terminer",
    correct: "Bien joué !",
    wrong: "Réessayer",
    say_this: "Dites ceci :",
    type_here: "Tapez ici...",
    loading: "Chargement...",
    error: "Une erreur est survenue",
    chat_placeholder: "Discutez avec le tuteur...",
    send: "Envoyer",
    achievements: "Succès",
    badges: "Badges",
    completed: "Terminé",
    locked: "Verrouillé",
    vocabulary: "Vocabulaire",
    dialogue: "Dialogue",
    exercises: "Exercices",
    practice_subtitle: "Gardez vos compétences à niveau avec des mini-jeux !",
    game_match: "Associer Vocabulaire",
    game_speed: "Course Rapide",
    game_listen: "Écouter et Choisir",
    play_now: "Jouer Maintenant",
    tutor_subtitle: "Toujours là pour vous aider à pratiquer",
    thinking: "En train de penser...",
    keep_playing: "Continuez à jouer pour gagner des badges !",
    not_found: "Page non trouvée",
    return_home: "Retour à l'Accueil",
    page_moved: "Oups ! La page que vous cherchez n'existe pas ou a été déplacée.",
    continue: "Continuer"
  },
  es: {
    home: "Inicio",
    practice: "Práctica",
    tutor: "Tutor de IA",
    progress: "Progreso",
    start_learning: "Empezar a aprender",
    your_progress: "Tu progreso",
    xp: "XP",
    streak: "Racha",
    skills: "Habilidades",
    listening: "Escuchar",
    speaking: "Hablar",
    reading: "Leer",
    writing: "Escribir",
    unit: "Unidad {n}",
    lesson: "Lección {n}",
    play: "Jugar",
    check: "Comprobar",
    next: "Siguiente",
    finish: "Terminar",
    correct: "¡Buen trabajo!",
    wrong: "Inténtalo de nuevo",
    say_this: "Di esto:",
    type_here: "Escribe aquí...",
    loading: "Cargando...",
    error: "Algo salió mal",
    chat_placeholder: "Chatea con el tutor...",
    send: "Enviar",
    achievements: "Logros",
    badges: "Insignias",
    completed: "Completado",
    locked: "Bloqueado",
    vocabulary: "Vocabulario",
    dialogue: "Diálogo",
    exercises: "Ejercicios",
    practice_subtitle: "¡Mantén tus habilidades con minijuegos!",
    game_match: "Unir Vocabulario",
    game_speed: "Carrera Rápida",
    game_listen: "Escuchar y Elegir",
    play_now: "Jugar Ahora",
    tutor_subtitle: "Siempre aquí para ayudarte a practicar",
    thinking: "Pensando...",
    keep_playing: "¡Sigue jugando para ganar insignias!",
    not_found: "Página no encontrada",
    return_home: "Volver al Inicio",
    page_moved: "¡Ups! La página que buscas no existe o ha sido movida.",
    continue: "Continuar"
  }
};

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>('en');

  useEffect(() => {
    const saved = localStorage.getItem('app_language') as SupportedLanguage;
    if (saved && translations[saved]) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    localStorage.setItem('app_language', lang);
    const html = document.documentElement;
    if (lang === 'ar') {
      html.setAttribute('dir', 'rtl');
    } else {
      html.setAttribute('dir', 'ltr');
    }
  };

  useEffect(() => {
    // Initial sync
    const html = document.documentElement;
    html.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
  }, [language]);

  const t = (key: string, replacements?: Record<string, string>) => {
    let text = translations[language]?.[key] || translations['en'][key] || key;
    if (replacements) {
      Object.entries(replacements).forEach(([k, v]) => {
        text = text.replace(`{${k}}`, v);
      });
    }
    return text;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
