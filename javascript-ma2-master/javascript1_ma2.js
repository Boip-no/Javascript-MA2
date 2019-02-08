//MODULE ASSIGNMENT 2 - LEVEL 1

//1. Create a function that displays prototypal inheritance
function Cat() {
    this.purr = "Shiva"
}

Cat.prototype.breed = function() {
    console.log("I am a Bengal, "+ this.purr + " is my name");
};

var f6 = new Cat();
f6.breed();

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arrayOfNumbers.length);
console.log(arrayOfNumbers.slice(5));

//3. Delete the last number in the array that you created above.

var arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arrayOfNumbers.length);
console.log(arrayOfNumbers.pop());

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas:

function strawberryBanana () {
  var str = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.";
    var txt = str.replace(/strawberry/i,"banana");
    var txt = txt.replace(/strawberries/i,"bananas");
console.log(txt)
}

strawberryBanana();

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

var arrayFootballClubs = ["Manchester United", "Liverpool", "Manchester City", "Leicester City"]
  console.log(arrayFootballClubs)

function deletearrayFootballClubs(){
  footballClubs = [];

arrayFootballClubs.push("Mazda", "Mini Cooper", "Golf", "Leicester City");
}
deletearrayFootballClubs();




//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.


var arrayOfPeople = [
  {
    name: "Clear" ,
    age: 28
  },
  {
    name:"Adam",
    age: 30
  },
  {
    name:"Sophia",
    age: 32
  }
];
var names = arrayOfPeople.filter(function(names){
  return (names.age === 28);
})
console.log(names);



//7. Create a simple function that logs the date.

console.log(new Date);
