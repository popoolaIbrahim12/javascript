// 1 create an array named colors with at least 5 color names. then print the third color in the array

const colors = ["yellow","black","purple","cyan","blue"]
console.log("1. Third color:",colors[2]);

// 2 start with an array of fruits ["apple","banana","mango"],add "orange" to the end, remove the first item,then print the final array

let fruits = ["apple","banana","mango"]

fruits.push("orange")
fruits.shift()

console.log("2. final array:",fruits);



// 3 given the array [2,4,6,8] use map() to double each other and store the reult in a new array  


const numb = [2,4,6,8]
const double = numb.map((element) => {
    return element * 2
})
console.log("3. map:",double);

//4 given the array [1,5,8,12,3,7] use filter() to create a new array that contains only number greater than 5

const numbers = [1,5,8,12,3,7]
const filt = numbers.filter((element) => {
    return element > 5
})
console.log("4. filter:",filt);

// 5 given the array [10,20,30,40] use the reduce() to calculate and return the total sum

const number = [10,20,30,40]
const rec = number.reduce((value,accumulator) => {
    return value+=accumulator
})
console.log("5. reduce:",rec);
