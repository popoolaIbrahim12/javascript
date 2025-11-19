// function declaration 
function name (){
    return 
}

// function expression 

const name1 = function () {
    return
}

//  fat arrow function

const me = () => {
return
}

const createAccount = (user = "bot") => {
 if(!user){
     user = "bot"
 }
 return user + " "+ "has been registerd"
   
}

console.log(createAccount(""));

const vote = (age) => {
if (age >= 18) {
    console.log("you can vote");
    
} else {
    console.log("you are not up to 18");
    
}
}
vote(3)