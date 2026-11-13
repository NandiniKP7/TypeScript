# Day 19: `reduce`, Part 1

**Project today:** Department Sales Summary, part 1 (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- What `reduce` is: many items in, one value out
- The accumulator, the current item and the initial value
- Summing numbers and a property of objects
- Tracing what `reduce` does, round by round

Create `day19.ts` and run it with `npx tsx day19.ts`.

---

**1. `reduce` turns a list into one value**

`map` and `filter` give back arrays. `reduce` gives back **one value**: a total, a count, a text, or anything else you build up.

```ts
const nums: number[] = [4, 7, 1];
const total: number = nums.reduce((sum, n) => sum + n, 0);
console.log(total);   // 12
```

You have written this before with a loop and `total += n`. `reduce` is the same idea in one line.

---

**2. The three parts**

```ts
nums.reduce((sum, n) => sum + n, 0)
```

- `sum` is the **accumulator**: the running result so far.
- `n` is the **current** item.
- `0` is the **initial value**: what the accumulator is before the first item.
- What your function **returns** becomes the accumulator for the next round.
- When the items run out, the last accumulator is the final answer.

---

**3. Tracing: see every round**

Print inside the function to watch it work. Tracing is the best way to understand `reduce`.

```ts
nums.reduce((sum, n) => {
  console.log(`sum=${sum}, n=${n}`);
  return sum + n;
}, 0);
```

Prints:
```
sum=0, n=4
sum=4, n=7
sum=11, n=1
```

Round 1 starts with the initial value 0. Each round, the returned value becomes the next `sum`. The final value is 12.

When you use braces `{ }`, you must write `return` yourself.

---

**4. Always give an initial value**

Without an initial value, `reduce` uses the first item as the starting accumulator. That works for sums, but it has two problems: the accumulator's type is forced to be the item type, and an **empty array crashes**.

```ts
const empty: number[] = [];
console.log(empty.reduce((sum, n) => sum + n, 0));   // 0   (safe)
// empty.reduce((a, b) => a + b);   // TypeError: Reduce of empty array with no initial value
```

Rule for this course: **always write the initial value.**

---

**5. Summing a property of objects**

For a list of objects, add `item.property` to the accumulator. The accumulator is still a number.

```ts
type Item = { name: string; price: number };
const items: Item[] = [
  { name: "tea", price: 3 },
  { name: "jam", price: 4.5 },
];

const totalPrice: number = items.reduce((sum, item) => sum + item.price, 0);
console.log(totalPrice);   // 7.5
```

Do not write `sum + item` here. `item` is an object, not a number.

---

**6. Other things you can reduce to**

- A **count**: ignore the item and add 1. `items.reduce((count) => count + 1, 0)` gives `2`.
- An **average**: reduce to the total, then divide by the length.
- A **text**: start from `""` and add pieces. `["a", "bb", "ccc"].reduce((all, w) => all + w, "")` gives `"abbccc"`.

The type of the initial value decides the type of the result. Start from `0` and you get a number. Start from `""` and you get a string.

---

**Recap**

- `reduce((accumulator, current) => newAccumulator, initialValue)`.
- The returned value becomes the next accumulator.
- Always give an initial value. `0` for sums, `""` for text.
- For objects, add the property you need: `sum + item.price`.
- Trace with `console.log` inside the function when confused.

**Next:** open `exercises.md` for today's project and challenges.
