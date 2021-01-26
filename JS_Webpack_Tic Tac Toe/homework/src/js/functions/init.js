import {
    res,
    container,
    blocks
} from "../globals"
import {
    stepCross
} from "./stepCross";
import {
    stepZero
} from "./stepZero";
import {
    win
} from './win';
let step = false;
let count = 0;
export const init = (e) => {
    count++;
    if (!step) {
        stepCross(e.target)
    } else {
        stepZero(e.target)
    }
    step = !step;
    if (count == 9) {
        setTimeout(() => {
            res.innerText = 'Nobody won';
            container.removeEventListener('click', init);
        }, 1000)
    }
    win();
}

export const newGame = () => {
    step = 0;
    count = 0;
    res.innerText = '';
    blocks.forEach((el) => {
        el.innerHTML = '';
        el.classList.remove('o', 'x', 'active')
    });
    container.addEventListener('click', init)
}