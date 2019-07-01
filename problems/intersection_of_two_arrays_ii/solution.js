/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
    let table = nums1.reduce((table, curr)=>{
        table[curr] = table[curr]+1 ||1;
        return table;
    },{})
    
    return nums2.filter(each => {
        if(table[each]){
            table[each]--;
            return true;
        }else{
            return false;
        }
    })
};