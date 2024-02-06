
document.addEventListener('DOMContentLoaded', () => {

const form = document.getElementById("form");
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById('cpassword');
const phoneNumber = document.getElementById('phoneNumber');
const watsupNumber = document.getElementById("watsupNumber");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validate()) {
        window.location.href = "index.html";
    }
});

function validate() {
    let nameValue = userName.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let cPasswordValue = cpassword.value.trim();
    let pNumberValue = phoneNumber.value.trim();
    let watsupNumValue = watsupNumber.value.trim();
    let isValid = true;

    if (nameValue === "") {
        setError(userName, 'User Name cannot be empty');
        isValid = false;
    } else if (nameValue.length < 4) {
        setError(userName, "User Name should be minimum of 4 characters");
        isValid = false;
    } else {
        setSuccess(userName);
    }

    if (emailValue === "") {
        setError(email, 'Email cannot be empty');
        isValid = false;
    } else if (!emailCheck(emailValue)) {
        setError(email, 'Enter Valid Email Id');
        isValid = false;
    } else {
        setSuccess(email);
    }

    if (passwordValue === "") {
        setError(password, 'Password field cannot be empty');
        isValid = false;
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters long');
        isValid = false;
    } else {
        setSuccess(password);
    }

    if (cPasswordValue === "") {
        setError(cpassword, 'Confirm password cannot be empty');
        isValid = false;
    } else if (cPasswordValue !== passwordValue) {
        setError(cpassword, "Passwords do not match");
        isValid = false;
    } else {
        setSuccess(cpassword);
    }

    if (pNumberValue === "") {
        setError(phoneNumber, 'Phone Number cannot be empty');
        isValid = false;
    } else if (pNumberValue.length < 10) {
        setError(phoneNumber, 'Phone number must be 10 digits');
        isValid = false;
    } else {
        setSuccess(phoneNumber);
    }

    if (watsupNumValue === "") {
        setError(watsupNumber, 'Watsup Number cannot be empty');
        isValid = false;
    } else if (watsupNumValue !== pNumberValue) {
        setError(watsupNumber, 'Phone and Watsup Number are not similar');
        isValid = false;
    } else {
        setSuccess(watsupNumber);
    }
    return isValid;


}

function setError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    small.innerText = message;
    parent.classList.add('error');
    parent.classList.remove('success');
}

function setSuccess(input) {
    let parent = input.parentElement;
    parent.classList.add('success');
    parent.classList.remove('error');
}

function emailCheck(input) {
    let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let valid = emailReg.test(input.trim());
    return valid;
}
});