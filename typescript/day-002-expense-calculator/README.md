# Day 2: Changing Values and Comparisons

**Project today:** Expense Calculator (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- Changing a variable from its own value: `+=`, `-=`, `*=`, `++`, `--`
- Comparisons that give `true` or `false`
- `===` and `!==`, and why we never use `==`

Create `day2.ts` and run it with `npx tsx day2.ts`.

---

**1. Updating a value from itself**

Programs often keep a running value, like a total. You add to it again and again.

```ts
let total: number = 10;
total = total + 5;
console.log(total);   // 15
```

There is a shorter way to write the same thing:

```ts
let total: number = 10;
total += 5;           // same as: total = total + 5
console.log(total);   // 15
```

The same pattern exists for the other operators:

```ts
let n: number = 20;
n -= 5;   // n is now 15  (same as n = n - 5)
n *= 2;   // n is now 30  (same as n = n * 2)
console.log(n);   // 30
```

These only work on `let`, because the value changes.

---

**2. Add or subtract exactly 1: `++` and `--`**

```ts
let count: number = 0;
count++;                // count is now 1
count++;                // count is now 2
count--;                // count is now 1
console.log(count);     // 1
```

`count++` is a short way to write `count += 1`. Use it for counters.

---

**3. Comparisons ask yes/no questions**

A comparison looks at two values and gives a `boolean`: `true` or `false`.

```ts
const score: number = 72;
console.log(score > 60);    // true    greater than
console.log(score < 60);    // false   less than
console.log(score >= 72);   // true    greater than or equal
console.log(score <= 50);   // false   less than or equal
```

You can store the answer in a variable:

```ts
const passed: boolean = score >= 60;
console.log(passed);   // true
```

Almost every decision in a program starts with a `true`/`false` answer like this.

---

**4. Is it equal? `===` and `!==`**

```ts
const income: number = 3000;
console.log(income === 3000);   // true    exactly equal
console.log(income !== 3000);   // false   is it different?
console.log(income === 2000);   // false
```

---

**5. Why we never use `==`**

There is also `==`. It quietly converts the values to the same type before comparing, so `"5" == 5` is `true`. That hides bugs. `===` converts nothing: a text `"5"` and a number `5` are **different**, so the answer is `false`.

```ts
console.log("5" === "5");   // true   both text
// console.log("5" === 5);  // TypeScript underlines this: the types can't be equal
```

Rule: always use `===` and `!==`.

---

**6. Working out a percentage**

```ts
const spent: number = 2100;
const income: number = 3000;
const percent: number = spent / income * 100;
console.log(percent);   // 70
```

Do `part / whole * 100`, not the other way around.

---

**Recap**

- `+=`, `-=`, `*=` change a variable using its own value.
- `++` and `--` add or subtract 1.
- Comparisons (`> < >= <= === !==`) give `true` or `false`.
- Always use `===` and `!==`, never `==`.

**Next:** open `exercises.md` for today's project and challenges.
