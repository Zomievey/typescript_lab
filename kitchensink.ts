let myName: string = 'Haylee';

const namesOfStates = 50;

let num = console.log(5 + 4);

// variable equals sum of 5 + 4

function sayHello() {
    alert("Hello World!");
}

// Calling function
sayHello(); // Outputs: Hello World!

function checkAge(name: string, age: number) {
    // your code here
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}
let output = checkAge('Charles', 21);
console.log(output);
 output = checkAge('Abby', 27);
console.log(output);
 output = checkAge('James', 18);
console.log(output);
 output = checkAge('John', 17);
console.log(output);

let myFavoriteVegetables: string[] = ['broccoli', "carrot", "potato", "peas"];
for (let i = 0; i < myFavoriteVegetables.length; i++) {

    console.log(myFavoriteVegetables[i]);



    let pet = {
        name: "Dessie",
        breed: "cat"
    }

    pet.name
    pet.breed;

    let friends = [
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
    for (let i = 0; i < friends.length; i++) {
        checkAge(friends[i].name, friends[i].age);
    }
    //step 15: getLength function
    //step 16: call function
    let length = getLength("Hello World");
    //step 17: check odd/even on length
    if (length % 2 === 0) {
        console.log("The world is nice and even!");
    } else {
        console.log("The world is an odd place!");
    
    } }

function getLength(arg0: string) {
    throw new Error("Function not implemented.");
}
