//Write a function that 

function findFruitIndex(arr, item){
  let indexOfFruit = arr.indexOf(item)
  return indexOfFruit
}

let array = ['mango', 'dorian', 'loquat', 'jackfruit', 'spanish lime', 'water melon', 'cotton candy grape', 123]

const fruit = 'dorian'

console.log('the index of ', fruit, 'is', findFruitIndex(array, fruit))

function indexingWithLoop(arr){
  for(let i =0; i < arr.length; i++){
    let fruits = arr[i]
    console.log("item:" + fruits + " " + "index:" + i)
  }
}

indexingWithLoop(array)


array.pop() //removes last item from the array
console.log(array)


array.splice(2,1) //removes an specific item in the array starting at index 2 and ending at 1
console.log(array)