document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const sideMenu = document.getElementById('sideMenu');
    const closeBtn = document.querySelector('.side-menu-close');
    let closeTimer;

    function openMenu() {
        clearTimeout(closeTimer);
        sideMenu.classList.add('active');
    }

    function closeMenu() {
        sideMenu.classList.remove('active');
    }

    function scheduleClose() {
        clearTimeout(closeTimer);
        closeTimer = setTimeout(closeMenu, 150);
    }

    hamburger.addEventListener('mouseenter', openMenu);
    hamburger.addEventListener('mouseleave', scheduleClose);
    hamburger.addEventListener('click', openMenu);
    sideMenu.addEventListener('mouseenter', () => clearTimeout(closeTimer));
    sideMenu.addEventListener('mouseleave', scheduleClose);

    closeBtn.addEventListener('click', closeMenu);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });
});
