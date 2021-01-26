function convert(...array) {
  return array.map(el => typeof el === 'number' ? el.toString() : parseInt(el));
}

const executeforEach = (array, fn) => {
  for (let el of array) {
    fn(el)
  }
}

const mapArray = (array, fn) => {
  let result = [];
  executeforEach(array, (el) => {
    result.push(fn(+el));
  });
  return result
}

const filterArray = (array, fn) => {
  let result = [];
  executeforEach(array, (el) => {
    if (fn(+el)) {
      result.push(+el)
    }
  });
  return result;
}

const flipOver = (string) => {
  return string
    .split('')
    .reverse()
    .join('');
}

const makeListFromRange = ([start, end = start]) => {
  let result = [];
  if (start < end) {
    for (let i = start; i <= end; i++) {
      result.push(i)
    }
  }
  if (start >= end) {
    for (let i = start; i >= end; i--) {
      result.push(i)
    }
  }
  return result;
}

const getArrayOfKeys = (array, key) => {
  let result = [];
  executeforEach(array, (el) => {
    result.push(el[key])
  })
  return result;
}

const substitute = (array) => {
  return mapArray(array, (el) => {
    if (el < 30) {
      return "*"
    } else {
      return el
    }
  });
}

function getPastDay(date, delta) {
  let dateResult = new Date(date);
  dateResult.setDate(date.getDate() - delta);
  return dateResult.getDate()
}

function formatDate(date) {
  return `${date.getFullYear()}/0${(date.getMonth() + 1)}/${date.getDate().toString().length < 2 ? '0' : ''}${date.getDate()} ${date.getHours().toString().length < 2 ? '0' : ''}${date.getHours()}:${date.getMinutes()}`
}

module.exports = {
  convert,
  executeforEach,
  mapArray,
  filterArray,
  flipOver,
  makeListFromRange,
  getArrayOfKeys,
  substitute,
  getPastDay,
  formatDate,
};