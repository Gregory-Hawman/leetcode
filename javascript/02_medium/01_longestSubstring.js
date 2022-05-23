// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


// loop through the string
// check if we are repleating a letter
// no? add it to used letters, increase length
// yes? length = 1, add letter and check the next one.
function lengthOfLongestSubstring(string) {
    let maxLength = 0 
    let length = 0
    let usedLetters = {}
    for (let i = 0; i < string.length; i++) {
        if (string[i] in usedLetters) {
            i = usedLetters[string[i]] // set it back to the first of the repeat letters and the loop will i++ to the next letter
            usedLetters = {}
            length = 0;
        } else {
            usedLetters[string[i]] = i
            length++
            if (length > maxLength) {
                maxLength = length
            }
        }
    } 
    return maxLength
}

let string1 = 'abcabcbb' // 3
let string2 = 'bbbbb' // 1
let string3 = 'pwwkew' // 3
let string4 = 'dvdb' // 3

console.log(lengthOfLongestSubstring(string1))
console.log(lengthOfLongestSubstring(string2))
console.log(lengthOfLongestSubstring(string3))
console.log(lengthOfLongestSubstring(string4))