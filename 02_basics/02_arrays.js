const marvelHeros = ["IronMan","Thor","SpiderMan"]
const dcHeros = ["BatMan","Superman","Flash"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);

// Concat operations
const allHeros = marvelHeros.concat(dcHeros) 
// In concat operation we can combine only two array a time .
// console.log(allHeros);

// Spread operation
const allHeros1 = [...marvelHeros,...dcHeros]
// In spread operation we can add two or more array at the same time unlike concat
// console.log(allHeros1);

const anotherArr = [1,2,3,[4,5,6],7,[8,9,[4,1]]]
const anotherArr1 = anotherArr.flat(Infinity)
// console.log(anotherArr1);

console.log(Array.isArray("Suraj"));
console.log(Array.from("Suraj"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));




