const fruits = ['kiwi', 'lime', 'apple', 'banana', 'orange', 'grapes']

function getNextFruit(){
  const nextFruit = fruits.shift()
  console.log ('you get a', nextFruit)
  console.log ('There are', fruits.length, 'left')
}

getNextFruit(fruits)