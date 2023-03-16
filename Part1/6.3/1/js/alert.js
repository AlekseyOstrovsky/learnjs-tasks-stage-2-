alert( sum(1)(2) );
alert( sum(5)(-1) );

function sum(n) {
	let s=0;
	s+=n;
	return function(a) {
		s+=a;
		return s; 
	};
}