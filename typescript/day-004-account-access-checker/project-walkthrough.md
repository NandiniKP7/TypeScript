# Day 4: Account Access Checker: Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
A program that decides whether a user can access an account. It prints `ACCESS GRANTED`, or one clear reason for denying access. For a valid user it prints:

```
ACCESS GRANTED
```
For a suspended user it prints:
```
ACCESS DENIED: account is suspended
```

## What you'll learn
- Combining conditions with `&&` (and), `||` (or), `!` (not)
- Truthy and falsy values
- Checking rules in the right order so you can stop at the first problem

## Before you start
Create `day4.ts`. Run with `npx tsx day4.ts`.

## Build it, step by step

### Step 1: The inputs
**Type this:**
```ts
const age: number = 20;
const isVerified: boolean = true;
const isSuspended: boolean = false;
const username: string = "nandini";
```

### Step 2: `&&` means both must be true
**Type this:**
```ts
if (age >= 18 && isVerified) {
  console.log("Adult and verified");
}
```
**You should see:** `Adult and verified`
**Why:** `&&` is true only when **both** sides are true. Change `isVerified` to `false` and nothing prints.

### Step 3: `||` means at least one must be true
**Type this:**
```ts
if (age < 12 || age >= 65) {
  console.log("Discount applies");
} else {
  console.log("No discount");
}
```
**You should see:** `No discount`
**Why:** `||` is true when **at least one** side is true. Age 20 is neither under 12 nor 65 or older.

### Step 4: `!` flips true and false
**Type this:**
```ts
if (!isSuspended) {
  console.log("Account is in good standing");
}
```
**You should see:** `Account is in good standing`
**Why:** `!isSuspended` means "is NOT suspended". `!true` is `false`, and `!false` is `true`.

### Step 5: Truthy and falsy
**Type this:**
```ts
if (username) {
  console.log("Username provided");
} else {
  console.log("Username is empty");
}
```
**You should see:** `Username provided`
**Why:** Some values act like `false` inside an `if`. These "falsy" values are: an empty string `""`, `0`, `null`, and `undefined`. Everything else is "truthy". Change `username` to `""` and run again.

### Step 6: Check the problems first
**Type this at the bottom:**
```ts
if (!username) {
  console.log("ACCESS DENIED: username is missing");
} else if (age < 18) {
  console.log("ACCESS DENIED: must be 18 or older");
} else if (!isVerified) {
  console.log("ACCESS DENIED: account is not verified");
} else if (isSuspended) {
  console.log("ACCESS DENIED: account is suspended");
} else {
  console.log("ACCESS GRANTED");
}
```
**You should see:** `ACCESS GRANTED`
**Why:** Each `else if` is a reason to say no. The first problem found wins, and the rest are skipped. If nothing is wrong, the `else` grants access. Professional code works this way: reject bad cases early, and the happy path comes last. (Later, with functions, we'll use `return` to stop early. The idea is the same.) Change `isSuspended` to `true` to see the suspended message.

## Check yourself
Try all four denial cases by changing the inputs one at a time.

## Recap
- `&&`: both true. `||`: at least one true. `!`: flips the value.
- Falsy values: `""`, `0`, `null`, `undefined`. Everything else is truthy.
- Check denial rules first, then grant access in the `else`.

## If something breaks
- **A rule seems ignored:** the order of `else if` matters. The first true condition wins.
- **`&&` vs `&`:** use two characters, `&&` and `||`.
