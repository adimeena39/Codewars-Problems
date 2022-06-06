// Task
// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives and negatives also zeros_

// Repetition of numbers in the array/list could occur.

// The Maximum Gap is computed Regardless the sign.

// Input >> Output Examples
// maxGap ({13,10,5,2,9}) ==> return (4)
// Explanation:
// The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .
// maxGap ({-3,-27,-4,-2}) ==> return (23)
// Explanation:
// The Maximum Gap after sorting the array is 23 , The difference between |-4- (-27) | = 23 .

function maxGap (numbers){
    //your code here
    let max = 0
   numbers.sort((a,b)=>a-b).forEach((a,i)=> {
    
       if(i>0 && i<=(numbers.length-1)){
           let diff = Math.abs((a-numbers[i-1])) 
           max<diff ? max=diff : max
       }
    } )
    return max
  }

  console.log(maxGap([13,10,5,2,9]))
  console.log(maxGap([-3,-27,-4,-2]))
  console.log(maxGap([-8485, 9561, 4377]))
