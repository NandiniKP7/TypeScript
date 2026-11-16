// DAY 22 — find(), findIndex(), some(), every()
// Write your solutions below each section. No solutions are included.

// MAIN PROJECT — PRODUCT CATALOG SEARCH

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

// TODO:
// [ ] Find product id 3 and print name and price.
// [ ] Find product id 99 and print "not found" when missing.
// [ ] Find first furniture product.
// [ ] Find index of Desk; find index of Sofa (-1).
// [ ] Check if any product is out of stock.
// [ ] Check if any product costs over 2000.
// [ ] Check if every product costs above 1.
// [ ] Check if every product is in stock.
// [ ] Print out-of-stock product names, separated by commas.
// Expected:
// Product 3: Headphones ($150)
// Product 99: not found
// First furniture: Desk
// Desk is at index 3
// Index of Sofa: -1
// Any out of stock? true
// Any over 2000? false
// All priced above 1? true
// All in stock? false
// Out of stock: Phone, Chair

const p3=products.find((p)=>p.id==3)
console.log(p3?.name+" "+p3?.price)
const p99=products.find((p)=>p.id==99)
if(p99!=undefined)
{
  console.log("Product found")
}
else{
  console.log("Product not found")
}
const furnitureP=products.find((p)=>p.category=="furniture")
console.log("First Product:",furnitureP?.name)
const deskIndex=products.findIndex((p)=>p.name=="Desk")
const sofaIndex=products.findIndex((p)=>p.name=="sofa")
const outofStock=products.some((p)=>p.stock==0)
const p200=products.some((p)=>p.price>2000)
const p1=products.every((p)=>p.price>1)
const allstock=products.every((p)=>p.stock>0)
const ous=products.filter((p)=>p.stock==0)

// CHALLENGE 1 — FIRST HOT DAY (CORE)
const temperatures: number[] = [12, 18, 25, 31, 22];
// TODO: First temperature >=25; its index; search for temperature <0.
// Expected: First hot: 25 | At position: 2 | No freezing days
const temp25=temperatures.find((t)=>t>=25)
console.log("First hot:",temp25)
const tempindex=temperatures.findIndex((t)=>t>=25)
console.log("At position:",tempindex)
const temp0=temperatures.some((t)=>t<0)
if(temp0)
{
  console.log("Freezing days")
}
else{
  console.log("No Freezing days")

}

// CHALLENGE 2 — YES OR NO (CORE)
const names: string[] = ["Ana", "Ben", "Cara", "Dan"];
// TODO: Any starts with C? All length >=3? All length >=4?
// Any name Eva? Index of Dan?
// Expected (five lines): true, true, false, false, 3
const startsWithC=names.some((n)=>n[0]=="C")
console.log("StartsWithC:",startsWithC)
const len=names.every((n)=>n.length >=3)
console.log("lenof greaterthan3:",len)
const len4=names.every((n)=>n.length >=4)
console.log("lenof greaterthan4:",len4)
const evan=names.find((n=>n=="Eva"))
console.log(evan)
if(evan==undefined)
{
  console.log(false)
}
const index=names.findIndex((i)=>i=="Dan")
console.log(index)

// CHALLENGE 3 — TASK FINDER (STRETCH)
type Task = { id: number; title: string; done: boolean };
const tasks: Task[] = [
  { id: 1, title: "Write", done: true },
  { id: 2, title: "Test", done: false },
  { id: 3, title: "Ship", done: false },
];
// TODO: First unfinished task; all done? any done? index of id 3;
// search id 9 and handle missing.
// Expected: Next task: Test | All done? false | Anything done? true
// Task 3 is at index 2 | Task 9 missing

const unfinishedTask=tasks.find((t)=>t.done===false)
console.log(unfinishedTask)
const alldone=tasks.every((t)=>t.done===true)
const anydone=tasks.some((t)=>t.done===true)
const id3=tasks.findIndex((t)=>t.id==3)
const id9=tasks.findIndex((t)=>t.id==9)
if(id9!=-1)
{
  console.log("Task 9 found")
}
else
{
 console.log("Task 9 not found") 
}
// CHALLENGE 4 — SEAT BOOKING (STRETCH)
type Seat = { row: number; number: number; taken: boolean };
const seats: Seat[] = [
  { row: 1, number: 1, taken: true },
  { row: 1, number: 2, taken: true },
  { row: 2, number: 1, taken: true },
  { row: 2, number: 2, taken: false },
  { row: 3, number: 1, taken: false },
  { row: 3, number: 2, taken: false },
];
// TODO: First free seat and its index; theatre full? row 1 full?
// row 3 empty (none taken)? number of free seats?
// Expected: First free seat: row 2, seat 2 | Index: 3 | Full? false
// Row 1 full? true | Row 3 empty? true | Free seats: 3

const firstEmpty=seats.find((s=>s.taken===false))
const firstEmptyInd=seats.findIndex((s=>s.taken===false))
const full=seats.every((s=>s.taken===true))
const row1filt=seats.filter((s)=>s.row==1)
const row1=row1filt.every((s)=>s.taken==true)
const row3filt=seats.filter((s)=>s.row==3)
const row3=row3filt.every((s)=>s.taken==false)
const row3count=row3filt.length