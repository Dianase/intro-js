const fruit = 'kiwi';

switch(fruit) {
  case 'kiwi':
  case 'lime':
    console.log(fruit, 'is green');
    break
  case 'orange':
  case 'mango':
    console.log(fruit, 'is orange');
    break
  case 'banana':
  case 'lemon':
    console.log(fruit, 'is yellow');
    break
  case 'apple':
  case 'strawberry':
    console.log(fruit, 'is red');
    break
  default: 
    console.log('I have no idea what that looks like')
  
}