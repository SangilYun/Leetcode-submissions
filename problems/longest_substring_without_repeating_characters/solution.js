/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let startIndex = 0;
    let endIndex = 0;
    let max =0;
    let set = new Set();
    
    while(endIndex < s.length){
        if(set.has(s[endIndex])){
            set.delete(s[startIndex++]);
        }else{
            set.add(s[endIndex++]);
            max = Math.max(set.size, max);
        }
    }
    return max;
};