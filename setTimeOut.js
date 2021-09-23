//setTimeout built in function
//takes an anonumous function and the block of code you want executed  
// 1000milisecond = 1second 

console.log('first');

setTimeout(()=>{
  console.log('third');
}, 1000);

console.log('second');