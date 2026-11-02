# Day 7: Nested Loops and Counting

**Project today:** Scoreboard, part 3 (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- A loop inside a loop
- The counting pattern
- Remembering what you have already handled (`push` and `includes`)

Create `day7.ts` and run it with `npx tsx day7.ts`.

---

**1. A loop inside a loop**

For every round of the outer loop, the inner loop runs **all** of its rounds.

```ts
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 3; j++) {
    console.log("i =", i, "j =", j);
  }
}
```

Prints:
```
i = 0 j = 0
i = 0 j = 1
i = 0 j = 2
i = 1 j = 0
i = 1 j = 1
i = 1 j = 2
```

The outer loop has 2 rounds, the inner one 3, so there are 2 × 3 = 6 lines. Use a nested loop when you need to compare every item with every other item.

---

**2. The counting pattern**

To count how often a value appears: make a counter that starts at 0, loop through the list, and add 1 when the value matches.

```ts
const scores: number[] = [70, 85, 85, 90, 90, 90, 60];

let count: number = 0;
for (let j = 0; j < scores.length; j++) {
  if (scores[j] === 85) {
    count++;
  }
}
console.log(count);   // 2
```

---

**3. Count every value (nested)**

Put the counting loop inside another loop that picks the value.

```ts
for (let i = 0; i < scores.length; i++) {
  let times: number = 0;                  // reset for every value
  for (let j = 0; j < scores.length; j++) {
    if (scores[j] === scores[i]) {
      times++;
    }
  }
  console.log(scores[i], "appears", times, "times");
}
```

Notice `let times = 0` is inside the outer loop. The counter must go back to 0 for each new value. If it were outside, the counts would keep growing.

The problem: `85` is printed twice, because it appears twice in the list. We need to remember what we've already counted.

---

**4. Two list methods: `push` and `includes`**

A **method** is an action attached to a value with a dot.

```ts
const done: number[] = [];   // an empty list of numbers

done.push(85);               // add 85 to the end
done.push(90);
console.log(done);           // [ 85, 90 ]

console.log(done.includes(85));   // true   is 85 in the list?
console.log(done.includes(60));   // false
```

---

**5. The "done list" pattern**

Keep a list of values you have already handled. Skip a value if it is in the list.

```ts
const done: number[] = [];

for (let i = 0; i < scores.length; i++) {
  if (done.includes(scores[i])) {
    continue;                            // already handled, go to the next
  }

  let times: number = 0;
  for (let j = 0; j < scores.length; j++) {
    if (scores[j] === scores[i]) {
      times++;
    }
  }

  if (times > 1) {
    console.log(scores[i], "appears", times, "times");
  }
  done.push(scores[i]);                  // remember it
}
```

Prints: `85 appears 2 times`, `90 appears 3 times`

- `continue` skips the rest of this round and goes to the next. (Day 8 covers it fully.)
- `times > 1` prints only the values that repeat.

---

**Recap**

- Nested loops: the inner loop runs fully for every round of the outer one.
- To count, use a counter that starts at 0, in the right place.
- `push` adds to a list. `includes` checks if a value is in a list.
- A "done list" stops you from repeating work.

**Next:** open `exercises.md` for today's project and challenges.
