class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s.split(/[' '?;,.:!]+/).join('').toLowerCase()
        console.log(str)
        let l = 0;
        let r = str.length-1;

        while (l<r){
            if (str[l] !== str[r]){
                // console.log(l,r,str[l],str[r])
                return false
            }
            l++
            r--
        }
        return true
    }
}
