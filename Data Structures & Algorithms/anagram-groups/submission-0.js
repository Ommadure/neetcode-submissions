class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    let result = {}
    for (let i of strs){
        let sorted_str = i.split('').sort().join('')
        if (result[sorted_str]){
            result[sorted_str].push(i)
        }
        else{
            result[sorted_str] = [i]
        }
    }
    return Object.values(result)
}
}
