const fadeElements = document.querySelectorAll(".fade-animation");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // Wenn unser Element im Sichtbereich ist (entry.isIntersecting === true), dann wird die Klasse show hinzugefügt, ansonsten wird die Klasse show entfernt (entry.isIntersecting === false)
    entry.target.classList.toggle("show", entry.isIntersecting) 
  });  
}, {
  threshold: 0.8,
});

fadeElements.forEach(fadeElements => {
  observer.observe(fadeElements);
});

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