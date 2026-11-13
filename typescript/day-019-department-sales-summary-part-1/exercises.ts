
// ==================================================
// DAY 19 — REDUCE()
// ==================================================


// ==================================================
// MAIN PROJECT — DEPARTMENT SALES SUMMARY
// ==================================================

type Sale = {
  department: string;
  rep: string;
  amount: number;
  refunded: boolean;
};

const sales: Sale[] = [
  { department: "Electronics", rep: "Ana", amount: 1200, refunded: false },
  { department: "Electronics", rep: "Ben", amount: 800, refunded: false },
  { department: "Clothing", rep: "Cara", amount: 450, refunded: false },
  { department: "Clothing", rep: "Dan", amount: 300, refunded: true },
  { department: "Toys", rep: "Eli", amount: 150, refunded: false },
  { department: "Electronics", rep: "Ana", amount: 600, refunded: false },
  { department: "Toys", rep: "Fay", amount: 220, refunded: false },
  { department: "Clothing", rep: "Cara", amount: 500, refunded: false },
];

const traceAmounts: number[] = [100, 250, 50];

// REQUIREMENTS:
// [ ] 1. Print total number of sales using .length.
// [ ] 2. Use reduce() to calculate total sales amount.
// [ ] 3. Calculate average sale = total / number of sales.
// [ ] 4. Print average with 2 decimal places.
// [ ] 5. Use reduce() to count sales, starting from 0.
// [ ] 6. Use map() to extract all sale amounts.
// [ ] 7. Use reduce() on those amounts to calculate total.
// [ ] 8. Use reduce() on traceAmounts.
// [ ] 9. Inside the reduce callback, print:
//         - Current running sum
//         - Amount being added
// [ ] 10. Print the final traced total.
// [ ] 11. Keep the original sales array unchanged.

// NOTE:
// For today's project, include all sales amounts,
// including the refunded sale.

// EXPECTED OUTPUT:
// Sales count: 8
// Total sales: 4220
// Average sale: 527.50
// Counted with reduce: 8
// Sum via map then reduce: 4220
// sum so far 0, adding 100
// sum so far 100, adding 250
// sum so far 350, adding 50
// Traced total: 400


const salesCount=sales.length
console.log("Sales count:", salesCount)
const Totalsales=sales.reduce((s,t)=>s+t.amount,0)
console.log("Total sales:",Totalsales)
const avgSales=Totalsales/salesCount
console.log(" Average sale:",avgSales)
const amountmap=sales.map((t)=>t.amount)
const reduceTotal=amountmap.reduce((s,t)=>s+t,0)
console.log("Sum via map then reduce: ",reduceTotal)

// 1. Count sales using reduce()
const countedSales = sales.reduce((count, sale) => count + 1, 0);
console.log("Counted with reduce:", countedSales);

// 2. Trace running sum
const tracedTotal = traceAmounts.reduce((sum, amount) => {
  console.log(`sum so far ${sum}, adding ${amount}`);
  return sum + amount;
}, 0);

console.log("Traced total:", tracedTotal);
// ==================================================
// CHALLENGE 1 — SUM, PRODUCT, OFFSET (CORE)
// ==================================================

const numbers: number[] = [3, 8, 2, 5];

// REQUIREMENTS:
// [ ] 1. Use reduce() to calculate the sum.
//         Initial value: 0
// [ ] 2. Use reduce() to multiply all numbers.
//         Choose the correct initial value.
// [ ] 3. Use reduce() to calculate the sum,
//         but start the accumulator at 100.
// [ ] 4. Print all three results.

// EXPECTED OUTPUT:
// 18
// 240
// 118

const tot:number=numbers.reduce((sum,n)=>sum+n, 0)
console.log(tot)
const multiply:number=numbers.reduce((mul,n)=>mul*n,1)
console.log(multiply)
const acc:number=numbers.reduce((sum,n)=>sum+n, 100)
console.log(acc)
// ==================================================
// CHALLENGE 2 — BUILDING TEXT (CORE)
// ==================================================

const words: string[] = ["red", "green", "blue"];

