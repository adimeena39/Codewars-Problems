

function findUniq(arr) {
    // do magic
    return arr.find(num => {
        return arr.indexOf(num)===arr.lastIndexOf(num)
     })
  }
  

  console.log(findUniq([1,2,1,1,1,1,1])) // 2