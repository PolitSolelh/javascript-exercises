const removeFromArray = function(array) {
    const index = array.indexOf(3);
    
    if (index > -1) {
    array.splice(index, 1);
    }
    
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
