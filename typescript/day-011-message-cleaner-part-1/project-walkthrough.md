# Day 11: Message Cleaner (Part 1): Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
A program that takes one messy message, cleans it, and reports facts about it. The raw message is `"   Hello Team, PLEASE review the report   "`. It prints:

```
Original length: 42
Cleaned: hello team, please review the report
Cleaned length: 36
Greeting: true
Ends with a question mark: false
Polite: true
First letter: h
Last letter: t
```

## What you'll learn
- `.length`, `.trim()`, `.toLowerCase()`
- `.startsWith()`, `.endsWith()`, `.includes()`
- Picking the first and last character

## Before you start
Create `day11.ts` in your `ts-days` folder. Run with `npx tsx day11.ts`.

## Build it, step by step

### Step 1: The raw message
**Type this:**
```ts
const raw: string = "   Hello Team, PLEASE review the report   ";
console.log("Original length:", raw.length);
```
**You should see:** `Original length: 42`
**Why:** `.length` counts every character, including the 3 spaces at each end.

### Step 2: Clean it
**Type this:**
```ts
const cleaned: string = raw.trim().toLowerCase();
console.log("Cleaned:", cleaned);
console.log("Cleaned length:", cleaned.length);
```
**You should see:**
```
Cleaned: hello team, please review the report
Cleaned length: 36
```
**Why:** `.trim()` removes the end spaces, then `.toLowerCase()` makes everything lower case. Methods return a **new** string, so we store the result in `cleaned`. `raw` is unchanged.

### Step 3: Is it a greeting?
**Type this:**
```ts
console.log("Greeting:", cleaned.startsWith("hello"));
```
**You should see:** `Greeting: true`
**Why:** We check the cleaned text. If we had checked `raw`, the leading spaces and the capital `H` would give `false`.

### Step 4: Ends with a question mark?
**Type this:**
```ts
console.log("Ends with a question mark:", cleaned.endsWith("?"));
```
**You should see:** `Ends with a question mark: false`

### Step 5: Is it polite?
**Type this:**
```ts
console.log("Polite:", cleaned.includes("please"));
```
**You should see:** `Polite: true`
**Why:** The original had `PLEASE` in capitals. We lower-cased first, so the search works.

### Step 6: First and last character
**Type this:**
```ts
console.log("First letter:", cleaned[0]);
console.log("Last letter:", cleaned[cleaned.length - 1]);
```
**You should see:**
```
First letter: h
Last letter: t
```
**Why:** The first index is 0. The last index is always `length - 1`.

## Check yourself
Run the file. The output should match the top of this page.

## Recap
- Clean first (`trim`, `toLowerCase`), then ask questions.
- Methods return new strings. Store the result.
- First character is `[0]`, last is `[length - 1]`.

## If something breaks
- **`Greeting: false`:** you asked `raw.startsWith("hello")` instead of `cleaned.startsWith(...)`.
- **Original length is not 42:** check you typed exactly three spaces at the start and at the end of the string.
