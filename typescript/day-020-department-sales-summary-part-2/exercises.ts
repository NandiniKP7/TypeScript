
 // ==================================================
 // DAY 20 — REDUCE() WITH CONDITIONS AND OBJECTS
 // ==================================================


 // ==================================================
 // MAIN PROJECT — DEPARTMENT SALES SUMMARY (PART 2)
 // ==================================================

 type Sale = {
   department: string;
   rep: string;
   amount: number;
   refunded: boolean;
 };

 type Totals = { [key: string]: number };

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

 // REQUIREMENTS:
 // [ ] 1. Filter sales to keep only non-refunded sales.
 // [ ] 2. Print the number of valid sales.
 // [ ] 3. Use reduce() to calculate the valid sales total.
 // [ ] 4. Calculate the total amount of refunded sales.
 // [ ] 5. Use reduce() to group valid sales amounts by department.
 // [ ] 6. Store department totals in a Totals object.
 // [ ] 7. Print each department and its total.
 // [ ] 8. Use another reduce() to count valid sales per rep.
 // [ ] 9. Store rep counts in a Totals object.
 // [ ] 10. Print each rep and their sales count.
 // [ ] 11. Keep the original sales array unchanged.

 // EXPECTED OUTPUT:
 // Valid sales: 7, total 3920
 // Refunded total: 300
 // By department:
 //   Electronics: 2600
 //   Clothing: 950
 //   Toys: 370
 // Sales per rep:
 //   Ana: 2
 //   Ben: 1
 //   Cara: 2
 //   Eli: 1
 //   Fay: 1
const filtSales =sales.filter((s)=>s.refunded===false)
const totalSales=filtSales.reduce((s,n)=>s+n.amount,0)
console.log("Valid Sales:",filtSales.length +" ,"+ "Total:", totalSales)
const filtrefun =sales.filter((s)=>s.refunded===true)
const filtrefund=filtrefun.reduce((s,n)=>s+n.amount,0)
console.log("Refunded total: ", filtrefund)
const electronics=filtSales.reduce((s,n)=>{if(n.department=="Electronics" ){ s=s+n.amount} return s},0)
  console.log("Electronics:",electronics)
const Clothing=filtSales.reduce((s,n)=>{if(n.department=="Clothing"){ s=s+n.amount} return s},0)
  console.log("Clothing:",Clothing)
const Toys=filtSales.reduce((s,n)=>{if(n.department=="Toys"){ s=s+n.amount} return s},0)
  console.log("Toys:",Toys)
const RepTotals =filtSales.reduce((s,n)=>{
  const key=n.rep
 if (s[key] === undefined) {
  s[key] = 0;
 }
 s[key]=s[key]+1
  return s
},{} as Totals) 
console.log(RepTotals)
 // ==================================================
 // CHALLENGE 1 — CONDITIONAL TOTALS (CORE)
 // ==================================================

 const numbers: number[] = [3, 10, 7, 20, 15, 8];

 // REQUIREMENTS:
 // [ ] 1. Use reduce() to sum numbers >= 10.
 // [ ] 2. Use reduce() to count even numbers.
 // [ ] 3. Use reduce() to sum odd numbers.
 // [ ] 4. Use one separate reduce() for each calculation.
 // [ ] 5. Do not use filter().

 // EXPECTED OUTPUT:
 // Big sum: 45
 // Even count: 3
 // Odd sum: 25

const bigSum:number=numbers.filter((n)=>n>=10).reduce((sum,n)=>sum+n,0)
console.log(" Big sum: ", bigSum)
const evenfilt=numbers.reduce((sum,n)=>{if(n%2==0){return sum+1} return sum },0)
console.log(evenfilt)
const oddfilt=numbers.filter(n=>(n%2!=0))
const oddsum=oddfilt.reduce((sum,n)=>sum+n,0)
console.log("odd sum:",oddsum)

 // ==================================================
 // CHALLENGE 2 — LETTER COUNTER (CORE)
 // ==================================================

 const word: string = "mississippi";

 // REQUIREMENTS:
 // [ ] 1. Convert the word into an array of characters.
 // [ ] 2. Use reduce() to count occurrences of each letter.
 // [ ] 3. Store counts in a Totals object.
 // [ ] 4. Start reduce() with an empty object.
 // [ ] 5. Use for...in to print each letter and its count.

 // EXPECTED OUTPUT:
 // m: 1
 // i: 4
 // s: 4
 // p: 2

const letters = word.split("");
const mCount=letters.reduce((sum,n)=>{if(n=="m"){ return sum+1} return sum},0)
  console.log("M:",mCount)
