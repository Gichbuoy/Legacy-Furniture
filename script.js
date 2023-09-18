// Script for navigation bar  hamberger menu
// onclick hamburger menu

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
// check if hamburger menu is clicked
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
// close button in hamburger menu
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
