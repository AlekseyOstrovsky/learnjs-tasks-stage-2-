let users = [
	{ name: "John", age: 20, surname: "Johnson" },
	{ name: "Pete", age: 18, surname: "Peterson" },
	{ name: "Ann", age: 19, surname: "Hathaway" },
	{ name: "Queen", age: 3, surname: "Smith" },
];

users.sort(byField('name'));

alert( JSON.stringify(users) );

users.sort(byField('age'));

alert( JSON.stringify(users) );


function byField(fieldName) {	
	return function(a, b) {
		if ( a[fieldName] > b[fieldName] ) return 1;
		if ( a[fieldName] == b[fieldName] ) return 0;
		if ( a[fieldName] < b[fieldName] ) return -1;
	}
}