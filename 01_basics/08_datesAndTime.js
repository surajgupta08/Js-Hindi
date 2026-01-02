let myDate = new Date(2026 , 0, 2);
// console.log(myDate);

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(typeof myDate);


let myCreatedDate = new Date('2026-01-02');
// let myCreatedDate = new Date('01-02-2026');

// console.log(myCreatedDate.toISOString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth());

// console.log(`${newDate.getDay()} and the time is ${Date.now()}`);

newDate.toLocaleString('default',{
weekday:"long"
})
console.log(newDate.weekday);












