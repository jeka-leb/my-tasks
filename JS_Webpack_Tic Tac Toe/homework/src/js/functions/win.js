import {
    container,
    blocks,
    res
} from "../globals";

import {
    init
} from './init';

export const win = () => {
    let combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let i = 0; i < combinations.length; i++) {


        if (blocks[combinations[i][0]].classList.contains('x') &&
            blocks[combinations[i][1]].classList.contains('x') &&
            blocks[combinations[i][2]].classList.contains('x')) {
            setTimeout(() => {
                blocks[combinations[i][0]].classList.add('active');
                blocks[combinations[i][1]].classList.add('active');
                blocks[combinations[i][2]].classList.add('active');
                res.innerText = 'X wins';
            }, 1000);
            container.removeEventListener('click', init);
        } else {
            if (blocks[combinations[i][0]].classList.contains('o') &&
                blocks[combinations[i][1]].classList.contains('o') &&
                blocks[combinations[i][2]].classList.contains('o')) {
                setTimeout(() => {
                    blocks[combinations[i][0]].classList.add('active');
                    blocks[combinations[i][1]].classList.add('active');
                    blocks[combinations[i][2]].classList.add('active');
                    res.innerText = 'O wins';
                }, 1000);
                container.removeEventListener('click', init);
            }
        }

    }
}