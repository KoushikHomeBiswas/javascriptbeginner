// console.log('Hello World');

// To run a js file in vs code simply type => node <file_name.js>

/****Values and Variables in Javascript********/
// var myName = "vinod";
// var - Variable (key) , 
// myName - Name
// "vinod" - Value

// console.log(myName);


/* We use variable=>var to store values or data */


// Naming Convention
// var myAge = 30;
// console.log(myAge); //CamelCase Convention

/* Rules */
/* Start rules
** The first character must be a letter or an underscore (_)or and dollar($). You can't use a number as the first character.

    // var 1myAge = 30;
    // console.log(1myAge);
    //error:Invalid or unexpected token (starting with a number)

** The rest of the variable name can include any letter, any number or the underscore. Can't use any other characters,including spaces.

    var _myAge = 30;
    console.log(_myAge);

**Variable names are case sensitives
    var myAge = 30;
    console.log(myage); //ReferenceError: myage is not defined

** No limit to the length of the variable name
    var myFatherhgjttyAge = 79;
    console.log(myFatherhgjttyAge);

** Yo can't use one of javascript's reserved words as a variable name.

    var var = 20;
    console.log(var);
    Error:
    var var = 20;
    ^^^
    SyntaxError: Unexpected token 'var'

** Do not use special charecter in variable name.

    var $myName% = "thapa technical";
    console.log($myName%);


End rules */

///******1. Challenge Time (Valid or not)
//Practice sets

// var _myName = "vinod";
// var _1my__Name = "bahadur";
// var 1myName = "thapa";
// var $myName = "thapa technical";
// var $myName% = "thapa technical";

// console.log($myName%);


/*===========DATA TYPES IN JAVASCRIPT 38:44========*/


// undefined: typeof instamce === "undefined"
// Boolean: typeof instance === "boolean"
// Number: typeof instance === "number"
// String: typeof instance === "string"
// Bigint: typeof instance === "bigint" >> ECMA SCRIPT 2020
// Symbol: typeof instance === "symbol" >> ECMA SCRIPT 2015

// Typeof Operator
// var myName = "koushik biswas";
// console.log(typeof(myName));

// var myAge = 40;
// console.log(typeof(myAge));

// var iAmThapa = true;
// console.log(typeof(iAmThapa));


///******2. Challenge Time (Valid or not)
//Practice sets

// 10 + '20'
// 9 - '5'
// "Java" + "Script"
// " " + " "
// " " + 0
// "vinod" - "thapa"
// true + true
// true + false
// false + true
// false - true

//console.log(10 + '20'); //10 + 20 => 1020 => Concatination
//console.log(typeof(10 + '20')); //number + string => string

//console.log(9 - '5'); //9 - 5 => 4 => Concatination <<< Bug in Javascript
//console.log(typeof(9 - '5')); //number - string => number  <<< Bug in Javascript

//console.log("Java"+"Script"); // Javascript
//console.log(typeof("Java"+"Script")); //string + string => string

//console.log(""+""); // Blank
//console.log(typeof(""+"")); //Blank string + Blank string => string

//console.log("" + 0); // 0
//console.log(typeof("" + 0)); //Blank string + number => string

//console.log("vinod" + "thapa"); // vinodthapa >> Concatination
//console.log(typeof("vinod" + "thapa")); //string + string => string

//console.log("vinod" - "thapa"); // string - string => NaN (Not a Number) >> Concatination
//console.log(typeof("vinod" - "thapa")); //string - string => number

//console.log(true + true); // boolean + boolean => 1+1 => 2 >> Concatination // in Javascript 1 = ture and 0 = false
//console.log(typeof(true + true)); //boolean + boolean => number

//console.log(true + false); // boolean + boolean => 1+0 => 1 >> Concatination // in Javascript 1 = ture and 0 = false
//console.log(typeof(true + false)); //boolean + boolean => number

//console.log(false + true); // boolean + boolean => 0+1 => 1 >> Concatination // in Javascript 1 = ture and 0 = false
//console.log(typeof(false + true)); //boolean + boolean => number

//console.log(false - true); // boolean - boolean => 0-1 => -1 >> Concatination // in Javascript 1 = ture and 0 = false
//console.log(typeof(false - true)); //boolean - boolean => number

//Question 1. Difference between null vs undefined

//var iAmUseless = null; //Declare variable and value assigned
//console.log(iAmUseless); //>> null Value
//console.log(typeof(iAmUseless)); //>> Object <<< Bug in Javascript // null value datatype never return object

//var iAmStandBy; //Declare variable but no value assign
//console.log(iAmStandBy); //>> undefined
//console.log(typeof(iAmStandBy)); //>> undefined


//Question 2. What is NaN?
 // NaN is a property of the global object
 // In Other Words, it is a variable in global scope
 // The Initial Value of NaN is Not-A-Number

//  global object
    // DOM => Document Object Model
    // BOM => Browser Object Model

// var myPhoneNumber = 9876543210;
// var myName = "Koushik Biswas"

// console.log(isNaN(myPhoneNumber)); //isNaN is a method
// console.log(isNaN(myName));

// isNaN 1:07:00

// NaN Practice:--------------

// NaN === NaN;
// Number.NaN === NaN;
// isNaN(NaN);
// isNaN(Number.NaN);
// Number.isNaN(NaN);

// console.log(NaN === NaN); //Return False
// console.log(Number.NaN === NaN); //Return False
// console.log(isNaN(NaN)); //Return True
// console.log(isNaN(Number.NaN)); //Return True
// console.log(Number.isNaN(NaN)); //Return True



