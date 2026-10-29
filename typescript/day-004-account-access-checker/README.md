# Day 4: Combining Conditions

**Project today:** Account Access Checker (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- `&&` (and), `||` (or), `!` (not)
- Truthy and falsy values
- Checking the "no" reasons first

Create `day4.ts` and run it with `npx tsx day4.ts`.

---

**1. `&&` means "both must be true"**

```ts
const age: number = 20;
const isVerified: boolean = true;

if (age >= 18 && isVerified) {
  console.log("Adult and verified");
}
```

Prints: `Adult and verified`

`&&` gives `true` only when **both** sides are true. If `isVerified` were `false`, nothing would print.

| left | right | `left && right` |
|---|---|---|
| true | true | true |
| true | false | false |
| false | true | false |
| false | false | false |

---

**2. `||` means "at least one must be true"**

```ts
const age: number = 70;

if (age < 12 || age >= 65) {
  console.log("Discount applies");
}
```

Prints: `Discount applies`

`||` gives `true` when **either** side (or both) is true. It is `false` only when both are false.

---

**3. `!` flips true and false**

```ts
const isSuspended: boolean = false;

if (!isSuspended) {
  console.log("Account is in good standing");
}
```

Prints: `Account is in good standing`

`!isSuspended` reads as "is NOT suspended". `!true` is `false`, and `!false` is `true`.

---

**4. Combining several, with brackets**

You can mix them. Use brackets to make the meaning clear.

```ts
const isMember: boolean = false;
const age: number = 70;
const isStudent: boolean = false;

if (isMember || ((age < 12 || age > 64) && !isStudent)) {
  console.log("Discount");
}
```

Prints: `Discount`

Read the inside first: `(age < 12 || age > 64)` is true for age 70, and `!isStudent` is true, so the `&&` part is true, so the whole line is true.

**Short-circuiting:** the computer stops as soon as it knows the answer. In `a && b`, if `a` is false, `b` is never checked. In `a || b`, if `a` is true, `b` is never checked.

---

**5. Truthy and falsy**

Inside an `if`, any value is treated as true or false. These "falsy" values count as `false`:

- `""` (empty text)
- `0`
- `null` and `undefined`

Everything else is "truthy".

```ts
const username: string = "";

if (username) {
  console.log("Username provided");
} else {
  console.log("Username is empty");   // this runs
}
```

Prints: `Username is empty`

`if (username)` means "if a username was given". Change it to `"nandini"` and run again.

---

**6. Check the "no" reasons first**

A clear pattern: check every reason to say no, one by one, each with its own message. If none applies, the answer is yes.

```ts
const age: number = 20;
const isVerified: boolean = true;
const isSuspended: boolean = true;

if (age < 18) {
  console.log("DENIED: must be 18 or older");
} else if (!isVerified) {
  console.log("DENIED: not verified");
} else if (isSuspended) {
  console.log("DENIED: account is suspended");
} else {
  console.log("ACCESS GRANTED");
}
```

Prints: `DENIED: account is suspended`

The first problem found wins and the rest are skipped. The good case comes last, in the `else`. Later, with functions, you will use `return` to stop early. The idea is the same.

---

**Recap**

- `&&`: both true. `||`: at least one true. `!`: flips the value.
- Falsy values: `""`, `0`, `null`, `undefined`. Everything else is truthy.
- Check the reasons for "no" first, then say yes in the `else`.

**Next:** open `exercises.md` for today's project and challenges.
