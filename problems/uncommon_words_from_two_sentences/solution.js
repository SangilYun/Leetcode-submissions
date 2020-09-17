/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    const map = new Map()
    const a = A.split(' ')
    const b = B.split(' ')
    for(let i=0; i<a.length; i++){
        if(map.has(a[i])){
            map.set(a[i], -1);
        }else{
            map.set(a[i], 1);
        }
    }
    
    for(let i=0; i<b.length; i++){
        if(map.has(b[i])){
            map.set(b[i], -1);
        }else{
            map.set(b[i], 1);
        }
    }
    
    return [...map].map(([key, value])=>{
        if(value === 1){
            return key
        }
    }).filter(Boolean)
};