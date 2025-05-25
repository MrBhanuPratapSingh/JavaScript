//primitive   (call by value) not  change in origional data change in copy's data
// 7    BigInt, Symobl,null ,undefined ,boolean ,String ,Number
 
// Non primitive (call by  reference) provide reference

// Array,Object,Function
let myArray=["sdf","fwef","wfwf"];
//object
{
  name:"bhanu";
  age: 21;
}
//function
const MyFunction=function(){
  console.log("ssdjksld");
  
}
//Stack(primitive),,,,,,,,,,,,,,Heap(Non-Primitive)
let myYoutube="bhanucom"
let anotherName=myYoutube
otherYoutube="singh.com"
console.log(myYoutube);
console.log(otherYoutube);

//heap
let userOne={
  email:"bs@gnail.com",
  upi : "sbi@ypl"
}
let usertwo=userOne;
 
usertwo.email="hello@gmail.com"
console.log(userOne);
console.log(usertwo);


