# Day 31: Rest, Optional and Default Parameters

**Project today:** Flexible Score Calculator and Shipping Quote (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- Rest parameters (`...args`) for any number of arguments
- Optional parameters with `?`
- Default parameter values
- The order these parameters must go in

Create `day31.ts` and run it with `npx tsx day31.ts`.

---

**1. Rest parameters: any number of arguments**

Sometimes you do not know how many values a caller will pass. A **rest parameter** starts with `...` and collects all the extra arguments into an **array**.

```ts
function total(...numbers: number[]): number {
  let sum = 0;
  for (const n of numbers) {
    sum += n;
  }
  return sum;
}

console.log(total(1, 2, 3));              // 6
console.log(total(10, 20, 30, 40, 50));   // 150
console.log(total());                     // 0
```

Read it piece by piece:
- `...numbers`: collect every argument into one array called `numbers`.
- `: number[]`: the type is an array, because that is what you receive.
- `total()` with no arguments gives an empty array, so the loop does nothing and the answer is `0`.

---

**2. Rest comes last**

A rest parameter must be the **last** one, and a function can have only one. Normal parameters before it take the first arguments. The rest takes everything left.

```ts
function describe(label: string, ...values: number[]): string {
  return label + ": " + values.length + " values";
}

console.log(describe("Scores", 90, 80));   // Scores: 2 values
```

If you already have an array, spread it into the call with `...` (Day 14):

```ts
const scores = [90, 80, 70];
console.log(total(...scores));   // 240
```

TypeScript also checks each argument. `total(1, "2", 3)` gives `error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.`

---

**3. Optional parameters with `?`**

Put `?` after a parameter name to say "the caller may leave this out". When it is left out, its value is `undefined` (the value that means "nothing was given").

```ts
function greet(name: string, title?: string): string {
  if (title === undefined) {
    return "Hello, " + name;
  }
  return "Hello, " + title + " " + name;
}

console.log(greet("Lopez"));          // Hello, Lopez
console.log(greet("Lopez", "Dr."));   // Hello, Dr. Lopez
```

**Watch out:** you must check an optional parameter before using it. This is an error:

```ts
function greet(name: string, title?: string): string {
  return "Hello, " + title.toUpperCase() + " " + name;
}
```

```
error TS18048: 'title' is possibly 'undefined'.
```

TypeScript is protecting you from calling `.toUpperCase()` on nothing. The `=== undefined` check above is the fix.

---

**4. Optional parameters go after required ones**

Required parameters first, optional ones after. Otherwise a caller could not tell which argument is which.

```ts
function wrong(title?: string, name: string): string {
  return name;
}
```

```
error TS1016: A required parameter cannot follow an optional parameter.
```

---

**5. Default values**

A **default parameter** gives the parameter a value to use when the caller leaves it out. Write `= value` after the type. The parameter is then never `undefined` inside the function, so no check is needed.

```ts
function priceWithTax(price: number, rate: number = 10): number {
  return price + (price * rate) / 100;
}

console.log(priceWithTax(100));       // 110
console.log(priceWithTax(100, 20));   // 120
```

A default can use an earlier parameter:

```ts
function box(width: number, height: number = width): number {
  return width * height;
}

console.log(box(4), box(4, 2));   // 16 8
```

---

**6. Optional or default? Skipping a middle argument**

- Use a **default** when there is a sensible value to fall back to.
- Use **optional (`?`)** when "not given" is itself meaningful, so the function must check for it.

To skip a parameter that has a default but still set a later one, pass `undefined`. It triggers the default.

```ts
function quote(text: string, mark: string = "*", author?: string): string {
  const base = mark + text + mark;
  if (author === undefined) {
    return base;
  }
  return base + " - " + author;
}

console.log(quote("Hi", undefined, "Ana"));   // *Hi* - Ana
```

---

**Recap**

- `...name: type[]` collects any number of arguments into an array. It goes last.
- `name?: type` makes a parameter optional. It can be `undefined`, so check it before use.
- `name: type = value` gives a default. The caller can skip it.
- Required parameters first, then optional or default, then rest.
- Pass `undefined` to use a default while setting a later argument.

**Next:** open `exercises.md` for today's project and challenges.
