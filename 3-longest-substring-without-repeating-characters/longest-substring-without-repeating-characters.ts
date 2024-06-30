function lengthOfLongestSubstring(s: string): number {
    let set = new Set();
    const l = s.length;
    let firstPointer = 0;
    let maxLength = 0;
    let lastPointer = 0;
    while (firstPointer < l && lastPointer < l) {
        if(!set.has(s[firstPointer])) {
            set.add(s[firstPointer]);
            firstPointer++;
            maxLength = Math.max(maxLength, firstPointer - lastPointer);
        } else {
            set.delete(s[lastPointer]);
            lastPointer++;
        }
    }
    return maxLength;
};