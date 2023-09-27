//1.1 rest parameters = represents an indefinite number of parameters(packs args into an array)
function sum(x, y, ...numbers) {//x, y must input
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}
//1.2 callback = a function passed as an argument to another function
//ensure a function is not going to run before a task completed
//help us develop asynchronous code.(one func has to wait for another; help us avoid potential problems)
function sum(x, y, callback) {
    let result = x + y;
    callback(result);
}

function display(output) {
    console.log(output);
}

sum(2, 3, display);
//2.1 array.forEach() call function-5
let students = ['apple', 'b', 'c'];
students.forEach(capitalize);
function capitalize(element, index, array) {
    array[index] = element[0].toUpperCase() + element.substring(1);
    //change original one
}

function print(element) {
    console.log(element);
}
students.forEach(print);
//2.2 array.map() = execute a provided callback function once for each array element AND creates a new array
let numbers = [1, 2, 3, 4];
let squares = numbers.map(square);
function square(element) {
    return Math.pow(element, 2);
    //never change the original, return new one
}
squares.forEach(print);
function print(element) {
    console.log(element);
}
//2.3 array.filter() = creates a new array with all elements that pass the test provided by a function
let ages = [17, 18, 19, 20, 21];
function checkAge(element) {
    return element >= 18;
    //never change and return new one
}
let adults = ages.filter(checkAge);
adults.forEach(print);
//2.4 array.reduce() =  reduces an array to a single value
// reduce(callbackFn, initialValue)
let prices = [5, 10, 15];
function checkOut(total, element) {
    return total + element;
}
let total = prices.reduce(checkOut);
console.log(`the total is: $${total}`);
//2.5 array.sort()-for letters will use alphabetical
//If the result is negative, a is sorted before b.
//If the result is positive, b is sorted before a.
let grades = [100, 50, 90, 60, 80, 70]
function accedingSort(a, b) {
    return a - b;//small to large
}
function descendingSort(a, b) {
    return b - a;
}
grades.sort(accedingSort);
function print(a) {
    return console.log(a);
}
grades.forEach(print);
console.log(grades);
//3.1 function expression = function without name (anonymous function) 
//avoid polluting the global scope with names write it, then forget it
const greeting = function () {
    console.log("hello");
}
greeting();
//3.2 arrow function = compact alternative to a 
//traditional function expression =>
const greeting2 = function (userName) {
    console.log(`hello ${userName}`)
}
const greeting3 = (userName) => console.log(`hello ${userName}`);
greeting3("bro");
//if statements are more than one, need to use curly braces{}
grades.sort((x, y) => y - x);
//practice Shuffle a cards
let cards = ['A', '2', '3', '4', 'J', 'K']
shuffle(cards);
function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * array.length);
        currentIndex--;
        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
}
console.log(shuffle(cards));
//3.3 nested function = functions definition inside other functions. 
//Outer functions have access to inner function
//inner functions are "hidden" from outside the outer function.
//used in closures 
login();
//outside can't use display functions
function login() {
    displayUserName();
    displayUserInbox();
    function displayUserName() { console.log("Lily"); }
    function displayUserInbox() { console.log("123"); }
}
//4.1 Map = object that holds key-value pairs of any data type
const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socket", 20]
]);
store.get("socket");
store.set("hat", 20);
store.delete("hat");
store.has("hat");//false
store.size;//length 3
let shoppingCart = 0;
store.forEach((value, key) => console.log(`${key} $${value}`));
//4.2 object = A group of properties and methods properties
//= what an object has methods = what an object can do use to access.
const car = {
    mode: "Mustang",
    color: "red",
    year: 2023,
    dive: function () {
        console.log("You can drive your car!");
    },
    brake: function () {
        console.log("You step on brake!");
    }
}
console.log(car.mode);
car.dive();
//4.3 this = reference to a particular object
//the object depends on the immediate context
const car2 = {
    mode: "hh",
    color: "yellow",
    year: 2023,
    dive: function () {
        console.log(`You can drive ${this.mode}!`);
    },
    brake: function () {
        console.log("You step on brake!");
    }
}
//4.4 class =  a blueprint for creating objects define
//what properties and methods they have use a constructor
//for unique properties
class Player {
    score = 0;
    pause() {
        console.log("you paused the game");
    }
    exit() {
        console.log("you exited the game");
    }
}
const player1 = new Player();
player1.score += 1;
console.log(player1.score);
//4.5 constructor = special method for a class
//  accepts arguments and assigns properties
class Student {
    constructor(name, age, gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study() {
        console.log(`${this.name} is studying.`);
    }
}
const student1 = new Student("Lulu", 24, 5);
student1.study();
//4.6 static = belongs to the class, not the objects!
// properties: useful for caches, fixed-configuration
// methods: useful for utility functions
class Car {
    static numberOfCars = 0;
    constructor(model) {
        this.model = model;
        //this.numberOfCars ++; notice you can't use this
        Car.numberOfCars++;
    }
    static startRace() {
        console.log("3..2..1..GO!");
    }
}
const car1 = new Car("Mustang");
const car3 = new Car("BMW");
console.log(Car.numberOfCars);
//4.7 inheritance = a child class can inherit all the methods and properties from another class
class Aniaml {
    alive = true;
    eat() {
        console.log(`This ${this.name} is eating!`);
    }
}
class Rabbit extends Aniaml {
    name = "rabbit";
    eat() {
        console.log(`it eats carrots!`);
    }
}

const rabbit = new Rabbit();
rabbit.alive;//true
rabbit.name;//rabbit
rabbit.eat();
//4.8 super = Refers to the parent class. 
//Commonly used to invoke constructor of a parent class.
class Aniaml2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Rabbit2 extends Aniaml2 {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }
    eat() {
        console.log(`it eats carrots!`);
    }
}
//4.9 get/set = binds an object property to a function 
//when property is accessed
class Car2 {
    constructor(power) {
        this.power = power;
    }
    // get power(){
    //     return this.power;
    // } 
    // the property name and the getter cannot have the same name
    //protected property should have _
}
let car4 = new Car2(400);
console.log(car4.power);
class Car3 {
    constructor(power) {
        this._gas = 25;
        this._power = power;
        this._mock = 1;
    }
    get power() {
        return `${this._power}hp`;
    }
    get gas() {
        return `${this._gas}L (${this._gas / 50 * 100}%)`;
    }
    set gas(value) {
        if (value > 50) {
            value = 50;
        } else if (value < 0) {
            value = 0;
        }
        this._gas = value;
    }
}
let car5 = new Car3(400);
console.log(car5.power);
//car5.power(); TypeError: car5.power is not a function
car5.gas = 100;//because set function, you can set the protected attribute's value
car5.mock = 2;
//car5.gas(40);//TypeError: car5.gas is not a function
console.log(car5.gas);//notices even the _gas is protected,
//because get, we can get "gas" instead of _gas
console.log(car5.mock);//the actual _mock can't be accessed

//5.0 How to pass objects to a function as an argument 
function displayInfo(car) {
    console.log(car.gas);//in advance to know the attributes
}
displayInfo(car5);
//5.1 create an array of objects in js
const cars = [car1, car2, car3];
console.log(cars[0].model);
cars[1].dive();
function startRace(cars) {
    for (const car of cars) {
        car.dive();
    }
}
//startRace(cars);

