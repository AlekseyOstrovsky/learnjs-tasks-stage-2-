"use strict";

showNotification({
	top: 10, // 10px от верхней границы окна (по умолчанию 0px)
	right: 10, // 10px от правого края окна (по умолчанию 0px)
	html: "Hello!", // HTML-уведомление
	className: "welcome" // дополнительный класс для div (необязательно)
});


function showNotification({top,right,className,html}) {
	let div = document.createElement('div');
	if (className) div.className = className;
	div.textContent = html;
	div.style.top = top + 'px';
	div.style.right = right + 'px';
	div.style.position = 'absolute';
	div.style.color = 'red';
	div.style.fontWeight = 'bold';
	div.style.fontSize = '20px';
	document.body.prepend(div);
	setTimeout(() => div.remove(), 1500);
}
