/**
 * name: palindrome.ts
 * author: Deve
 * date: 2021-01-28
 */

interface Dp {
    [index:number]: boolean[] }
/**
 * longestPalindrome.
 *
 * @param {String} str
 * @return {String}
 */
function longestPalindrome(str: string): string {
    const len:number = str.length;
    if(len < 2){
        return str;
    }
    let begin:number = 0;
    let maxLen:number = 1;
    let end:number = 1;
    let dp: Dp = [];
    for(let m:number = 0; m < len; m++){
        dp[m]=[];
        for(let n:number = 0; n< len; n++){
            if(m===n){
                dp[m][n] = true
            }else{
                dp[m][n] = false
            }
        }
    }
    for(let j:number = 1; j<len; j++){
        for(let i:number = 0; i<len; i++){
            if(str[i] === str[j]){
                if(j-i<3){
                    dp[i][j] = true
                }else{
                    dp[i][j] = dp[i+1][j-1]
                }
            }

            const newLen = j-i+1
            if(dp[i][j] && newLen>maxLen){
                maxLen = newLen
                end = j+1
                begin = i
            }
        }
    }

    return str.slice(begin,end)
};

export default longestPalindrome;
