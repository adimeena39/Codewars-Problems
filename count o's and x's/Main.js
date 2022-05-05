// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


function XO(str) {
    //code here
    let oCount=0
    let xCount=0    
str = str.toLowerCase()
    str.split('').forEach(a=> {
        if(a==='o'){
        oCount +=1 
        }
    else if(a==='x'){
        xCount +=1
    }
    })
    return xCount===oCount
}

console.log(XO("xxxOoo")) // true
console.log(XO("zzdfgsdg")) // true
