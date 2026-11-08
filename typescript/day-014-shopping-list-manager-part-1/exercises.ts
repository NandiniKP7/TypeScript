

// Day 14 — Full Requirements Checklist
// Main Project: Shopping List Manager
// - [ ] Start with ["milk", "eggs", "bread"].
// - [ ] Add "coffee" to the beginning using unshift().
// - [ ] Add "apples" to the end using push().
// - [ ] Print the list and its length (5).
// - [ ] Remove the first item using shift().
// - [ ] Remove the last item using pop().
// - [ ] Print both removed items.
// - [ ] Rename "milk" to "oat milk".
// - [ ] Check whether "eggs" and "tea" exist using includes().
// - [ ] Sort [3.5, 12, 1.25, 8] numerically from low to high.
// - [ ] Print the cheapest and most expensive prices.
let list: string[] = ["milk", "eggs", "bread"];
console.log("Start:", list.join(", "));
list.unshift("coffee");
list.push("apples");
console.log("Added:", list.join(", "));
console.log("Items:", list.length);
const first = list.shift();
const last = list.pop();
console.log("Removed:", first, "and", last);
list[0] = "oat milk";
console.log("Renamed:", list.join(", "));
console.log("Need eggs?", list.includes("eggs"));
console.log("Need tea?", list.includes("tea"));
let nums: number[] = [3.5, 12, 1.25, 8];
function numbers(a: number, b: number): number {
  return a - b;
}
nums.sort(numbers);
console.log("Prices low to high:", nums.join(", "));
console.log("Cheapest:", nums[0]);
console.log("Most expensive:", nums[nums.length - 1]);

// Challenge 1 — Build a List
// - [x] Start with ["red", "green"].
// - [x] Add "black" to the beginning.
// - [x] Add "blue" to the end.
// - [ ] Print using join(" | ").
// - [ ] Print the number of items.

let color: string[] = ["red", "green"];
color.unshift("black");
color.push("blue");
console.log(color.join(" | "));
console.log(color.length);

// Challenge 2 — Serving a Queue
// - [x] Start with ["Ana", "Ben", "Cara", "Dan"].
// - [x] Print each person's name and the remaining count.
// - [ ] Use shift() to remove each person.
// - [ ] Continue until the queue is empty.
let names: string[] = ["Ana", "Ben", "Cara", "Dan"];

while (names.length > 0) {
  const next = names.shift();
  console.log("Serving " + next + ", " + names.length + " waiting");
}

// Challenge 3 — Sort Surprise
// - [x] Start with [40, 100, 9, 25].
// - [x] Sort using plain sort().
// - [x] Sort numerically using a comparison function.
// - [ ] Print both results using join(", ").
let y: number[] = [40, 100, 9, 25];

console.log(y.sort().join(", "));

function myNumber(a: number, b: number): number {
  return a - b;
}

console.log(y.sort(myNumber).join(", "));

// Challenge 4 — What Am I Missing?
// - [x] Start with ["milk", "eggs", "tea", "milk", "jam"].
// - [x] Build a unique list without duplicates.
// - [ ] Print the unique list using join(", ").
// - [ ] Create have = ["eggs"].
// - [ ] Create a missing array.
// - [ ] Add only unique items that are not in have.
// - [ ] Sort missing alphabetically.
// - [ ] Print Missing: jam, milk, tea.

let xy: string[] = ["milk", "eggs", "tea", "milk", "jam"];
let yz: string[] = [];
let xz: string[] = [];
let have: string[] = ["eggs"];

for (let i = 0; i < xy.length; i++) {
  if (!yz.includes(xy[i])) {
    yz.push(xy[i]);
  }
}

console.log(yz.join(", "));

for (let i = 0; i < yz.length; i++) {
  if (!have.includes(yz[i])) {
    xz.push(yz[i]);
  }
}

xz.sort();
console.log("Missing:", xz.join(", "));
