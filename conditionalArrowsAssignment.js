//Problem 1
// Write an arrow function that checks to see if a user is older than 18.
// If they are older than 18, the output should be:
// "You are good to go!"
// If they are not older than 18, the output should be:
// "Sorry! You must be 18 or older!"
// The conditional logic should be written with a ternary operator.
const oldEnough = age => {
    return age > 18 ? "You are good to go!" : "Sorry! You must be 18 or older!"
}
console.log(oldEnough(6))
const oldEnough = age => age > 18 ? "You are good to go!" : "Sorry! You must be 18 or older!"

//Problem 2
// Write an arrow function that checks to see if it is currently raining.
// If it is raining, the output should be:
// "Get your rain jacket!"
// If it is not raining, the output should be:
// "No rain on today's forecast!"
// The conditional logic should be written with a ternary operator.
const raining = rain => {
    return rain === true ? "Get your rain jacket!" : "No rain on today's forecast!"
}
console.log (raining(false))
const raining = rain => rain === true ? "Get your rain jacket!" : "No rain on today's forecast!"

// Problem 3
// Write an arrow function that checks to see if a number is even.
// If it is even, the output should be:
// "That's an even number!"
// If it is not even, the output should be:
// "That's an odd number!"
// The conditional logic should be written with a ternary operator.
const evenNum = num => {
    return num %2===0 ? "That's an even number!" : "That's an odd number!"
}
console.log (evenNum(6)) 
const evenNum = num => num %2===0 ? "That's an even number!" : "That's an odd number!"


// Problem 4
// Write an arrow function that takes in two parameters and checks whether one number is greater than another.
// If the number is greater, the output should be:
// "<<NUMBER HERE>> is more than <<SECOND NUMBER HERE>>!"
// If the number is less than the other number, the output should be:
// "<<NUMBER HERE>> is less than <<SECOND NUMBER HERE>>!"
// The conditional logic should be written with a ternary operator.
const problem4 = (num1, num2) => {
    return num1 > num2 ? `${num1} is more than ${num2}!` : `${num1} is less than ${num2}!`
}
console.log(problem4 (95,2))
const problem4 = (num1, num2) => num1 > num2 ? `${num1} is more than ${num2}!` : `${num1} is less than ${num2}!`