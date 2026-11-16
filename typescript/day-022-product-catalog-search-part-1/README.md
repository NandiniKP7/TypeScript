# Day 22: `find`, `findIndex`, `some` and `every`

**Project today:** Product Catalog Search, part 1 (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- `find`: get the first item that matches
- `findIndex`: get its position
- `some` and `every`: yes/no questions about a whole list
- Handling "not found" safely

Create `day22.ts` and run it with `npx tsx day22.ts`.

---

**1. `find` returns the first match**

`find` goes through the array in order and returns the **first item** for which your function returns `true`. It then stops.

```ts
const nums: number[] = [5, 12, 8, 20, 3];
const firstBig = nums.find((n) => n > 10);
console.log(firstBig);   // 12   (not 20: only the first match)
```

`filter` gives **all** matches in an array. `find` gives **one** item.

---

**2. Nothing found gives `undefined`**

```ts
const none = nums.find((n) => n > 100);
console.log(none);   // undefined
```

Because of this, TypeScript types the result as "a number, or `undefined`". You must check before you use it.

```ts
if (firstBig !== undefined) {
  console.log(firstBig * 2);   // 24
}
```

Inside the `if`, TypeScript knows `firstBig` is a real number. Outside it, it does not. This protects you from using something that is not there.

---

**3. `find` with objects**

```ts
type User = { id: number; name: string };

const users: User[] = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Ben" },
];

const user = users.find((u) => u.id === 2);
if (user !== undefined) {
  console.log(user.name);   // Ben
} else {
  console.log("not found");
}
```

Looking up one object by its id is the most common use.

---

**4. `findIndex` returns the position**

`findIndex` works like `find`, but gives the **index** of the first match. If nothing matches, it gives **-1**.

```ts
console.log(nums.findIndex((n) => n > 10));    // 1
console.log(nums.findIndex((n) => n > 100));   // -1
```

Common problem: forgetting that -1 means "not found". If you use `-1` as an index you get `undefined` or a wrong item. Check first:

```ts
const index: number = users.findIndex((u) => u.name === "Ben");
if (index !== -1) {
  console.log(`at ${index}`);   // at 1
}
```

---

**5. `some`: is there at least one?**

`some` returns `true` if **at least one** item passes the test, and `false` otherwise.

```ts
console.log(nums.some((n) => n > 15));   // true   (20)
console.log(nums.some((n) => n > 50));   // false
```

---

**6. `every`: do all of them pass?**

`every` returns `true` only if **every** item passes.

```ts
console.log(nums.every((n) => n > 0));   // true
console.log(nums.every((n) => n > 5));   // false   (5 and 3 fail)
```

An empty array is a special case: `some` gives `false` (nothing passes) and `every` gives `true` (nothing fails).

Both stop early. `some` stops at the first `true`. `every` stops at the first `false`.

---

**7. Which one do I need?**

| I want... | Use |
|---|---|
| the first matching item | `find` |
| the position of the first match | `findIndex` |
| yes/no: is there any match? | `some` |
| yes/no: do all match? | `every` |
| all matching items | `filter` |
| yes/no: is this exact value in the list? | `includes` |

---

**Recap**

- `find` gives the first match or `undefined`. Check before you use it.
- `findIndex` gives the index or `-1`.
- `some` is "at least one". `every` is "all".
- Empty arrays: `some` is `false`, `every` is `true`.

**Next:** open `exercises.md` for today's project and challenges.
