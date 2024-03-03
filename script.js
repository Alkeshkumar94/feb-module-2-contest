let emailInput=document.getElementById("email");
let passwordInput=document.getElementById("password");
let emailError=document.getElementById("email-error");
let passwordError=document.getElementById("password-error");
let submitButton=document.getElementById("submitbtn");
let passmsg=document.getElementById("allset");
let signupForm=document.getElementById("signupform");

emailInput.addEventListener('input', ()=>{
    if(emailInput.value.length<3 || !emailInput.value.includes('@') || !emailInput.value.includes('.')){
        emailError.textContent="Make sure email is more than 3 characters and has @ and a."
    }
    else{
        emailError.textContent="";
    }
})
passwordInput.addEventListener('input',()=>{
    if(passwordInput.value.length<8){
        passwordError.textContent="Make sure password is more than 8 characters."
    }
    else{
        passwordError.textContent="";
        passmsg.innerText="All Good to go!";
    }
})


submitButton.addEventListener('click',  (event)=> {
    event.preventDefault();

    if (emailInput.value === "" || passwordInput.value === "") {
        alert( "Please fill all the fields.");}
    
   else if (emailError.innerText==="" && passwordError.innerText==="") {
        if (confirm('Are you sure you want to sign up?')) {
            alert('Successful signup!');
            signupForm.reset();
        passmsg.innerText="";
        } 
    } 
});
