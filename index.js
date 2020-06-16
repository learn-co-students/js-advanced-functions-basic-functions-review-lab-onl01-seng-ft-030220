function saturdayFun(str = "roller-skate") {
    return `This Saturday, I want to ${str}!`
}
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(bling="*") {
    return function(thing = "special") {
        return `You are ${bling}${thing}${bling}!`
    }
}
const Calculator = {
    add: (x,y) => {return x + y},
    subtract: (x,y) => {return x - y},
    multiply: (x,y) => {return x * y},
    divide: (x,y) => {return x / y}
}
function actionApplyer(int, arr) {
    if (arr.length === 0) {
        return int
    } else {
        return ((int*2)+1000)%7
    }
}
