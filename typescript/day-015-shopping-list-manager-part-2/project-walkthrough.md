# Day 15: Shopping List Manager (Part 2): Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
The second part of the shopping list manager. It slices, splices, keeps a saved copy, adds extras without changing the cart, and sorts prices without losing their order. It prints:

```
Cart: milk, eggs, bread, tea, jam
First two: milk, eggs
Removed: eggs, bread
Cart now: milk, tea, jam
Saved copy: milk, eggs, bread, tea, jam
After insert: milk, butter, tea, jam
With extras: milk, butter, tea, jam, salt, pepper
Cart unchanged: milk, butter, tea, jam
Sorted: 3, 8, 12
Original order: 8, 3, 12
```

## What you'll learn
- `slice` (copy a piece) and `splice` (change the original)
- Spread to copy and to combine
- Sorting a copy so the original keeps its order

## Before you start
Create `day15.ts`. Run with `npx tsx day15.ts`.

## Build it, step by step

### Step 1: The cart and a slice
**Type this:**
```ts
const cart: string[] = ["milk", "eggs", "bread", "tea", "jam"];
console.log(`Cart: ${cart.join(", ")}`);

const firstTwo: string[] = cart.slice(0, 2);
console.log(`First two: ${firstTwo.join(", ")}`);
```
**You should see:**
```
Cart: milk, eggs, bread, tea, jam
First two: milk, eggs
```
**Why:** `slice(0, 2)` copies positions 0 and 1. The cart is unchanged.

### Step 2: Save a copy, then remove
**Type this:**
```ts
const saved: string[] = [...cart];
const removed: string[] = cart.splice(1, 2);
console.log(`Removed: ${removed.join(", ")}`);
console.log(`Cart now: ${cart.join(", ")}`);
console.log(`Saved copy: ${saved.join(", ")}`);
```
**You should see:**
```
Removed: eggs, bread
Cart now: milk, tea, jam
Saved copy: milk, eggs, bread, tea, jam
```
**Why:** We copy **before** the splice. `splice(1, 2)` removes two items from position 1 and changes `cart`. The copy `saved` is a separate array, so it keeps all five.

### Step 3: Insert an item
**Type this:**
```ts
cart.splice(1, 0, "butter");
console.log(`After insert: ${cart.join(", ")}`);
```
**You should see:** `After insert: milk, butter, tea, jam`
**Why:** Removing `0` items and giving an extra argument inserts it at position 1.

### Step 4: Add extras without changing the cart
**Type this:**
```ts
const extras: string[] = ["salt", "pepper"];
const all: string[] = [...cart, ...extras];
console.log(`With extras: ${all.join(", ")}`);
console.log(`Cart unchanged: ${cart.join(", ")}`);
```
**You should see:**
```
With extras: milk, butter, tea, jam, salt, pepper
Cart unchanged: milk, butter, tea, jam
```
**Why:** Spread builds a new array. Neither `cart` nor `extras` is touched.

### Step 5: Sort without losing the order
**Type this:**
```ts
const prices: number[] = [8, 3, 12];

function byPrice(a: number, b: number): number {
  return a - b;
}

const sortedPrices: number[] = [...prices].sort(byPrice);
console.log(`Sorted: ${sortedPrices.join(", ")}`);
console.log(`Original order: ${prices.join(", ")}`);
```
**You should see:**
```
Sorted: 3, 8, 12
Original order: 8, 3, 12
```
**Why:** `sort` mutates. Sorting a copy `[...prices]` leaves `prices` alone.

## Check yourself
Run the file. The output should match the top of this page.

## Recap
- `slice` copies, `splice` changes.
- `[...list]` is a real copy. `const b = a` is not.
- Copy first, then mutate the copy, when you need the original.

## If something breaks
- **`Saved copy` is also shortened:** you made it after the `splice`, or you wrote `const saved = cart` without the spread.
- **`Original order` is sorted:** you called `prices.sort(...)` directly instead of sorting the copy.
- **Wrong items removed:** `splice(start, count)`: the second number is how many, not an end position.
