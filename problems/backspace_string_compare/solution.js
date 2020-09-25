/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    const arr1 = [];
    const arr2 = [];
    
    for(let i=0; i<S.length; i++){
        if(S[i] === '#'){
            arr1.pop();
        }else{
            arr1.push(S[i])
        }
    }
    
    for(let i=0; i<T.length; i++){
        if(T[i] === '#'){
            arr2.pop();
        }else{
            arr2.push(T[i])
        }
    }
    
    return arr1.join('') === arr2.join('')
};
