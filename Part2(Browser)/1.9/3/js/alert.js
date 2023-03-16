"use strict";


setTimeout(centerBall, 5000);


function centerBall() {
	let centerX = field.clientWidth / 2;
	let centerY = field.clientHeight / 2;
	let ballW = ball.offsetWidth;
	let ballH = ball.offsetHeight;
	ball.style.left = `${centerX - ballW / 2}px`;
	ball.style.top = `${centerY - ballH / 2}px`;
}
