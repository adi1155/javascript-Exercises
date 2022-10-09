/* MUHAMMAD ADNAN    07-10-2022

This is simple

 */


let personName;
personName = "Molvi Arslan";
let inUpperCase = personName.toUpperCase();
let  inLowerCase = personName.toLowerCase();

function titleCase(str) {
    return str
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}


console.log(titleCase(personName));
console.log(inUpperCase);
console.log(inLowerCase);