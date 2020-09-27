/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    // brute force ⬇ - runtime : O(N * M) 
    
    // const result = [];
    // for(let i=0; i<nums1.length; i++){
    //     let hasFound = false;
    //     const nums2Index = nums2.indexOf(nums1[i]);
    //     if(nums2Index !==-1){
    //         for(let j=nums2Index; j<nums2.length; j++){
    //             if(nums2[j] > nums1[i]){
    //                 result.push(nums2[j]);
    //                 hasFound = true;
    //                 break;
    //             }
    //         }
    //     }
    //     if(!hasFound){
    //         result.push(-1);
    //     }
    // }
    // return result;
    
    //use stack and hashmap - runtime: O(N+M) where N is the number of elements in nums1 and M is the number of elements in nums2
    const stack = [];
    const hashmap = new Map();
    for(let i=0; i<nums2.length; i++){
        while(stack.length > 0 && stack[stack.length-1] < nums2[i]){
            hashmap.set(stack.pop(), nums2[i]);
        }
       stack.push(nums2[i]);
    }
    
    return nums1.map(n => hashmap.get(n) || -1);
}