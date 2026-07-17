# Ola Arabic Mobile

تطبيق موبايل أكاديمية العُلا لتعلّم العربية.

## الهيكل

- `app/` — شاشات التطبيق باستخدام Expo Router
- `lib/` — الاتصال بالـ API، التقدم، المنهج، والترجمة
- `i18n/` — إدارة اللغة والترجمات
- `assets/` — الصور والأيقونات
- `app.json` — إعدادات Expo (اسم التطبيق، الـ package، الصلاحيات)

## التشغيل في Replit

- التطبيق يعمل تلقائيًا عبر workflow `artifacts/ola-arabic-mobile: expo`.
- امسح رمز QR من شريط العنوان باستخدام تطبيق Expo Go على هاتفك.

## التشغيل على منصة أخرى (VS Code، محليًا، GitHub Codespaces)

1. تأكد أنك نسخت المشروع بكامله.
2. في الطرفية، ادخل إلى مجلد المشروع:
   ```bash
   cd artifacts/ola-arabic-mobile
   ```
3. ثبّت الحزم:
   ```bash
   pnpm install
   ```
4. شغّل الخادم المحلي:
   ```bash
   pnpm exec expo start
   ```
5. امسح رمز QR بـ Expo Go أو اضغط `a` لتشغيل محاكي Android أو `i` لـ iOS.

## التوافق مع الجوال والتابلت

- تم ضبط `app.json` على `orientation: default` ليدعم الوضع الرأسي والأفقي.
- `supportsTablet: true` مفعّل على iOS.
- الشاشات تستخدم `ScrollView` و `flex` لتتكيّف مع أحجام الشاشات.
- للحصول على أفضل نتيجة، استبدل `assets/images/icon.png` بأيقونة 1024×1024.

## النشر على Google Play

ملاحظة: Replit Expo Launch يدعم iOS فقط، وليس Android.
لنشر على Google Play يمكن استخدام EAS (Expo Application Services) أو بناء ملف AAB محليًا.

المتطلبات:
- حساب مطوّر Google Play (رسوم 25 دولار لمرة واحدة).
- حزمة التطبيق: `com.olaarabic.mobile` (موجودة في `app.json`). لا تغيّرها بعد اليوم.
- أيقونة احترافية 1024×1024.
- ملف Android App Bundle (AAB) موقّع رقميًا.
- رفع الملف إلى Google Play Console وملء بيانات المتجر.
