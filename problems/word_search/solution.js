/*
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.



Ex: Given the following board and words…

board =
[
  ['C','A','T','F'],
  ['B','G','E','S'],
  ['I','T','A','E']
]
word = "CAT", return true
word = "TEA", return true
word = "SEAT", return true
word = "BAT", return false
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            if(helper(board, word, i, j, 0)){
                return true;
            }
        }
    }
    return false;
};

const isOutOfBounds = (board, row, col) =>{
    return row < 0 || row >= board.length || col <0 || col >= board[0].length;
}
const helper= (board, word, row, col, index) =>{
    if(index === word.length){
        return true;
    }
    if(isOutOfBounds(board, row, col) ||board[row][col] ===0|| word[index] !==board[row][col]){
        return false;
    }

    const currentLetter = board[row][col];
    board[row][col]='0'
    const result =  helper(board, word, row+1, col, index+1) || 
        helper(board, word, row, col+1, index+1) ||
        helper(board, word, row-1, col, index+1) || 
        helper(board, word, row, col-1, index+1)
    board[row][col]=currentLetter;
    return result;
}