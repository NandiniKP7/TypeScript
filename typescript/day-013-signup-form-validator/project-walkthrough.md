# Day 13: Signup Form Validator: Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
A signup form validator. Each signup has a name, an email and a password. The program cleans the name and email, checks all three with small functions, and prints what is wrong. It prints:

```
Signup 1: valid (Ana, ana@example.com)
Signup 2: invalid
  - name
Signup 3: invalid
  - email
  - password
Valid signups: 1 of 3
```

## What you'll learn
- Writing small functions with typed parameters and return types
- Sanitizing first, then validating
- Collecting problems in an array

## Before you start
Create `day13.ts`. Run with `npx tsx day13.ts`.

## Build it, step by step

### Step 1: The sanitizing function
**Type this:**
```ts
function cleanText(text: string): string {
  return text.trim();
}
console.log(`[${cleanText("  Ana  ")}]`);
```
**You should see:** `[Ana]`
**Why:** A function with one parameter `text` that returns a trimmed string. This one changes the value, so it is sanitizing.

### Step 2: The validation functions
**Type this (replace the `console.log`):**
```ts
function isValidName(name: string): boolean {
  return name.length >= 2;
}

function isValidEmail(email: string): boolean {
  return email.includes("@") && email.includes(".") && !email.includes(" ");
}

function isValidPassword(password: string): boolean {
  return password.length >= 8;
}
```
**Why:** Each one answers yes or no and changes nothing. They expect already-cleaned input, so a name that was only spaces will arrive as `""` and fail.

### Step 3: The data
**Type this:**
```ts
const signups = [
  { name: "  Ana  ", email: " ana@example.com ", password: "secret123" },
  { name: "   ", email: "ben@example.com", password: "password1" },
  { name: "Cara", email: "cara.example.com", password: "short" },
];
```

### Step 4: Loop, clean and store
**Type this:**
```ts
let validCount: number = 0;

for (let i = 0; i < signups.length; i++) {
  const name: string = cleanText(signups[i].name);
  const email: string = cleanText(signups[i].email);
  const password: string = signups[i].password;
  const problems: string[] = [];
}
```
**You should see:** nothing yet.
**Why:** We clean the name and email once and store them. The password is not cleaned: spaces may be part of it. `problems` starts as an empty list.

### Step 5: Validate and collect problems
**Type this inside the loop, after `problems`:**
```ts
  if (!isValidName(name)) {
    problems.push("name");
  }
  if (!isValidEmail(email)) {
    problems.push("email");
  }
  if (!isValidPassword(password)) {
    problems.push("password");
  }
```
**Why:** Each failing check adds its field name to `problems`. After all three checks, an empty list means everything passed.

### Step 6: Print the result
**Type this inside the loop, after the checks:**
```ts
  if (problems.length === 0) {
    validCount++;
    console.log(`Signup ${i + 1}: valid (${name}, ${email})`);
  } else {
    console.log(`Signup ${i + 1}: invalid`);
    for (const problem of problems) {
      console.log(`  - ${problem}`);
    }
  }
```
**You should see:** the first six lines of the output at the top.

### Step 7: The summary
**Type this after the loop:**
```ts
console.log(`Valid signups: ${validCount} of ${signups.length}`);
```
**You should see:** `Valid signups: 1 of 3`

## Check yourself
Run the file. The output should match the top of this page.

## Recap
- Clean first, store the clean value, then validate it.
- Small `isValid...` functions are easy to read and reuse.
- Collect problems in an array, then report them.

## If something breaks
- **Signup 2 shows as valid:** you validated the raw name `"   "` instead of the cleaned one.
- **Error `A function whose declared type is not 'void' must return a value`:** one path in a function has no `return`.
- **Everything is invalid:** check `isValidEmail`. You need `!` before `email.includes(" ")`.
