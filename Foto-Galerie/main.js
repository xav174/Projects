const home = document.querySelectorAll(".home-wrapper");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // Wenn unser Element im Sichtbereich ist (entry.isIntersecting === true), dann wird die Klasse show hinzugefügt, ansonsten wird die Klasse show entfernt (entry.isIntersecting === false)
    entry.target.classList.toggle("show", entry.isIntersecting) 
  });  
}, {
  threshold: 0.7,
});

home.forEach(home => {
  observer.observe(home);
})
