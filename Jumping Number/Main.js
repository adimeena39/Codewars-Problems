// Given a number, Find if it is Jumping or not .
// Jumping number is the number that All adjacent digits in it differ by 1.

// Notes
// Number passed is always Positive .

// Return the result as String .

// The difference between ‘9’ and ‘0’ is not considered as 1 .

// All single digit numbers are considered as Jumping numbers.

// Input >> Output Examples
// jumpingNumber(9) ==> return "Jumping!!"
// Explanation:
// It's single-digit number
// jumpingNumber(79) ==> return "Not!!"
// Explanation:
// Adjacent digits don't differ by 1
// jumpingNumber(23) ==> return "Jumping!!"
// Explanation:
// Adjacent digits differ by 1
// jumpingNumber(556847) ==> return "Not!!"

function jumpingNumber(n){
    //your code here
    let arr = String(n).split('').map(Number)
    let newArr = []
   for(let i=0;i<arr.length;i++){
    newArr.push( (arr[i]===arr[i+1]+1) || (arr[i]===arr[i+1]-1) )
   }
   if(arr.length===1){
       return `Jumping!!`
   }
   else{
       return (newArr.slice(0,newArr.length-1)).every(a=> a===true) ?  `Jumping!!` : `Not!!`
   }
  }

  console.log(jumpingNumber(4343456)) // Jumping!!

  console.log(jumpingNumber(24)) //   Not!!