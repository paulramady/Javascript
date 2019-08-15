/*const cafe = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: false,
    drinks: [
    "Cappuccino",
    "latte",
    "filter coffee",
    "tea",
    "hot chocolate"
    ]
   };

   const person = {
    name: "Whitesheep",
    age: 40,
   };
  console.log (`name: ${person.name} age: ${person.age}`)

*/
let offer = "none";
let time = 1200;
const cafe = {
 name: "Whitesheep",
 seatingCapacity: 100,
 drinks: ["Cappuccino","latte","filter coffee","tea","hot chocolate"],
 breakfastOffer: "free croissant with coffee",
 lunchOffer: "free drink with surprisingly priced sandwich",
 none: "Sorry no offer"
};
if (time <1100) {
    offer = cafe.breakfastOffer;
    console.log (cafe.breakfastOffer);
}else if (time <1500) {
    offer = cafe.lunchoffer;
    console.log (cafe.lunchOffer);
}


let day = "monday";
const key = {
weekendAlarm : "no alarm needed",
weekdayAlarm : "get up at 7am"
};
if (day == "Saturday" || day == "Sunday" ){
    console.log (key.weekendAlarm);
} else {
    console.log (key.weekdayAlarm);
}

//person.songs = ["Eminem", "U2", "The cranberries"];
//console.log (person.songs)

