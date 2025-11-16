// STRING METHODS
// toUperrCase
let myname = "popoola ibrahim"
console.log(myname.toUpperCase());

// tolowercase
myname.toLowerCase()
console.log(myname);

// repeat
let word = "she was held at gun point"
console.log(word.repeat(2));

// includes
let name = "today is the day that the lord has made"
console.log(name.includes("lord"))

// trim
let trimWord = "    bookstore      "
console.log(trimWord.trim());

//slice
let sliceWord = "today is the day that the lord has made"
console.log(sliceWord.slice(0,5));
console.log(sliceWord.slice(0,16));

// startswith
let start = "today is the day that the lord has made"
console.log(start.startsWith("today"));


// endswith

let end = "today is the day that the lord has"
console.log(end.endsWith("has"));

// concat
let firstName = "popoola"
let lastName = "ibrahim"

console.log(firstName.concat(" ",lastName));
console.log(firstName + " " + lastName);
