# Day 32: Function Type Aliases

**Project today:** Calculator Operation Registry (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- That a function is a value you can store in a variable
- How to write the type of a function
- How to name that type with `type` (a type alias) and reuse it
- How TypeScript checks a function against its type

Create `day32.ts` and run it with `npx tsx day32.ts`.

---

**1. A function can be stored in a variable**

So far every function had a name from `function name() {}`. You can also create a function and store it in a `const`, like any other value. The short form is an **arrow function**: parameters, then `=>`, then the result.

```ts
const add = (a: number, b: number): number => a + b;

console.log(add(2, 3));   // 5
```

Read it piece by piece:
- `(a: number, b: number)`: the parameters.
- `: number`: the return type.
- `=> a + b`: the body. With no `{ }`, the value after `=>` is returned.

You call it just like before: `add(2, 3)`.

---

**2. The type of a function**

Every value has a type, and so does a function. A **function type** describes the parameters and the return type, with `=>` between them.

```ts
const op: (a: number, b: number) => number = add;

console.log(op(10, 5));   // 15
```

`(a: number, b: number) => number` means: "a function that takes two numbers and returns a number". Here it is the type of the variable `op`. Any function with that shape can be stored in `op`.

---

**3. Naming the type with `type`**

Writing that long type again and again is tiring. A **type alias** gives a type a name. Write `type`, the name, `=`, then the type. By habit, names start with a capital letter.

```ts
type Operation = (a: number, b: number) => number;

const subtract: Operation = (a, b) => a - b;
const multiply: Operation = (x, y) => x * y;

console.log(subtract(9, 4), multiply(3, 3));   // 5 9
```

Notice two things:
- You write the types **once**, in the alias. Inside the arrow function, `a` and `b` are already known to be numbers, and the result is already known to be a number.
- The parameter names can differ (`x`, `y` instead of `a`, `b`). Only the types and the count matter.

An alias for a function type is a **contract**: every function stored under it must follow the same shape.

---

**4. TypeScript enforces the contract**

```ts
type Operation = (a: number, b: number) => number;

const bad1: Operation = (a, b) => "result: " + (a + b);
const bad2: Operation = (a: string, b: number) => b;
```

Errors:

```
error TS2322: Type 'string' is not assignable to type 'number'.
error TS2322: Type '(a: string, b: number) => number' is not assignable to type 'Operation'.
```

The first function returns text, the second takes the wrong parameter type. Calling a stored function also checks the arguments:

```ts
const ok: Operation = (a, b) => a + b;
ok(1);
```

```
error TS2554: Expected 2 arguments, but got 1.
```

---

**5. Aliases for other shapes**

The same idea works for any function shape.

```ts
type Formatter = (text: string) => string;

const shout: Formatter = (text) => text.toUpperCase() + "!";

console.log(shout("hi"));   // HI!
```

---

**6. Functions in arrays and objects**

Because a function is a value, it can sit in an object, and objects can sit in an array. This is how you build a list of choices.

```ts
const tools: { name: string; run: Operation }[] = [
  { name: "add", run: add },
  { name: "subtract", run: subtract },
];

for (const tool of tools) {
  console.log(tool.name + ": " + tool.run(8, 2));
}
```

Prints: `add: 10` and `subtract: 6`

`tool.run(8, 2)` reads the function from the object and calls it. The type `{ name: string; run: Operation }[]` means "an array of objects, each with a `name` string and a `run` function".

---

**Recap**

- A function can be stored in a `const`: `const add = (a: number, b: number): number => a + b;`.
- A function type looks like `(a: number, b: number) => number`.
- `type Name = ...` gives a type a reusable name (a type alias).
- A function stored under an alias must match its parameters and return type.
- Functions can live inside objects and arrays.

**Next:** open `exercises.md` for today's project and challenges.
