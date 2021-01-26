const validateTitle = (value) => {
  if (typeof value != 'string') {
    return 'Incorrect input data'
  }
  if (value.length > 2 && value.length < 20 && value[0].toUpperCase() === value[0] && isNaN(parseInt(value))) {
    return 'VALID'
  } else {
    return 'INVALID'
  }
}

const sum = (...array) => {
  return array.reduce((prev, el) => {
    return typeof el === 'number' && el % 15 === 0 ? prev - el : prev + (+el)
  }, 0)
}

module.exports = {
  validateTitle,
  sum,
};