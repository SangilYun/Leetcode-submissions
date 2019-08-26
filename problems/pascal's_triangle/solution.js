/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let pascal = [];
    for(let i=0; i<numRows; i++){
        pascal.push([]);
        for(let j=0; j<=i; j++){
            if(j===0 || j ===i){
                pascal[i][j] = 1;
            }else{
                pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j];
            }
        }
    }
    
    return pascal;
};