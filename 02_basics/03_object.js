const mySmb = Symbol("mySmb1")

const jsUser = {
    Name:"Suraj",
    "FullName": "Suraj Gupta",
    [mySmb]: "mySmb1",
    age: 23,
    Email: "suraj@gmail.com",
    Location: "Dehradun",
    isLogged: false
}

// console.log(jsUser["Name"]);
// console.log(jsUser.Email);
// console.log(jsUser["FullName"]);
// console.log(typeof jsUser[mySmb]);

jsUser.Email = "Surajgupta@gmail.com"
// Object.freeze(jsUser)
jsUser.Email = "Suraj62@gmail.com"

// console.log(jsUser);

jsUser.greeting = function (params) {
    console.log("Hello JS User");
    
}
jsUser.greetingTwo = function (params) {
    console.log(`Hello JS User ${this.Name}`);
    
}
// console.log(jsUser);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());







