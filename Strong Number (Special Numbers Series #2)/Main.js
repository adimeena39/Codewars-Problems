// Strong number is the number that the sum of the factorial of its digits is equal to number itself.

// For example: 145, since
// 1! + 4! + 5! = 1 + 24 + 120 = 145
// So, 145 is a Strong number.

// Task
// Given a number, Find if it is Strong or not.

function strong(n) {
  
    return (String(n).split('').map(a=> {
        a = Number(a) 
    let facto = 1
    for(let i=1;i<=a;i++){
         facto *= i 
        }
        return facto
}).reduce((a,b)=> a + b,0)===n) ?  "STRONG!!!!" : "Not Strong !!" ;
  }

  console.log(strong(145)) // STRONG!!!!
  console.log(strong(177)) // Not Strong !!