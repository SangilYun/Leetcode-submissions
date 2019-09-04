/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(n, d) {
    if(!n) return '0';
    let result = '';
    if (Math.sign(n) !== Math.sign(d)) result += '-';
    n = Math.abs(n);
    d = Math.abs(d);
    result += Math.floor(n/d);
    let remainder = n%d;
    
    let map = {};
    if(remainder) result+= '.';
    while(remainder!==0){
        map[remainder] = result.length;
        
        remainder *= 10;
        result += Math.floor((remainder/d));
        remainder %=d;
        
        let startIndex = map[remainder];
        if(startIndex) return result.substr(0,startIndex)+ '('+result.substr(startIndex)+')'
        
    }
    return result;
};