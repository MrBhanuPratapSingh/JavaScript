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

