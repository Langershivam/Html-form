
let submit=document.querySelector("#submit");
submit.disabled=true;
let errors = document.getElementsByClassName("error")

// Name Validation
let nameinput = document.querySelector("#Name");
nameinput.addEventListener("blur", nameValid);
function nameValid() {
    let regex = /^([a-z A-Z]){4,20}$/;
    if (regex.test(nameinput.value)) {
        nameinput.style.border = "2px solid green";
        errors[0].style.display = "none";

        return true;
    }
    else {
        nameinput.style.border = "2px solid red";
        errors[0].style.display = "block";
        return false;
    }

}

//Email Validation
let mail = document.querySelector("#Email");
mail.addEventListener("blur", emailValid);

function emailValid() {
    let regex = /^([_\.\- 0-9a-z A-z]+)@([_\.\- 0-9a-z A-z]+)\.([a-zA-Z]{2,7})$/;
    if (regex.test(mail.value)) {
        mail.style.border = "2px solid green";
        errors[2].style.display = "none";
        return true;
    }
    else {
        mail.style.border = "2px solid red";
        errors[2].style.display = "block";
        return false;
    }
}

// Phone Number Validation
let phone = document.querySelector("#Contact");
phone.addEventListener("blur", phoneValid);

function phoneValid() {

    let regex = /^([0-9]){10}$/;
    if (regex.test(phone.value)) {
        phone.style.border = "2px solid green";
        errors[1].style.display = "none";

        return true;
    }
    else {
        phone.style.border = "2px solid red";
        errors[1].style.display = "block";
        return false;
    }
}
// Address field test for empty
let addressinput = document.querySelector("#Address");
addressinput.addEventListener("blur", addressValid);
function addressValid() {
    if (addressinput.value=="") {
        addressinput.style.border = "2px solid red";
        errors[3].style.display = "block";
        console.log(addressinput);
        return false;
    }
    else{
        addressinput.style.border = "2px solid green";
        errors[3].style.display = "none";
        console.log(addressinput);

        return true;
    }

}

//Gender field test for empty values
let genderinput = document.getElementsByName("gender");
function genderValid() {
    if (genderinput[0].checked || genderinput[1].checked) {

        return true;
    }
}

//Language field test for empty values
let language = document.getElementsByName("languages");
function languageValid() {
    if (language[0].checked || language[1].checked || language[2].checked || language[3].checked) {

        return true;
    }
}



//Enable Submit button
 
form.addEventListener("change", validateForm)
function validateForm() {

    if (nameValid() && emailValid() && phoneValid() && genderValid() && languageValid()) {

        submit.disabled = false;
    }
    else {
        submit.disabled = true;
    }
}



