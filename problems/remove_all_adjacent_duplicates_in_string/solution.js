/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    const arr = [];
    for(let i=0; i<S.length; i++){
        if(S[i] === arr[arr.length-1]){
            arr.pop();
        }else{
            arr.push(S[i]);
        }
    }
    
    return arr.join('')
};