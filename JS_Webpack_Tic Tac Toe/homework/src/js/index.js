import '../index.html';
import '../scss/style.scss';

import {container, start} from './globals';
import {newGame} from './functions/init';
import {init} from './functions/init';


start.addEventListener('click', newGame);
container.addEventListener('click', init);