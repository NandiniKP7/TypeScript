// # Day 7 Exercises

// ## Today's project

// Finish the scoreboard with a full report that counts duplicate scores. For `[70, 85, 85, 90, 90, 90, 60]` it prints:

// ```
// Total: 570
// Highest: 90
// Lowest: 60
// 85 appears 2 times
// 90 appears 3 times
// ```
let myscores = [70, 85, 85, 90, 90, 90, 60];
let total = 0;
let highet = myscores[0];
let lowest = myscores[0];
let count = 1;
let myprocessnumber: number[] = [];
for (let i = 0; i < myscores.length; i++) {
  total = total + myscores[i];
  count = 0;
  if (!myprocessnumber.includes(myscores[i])) {
    for (let j = 1; j < myscores.length; j++) {
      if (myscores[j] < myscores[i]) {
        if (lowest > myscores[j]) {
          lowest = myscores[j];
        }
      }
      if (myscores[i] < myscores[j]) {
        if (highet < myscores[j]) {
          highet = myscores[j];
        }
      }
      if (myscores[i] == myscores[j]) {
        count = count + 1;
      }
      
    }
    if (count > 1) {
        console.log(myscores[i] + " appears " + count + " times");
      }
      myprocessnumber.push(myscores[i]);
  }
}
console.log("total:" + total);
console.log("highestScore", highet);
console.log("lowest", lowest);
// **Build it yourself first.** Use today's `README.md` as your reference. If you are stuck for 15 minutes, open `project-walkthrough.md`.

// Open a hint only after 10 minutes of trying.

// **Core (about 30 minutes):** the project and Challenges 1-2. Challenges 3-4 are stretch: do them if you have time, or carry them to the next day.

// ## Challenge 1: Multiplication Table
// **Goal:** Nested loops.
// **Requirements:** Print the 3 × 3 table: each row has the products for 1, 2, 3 on one line.
// **Expected output:**
// ```
// 1 2 3
// 2 4 6
// 3 6 9

for (let i = 1; i <= 3; i++) {
  let line: string = "";
  for (let j = 1; j <= 3; j++) {
    let p = i * j;
    line = line + p + " ";
  }
  console.log(line);
}

// ```
// <details><summary>Hint 1</summary>The outer loop is the row, the inner loop is the column. Product = row × column.</details>
// <details><summary>Hint 2</summary>Build the row as a string (`let line: string = "";`), add to it in the inner loop, and print it after the inner loop ends.</details>
// <details><summary>Hint 3</summary>`line += (row * col) + " ";`</details>

// ## Challenge 2: Count a Value
// **Goal:** Count matches.
// **Requirements:** For `[4, 7, 4, 9, 4, 1]`, print how many times 4 appears.
// **Expected output:** `3`

let nums = [4, 7, 4, 9, 4, 1];

let repeatCount = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] == 4) {
    repeatCount = repeatCount + 1;
  }
}
console.log(" 4  appears:" + repeatCount);
// <details><summary>Hint 1</summary>One loop, one counter.</details>
//<details><summary>Hint 2</summary>The shape: `let count = 0;`, then a loop over the list with an `if` that compares each item with 4 and adds 1 to `count`. Print `count` after the loop.</details>

// ## Challenge 3: Unique Values (stretch)
// **Goal:** Use a "done" list.
// **Requirements:** For `[3, 1, 3, 2, 1, 5]`, print each value once.
// **Expected output:** `3 1 2 5` (one per line is fine)

let numbs = [3, 1, 3, 2, 1, 5];
let newarr: number[] = [];
for (let i = 0; i < numbs.length; i++) {
  if (!newarr.includes(numbs[i])) {
    newarr.push(numbs[i]);
  }
}
console.log(newarr);
// <details><summary>Hint 1</summary>Build a new list. Only add a value if it isn't already in the list.</details>
// <details><summary>Hint 2</summary>`if (!unique.includes(value)) { unique.push(value); }`</details>

// ## Challenge 4 (mini boss, stretch): Pair Finder
// **Goal:** Nested loops with a condition.
// **Requirements:** For `[2, 7, 11, 15]` and target `9`, print the two numbers that add up to the target.
// **Expected output:** `2 + 7 = 9`

// <details><summary>Hint 1</summary>Compare every item with every later item.</details>
// <details><summary>Hint 2</summary>The inner loop can start at `i + 1`.</details>
// <details><summary>Hint 3</summary>`if (list[i] + list[j] === target)`</details>

let mynums = [2, 7, 11, 15];
let mytarget = 9;
for (let i = 0; i < mynums.length; i++) {
  for (let j = i + 1; j < mynums.length; j++) {
    if (mynums[i] + mynums[j] == mytarget) {
      console.log(mynums[i] + " and " + mynums[j]);
    }
  }
}
// ## When you finish
// Paste your code and output here for review.
