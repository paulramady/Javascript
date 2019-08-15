const SubOrder = (topping1, topping2, topping3, topping4, topping5 ) => {
    console.log (`You ordered a sub sandwhich with ${topping1}, ${topping2}, ${topping3}, ${topping4} and ${topping5}`);
}
SubOrder ("Ham", "Cheese", "Potato", "olives", "Onions");

//LOOPS

for (i = 9; i > -1; i--) {
    console.log(i)
}

let favouriteFilm = [
    "Ghost Busters",
    "Terminator",
    "Ex Machina",
    "Star Trek - Wrath of Khan",
    "Blade Runner"
];

favouriteFilm.push("Superbad");
favouriteFilm.push("Kick Ass");

for (filmIndex = 0; filmIndex < favouriteFilm.length; filmIndex++ ){
    console.log(favouriteFilm[filmIndex])
}
const filmChecker = () => {

if (favouriteFilm[2] == "Ghost Busters"){
    console.log (" Yay it's Ghost Busters")
}
else {
    console.log ("Booo, we want Ghostbusters")
}
}
(filmChecker)

//while loop

let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Heart";

while(currentCard != "Spade"){
 console.log(currentCard);
 currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard);

let favFilm = [
    "Django",
    "Avatar",
    "Lilo and Stitch",
    "Menace to Society",
    "Point Break",
];
favFilm.push("Ex Machina");
favFilm.push("The Matrix");
for (filmIndex = 0; filmIndex < favFilm.length; filmIndex++) {
    console.log(favFilm[filmIndex]);
}
const filmCheck = () => {
if (favFilm[2] == "GhostBusters"){
    console.log("Yay it's Ghostbusters")
}
else{
    console.log("Booo, we want Ghostbusters")
}
}
filmCheck ()

let maxNumber = 50;
let currentNumber = 0;

while (currentNumber != 50){
 console.log(currentNumber);
 currentNumber = (Math.floor(Math.random()*50) + 1);
}
console.log(currentNumber);

//EXTENSION