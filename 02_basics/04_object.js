// const tinder = new Object()

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Baadal";
tinderUser.isLoggedIn = true;
// console.log(tinderUser);

const regularUser = {
  email: "badal@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Badal",
      lastName: "Gupta",
    },
  },
};
//  console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}

// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(Object.hasOwnProperty('isloggedIn'));


// +++++++++++++++++++++ Object Destructure +++++++++++++++++++++

const course = {
    name: "jsHindi",
    price: "999",
    courseInstructer: "Suraj"
}

const {courseInstructer: Instructer} = course

// console.log(courseInstructer);
console.log(Instructer);










 
