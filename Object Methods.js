// This object has a method that returns a greeting.

let me = {
  name:'Mayo',
  getGreeting: function(){
    return 'Hi, my name is ' + this.name +'.';
  }
}
//This object's method is expanded to include another object named 'you'.

let me2 = {
  name: 'Mayo',
  getGreeting: function (you){
    return `Hi ${you.name}, my name is ${this.name}.`;
  }
}

// This function returns an array with all of the returned values from each method invocation.

function callThemAll(obj, val){
  let array = [];
  
  for(let key in obj){
    let func = obj[key]
    if(typeof func === 'function'){
      array.push(func(val));
    }
  }
  return array;
}

// This object represents the game of Tic Tac Toe & has 'move' method and a 'clear' method that resets the board.

let ticTacToe = {
  board: [
    [null,null,null],
    [null,null,null],
    [null,null,null]    
  ],
  
  move: function (char, rowNum, colNum){
    if(this.board[rowNum][colNum] === null){
      this.board[rowNum][colNum] = char;
      return this.board;
    }
  },
  
  clear: function (){
   return this.board = [
                 [null,null,null],
                 [null,null,null],
                 [null,null,null]];
  }  
}

// The currentInventory method in the object below returns the current value of Ami's Kitchen Restaurant's value of inventory.

let AmisKitchen = {
  Biryani: {
    'Chicken': {cost: 2, quantity: 100},
    'Lamb': {cost: 1.5, quantity: 100}
  },

  Fish: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  Appetizers: {
    'samosa': {cost: 1, quantity: 100},
    'paratha': {cost: 1, quantity: 75}
  },

  Desert: {
    'barfi': {cost: 0.5, quantity: 100},
    'Ladoo': {cost: 0.5, quantity: 100}
  },
  
  currentInventory: function(){
    let value = 0;
    
    for(let dish in AmisKitchen){
      let typeDish = AmisKitchen[dish];
      if(typeof typeDish === 'object'){
        for(let sub in typeDish){
          let info = typeDish[sub];
          value += info.cost * info.quantity;
        }
      }
    }   
    return value;
    
  },
  cash: 0
};
