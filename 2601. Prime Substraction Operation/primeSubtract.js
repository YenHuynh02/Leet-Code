/**
 * @param {number[]} nums
 * @return {boolean}
 */
var primeSubOperation = function (nums) {
    // Step 1: Generate all primes up to 1000 using Sieve of Eratosthenes
    const MAX = 1000;
    const isPrime = new Array(MAX + 1).fill(true);
    isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime
    for (let i = 2; i * i <= MAX; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= MAX; j += i) {
                isPrime[j] = false;
            }
        }
    }
    const primes = [];
    for (let i = 2; i <= MAX; i++) {
        if (isPrime[i]) primes.push(i);
    }

    // Step 2: Try to make the array strictly increasing
    let prev = 0; // Previous value in the strictly increasing sequence
    for (let i = 0; i < nums.length; i++) {
        // Find the largest prime less than nums[i] and greater than prev
        let found = false;
        for (let j = primes.length - 1; j >= 0; j--) {
            if (primes[j] < nums[i] && nums[i] - primes[j] > prev) {
                nums[i] -= primes[j]; // Subtract the prime
                found = true;
                break;
            }
        }

        // If no valid prime subtraction is possible, return false
        if (!found && nums[i] <= prev) return false;

        // Update prev to the current element
        prev = nums[i];
    }

    return true;
};

// Test cases
console.log(primeSubOperation([4, 9, 6, 10])); // Expected: true
console.log(primeSubOperation([6, 8, 11, 12])); // Expected: true
console.log(primeSubOperation([5, 8, 3])); // Expected: false
console.log(primeSubOperation([17, 2])); // Expected: false
