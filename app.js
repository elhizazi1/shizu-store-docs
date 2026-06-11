document.addEventListener('DOMContentLoaded', () => {
  const langSw = document.getElementById('langSw');
  const htmlRoot = document.getElementById('htmlRoot');
  
  let currentLang = localStorage.getItem('shizu_lang') || 'en';

  async function loadLanguage(lang) {
    try {
      // جلب ملف الترجمة
      const response = await fetch(`local/${lang}.json?v=${new Date().getTime()}`);
      
      if (!response.ok) throw new Error('لا يمكن الوصول لملف اللغة.');
      
      const translations = await response.json();

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key]) {
          el.innerHTML = translations[key];
        }
      });

      const isRtl = lang === 'ar';
      htmlRoot.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
      htmlRoot.setAttribute('lang', lang);

      localStorage.setItem('shizu_lang', lang);
      currentLang = lang;
      
      // تحديث القائمة المنسدلة لتعرض اللغة المحددة حالياً
      if (langSw) {
        langSw.value = lang;
      }
      
    } catch (error) {
      console.error('JSON Error:', error);
      alert("تعذر تبديل اللغة! يوجد خطأ في صيغة ملف " + lang + ".json.");
    }
  }

  // الاستماع لحدث تغيير القائمة المنسدلة بدلاً من النقر
  if (langSw) {
    langSw.addEventListener('change', (e) => {
      loadLanguage(e.target.value);
    });
  }

  loadLanguage(currentLang);
});
