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
const number: number[] = [
  32124, 48607, 29859, 14178, 26974, 46757, 20700, 40352, 28721, 19905, 14361,
  10329, 23389, 43434, 47428, 19395, 22500, 36154, 43019, 37359, 27801, 15976,
  27686, 18877, 32505, 27961, 34609, 41309, 14684, 48805, 13497, 49151, 24487,
  24089, 19375, 41860, 35272, 21642, 35707, 30614, 43586, 19460, 30024, 25916,
  35232, 30163, 32386, 37232, 28143, 38378, 20738, 19514, 14027, 34407, 36985,
  46951, 13879, 21591, 45051, 47483, 12776, 34975, 12395, 27892, 34679, 17494,
  30711, 33870, 17449, 35469, 45781, 27338, 22756, 35058, 25810, 30121, 19347,
  44030, 44340, 48362, 44187, 11888, 33685, 47358, 21228, 21463, 33241, 39327,
  34452, 16252, 11441, 20961, 21781, 42878, 34608, 38113, 19316, 24418, 17113,
  22705,
]
