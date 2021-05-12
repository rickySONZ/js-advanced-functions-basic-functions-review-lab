// Your code here
function saturdayFun(str = 'roller-skate'){
    return `This Saturday, I want to ${str}!`
}

function mondayWork(str = 'go to the office'){
    return `This Monday, I will ${str}.`
}

function wrapAdjective(wrap = '*') {
    return function prompt(str = 'special'){
        return `You are ${wrap}${str}${wrap}!`
    }

}

const Calculator = {
    add(a,b){
        return a + b
    },

    subtract(a,b){
        return a - b
    },

    multiply(a, b){
        return a * b
    }, 

    divide(a,b){
        return a / b
    }
}

function actionApplyer(start, arr){
    for (let i = 0; i < arr.length; i++){
        start = arr[i](start);
    }
    return start
}