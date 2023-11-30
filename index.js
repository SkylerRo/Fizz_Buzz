for(let i =1; i <=100; i++) {
if (i % 3 == 0 && i % 5 == 0) {
console.log ("Fizz Buzz");

} else if (i % 3 == 0) {
console.log ("Fizz");

} else if (i % 5 == 0) {
console.log ("Buzz");

} else {
console.log (i)
}

}

for (let n = 5; n <= 10; n++) {
let isPrime = true;

for (let i = 2; i < n; i++) {
if (n % i == 0) {
    isPrime = false;
}

}

}

// Part 2: Prime Time
// Now we will move onto something slightly more complex.
// Context: A prime number is any whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1. For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; it can only be divided by itself (5) and 1. Similarly, the numbers 7 and 11 are prime. As numbers become larger, determining whether or not they are prime is increasingly difficult, but loops make this process relatively easy!
// Write a script that accomplishes the following:

// prime bigger than 1, 
// whole Number, 
// when #/# = 1 and 
// when #/1 = #

// As soon as you find the prime number, log that number and exit the loop.

// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
let num = 13;
let primeNum = false;
// 7 <= (13 / 2) = 6.5 -  while less than 6.5, keep going - stops at 7
for (let count = 2; count <= num / 2; count++) {
    // if 13 / 6 leaves a remainder of 0 - false because leaves remainder
    if (num % count == 0) {
        primeNum = true;
        console.log(count + " is prime.")
        break;
    }
        // add 1 to count
}
// if (primeNum = true)
//     console.log(count + " is prime.")
// Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
// Be careful! If you set n to a number too large, your loop could take a long time to process.

