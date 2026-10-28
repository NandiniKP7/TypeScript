# Day 3: Theme Park Ticket Desk: Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
A program that decides the ticket price from a visitor's age, and whether they can ride the rollercoaster. For age 15 and height 150 it prints:

```
Teen ticket: 7
You can ride!
```

## What you'll learn
- Making decisions with `if`, `else if`, `else`
- Using comparisons inside decisions
- Putting one `if` inside another (nesting)

## Before you start
Create `day3.ts` in your `ts-days` folder. Run with `npx tsx day3.ts`.

## Build it, step by step

### Step 1: The inputs
**Type this:**
```ts
const age: number = 15;
const height: number = 150;
```

### Step 2: Your first `if / else`
**Type this:**
```ts
if (height >= 120) {
  console.log("You can ride!");
} else {
  console.log("Sorry, you are too short.");
}
```
**You should see:** `You can ride!`
**Why:** The condition in `( )` is a comparison that gives `true` or `false`. If it is `true`, the first block `{ }` runs. Otherwise the `else` block runs. Only one of them runs. Change `height` to 100 and run again to see the other message, then change it back.

### Step 3: Choose between several options with `else if`
**Type this:**
```ts
if (age < 12) {
  console.log("Child ticket: 5");
} else if (age < 18) {
  console.log("Teen ticket: 7");
} else {
  console.log("Adult ticket: 12");
}
```
**You should see:** `Teen ticket: 7`
**Why:** The computer checks from the top and stops at the first condition that is true. Age 15 is not under 12, but it is under 18, so the second block runs. The `else` is the "none of the above" case. Try ages 5 and 30.

### Step 4: Store the price in a variable
Replace Step 3 with a version that stores the price and the ticket name, then prints them once:
```ts
let ticketName: string = "";
let price: number = 0;

if (age < 12) {
  ticketName = "Child";
  price = 5;
} else if (age < 18) {
  ticketName = "Teen";
  price = 7;
} else {
  ticketName = "Adult";
  price = 12;
}

console.log(ticketName, "ticket:", price);
```
**You should see:** `Teen ticket: 7`
**Why:** The variables are `let` because they get a new value inside the blocks. This is how real programs work: decide first, print once.

### Step 5: Put an `if` inside an `if` (nesting)
Add a rule: visitors under 8 can ride only with an adult. Replace the ride check from Step 2:
```ts
if (height >= 120) {
  if (age >= 8) {
    console.log("You can ride!");
  } else {
    console.log("You need an adult with you.");
  }
} else {
  console.log("Sorry, you are too short.");
}
```
**You should see:** `You can ride!`
**Why:** The inner `if` only runs when the outer one is true. Try `age = 6` with `height = 130`.

## Check yourself
For `age = 15`, `height = 150` the output should match the top of this page.

## Recap
- `if` runs a block when the condition is true.
- `else if` adds more options, `else` is the fallback.
- The first true condition wins, and the rest are skipped.
- An `if` can contain another `if`.

## If something breaks
- **Both messages print:** you used two separate `if`s instead of `if / else if`.
- **`Cannot find name 'ticketName'`:** you declared a variable inside `{ }`; declare it above the `if`.
