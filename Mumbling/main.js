// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
	// your code
    return s.toLowerCase().split('').map((a,i)=> {
        let newStr = a.repeat(i+1)
     return a.toUpperCase() + newStr.slice(1)
    }).join('-')
}

console.log(accum("abcd")) // A-Bb-Ccc-Dddd

