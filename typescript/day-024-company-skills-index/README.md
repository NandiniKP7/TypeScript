# Day 24: `flat` and `flatMap`

**Project today:** Company Skills Index (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- Nested arrays (arrays inside arrays)
- `flat()` and `flat(depth)`
- `flatMap()`: map and flatten in one step
- Using the flattened list: unique values and counts

Create `day24.ts` and run it with `npx tsx day24.ts`.

---

**1. Nested arrays**

An array can hold other arrays. The type `number[][]` means "a list of lists of numbers".

```ts
const nested: number[][] = [[1, 2], [3], [4, 5]];
console.log(nested.length);   // 3   (three inner lists, not five numbers)
```

You often meet nested arrays when each item has its own list, for example a person who has a list of skills.

---

**2. `flat()` removes one level of nesting**

`flat()` takes all the items out of the inner arrays and puts them into one array. It returns a **new** array.

```ts
const flat: number[] = nested.flat();
console.log(flat);     // [ 1, 2, 3, 4, 5 ]
console.log(nested);   // [ [ 1, 2 ], [ 3 ], [ 4, 5 ] ]   (unchanged)
```

Empty inner arrays simply disappear: `[[1, 2], [], [3]].flat()` gives `[ 1, 2, 3 ]`.

---

**3. `flat(depth)` goes deeper**

By default `flat()` goes one level down. Give it a **depth** number to go further.

```ts
const deep: number[][][] = [[[1], [2]], [[3]]];
console.log(deep.flat());    // [ [ 1 ], [ 2 ], [ 3 ] ]   one level removed
console.log(deep.flat(2));   // [ 1, 2, 3 ]                two levels removed
```

Count the brackets to decide the depth: `number[][][]` has three, so `flat(2)` leaves `number[]`.

---

**4. `flatMap()` is `map` then `flat`**

Often you `map` each item to a list, then flatten. `flatMap` does both.

```ts
type Team = { name: string; members: string[] };

const teams: Team[] = [
  { name: "A", members: ["Ana", "Ben"] },
  { name: "B", members: ["Cara"] },
];

const nestedNames = teams.map((t) => t.members);
console.log(nestedNames);          // [ [ 'Ana', 'Ben' ], [ 'Cara' ] ]
console.log(nestedNames.flat());   // [ 'Ana', 'Ben', 'Cara' ]

const names: string[] = teams.flatMap((t) => t.members);
console.log(names);                // [ 'Ana', 'Ben', 'Cara' ]
```

`teams.flatMap((t) => t.members)` and `teams.map((t) => t.members).flat()` give the same result. `flatMap` only flattens **one** level.

---

**5. `flatMap` can also make items from items**

The function can return a new array for each item, with any number of values (even none).

```ts
const pairs: string[] = teams.flatMap((t) => t.members.map((m) => `${t.name}:${m}`));
console.log(pairs);   // [ 'A:Ana', 'A:Ben', 'B:Cara' ]

console.log(["a b", "c"].flatMap((s) => s.split(" ")));   // [ 'a', 'b', 'c' ]
```

Return an empty array `[]` for an item to leave it out.

---

**6. Using the flat list**

Once the list is flat, every method you know works: `filter`, `includes`, `sort`, `reduce`.

A list of unique values with the "done list" pattern from Day 7:

```ts
const unique: string[] = [];
["Ana", "Ben", "Ana"].forEach((x) => {
  if (!unique.includes(x)) {
    unique.push(x);
  }
});
console.log(unique);   // [ 'Ana', 'Ben' ]
```

And counting uses the `reduce` into an object pattern from Day 20.

Common problem: expecting `.length` of nested data to count the inner items. `nested.length` is 3, `nested.flat().length` is 5.

---

**Recap**

- `[[1, 2], [3]]` is an array of arrays, typed `number[][]`.
- `flat()` removes one level. `flat(2)` removes two.
- `flatMap(fn)` is `map(fn).flat()` in one step.
- After flattening, filter, count and sort as usual.

**Next:** open `exercises.md` for today's project and challenges.
