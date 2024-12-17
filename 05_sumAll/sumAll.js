const sumAll = function(value1, value2) {
    if(
    typeof value1 === "number" &&
    typeof value2 === "number"
    ) {    
        let lower = Math.min(value1, value2);
        let upper = Math.max(value1, value2);

        if(
            lower > 0 &&
            Number.isInteger(lower) === true &&
            Number.isInteger(upper) === true
        ) {
            let sum = 0;
            for(let i = lower; i <= upper; i++){
            sum += i;
            }
        
        return sum;
        }

        else {
            return sum = "ERROR";
        };
    }

    else {
        return sum = "ERROR";
    };
};

// Do not edit below this line
module.exports = sumAll;
