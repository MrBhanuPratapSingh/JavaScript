const coding=['java','js','cpp','ruby']
coding.forEach( function (val) {
 // console.log(val); //output
//java
// js
// cpp
// ruby
})
// arrow function
// coding.forEach( (val)=> {
//   console.log(val);
// })

function printMe(item){
        console.log(item);
        
}
coding.forEach(printMe)

coding.forEach( (val,index,arr)=> {
  console.log(val,index,arr);
//   java 0 [ 'java', 'js', 'cpp', 'ruby' ]
// js 1 [ 'java', 'js', 'cpp', 'ruby' ]
// cpp 2 [ 'java', 'js', 'cpp', 'ruby' ]
// ruby 3 [ 'java', 'js', 'cpp', 'ruby' ]
})

//array contain multipal object and access by the foreachloop
const myArray1=[
  {
    language:'java script',
    py:'python'
  },
  {
    language:'c++',
    rb:'ruby'
  }
]
myArray1.forEach( (val)=>{
  console.log(val.language);
  // java script
  // c++
})