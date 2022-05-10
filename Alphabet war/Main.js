// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!



function alphabetWar(fight)
{
  let leftSideChar = ["s","b","p","w"]
  let leftSum = 0
  let rightSideChar = ["z","d","q","m"]
  let rightSum = 0
fight.split('').forEach((char,index)=>{

 if(leftSideChar.includes(char)){
       leftSum += leftSideChar.indexOf(char) + 1     
}
 else if(rightSideChar.includes(char)){
     rightSum += rightSideChar.indexOf(char) + 1
}})
 if(leftSum>rightSum){
     return "Left side wins!" }
 else if(rightSum>leftSum){
     return "Right side wins!"
 }else if(leftSum===rightSum){

     return "Let's fight again!";
 }}
console.log(alphabetWar("zdqmwpbs")) // Let's fight again!
console.log(alphabetWar("zzzzs")) // Right side wins!
console.log(alphabetWar("wwwwwwz")) // Left side wins!
