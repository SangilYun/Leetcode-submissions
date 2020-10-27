/*
Given a string s, return all possible partitions of s such that each substring is a palindrome.

Ex: Given the following string s…

s = "abcba",
return [
    ["a","b","c","b","a"],
    ["a","bcb","a"],
    ["abcba"]
]
*/

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const result = [];
    helper(s, result, [], 0);
    return result;
};

const isPalindrome = str => str === [...str].reverse().join("");

const helper = (str, result, temp, start)=>{
    if(start === str.length){
        result.push([...temp]); //or result.push(temp.slice());
    }
    for(let i=start+1; i<=str.length; i++){
        const sliced = str.slice(start, i);
        if(isPalindrome(sliced)){
            temp.push(sliced);
            helper(str, result, temp, i);
            temp.pop();
        }

    }
}