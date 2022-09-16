import './style.css'
//Practice Creating Variables
let numberOfCupsOfCoffee = 1
const fullName = 'Landon Cassman'
console.log(fullName, numberOfCupsOfCoffee)
const aboutMe = {
  fullname: 'Landon Cassman',
  luckyNumber: 9,
  favoriteMovies: ['Goodfellas', 'Synecdoche, New York', 'Dumb and Dumber'],
}
// Practice Getting Input From the User
const userName = window.prompt('What is your name?')
console.log('Hello ' + userName)

//Converting String Input Into Numbers
const firstOperand = window.prompt('Please enter a number')
const secondOperand = window.prompt('Please enter another number')

//Doing Math
const sum = parseFloat(firstOperand) + parseFloat(secondOperand)
console.log(firstOperand + '+' + secondOperand + '=' + sum)
const difference = parseFloat(secondOperand) - parseFloat(firstOperand)
const product = parseFloat(secondOperand) * parseFloat(firstOperand)
const quotient = parseFloat(secondOperand) / parseFloat(firstOperand)
const remainder = parseFloat(secondOperand) % parseFloat(firstOperand)
console.log(
  parseFloat(secondOperand) +
    ' plus ' +
    parseFloat(firstOperand) +
    ' equals ' +
    sum
)
console.log(
  parseFloat(secondOperand) +
    ' minus ' +
    parseFloat(firstOperand) +
    ' equals ' +
    difference
)
console.log(
  parseFloat(secondOperand) +
    ' divided by ' +
    parseFloat(firstOperand) +
    ' equals ' +
    quotient
)
console.log(
  parseFloat(secondOperand) +
    ' times ' +
    parseFloat(firstOperand) +
    ' equals ' +
    product
)
console.log(
  'The remainder of ' +
    parseFloat(secondOperand) +
    ' and ' +
    parseFloat(firstOperand) +
    ' equals ' +
    remainder
)
//Using Arrays
