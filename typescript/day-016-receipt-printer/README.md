# Day 16: `forEach` and Arrow Functions

**Project today:** Receipt Printer (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- The `forEach` array method
- Arrow functions, the short way to write a function
- Giving a shape of an object a name with `type`
- When a plain loop is clearer than `forEach`
- `.toFixed()` for money

Create `day16.ts` and run it with `npx tsx day16.ts`.

---

**1. `forEach` runs a function for every item**

`forEach` is an array method. You give it a function, and it calls that function once for each item, in order. A function you hand to another function like this is called a **callback**.

```ts
const names: string[] = ["Ana", "Ben", "Cara"];

names.forEach((name) => {
  console.log(`Hello, ${name}`);
});
```

Prints: `Hello, Ana`, `Hello, Ben`, `Hello, Cara`

Read it piece by piece:
- `names.forEach( ... )` means "for each item in `names`, call this function".
- `(name) => { ... }` is the function. `name` is the parameter that receives one item per call.
- You do not write a counter or a condition. `forEach` handles the stepping.

---

**2. Arrow functions**

An **arrow function** is a shorter way to write a function. It has a parameter list, an arrow `=>`, and a body. It has no name and it is usually written right where it is used.

```ts
const add = (a: number, b: number): number => a + b;
console.log(add(2, 3));   // 5
```

When the body is one expression, you can skip the braces and `return`. The value of the expression is returned automatically. With braces, you must write `return` yourself.

```ts
const square = (n: number): number => {
  return n * n;
};
console.log(square(5));   // 25
```

You can also pass a function you already named:

```ts
function shout(name: string): void {
  console.log(name.toUpperCase());
}
names.forEach(shout);     // ANA, BEN, CARA
```

`void` means "returns nothing". The function does a job and gives no value back.

---

**3. The index**

`forEach` can pass a second thing to your function: the position of the item.

```ts
names.forEach((name, index) => {
  console.log(`${index + 1}. ${name}`);
});
```

Prints: `1. Ana`, `2. Ben`, `3. Cara`

The first parameter is always the item. The second is its index, counted from 0.

---

**4. `forEach` returns nothing**

`forEach` is used for **doing** something with each item, such as printing. The call itself returns `undefined`, so there is nothing to store.

```ts
const result = names.forEach((n) => n);
console.log(result);   // undefined
```

Common problem: expecting `forEach` to give you a new array. It never does. (Tomorrow's `map` does that.)

To build up a result with `forEach`, make a variable **before** it, and change it inside the callback:

```ts
let letters: number = 0;
names.forEach((name) => {
  letters += name.length;
});
console.log(letters);   // 10
```

---

**5. Naming the shape of an object with `type`**

A **type alias** gives a name to a type, so you can reuse it. For an object, list its properties and their types.

```ts
type Item = { name: string; price: number };

const items: Item[] = [
  { name: "tea", price: 2 },
  { name: "jam", price: 3.5 },
];

items.forEach((item) => {
  console.log(`${item.name}: ${item.price}`);
});
```

Prints: `tea: 2`, `jam: 3.5`

`Item[]` means "a list of `Item` objects". TypeScript now knows `item.name` is a string and `item.price` is a number inside the callback, without you typing it again.

---

**6. `.toFixed()` for money**

`number.toFixed(2)` returns the number as **text** with exactly 2 decimals.

```ts
console.log((3.5).toFixed(2));   // 3.50
console.log((7).toFixed(2));     // 7.00
const price: number = 3.5;
console.log(price.toFixed(2));   // 3.50
```

A number written directly needs brackets before the dot, `(3.5).toFixed(2)`. A variable does not.

---

**7. `forEach` or a `for` loop?**

`forEach` is clean when you simply do something with every item. Use a plain `for` or `for...of` loop when you need `break` or `continue`, or when you need to stop early. They do not work inside a `forEach` callback.

---

**Recap**

- `array.forEach((item, index) => { ... })` calls your function for each item.
- Arrow function: `(a: number): number => a + 1`. One expression needs no braces or `return`.
- `forEach` returns `undefined`. Use a variable declared before it to collect a total.
- `type Name = { ... }` names an object shape. `Name[]` is a list of them.
- `.toFixed(2)` gives text with 2 decimals.
- Need `break` or `continue`? Use a normal loop.

**Next:** open `exercises.md` for today's project and challenges.
