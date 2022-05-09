// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.

// ENJOY CODING :)

// FUNDAMENTALSNUMBERSARRAYS

function sumOfMinimums(arr) {
    // your code here
    let minimumSum = 0
    arr.forEach(item=> {
        item.sort((a,b)=> a-b)
        minimumSum += item[0]
    } )
    return minimumSum
  }

  console.log(sumOfMinimums([[3,6,82,3,7],[74,83,2,1,8],[94,32,52,22,62]]))