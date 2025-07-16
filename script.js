function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}   

// Typewriter effect for title
const titleElement = document.querySelector('.section__text__p2.typewriter');
const text = titleElement.textContent;
let index = 0;