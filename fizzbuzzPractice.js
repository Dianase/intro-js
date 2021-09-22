function fizzbuzz(num){
  
  for (let i =0; i < num.length; i++){
    let number = num
    if(number % 15 == 0)
      console.log("Fizzbuzz")
    else if (number % 5 == 0)
      console.log("Buzz")
    else if (number % 3 == 0)
      console.log("fizz")
    else console.log(number)
  }
}
let 

fizzbuzz()