/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let number=0;
    for(let i=0; i<s.length; i++){
        let place = s.length-1-i;
            number+= (Math.pow(26,place)*(s.charCodeAt(i)-64));
    }
    return number;
};