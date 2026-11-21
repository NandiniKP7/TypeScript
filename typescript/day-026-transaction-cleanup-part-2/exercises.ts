// DAY 26 — From Predicate to Typed reduce
// Main project + 4 challenges. Starter data and requirements only.
// Run: npx tsx day26-exercises.ts
// Core first; stretch exercises are optional today.

// MAIN PROJECT — TRANSACTION CLEANUP PART 2 (CORE)
type RawTransaction = {
  id: number;
  account: string;
  amount: number | null;
  kind: string;
};
type Transaction = {
  id: number;
  account: string;
  amount: number;
  kind: string;
};
const raw: (RawTransaction | null)[] = [
  { id: 1, account: "A", amount: 500, kind: "deposit" },
  null,
  { id: 2, account: "B", amount: 200, kind: "deposit" },
  { id: 3, account: "A", amount: null, kind: "withdrawal" },
  { id: 4, account: "A", amount: 120, kind: "withdrawal" },
  { id: 5, account: "B", amount: 15, kind: "fee" },
  null,
  { id: 6, account: "B", amount: 80, kind: "withdrawal" },
  { id: 7, account: "A", amount: 5, kind: "fee" },
];
type Rep={deposits:number, withdrawls:number , fees:number ,balance:number}
type ByA={ [account:string]:Rep}
// TODO: Reuse your Day 25 predicates to create a clean Transaction[].
// TODO: Produce a typed summary object containing total deposits, withdrawals,
// fees and other amounts, using one reduce. Calculate net change.
// TODO: Produce a nested summary object with the same totals for each account.
// Discover account names from the data; do not hard-code A or B.
// TODO: Print the balance for each account (deposits - withdrawals - fees).
// TODO: Identify the largest withdrawal, including its ID and amount.
// TODO: Calculate fees as a percentage of deposits (one decimal).
// Expected:
// Deposits: 700; Withdrawals: 200; Fees: 20; Other: 0
// Net change: 480
// A: deposits 500, withdrawals 120, fees 5, balance 375
// B: deposits 200, withdrawals 80, fees 15, balance 105
// Largest withdrawal: #4 (120)
// Fees are 2.9% of deposits

function cleanTransaction(t:RawTransaction | null):t is Transaction
{
  return t!==null && t.amount!==null
}
const cleanTransactions=raw.filter(cleanTransaction)
const deposits=cleanTransactions.filter(d=>d.kind=="deposit").reduce((acc,t)=>acc+t.amount,0)
console.log("Deposits:",deposits)
const withdrawals=cleanTransactions.filter(d=>d.kind=="withdrawal").reduce((acc,t)=>acc+t.amount,0)
console.log("Withdrawals:",withdrawals)
const fees=cleanTransactions.filter(d=>d.kind=="fee").reduce((acc,t)=>acc+t.amount,0)
console.log("Fees:",fees)
console.log("Net Change:",deposits-withdrawals-fees)

const filtCat=cleanTransactions.reduce<ByA>((acc,record)=>{
  const key=record.account
  if(acc[key]===undefined)
  {
    acc[key]={deposits:0 ,withdrawls:0, fees:0 ,balance:0}
  }
  const g= acc[key]
  if (record.kind === "deposit") {
    g.deposits += record.amount;
  } else if (record.kind === "withdrawal") {
    g.withdrawls += record.amount;
  } else if (record.kind === "fee") {
    g.fees += record.amount;
  }

  g.balance = g.deposits - g.withdrawls - g.fees;

  return acc;
}, {});

console.log(filtCat);
// CHALLENGE 1 — ORDER TOTALS (CORE, EASY)
type Order = { status: "paid" | "pending"; amount: number };
type ordSummary = { paid: number; pending: number };
const orders: Order[] = [
  { status: "paid", amount: 40 },
  { status: "pending", amount: 15 },
  { status: "paid", amount: 25 },
];
// TODO: Use one typed reduce to produce an object with both status totals.

const sum = orders.reduce<ordSummary>(
  (acc, ord) => {
    if (ord.status == "paid") {
      acc.paid = acc.paid + ord.amount;
    } else {
      acc.pending = acc.pending + ord.amount;
    }
    return acc;
  },
  { paid: 0, pending: 0 },
);
// Expected: { paid: 65, pending: 15 }

// CHALLENGE 2 — BOOK SEARCH (CORE)
type Book = { title: string; genre: string; pages: number };
const books: Book[] = [
  { title: "Orbit", genre: "science", pages: 120 },
  { title: "River", genre: "fiction", pages: 90 },
  { title: "Atoms", genre: "science", pages: 180 },
];

function filterCat(b: Book, genre: string): boolean {
  return b.genre === genre;
}
const selected=books.filter(p=>filterCat(p,'science'))
console.log(selected.map(p=>p.title))
console.log(selected.reduce((acc,y)=>acc+y.pages,0))
// TODO: Write a reusable boolean function accepting a book and a genre.
// Use it with filter to find science books, then calculate their total pages.
// Expected: Orbit, Atoms; Total pages: 300

// CHALLENGE 3 — DELIVERY SUMMARY (STRETCH)
type Delivery = { city: string; parcels: number | null };
type DeliverySumary={count:number ;totalParcels:number}
type ByCity={[city:string]:DeliverySumary}
const deliveries: (Delivery | null)[] = [
  { city: "Columbus", parcels: 4 },
  null,
  { city: "Cleveland", parcels: 3 },
  { city: "Columbus", parcels: 6 },
  { city: "Dayton", parcels: null },
  { city: "Cleveland", parcels: 0 },
];
function isClean(d:Delivery|null):d is Delivery
{
  return d!==null && d.parcels!==null
}
const cleanDeliveries=deliveries.filter(isClean)
const byCity=cleanDeliveries.reduce<ByCity>((acc,r)=>{
  const key=r.city
  if(acc[key]===undefined)
  {
    acc[key]={count:0, totalParcels:0}
  }
  const group=acc[key];
  group.count+=1;
  group.totalParcels=group.totalParcels+(r?.parcels ?? 0);
  return acc;
},{ })


// TODO: Use a named type predicate to retain only deliveries with numeric parcels.
// Zero is valid. Use typed reduce to make a nested summary per city,
// containing delivery count and total parcels. Do not hard-code city names.
// Expected:
// Columbus: { count: 2, totalParcels: 10 }
// Cleveland: { count: 2, totalParcels: 3 }



// CHALLENGE 4 — GAME SCORES (STRETCH)
type GameScore = { team: "red" | "blue"; points: number };
type finalGame={red:number ,blue:number}
const scores: GameScore[] = [
  { team: "red", points: 3 },
  { team: "blue", points: 5 },
  { team: "red", points: 2 },
];
const initialScores = { red: 0, blue: 0 };
const finalScores=scores.reduce<finalGame>((acc,t)=>{
  if(t.team=="red")
  {
    acc.red=acc.red+t.points
  }
  else{
    acc.blue=acc.blue+t.points
  }
  return acc;
},{red:0 ,blue:0})
// TODO: Calculate both team totals using typed reduce and new-object updates
// (object spread). Keep initialScores unchanged. This practises immutable updates.
// Expected: { red: 5, blue: 5 }
// initialScores remains { red: 0, blue: 0 }
