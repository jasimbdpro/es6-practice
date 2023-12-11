//regular function
// function doubleIt(num) {
//     return num * 2;
// }


//Function Expression
// const doubleIt = function (num) {
//     return num * 2;
// }


//Use arrow function in ES6 to shorten function expression
const doubleIt = num => num * 3;
const result = doubleIt(50);
// console.log(result);

const addition = (a, b) => a + b;
const totalAddition = addition(20, 10)
// console.log(totalAddition)

const greet = () => 'Hello, there';
const greetings = greet()
// console.log(greetings)


// for multiline function body, use curly braces {}, use explicit return word.
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result2 = doMath(6, 3)
console.log(result2)
