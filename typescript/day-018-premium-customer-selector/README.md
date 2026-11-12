# Day 18: `filter`

**Project today:** Premium Customer Selector (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- `filter`: keep only the items that pass a test
- Filtering numbers, strings and objects
- Combining several conditions
- Type predicates: `filter` that also fixes the type

Create `day18.ts` and run it with `npx tsx day18.ts`.

---

**1. `filter` keeps the items that pass**

`filter` calls your function for every item. If the function returns `true`, the item is **kept**. If it returns `false`, the item is dropped. You get a **new** array with only the kept items. The function must return a boolean.

```ts
const nums: number[] = [5, 12, 8, 20, 3];
const big: number[] = nums.filter((n) => n >= 8);

console.log(big);    // [ 12, 8, 20 ]
console.log(nums);   // [ 5, 12, 8, 20, 3 ]   (unchanged)
```

The new array can be shorter, but never longer. Compare with `map`, which always gives the same count.

---

**2. Nothing passes? You get an empty array**

```ts
console.log(nums.filter((n) => n > 100));   // []
```

An empty array is not an error. Check `.length` if you need to know.

---

**3. Filtering strings**

```ts
const words: string[] = ["apple", "fig", "banana", "kiwi"];
console.log(words.filter((w) => w.length > 4));         // [ 'apple', 'banana' ]
console.log(words.filter((w) => w.startsWith("k")));    // [ 'kiwi' ]
```

Any string method that returns a boolean (`startsWith`, `includes`, ...) works well here.

---

**4. Filtering objects**

The test can look at any property.

```ts
type User = { name: string; age: number; active: boolean };

const users: User[] = [
  { name: "Ana", age: 30, active: true },
  { name: "Ben", age: 16, active: true },
  { name: "Cara", age: 41, active: false },
];

const activeUsers: User[] = users.filter((u) => u.active);
console.log(activeUsers.length);   // 2
```

A boolean property can be used directly as the test: `u.active`. Use `!u.active` for "not active".

---

**5. Several conditions**

Use `&&`, `||` and `!` from Day 4. Add brackets when mixing `&&` and `||`.

```ts
const adults = users.filter((u) => u.active && u.age >= 18);
console.log(adults);   // [ { name: 'Ana', age: 30, active: true } ]
```

Common problem: writing `u.age > 18` when you meant `>= 18`. An 18 year old would be left out.

---

**6. Chaining `filter` and `map`**

Because `filter` returns an array, you can call `map` on the result right away.

```ts
const names: string[] = users.filter((u) => u.active).map((u) => u.name);
console.log(names);   // [ 'Ana', 'Ben' ]
```

Read it left to right: keep the active users, then take their names.

---

**7. Type predicates**

Sometimes an array holds items that might be empty. A type written `string | null` means "either a string or `null`" (we will study this properly later).

```ts
const mixed: (string | null)[] = ["a", null, "b", null];
```

If you filter out the nulls, you want TypeScript to know the result has only strings. A **type predicate** tells it. In place of `boolean`, the function says `value is string`.

```ts
const onlyStrings: string[] = mixed.filter(
  (m): m is string => m !== null
);
console.log(onlyStrings);                       // [ 'a', 'b' ]
console.log(onlyStrings.map((s) => s.toUpperCase()));   // [ 'A', 'B' ]
```

Read it piece by piece:
- `(m): m is string` is the return type. It means "if this returns true, `m` is a string".
- `m !== null` is the real test.
- The result is a `string[]`, so string methods such as `.toUpperCase()` are allowed on its items.

Newer versions of TypeScript can work out simple cases like this on their own, but older ones cannot, and complex tests always need the predicate written out. Writing it is always safe.

---

**Recap**

- `filter` keeps items whose function returns `true`, and returns a new array.
- No match gives `[]`. The original is unchanged.
- Use `&&`, `||`, `!` for several conditions.
- `filter(...).map(...)` reads left to right.
- `(x): x is Type => test` makes `filter` return an array of the narrower type.

**Next:** open `exercises.md` for today's project and challenges.
