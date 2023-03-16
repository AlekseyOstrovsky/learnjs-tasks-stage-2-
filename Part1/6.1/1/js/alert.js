alert( sumTo(1) );
alert( sumTo(2) );
alert( sumTo(3) );
alert( sumTo(4) );
alert( sumTo(100) );

// цикл

/* function sumTo(n) {
	let sum=0;
	for (let i=0; i<n+1; i++) {
		sum += i;
	}
return sum;
} */

// рекурсия

/* function sumTo(n) {
	let x = 1;
	return (n == 1) ? 1 : sumTo(n-1) + n;
} */

// арифметическая прогрессия

function sumTo(n) {
	return n * (n + 1) / 2;
}
