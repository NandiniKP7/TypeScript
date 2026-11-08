# Day 14: Arrays, Part 1

**Project today:** Shopping List Manager, part 1 (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- Creating and typing arrays, reading and updating by index
- Adding and removing: `push`, `pop`, `unshift`, `shift`
- `includes` and `join`
- Sorting numbers the right way

Create `day14.ts` and run it with `npx tsx day14.ts`.

---

**1. Creating and typing an array**

You met arrays on Day 5. The type is the item type followed by `[]`. An empty array is fine, but you must give it a type so TypeScript knows what may go inside.

```ts
const items: string[] = ["milk", "eggs"];
const empty: string[] = [];
console.log(items);          // [ 'milk', 'eggs' ]
console.log(empty.length);   // 0
```

A `const` array can still change its **contents**. `const` only stops you from pointing the name at a different array.

---

**2. Reading and updating by index**

```ts
console.log(items[0]);   // milk
console.log(items[2]);   // undefined   (no third item)

items[1] = "bread";
console.log(items);      // [ 'milk', 'bread' ]
```

`items[1] = "bread"` replaces the item at position 1. The type must match: you cannot put a number into a `string[]`.

---

**3. `push` and `pop`: the end of the list**

- `push(x)` adds `x` to the **end**. It returns the new length.
- `pop()` removes the **last** item and returns it.

```ts
items.push("tea");
console.log(items);          // [ 'milk', 'bread', 'tea' ]

const last = items.pop();
console.log(last);           // tea
console.log(items);          // [ 'milk', 'bread' ]
```

`pop()` on an empty array returns `undefined`, so the type of `last` is "string or undefined". We will study that kind of type later. For now, only use the value when you know the list is not empty.

---

**4. `unshift` and `shift`: the start of the list**

- `unshift(x)` adds `x` to the **start**.
- `shift()` removes the **first** item and returns it.

```ts
items.unshift("rice");
console.log(items);          // [ 'rice', 'milk', 'bread' ]

const first = items.shift();
console.log(first);          // rice
console.log(items);          // [ 'milk', 'bread' ]
```

Remember: `push`/`pop` work at the end, `unshift`/`shift` at the start. All four **change** the array itself.

---

**5. `includes` and `join`**

`includes(x)` answers `true` or `false`. It is case sensitive. `join(separator)` glues the items into one string.

```ts
console.log(items.includes("milk"));   // true
console.log(items.includes("Milk"));   // false
console.log(items.join(", "));         // milk, bread
console.log([1, 2, 3].join("-"));      // 1-2-3
```

`join` is the opposite of `split` from Day 12.

---

**6. Sorting numbers**

`sort()` changes the array into order. With no help, it sorts as **text**, which goes wrong for numbers:

```ts
const nums: number[] = [10, 9, 1, 100];
nums.sort();
console.log(nums);   // [ 1, 10, 100, 9 ]
```

Text order compares character by character, so `"10"` comes before `"9"`. To sort numbers, give `sort` a **compare function**. It receives two numbers `a` and `b`. If it returns a negative number, `a` goes first. A positive number means `b` goes first.

```ts
function byNumber(a: number, b: number): number {
  return a - b;
}

nums.sort(byNumber);
console.log(nums);   // [ 1, 9, 10, 100 ]
```

`a - b` sorts from smallest to largest. `b - a` sorts from largest to smallest. Watch out: `sort` changes the original array. Sorting words with plain `sort()` is fine.

---

**Recap**

- Type an array as `string[]` or `number[]`, even when empty.
- `push`/`pop` work at the end. `unshift`/`shift` work at the start. They change the array.
- `includes` is case sensitive. `join` makes a string.
- Plain `sort()` sorts as text. For numbers, pass a compare function like `a - b`.

**Next:** open `exercises.md` for today's project and challenges.
