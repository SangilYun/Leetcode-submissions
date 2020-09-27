/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    if(s.length === t.length){
        return '';
    }
    const map = new Map();
    for(let i=0; i<s.length; i++){
        map.has(s[i]) ? map.set(s[i], map.get(s[i])+1) : map.set(s[i], 1);
    }
    
    for(let i=0; i<t.length; i++){
        if(!map.has(t[i]) || map.get(t[i]) === 0){
            return t[i]
        }else{
            map.set(t[i], map.get(t[i]) -1); 
        }
    }
};