/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let primes = new Array(n).fill(true);
    for(let i=2; i*i< primes.length; i++){
        if(primes[i]){
            for(let j=i; j*i<primes.length; j++){
                primes[i*j] = false;
            }
        }
    }
    return primes.reduce((acc, curr, idx)=>{
        if(idx!==0 && idx!==1 && curr) acc++;
        return acc;
    },0)
};