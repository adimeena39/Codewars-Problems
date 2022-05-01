// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    var newstr="";
    for(let i=str.length-1;i>=0;i--){

    newstr += str[i];
    }
    
    return newstr;

  }
  console.log(solution("hello")) // olleh