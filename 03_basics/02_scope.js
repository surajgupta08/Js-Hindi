var c = 300;

if (true) {
  const a = 10;
  let b = 20;
  var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const userName = "Suraj";

  function two() {
    const website = "Youtube";
    console.log(userName);
  }
//   console.log(website);
//   two();
}
one();



// ++++++++++++++++++++ Interesting fact ++++++++++++++

console.log(one(5));

function one(num){
    return num+1;
}
// addTwo(5)
const addTwo = function two(num){
    return num+2
}
console.log(addTwo(5));
