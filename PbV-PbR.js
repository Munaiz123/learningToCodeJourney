//This function takes an array of numbers and returns an array with only odds numbers from the given array.

function quiteOdd (array){
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    let number = array[i];
    if(number % 2 === 1) newArray.push(number);
  }
  return newArray;
}

// This function takes an array of numbers, mutates the even numbers & returns the count of changes

function mutant (array, string){
  let count = 0; 
  for(let i = 0; i < array.length; i++){
    let number = array[i]
    if(number % 2 === 0){
      count++;
      array[i] = string;
    }
  }
  return count;
}

//This function takes an object & returns a clone of the object with a few changes to the clone & original obj

function makeAClone (originalObj){
  let clone = {};
  
  for(let key in originalObj){
    let value = originalObj[key];
    clone[key] = originalObj[key];
  }
  clone.name += 'Clone';
  clone.offspring = [];
  originalObj.offspring.push(clone.name);
  
  return clone;
}

//This function mimics the splice method, but only takes one replacement value.

function mySplice(array, start = 0, end = array.length, replace){
  let theSplice = [];
  let send = [];
  
  for(let i = 0; i < start; i++){
    let char = array[i];
    send.push(char);
  }
  if(replace) send.push(replace);

  for(let i = start; i < start + end; i++){
    let char = array[i];
    theSplice.push(char);
  }
  for(let i = start + end; i< array.length; i++){
    let char = array[i];
    send.push(char);
  }
  while(array.length) array.pop();
  
  for(let i = 0; i < send.length; i++){
    let char = send[i];
    array.push(char);
  }
  return theSplice;
}

//This function mimics the reverse method by taking an array and reversing in place.

function reverseArray(array){
  let arr = [];
  for(let i = array.length - 1; i >= 0; i--){
    let char = array[i];
    arr.push(char)
  }
  while(array.length) array.pop();
  
  for(let i = 0; i < arr.length; i++){
    let char = arr[i];
    array.push(char);
  }
  return array;
}

//This function, unlike slice, will copy two-dimensional arrays.

function deeperCopy (array){
  let copy = [];
  let subCopy = [];
  for(let i = 0; i < array.length; i++){
    let element = array[i];
    
    if(Array.isArray(element)){
      for(let j = 0; j < element.length; j++){
        let sub = element[j];
        subCopy.push(sub);
      }
    } else {
      copy.push(element);
    }
  }
  copy.push(subCopy);
  return copy;
}
