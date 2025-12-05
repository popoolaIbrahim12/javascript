function addOne(a){
    return a  + 2
}

function AddTwo(a){
    let addedTwo = addOne(a) + 2
    return addedTwo
}

function printAddtwo(b){
    console.log(b);
    
}

// printAddtwo(AddTwo(6))


const number = [2,3,4,5,6,7,8]

// number.forEach((element,index,array) => {
//     console.log(element * 2);
    
// })

// number.forEach(double)

// function double(element,index,array){
//   array[index] = element * 3
  
// }
// console.log(number);

// const socials = ["linkedin","faceboook","instagram","thread","youtube","whatsapp"]
// socials.forEach((element,index,array)=> {
//     console.log(`${index} - ${element} - ${array} `);
    
// })

let ages = [23,45,67,20,11,45,22,16,,33,13,19,24,54]

let canDrink = [];
for (let i = 0; i < ages.length; i++) {
    if(ages[i] <= 21){
      canDrink.push(ages[i])
    }
    
}
// console.log(canDrink);

const rec = number.reduce((value,acc) => {
    return value += acc
})

console.log(rec);
