/*
let number=33
console.log(typeof number); //number
//or console.log(typeof (number)));

let mynumber="33"
console.log(typeof mynumber); //String

let valueInNumber=Number(number)
console.log(valueInNumber);
console.log(typeof valueInNumber);//number

let NotaNumber="33sdf"
let inNumber=Number(NotaNumber)   //conversion in number
console.log(typeof inNumber);   //number
console.log(inNumber);//NaN     not a number

let ans=undefined;
let realans=Number(ans);
console.log(typeof realans);
console.log(realans);    //if ans=null the realans=0 ; if undefined then NaN ;if true then 1; 
//if any string then NaN because strring not convertable

let islogged=1
let booleanIsLogged=Boolean(islogged);
console.log(booleanIsLogged);

// if lodded 1=>true  ,0=>false
//           ""=>false ,"fafdf"=>true

//we can convert a number in string  By String
*/
 

//**************************************************operation***************************************** */
let val=3;
let negval=-val
// console.log(negval); output -3

// console.log(2+2);
// console.log(2-2);
// console.log(2%2);
// console.log(2/2);
// console.log(2*2);
// console.log(2**2);     ** use for power
 

let str1="hello"
let str2=" bhanu"
let str3=str1+str2
// console.log(str3);

// console.log("1"+2);      output=12
// console.log(2+"1");      output=21
// console.log("1"+ 2+3);   output=123
// console.log(1+2+"1");    output=31

// infix and postfix
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
//postfix
let x1 = 3;
const y1 = x1++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n
 
// prefix
let a1 = 3;
const b1 = ++a;
// x is 4; y is 4

let x3 = 3n;
const y3 = ++x3;
// x2 is 4n; y2 is 4n
 






