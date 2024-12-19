//Animation v3

window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", setScrollVar);
function setScrollVar() {
  const htmlElement = document.documentElement;
  const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
  console.log( Math.min(percentOfScreenHeightScrolled * 100, 100))
  htmlElement.style.setProperty("--scroll", Math.min(percentOfScreenHeightScrolled * 100, 100))
}

setScrollVar()

//Animation v2
// let scrollTimeout;

// function fadeAnimationOnScroll() {
//   const elements = document.querySelectorAll(".fade-animation");
//   const windowHeight = window.innerHeight;

//   elements.forEach((element) => {
//     // getBoundingClientRect gibt mir die Position vom Element relativ zum viewport und die Größe des Objekts
//     const elementTop = element.getBoundingClientRect().top;
//     const elementBottom = element.getBoundingClientRect().bottom;

//     // Fade-In: Wenn das Element zu 50% sichtbar ist
//     if (elementTop < windowHeight * 0.5 && elementBottom > windowHeight * 0.5) {
//       element.classList.add("show");
//     } 
//     // Fade-Out: Wenn das Element den sichtbaren Bereich verlässt
//     else {
//       element.classList.remove("show");
//     }
//   });
// }

// // Debouncing des Scroll-Events
// window.addEventListener("scroll", () => {
//     fadeAnimationOnScroll();
// });

// // Initiales Auslösen beim Laden der Seite
// window.addEventListener("load", fadeAnimationOnScroll);

//Animation v1
// const fadeElements = document.querySelectorAll(".fade-animation");

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     // Wenn unser Element im Sichtbereich ist (entry.isIntersecting === true), dann wird die Klasse show hinzugefügt, ansonsten wird die Klasse show entfernt (entry.isIntersecting === false)
//     if (entry.isIntersecting) {
//       entry.target.classList.add("show");
//     }else {
//       entry.target.classList.remove("show");
//     }
//   });  
// }, {
//   threshold: 0.8,
//   rootMargin: "0px 0px -10% 0px"
// });

// fadeElements.forEach(fadeElements => {
//   observer.observe(fadeElements);
// });

const fadeElements2 = document.querySelectorAll(".fade-animation2");

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // Wenn unser Element im Sichtbereich ist (entry.isIntersecting === true), dann wird die Klasse show hinzugefügt, ansonsten wird die Klasse show entfernt (entry.isIntersecting === false)
    entry.target.classList.toggle("show2", entry.isIntersecting) 
  });  
}, {
  threshold: 0.5,
});

fadeElements2.forEach(fadeElements2 => {
  observer2.observe(fadeElements2);
});