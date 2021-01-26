let prizeCurrent;
let prizeTotal;
let i;
const questionList = JSON.parse(localStorage.getItem('questionnaire'));
window.start.addEventListener('click', () => {
    prizeCurrent = 100;
    prizeTotal = 0;
    let skipQuestion = document.getElementById('skip');
    let questionBlock = document.getElementById('vopros');
    let allPrizes = document.getElementById('all-prizes');
    questionBlock.classList.remove('unavailable');
    skipQuestion.classList.remove('unavailable');
    skipQuestion.removeAttribute('disabled', '');
    allPrizes.classList.remove('unavailable');
    let endGame = document.getElementById('end-game');
    let winGame = document.getElementById('win-game');
    if (endGame) {
        endGame.classList.add('unavailable')
    }
    if (winGame) {
        winGame.classList.add('unavailable')
    }
    renderQuestion();
    renderPrize(prizeCurrent, prizeTotal);
});

window.b1.addEventListener('click', (e) => {
    let id = e.target.id;
    fullAssesment(id)
});
window.b2.addEventListener('click', (e) => {
    let id = e.target.id;
    fullAssesment(id)
});
window.b3.addEventListener('click', (e) => {
    let id = e.target.id;
    fullAssesment(id)
});
window.b4.addEventListener('click', (e) => {
    let id = e.target.id;
    fullAssesment(id)
});

window.skip.addEventListener('click', skipFunc);

function fullAssesment(id) {
    answerAssesment(id) ?
        (
            prizeCount(),
            renderPrize(prizeCurrent, prizeTotal),
            renderQuestion()
        ) : endGame();
    if (prizeTotal >= 1000000) {
        winGame()
    }
}

function skipFunc() {
    renderQuestion();
    let skipQuestion = document.getElementById('skip');
    skipQuestion.setAttribute('disabled', '');
}

function answerAssesment(id) {
    if (questionList[i].correct === id.split('')[1] - 1) {
        return true
    } else {
        return false
    }
}

function prizeCount() {
    prizeTotal += prizeCurrent;
    prizeCurrent *= 2;
}

function level(min = 0, max = 75) {
    return Math.round(Math.random() * (max - min) + min);
}

function renderQuestion() {
    i = level();
    document.getElementById('b0').textContent = `${questionList[i].question}`;
    document.getElementById('b1').textContent = `${questionList[i].content[0]}`;
    document.getElementById('b2').textContent = `${questionList[i].content[1]}`;
    document.getElementById('b3').textContent = `${questionList[i].content[2]}`;
    document.getElementById('b4').textContent = `${questionList[i].content[3]}`;
}

function renderPrize(prizeCurrent, prizeTotal) {
    document.getElementById('total-prize').textContent = `Total prize: ${prizeTotal}`;
    document.getElementById('current-prize').textContent = `Prize on current round: ${prizeCurrent}`;
}

function endGame() {
    let skipQuestion = document.getElementById('skip');
    let questionBlock = document.getElementById('vopros');
    let allPrizes = document.getElementById('all-prizes');
    questionBlock.classList.add('unavailable')
    skipQuestion.classList.add('unavailable');
    allPrizes.classList.add('unavailable');
    let final = document.getElementById('end-game');
    final.classList.remove('unavailable');
    final.textContent = `Game over. Your prize is: ${prizeTotal}`;
}

function winGame() {
    let skipQuestion = document.getElementById('skip');
    let questionBlock = document.getElementById('vopros');
    let allPrizes = document.getElementById('all-prizes');
    questionBlock.classList.add('unavailable')
    skipQuestion.classList.add('unavailable');
    allPrizes.classList.add('unavailable');
    let final = document.getElementById('win-game');
    final.classList.remove('unavailable');
    final.textContent = `Congratulations! You won 1000000.`;
}