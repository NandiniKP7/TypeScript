# Day 6: Loop Boundaries, Stepping and Look-Ahead

**Project today:** Scoreboard, part 2 (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- Off-by-one mistakes
- Visiting every second item, or going backwards
- Looking at the next item safely

Create `day6.ts` and run it with `npx tsx day6.ts`.

---

**1. The off-by-one mistake**

Arrays count from 0, but people count items from 1. A loop that runs one time too many or too few is an **off-by-one error**.

```ts
const scores: number[] = [70, 85, 90];

for (let i = 0; i <= scores.length; i++) {   // <= is the bug
  console.log(scores[i]);
}
```

Prints: `70`, `85`, `90`, `undefined`

There are 3 items, so the last index is 2. But `i <= 3` lets `i` reach 3, and `scores[3]` doesn't exist. The fix is `<`:

```ts
for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);   // 70, 85, 90
}
```

Before every loop, ask: "what is the first index, what is the last index, and does my condition include exactly those?"

---

**2. Stepping: visit every second item**

The third part of a `for` loop can be anything, not only `i++`.

```ts
const scores: number[] = [70, 85, 85, 90, 90, 90, 60];

for (let i = 0; i < scores.length; i += 2) {
  console.log(scores[i]);
}
```

Prints: `70`, `85`, `90`, `60`

`i += 2` jumps two at a time, so `i` is 0, 2, 4, 6.

---

**3. Going backwards**

Start at the last index, count down, and stop after index 0.

```ts
for (let i = scores.length - 1; i >= 0; i--) {
  console.log(scores[i]);
}
```

Prints: `60`, `90`, `90`, `90`, `85`, `85`, `70`

- Start: `scores.length - 1` is the last index (6).
- Keep going while: `i >= 0`.
- Step: `i--` subtracts 1.

---

**4. Look-ahead: comparing with the next item**

To compare an item with the one after it, use `i + 1`.

```ts
for (let i = 0; i < scores.length - 1; i++) {
  if (scores[i] === scores[i + 1]) {
    console.log("Same as the next one:", scores[i]);
  }
}
```

Prints: `Same as the next one: 85`, then `90`, then `90`

The condition is `scores.length - 1`, one step earlier than usual, because the last item has **no next item**. Without that, the last round would compare `60` with `undefined`.

---

**5. Always check the edges**

Whenever you use `i + 1` or `i - 1`, ask what happens at the **first** and the **last** item. Bugs hide at the edges of a list.

---

**Recap**

- `<` stops at the last item. `<=` goes one step too far.
- `i += 2` skips every other item. `i--` counts backwards.
- `i + 1` looks at the next item, so the loop must end one earlier.

**Next:** open `exercises.md` for today's project and challenges.
