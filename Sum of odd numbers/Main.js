// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
    // TODO
      let m = 2*n
      let sum = 0
      for(let i=1;i<m;i+=2){
         sum += n*(n-1) + i
  
      }
      return sum
  
  }

console.log(rowSumOddNumbers(2)) // 8