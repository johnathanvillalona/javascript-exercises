const removeFromArray = function(array, ...itemsToRemove) {
    for (const item of itemsToRemove) {
        while (array.includes(item)) {
            array.splice(array.indexOf(item), 1)
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
