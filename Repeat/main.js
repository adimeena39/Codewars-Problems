// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// More examples in the test cases.

// Good luck!

function repeats(arr){
    //..
    let total = 0
       arr.forEach((a)=> {
        if(arr.lastIndexOf(a)===arr.indexOf(a)) {
            total += a
        } 
    })
    return total
    };

    console.log(repeats([5,5,4,4,7,8])) // 15