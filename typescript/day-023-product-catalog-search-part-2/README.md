# Day 23: Sorting and Chaining

**Project today:** Product Catalog Search, part 2 (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- Sorting objects by a number or by text
- Sorting a copy so the original keeps its order
- Chaining methods into a pipeline
- Choosing the right method from what you want

Create `day23.ts` and run it with `npx tsx day23.ts`.

---

**1. Sorting objects by a number**

On Day 14 you sorted numbers with `(a, b) => a - b`. For objects, subtract the property you want to sort by.

```ts
type Item = { name: string; price: number };

const items: Item[] = [
  { name: "tea", price: 3 },
  { name: "jam", price: 1.5 },
  { name: "bread", price: 2 },
];

const cheapFirst: Item[] = [...items].sort((a, b) => a.price - b.price);
console.log(cheapFirst.map((i) => i.name));   // [ 'jam', 'bread', 'tea' ]

const dearFirst: Item[] = [...items].sort((a, b) => b.price - a.price);
console.log(dearFirst.map((i) => i.name));    // [ 'tea', 'bread', 'jam' ]
```

`a - b` is smallest first. `b - a` is largest first. We sort a **copy** (`[...items]`) because `sort` changes the array it is called on. The original stays in order:

```ts
console.log(items.map((i) => i.name));        // [ 'tea', 'jam', 'bread' ]
```

---

**2. Sorting by text: `localeCompare`**

You cannot subtract text. `a.localeCompare(b)` compares two strings and returns a negative number, 0 or a positive number, which is exactly what `sort` needs.

```ts
const byName: Item[] = [...items].sort((a, b) => a.name.localeCompare(b.name));
console.log(byName.map((i) => i.name));   // [ 'bread', 'jam', 'tea' ]

console.log("a".localeCompare("b"));   // -1   (a comes first)
console.log("b".localeCompare("a"));   // 1
console.log("a".localeCompare("a"));   // 0
```

Why not plain `sort()`? It puts all capital letters before all lower-case ones:

```ts
console.log(["b", "A", "a", "B"].sort());
// [ 'A', 'B', 'a', 'b' ]
console.log(["b", "A", "a", "B"].sort((x, y) => x.localeCompare(y)));
// [ 'a', 'A', 'b', 'B' ]
```

---

**3. Sorting by two things**

When two items tie on the first rule, use a second rule. In the compare function, return early for the first rule when they differ.

```ts
type P = { cat: string; price: number };
const ps: P[] = [
  { cat: "b", price: 2 }, { cat: "a", price: 9 },
  { cat: "b", price: 1 }, { cat: "a", price: 3 },
];

const sorted: P[] = [...ps].sort((a, b) => {
  if (a.cat !== b.cat) {
    return a.cat.localeCompare(b.cat);
  }
  return a.price - b.price;
});
// a3, a9, b1, b2
```

Items that tie on every rule keep their original order. This is called a stable sort.

---

**4. Method chaining**

Every `filter`, `map` and `sort` (on a copy) returns an array, so you can call the next method directly on the result. Read the chain from top to bottom: each line is one step.

```ts
const names: string = items
  .filter((i) => i.price >= 2)
  .sort((a, b) => a.price - b.price)
  .map((i) => i.name)
  .join(", ");

console.log(names);   // bread, tea
```

Order matters:
- `filter` first: less data for the later steps.
- `sort` before `map`: while you still have the whole object to sort by.
- `slice(0, 2)` after `sort`: the first two of the sorted list (a "top 2").

```ts
const top2: string[] = [...items]
  .sort((a, b) => b.price - a.price)
  .slice(0, 2)
  .map((i) => i.name);
console.log(top2);   // [ 'tea', 'bread' ]
```

Careful: `.sort()` changes the array it is called on. In a chain that starts with `filter`, the array is already a new one, so it is safe. If the chain starts from your original array, copy it first with `[...items]`.

A chain ending in `join` gives text. A chain ending in `reduce` gives one value. Anything after those cannot be an array method.

---

**5. Choosing a method from your intent**

Ask what you want out:

| I want... | Method |
|---|---|
| a new list, same size, each item changed | `map` |
| fewer items | `filter` |
| one item | `find` |
| one position | `findIndex` |
| yes or no | `some` / `every` / `includes` |
| one total or one summary | `reduce` |
| the list in order | `sort` (on a copy) |
| the first few | `slice(0, n)` |
| to just print or run an action | `forEach` |

A chain is just several of these in a row.

---

**Recap**

- Sort objects with `a.number - b.number`, or `a.text.localeCompare(b.text)`.
- Copy before you sort: `[...list].sort(...)`.
- For ties, add a second rule inside the compare function.
- Chain `filter`, `sort`, `slice`, `map`, then finish with `join` or `reduce` if you need.
- Pick the method from what you want out.

**Next:** open `exercises.md` for today's project and challenges.
