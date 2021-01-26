import {circle} from '../globals';

export const stepZero = (target) => {
    if(target.tagName == 'svg' || target.tagName == 'line' || target.tagName == 'circle') {
		return;
	}
    target.innerHTML = circle;
    target.classList.add('o');
}