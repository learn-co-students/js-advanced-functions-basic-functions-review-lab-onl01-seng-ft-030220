// Your code here
const saturdayFun = function(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!` 
}

const mondayWork = function(activity = 'go to the office') {
  return `This Monday, I will ${activity}.` 
}

const wrapAdjective = function(highlight = '*') {
  return function(adj = 'special') {
    return `You are ${highlight}${adj}${highlight}!`
  }
}

const Calculator = {
  add: function(num1, num2) {
    return num1 + num2
  },
  
  subtract: function(num1, num2) {
    return num1 - num2
  },
  
  multiply: function(num1, num2) {
    return num1 * num2
  },
  
  divide: function(num1, num2) {
    return num1 / num2
  }
}

const actionApplyer = function(integer, actions) {
  return actions.reduce((total, currentAction) => {
    return currentAction(total)
  }, integer)
}