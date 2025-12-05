// map
const names = ["ibrahim","ayo","mubarak","ali","mm"]
 const pop = names.map((el) => {
    return el
 })

//  console.log(pop);
 
const numbers = [2,3,4,5,7,9,12,15,20]
const plot = numbers.map((el) => {
    return el * 2
})
// console.log(plot);

// filter

const filt = numbers.filter((prop) => {
    return prop > 10
})

console.log(filt);

const m = "i"
const filtName  = names.filter((el) => {
    return el.includes(m)
})

console.log(filtName);

//reduce

const rec = numbers.reduce((value,acc) => {
    return value += acc
})
console.log(rec);
