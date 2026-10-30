# Day 5: Arrays and the `for` Loop

**Project today:** Scoreboard, part 1 (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- Arrays: a list of values, counted from 0
- The `for` loop
- Totals and "highest" patterns

Create `day5.ts` and run it with `npx tsx day5.ts`.

---

**1. An array is a list**

An array stores several values under one name, in order.

```ts
const scores: number[] = [72, 95, 88, 60, 95];
console.log(scores.length);   // 5   how many items
```

`number[]` means "a list of numbers". `scores.length` is how many items are in it.

---

**2. Positions start at 0**

Each item has a position, called an **index**. The first index is **0**, not 1.

```ts
console.log(scores[0]);   // 72   first item
console.log(scores[1]);   // 95   second item
console.log(scores[4]);   // 95   fifth item (the last one)
```

The last index is always `length - 1`.

---

**3. Past the end gives `undefined`**

```ts
console.log(scores[5]);   // undefined  (there is no sixth item)
```

There is no error. You just get `undefined`, which later turns calculations into `NaN`. This is why loops need care.

---

**4. The `for` loop repeats code**

```ts
for (let i = 0; i < 3; i++) {
  console.log("Round", i);
}
```

Prints: `Round 0`, `Round 1`, `Round 2` (one per line)

Read the three parts inside `( )`:

- `let i = 0`: **start.** Create a counter `i` at 0. This runs once.
- `i < 3`: **keep going while this is true.** It is checked before every round.
- `i++`: **step.** After each round, add 1 to `i`.

The order is: start once, check, run the block, step, check, run the block, step... When the check is `false`, the loop ends.

---

**5. Looping through an array**

Use the counter as the index.

```ts
const scores: number[] = [72, 95, 88];

for (let i = 0; i < scores.length; i++) {
  console.log("Score", i + 1, ":", scores[i]);
}
```

Prints:
```
Score 1 : 72
Score 2 : 95
Score 3 : 88
```

- `i < scores.length` makes the loop stop after the last item.
- `scores[i]` is the item for the current round.
- `i + 1` is only to print friendlier numbers.

Use `<`, not `<=`. With `<=`, `i` would reach `scores.length` and read past the end.

---

**6. The running-total pattern**

To add things up, make a variable that starts at 0 **before** the loop, and add to it **inside** the loop.

```ts
let total: number = 0;
for (let i = 0; i < scores.length; i++) {
  total += scores[i];
}
console.log(total);   // 255
```

Step by step: `total` goes 0, then 72, then 167, then 255.

The average is `total / scores.length`.

---

**7. The "find the highest" pattern**

Assume the first item is the highest, then replace it whenever you find a bigger one.

```ts
let highest: number = scores[0];
for (let i = 1; i < scores.length; i++) {
  if (scores[i] > highest) {
    highest = scores[i];
  }
}
console.log(highest);   // 95
```

The loop starts at 1 because item 0 is already in `highest`.

---

**Recap**

- Arrays count from 0. The last item is at `length - 1`.
- A `for` loop has a start, a condition and a step.
- Use `<` with `length`.
- Totals start at 0 before the loop. "Highest" starts with the first item.

If your program never stops, press Ctrl + C in the terminal.

**Next:** open `exercises.md` for today's project and challenges.
