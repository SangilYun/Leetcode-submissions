/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(!grid || !grid.length) return 0;
    let numIsland = 0
    
    for(let row =0; row<grid.length; row++){
        for(let col=0; col<grid[row].length; col++){
            if(grid[row][col] == 1){
                numIsland += dfs(grid, row, col);
            }
        }
    }
    
    return numIsland
};

function dfs(grid, row, col){
    if( row< 0 || row >= grid.length || col<0 || col >= grid[row].length || grid[row][col]==0) return 0;
    grid[row][col] = 0
    dfs(grid, row+1, col);
    dfs(grid, row-1, col);
    dfs(grid, row, col+1);
    dfs(grid, row, col-1);
    
    return 1;
}