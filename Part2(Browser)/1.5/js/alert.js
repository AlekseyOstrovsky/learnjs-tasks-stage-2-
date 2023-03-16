"use strict";



let allLi = document.querySelectorAll('li');
for (let elem of allLi) {
	alert( elem.firstChild.data.trim() + " - " + elem.querySelectorAll('li').length );
}



