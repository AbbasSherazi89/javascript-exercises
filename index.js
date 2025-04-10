// To find the lognest word in a sentence.
const sentence = "Barking up the wrong tree";
let longestWord = "";
const words = sentence.split(" ");
for (let i = 0; i < words.length; i++) {
  if (words[i].length > longestWord.length) {
    longestWord = words[i];
  }
}
console.log(longestWord);

// To find whether the string is palindrome or not.
const str = "was it a cat I saw";
let str1 = str.split(" ").join("").toLowerCase();
let str2 = str1.split("").reverse().join("");

if (str2 === str1) {
  console.log("The string is palindrome.");
} else {
  console.log("The string is not palindrome.");
}

// To find the number of vowels in a string.
const vowel = "Hello World!";
let count = 0;
const lowerCase = vowel.toLowerCase();
for (let i = 0; i < lowerCase.length; i++) {
  if (
    lowerCase[i] == "a" ||
    lowerCase[i] == "e" ||
    lowerCase[i] == "i" ||
    lowerCase[i] == "o" ||
    lowerCase[i] == "u"
  ) {
    count++;
  }
}
console.log("Number of vowels are: ", count);

//  Program to find Reverse of a string without using built-in method ?
const str3 = "Hello World!";
let reverse = "";
for (let i = str3.length - 1; i >= 0; i--) {
  reverse += str3[i];
}
// console.log(reverse);
console.log(reverse);

// Write a program to remove duplicates from an array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4];
let uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
  if (!uniqueArr.includes(arr[i])) {
    uniqueArr.push(arr[i]);
  }
}

console.log(uniqueArr);

//  Program to find Reverse of an array without using built-in method ?
const arrTorevers = ["A", "blessing", "in", "disguise"];
let reverseArray = [];
for (let i = arrTorevers.length - 1; i >= 0; i--) {
  reverseArray.push(arrTorevers[i]);
}
console.log("Revers of the array is: ", reverseArray);

// Find the max count of consecutive 1’s in an array
const arrOnes = [1, 2, 2, 3, 1, 1, 1, 2, 8, 8, 1, 1, 7, 2, 3, 1, 1, 1, 1];
console.log(arrOnes);
let maxCount = 0;
for (let i = 0; i < arrOnes.length; i++) {
  if (arrOnes[i] === 1 && arrOnes[i + 1] === 1) {
    maxCount += 1;
  }
}
console.log("Max consecutive one's are:", maxCount);

//Find the factorial of given number
let n = 5;
let fact = 1;
for (i = n; i >= 1; i--) {
  fact *= i;
}
console.log("Factorial is: ", fact);
