const reverseString = function(string) {
    let origString = ['']
    for(let i = 0; i < string.length; i++) {
        origString.push(string.charAt(i));
    }
    return origString.reverse().join('');

};

// Do not edit below this line
module.exports = reverseString;
