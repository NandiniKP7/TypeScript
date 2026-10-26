# Day 1: Bill Splitter: Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
A program that splits a restaurant bill between friends, with a tip. When it's done, it prints:

```
Welcome to the Bill Splitter!
Bill: 130
Tip: 13
Total: 143
Each person pays: 35
Leftover: 3
```

## What you'll learn
- How to store values in variables (`const` and `let`)
- The basic types: `string`, `number`, `boolean`
- Arithmetic: `+ - * / %` and `Math.floor`

## Before you start
1. Check Node is installed: open a terminal and type `node -v`. You should see a version number.
2. Create a folder `ts-days` and a file `day1.ts` inside it.
3. To run a file, open a terminal **in that folder** and type: `npx tsx day1.ts`. If it asks to install `tsx`, answer `y`.

## Build it, step by step

### Step 1: Print a message
**Type this:**
```ts
console.log("Welcome to the Bill Splitter!");
```
**You should see:** `Welcome to the Bill Splitter!`
**Why:** `console.log(...)` prints whatever is inside the brackets to the terminal. Text goes in quotes.

### Step 2: Store the bill in a variable
**Type this (below the first line):**
```ts
const bill: number = 130;
console.log("Bill:", bill);
```
**You should see:** `Bill: 130`
**Why:** A variable is a name that holds a value. Read the first line piece by piece:
- `const`: this name will not be given a new value later
- `bill`: the name we chose
- `: number`: the type, meaning the value is a number
- `= 130`: store 130

`console.log` can print several things separated by commas.

### Step 3: Add the other inputs
**Type this:**
```ts
const people: number = 4;
const tipPercent: number = 10;
```
**You should see:** nothing new yet. We stored the values but didn't print them.
**Why:** `people` is how many friends share the bill. `tipPercent` is the tip as a percentage.

### Step 4: Calculate the tip
**Type this:**
```ts
const tip: number = bill * tipPercent / 100;
console.log("Tip:", tip);
```
**You should see:** `Tip: 13`
**Why:** `*` multiplies and `/` divides. The computer works left to right: `130 * 10` is 1300, then `/ 100` is 13. The result is stored in `tip`.

### Step 5: Calculate the total
**Type this:**
```ts
const total: number = bill + tip;
console.log("Total:", total);
```
**You should see:** `Total: 143`
**Why:** The `=` sign does not mean "equals". It means: work out the right side first, then store it in the name on the left.

### Step 6: Split between people
**Type this:**
```ts
const share: number = Math.floor(total / people);
console.log("Each person pays:", share);
```
**You should see:** `Each person pays: 35`
**Why:** 143 / 4 is 35.75. `Math.floor` rounds down to a whole number, so each person pays 35.

### Step 7: The leftover
**Type this:**
```ts
const leftover: number = total % people;
console.log("Leftover:", leftover);
```
**You should see:** `Leftover: 3`
**Why:** `%` gives the remainder. 4 goes into 143 thirty-five times (35 × 4 = 140), and 143 - 140 = 3 is left over.

### Step 8: Meet `let`, and see TypeScript protect you
**Type this at the bottom:**
```ts
let guests: number = 4;
guests = 5;
console.log("Guests:", guests);
```
**You should see:** `Guests: 5`
**Why:** `let` is for a value that will change. `const` is for one that won't.

Now type these two lines. Each one shows a red error underline. Read the errors, then delete the lines:
```ts
people = 6;       // Cannot assign to 'people' because it is a constant
guests = "five";  // Type 'string' is not assignable to type 'number'
```
**Why:** TypeScript stops you from changing a `const` and from putting text in a `number` variable.

## Check yourself
Run the whole file. The first six lines should match the output at the top.

## Recap
- A variable is a name holding a value; `const` can't change, `let` can.
- Types: `string` (text in quotes), `number`, `boolean` (`true` or `false`).
- `=` stores the right side in the left.
- `+ - * / %` do arithmetic; `Math.floor` rounds down.

## If something breaks
- **`npx` or `node` not found:** Node isn't installed or the terminal wasn't reopened after installing.
- **`Cannot find name 'bil'`:** a typo. The name must match exactly, including capitals.
- **Nothing prints:** you forgot `console.log`, or you're running the wrong file name.
