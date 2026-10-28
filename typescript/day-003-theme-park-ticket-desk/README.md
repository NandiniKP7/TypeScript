# Day 3: Making Decisions with `if`

**Project today:** Theme Park Ticket Desk (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- `if`, `else` and `else if`
- How the computer picks a branch
- Putting an `if` inside another `if`

Create `day3.ts` and run it with `npx tsx day3.ts`.

---

**1. The `if` statement**

Normally a program runs from the top line to the bottom line. An `if` lets it choose a path.

```ts
const height: number = 150;

if (height >= 120) {
  console.log("You can ride!");
}
```

Prints: `You can ride!`

Read it piece by piece:

- `height >= 120` is the **condition**. It is a comparison that gives `true` or `false`.
- If it is `true`, the code inside `{ }` runs.
- If it is `false`, the code inside `{ }` is skipped.

---

**2. `else`: the other path**

```ts
const height: number = 100;

if (height >= 120) {
  console.log("You can ride!");
} else {
  console.log("Sorry, you are too short.");
}
```

Prints: `Sorry, you are too short.`

Only one of the two blocks runs, never both.

---

**3. `else if`: more than two options**

```ts
const age: number = 15;

if (age < 12) {
  console.log("Child ticket");
} else if (age < 18) {
  console.log("Teen ticket");
} else {
  console.log("Adult ticket");
}
```

Prints: `Teen ticket`

The computer checks from the top. Age 15 is not under 12, so it moves on. It is under 18, so it prints `Teen ticket`.

---

**4. The first true condition wins**

As soon as one condition is true, the rest are **skipped**. That makes the order important.

```ts
const age: number = 10;

if (age < 18) {
  console.log("Teen ticket");     // runs! age 10 is under 18
} else if (age < 12) {
  console.log("Child ticket");    // never reached
}
```

A 10-year-old gets a teen ticket, because `age < 18` is true first. Put the most specific check first (`age < 12`, then `age < 18`).

---

**5. Variables inside `{ }` stay inside**

A variable created inside braces only exists inside them. If you need the value later, create the variable first, outside, and fill it in inside.

```ts
const age: number = 15;
let price: number = 0;      // created outside

if (age < 12) {
  price = 5;
} else if (age < 18) {
  price = 7;
} else {
  price = 12;
}

console.log("Price:", price);   // Price: 7
```

This is how real programs work: decide first, print once.

---

**6. An `if` inside an `if` (nesting)**

The inner `if` only runs when the outer condition is true.

```ts
const height: number = 130;
const age: number = 6;

if (height >= 120) {
  if (age >= 8) {
    console.log("You can ride!");
  } else {
    console.log("You need an adult with you.");
  }
} else {
  console.log("Too short.");
}
```

Prints: `You need an adult with you.`

The height check passes, so the program looks inside and checks the age. Use nesting when a second question only makes sense after the first one.

---

**Recap**

- `if` runs a block only when its condition is true.
- `else` is the fallback, and `else if` adds more options.
- The first true condition wins, and the rest are skipped.
- An `if` can sit inside another `if`.

**Next:** open `exercises.md` for today's project and challenges.
