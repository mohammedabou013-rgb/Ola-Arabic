import { useI18n } from '@/i18n/context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Mail, Trash2, Database, Mic, Globe } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const { language } = useI18n();
  const isAr = language === 'ar';

  const content = isAr
    ? {
        title: 'سياسة الخصوصية',
        intro:
          'أكاديمية العُلا (Ola Arabic) تلتزم بحماية خصوصية مستخدميها. تصف هذه السياسة البيانات التي نجمعها، وكيف نستخدمها، وكيف يمكنك التحكم فيها.',
        sections: [
          {
            icon: Database,
            heading: 'البيانات التي نجمعها',
            items: [
              'عنوان البريد الإلكتروني وكلمة المرور عند إنشاء حساب (اختياري).',
              'التقدم في الدروس، النقاط، والإنجازات — تُخزن محلياً على جهازك.',
              'تسجيلات صوتية مؤقتة فقط أثناء تمارين التحدث، ولا تُحفظ على خوادمنا.',
            ],
          },
          {
            icon: Shield,
            heading: 'كيف نستخدم البيانات',
            items: [
              'لتسجيل دخولك ومزامنة تقدمك عبر الأجهزة.',
              'لتحسين تجربة التعلم داخل التطبيق.',
              'لن نبيع أو نشارك بياناتك مع أي طرف ثالث للإعلانات.',
            ],
          },
          {
            icon: Globe,
            heading: 'الخدمات الخارجية',
            items: [
              'نستخدم خوادم أكاديمية العُلا لتوفير محتوى المنهج.',
              'لا نستخدم أدوات تحليل أو تتبع تابعة لجهات خارجية.',
            ],
          },
          {
            icon: Trash2,
            heading: 'حقوقك',
            items: [
              'يمكنك حذف حسابك وبياناتك في أي وقت من صفحة: /delete-data',
              'يمكنك مسح التقدم المحلي من إعدادات جهازك.',
            ],
          },
          {
            icon: Mail,
            heading: 'التواصل',
            items: [
              'إذا كان لديك أي سؤال، تواصل معنا عبر البريد الإلكتروني للدعم.',
            ],
          },
        ],
        footer: 'آخر تحديث: 21 يوليو 2026',
      }
    : {
        title: 'Privacy Policy',
        intro:
          'Ola Arabic (أكاديمية العُلا) is committed to protecting your privacy. This policy explains what data we collect, how we use it, and how you can control it.',
        sections: [
          {
            icon: Database,
            heading: 'Data We Collect',
            items: [
              'Email address and password when you create an account (optional).',
              'Lesson progress, points, and achievements — stored locally on your device.',
              'Temporary audio recordings only during speaking exercises; not saved on our servers.',
            ],
          },
          {
            icon: Shield,
            heading: 'How We Use Data',
            items: [
              'To log you in and sync progress across devices.',
              'To improve your learning experience inside the app.',
              'We do not sell or share your data with third parties for advertising.',
            ],
          },
          {
            icon: Globe,
            heading: 'Third-Party Services',
            items: [
              'We use Ola Arabic servers to provide curriculum content.',
              'We do not use third-party analytics or tracking tools.',
            ],
          },
          {
            icon: Trash2,
            heading: 'Your Rights',
            items: [
              'You can delete your account and data at any time via: /delete-data',
              'You can clear local progress from your device settings.',
            ],
          },
          {
            icon: Mail,
            heading: 'Contact',
            items: [
              'If you have any questions, please contact our support email.',
            ],
          },
        ],
        footer: 'Last updated: July 21, 2026',
      };

  return (
    <div className="min-h-[60vh] p-6 max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-primary" />
            <CardTitle className="text-2xl">{content.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          <p className="text-muted-foreground leading-relaxed">{content.intro}</p>

          {content.sections.map((section, idx) => (
            <section key={idx} className="space-y-3">
              <div className="flex items-center gap-2">
                <section.icon className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold">{section.heading}</h2>
              </div>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          ))}

          <p className="text-sm text-muted-foreground border-t pt-4">
            {content.footer}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
