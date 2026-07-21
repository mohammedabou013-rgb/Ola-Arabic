import { useState } from 'react';
import { useLocation } from 'wouter';
import { useI18n } from '@/i18n/context';
import { useAuth } from '@/contexts/AuthContext';
import { deleteMyAccount } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Trash2, Mail, ArrowLeft, AlertTriangle } from 'lucide-react';

export default function DeleteDataPage() {
  const { language } = useI18n();
  const { user } = useAuth();
  const [, navigate] = useLocation();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const isAr = language === 'ar';

  const handleDelete = async () => {
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      await deleteMyAccount();
      setSuccess(isAr
        ? 'تم حذف حسابك وجميع بياناتك. شكراً لاستخدامك أكاديمية العُلا.'
        : 'Your account and all data have been deleted. Thank you for using Ola Arabic.');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : (isAr ? 'حدث خطأ' : 'An error occurred'));
    } finally {
      setLoading(false);
    }
  };

  const t = {
    title: isAr ? 'حذف الحساب والبيانات' : 'Delete Account & Data',
    subtitle: isAr
      ? 'يمكنك طلب حذف حسابك وجميع البيانات المرتبطة به في أي وقت.'
      : 'You can request deletion of your account and all associated data at any time.',
    whatDeleted: isAr ? 'ما الذي سيتم حذفه؟' : 'What will be deleted?',
    items: isAr
      ? [
          'حسابك وبريدك الإلكتروني وكلمة المرور',
          'تقدمك في الدروس والنجوم والخبرة',
          'إنجازاتك وأيامك المتتالية',
          'إعدادات التطبيق المخزنة محلياً',
        ]
      : [
          'Your account, email, and password',
          'Your lesson progress, stars, and XP',
          'Your achievements and streaks',
          'Locally stored app settings',
        ],
    emailOption: isAr
      ? 'إذا لم تتمكن من تسجيل الدخول، أرسل طلب الحذف عبر البريد:'
      : 'If you cannot log in, send a deletion request by email:',
    email: 'support@olaarabic.com',
    loginPrompt: isAr
      ? 'للحذف المباشر، سجّل الدخول أولاً.'
      : 'To delete directly, please log in first.',
    loginBtn: isAr ? 'تسجيل الدخول' : 'Sign In',
    deleteBtn: isAr ? 'حذف حسابي وكل بياناتي' : 'Delete my account & all data',
    cancel: isAr ? 'إلغاء' : 'Cancel',
    confirm: isAr ? 'تأكيد الحذف' : 'Confirm Delete',
    confirmText: isAr
      ? 'هذا الإجراء نهائي ولا يمكن التراجع عنه. هل أنت متأكد؟'
      : 'This action is permanent and cannot be undone. Are you sure?',
    back: isAr ? 'العودة' : 'Back',
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-orange-50 p-4" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="w-full max-w-lg">
        <button
          onClick={() => navigate('/login')}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-4 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.back}
        </button>

        <Card className="border-2 shadow-xl">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-destructive/10 text-destructive rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Trash2 className="w-8 h-8" />
            </div>
            <CardTitle className="text-2xl">{t.title}</CardTitle>
            <CardDescription className="text-base">{t.subtitle}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted rounded-xl p-4">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                {t.whatDeleted}
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {t.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-destructive">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 rounded-lg px-4 py-2 text-sm">
                {error}
              </div>
            )}
            {success && (
              <div className="bg-green-50 text-green-700 rounded-lg px-4 py-2 text-sm">
                {success}
              </div>
            )}

            {user ? (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" className="w-full" disabled={loading || !!success}>
                    <Trash2 className="w-4 h-4 mr-2" />
                    {loading ? '...' : t.deleteBtn}
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>{t.confirm}</AlertDialogTitle>
                    <AlertDialogDescription>{t.confirmText}</AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>{t.cancel}</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                      {t.confirm}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            ) : (
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground text-center bg-amber-50 text-amber-800 rounded-lg px-4 py-3">
                  {t.loginPrompt}
                </div>
                <Button onClick={() => navigate('/login')} className="w-full">
                  {t.loginBtn}
                </Button>
              </div>
            )}

            <div className="border-t pt-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">{t.emailOption}</p>
              <a
                href={`mailto:${t.email}?subject=${encodeURIComponent(isAr ? 'طلب حذف حساب' : 'Account Deletion Request')}`}
                className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
              >
                <Mail className="w-4 h-4" />
                {t.email}
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
