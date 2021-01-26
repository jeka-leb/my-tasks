const cache = (func) => {
    let cash = {}
    return function (...arr) {
        if (!(arr in cash)) {
            cash[arr] = func(...arr)
        }
        return cash[arr]
    }
}

const forwardBackwardSteps = {
    step: 0,
    forward: function () {
        this.step++;
        return this
    },
    backward: function () {
        this.step--;
        return this
    },
    revealStep: function () {
        console.log(this.step)
        return this
    }
};

const applyAll = (f, ...arr) => {
    let res = f.call(this, ...arr);
    return res
}
const sum = (...arr) => {
    return arr.reduce((s, el) => {
        return s + el
    }, 0)
}

const mul = (...arr) => {
    return arr.reduce((m, el) => {
        return m * el
    }, 1)
}


module.exports = {
    cache,
    forwardBackwardSteps,
    applyAll,
    sum,
    mul
}