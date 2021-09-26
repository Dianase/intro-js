// const halfPyramid = (rowCount, symbol) => {
//   for(let i =0; i <= rowCount; i++){
    
//   }
//   console.log(symbol)
// }

const halfPyramidSolver2 = (rowCount, symbol) => {

  let row = symbol

  for(let i = 0; i < rowCount; i++)
  {
      console.log(row)
      row += symbol

  }

  // return rowCount
}

halfPyramidSolver2(5, '$')

//HALF PYRAMID WITH PROMISE

// const pyramidSolver = (rowCount, print) => {
//   return new Promise ((resolve, reject) =>{
//     if (!rowCount || !print){
//       reject("Rowcount or print not provided")
//     }
//       resolve({rowCount, print})
//   })
// }

// pyramidSolver(10, "+")
// .then({rowCount, print})

// /* const halfPyramidSolver2 = (rowCount, print) => {

//   let row = print

//   for(let i = 0; i < rowCount; i++)
//   {
//       console.log(row)
//       row += print

//   }

//   return rowCount
// } */

