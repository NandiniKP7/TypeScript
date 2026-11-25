# Day 31: Flexible Score Calculator and Shipping Quote: Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
Score functions that take any number of scores, and a shipping quote with a default and an optional parameter:

```
Total: 255
Average: 85
Best: 92
No scores: 0
Standard 2kg: $9
Express 2kg: $19
Standard 2kg with SAVE5: $4
Express 3kg with SAVE5: $16
Standard 0kg with SAVE5: $0
```

## What you'll learn
- Rest parameters
- Default parameters
- Optional parameters

## Before you start
Create `day31.ts`. Run with `npx tsx day31.ts`.

## Build it, step by step

### Step 1: A total of any number of scores
**Type this:**
```ts
function totalScore(...scores: number[]): number {
  let total = 0;
  for (const score of scores) {
    total += score;
  }
  return total;
}

console.log("Total:", totalScore(80, 92, 83));
console.log("No scores:", totalScore());
```
**You should see:**
```
Total: 255
No scores: 0
```
**Why:** `...scores` collects the arguments into an array. With none, the array is empty and the total stays `0`.

### Step 2: Average, with a guard
**Type this under `totalScore`:**
```ts
function averageScore(...scores: number[]): number {
  if (scores.length === 0) {
    return 0;
  }
  return totalScore(...scores) / scores.length;
}

console.log("Average:", averageScore(80, 90, 85, 85));
```
**You should see:** `Average: 85`
**Why:** dividing by zero would give `NaN`, so we return early for an empty list. `...scores` in the call spreads the array back into separate arguments.

### Step 3: Best score
**Type this:**
```ts
function bestScore(...scores: number[]): number {
  if (scores.length === 0) {
    return 0;
  }
  let best = scores[0];
  for (const score of scores) {
    if (score > best) {
      best = score;
    }
  }
  return best;
}

console.log("Best:", bestScore(80, 92, 83));
```
**You should see:** `Best: 92`
**Why:** start with the first score, then replace it whenever a bigger one appears.

### Step 4: Shipping quote with a default
**Type this:**
```ts
function shippingQuote(weightKg: number, express: boolean = false): number {
  let cost = 5 + weightKg * 2;
  if (express) {
    cost += 10;
  }
  return cost;
}

console.log("Standard 2kg: $" + shippingQuote(2));
console.log("Express 2kg: $" + shippingQuote(2, true));
```
**You should see:**
```
Standard 2kg: $9
Express 2kg: $19
```
**Why:** `express` defaults to `false`, so a call with only the weight is a standard quote.

### Step 5: Add the optional coupon
**Change the function to:**
```ts
function shippingQuote(weightKg: number, express: boolean = false, couponCode?: string): number {
  let cost = 5 + weightKg * 2;
  if (express) {
    cost += 10;
  }
  if (couponCode === "SAVE5") {
    cost -= 5;
  }
  if (cost < 0) {
    cost = 0;
  }
  return cost;
}
```
**Why:** `couponCode?` may be `undefined`. Comparing it with `"SAVE5"` is safe, because `undefined === "SAVE5"` is simply `false`. The last `if` makes sure the cost never goes below 0.

### Step 6: Call with the coupon
**Type this:**
```ts
console.log("Standard 2kg with SAVE5: $" + shippingQuote(2, false, "SAVE5"));
console.log("Express 3kg with SAVE5: $" + shippingQuote(3, true, "SAVE5"));
console.log("Standard 0kg with SAVE5: $" + shippingQuote(0, undefined, "SAVE5"));
```
**You should see:**
```
Standard 2kg with SAVE5: $4
Express 3kg with SAVE5: $16
Standard 0kg with SAVE5: $0
```
**Why:** in the last call, `undefined` skips `express` and uses its default `false`, so we can still set the coupon after it. For a weight of 0 the cost is `5`, minus 5 is `0`.

## Check yourself
Nine lines of output, matching the top of this page.

## Recap
- `...scores: number[]` takes any number of arguments.
- `express: boolean = false` gives a default.
- `couponCode?: string` is optional and may be `undefined`.
- Passing `undefined` uses the default.

## If something breaks
- **`NaN` for an average with no scores:** you divided by zero. Add the early return for an empty list.
- **TS18048 "possibly undefined":** you used an optional value without checking it first.
- **TS1016 about a required parameter:** move optional parameters after the required ones.
