// Function expression
var fullName;
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('The', 'Dave'));
// Immediately invoked version
(function (first, last) {
    console.log(first + " " + last);
})('Kimleng', 'Our');
//# sourceMappingURL=018_5_immediately_invoked_arguments.js.map