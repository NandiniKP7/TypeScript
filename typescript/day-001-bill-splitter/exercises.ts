// # Day 1 Exercises

// ## Today's project

// A program that splits a restaurant bill between friends, with a tip. When it's done, it prints:

// ```
console.log("Welcome to the Bill Splitter!")
const bill:number= 130
let Tip:number= 13
let Total:number=bill+Tip 
let personPay=35
let leftover=3
let x=Total-leftover
let shares=x/personPay
let finalamount=Total/shares
console.log("Each person pays:"+finalamount)


// Each person pays: 35
// 
// ```



// **Build it yourself fir
// st.** Use today's `README.md` as your reference. If you are stuck for 15 minutes, open `project-walkthrough.md`.

// Try each one alone first. Open a hint only after 10 minutes of trying.
//------------------------------------------------------------------------------------------
// ## Challenge 1: Total Price
// **Goal:** Print the cost of buying several items.
// **Requirements:** A `price` of 40 and a `quantity` of 3, both `const` numbers. Print the total.
// **Expected output:** `120`
console.log("Total Price");
const price: number = 40;
const qty: number = 3;
let total: number = price * qty 
console.log(" total:" +total);
// <details><summary>Hint 1</summary>Use two variables and the `*` operator.</details>
// <details><summary>Hint 2</summary>`const total: number = price * quantity;`</details>
//-------------------------------------------------------------------------------------------------------------
// ## Challenge 2: ATM
// **Goal:** Track a balance.
// **Requirements:** `let balance` starts at 100. Take out 30 and print it. Then add 50 and print it.
// **Expected output:**
// ```
// 70
// 120
// ```
let balance = 100;
const takeout = 30;
let due = balance - takeout;
console.log("Balance after take out:" + due);
const post = 50;
due = due + post;
console.log("final balance:" + due);

// <details><summary>Hint 1</summary>`balance` must be `let`, because it changes.</details>
// <details><summary>Hint 2</summary>`balance = balance - 30;`</details>
//------------------------------------------------------------------------------------------------------------------
// ## Challenge 3: Minutes to Hours
// **Goal:** Convert minutes into hours and minutes.
// **Requirements:** `totalMinutes` is 135. Print the full hours and the leftover minutes on one line.
// **Expected output:** `2 hours 15 minutes`

let totalMinutes = 135;
const hour = 60;
let cal = 135 / 60;
let hours =Math.floor(cal)
let mins= (cal-hours)*60
console.log(hours+" hours" +mins+" minutes");

// <details><summary>Hint 1</summary>Full hours need division rounded down. Leftover minutes need the remainder.</details>
// <details><summary>Hint 2</summary>`Math.floor(totalMinutes / 60)` and `totalMinutes % 60`.</details>
// <details><summary>Hint 3</summary>`console.log(hours, "hours", minutes, "minutes");`</details>
//------------------------------------------------------------------------------------------------------------------
// ## Challenge 4 (mini boss): Pizza Party
// **Goal:** Share pizza slices fairly.
// **Requirements:** 3 pizzas with 8 slices each, 11 people. Print how many slices each person gets, and how many are left over.
// **Expected output:** `Each person gets 2 slices, 2 left over`
let pizzas = 3;
let slices = 8;
const people = 11;
let totalslices = pizzas * slices;
let individualShare = Math.floor(totalslices / people);
let leftoverShare =totalslices-individualShare*people

console.log("each person gets: " + individualShare, +leftoverShare+"leftOver");

// <details><summary>Hint 1</summary>First work out the total number of slices.</details>
// <details><summary>Hint 2</summary>It's the same idea as the bill splitter: `Math.floor` and `%`.</details>
// <details><summary>Hint 3</summary>`console.log("Each person gets", each, "slices,", left, "left over");`</details>

// ## Bonus
// Put the text `"ten"` into a `number` variable on purpose. Write a comment with the error TypeScript gives.

// ## When you finish
// Paste your code and output here. I'll review it, then show my solutions.