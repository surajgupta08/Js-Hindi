//   Primitive Datatypes

// 7 types of primitive datatypes in JavaScript:
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

// Example of each primitive datatype:

// 1. Number
let num = 42;
// console.log(typeof num); // "number"

// 2. String
let str = "Hello, World!";
// console.log(typeof str); // "string"

// 3. Boolean
let bool = true;
// console.log(typeof bool); // "boolean"

// 4. Undefined
let undef;
// console.log(typeof undef); // "undefined"   

// 5. Null
let nul = null;
// console.log(typeof nul); // "object" (this is a known quirk in JavaScript)

// 6. Symbol
let sym = Symbol("unique");
// console.log(typeof sym); // "symbol"

// 7. BigInt
let bigInt = 9007199254740991n;
// console.log(typeof bigInt); // "bigint"

// Note: Primitive datatypes are immutable and are compared by value.

//   Non-Primitive Datatypes

// Non-primitive datatypes in JavaScript include Objects, Arrays, and Functions.

// Example of each non-primitive datatype:

// 1. Object
let obj = { name: "Alice", age: 30 };
// console.log(typeof obj); // "object"

// 2. Array
let arr = [1, 2, 3, 4, 5];
// console.log(typeof arr); // "object" (arrays are a type of object)

// 3. Function
let func = function() { return "Hello"; };
// console.log(typeof func); // "function"

// Note: Non-primitive datatypes are mutable and are compared by reference. 
// Changes made to one reference will affect all references to that object.


//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) and Heap(Non-Primitive)

let myName = "Suraj"
let mySecondName = "myName"

// mySecondName = "Badal"
// console.log(myName);
// console.log(mySecondName);

let obj1 = {
    name: "Suraj",
    lastName: "Gupta"
    }

let obj2 = obj1;

obj2.name = "Badal"
console.log(obj1.name);
console.log(obj2.name);



