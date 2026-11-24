# Day 30: Utility Toolkit, Part 2: Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
Five typed functions, called to print:

```
7 is even: false
12 is even: true
Age 17 adult: false
Age 30 adult: true
95 -> A
72 -> C
40 -> F
Average of 80, 90, 100: 90
clamp(150, 0, 100) = 100
clamp(-5, 0, 100) = 0
clamp(42, 0, 100) = 42
```

## What you'll learn
- Return types: `boolean`, `string`, `number`
- Making every path return
- Early returns

## Before you start
Create `day30.ts`. Run with `npx tsx day30.ts`.

## Build it, step by step

### Step 1: A boolean function
**Type this:**
```ts
function isEven(n: number): boolean {
  return n % 2 === 0;
}

console.log("7 is even:", isEven(7));
console.log("12 is even:", isEven(12));
```
**You should see:**
```
7 is even: false
12 is even: true
```
**Why:** `n % 2 === 0` is a comparison, so it is already `true` or `false`. The return type `boolean` says so.

### Step 2: Another yes/no question
**Type this above the `console.log` lines:**
```ts
function isAdult(age: number): boolean {
  return age >= 18;
}
```
**And at the bottom:**
```ts
console.log("Age 17 adult:", isAdult(17));
console.log("Age 30 adult:", isAdult(30));
```
**You should see:** `Age 17 adult: false` and `Age 30 adult: true`

### Step 3: A string function with several branches
**Type this:**
```ts
function gradeFor(score: number): string {
  if (score >= 90) {
    return "A";
  } else if (score >= 70) {
    return "C";
  } else {
    return "F";
  }
}

console.log("95 ->", gradeFor(95));
console.log("72 ->", gradeFor(72));
console.log("40 ->", gradeFor(40));
```
**You should see:** `95 -> A`, `72 -> C`, `40 -> F`
**Why:** every branch ends in a `return`, including the last `else`. Try deleting the `else` block: `tsc` reports error TS2366 because a path would return nothing.

### Step 4: Three parameters
**Type this:**
```ts
function average(a: number, b: number, c: number): number {
  return (a + b + c) / 3;
}

console.log("Average of 80, 90, 100:", average(80, 90, 100));
```
**You should see:** `Average of 80, 90, 100: 90`
**Why:** the brackets make the addition happen before the division.

### Step 5: `clamp` with early returns
**Type this:**
```ts
function clamp(value: number, min: number, max: number): number {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}

console.log("clamp(150, 0, 100) =", clamp(150, 0, 100));
console.log("clamp(-5, 0, 100) =", clamp(-5, 0, 100));
console.log("clamp(42, 0, 100) =", clamp(42, 0, 100));
```
**You should see:** `100`, `0`, `42` on the three lines.
**Why:** each `if` handles one special case and returns at once. The last `return value;` is the normal case, so every path returns a number.

### Step 6: Let the compiler check you
**Type this temporarily:**
```ts
clamp(5, 0);
```
**You should see:** a red underline in your editor with `Expected 3 arguments, but got 2.` Delete the line afterwards.
**Why:** TypeScript checks the argument count and types at every call.

## Check yourself
All eleven lines should match the output at the top. Run `npx tsc --noEmit --strict day30.ts` if you want to confirm there are no type errors (add `export {}` on the first line if you see "Cannot redeclare" messages).

## Recap
- Write the return type after the parameter list.
- Boolean functions can return a comparison directly.
- Every path of a function must return a value of the promised type.
- Early returns handle special cases first.

## If something breaks
- **TS2366 "Function lacks ending return statement":** a path has no `return`. Add a final `return` or an `else`.
- **TS2322 "Type 'string' is not assignable to type 'number'":** the body returns a different type than the promise. Check the value after `return`.
- **Wrong answer from `clamp`:** check the order of arguments. It is `(value, min, max)`.
