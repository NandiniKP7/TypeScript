# Day 18: Premium Customer Selector: Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
A premium customer selector. A customer is premium if they are active and (spent at least 1000 or have been a customer for at least 5 years). It prints:

```
Active: 4 of 5
Premium: 3
- Ana (spent 1500, 2 years)
- Ben (spent 300, 6 years)
- Eva (spent 1200, 5 years)
Names: Ana, Ben, Eva
Not premium: Cara, Dan
Emails on file: ana@x.com, eva@x.com
```

## What you'll learn
- `filter` with several conditions
- Chaining `filter` and `map`
- A type predicate

## Before you start
Create `day18.ts`. Run with `npx tsx day18.ts`.

## Build it, step by step

### Step 1: Type and data
**Type this:**
```ts
type Customer = { name: string; spent: number; years: number; active: boolean };

const customers: Customer[] = [
  { name: "Ana", spent: 1500, years: 2, active: true },
  { name: "Ben", spent: 300, years: 6, active: true },
  { name: "Cara", spent: 2200, years: 1, active: false },
  { name: "Dan", spent: 800, years: 3, active: true },
  { name: "Eva", spent: 1200, years: 5, active: true },
];
```

### Step 2: Active customers
**Type this:**
```ts
const activeCustomers: Customer[] = customers.filter((c) => c.active);
console.log(`Active: ${activeCustomers.length} of ${customers.length}`);
```
**You should see:** `Active: 4 of 5`
**Why:** `c.active` is already a boolean, so it works as the test.

### Step 3: Premium customers
**Type this:**
```ts
const premium: Customer[] = customers.filter(
  (c) => c.active && (c.spent >= 1000 || c.years >= 5)
);
console.log(`Premium: ${premium.length}`);
premium.forEach((c) => {
  console.log(`- ${c.name} (spent ${c.spent}, ${c.years} years)`);
});
```
**You should see:**
```
Premium: 3
- Ana (spent 1500, 2 years)
- Ben (spent 300, 6 years)
- Eva (spent 1200, 5 years)
```
**Why:** The brackets matter. `active && (A || B)` means "active, and at least one of A or B". Without brackets, `&&` would bind to `A` only, and Cara (not active, but spent 2200) would slip in.

### Step 4: Just the names
**Type this:**
```ts
const premiumNames: string[] = premium.map((c) => c.name);
console.log(`Names: ${premiumNames.join(", ")}`);
```
**You should see:** `Names: Ana, Ben, Eva`

### Step 5: Everyone else
**Type this:**
```ts
const notPremium: Customer[] = customers.filter((c) => !premium.includes(c));
console.log(`Not premium: ${notPremium.map((c) => c.name).join(", ")}`);
```
**You should see:** `Not premium: Cara, Dan`
**Why:** `premium.includes(c)` asks if this exact customer is in the premium list. `!` flips it. Then we chain `map` and `join`.

### Step 6: A type predicate
**Type this:**
```ts
const emails: (string | null)[] = ["ana@x.com", null, "eva@x.com", null];
const validEmails: string[] = emails.filter((e): e is string => e !== null);
console.log(`Emails on file: ${validEmails.join(", ")}`);
```
**You should see:** `Emails on file: ana@x.com, eva@x.com`
**Why:** `(e): e is string` promises TypeScript that every item that passes is a string, so the result can be typed `string[]`.

## Check yourself
Run the file. The output should match the top of this page.

## Recap
- `filter` returns a shorter (or equal) new array.
- Brackets control how `&&` and `||` combine.
- A type predicate narrows the filtered array's type.

## If something breaks
- **Cara appears in Premium:** you forgot the brackets around the `||` part.
- **Error `Type '(string | null)[]' is not assignable to type 'string[]'`:** your `filter` has no type predicate. Add `(e): e is string`.
- **`Premium: 0`:** check the comparison signs (`>=`, not `<=`).
