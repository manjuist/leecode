/**
 * name: twoSum.js
 * author: Deve
 * date: 2021-01-27
 */

interface SelfCache{
    [index: number]: number;
}

/**
 * twoSum.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums: number[], target: number): number[] {
    const cache: SelfCache = {};
    const len = nums.length;
    for(let i = 0; i < len; i++){
        const cur = nums[i];
        const reduceDiff: number = target - cur;
        if(reduceDiff in cache){
            return [cache[reduceDiff], i];
        }
        cache[cur] = i;
    }
    return [];
};

export default twoSum;
