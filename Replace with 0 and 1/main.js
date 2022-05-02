// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {
    let newArr = []
    let array = x.split('')
    console.log(array)
    array.forEach(a => 
        { 
            a = Number(a)
        
    if(a< 5) {
        newArr.push(0)

    }
    else {
        newArr.push(1)
    }
})
return newArr.join('')
}
console.log(fakeBin("939767642213")) // 101111100000