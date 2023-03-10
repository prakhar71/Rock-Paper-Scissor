/**
 * It Checks if the given string is null or whitespace
 * @param input
 * @returns {boolean}
 */
 function isNullOrWhitespace(input) {
    if (typeof input === 'undefined' || input === null) return true;
    return input.replace(/\s/g, '').length < 1;
}


module.exports = {
    isNullOrWhitespace: isNullOrWhitespace
};