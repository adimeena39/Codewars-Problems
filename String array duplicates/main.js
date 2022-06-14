// DESCRIPTION:
// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

function dup(s) {
    //..
      return s.map(a=> {

      return a.split('').map((a,i,arr)=> {
          if(arr[i]===arr[i-1]) {
           return }
           else{
            return arr[i]
           }  
    }).join('')
})
    };

    console.log(dup(["abracadabra","allottee","assessee"])) // [ 'abracadabra', 'alote', 'asese' ]
    console.log(dup(["","welcome","hello"])) // [ '', 'welcome', 'helo' ]