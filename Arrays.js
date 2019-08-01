//This function returns a new array with the first two odd numbers from the original array.

function oddCouple(array){
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    let element = array[i];
    if(element % 2 === 1) newArray.push(element);
  }  
  return newArray.slice(0,2);
}

//This function mimics the 'includes' method.

function myIncludes(array, search){
  for(let i = 0; i < array.length; i++){
    let element = array[i];
    if(element === search) return true; 
  }
  return false;
}

//This function mimics the 'lastIndexOf' array method.

function myLastIndexOf(array, search, start = array.length-1){
  for(let i = start; i >= 0; i--){
    let element = array[i];
    if(element === search) return i;
  }
  return -1;
}

//This function mimics the 'reverse' array method.

function myReverse(array){
  let newArray = [];
  for(let i = array.length - 1; i >= 0; i--){
    let element = array[i];
    newArray.push(element);
  }  
  return newArray;
}

//This function mimics the 'unshift' array method.

function myUnshift(array, value){
  let newArray = [value];
  for(let i = 0; i < array.length; i++){
    let element = array[i];
    newArray.push(element);
  }
  return newArray; 
}

//This function returns an array that contains two elements. Each element is an array that contains either odd or even numbers

function evenAndOdd(array){
  let even = [];
  let odd = [];
  for(let i = 0; i < array.length; i++){
    let number = array[i];
    if(number % 2 === 0) even.push(number);
    if(number % 2 === 1) odd.push(number);
  }
  return [even,odd];
}

//This function accepts a two-dimensional array and returns a flatenned array. 

function arrayFlattener(array){
  let flat = [];
  for(let i = 0; i < array.length; i++){
    let element = array[i];
    if(Array.isArray(element)){
      for(let j = 0; j < element.length; j++){
        let sub = element[j];
        flat.push(sub);
      }
    } else {
      flat.push(element);
    }
  }
  return flat;
}

//This function accepts an array of animal facts and returns a new array where each element is a sentence regarding each animal and its information. 

let animalFacts = [
                  [Salazar,[Cat, 7]],
                  [Gohan, [Eagle, 10]],
                  [Ace, [Monkey, 3]]
                  ];
                  
function zooInventory(animalFacts){
  let array = [];
  
  for(let i = 0; i< animalFacts.length; i++){
    let animal = animalFacts[i];
    
    let name = animal[0];
    let species = animal[1][0];
    let age = animal[1][1];
    
    let sentence = `${name} the ${species} is ${age}.`;
    array.push(sentence);
    
  }
  return array;
}

//Given the number of rows and columns, this function creates a grid to those specifications. 

function makeGrid (numCol, numRow){
  let grid = [];
  let subGrid = [];
  
  for(let i = 1; i <= numCol; i++){
    subGrid.push(i);
  }
  for(let i = 0; i < numRow; i++){
    grid.push(subGrid);
  }
  return grid;
}

//This function takes a grid and returns a new array with the indicated number or rows removed.

function removeColumns(grid, removeNum){
  let newGrid = [];
  for(let i = 0; i < grid.length; i++){
    let row = grid[i];
    newGrid.push(row.slice(0, row.length - removeNum));
  }
  return newGrid;
}

//This function mimics the 'join' array method by returning all of the elements joined together in a string.

function myJoin(array, seperator = ','){
  let string = '';
  for(let i = 0; i < array.length - 1; i ++){
    let word = array[i];
    if(word === undefined || word === null) word = '';
    string += word + seperator;
  }
  return string += array[array.length - 1]; 
}

//This function mimics the 'slice' array method.

function mySlice(array, start = 0 , end = array.length){
  let copy = [];
  
  if(start < 0) start = start + array.length; 
  if(end < 0) end = end + array.length;
  
  for(let i = start; i < end; i++){
    let element = array[i];
    copy.push(element)
  }
  return copy;   
}

//This function, depending if the rotateNum is posisitve or not, rotates the elements in the array to the left or right.

function rotateArray(array, rotateNum){
  let copy = array.slice();
  
  for(let i = 0; i < rotateNum; i++){
    copy.unshift(copy.pop());
  }
  
  if(rotateNum < 0){
    for(let i = 0; i < Math.abs(rotateNum); i++){
      copy.push(copy.shift());
    }
  }
  return copy;
}
