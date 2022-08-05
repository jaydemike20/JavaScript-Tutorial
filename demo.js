// variables

var a = 2;
var a = 3;

let b = 2;
b = 3;

const c = 3.14;


// data types

    // number
    var floats = 3.14;
    var ints = 3;

    // string
    var strings = "This is string";

    // null
    var nulled = null;

    // undefined
    var undefined = undefined;


    // objects
    var sampleObjects = {
        "name" : "jayde mike",
        "age" : 20,
        "course" : "BSIT"
    }

    // arrays
     var arr = ["Any", "Data Types", 12, 23.5, null]




//  OBJECTS LITERALS

    const sampleObjects2 = {
        "name" : "Jayde Mike Engracia",
        "age" : 20,
        "course" : "Bachelor of Science in Information Techonology"
    }

    // two types to display of properties
    console.log(sampleObjects2["name"]);
    console.log(sampleObjects2.name);


    console.log("change value")
    // to change the value of properties
    sampleObjects2["name"] = "Jayde Engracia"
    sampleObjects2.age = 21;

    console.log(sampleObjects2["name"]);
    console.log(sampleObjects2.age)

// ARRAYS

const sampleArray = ['a', 'b', 'c', 'd']

// add another element in the last index
sampleArray.push('e');

// add another element in the first index
sampleArray.unshift('z');

// delete an element of the last index
sampleArray.pop();

// to know more
// https://www.tutorialrepublic.com/javascript-tutorial/javascript-arrays.php

// 3 ways to create a FUNCTIONS

// 1st method
function run(name) {
    return `${name} is running`
}

console.log(run("Jayde Mike"));

// 2nd method
const run2 = function(name){
    return `${name} is running!`
}

console.log(run2("Mike"));

// 3rd method or arrow function

const run3 = (name) => {
    return `${name} is running!!`
}

console.log(run3("Engracia"));

const whatIsYourAge = age => {
    return `Your age is : ${age}`
}

console.log(whatIsYourAge(20));

// LOOP (for in/ for off)

for (let i = 0; i < 10; i++) {
    console.log("i: ", i)
}


// Conditions

let name = 'JaydeMike';

if (typeof name === 'string') {
    console.log('YES');
} else {
    console.log('No');
}


