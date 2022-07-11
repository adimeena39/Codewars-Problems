// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    return String(num).split('').map((a, i, arr) => {
        if (i != (arr.length - 1) && a != 0) {
            return `${Number(a) * (10 ** (arr.length - (i + 1)))}`
        }
        else if (a == 0) {
            return ''
        }
        else {
            return `${a}`
        }
    }).filter(a => a != 0).join(' + ')
}

console.log(expandedForm(70743)) // 70000 + 700 + 40 + 3
console.log(expandedForm(4508)) // 4000 + 500 + 8