// Your code here
// Implement a function called saturdayFun. 
// It should return a String like "This Saturday, I want to ....!" 
// Fill in the ... with the activity that's passed in as the first parameter. 
// If nothing is passed in, default to "roller-skate". 
// Use the learn program to verify you've gotten a working implementation. 
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

// Implement a function called mondayWork. 
// It should return a String like "This Monday, I will ... ." 
// Fill in the ... with the activity that's passed in as the first parameter. 
// If nothing is passed in, default to "go to the office". 
// Use the learn program to verify you've gotten a working implementation.

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}


function wrapAdjective (string="*") {
    return function(a="special") {
        return `You are ${string}${a}${string}!`
    }
}

let Calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    },

    subtract: function(num1, num2) {
        return num1 - num2;
    },

    multiply: function(num1, num2) {
        return num1 * num2;
    },

    divide: function(num1, num2) {
        return num1 / num2;
    },
}

let actionApplyer = function(start, ray) {
    let a = start
  
    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
  
    return a
}