/*Example 1:
Input: s = "Hello World"
1. Split the string into an array of words.
2. Find the last word in the array.
3. Calculate the length of this word.
*/
let s = "Hello World";
let words = s.split(" ");
let lastWord = words[words.length - 1];
let lengthOfLastWord = lastWord.length;
console.log("Length of the last word:", lengthOfLastWord);

/*Example 2:
Input: s = " fly me to the moon "
1. Trim the String
2. Split the String into Words
3. Identify the Last Word
4. Calculate the Length of the Last Word
5. Return the length
*/
let s1=" fly me to the moon ";
let trim=s1.trim();
let word=trim.split(" ");
let last=word[word.length-1];
let length=last.length;
console.log("Length of the last word:", length);

/*Example 3:
Write a function to check if two strings are anagrams.
Input: isAnagram('listen', 'silent')
Output: true
Input: isAnagram('hello', 'world')
Output: false
Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
1. Remove spaces and convert all letters to the same case
2. Sort the Characters
3. Compare Sorted Strings
4. Return the Result
*/
function isAnagram(s2, s3) {

    s2 = s2.toLowerCase();
    s3 = s3.toLowerCase();

    if (s2.split("").sort().join("") === s3.split("").sort().join("")) {
        return true;
    } else {
        return false;
    }
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));  
