"use strict";

f();

async function f() {
	let users = await getUsers(['iliakan', 'remy', 'no.such.users']);	
	for (let user of users) {alert(JSON.stringify(user))}	
}

async function getUsers(names) {
	let githubResponse = names.map(name => fetch(`https://api.github.com/users/${name}`).then(
		result => {
			if (result.status == 200) {
				return result.json();
			} else {
				return null;
			}
		},
		() => {
			return null;
		}
	));
		
	let responses = await Promise.all(githubResponse);
	return responses;
}