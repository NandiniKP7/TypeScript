# Day 26: Transaction Cleanup (Part 2): Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
The second part of the transaction cleanup: summarise the clean data with typed `reduce` calls. It prints:

```
TOTALS
  Deposits: 700
  Withdrawals: 200
  Fees: 20
  Net change: 480
BY ACCOUNT
  A: deposits 500, withdrawals 120, fees 5, balance 375
  B: deposits 200, withdrawals 80, fees 15, balance 105
Largest withdrawal: #4 (120)
Fees are 2.9% of deposits
```

## What you'll learn
- Predicate to clean array to typed `reduce`
- An accumulator with several named fields
- An object of summaries

## Before you start
Create `day26.ts`. Run with `npx tsx day26.ts`.

## Build it, step by step

### Step 1: Bring in yesterday's code
**Type this** (types, data and predicates from Day 25, then the two new types):
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

function isPresent(entry: RawTransaction | null): entry is RawTransaction {
  return entry !== null;
}

function hasAmount(entry: RawTransaction): entry is Transaction {
  return entry.amount !== null;
}

type Summary = { deposits: number; withdrawals: number; fees: number; other: number };
type ByAccount = { [account: string]: Summary };

const clean: Transaction[] = raw.filter(isPresent).filter(hasAmount);
```
**Why:** `clean` is a typed array with 6 transactions. Everything below works on it.

### Step 2: Overall totals
**Type this:**
```ts
const total: Summary = clean.reduce<Summary>((acc, t) => {
  if (t.kind === "deposit") {
    acc.deposits += t.amount;
  } else if (t.kind === "withdrawal") {
    acc.withdrawals += t.amount;
  } else if (t.kind === "fee") {
    acc.fees += t.amount;
  } else {
    acc.other += t.amount;
  }
  return acc;
}, { deposits: 0, withdrawals: 0, fees: 0, other: 0 });

console.log("TOTALS");
console.log(`  Deposits: ${total.deposits}`);
console.log(`  Withdrawals: ${total.withdrawals}`);
console.log(`  Fees: ${total.fees}`);
const net: number = total.deposits - total.withdrawals - total.fees;
console.log(`  Net change: ${net}`);
```
**You should see:** the `TOTALS` block.
**Why:** One `reduce` fills four fields. The `else` catches any kind we did not plan for. `reduce<Summary>` tells TypeScript what `acc` is.

### Step 3: Totals per account
**Type this:**
```ts
const byAccount: ByAccount = clean.reduce<ByAccount>((acc, t) => {
  if (acc[t.account] === undefined) {
    acc[t.account] = { deposits: 0, withdrawals: 0, fees: 0, other: 0 };
  }
  const s: Summary = acc[t.account];
  if (t.kind === "deposit") {
    s.deposits += t.amount;
  } else if (t.kind === "withdrawal") {
    s.withdrawals += t.amount;
  } else if (t.kind === "fee") {
    s.fees += t.amount;
  } else {
    s.other += t.amount;
  }
  return acc;
}, {});
```
**You should see:** nothing yet.
**Why:** The first time an account appears we create its summary. `s` is the summary inside `acc`, so changing `s` changes `acc`.

### Step 4: Print each account
**Type this:**
```ts
console.log("BY ACCOUNT");
for (const name in byAccount) {
  const s: Summary = byAccount[name];
  const balance: number = s.deposits - s.withdrawals - s.fees;
  console.log(`  ${name}: deposits ${s.deposits}, withdrawals ${s.withdrawals}, fees ${s.fees}, balance ${balance}`);
}
```
**You should see:** the two account lines. A: `500 - 120 - 5 = 375`. B: `200 - 80 - 15 = 105`.

### Step 5: The largest withdrawal
**Type this:**
```ts
const withdrawals: Transaction[] = clean.filter((t) => t.kind === "withdrawal");
const biggest = withdrawals.reduce<Transaction | null>((best, t) => {
  if (best === null || t.amount > best.amount) {
    return t;
  }
  return best;
}, null);

if (biggest !== null) {
  console.log(`Largest withdrawal: #${biggest.id} (${biggest.amount})`);
}
```
**You should see:** `Largest withdrawal: #4 (120)`
**Why:** Same "best object" pattern as Day 21. We check for `null` before using the result.

### Step 6: A percentage
**Type this:**
```ts
const feeShare: number = (total.fees / total.deposits) * 100;
console.log(`Fees are ${feeShare.toFixed(1)}% of deposits`);
```
**You should see:** `Fees are 2.9% of deposits`
**Why:** 20 / 700 is about 0.0286, times 100 is 2.86, shown as 2.9.

## Check yourself
Run the file. The output should match the top of this page.

## Recap
- The pipeline: predicate, clean array, typed `reduce`.
- An object accumulator can hold several totals at once.
- Per-group summaries are objects created on first sight.

## If something breaks
- **Error `Property 'deposit' does not exist on type 'Summary'`:** a typo in a field name. TypeScript caught it.
- **A total is `NaN`:** one field was not started at 0, or an `if` path forgot to add.
- **The account lines are missing:** the second `reduce` is not returning `acc`.
