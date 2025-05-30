const myObject={
  js:'java script',
  cpp:'c++',
  rb:'ruby'
}
for (const key in myObject) {
  //console.log(myObject[key]);
  //console.log(`${key} for is ${myObject[key]}`); //output
  // js for is java script
  // cpp for is c++
  // rb for is ruby 

}
const myArray=["hi","hello",'bhanu']
for (const key in myArray) {
   //console.log(key); //0 1 2
   console.log(myArray[key]);  
//    hi
// hello
// bhanu
}