import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AuthUser, getMe, logout as doLogout } from '@/lib/auth';

interface AuthContextType { user: AuthUser | null; loading: boolean; setUser: (u: AuthUser | null) => void; logout: () => void; }
const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMe().then(u => { setUser(u); setLoading(false); });
  }, []);

  const logout = () => { doLogout(); setUser(null); };
  return <AuthContext.Provider value={{ user, loading, setUser, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
