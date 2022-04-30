// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance: 
// let strings = ["Hare", "Krishna", "Hare", "Krishna",
// "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(strings) ); // Hare, Krishna, :-O



function unique(arr) {
    /* your code */
   return arr.filter((name,index)=> index===arr.lastIndexOf(name) )
  }

  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];

 console.log(unique(strings))
  