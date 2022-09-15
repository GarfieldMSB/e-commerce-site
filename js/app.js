// import slider from './slider.js';
// import actionBar from './actionBar.js'

document.addEventListener('DOMContentLoaded', (e) => {
    // slider();
    // actionBar();
    // accordion();


});


const accordion = document.getElementsByClassName('accordion-container');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
    
}