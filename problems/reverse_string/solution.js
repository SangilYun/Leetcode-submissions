/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    helper(0, s.length-1, s);
};

function helper(left, right, s){
    if(left > right) return ;
    [s[left], s[right]] = [s[right], s[left]];
    helper(left+1, right-1, s);
}