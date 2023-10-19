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