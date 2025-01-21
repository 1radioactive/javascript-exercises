const removeFromArray = function(testArray, ...testElements) {
    const newArray = [];
    testArray.forEach(element => {
        if (!testElements.includes(element)){
            newArray.push(element);
        }
    });

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
