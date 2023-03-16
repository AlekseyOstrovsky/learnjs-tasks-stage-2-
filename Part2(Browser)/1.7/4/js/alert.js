"use strict";

let list = document.getElementById('list');
countChildren(list); 


function countChildren(list) {
	let allLi = list.querySelectorAll('li');
	for (let elem of allLi) {
		let childLi = elem.querySelectorAll('li');
		let counter=childLi.length;
		if ( counter>0 ) elem.firstChild.data += ' ['+counter+']';				
	}
}


