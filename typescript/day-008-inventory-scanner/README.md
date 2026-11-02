# Day 8: Objects, `for...of`, `break` and `continue`

**Project today:** Inventory Scanner (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- A first look at objects
- `for...of` and `for...in`
- `continue` (skip) and `break` (stop)

Create `day8.ts` and run it with `npx tsx day8.ts`.

---

**1. An object groups related values**

An object stores several related values under **names**.

```ts
const product = { name: "Mouse", price: 25, discontinued: false };

console.log(product.name);    // Mouse
console.log(product.price);   // 25
```

Each name (`name`, `price`, `discontinued`) is a **property**. You read one with a dot. TypeScript works out the types by itself.

---

**2. A list of objects**

Programs hold records, like products or users, as a list of objects.

```ts
const products = [
  { name: "Laptop", price: 900, discontinued: false },
  { name: "Old Keyboard", price: 20, discontinued: true },
  { name: "Mouse", price: 25, discontinued: false },
];

console.log(products[2].name);   // Mouse
```

`products[2]` is the third object. `.name` reads one property from it.

---

**3. `for...of`: each item, no counter**

```ts
for (const product of products) {
  console.log("Checking:", product.name);
}
```

Prints: `Checking: Laptop`, `Checking: Old Keyboard`, `Checking: Mouse`

`for...of` gives you each item one at a time. No index, no `length`, so no off-by-one mistakes. Use it whenever you don't need the position.

---

**4. `continue`: skip this item**

```ts
for (const product of products) {
  if (product.discontinued) {
    continue;                 // jump to the next item
  }
  console.log("Checking:", product.name);
}
```

Prints: `Checking: Laptop`, `Checking: Mouse`

`continue` ends the current round and goes straight to the next one.

---

**5. `break`: stop the whole loop**

```ts
for (const product of products) {
  console.log("Checking:", product.name);
  if (product.name === "Old Keyboard") {
    console.log("Found it!");
    break;                    // leave the loop completely
  }
}
```

Prints: `Checking: Laptop`, `Checking: Old Keyboard`, `Found it!`

The `Mouse` is never checked. Once you have found what you want, there is no reason to keep looking.

|  | what it does |
|---|---|
| `continue` | skips to the next round |
| `break` | ends the loop |

Both only work inside a loop.

---

**6. `for...in`: the property names**

```ts
for (const key in products[0]) {
  console.log(key);
}
```

Prints: `name`, `price`, `discontinued`

`for...in` gives you the **names** of an object's properties. Don't mix it up with `for...of`, which gives you the **items** of a list.

---

**Recap**

- An object is `{ name: value, ... }`; read a property with a dot.
- `for...of`: each item of a list. `for...in`: each property name of an object.
- `continue` skips an item. `break` stops the loop.

**Next:** open `exercises.md` for today's project and challenges.
