// From https://www.reddit.com/r/dailyprogrammer/comments/52enht/20160912_challenge_283_easy_anagram_detector/d7nu89w
function identity(string) {
    return string.toLowerCase().replace(/\s+/g, '') // set string to lowercase, replace all whitespace with '' my solution would be to use /[^a-z]/ instead to replace all non a-z characters
        .split('').sort().join('') // split string into an array of characters, sort, and join together again
}

function areAnagrams(left, right) {
    return identity(left) === identity(right) // compare the two strings in plaintext, sorted
}

function summarizeLine(line) {
    const [_, left, right] = /"(.+)" \? "(.+)"/g.exec(line) // takes string and matches using .exec() so that left = the first "(.+)" and right = the second, everything goes to _, explained further in information.txt
    return areAnagrams(left, right) // method that returns t/f
        ? `"${left}" is an anagram of "${right}"` // if true
        : `"${left}" is NOT an anagram of "${right}"` // else
}

function processInput(input) {
    return input.split('\n').map(summarizeLine).join('\n') // explained further in information.txt
}