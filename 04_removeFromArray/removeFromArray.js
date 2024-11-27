const removeFromArray = function(array, ...removedValues) {

    for(removedValue of removedValues) {
        let n = 0;
        for(let i = 0; i < array.length; i++ ) {
            if(array[i] == removedValue)
                n++;
        }

        const index = array.indexOf(removedValue);
        
        if (index > -1) {
        array.splice(index, n);
        };
    };
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
