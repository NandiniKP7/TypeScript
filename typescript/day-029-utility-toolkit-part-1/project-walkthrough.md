# Day 29: Utility Toolkit, Part 1: Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
A file of small reusable functions, then calls that print:

```
Hello, Ana!
Hello, Ben!
double(7) = 14
add(2, 3) = 5
square(9) = 81
Ana Lopez
Order total: 77
```

## What you'll learn
- Declaring and calling functions
- Parameters, arguments and `return`
- Using one function's result as another's argument

## Before you start
Create `day29.ts`. Run with `npx tsx day29.ts`.

## Build it, step by step

### Step 1: A function that prints
**Type this:**
```ts
function greet(name: string) {
  console.log("Hello, " + name + "!");
}

greet("Ana");
greet("Ben");
```
**You should see:**
```
Hello, Ana!
Hello, Ben!
```
**Why:** `name` is a parameter. Each call gives it a new argument. `greet` prints, so it does not need `return`.

### Step 2: A function that returns
**Type this above the `greet("Ana")` line:**
```ts
function double(n: number) {
  return n * 2;
}
```
**And this at the bottom:**
```ts
console.log("double(7) =", double(7));
```
**You should see:** `double(7) = 14` after the two greetings.
**Why:** `double(7)` turns into `14`, so `console.log` receives two values: the label and the number.

### Step 3: Two parameters
**Type this with the other functions:**
```ts
function add(a: number, b: number) {
  return a + b;
}
```
**And at the bottom:**
```ts
console.log("add(2, 3) =", add(2, 3));
```
**You should see:** `add(2, 3) = 5`
**Why:** `2` goes to `a` and `3` goes to `b`, because arguments are matched by position.

### Step 4: `square`
**Type this:**
```ts
function square(n: number) {
  return n * n;
}
console.log("square(9) =", square(9));
```
**You should see:** `square(9) = 81`
**Why:** Same shape as `double`. Each function does one small job.

### Step 5: A function with strings
**Type this:**
```ts
function fullName(first: string, last: string) {
  return first + " " + last;
}
console.log(fullName("Ana", "Lopez"));
```
**You should see:** `Ana Lopez`
**Why:** Functions can take and return strings. Remember the space between the names.

### Step 6: Combine the functions
**Type this:**
```ts
function addTax(price: number) {
  return price + price * 0.1;
}
console.log("Order total:", add(addTax(50), addTax(20)));
```
**You should see:** `Order total: 77`
**Why:** `addTax(50)` is `55` and `addTax(20)` is `22`. Those become the two arguments of `add`, which returns `77`. This only works because `addTax` returns its answer.

## Check yourself
Your output should match the seven lines at the top, in that order. The function declarations can be anywhere in the file, but keeping them together at the top is tidy.

## Recap
- A function is declared once and can be called many times.
- Parameters are placeholders. Arguments are the real values.
- `return` sends a value back so other code can use it.
- A function that only prints returns nothing useful.

## If something breaks
- **You see `undefined` in your output:** your function prints instead of returning. Change `console.log(...)` inside it to `return ...`.
- **`NaN` in the output:** an argument is missing or in the wrong place. Check that the call has as many arguments as the function has parameters.
- **Nothing printed for a function:** declaring is not calling. Add the call, such as `greet("Ana");`.
