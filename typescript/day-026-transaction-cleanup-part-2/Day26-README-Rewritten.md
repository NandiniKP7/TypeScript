# Day 26 — From Type Predicates to Typed `reduce()`

**Project:** Transaction Cleanup, Part 2  
**Goal:** Turn cleaned data into useful summaries independently.

## Quick revision

- `filter()` selects elements.
- A type predicate checks a value and tells TypeScript its narrower type.
- `reduce()` combines elements into one result: a number, object or another value.
- `object.name` accesses a known property; `object[key]` accesses a property using a variable.

Today's new idea is that the accumulator can be an object containing several totals, including totals grouped by a dynamic key.

Each example below is independent. Run one code block at a time in a scratch `.ts` file using `npx tsx filename.ts`. No example depends on the previous one.

## 1. From messy data to a typed summary

Imagine employee records contain missing salaries and even missing employees. Before calculating payroll, remove those entries so every salary is a number.

```ts
type RawEmployee = { name: string; salary: number | null };
type Employee = { name: string; salary: number };

const employees: (RawEmployee | null)[] = [
  { name: 'Ana', salary: 100 },
  null,
  { name: 'Ben', salary: null },
  { name: 'Cara', salary: 200 }
];

function isPresent(e: RawEmployee | null): e is RawEmployee {
  return e !== null;
}
function hasSalary(e: RawEmployee): e is Employee {
  return e.salary !== null;
}

const present = employees.filter(isPresent);
const clean = present.filter(hasSalary);
console.log(clean);

const payroll = clean.reduce<number>((acc, employee) => {
  return acc + employee.salary;
}, 0);
console.log(payroll);
```

After the first filter, `present` contains three objects (Ana, Ben and Cara). After the second, `clean` contains exactly:

```ts
[
  { name: 'Ana', salary: 100 },
  { name: 'Cara', salary: 200 }
]
```

| Iteration | Current `employee` | `acc` before | Returned value |
|---|---|---:|---:|
| 1 | Ana, salary 100 | 0 | 100 |
| 2 | Cara, salary 200 | 100 | 300 |

Output: `300` (after printing the clean array).

`employee` is simply the name given to the current element of `clean`. `acc` starts as the initial value `0`. Whatever the callback returns becomes the next accumulator. `<number>` describes the result type; here TypeScript could infer it from `0`.

Why separate predicates? They let us inspect each stage independently and reuse the narrowed collection. A combined predicate is equally valid when intermediate results are not needed.

## 2. Filtering with extra information

A reusable product filter should work for any requested category, not just one hard-coded category.

```ts
type Product = { name: string; category: string; price: number };
const products: Product[] = [
  { name: 'Pen', category: 'stationery', price: 2 },
  { name: 'Lamp', category: 'home', price: 30 },
  { name: 'Book', category: 'stationery', price: 8 }
];

function matchesCategory(product: Product, category: string): boolean {
  return product.category === category;
}
const selected = products.filter(p => matchesCategory(p, 'stationery'));
console.log(selected.map(p => p.name));

function isAffordable(p: Product): boolean {
  return p.price <= 10;
}
console.log(products.filter(isAffordable).length);
```

`p` is the current object from `products`. The arrow function supplies both the current object and the extra category argument.

| Product | Category matches? |
|---|---|
| Pen | true |
| Lamp | false |
| Book | true |

Output:

```text
[ 'Pen', 'Book' ]
2
```

Why not a type predicate? Both before and after filtering, the elements are `Product`. We are selecting products, not narrowing their type. A plain boolean is enough.

`filter` actually passes the element, index and array to its callback. Passing `matchesCategory` directly would not supply the desired category string. The arrow wrapper solves that. For a one-off condition, `products.filter(p => p.category === 'stationery')` is also perfectly valid.

## 3. Accumulate several named totals

Suppose a budget report needs totals for food, travel and other expenses. You could use three separate filters and sums. An object accumulator lets you collect all three totals in one pass.

### Understand the object before using reduce

```ts
const totals = { food: 0, travel: 0, other: 0 };
totals.food += 20;
console.log(totals); // { food: 20, travel: 0, other: 0 }
```

`totals.food += 20` means `totals.food = totals.food + 20`. The property already exists because we created it with value zero.

### Complete example

