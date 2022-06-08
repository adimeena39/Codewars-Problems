// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    let arr = []
    let split  = str.split('')
   split.forEach((a,i)=> {
        if(i%2!=0) {
            arr.push(split[i-1]+a)
        }
        else if(split.length%2!=0 && i===split.length-1){

            arr.push(a+'_')
        }
    })

    return arr   
}

console.log(solution('abcdefg')) // [ 'ab', 'cd', 'ef', 'g_' ]
console.log(solution('abcdef')) // [ 'ab', 'cd', 'ef' ]


// let str = ''
// console.log(str.split(''))