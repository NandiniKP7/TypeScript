# Day 8: Inventory Scanner: Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
A program that scans a list of products, skips discontinued ones, and stops as soon as it finds the product you want. When searching for "Mouse" it prints:

```
Checking: Laptop
Skipping discontinued: Old Keyboard
Checking: Mouse
Found: Mouse costs 25
Skipped items: 1
```

## What you'll learn
- `for...of`: a simpler loop for lists
- `continue`: skip this round
- `break`: stop the loop completely
- `for...in`: loop over the names inside an object

## Before you start
Create `day8.ts`. Run with `npx tsx day8.ts`.

## Build it, step by step

### Step 1: A list of objects
**Type this:**
```ts
const products = [
  { name: "Laptop", price: 900, discontinued: false },
  { name: "Old Keyboard", price: 20, discontinued: true },
  { name: "Mouse", price: 25, discontinued: false },
  { name: "Monitor", price: 300, discontinued: false },
  { name: "Dock", price: 80, discontinued: true },
];
console.log(products[2].name);
```
**You should see:** `Mouse`
**Why:** An **object** groups related values under names. `{ name: "Mouse", price: 25 }` has two properties. You read one with a dot: `products[2].name`. Here the list holds five objects. TypeScript works out the types by itself.

### Step 2: `for...of`
**Type this:**
```ts
for (const product of products) {
  console.log("Checking:", product.name);
}
```
**You should see:** all five names.
**Why:** `for...of` hands you each item one at a time. No counter, no `length`, no off-by-one mistakes. Use it whenever you don't need the position number.

### Step 3: Skip with `continue`
**Type this (replace the loop):**
```ts
for (const product of products) {
  if (product.discontinued) {
    console.log("Skipping discontinued:", product.name);
    continue;
  }
  console.log("Checking:", product.name);
}
```
**You should see:** Old Keyboard and Dock are skipped.
**Why:** `continue` ends the current round and jumps to the next item.

### Step 4: Stop with `break`
**Type this (replace the loop):**
```ts
const wanted: string = "Mouse";
let skipped: number = 0;

for (const product of products) {
  if (product.discontinued) {
    console.log("Skipping discontinued:", product.name);
    skipped++;
    continue;
  }
  console.log("Checking:", product.name);
  if (product.name === wanted) {
    console.log("Found:", product.name, "costs", product.price);
    break;
  }
}
console.log("Skipped items:", skipped);
```
**You should see:** the output at the top of this page.
**Why:** `break` leaves the whole loop at once. We found what we wanted, so there is no reason to keep looking. Notice that Monitor and Dock are never checked. Change `wanted` to `"Dock"` or `"Printer"` and look at the result.

### Step 5: `for...in`
**Type this:**
```ts
for (const key in products[0]) {
  console.log("Property name:", key);
}
```
**You should see:** `name`, `price`, `discontinued`
**Why:** `for...in` gives you the **names** of an object's properties. Don't confuse it with `for...of`, which gives you the **items** of a list.

## Check yourself
For `wanted = "Mouse"` the output should match the top of this page.

## Recap
- `for...of`: each item of a list. `for...in`: each property name of an object.
- `continue`: skip to the next round. `break`: stop the loop.

## If something breaks
- **Nothing prints "Found":** check the spelling and capitals of `wanted`.
- **`break` or `continue` red underline:** they must be inside a loop.
