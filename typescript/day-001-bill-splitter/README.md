# Day 1: Variables, Types and Arithmetic

**Project today:** Bill Splitter (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- What a variable is, and `const` vs `let`
- The basic types: `string`, `number`, `boolean`
- Assignment, arithmetic, `%` and `Math.floor`

---

**Setup (once).** Create a folder `ts-days`. For each day, create a file such as `day1.ts` inside it. To run a file, open a terminal in that folder and type:

```
npx tsx day1.ts
```

If it asks to install `tsx`, answer `y`. The program's output appears in the terminal. `console.log(...)` is the line that prints something. Use it to see your values.

---

**1. What is a variable?**

A variable is a name that holds a value, so you can use the value later without typing it again.

```ts
const language: string = "TypeScript";
```

Read it piece by piece:

- `const` means this name is created once and can't be given a new value later.
- `language` is the name you choose.
- `: string` is the type: it says the value is text.
- `= "TypeScript"` stores the value.

```ts
console.log(language);
```

Prints: `TypeScript`

---

**2. The three basic types**

A type says what kind of value a variable holds.

```ts
const city: string = "Detroit";     // string: text, always in quotes
const age: number = 30;             // number: whole numbers and decimals, no quotes
const price: number = 9.99;         // decimals are also number
const isLearning: boolean = true;   // boolean: only true or false
```

Anything after `//` is a comment. TypeScript ignores it. It is only a note for you.

---

**3. `const` vs `let`**

- `const`: the value cannot change. Use this by default.
- `let`: the value can change later. Use it only when you need that.

```ts
let lessonsDone: number = 0;
lessonsDone = 1;                // allowed
console.log(lessonsDone);       // prints: 1

const language: string = "TypeScript";
language = "JavaScript";        // ERROR: Cannot assign to 'language' because it is a constant
```

Type the last line and look at the red underline. This is TypeScript protecting you from changing something you said wouldn't change. Delete the line afterwards.

---

**4. Assignment goes right to left**

`=` does not mean "equals" here. It means: work out the right side, then store the result in the left.

```ts
let balance: number = 100;
balance = balance + 50;
console.log(balance);   // prints: 150
```

Step by step: `balance` is 100, so `balance + 50` is 150. Then 150 is stored in `balance`.

---

**5. Types stop mistakes**

```ts
let count: number = 5;
count = "five";   // ERROR: Type 'string' is not assignable to type 'number'
```

`count` was declared as a `number`, so TypeScript refuses text. Read errors from the end: `Type 'string' is not assignable to type 'number'` = "you tried to put text where a number goes."

The types exist only to check your code. They disappear when the program runs.

---

**6. Arithmetic operators**

```ts
const a: number = 17;
const b: number = 5;

console.log(a + b);   // 22   add
console.log(a - b);   // 12   subtract
console.log(a * b);   // 85   multiply
console.log(a / b);   // 3.4  divide (can give decimals)
console.log(a % b);   // 2    remainder
```

`%` gives what is left over after dividing as many whole times as possible. 5 goes into 17 three times (3 × 5 = 15), and 17 - 15 = 2 is left. So `17 % 5` is `2`.

`*` and `/` happen before `+` and `-`. Use brackets when in doubt: `(a + b) * 2`.

---

**7. Removing decimals with `Math.floor`**

`/` can give decimals. `Math.floor(...)` rounds down to a whole number.

```ts
console.log(17 / 5);               // 3.4
console.log(Math.floor(17 / 5));   // 3
```

Whole-number division plus `%` splits a value into "full groups" and "left over".

---

**Recap**

- A variable is a name that holds a value.
- Types: `string` (text), `number`, `boolean`.
- `const` can't change, `let` can.
- `=` stores the right side in the left.
- `+ - * / %` do arithmetic, and `Math.floor` drops the decimals.

**Next:** open `exercises.md` for today's project and challenges.
