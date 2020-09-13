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
        if(map.has(t[i])){
            map.set(t[i], map.get(t[i]) -1); 
        }else{
            return t[i]
        }
    }
    
    for([key, value] of map.entries()){
        if(value !==0){
            return key
        }
    }
        
};