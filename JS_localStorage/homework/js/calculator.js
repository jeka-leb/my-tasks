function calculator() {
    while (true) {
        try {
            getAssesment();
            break
        } catch (e) {
            alert(e);
        }
    }
}

function getExpression() {
    return prompt('Enter corect math expresiion')
}

function getAssesment() {
    let res = eval(getExpression());
    if (!isFinite(res)) {
        throw new Error('Incorect math expression')
    } else {
        alert(res);
        return
    }
}
calculator()