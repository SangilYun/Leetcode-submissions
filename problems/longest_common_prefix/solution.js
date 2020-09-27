/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length ===0){
        return '';
    }
    if(strs.length === 1){
        return strs[0];
    }
    let result = '';
    let index = 0;
    for(let i=0; i<strs[0].length; i++){
        const currentChar = strs[0][i]
        for(let j=1; j<strs.length; j++){
            const currentString = strs[j];
            const charToCompare = currentString[index];
            if(currentChar !== charToCompare ){
                return result;
            }
        }
        result += currentChar;
        index ++;
    }
    return result;
    
};