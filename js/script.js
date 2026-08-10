document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.querySelector('.menu__mobile');
    const closeBtn = document.querySelector('.menu__close');
    const menuListMobile = document.querySelector('.menu__list-mobile');
    const overlay = document.querySelector('.menu__overlay');

    function toggleMenu() {
        menuListMobile.classList.toggle('menu__list-mobile--open');
        overlay.classList.toggle('menu__overlay--open');
    }

    if (mobileBtn) mobileBtn.addEventListener('click', toggleMenu);
    if (closeBtn) closeBtn.addEventListener('click', toggleMenu);
    if (overlay) overlay.addEventListener('click', toggleMenu);
});