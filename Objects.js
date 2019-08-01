//This function takes an array of transactions and returns the total of all transactions. 

let transactionsArray = [
  {
    name: "Tons of glitter",
    amount: 70
  },
  {
    name: "Porcelain Pink Flamingos",
    amount: 92
  },
  {
    name: "Chandelier replacement",
    amount: 10000,
  },
  {
    name: "Dinner at TGIF x6",
    amount: 350
  }
];

let transactionTotal = (transactionArray) => {
  let total = 0;
  for(let i = 0; i < transactionArray.length; i++){
    let category = transactionArray[i];
    total += category.amount;
  }
  return total;
}

//This function compares two objects and returns true if they are identical. 

function compareObjects (objA, objB){
  let keysA = Object.keys(objA);
  let keysB = Object.keys(objB);
  
  if(keysA.length !== keysB.length) return false;
  
  for(let i = 0; i < keysA.length; i++){
    let key = keysA[i];
    
    if(objA[key] !== objB[key]) return false;
    if(objB[key] !== objA[key]) return false;
  }
  return true;
}

//This function translates a given string into 'Leet'. 

let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

function leetTranslator(string){
  let codex = {};
  let translation = '';
  
  for(let i = 0; i < letters.length; i++){
    let letter = letters[i];
    let leetChar = leetChars[i];
    
    codex[letter] = leetChar;
  }
  for(let i = 0; i < string.length; i++){
    let char = string[i].toLowerCase();
    translation += codex[char];
  }
  return translation;
}

//Given an animal and country, this function returns a sentence that explains what that animal says in that particular country.

let animalNoises = [
  { 'dog': {
    'America' : 'Woof! Woof!',
    'Germany' : 'Wau Wau!',
    'England' : 'Bow wow!',
    'Uruguay' : 'Jua jua!',
    'Afrikaans' : 'Blaf!',
    'Korea' : 'Mong mong!',
    'Iceland' : 'Voff voff!',
    'Albania' : 'Ham!',
    'Algeria' : 'Ouaf ouaf!'
    }
  },
  { 'cat': {
    'America' : 'Meow',
    'Germany' : 'Miauw!',
    'England' : 'mew mew',
    'Uruguay' : 'Miau Miau!',
    'Afrikaans' : 'Purr',
    'Korea' : 'Nyaong!',
    'Iceland' : 'Kurnau!',
    'Albania' : 'Miau',
    'Algeria' : 'Miaou!'
    }
  },
  { 'chicken': {
    'America' : 'Cluck cluck',
    'Germany' : 'tock tock tock',
    'England' : 'Cluck Cluck',
    'Uruguay' : 'gut gut gdak',
    'Afrikaans' : 'kukeleku',
    'Korea' : 'ko-ko-ko',
    'Iceland' : 'Chuck-chuck!',
    'Albania' : 'Kotkot',
    'Algeria' : 'Cotcotcodet'
    }
  }
];

function petSounds(animal,country){
  let sentence = '';
  
  for(let i = 0; i < animalNoises.length; i++){
    let animalObj = animalNoises[i];
    
    if(animal in animalObj){
      let countryObj = animalObj[animal];
      let sound = countryObj[country];
      
      let capitalizedAnimal = animal[0].toUpperCase() + animal.slice(1);
      
       return sentence += `${capitalizedAnimal}s in ${country} say ${sound}`
    }
  }
}

//This function takes a string and returns an object that tells us how many of each letter is in the string.
 
function frequencyAnalysis(string){
  let analysis = {};

  for(let i = 0; i < string.length; i++){
    let char = string[i];
    if(analysis[char] === undefined) analysis[char] = 1;
    else {
      analysis[char]++;
    }
  }
  return analysis;
}

//This function takes a name & an age and assigns it to an object. The default name is 'Steve' & the default age is 0.

function dogBreeder(name, age){

  let dog = {
    name:'Steve',
    age: 0
  };
  
  if(typeof name === 'number') dog.age = name;
  if(typeof name === 'string') dog.name = name;
  if(age) dog.age = age;
  
  return dog;
}

//Given an array of student attendance (classroom), this function takes a day of the week and returns an array that holds the names of the students that were present on that day. 

let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

function attendanceCheck(dayoftheWeek){
  let present = [];
  for(let i = 0; i < classRoom.length; i++){
    let studentObj = classRoom[i];
    let studentName = Object.keys(studentObj)[0];
    let attendanceArray = studentObj[studentName];
    
    for(let j = 0; j < attendanceArray.length; j++){
      let dayObj = attendanceArray[j];
      let day = Object.keys(dayObj)[0];
      let ifPresent = dayObj[day];
      
      if(ifPresent && dayoftheWeek === day) present.push(studentName);
    }
    
  }
  return present;
}



