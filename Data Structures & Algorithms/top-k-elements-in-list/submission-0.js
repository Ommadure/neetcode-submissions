class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let result = {};
        for (let i of nums){
            if(result[i]){
                result[i] += 1
            }
            else{
                result[i] = 1
            }
        }
    return Object.entries(result).sort((a,b)=>b[1]-a[1])
    .slice(0,k)
    .map(entry=>Number(entry[0]))
        
    }
}
