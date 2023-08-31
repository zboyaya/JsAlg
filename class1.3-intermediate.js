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
finally{
    console.log("this always executes");
}

//5.3 setTimeout() = invokes a function after a number of milliseconds
// asynchronous function(doesn't pause execution program)
function firstMessage(){
    console.log("Buy this for $500!!!"); 
}
function secondMessage(){
    console.log("This is not a scam!!")
}
//setTimeout(firstMessage, 3000);
timer1 = setTimeout(firstMessage, 1000);
timer2 = setTimeout(secondMessage, 2000);//2 seconds
let cancel = function(){
    clearTimeout(timer1);
    console.log('thanks for buying!');
}
cancel();
//include parameters
let item = "book"
let price = 420.69
let timer3 = setTimeout(thirdMessage, 3000, item, price);//pass in
function thirdMessage(item, price){
    console.log(`the price is ${price} of ${item}`);
}

//5.4 setInterval() =  invokes a function repeatedly after a number of milliseconds
//asynchronous function (doesn't pause execution)
let count = 0;
let max = 3;
console.log(max);
const myTimer = setInterval(countUp, 1000);
//const myTimer = setInterval(countUp, 1000, max); including a param
function countUp(){
    count+=1;
    console.log(count);
    if(count >= max){
        clearInterval(myTimer);
    }
}
