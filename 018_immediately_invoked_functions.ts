var names : string[] = ['David', 'Bob', 'Kimleng'];
var counter : number = 0;

(function() {
	for (let name in names) {
		counter++;
	}
})();

console.log(counter); //counts how many elements in the string