# Day 17: User View-Model: Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
A user view-model builder. It reshapes a list of users with `map` and prints them. It prints:

```
Users: 3
1: Ana Lopez <ana@example.com> adult
2: Ben Ortiz <ben@example.com> minor
3: Cara Singh <cara@example.com> adult
Names: Ana Lopez, Ben Ortiz, Cara Singh
Ages next year: 31, 17, 42
Original age: 30, new age: 31
```

## What you'll learn
- `map` to reshape every object
- Typed return values with `(user): UserView =>`
- Spread to update without mutating

## Before you start
Create `day17.ts`. Run with `npx tsx day17.ts`.

## Build it, step by step

### Step 1: Types and data
**Type this:**
```ts
type User = { id: number; firstName: string; lastName: string; email: string; age: number };
type UserView = { id: number; displayName: string; email: string; isAdult: boolean };

const users: User[] = [
  { id: 1, firstName: "Ana", lastName: "Lopez", email: "ana@example.com", age: 30 },
  { id: 2, firstName: "Ben", lastName: "Ortiz", email: "BEN@Example.com", age: 16 },
  { id: 3, firstName: "Cara", lastName: "Singh", email: "cara@example.com", age: 41 },
];
```
**Why:** `User` is the data we have. `UserView` is the smaller shape we want to show.

### Step 2: Map to view-models
**Type this:**
```ts
const views: UserView[] = users.map((user): UserView => ({
  id: user.id,
  displayName: `${user.firstName} ${user.lastName}`,
  email: user.email.toLowerCase(),
  isAdult: user.age >= 18,
}));

console.log(`Users: ${views.length}`);
```
**You should see:** `Users: 3`
**Why:** `map` returns one `UserView` per `User`, so the count is the same. The `( )` around `{ ... }` tell TypeScript this is an object being returned. `: UserView` after `(user)` checks the shape.

### Step 3: Print them
**Type this:**
```ts
views.forEach((view) => {
  let status: string = "minor";
  if (view.isAdult) {
    status = "adult";
  }
  console.log(`${view.id}: ${view.displayName} <${view.email}> ${status}`);
});
```
**You should see:**
```
1: Ana Lopez <ana@example.com> adult
2: Ben Ortiz <ben@example.com> minor
3: Cara Singh <cara@example.com> adult
```
**Why:** We use `forEach` here because we only print. Notice Ben's email is now lower case.

### Step 4: Extract one property
**Type this:**
```ts
const names: string[] = views.map((view) => view.displayName);
console.log(`Names: ${names.join(", ")}`);
```
**You should see:** `Names: Ana Lopez, Ben Ortiz, Cara Singh`

### Step 5: A different type out
**Type this:**
```ts
const nextYear: number[] = users.map((user) => user.age + 1);
console.log(`Ages next year: ${nextYear.join(", ")}`);
```
**You should see:** `Ages next year: 31, 17, 42`
**Why:** Users went in, numbers came out.

### Step 6: Update without mutating
**Type this:**
```ts
const upgraded: User[] = users.map((user) => ({ ...user, age: user.age + 1 }));
console.log(`Original age: ${users[0].age}, new age: ${upgraded[0].age}`);
```
**You should see:** `Original age: 30, new age: 31`
**Why:** `{ ...user, age: ... }` copies every property and replaces `age`. The original `users` array is untouched.

## Check yourself
Run the file. The output should match the top of this page.

## Recap
- `map` gives a new array of the same length.
- Wrap returned objects in `( )`.
- Spread plus a changed field updates without mutating.

## If something breaks
- **Error about `void` or `undefined` items:** your arrow function has braces but no `return`.
- **Error `Type 'X' is not assignable to type 'UserView'`:** your object is missing a property, or one has the wrong type.
- **Original age changed:** you wrote `user.age = user.age + 1` inside `map` instead of using spread.
