const sumAll = function(value1, value2) {
    let sum = 0;
    let lower = Math.min(value1, value2);
    let upper = Math.max(value1, value2);

    for(let i = lower; i <= upper; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
