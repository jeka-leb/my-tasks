const evenNumbersInArray = (array) => {
    if (!array.length || !Array.isArray(array)) {
        return 'Passed argument is not an array or empty'
    }
    let result = array.filter( el => el % 2 === 0 );
    if (!result.length) {
        return 'Passed array does not contain even numbers'
    }
    return result
};

module.exports = evenNumbersInArray;