```ts
type Expense = { category: string; amount: number };
type ExpenseSummary = { food: number; travel: number; other: number };

const expenses: Expense[] = [
  { category: 'food', amount: 20 },
  { category: 'travel', amount: 30 },
  { category: 'food', amount: 15 },
  { category: 'books', amount: 10 }
];

const summary = expenses.reduce<ExpenseSummary>((acc, expense) => {
  if (expense.category === 'food') {
    acc.food += expense.amount;
  } else if (expense.category === 'travel') {
    acc.travel += expense.amount;
  } else {
    acc.other += expense.amount;
  }
  return acc;
}, { food: 0, travel: 0, other: 0 });
console.log(summary);
```

Where does everything come from?

- `expenses`: the input array shown above.
- `expense`: the current element from that array, e.g. `{ category: 'food', amount: 20 }`.
- `acc`: starts as `{ food: 0, travel: 0, other: 0 }`, the second argument of `reduce`.
- `acc.food`: the food property of that accumulator, not a property of `expense`.
- `<ExpenseSummary>`: tells TypeScript which fields the accumulator must have.
- `return acc`: sends the updated object into the next iteration. After the last element it becomes the result stored in `summary`.

| Current expense | Accumulator before | Accumulator after |
|---|---|---|
| food 20 | `{food:0,travel:0,other:0}` | `{food:20,travel:0,other:0}` |
| travel 30 | `{food:20,travel:0,other:0}` | `{food:20,travel:30,other:0}` |
| food 15 | `{food:20,travel:30,other:0}` | `{food:35,travel:30,other:0}` |
| books 10 | `{food:35,travel:30,other:0}` | `{food:35,travel:30,other:10}` |

Output: `{ food: 35, travel: 30, other: 10 }`.

The last `else` prevents unrecognized categories from being silently ignored. The named type catches misspelled fields such as `acc.foods`. A loop with the same object is also valid; `reduce` is convenient for returning one summary from an array.

## 4. Dynamic keys — when property names come from data

A retailer wants total units sold by store. Store names are not known in advance, so we cannot initialize a fixed field for every store.

Ordinary object access first:

```ts
const totals: { [store: string]: number } = {};
const key = 'North';
totals[key] = 4;
console.log(totals); // { North: 4 }
```

`totals[key]` means `totals['North']`, not `totals.key`. The index signature describes string keys with numeric values; it does not create any properties at runtime.

### Complete example

```ts
type StoreSale = { store: string; units: number };
type StoreTotals = { [store: string]: number };

const sales: StoreSale[] = [
  { store: 'North', units: 4 },
  { store: 'South', units: 7 },
  { store: 'North', units: 3 }
];

const storeTotals = sales.reduce<StoreTotals>((acc, sale) => {
  const key = sale.store;
  acc[key] = (acc[key] ?? 0) + sale.units;
  return acc;
}, {});
console.log(storeTotals);
```

`sale` is the current object from `sales`. `key` holds its store name. `acc` starts as `{}`. On the first iteration, `sale.store` is `'North'`, so `acc[key]` is `acc['North']`. That property does not yet exist, so its runtime value is `undefined`. `?? 0` supplies a starting zero.

| Current sale | Before | Calculation | After |
|---|---|---|---|
| North, 4 | `{}` | `(undefined ?? 0) + 4` | `{North:4}` |
| South, 7 | `{North:4}` | `(undefined ?? 0) + 7` | `{North:4,South:7}` |
| North, 3 | `{North:4,South:7}` | `(4 ?? 0) + 3` | `{North:7,South:7}` |

Output: `{ North: 7, South: 7 }`.

Use this pattern when groups can vary with input. With arbitrary external keys, a `Map` or a null-prototype dictionary is safer than a plain object because plain objects inherit property names. The sample uses simple known-safe names.

## 5. Nested accumulator — one summary object per group

A company wants both employee count and salary total for each department. A single number per department is no longer enough. Each department needs its own object.

Desired structure:

```ts
{
  IT: { count: 2, salaryTotal: 300 },
  HR: { count: 1, salaryTotal: 150 }
}
```

### Complete example

