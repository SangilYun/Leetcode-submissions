/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n===1) return "1";
    if(n===2) return "11";
    let theString = countAndSay(n-1);
    let count =1;
    let result ="";
    for(let i=0; i<theString.length-1; i++){
        if(theString[i] === theString[i+1]){
            count ++;
        }
        else{   //if not the same, initialize count to 1
            result += count+ theString[i];
            count =1;
        }
    }
    result+= count + theString[theString.length-1];
    return result;
};
