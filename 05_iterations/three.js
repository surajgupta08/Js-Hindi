
let arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(`Value of the array is : ${num}`);
    
}

let greetings = "Hello World!"

for (const greet of greetings) {
    if(greet == " "){
        continue
    }
    console.log(`Values of greetings is: ${greet}`);
    
}


const map = new Map()

map.set('In',"India")
map.set('USA',"United State of America")
map.set('Fr',"France")


for (const value of map) {
    // console.log(value);
    
}
for (const [key,value] of map) {
    // console.log(`${key} :- ${value}`);
    
}

// const myObject = {
//     "Game1":"NFS",
//     "Game2":"Spiderman",

// }

// for (const [key , value] of object) {
//     // console.log(key,value);
    
// }