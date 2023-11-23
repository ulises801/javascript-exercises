const leapYears = function(year) {
    let state;
    if(year%100 == 0 && year%400 !== 0){
        state = false;
    }else if (year%4 == 0){
        state = true;
    }else {
        state = false;
    }

    return state;
};

// Do not edit below this line
module.exports = leapYears;
