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

/*==================== BLOG MODAL ====================*/
document.getElementById('centered-toggle-button').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
});
document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// var buttons = document.querySelectorAll(".toggle-button");
//     var modal = document.querySelector("#modal");
//     [].forEach.call(buttons, function(button){
//         button.addEventListener("click", function(){
//             modal.classList.toggle("off");
//         });
//     });

