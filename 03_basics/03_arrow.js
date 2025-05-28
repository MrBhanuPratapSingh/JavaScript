const user={
  name:"bhanu",
  price:423,
  welcomMassage:function(){
    console.log(`${this.name},welcom to my website`); //this represent current context or value
    console.log(this); //when use (this) then out put given below
     //bhanu,welcom to my website
     //  { name: 'bhanu', price: 423, welcomMassage: [Function: welcomMassage] }
     //     singh,welcom to my website
     // { name: 'singh', price: 423, welcomMassage: [Function: welcomMassage] }
  }
}
// user.welcomMassage()  //bhanu,welcom to my website
// user.name="singh"
// user.welcomMassage()  //singh,welcom to my website
console.log(this); //when use this then output a empty {} and in browser return wendow

// function myUser(){
//     let name="bhanu"
//    console.log(this.name);   //undefined
//                                  this can not use in direct function
// }
// myUser()
// const MyUser =function (){
//     let name="bhanu"
//    console.log(this.name);   //undefined
                                 
// }
// MyUser()

const MyUser = () =>{   //**************Arrow function */
    let name="bhanu"
   console.log(this.name);   //undefined
                                 
}
MyUser()

// const addtwo=(num1,num2)=>  {     //[in {} use the return ]
//   return num1+num2
// }
// console.log(addtwo(3,6));//9

// const addtwo=(num1,num2)=> (num1+num2)   //implivit return  [in () no use the return]
// console.log(addtwo(3,6));  //9

const add=(num1,num2)=> ({userName:"bhanu"})
console.log(add(3,6));             //{ userName: 'bhanu' }
