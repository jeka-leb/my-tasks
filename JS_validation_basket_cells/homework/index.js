    function renderTable() {
        let strHtml = '';
        for (let i = 1; i <= 3; i++) {
            for (let j = 1; j <= 3; j++) {
                strHtml += `<div class="table" id="${i}${j}"> Cell </div>`
            }
        }
        return strHtml
    }

    let container = document.querySelector('#task1');
    container.insertAdjacentHTML('afterbegin', renderTable());
    document.getElementById('22').textContent = 'Special cell';

    function click() {
        container.addEventListener('click', (e) => {
            console.log(e.target);
            let id = e.target.getAttribute('id');
            if (id[1] === '1') {
                clickAllRowBblue(id)
            }
            if (id[1] !== '1') {
                clickYellow(e)
            }
            if (id === '22') {
                clickGreen()
            }
        })
    }

    function clickGreen() {
        [...document.querySelectorAll(`.table`)].forEach(el => {
            if (!(el.classList.contains('yellow') || el.classList.contains('yellow'))) {
                el.classList.toggle('green')
            }
        })
    }

    function clickYellow(e) {
        e.target.classList.toggle('yellow')
    }

    function clickAllRowBblue(id) {
        let rowElements = [...document.querySelectorAll(`div[id^='${id[0]}']`)];
        rowElements.forEach(el => {
            el.classList.toggle('blue')
        })
    }
    click();

const input = document.getElementById('n2');
const div = document.getElementById('n1');
const button = document.getElementById('n3');

function getSymbol() {
    input.addEventListener('keyup', (e) => {
        let text = e.target.value;
        isValid(text)
    })
}

function isValid(text) {
    let reg = /^\+380\d{9}$/;
    if (reg.test(text)) {
        button.removeAttribute('disabled')
        buttonPush();

    } else {
        reject()
    }
}

function buttonPush() {
    button.addEventListener('click', () => {
        div.classList.remove('hidden');
        div.classList.remove('notification-invalid');
        div.textContent = 'Data was successfully sent'
        input.style.border = 'solid black 1px'
    })
}

function reject() {
    button.setAttribute('disabled', 'disabled');
    div.classList.remove('hidden');
    div.classList.add('notification-invalid');
    div.textContent = 'The number does not follow format';
    input.style.outlineColor = 'red'
}

getSymbol();

const task3 = document.getElementById('task3');
const court = document.getElementById('court');
const ball = document.getElementById('ball');
const leftBoard = document.querySelector('.left-zone');
const rightBoard = document.querySelector('.right-zone');
let scoreLeft = 0;
let scoreRight = 0;

function moveBall() {
    court.addEventListener('click', (e) => {
        if (e.target.classList.contains('court')) {
            positionBall(e);
        }
    })
}

function getPosition(e) {
    let posx = 0;
    let posy = 0;
    if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
    } else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft +
            document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop +
            document.documentElement.scrollTop;
    }
    console.log({
        x: posx,
        y: posy
    })
    return {
        x: posx,
        y: posy
    }
}

let ballPosition;
let ballPositionX;
let ballPositionY;
let ballWidth;
let ballHeight;
let windowWidth;
let windowHeight;
let clickCoords;
let clickCoordsX;
let clickCoordsY;

function positionBall(e) {
    clickCoords = getPosition(e);
    clickCoordsX = clickCoords.x;
    clickCoordsY = clickCoords.y;
    ball.style.left = clickCoordsX + "px";
    ball.style.top = clickCoordsY + "px";
}

function leftCorrect() {
    leftBoard.addEventListener('click', () => {
        ball.style.left = 40 + "px";
        ball.style.top = 165 + "px";
        scoreLeft += 1;
        document.querySelector('.right-score').textContent = `Team B = ${scoreLeft}`
        noteWinner('B', 'red')
    })
}

function rightCorrect() {
    rightBoard.addEventListener('click', () => {
        ball.style.left = 560 + "px";
        ball.style.top = 165 + "px";
        scoreRight += 1;
        document.querySelector('.left-score').textContent = `Team A = ${scoreRight}`
        noteWinner('A', 'blue')
    })
}

function noteWinner(team, color) {
    let notification = `<p id="info" style="color: ${color}"> Team ${team} score!</p>`;
    task3.insertAdjacentHTML('beforeend', notification);
    setTimeout(() => {
        document.getElementById('info').remove()
    }, 3000)
}
rightCorrect();
leftCorrect();
moveBall();