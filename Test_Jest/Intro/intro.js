const sum = (a, b) => a + b;
console.log(sum(23, 43))

function expectation(value) {
    return {
        toBe: exp => {
            if (exp === value) {
                console.log('Success')
            } else {
                console.error(`Value is ${value}, but expactation is ${exp}`)
            }
        }
    }
}

// expectation(sum(23,43)).toBe(67);

const nativeNull = () => null;

module.exports = {sum, nativeNull};