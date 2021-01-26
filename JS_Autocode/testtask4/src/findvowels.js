const findVowels = (str) => {
return  typeof str != 'string' 
   ? 'Passed argument is not a string' 
   : str.length === 0 
     ? 'String is empty' 
     : str.match(/[aeiou]/gi) 
        ? str.match(/[aeiou]/gi).length
        : 'String does not contain vowels'
};

module.exports = findVowels;
