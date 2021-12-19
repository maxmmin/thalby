'use strict'

function burgermenu() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    
    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
        burger.classList.toggle('active');
    });
}

burgermenu()