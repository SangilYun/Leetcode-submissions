/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let positive = true;
    if(x<0) {
        positive = false;
        x*=-1;
    }
    
    let result = 0;
    while(x>0){
        result = (result *10) + x%10;
        x = Math.floor(x/10);    
    }
    
    result = !positive ? result*-1 : result;    
    return (result >= -2147483648 && result<= 2147483648 )? result : 0;
};

