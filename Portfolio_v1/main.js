// navbar toggle 

const menu = document.getElementById('menu-btn');
const responsiveNavbar = document.querySelector('.right-navbar');

menu.onclick = () => {
    responsiveNavbar.classList.toggle('visible');
};
//close navbar when clicked outside
document.addEventListener('click', (event) => {
    if (!responsiveNavbar.contains(event.target) && !menu.contains(event.target)) {
        responsiveNavbar.classList.remove('visible');
    }
});

//fade in Animation von der rechten Seite

const rightElement = document.querySelectorAll(".js-fade-animation-right");

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        entry.target.classList.toggle('showRight', entry.isIntersecting)
    });
}, {
    threshold: 0.3,
});

rightElement.forEach(element => {
    observer1.observe(element);
});

//fade in Animation von der linken Seite

const leftElement = document.querySelectorAll(".js-fade-animation-left");

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        entry.target.classList.toggle('showLeft', entry.isIntersecting)
    });
}, {
    threshold: 0.3,
});

leftElement.forEach(element => {
    observer2.observe(element);
});

