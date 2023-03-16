alert( sum(1)(2) );
alert( sum(1)(2)(3) );
alert( sum(5)(-1)(2) );
alert( sum(6)(-1)(-2)(-3) );
alert( sum(0)(1)(2)(3)(4)(5) );

function sum(n) {
	let s=0;
	s+=n;

	function call(a) {
		s+=a;
		return call; 
	};

	call[Symbol.toPrimitive] = function() {return s}; 

	return call;
}