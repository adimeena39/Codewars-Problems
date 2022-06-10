

function isSortedAndHow(array) {
    return [...array].sort((a,b)=> a-b ).every((a,i)=> a===array[i]) ? "yes, ascending" : [...array].sort((a,b)=> b-a ).every((a,i)=> a===array[i]) ? "yes, descending" : 'no'
}

console.log(isSortedAndHow([1,2,3])) // yes, ascending
console.log(isSortedAndHow([3,1,2])) // no
console.log(isSortedAndHow([3,2,1])) // yes, descending