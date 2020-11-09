class Solution {
    public boolean PredictTheWinner(int[] nums) {
        int[][] memoize = new int[nums.length][nums.length];
        if (play(nums, 0, nums.length - 1, memoize) >= 0) {
            return true;
        }

        return false;
    }
    
    public int play(int[] nums, int start, int end, int[][] memoize) {
        if (start == end) {
            return nums[start];
        }
        if (memoize[start][end] != 0) {
            return memoize[start][end];
        }

        int left = nums[start] - play(nums, start + 1, end, memoize);
        int right = nums[end] - play(nums, start, end - 1, memoize);
        memoize[start][end] = Math.max(left, right);
        return memoize[start][end];
    }
}
