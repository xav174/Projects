// navbar toggle 

const menu = document.getElementById('menu-btn');
const responsiveNavbar = document.querySelector('.right-navbar');

menu.onclick = () => {
    responsiveNavbar.classList.toggle('visible');
};

document.addEventListener('click', (event) => {
    if (!responsiveNavbar.contains(event.target) && !menu.contains(event.target)) {
        responsiveNavbar.classList.remove('visible');
    }
});

