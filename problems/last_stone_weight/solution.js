/*
We have a collection of stones, each stone has a positive integer weight.

Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)
*/

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while(stones.length >=2){
        const sorted = stones.sort((a,b)=>a-b);
        const left = Math.abs(sorted.pop() - sorted.pop());
        if(Math.abs(left)!==0){
            sorted.push(left)
        }
    }
    return stones[0] ? stones[0] : 0
};

//we can reduce the runtime down to O(NlogN) by maintaining stones in PriorityQueue.