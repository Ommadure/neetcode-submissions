class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newStr = s.split(/[^a-zA-Z0-9]/g).join('').toLowerCase()
        let r = newStr.length-1
        let l = 0
        while (l<r){
            if (newStr[l] !== newStr[r]){
                return false
            }
            r--
            l++
        }
        return true
    }
}
