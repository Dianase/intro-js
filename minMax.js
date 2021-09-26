const minMax = arr =>{
  if(!arr || arr.length === 0){
    throw new Error("Invalid array")
  }
  let min = Math.min(...arr)
  let max = Math.max(...arr)

  return {min, max}
}

