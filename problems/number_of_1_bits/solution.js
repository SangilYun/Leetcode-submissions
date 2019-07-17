/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count =[...n.toString(2)].reduce((acc, curr)=>{
        if(curr === '1') {
            return acc+=1;
        }else{
            return acc;
        }
    },0 );
    
    return count
};