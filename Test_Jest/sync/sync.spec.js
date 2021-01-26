const Lodash = require('./sync');

const _ = new Lodash();

describe('Lodash: compact', () => {
    let array;

    beforeEach(() => {
        array = [0, 32, '', false, true, 'ops']
    });

    test(' shall be defined', () => {
        expect(_.compact(array)).toBeDefined()
    })

    test('compact method filter falsy values', () => {
        const result = [32, true, 'ops'];
        expect(_.compact(array)).toEqual(result)
    })

    test('shall not contain falsy values', () => {
        expect(_.compact(array)).not.toContain(false)
    })
});

describe('Lodash: groupBy', () => {
    test('should group items by Math.floor()', () => {
        const array = [4.5, 4.2, 3.2, 5.6];
        const result = {
            '4': [4.5, 4.2],
            '3': [3.2],
            '5': [5.6]
        };
        expect(_.groupBy(array, Math.floor)).toEqual(result);
    });

    test('should group items by length', () => {
        const array = ['one', 'two', 'three'];
        const result = {
            '3': ['one', 'two'],
            '5': ['three']
        };
        expect(_.groupBy(array, 'length')).toEqual(result);
    });

    test('return not an array', () => {
        expect(_.groupBy([3.4, 5.6,], Math.trunc)).not.toBeInstanceOf(Array)
    })
})