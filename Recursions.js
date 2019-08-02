// This function uses recursion to print out numbers up to ten. 

function countToTen(number){
  if(number === 10) console.log(number);
  if(number < 10){
    console.log(number);
    countToTen(number + 1);
  }
}

// This function uses recursion to print out the letters of word start from the end.

function backwardString(string){
  if(string.length === 1) console.log(string);
  if(string.length > 1){
    console.log(string[string.length - 1]);
    backwardString(string.slice(0,-1));
  }
}

//This function uses recursion to add numbers greater than one.

function sumNums(number){
  if(number === 1) return 1;
  else return number + sumNums(number - 1);
}

//This function uses recursion to count the number of vowels in a string. 

function countVowels(string){
  let vowels = 'AEIOUaeiou';
  let firstLetter = string[0];
  let restOfTheString = string.slice(1);
  
  if(string.length === 0) return 0;
  if(vowels.indexOf(firstLetter) !== -1) return 1 + countVowels(restOfTheString);
  else return countVowels(restOfTheString);  
}

//This function uses recursion to reverse the elements in an array. 

function reverseArray(array){
  let lastElement = array[array.length-1];
  
  if(array.length === 1) return array;
  return [lastElement].concat(reverseArray(array.slice(0,-1)));
}

//This function uses recursion to sum the digits of a given integer.

function sumDigits(number){
  let numberString = number.toString();
  if(numberString.length === 1) return parseInt(numberString);
  
  let firstNumber = parseInt(numberString[0]);
  return firstNumber + sumDigits(numberString.slice(1));
}

//This function uses recursion to check if a particular word is a palindrome.

function isPalindrome(word){
  if(word.length <=1) return true;
  let firstLetter = word[0].toLowerCase();
  let lastLetter = word[word.length-1].toLowerCase();
  
  if(firstLetter === lastLetter) return isPalindrome(word.slice(1,-1));
  else return false;
}

//This function uses recursion to return the sum of all the numbers in an array.

function arraySum(numberArray){
  let sum = 0; 
  
  numberArray.forEach(function(number){
    if(Array.isArray(number)){
      sum += arraySum(number);
    } else {
      sum += number;
    }
  })
  return sum;
}

//This function uses recursion to loop through a nested object and return true if all values are true or return false if even 
//one value is false.

let nestObj = {
  power: {
    batteries: true,
    solarCells: true,
    generator: true,
    fuelCells: true
  },
  telecoms: {
    antennas: {
      highGain: true,
      mediumGain: true,
      lowGain: true
    },
    transmitter: true,
    receiver: true
  },
  attitudeControl: {
    stabilization: {
      spin: true,
      threeAxis: true
    }
  },
  propulsion: {
    engines: {
      engine1: true,
      engine2: true,
      engine3: false
    },
    thrusters: true,
    propellant: true
  },
  environment: {
    cooling: true,
    heating: true,
    lifeSupport: true
  }
};

function allSystems(nestedObj){
  for(let systems in ship){
    let system = ship[systems];
    
    if(typeof system === 'object'){
      let subSystem = allSystems(system);
      if(subSystem === false) return false;
    } else {
      if(system === false) return false;
    }
  }
  return true;
}

//Given a family tree of names, this function uses recursion to loop through a nested object to return the longest name. 

let familyTree = {
  'Beverly Marquez': {
    'Nina Rhone': {
      'William Rhodes': null,
      'Paul Nell': null,
      'Sir Paddington the Fourth, of the county Wilstonshire': null
    }
  }
};

function getLongestName(familyTree){
  
  let maxName = '';
  
  for(let names in familyTree){
    let name = familyTree[names];
    if(names.length > maxName.length) maxName = names;
    
    if(typeof name === 'object'){
      let nextName = getLongestName(name);
      if(nextName.length > maxName.length) maxName = nextName;
    }
  }
  return maxName;
}
