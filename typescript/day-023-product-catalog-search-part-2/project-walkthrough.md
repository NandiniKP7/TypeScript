# Day 23: Product Catalog Search (Part 2): Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
The second part of the product catalog search: sorting and chaining. It prints:

```
By price:
  Pen: 2
  Notebook: 5
  Chair: 120
  Headphones: 150
  Desk: 300
  Phone: 800
  Laptop: 1200
Top 3 rated: Desk, Laptop, Phone
Electronics in stock, cheapest first: Headphones (150), Laptop (1200)
Search "o": Headphones, Laptop, Notebook, Phone
Average rating (in stock): 4.24
Stock value: 12950
Original first: Laptop
```

## What you'll learn
- Sorting objects on a copy
- Chains of `filter`, `sort`, `map`, `slice`
- Cleaning a search text before using it

## Before you start
Create `day23.ts`. Run with `npx tsx day23.ts`.

## Build it, step by step

### Step 1: Type and data
**Type this** (same as yesterday):
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

### Step 2: Sort by price
**Type this:**
```ts
const byPrice: Product[] = [...products].sort((a, b) => a.price - b.price);

console.log("By price:");
byPrice.forEach((p) => {
  console.log(`  ${p.name}: ${p.price}`);
});
```
**You should see:** the "By price" block, from `Pen: 2` to `Laptop: 1200`.
**Why:** We sort a copy so `products` keeps its order.

### Step 3: Top 3 rated
**Type this:**
```ts
const topRated: string[] = [...products]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3)
  .map((p) => p.name);
console.log(`Top 3 rated: ${topRated.join(", ")}`);
```
**You should see:** `Top 3 rated: Desk, Laptop, Phone`
**Why:** Sort best first (`b - a`), keep the first three with `slice(0, 3)`, then take their names.

### Step 4: A filter, sort, map chain
**Type this:**
```ts
const availableElectronics: string[] = products
  .filter((p) => p.category === "electronics" && p.stock > 0)
  .sort((a, b) => a.price - b.price)
  .map((p) => `${p.name} (${p.price})`);
console.log(`Electronics in stock, cheapest first: ${availableElectronics.join(", ")}`);
```
**You should see:** `Electronics in stock, cheapest first: Headphones (150), Laptop (1200)`
**Why:** `filter` already returns a new array, so sorting it does not touch `products`. Phone is dropped because its stock is 0.

### Step 5: Search
**Type this:**
```ts
const query: string = "  O ";
const cleaned: string = query.trim().toLowerCase();

const matches: string[] = products
  .filter((p) => p.name.toLowerCase().includes(cleaned))
  .map((p) => p.name)
  .sort((a, b) => a.localeCompare(b));
console.log(`Search "${cleaned}": ${matches.join(", ")}`);
```
**You should see:** `Search "o": Headphones, Laptop, Notebook, Phone`
**Why:** We clean the search (Day 13), lower-case both sides, filter, map to names, then sort the names with `localeCompare`.

### Step 6: Averages and totals
**Type this:**
```ts
const inStock: Product[] = products.filter((p) => p.stock > 0);
const avgRating: number = inStock.reduce((sum, p) => sum + p.rating, 0) / inStock.length;
console.log(`Average rating (in stock): ${avgRating.toFixed(2)}`);

const stockValue: number = products.reduce((sum, p) => sum + p.price * p.stock, 0);
console.log(`Stock value: ${stockValue}`);
console.log(`Original first: ${products[0].name}`);
```
**You should see:**
```
Average rating (in stock): 4.24
Stock value: 12950
Original first: Laptop
```
**Why:** The last line proves `products` was never reordered.

## Check yourself
Run the file. The output should match the top of this page.

## Recap
- Copy, then sort. Chain the steps in a sensible order.
- `localeCompare` sorts text properly.
- Finish a chain with `join`, `reduce` or `length` when you need text or a number.

## If something breaks
- **`Original first` is not Laptop:** you sorted `products` directly. Use `[...products].sort(...)`.
- **Search finds nothing:** you compared a lower-case search with a capitalised name. Lower-case both.
- **Sorted prices look random:** you wrote `a.price > b.price` or forgot to subtract.
