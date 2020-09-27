/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let answer = [];
    helper(answer, n, n, [], 0)
    return answer;
};

function helper(answer, leftRem, rightRem, list, index){
    if(leftRem < 0 || rightRem < leftRem) return ;
    if(leftRem === 0 && rightRem ===0) answer.push(list.join(''));
    else{
        list[index] = '(';
        helper(answer, leftRem-1, rightRem, list, index+1);
        list[index] = ')';
        helper(answer, leftRem, rightRem-1, list, index+1);    
    }
}