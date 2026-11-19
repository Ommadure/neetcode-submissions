class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(arr) {
        let result = [];
    let left = 1;
    for (let i = 0; i<arr.length;i++){
        result[i] = left;
        left = left * arr[i];
    }
    
    let right = 1;
    for (let i = arr.length-1; i>=0; i--){
        result[i] *= right
        right = right * arr[i]
    }
    
    return result
    }
}
