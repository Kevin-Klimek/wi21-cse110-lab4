# Quick intro to Javascript notes
I will mainly be taking note of the notable differences and subtleties of the language
## Variable Declaration

	let (var) varname = 25, var2 = 'Hello'; // Strings in single quote.
						// Can't declare same var twice
						// No var type?

	alert(varname);				// Shows the variable content

	let hello = 'Hello World!';
	let message;				// Copies hello to message
	message = hello;			// Can we edit hello independently?

Variable names can have digits, letters, $, and _. Cannot start with a digit

	const myVar = '18.04.1982'		// Can't reassign const vars
						// Hard-coded vals often start with upper-case
	const COLOR_RED = "#FOO";		// Why double quotes?
	const pageLoadTime = /* time taken by a webpage to load */; // Non hard-coded const


## Variable Scope
JavaScript is function-oriented => what happens when functions call variables based on their scope?
var is a bit different, but let and const work as follows:

