// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:
// string convert(string s, int numRows);
 
// Example 1:
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// Example 2:
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// Example 3:
// Input: s = "A", numRows = 1
// Output: "A"

// go down the rows until you hit numRows
// go back up until you are back at zero
function zigZag(s, numRows) {
    let currRow = 0
    let goDown = true
    
    let rows = new Array(numRows).fill('')

    if (numRows === 1) {
        return s
    }

    for (let i = 0; i < s.length; i++){
        if (goDown){
            if (currRow === numRows - 1) {
                goDown = false
                rows[currRow] += s[i]
                currRow = currRow - 1
                continue;
            }
            rows[currRow] += s[i]
            currRow++
            // console.log(rows)
        } else {
            if (currRow === 0) {
                goDown = true
                rows[currRow] += s[i]
                currRow = currRow + 1
                continue;
            }
            rows[currRow] += s[i]
            currRow--
            // console.log(rows)
        }
    }
    return rows.join('')
}

let str1 = 'PAYPALISHIRING' // "PAHNAPLSIIGYIR"
let str2 = "PAYPALISHIRING" // "PINALSIGYAHRPI"
let str3 = "ABCD" // "ACBD"
console.log(zigZag(str1, 3))
console.log(zigZag(str2, 4))
console.log(zigZag(str3, 2))