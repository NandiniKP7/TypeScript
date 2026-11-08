# Day 14: Shopping List Manager (Part 1): Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
A program that manages a shopping list: add items to the start and end, remove from both ends, rename one, check for items, and sort prices. It prints:

```
Start: milk, eggs, bread
Added: coffee, milk, eggs, bread, apples
Items: 5
Removed: coffee and apples
Renamed: oat milk, eggs, bread
Need eggs? true
Need tea? false
Prices low to high: 1.25, 3.5, 8, 12
Cheapest: 1.25
Most expensive: 12
```

## What you'll learn
- `push`, `pop`, `unshift`, `shift`
- Updating by index, `includes`, `join`
- Sorting numbers with a compare function

## Before you start
Create `day14.ts`. Run with `npx tsx day14.ts`.

## Build it, step by step

### Step 1: The list
**Type this:**
```ts
const list: string[] = ["milk", "eggs", "bread"];
console.log(`Start: ${list.join(", ")}`);
```
**You should see:** `Start: milk, eggs, bread`
**Why:** `join(", ")` turns the array into one readable string.

### Step 2: Add to both ends
**Type this:**
```ts
list.push("apples");
list.unshift("coffee");
console.log(`Added: ${list.join(", ")}`);
console.log(`Items: ${list.length}`);
```
**You should see:**
```
Added: coffee, milk, eggs, bread, apples
Items: 5
```
**Why:** `push` adds to the end, `unshift` adds to the start. The array itself changes, even though it is a `const`.

### Step 3: Remove from both ends
**Type this:**
```ts
const removedLast = list.pop();
const removedFirst = list.shift();
console.log(`Removed: ${removedFirst} and ${removedLast}`);
```
**You should see:** `Removed: coffee and apples`
**Why:** `pop` and `shift` both remove an item **and give it back**, so we can store it.

### Step 4: Rename one item
**Type this:**
```ts
list[0] = "oat milk";
console.log(`Renamed: ${list.join(", ")}`);
```
**You should see:** `Renamed: oat milk, eggs, bread`
**Why:** Assigning to an index replaces that item.

### Step 5: Ask questions
**Type this:**
```ts
console.log(`Need eggs? ${list.includes("eggs")}`);
console.log(`Need tea? ${list.includes("tea")}`);
```
**You should see:**
```
Need eggs? true
Need tea? false
```

### Step 6: Sort the prices
**Type this:**
```ts
const prices: number[] = [3.5, 12, 1.25, 8];

function byPrice(a: number, b: number): number {
  return a - b;
}

prices.sort(byPrice);
console.log(`Prices low to high: ${prices.join(", ")}`);
console.log(`Cheapest: ${prices[0]}`);
console.log(`Most expensive: ${prices[prices.length - 1]}`);
```
**You should see:**
```
Prices low to high: 1.25, 3.5, 8, 12
Cheapest: 1.25
Most expensive: 12
```
**Why:** `a - b` is negative when `a` is smaller, so smaller numbers go first. After sorting, the cheapest is at index 0 and the dearest is at `length - 1`.

## Check yourself
Run the file. The output should match the top of this page.

## Recap
- `push`/`pop` at the end, `unshift`/`shift` at the start.
- `join` makes a string. `includes` answers yes or no.
- Numbers need a compare function in `sort`.

## If something breaks
- **Prices come out as `1.25, 12, 3.5, 8`:** you called `sort()` with no compare function.
- **`Removed: undefined and undefined`:** the list was empty when you removed.
- **Error assigning a number to the list:** the list is `string[]`, so only strings can go in.
