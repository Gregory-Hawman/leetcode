// Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

// loop through the string
// if the letter is not in the usedletters yet, add it
// if it is:
    // find the first time a letter repeats
    // check that the letters in between are equal and that their indexs are both odd or both even numbers
    // like the palidrome is odd length there will be a solo letter

// first letter is the trigger letter, we are looking for if that one is repeated (the last time it is repeated)
// if it is never repeated no palindrome
// if it is check that it is the last time it is repeated
// if it is, check that the string is a palindrome
    // if not no palindrome, start from next letter
// if it is check and see if it is longer that the longest one found before
// if it is save that palindrome and loop through the rest of the string and return integer

function longestPalindromeSubstring(string) {
    let start = 0
    let palindrome = []
    let maxPalindrome = []
    for (let i = 0; i < string.length; i++) {
        console.log(palindrome)
        console.log(start)
        if (string[i] === string[start]) {
            palindrome.push(string[i])
            let isPal = palindromeCheck(palindrome.join)
            if (isPal) {
                if (palindrome.length > maxPalindrome.length) {
                    maxPalindrome = palindrome
                    console.log(maxPalindrome)
                } else {
                    continue;
                }
            } else {
                palindrome = []
                start++
                i = start
            }
        } else if (i !== string.length -1){
            palindrome.push(string[i])
        } else {
            palindrome = []
            start++
            i = start
        }
    }
    let lastCheck = palindromeCheck(maxPalindrome.join)
    if (lastCheck) {
        return maxPalindrome
    } else {
        return -1
    }

}

function palindromeCheck(string) {
    let len = string.length
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== (string[len - 1 - i])) {
            return false
        } 
    }
    return true
}

// let string1 = 'baabbad';
let string2 = 'cbbd';
// let string3 = 'ababa';
// let string4 = 'abbaabbcdeffedc';
// let string5 = 'abcdbacdeedc';

// console.log(longestPalindromeSubstring(string1))
console.log(longestPalindromeSubstring(string2))
// console.log(longestPalindromeSubstring(string3))
// console.log(longestPalindromeSubstring(string4))
// console.log(longestPalindromeSubstring(string5))