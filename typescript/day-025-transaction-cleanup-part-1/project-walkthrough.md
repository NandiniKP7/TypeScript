# Day 25: Transaction Cleanup (Part 1): Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
The first part of a transaction cleanup: turn messy raw data into clean, typed data with two reusable type predicates. It prints:

```
Raw entries: 9
After removing nulls: 7
With an amount: 6
Dropped: 3
IDs kept: 1, 2, 4, 5, 6, 7
Total of kept amounts: 920
Largest kept amount: 500
Account A: 3 transactions
Account B: 3 transactions
Rejected ids: 3
```

## What you'll learn
- Named type predicates with `filter`
- Moving from messy types to clean types
- A typed accumulator with `reduce<Type>`

## Before you start
Create `day25.ts`. Run with `npx tsx day25.ts`.

## Build it, step by step

### Step 1: Types and data
**Type this:**
```ts
type RawTransaction = { id: number; account: string; amount: number | null; kind: string };
type Transaction = { id: number; account: string; amount: number; kind: string };

const raw: (RawTransaction | null)[] = [
  { id: 1, account: "A", amount: 500, kind: "deposit" },
  null,
  { id: 2, account: "B", amount: 200, kind: "deposit" },
  { id: 3, account: "A", amount: null, kind: "withdrawal" },
  { id: 4, account: "A", amount: 120, kind: "withdrawal" },
  { id: 5, account: "B", amount: 15, kind: "fee" },
  null,
  { id: 6, account: "B", amount: 80, kind: "withdrawal" },
  { id: 7, account: "A", amount: 5, kind: "fee" },
];
```
**Why:** `RawTransaction` is what arrives: `amount` might be `null`. `Transaction` is what we want: `amount` is always a number. The list may also contain `null` entries.

### Step 2: The two predicates
**Type this:**
```ts
function isPresent(entry: RawTransaction | null): entry is RawTransaction {
  return entry !== null;
}

function hasAmount(entry: RawTransaction): entry is Transaction {
  return entry.amount !== null;
}
```
**Why:** `isPresent` promises that `true` means "this is a real `RawTransaction`". `hasAmount` promises that `true` means "this is a clean `Transaction`". Each checks exactly what it promises.

### Step 3: Clean in two steps
**Type this:**
```ts
console.log(`Raw entries: ${raw.length}`);

const present: RawTransaction[] = raw.filter(isPresent);
console.log(`After removing nulls: ${present.length}`);

const clean: Transaction[] = present.filter(hasAmount);
console.log(`With an amount: ${clean.length}`);
console.log(`Dropped: ${raw.length - clean.length}`);
console.log(`IDs kept: ${clean.map((t) => t.id).join(", ")}`);
```
**You should see:**
```
Raw entries: 9
After removing nulls: 7
With an amount: 6
Dropped: 3
IDs kept: 1, 2, 4, 5, 6, 7
```
**Why:** After the first filter the type is `RawTransaction[]`. After the second it is `Transaction[]`. Each type is exact.

### Step 4: Calculate without null checks
**Type this:**
```ts
const total: number = clean.reduce((sum, t) => sum + t.amount, 0);
console.log(`Total of kept amounts: ${total}`);

const largest: number = clean.reduce((max, t) => {
  if (t.amount > max) {
    return t.amount;
  }
  return max;
}, 0);
console.log(`Largest kept amount: ${largest}`);
```
**You should see:**
```
Total of kept amounts: 920
Largest kept amount: 500
```
**Why:** `t.amount` is a plain `number`, so `sum + t.amount` needs no check. On the raw type, TypeScript would refuse.

### Step 5: Count with a typed accumulator
**Type this:**
```ts
type Totals = { [key: string]: number };

const perAccount: Totals = clean.reduce<Totals>((acc, t) => {
  if (acc[t.account] === undefined) {
    acc[t.account] = 0;
  }
  acc[t.account] += 1;
  return acc;
}, {});

for (const account in perAccount) {
  console.log(`Account ${account}: ${perAccount[account]} transactions`);
}
```
**You should see:**
```
Account A: 3 transactions
Account B: 3 transactions
```
**Why:** `reduce<Totals>` declares the accumulator type, so the plain `{}` start is fine.

### Step 6: What was rejected?
**Type this:**
```ts
const rejected: number[] = present.filter((r) => !hasAmount(r)).map((r) => r.id);
console.log(`Rejected ids: ${rejected.join(", ")}`);
```
**You should see:** `Rejected ids: 3`
**Why:** You can use the predicate as a plain yes/no question too. `!hasAmount(r)` picks the entries without an amount.

## Check yourself
Run the file. The output should match the top of this page.

## Recap
- Write a predicate once, then reuse it.
- Chain predicates: messy type, less messy type, clean type.
- `reduce<Type>` types the accumulator.

## If something breaks
- **Error `'t.amount' is possibly 'null'`:** you are still using `RawTransaction[]`. Filter with `hasAmount` first.
- **Error that the predicate type is not assignable:** the type after `is` must be a more specific version of the parameter type.
- **A count is wrong:** your predicate test does not match its promise (for example `!== undefined` instead of `!== null`).
