import { useState } from 'react';
import { useLocation } from 'wouter';
import { getSecurityQuestion, resetPassword } from '@/lib/auth';
import { useI18n } from '@/i18n/context';

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [email, setEmail] = useState('');
  const [securityQuestion, setSecurityQuestion] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [, navigate] = useLocation();
  const { language } = useI18n();
  const isAr = language === 'ar';

  const handleStep1 = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); setLoading(true);
    try {
      const question = await getSecurityQuestion(email);
      setSecurityQuestion(question);
      setStep(2);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'خطأ');
    } finally { setLoading(false); }
  };

  const handleStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!securityAnswer.trim()) {
      setError(isAr ? 'يرجى إدخال الإجابة' : 'Please enter your answer');
      return;
    }
    setStep(3);
  };

  const handleStep3 = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (newPassword !== confirmPassword) {
      setError(isAr ? 'كلمتا المرور غير متطابقتين' : 'Passwords do not match');
      return;
    }
    setLoading(true);
    try {
      await resetPassword(email, securityAnswer, newPassword);
      setStep(3);
      // Show success and redirect
      setTimeout(() => navigate('/login'), 2000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'خطأ');
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-orange-50 p-4" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-3 rotate-3">عُ</div>
          <h1 className="text-2xl font-bold text-primary">{language === 'ar' ? 'أكاديمية العُلا' : 'Ola Arabic'}</h1>
          <p className="text-muted-foreground mt-1">{isAr ? 'استعادة كلمة المرور' : 'Reset Password'}</p>
          <div className="flex justify-center gap-2 mt-3">
            {[1, 2, 3].map(s => (
              <div key={s} className={`w-2 h-2 rounded-full transition-colors ${step >= s ? 'bg-primary' : 'bg-gray-200'}`} />
            ))}
          </div>
        </div>

        {error && <div className="bg-red-50 text-red-600 rounded-lg px-4 py-2 text-sm mb-4">{error}</div>}

        {step === 1 && (
          <form onSubmit={handleStep1} className="space-y-4">
            <p className="text-sm text-muted-foreground">{isAr ? 'أدخل بريدك الإلكتروني المسجّل' : 'Enter your registered email'}</p>
            <div>
              <label className="block text-sm font-medium mb-1">{isAr ? 'البريد الإلكتروني' : 'Email'}</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="example@email.com" />
            </div>
            <button type="submit" disabled={loading} className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary/90 transition disabled:opacity-50">
              {loading ? '...' : (isAr ? 'متابعة' : 'Continue')}
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleStep2} className="space-y-4">
            <div className="bg-purple-50 rounded-lg px-4 py-3">
              <p className="text-sm font-medium text-primary">{securityQuestion}</p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{isAr ? 'إجابتك' : 'Your Answer'}</label>
              <input type="text" value={securityAnswer} onChange={e => setSecurityAnswer(e.target.value)} required className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder={isAr ? 'اكتب إجابتك هنا' : 'Type your answer here'} />
            </div>
            <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary/90 transition">
              {isAr ? 'متابعة' : 'Continue'}
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleStep3} className="space-y-4">
            <p className="text-sm text-muted-foreground">{isAr ? 'أدخل كلمة المرور الجديدة' : 'Enter your new password'}</p>
            <div>
              <label className="block text-sm font-medium mb-1">{isAr ? 'كلمة المرور الجديدة' : 'New Password'}</label>
              <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} required minLength={6} className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="••••••••" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{isAr ? 'تأكيد كلمة المرور' : 'Confirm Password'}</label>
              <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="••••••••" />
            </div>
            <button type="submit" disabled={loading} className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary/90 transition disabled:opacity-50">
              {loading ? '...' : (isAr ? 'تغيير كلمة المرور' : 'Reset Password')}
            </button>
          </form>
        )}

        <div className="mt-4 text-center">
          <button onClick={() => navigate('/login')} className="text-sm text-muted-foreground hover:text-primary transition">
            {isAr ? '← العودة لتسجيل الدخول' : '← Back to Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
}
