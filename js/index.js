//declare variables
let form = document.querySelector("form");
let fname = document.getElementById("fullname");
let email = document.getElementById("email");
let msg = document.getElementById("message");
let btn = document.getElementById("collect");

//validate form
function validateForm() {
    
    console.clear();
    
    let collectedData = {};
    let errors = [];
    
    let regex = /[\w-]+@([\w-]+\.)+[\w-]+/;
    
    //validate full name
    if (fname.value !== "") {
        collectedData.fname = fname.value;
    } else {
        errors.push("Please enter your full name.");
    }
    //validate email
    if (email.value !== "") {

        if (regex.test(email.value)) {
            collectedData.email = email.value;
        } else {
            errors.push("Your email address is invalid!");
        }
    } else {
        errors.push("Please enter your email!");
    }
    //validate message
    if (msg.value !== "") {
        collectedData.message = msg.value;
    } else {
        errors.push("Please leave a message!");
    }
    //view input date
    if (errors.length === 0) {
        console.log(collectedData);
        form.reset();
    } else {
        console.log(errors);
    }

}

btn.addEventListener("click", validateForm);