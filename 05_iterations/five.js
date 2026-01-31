const coding = ["js","cpp","java","ruby","python"]

// coding.forEach(function (val){
//     console.log(val);
    
// })

// coding.forEach((item ,index,arr)=>{
//     console.log(item,index,arr);
    
// })

function printMe(val){
    console.log(val);
    
}
// coding.forEach(printMe)


const myCoding = [
    {
        languageName:"javaScript",
        languageFileName:"js"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
    {
        languageName:"java",
        languageFileName:"js"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
    
})