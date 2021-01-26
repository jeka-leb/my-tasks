const detectPalindrome = (str) => { 
   return  typeof str != 'string' 
   ? 'Passed argument is not a string' 
   : str.length === 0 
     ? 'String is empty' 
     : str.toLowerCase() === str.toLowerCase().split('').reverse().join('') 
        ? 'This string is palindrome!' 
        : 'This string is not a palindrome!'
};

module.exports = detectPalindrome;
