# Day 17: `map`

**Project today:** User View-Model (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- `map`: turn every item into something new
- Pulling one property out of a list of objects
- Returning new objects, and spreading while mapping
- Typing the result of `map`

Create `day17.ts` and run it with `npx tsx day17.ts`.

---

**1. `map` builds a new array**

`map` calls your function for every item, like `forEach`. The difference: whatever your function **returns** becomes an item in a **new array**. The new array has the same number of items, in the same order.

```ts
const prices: number[] = [10, 20, 30];
const doubled: number[] = prices.map((p) => p * 2);

console.log(doubled);   // [ 20, 40, 60 ]
console.log(prices);    // [ 10, 20, 30 ]   (unchanged)
```

Read it piece by piece:
- `(p) => p * 2` is an arrow function. For each `p`, it returns `p * 2`.
- `doubled` collects the returned values.
- The original array is never changed.

---

**2. The type can change**

The items that come out do not have to be the same type as the items that went in.

```ts
const labels: string[] = prices.map((p) => `$${p}`);
console.log(labels);    // [ '$10', '$20', '$30' ]

const lengths: number[] = ["a", "bbb", "cc"].map((w) => w.length);
console.log(lengths);   // [ 1, 3, 2 ]
```

Numbers went in, text came out. Words went in, numbers came out.

---

**3. `map` or `forEach`?**

- Use `forEach` when you want to **do** something with each item (print, add to a total). It returns nothing.
- Use `map` when you want a **new list** made from the old one.

Common problem: using `map` just to print, and ignoring the array it returns. Use `forEach` for that.

---

**4. Extracting a property**

A very common job is to take one property out of every object.

```ts
type User = { name: string; age: number };

const users: User[] = [
  { name: "Ana", age: 30 },
  { name: "Ben", age: 16 },
];

const names: string[] = users.map((u) => u.name);
console.log(names);   // [ 'Ana', 'Ben' ]
```

---

**5. Returning new objects**

Your function can return an object. When an arrow function returns an object directly, wrap the object in round brackets `( )`. Without them, the `{` would be read as the start of a function body.

```ts
const cards = users.map((u) => ({
  label: u.name.toUpperCase(),
  adult: u.age >= 18,
}));
console.log(cards);
// [ { label: 'ANA', adult: true }, { label: 'BEN', adult: false } ]
```

This kind of "list of new, display-ready objects" is often called a **view-model**: data reshaped for what you want to show.

---

**6. Spread while mapping**

On Day 15 you spread arrays. Three dots also copy the properties of an **object**. Put your changes **after** the spread, and they win.

```ts
const older = users.map((u) => ({ ...u, age: u.age + 1 }));
console.log(older);
// [ { name: 'Ana', age: 31 }, { name: 'Ben', age: 17 } ]
console.log(users[0].age);   // 30   (the original is not changed)

const tagged = users.map((u) => ({ ...u, active: true }));
// every user now also has active: true
```

`{ ...u, age: u.age + 1 }` means "copy everything from `u`, then replace `age`". If you map and change `u.age` directly instead, you would mutate the original.

---

**7. Typing the result**

TypeScript works out the result type for you. To make it exact and visible, give the shape a name and write it as the return type of the arrow function, after the parameter brackets.

```ts
type Card = { label: string; adult: boolean };

const typed: Card[] = users.map((u): Card => ({
  label: u.name,
  adult: u.age >= 18,
}));
```

`(u): Card` says "this function returns a `Card`". If you forget a property or use the wrong type, TypeScript shows an error right there.

The index is available as a second parameter, as in `forEach`: `list.map((item, i) => ...)`.

---

**Recap**

- `map` returns a new array, same length, one result per item.
- The result type can differ from the input type.
- Use `forEach` to do something, `map` to build something.
- Wrap an object returned from an arrow function in `( )`.
- `{ ...old, field: newValue }` copies an object with a change.
- Add a return type such as `(u): Card =>` to check the shape.

**Next:** open `exercises.md` for today's project and challenges.
