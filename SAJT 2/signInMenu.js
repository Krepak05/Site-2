
const emailInput = document.getElementById('emailInputInput');
const passwordInput = document.getElementById('password');

let email = emailInput
let password = passwordInput

console.log(email)

function provera(){
    if (email.value.lenght < 9) {
        emailInput.style.background.color = "red"
        return false;
    }
    if (password.value.lenght < 9) {
        passwordInput.style.background.color = 'red';
        return false;
    }
}
