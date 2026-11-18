// Day 23 — TypeScript Exercises
// Complete the TODOs yourself. Keep the original arrays unchanged when sorting.

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
};

const products: Product[] = [
  { id: 1, name: "Laptop", category: "electronics", price: 1200, stock: 5, rating: 4.6 },
  { id: 2, name: "Phone", category: "electronics", price: 800, stock: 0, rating: 4.4 },
  { id: 3, name: "Headphones", category: "electronics", price: 150, stock: 25, rating: 4.1 },
  { id: 4, name: "Desk", category: "furniture", price: 300, stock: 4, rating: 4.7 },
  { id: 5, name: "Chair", category: "furniture", price: 120, stock: 0, rating: 3.9 },
  { id: 6, name: "Notebook", category: "stationery", price: 5, stock: 200, rating: 4.0 },
  { id: 7, name: "Pen", category: "stationery", price: 2, stock: 500, rating: 3.8 },
];

const p=[...products]
const asc=[...products].sort((a,b)=>(a.price-b.price))
for(let i=0; i<asc.length;i++)
{
  console.log(asc[i].name+" : "+asc[i].price)
}
const toprating=[...products].sort((a,b)=>(b.rating-a.rating))
for(let i=0;i<3;i++)
{
  console.log(toprating[i])
}
const elfilt=p.filter(s=>s.category=="electronics" && s.stock>0)
const asce=elfilt.sort((a,b)=>(a.price-b.price))
for(let i=0; i<asce.length;i++)
{
  console.log(asce[i].name+" : "+asce[i].price)
}
const instock= p.filter(p=>p.stock>0)
const total=instock.reduce((s,n)=>s+n.rating,0)
const avgrating=total/instock.length
const orp=[...products].findIndex(p=>p.name=="Laptop")
console.log(orp)
// MAIN PROJECT — PRODUCT CATALOG, PART 2 (CORE)
// TODO: Print all products by price, cheapest first (name and price).
// TODO: Print top 3 rated product names, highest rating first.
// TODO: Print electronics in stock, cheapest first (name and price).
// TODO: Clean search text "  O " with trim() and toLowerCase();
//       find names containing it (case-insensitive), sorted by name.
// TODO: Average rating of in-stock products, rounded to 2 decimals.
// TODO: Total stock value = sum of price * stock for all products.
// TODO: Verify the original products[0].name is still "Laptop".
// Expected:
// By price:
//   Pen: 2
//   Notebook: 5
//   Chair: 120
//   Headphones: 150
//   Desk: 300
//   Phone: 800
//   Laptop: 1200
// Top 3 rated: Desk, Laptop, Phone
// Electronics in stock, cheapest first: Headphones (150), Laptop (1200)
// Search "o": Headphones, Laptop, Notebook, Phone
// Average rating (in stock): 4.24
// Stock value: 12950
// Original first: Laptop

// CHALLENGE 1 — THREE ORDERS (CORE)
const scores: number[] = [40, 100, 9, 25];
const temp=[...scores]
const scoreAsc=temp.sort((a,b)=>a-b)
console.log(scoreAsc)
const scoreDesc=temp.sort((a,b)=>b-a)
console.log(scoreDesc)
console.log(scores)
// TODO: Print ascending, descending, and original order.
//       Join each result with ", ". Do not mutate scores.
// Expected:
// 9, 25, 40, 100
// 100, 40, 25, 9
// 40, 100, 9, 25

// CHALLENGE 2 — NAME SORTING (CORE)
const na: string[] = ["bob", "Cara", "ana", "Dan"];
const names=[...na]
// TODO: Print a plain sort(), localeCompare sort, and length sort.
//       Make a copy each time. Join with ", ".
const lensort= [...na].sort((a,b)=>a.length-b.length)
console.log(lensort)
const plsort=names.sort()
console.log(plsort)
const loc=names.sort((a,b)=>a.localeCompare(b))
console.log(loc)
// Expected:
// Cara, Dan, ana, bob
// ana, bob, Cara, Dan
// bob, ana, Dan, Cara

// CHALLENGE 3 — PAYROLL (STRETCH)
type Employee = { name: string; dept: string; salary: number };
const staff: Employee[] = [
  { name: "Ana", dept: "IT", salary: 5000 },
  { name: "Ben", dept: "HR", salary: 4200 },
  { name: "Cara", dept: "IT", salary: 6100 },
  { name: "Dan", dept: "HR", salary: 3900 },
  { name: "Eva", dept: "IT", salary: 4800 },
];
// TODO: IT employees by salary descending, one "name salary" per line.
// TODO: Top 2 earners overall, joined with " and ".
// TODO: Total HR payroll.
// Expected:
// Cara 6100
// Ana 5000
// Eva 4800
// Top earners: Cara and Ana
// HR payroll: 8100
const itfiltering =staff.filter(s=>s.dept=="IT")
const e=itfiltering.sort((a,b)=>b.salary-a.salary)
for(let i=0;i<e.length;i++)
{
  console.log(e[i].name+" "+e[i].salary)
}
console.log("Top earners:"+e[0].name +"and "+e[1].name)
const hrpayroll=staff.filter((s=>s.dept=="HR")).reduce((s,n)=>s+n.salary,0)
console.log(hrpayroll)
// CHALLENGE 4 — MOVIE NIGHT (STRETCH)
type Movie = { title: string; year: number; genre: string; rating: number };
const mo: Movie[] = [
  { title: "Alpha", year: 2019, genre: "drama", rating: 7.9 },
  { title: "Beta", year: 2021, genre: "action", rating: 6.5 },
  { title: "Gamma", year: 2021, genre: "drama", rating: 8.4 },
  { title: "Delta", year: 2018, genre: "action", rating: 8.1 },
  { title: "Epsilon", year: 2020, genre: "drama", rating: 5.9 },
];
const movies=[...mo]
// TODO: Movies rated >= 7, sorted highest rating first.
// TODO: All movies newest first; tie-break same year by title A-Z.
// TODO: Whether any movie is older than 2019; whether all ratings > 5.
// TODO: Best-rated drama title.
const highratings =movies.sort((a,b)=>b.rating-a.rating)
console.log(highratings.filter(s=>s.rating>=7))
const yearsort = movies.sort((a,b)=>(b.year-a.year) || a.title.localeCompare(b.title))
console.log(yearsort)
const oldmovicecheck= movies.some(s=>s.year<2019)
const movierating = movies.every(s=>s.rating>5)
const dramacat=movies.filter(s=>s.genre=="drama")
const dramasort=dramacat.sort((a,b)=>(b.rating-a.rating))
console.log(dramasort[0].title)
// Expected:
// Good: Gamma (8.4), Delta (8.1), Alpha (7.9)
// 2021 Beta
// 2021 Gamma
// 2020 Epsilon
// 2019 Alpha
// 2018 Delta
// Old movie? true, all above 5? true
// Best drama: Gamma