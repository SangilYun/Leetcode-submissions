/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let input =n;
    let seen = new Set();
    while(input!==1 ){
        let arr = [...""+input];
        let sum = arr.reduce( (acc, curr) => acc+Math.pow(Number(curr),2), 0);
        input = sum;
        
        if(seen.has(input)){
            return false;
        }
        
        seen.add(input)
    }
    return true;
};