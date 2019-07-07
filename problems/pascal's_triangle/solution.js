/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let pa = [];
    for(let i=0; i<numRows; i++){
        pa.push([]);
        for(let j=0; j<=i; j++){
            if(j===0 || j===i){
                pa[i][j]=1;
            }else{
                pa[i][j] = pa[i-1][j-1] + pa[i-1][j];
            }
        }
    }
    return pa;
};