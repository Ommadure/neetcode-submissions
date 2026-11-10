class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let values={}
        let result = []
        for (let i=0; i<nums.length;i++){
            if (target-nums[i] in values){
                result.push(i,values[target-nums[i]])
            }
            else{
                values[nums[i]] = i
            }
        }
        return result
    }
}
