// Given an array/list [] of integers , Find the Nth smallest element in this array of integers
// nthSmallest({3,1,2} ,2) ==> return (2)
// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 



function nthSmallest(arr, pos){
    //your code here
   return arr.sort((a,b)=> a-b)[pos-1]
  }

console.log(nthSmallest([3,1,2],2)) // 2
console.log(nthSmallest([15,20,7,10,4,3],3)) // 7 
console.log(nthSmallest([3,-122,-45,-56 ,234],2)) // -56 