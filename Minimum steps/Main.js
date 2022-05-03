

// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

// Numbers could occur more than once , (Duplications may exist).

// Threshold K will always be reachable.
// minimumSteps({8 , 9, 4, 2}, 23)  ==> return (3)
// minimumSteps({19,98,69,28,75,45,17,98,67}, 464)  ==>  return (8)


// function minimumSteps(numbers, value){
//     //your code here
//     let sum = 0
//     numbers.sort((a,b)=> a-b)
//     let minimumCount = [] 
//      numbers.forEach((a,index)=> {
//         sum += a
//         if(sum+numbers[index+1]>=value) { minimumCount.push(index+1)} })
//         return numbers[0]>value ? 0 : minimumCount[0]
        
//   }
const minimumSteps = (numbers, value) =>
  numbers.sort((a, b) => a - b).filter(val =>{ (value -= val) > 0 
console.log(value)} ).length;

  console.log(minimumSteps([8 , 9, 4, 2], 23)) // 3
//   console.log(minimumSteps([19,98,69,28,75,45,17,98,67],464)) // 8
//   console.log(minimumSteps([4,6,3],2)) // 0
