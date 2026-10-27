// # Day 2 Exercises

// ## Today's project

// A program that adds up a month of expenses and tells you how much money is left. When it's done, it prints:

// ```
// Income: 3000
// Total expenses: 2100
// Money left: 900
// Percent spent: 70
// Overspending? false
// Number of expenses: 4
// ```

const income: number = 3000;
const rent: number = 1200;
const food: number = 450;
const transport: number = 150;
const other: number = 300;
console.log("Income:", income);

let totalExp=rent+food+transport+other
console.log("Total expenses:", totalExp)

let moneyleft=income-totalExp
console.log("Money left:", moneyleft)

let percentSpent=totalExp/income *100
console.log("Percent spent:" ,percentSpent)

let Overspending:boolean =percentSpent>100
console.log("Overspending?",Overspending)

console.log("Number of expenses: ",4)
// **Build it yourself first.** Use today's `README.md` as your reference. If you are stuck for 15 minutes, open `project-walkthrough.md`.

// Open a hint only after 10 minutes of trying.

// ## Challenge 1: Counter
// **Goal:** Practice `++` and `--`.
// **Requirements:** `let count` starts at 0. Add 1 three times, subtract 1 once, print it.
// **Expected output:** `2`

let count = 0;
count++;
count++;
count++;
count--;
console.log(count);

// <details><summary>Hint 1</summary>`count++;` adds 1, `count--;` subtracts 1.</details>

// ## Challenge 2: Piggy Bank
// **Goal:** Practice `+=`, `-=` and `*=`.
// **Requirements:** `let savings` starts at 100. Add 50, subtract 20, then double it. Print it.
// **Expected output:** `260`

let savings = 100;
savings += 50;
savings -= 20;
savings *= 2;
console.log(savings);

// <details><summary>Hint 1</summary>Three lines: `savings += 50;`, then `-=`, then `*=`.</details>

// ## Challenge 3: Savings Goal
// **Goal:** Work out progress and compare.
// **Requirements:** `goal` is 5000 and `saved` is 3250. Print the percent done, the amount remaining, and whether the goal is reached.
// **Expected output:**
// ```
// Percent done: 65
// Remaining: 1750
// Goal reached? false
// ```
const goal = 5000;
let saved = 3250;
let percent = (saved / goal) * 100;
let remaining = goal - saved;
let goalreached: boolean = remaining==0;
console.log("Perfect done: " + percent);
console.log("Remaining:" + remaining);
console.log("Goal reached?" + goalreached);
// <details><summary>Hint 1</summary>Percent is `saved / goal * 100`.</details>
// <details><summary>Hint 2</summary>"Reached" is a comparison between `saved` and `goal`.</details>
// <details><summary>Hint 3</summary>`const reached: boolean = saved >= goal;`</details>

// ## Challenge 4 (mini boss): Pass or Fail
// **Goal:** Use several comparisons.
// **Requirements:** `score` is 72 and `passMark` is 60. Print three booleans: did they pass, did they score a perfect 100, and did they score anything other than 0.
// **Expected output:**
// ```
// Passed? true
// Perfect? false
// Not zero? true
// ```

let score = 72;

let perfect: boolean = score===100
let notzero: boolean = score>0
let ispassed: boolean = score >= 60;
console.log("Passed" + ispassed);
console.log("perfect" + perfect);
console.log("notzero" + notzero);

// <details><summary>Hint 1</summary>Passed uses `>=`. Perfect uses `===`. Not zero uses `!==`.</details>

// ## When you finish
// Paste your code and output here for review.
