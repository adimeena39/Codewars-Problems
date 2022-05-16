// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

function getMiddle(s)
{
let l = s.length
if(l%2===0){
    let y = (l/2)-1
    let x = (l/2)
    return s.split('').filter((a,index)=>(index===y || index===x)).join('')
}
else if(l%2!=0){
 
    let z = ((l+1)/2)-1
    return s.split('').filter((a,index)=>index===z).join('')
}
}

console.log(getMiddle("Hello")) // l
console.log(getMiddle("Hell")) // el
console.log(getMiddle("H")) // H