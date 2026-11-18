// Day 24 — TypeScript Exercises
// Topic: flat(), flatMap(), and nested arrays
// Complete the TODOs yourself. No solutions included.

// MAIN PROJECT — COMPANY SKILLS INDEX (CORE)
type Employee = { name: string; skills: string[] };

const staff: Employee[] = [
  { name: "Ana", skills: ["typescript", "css", "html"] },
  { name: "Ben", skills: ["typescript", "sql"] },
  { name: "Cara", skills: ["css", "design", "html"] },
  { name: "Dan", skills: [] },
  { name: "Eva", skills: ["sql", "typescript", "testing"] },
];

// TODO: Count how many nested skill lists there are.
const nestedSkillList =staff.flat()
console.log(nestedSkillList.length)
// TODO: Flatten all skills into one list, preserving duplicates and order.
const s=nestedSkillList.flatMap(s=>s.skills)
console.log(s)
console.log(s.length)
// TODO: Find unique skills and sort them alphabetically.
const uniqueSkills:string[]=[]
for(let i=0;i<s.length;i++)
{
  if(!uniqueSkills.includes(s[i]))
  {
   uniqueSkills.push(s[i])
  }
}
console.log(uniqueSkills.length)
console.log(uniqueSkills.sort())
console.log("People per skill:")
let count=0
for(let i=0;i<uniqueSkills.length;i++)
{
 const count=  staff.filter(s=>s.skills.includes(uniqueSkills[i])).length
 console.log(uniqueSkills[i]+":",count)
}

const tsfilt=staff.filter(s=>s.skills.includes("typescript"))
console.log("TypeScript:",tsfilt.flatMap(s=>s.name))
console.log("No Skills:" ,staff.filter(s=>s.skills.length==0).flatMap(s=>s.name))

// TODO: Count how many people have each skill, listed alphabetically.
// TODO: Create name-skill pairs, count them, and show the first pair.
// TODO: Find employees who know "typescript".
// TODO: Find employees with no listed skills.
// Expected:
// Nested lists: 5
// All skills (11): typescript, css, html, typescript, sql, css, design, html, sql, typescript, testing
// Unique skills (6): css, design, html, sql, testing, typescript
// People per skill:
//   css: 2
//   design: 1
//   html: 2
//   sql: 2
//   testing: 1
//   typescript: 3
// Pairs: 11
// First pair: Ana-typescript
// Knows typescript: Ana, Ben, Eva
// No skills listed: Dan

// CHALLENGE 1 — FLATTEN A GRID (CORE)
const grid: number[][] = [[1, 2, 3], [4, 5], [6]];
// TODO: Flatten and print numbers joined with ", ".
// TODO: Calculate the sum of all numbers.
// TODO: Print number of inner lists and number of flattened values.
// Expected:
// 1, 2, 3, 4, 5, 6
// 21
// 3 6
const num=grid.flat(2)
console.log(num)
const sum=num.reduce((s,t)=>s+t,0)
console.log(sum)
const nested:number[][]=grid
console.log(nested.length)
console.log(num.length)
// CHALLENGE 2 — WORD SPLITTER (CORE)
const sentences: string[] = ["the cat sat", "the dog ran", "a cat ran"];
// TODO: Use flatMap() and split(" ") to produce all words in order.
// TODO: Print the number of words.
// TODO: Print unique words sorted A to Z.
// TODO: Count occurrences of "cat".
// Expected:
// the cat sat the dog ran a cat ran
// Words: 9
// Unique: a, cat, dog, ran, sat, the
// Cat count: 2

const w=sentences.flatMap(w=>w.split(" "))
console.log(w.sort())
console.log(w.length)
const unique:string[]=[]
for(let i=0;i<w.length;i++)
{
  if(!unique.includes(w[i]))
  {
    unique.push(w[i])
  }
}
console.log(unique)
let catcount=0
for(let i=0;i<w.length;i++)
{
  if(w[i]=="cat")
  {
    catcount++
  }
}
console.log(catcount)
// CHALLENGE 3 — DEPTH (STRETCH)
const deep: number[][][] = [[[1, 2], [3]], [[4]], [[5, 6]]];
// TODO: Count items after flat() once.
// TODO: Count numbers after flat(2).
// TODO: Print fully flattened numbers joined with ", ".
// Expected:
// Once: 4
// Twice: 6
// 1, 2, 3, 4, 5, 6
const n=deep.flat()
console.log("Once:",n.length)
const n2=deep.flat(2)
console.log("twice:",n2.length)
console.log(n2)
// CHALLENGE 4 — ORDER LINES (STRETCH)

type Order = { id: number; items: { name: string; qty: number }[] };
const orders: Order[] = [
  { id: 1, items: [{ name: "pen", qty: 3 }, { name: "book", qty: 1 }] },
  { id: 2, items: [{ name: "pen", qty: 2 }] },
  { id: 3, items: [] },
  { id: 4, items: [{ name: "bag", qty: 1 }, { name: "book", qty: 2 }] },
];

const ord=orders.flatMap((t)=>t.items)
console.log(ord)
console.log(ord.length)
console.log(ord.reduce((s,r)=>s+r.qty,0))
const pen=ord.filter(t=>t.name=="pen").reduce((s,t)=>s+t.qty,0)
console.log("pen :",pen)
const book=ord.filter(t=>t.name=="book").reduce((s,t)=>s+t.qty,0)
console.log("Book :",book)
const Bag=ord.filter(t=>t.name=="bag").reduce((s,t)=>s+t.qty,0)
console.log("Bag :",Bag)
// TODO: Flatten all order lines with flatMap().
// TODO: Count lines and sum all quantities.
// TODO: Group total quantity by item name using reduce() into an object;
//       print using for...in.
// TODO: Make labels like "#1 pen" for every line, joined with " | ".
// TODO: Print IDs of orders with no items.
// Expected:
// Lines: 5
// Total quantity: 9
// pen: 5
// book: 3
// bag: 1
// #1 pen | #1 book | #2 pen | #4 bag | #4 book
// Empty orders: 3
