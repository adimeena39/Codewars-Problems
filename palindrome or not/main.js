// to check if a string is a palindrome or not 

function palindromeOrNot(str){
    let detailsArr = Array.from(str)
    return detailsArr.reverse().join('') === str
}

console.log(palindromeOrNot("racecar")) // true
console.log(palindromeOrNot("car")) // false
