# Day 9: Login Attempt Simulator: Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
A program that tries a list of passwords and locks the account after 3 wrong tries. Blank entries are ignored. With attempts `["", "abc", "wrongpass", "xyz", "secret123"]` it prints:

```
Blank attempt ignored
Attempt 1: wrong
Attempt 2: wrong
Attempt 3: wrong
Account locked after 3 attempts
```
With attempts `["", "abc", "secret123"]` it prints:
```
Blank attempt ignored
Attempt 1: wrong
Attempt 2: success
```

## What you'll learn
- The `while` loop: repeat while a condition is true
- The `do...while` loop: always run at least once
- Avoiding endless loops

## Before you start
Create `day9.ts`. Run with `npx tsx day9.ts`.

## Build it, step by step

### Step 1: A simple `while`
**Type this:**
```ts
let countdown: number = 3;
while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
console.log("Go!");
```
**You should see:** `3`, `2`, `1`, `Go!`
**Why:** `while` checks the condition **before** each round and repeats while it's true. Something inside must eventually make it false, here `countdown--`. If you forget it, the loop never ends. Stop an endless loop with Ctrl + C.

### Step 2: The data
**Type this (replace the countdown):**
```ts
const correctPassword: string = "secret123";
const attempts: string[] = ["", "abc", "wrongpass", "xyz", "secret123"];
const maxAttempts: number = 3;
```

### Step 3: Loop through the attempts
**Type this:**
```ts
let index: number = 0;
let tries: number = 0;
let loggedIn: boolean = false;

while (index < attempts.length && tries < maxAttempts && !loggedIn) {
  const attempt: string = attempts[index];
  index++;

  if (attempt === "") {
    console.log("Blank attempt ignored");
    continue;
  }

  tries++;
  if (attempt === correctPassword) {
    console.log("Attempt", tries + ": success");
    loggedIn = true;
  } else {
    console.log("Attempt", tries + ": wrong");
  }
}
```
**You should see:** the first four lines of the first output on this page.
**Why:**
- The loop keeps going while there are attempts left **and** tries remain **and** we're not logged in.
- `index++` is done **before** `continue`. If it came after, a blank attempt would jump back without moving forward, and the loop would never end.
- A blank attempt does not count as a try. `tries` only goes up for real attempts.

### Step 4: The final message
**Type this at the bottom:**
```ts
if (!loggedIn && tries >= maxAttempts) {
  console.log("Account locked after", maxAttempts, "attempts");
}
```
**You should see:** `Account locked after 3 attempts`
Now change `attempts` to `["", "abc", "secret123"]` and run again. You should get the second output at the top.

### Step 5: `do...while`
**Type this:**
```ts
let number: number = 10;
do {
  console.log("This runs once even though the condition is false");
} while (number < 5);
```
**You should see:** the message printed one time.
**Why:** `do...while` runs the block first, then checks the condition. With `while`, a false condition means the block never runs. Use `do...while` when something must happen at least once.

## Check yourself
Both attempt lists should produce the outputs at the top.

## Recap
- `while (condition)`: check first, then repeat.
- `do { } while (condition)`: run first, then check.
- Make sure something inside the loop changes the condition.

## If something breaks
- **Program never stops:** you forgot to change the variable in the condition. Press Ctrl + C.
- **Locked message shows when login worked:** check the `!loggedIn` part.
