const reverseString = function(text) {
        const words = text.split("");
        const newSentence = [];
        for (const word of words) {
            newSentence.unshift(word);
        }
        return newSentence.join("");

    };

// Do not edit below this line
module.exports = reverseString;
