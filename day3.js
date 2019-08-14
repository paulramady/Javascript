//CHALLENGE - Palindrome



let num = 1001
numStr = num.toString()
numStr1 = numStr.split('').reverse().join('')
if (numStr == numStr1){
    console.log(" the number is a palindrome")
}
else {
    console.log(" the number is not a palindrome")
}



var Space1 = "x";
var Space2 = "x";
var Space3 = "x";
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

if (Space1 == Space2 && Space1 == Space3) {
    console.log ("Youn win")
}
else {
    console.log ("you lose")
}

//Orders and Arrays

let coffeeOrder = [
    "Alex - Cortado",
    "Ben - Cortado",
    "Charlie - Whatever's new"
];
console.log (coffeeOrder.length);

let favouriteSongs = [
    "Cranberries - Linger",
    "Tim Copello - Believe",
    "Ed Sheeren - Beautiful People"
];
console.log ("my favourite songs are:  " + favouriteSongs[0]);
favouriteSongs[1] = "Oasis - Dont look back in anger";
console.log (favouriteSongs);

////let coffeeOrder = [
   // "Alex - Cortado",
   // "Ben - Cortado",
    //"Charlie - Whatever's new"
//];
//coffeeOrder.push("Donna - Expresso");

//console.log (coffeeOrder);

// pop remove last item off list, takes off last in array 
// shift ()
// unshift ()
// 
//Activity 1

let favourtieWebsites = [
    "www.google.co.uk",
    "www.bbc.co.uk",
    "www.sky.com"
];
console.log ("my favourite websites are:  " + favourtieWebsites[0]);
favourtieWebsites[1] = "www.facebook.com";
favourtieWebsites.pop();
console.log (favourtieWebsites);

//Acitivity 2

let favouriteWeb = [
    "www.google.co.uk",
    "www.bbc.co.uk",
    "www.sky.com"
];
console.log (favouriteWeb);

//slice

let favWebsites = [
    "Gmail",
    "Moodle",
    "slack"
];
//Original array.
console.log(favWebsites.slice(1));
//Slice does not permanently change array. We can see results by logging to console
let newArray = favWebsites.slice(1);
console.log(newArray);
//Or we can insert the value into a new variable, and log that to the console.

let favouriteWebs = [
    "www.google.co.uk",
    "www.bbc.co.uk",
    "www.sky.com"
];
favouriteWebs.slice(1);
console.log (favouriteWebs);

//shift - remove first item in array

let favouriteWebss = [
    "www.google.co.uk",
    "www.bbc.co.uk",
    "www.sky.com"
];
favouriteWebss.shift();
console.log (favouriteWebss);

//unshift - adds a new item to start of array list

let favouriteWeb1 = [
    "www.google.co.uk",
    "www.bbc.co.uk",
    "www.sky.com"
];
favouriteWeb1.unshift("new");
console.log (favouriteWeb1);

//splice - removes all but

favouriteWeb1.splice(2,1);
console.log (favouriteWeb1);
