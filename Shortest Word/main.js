

function findShort(s){
    return s.split(' ').sort((a,b)=> a.length-b.length)[0].length
}

console.log(findShort("hello where are you")) // 3

