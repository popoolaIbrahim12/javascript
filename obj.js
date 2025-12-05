const self = {
    user:"ibrahim",
    location:"lagos"
}
self["age"] = 15
self["location"] = "new york"
self["complexion"] = "dark"
delete self["location"]
//  console.log(self)


//  this keyword

const person = {
    user:"ayo",
    age:10,
    sayAge:function(){console.log(this.age);
    },
    sayName:function(){console.log(this.user);
    }
}

person.sayAge()
person.sayName()

console.log(this);
