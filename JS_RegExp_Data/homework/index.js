function getAge(date) {
    return new Date().getFullYear() - date.getFullYear()
}

function getWeekDay(date) {
    const weekArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekArr[new Date(date).getDay()]
}

function getProgrammerDay(year) {
    let correctDate = new Date(year, 0, 256);
    let reversedDate = correctDate.toDateString().split(' ').slice(1, 3).reverse().join(' ');
    return `${reversedDate}, ${correctDate.getFullYear()} (${getWeekDay(correctDate)})`
}

function howFarIs(specifiedWeekday) {
    const weekArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let ind = weekArr.findIndex(el => el.toLowerCase() === specifiedWeekday.toLowerCase());
    if (ind === new Date().getDay()) {
        alert(`Hey, today is ${ specifiedWeekday } =)`);
    } else {
        let number = ind > new Date().getDay() ? ind - new Date().getDay() : ind + new Date().getDay() + 1;
        alert(`It's ${ number } day(s)
left till ${ specifiedWeekday[0].toUpperCase() }${ specifiedWeekday.slice(1).toLowerCase()} `)
    }
}

function isValidIdentifier(str) {
    const reg = /^[$a-z_][$0-9A-Za-z_]*$/i;
    return reg.test(str)
}

function capitalize(str) {
    return str.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
}

function isValidAudioFile(str) {
    const reg = /^[$a-zA-Z]+\.{1}(mp3)|(flac)|(aac)|(alac)$/;
    return reg.test(str)
}

function getHexadecimalColors(str) {
    const reg = /#([a-f0-9]{3}){1,2}\b/gi;
    return str.match(reg)
}

function isValidPassword(str) {
    const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/g;
    return reg.test(str)
}

function addThousandsSeparators(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}