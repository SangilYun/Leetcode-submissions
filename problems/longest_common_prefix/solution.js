/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return "";

    for(let index=0; index<strs[0].length; index++){
        let temp = strs[0][index];
        for(let i=1; i<strs.length; i++){        
            let str = strs[i];
            if(str[index] !== temp) return str.slice(0, index);
        }
    }
    return strs[0];
};

// var longestCommonPrefix = function(strs) {
//     if(!strs.length) return "";
    
//     for(let i=0; i<strs[0].length; i++){
//         for(str of strs){
//             if( str[i] !== strs[0][i]){
//                 return strs[0].slice(0,i);
//             }
//         }
//     }
//     return strs[0];
// };