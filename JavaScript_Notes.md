# Quick intro to Javascript notes
I will mainly be taking note of the notable differences and subtleties of the language
## Variable Declaration

	let (var) varname = 25, var2 = 'Hello'; // Strings in single OR double quote. No chars in JS
											// Can't declare same var twice
											// No var type?

	alert(varname);							// Shows the variable content

	let hello = 'Hello World!';
	let message;							// Copies hello to message
	message = hello;						// Can we edit hello independently?

Variable names can have digits, letters, $, and _. Cannot start with a digit

	const myVar = '18.04.1982'				// Can't reassign const vars
	const COLOR_RED = "#FOO";				// Hard-coded vals often start with upper-case
	const pageLoadTime = /* time taken by a webpage to load */; // Non hard-coded const


## Variable Scope
JavaScript is function-oriented => what happens when functions call variables based on their scope?  
var is a bit different, but let and const work as follows:

	{										// Also works like this in if, while, for blocks
		let message = "Hello"; 				// only visible inside this block
  		alert(message);
	}
	alert(message);							// Error, message undeclared

How is var different? => var has no block scope  
Variables declared with var are globally scoped or function-scoped if declared in a function

	if (true) {
  		var test = true; 					// use "var" instead of "let"
	}
	alert(test); 							// The variable lives after if

Same thing with functions:

	function sayHi() {
  		if (true) {
    		var phrase = "Hello";
  		}
  		alert(phrase); 						// works as expected
	}
	sayHi();								// No error
	alert(phrase);							// Error, only available anywhere inside the function

This all works because internally, var declarations are processed when the function or script (for globals) starts  
This means that *technically* we can put var declarations anywhere within the function or script, even after it's usage

	function sayHi() {
		phrase = "hello";					// Only declarations are hoisted, not assignments.
		alert(phrase);
		if (false) {
			var phrase;						// Technically works, even though the if branch never executes.
											// If we had var phrase = "hello" all here, it wouldn't throw an error, but alert(phrase)
											//		would show undefined.
		}
	}
	sayHi();

## Data types

There are 9 object types. Can check using the typeof operator, although typeof a null instance is "object".  
* Primitive:
  * undefined			// Does not exist yet or does not exist anymore
  * null				// Exists but is empty, unassigned
  * Boolean				// Standard true/false
  * Number				// double-precision 64-bit binary format IEEE 754 value, between -(2^53 − 1) and 2^53 − 1. Also +Infinity, -Infinity, NaN
  * String				// Strings are immutable (cannot modify it) => string functions return a new string but do not modify old one
  * BigInt				// Represents integers with arbitrary precision, beyond the safe integer limit of Number
  * Symbol				// Guaranteed to be unique (even with same string!), used as the key of an object
* Structural:
  * Object				// Collection of properties (can be any type, even other Objects)
  * Function
*Special note: checking a structural type derived from Object using typeof will always return "object".  
We must use instanceof, but even then there are some misconceptions.  

## Objects
Can be created in two ways:

	let obj1 = new Object(); 	// "object constructor" syntax
	let obj2 = {};  			// "object literal" syntax, contains set of properties

They are generally instantiated as object literals:

	let user = {     			// an object
  		name: "John",  			// by key "name" store value "John"
  		age: 30        			// by key "age" store value 30. Keys can be multi worded "user age": 30
	};
	alert(user.name);			// syntax for accessing properties

	user.isAdmin = true;		// automatically adds the attribute isAdmin
	delete user.age;			// deletes the attribute age. user["age"] works as well
	delete user["user age"];	// syntax for accessing multi-worded properties

	let user = {
  		[age]: 30				// Property name taken from a variable, and can run computations inside the square bracket
	};

	function makeUser(name, age) {
  		return {
   			name, // same as name: name		//Shorthand for common usage
    		age,  // same as age: age
  	};
}

# TODO: Finish taking notes, omitted for time sake to get through lab