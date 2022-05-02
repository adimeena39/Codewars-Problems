// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
  
    let newArray = x.filter(a=> a ==="good")
    if(newArray.length===0){
        return "Fail!"
    }
    else if(newArray.length<=2){
        return "Publish!"
    }
    else{
        return "I smell a series!"
    }
}

console.log(well(['good', 'bad', 'bad', 'good','bad', 'bad'])) // Publish!

console.log(well(["bad","bad","bad","bad","bad","bad","bad","bad","bad","good","bad","bad","bad","good","good","bad"])) // I smell a series!