# Day 27: Advanced `reduce` Behaviour

**Project today:** Transaction Cleanup and Summary, part 3 (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- The extra things `reduce` hands you: the **index** and the **whole array**
- How to keep a **running balance** (the total after every step) and a history of it
- How to **accept or reject** an item and remember why
- Why **order** matters, and how to **group** items into separate lists

Create `day27.ts` and run it with `npx tsx day27.ts`.

**How to read this page:** every example has a **"What changes"** table. It shows the exact contents of the accumulator (the value `reduce` carries along) *after each round*. Read the code, then follow the table row by row. Then type the example and run it.

---

## Quick refresher: what `reduce` does

`reduce` walks through an array one item at a time and builds up **one result**. That result is called the **accumulator**. Think of it as a notebook you carry from item to item and update as you go.

```ts
const total = [10, 20, 30].reduce((sum, n) => {
  return sum + n;
}, 0);

console.log(total);   // 60
```

- `0` (the last argument) is the **starting value** of the accumulator.
- Each round, the function receives the accumulator (`sum`) and the current item (`n`).
- Whatever you `return` becomes the accumulator for the next round.

**What changes:**

| Round | Item `n` | `sum` before | You return | `sum` for next round |
|-------|----------|--------------|------------|----------------------|
| start | -        | -            | -          | `0`                  |
| 1     | `10`     | `0`          | `0 + 10`   | `10`                 |
| 2     | `20`     | `10`         | `10 + 20`  | `30`                 |
| 3     | `30`     | `30`         | `30 + 30`  | `60`                 |

The input array `[10, 20, 30]` **never changes**. Only the accumulator does. The last returned value (`60`) is the final result.

---

## 1. `reduce` passes more than two things

The function you give to `reduce` receives **four** values, always in this order:

1. the **accumulator**
2. the **current item**
3. the **index** (which round you are in, starting at **0**)
4. the **whole array**

You only list the ones you need. To use the index, you must also list the two before it.

```ts
const nums: number[] = [10, 20, 30];

const total = nums.reduce((sum, n, index, array) => {
  console.log(`index ${index} of ${array.length}: sum ${sum}, n ${n}`);
  return sum + n;
}, 0);
```

Prints:
```
index 0 of 3: sum 0, n 10
index 1 of 3: sum 10, n 20
index 2 of 3: sum 30, n 30
```

**What each value is in each round:**

| Round | `sum` | `n` | `index` | `array` (always the same) |
|-------|-------|-----|---------|---------------------------|
| 1     | `0`   | `10` | `0`    | `[10, 20, 30]`            |
| 2     | `10`  | `20` | `1`    | `[10, 20, 30]`            |
| 3     | `30`  | `30` | `2`    | `[10, 20, 30]`            |

- `array` is the **same whole array** every round. It does not shrink as you go.
- `array.length` is always `3`, so you can print "round 2 **of 3**".
- The index starts at **0**, but people count from 1. To show a round number, print `index + 1`.

---

## 2. A running balance with history

A **running balance** is the total after *each* step, not only at the end. Think of a bank statement: every line shows the balance after that transaction.

To remember more than one thing, make the accumulator an **object**. Here it holds the current `balance` and a `history` array that grows by one number every round.

```ts
type Running = { balance: number; history: number[] };

const changes: number[] = [100, -30, 50, -200, 25];
//                  index:   0     1    2     3    4

const running: Running = changes.reduce<Running>((acc, change) => {
  acc.balance += change;
  acc.history.push(acc.balance);
  return acc;
}, { balance: 0, history: [] });

console.log(running);
// { balance: -55, history: [ 100, 70, 120, -80, -55 ] }
```

What the pieces mean:
- `type Running` describes the notebook: a number and a list of numbers.
- `reduce<Running>` tells TypeScript the accumulator's shape. Without it, TypeScript can't tell what the empty `[]` is supposed to hold.
- `{ balance: 0, history: [] }` is the starting value.
- `acc.history.push(...)` adds one number to the end of the history list.
- `return acc;` hands the notebook to the next round.

**What changes** (the `changes` array stays `[100, -30, 50, -200, 25]` the whole time):

| Round | `change` | `acc.balance` | `acc.history` after the round |
|-------|----------|---------------|-------------------------------|
| start | -        | `0`           | `[]`                          |
| 1     | `100`    | `0 + 100 = 100`   | `[100]`                   |
| 2     | `-30`    | `100 - 30 = 70`   | `[100, 70]`               |
| 3     | `50`     | `70 + 50 = 120`   | `[100, 70, 120]`          |
| 4     | `-200`   | `120 - 200 = -80` | `[100, 70, 120, -80]`     |
| 5     | `25`     | `-80 + 25 = -55`  | `[100, 70, 120, -80, -55]`|

See how `history` grows by one item each round, and the last item always equals the current balance.

---

## 3. Guarded updates: accept or reject

Sometimes an item **must not** be applied. For example, the balance may never go below 0.

The recipe:
1. **Check first**, before changing anything.
2. If the item is not allowed, **remember it** and `return acc;` with the balance **unchanged**.
3. Otherwise, apply the change.

```ts
type State = { balance: number; accepted: number; rejected: number[] };

// The input array (same numbers as section 2, repeated here so you don't have to scroll back):
const changes: number[] = [100, -30, 50, -200, 25];
//                  index:   0     1    2     3    4

const guarded: State = changes.reduce<State>((acc, change, i) => {
  if (acc.balance + change < 0) {
    acc.rejected.push(i);   // remember the index of the rejected change
    return acc;             // balance stays the same
  }
  acc.balance += change;
  acc.accepted += 1;
  return acc;
}, { balance: 0, accepted: 0, rejected: [] });

console.log(guarded);
// { balance: 145, accepted: 4, rejected: [ 3 ] }
```

**What changes** (the input array is `changes = [100, -30, 50, -200, 25]` and it never changes):

| Round | Index `i` | `change` | Would the balance go below 0? | `balance` | `accepted` | `rejected` |
|-------|-----------|----------|-------------------------------|-----------|------------|------------|
| start | -         | -        | -                             | `0`       | `0`        | `[]`       |
| 1     | `0`       | `100`    | `0 + 100 = 100`, no           | `100`     | `1`        | `[]`       |
| 2     | `1`       | `-30`    | `100 - 30 = 70`, no           | `70`      | `2`        | `[]`       |
| 3     | `2`       | `50`     | `70 + 50 = 120`, no           | `120`     | `3`        | `[]`       |
| 4     | `3`       | `-200`   | `120 - 200 = -80`, **yes**    | `120` (unchanged) | `3` (unchanged) | `[3]` |
| 5     | `4`       | `25`     | `120 + 25 = 145`, no          | `145`     | `4`        | `[3]`      |

In round 4 the change is **rejected**: `balance` and `accepted` do not move, and the index `3` is pushed into `rejected`. Round 5 carries on from the unchanged balance of `120`.

**Important rule:** there are two `return acc;` lines. In a `reduce` with an `if`, **every path must return the accumulator**. If one path forgets, the next round receives `undefined` and your program breaks.

---

## 4. Order matters

A running balance depends on the **order** of the items. A withdrawal of 100 *before* a deposit of 100 gives a different result than the deposit first.

If your data arrives in the wrong order, **sort a copy first**, then reduce.

```ts
const unsorted: number[] = [3, 1, 2];

const ordered: number[] = [...unsorted]
  .sort((a, b) => a - b)
  .reduce<number[]>((acc, n) => {
    acc.push(n * 10);
    return acc;
  }, []);

console.log(ordered);    // [ 10, 20, 30 ]
console.log(unsorted);   // [ 3, 1, 2 ]   <- the original is untouched
```

**What changes**, in three stages:

| Stage | What happens | `unsorted` | The copy | Result array |
|-------|--------------|------------|----------|--------------|
| 1 | `[...unsorted]` makes a copy | `[3, 1, 2]` | `[3, 1, 2]` | - |
| 2 | `.sort(...)` sorts **the copy** | `[3, 1, 2]` (same) | `[1, 2, 3]` | - |
| 3 | `.reduce(...)` builds the result | `[3, 1, 2]` (same) | `[1, 2, 3]` | see below |

The `reduce` in stage 3, round by round (it goes through the sorted copy):

| Round | Item `n` | `acc` after the round |
|-------|----------|-----------------------|
| start | -        | `[]`                  |
| 1     | `1`      | `[10]`                |
| 2     | `2`      | `[10, 20]`            |
| 3     | `3`      | `[10, 20, 30]`        |

**Why copy?** `.sort` changes the array it is called on. Without `[...unsorted]`, your original would become `[1, 2, 3]` too (you saw this on Day 15).

---

## 5. Grouping into arrays

An accumulator can be an object whose values are **arrays**. This splits one list into several lists, one for each key. It works like sorting laundry into piles: one pile for whites, one for colours.

```ts
type Groups = { [key: string]: string[] };

const groups: Groups = ["apple", "avocado", "banana"].reduce<Groups>((acc, word) => {
  const key: string = word[0];
  if (acc[key] === undefined) {
    acc[key] = [];
  }
  acc[key].push(word);
  return acc;
}, {});

console.log(groups);   // { a: [ 'apple', 'avocado' ], b: [ 'banana' ] }
```

What the pieces mean:
- `type Groups = { [key: string]: string[] }`: an object with any text keys, where each value is a list of strings.
- `word[0]`: the first letter of the word. We use it as the pile name.
- `acc[key] === undefined`: "does this pile exist yet?" If not, `acc[key] = []` creates an empty one.
- `acc[key].push(word)`: puts the word on its pile.

**What changes:**

| Round | `word` | `key` | Pile exists? | `acc` after the round |
|-------|--------|-------|--------------|-----------------------|
| start | -      | -     | -            | `{}`                  |
| 1     | `"apple"`   | `"a"` | no, create `a: []` then add | `{ a: ["apple"] }` |
| 2     | `"avocado"` | `"a"` | yes, just add               | `{ a: ["apple", "avocado"] }` |
| 3     | `"banana"`  | `"b"` | no, create `b: []` then add | `{ a: ["apple", "avocado"], b: ["banana"] }` |

Notice that the `a` array grows from 1 item to 2, and `b` appears only when the first `b` word arrives.

After grouping, you can process each group on its own, for example with another `reduce`. That is today's pattern: **one `reduce` to split, another `reduce` to summarise each part.**

---

## 6. Putting it together (a mini version of today's project)

Today's project uses all the ideas above. Here is a tiny version so you can see the whole flow before you build the real one.

```ts
type Tx = { id: number; account: string; amount: number };

const txs: Tx[] = [
  { id: 3, account: "A", amount: 50 },
  { id: 1, account: "A", amount: 100 },
  { id: 2, account: "B", amount: 70 },
];
```

**Step 1: sort a copy by `id`.**

| | Contents (by `id`) |
|---|---|
| `txs` (original) | `3, 1, 2` |
| sorted copy | `1, 2, 3` |

**Step 2: group by account** (a `reduce` into an object of arrays, like section 5):

| Round | Transaction | `groups` after the round |
|-------|-------------|--------------------------|
| start | - | `{}` |
| 1 | id 1, account A | `{ A: [id 1] }` |
| 2 | id 2, account B | `{ A: [id 1], B: [id 2] }` |
| 3 | id 3, account A | `{ A: [id 1, id 3], B: [id 2] }` |

**Step 3: for each account, run a `reduce` that keeps a balance** (like sections 2 and 3):

| Account | Round | Transaction | `balance` after |
|---------|-------|-------------|-----------------|
| A | start | - | `0` |
| A | 1 | id 1, +100 | `100` |
| A | 2 | id 3, +50 | `150` |
| B | start | - | `0` |
| B | 1 | id 2, +70 | `70` |

Each account starts again from `0`, because each one gets its own `reduce`.

---

## 7. When a plain loop is better

`reduce` is powerful, but it is not always the clearest tool. A `for` loop can be easier to read when there are many branches and many things to remember.

A good test: **if you cannot explain your `reduce` out loud in two sentences, use a `for` loop.** Clear code is more important than clever code.

---

## Common mistakes

| What you see | Likely cause | Fix |
|--------------|--------------|-----|
| `Cannot read properties of undefined` | One path in your `reduce` does not `return acc;` | Make sure **every** branch returns the accumulator |
| TypeScript error mentioning `never[]` | `reduce` has no type for the accumulator | Add one, like `reduce<Running>(...)` |
| Wrong balance, or lines in the wrong order | Data was not sorted before reducing | Sort a copy first with `[...list].sort(...)` |
| Your original array changed unexpectedly | You sorted the original, not a copy | Use `[...list]` before `.sort` |
| Line numbers start at 0 | The index starts at 0 | Print `index + 1` |

**Debugging tip:** if a `reduce` gives a surprising result, add `console.log(acc)` just before `return acc;`. It prints the accumulator after every round, which is exactly what the tables above show.

---

## Glossary

- **Accumulator:** the value `reduce` carries from item to item and finally returns.
- **Index:** the position of an item in an array, starting at 0.
- **Running balance:** the total after each step, not only at the end.
- **Guarded update:** checking a rule before applying a change, and skipping the change if the rule fails.
- **Group:** a list of items that share the same key, such as all transactions of one account.

---

## Recap

- The `reduce` function receives `(accumulator, item, index, array)`. List only what you need.
- The input array does not change. Only the accumulator does.
- An accumulator can keep a total **and** a history that grows each round.
- For a guarded update: check first, remember the rejection, and still return the accumulator.
- Sort a **copy** first when order matters.
- An object of arrays groups items by key.
- If a `reduce` is hard to explain, use a `for` loop.

**Next:** open `exercises.md` for today's project and challenges.