const sumAll = function(start, end) {
    let sum = 0;
    let temp = 0;

    if(start>end){
        temp = start;
        start = end;
        end = temp;
    }else if(start<0){
        return 'ERROR';
    }else if (typeof start !== 'number' || typeof end !== 'number'){
        return 'ERROR';
    }else{

    }

    for(counter = start; counter <= end; counter++){
        sum = sum+counter;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
