// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {  
    // The function code should be here
    return string.split('').reduce((acc,letter)=> {
      return {...acc, [letter] : (acc[letter] || 0 ) + 1 }
    },{}) 
    
  }

console.log(count('success')) // { s: 3, u: 1, c: 2, e: 1 }