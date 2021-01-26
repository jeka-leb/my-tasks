const fibonacciNumbers = (num) => {
    return !Number.isInteger(num) || num < 0 ? 'Passed argument is not a number' : num <= 1 ? num : fibonacciNumbers(num - 2) + fibonacciNumbers(num - 1)
};
module.exports = fibonacciNumbers;