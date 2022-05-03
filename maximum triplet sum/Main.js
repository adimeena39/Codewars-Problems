// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .Repetition of numbers in the array/list could occur , So (duplications are not included when summing).
// maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
// maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)


function maxTriSum(numbers){
    //your code here
    numbers.sort((a,b)=> b-a)
    let filtered = numbers.filter((a,index)=> a!=numbers[index+1])
    return filtered.slice(0,3).reduce((acc,c)=> acc + c,0 )
  }

  console.log(maxTriSum([-7,12,-7,29,-5,0,-7,0,0,29])) // 41