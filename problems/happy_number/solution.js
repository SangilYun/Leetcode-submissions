/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set();
    while(true){
        let sum =0;
        for(let char of n.toString()){
            sum += char*char;    
        }
        if(sum === 1) return true;
        if(set.has(sum)) return false;
        set.add(sum);
        n = sum;
    }
};