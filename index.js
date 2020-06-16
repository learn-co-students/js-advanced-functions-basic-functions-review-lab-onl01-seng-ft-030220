function saturdayFun(str = "roller-skate") {
    return `This Saturday, I want to ${str}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`
    }
}

const Calculator = {
    add: (x,y) => {return x + y},
    subtract: (x,y) => {return x - y},
    multiply: (x,y) => {return x * y},
    divide: (x,y) => {return x / y}
}

function actionApplyer(num, arr) {
    if (num.length === 0) {
        return int
    } else {
        return ((num*2)+1000)%7
    }
}
