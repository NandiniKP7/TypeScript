# Day 9: `while` and `do...while`

**Project today:** Login Attempt Simulator (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- The `while` loop
- How to avoid endless loops
- Loops that depend on state
- `do...while`

Create `day9.ts` and run it with `npx tsx day9.ts`.

---

**1. The `while` loop**

A `for` loop is for "do this N times". A `while` loop is for "keep going **until something happens**", when you don't know how many rounds it will take.

```ts
let countdown: number = 3;

while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
console.log("Go!");
```

Prints: `3`, `2`, `1`, `Go!`

- The condition (`countdown > 0`) is checked **before** each round.
- If it is `true`, the block runs. If it is `false`, the loop ends.

---

**2. A loop needs a way to end**

Something inside the block must eventually make the condition `false`. Here it is `countdown--`.

```ts
let countdown: number = 3;
while (countdown > 0) {
  console.log(countdown);
  // forgot countdown--  ->  the loop never ends!
}
```

That is an **endless loop**. The program never stops. Press **Ctrl + C** in the terminal to stop it. If your program hangs, check what changes inside the loop.

---

**3. Loops that depend on state**

"State" means the variables that describe where the program is. The loop condition can read several of them.

```ts
const attempts: string[] = ["abc", "xyz", "secret"];
let index: number = 0;
let found: boolean = false;

while (index < attempts.length && !found) {
  if (attempts[index] === "secret") {
    found = true;
  }
  index++;
}
console.log(found);   // true
```

The loop keeps going while there are attempts left **and** nothing has been found. Two things can end it: running out of attempts, or finding the answer.

---

**4. `continue` inside a `while`**

`continue` jumps back to the condition check. So the variable that moves the loop forward must change **before** `continue`.

```ts
let index: number = 0;
const names: string[] = ["", "Ana", "Ben"];

while (index < names.length) {
  const name: string = names[index];
  index++;                       // move forward FIRST

  if (name === "") {
    continue;                    // skip blanks
  }
  console.log(name);
}
```

Prints: `Ana`, `Ben`

If `index++` were after the `continue`, a blank name would jump back without moving forward and the loop would repeat forever.

---

**5. `do...while`: run first, check after**

```ts
let n: number = 10;

do {
  console.log("This runs once");
} while (n < 5);
```

Prints: `This runs once`

A `while` loop with a false condition would run **zero** times. A `do...while` always runs **at least once**, because the check comes after the block. Use it when something must happen first, such as asking for input before you can check it.

---

**Recap**

- `while (condition) { ... }`: check first, then repeat.
- `do { ... } while (condition)`: run first, then check.
- Something inside the loop must change the condition, or it never ends.
- With `continue`, move your index forward first.

**Next:** open `exercises.md` for today's project and challenges.
