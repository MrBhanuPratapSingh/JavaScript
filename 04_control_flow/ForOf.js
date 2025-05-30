const Myarray=[1,23,4,42,5]
//                               forof loop
for(const num of Myarray){
  console.log(num)
}

const str="hello World!"
for(const greet of str){
  console.log(`word is ${greet}`)//word is h
                                //word is e
                                //word is l
}

const map=new Map()        //hold the unique key
map.set('In',"india")
map.set('USA',"united state of america")
map.set('Fr',"france")
//console.log(map)
for(const[key,value] of map){
  console.log(key ,"-:" ,value);
}