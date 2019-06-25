/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length) return false;
    let table = new Array(26).fill(0);
    let offSet = 'a'.charCodeAt(0)
    for(let i=0; i<s.length; i++){
        table[s.charCodeAt(i)-offSet]++;
        table[t.charCodeAt(i)-offSet]--;
        
    }
    
    for(let i=0; i<table.length; i++){
        if(table[i]!==0){
            return false;
        }
    }
    return true;
};