import { generateUniqueID, addAccount } from './index.js';



console.log(generateUniqueID("Alan", "Turing")); 

const result = addAccount(["Alan", "Turing", "aturing@w3c.com", 58]);
console.log("Account saved:", result);
