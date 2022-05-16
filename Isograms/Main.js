// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
    //... 
    
   let arr = str.toUpperCase().split('')
//    console.log(arr.indexof(arr[0]))
   return arr.every((a)=> arr.indexOf(a) == arr.lastIndexOf(a)) ? true : false

  }

  console.log(isIsogram("Dermatoglyphics")) // true
  console.log(isIsogram("aba")) // fasle 
  console.log(isIsogram("moOse")) // false
  console.log(isIsogram("")) // true