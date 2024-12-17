const sumAll = function(value1, value2) {
    let lower = Math.min(value1, value2);
    let upper = Math.max(value1, value2);

    if(lower < 0) {
        return sum = "ERROR";
    }

    else if(Number.isInteger(lower) === false || Number.isInteger(upper) === false) {
        return sum = "ERROR";
    }

    else {
        let sum = 0;
        for(let i = lower; i <= upper; i++){
        sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
