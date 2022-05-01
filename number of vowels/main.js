// find number of vowels inside a string

let details = "My name is harry and i am learning Javascript"
let detailsArr = Array.from(details)
console.log(detailsArr)
let count = 0
detailsArr.forEach(acc => {
    if (acc === 'a' || acc === 'e' || acc === 'i' || acc === 'o' || acc === 'u') {
        count += 1
    }
})

console.log(count) // 13