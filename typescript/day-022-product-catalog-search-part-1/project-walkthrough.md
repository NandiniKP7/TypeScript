# Day 22: Product Catalog Search (Part 1): Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
The first part of a product catalog search. It prints:

```
Product 3: Headphones ($150)
Product 99: not found
First furniture: Desk
Desk is at index 3
Index of Sofa: -1
Any out of stock? true
Any over 2000? false
All priced above 1? true
All in stock? false
Out of stock: Phone, Chair
```

## What you'll learn
- `find` and `findIndex`
- `some` and `every`
- Checking for `undefined` and `-1`

## Before you start
Create `day22.ts`. Run with `npx tsx day22.ts`.

## Build it, step by step

### Step 1: Type and data
**Type this:**
```ts
type Product = { id: number; name: string; category: string; price: number; stock: number; rating: number };

const products: Product[] = [
  { id: 1, name: "Laptop", category: "electronics", price: 1200, stock: 5, rating: 4.6 },
  { id: 2, name: "Phone", category: "electronics", price: 800, stock: 0, rating: 4.4 },
  { id: 3, name: "Headphones", category: "electronics", price: 150, stock: 25, rating: 4.1 },
  { id: 4, name: "Desk", category: "furniture", price: 300, stock: 4, rating: 4.7 },
  { id: 5, name: "Chair", category: "furniture", price: 120, stock: 0, rating: 3.9 },
  { id: 6, name: "Notebook", category: "stationery", price: 5, stock: 200, rating: 4.0 },
  { id: 7, name: "Pen", category: "stationery", price: 2, stock: 500, rating: 3.8 },
];
```

### Step 2: Find by id
**Type this:**
```ts
const byId = products.find((p) => p.id === 3);
if (byId !== undefined) {
  console.log(`Product 3: ${byId.name} ($${byId.price})`);
}
```
**You should see:** `Product 3: Headphones ($150)`
**Why:** `find` returns a `Product` or `undefined`. Inside the `if`, TypeScript knows it is a `Product`. In the text, `$` followed by `${...}` prints a real dollar sign and then the price.

### Step 3: Not found
**Type this:**
```ts
const missing = products.find((p) => p.id === 99);
if (missing === undefined) {
  console.log("Product 99: not found");
}
```
**You should see:** `Product 99: not found`

### Step 4: First in a category, and its index
**Type this:**
```ts
const firstFurniture = products.find((p) => p.category === "furniture");
if (firstFurniture !== undefined) {
  console.log(`First furniture: ${firstFurniture.name}`);
}

const deskIndex: number = products.findIndex((p) => p.name === "Desk");
console.log(`Desk is at index ${deskIndex}`);
console.log(`Index of Sofa: ${products.findIndex((p) => p.name === "Sofa")}`);
```
**You should see:**
```
First furniture: Desk
Desk is at index 3
Index of Sofa: -1
```
**Why:** `find` stops at Desk, even though Chair is furniture too. `findIndex` gives -1 for "not found".

### Step 5: Questions about the whole list
**Type this:**
```ts
console.log(`Any out of stock? ${products.some((p) => p.stock === 0)}`);
console.log(`Any over 2000? ${products.some((p) => p.price > 2000)}`);
console.log(`All priced above 1? ${products.every((p) => p.price > 1)}`);
console.log(`All in stock? ${products.every((p) => p.stock > 0)}`);
```
**You should see:**
```
Any out of stock? true
Any over 2000? false
All priced above 1? true
All in stock? false
```
**Why:** `some` is true if at least one passes. `every` is true only if all pass.

### Step 6: Names of out-of-stock products
**Type this:**
```ts
const outOfStock: string[] = products.filter((p) => p.stock === 0).map((p) => p.name);
console.log(`Out of stock: ${outOfStock.join(", ")}`);
```
**You should see:** `Out of stock: Phone, Chair`
**Why:** When you need **all** matches, use `filter`. Then `map` picks the names.

## Check yourself
Run the file. The output should match the top of this page.

## Recap
- `find` gives one item or `undefined`. `findIndex` gives a number or -1.
- `some` and `every` answer yes/no questions.
- Check before you use the result of `find`.

## If something breaks
- **Error `'byId' is possibly 'undefined'`:** use it only inside `if (byId !== undefined) { ... }`.
- **`Index of Sofa: -1` shows as `0` or odd results:** you used the index without checking for -1.
- **`some`/`every` swapped:** `some` = at least one, `every` = all.
