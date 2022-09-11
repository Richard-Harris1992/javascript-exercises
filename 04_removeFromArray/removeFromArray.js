const removeFromArray = function(arr, num) {
    let newArray = [];
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] !== num) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
