/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(!nums) return null;
    
    let permutations = [];
    if(nums.length === 0){
        permutations.push([]);
        return permutations;
    }
    
    let first = nums[0];
    let words = permute(nums.slice(1));
    for(let word of words){
        for(let i=0; i<= word.length; i++){
            if(word.length===0) permutations.push([first]);
            else{
                permutations.push(insertAt(word, first, i));
            }
        }
    }
    return permutations
};

function insertAt(arr, element, index){
    return arr.slice(0, index).concat(element).concat(arr.slice(index));
}