// const userEmail = "S@suraj"

// if(userEmail){
//     console.log(`Got user Email.`);
    
// }else{
//     console.log(`Don't have user email.`);
    
// }

//  Falsy values

// false , 0 , -0 , "" , BigInt 0n , null , undefine , NaN

//  Truthy values

//  "0" , 'false', " ", [] , {} , function(){}


const userEmail = []

if(userEmail.length === 0){
    console.log(`Array is empty.`);
    
}

let userObject = {}

if(Object.keys(userObject).length === 0){
    console.log("Object is empty.");
    
}