# Day 19: Department Sales Summary (Part 1): Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
The first part of a department sales summary: using `reduce` to add things up. It prints:

```
Sales count: 8
Total sales: 4220
Average sale: 527.50
Counted with reduce: 8
Sum via map then reduce: 4220
sum so far 0, adding 100
sum so far 100, adding 250
sum so far 350, adding 50
Traced total: 400
```

## What you'll learn
- `reduce` with an accumulator and an initial value
- Summing a property of objects
- Tracing `reduce`

## Before you start
Create `day19.ts`. Run with `npx tsx day19.ts`.

## Build it, step by step

### Step 1: The data
**Type this:**
```ts
type Sale = { department: string; rep: string; amount: number; refunded: boolean };

const sales: Sale[] = [
  { department: "Electronics", rep: "Ana", amount: 1200, refunded: false },
  { department: "Electronics", rep: "Ben", amount: 800, refunded: false },
  { department: "Clothing", rep: "Cara", amount: 450, refunded: false },
  { department: "Clothing", rep: "Dan", amount: 300, refunded: true },
  { department: "Toys", rep: "Eli", amount: 150, refunded: false },
  { department: "Electronics", rep: "Ana", amount: 600, refunded: false },
  { department: "Toys", rep: "Fay", amount: 220, refunded: false },
  { department: "Clothing", rep: "Cara", amount: 500, refunded: false },
];
```

### Step 2: Total of all amounts
**Type this:**
```ts
const totalAmount: number = sales.reduce((sum, sale) => sum + sale.amount, 0);
console.log(`Sales count: ${sales.length}`);
console.log(`Total sales: ${totalAmount}`);
```
**You should see:**
```
Sales count: 8
Total sales: 4220
```
**Why:** `sum` starts at 0. For each sale we add `sale.amount`. We add the **property**, not the whole object.

### Step 3: The average
**Type this:**
```ts
const average: number = totalAmount / sales.length;
console.log(`Average sale: ${average.toFixed(2)}`);
```
**You should see:** `Average sale: 527.50`
**Why:** Total divided by the number of items. 4220 / 8 is 527.5, shown with 2 decimals.

### Step 4: Count with `reduce`
**Type this:**
```ts
const saleCount: number = sales.reduce((count) => count + 1, 0);
console.log(`Counted with reduce: ${saleCount}`);
```
**You should see:** `Counted with reduce: 8`
**Why:** We ignore the current item (so we do not even name it) and add 1 each round.

### Step 5: `map` then `reduce`
**Type this:**
```ts
const amounts: number[] = sales.map((s) => s.amount);
const sumOfAmounts: number = amounts.reduce((a, b) => a + b, 0);
console.log(`Sum via map then reduce: ${sumOfAmounts}`);
```
**You should see:** `Sum via map then reduce: 4220`
**Why:** Another way to reach the same answer: first extract the numbers, then add plain numbers.

### Step 6: Trace it
**Type this:**
```ts
const smallSales: number[] = [100, 250, 50];
const traced: number = smallSales.reduce((sum, amount) => {
  console.log(`sum so far ${sum}, adding ${amount}`);
  return sum + amount;
}, 0);
console.log(`Traced total: ${traced}`);
```
**You should see:** the last four lines of the output at the top.
**Why:** With braces we must write `return`. The returned value becomes `sum` in the next round.

## Check yourself
Run the file. The output should match the top of this page.

## Recap
- Always give `reduce` an initial value.
- Add the property you need: `sum + sale.amount`.
- Trace by printing inside the function.

## If something breaks
- **`Total sales` looks like `0[object Object]...`:** you added `sale` instead of `sale.amount`.
- **`NaN`:** the initial value is missing or you added a property that does not exist.
- **Trace prints `undefined`:** with braces, you forgot `return`.
