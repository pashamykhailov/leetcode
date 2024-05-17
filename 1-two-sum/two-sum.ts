function twoSum(nums: number[], target: number): number[] {
    let h = {};
    for (let i = 0; i < nums.length; i++) {
        let c = target - nums[i];
        if(h[c] !== undefined) {
           return [h[c], i];
        } else {
            h[nums[i]] = i;
        } 
    }
  return [];
};