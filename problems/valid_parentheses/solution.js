/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length %2 !==0) return false;
    let stack = [];
    for(let i=0; i<s.length; i++){
        let each = s[i];
        if(each ==='(' || each ==='[' || each==='{'){
            stack.push(each);
        }else{
            let lastBracket = stack.pop();
            if(lastBracket ==='(' && each !==')' ||
              lastBracket ==='{' && each !=='}' ||
              lastBracket === '[' && each !==']') return false;
        }
    }
    if(stack.length !== 0) return false;
    return true;
};