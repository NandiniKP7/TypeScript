# Day 11: Strings, Part 1

**Project today:** Message Cleaner, part 1 (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- `.length` and picking one character
- Cleaning text with `.trim()`, `.toLowerCase()` and `.toUpperCase()`
- Asking questions about text with `.startsWith()`, `.endsWith()` and `.includes()`

Create `day11.ts` and run it with `npx tsx day11.ts`.

---

**1. A string has a length**

A **string** is text. A string is a list of characters, so it has a `.length` too, just as an array does.

```ts
const word: string = "Hello";
console.log(word.length);   // 5
```

Spaces count as characters. The string `"  hi  "` has length 6: two spaces, `h`, `i`, two spaces.

---

**2. A string method gives you a new string**

A **method** is a ready-made action you call with a dot, like `word.length` but with brackets: `word.toUpperCase()`. Strings have many methods.

An important rule: a method **never changes** the original string. It gives back a **new** string.

```ts
const shout: string = "Hello";
const lower: string = shout.toLowerCase();
console.log(lower);   // hello
console.log(shout);   // Hello   (unchanged)
```

If you want to keep the cleaned result, store it in a variable.

---

**3. `.trim()` removes the spaces at the ends**

```ts
const padded: string = "  hi  ";
console.log(padded.trim());          // hi
console.log(padded.trim().length);   // 2
console.log(padded.trimStart().length);   // 4  ("hi" and the two spaces after it)
console.log(padded.trimEnd().length);     // 4  (the two spaces before it, and "hi")
```

`.trim()` removes spaces (and tabs and new lines) from **both** ends. It does not touch spaces in the middle. `.trimStart()` and `.trimEnd()` clean only one end.

You can chain methods. `padded.trim().length` first trims, then takes the length of the result.

---

**4. Upper and lower case**

```ts
const word: string = "Hello";
console.log(word.toUpperCase());   // HELLO
console.log(word.toLowerCase());   // hello
```

Computers treat `"Yes"` and `"yes"` as different text. To compare fairly, make both lower case first.

---

**5. `.startsWith()`, `.endsWith()` and `.includes()`**

These three ask a yes/no question and give back a `boolean`.

```ts
const file: string = "report.pdf";
console.log(file.startsWith("rep"));   // true
console.log(file.endsWith(".pdf"));    // true
console.log(file.includes("port"));    // true
console.log(file.startsWith("Rep"));   // false
```

- `startsWith("x")`: does the text begin with `x`?
- `endsWith("x")`: does the text finish with `x`?
- `includes("x")`: is `x` found anywhere inside?

Watch out: capital letters matter. `"Rep"` is not the same as `"rep"`. Lower-case the text first if you do not care about case.

---

**6. Picking one character**

A string counts from 0, the same way an array does. Use square brackets.

```ts
const word: string = "Hello";
console.log(word[0]);                 // H
console.log(word[4]);                 // o
console.log(word[5]);                 // undefined
console.log(word[word.length - 1]);   // o   (the last character)
```

The last index is `length - 1`, the same rule as arrays. Going past the end gives `undefined`.

---

**7. The empty string**

`""` is a string with no characters. A string with only spaces is **not** empty until you trim it.

```ts
console.log("".length);                // 0
console.log("   ".length);             // 3
console.log("   ".trim().length);      // 0
```

Common problem: checking `text.length === 0` on `"   "` says "not empty". Trim first, then check.

---

**Recap**

- `.length` counts all characters, spaces included.
- String methods return a new string. Store it if you want to keep it.
- `.trim()` cleans both ends. `.toLowerCase()` and `.toUpperCase()` change case.
- `.startsWith()`, `.endsWith()`, `.includes()` give back `true` or `false`, and care about capital letters.
- `text[0]` is the first character, `text[text.length - 1]` is the last.

**Next:** open `exercises.md` for today's project and challenges.
