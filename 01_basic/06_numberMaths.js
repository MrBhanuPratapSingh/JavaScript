const number=100
const NewNumber=new Number(100);
console.log(NewNumber);       //[Number: 100]
console.log(number);   //  100
console.log(NewNumber.toString()); //NewNumber value convert in String  and out put 100
console.log(NewNumber.toString().length);//output=3
console.log(NewNumber.toFixed(2));  //100.00 toFixed use mostly in e_commerse website
const otherNumber=123.894
console.log(otherNumber.toPrecision(2));// if 3=124  ,4=123.9,2=1.2e+2
const val=10000000
console.log(val.toLocaleString('en-IN'));//1,00,00,000

//**************************************Math***************************** */
console.log(Math);
console.log(Math.abs(-4));     //4
console.log(Math.round(4.6));  //5
console.log(Math.round(4.3));  //4

console.log(Math.ceil(4.6));   //5
console.log(Math.floor(4.9));  //4

console.log(Math.min(4,43,6,2,9));//2
console.log(Math.random()); //return value between 0 and 1
console.log(((Math.random())*10)+1); 
console.log(Math.floor(((Math.random())*10)+1)); 


const min=10
const max=20
console.log(Math.floor((Math.random())*(max-min+1))+min);


