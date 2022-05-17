const hamburger = document.querySelector(".hamburger");
const containerBig = document.querySelector(".container-big");
const links = document.querySelectorAll(".nav-links li");
const icons = document.querySelectorAll(".icons .star")

hamburger.addEventListener("click", () => {
  containerBig.classList.toggle("open");
  icons.forEach(icon=> {
    icon.classList.toggle('blink')
  }) 
  links.forEach(link => {
    link.classList.toggle("fade");
  });
  
});