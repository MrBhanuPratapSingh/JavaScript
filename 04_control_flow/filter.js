const myArr=[1,2,3,4,5,8,6,9]
// const result=myArr.filter( (num) =>num>4)   no need return
// console.log(result); //[ 5, 8, 6, 9 ]

const result=myArr.filter( (num) => {  //if you are using scope {} then return key word use
  return num>4
}) 
 console.log(result); //[ 5, 8, 6, 9 ]
