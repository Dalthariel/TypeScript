console.log(fullName('David', 'Hamaker'));

// Function declarations work using hoisting, can be called before processed
function fullName(first : string, last : string) : string {
	return first + " " + last;
}

// Function expressions need to be defined BEFORE used, very useful for Angular 2
var otherFullName : (first : string, last : string) => string;

otherFullName = function (first : string, last : string) {
	return first + " " + last;	
}

var thirdFullName : (first : string, last : string) => string = function (first : string, last : string) {
	return first + " " + last;	 
}

// console.log(otherFullName('David', 'Hamaker'));
// console.log(thirdFullName('David', 'Hamaker'));