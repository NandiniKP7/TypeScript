# Day 13: Sanitization and Validation

**Project today:** Signup Form Validator (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- A first look at functions: a named, reusable block of code
- Sanitization (cleaning) versus validation (checking)
- Why you trim before you validate
- Storing the cleaned value and reusing validation functions

Create `day13.ts` and run it with `npx tsx day13.ts`.

---

**1. A function is a named, reusable block of code**

You will study functions in depth later. Today you only need the basics, because validation is easier when each check has a name.

```ts
function double(n: number): number {
  return n * 2;
}

console.log(double(4));          // 8
const result: number = double(10);
console.log(result);             // 20
```

Read it piece by piece:
- `function double` creates a function called `double`.
- `(n: number)` is a **parameter**: a variable that receives the value you give when calling. We say what type it must be.
- `: number` after the brackets is the type of the value it **returns**.
- `return n * 2` sends a value back to the caller and ends the function.
- `double(4)` **calls** the function. The `4` is the **argument**, the actual value for `n`.

---

**2. Functions can take several parameters**

```ts
function greet(name: string, greeting: string): string {
  return `${greeting}, ${name}!`;
}
console.log(greet("Ana", "Hello"));   // Hello, Ana!
```

Arguments are matched to parameters in order.

---

**3. A function that answers yes or no**

A function that returns a `boolean` is perfect for a check. Start its name with `is`, as in `isSomething`, so the name reads as a yes/no question.

```ts
function isLongEnough(text: string): boolean {
  return text.length >= 8;
}
console.log(isLongEnough("abc"));        // false
console.log(isLongEnough("abcdefgh"));   // true
```

Write the check once, then use it on many values.

---

**4. Sanitization is not validation**

- **Sanitization** means **cleaning** the value: trim spaces, fix the case, remove extra characters. The value is changed.
- **Validation** means **checking** the value against a rule: is it long enough, does it have an `@`? The value is not changed. The answer is `true` or `false`.

The usual order: sanitize first, then validate the cleaned value.

```ts
const raw: string = "   ";
console.log(raw.length > 0);          // true   (looks "filled in" but it is only spaces)
console.log(raw.trim().length > 0);   // false  (after trimming, nothing is left)
```

Common problem: a field with only spaces passes a "not empty" check unless you trim first.

---

**5. Store the cleaned value**

Do not clean the value every time you need it. Clean it once, store it, and use the stored version.

```ts
const name: string = "  Ana  ".trim();
console.log(`Hello, ${name}`);   // Hello, Ana
```

Not every field should be cleaned the same way. Trim a name or an email. Do **not** trim a password: spaces may be part of what the person chose.

---

**6. `return` stops the function early**

You already know "check the no reasons first" from the `if` days. Inside a function, `return` ends the function at once.

```ts
function check(x: number): string {
  if (x > 0) {
    return "positive";   // stops here when x > 0
  }
  return "not positive";
}
console.log(check(3));    // positive
console.log(check(-1));   // not positive
```

Every path through a function must return a value of the promised type. If a path returns nothing, TypeScript shows an error.

---

**Recap**

- A function has a name, parameters with types, a return type and a `return`.
- `isSomething` functions return `true` or `false`.
- Sanitize (clean and change) first, then validate (check and answer yes or no).
- Trim before checking for empty. Store the cleaned value once.
- Do not alter fields like passwords.

**Next:** open `exercises.md` for today's project and challenges.
