// Task:
// You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

// Note:Returning the pattern is not the same as Printing the pattern.
// Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.
// Pattern:
// 1
// 22
// 333
// ....
// .....
// nnnnnn
// Examples:
// pattern(5):

// 1
// 22
// 333
// 4444
// 55555
// pattern(11):

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// 10101010101010101010
// 1111111111111111111111




function pattern(n) {
    var output = "";
    // Happy Coding ^_^
    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= i; j++) {
            output += i
        }
        if (i === n) break
        else {
            output += "\n"
        }
    }
    return output;
}

console.log(pattern(4)) // ouput
// 1
// 22
// 333
// 4444