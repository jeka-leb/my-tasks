const {
    sum, nativeNull
} = require('./Intro');

describe('Sum function', () => {
    test('Sum should return sum of two values', () => {
        expect(sum(23, 43)).toBe(66)
    });

    test('Sum shall return value complying with requirements', () => {
        expect(sum(34, 45)).toBeGreaterThan(78);
        expect(sum(34, 45)).toBeLessThanOrEqual(79)
    });

    test('Sum shall sum float values correctly', () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
    })
})

describe('NativeNull function', () => {
    test('shall return false nalue', () => {
        expect(nativeNull()).toBe(null);
        expect(nativeNull()).toBeNull();
        expect(nativeNull()).toBeFalsy();
        expect(nativeNull()).not.toBeTruthy()
    })
})