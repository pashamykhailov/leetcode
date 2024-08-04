function longestPalindrome(s: string): string {
    const strLength = s.length;
    if(strLength === 0) return "";

    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        let len1 = expandedAroundCenter(s, i, i); // for odd
        let len2 = expandedAroundCenter(s, i, i + 1); // for even
        let len = Math.max(len1, len2);

        // we need to change start and end depend on len 
        if(len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    return s.substring(start, end + 1);

    
};
function expandedAroundCenter(str, left, right) {
    while(left >= 0 && right < str.length && str[left] === str[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}