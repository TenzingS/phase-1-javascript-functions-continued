function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(event = "go to the office"){
    return `This Monday, I will ${event}.`;
}

function wrapAdjective(String = "*"){
    return function(adj = "special"){
        return `You are ${String}${adj}${String}!`;
    }
}
