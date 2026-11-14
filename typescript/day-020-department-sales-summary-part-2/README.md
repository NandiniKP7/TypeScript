# Day 20: `reduce`, Part 2

**Project today:** Department Sales Summary, part 2 (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- Combining `filter` and `reduce`
- Updating the accumulator only when a condition is true
- Typing an accumulator that is an array or an object
- Reducing into an object to count or total by group

Create `day20.ts` and run it with `npx tsx day20.ts`.

---

**1. `filter` then `reduce`**

Filter first to keep the items you care about, then reduce them.

```ts
const nums: number[] = [1, 2, 3, 4, 5, 6];
const evenSum: number = nums
  .filter((n) => n % 2 === 0)
  .reduce((sum, n) => sum + n, 0);
console.log(evenSum);   // 12
```

This is clear and easy to read. Each step does one job.

---

**2. A conditional update inside `reduce`**

You can also do it in one `reduce`: **return the accumulator unchanged** when the item does not count.

```ts
const total: number = nums.reduce((sum, n) => {
  if (n % 2 === 0) {
    return sum + n;   // counts: update
  }
  return sum;         // does not count: keep as it was
}, 0);
console.log(total);   // 12
```

Common problem: forgetting the second `return sum;`. Then the function returns `undefined` for odd numbers and the next round fails with `NaN`. Every path must return the accumulator.

---

**3. The accumulator can be an array**

The type of the accumulator is the type of the initial value. Declare the starting array with a type, so TypeScript knows what it holds.

```ts
const startNames: string[] = [];
const upper: string[] = ["Ana", "Ben"].reduce((acc, name) => {
  acc.push(name.toUpperCase());
  return acc;
}, startNames);
console.log(upper);   // [ 'ANA', 'BEN' ]
```

Here the accumulator `acc` is changed with `push` and then returned.

---

**4. The accumulator can be an object**

Reducing into an object is how you count or total **by group**. First, a type for "an object with any text keys and number values":

```ts
type Totals = { [key: string]: number };
```

`[key: string]: number` means: any property name (a string) is allowed, and its value must be a number. The name `key` is only a label.

Add to a key like this:

```ts
const totals: Totals = {};
totals["x"] = 5;
console.log(totals.x);   // 5
console.log(totals["y"]);   // undefined   (a key that was never set)
```

You read and write a property with a variable using square brackets: `totals[someText]`.

---

**5. Counting by group**

Start with an empty object. For each item, make sure its key exists (start it at 0 if not), then add to it.

```ts
const words: string[] = ["apple", "avocado", "banana", "blueberry", "cherry", "apricot"];
const start: Totals = {};

const byLetter: Totals = words.reduce((acc, word) => {
  const key: string = word[0];
  if (acc[key] === undefined) {
    acc[key] = 0;
  }
  acc[key] = acc[key] + 1;
  return acc;
}, start);

console.log(byLetter);   // { a: 3, b: 2, c: 1 }
```

Read it piece by piece:
- `key` is the first letter of the word. It is the group.
- `acc[key] === undefined` is true the first time we meet this group.
- We set it to 0, then add 1. The next time the group appears, it already exists.
- The object is returned each round.

Watch out: TypeScript says `acc[key]` is a `number`, but a key you have not set is really `undefined`. The `=== undefined` check protects you.

---

**6. Looping over the result**

You know `for...in` from Day 8. It gives the property names.

```ts
for (const letter in byLetter) {
  console.log(`${letter}: ${byLetter[letter]}`);
}
```

Prints: `a: 3`, `b: 2`, `c: 1`

The order is the order in which the keys were first added.

---

**Recap**

- `filter(...).reduce(...)` is clear. A conditional `reduce` does it in one step.
- In a conditional `reduce`, always return the accumulator on every path.
- The initial value fixes the accumulator's type. Give an array or object a typed starting variable.
- `type Totals = { [key: string]: number }` is an object of totals by name.
- Group with: check the key exists, set it to 0, add. Read the results with `for...in`.

**Next:** open `exercises.md` for today's project and challenges.
