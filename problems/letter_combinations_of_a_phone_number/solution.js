/**
 * @param {string} digits
 * @return {string[]}
 */
const MAPPING = {
        2:'abc',
        3:'def',
        4:'ghi',
        5:'jkl',
        6:'mno',
        7:'pqrs',
        8:'tuv',
        9:'wxyz'
    }
var letterCombinations = function(digits) {
    let result = [];
    helper(result, digits, "", 0);
    return result;
};

function helper(result, digits, curr, index){
    if(digits.length === index){
        if(curr) result.push(curr);
        return;
    }
    
    let letters = MAPPING[digits[index]];
    for(let i=0; i<letters.length; i++){
        helper(result, digits, curr+letters[i], index+1);
    }
}