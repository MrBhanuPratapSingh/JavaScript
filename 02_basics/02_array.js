const marvelHero=["thor","spiderMan","ironman"]
const dcHero=['flash','superHero']
//marvelHero.push(dcHero)
//console.log(marvelHero);   //[ 'thor', 'spiderMan', 'ironman', [ 'flash', 'superHero' ] ]

// const AllHero=marvelHero.concat(dcHero);
// console.log(AllHero);          //[ 'thor', 'spiderMan', 'ironman', 'flash', 'superHero' ]

const all_Hero=[...marvelHero,...dcHero]
console.log(all_Hero);  //[ 'thor', 'spiderMan', 'ironman', 'flash', 'superHero' ]

const realArray=[1,2,3,[3,4,2],2,[3,4,[4,2,]]]
const spradeArray=realArray.flat(Infinity)
console.log(spradeArray);     
//    output [
//   1, 2, 3, 3, 4,
//   2, 2, 3, 4, 4,
//   2
// ]
console.log(Array.isArray("bhanu"));  //false
console.log(Array.from("bhanu"));   //convert the the string into array   [ 'b', 'h', 'a', 'n', 'u' ]
console.log(Array.from({name:"bhanu"}));  //return  [] not directly convert *****

let val1=100
let val2=200
let val3=300
console.log(Array.of(val1,val2,val3));  //[ 100, 200, 300 ]

