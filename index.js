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

// Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31]
const arr1 = [0, 3, 4, 31];
const arr2 = [4, 6, 30];
const mergedArr = arr1.concat(arr2);
console.log(mergedArr);
let sortedArr = mergedArr.sort((a, b) => a - b);
console.log(sortedArr);

// Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same.

const arr1_withoutsqrt = [1, 2, 3, 4, 5];
const arr2_withsqrt = [1, 4, 4, 16, 25];

const sameFrequency = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Approach 1
  for (let i = 0; i < arr1.length; i++) {
    let num = arr1[i];
    let square = arr2[i];
    if (num * num !== square) {
      return false;
    }
  }
  // Aproach 2
  // for (let i = 0; i < arr1.length; i++) {
  //   let sqrtArrayIndex = arr2.indexOf(arr1[i] * arr1[i]);
  //   if (sqrtArrayIndex === -1) {
  //     return false;
  //   }
  //   arr2.splice(sqrtArrayIndex, 1);
  // }
  return true;
};

console.log(sameFrequency(arr1_withoutsqrt, arr2_withsqrt));

// Given two strings. Find if one string can be formed by rearranging the letters of other string.
const str1Arrange = "listen";
const str2Arrange = "silent";
if (str1Arrange.length !== str2Arrange.length) return false;
const str1Obj = str1Arrange.split("").sort().join("");
const str2Obj = str2Arrange.split("").sort().join("");
console.log("Two strings are: ", str1Obj === str2Obj ? true : false);

// Write a JavaScript program to find the maximum number in an array.
const max_num_arr = [2, 45, 22, 43, 89, 3, 22, 45, 89];
let maxNum = 0;
for (let i = 0; i < max_num_arr.length; i++) {
  if (max_num_arr[i] > maxNum) {
    maxNum = max_num_arr[i];
  }
}
console.log("Maximum number in the array is: ", maxNum);

// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
const numArr = [2, 5, 6, 7, 4, 44, 35, 22, 88, 56];
let evenNum = [];
const findEvenNum = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) evenNum.push(arr[i]);
  }
  evenNum.sort((a, b) => a - b);
  return evenNum;
};

console.log("Even numbers are:", findEvenNum(numArr));

// Write a JavaScript function to check if a given number is prime.
const primeNum = 43;
const checkPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
console.log(primeNum, "is prime number: ", checkPrime(primeNum));

// Write a JavaScript program to find the largest element in a nested array. [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]
const nestedArr = [
  [3, 4, 58],
  [709, 8, 9, [10, 11]],
  [111, 2],
];
const flatenArr = nestedArr.flat(Infinity);
let largestNum = flatenArr[0];
for (let i = 0; i < flatenArr.length; i++) {
  if (flatenArr[i] > largestNum) {
    largestNum = flatenArr[i];
  }
}
console.log(largestNum, " is the largest Number in the nested array.");

// Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.
const fiboNum = 10;
let fiboArr = [0, 1];
const findFibSeries = (num) => {
  for (let i = 2; i < num; i++) {
    fiboArr[i] = fiboArr[i - 1] + fiboArr[i - 2];
  }
  return fiboArr;
};
console.log(findFibSeries(fiboNum));

// Given a string, write a javascript function to count the occurrences of each character in the string.
const occString = "hello world";
let concatString = occString.split(" ").join("");
let occObj = {};
for (let i = 0; i < concatString.length; i++) {
  let char = concatString[i].toLowerCase();
  if (occObj[char]) occObj[char]++;
  else occObj[char] = 1;
}
// sort the object by value in ascending order and convert it to array
// const sortedobj = Object.entries(occObj).sort((a, b) => a[1] - b[1]);
// sort the object by value in ascending order and convert it back to object
const sortedObj = Object.fromEntries(
  Object.entries(occObj).sort((a, b) => a[1] - b[1])
);

console.log("occurrences of each character in the string: ", sortedObj);

// Write a javascript function that reverses the order of words in a sentence without using the built-in reverse() method.
const normalSent = "A quick fox jump over the lazy dog.";
let splitSent = normalSent.split(" ");
let stringToReverse = [];
for (let i = splitSent.length - 1; i >= 0; i--) {
  stringToReverse.push(splitSent[i]);
}
let arrtp_string = stringToReverse.toString().replace(/,/g, " ");
console.log("Reverse string is: ", arrtp_string);

// Greatest number in an array:
const numArray = [23, 45, 22, 12, 55, 44, 34, 78, 43, 78];
let maximumNum = numArray[0];
for (let i = 0; i < numArray.length; i++) {
  if (numArray[i] > maximumNum) {
    maximumNum = numArray[i];
  }
}
console.log("Maximum no: ", maximumNum);

// Second largest number in an array:
const numArray2 = [23, 45, 22, 12, 55, 44, 34, 88, 43, 77];

let max = -Infinity;
let secondMax = -Infinity;

for (let num of numArray2) {
  if (num > max) {
    secondMax = max;
    max = num;
  } else if (num > secondMax && num < max) {
    secondMax = num;
  }
}

console.log("Second largest num in array is:", secondMax);

// Print 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Guess the Output
let randomNumber = Math.floor(Math.random() * 10) + 1;

console.log("Random no between 1 and 10: ", randomNumber);
