# Day 21: Department Sales Summary (Part 3): Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
The finished department sales summary. It prints:

```
DEPARTMENT SALES SUMMARY
Electronics: 3 sales, total 2600, average 866.67, best 1200 (Ana)
Clothing: 2 sales, total 950, average 475.00, best 500 (Cara)
Toys: 2 sales, total 370, average 185.00, best 220 (Fay)
Top department: Electronics (2600)
Best single sale: 1200 by Ana (Electronics)
Longest rep name: Cara
Refunded: 1 sale, 300
```

## What you'll learn
- A `reduce` whose accumulator is an object of objects
- Max and "best object" with `reduce`
- Combining everything from this week

## Before you start
Create `day21.ts`. Run with `npx tsx day21.ts`.

## Build it, step by step

### Step 1: Types, data and the split
**Type this:**
```ts
type Sale = { department: string; rep: string; amount: number; refunded: boolean };
type DeptStats = { count: number; total: number; best: number; bestRep: string };
type StatsByDept = { [department: string]: DeptStats };

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

const valid: Sale[] = sales.filter((s) => !s.refunded);
const refunded: Sale[] = sales.filter((s) => s.refunded);
```
**Why:** `DeptStats` holds the facts we want for one department. `StatsByDept` is an object with one `DeptStats` per department name.

### Step 2: One `reduce` builds all the stats
**Type this:**
```ts
const startStats: StatsByDept = {};

const stats: StatsByDept = valid.reduce((acc, s) => {
  if (acc[s.department] === undefined) {
    acc[s.department] = { count: 0, total: 0, best: 0, bestRep: "" };
  }
  const dept: DeptStats = acc[s.department];
  dept.count += 1;
  dept.total += s.amount;
  if (s.amount > dept.best) {
    dept.best = s.amount;
    dept.bestRep = s.rep;
  }
  return acc;
}, startStats);
```
**You should see:** nothing yet.
**Why:** First time we see a department, we create its stats with zeros. Then we update the same stats object: add 1 to the count, add the amount to the total, and replace the best sale when this one is bigger. `dept` is not a copy, it is the object inside `acc`, so changing it changes `acc`.

### Step 3: Print a line per department
**Type this:**
```ts
console.log("DEPARTMENT SALES SUMMARY");

const names: string[] = [];
for (const name in stats) {
  names.push(name);
  const d: DeptStats = stats[name];
  const average: number = d.total / d.count;
  console.log(
    `${name}: ${d.count} sales, total ${d.total}, average ${average.toFixed(2)}, best ${d.best} (${d.bestRep})`
  );
}
```
**You should see:** the heading and the three department lines.
**Why:** `for...in` gives the department names. We also save them in `names` for the next step.

### Step 4: The top department
**Type this:**
```ts
const topDept: string = names.reduce((best, name) => {
  if (stats[name].total > stats[best].total) {
    return name;
  }
  return best;
}, names[0]);

console.log(`Top department: ${topDept} (${stats[topDept].total})`);
```
**You should see:** `Top department: Electronics (2600)`
**Why:** The accumulator is the **name** of the best department so far. We start with the first name and compare totals.

### Step 5: The best single sale
**Type this:**
```ts
const bestSale = valid.reduce<Sale | null>((best, s) => {
  if (best === null || s.amount > best.amount) {
    return s;
  }
  return best;
}, null);

if (bestSale !== null) {
  console.log(`Best single sale: ${bestSale.amount} by ${bestSale.rep} (${bestSale.department})`);
}
```
**You should see:** `Best single sale: 1200 by Ana (Electronics)`
**Why:** The accumulator is a whole `Sale`, or `null` at the start. We check for `null` before using it.

### Step 6: Longest rep name and refunds
**Type this:**
```ts
const longestRep: string = valid.reduce((best, s) => {
  if (s.rep.length > best.length) {
    return s.rep;
  }
  return best;
}, "");
console.log(`Longest rep name: ${longestRep}`);

const refundTotal: number = refunded.reduce((sum, s) => sum + s.amount, 0);
console.log(`Refunded: ${refunded.length} sale, ${refundTotal}`);
```
**You should see:**
```
Longest rep name: Cara
Refunded: 1 sale, 300
```
**Why:** `Cara` is the only 4-letter name among valid sales. The refund is counted from the separate `refunded` list.

## Check yourself
Run the file. The output should match the top of this page.

## Recap
- One `reduce` can build a whole summary object.
- Best object: `reduce<Sale | null>` and a `null` check.
- `filter` splits, `reduce` summarises.

## If something breaks
- **Error `Property 'amount' does not exist on type 'never'`:** you forgot `<Sale | null>` after `reduce`.
- **Error `Object is possibly 'null'` on `bestSale`:** wrap the use in `if (bestSale !== null) { ... }`.
- **A department shows a count of 0 or NaN totals:** you did not create its stats with zeros on first sight.
