// loop through the string
    // add the new letter to maybePalindrome array
    // check if maybePalindrome is a palindrome
        // if it is a palindrome check if it's length is longer than the length of maxPalindrome
        // if not then continue
        // if it's not a palindrome and that wasn't the last letter: continue
        // if it's not a palindrome and it was the last letter move the start, clear maybePalindrome, and start over
// loop finished, check if we found a palindrome
    // if yes return palindrome
    // if not return -1

var longestPalindrome = function(s) {
    let len = s.length
    let start = 0
    let maybePalindrome = []
    let maxPalindrome = []
    let i = 0
    if (len === 1) {
        return s
    }
    while (start < len - 1) {
        maybePalindrome.push(s[i])
        if (s[i] === s[start]) {
            let isPal = checkPalindrome(maybePalindrome)
            if (isPal) {
                if (maybePalindrome.length > maxPalindrome.length) {
                    maxPalindrome = []
                    for (let j of maybePalindrome) {
                        maxPalindrome.push(j)
                    }
                } else {
                    if (i === len - 1) {
                        start++
                        maybePalindrome = []
                        i = start - 1
                    }
                    i++
                    continue;
                }    
            }   
        }
        if (i === len - 1) {
            start++
            maybePalindrome = []
            i = start - 1
        }
        i++
    }
    if (maxPalindrome.length > 0) {
        return maxPalindrome.join('')
    } else {
        return -1
    } 
};

function checkPalindrome(string) {
    let len = string.length
    for (let i = 0; i < len / 2; i++){
        if (string[i] !== string[len - 1 - i]){
            return false
        }
    }
    return true
}

let string1 = 'babad';
let string2 = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
let string3 = 'abbabcdeffedcba';

console.log(longestPalindrome(string1));
console.log(longestPalindrome(string2));
console.log(longestPalindrome(string3));

// dont go between strings and arrays