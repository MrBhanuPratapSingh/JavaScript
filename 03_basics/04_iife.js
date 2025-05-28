                           //   IIFE (to protect the function of globel scope polletion)

(function chai(){  //named IIFE
  console.log(`data base connected`);
  
})();   // for the end use the (;)
//(function definition) (execution)

((name)=>{   //unnamed IIFE ,marameter pass
  console.log(`data base connected,${name}`);
})("Bhanu");