const btnMenu = document.getElementById('main-menu-toggle');

function toggleMenu(event) {
    if(event.type === 'touchstart') preventDefault()
    const nav = document.querySelector('.main-nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active)

    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir menu');
    }
}

btnMenu.addEventListener('click', toggleMenu);
btnMenu.addEventListener('touchstart', toggleMenu);