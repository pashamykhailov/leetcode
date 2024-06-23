function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dH = new ListNode(0);
    let cur = dH;
    let carry = 0;
    
    while(l1 !== null || l2 !== null) {
        let x = l1 ? l1.val : 0;
        let y = l2 ? l2.val : 0;    
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
        if(l1 !== null) l1 = l1.next;
        if(l2 !== null) l2 = l2.next;
    }
    if (carry > 0) cur.next = new ListNode(carry);
    return dH.next;
};