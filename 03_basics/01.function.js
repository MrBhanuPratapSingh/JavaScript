function addTwoNum(number1,number2){ //pairameter
        console.log(number1+number2);
        
}
// const result=addTwoNum(3,5)  //pass value is known as argument ans (8)
// console.log("result",result); //result undefined

function addTwoNum1(number1,number2){ //pairameter
        let result1=number1+number2
        return result1
        console.log("fghs"); //after return no execution
        
        
}
const result1=addTwoNum1(3,6)
console.log("result:",result1);  //9

// function loginUserMessage(userNamae){
//          return `${userNamae} , just logged in`
// }
// //console.log(loginUserMessage("Bhanu Pratap"));//Bhanu Pratap , just logged in
//  console.log(loginUserMessage());//undefined , just logged in  (if we are not pass the value then output is un defined)
 
 function loginUserMessage(userNamae="sam"){   //sam is a default value {if we are pasaing the default value then no execution of if condition}
         if(!userNamae){
                console.log("please enter the value");
                return    // if we are using thr return then no executin after this return
         }
        return `${userNamae} , just logged in`
}
console.log(loginUserMessage());  //if valye is not given then default value is print

// function calculateCartPrice(...num1){              //(...)rest operator if we are not pass this then only 200 is print
//         return num1
// }
// console.log(calculateCartPrice(200,3,2343,345553));//[ 200, 3, 2343, 345553 ]

function calculateCartPrice(val1,val2,...num1){              
        return num1
}
console.log(calculateCartPrice(200,3,2343,345553,4235));//[ 2343, 345553 ,4235] 

const user={   //object
        username:"bhanu",
        price:499
}
function handleObject(anyObject){
     console.log(`User namae is ${anyObject.username},price is ${anyObject.price}`);
     //User namae is bhanu,price is 499
}
handleObject(user)

const MyArray=[20,13,34,55,66]
function handleAerray(otherArray){
         return otherArray[3]
}
console.log(handleAerray(MyArray)); //55