const iCount=letters.reduce((sum,n)=>{if(n=="i"){ return sum+1} return sum},0)
  console.log("i:",iCount)
const sCount=letters.reduce((sum,n)=>{if(n=="s"){ return sum+1} return sum},0)
  console.log("s:",sCount)
const pCount=letters.reduce((sum,n)=>{if(n=="p"){ return sum+1} return sum},0)
  console.log("p:",pCount)
 // ==================================================
 // CHALLENGE 3 — WHO PAID? (STRETCH)
 // ==================================================

 type Order = {
   customer: string;
   total: number;
   paid: boolean;
 };

 const orders: Order[] = [
   { customer: "Ana", total: 40, paid: true },
   { customer: "Ben", total: 25, paid: false },
   { customer: "Ana", total: 60, paid: true },
   { customer: "Ben", total: 15, paid: true },
   { customer: "Cara", total: 90, paid: false },
 ];

 // REQUIREMENTS:
 // [ ] 1. Filter orders to keep only paid orders.
 // [ ] 2. Use reduce() to group paid totals by customer.
 // [ ] 3. Store grouped totals in a Totals object.
 // [ ] 4. Print each customer and their total paid amount.
 // [ ] 5. Filter orders to keep only unpaid orders.
 // [ ] 6. Use reduce() to calculate the unpaid total.
 // [ ] 7. Keep the original orders unchanged.

 // EXPECTED OUTPUT:
 // Ana paid 100
 // Ben paid 15
 // Unpaid: 115

 const filOrd=orders.filter((ord)=>ord.paid===true)
 const BenPaid =filOrd.reduce((s,n)=>{if(n.customer=="Ben"){ s=s+n.total} return s},0)
console.log(BenPaid)
 const AnnaOrd=filOrd.filter((n)=>n.customer=="Ana")
 const AnnaSum=AnnaOrd.reduce((s,n)=>s+n.total,0)
 console.log(AnnaSum)
 const unpaidfilt=orders.filter((ord)=>ord.paid===false)
 const unpaidSum=unpaidfilt.reduce((s,n)=>s+n.total,0)
 console.log(unpaidSum)
 // ==================================================
 // CHALLENGE 4 — BUDGET REPORT (STRETCH)
 // ==================================================

 type Tx = {
   category: string;
   amount: number;
   type: "income" | "expense";
 };

 const transactions: Tx[] = [
   { category: "food", amount: 30, type: "expense" },
   { category: "salary", amount: 2000, type: "income" },
   { category: "rent", amount: 900, type: "expense" },
   { category: "food", amount: 45, type: "expense" },
   { category: "gift", amount: 100, type: "income" },
   { category: "food", amount: 25, type: "expense" },
 ];

 // REQUIREMENTS:
 // [ ] 1. Filter transactions to select income.
 // [ ] 2. Use reduce() to calculate total income.
 // [ ] 3. Filter transactions to select expenses.
 // [ ] 4. Use reduce() to calculate total expenses.
 // [ ] 5. Calculate balance = income - expenses.
 // [ ] 6. Print income, expenses, and balance.
 // [ ] 7. Use reduce() to group expenses by category.
 // [ ] 8. Store grouped amounts in a Totals object.
 // [ ] 9. Use for...in to print each category and total.
 // [ ] 10. Keep original transactions unchanged.

 // EXPECTED OUTPUT:
 // Income: 2100
 // Expenses: 1000
 // Balance: 1100
 // food: 100
 // rent: 900

 const income=transactions.filter((n)=>n.type=="income")
 const intot=income.reduce((s,n)=>s+n.amount,0)
 console.log(intot)
 const expenses=transactions.filter((n)=>n.type=="expense")
 const exptot=expenses.reduce((s,n)=>s+n.amount,0)
 console.log(exptot)
 const balance=intot-exptot
 console.log(balance)
 const food=transactions.filter((n)=>n.category=="food")
const foodSum=food.reduce((s,n)=>s+n.amount,0)
console.log(foodSum)
 const rent=transactions.filter((n)=>n.category=="rent")
const rentSum=rent.reduce((s,n)=>s+n.amount,0)
console.log(rentSum)
 // ==================================================
 // DAY 20 COMPLETION TRACKER
 // ==================================================

 // CORE:
 // [ ] Main Project — Department Sales Summary
 // [ ] Challenge 1 — Conditional Totals
 // [ ] Challenge 2 — Letter Counter

 // STRETCH:
 // [ ] Challenge 3 — Who Paid?
 // [ ] Challenge 4 — Budget Report
