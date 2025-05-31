const myArr=[1,2,3]
// const total=myArr.reduce(function (accumelator,currentValue) {
//   console.log(`accumelator: ${accumelator} and currentvalue:${currentValue}`);
  
//   return accumelator+currentValue
// },0)
// console.log(total);         
// accumelator: 0 and currentvalue:1
// accumelator: 1 and currentvalue:2
// accumelator: 3 and currentvalue:3
// 6
const total=myArr.reduce( (acc ,currVal) =>(acc+currVal),0)
console.log(total); //6

