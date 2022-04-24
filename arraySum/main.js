// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0

function sumOfArrays(arr1){
    if(arr1.length===0) return 0

        let total = arr1.reduce((accumulator,currentValue)=>{

         return accumulator + currentValue
        })
        return total
        
}
console.log(sumOfArrays([3,6,8,-3,-3,6.6])) // output 17.6
console.log(sumOfArrays([])) // 0
console.log(sumOfArrays([3])) // 3

function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    let totalMarks = marks.reduce((accumulator,currentValue)=> accumulator + currentValue)
    let average = totalMarks/marks.length
    return Math.floor(average);
  }
  console.log(getAverage([85,45,60,70,90]))
