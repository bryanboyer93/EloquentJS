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
// let oldestPerson = ancestry.reduce((keptValue, movingValue) => {
//     return (keptValue.born < movingValue.born) ? keptValue : movingValue;
// });

// console.log(oldestPerson);

// COMBINED USE OF FUNCTIONS
// Higher - order functions start to shine when you need to compose functions.As an example, let’s write code that finds the average age for men and for women in the data set.

// // Returns the average of an array of numbers
// function average(array) {
//     // Adds all the elements in the array using reduce and an aux function
//     function plus(a, b) { return a + b; }
//     return array.reduce(plus) / array.length;
// }
// function age(p) { return p.died - p.born; }
// function male(p) { return p.sex == "m"; }
// function female(p) { return p.sex == "f"; }

// // SAME
// console.log(average((ancestry.filter((person) => person.sex == "m").map((person) => person.died - person.born))));
// // console.log(average(ancestry.filter(male).map(age)));
// // ▹ 61.67
// console.log(average(ancestry.filter(female).map(age)));
// // ▹ 54.56


// ▹ ["Clara Aernoudts", "Emile Haverbeke",
//            "Maria Haverbeke"]

// // ancestryElement = { "name": "Bryan", "sex": "m", etc...}
// console.log(ancestry.filter((ancestryElement) => ancestryElement.born > 1900 && ancestryElement.born < 1925));

// //prints the same
// console.log(filter(ancestry, (element) => element.born > 1900 && element.born < 1925));

var theSet = ["Carel Haverbeke", "Maria van Brussel",
    "Donald Duck"];
function isInSet(set, person) {
    return set.indexOf(person.name) > -1;
}
// console.log(ancestry.filter(function (person) {
//     return isInSet(theSet, person);
// }));
// ▹ [{name: "Maria van Brussel", ...},
//            {name: "Carel Haverbeke", ...}]
var x = isInSet.bind(null, theSet);
console.log(ancestry.filter(x));
// ▹ ... same result

/*
THIS IS WHY IT WORKS!!! 
Your example is using a similar principle. Because you are calling isInSet.bind(null, theSet) it is always binding theSet to the first parameter passed in the isInSet function. However, it is still missing the second parameter. The reason why it works is because you are putting that inside of an ancestry.filter() function. filter() essentially loops over an array and passes each element to the function inside of it (check the docs). So therefore, each element in the ancestry array is getting passed to that bound function, which makes it the second parameter of isInSet().
*/


// The call to bind returns a function that will call isInSet with theSet as the first argument, followed by any remaining arguments given to the bound function.

// The first argument, where the example passes null, is used for method calls, similar to the first argument to apply.I’ll describe this in more detail in the next chapter.

//https://stackoverflow.com/questions/42653910/can-please-someone-explain-the-working-of-bind-function-for-this-example-from-el
