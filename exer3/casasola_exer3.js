const passwords = [{ name1: 'Armie', pass1: 'Hello', pass2: 'Hello1234' }]

//function that validates two passwords
function checkpass(x, y) {
    result = x.localeCompare(y)
    if (result == 0) {
        console.log(pass1 + pass2)
    } else {
        console.log(pass1 + pass2)
    }
}

//function for reversing the passwords

function reverse(str) {
    let r = "";
    for (let i = str.length - 1; i >= 0; i--) {
        r += str[i];
    }
    return r;
}
console.log(passwords(0, 2))

//function for storing the password to the object
function store(x, y, z) {
    const xyz = [{ name1: "Armie", pass1: "Hello", pass2: "Hello1234" }]
} console.log(xyz)
