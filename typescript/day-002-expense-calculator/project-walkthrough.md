# Day 2: Expense Calculator: Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
A program that adds up a month of expenses and tells you how much money is left. When it's done, it prints:

```
Income: 3000
Total expenses: 2100
Money left: 900
Percent spent: 70
Overspending? false
Number of expenses: 4
```

## What you'll learn
- Changing a variable: `+=`, `-=`, `*=`, `++`, `--`
- Comparisons: `>`, `<`, `>=`, `<=`
- `===` and `!==`, and why we never use `==`

## Before you start
Create `day2.ts` in your `ts-days` folder. Run with `npx tsx day2.ts`.

## Build it, step by step

### Step 1: Income and expenses
**Type this:**
```ts
const income: number = 3000;
const rent: number = 1200;
const food: number = 450;
const transport: number = 150;
const other: number = 300;
console.log("Income:", income);
```
**You should see:** `Income: 3000`
**Why:** These are the inputs. They never change, so they are `const`.

### Step 2: Add up the expenses with `+=`
**Type this:**
```ts
let totalExpenses: number = 0;
totalExpenses += rent;
totalExpenses += food;
totalExpenses += transport;
totalExpenses += other;
console.log("Total expenses:", totalExpenses);
```
**You should see:** `Total expenses: 2100`
**Why:** `totalExpenses += rent` is a short way to write `totalExpenses = totalExpenses + rent`. It changes, so it is `let`. There are matching `-=` and `*=` too.

### Step 3: Money left
**Type this:**
```ts
const moneyLeft: number = income - totalExpenses;
console.log("Money left:", moneyLeft);
```
**You should see:** `Money left: 900`

### Step 4: Percent spent
**Type this:**
```ts
const percentSpent: number = totalExpenses / income * 100;
console.log("Percent spent:", percentSpent);
```
**You should see:** `Percent spent: 70`
**Why:** 2100 / 3000 is 0.7, and 0.7 * 100 is 70.

### Step 5: Compare values
**Type this:**
```ts
const overspending: boolean = percentSpent > 80;
console.log("Overspending?", overspending);
```
**You should see:** `Overspending? false`
**Why:** A comparison gives a `boolean`, `true` or `false`. The comparisons are:
- `>` greater than, `<` less than
- `>=` greater than or equal, `<=` less than or equal

70 is not greater than 80, so the answer is `false`.

### Step 6: Count with `++` and `--`
**Type this:**
```ts
let expenseCount: number = 0;
expenseCount++;
expenseCount++;
expenseCount++;
expenseCount++;
console.log("Number of expenses:", expenseCount);
```
**You should see:** `Number of expenses: 4`
**Why:** `++` adds 1. `--` subtracts 1. Add `expenseCount--;` and see the number drop, then delete that line.

### Step 7: `===` and `!==`
**Type this:**
```ts
console.log(income === 3000);   // true
console.log(income !== 3000);   // false
console.log(moneyLeft === 0);   // false
```
**You should see:** `true`, `false`, `false`
**Why:** `===` asks "is it exactly equal?". `!==` asks "is it different?". Never use `==`: it quietly converts types, so in plain JavaScript `"5" == 5` is `true`, which causes bugs. `===` does not convert. TypeScript will also underline comparisons between different types.

## Check yourself
Run the file. The output should match the top of this page.

## Recap
- `+=`, `-=`, `*=` change a variable using its own value.
- `++` and `--` add or subtract 1.
- Comparisons give `true` or `false`.
- Always use `===` and `!==`.

## If something breaks
- **`Cannot assign to 'totalExpenses' because it is a constant`:** use `let`, not `const`.
- **`This comparison appears to be unintentional`:** you compared two different types, like a number and a string.
