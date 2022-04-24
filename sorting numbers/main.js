// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example:

// sumOfDifferences([2, 1, 10])
// Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

function sumOfDifferences(arr) 
{

let total = 0
  
let desSortedArr = arr.sort((a,b)=> b - a)
 console.log(desSortedArr) // (5) [5, 4, 3, 2, 1]
 let arraylength =  desSortedArr.length - 1
  console.log(arraylength) // 2
 if(desSortedArr.length<=1){
     return 0
 }
 else{
    for(let i=0;i<arraylength;i++){
        total += desSortedArr[i] - desSortedArr[i+1]
    }
 }
 
 return total
}
console.log(sumOfDifferences([10, 2, 1])) // 9
console.log(sumOfDifferences([-3, -2, -1,-4,-5])) // 4
console.log(sumOfDifferences([])) // 0