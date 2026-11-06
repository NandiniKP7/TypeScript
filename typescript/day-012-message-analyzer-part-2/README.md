# Day 12: Strings, Part 2

**Project today:** Message Analyzer, part 2 (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- Cutting out part of a string with `.slice()` and `.substring()`
- Swapping text with `.replace()` and `.replaceAll()`
- Breaking a string into pieces with `.split()`
- Building text with template literals
- Edge cases: empty strings and out-of-range positions

Create `day12.ts` and run it with `npx tsx day12.ts`.

---

**1. `.slice(start, end)` cuts out a piece**

`.slice()` returns the characters from `start` up to, but **not including**, `end`. Positions count from 0.

```ts
const text: string = "TypeScript";
console.log(text.slice(0, 4));   // Type
console.log(text.slice(4));      // Script   (no end: go to the finish)
console.log(text.slice(-6));     // Script   (negative: count from the end)
```

Read it piece by piece:
- `slice(0, 4)` takes positions 0, 1, 2, 3.
- `slice(4)` takes everything from position 4 onward.
- `slice(-6)` takes the last 6 characters.

The original string is not changed, as always.

---

**2. `.substring()` is a close cousin**

```ts
console.log(text.substring(0, 4));   // Type
```

For normal use it gives the same result as `.slice()`. The difference is in odd cases: `.substring()` swaps the numbers if start is bigger than end, and treats negative numbers as 0. `.slice()` is more predictable, so we will mostly use `.slice()`.

---

**3. `.replace()` and `.replaceAll()`**

`.replace(old, new)` swaps only the **first** match. `.replaceAll(old, new)` swaps **every** match.

```ts
const msg: string = "red red blue";
console.log(msg.replace("red", "green"));      // green red blue
console.log(msg.replaceAll("red", "green"));   // green green blue
console.log(msg.replace("pink", "x"));         // red red blue
```

If nothing matches, you get the same text back. No error.

Watch out: using `.replace()` when you wanted every match is a very common mistake.

---

**4. `.split()` turns a string into an array**

`.split(separator)` cuts the string wherever the separator appears and gives back an array of the pieces.

```ts
const line: string = "ana,ben,cara";
const parts: string[] = line.split(",");
console.log(parts);          // [ 'ana', 'ben', 'cara' ]
console.log(parts.length);   // 3
```

Common problems:
- Two separators in a row create an empty piece: `"a b  c".split(" ")` gives `[ 'a', 'b', '', 'c' ]`.
- Pieces keep their own spaces, so `.trim()` each piece if needed.
- `"abc".split("")` splits into single characters: `[ 'a', 'b', 'c' ]`.

---

**5. Template literals**

A **template literal** is a string in backticks (the `` ` `` key, next to the number 1). Inside it, `${ ... }` puts any value or calculation into the text.

```ts
const name: string = "Ana";
const count: number = 3;
console.log(`Hi ${name}, you have ${count} messages`);   // Hi Ana, you have 3 messages
console.log(`Total: ${count * 2}`);                       // Total: 6
console.log(`Upper: ${name.toUpperCase()}`);              // Upper: ANA
```

It is easier to read than joining with `+`, and you can write a calculation or a method call inside `${ }`.

---

**6. Edge cases: empty strings and positions that do not exist**

```ts
const empty: string = "";
console.log(empty[0]);                  // undefined
console.log(empty.slice(0, 1) === "");  // true
console.log("abc".slice(20) === "");    // true
```

- Reading a position that does not exist with `[ ]` gives `undefined`. Calling `.toUpperCase()` on it would crash.
- `.slice()` is forgiving: asking for a range that does not exist gives `""`, never an error.
- `"".split(",")` gives `[ '' ]`: one empty piece, not an empty array. So its length is 1.

Before using `text[0]`, make sure `text.length > 0`.

---

**Recap**

- `.slice(start, end)` includes `start`, excludes `end`. A negative number counts from the end.
- `.replace()` changes the first match, `.replaceAll()` changes all of them.
- `.split(",")` makes an array. Trim the pieces.
- Template literals: `` `Hi ${name}` ``.
- `text[0]` on an empty string is `undefined`. Check the length first.

**Next:** open `exercises.md` for today's project and challenges.
