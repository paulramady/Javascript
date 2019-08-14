
/*

// this is an exampole of a for loop

//for (i=0; i<10; i++) {
//console.log(i)
//}

//properyties in blue, methods in yellow

console.log("hello".length);
console.log (7*3)
console.log (Math.floor(1.2222))
console.log (Math.ceil(1.2222))

//string methods

console.log("hello".toUpperCase())
console.log("    HELLO".toLowerCase())

//trim removes the leading and trailing spaces
console.log(" hello hello ".trim())

//random number generator between 0 and 1 - added x10 to produce between 0 and 10
console.log(Math.random()*10);

//use math.floor to round down number to nearest integer 
console.log(Math.floor(Math.random()*10))
console.log(Math.ceil(Math.random()*10))

//search function (0 first postion, 1 is second etc etc)

console.log("hello".search("l"))

//lastindexof and index of function - similar to search? 

console.log("hello".lastIndexOf("l"))

//slice function 

console.log("hello".slice())

//FINISH OFF METHODS - substring, subtr, replace, concat, charAt

//Varibles - below example converts 7th letter into upercase and prints to console

console.log("ALL Around the world".toUpperCase().charAt(7));

//VARIABLES LET, CONST ie DOB, VAR let vs var (same)

//const i = 10;
//Let i = 10
//var i = 10

//let favouriteDrink = "coffee";
//console.log("My Favourite Drink is " + favouriteDrink);

let favouriteDrink = "coffee";
console.log(`My Favourite Drink is ${favouriteDrink}`);
favouriteDrink = "tea"
console.log(`My Favourite Drink is ${favouriteDrink}`);


//ACTIVITY 1 

let Name = "John Smith";
let Age = "21";
let FavouriteColour = "Blue";
console.log(`My name is ${Name}, My age is ${Age}, favourite colour is ${FavouriteColour}`);

//ACTIVITY 2

let FoodBreakfast = "Crumpets";
let FoodLunch = "Cheese Salad";
let FoodDinner= "Spagetti Carbonara";
console.log(`I had ${FoodBreakfast} for Breakfast, ${FoodLunch} for Lunch, and ${FoodDinner} for Dinner`);

//ACTIVITY 3 - Calculate Age 

const BirthDay = 25;
const BirhMonth = 01;
const BirthYear = 1979;
let DateDay = 13;
let  DateMonth = 08;
let DateYear = 2019;
console.log(`You are ${DateYear - BirthYear} years old`)


//ACTIVITY 4 - 

var Space1 = "x";
var Space2 = "o";
var Space3 = " ";
var Space4 = "x";
var Space5 = "x";
var Space6 = " ";
var Space7 = "o";
var Space8 = " ";
var Space9 = " ";

console.log (`${Space1} | ${Space2} | ${Space3}`);
console.log ("__________");
console.log (`${Space4} | ${Space5} | ${Space6}`);
console.log ("__________");
console.log (`${Space7} | ${Space8} | ${Space9}`);

//ACTIVITY 5

for (i=5; i<55; i+=5) {
console.log(i)
}

//IF /ELSE statement

let music = "classical";

if (music == "classical") {
    console.log("oh no its classical again");
}
else if (music == "none") {
    console.log("peace and quiet");
}
else {
    console.log("nice and noisey");
}

if (1 != "1") {
    console.log(true);
}
else {
    console.log(false);
}

//ACTIVITY 

let age = 17;
let ID = "Yes"

if (age >= 18) {
    console.log("Yes I can serve you");
}
else {
    console.log("No i cant serve you!");
}

if (age <= 18 || ID =="yes") {
    console.log ("Yes I can serve you");
}
else { 
    console.log ("Sorry I need ID")
}
*/
//Challenge 1 

let password = "dudewheresmycar";

if (password.length >= 8) {
    console.log (password);
}
else {
    console.log ("not enough characters");
}

//challenge 2

var num = 11;

if (num%3 < 1 || num%5 < 1) {
    console.log ("This number is divisible by 3 or 5 ");
}
else {
    console.log ("This number is not divisible by 3 or 5");
}



//challenge 3

var num = 20;

if (num%3 < 1 && num%5 <1) {
    console.log ("Fizz Buzz");
}
else if (num%5 < 1) {
    console.log ("Buzz");
}
else if (num%3 < 1) {
    console.log ("Fizz");
}
else {
    console.log (num);
}


//JavaCript Challenges

//palin = "1001"
//palindrome("Race car")
//function palindrome(str) 

//var palin = str.split("").reverse().join("");

//if (palin === str){
//return true;
//} else {


  

//palindrome("eye");//Succeeds
//palindrome("Race car")


