// content.js
window.addEventListener('blur', function() {
    window.focus();
});

window.forceBrowserDefault = (e) => {
    e.stopImmediatePropagation();
    return true;
};

['copy','cut','paste'].forEach(e => document.addEventListener(e, window.forceBrowserDefault, true));
