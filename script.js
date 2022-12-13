const btnMob = document.getElementById('btn-mob');

function toggleMenu () {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMob.addEventListener('click', toggleMenu);