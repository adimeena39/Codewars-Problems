// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// method 1
function check(a, x) {
    // your code here
    return a.includes(x)
  }


  console.log(check([1,2,4,5,9,0],5)) // true
  console.log(check([1,2,4,5,9,0],6)) // false
  
//   method 2

  function check(a, x) {
    // your code here
    let newArray = a.filter(a=> a===x )
    return newArray.length > 0
  }


  console.log(check([1,2,4,5,9,0],5)) // true
  console.log(check([1,2,4,5,9,0],6)) // false