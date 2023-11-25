//Recursion is a problem solving technique where the solution depends on smaller instance of the same problem.
//Analogy(类推法)
/**
 * points
 * 1. Base case - a condition to terminate the Recursion.
 * 2. State -
 */
//Recursion of Fibonacci sequence O(2^n) - need to be changed
function fib(n){
    if(n === 0) return 0;
    if(n === 1) return 1;
    return fib(n-1) + fib(n-2);
}
//Recursive factorial of a number f(n) = n!
function fac(n){
    if(n === 0 ) return 1;
    //if(n === 1) return 1; because 1 * 1
    return n * fac(n-1);
}