// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

const binaryArrayToNumber = arr => {
    let numberEqu = 0
    arr.reverse().forEach((a, i) => {
        a === 1 ? numberEqu += Math.pow(2, i) : 0
    })
    return numberEqu;

};

console.log(binaryArrayToNumber([1, 1, 1, 1])) // 15
console.log(binaryArrayToNumber([0, 0, 0, 1])) // 1