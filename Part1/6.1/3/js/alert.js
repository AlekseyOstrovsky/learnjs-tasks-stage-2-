alert( fib(3) );
alert( fib(7) );
alert( fib(77) );


function fib(n) {
	let a = 0;
	let b = 1;
	let c = 0;
	for (let i = 2; i<=n; i++) {
		c = b;		
		b += a;
		a = c;
	}
	return n ? b : a;
}