//Array
const MyArray=[1,4,3,5,68]
const number=new Array("gii",3,53,2,"hello")
console.log(number);
console.log(number[4]);

number.push(17);
console.log(number);
number.pop()
console.log(number);
number.unshift(34) //[ 34, 'gii', 3, 53, 2, 'hello' ] push the val in starting
console.log(number);

number.shift()    //it is used for remove element from the starting
console.log(number);  

console.log(number.includes(3));  //true 3 present in number Array
 const arr=number.join();   // join convert the arr to string so typeof arr is String
console.log(arr);     //gii,3,53,2,hello  

console.log("A",number);      //A [ 'gii', 3, 53, 2, 'hello' ]
const arr1=number.slice(1,4);   
console.log(arr1);  //[ 3, 53, 2 ]


console.log("B",number);     //B [ 'gii', 3, 53, 2, 'hello' ]
const arr2=number.splice(1,4);    //by using splice the original array is mainipulated
console.log("c",number);      //c [ 'gii' ] 
console.log(arr2);          //[ 3, 53, 2, 'hello' ]


