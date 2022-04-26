// Write a function that takes an array and counts the number of each unique element present.

// count(['james', 'james', 'john']) 
// #=> { 'james': 2, 'john': 1}

function count(array){
    var counts = {};
    
    for(var i = 0; i< array.length; i++) {
        var num = array[i];
        counts[num] = counts[num] ? counts[num]+1 : 1;
    }
      return counts;
    }

console.log(count(['james', 'james', 'john'])) // { 'james': 2, 'john': 1} 