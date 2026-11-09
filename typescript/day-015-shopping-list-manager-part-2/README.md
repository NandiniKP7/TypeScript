# Day 15: Arrays, Part 2

**Project today:** Shopping List Manager, part 2 (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- `slice`, `splice` and `concat`
- The spread operator `...`
- Mutation: which methods change the array
- Copying an array without changing the original

Create `day15.ts` and run it with `npx tsx day15.ts`.

---

**1. `slice` copies a piece (and changes nothing)**

You used `slice` on strings on Day 12. On arrays it works the same way: from `start` up to, **not including**, `end`.

```ts
const letters: string[] = ["a", "b", "c", "d", "e"];
console.log(letters.slice(1, 3));   // [ 'b', 'c' ]
console.log(letters.slice(3));      // [ 'd', 'e' ]
console.log(letters.slice(-2));     // [ 'd', 'e' ]
console.log(letters);               // [ 'a', 'b', 'c', 'd', 'e' ]  (unchanged)
```

`slice` returns a **new** array. The original stays as it was.

---

**2. `splice` cuts items out of the original**

`splice(start, count)` removes `count` items starting at `start`, **changes the array**, and returns the removed items.

```ts
const removed: string[] = letters.splice(1, 2);
console.log(removed);   // [ 'b', 'c' ]
console.log(letters);   // [ 'a', 'd', 'e' ]
```

`slice` and `splice` look alike but are very different. `slice` copies. `splice` changes the array. An easy way to remember: the "p" in `splice` is for "plug in/pull out".

---

**3. `splice` can also insert and replace**

Extra arguments after the count are inserted at `start`.

```ts
letters.splice(1, 0, "X", "Y");   // remove 0 items, insert X and Y at position 1
console.log(letters);             // [ 'a', 'X', 'Y', 'd', 'e' ]

letters.splice(0, 1, "Z");        // remove 1 item, insert Z in its place
console.log(letters);             // [ 'Z', 'X', 'Y', 'd', 'e' ]
```

---

**4. `concat` joins arrays**

```ts
const a: number[] = [1, 2];
const b: number[] = [3, 4];
const both: number[] = a.concat(b);
console.log(both);   // [ 1, 2, 3, 4 ]
console.log(a);      // [ 1, 2 ]   (unchanged)
```

`concat` returns a new array. Neither `a` nor `b` changes.

---

**5. The spread operator `...`**

Three dots in front of an array **spread** its items out, one by one, in the same order. The result is the same as typing each item yourself. Put them inside new `[ ]` brackets.

```ts
const spread: number[] = [...a, ...b, 5];
console.log(spread);       // [ 1, 2, 3, 4, 5 ]
console.log([0, ...a]);    // [ 0, 1, 2 ]
```

This does the job of `concat`, and lets you place extra items anywhere.

---

**6. Mutation and copying**

To **mutate** means to change the original array. These methods mutate: `push`, `pop`, `shift`, `unshift`, `splice`, `sort`. These do **not**: `slice`, `concat`, `join`, `includes`, and spread.

A very common bug: assigning an array to another variable does **not** copy it. Both names point to the **same** array.

```ts
const original: string[] = ["x", "y"];
const alias: string[] = original;
alias.push("z");
console.log(original);   // [ 'x', 'y', 'z' ]   changed too!
```

To make a real copy, spread it (or use `slice()` with no arguments).

```ts
const copy: string[] = [...original];
copy.push("w");
console.log(original);   // [ 'x', 'y', 'z' ]
console.log(copy);       // [ 'x', 'y', 'z', 'w' ]
```

Because `sort` mutates, copy first when you want to keep the original order: `[...prices].sort(byNumber)`.

---

**7. Removing an item without mutating**

Join the piece before it and the piece after it.

```ts
const cart: string[] = ["a", "b", "c"];
const without: string[] = [...cart.slice(0, 1), ...cart.slice(2)];
console.log(without);   // [ 'a', 'c' ]
console.log(cart);      // [ 'a', 'b', 'c' ]
```

Watch out: a spread copy is **shallow**. It copies the list, not the things inside it. If the items are themselves arrays or objects, both copies still share those inner things.

---

**Recap**

- `slice` copies a piece. `splice` changes the original (remove, insert, replace).
- `concat` and spread build a new array from others.
- `push`, `pop`, `shift`, `unshift`, `splice` and `sort` mutate the array.
- `const copy = other` is **not** a copy. `[...other]` is.
- Copy before you sort if you need the original order.

**Next:** open `exercises.md` for today's project and challenges.
