interface User {
	email : string;
	firstName? : string; // the question mark makes the name optional
	lastName? : string; // without the question mark it will break if it isn't given the names
}

function profile(user: User) : string {
	return `Welcome, ${user.firstName} ${user.lastName}.`;
}

var realUser = {
	firstName: 'The',
	lastName: 'Dave',
	email: 'test@test.com',
};

console.log(profile(realUser));