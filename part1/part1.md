# Lab 4 part 1 responses
![Part 1-4](https://lh5.googleusercontent.com/H_O5pPbLnpEETck1gwqUEB-5xr8lqjYd3mNnNe971OURjVv07XCmdmCljB-iXCZBNjXeLuIYsN8RCGyb4gEDAiX1sLF55hoeY3HZ013tfqtiIB1Ufn9lADp-XYLub5pXIvTc6kFM)
### 1. What will happen at line 11 and why?
Line 11 will print prices.length to the console. This is because i is declared with var, which is scoped to the entire function, and i increments to exactly prices.length.
### 2. What will happen at line 12 and why?
Line 12 will print the *unrounded* discounted price of the *final* price in prices. (prices[prices.length - 1]) * (1-discount)  
This is because discountedPrice is declared as a var, which means it is visible beyond the for block, and the final assignment to it is the assignment above.
### 3. What will happen at line 13 and why?
Line 13 will print the *rounded* discounted price of the *final* price in prices. (Same as previous question but rounded to 2 decimal places)  
This is because finalPrice, which is declared before the for block and is of course still visible, holds its final assignment which is posted above.
### 4. What will the function return if we call discountPrices([100, 200, 300], .5) ? Give a brief explanation.
The function will return an array containing the original passed array contents ([100, 200, 300]), each modified by the discount (1-0.5) and rounded to 2 decimal places.  
The final returned array will contain [50, 100, 150].
![Part 5-8](https://lh6.googleusercontent.com/aOA2CNNOjE6ks0Qgb_0EKbSUP7GOaP9ReP7F0P0j6bISwptdDZ0YmSmIcfGlReaGUbbP_-qEwVn7dqll1RdpZkVrzViz1blKd9Bx4tylvaJGJTOcUSHYYeM4-3RSpAtvMaAl9VBL)
### 5. What will happen at line 11 and why?
Line 11 will cause an error. This is because i is declared inside the for-loop, and is not visible when passed to console.log().
### 6. What will happen at line 12 and why?
Line 12 will cause an error. This is because discountedPrice is declared inside the for-loop, and is not visible when passed to console.log().
### 7. What will happen at line 13 and why?
Line 13 will print the *rounded* discounted price of the *final* price in prices. (See question 2/3 for exact value and amount rounded). This is because finalPrice is declared within the function before the for-loop blocked code, so it is still visible and holds its final assignment (which was assigned within the for-loop block).
### 8. What will the function return for discountPrices([100, 200, 300], .5)? Give a brief explanation.
Calling the function will cause an error, because of the answer to questions 5 and 6.
![Part 9-12](https://lh6.googleusercontent.com/QVJr7iRCL_VOyQxiHh4L32f8dABkOdjvY4BcjouEhRilXWT4-kwNRsjmcstUXPJsCy2NOo0ifpFWWr1euKZ6D2aTQL3ECYSpavvALqju8VTD9W2Ekhxj_wpDy25xBiIuIIjK5rR9)
### 9. What will happen at line 11 and why?
Line 11 will cause an error. This is because i is declared inside the for-loop, and is not visible when passed to console.log().
### 10. What will happen at line 12 and why?
Line 12 will cause an error for a few reasons. First, if the passed prices array contains more than 1 element, then the for-loop trys to declare and assign a const variable multiple times. Secondly, discountedPrice is declared inside the for-loop, and is not visible when passed to console.log() regardless of the prices array length.
### 11. What will happen at line 13 and why?
Line 13 will cause an error only if the passed prices array contains more than 0 elements. This is because if the for-loop is ever entered, then it tries to assign to an already declared and assigned const variable. Technically, if the passed prices array contains no elements, then finalPrice is assigned 0 and an error is not thrown. Thus, in this extreme case, line 13 will print 0.
### 12. What will the function return for discountPrices([100, 200, 300], .5)? Give a brief explanation.
Calling the function will cause an error, because of the answer to questions 9-11.
### 13. Given the above Object, write the notation for
A. <span>student.n</span>ame  
B. student["Grad Year"]  
C. student.greeting()  
D. student["Favorite Teacher"].name  
E. student.courseLoad[0]
### 14. Arithmetic
A. "32" as a String, since + converts the Number to a String for concatenation  
B. 1 as a Number, since - is a mathematical operation that converts String to Number  
C. 3 as a number, since null is converted to 0 in mathematical operations  
D. "3null" as a String, since + converts the null to a String for concatenation  
E. 4 as a Number, since true is converted to 1 in mathematical operations  
F. 0 as a Number, since false and null are converted to 0 in mathematical operations  
G. "3undefined" as a String, since undefined is converted to a String for concatenation  
H. NaN as a Number, since "3" is converted to 3 and undefined is converted to NaN in mathematical operations  
### 15. Comparisons
A. true, since '2' gets converted to a Number  
B. false, since the 2 strings get compared lexographically (and 2 is > 1 for the first letter of each string)  
C. true, since '2' gets converted to a Number  
D. false, since === compares equality without type converting  
E. false, since false gets converted to 1 which is not equal to 2  
F. true, since 2 gets converted to a Boolean (true) before the strictly equals operator
### 16. Explain the difference between the == and === operators.
The difference is that === is *strictly* true, which does not convert types and automatically returns false when the types are different.
### 17. From the code snippet below, explain what gets printed and why.
"How are you?" gets printed. This is because 2 == true converts true to 1, and that expression simplifies to false. 2 itself, converted to a Boolean, returns true, so that block is entered and "How are you?" gets printed.
![Functions](https://lh5.googleusercontent.com/8Jy_gTsdt-mzr9OjOK4l-LM4XQFOf3xvpbKNOuHrvYXn5stUOOqeeXsaKuAoLoULsbMr0OSUJni7GrPbRAh_0QIk2vVTFftl68SMa5KodA1TOxI6H19BsgzP8tfbbwKKTej4EYB5)
### 19. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result?
### 21. 21. What is the output of this code?
1
3
2
4