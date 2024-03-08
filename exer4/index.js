import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import fs from 'node:fs'

export function generateUniqueID(firstname, lastname) {

    const firstLetter = firstname.charAt(0).toLowerCase();
    const lowerlastname = lastname.toLowerCase();
    const uniquestring = uuidv4().replace(/-/g, '').slice(0, 8);
    const uniqueID = firstLetter + lowerlastname + uniquestring;

    return uniqueID;
}
console.log(generateUniqueID("Allan", "Turing"));


export function addAccount(allanInfo) {
    const [firstname, lastname, email, age] = allanInfo;
    if (firstname && lastname && email && age && typeof firstname === 'string' && typeof lastname === 'string'
        && typeof email === 'string' && typeof age === 'number' && validator.isEmail(email) && age >= 18) {
        const uniqueID = generateUniqueID(firstname, lastname);
        const allanData = 'Allan, Turing, aturing@gmail.com,58\n';
        try{
            fs.appendFileSync('users.txt',allanData);
            return true;
        } catch (error){
            console.error('Error on loading file:',error);
            return false;
        }
    } else {
        return false;
    }

}
