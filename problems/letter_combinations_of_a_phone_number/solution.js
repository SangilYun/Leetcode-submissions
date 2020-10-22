/*
This question is asked by Google. Given a string of digits, return all possible text messages those digits could send. Note: The mapping of digits to letters is as follows…

0 -> null
1 -> null
2 -> "abc"
3 -> "def"
4 -> "ghi"
5 -> "jkl"
6 -> "mno"
7 -> "pqrs"
8 -> "tuv"
9 -> "wxyz"
Ex: digits = "23" return ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
*/


/**
 * @param {string} digits
 * @return {string[]}
 */

const digitToString = {
    0:null,
    1:null,
    2:"abc",
    3:"def",
    4:"ghi",
    5:"jkl",
    6:"mno",
    7:"pqrs",
    8:"tuv",
    9:"wxyz"
}

var letterCombinations = function(digits) {
    if(!digits){
        return [];
    }
    const result =[];
    helper("", digits, result, 0);
    return result;
};

const helper= (str, digits, result, digitsIndex) =>{
    if(digitsIndex >= digits.length){
        result.push(str);
        return;
    }

    const digitStr = digitToString[digits[digitsIndex]];
    for(let j=0; j<digitStr.length; j++){
        helper(str+digitStr[j], digits, result, digitsIndex+1);    
    }
}