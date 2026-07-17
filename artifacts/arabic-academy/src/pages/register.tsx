import { useState } from 'react';
import { useLocation } from 'wouter';
import { register } from '@/lib/auth';
import { useI18n } from '@/i18n/context';

const SECURITY_QUESTIONS = [
  'ما اسم مدرستك الأولى؟',
  'ما اسم حيوانك المفضل؟',
  'ما اسم مدينتك التي وُلدت فيها؟',
  'ما اسم أفضل صديق في طفولتك؟',
];

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [securityQuestion, setSecurityQuestion] = useState(SECURITY_QUESTIONS[0]);
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [, navigate] = useLocation();
  const { language } = useI18n();
  const isAr = language === 'ar';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError(isAr ? 'كلمتا المرور غير متطابقتين' : 'Passwords do not match');
      return;
    }
    setLoading(true);
    try {
      await register(email, password, name, securityQuestion, securityAnswer);
      setSuccess(true);
      setTimeout(() => navigate('/login'), 2000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'خطأ في التسجيل');
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-orange-50 p-4" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-3 rotate-3">عُ</div>
          <h1 className="text-2xl font-bold text-primary">{language === 'ar' ? 'أكاديمية العُلا' : 'Ola Arabic'}</h1>
          <p className="text-muted-foreground mt-1">{isAr ? 'إنشاء حساب جديد' : 'Create Account'}</p>
        </div>

        {success ? (
          <div className="bg-green-50 text-green-700 rounded-lg px-4 py-3 text-center font-medium">
            {isAr ? '✓ تم التسجيل بنجاح! جاري التحويل...' : '✓ Registered successfully! Redirecting...'}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <div className="bg-red-50 text-red-600 rounded-lg px-4 py-2 text-sm">{error}</div>}
            <div>
              <label className="block text-sm font-medium mb-1">{isAr ? 'الاسم' : 'Full Name'}</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} required className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder={isAr ? 'اسمك الكامل' : 'Your full name'} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{isAr ? 'البريد الإلكتروني' : 'Email'}</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="example@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{isAr ? 'كلمة المرور' : 'Password'} <span className="text-muted-foreground text-xs">(min 6)</span></label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required minLength={6} className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="••••••••" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{isAr ? 'تأكيد كلمة المرور' : 'Confirm Password'}</label>
              <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="••••••••" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{isAr ? 'سؤال الأمان' : 'Security Question'}</label>
              <select value={securityQuestion} onChange={e => setSecurityQuestion(e.target.value)} className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white">
                {SECURITY_QUESTIONS.map(q => (
                  <option key={q} value={q}>{q}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{isAr ? 'إجابة سؤال الأمان' : 'Security Answer'}</label>
              <input type="text" value={securityAnswer} onChange={e => setSecurityAnswer(e.target.value)} required className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder={isAr ? 'إجابتك' : 'Your answer'} />
            </div>
            <button type="submit" disabled={loading} className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary/90 transition disabled:opacity-50">
              {loading ? '...' : (isAr ? 'إنشاء الحساب' : 'Create Account')}
            </button>
          </form>
        )}

        <div className="mt-4 text-center text-sm text-muted-foreground">
          {isAr ? 'لديك حساب بالفعل؟' : 'Already have an account?'}{' '}
          <button onClick={() => navigate('/login')} className="text-primary font-bold hover:underline">
            {isAr ? 'سجّل دخولك' : 'Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
}
