let car1 = "toyota";
let car2 = "honda";
let car3 = "ford";

console.log(car1, car2, car3);

let cars = [car1, car2, car3];
console.log(cars);
console.log(cars[0], cars[1], cars[2]);
console.log(cars.length);

const anotherArray = new Array(10, 8, 9, 11, 16, 21);
console.log(anotherArray);

console.log(anotherArray[0], anotherArray[2], anotherArray[4]);

let emptyArray = [];
console.log(emptyArray);
emptyArray.push("hi kyle");
console.log(emptyArray);
emptyArray[5] = "hello mom";
console.log(emptyArray);
console.log(emptyArray[2]);
console.log(emptyArray.length);
console.log(emptyArray.indexOf("hello mom"));

let yetAnotherArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(yetAnotherArray);
let lastElement = yetAnotherArray.pop();
console.log(lastElement);
console.log(yetAnotherArray);
yetAnotherArray.push(lastElement);
console.log(yetAnotherArray);

yetAnotherArray.unshift("hi adolfo");
console.log("unshift example", yetAnotherArray);
yetAnotherArray.shift();
console.log("shift example", yetAnotherArray);

const fruits = ["apple", "banana", "orange", "mango", "lemon", "grapes"];

//1. traditional for loop
for (let i = 0; i < fruits.length; i++) {
    console.log("1.", fruits[i]);
}

// 2. for-in syntax says where IN the array the element is
for (let idx in fruits) {
    console.log("2.", idx);
}

// 3. for-of syntax says WHAT the element is
for (let fruit of fruits) {
    console.log("3.", fruit);
}

// 4. forEach syntax
fruits.forEach((fruit) => {
    console.log("4.", fruit);
});

// 5. map syntax
fruits.map((fruit) => {
    console.log("5.", fruit);
});

// object example
let person = {
    name: "jessy pinkman"
}

person = {
    name: "Walter White",
    pseudonym: "Heisenberg",
    age: 56,
    height: 6.1,
    weight: 180,
    hairColor: "brown",
    hobbies: ["cooking", "teaching", "family man"],
    isMarried: true,
    sayHi: function () {
        console.log("Hi, I'm " + this.name);
    },
    sayPseudonym: function () {
        console.log("They call me " + this.pseudonym);
    },
};

console.log(person);
console.log(person.name);
console.log(person.hobbies[2]);
person.sayHi()
person.sayPseudonym()

const pet = {
    name: "Cheddar",
    species: "cat",
    age: 4,
    breed: "American Shorthair",
}

// for in example
for (key in pet) {
    console.log(`Pet ${key} is ${pet[key]}`);
}

// for of example
for (let key of Object.keys(pet)) {
    console.log(`Pet ${key} is ${pet[key]}`);
}