/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let set = new Set();
    for(let row =0; row<9; row++){
        // console.log(set)
        for(let col =0; col<9; col++){
            let num = board[row][col];
            if(num !== '.'){
                if(!set.has(num+" in row"+row)){
                    set.add(num+" in row"+row)
                }else{ 
                    // console.log(1);
                    return false;
                }
                
                if(!set.has(num+" in column"+ col)){
                    set.add(num+" in column"+ col);
                }else{
                    // console.log(2);
                    return false;
                }
                
                if(!set.has(num+' in '+ Math.floor(row/3)+'~'+Math.floor(col/3))){
                    set.add(num+' in '+ Math.floor(row/3)+'~'+Math.floor(col/3));
                }else{
                    // console.log(3)
                    return false;
                }
            }
        }
    }
    return true;
};
