/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map();
    for(let each of s){
        map.has(each) ? map.set(each, 2) : map.set(each,1)
    }
    
    for(let i=0; i<s.length; i++){
        if(map.get(s[i])===1) return i;
    }
    return -1;
};