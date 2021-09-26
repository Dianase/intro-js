//synchronous is BLOCKING
//asynchronous is NON-BLOCKING

const data = fs.readFileSync('/file.json')

//HOW DO WE DEAL
//1. CALLBACKS
//2. PROMISE
//3. ASYNCH...AWAIT

//CALLBACKS

setTimeout(()=>{  //THIS IS A CALLBACK
  console.log('third');
}, 1000);

