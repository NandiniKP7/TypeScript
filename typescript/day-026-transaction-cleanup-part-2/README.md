# Day 26: From Predicate to Typed `reduce`

**Project today:** Transaction Cleanup, part 2 (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- The full pipeline: predicate, narrowed array, typed `reduce`
- Predicate-style functions that take extra information
- A typed accumulator with several named fields
- A nested accumulator: an object of summary objects
- Updating the accumulator in place or by returning a new object

Create `day26.ts` and run it with `npx tsx day26.ts`.

---

**1. The pipeline**

Yesterday you cleaned messy data into a typed array with predicates. Today you summarise it with `reduce`. The shape of the whole job is:

```
messy array  ->  filter(predicate)  ->  clean typed array  ->  reduce<Summary>  ->  one summary object
```

Each step has a clear type, so TypeScript can check every line.

```ts
const clean: Transaction[] = raw.filter(isPresent).filter(hasAmount);
```

(`raw`, `isPresent`, `hasAmount` and `Transaction` are the ones from Day 25. Copy them into today's file.)

---

**2. A check that needs extra information**

A function you pass to `filter` by name only receives the item. If your check needs more information (like which `kind` you want), wrap it in an arrow function.

```ts
function isKind(t: Transaction, kind: string): boolean {
  return t.kind === kind;
}

const fees: number[] = clean.filter((t) => isKind(t, "fee")).map((t) => t.id);
console.log(fees);   // [ 5, 7 ]
```

A plain `boolean` function is fine here. A `value is Type` predicate is only needed when the **type** of the array must change.

A check without extra information can be passed by name:

```ts
function isLarge(t: Transaction): boolean {
  return t.amount >= 100;
}
console.log(clean.filter(isLarge).length);   // 3
```

---

**3. An accumulator with named fields**

Define the summary's shape as a type. Give `reduce` that type, and start every field at 0.

```ts
type Summary = { deposits: number; withdrawals: number; fees: number; other: number };

const start: Summary = { deposits: 0, withdrawals: 0, fees: 0, other: 0 };

const summary: Summary = clean.reduce<Summary>((acc, t) => {
  if (t.kind === "deposit") {
    acc.deposits += t.amount;
  } else if (t.kind === "withdrawal") {
    acc.withdrawals += t.amount;
  } else if (t.kind === "fee") {
    acc.fees += t.amount;
  } else {
    acc.other += t.amount;
  }
  return acc;
}, start);

console.log(summary);   // { deposits: 700, withdrawals: 200, fees: 20, other: 0 }
```

The last `else` is a safety net: a kind you did not expect still goes somewhere instead of silently disappearing. If you mistype a field such as `acc.deposit`, TypeScript reports an error right away.

---

**4. Change in place, or return a new object**

The example above **mutates** `acc` (changes it) and returns the same object. That is simple and fast. You can also return a **new** object each round, using the object spread from Day 17:

```ts
const same: Summary = clean.reduce<Summary>((acc, t) => {
  if (t.kind === "deposit") {
    return { ...acc, deposits: acc.deposits + t.amount };
  }
  return acc;
}, { deposits: 0, withdrawals: 0, fees: 0, other: 0 });
console.log(same.deposits);   // 700
```

Both work. Changing in place is shorter for big objects. Returning a new object never changes anything by accident. Pick one style and be consistent.

---

**5. An object of objects**

To summarise **per group**, make the accumulator an object whose values are summaries. Create a group's summary the first time you meet the group.

```ts
type ByAccount = { [account: string]: Summary };

const per: ByAccount = clean.reduce<ByAccount>((acc, t) => {
  if (acc[t.account] === undefined) {
    acc[t.account] = { deposits: 0, withdrawals: 0, fees: 0, other: 0 };
  }
  const s: Summary = acc[t.account];
  if (t.kind === "deposit") {
    s.deposits += t.amount;
  }
  return acc;
}, {});
```

Read it piece by piece:
- `acc[t.account] === undefined` is true the first time we see the account.
- We create its summary with zeros.
- `s` points to that summary **inside** `acc`, so changing `s` changes `acc`.
- Only deposits are handled here, to keep it short. Your project handles every kind.

This is the same "check, start at zero, add" pattern from Day 20, with a summary object in place of a number.

---

**Recap**

- The pipeline: predicates make the array clean and typed, `reduce<Summary>` summarises it.
- Use `value is Type` when the array's type must change. Use a plain boolean for everything else.
- Give the accumulator a named type and start every field at 0.
- For groups: an object of summaries, each created the first time the group appears.
- Change `acc` in place, or return a new object. Either way, always return the accumulator.

**Next:** open `exercises.md` for today's project and challenges.
