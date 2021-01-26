let count1 = +localStorage.getItem('Page1');
let count2 = +localStorage.getItem('Page2');
let count3 = +localStorage.getItem('Page3');

function visitLink(path) {
	if (path === 'Page1') localStorage.setItem(`${path}`, ++count1);
	if (path === 'Page2') localStorage.setItem(`${path}`, ++count2);
	if (path === 'Page3') localStorage.setItem(`${path}`, ++count3)
}

function viewResults() {
	let outHtml;
	if (window.localStorage.length === 0) {
		outHtml = `<p> You have not visited any link yet!</p>`
	} else {
		outHtml = `
		<ul><li>You visited Page 1: ${+localStorage.getItem('Page1')} time(s)</li>
		<li>You visited Page 2: ${+localStorage.getItem('Page2')} time(s)</li>
		<li>You visited Page 3: ${+localStorage.getItem('Page3')} time(s)</ ul>`;
	}
	document.getElementById('content').insertAdjacentHTML("beforeend", outHtml);
	document.querySelector('[type=button]').setAttribute('onclick', 'return false');
	localStorage.clear();
	count1 = 0;
	count2 = 0;
	count3 = 0;
}