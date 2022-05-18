// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalize(s){
    
let arr = s.split('').map((a,i)=> i%2===0 ? a.toUpperCase() : a ).join('');

let arr1 =  s.split('').map((a,i)=> i%2!=0 ? a.toUpperCase() : a ).join('');

return [arr,arr1]

  };

  console.log(capitalize("abdjdkiekje")) // [ 'AbDjDkIeKjE', 'aBdJdKiEkJe' ]