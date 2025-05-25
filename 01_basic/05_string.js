let name="Bhanu"
const repoNumber=50
console.log(`My name is ${name} and repoNumber is ${repoNumber}`);

const gameName=new String("difvuskj-bhanu-singh");
// console.log(gameName);
// console.log(gameName[1]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('f'));

// const newString=gameName.substring(0,4)
// console.log(newString);

const str=gameName.slice(-7,4)
console.log(str);

const newString1="    bhanu     "
console.log(newString1);
console.log(newString1.trim()); //remove extra space

const url="http://Bhanu.com/bhanu%20.com"
console.log(url.replace('%20','-'));   //http://Bhanu.com/bhanu-.com
console.log(url.includes("Bhanu"));   //bhanu is present so return true

console.log(gameName.split("-"));   //[ 'difvuskj', 'bhanu', 'singh' ]





