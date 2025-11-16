let tureStr = true
console.log(!tureStr);

let newStr = false
let secondStr = true

console.log(newStr !== secondStr);

let a,b,c
a = b = c = 5

console.log("All these will give you 5" ,a,b,c);

let k = 35
console.log("A Number",k);
console.log(`A string ${k}`);

console.log(!(false == true));
console.log(2**9)
console.log(2**1**4**3);

console.log(2/5/4*3);
console.log(1/2/4);
console.log(1/8*3);

// type conversion

let numString = "42"
console.log(numString);
console.log(Number(numString));
console.log(Number("hello"));
console.log(Number(""));
console.log(Number(true));
console.log(Number(null));

console.log(Boolean("what"));
console.log(Boolean(""));

console.log(true && "ohio");
console.log(false && "word");

console.log(true || "blood");
console.log(false || "illinois");

console.log([] + []);
console.log([] + {});

let text = "hello, javascript world!,i love javascript"
console.log("toUpperCase():",text.toUpperCase());
console.log(text.slice(7,17));

console.log(text.replace("javascript","html"));
let newText = text.replace(/javascript/g,"html")
console.log(newText);
