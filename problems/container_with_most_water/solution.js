/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max_volume = 0;
    let startIndex =0;
    let endIndex = height.length-1;
    while(startIndex < endIndex){
        let currVolume = calculateTheVolume(height, startIndex, endIndex);
        max_volume = Math.max(currVolume, max_volume);
        if(height[startIndex] < height[endIndex]) startIndex++;
        else endIndex--;
    }
    return max_volume;
};

const calculateTheVolume = (arr, a, b) =>{
    if(a> arr.length || b>arr.length) return 0;
    let width = Math.abs(a-b);
    let height = Math.min(arr[a], arr[b]);
    return width * height;
}