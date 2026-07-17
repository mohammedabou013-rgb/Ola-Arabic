import React, { useState, useRef, useEffect } from 'react';
import { useAiChat } from '@workspace/api-client-react';
import { useI18n } from '@/i18n/context';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { ChatMessage } from '@workspace/api-client-react';

export default function TutorPage() {
  const { t, language } = useI18n();
  const [messages, setMessages] = useState<ChatMessage[]>([{
    role: 'assistant',
    content: language === 'ar' ? 'مرحباً! أنا معلمك الآلي. كيف يمكنني مساعدتك اليوم؟' : 'Hello! I am your AI tutor. How can I help you today?'
  }]);
  const [input, setInput] = useState('');
  
  const chatMutation = useAiChat();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || chatMutation.isPending) return;
    
    const newMsgs = [...messages, { role: 'user', content: input.trim() }];
    setMessages(newMsgs);
    setInput('');
    
    chatMutation.mutate({
      data: {
        messages: newMsgs,
        language: language,
        gradeNumber: 1
      }
    }, {
      onSuccess: (res) => {
        setMessages([...newMsgs, { role: 'assistant', content: res.reply }]);
      }
    });
  };

  const isRtl = language === 'ar';

  return (
    <div className="max-w-3xl mx-auto h-[calc(100vh-12rem)] flex flex-col bg-card border-2 border-border rounded-3xl shadow-sm overflow-hidden">
      <div className="bg-primary p-4 text-primary-foreground flex items-center gap-4 shadow-md z-10">
        <div className="bg-white/20 p-2 rounded-full">
          <Bot className="w-8 h-8" />
        </div>
        <div>
          <h2 className="text-xl font-black">{t('tutor')}</h2>
          <p className="text-sm font-medium opacity-90">{t('tutor_subtitle')}</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6" ref={scrollRef}>
        {messages.map((m, i) => {
          const isUser = m.role === 'user';
          return (
            <div key={i} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] flex gap-3 ${isUser ? (isRtl ? 'flex-row' : 'flex-row-reverse') : 'flex-row'}`}>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${isUser ? 'bg-secondary text-secondary-foreground' : 'bg-primary/20 text-primary'}`}>
                  {isUser ? <User className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
                </div>
                <div className={`p-4 rounded-3xl ${isUser ? 'bg-secondary text-secondary-foreground rounded-tr-none' : 'bg-muted text-foreground rounded-tl-none'} text-lg font-medium`}>
                  <p className={/[\u0600-\u06FF]/.test(m.content) ? 'font-arabic text-right' : ''} dir={/[\u0600-\u06FF]/.test(m.content) ? 'rtl' : 'ltr'}>
                    {m.content}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
        {chatMutation.isPending && (
          <div className="flex justify-start">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Bot className="w-6 h-6" />
              </div>
              <div className="p-4 rounded-3xl bg-muted rounded-tl-none flex items-center gap-2 text-muted-foreground">
                <Loader2 className="w-5 h-5 animate-spin" />
                {t('thinking')}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t-2 border-border">
        <form onSubmit={e => { e.preventDefault(); handleSend(); }} className="flex gap-2">
          <input 
            type="text" 
            className="flex-1 px-6 py-4 bg-muted border-2 border-transparent focus:border-primary rounded-full outline-none font-bold text-lg"
            placeholder={t('chat_placeholder')}
            value={input}
            onChange={e => setInput(e.target.value)}
            dir={/[\u0600-\u06FF]/.test(input) ? 'rtl' : 'auto'}
          />
          <Button type="submit" size="icon" className="w-16 h-16 rounded-full shrink-0 shadow-md" disabled={!input.trim() || chatMutation.isPending}>
            <Send className={`w-6 h-6 ${isRtl ? 'rotate-180' : ''}`} />
          </Button>
        </form>
      </div>
    </div>
  );
}
