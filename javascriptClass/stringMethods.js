// lrnght
let sampleString = "hello, World!"
console.log("sample string",sampleString);
console.log("lenght",sampleString.length);
// charAt
let greetings = "hello"
console.log("charAt",greetings.charAt(1));
// indexOf
let sentence = "The quick brown fox jumps over the lazy dog"
console.log("indexOf",sentence.indexOf("dog"));
console.log(sentence.indexOf("brown"));
// includes
console.log(sentence.includes("quick"));
console.log(sentence.slice(0,3));

console.log();

// trim
let paddedTExt = " the boy"
console.log(paddedTExt.trim());

// concat
let firstNamme = "popoola"
let secondName = "ibrahim"
const join = firstNamme.concat(" ",secondName)
console.log(join);

// padStart
let text = "m"
text = text.padStart(2,"a")
console.log(text);

// padEnd
let end = "y"
end = end.padEnd(4,"o")
console.log(end);

// repeat:repeats string with a umber of copies
let repeat = "wagwan guys!"
console.log(repeat.repeat(5));

// replaceAll
let all = "this is a javascript class,i like javascript"
all = all.replaceAll("javascript","html")
console.log(all);

//split: converts string to an array
const share = "was the word"
console.log(share.split());


