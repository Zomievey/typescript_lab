"use strict";
var myName = 'Haylee';
var namesOfStates = 50;
var num = console.log(5 + 4);
// variable equals sum of 5 + 4
function sayHello() {
    alert("Hello World!");
}
// Calling function
sayHello(); // Outputs: Hello World!
function checkAge(name, age) {
    // your code here
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}
var output = checkAge('Charles', 21);
console.log(output);
output = checkAge('Abby', 27);
console.log(output);
output = checkAge('James', 18);
console.log(output);
output = checkAge('John', 17);
console.log(output);
var myFavoriteVegetables = ['broccoli', "carrot", "potato", "peas"];
for (var i = 0; i < myFavoriteVegetables.length; i++) {
    console.log(myFavoriteVegetables[i]);
    var pet = {
        name: "Dessie",
        breed: "cat"
    };
    pet.name;
    pet.breed;
    var friends = [
        {
            name: "Jen",
            age: 45
        },
        {
            name: "April",
            age: 12
        },
        {
            name: "Matt",
            age: 26
        },
        {
            name: "Tyler",
            age: 62
        },
        {
            name: "Brenda",
            age: 67
        }
    ];
    //step 14: run friends through loop
    for (var i_1 = 0; i_1 < friends.length; i_1++) {
        checkAge(friends[i_1].name, friends[i_1].age);
    }
    //step 15: getLength function
    //step 16: call function
    var length_1 = getLength("Hello World");
    //step 17: check odd/even on length
    if (length_1 % 2 === 0) {
        console.log("The world is nice and even!");
    }
    else {
        console.log("The world is an odd place!");
    }
}
function getLength(arg0) {
    throw new Error("Function not implemented.");
}
