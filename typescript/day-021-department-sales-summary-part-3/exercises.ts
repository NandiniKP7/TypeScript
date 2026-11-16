// ==================================================
// DAY 21 — REDUCE(), PART 3
// ==================================================

// ==================================================
// MAIN PROJECT — DEPARTMENT SALES SUMMARY (PART 3)
// ==================================================

type Sale = {
  department: string;
  rep: string;
  amount: number;
  refunded: boolean;
};

type DeptStats = {
  count: number;
  total: number;
  best: number;
  bestRep: string;
};

type StatsByDept = {
  [department: string]: DeptStats;
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

const actSales = sales.filter((sale) => sale.refunded == false);
const electronicsDept = actSales.filter(
  (sale) => sale.department == "Electronics",
);
const sta:DeptStats={
  count: 0,
  total: 0,
  best: 0,
  bestRep: ""
}
const dept:StatsByDept=actSales.reduce((s,n)=>{
  const key=n.department
  if(s[key]===undefined)
  {
    s[key]={
  count: 0,
  total: 0,
  best: 0,
  bestRep: ""
}
  }
  s[key].count+=1,
  s[key].total+=n.amount
  if(n.amount>s[key].best)
  {
    s[key].best=n.amount
    s[key].bestRep=n.rep
  }
  return s
},{} as StatsByDept)
console.log(dept)
const elSale:DeptStats=electronicsDept.reduce((s,n)=>
{
  s.count+=1;
  s.total+=n.amount; 

  if(n.amount>s.best)
  {
    s.best=n.amount
    s.bestRep=n.rep
  }
  return s
},sta)
console.log(elSale)

const bestSale=actSales.reduce((s,n)=>{
  if(n.amount>s.amount)
  {
    return n
  }
  return s
}, actSales[0])

console.log(bestSale)

const longRep=actSales.reduce((sales,n)=>{

  if(n.rep.length>sales.length)
  {
    return n.rep
  }
  return sales
},"")
console.log(longRep)
const refSales = sales.filter((sale) => sale.refunded == true);
const amount =refSales.reduce((s,n)=>s=s+n.amount,0)
console.log(amount)
// REQUIREMENTS:
// [ ] 1. Filter out refunded sales.
// [ ] 2. Use ONE reduce() to create a StatsByDept object.
// [ ] 3. For each department, track:
//         - count: number of valid sales
//         - total: sum of valid sales amounts
//         - best: highest single sale amount
//         - bestRep: representative for that sale
// [ ] 4. Initialize each department when first encountered.
// [ ] 5. Print each department's:
//         - Name
//         - Sales count
//         - Total
//         - Average (total / count, 2 decimals)
//         - Best sale and representative
// [ ] 6. Find the department with the highest total.
// [ ] 7. Print its name and total.
// [ ] 8. Find the highest individual valid sale.
// [ ] 9. Print its amount, representative and department.
// [ ] 10. Find the representative with the longest name.
// [ ] 11. Print the representative's name.
// [ ] 12. Count refunded sales.
// [ ] 13. Calculate the refunded total amount.
// [ ] 14. Print the refund count and total.
// [ ] 15. Keep the original sales array unchanged.

// EXPECTED OUTPUT:
// DEPARTMENT SALES SUMMARY
// Electronics: 3 sales, total 2600, average 866.67, best 1200 (Ana)
// Clothing: 2 sales, total 950, average 475.00, best 500 (Cara)
// Toys: 2 sales, total 370, average 185.00, best 220 (Fay)
// Top department: Electronics (2600)
// Best single sale: 1200 by Ana (Electronics)
// Longest rep name: Cara
// Refunded: 1 sale, 300

// ==================================================
// CHALLENGE 1 — HIGH, LOW, RANGE (CORE)
// ==================================================

const numbers: number[] = [14, 22, 9, 31, 18];

// REQUIREMENTS:
// [ ] 1. Use reduce() to find the highest number.
// [ ] 2. Use reduce() to find the lowest number.
// [ ] 3. Calculate range = highest - lowest.
// [ ] 4. Print all three results.

// EXPECTED OUTPUT:
// High: 31
// Low: 9
// Range: 22

const High = numbers.reduce((high, n) => {
  if (n > high) {
    return n;
  }
  return high;
}, -Infinity);

console.log("High", High);

const Low = numbers.reduce((low, n) => {
  if (n < low) {
    return n;
  }
  return low;
});
console.log("Low:", Low);
console.log("Range:", High - Low);
// ==================================================
// CHALLENGE 2 — WORD RECORDS (CORE)
// ==================================================
const emp: string[] = [];
const words: string[] = ["tea", "coffee", "milk", "lemonade", "juice"];
const longest = words.reduce((long, w) => {
  if (w.length > long.length) {
    emp.push(w);
    return w;
  }
  emp.push(long);
  return long;
}, "");
console.log("Longest:", longest);
console.log(emp.join(" > "));
const shortest = words.reduce((short, w) => {
  if (w.length < short.length) {
    return w;
  }
  return short;
});
console.log("Shortest:", shortest);
console.log(emp);
// REQUIREMENTS:
// [ ] 1. Use reduce() to find the longest word.
// [ ] 2. Use reduce() to find the shortest word.
// [ ] 3. Create an empty string[] for tracing.
// [ ] 4. Use reduce() to track the longest word so far.
// [ ] 5. After each word, push the current longest
//         word into the trace array.
// [ ] 6. Print the longest and shortest words.
// [ ] 7. Print the trace in order, separated by " > ".

// EXPECTED OUTPUT:
// Longest: lemonade
// Shortest: tea
// tea > coffee > coffee > lemonade > lemonade

// ==================================================
// CHALLENGE 3 — TOP PLAYER (STRETCH)
// ==================================================

type Player = {
  name: string;
  points: number;
};

const players: Player[] = [
  { name: "Ana", points: 12 },
  { name: "Ben", points: 30 },
  { name: "Cara", points: 21 },
  { name: "Dan", points: 30 },
];

const emptyPlayers: Player[] = [];

// REQUIREMENTS:
// [ ] 1. Use reduce() to find the player with
//         the highest points.
// [ ] 2. If points are tied, keep the FIRST player.
// [ ] 3. Print the winner's name and points.
// [ ] 4. Use the same reduce logic on emptyPlayers.
// [ ] 5. Return null when no player exists.
// [ ] 6. Print "No players" for an empty array.
// [ ] 7. Use reduce() to calculate total points.
// [ ] 8. Calculate winner's percentage of all points.
// [ ] 9. Print percentage with 1 decimal place.
// [ ] 10. Handle null before accessing winner properties.

// EXPECTED OUTPUT:
// Winner: Ben with 30
// No players
// Share of winner: 32.3%

const start: Player = { name: "", points: 0 };
const win: Player = players.reduce((sc, n) => {
  if (n.points > sc.points) {
    return n;
  }
  return sc;
}, start);
console.log("Winner:", win);
if (players.length == 0) {
  console.log("No players");
}
const total = players.reduce((sc, n) => (sc = sc + n.points), 0);
const winner = (win.points / total) * 100;
console.log(winner.toFixed(1) + "%");

// ==================================================
// CHALLENGE 4 — SENSOR STATISTICS (STRETCH)
// ==================================================

type Stats = {
  count: number;
  total: number;
  min: number;
  max: number;
};

const readings: number[] = [21, 18, 25, 30, 16, 22];
const starts: Stats = {
  count: 0,
  total: 0,
  min: Infinity,
  max: 0,
};
const req1: Stats = readings.reduce((s, n) => {
  s.count += 1;
  s.total += n;
  if (n > s.max) {
    s.max = n;
  }
  if (n < s.min) {
    s.min = n;
  }
  return s;
}, starts);

console.log(req1);
const aboveAvg = starts.total / starts.count;
console.log(aboveAvg);
const read = readings.filter((n) => n > aboveAvg);
console.log(read);
// REQUIREMENTS:
// [ ] 1. Use ONE reduce() to calculate all statistics.
// [ ] 2. Start with an object containing:
//         - count
//         - total
//         - min
//         - max
// [ ] 3. Update count for every reading.
// [ ] 4. Update total for every reading.
// [ ] 5. Update min when a smaller value is found.
// [ ] 6. Update max when a larger value is found.
// [ ] 7. Print total count.
// [ ] 8. Calculate average = total / count.
// [ ] 9. Print average with 1 decimal place.
// [ ] 10. Print minimum and maximum.
// [ ] 11. Filter readings above the average.
// [ ] 12. Print those readings.
// [ ] 13. Keep original readings unchanged.

// EXPECTED OUTPUT:
// Count: 6
// Average: 22.0
// Min: 16, Max: 30
// Above average: 25, 30

// ==================================================
// DAY 21 COMPLETION TRACKER
// ==================================================

// CORE:
// [ ] Main Project — Department Sales Summary
// [ ] Challenge 1 — High, Low, Range
// [ ] Challenge 2 — Word Records

// STRETCH:
// [ ] Challenge 3 — Top Player
// [ ] Challenge 4 — Sensor Statistics
