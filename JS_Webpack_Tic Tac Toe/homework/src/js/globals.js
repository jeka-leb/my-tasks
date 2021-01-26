

const res = document.querySelector('.res');
const container = document.querySelector('.container');
const blocks = document.querySelectorAll('.block');
const start = document.querySelector('.start');

const circle = `<svg class="circle">
<circle r="45" cx="58" cy="58" stroke="blue"
stroke-width="10" fill="none" stroke-linecap="round"/>
</svg>`;

const cross = `<svg class="cross">
<line class="first" x1="15" y1="15" x2="100" y2="100"stroke="red"
stroke-width="10" stroke-linecap="round"/>
<line class="second" x1="15" y1="100" x2="100" y2="15"stroke="red"
stroke-width="10" stroke-linecap="round"/>
</svg>`;

export {res, container, blocks, start,  circle, cross};