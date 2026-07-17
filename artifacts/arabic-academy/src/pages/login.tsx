import { useState } from 'react';
import { useLocation } from 'wouter';
import { login } from '@/lib/auth';
import { useAuth } from '@/contexts/AuthContext';
import { useI18n } from '@/i18n/context';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [, navigate] = useLocation();
  const { setUser } = useAuth();
  const { language } = useI18n();
  const isAr = language === 'ar';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); setLoading(true);
    try {
      const user = await login(email, password);
      setUser(user);
      navigate('/');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'خطأ في تسجيل الدخول');
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-orange-50 p-4" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-3 rotate-3">عُ</div>
          <h1 className="text-2xl font-bold text-primary">{isAr ? 'أكاديمية العُلا' : 'Ola Arabic'}</h1>
          <p className="text-muted-foreground mt-1">{isAr ? 'تسجيل الدخول' : 'Sign In'}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="bg-red-50 text-red-600 rounded-lg px-4 py-2 text-sm">{error}</div>}
          <div>
            <label className="block text-sm font-medium mb-1">{isAr ? 'البريد الإلكتروني' : 'Email'}</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="example@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{isAr ? 'كلمة المرور' : 'Password'}</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="••••••••" />
          </div>
          <button type="submit" disabled={loading} className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary/90 transition disabled:opacity-50">
            {loading ? '...' : (isAr ? 'دخول' : 'Sign In')}
          </button>
        </form>
        <div className="mt-4 text-center space-y-2">
          <button onClick={() => navigate('/forgot-password')} className="text-sm text-muted-foreground hover:text-primary transition block w-full">
            {isAr ? 'نسيت كلمة المرور؟' : 'Forgot password?'}
          </button>
          <div className="text-sm text-muted-foreground">
            {isAr ? 'ليس لديك حساب؟' : "Don't have an account?"}{' '}
            <button onClick={() => navigate('/register')} className="text-primary font-bold hover:underline">
              {isAr ? 'سجّل الآن' : 'Register'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
