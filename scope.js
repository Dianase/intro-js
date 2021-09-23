let globalVar = 'global variable' //available everywhere

function badFunction(){
  console.log('im bad...')
  console.log(globalVar)
  let functionVar = 'function variable'
  console.log(functionVar)
}

console.log(globalVar)


badFunction()