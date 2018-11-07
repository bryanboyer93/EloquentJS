//Higher Order Functions

const ANCESTRY_FILE = require("./ancestry");

let ancestry = ANCESTRY_FILE;
// To find the people in the ancestry data set who were young in 1924, the following function might be helpful. It filters out the elements in an array that don’t pass a test.

function bornBetween(array, beginningYear, endYear) {
    return array.filter((arrayElement) => {
        // console.log(arrayElement);
        return arrayElement.born > beginningYear && arrayElement.born < endYear;
    });
}

//same as array.filter
function filter(array, test) {
    var passed = [];
    for (var i = 0; i < array.length; i++) {
        if (test(array[i]))
            passed.push(array[i]);
    }
    return passed;
}

function map(array, functionToApply) {
    let mapped = [];
    for (let i = 0; i < array.length; i++) {
        mapped.push(functionToApply(array[i]));
    }
    return mapped;
}

function personName(person) {
    return person.name;
}

//console.log(map(ancestry, personName));
// let array = ancestry.filter((element) => element.born > 1900);

// console.log(map(array, personName));

// console.log(array.map((arrayElement) => arrayElement.name));


// USE OF REDUCE
let oldestPerson = ancestry.reduce((keptValue, movingValue) => {
    return (keptValue.born < movingValue.born) ? keptValue : movingValue;
});

console.log(oldestPerson);


// ▹ ["Clara Aernoudts", "Emile Haverbeke",
//            "Maria Haverbeke"]

// // ancestryElement = { "name": "Bryan", "sex": "m", etc...}
// console.log(ancestry.filter((ancestryElement) => ancestryElement.born > 1900 && ancestryElement.born < 1925));

// //prints the same
// console.log(filter(ancestry, (element) => element.born > 1900 && element.born < 1925));