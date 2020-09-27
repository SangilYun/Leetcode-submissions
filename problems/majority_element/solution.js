/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let curr;
    nums.map(each => {
        if(count === 0 ){
            curr = each;
        }
        count += each === curr ? 1 : -1;
    })
    return curr
};