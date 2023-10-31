"use strict";
(function(){
    console.log("page loaded");
    const headmenu = document.querySelector('.submenu');
    const headbutton = document.querySelector('.menu-button');
    headbutton.addEventListener('click',function(){
        console.log("button clicked");
        headmenu.classList.toggle("active");

    })
    const modalEl = document.querySelector('.modal');
    const openEl = document.querySelectorAll('.text-button');
    const closeEl = document.querySelector('.Cancle-button');

openEl.forEach(item => {item.addEventListener('click', () => {
 modalEl.showModal();
 console.log("modal clicked");
 
});
});
closeEl.addEventListener('click', () =>{
    modalEl.close();
   });
   const registerFormEL = document.querySelector('.register-form');
   const userEmailEL = document.querySelector('#register-form-inputEmail');
   const userEmailErrorEL = document.querySelector('.register-form-invalidemail');
   const usercomfirmEmailEL = document.querySelector('#register-form-input-comfirmEmail');
   const usercomfirmEmailErrorEL = document.querySelector('.register-form-invalidcomfirmEmail');
   registerFormEL.addEventListener('submit', (e) => {
 
       let isInvalid = false; 
       registerFormEL.classList.remove('register-confirm-error')
       const userEmail = userEmailEL.value;
       const usercomfirmEmail = usercomfirmEmailEL.value;

       if(!userEmail ){
           isInvalid = true;
          
           userEmailErrorEL.innerText="Email is required";
           console.log('bad Email');
       }
       else if( userEmail.indexOf('@') === -1 ){
           isInvalid = true;
          
           userEmailErrorEL.innerText="Email not avaliable must contain @";
           console.log('bad Email');
       }
       if(!usercomfirmEmail ){
           isInvalid = true;
          
           usercomfirmEmailErrorEL.innerText="ComfirmEmail is required";
           console.log('bad Email');
       }

       else if(usercomfirmEmail !==userEmail){
           isInvalid = true;
          
           usercomfirmEmailErrorEL.innerText="ComfirmEmail is not same ";
           console.log('bad Comfirm Email');
       }else{
          
           usercomfirmEmailErrorEL.innerText="";
       }

       if(isInvalid){
           e.preventDefault();
       }
   });
   

   userEmailEL.addEventListener('input',(e) =>{
       const userEmail = e.target.value;
       if(!userEmail){
           userEmailErrorEL.innerText = "Email is required";
       }else if(userEmail.indexOf('@') === -1){
           userEmailErrorEL.innerText = "Email not avaliable must contain @";
       }else{
           userEmailErrorEL.innerText = "";
       }
           });
           
   usercomfirmEmailEL.addEventListener('input',(e) =>{
       const usercomfirmEmail = e.target.value;
       const userEmail = userEmailEL.value;
       if(!usercomfirmEmail){
           usercomfirmEmailErrorEL.innerText = "ComfirmEmail is required";
           
       }
       else if(usercomfirmEmail !== userEmail || !userEmail){
           usercomfirmEmailErrorEL.innerText = "ComfirmEmail is not same";
       }
       else{
           usercomfirmEmailErrorEL.innerText = "";
       }
           });
           

   
})();
