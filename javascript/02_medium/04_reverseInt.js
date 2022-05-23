// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

function reverseInt(num) {
    let absolute = Math.abs(num)
    let string = absolute.toString()
    let arr = string.split('')
    let len = arr.length

    for (let i = 0; i < (len - 1) / 2; i++ ) {
        let temp = arr[i]
        arr[i] = arr[len - 1 - i]
        arr[len - 1 - i] = temp
    }

    string = arr.join('')

    if (num < 0){
        let revNum = parseInt(string) * -1
        if (revNum < (2**32 * -1) / 2) {
            return 0
        }
        return revNum
    }
    let revNum = parseInt(string)
    if (revNum > 2**32 / 2) {
        return 0
    }
    return revNum
}

let num1 = 123
let num2 = -123
let num3 = 1563847412

console.log(reverseInt(num1))
console.log(reverseInt(num2))
console.log(reverseInt(num3))