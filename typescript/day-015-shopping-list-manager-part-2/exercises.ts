// # Day 15 Exercises
// Topics: slice(), splice(), spread, array copying, sorting

// ==================================================
// MAIN PROJECT — SHOPPING LIST MANAGER (PART 2)
// ==================================================

let cart: string[] = ["milk", "eggs", "bread", "tea", "jam"];
let extras: string[] = ["salt", "pepper"];
let prices: number[] = [8, 3, 12];

// REQUIREMENTS:
// [ ] 1. Print the original cart.
// [ ] 2. Extract and print the first two items using slice().
// [ ] 3. Save an independent copy of the original cart.
// [ ] 4. Remove eggs and bread using splice().
// [ ] 5. Print the removed items.
// [ ] 6. Print the cart after removal.
// [ ] 7. Print the saved copy to confirm it is unchanged.
// [ ] 8. Insert butter at index 1 without removing anything.
// [ ] 9. Print the updated cart.
// [ ] 10. Create a new array with cart + extras.
// [ ] 11. Print the combined array and unchanged cart.
// [ ] 12. Sort prices numerically without modifying the original.
// [ ] 13. Print sorted prices and original prices.

// First two items
console.log("First 2 items:", cart.slice(0, 2));

// Save copy BEFORE modifying cart
const copyarr: string[] = [...cart];

// Remove eggs and bread
console.log("Removed:", cart.splice(1, 2));
console.log("Cart:", cart);

// Original saved copy
console.log("Saved copy:", copyarr);

// Insert butter at index 1
cart.splice(1, 0, "butter");
console.log("After insert:", cart);

// Combine without changing cart
console.log("With extras:", cart.concat(extras));
console.log("Cart unchanged:", cart);

// Copy prices and sort numerically
const sortnum: number[] = [...prices];
console.log("Sorted:", sortnum.sort((a, b) => a - b));

// Original prices remain unchanged
console.log("Original order:", prices);

// EXPECTED OUTPUT:
// Cart: milk, eggs, bread, tea, jam
// First two: milk, eggs
// Removed: eggs, bread
// Cart now: milk, tea, jam
// Saved copy: milk, eggs, bread, tea, jam
// After insert: milk, butter, tea, jam
// With extras: milk, butter, tea, jam, salt, pepper
// Cart unchanged: milk, butter, tea, jam
// Sorted: 3, 8, 12
// Original order: 8, 3, 12


// ==================================================
// CHALLENGE 1 — WEEK SPLIT (CORE)
// ==================================================

let days: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// REQUIREMENTS:
// [ ] Extract the first five days using slice().
// [ ] Extract the last two days.
// [ ] Extract only the last day.
// [ ] Print each result with spaces between days.

// EXPECTED OUTPUT:
// Mon Tue Wed Thu Fri
// Sat Sun
// Sun


console.log(days.slice(0,5))
console.log(days.slice(-2))
console.log(days.slice(-1))

// ==================================================
// CHALLENGE 2 — CUT AND INSERT (CORE)
// ==================================================

let nums: number[] = [1, 2, 3, 4, 5, 6];

// REQUIREMENTS:
// [ ] Remove two elements starting at index 2 using splice().
// [ ] Print the removed elements.
// [ ] Print the remaining array.
// [ ] Insert 99 at index 1 without removing anything.
// [ ] Print the final array.

// EXPECTED OUTPUT:
// 3,4
// 1,2,5,6
// 1,99,2,5,6
console.log("Remove two elements starting at index 2 ")
console.log("removed elements:",nums.splice(2,2))
console.log("the remaining array:",nums)
console.log(nums.splice(1,0,99))
console.log(nums)

// ==================================================
// CHALLENGE 3 — ALIAS OR COPY? (STRETCH)
// ==================================================

let a: string[] = ["x", "y"];

// REQUIREMENTS:
// [ ] Assign a directly to b.
// [ ] Push "z" into b.
// [ ] Print a.
// [ ] Make c as an independent copy of a.
// [ ] Push "w" into c.
// [ ] Print a again.
// [ ] Print c.

// EXPECTED OUTPUT:
// xyz
// xyz
// xyzw

let b:string[]=a
console.log(b.push("z"))
console.log(a)
let c:string[]=[...a]
console.log(c.push("w"))
console.log(a)
console.log(c)
// ==================================================
// CHALLENGE 4 — FINISH A TASK (STRETCH)
// ==================================================

let todo: string[] = ["wash", "cook", "read"];
let done: string[] = ["sleep"];
let finishedIndex: number = 1;

// REQUIREMENTS:
// [ ] Combine todo and done into a new array (todo first).
// [ ] Print the combined array.
// [ ] Identify the task at finishedIndex.
// [ ] Create remaining without the finished task.
// [ ] Print remaining.
// [ ] Create newDone with the finished task added.
// [ ] Print newDone.
// [ ] Print the original todo to confirm it is unchanged.
// [ ] Do NOT use methods that mutate the original arrays.

// EXPECTED OUTPUT:
// wash, cook, read, sleep
// wash, read
// sleep, cook
// wash, cook, read
let todos:string[]=[...todo]
let combined=todos.concat(done)
console.log(combined)
console.log(todos[1])
todos.splice(1,1)
console.log("Remaining:",todos)
done=[...done, todo[1]]
console.log(done)
console.log("Originaltodo:",todo)