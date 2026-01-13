const user = {
    userName: "Suraj",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName} Welcome to website`);
        console.log(this);
        
        
    }
}
user.welcomeMessage()
user.userName = "Sam"
user.welcomeMessage()


// +++++++++++++++++++ Arrow Function +++++++++++

// const addTwo = (num1,num2) => {
//     return num1+num2
// };

const addTwo = (num1,num2) => num1+num2

console.log(addTwo(3,4));
