import {cross, count} from '../globals';

export const stepCross = (target) => {
    if(target.tagName == 'svg' || target.tagName == 'line' || target.tagName == 'circle') {
		return;
	}
    target.innerHTML = cross;
    target.classList.add('x');
}