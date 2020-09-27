/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let answer =[];
    let currentList = [];
    findCombination(candidates, 0, target, answer, currentList);
    return answer;
};

const findCombination =(candidates, index, target, answer, currentList)=>{
    if(target === 0) answer.push(currentList.slice());
    if(target <0) return ;
    
    for(let i=index; i<candidates.length; i++){
        currentList.push(candidates[i]);
        findCombination(candidates, i, target-candidates[i], answer, currentList);
        currentList.pop();
    }
}