/*===========Expressions and Operators 38:44========*/

// Operators
// console.log(5 + 20); // 5 => Operand, + =>Operator, 20 => Operand

//Type of Operators
 // Assignment Operators
 // Arithmetic Operators
 // Comparison Operators
 // Logical Operators
 // String Operators
 // Conditional(ternary) Operator


//Expressions --> Combinations of Operand and Operator

// Assignment Operator
    // An Assignment operator assigns a value to its left operand
    // based on the value of its right operand
    // The simple assignment operator is equal (=)

    // var x = 5;
    // var y = 5;
    // console.log("Is both the x and y are equal or not" + x == y); // Return false
    // console.log(x == y); // Return true
    
    // FOR es6  ==> // console.log('Is both the x and y are equal : ${x == y}');  ==> Return True


// ==================================================


// Arithmetic Operator
    // An arithmetic operator takes numerical values
    // (either literals or variables) as their operandsand
    // returns a single numerical value.

    // console.log(3+3);
    // console.log(10-5);
    // console.log(20/5);
    // console.log(5*6);
    // console.log(81%8); // The modulus operator (%) returns the division remainder.

    // console.log("Remainder Operator " + 81%8);

    // Increment and Decrement Operator
    // Operator: x++ or ++x or x-- or --x
    
    // If used postfix, with operator after operand (for example, x++),
    // the increment operator increments and returns the value before incrementing.

    // var num = 15;
    // var newNum = num++ + 5;
    // console.log(num);
    // console.log(newNum);   

    // var num = 15;
    // var newNum = num-- + 5;
    // console.log(num);
    // console.log(newNum); 

    // Postfix increment operator means the expression is evaluted
    // first using the original value of the variable and then the
    // variable is incremented(increased)

    // var num = 15;
    // var newNum = ++num + 5;
    // console.log(num);
    // console.log(newNum);

    // var num = 15;
    // var newNum = --num + 5; //(num-1 + 5)
    // console.log(num);
    // console.log(newNum);

    // Prefix increment operator means the variable is incremented first and then
    // the expression is evaluated using the new value of the variable.

    
    // If used prefix, with operator before operand (for wxample, ++x),
    // the increment operator increments and returns the value after incrementing.


// ==================================================


 // Comparison Operators

 // A Comparison operator compares its operands and 
 // returns a logical value based on whether the comparison is true.

//  var a = 30;
//  var b = 10;

 // Equal (=)
//  console.log(a == b);  // returns false

// Not Equal (!=)
// console.log(a != b); // return true

// Greater than (>)
// console.log(a > b); // return true

// Greater than or equal (>=)
// console.log(a >= b); // retrun true

// Less than (<)
// console.log(a < b); // return false

// Less than or equal  (<=)
// console.log(a <= b); //  return false  


// ==================================================

// Logical Operators
  // Logical Operators are typically used with Boolean (logical) values;
  // when they are, they return a  Boolean value.

// var a = 30;
// var b = -20;

// Logical AND ( && )
// The logical AND (&&) operator (logical conjunction) for a set of 
// operands is true if and only if all of its operands are true.

// console.log(a > b && b > -1 && b < 0);  // return False 
 
// Logical OR ( || )
// The logical OR ( || ) operator (logical disjuction) for a set of 
// operands is true if and only if one or more of iots operands is true.

// console.log(a > b || b > 0 || b < 0);  // Return true
// ******* ctrl+d select all operator and change with other sign 

// Logical NOT (!)
// The logical NOT (!) operator (logical complement, negation)
// takes truth to falsity and vice versa

// console.log(!((a>0) || (b<0))); // return false 

// console.log(!false); // return ture 
// console.log(!true); // return false 


// ==================================================


// String Concatenation(Operators)
// The concatenation operator (+) concatenaters two string values together,
// returning another string that is the union of the operand strings.

// console.log("Hello World");
// console.log("hello " + "world");
// var myName = "koushik";
// console.log(myName + ' biswas');


//===========Challenge Time=============

// What will be the output of 3**3?
// What will be the output, when we add a number and a string?
// Write a program to swap two numbers?
// Write a program to swap two numbers without using third variable?

//Solution 1
// console.log(3**5); // 3*3*3*3*3
// console.log(9**2); // 9*9  // * > stands for Exponentiation Operator
// console.log(10 ** -1); // 1/10

//Solution 2
// console.log(5 + ' Biswas'); // Return   5 Biswas 
// console.log(5 - ' Biswas');  // Return NaN

//Solution 3
// var a = 5;
// var b = 10;

// Need a Output b=5; a=10

// var c = b; //c = 10
// b = a; // b = 5;
// a = c;

// console.log("the value of a is " + a);
// console.log("the value of b is " + b);
// console.log("the value of c is " + c);

// Solution 4

// var a = 5;
// var b = 10;

// Need a Output b=5; a=10

// a = a+b; //a = 15
// b = a-b // b =5;
// a = a-b // a = 10;

// console.log("the value of a is " + a);
// console.log("the value of b is " + b);


// 3: INTERVIEW QUESTION
// What is the difference between == vs ===?

//sol
// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));

// console.log(num1 == num2);  //  == Check value

// 
// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num2);

// console.log(num1 === num2); // === Check value as well as type of object



/*========================================
  Control Statements and Loops 2:04:15
============================================*/

// If Else
// Switch Statement
// While Loop
// Do-While Loop
// For Loop
// For in Loop
// For of Loop
// Conditional (ternary) operator

// If ..Else
 // The If statement executes if a specified condition is truthy.
 // If the condition is falsy, another statement can be executed.













