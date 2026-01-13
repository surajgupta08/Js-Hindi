function sayMyName() {
  console.log("S");
  console.log("U");
  console.log("R");
  console.log("A");
  console.log("J");
}

// sayMyName();

// function sumOfTwoNum(num1,num2){
//     console.log(num1+num2);

// }
function sumOfTwoNum(num1, num2) {
  // const result = num1+num2;
  // return result;

  return num1 + num2;
}
const sum = sumOfTwoNum(3, 4);
// console.log(`sum is: ${sum}`);

function userLoggedIn(userName = "Sam") {
  if (!userName) {
    console.log(`Enter the user name`);
    return;
  }
  return `${userName} just logged in`;
}
// console.log(userLoggedIn("Suraj"));
// const user = userLoggedIn("Suraj");
// console.log(user);

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
// console.log(calculateCartPrice(200, 300, 400, 500));

const user = {
  userName: "Suraj",
  price: 399,
};

function handleObject(anyObject) {
  console.log(`username is ${anyObject.userName} prices is ${anyObject.price}`);
}

// handleObject(user)

// handleObject({
//     userName:"Badal",
//     price: 499
// })


const myNewArray = [100,200,300,400,500];

function returnSecondValue(anyArray){
    return anyArray[1]
}
// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,300,400,500]));

