const students = [
  {
  firstName: 'Alina',
  lastName: 'Maliuk',
  age: 33,
  gender: 'female'
  },
  {
  firstName: 'Dariel',
  lastName: 'Mera',
  age: 32,
  gender: 'male'
  },
  {
  firstName: 'Diana',
  lastName: 'Tineo',
  age: 32,
  gender: 'female'
  },
  {
  firstName: 'Manny',
  lastName: 'Toribio',
  age: 28,
  gender: 'female'
  }
]

function returnsFullName(person){
  const fullName = `${person.firstName} ${person.lastName}`
  console.log(fullName)
}

returnsFullName(students[0])