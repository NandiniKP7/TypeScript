# Day 6: Scoreboard (Part 2): Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
Add two new features to the scoreboard: print every second score, and find scores that repeat right next to each other. For the scores `[70, 85, 85, 90, 90, 90, 60]` it prints:

```
Every second score:
70
85
90
60
Repeats in a row:
Positions 2 and 3 both have 85
Positions 4 and 5 both have 90
Positions 5 and 6 both have 90
```

## What you'll learn
- Off-by-one mistakes and how to avoid them
- Skipping items (custom stepping)
- Looking at the next item (`i + 1`) safely

## Before you start
Create `day6.ts`. Run with `npx tsx day6.ts`.

## Build it, step by step

### Step 1: The data
**Type this:**
```ts
const scores: number[] = [70, 85, 85, 90, 90, 90, 60];
```

### Step 2: See an off-by-one bug
**Type this:**
```ts
for (let i = 0; i <= scores.length; i++) {
  console.log(scores[i]);
}
```
**You should see:** all seven scores, then `undefined`.
**Why:** `<=` makes the loop run one time too many. The last real index is 6, but `i` also reaches 7. This is called an **off-by-one error**. Change `<=` to `<` and the extra line goes away.

### Step 3: Every second score (custom stepping)
**Type this (replace the loop):**
```ts
console.log("Every second score:");
for (let i = 0; i < scores.length; i += 2) {
  console.log(scores[i]);
}
```
**You should see:** `70`, `85`, `90`, `60`
**Why:** The third part of the loop can be anything. `i += 2` jumps two at a time, so `i` is 0, 2, 4, 6.

### Step 4: Compare with the next score
**Type this:**
```ts
console.log("Repeats in a row:");
for (let i = 0; i < scores.length - 1; i++) {
  if (scores[i] === scores[i + 1]) {
    console.log("Positions", i + 1, "and", i + 2, "both have", scores[i]);
  }
}
```
**You should see:** the three "Positions..." lines from the top of this page.
**Why:** `scores[i + 1]` is the next item. For the last item there is no next one, so the loop must stop one early: `i < scores.length - 1`. Try changing it back to `scores.length` and see what happens (nothing prints wrongly here, but you compared a score with `undefined`, which is always a mistake). Change it back.

## Check yourself
The output should match the top of this page.

## Recap
- Off-by-one: `<` stops at the last item, `<=` goes one too far.
- `i += 2` skips every other item.
- Using `i + 1` means the loop must end one earlier.

## If something breaks
- **`undefined` in output:** you read past the end. Check the loop condition.
- **Prints nothing:** check that the two values are being compared with `===` and the loop actually runs.
