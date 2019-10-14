/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];    
    helper(numRows, result);
    return result;
};



function helper(numRows, result){
    if(numRows === 1) result.push([1]);
    else if(numRows >1){
        helper(numRows-1, result);
        let prev = result[numRows-2];
        let arr = [];
        for(let i=0; i<prev.length; i++){
            if(i ===0) arr.push(1);
            if(i>0)arr.push(prev[i-1] + prev[i]);
            if(i === prev.length-1) arr.push(1);
        }
        result.push(arr);
    }
}