/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    //make an array 1~n
    let arr =[];
    for(let i=1; i<=n; i++){
        arr.push(i);
    }
    
    //factorial lookup
    let factorial = [1];
    let val = 1;
    for(let i=1; i<=n; i++){
        val *= i;
        factorial.push(val);
    }
    
    //permutation that start with each num in arr = (n-i)!
    //meaning, in this example array, [1,2,3], 
    // each element in this array 1,2,3 have 2 permutation each with the remaining number. 
    // ex) 1 & permutation of [2,3] , 2 & permutation of [1,3], 3 & permutation of [1,2]
    //n-i --> since each loop eliminate one element in the arr
    k--;
    let answer= "";
    for(let i=1; i<=n; i++){
        let index = Math.floor(k/factorial[n-i]);
        answer += arr[index];
        arr.splice(index,1);
        k -= index * factorial[n-i];
    }
    return answer;
};