const login = document.getElementById( 'login' );  // Login form ID
const register = document.getElementById( 'register' );   // Register Form ID
const signIn = document.getElementById( 'sign-in' ); // to get the span element  with id="sign-in"
const signUp = document.getElementById( 'sign-up' ); // to get the span element  with id="sign-up"

signUp.addEventListener("click", ()=>{
    login.classList.add('none');
    setTimeout(() => {
        register.classList.remove('none');
    }, 500);
});

signIn.addEventListener("click", ()=>{
    setTimeout(() => {
        login.classList.remove('none');
    }, 500);
    register.classList.add('none');
});