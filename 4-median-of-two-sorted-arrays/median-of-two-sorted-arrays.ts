function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const firstArrLength = nums1.length;
    const secondArrLength = nums2.length;
    if(firstArrLength > secondArrLength) {
        return findMedianSortedArrays(nums2, nums1);
    }


    const totalLength = firstArrLength + secondArrLength;
    const halfLength = Math.floor(totalLength / 2);

    let start = 0;
    let end = firstArrLength;

    while(start <= end) {
        const pivotFistArr = Math.floor((start + end) / 2);
        const pivotSecondArr = halfLength - pivotFistArr;

        const firstArrLeftItem = pivotFistArr === 0 ? Number.NEGATIVE_INFINITY : nums1[pivotFistArr - 1];
        const firstArrRightItem = pivotFistArr === firstArrLength ? Number.POSITIVE_INFINITY : nums1[pivotFistArr];

        const secondArrLeftItem = pivotSecondArr === 0 ? Number.NEGATIVE_INFINITY : nums2[pivotSecondArr - 1];
        const secondArrRightItem = pivotSecondArr === secondArrLength ? Number.POSITIVE_INFINITY : nums2[pivotSecondArr];

        if(firstArrLeftItem <= secondArrRightItem && secondArrLeftItem <= firstArrRightItem) {
            if (totalLength % 2 === 0) {
                // here we need 
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