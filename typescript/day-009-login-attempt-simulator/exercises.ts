// # Day 9 Exercises

// ## Today's project

// A program that tries a list of passwords and locks the account after 3 wrong tries. Blank entries are ignored. With attempts `["", "abc", "wrongpass", "xyz", "secret123"]` it prints:

// ```
// Blank attempt ignored
// Attempt 1: wrong
// Attempt 2: wrong
// Attempt 3: wrong
// Account locked after 3 attempts
// ```
// With attempts `["", "abc", "secret123"]` it prints:
// ```
// Blank attempt ignored
// Attempt 1: wrong
// Attempt 2: success
// ```

// **Build it yourself first.** Use today's `README.md` as your reference. If you are stuck for 15 minutes, open `project-walkthrough.md`.

// Open a hint only after 10 minutes of trying.

// **Core (about 30 minutes):** the project and Challenges 1-2. Challenges 3-4 are stretch: do them if you have time, or carry them to the next day.

// ## Challenge 1: Countdown
// **Goal:** Basic `while`.
// **Requirements:** Count down from 5 to 1, then print `Liftoff!`.
// **Expected output:** `5`, `4`, `3`, `2`, `1`, `Liftoff!` (one per line)

let i = 5;
while (i > 0) {
  console.log(i);
  i--;
}
console.log("Lift off!");

// <details><summary>Hint 1</summary>The condition is `n > 0`. Don't forget `n--`.</details>
// <details><summary>Hint 2</summary>The shape: `let n = 5; while (n > 0) { console.log(n); n--; }`, then print `Liftoff!` after the loop.</details>

// ## Challenge 2: Digit Sum
// **Goal:** Use `%` and `Math.floor` in a loop.
// **Requirements:** For `n = 1234`, add its digits and print the sum.
// **Expected output:** `10`

let n = 1234;
let total = 0;
while (n > 0) {
  total = total + (n % 10);
  n = Math.floor(n / 10);
}
console.log(total);
// <details><summary>Hint 1</summary>`n % 10` gives the last digit.</details>
// <details><summary>Hint 2</summary>`Math.floor(n / 10)` removes the last digit. Repeat while `n > 0`.</details>

// ## Challenge 3: Run At Least Once (stretch)
// **Goal:** Use `do...while`.
// **Requirements:** Print `Welcome!` once, then keep asking "again?" by decreasing a counter that starts at 2, until it reaches 0. Print the counter each time. Use `do...while`.
// **Expected output:**
// ```
// Welcome!
// 2
// 1
// 0
// ```
let a = 3;
console.log("Welcome");
do {
  a--;
  console.log(a);
} while (a > 0);

// <details><summary>Hint 1</summary>Put the `Welcome!` outside the loop. The counter is printed inside, after it changes.</details>
// <details><summary>Hint 2</summary>Think about where the `counter--` goes so that `2` is printed first.</details>

// ## Challenge 4 (mini boss, stretch): Doubling Savings
// **Goal:** Loop until something happens.
// **Requirements:** You have 1000 and it grows 7% every year. How many years until you have at least 2000? Print the years.
// **Expected output:** `11`

// <details><summary>Hint 1</summary>You don't know how many rounds it takes. That is a job for `while`.</details>
// <details><summary>Hint 2</summary>Each year: `money = money * 1.07; years++;`</details>

// ## When you finish
// Paste your code and output here for review.

let reqnum = 2000;
let mynum = 1000;
let years = 0;
while (mynum < reqnum) {
  mynum = mynum + (mynum * 7) / 100;
  years = years + 1;
}
console.log("No of years", years);

const attempts = ["", "abc", "wrongpass", "xyz", "secret123"];

// Blank attempt ignored
// Attempt 1: wrong
// Attempt 2: wrong
// Attempt 3: wrong
// Account locked after 3 attempts

let index = 0;
let attemp = 0;
while (attempts.length > index) {
  if (attempts[index] == "") {
    index++;
    continue;
  }
  if (attempts[index] != "secret123") {
    console.log("Wrong");
    attemp++;
    index++;
    if (attemp == 3) {
      console.log("Account locked after 3 attempts");
      break;
  }
}
  else if(attempts[index] == "secret123"){
    console.log("Success")
    break;
  }
}
const attempt2 = ["", "abc", "secret123"];

// Blank attempt ignored
// Attempt 1: wrong
// Attempt 2: success
