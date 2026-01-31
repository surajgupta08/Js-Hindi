const nums = [1,2,3,4,5,6,7,8,9,10]

// const values = nums.filter( (num)=> num > 4)
// console.log(values);

// const values = nums.filter( (num)=> {
//    return num > 4
// })
// console.log(values);

const newNum = []

nums.forEach( (num) => {
    if(num > 4){
        newNum.push(num)
    }
})
// console.log(newNum);

const book = [
    {
        title:"Book One",gener:"Friction",publish: 1981,edition:2004
    },
    {
        title:"Book Two",gener:"History",publish: 1901,edition:2010
    },
    {
        title:"Book Three",gener:"Non-Friction",publish: 1999,edition:2000
    },
    {
        title:"Book Four",gener:"Science",publish: 1981,edition:2004
    },
    {
        title:"Book Five",gener:"History",publish: 2009,edition:2014
    },
    {
        title:"Book Six",gener:"Friction",publish: 2004,edition:2024
    },
    {
        title:"Book Seven",gener:"Non-Friction",publish: 1980,edition:2010
    },
    {
        title:"Book Eight",gener:"Science",publish: 1971,edition:2008
    }
]

// const myBook = book.filter( (bk) => bk.gener === "History")

const myBook = book.filter(  (bk) => { 
    return bk.publish >= 2000 && bk.gener === "History"
})

// console.log(myBook);


