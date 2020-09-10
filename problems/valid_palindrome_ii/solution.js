/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let i =0;
    let j = s.length-1;
    while(i < j){
        if(s[i] !== s[j]){
            return isPalindrome(s, i+1, j) || isPalindrome(s, i, j-1);
        }
        i++;
        j--;
    }
    return true;
};

const isPalindrome = (string, i, j) =>{
    while(i < j){
        if(string[i++] !==string[j--]){
            return false;
        }
    }
    return true;
}