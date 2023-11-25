/*  Overview
1. introduction to the fundamentals of Algorithms
2. Data Structures of JS
3. Sort Search ... complexity
*/
// Big O - O(log(n)): when input size is reduced by half

//1. Fibonacci sequence  https://labuladong.github.io/algo/di-er-zhan-a01c6/dong-tai-g-a223e/dong-tai-g-1e688/
//case1: return single value start 1
//input  1 2 3 4 5
//output [0,1,1,2,3]
//O(2^n)
function fib(n) {
    if (n === 1) return 0;
    if (n === 2) return 1;
    return fib(n - 1) + fib(n - 2);
}
//case2: return array
//O(2^n)
function f(n) {
    if (n == 0) return [0];
    if (n == 1) return [0, 1];
    const arr = f(n - 1);//represent each layer
    return [...arr, arr[n - 1] + arr[n - 2]]; //6- [0, 1, 1, 2, 3, 5, 8]
}
//case3:return single value start 0
//input 0 1 2 3 4 (include 0)
//output [0,1,1,2,3]
//O(n)
var fib = function (N) {
    let memo = new Array(N + 1).fill(0);//because start 0 so N+1
    return dp(memo, N);
};
var dp = function (memo, n) {
    if (n == 0 || n == 1) return n;
    if (memo[n] != 0) return memo[n];//not save, just search
    //save each time the tree node
    memo[n] = dp(memo, n - 1) + dp(memo, n - 2);
    return memo[n];
};
//case4: from bottom to top(DP table)
//O(N)
var fib = function (N) {
    if (N === 0) return 0;// not use just
    let dp = new Array(N + 1).fill(0);
    dp[0] = 0; dp[1] = 1;
    for (let i = 2; i <= N; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[N];
};
//case5: save two states
//space complexity O(1) Time complexity is O(n)
var fib = function (n) {
    if (n === 0 || n === 1) {
        return n;
    }
    // represent the dp[i - 1] 和 dp[i - 2]
    let dp_i_1 = 1, dp_i_2 = 0;
    for (let i = 2; i <= n; i++) {
        let dp_i = dp_i_1 + dp_i_2;
        dp_i_2 = dp_i_1;
        dp_i_1 = dp_i;
    }
    return dp_i_1;
};

//2. Factorial of a number( factorial of 0 is 1)
//case: factorial(4) = 4*3*2*1 Big O = O(n)
/**
 * @param {number} 
 * @return {number}
 */
function factorial(num) {
    if (num === 0) return 1;
    res = num;
    while (num >= 2) {
        num -= 1;
        res = res * num;
    }
    return res;
}
//3. prime Number
//case: isPrime(4) false  Big O- O(sqrt(n))
/**
 * @param {number} n
 * @return  {boolean}
 */
function isPrime(n) {
    if (n <= 1) return false;//prime should large than 1
    if (n == 2) return true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
//4.Power of two
//case: isPowerOfTwo(4) true big O- O(log(n)) why? because the input size be half of it.n=n/2
/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
    if (n < 1) return false;
    while (n > 1) {
        if (n % 2 !== 0)
            return false;
        n = n / 2;
    }
    return true;// if n = 1; 2^0
}
//how to optimize it? - O n - O(1)
function isPowerOfTwoBitwise(n) {
    if (n < 1) return false;
    return n & (n - 1) === 0;// if ==0 then 2 ^n
}
//how to understand?
//when you use & operator, it transform to the binary number, then follow it rule to return
//eg the 7 is 0111, 8 is 1000, so each number to power of two ,1, 10, 100 
//are & with their previous one become 0, because they can multiple 2