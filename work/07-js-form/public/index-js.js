"use strict";
(function(){

    const registerFormEL = document.querySelector('.register-form');
    const usernameErrorEL = document.querySelector('.register-form-invalidname');
    const usernameEL = document.querySelector('#register-form-inputuserName');
    const userEmailEL = document.querySelector('#register-form-inputEmail');
    const userEmailErrorEL = document.querySelector('.register-form-invalidemail');
    const usercomfirmEmailEL = document.querySelector('#register-form-input-comfirmEmail');
    const usercomfirmEmailErrorEL = document.querySelector('.register-form-invalidcomfirmEmail');
    registerFormEL.addEventListener('submit', (e) => {
  
        let isInvalid = false; 
        registerFormEL.classList.remove('register-confirm-error')
        const username = usernameEL.value;
        const userEmail = userEmailEL.value;
        const usercomfirmEmail = usercomfirmEmailEL.value;
        if(!username ){
            isInvalid = true;
           
            registerFormEL.classList.add('register-confirm-error')
            console.log('bad username');
        }

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
    
    usernameEL.addEventListener('input',(e) =>{
const username = e.target.value;
registerFormEL.classList.remove('register-confirm-error')
if(!username){
    registerFormEL.classList.add('register-confirm-error')
    console.log('no name ');
}else {
    registerFormEL.classList.remove('register-confirm-error');
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