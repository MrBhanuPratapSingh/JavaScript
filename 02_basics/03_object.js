//OBJECT Literals

const mySym=Symbol("key1")

const MyObject={  //object
  name:"bhanu",
  "name1":"bhanu1",
  [mySym]:"key1",        //Syntex of symbol [mySym]:"key1"
  email:"bs@gmail.com",
  age:15,
  location:"Ghaziabad",
  isLoggedIn:false,
}
console.log(MyObject.email)
console.log(MyObject["email"]); 
console.log(MyObject.name1); 
console.log(MyObject[mySym]);    //access to the symbol vale

MyObject.name="golu"
console.log();
// Object.freeze(MyObject);
MyObject.name="golu singh"
console.log(MyObject);
// {                                  out put
//   name: 'golu',
//   name1: 'bhanu1',
//   email: 'bs@gmail.com',
//   age: 15,
//   location: 'Ghaziabad',
//   isLoggedIn: false,
//   [Symbol(key1)]: 'key1'
// }
MyObject.greating=function(){
  console.log("hello js users");
  
}
MyObject.greating2=function(){
  console.log(`hello java user,${this.name}`);
  
}
console.log(MyObject.greating());
console.log(MyObject.greating2());

