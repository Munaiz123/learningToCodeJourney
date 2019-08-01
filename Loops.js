//This function returns the sum of all the odd numbers between the given number and 1.

function oddSum(number){
  let sum = 0; 
  for(let i = 0; i < number; i++){
    if(i % 2 === 1) sum += i;
  }
  return sum;
}

//This function returns a string in which every other character is capitalized.

function crazyCaps(string){
  let newString = '';
  for(let i = 0; i < string.length; i++){
    let char = string[i];
    if(i % 2 === 0) newString += char.toLowerCase();
    if(i % 2 === 1) newString += char.toUpperCase();
  }
  return newString;
}

// This function returns the number of minutes it takes currentNum to equal targetNum.

function bacteriaTime(currentNum, targetNum){
  let time = 0;
  if(targetNum < currentNum) return 'targetNum must be larger than currentNum';
  while(currentNum < targetNum){
    time += 20;
    currentNum *= 2;
    
  }
  return time; 
}

//This function returns the result of raising the base by the power.

function exponentiate (base, power){
  let result = 1;
  for(let i = 0; i < power; i++){
    result *= base; 
  }
  return result;
}

//This function mimics the slice function in javaScript.

function mySlice(string, start = 0, end = string.length){
  let newString = '';
  for(let i = start; i < end; i++){
    let char = string[i];
    newString += char;
  }
  return newString;
}

//This function mimics the IndexOf function in javaScript.

function myIndexOf(string, search, start = 0){
  for(let i = start; i < string.length; i++){
    let char = string.slice(i, i+search.length);
    if(char === search) return i;
  }
  return -1;
}

//Given a string of words this function returns the word that has the most vowels.

function mostVowels(words){
  let wordsArray = words
  .split('.')
  .join('')
  .split(',')
  .join('')
  .split(' ');
  
  let vowels = 'aeiouAEIOU';
  let maxCount = 0;
  let maxWord = '';
  
  for(let i = 0; i < wordsArray.length; i++){
    let word = wordsArray[i];
    let count = 0;
    
    for(let j = 0; j < word.length; j++){
      let letter = word[j];
      if(vowels.indexOf(letter) !== -1) count++;
    }
    if(count > maxCount){
      maxCount = count;
      maxWord = word;
    }
  }
  return maxWord;
}
