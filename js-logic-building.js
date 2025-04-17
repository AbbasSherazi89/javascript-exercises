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