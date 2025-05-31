const myArr=[1,2,3,4,5,6,7,8]
const result=myArr
             .map( (num) =>num*10)
             .map( (num) =>num+1)
             .filter( (num)=>num>40)
console.log(result);                   //[ 41, 51, 61, 71, 81 ]