// REQUIREMENTS:
// [ ] 1. Use reduce() to calculate total letters.
//         Initial value: 0
// [ ] 2. Use reduce() to build one string containing
//         the uppercase first letter of each word.
//         Initial value: ""
// [ ] 3. Use reduce() with initial value ""
//         and add each word's length.
// [ ] 4. Print all three results.

// EXPECTED OUTPUT:
// 12
// RGB
// 354

const totalletters=words.reduce((sum,n)=>sum+n.length,0)
console.log(totalletters)
const firstLetters=words.reduce((str,n)=>str+n[0].toUpperCase(),'')
console.log(firstLetters)
const wordl=words.reduce((str,n)=>str+n.length,'')
console.log(wordl)

// IMPORTANT:
// The third result is a string, not a number.


// ==================================================
// CHALLENGE 3 — CART TOTAL (STRETCH)
// ==================================================

type Line = {
  name: string;
  price: number;
  quantity: number;
};

const cart: Line[] = [
  { name: "Pen", price: 2, quantity: 4 },
  { name: "Book", price: 12.5, quantity: 2 },
  { name: "Bag", price: 30, quantity: 1 },
];

// REQUIREMENTS:
// [ ] 1. Use reduce() to calculate total cart price.
//         Each line contributes price * quantity.
// [ ] 2. Print total price with 2 decimal places.
// [ ] 3. Use another reduce() to sum quantities.
// [ ] 4. Print total number of items.
// [ ] 5. Calculate average price per item.
//         Average = total price / total quantity.
// [ ] 6. Print average with 2 decimal places.

// EXPECTED OUTPUT:
// Total: 63.00
// Items: 7
// Average per item: 9.00

const total:number=cart.reduce((item,n)=>item+n.quantity*n.price,0)
console.log("Total:",total)
const items:number=cart.reduce((item,n)=>item+n.quantity,0)
console.log("Items:",items)
const avg=(total/items).toFixed(2)
console.log(avg)

// ==================================================
// CHALLENGE 4 — SCOREBOARD TOTALS (STRETCH)
// ==================================================

type Score = {
  player: string;
  points: number;
};

const scores: Score[] = [
  { player: "Ana", points: 10 },
  { player: "Ben", points: 7 },
  { player: "Ana", points: 5 },
  { player: "Cara", points: 12 },
];

const emptyScores: Score[] = [];

// REQUIREMENTS:
// [ ] 1. Use reduce() to calculate all points.
// [ ] 2. Use filter() to select Ana's scores.
// [ ] 3. Use reduce() to calculate Ana's total points.
// [ ] 4. Calculate points scored by everyone else.
// [ ] 5. Use reduce() on emptyScores, starting at 0.
// [ ] 6. Print the empty array's total.
// [ ] 7. Create an empty string[] named trace.
// [ ] 8. Use reduce() to add all points.
// [ ] 9. During each reduce iteration:
//         - Record the accumulator BEFORE addition.
//         - Record the current points.
//         - Push "<sum>+<points>" into trace.
//         - Return the updated accumulator.
// [ ] 10. Print trace entries separated by " | ".

// EXPECTED OUTPUT:
// All: 34
// Ana: 15
// Others: 19
// Empty total: 0
// 0+10 | 10+7 | 17+5 | 22+12

const all:number=scores.reduce((sc,n)=>sc+n.points,0)
console.log(all)
const annafil=scores.filter((it)=>it.player=="Anna")
const annatotal=annafil.reduce((it,n)=>it+n.points,0)
console.log(annatotal)
console.log(all-annatotal)
// Empty total
const emptyTotal = emptyScores.reduce((sum, s) => sum + s.points, 0);
console.log("Empty total:", emptyTotal);

// Trace running total
const trace: string[] = [];

scores.reduce((sum, s) => {
  trace.push(`${sum}+${s.points}`);
  return sum + s.points;
}, 0);

console.log(trace.join(" | "));
// ==================================================
// DAY 19 COMPLETION TRACKER
// ==================================================

// CORE:
// [ ] Main Project — Department Sales Summary
// [ ] Challenge 1 — Sum, Product, Offset
// [ ] Challenge 2 — Building Text

// STRETCH:
// [ ] Challenge 3 — Cart Total
// [ ] Challenge 4 — Scoreboard Totals
