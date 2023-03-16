printNumbers(1, 10);

/* function printNumbers(from, to) {
	let count = from;

	let timerId = setInterval(function() {
		alert(count);
		count++;
		if (count > to) clearInterval(timerId);
	}, 1000);	
	
} */
	

function printNumbers(from, to) {
	let count = from;

	let timerId = setTimeout(function tick() {
		alert(count);
		count++;
		if (count <= to) timerId = setTimeout(tick, 1000); 
	}, 1000);
}