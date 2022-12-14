const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('show');
});