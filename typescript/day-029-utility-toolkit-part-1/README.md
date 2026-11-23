# Day 29: Functions, Part 1: Creating and Calling

**Project today:** Utility Toolkit, part 1 (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- What a function is, how to create one and how to call it
- Parameters and arguments
- `return`: sending a value back
- The difference between printing a value and returning it

Create `day29.ts` and run it with `npx tsx day29.ts`.

---

**1. What is a function?**

A **function** is a named block of code that you can run as many times as you want. You **declare** (create) it once with the `function` keyword. You **call** (run) it by writing its name followed by `()`.

```ts
function sayHello() {
  console.log("Hello!");
}

sayHello();
sayHello();
```

Prints: `Hello!` and `Hello!`

Declaring a function does **not** run it. The code inside only runs when you call it. Two calls means two runs.

---

**2. Parameters and arguments**

A function can take input. A **parameter** is a variable listed in the parentheses when you declare the function. An **argument** is the real value you give when you call it. In TypeScript every parameter gets a type.

```ts
function greet(name: string) {
  console.log("Hello, " + name + "!");
}

greet("Ana");
greet("Ben");
```

Prints: `Hello, Ana!` and `Hello, Ben!`

Read it piece by piece:
- `name: string`: a parameter called `name` that must be a string.
- `greet("Ana")`: `"Ana"` is the argument. Inside the function, `name` is `"Ana"`.

Each call gets its own value. The parameter only exists inside the function's `{ }`.

---

**3. More than one parameter**

Separate parameters with commas. Arguments are matched **by position**: the first argument goes to the first parameter, and so on.

```ts
function add(a: number, b: number) {
  console.log(a + b);
}

add(2, 3);
```

Prints: `5`

---

**4. `return`: sending a value back**

`console.log` only shows a value on the screen. `return` hands a value **back to the code that called the function**, so you can keep it and use it.

```ts
function double(n: number) {
  return n * 2;
}

const result = double(7);
console.log(result);          // 14
console.log(double(7) + 1);   // 15
```

A call to a function that returns a value is replaced by that value. `double(7)` becomes `14` wherever you write it.

---

**5. `return` ends the function**

The moment `return` runs, the function stops. Any line after it is never reached.

```ts
function early(n: number) {
  return n * 2;
  console.log("never printed");
}

console.log(early(1));
```

Prints: `2`

---

**6. Printing is not returning**

A function that only prints gives back nothing. When a function has no `return`, a call to it gives the value `undefined`.

```ts
function showDouble(n: number) {
  console.log(n * 2);
}

const x = showDouble(5);   // prints 10 while it runs
console.log(x);            // undefined
```

Prints: `10`, then `undefined`

**Watch out:** if you want to use the answer later (add to it, store it, pass it on), the function must `return` it. Printing inside the function is only for showing something.

---

**7. Functions can use other functions**

Because a call becomes its value, you can put one call inside another. A function can also take an array and use a loop inside.

```ts
function square(n: number) {
  return n * n;
}

function sumOf(numbers: number[]) {
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return total;
}

console.log(square(double(3)));   // double(3) is 6, square(6) is 36
console.log(sumOf([1, 2, 3]));    // 6
```

`number[]` means "an array of numbers".

---

**Recap**

- `function name(param: type) { ... }` creates a function. `name(argument)` runs it.
- A parameter is the placeholder. An argument is the real value.
- Arguments match parameters by position.
- `return value` sends a value back and stops the function.
- No `return` means the call gives `undefined`. Print to show, return to reuse.

**Next:** open `exercises.md` for today's project and challenges.
