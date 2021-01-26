function isBigger(a, b) {
  return a > b
}

function isSmaller(a, b) {
  return a < b ? !isBigger(a, b) : false
}

function getMin(...numbers) {
  return Math.min(...numbers)
}

function makeNumber(string) {
  return string.match(/\d/g) ? string.match(/\d/g).join('') : ''
}

function countNumbers(string) {
  let result = {};
  let str = makeNumber(string);
  for (let i of str) {
    result[i] = str.match(new RegExp(`(${i})`, 'g')).length
  }
  return result
}

function pipe(number, ...functions) {
  let val = number
  for (let i = 1; i < functions.length; i++) {
    val = arguments[i](val);
  }
  return arguments[functions.length](val)
}

function isLeapYear(date) {
  if (!new Date(date) || isNaN(new Date(date).getFullYear())) {
    return `Invalid Date`
  }
  let year = new Date(date).getFullYear();
  if (!(new Date(year, 1, 29).getMonth() - 1)) {
    return `${year} is a leap year`
  } else {
    return `${year} is not a leap year`
  }
}


module.exports = {
  isBigger,
  isSmaller,
  makeNumber,
  countNumbers,
  getMin,
  pipe,
  isLeapYear,
}