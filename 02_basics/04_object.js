//singlton
const MyObject=new Object(); //a singlaton object
const tinderUser={} //non singlaton object
tinderUser.id= "123abs"
tinderUser.name="Bhanu";
tinderUser.islaggedIn=false

console.log(Object.keys(tinderUser));//[ 'id', 'name', 'islaggedIn' ]  in array form
console.log(tinderUser.hasOwnProperty('id'));  //true


 
// console.log(tinderUser); //{ id: '123abs', name: 'Bhanu', islaggedIn: false }
const regularuser={
        email:"ab@gmail.com",
        fullName:{
           username:{
            firstname:"bhanu",
            lastname:"singh"
           }
        }
}
console.log(regularuser.fullName.username); //{ firstname: 'bhanu', lastname: 'singh' }
console.log(regularuser.fullName); //{ username: { firstname: 'bhanu', lastname: 'singh' } }

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const source1 = { b1: 4, c1: 5 };

//const returnedTarget = Object.assign({},target, source,source1);

//console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

//console.log(returnedTarget === target);
// Expected output: true
const obj={...target,...source,...source1}
console.log(obj);//{ a: 1, b: 4, c: 5, b1: 4, c1: 5 }
