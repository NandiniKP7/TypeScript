# Day 7: Scoreboard (Part 3): Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
Finish the scoreboard with a full report that counts duplicate scores. For `[70, 85, 85, 90, 90, 90, 60]` it prints:

```
Total: 570
Highest: 90
Lowest: 60
85 appears 2 times
90 appears 3 times
```

## What you'll learn
- A loop inside a loop (nested loops)
- Counting how often something appears
- Remembering what you have already handled

## Before you start
Create `day7.ts`. Run with `npx tsx day7.ts`.

## Build it, step by step

### Step 1: Start with what you know
**Type this:**
```ts
const scores: number[] = [70, 85, 85, 90, 90, 90, 60];

let total: number = 0;
let highest: number = scores[0];
let lowest: number = scores[0];

for (let i = 0; i < scores.length; i++) {
  total += scores[i];
  if (scores[i] > highest) {
    highest = scores[i];
  }
  if (scores[i] < lowest) {
    lowest = scores[i];
  }
}

console.log("Total:", total);
console.log("Highest:", highest);
console.log("Lowest:", lowest);
```
**You should see:** `Total: 570`, `Highest: 90`, `Lowest: 60`
**Why:** One loop can do several jobs at once.

### Step 2: A loop inside a loop
**Type this:**
```ts
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log("i =", i, "j =", j);
  }
}
```
**You should see:** nine lines.
**Why:** For every single round of the outer loop (`i`), the inner loop (`j`) runs all of its rounds. That is 3 × 3 = 9 lines. Delete this experiment when you're done.

### Step 3: Count how often one score appears
**Type this:**
```ts
let count: number = 0;
for (let j = 0; j < scores.length; j++) {
  if (scores[j] === 85) {
    count++;
  }
}
console.log("85 appears", count, "times");
```
**You should see:** `85 appears 2 times`
**Why:** This loop counts matches for one fixed value. Next we do it for every value.

### Step 4: Count every score (nested)
**Type this:**
```ts
for (let i = 0; i < scores.length; i++) {
  let times: number = 0;
  for (let j = 0; j < scores.length; j++) {
    if (scores[j] === scores[i]) {
      times++;
    }
  }
  console.log(scores[i], "appears", times, "times");
}
```
**You should see:** seven lines. The score 85 is printed twice and 90 three times.
**Why:** The outer loop picks a score. The inner loop counts it. But we print the same score again for each duplicate. Let's fix that.

### Step 5: Remember what you already handled
**Type this (replace Step 4):**
```ts
const done: number[] = [];

for (let i = 0; i < scores.length; i++) {
  if (done.includes(scores[i])) {
    continue;
  }

  let times: number = 0;
  for (let j = 0; j < scores.length; j++) {
    if (scores[j] === scores[i]) {
      times++;
    }
  }

  if (times > 1) {
    console.log(scores[i], "appears", times, "times");
  }
  done.push(scores[i]);
}
```
**You should see:** `85 appears 2 times` and `90 appears 3 times`
**Why:**
- `done` is a list that remembers scores we already counted.
- `done.includes(x)` answers `true` or `false`: is `x` in the list?
- `done.push(x)` adds `x` to the end of the list.
- `continue` skips the rest of this round and goes to the next. (We cover it fully on Day 8.)
- `times > 1` prints only the duplicates.

## Check yourself
Your output should match the top of this page.

## Recap
- Nested loops: the inner loop runs fully for each outer round.
- To count things, use a counter that starts at 0.
- A "done" list stops you from repeating work.

## If something breaks
- **Counts are too big:** the counter must be reset to 0 inside the outer loop.
- **Duplicates print more than once:** check that you add each score to `done`.
