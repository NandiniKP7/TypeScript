# Day 16: Receipt Printer: Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
A receipt printer. It uses `forEach` to print every line with its number and line total, then a grand total. It prints:

```
RECEIPT
1. Coffee x2 = 7.00
2. Bagel x1 = 2.25
3. Juice x3 = 12.00
TOTAL: 21.25
```

## What you'll learn
- `forEach` with an arrow function and an index
- A `type` for an object shape
- `.toFixed(2)` for money
- Collecting a total with a variable declared before the loop

## Before you start
Create `day16.ts`. Run with `npx tsx day16.ts`.

## Build it, step by step

### Step 1: Name the shape and add the data
**Type this:**
```ts
type Line = { name: string; price: number; quantity: number };

const lines: Line[] = [
  { name: "Coffee", price: 3.5, quantity: 2 },
  { name: "Bagel", price: 2.25, quantity: 1 },
  { name: "Juice", price: 4, quantity: 3 },
];
```
**You should see:** nothing yet.
**Why:** `Line` says every line has a text name and two numbers. `Line[]` is a list of them. If you misspell a property, TypeScript will tell you.

### Step 2: Print each name with `forEach`
**Type this:**
```ts
console.log("RECEIPT");

lines.forEach((line) => {
  console.log(line.name);
});
```
**You should see:**
```
RECEIPT
Coffee
Bagel
Juice
```
**Why:** The function in `forEach` runs once per line. `line` is one object each time.

### Step 3: Add the index and the line total
**Change the callback to:**
```ts
lines.forEach((line, index) => {
  const lineTotal: number = line.price * line.quantity;
  console.log(`${index + 1}. ${line.name} x${line.quantity} = ${lineTotal}`);
});
```
**You should see:**
```
1. Coffee x2 = 7
2. Bagel x1 = 2.25
3. Juice x3 = 12
```
**Why:** The second parameter is the index, starting at 0, so we print `index + 1`.

### Step 4: Show money with 2 decimals
**Change `${lineTotal}` to `${lineTotal.toFixed(2)}`:**
```ts
  console.log(`${index + 1}. ${line.name} x${line.quantity} = ${lineTotal.toFixed(2)}`);
```
**You should see:** `1. Coffee x2 = 7.00` and so on.
**Why:** `toFixed(2)` returns text with exactly two decimals.

### Step 5: Add up the total
**Type this: a variable before the loop, and a line inside it.**
```ts
let total: number = 0;

lines.forEach((line, index) => {
  const lineTotal: number = line.price * line.quantity;
  total += lineTotal;
  console.log(`${index + 1}. ${line.name} x${line.quantity} = ${lineTotal.toFixed(2)}`);
});

console.log(`TOTAL: ${total.toFixed(2)}`);
```
**You should see:** the full output at the top, ending with `TOTAL: 21.25`.
**Why:** `forEach` returns nothing, so the total must live in a variable **outside** the callback. The callback changes it with `+=` on every round.

## Check yourself
Run the file. The output should match the top of this page.

## Recap
- `forEach((item, index) => { ... })` runs your function per item.
- Collect results in a variable declared before `forEach`.
- `type` names a shape. `toFixed(2)` formats money.

## If something breaks
- **`TOTAL: 0.00`:** the `total` line is inside the callback but you wrote `const total` there, or you printed before the loop ran.
- **Error `Property 'prise' does not exist on type 'Line'`:** a typo in a property name. TypeScript is protecting you.
- **`toFixed is not a function`:** you called it on a string. It only works on numbers.
