// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"

// return masked string
function maskify(cc) {

    if(cc.length<=4){
        return cc
    }
    else{

        let last4 = cc.split('').slice(-4).join('')
        return cc.split('').slice(0,cc.length-4).map(a=> a='#').join('')+last4
        console.log(last4)
    }
  
}

console.log(maskify("hello world")) // #######orld
console.log(maskify("messyworld!")) // #######rld!
console.log(maskify("ld")) //ld
