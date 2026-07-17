import React from 'react';
import { Link, useLocation } from 'wouter';
import { Home as HomeIcon, Gamepad2, MessageCircle, Trophy, LogOut } from 'lucide-react';
import { useI18n } from '@/i18n/context';
import { useAuth } from '@/contexts/AuthContext';

export function Navigation() {
  const { t } = useI18n();
  const { logout } = useAuth();
  const [, navigate] = useLocation();

  const navItems = [
    { href: '/', icon: HomeIcon, label: t('home') },
    { href: '/practice', icon: Gamepad2, label: t('practice') },
    { href: '/tutor', icon: MessageCircle, label: t('tutor') },
    { href: '/progress', icon: Trophy, label: t('progress') }
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      {/* Desktop Sidebar / Top Nav (Integrated in Layout) */}
      <div className="hidden sm:flex flex-col gap-2 p-4 bg-white rounded-3xl border-2 border-border shadow-sm sticky top-24">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="group flex items-center gap-3 p-3 rounded-2xl hover:bg-primary/10 transition-colors font-bold text-muted-foreground hover:text-primary">
            <item.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="text-lg">{item.label}</span>
          </Link>
        ))}
        <button
          onClick={handleLogout}
          className="group flex items-center gap-3 p-3 rounded-2xl hover:bg-red-50 transition-colors font-bold text-muted-foreground hover:text-red-500 mt-2 border-t border-border pt-4"
        >
          <LogOut className="w-6 h-6 group-hover:scale-110 transition-transform" />
          <span className="text-lg">خروج</span>
        </button>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-border p-2 pb-safe z-50 flex justify-around">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="flex flex-col items-center p-2 text-muted-foreground hover:text-primary font-bold">
            <item.icon className="w-6 h-6 mb-1" />
            <span className="text-[10px]">{item.label}</span>
          </Link>
        ))}
        <button onClick={handleLogout} className="flex flex-col items-center p-2 text-muted-foreground hover:text-red-500 font-bold">
          <LogOut className="w-6 h-6 mb-1" />
          <span className="text-[10px]">خروج</span>
        </button>
      </div>
    </>
  );
}
