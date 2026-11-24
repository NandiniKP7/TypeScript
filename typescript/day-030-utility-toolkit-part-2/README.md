# Day 30: Functions, Part 2: Types and Return Paths

**Project today:** Utility Toolkit, part 2 (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- Writing the return type of a function
- Functions that return a string, a number or a boolean
- Making sure every path returns a value
- How TypeScript checks your calls

Create `day30.ts` and run it with `npx tsx day30.ts`.

---

**1. The return type**

Yesterday TypeScript worked out the return type by itself. You can also **write it down**: put a colon and a type after the parentheses. This is the function's promise: "I will always give back this kind of value."

```ts
function double(n: number): number {
  return n * 2;
}

console.log(double(4));   // 8
```

Read it piece by piece:
- `n: number`: the parameter type (input).
- `): number`: the return type (output).

From now on, write both on every function.

---

**2. TypeScript checks the promise**

If the body returns something that does not match the return type, TypeScript shows an error before the program runs.

```ts
function double(n: number): number {
  return "double is " + n * 2;
}
```

Error (real message from `tsc`):

```
error TS2322: Type 'string' is not assignable to type 'number'.
```

The function promised a number but returned a string. Fix the body or fix the promise.

---

**3. Returning a string, a number or a boolean**

The same pattern works for every kind of value. A function that answers a yes/no question returns a `boolean`. Its name often starts with `is`.

```ts
function isEven(n: number): boolean {
  return n % 2 === 0;
}

function label(count: number): string {
  return count + " items";
}

console.log(isEven(4), isEven(7));   // true false
console.log(label(3));               // 3 items
```

`n % 2 === 0` is already `true` or `false`, so you can return the comparison directly.

---

**4. Every path must return**

If a function promises a value, **every way through it** must return one. An `if` without an `else` leaves a path where nothing is returned.

```ts
function gradeFor(score: number): string {
  if (score >= 60) {
    return "pass";
  }
}
```

Error:

```
error TS2366: Function lacks ending return statement and return type does not include 'undefined'.
```

What if `score` is 10? No `return` runs, so the function would give back `undefined`, not a string. Two fixes:

```ts
function describeAge(age: number): string {
  if (age >= 18) {
    return "adult";
  }
  return "minor";     // the path for everything else
}

function gradeFor(score: number): string {
  if (score >= 90) {
    return "A";
  } else if (score >= 60) {
    return "B";
  } else {
    return "F";       // a final else covers the rest
  }
}

console.log(describeAge(20), describeAge(10));          // adult minor
console.log(gradeFor(95), gradeFor(70), gradeFor(10));  // A B F
```

The `return "minor"` after the `if` is called an **early return** pattern: handle the special case first, then fall through to the normal answer.

---

**5. Several parameters, checked for you**

TypeScript checks each argument against its parameter, in order, and checks the count.

```ts
function introduce(name: string, age: number): string {
  return name + " is " + age;
}

console.log(introduce("Ana", 30));   // Ana is 30
```

These calls are mistakes:

```ts
introduce(30, "Ana");   // arguments in the wrong order
introduce("Ana");       // an argument is missing
```

Errors:

```
error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
error TS2554: Expected 2 arguments, but got 1.
```

The compiler catches the mistake at the call, before anything runs.

**Watch out:** an error from `tsc` appears in your editor and when you run `tsc`. `npx tsx` runs the file without checking types, so a wrong call may run and print strange values. Always read the red underlines in your editor.

---

**Recap**

- Write the return type after the parameters: `function f(a: number): string`.
- TypeScript errors if the body returns the wrong type.
- A function that returns `true` or `false` has the return type `boolean`.
- Every path must return a value. Add a final `return` or `else`.
- Arguments must match the parameters in type, order and count.

**Next:** open `exercises.md` for today's project and challenges.
