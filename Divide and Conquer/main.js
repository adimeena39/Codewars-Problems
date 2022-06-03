// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

function divCon(x){
    let stringSum = 0
    let numberSum = 0
    x.forEach(a => {
        if(typeof a==="string" ){
            stringSum +=Number(a) 
        }
        else{
            numberSum +=a
        }
    })
    return numberSum-stringSum

}
console.log(divCon([1,2,4,5,"6","3"]))  // 3
