/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length){
        return false;
    }
    const map = new Map();
    for(let i=0; i<s.length; i++){
        const plus= s[i];
        const minus = t[i];
        if(map.has(plus)){
            map.set(plus, map.get(plus)+1);
        }else{
            map.set(plus, 1);
        }
        
        if(map.has(minus)){
            map.set(minus, map.get(minus)-1);
        }else{
            map.set(minus,-1);
        }
    }
    return [...map.values()].filter(value=>value!==0).length ===0 ? true : false
};