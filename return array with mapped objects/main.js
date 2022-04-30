
// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname

let john = { name: "John",surname:"Millon", age: 25 };
let pete = { name: "Pete",surname:"Davidson", age: 30 };
let mary = { name: "Mary",surname:"Smith", age: 28 };
  
let users = [ john, pete, mary ];

let usersName = users.map(user=> ({ fullName: `${user.name}  ${user.surname}`, age: user.age })) 
    
console.log(usersName) // [{fullName: 'John  Millon', age: 25} , {fullName: 'Pete  Davidson', age: 30},{fullName: 'Mary  Smith', age: 28}]

