function stringy(size) {
    // your code here  
    let newStr = ""
    for(let i=1; i<=size;i++){
         i%2!=0 ? newStr+=1 : newStr+=0
    } 
    return newStr
  }

  console.log(stringy(8))