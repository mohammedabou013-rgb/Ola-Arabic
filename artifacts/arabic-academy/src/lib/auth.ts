const API = import.meta.env.BASE_URL.replace(/\/$/, '');

export interface AuthUser { id: string; email: string; name: string; }

export function getToken(): string | null { return localStorage.getItem('ola_token'); }
export function setToken(t: string) { localStorage.setItem('ola_token', t); }
export function clearToken() { localStorage.removeItem('ola_token'); }
export function isLoggedIn(): boolean { return !!getToken(); }

export async function login(email: string, password: string): Promise<AuthUser> {
  const res = await fetch(`${API}/api/auth/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'خطأ في تسجيل الدخول');
  setToken(data.token);
  return data.user;
}

export async function register(email: string, password: string, name: string, securityQuestion: string, securityAnswer: string): Promise<void> {
  const res = await fetch(`${API}/api/auth/register`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password, name, securityQuestion, securityAnswer }) });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'خطأ في التسجيل');
}

export async function getSecurityQuestion(email: string): Promise<string> {
  const res = await fetch(`${API}/api/auth/forgot-password/question`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'البريد غير موجود');
  return data.securityQuestion;
}

export async function resetPassword(email: string, securityAnswer: string, newPassword: string): Promise<void> {
  const res = await fetch(`${API}/api/auth/forgot-password/reset`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, securityAnswer, newPassword }) });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'خطأ في إعادة التعيين');
}

export async function getMe(): Promise<AuthUser | null> {
  const token = getToken();
  if (!token) return null;
  try {
    const res = await fetch(`${API}/api/auth/me`, { headers: { 'Authorization': `Bearer ${token}` } });
    if (!res.ok) { clearToken(); return null; }
    return await res.json();
  } catch { return null; }
}

export function logout() { clearToken(); }
