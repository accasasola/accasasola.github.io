import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import fs from 'node:fs'

function generateUniqueID(firstname, lastname) {

    const firstLetter = firstname.charAt(0).toLowerCase();
    const lowerlastname = lastname.toLowerCase();
    const uniquestring = uuidv4().replace(/-/g, '').slice(0, 8);
    const uniqueID = firstLetter + lowerlastname + uniquestring;

    return uniqueID;
}
console.log(generateUniqueID("Allan", "Turing"));


function addAccount(allanInfo) {
    const [firstname, lastname, email, age] = allanInfo;
    if (firstname && lastname && email && age && typeof firstname === 'string' && typeof lastname === 'string'
        && typeof email === 'string' && typeof age === 'number' && validator.isEmail(email) && age >= 18) {
        const uniqueID = generateUniqueID(firstname, lastname);
        const allanData = '${firstname}${lastname}${email}${age}${uniqueID}\n';
        fs.appendFile('users.txt', allanData, (err) => {
            if (err) {
                console.error('Error writing file:', err);
            } else {
                return true;
            }
        });

    } else {
        return false;
    }
}
console.log(addAccount("Allan", "Turing", "aturing@gamil.com", 58));