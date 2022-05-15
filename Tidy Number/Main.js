
// Given a number, Find if it is Tidy or not .
// A Tidy number is a number whose digits are in non-decreasing order.
// Notes
// Number passed is always Positive .

// Return the result as a Boolean

// Input >> Output Examples
// tidyNumber (12) ==> return (true)
// Explanation:
// The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .

// tidyNumber (32) ==> return (false)

function tidyNumber(n){
    let newArr = String(n).split('')
    return [...String(n)].sort((a,b)=> a-b).every((a,index)=> a===newArr[index] )
  }

  console.log(tidyNumber(123)) // true
  console.log(tidyNumber(1034)) // false

