# Day 27: Transaction Cleanup and Summary (Part 3): Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
The finished transaction cleanup and summary: clean the data, group by account, and process each account in order with a guarded `reduce`. It prints:

```
TRANSACTION CLEANUP AND SUMMARY
Cleaned 6 of 9 entries (3 dropped)
Account A
  #1 deposit 500 -> balance 500
  #4 withdrawal 120 rejected (over limit 100)
  #7 fee 5 -> balance 495
  Final balance: 495
Account B
  #2 deposit 200 -> balance 200
  #5 fee 15 -> balance 185
  #6 withdrawal 80 -> balance 105
  Final balance: 105
Rejected: 1 transaction (#4)
Bank total: 600
```

## What you'll learn
- Sorting a copy, then grouping into arrays
- A running balance with lines and rejected ids
- A guarded `reduce`

## Before you start
Create `day27.ts`. Run with `npx tsx day27.ts`.

## Build it, step by step

### Step 1: Types, data, predicates, limit
**Type this** (same as Day 25, plus a limit):
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

const withdrawalLimit: number = 100;
```

### Step 2: Clean and report
**Type this:**
```ts
const clean: Transaction[] = raw.filter(isPresent).filter(hasAmount);

console.log("TRANSACTION CLEANUP AND SUMMARY");
console.log(`Cleaned ${clean.length} of ${raw.length} entries (${raw.length - clean.length} dropped)`);
```
**You should see:**
```
TRANSACTION CLEANUP AND SUMMARY
Cleaned 6 of 9 entries (3 dropped)
```

### Step 3: Sort a copy and group by account
**Type this:**
```ts
type Groups = { [account: string]: Transaction[] };

const groups: Groups = [...clean]
  .sort((a, b) => a.id - b.id)
  .reduce<Groups>((acc, t) => {
    if (acc[t.account] === undefined) {
      acc[t.account] = [];
    }
    acc[t.account].push(t);
    return acc;
  }, {});
```
**Why:** A running balance depends on order, so we sort a copy by `id` first. Then one `reduce` splits the list into one array per account. Each array stays in id order.

### Step 4: The state for one account
**Type this:**
```ts
type AccountState = { balance: number; lines: string[]; rejected: number[] };

let bankTotal: number = 0;
const allRejected: number[] = [];
```
**Why:** `AccountState` holds what we need to remember while processing one account: the balance, the lines to print, and the rejected ids. `bankTotal` and `allRejected` collect results across accounts.

### Step 5: Process each account with a guarded `reduce`
**Type this:**
```ts
for (const account in groups) {
  const state: AccountState = groups[account].reduce<AccountState>((acc, t) => {
    if (t.kind === "deposit") {
      acc.balance += t.amount;
      acc.lines.push(`  #${t.id} deposit ${t.amount} -> balance ${acc.balance}`);
    } else if (t.amount > withdrawalLimit && t.kind === "withdrawal") {
      acc.rejected.push(t.id);
      acc.lines.push(`  #${t.id} withdrawal ${t.amount} rejected (over limit ${withdrawalLimit})`);
    } else {
      acc.balance -= t.amount;
      acc.lines.push(`  #${t.id} ${t.kind} ${t.amount} -> balance ${acc.balance}`);
    }
    return acc;
  }, { balance: 0, lines: [], rejected: [] });

  console.log(`Account ${account}`);
  state.lines.forEach((line) => {
    console.log(line);
  });
  console.log(`  Final balance: ${state.balance}`);

  bankTotal += state.balance;
  state.rejected.forEach((id) => {
    allRejected.push(id);
  });
}
```
**You should see:** the `Account A` and `Account B` blocks.
**Why:** Three branches: deposit (add), rejected withdrawal (remember it, balance unchanged), and everything else (subtract). Each branch pushes a line, and the function always returns `acc`. After the `reduce`, we print the lines and collect totals.

### Step 6: The last two lines
**Type this:**
```ts
const ids: string = allRejected.map((id) => `#${id}`).join(", ");
console.log(`Rejected: ${allRejected.length} transaction (${ids})`);
console.log(`Bank total: ${bankTotal}`);
```
**You should see:**
```
Rejected: 1 transaction (#4)
Bank total: 600
```
**Why:** `495 + 105 = 600`. Transaction #4 was never subtracted, because it was rejected.

## Check yourself
Run the file. The output should match the top of this page.

## Recap
- Sort a copy first when order matters.
- One `reduce` groups, another summarises each group.
- A guarded update must still return the accumulator on every path.

## If something breaks
- **Account A balance is 375:** the rejection branch is missing, or checked after the subtract branch.
- **Account lines are in the wrong order:** you did not sort by `id` before grouping.
- **Error `Type 'never[]'`...:** the `reduce` has no type. Write `reduce<AccountState>`.
