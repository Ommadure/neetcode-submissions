class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let values = new Set(nums);
    let lss = 0;
   
    for (let i of values){
        
        if(values.has(i-1)){
            continue;
        };
        let current = 1;
        let next = i + 1;
        
        while(values.has(next)){
            current++
            next++
        }
        
        lss = Math.max(lss,current)
    }
    return lss
}
}
