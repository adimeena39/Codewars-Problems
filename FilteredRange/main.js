
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// filterRange([5, 3, 8, 1],1,4)) => [3,1]
// The function should not modify the array. It should return the new array.

function filterRange(arr,a,b){
let filteredArr = arr.filter(num=>  num>=a && num<=b ? num : 0)
return filteredArr
}

console.log(filterRange([5, 3, 8, 1],1,4)) // [3,1]