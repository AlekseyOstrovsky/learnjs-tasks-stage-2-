alert( factorial(1) );
alert( factorial(2) );
alert( factorial(3) );
alert( factorial(4) );
alert( factorial(5) );

function factorial(n) {
	return (n == 1) ? 1 : n * factorial(n-1);
}