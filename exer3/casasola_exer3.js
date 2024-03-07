//Armie Casasola UV-3L
//01/03/2024
// This simple JavaScript Program compares two passwords; if the passwords are the same it returns
// a new password which is the reverse of the passwords, if the passwords are the same it returns a new password

//function that validates two passwords
function validatePassword(pass1, pass2) {
    // Check if passwords match
    if (pass1 !== pass2) {
        return false;
    }
    // Check if password length is at least 8 characters
    if (pass1.length < 8) {
        return false;
    }
    // Check if password contains at least 1 number, 1 uppercase character, and 1 lowercase character
    const containsNumber = /\d/.test(pass1);
    const containsLowercase = /[a-z]/.test(pass1);
    const containsUppercase = /[A-Z]/.test(pass1);

    if (!(containsNumber && containsLowercase && containsUppercase)) {
        return false;
    }
    // If all conditions pass, return true
    return true;
}

//function for reversing the passwords

function reversePassword(password) {
    let reversed = '';
    for (let i = password.length - 1; i >= 0; i--) {
        reversed += password[i];
    }
    return reversed;
}


//function for storing the password to the object
function storePassword(name, pass1, pass2) {
    const isValid = validatePassword(pass1, pass2);
    const newPassword = isValid ? reversePassword(pass1) : "Pass123";
    return { name: name, newpassword: newPassword };
}


console.log(storePassword("John", "Hello1234", "Hello1234"));


console.log(storePassword("Armie", "password", "password"));
