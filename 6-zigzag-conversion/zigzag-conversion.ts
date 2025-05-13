function convert(s: string, numRows: number): string {
    if (numRows <= 1) return s;
    // we need to check edge case to return string if row count 0 or 1
    // create matrix, first of all we need to define amout of rows 
    // we need flag to determine should we going down or up
    // we need to write condition to check whether we going down or up 
    // to count current row we need variable for currRow 
    // also all this code should be in loop 
    // returning result should be concat (in our case join) of all rows into string
    const rows = new Array(numRows).fill('');
    let goingDown = false;
    let currentRow = 0;
    for (let i = 0; i < s.length; i++) {

        rows[currentRow] += s[i];

        if (currentRow === 0 || currentRow == numRows - 1) {
            goingDown = !goingDown;
        }

        currentRow += goingDown ? 1 : -1;
    }

    return rows.join('');
    
};