/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    //[4,5,6,7,0,1,2]
    
    let startIndex = 0;
    let endIndex = nums.length-1;
    [4,5,6,7,0,1,2]
    while(startIndex < endIndex){
        let middleIndex = calculateMiddleIndex(startIndex, endIndex);
        if(nums[endIndex] < nums[middleIndex]){
            startIndex = middleIndex+1;
        }else{
            endIndex = middleIndex;
        }
    }
    //when the loop breaks, the startIndex will be at the index of the smallest element
    let left = 0;
    let right = nums.length-1;
    
    if(nums[startIndex] <= target && target <= nums[right]){
        //do binary search
        left = startIndex;
    }else{
        //the other side
        right = startIndex;
    }
    
    [0,1,2,4,5,6,7]
    while(left <= right){
        let middle = calculateMiddleIndex(left, right);
        if(nums[middle] === target) return middle;
        else if(nums[middle] > target) right = middle-1;
        else left = middle+1;
    }
    
    return -1;
};

const calculateMiddleIndex = (startIndex, endIndex) => Math.floor((startIndex+endIndex)/2);