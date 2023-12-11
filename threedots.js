const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22, 29];
//previous array concatenate method↓↓
const allAges = ages.concat(ages2).concat([21]).concat(ages3);


// Try, it creates nested array 
const allAges2 = [ages, ages2, 5, ages3]

// Three dots are used to spread the nested array ↓↓
const allAges3 = [...ages, ...ages2, 5, ...ages3]
// console.log(allAges3)


// Three dots ... ke spread operator bola hoy, it indicates each element of the array, instead of indicating directly to the array.
const money = [650, 450, 250];
const moneyMax = Math.max(...money)
// console.log(moneyMax)



//passing array's elements as arguments
const numbers = [5, 3, 3]
const addition = (a, b, c) => a + b + c;
const result4 = addition(...numbers)//spread operator used
console.log(result4)
