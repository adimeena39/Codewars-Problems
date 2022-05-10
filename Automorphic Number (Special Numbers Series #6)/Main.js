// Definition
// A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

// Task
// Given a number determine if it Automorphic or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes

// autoMorphic (13) -->> return "Not!!"
// Explanation:
// 13 squared is 169 , Not ending with the same number's digits which are 69 .

// autoMorphic (225) -->> return "Not!!"
// Explanation:
// 225 squared is 50625 , Not ending with the same number's digits which are 225 .


function automorphic(n){
    //your code here
    return String(n*n).split('').splice(-String(n).length).join('') == n ? "Automorphic" : "Not!!"
  }
  console.log(automorphic(13)) // not!!
  console.log(automorphic(76)) // Automorphic
  console.log(automorphic(1225)) // Not!!