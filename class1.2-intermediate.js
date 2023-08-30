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
//2.1 array.forEach() call function
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
    ["jeans",30],
    ["socket",20]
]);
store.set("hat",20)
store.delete("hat");
store.has("hat");//false
store.size;//length 3
let shoppingCart = 0;
store.forEach((value, key) => console.log(`${key} $${value}`));