```ts
type Staff = { department: string; salary: number };
type DepartmentSummary = { count: number; salaryTotal: number };
type ByDepartment = { [department: string]: DepartmentSummary };

const staff: Staff[] = [
  { department: 'IT', salary: 100 },
  { department: 'HR', salary: 150 },
  { department: 'IT', salary: 200 }
];

const byDepartment = staff.reduce<ByDepartment>((acc, member) => {
  const key = member.department;
  if (acc[key] === undefined) {
    acc[key] = { count: 0, salaryTotal: 0 };
  }
  const group = acc[key];
  group.count += 1;
  group.salaryTotal += member.salary;
  return acc;
}, {});
console.log(byDepartment);
```

`DepartmentSummary` describes one department's object. `ByDepartment` describes the entire dictionary of department objects. `member` is the current element of `staff`. `key` is its department name. `acc` starts as an empty object.

First iteration, IT salary 100:

```text
Before: {}
Create IT: { IT: { count: 0, salaryTotal: 0 } }
Update:    { IT: { count: 1, salaryTotal: 100 } }
```

Second iteration, HR salary 150:

```text
Before: { IT: { count: 1, salaryTotal: 100 } }
After:  { IT: { count: 1, salaryTotal: 100 }, HR: { count: 1, salaryTotal: 150 } }
```

Third iteration, IT salary 200:

```text
IT already exists, so do not reset it.
After: { IT: { count: 2, salaryTotal: 300 }, HR: { count: 1, salaryTotal: 150 } }
```

Why does `group.count += 1` update `acc`? `group` refers to the same object as `acc[key]`; it is not a copy. Writing `acc[key].count += 1` would also be valid after initialization.

Never initialize every department to one shared summary object: changing one department would also change the others. Create a new object inside the `if`, only when the department is first encountered.

## 6. Mutation versus returning a new object

An inventory report needs to total received and shipped units. Two styles can produce the same result. Mutation updates the existing accumulator; object spread creates a new accumulator.

```ts
type Movement = { kind: 'received' | 'shipped'; units: number };
type InventoryTotals = { received: number; shipped: number };
const movements: Movement[] = [
  { kind: 'received', units: 10 },
  { kind: 'shipped', units: 3 },
  { kind: 'received', units: 5 }
];

const mutable = movements.reduce<InventoryTotals>((acc, movement) => {
  acc[movement.kind] += movement.units;
  return acc;
}, { received: 0, shipped: 0 });

const immutable = movements.reduce<InventoryTotals>((acc, movement) => {
  return {
    ...acc,
    [movement.kind]: acc[movement.kind] + movement.units
  };
}, { received: 0, shipped: 0 });

console.log(mutable);
console.log(immutable);
```

Each `movement` comes from the displayed `movements` array. Each reduction starts with its own zeroed object. `[movement.kind]` accesses or defines the property named by that movement's kind.

| Step | Both accumulators contain |
|---|---|
| Start | `{received:0,shipped:0}` |
| Receive 10 | `{received:10,shipped:0}` |
| Ship 3 | `{received:10,shipped:3}` |
| Receive 5 | `{received:15,shipped:3}` |

Both outputs: `{ received: 15, shipped: 3 }`.

The first version changes the existing object. The second copies its fields with `...acc`, then overrides the chosen field. A spread is shallow: nested objects would still be shared unless copied separately. Mutation of a fresh local accumulator is fine here. You do not need to use both styles in your project.

## Recap — choose based on the result you need

| Desired result | Starting accumulator | Strategy |
|---|---|---|
| One total | `0` | Return next numeric total |
| Known fields | `{food:0, travel:0, other:0}` | Update named fields |
| Unknown groups, one total each | `{}` | Dynamic keys with `?? 0` |
| Unknown groups, several totals each | `{}` | Create a summary object per group |

Before writing any reduction, ask: What is my input array? What should the final result look like? What is its starting value? What changes for each element? What must I return?

For today's project, reuse your Day 25 predicates. The project also uses familiar maximum-selection and percentage calculations: when finding a maximum object, a nullable initial accumulator can represent no candidate yet; check for null before accessing it. When calculating a percentage, guard against a zero denominator. These are revisions, not additional new accumulator patterns.

Read sections 1–4 first, then try section 5 slowly. Section 6 compares two valid styles and need not be memorized. Budget 20–30 minutes for reading and tracing; if necessary, continue the project in a separate session rather than rushing. The original project requirements are unchanged. Use the walkthrough only if you need help after trying independently.
