const sumAll = function(...args) {
    const newArray = [];

    for(let arg of args) {
        if(arg >= 0) {
            arg += newArray;
        }
    };
};

// Do not edit below this line
module.exports = sumAll;
