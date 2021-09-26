//Write a function that given an array of number, 
//finds the largest number and console.log it

//Step1- Create a variable to hold largest number

function findMaxNumber(arr){
  let biggestNum = arr[0] //initialize variable as the first number of the array
  for (let num of arr){
    if (num > biggestNum){
      biggestNum = num
    }
  }
  console.log(biggestNum)
}


findMaxNumber([11, 89, 67, 87, 32, 81])