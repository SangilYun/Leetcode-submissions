/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const pathMatrix = new Array(m).fill(new Array(n).fill(1));
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            pathMatrix[i][j] = pathMatrix[i][j - 1] + pathMatrix[i - 1][j]; 
        }
    }
    
    return pathMatrix[m - 1][n - 1];
};
