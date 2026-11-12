
// ==================================================
// DAY 18 — TYPESCRIPT EXERCISES
// Topics: filter(), conditions, filter + map, type predicates
// ==================================================


// ==================================================
// MAIN PROJECT — PREMIUM CUSTOMER SELECTOR (CORE)
// ==================================================

type Customer = {
  name: string;
  spent: number;
  years: number;
  active: boolean;
};

const customers: Customer[] = [
  { name: "Ana", spent: 1500, years: 2, active: true },
  { name: "Ben", spent: 300, years: 6, active: true },
  { name: "Cara", spent: 2200, years: 1, active: false },
  { name: "Dan", spent: 800, years: 3, active: true },
  { name: "Eva", spent: 1200, years: 5, active: true },
];

const emails: (string | null)[] = [
  "ana@x.com",
  null,
  "eva@x.com",
  null
];

const activeUsers=customers.filter((cus)=>cus.active===true)
console.log(activeUsers.length+" of "+customers.length)
const premiumUsers=activeUsers.filter((c)=>c.spent>=1000 ||c.years>=5)
console.log(premiumUsers.length)
const info=premiumUsers.map((u)=>u.name+" (spent " +u.spent+ " " +u.years +" years)")
console.log(info)
const pnames=premiumUsers.map((u)=>u.name)
console.log(pnames)
const nnames=customers.filter((c)=> !premiumUsers.includes(c)).map((n)=>n.name)
console.log(nnames)
const vemails=emails.filter((e)=>e!=null)
console.log(vemails)
// REQUIREMENTS:
// [ ] 1. Use filter() to select active customers.
// [ ] 2. Print the active customer count and total customer count.
// [ ] 3. Use filter() to select premium customers.
// [ ] 4. A customer is premium ONLY when:
//         active === true
//         AND
//         (spent >= 1000 OR years >= 5)
// [ ] 5. Print the number of premium customers.
// [ ] 6. Use forEach() to print each premium customer's:
//         - Name
//         - Amount spent
//         - Years as a customer
// [ ] 7. Use map() to create an array of premium customer names.
// [ ] 8. Print the premium names.
// [ ] 9. Use filter() to select customers who are NOT premium.
// [ ] 10. Print the names of non-premium customers.
// [ ] 11. Filter emails to remove null values.
// [ ] 12. Print the remaining email addresses.
// [ ] 13. Keep the original arrays unchanged.

// EXPECTED OUTPUT:
// Active: 4 of 5
// Premium: 3
// - Ana (spent 1500, 2 years)
// - Ben (spent 300, 6 years)
// - Eva (spent 1200, 5 years)
// Names: Ana, Ben, Eva
// Not premium: Cara, Dan
// Emails on file: ana@x.com, eva@x.com


// ==================================================
// CHALLENGE 1 — HOT DAYS (CORE)
// ==================================================

const temps: number[] = [18, 25, 31, 12, 27, 30];

// REQUIREMENTS:
// [ ] 1. Use filter() to keep temperatures >= 25.
// [ ] 2. Print the filtered temperatures.
// [ ] 3. Print how many hot days were found.
// [ ] 4. Use filter() to find temperatures below 0.
// [ ] 5. Print the count of temperatures below 0.

// EXPECTED OUTPUT:
// 25, 31, 27, 30
// 4 hot days
// 0
const reqTemp=temps.filter((t)=>t>=25)
console.log(reqTemp)
console.log(reqTemp.length ,"hot days")
const coldTemp=temps.filter((t)=>t<0)
console.log(coldTemp)

// ==================================================
// CHALLENGE 2 — NAME FILTERS (CORE)
// ==================================================

const names: string[] = ["Anna", "bob", "Cleo", "dave", "Eli"];

// REQUIREMENTS:
// [ ] 1. Use filter() to select names that satisfy BOTH:
//         - Name has at least 4 characters.
//         - First character is uppercase.
// [ ] 2. Print the matching names.
// [ ] 3. Use another filter() to select names ending with:
//         - "e" OR
//         - "i"
// [ ] 4. Print the matching names.

