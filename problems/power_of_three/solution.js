/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let number = n
    while(number>1){
        number /= 3;
    }
    if(number === 1){
        return true;
    }
    return false;
    
};