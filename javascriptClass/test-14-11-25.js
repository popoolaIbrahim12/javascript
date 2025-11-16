// //1
// let a = 4
// let b = 5
// let c = 6

// if (alert) {
    
// } else {
    
// }




//5a
let integer = "45.6789"
let convert = parseInt(integer)
console.log("5a",convert);
//5b
let tof = Number(integer).toFixed(2)
console.log("5b",tof);
//5c
let tocon = Number(integer).toString()
console.log("5c",tocon);

//3
let age = 61
let strict = Number(age)
if (strict < 18) {
    console.log("Minor");
    
}else if(strict > 18 && age <= 60){
 console.log("Adult");
 
} 
 else {
    console.log("Senior");
    
    
}
// console.log(Number(30));
