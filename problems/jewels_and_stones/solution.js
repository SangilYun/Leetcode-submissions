/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    const set = new Set(J);
    let count = 0;
    for(let i=0; i<S.length; i++){
        if(set.has(S[i])){
            count ++;
        }
    }
    return count;
};