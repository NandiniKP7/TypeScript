# Day 20: Department Sales Summary (Part 2): Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
The second part of the department sales summary: ignore refunded sales, then total and count by group. It prints:

```
Valid sales: 7, total 3920
Refunded total: 300
By department:
  Electronics: 2600
  Clothing: 950
  Toys: 370
Sales per rep:
  Ana: 2
  Ben: 1
  Cara: 2
  Eli: 1
  Fay: 1
```

## What you'll learn
- `filter` plus `reduce`
- A conditional `reduce`
- Reducing into a typed object to group

## Before you start
Create `day20.ts`. Run with `npx tsx day20.ts`.

## Build it, step by step

### Step 1: Types and data
**Type this:**
```ts
type Sale = { department: string; rep: string; amount: number; refunded: boolean };
type Totals = { [key: string]: number };

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
**Why:** `Totals` describes an object whose keys are texts and whose values are numbers. We will use it for departments and reps.

### Step 2: Valid sales and their total
**Type this:**
```ts
const valid: Sale[] = sales.filter((s) => !s.refunded);
const validTotal: number = valid.reduce((sum, s) => sum + s.amount, 0);
console.log(`Valid sales: ${valid.length}, total ${validTotal}`);
```
**You should see:** `Valid sales: 7, total 3920`
**Why:** `filter` drops the refunded sale. `reduce` adds what remains.

### Step 3: A conditional `reduce`
**Type this:**
```ts
const refundedTotal: number = sales.reduce((sum, s) => {
  if (s.refunded) {
    return sum + s.amount;
  }
  return sum;
}, 0);
console.log(`Refunded total: ${refundedTotal}`);
```
**You should see:** `Refunded total: 300`
**Why:** When the sale is refunded we add it. In every other case we return the accumulator unchanged. If you forget the last `return sum;`, the next round sees `undefined` and you get `NaN`.

### Step 4: Totals by department
**Type this:**
```ts
const startTotals: Totals = {};
const byDepartment: Totals = valid.reduce((acc, s) => {
  if (acc[s.department] === undefined) {
    acc[s.department] = 0;
  }
  acc[s.department] += s.amount;
  return acc;
}, startTotals);

console.log("By department:");
for (const dept in byDepartment) {
  console.log(`  ${dept}: ${byDepartment[dept]}`);
}
```
**You should see:**
```
By department:
  Electronics: 2600
  Clothing: 950
  Toys: 370
```
**Why:** The accumulator is an object. The first time a department appears we create its key with 0. Then `+=` adds the amount. We return `acc` every round. Clothing is 950, not 1250, because the 300 refund is already filtered out.

### Step 5: Count sales per rep
**Type this:**
```ts
const startCounts: Totals = {};
const countByRep: Totals = valid.reduce((acc, s) => {
  if (acc[s.rep] === undefined) {
    acc[s.rep] = 0;
  }
  acc[s.rep] += 1;
  return acc;
}, startCounts);

console.log("Sales per rep:");
for (const rep in countByRep) {
  console.log(`  ${rep}: ${countByRep[rep]}`);
}
```
**You should see:**
```
Sales per rep:
  Ana: 2
  Ben: 1
  Cara: 2
  Eli: 1
  Fay: 1
```
**Why:** Same pattern, but we add 1 instead of the amount. Dan's refunded sale is not counted.

## Check yourself
Run the file. The output should match the top of this page.

## Recap
- Filter first, then reduce.
- A conditional `reduce` must return the accumulator on every path.
- Group by checking the key, setting it to 0 on first sight, then adding.

## If something breaks
- **`NaN` in a total:** the key was never started at 0, or a path forgot to `return acc`.
- **Error `Type '{}' is not assignable ...`:** give the starting object a type, for example `const startTotals: Totals = {};`.
- **Refunded amounts included:** you reduced over `sales`, not over `valid`.
