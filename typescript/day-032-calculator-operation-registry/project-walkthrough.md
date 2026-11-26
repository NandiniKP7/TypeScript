# Day 32: Calculator Operation Registry: Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
A registry of calculator operations that can be looped over and looked up by symbol:

```
8 + 2 = 10
8 - 2 = 6
8 * 2 = 16
8 / 2 = 4
8 % 2 = 0
calculate("*", 6, 7) = 42
Unknown operator: ?
NaN
```

## What you'll learn
- Function type aliases
- Storing functions in variables, objects and arrays

## Before you start
Create `day32.ts`. Run with `npx tsx day32.ts`.

## Build it, step by step

### Step 1: The contract
**Type this:**
```ts
type Operation = (a: number, b: number) => number;
```
**You should see:** nothing yet. This line only creates a type name.
**Why:** every calculator operation takes two numbers and returns a number. We write that once.

### Step 2: Two operations
**Type this:**
```ts
const add: Operation = (a, b) => a + b;
const subtract: Operation = (a, b) => a - b;

console.log(add(8, 2));
console.log(subtract(8, 2));
```
**You should see:**
```
10
6
```
**Why:** `a`, `b` and the result are typed by `Operation`, so you do not repeat the types. Delete the two `console.log` lines when you have seen the output.

### Step 3: The other three
**Type this:**
```ts
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;
const remainder: Operation = (a, b) => a % b;
```
**Why:** each function follows the same contract but does a different job.

### Step 4: The registry
**Type this:**
```ts
const registry: { symbol: string; run: Operation }[] = [
  { symbol: "+", run: add },
  { symbol: "-", run: subtract },
  { symbol: "*", run: multiply },
  { symbol: "/", run: divide },
  { symbol: "%", run: remainder },
];
```
**Why:** an array of objects, each with a text `symbol` and the function that goes with it.

### Step 5: Loop and call
**Type this:**
```ts
for (const entry of registry) {
  console.log(`8 ${entry.symbol} 2 = ${entry.run(8, 2)}`);
}
```
**You should see:**
```
8 + 2 = 10
8 - 2 = 6
8 * 2 = 16
8 / 2 = 4
8 % 2 = 0
```
**Why:** `entry.run` is the stored function. Adding `(8, 2)` calls it. Inside the template literal, `${...}` inserts the result into the text.

### Step 6: Look up by symbol
**Type this:**
```ts
function calculate(symbol: string, a: number, b: number): number {
  for (const entry of registry) {
    if (entry.symbol === symbol) {
      return entry.run(a, b);
    }
  }
  console.log("Unknown operator: " + symbol);
  return NaN;
}

console.log(`calculate("*", 6, 7) = ${calculate("*", 6, 7)}`);
```
**You should see:** `calculate("*", 6, 7) = 42`
**Why:** the loop searches for the matching symbol. `return` inside the loop stops the whole function as soon as it finds it. The `return NaN` after the loop covers the path where nothing matched, so every path returns a number.

### Step 7: Unknown operator
**Type this:**
```ts
console.log(calculate("?", 1, 2));
```
**You should see:**
```
Unknown operator: ?
NaN
```
**Why:** no entry has the symbol `?`, so the loop ends without a match. `NaN` means "not a number".

## Check yourself
Eight lines, matching the top of this page. To add a power operation later, you would only write one new function and one new registry line.

## Recap
- `type Operation = (a: number, b: number) => number` names a function shape.
- Functions can be stored in `const`s, objects and arrays.
- `entry.run(8, 2)` reads and calls a stored function.
- A search loop with an early `return`, and a fallback after it.

## If something breaks
- **TS2322 on one operation:** the function does not match `Operation`. Check its return value and parameters.
- **`entry.run is not a function` at run time:** a registry entry has a missing or misspelled `run`.
- **`calculate` prints `Unknown operator` for a valid symbol:** the symbol text must match exactly, for example `"*"`, not `"x"`.
