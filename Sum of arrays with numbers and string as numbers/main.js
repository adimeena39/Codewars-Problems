// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
let total =  x.reduce((accumulator,currentValue)=> accumulator + Number(currentValue),0)
return Number(total)
}

console.log(sumMix([5,7,8,"8",9,10,"11"])) // 58
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])) // 42
