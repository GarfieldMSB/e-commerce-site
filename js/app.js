import Navbar from './navbar.js';
import Sidebar from './Sidebar.js';
import slider from './slider.js';
// import actionBar from './actionBar.js'

document.addEventListener('DOMContentLoaded', (e) => {
    slider();
    Navbar();
    Sidebar();
    // actionBar();
    // accordion();

});


const accordion = document.getElementsByClassName('accordion-container');
const accordionTitle = document.getElementsByClassName('accordion-title');

for (let i = 0; i < accordionTitle.length; i++) {
    accordionTitle[i].addEventListener('click', function () {
        accordion[i].classList.toggle('active')
    })

}