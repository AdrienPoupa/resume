let userLang = navigator.language || navigator.userLanguage;

let urlParams = new URLSearchParams(window.location.search);

let lang = userLang.split('-')[0];

if (lang === 'fr' && window.location.pathname !== '/fr' && !urlParams.has('forceLang')) {
    window.location.replace('/fr');
}