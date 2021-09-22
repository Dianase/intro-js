//shift + option + f => prettier
let queen = {
  firstName: 'Diana',
  lastName: 'Tineo',
  city: 'Boca Raton',
  family: {
    partner: 'Lily',
    son1: 'Zayed',
    son2: 'David',
    pets: ['🐜', '🐸', '🪳'] //crt + cmd + space bar
  },
  education: {
    university: 'City College of New York',
    bootcamp: 'Boca Code'

  } 
}

console.log('first name:', queen.firstName)
console.log('Full name:', queen.firstName + ' ' + queen.lastName)
console.log('Pet name:', queen.family.pets[1])
console.log(queen.education.university.toUpperCase())
