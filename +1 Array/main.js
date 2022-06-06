// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

// [4, 3, 2, 5] would return [4, 3, 2, 6]

function upArray(arr){
    if (Math.min(...arr) < 0 || arr.length === 0 || Math.max(...arr) > 10) {
      return null;
    } 
    else if (arr.length >  18) {
      let lastDigit = arr.pop();
      arr.push(lastDigit+1);
      return arr;
    } 
    else {
      let returnArr = Number(arr.join('')) + 1
      return Array.from(String(returnArr), Number);
    }
  }

  console.log(upArray([5,4,9])) // [ 5, 5, 0 ]
  console.log(upArray([5,4,'54',7])) // null