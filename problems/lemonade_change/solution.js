/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let fives=0;
    let tens=0;

    for(let i=0; i<bills.length; i++){
        const bill = bills[i];
        if(bill === 5){
            fives++;            
        }else if(bill ===10){
            if(fives >0){
                tens++;
                fives--;
            }else{
                return false;
            }
        }else if(bill === 20){
            if(tens>0 && fives >0){
                tens--;
                fives--;
            }else if(fives>=3){
                fives -= 3;
            }else{
                return false;
            }
        }
    }
    return true;
};

// Runtime: O(N) where N is the number of customers we’re given.
// Space complexity: O(1) or constant as the memory we use to solve the problem does not increase as our number of customers increases.