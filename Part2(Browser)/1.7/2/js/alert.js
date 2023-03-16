"use strict";

createList();

function createList() {
	let result=[];
	while (true) {
		let answer = prompt('Что добавим в список?', '');
		if (answer === '' || answer === null) break;
		let li = document.createElement('li');
		li.textContent = answer;
		result.push(li);	
	}
	if (result.length > 0) {
		let ul = document.createElement('ul');
		document.body.append(ul);		
		ul.append(...result);
	}
}
