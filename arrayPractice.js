let students = ['John', 'Alina', 'Juan', 'Dariel', 'Manny', 'Amir', 'Sebas']

students.push('Diana') //adds to the end of array
students.push('Angie')

students.shift()
students.unshift('Khrystofer') //adds to the beginning

console.log(students.length)

function isThereEnough(){

if(students.length < 12){
  console.log('not enough')
}else{
  console.log('just enough')
}
}

isThereEnough() //this calls the function

function addToArray(newSt){
  students.
}