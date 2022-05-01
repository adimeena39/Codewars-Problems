// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


function abbrevName(name){

    // code away
    let arr = name.split(" ")
    return arr.map(a=> (a.toUpperCase()).slice(0,1) ).join('.')

}

console.log(abbrevName("Sam Harris"))  // S.K
console.log(abbrevName("Rohit kumar")) // R.K