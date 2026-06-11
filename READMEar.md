
# 📦 shizu_store.json — Developer Reference

<p align="center">
  <img src="https://img.shields.io/badge/Shizuku-API%2013%2B-9cf?logo=android&style=for-the-badge" alt="Shizuku">
  <img src="https://img.shields.io/badge/Store-CoreFetch-1f425f?style=for-the-badge" alt="CoreFetch">
  <img src="https://img.shields.io/badge/JSON-Schema%20Validated-brightgreen?style=for-the-badge" alt="Schema">
</p>

> ✨ **Overview:** أضف `shizu_store.json` إلى مستودعك على GitHub لتنشر تطبيقك على متجر **Shizu CoreFetch** — المتجر اللامركزي لتطبيقات أندرويد العاملة بصلاحيات Shizuku.

---

## 📑 جدول المحتويات

- [💡 ما هو Shizu CoreFetch؟](#-ما-هو-shizu-corefetch)
- [🧩 ما هو `shizu_store.json`؟](#-ما-هو-shizu_storejson)
- [📂 مكان الملف](#-مكان-الملف)
- [✅ الحقول المطلوبة](#-الحقول-المطلوبة)
- [🧰 الحقول الاختيارية – المرجع الكامل](#-الحقول-الاختيارية--المرجع-الكامل)
  - [ℹ️ بيانات التطبيق](#ℹ️-بيانات-التطبيق)
  - [💰 الإعلانات وتحقيق الدخل](#-الإعلانات-وتحقيق-الدخل)
  - [🖼️ الوسائط والمجتمع](#️-الوسائط-والمجتمع)
  - [👤 محفظة المطور](#-محفظة-المطور)
  - [🌐 الترجمة (locales)](#-الترجمة-locales)
- [🌍 اللغات المدعومة](#-اللغات-المدعومة)
- [🔍 التحقق من الصحة](#-التحقق-من-الصحة)
- [⚠️ أخطاء شائعة](#️-أخطاء-شائعة)
- [🏗️ البنية والإخلاء](#️-البنية-والإخلاء)
- [🔒 تنبيه أمني](#-تنبيه-أمني)
- [🧪 مثال كامل](#-مثال-كامل)
- [☑️ قائمة تدقيق سريعة](#️-قائمة-تدقيق-سريعة)

---

## 💡 ما هو Shizu CoreFetch؟

**Shizu CoreFetch** هو متجر تطبيقات لامركزي مخصص للتطبيقات المبنية على [Shizuku](https://shizuku.rikka.app/). يمنح Shizuku التطبيقات صلاحيات بمستوى ADB بدون روت، مما يسمح بعمليات نظام متقدمة.

المتجر يستخدم صلاحيات Shizuku **لتثبيت APK بصمت** – أي بدون نافذة التثبيت المعتادة في أندرويد.

---

## 🧩 ما هو `shizu_store.json`؟

ملف **JSON بيان** (manifest) تضعه في مستودع GitHub. إنه الجسر بين مستودعك والمتجر، ويحدد:

- البيانات الأساسية (الاسم، اسم الحزمة، الوصف)
- إعلانات مخصصة (تحقيق الدخل)
- محفظة المطور (روابط التواصل، موقعك، تطبيقات أخرى)
- ترجمات لـ 9 لغات

⚠️ يجب تسمية الملف **بدقة** `shizu_store.json` ووضعه في جذر المستودع.

---

## 📂 مكان الملف

ضعه في **جذر** المستودع، بجانب `README.md`:

```text
my-shizuku-app/
├── shizu_store.json      ✅ الموقع الصحيح
├── README.md
├── app/
│   └── src/...
└── build.gradle
```

وضعه في مجلد فرعي لن يعمل:

```text
my-shizuku-app/
├── docs/
│   └── shizu_store.json  ❌ لن يُكتشف
└── ...
```

---

✅ الحقول المطلوبة

بدون هذه الحقول الأربعة، سيتجاهل المتجر ملفك ويعود للبيانات الافتراضية من GitHub.

الحقل النوع الوصف
app_name string اسم التطبيق (أقصى 100 حرف)
package_name string اسم الحزمة (مثال: xyz.siwane.myapp)
short_description string وصف قصير يظهر في القوائم (أقصى 200 حرف)
icon_url string (URL) رابط HTTPS مباشر إلى أيقونة التطبيق

---

🧰 الحقول الاختيارية – المرجع الكامل

ℹ️ بيانات التطبيق

الحقل النوع الوصف
detailed_description string وصف مفصل (يدعم \n للسطر الجديد و**نص** للخط العريض)
developer_message string رسالة شخصية من المطور تُعرض في بطاقة خاصة
category string فئة التطبيق مثل "Tools" أو "Developer"
download_url string (URL) رابط مباشر لملف APK، يجب أن ينتهي بـ .apk
repo_url string (URL) رابط المستودع على GitHub
app_website string (URL) الموقع الرسمي للتطبيق

💰 الإعلانات وتحقيق الدخل

يمكنك عرض إعلانات مخصصة داخل صفحة تفاصيل تطبيقك.

الحقل النوع الوصف
ad boolean اجعله true لتفعيل الإعلانات
ads array مصفوفة إعلانات (تتطلب position، image_url، target_url)

🚫 سياسة الإعلان: يُمنع منعًا باتًا الترويج للقمار، الكحول، المخدرات، المواد الإباحية، أو التحريض الديني. المخالفة تؤدي إلى إدراج التطبيق في القائمة السوداء فورًا.

🖼️ الوسائط والمجتمع

الحقل النوع الوصف
banner_url string (URL) رابط صورة بانر (يُفضّل 16:9)
screenshots array of string حتى 20 رابط HTTPS للقطات شاشة
store_issue_number integer رقم الإصدار (Issue) على GitHub لجلب التعليقات

👤 محفظة المطور

يُستخدم كائن developer لبناء لوحة المطور في المتجر.

```json
{
  "developer": {
    "name": "Jamal El Hizazi",
    "banner_url": "https://domain.com/coverture.jpg",
    "account_url": "https://github.com/elhizazi1",
    "email": "jamal@elhizazi.me",
    "website": "https://siwane.xyz",
    "portfolio": "https://jamal.elhizazi.me",
    "socials": {
      "github": "https://github.com/elhizazi1",
      "x": "https://x.com/elhizazi1"
    }
  }
}
```

🌐 الترجمة (locales)

كائن locales يحوي نصوصًا مترجمة، والمفاتيح هي رموز لغات BCP 47.
الحقول القابلة للترجمة: app_name، short_description، detailed_description، developer_message، developer_name، banner_url، changelog.

---

🌍 اللغات المدعومة

الرمز اللغة الاسم المحلي
ar العربية العربية
en English English
fr Français Français
es Español Español
pt Português Português
ru Русский Русский
hi हिन्दी हिन्दी
zh 中文 中文
ja 日本語 日本語

---

🔍 التحقق من الصحة

قبل رفع الملف، تأكد من صلاحيته:

1. افتح jsonschemavalidator.net
2. ألصق محتوى schema.json في اللوحة اليسرى (Schema)
3. ألصق ملفك shizu_store.json في اللوحة اليمنى (Input JSON)

---

⚠️ أخطاء شائعة

· مفاتيح مكررة: JSON لا يسمح بتكرار المفتاح. انتبه في كائن locales.
· فواصل زائدة: احذف الفاصلة بعد آخر عنصر في أي كائن أو مصفوفة.
· روابط نسبية: كل الروابط (مثل icon_url, banner_url) يجب أن تكون HTTPS مطلقة.
· اسم ملف خاطئ: يجب أن يكون shizu_store.json بالضبط، وفي جذر المستودع.

---

🏗️ البنية والإخلاء

الجلب اللامركزي: متجر Shizu CoreFetch يعمل كجسر، حيث يجلب بيانات التطبيق وإصدارات APK مباشرة من مستودعات GitHub للمطورين. لا توجد استضافة مباشرة من المتجر.

إخلاء مسؤولية: صانع Shizu CoreFetch (جمال الهيزازي) غير مسؤول عن وظائف أو سلامة تطبيقات الطرف الثالث. مع ذلك، تحتفظ الإدارة بحق إدراج أي تطبيق أو إعلان في القائمة السوداء إذا خالف سياسات المتجر.

---

🔒 تنبيه أمني

⚠️ التطبيقات التي تعمل تحت Shizuku يمكنها تنفيذ عمليات حساسة. أنت مسؤول عن أمان تطبيقك.



· ❌ لا توزع برمجيات خبيثة أو تجسس.
· 📂 انشر الشيفرة المصدرية كلما أمكن.
· 🔑 وقّع ملفات APK بتوقيع ثابت.

---

🧪 مثال كامل

<details>
<summary>🔽 انقر لإظهار مثال shizu_store.json الكامل والصحيح</summary>

```json
{
  "app_name": "Example Shizuku App",
  "package_name": "xyz.siwane.myapp",
  "short_description": "A short, catchy description of your app.",
  "detailed_description": "Welcome to My Shizuku App! This tool helps you manage your device efficiently.\n\n**Features:**\n- Silent installation.\n- Background tasks.",
  
  "ad": true,
  "ads": [
    {
      "position": "top",
      "image_url": "https://example.com/assets/ad_top.webp",
      "target_url": "https://sponsored-link.com"
    }
  ],
  
  "developer_message": "Thank you for using my app!",
  "icon_url": "https://raw.githubusercontent.com/username/repo/main/icon.png",
  "banner_url": "https://raw.githubusercontent.com/username/repo/main/banner.png",
  "app_website": "https://myapp-website.com",
  "store_issue_number": 1,
  
  "developer": {
    "name": "Developer Name",
    "banner_url": "https://example.com/assets/dev_coverture.jpg",
    "account_url": "https://github.com/username",
    "email": "contact@example.com",
    "website": "https://developer-website.com",
    "portfolio": "https://portfolio.example.com",
    "socials": {
      "github": "https://github.com/username",
      "telegram": "https://t.me/username"
    }
  },
  
  "repo_url": "https://github.com/username/repo",
  "screenshots": [
    "https://raw.githubusercontent.com/username/repo/main/screen1.png"
  ],
  
  "locales": {
    "ar": {
      "app_name": "اسم التطبيق",
      "short_description": "وصف قصير وجذاب لتطبيقك.",
      "detailed_description": "مرحباً بك في تطبيقي! يعمل عبر Shizuku.",
      "developer_message": "شكراً لاستخدامكم تطبيقي!",
      "developer_name": "اسم المطور"
    }
  }
}
```

</details>

---

☑️ قائمة تدقيق سريعة

· اسم الملف shizu_store.json بالضبط
· الملف في جذر المستودع
· JSON سليم نحوياً (لا فواصل زائدة، لا مفاتيح مكررة)
· الحقول الأربعة المطلوبة موجودة
· كل الروابط مطلقة وتستخدم HTTPS
· الإعلانات تلتزم بالسياسة
· تم التحقق عبر schema.json

```

---

**الآن هذا README:**
- ✨ عصري وأنيق، مع شارات وأيقونات واضحة.
- 📦 يحتوي على JSON صحيح 100% (روابط عادية، بدون صيغة Markdown).
- 🧩 مثال JSON مطوي في قسم `<details>` لتوفير مساحة.
- 🚀 جاهز لإبهار أي مطور.

هل هذا يرضي ذوقك أم تريد لمسات إضافية؟ 😊
