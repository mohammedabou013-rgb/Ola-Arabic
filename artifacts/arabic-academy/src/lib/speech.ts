export const speak = (text: string, lang: string = 'ar-SA') => {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  stopSpeak();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.85;
  window.speechSynthesis.speak(utterance);
};

export const stopSpeak = () => {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
};

export const listenToSpeech = (
  onResult: (text: string) => void,
  onError: (err: any) => void,
  onEnd: () => void
) => {
  const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  if (!SpeechRecognition) {
    onError(new Error("Speech Recognition API not available"));
    return null;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'ar-SA';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event: any) => {
    const transcript = event.results[0][0].transcript;
    onResult(transcript);
  };

  recognition.onerror = (event: any) => {
    onError(event.error);
  };

  recognition.onend = () => {
    onEnd();
  };

  recognition.start();
  return recognition;
};
