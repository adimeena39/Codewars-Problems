// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers) {
  // ...
  let newArr = numbers.split(' ')

  let sortedArr = newArr.sort((a, b) => b - a)
  if (sortedArr.length === 1) {
    return `${sortedArr[0]} ${sortedArr[0]}`
  }
  else if (sortedArr.length > 1) {

    return sortedArr.filter((a, index) => index === 0 || index === sortedArr.length - 1).join(' ')
  }

}
console.log(highAndLow('3 6 8 3 7 2 9')) // 9 2
console.log(highAndLow('9')) // 9 9
