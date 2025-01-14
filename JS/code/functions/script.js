
(function ()
{
    console.log("hello world")
})();  //IIFE - Immediate Invoke function Expression / self invoke function  - security

// simple function

function display() {
	console.log("Hello functions") // function definition
}
display() // function call
console.log(display) // functions are treated as variables
// function expression
var display2 = function () 
{
	console.log("Bye functions")
}
display2()
// functions can take parameters - we can make paramaters optional by assigning a default value
function addition (a,b=10)
{
 console.log(a+b) //13
}
addition(5, 8)
addition(5)
//functions can also return the values
function sub (a, b)
{
    return a - b;
}
let p = sub(8, 5);
console.log(p)
// callback functions - functions inside the parameter of another functions
/*Mad is Passed as a parameter
to bad. so mad iscalled callback functions
bad is receiving mad as a paramter. bad is called Higher order Function*/
function mad ()
{
    console.log("JS is MAD")
  
}
function bad (a, b)
{
    console.log(a);
    b()
    console.log("JS is NOT BAD")
}
bad(5, mad)

/* closures */
/* if one function is inside another functions - nested function */
function x ()
{
 var c = 0;
    function y ()
    {
        c++; console.log(c);
    }
    return y;
}
let z = x()
console.log(z);
z()
z()  // closure means inner functions remembers outer function values even after outer function execution ended - we use techniques like memorization
