/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let arr = [];
    //0, 1 -> return 1
    if(n <=1) return 1;
    else{
        arr.push(1);
        arr.push(1);        
        for(let i=2; i<=n; i++){
            arr[i] = arr[i-1]+arr[i-2];
        }
    }
    return arr[n];

};