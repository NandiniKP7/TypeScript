# Day 25: Reusable Type Predicates and Typed Accumulators

**Project today:** Transaction Cleanup, part 1 (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- Writing a type predicate as a named, reusable function
- Using a predicate with `filter` and with `if`
- Chaining predicates to turn messy data into clean, typed data
- Typing the accumulator with `reduce<Type>`

Create `day25.ts` and run it with `npx tsx day25.ts`.

---

**1. A named type predicate**

On Day 18 you wrote a type predicate inline: `(e): e is string => e !== null`. When you need the same check in many places, write it once as a named function. Its return type is `value is Type`.

```ts
function isString(x: string | number): x is string {
  return typeof x === "string";
}
```

Read it piece by piece:
- `x: string | number` means `x` is either a string or a number (a **union**; you will study unions soon).
- `x is string` is the return type. It promises: "when I return `true`, `x` is a string".
- `typeof x === "string"` is the real test. `typeof x` gives the text `"string"` or `"number"`. You will learn `typeof` properly in the narrowing stage.

Warning: TypeScript **trusts** your promise. If the test inside does not match what you promise, TypeScript will not notice, and bugs follow.

---

**2. Pass the predicate straight to `filter`**

A named function can be given to `filter` directly, with no arrow function.

```ts
const mixed: (string | number)[] = ["a", 1, "b", 2];
const strs: string[] = mixed.filter(isString);
console.log(strs);   // [ 'a', 'b' ]
```

Because `isString` is a type predicate, the result is `string[]`, not `(string | number)[]`.

---

**3. The same predicate inside an `if`**

```ts
function describe(x: string | number): void {
  if (isString(x)) {
    console.log(x.toUpperCase());   // here x is a string
  } else {
    console.log(x.toFixed(1));      // here x is a number
  }
}
describe("hi");   // HI
describe(4);      // 4.0
```

In the `if` branch TypeScript treats `x` as a string. In the `else` branch it knows `x` must be a number. One predicate, two places.

---

**4. Predicates for objects: from messy to clean**

Data from outside is often messy: missing entries and missing values. Describe the messy shape and the clean shape, then write predicates that move from one to the other.

```ts
type Raw = { id: number; amount: number | null };
type Clean = { id: number; amount: number };

const raws: (Raw | null)[] = [
  { id: 1, amount: 5 },
  null,
  { id: 2, amount: null },
  { id: 3, amount: 7 },
];

function isPresent(r: Raw | null): r is Raw {
  return r !== null;
}

function hasAmount(r: Raw): r is Clean {
  return r.amount !== null;
}

const present: Raw[] = raws.filter(isPresent);
const clean: Clean[] = present.filter(hasAmount);
console.log(present.length, clean.length);   // 3 2
```

Step by step:
- `isPresent` removes the `null` entries. The array becomes `Raw[]`.
- `hasAmount` keeps only the ones whose `amount` is a real number. The array becomes `Clean[]`.
- In `Clean[]`, `amount` is a plain `number`, so you can calculate with it without checks.

```ts
console.log(clean.map((c) => c.amount * 2));                   // [ 10, 14 ]
console.log(clean.reduce((sum, c) => sum + c.amount, 0));      // 12
```

Without the predicates, `c.amount * 2` would be an error, because `amount` might be `null`.

---

**5. Typing the accumulator with `reduce<Type>`**

You already saw `reduce<Sale | null>(...)` on Day 21. The type in angle brackets is the type of the accumulator. It is a handy way to type an object or array accumulator without a separate start variable.

```ts
type Totals = { [key: string]: number };

const counts = ["a", "b", "a"].reduce<Totals>((acc, key) => {
  if (acc[key] === undefined) {
    acc[key] = 0;
  }
  acc[key] += 1;
  return acc;
}, {});
console.log(counts);   // { a: 2, b: 1 }

const lengths = ["aa", "b"].reduce<number[]>((acc, w) => {
  acc.push(w.length);
  return acc;
}, []);
console.log(lengths);   // [ 2, 1 ]
```

`reduce<Totals>` says "the accumulator is a `Totals`", so a plain `{}` or `[]` as the start value is accepted.

---

**Recap**

- A named predicate: `function isX(v: A | B): v is A { return ... }`.
- Pass it to `filter` by name, or use it in an `if`.
- Chain predicates to go from messy to clean types.
- After cleaning, calculations need no `null` checks.
- `reduce<Type>(fn, start)` states the accumulator type.

**Next:** open `exercises.md` for today's project and challenges.
