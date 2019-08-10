/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length ===0) return true;
    let left = 0;
    let right = s.length-1;
    let regex = /[a-z0-9]/i
    while(left <= right){
        if(!regex.test(s[left])) left ++;
        else if(!regex.test(s[right])) right--;
        else if(s[left++].toLowerCase()!==s[right--].toLowerCase()) return false;
    }
    return true;
};