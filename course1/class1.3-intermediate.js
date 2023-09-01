//5.1 anonymous objects = Objects without a name 
//Not directly referenced less syntax. No need for unique names.
class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
}
let card1 = new Card("A", "Hearts");
let cardss = [new Card("A", "Hearts"), new Card("2", "Hearts")];
console.log(cardss[0].value + cardss[0].suit);
cardss.forEach(card => console.log(card.value, card.suit));
//5.2 error = object with a description of something went wrong
//e.g can't open a file/ lose connection/ user types incorrect input/typeerror
try {
    // let x = window.prompt("Enter a #");
    // x = Number(x);
    // if (isNaN(x)) throw "That wasn't a number!";
    // if (x == "") throw "That was empty!";
    // console.log(`${x} is a number`);
}
catch (error) {
    console.log(error);
}
finally {
    console.log("this always executes");
}

//5.3 setTimeout() = invokes a function after a number of milliseconds
// asynchronous function(doesn't pause execution program)
function firstMessage() {
    console.log("Buy this for $500!!!");
}
function secondMessage() {
    console.log("This is not a scam!!")
}
//setTimeout(firstMessage, 3000);
timer1 = setTimeout(firstMessage, 1000);
timer2 = setTimeout(secondMessage, 2000);//2 seconds
let cancel = function () {
    clearTimeout(timer1);
    console.log('thanks for buying!');
}
cancel();
//include parameters
let item = "book"
let price = 420.69
let timer3 = setTimeout(thirdMessage, 3000, item, price);//pass in
function thirdMessage(item, price) {
    console.log(`the price is ${price} of ${item}`);
}

//5.4 setInterval() =  invokes a function repeatedly after a number of milliseconds
//asynchronous function (doesn't pause execution)
let count = 0;
let max = 3;
console.log(max);
const myTimer = setInterval(countUp, 1000);
//const myTimer = setInterval(countUp, 1000, max); including a param
function countUp() {
    count += 1;
    console.log(count);
    if (count >= max) {
        clearInterval(myTimer);
    }
}
//6.0 The Date object is used to work with dates &times
let date = new Date();
console.log(date);
// date = date.toLocaleString();
// console.log(date);
let date2 = new Date(2023, 0, 22, 12, 20, 22, 1).toLocaleString(); //year, month(start0), day, hour,min, sec, millisec.
console.log(date2);
let date3 = new Date("Jan 1, 2023 00:00:00");
console.log(date3);
let year = date.getFullYear();//2023
let dayOfMonth = date.getDate();//which day in this month
let dayOfWeek = date.getDay();//which day in this week (Monday-1.Sunday-0)
let month = date.getMonth();//9-means Aug(Jan-0)
let hour = date.getHours();//0-23
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let ms = date.getMilliseconds();
//set Date
let date4 = new Date();
date4.setFullYear(2023);
date4.setMonth(11);
date4.setDate(31);
date4.setHours(23);//24
function formatDate(date) {
    year = date.getFullYear();
    month = date.getMonth();
    day = date.getDate();
    return `${month}/${day}/${year}`
}
console.log(formatDate(date4));

//7.0 Synchronous Code and Asynchronous code
//Synchronous code
// = in an ordered sequence. Step by step linear instructions
//Asynchronous code
//= out of sequence. Ex.Access a database to fetch a file/ Tasks that take time
console.log("start");
setTimeout(() => console.log("This is asynchronous"), 5000);
console.log("end");
//7.1 console.time() = Starts a timer you can use to track how long an
// operation takes. give each timer a unique name. 
console.time("Respond time");//start
//alert("click the ok button");
setTimeout(() => console.log("hello!"), 3000);//-can't be count in, doesn't work
console.timeEnd("Response time");//end-(Response time: 0.00194ms)
//only track how long a synchronous operation takes

//7.2 promise = object that encapsulates（fengzhuang)the result of 
//an asynchronous operation , let asynchronous methods return values like
//synchronous methods. "I promise to return sth in the future"

//the STATE is "pending" then: 'fulfilled' or 'rejected'
//the RESULT is what can be returned 
//2 parts producing and consuming
const promise = new Promise((resolve, reject) => {
    let fileLoaded = true;
    if (fileLoaded) {
        resolve("File loaded");//will show when true, pass as value
    }
    else {
        reject("File not loaded");//report error when false, pass as error
    }
})
promise.then(value => console.log(value + " this is your value"))//when resolve
    .catch(error => console.log(error + " totally wrong"));//when reject
//example2 async function when give back result
const wait = time => new Promise(resolve => {
    setTimeout(resolve, time);
});
wait(3000).then(() => console.log("Thanks for waiting!"));

//7.3 async =  make a function return a Promise
async function loadFile() {
    let fileLoaded = true;
    if (fileLoaded) {
        return "File loaded";//will show when true, pass as value
    }
    else {
        throw "File not loaded";//report error when false, pass as error
    }
} 
loadFile().then(value => console.log(value + " this is your value"))//when resolve
    .catch(error => console.log(error + " totally wrong"));//when reject
//interpret- generally don't write as this
function loadFile2() {
    let fileLoaded = true;
    if (fileLoaded) {
        return Promise.resolve("File loaded");//will show when true, pass as value
    }
    else {
        return Promise.reject("File not loaded");//report error when false, pass as error
    }
} 
loadFile2().then(value => console.log(value + " this is your value"))//when resolve
    .catch(error => console.log(error + " totally wrong"));//when reject

// 7.4 await = makes an async function wait for a Promise
// according the 7.3 function
async function startProcess(){
    try{
        let message = await loadFile();//you don't need to invoke a function
        //and follow it with then and catch/ there's no need for that
        //!notice: await is only valid in async function
        console.log(message);
        //multiple asynchronous functions
        // message = await locateFile();
        // console.log(message);
        // message = await closeFile();
        // console.log(message);
    }
    catch(error){
        console.log(error);
    }
}
startProcess();