/*
In a gold mine grid of size m * n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.

Return the maximum amount of gold you can collect under the conditions:

Every time you are located in a cell you will collect all the gold in that cell.
From your position you can walk one step to the left, right, up or down.
You can't visit the same cell more than once.
Never visit a cell with 0 gold.
You can start and stop collecting gold from any position in the grid that has some gold.
 

Example 1:

Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
Output: 24
Explanation:
[[0,6,0],
 [5,8,7],
 [0,9,0]]
Path to get the maximum gold, 9 -> 8 -> 7.
Example 2:

Input: grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]
Output: 28
Explanation:
[[1,0,7],
 [2,0,6],
 [3,4,5],
 [0,3,0],
 [9,0,20]]
Path to get the maximum gold, 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */

var getMaximumGold = function(grid) {
    let max = -Infinity
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            if(grid[i][j]!==0){
                max= Math.max(max, helper(grid, 0, i, j));    
            }
        }
    }
    return max;
};

const isOutOfBounds = (grid, i,j)=>{
    return i<0 || i>=grid.length || j<0 || j>=grid[i].length;
}

const helper = (grid, current, i, j) =>{
    if(isOutOfBounds(grid, i, j) || grid[i][j]===0|| grid[i][j]==='-'){
        return current;
    }
    
    const gold = grid[i][j];
    grid[i][j] = '-';
    const max = Math.max(helper(grid, current+gold, i+1, j), helper(grid, current+gold, i-1, j), helper(grid, current+gold, i, j+1), helper(grid, current+gold, i, j-1));
    
    grid[i][j] = gold
    return max
    
}