'strict';

module.exports = function (inputWords) {
    return inputWords.reduce(
        function (wordCounts, word) {
            wordCounts[word] = ++wordCounts[word] || 1
            return wordCounts
        },
        {}
    )
}
