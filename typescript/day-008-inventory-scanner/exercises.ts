// # Day 8 Exercises

// ## Today's project

// A program that scans a list of products, skips discontinued ones, and stops as soon as it finds the product you want. When searching for "Mouse" it prints:

// ```
// Checking: Laptop
// Skipping discontinued: Old Keyboard
// Checking: Mouse
// Found: Mouse costs 25
// Skipped items: 1
// ```
// Create a list of products. Each product has:
// - name
// - price
// - discontinued (true or false)

// Set the product you want to find to "Mouse".

// Go through the products one at a time using for...of.

// If a product is discontinued:
// - Print Skipping discontinued: [product name]
// - Increase the skipped counter.
// - Use continue to move to the next product.

// For products that aren't discontinued:
// - Print Checking: [product name]

// When the product name matches "Mouse":
// - Print its name and price.
// - Use break to stop searching.

// After the loop, print the total number of skipped products.

const product = [
  { name: "Laptop", price: 900, discontinued: false },
  { name: "Old Keyboard", price: 20, discontinued: true },
  { name: "Mouse", price: 25, discontinued: false },
  { name: "Monitor", price: 300, discontinued: false },
  { name: "Dock", price: 80, discontinued: true },
];
let discountedproducts = 0;
for (const prod of product) {
  if (prod.discontinued === true) {
    console.log("Skipping discounted:" + prod.name);
    discountedproducts++;
    continue;
  } else if (prod.name == "Mouse") {
    console.log("Checking:" + prod.name);
    console.log("Found: Mouse costs", prod.price);

    break;
  } else {
    console.log("Checking:" + prod.name);
  }
}

console.log("discountedproducts", discountedproducts);

// **Build it yourself first.** Use today's `README.md` as your reference. If you are stuck for 15 minutes, open `project-walkthrough.md`.

// Open a hint only after 10 minutes of trying.

// **Core (about 30 minutes):** the project and Challenges 1-2. Challenges 3-4 are stretch: do them if you have time, or carry them to the next day.

// ## Challenge 1: First Negative
// **Goal:** Use `break`.
// **Requirements:** For `[5, 12, -3, 8, -9]`, print the first negative number and stop.
// **Expected output:** `-3`

let nums = [5, 12, -3, 8, -9];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] < 0) {
    console.log(nums[i]);
    break;
  }
}
// <details><summary>Hint 1</summary>`for...of`, an `if`, then `break`.</details>
// <details><summary>Hint 2</summary>The shape: `for (const n of list) { if (n < 0) { console.log(n); break; } }`.</details>

// ## Challenge 2: Even Sum
// **Goal:** Use `continue`.
// **Requirements:** For `[1, 2, 3, 4, 5, 6]`, add only the even numbers and print the total. Use `continue` to skip the odd ones.
// **Expected output:** `12`

let numbs = [1, 2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < numbs.length; i++) {
  if (numbs[i] % 2 == 0) {
    total = total + numbs[i];
  }
}
console.log("total", total);

// <details><summary>Hint 1</summary>An odd number has a remainder when divided by 2.</details>
// <details><summary>Hint 2</summary>`if (n % 2 !== 0) { continue; }`</details>

// ## Challenge 3: Expensive Product (stretch)
// **Goal:** Find the first match in a list of objects.
// **Requirements:** Using the `products` list from today, print the name of the first non-discontinued product costing more than 250.
// **Expected output:** `Laptop`

const products = [
  { name: "Laptop", price: 900, discontinued: false },
  { name: "Old Keyboard", price: 20, discontinued: true },
  { name: "Mouse", price: 25, discontinued: false },
  { name: "Monitor", price: 300, discontinued: false },
  { name: "Dock", price: 80, discontinued: true },
];
for (const prod of products) {
  if (prod.discontinued === false && prod.price>250) {
    console.log(prod.name);
    break;
  }
}

// <details><summary>Hint 1</summary>Two conditions: not discontinued, and price over 250.</details>
// <details><summary>Hint 2</summary>The shape: loop with `for...of` and one `if` that joins the two tests with `&&`. Print the name and `break`.</details>

// ## Challenge 4 (mini boss, stretch): Order Checker
// **Goal:** Combine `for...of`, `continue` and `break`.
// **Requirements:** An order is a list of items: `{ name: "Pen", qty: 2, inStock: true }`, `{ name: "Ink", qty: 0, inStock: true }`, `{ name: "Pad", qty: 1, inStock: false }`, `{ name: "Tape", qty: 3, inStock: true }`. Go through them. Skip items with a quantity of 0 (count them). Stop at the first item that is out of stock and print its name. At the end print how many were skipped.
// **Expected output:**
// ```
// Out of stock: Pad
// Skipped: 1
// ```
// <details><summary>Hint 1</summary>Check `qty === 0` first (skip), then `!inStock` (stop).</details>
// <details><summary>Hint 2</summary>The shape: a `skipped` counter before the loop. In the loop, `if (item.qty === 0) { skipped++; continue; }`, then `if (!item.inStock) { ...; break; }`. Print `Skipped` after the loop.</details>

let items = [
  { name: "Pen", qty: 2, inStock: true },
  { name: "Ink", qty: 0, inStock: true },
  { name: "Pad", qty: 1, inStock: false },
  { name: "Tape", qty: 3, inStock: true },
];
let ignoreditems = 0;
for (const item of items) {
  if (item.qty == 0) {
    ignoreditems=ignoreditems+1;
    continue   
  } else if (item.inStock === false) {
    console.log("Out of Stock",item.name);
    break;
  }
  else
  {
    console.log("Processing:",item.name)
    
  }
}
 console.log("ignoreditemscount",ignoreditems)
// ## When you finish
// Paste your code and output here for review.
