// Factorial of a given number

const factorialOfnum = (num) => {
  let fact = 1;
  for (let i = num; i >= 1; i--) {
    fact *= i;
  }
  return fact;
};
console.log(factorialOfnum(5));

// Find a maximum number in an array
const findMaxNum=(arr)=>{
  return Math.max(...arr);
}

console.log("Maximum number in the array is: ", findMaxNum([23,44,33,90,44,33,22,3,87]));

// Check if a string is a palindrome.
let str="MOm";
const findPalindrome=(word)=>{
  let str1=word.split("").join("").toLowerCase();  
  let str2=word.split("").reverse().join("").toLowerCase();
  if(str1===str2){
    console.log(word, "is palindrome");
  }else{
    console.log(word, "is not a palindrome")
  }
}
console.log(findPalindrome(str));

// Count the number of vowels in a string.
let strVow="Hello world";
let countVow=0;
const toCheckVowel=(str)=>{
  let strToLower=str.toLowerCase();
  for(let i=0; i<strToLower.length; i++){
    if (strToLower[i]=='a' || strToLower[i]=='e'|| strToLower[i]=='i' || strToLower[i]=='o' || strToLower[i]=='u'){
      countVow++;
    }
  }
  return countVow;
}
console.log('No of vowels in the given string are: ', toCheckVowel(strVow));

// Capitalize the first letter of each word in a sentence.
const egString="Barking over the wrong tree";
let splittedStr=egString.split(" ");
let firstWordCamel='';
for (let i=0; i<splittedStr.length; i++){
  firstWordCamel += splittedStr[i][0].toUpperCase() + splittedStr[i].slice(1) + ' '
}
console.log(firstWordCamel);

// Find the longest word in a sentence.
const normalStr="In the middle of difficulty lies opportunity";
let splitStr=normalStr.split(" ");
let longWord='';
for (let i=0; i<splitStr.length; i++){
  if (splitStr[i].length>longWord.length)
  {
    longWord=splitStr[i];
  }
}
console.log("Longest word is ", longWord, " and it's length is ", longWord.length);

// Find the maximum and minimum numbers in an array.
const arrayN=[22,5,34,12,23,11,87,99];
let min=arrayN[0];
let max=arrayN[0];
for (let i=0; i<arrayN.length; i++){
  if (arrayN[i]<min)
  {
    min=arrayN[i];
  }else if (arrayN[i]>max){
    max=arrayN[i];
  }
}
console.log("Minimum number in array is:", min, "Maximum number in array is:", max);


// Remove duplicates from an array.
const norArr=[23,33,22,23,33,33,45,2,31,56];
let uniqueArr=[];
for (let i=0; i<norArr.length; i++){
  if (!uniqueArr.includes(norArr[i]))
  {uniqueArr.push(norArr[i])}
}

console.log("Array with duplicated values:", norArr);
console.log("Unique Array is:", uniqueArr.sort((a,b)=>b-a));

// Find the sum of all elements in an array.
const arr=[23,33,22,23,33,33,45,2,31,56];
let sum=0;
for (let i=0; i<arr.length; i++){
  sum+=arr[i];
}
console.log("Sum of all the elements in array is: ", sum);

// Count how many times each element appears in an array.
const arr1 = [4, 2, 4, 3, 2, 1, 4, 2, 3, 1, 5];
const countMap = {};

for (let i = 0; i < arr1.length; i++) {
  const num = arr1[i];
  if (countMap[num]) {
    countMap[num]++;
  } else {
    countMap[num] = 1;
  }
}

console.log("Element counts:", countMap);
