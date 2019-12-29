/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//first, find the element.
//second expand from there. when nums[mid] !== target --> return.
// 1,1,2,3,4,4,5,6,6,7 , 1
var searchRange = function(nums, target) {
    return [findStartIndex(nums, target), findEndIndex(nums, target)];
};

const findStartIndex =(nums, target) =>{
    let start = 0;
    let end = nums.length-1;
    let index = -1;
    while(start <= end ){
        let mid = Math.floor((start+ end)/2);
        if(nums[mid] < target) start = mid+1;
        else if(nums[mid] >= target) end = mid-1;
        
        if(nums[mid] === target) index = mid;
    }
    return index;
}

const findEndIndex = (nums, target) =>{
    let start = 0;
    let end = nums.length-1;
    let index =-1;
    while(start <= end ){
        let mid = Math.floor((start+ end)/2);
        if(nums[mid] <= target) start = mid+1;
        else if(nums[mid] > target) end = mid-1;

        if(nums[mid] === target) index = mid;
    }
    
    
    return index;
}