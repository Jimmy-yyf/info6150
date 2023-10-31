"use strict";
(function(){
    console.log("page loaded");
    const headmenu = document.querySelector('.submenu');
    const headbutton = document.querySelector('.menu-button');
    headbutton.addEventListener('click',function(){
        console.log("button clicked");
        headmenu.classList.toggle("active");

    })
})();