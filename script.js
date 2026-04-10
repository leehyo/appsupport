// 초기 로딩 시 브라우저 언어 감지
document.addEventListener('DOMContentLoaded', () => {
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith('en')) {
        setLanguage('en');
    }
});

// 언어 토글 함수
function toggleLanguage() {
    const currentLang = document.body.getAttribute('data-lang');
    if (currentLang === 'ko') {
        setLanguage('en');
    } else {
        setLanguage('ko');
    }
}

// 언어 설정 적용
function setLanguage(lang) {
    document.body.setAttribute('data-lang', lang);
    document.documentElement.lang = lang;
    const toggleBtn = document.querySelector('.lang-toggle');
    if (toggleBtn) {
        if (lang === 'ko') {
            toggleBtn.textContent = 'English';
        } else {
            toggleBtn.textContent = '한국어';
        }
    }
}
