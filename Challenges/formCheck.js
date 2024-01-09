// Gain Access to form elements
const submitButton = document.getElementById('submit');
const nameField = document.getElementById('name'),
const phoneField = document.getElementById('phone'),
const emailField = document.getElementById('email'),


// Add event listener to submit button
submitButton.addEventListener('click', checkForm);


function checkForm(){
    /*
        In this method check whether name, email, and phone number have input.
        If they are blank turn the fields red.  Otherwise do nothing.
     */

    alert("It is hooked up!");
}