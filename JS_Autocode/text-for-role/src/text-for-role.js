const textForRole = (roles, textLines) => {
    let newLine = '';
    roles.forEach( (surname, i) => {
        newLine += surname + ':';
        textLines.split('\n')
        .forEach( (el, item) => {
            if (el.includes(surname)) {
                newLine += `\n${item + 1})${el.slice(surname.length + 1)}` 
            }
        });
        newLine += i != roles.length - 1 ? '\n\n' : '';
    });
    return newLine;
}

module.exports = textForRole;

