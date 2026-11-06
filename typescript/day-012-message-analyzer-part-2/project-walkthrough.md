# Day 12: Message Analyzer (Part 2): Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
A program that takes a messy to-do message, splits it into tasks, and reports on it. The raw message is `"  Meeting at 3pm, bring the REPORT, call Dana  "`. It prints:

```
Cleaned: meeting at 3pm, bring the report, call dana
Parts: 3
- Meeting at 3pm (14 characters)
- Bring the report (16 characters)
- Call dana (9 characters)
Updated: meeting at 3pm, bring the summary, call dana
Preview: meeting at...
Ending: dana
```

## What you'll learn
- `.split()`, `.slice()`, `.replace()`
- Template literals
- Capitalising the first letter

## Before you start
Create `day12.ts`. Run with `npx tsx day12.ts`.

## Build it, step by step

### Step 1: Clean the message
**Type this:**
```ts
const raw: string = "  Meeting at 3pm, bring the REPORT, call Dana  ";
const cleaned: string = raw.trim().toLowerCase();
console.log(`Cleaned: ${cleaned}`);
```
**You should see:** `Cleaned: meeting at 3pm, bring the report, call dana`
**Why:** Same cleaning as yesterday. The backticks let us put `${cleaned}` straight into the text.

### Step 2: Split into parts
**Type this:**
```ts
const parts: string[] = cleaned.split(",");
console.log(`Parts: ${parts.length}`);
```
**You should see:** `Parts: 3`
**Why:** `.split(",")` cuts the text at every comma and returns an array of the pieces.

### Step 3: Print each part
**Type this:**
```ts
for (const part of parts) {
  const text: string = part.trim();
  console.log(`- ${text} (${text.length} characters)`);
}
```
**You should see:**
```
- meeting at 3pm (14 characters)
- bring the report (16 characters)
- call dana (9 characters)
```
**Why:** After the split, pieces after the first one start with a space (`" bring the report"`). `.trim()` removes it, so the length is honest.

### Step 4: Capitalise the first letter
**Change the `console.log` inside the loop to:**
```ts
  const shown: string = text[0].toUpperCase() + text.slice(1);
  console.log(`- ${shown} (${text.length} characters)`);
```
**You should see:** the lines now start with capital letters: `- Meeting at 3pm (14 characters)`
**Why:** `text[0]` is the first letter, which we make upper case. `text.slice(1)` is everything after it. Joining them with `+` gives the new text. This is safe here because no part is empty. For a part that could be empty, check `text.length > 0` first.

### Step 5: Replace a word
**Type this after the loop:**
```ts
console.log(`Updated: ${cleaned.replace("report", "summary")}`);
```
**You should see:** `Updated: meeting at 3pm, bring the summary, call dana`
**Why:** `.replace()` returns a new string. `cleaned` itself is unchanged.

### Step 6: Preview and ending
**Type this:**
```ts
console.log(`Preview: ${cleaned.slice(0, 10)}...`);
console.log(`Ending: ${cleaned.slice(-4)}`);
```
**You should see:**
```
Preview: meeting at...
Ending: dana
```
**Why:** `slice(0, 10)` takes the first 10 characters. `slice(-4)` takes the last 4.

## Check yourself
Run the file. The output should match the top of this page.

## Recap
- `.split(",")` turns text into an array. `.trim()` each piece.
- `.slice(start, end)` excludes `end`. Negative numbers count from the end.
- Template literals put values and calculations into text.

## If something breaks
- **Pieces have extra spaces in the output:** you forgot to `.trim()` each piece after splitting.
- **Output shows `${cleaned}` as plain text:** you used normal quotes. Template literals need backticks.
- **Crash on `toUpperCase`:** a part was empty, so `text[0]` was `undefined`.
