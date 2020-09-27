/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let capitalized = s.toUpperCase();
    let sum =0;
    for(let i=s.length-1; i>=0; i--){
        let calibrated = capitalized[i].charCodeAt() - 64;
        sum += Math.pow(26, s.length-1 - i) * calibrated;
    }
    return sum
};