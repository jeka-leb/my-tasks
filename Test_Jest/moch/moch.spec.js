const { map } = require('./moch');

describe('map function', () => {

    let array;
    let fn;

    beforeEach(() => {
        array = [1, 2, 3, 4, 5];
        fn = jest.fn( el => el ** 2);
        map(array, fn);
    });

    test('should to be called', () => {
        expect(fn).toBeCalled()
    });

    test('shoul be called 5 times', () => {
        expect(fn).toBeCalledTimes(5);
        expect(fn.mock.calls.length).toBe(5)
    })

    test('should return particular value', () => {
        expect(fn.mock.results[3].value).toBe(16)
    })
});