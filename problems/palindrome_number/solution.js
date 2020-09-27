/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    let stringified = [...x+""];
    let start = 0;
    let end = stringified.length-1;
    
    while(start< end){
        if(stringified[start] !== stringified[end]) return false;
        start ++;
        end --;
    }
    return true;
};