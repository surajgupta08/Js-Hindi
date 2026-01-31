const arr = [1, 2, 3, 4];

// const total = arr.reduce(function(acc,currVal){
//     return acc+currVal
// },0)

const total = arr.reduce((acc, currVal) => acc + currVal, 0);

// console.log(total);

const shoppingCart = [
  {
    courses: "js course",
    prices: 2999,
  },
  {
    courses: "py course",
    prices: 999,
  },
  {
    courses: "Mobile dev course",
    prices: 9999,
  },
  {
    courses: "Machine learning course",
    prices: 12999,
  },
];

const totalPrices = shoppingCart.reduce(
  (acc, item) => acc + item.prices,
  0,
);
console.log(totalPrices);
