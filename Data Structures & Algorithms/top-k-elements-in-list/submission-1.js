class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(arr, k) {
        let freq = {}
    for (let i = 0; i<arr.length; i++){
        if(freq[arr[i]]){
            freq[arr[i]]++
        }
        else{
            freq[arr[i]] = 1;
        }
    }
    let buckets = [];
    for (let i= 0; i <= arr.length; i++){
        buckets.push([])
    }
    for(let num in freq){
        let count = freq[num]
        buckets[count].push(Number(num))
    }
    
    let result = [];
    
    for (let i = 0; i < buckets.length; i++){
        result.push(...buckets[i])
    }
    return(result.slice(result.length-k,result.length))
    }
}
