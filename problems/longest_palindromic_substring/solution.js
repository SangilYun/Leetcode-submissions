/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let n = s.length;
    if(!s || n <2) return s;
    let left =0;
    let right =0;
    let isPalindrome = [...new Array(n)].map(()=>new Array(n));
    for(let end=1; end<n; end++){
        for(let start=0; start < end; start ++){
            let isInnerWordPalindrome = isPalindrome[start+1][end-1] ||end - start <=2;
            if(s[start] === s[end] && isInnerWordPalindrome){
                isPalindrome[start][end] = true;
                if(end-start > right-left){
                    left = start;
                    right = end;
                }
            }
        }
    }
    return s.substring(left, right+1);
};