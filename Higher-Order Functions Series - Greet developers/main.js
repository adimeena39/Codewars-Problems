function greetDevelopers(list) {
    // thank you for checking out my kata :)
   return list.map(user=> {
    user.greetings = `Hi ${user.firstName}, what do you like the most about ${user.language}?`
    return user
   })
  }


var list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];

  console.log(greetDevelopers(list1)) // 

  
//   [
//     {
//       firstName: 'Sofia',
//       lastName: 'I.',
//       country: 'Argentina',
//       continent: 'Americas',
//       age: 35,
//       language: 'Java',
//       greetings: 'Hi Sofia, what do you like the most about Java?'
//     },
//     {
//       firstName: 'Lukas',
//       lastName: 'X.',
//       country: 'Croatia',
//       continent: 'Europe',
//       age: 35,
//       language: 'Python',
//       greetings: 'Hi Lukas, what do you like the most about Python?'
//     },
//     {
//       firstName: 'Madison',
//       lastName: 'U.',
//       country: 'United States',
//       continent: 'Americas',
//       age: 32,
//       language: 'Ruby',
//       greetings: 'Hi Madison, what do you like the most about Ruby?'
//     }
//   ]