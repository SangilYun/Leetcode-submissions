/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length) return false;
    let table = new Array(26).fill(0);
    const offset = 'a'.charCodeAt();
    for(let i=0; i<s.length; i++){
        let sIndex = s[i].charCodeAt() - offset;
        let tIndex = t[i].charCodeAt() - offset;
        table[sIndex] += 1;
        table[tIndex] -= 1;
    }

    return table.filter(each => each!==0).length>0 ? false:true;
    
    
};