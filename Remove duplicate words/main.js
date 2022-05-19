// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta

function removeDuplicateWords (s) {
    // your perfect code...
     let arr = []
     s.split(' ').map(a=> {if(!arr.includes(a)){
            arr.push(a)
     }  })
     return arr.join(' ')
}

  console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')) // alpha beta gamma delta