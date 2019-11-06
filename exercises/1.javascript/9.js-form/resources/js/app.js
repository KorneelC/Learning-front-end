// Find our form in the DOM using its id name.
let form = document.getElementById('legend');


let serializeArray = function () {
    // Setup serialized data
    let serialized = [];

    // Loop through each field in the form
    for (let i = 0; i < form.elements.length; i++) {

        let field = form.elements[i];

        // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
        if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;

        // If a multi-select, get all selections
        if (field.type === 'select-multiple') {
            for (let n = 0; n < field.options.length; n++) {
                if (!field.options[n].selected) continue;
                serialized.push({
                    name: field.name,
                    value: field.options[n].value
                });
            }
        }

        // Convert field data to a query string
        else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
            serialized.push({
                name: field.name,
                value: field.value
            });
        }
    }
    
    return serialized;
   
}
//update information of the form
let up = document.getElementById('Submit')
up.addEventListener('click',update);

function update(){
    
    localStorage.setItem('storeObj', JSON.stringify(serializeArray()))
    let getObject = JSON.parse(localStorage.getItem('storeObj'))
    console.log(getObject);
}
//pattern for email
let emailpattern = document.getElementById('Email').pattern = ".+@gmail.com"

//Password check function
let cpass = document.getElementById('Confirm-password')
cpass.addEventListener('keyup',checkPassword);

function checkPassword() {
    
    if (document.getElementById('Password').value == document.getElementById('Confirm-password').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'matching';
        alert ("password correct!")
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'not matching';
    }
}

//check if the forum is filled in correctly
let fcheck = document.getElementById('Submit')
fcheck.addEventListener('click',formcheck);

function formcheck() {
   let requiredFields = '';
   
   if (document.getElementById('Firstname').value == ''){
        requiredFields += "Fill in your firstname \n";
        document.getElementById('Firstname').style.borderColor = "red";
    }
    if (document.getElementById('Lastname').value == '') {
        requiredFields += "Fill in your lastname \n";
        document.getElementById('Lastname').style.borderColor = "red";
    }
    if (document.getElementById('Username').value == '') {
        requiredFields += "Fill in your Username \n";
        document.getElementById('Username').style.borderColor = "red";
    }
    if (document.getElementById('Email').value == '') {
        requiredFields += "Fill in your Email \n";
        document.getElementById('Email').style.borderColor = "red";
    }
    if (document.getElementById('Password').value == '') {
        requiredFields += "Choose a password \n";
        document.getElementById('Password').style.borderColor = "red";
    }
    if (document.getElementById('Confirm-password').value == '') {
        requiredFields += "Confirm your password \n";
        document.getElementById('Confirm-password').style.borderColor = "red";
    }
    if (document.getElementById('Adress').value == '') {
        requiredFields += "Fill in your adress \n";
        document.getElementById('Adress').style.borderColor = "red";
    }
    if (document.getElementById('City').value == '') {
        requiredFields += "Fill in the city where you live \n";
        document.getElementById('City').style.borderColor = "red";
    }
    if (document.getElementById('Zip').value == '') {
        requiredFields += "Fill in the zip of your city \n";
        document.getElementById('Zip').style.borderColor = "red";
    }
    if(requiredFields != '') {
        alert(requiredFields);
        return false;
    }
    
}