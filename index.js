// code your solution here
function saturdayFun(activity){
    if (activity){
        return `This Saturday, I want to ${activity}!`;
    } else {
        return 'This Saturday, I want to roller-skate!'
    }
};

const mondayWork = function(activity = 'go to the office'){
    if (activity){
        return `This Monday, I will ${activity}.`;
    }
};

function wrapAdjective(wrap = '*'){
    return function(msg = 'special'){
        return `You are ${wrap}${msg}${wrap}!`;
    }
}