# Day 5: Scoreboard (Part 1): Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
A program that goes through a list of test scores and prints the total, the average and the highest score. It prints:

```
Score 1: 72
Score 2: 95
Score 3: 88
Score 4: 60
Score 5: 95
Total: 410
Average: 82
Highest: 95
```

## What you'll learn
- A list of values (an array) and counting from zero
- The `for` loop
- Never going past the end of a list (array boundaries)

## Before you start
Create `day5.ts`. Run with `npx tsx day5.ts`.

## Build it, step by step

### Step 1: A list of scores
**Type this:**
```ts
const scores: number[] = [72, 95, 88, 60, 95];
console.log(scores.length);
console.log(scores[0]);
console.log(scores[4]);
```
**You should see:** `5`, `72`, `95`
**Why:** `number[]` means "a list of numbers". `scores.length` is how many items there are. Items are numbered from **0**: `scores[0]` is the first, `scores[4]` is the fifth. Computers start counting at 0.

### Step 2: Look past the end
**Type this:**
```ts
console.log(scores[5]);
```
**You should see:** `undefined`
**Why:** There is no item 5. The last item is always at `length - 1`. This is the root of most loop bugs, so remember it. Delete the line.

### Step 3: Your first `for` loop
**Type this:**
```ts
for (let i = 0; i < scores.length; i++) {
  console.log("Score", i + 1, ":", scores[i]);
}
```
**You should see:** five lines like `Score 1 : 72`
**Why:** A `for` loop repeats a block. The three parts in `( )` are:
- `let i = 0`: start the counter at 0
- `i < scores.length`: keep going while this is true
- `i++`: add 1 after each round

Inside the block, `scores[i]` is the item for the current counter. `i + 1` is just for nicer numbering.

### Step 4: Add up the total
**Type this:**
```ts
let total: number = 0;
for (let i = 0; i < scores.length; i++) {
  total += scores[i];
}
console.log("Total:", total);
```
**You should see:** `Total: 410`
**Why:** `total` starts at 0 and gains each score in turn: 72, then 167, then 255...

### Step 5: The average
**Type this:**
```ts
const average: number = total / scores.length;
console.log("Average:", average);
```
**You should see:** `Average: 82`

### Step 6: Find the highest
**Type this:**
```ts
let highest: number = scores[0];
for (let i = 1; i < scores.length; i++) {
  if (scores[i] > highest) {
    highest = scores[i];
  }
}
console.log("Highest:", highest);
```
**You should see:** `Highest: 95`
**Why:** Start by assuming the first score is the highest, then check the rest. Whenever a bigger one appears, replace it. The loop starts at 1 because item 0 is already in `highest`.

## Check yourself
Run the file. The output should match the top of this page.

## Recap
- Arrays count from 0. The last item is at `length - 1`.
- A `for` loop has a start, a condition and a step.
- Use `<` with `length`, not `<=`.

## If something breaks
- **`undefined` or `NaN` in the output:** your loop went one step too far. Check `i < scores.length`.
- **Infinite loop (program never stops):** press Ctrl + C in the terminal, then check the third part of the loop.
