"use strict";

let form = document.forms.calculator;
let diagram = document.getElementById('height-after');

form.onchange = function() {
	let initial = +form.money.value;
	let interest = +form.interest.value / 100;
	let years = +form.months.value / 12;
	let result = Math.round(initial * (1 + interest) ** years);
	document.getElementById('money-before').innerHTML = initial;
	document.getElementById('money-after').innerHTML = result;
	diagram.style.height = result / initial * 100 + 'px';
}





