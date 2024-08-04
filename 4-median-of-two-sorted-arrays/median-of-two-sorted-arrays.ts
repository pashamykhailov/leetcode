function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const firstArrLength = nums1.length;
    const secondArrLength = nums2.length;
    // here we defining length of both arrays

    // here we covering edge case if first array length more than second arr length
    if(firstArrLength > secondArrLength) {
        return findMedianSortedArrays(nums2, nums1);
    }

    // total length of combined arr and half len

    const totalLength = firstArrLength + secondArrLength;
    const halfLength = Math.floor(totalLength / 2);

    // bounrdries for binary search 
    let start = 0;
    let end = firstArrLength;

    while(start <= end) {
        // we need this and especially second pivot calculate from first pivot do move 
        // dynamicly between two arrays independently
        const pivotFistArr = Math.floor((start + end) / 2);
        const pivotSecondArr = halfLength - pivotFistArr;

        const firstArrLeftItem = pivotFistArr === 0 ? Number.NEGATIVE_INFINITY : nums1[pivotFistArr - 1];
        const firstArrRightItem = pivotFistArr === firstArrLength ? Number.POSITIVE_INFINITY : nums1[pivotFistArr];

        const secondArrLeftItem = pivotSecondArr === 0 ? Number.NEGATIVE_INFINITY : nums2[pivotSecondArr - 1];
        const secondArrRightItem = pivotSecondArr === secondArrLength ? Number.POSITIVE_INFINITY : nums2[pivotSecondArr];

        // conditions to define if we match needed elems with binary
        // we need compare values like cross to cross to check 
        // if all elements from both array on left side is lower 
        // than all elements from both arr at right side (don't forget input = sorted arrays)

        if(firstArrLeftItem <= secondArrRightItem && secondArrLeftItem <= firstArrRightItem) {
            if (totalLength % 2 === 0) {
                // here we need calculate left first and left second 
                return (Math.max(firstArrLeftItem, secondArrLeftItem) + Math.min(firstArrRightItem, secondArrRightItem)) / 2;
            } else {
                return Math.min(firstArrRightItem, secondArrRightItem);
            }
        } else if(firstArrLeftItem > secondArrRightItem) {
            end = pivotFistArr - 1;
        } else {
            start = pivotFistArr + 1;
        }
    }


};