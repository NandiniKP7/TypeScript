# Day 21: `reduce`, Part 3

**Project today:** Department Sales Summary, part 3 (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- Finding the maximum, the minimum and the longest with `reduce`
- Finding the best object in a list
- An accumulator that is an object with several fields
- Tracing a complex accumulator

Create `day21.ts` and run it with `npx tsx day21.ts`.

---

**1. The maximum**

Keep the biggest number seen so far. For each number, if it is bigger, return it. If not, return the old best.

```ts
const nums: number[] = [4, 17, 9, 12];

const max: number = nums.reduce((best, n) => {
  if (n > best) {
    return n;
  }
  return best;
}, -Infinity);

console.log(max);   // 17
```

`-Infinity` is a built-in number that is smaller than every other number. It is a safe starting point. If you started at `0`, a list of only negative numbers would wrongly give `0`. For a minimum, start at `Infinity` and use `<`.

For an empty list, this gives `-Infinity`, not a crash. That is a sign "nothing was found".

---

**2. The longest text**

Same idea, with `length`. Start at an empty string.

```ts
const words: string[] = ["fig", "banana", "kiwi", "cherry"];

const longest: string = words.reduce((best, w) => {
  if (w.length > best.length) {
    return w;
  }
  return best;
}, "");

console.log(longest);   // banana
```

When two words tie (`banana` and `cherry` both have 6 letters), `>` keeps the first one found.

---

**3. The best object**

To find the whole object with the highest value, the accumulator is an object. But at the start there is no object yet. A type like `Sale | null` means "a Sale, or `null` (nothing)". We tell `reduce` that this is the accumulator's type by writing it in angle brackets right after `reduce`.

```ts
type Sale = { rep: string; amount: number };

const sales: Sale[] = [
  { rep: "Ana", amount: 300 },
  { rep: "Ben", amount: 450 },
  { rep: "Cara", amount: 120 },
];

const top = sales.reduce<Sale | null>((best, s) => {
  if (best === null || s.amount > best.amount) {
    return s;
  }
  return best;
}, null);

console.log(top);   // { rep: 'Ben', amount: 450 }
```

Read it piece by piece:
- `reduce<Sale | null>` states the accumulator's type. Without it, TypeScript would decide the accumulator is only `null` and complain. You will learn what `<...>` means in depth in the Generics stage. For now, copy the pattern.
- `best === null || ...` handles the first round, when there is no best yet. If the first part is true, the second part is not evaluated, so it never reads `best.amount` on `null`.
- The result is `Sale | null`. Check `top !== null` before using `top.rep`. TypeScript insists on it.

---

**4. An object accumulator with several fields**

One pass over the data can calculate several things at once. Put them all in an object.

```ts
type Stats = { count: number; total: number; max: number };

const start: Stats = { count: 0, total: 0, max: -Infinity };

const stats: Stats = nums.reduce((acc, n) => {
  acc.count += 1;
  acc.total += n;
  if (n > acc.max) {
    acc.max = n;
  }
  return acc;
}, start);

console.log(stats);   // { count: 4, total: 42, max: 17 }
```

---

**5. Tracing a complex accumulator**

When the accumulator is an object, print it at the top of the function to see each round. Printing `acc` and the item lets you check every step.

```ts
// first line inside the function above:
console.log("acc:", acc, "n:", n);
```

Prints:
```
acc: { count: 0, total: 0, max: -Infinity } n: 4
acc: { count: 1, total: 4, max: 4 } n: 17
acc: { count: 2, total: 21, max: 17 } n: 9
acc: { count: 3, total: 30, max: 17 } n: 12
```

If the final answer is wrong, find the first round where the printed accumulator is not what you expected.

---

**6. Which tool?**

- Want a **new list, same size**: `map`.
- Want a **shorter list**: `filter`.
- Want **one value** or a **summary object**: `reduce`.
- Only want to **print** each item: `forEach`.

If a `reduce` makes your head hurt, a plain loop is always allowed. Clear code beats clever code.

---

**Recap**

- Max: start at `-Infinity` and use `>`. Min: start at `Infinity` and use `<`.
- Longest text: start at `""` and compare `.length`.
- Best object: `reduce<Type | null>(..., null)`, with `best === null ||` for the first round.
- One `reduce` can fill an object with several totals.
- Trace by printing the accumulator.

**Next:** open `exercises.md` for today's project and challenges.
