// # Day 6 Exercises

// ## Today's project

// Add two new features to the scoreboard: print every second score, and find scores that repeat right next to each other. For the scores `[70, 85, 85, 90, 90, 90, 60]` it prints:

// ```
// Every second score:
// 70
// 85
// 90
// 60
// Repeats in a row:
// Positions 2 and 3 both have 85
// Positions 4 and 5 both have 90
// Positions 5 and 6 both have 90
// ```

let sc=[70, 85, 85, 90, 90, 90, 60]
let tem:number[] =[]
for(let i=0;i<sc.length;i=i+2)
{
   console.log(sc[i]) 
}
for(let i=0;i<sc.length-1;i=i+1)
{
    if(sc[i]==sc[i+1])
    {
        console.log("Positions "+(i+1) +" and "+(i+2) +"have" +sc[i])
    }
}

// **Build it yourself first.** Use today's `README.md` as your reference. If you are stuck for 15 minutes, open `project-walkthrough.md`.

// Open a hint only after 10 minutes of trying.

// **Core (about 30 minutes):** the project and Challenges 1-2. Challenges 3-4 are stretch: do them if you have time, or carry them to the next day.

// ## Challenge 1: Countdown Print
// **Goal:** Loop backwards.
// **Requirements:** Print `[10, 20, 30, 40]` from the last item to the first.
// **Expected output:** `40`, `30`, `20`, `10` (one per line)

let arr = [10, 20, 30, 40];
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

// <details><summary>Hint 1</summary>Start `i` at the last index. Count down with `i--`.</details>
// <details><summary>Hint 2</summary>`for (let i = list.length - 1; i >= 0; i--)`</details>

// ## Challenge 2: Going Up
// **Goal:** Use look-ahead.
// **Requirements:** For `[3, 5, 4, 8, 9, 2]`, count how many times the next number is bigger than the current one.
// **Expected output:** `3`

let arr1 = [3, 5, 4, 8, 9, 2];

let temp = 0;
for (let i = 0; i < arr1.length - 1; i++) {
  if (arr1[i] < arr1[i + 1]) {
    temp = temp + 1;
  }
}
console.log(temp);

// <details><summary>Hint 1</summary>Compare `list[i]` with `list[i + 1]` and stop one early.</details>
// <details><summary>Hint 2</summary>The shape: `for (let i = 0; i < list.length - 1; i++) { if (list[i + 1] > list[i]) { ... } }`, with a counter that goes up inside the `if`.</details>

// ## Challenge 3: Every Third (stretch)
// **Goal:** Custom stepping.
// **Requirements:** For the numbers 1 to 20 printed with a loop, print only every third one starting at 1.
// **Expected output:** `1 4 7 10 13 16 19` (one per line is fine)

// <details><summary>Hint 1</summary>Start at 1 and step by 3: `i += 3`.</details>
// <details><summary>Hint 2</summary>The shape: `for (let i = 1; i <= 20; i += 3) { ... }`. Print `i` inside.</details>

for (let i = 1; i <= 20; i = i + 3) {
  console.log(i);
}
// ## Challenge 4 (mini boss, stretch): Longest Streak
// **Goal:** Track a running count while looking ahead.
// **Requirements:** For `[1, 1, 2, 2, 2, 3, 3]`, print the length of the longest run of the same number.
// **Expected output:** `3`

// <details><summary>Hint 1</summary>Keep two variables: the current streak and the best streak.</details>
// <details><summary>Hint 2</summary>If the next number is the same, add 1 to the streak. Otherwise reset it to 1.</details>
// <details><summary>Hint 3</summary>After each step, if the current streak is bigger than the best, copy it.</details>

let bcc = [1, 1, 2, 2, 2, 3, 3];
let currentstrk = 1;
let beststrk = 1;
for (let i = 0; i < bcc.length - 1; i++) {
  if (bcc[i] == bcc[i + 1]) {
    currentstrk = currentstrk + 1;
  } else {
    currentstrk=1;
  }
  if (currentstrk > beststrk) {
    beststrk=currentstrk
  }
}

// ## When you finish
// Paste your code and output here for review.
