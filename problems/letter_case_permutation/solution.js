/*
Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.

Return a list of all possible strings we could create. You can return the output in any order.

 

Example 1:

Input: S = "a1b2"
Output: ["a1b2","a1B2","A1b2","A1B2"]

Example 2:

Input: S = "3z4"
Output: ["3z4","3Z4"]

Example 3:

Input: S = "12345"
Output: ["12345"]

Example 4:

Input: S = "0"
Output: ["0"]
*/

/**
 * @param {string} S
 * @return {string[]}
 */

const isLetter = (string)=>{
    if(!string){
        return false;
    }
    return string.toUpperCase() !== string.toLowerCase();
}
var letterCasePermutation = function(S) {
    const result = [];
    helper(S, 0, result, "")
    return result;
};

const helper=(S, index, result, currentStr)=>{
    if(index >= S.length){
        result.push(currentStr);
        return;
    }
    if(isLetter(S[index])){
        helper(S, index+1, result, currentStr+S[index].toUpperCase());
        helper(S, index+1, result, currentStr+S[index].toLowerCase());
    }else{
        helper(S, index+1, result, currentStr+S[index]);
    }
}