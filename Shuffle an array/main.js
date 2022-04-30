// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.


// generating randome order of array elements using sort ( not full random)


let arr = [1,2,3,4,5] 
arr.sort((a,b)=> 0.5 - Math.random())
console.log(arr)

// using Fisher-yates method

let array = [1,2,3,4,5]

for(let i=array.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1))
    const temp = array[i]
    array[i]= array[j]
    array[j]= temp
    
}
console.log(array)





