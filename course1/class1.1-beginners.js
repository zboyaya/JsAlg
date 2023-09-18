//Math Function
Math.round(4.4)//4 rounded to nearest integer
Math.ceil(4.4)// 4 rounded up to its nearest integer
Math.floor(4.5);//5 rounded down to its nearest integer

Math.sign(-4);//return x is negative, null or positive(-1, 0, 1)

Math.pow(x,y);//return the value of x to the power of y(8^2) (64,1/2) (3, -2)--->1/3^2
Math.sqrt(64);// return the square root of x

Math.abs(-4.7)//4.7

let numbers = [1,2,3]
Math.max(...numbers);
Math.min(...numbers);

Math.random(); //return between 0 - 1 (Math.random()*10 + 1)    1-10

//String Funtion
let str = "myName"
str.trim();
str.length
str.charAt(0)
str.indexOf('m')
str.lastIndexOf('y');
str.toUpperCase();
str.toLowerCase();
str.replaceAll("-",'');
str.slice(0,3)//myN
str.slice(2)//Name(Start from index2)
let name = "boya Zhang";
first = name.slice(0,name.indexOf(" "));//[)
last = name.slice(name.indexOf(" ")+1);
str.split('');
arr = [...str];
//condition
let a = 1;
if(a == 1)
    a = 2;
else
    b=2;
let grade = 'A';
switch(grade){
    case 'A':
        console.log("you are great!");
        break;
    case 'B':
        break;
    default:
        console.log(grade,"you are passing")
}
//loop
let fruits = ["apple","orange"]
let i = 0
for(; i < 10; i++){}
console.log(i);
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
for(let fruit of fruits){
    console.log(fruit);
}
//ternary operator
win = 0;
win ? console.log('you win'): console.log('youlose');
//variable scope 
//let = variables are limited to block scope
//var = variables are limited a function(){}
//global variable = is declared outside any function
let a1 = 2;
var a2 = 2;
//template literals
console.log(`Hello ${a1}`);
//convert 
let myNum = 100
myNum = myNum.toLocaleString();
myNum = myNum.toLocaleString("en-US",{style:"currency",currency:"USD"});
myNum = myNum.toLocaleString(undefined,{style:"percent"});
myNum = myNum.toLocaleString(undefined,{style:"unit",unit:"celsius"});
myNum = myNum.toString();
console.log(myNum);
//Array -obj
// let fruits = ["apple","orange"]
fruits.push('lemon');
fruits.unshift('lemon');//add beginning
fruits.pop();
fruits.shift();//remove from beginning
let l = fruits.length;
let i1 = fruits.indexOf('apple');
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
for(let fruit of fruits){
    console.log(fruit);
}
fruits = fruits.sort().reverse();
console.log(...fruits);
//spread operator = allow an iterable(array or string to be expanded in places where 0 or more arguments expected)
Math.max(...fruits);
let class1 = [];
class1.push(...fruits);  
str1 = "Boya Zhang"
console.log(...str1);//to individual characters

