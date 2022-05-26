// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.


function cubeOdd(arr) {
    let oddArr = arr.filter(a=> a%2!=0)

    return  oddArr.every(a=> typeof(a)==="number")? oddArr.reduce((a,b)=> a + b**3,0) : undefined 

    }

    console.log(cubeOdd([7,3,4])) // 370
    console.log(cubeOdd([7,3,4,"string"])) // undefined