const repeatString = function(string,numToRepeat) {
    let returnString = '';
    for(let i = 0; i < numToRepeat; i++) {
        returnString += string;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
