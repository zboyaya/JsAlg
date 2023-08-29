//rest parameters = represents an indefinite number of parameters(packs args into an array)
function sum(x, y, ...numbers) {//x, y must input
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}
//callback = a function passed as an argument to another function
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
//array.forEach() call function
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
//array.map() = execute a provided callback function once for each array element AND creates a new array
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
//array.filter() = creates a new array with all elements that pass the test provided by a function
let ages = [17, 18, 19, 20, 21];
function checkAge(element) {
    return element >= 18;
    //never change and return new one
}
let adults = ages.filter(checkAge);
adults.forEach(print);
//array.reduce() =  reduces an array to a single value
// reduce(callbackFn, initialValue)
let prices = [5, 10, 15];
function checkOut(total, element){
    return total + element;
}
let total = prices.reduce(checkOut);
console.log(`the total is: $${total}`);