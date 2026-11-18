# Day 24: Company Skills Index: Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
A company skills index built from each employee's list of skills. It prints:

```
Nested lists: 5
All skills (11): typescript, css, html, typescript, sql, css, design, html, sql, typescript, testing
Unique skills (6): css, design, html, sql, testing, typescript
People per skill:
  css: 2
  design: 1
  html: 2
  sql: 2
  testing: 1
  typescript: 3
Pairs: 11
First pair: Ana-typescript
Knows typescript: Ana, Ben, Eva
No skills listed: Dan
```

## What you'll learn
- Nested arrays and `flatMap`
- Unique values and counts from a flat list

## Before you start
Create `day24.ts`. Run with `npx tsx day24.ts`.

## Build it, step by step

### Step 1: Type and data
**Type this:**
```ts
type Employee = { name: string; skills: string[] };

const staff: Employee[] = [
  { name: "Ana", skills: ["typescript", "css", "html"] },
  { name: "Ben", skills: ["typescript", "sql"] },
  { name: "Cara", skills: ["css", "design", "html"] },
  { name: "Dan", skills: [] },
  { name: "Eva", skills: ["sql", "typescript", "testing"] },
];
```

### Step 2: See the nesting
**Type this:**
```ts
const nestedSkills: string[][] = staff.map((e) => e.skills);
console.log(`Nested lists: ${nestedSkills.length}`);
```
**You should see:** `Nested lists: 5`
**Why:** `map` gives one skills list per employee: a list of lists. Dan's list is empty but still counts as one list.

### Step 3: Flatten
**Type this:**
```ts
const allSkills: string[] = staff.flatMap((e) => e.skills);
console.log(`All skills (${allSkills.length}): ${allSkills.join(", ")}`);
```
**You should see:** `All skills (11): typescript, css, html, typescript, sql, css, design, html, sql, typescript, testing`
**Why:** `flatMap` maps each employee to their skills and flattens one level. Dan adds nothing.

### Step 4: Unique and sorted
**Type this:**
```ts
const unique: string[] = [];
allSkills.forEach((skill) => {
  if (!unique.includes(skill)) {
    unique.push(skill);
  }
});
unique.sort((a, b) => a.localeCompare(b));
console.log(`Unique skills (${unique.length}): ${unique.join(", ")}`);
```
**You should see:** `Unique skills (6): css, design, html, sql, testing, typescript`
**Why:** Only add a skill if it is not already in the list. Then sort A to Z.

### Step 5: Count people per skill
**Type this:**
```ts
type Counts = { [skill: string]: number };

const startCounts: Counts = {};
const counts: Counts = allSkills.reduce((acc, skill) => {
  if (acc[skill] === undefined) {
    acc[skill] = 0;
  }
  acc[skill] += 1;
  return acc;
}, startCounts);

console.log("People per skill:");
unique.forEach((skill) => {
  console.log(`  ${skill}: ${counts[skill]}`);
});
```
**You should see:** the "People per skill" block from the top of this page.
**Why:** Each skill appears once per person who has it, so counting skill appearances counts people. We loop over the sorted `unique` list to print in alphabetical order.

### Step 6: Pairs and lookups
**Type this:**
```ts
const pairs: string[] = staff.flatMap((e) => e.skills.map((s) => `${e.name}-${s}`));
console.log(`Pairs: ${pairs.length}`);
console.log(`First pair: ${pairs[0]}`);

const tsPeople: string[] = staff.filter((e) => e.skills.includes("typescript")).map((e) => e.name);
console.log(`Knows typescript: ${tsPeople.join(", ")}`);

const noSkills: string[] = staff.filter((e) => e.skills.length === 0).map((e) => e.name);
console.log(`No skills listed: ${noSkills.join(", ")}`);
```
**You should see:**
```
Pairs: 11
First pair: Ana-typescript
Knows typescript: Ana, Ben, Eva
No skills listed: Dan
```
**Why:** Inside `flatMap`, an inner `map` builds a text for each skill, using the employee's name. `flatMap` then joins all the little lists.

## Check yourself
Run the file. The output should match the top of this page.

## Recap
- `map` gives a list of lists. `flatMap` gives one flat list.
- Flatten first, then unique, count, sort.

## If something breaks
- **`Nested lists` shows 11:** you used `flatMap` where you wanted `map`.
- **Error: `string[][]` is not assignable to `string[]`:** you used `map` where you wanted `flatMap` (or you forgot `.flat()`).
- **Duplicates in the unique list:** check the `!` in `!unique.includes(skill)`.
