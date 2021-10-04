const sections = document.querySelectorAll("section");

const options = {
  root: null, //it is the viewports
  threshold: 0,
  rootMargin: "-150px"
};

const observer = new IntersectionObserver((entries, ovserver) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    }
    console.log(entry.target);
    entry.target.classList.toggle("inverse")   // Used Kevin Powels Code
  })
}, options)

sections.forEach(section => observer.observe(section))