// EXPECTED OUTPUT:
// Anna, Cleo
// dave, Eli

const filtNames=names.filter((n)=>n.length>=4 && n[0]===n[0].toUpperCase())
console.log(filtNames)
const endfilt=names.filter((n)=>n.endsWith('e') || n.endsWith('i'))
console.log(endfilt)
// ==================================================
// CHALLENGE 3 — PENDING ORDERS (STRETCH)
// ==================================================

type Order = {
  id: number;
  total: number;
  shipped: boolean;
  country: string;
};

const orders: Order[] = [
  { id: 1, total: 50, shipped: true, country: "US" },
  { id: 2, total: 120, shipped: false, country: "US" },
  { id: 3, total: 90, shipped: false, country: "CA" },
  { id: 4, total: 300, shipped: false, country: "US" },
  { id: 5, total: 20, shipped: true, country: "CA" },
];

const pendingOrders=orders.filter((ord)=>ord.shipped===false)
const ids = pendingOrders.map((o)=>o.id)
console.log(ids)
const uspendOrd=pendingOrders.filter((o)=>o.country=="US").map((or)=>`#${or.id}`)
console.log(uspendOrd)

const pendingTotalValues=pendingOrders.map((or)=>or.total+"+")
console.log(pendingTotalValues)

// REQUIREMENTS:
// [ ] 1. Use filter() to select orders that are NOT shipped.
// [ ] 2. Use map() to extract their IDs.
// [ ] 3. Print the pending order IDs.
// [ ] 4. Filter orders where BOTH conditions are true:
//         - country === "US"
//         - total >= 100
// [ ] 5. Use map() to format matching IDs with "#".
// [ ] 6. Print the formatted IDs.
// [ ] 7. Extract the total amounts of pending orders.
// [ ] 8. Print pending amounts separated by " + ".
// [ ] 9. Keep the original orders array unchanged.

// EXPECTED OUTPUT:
// 2, 3, 4
// #2 #4
// Pending value: 120 + 90 + 300


// ==================================================
// CHALLENGE 4 — CLEAN THE READINGS (STRETCH)
// ==================================================

const raw: (number | undefined)[] = [
  4,
  undefined,
  9,
  2,
  undefined,
  7
];
const nums=raw.filter((n)=> n!=undefined )
console.log(nums)
const even=nums.filter((n)=>n%2==0)
console.log(even)
const odd=nums.filter((n)=>n%2!=0)
console.log(odd)
const g3=nums.filter((n)=>n>3)
console.log(g3)
const double=g3.map((n)=>n*2)
console.log(double)
// REQUIREMENTS:
// [ ] 1. Use filter() with a type predicate.
// [ ] 2. Remove all undefined values.
// [ ] 3. Store the filtered result in a number[] array.
// [ ] 4. Print the cleaned numbers.
// [ ] 5. Use filter() to select even numbers.
// [ ] 6. Print the even numbers.
// [ ] 7. Use filter() to select odd numbers.
// [ ] 8. Print the odd numbers.
// [ ] 9. Filter numbers greater than 3.
// [ ] 10. Use map() to double those numbers.
// [ ] 11. Print the doubled results.
// [ ] 12. Keep the original raw array unchanged.

// EXPECTED OUTPUT:
// 4, 9, 2, 7
// Evens: 4, 2
// Odds: 9, 7
// 8, 18, 14


// ==================================================
// DAY 18 COMPLETION
// ==================================================

// CORE:
// [ ] Main Project — Premium Customer Selector
// [ ] Challenge 1 — Hot Days
// [ ] Challenge 2 — Name Filters

// STRETCH:
// [ ] Challenge 3 — Pending Orders
// [ ] Challenge 4 — Clean the Readings

// REVIEW CRITERIA:
// - Correct filter() conditions
// - Correct AND (&&) and OR (||) logic
// - Correct use of map() and forEach()
// - Correct TypeScript types
// - Correct type predicate for undefined values
// - Original arrays remain unchanged
// - Functional correctness over cosmetic formatting
