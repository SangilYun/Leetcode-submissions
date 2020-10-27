/*
 Given a list of positive numbers without duplicates and a target number, find all unique combinations of the numbers that sum to the target. 
 Note: You may use the same number more than once.

Ex: Given the following numbers and target…

numbers = [2,4,6,3], target = 6,
return [
    [2,2,2],
    [2,4],
    [3,3],
    [6]
]
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    helper(candidates, target, result, [], 0);
    return result;
};

const helper = (candidates, target, result, tempArr, start) =>{
    if(target < 0){
        return;
    }
    if(target === 0){
        result.push(tempArr.slice()); //⭐️push a copy of tempArr⭐️
        return;
    }
    for(let i=start; i<candidates.length; i++){
        tempArr.push(candidates[i]);
        helper(candidates, target-candidates[i], result, tempArr, i);
        tempArr.pop()
    }
}

/*
Runtime: O(N^T) where N is our total number of numbers and T is our target. This results from having N choices at each of our T states.
Space complexity: O(T) where T is our target. This results from having at most T calls on our stack from our recursive calls.
*/