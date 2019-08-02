//This function accepts a function and an argument and returns the result of that given argument passed into the given function.

function logger (func, arg){
  return func(arg);
}

//This function takes an array aswell as a callback function and passess each element from the array as an argument into the callback function. 

function finderFunc (array, callBack){
  for(let i = 0; i < array.length; i++){
    let element = array[i];
    if(callBack(element)) return i; 
  }
  return - 1;
}

//Using .forEach, this function returns a strings for each element in the array.

let pets = [{
    name: 'Salazar',
    species: 'cat'
  }, {
    name: 'Ace',
    species: 'owl'
  }, {
    name: 'Axel',
    species: 'dog'
  }
];

function specialPets(pets){
  let string = '';
  array.forEach(function({name,species}, i){
    string += `${name} the ${species} is very special! `;    
  })
   return string.trim();
}


//This function mimics the .forEach method.

function myForEach(array, callBack){
  for(let i = 0; i < array.length; i++){
    let element = array[i];
    callBack(element,i);
  }
}

//This function takes a starting value and an array of functions, and returns the final value returned by the final function in the array, but before it passes the value returned by the first function into the second function, and so on.

function chainReaction(startVal, arrayOfFuncs){
  let finalValue = 0;
  arrayOfFuncs.forEach(function(func,i){
    if(i === 0) finalValue = func(startVal);
    if(i > 0) finalValue = (func(finalValue));
  })
  return finalValue;
}

//This function returns a new function that takes the price of an item and returns the correct final price of the item.

function finalPrice (state){
  return function (price){
    if(state === 'IL') return price*1.12*1.003;
    if(state === 'MA') return price*1.07*1.0335;
  }
}

//This function generates multiplication table function for any number passed in.

function multiplication (number){
  return function (num){
    return num*number;
  }
}

//This function returns a functon that takes a different argument and the returned function returns the function with the arguments passed through it. 

function partial(func, argA){
  return function (argB){
    return func(argA, argB);
  }
}

//This function returns a new function that returns the number of times its been called.

function call(){
  let count = 0;
  return function(){
    count++;
    return count;
  }
}

//This function forces the result of one function into a string. 

function stringify(callback){
  return function(){
    return String(callback());
  }
}

// This function takes a default name and age, and returns a function. The returned function uses the default values defined when it was called.

function getDogBreeder(OGname, OGage){
  return function dogBreeder(name, age){
    let dog = {
      name: OGname,
      age:OGage
    };
    if(typeof name === 'number') dog.age = name;
    if(typeof name === 'string') dog.name = name;
    if(age) dog.age = age;
    return dog;
  }
}

//This function mimics a cache by taking in a function and returning a new function with an argument. When the function is called for the first time, it calls the function with the argument and saves the result of the function. If the function is called again with the same argument, the stored value is retrieved instead of calling the function again.

function cacheSavings(func){
  let cache = {};
  return function(arg){
    if(cache[arg] === undefined){
      cache[arg] = func(arg);
      return cache[arg];
    } else {
      return cache[arg];
    }
  }
}
