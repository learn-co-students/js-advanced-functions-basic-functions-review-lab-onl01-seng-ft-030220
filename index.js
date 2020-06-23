function saturdayFun(activity= "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(act="go to the office" ){
return `This Monday, I will ${act}.`
}

function wrapAdjective(firstParam= "*"){
    return function(param= "special"){
        return `You are ${firstParam}${param}${firstParam}!`
    }
}

const Calculator = {
    add: function(a, b){
        return a + b 
    },
    subtract: function(a,b){
        return a - b 
    },
    multiply: function(a,b){
        return a * b
    },
    divide: function(a,b){
        return a / b 
    }
}

function actionApplyer(start, fns){
    for (let i = 0; i < fns.length; i ++) {
     start = fns[i](start)

}
return start
}
