// Day 25 — TypeScript Exercises
// Topic: Type predicates and narrowing. No solutions included.

// MAIN PROJECT — TRANSACTION CLEANUP (CORE)
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
// TODO: Write named type predicates isPresent and hasAmount.
// TODO: Remove null entries, then entries with null amounts.
// TODO: Count raw, present, kept and dropped entries.
// TODO: Find kept IDs, total amounts and largest amount.
// TODO: Count kept transactions per account.
// TODO: Find rejected IDs (present entries with missing amounts).
// Expected:
// Raw entries: 9
// After removing nulls: 7
// With an amount: 6
// Dropped: 3
// IDs kept: 1, 2, 4, 5, 6, 7
// Total of kept amounts: 920
// Largest kept amount: 500
// Account A: 3 transactions
// Account B: 3 transactions
// Rejected ids: 3

function hasAmount(r:RawTransaction|null):r is Transaction
{
  return r?.amount !==null && r!==null
}

function isPresent(r:RawTransaction|null):r is RawTransaction
{
  return r!==null
}
console.log("Raw Entires:",raw.length)
console.log("After Removingnulls:", raw.filter(isPresent).length)
console.log("has Amount", raw.filter(hasAmount).length)
console.log("dropped", raw.length -raw.filter(hasAmount).length)

const records =raw.filter(hasAmount)
const ids =records.map(r=>r.id)
console.log("IDS kept:", ids)
const totalA =records.reduce((s,r)=> s+r.amount,0)
console.log(totalA)
const sortedRecords=records.sort((a,b)=>b.amount-a.amount)
console.log(sortedRecords[0].amount)
const validAtran=records.filter(t=>t.account=="A").length
console.log("A transactions", validAtran)
const validBtran=records.filter(t=>t.account=="B").length
console.log("B transactions", validBtran)
const tr=raw.filter(isPresent)
const idrej=tr.filter(r=>r.amount==null)
const Rejid=idrej.map(r=>r.id)
console.log("rejectedTransactions",Rejid)

// CHALLENGE 1 — NUMBERS ONLY (CORE)
const mixed: (string | number)[] = ["7", 3, "x", 10, 4];
function isString(x: string | number): x is string {
  return typeof x === "string";
}
console.log(mixed.filter(isString));
function isNumber(x: string | number): x is number {
  return typeof x == "number";
}
console.log(mixed.filter(isNumber));

console.log(mixed.filter(isNumber).reduce((s,t)=>s+t,0));

console.log(mixed.filter(isNumber).map(x=>x.toFixed(1)))
// TODO: Write isNumber(x: string | number): x is number.
// TODO: Filter into a number[], print numbers, sum and numbers formatted to one decimal.
// Expected:
// 3, 10, 4
// 17
// 3.0 10.0 4.0

// CHALLENGE 2 — REAL EMAILS (CORE)
type Contact = { name: string; email: string | null };
const contacts: Contact[] = [
  { name: "Ana", email: "ana@x.com" },
  { name: "Ben", email: null },
  { name: "Cara", email: "cara@x.com" },
];
// TODO: Map to emails, then filter using isEmail(e: string | null): e is string.
// TODO: Print real emails, uppercase emails and missing count.
// Expected:
// ana@x.com, cara@x.com
// ANA@X.COM, CARA@X.COM
// Missing: 1

function isEmailCheck(e: string | null):e is string 
{
   return e!==null
}
const emails =contacts.map(e=>e.email)
const vaildEmails=emails.filter(isEmailCheck)
console.log(vaildEmails)
vaildEmails.forEach(element => {
  console.log(element.toUpperCase())
});
const missingEmails=contacts.filter(c=>c.email==null).length
console.log(missingEmails)

// CHALLENGE 3 — SENSOR CLEANUP (STRETCH)
type Reading = { sensor: string; value: number | null };
type Valid = { sensor: string; value: number };
type Sums = { [k: string]: number };
const readings: (Reading | null)[] = [
  { sensor: "a", value: 20 },
  null,
  { sensor: "b", value: null },
  { sensor: "a", value: 24 },
  { sensor: "b", value: 18 },
  { sensor: "a", value: null },
];
// TODO: Write exists and hasValue type predicates; keep valid readings.

function hasValue(r:Reading|null):r is Valid
{
  return r?.value!==null && r!==null

}
let valid=readings.filter(hasValue).length
let total=readings.length
console.log(valid +" of "+ total)


const aValue = readings.filter(s=>s!==null && s.sensor==="a" && s.value!==null).reduce((s,t)=>s+(t?.value ?? 0), 0)
console.log(aValue)
const bvalue =readings.filter(s=>s!==null && s.value!==null && s.sensor==="b").reduce((s,t)=>s+(t?.value??0),0)
console.log(bvalue)
// TODO: Print valid count and total count.
// TODO: Group total values per sensor using reduce<Sums>.
// Expected:
// Valid: 3 of 6
// a: 44
// b: 18

// CHALLENGE 4 — STOCK CHECK (STRETCH)
type RawItem = { sku: string; qty: number | null; price: number | null };
type Item = { sku: string; qty: number; price: number };
const rawItems: (RawItem | null)[] = [
  { sku: "pen", qty: 10, price: 2 },
  { sku: "book", qty: null, price: 12 },
  null,
  { sku: "bag", qty: 2, price: 30 },
  { sku: "ink", qty: 5, price: null },
  { sku: "cap", qty: 4, price: 5 },
];
// TODO: Write isThere and isComplete type predicates.
// TODO: Print complete SKUs.
// TODO: Calculate stock value (sum of qty * price).
// TODO: Find highest-priced SKU using reduce<Item | null>.
// TODO: Print incomplete SKUs (present but not complete).
// Expected:
// Complete items: pen, bag, cap
// Stock value: 100
// Most expensive: bag
// Incomplete: book, ink

function isThere(r:RawItem|null)
{
  if(r?.qty!==null)
  {
    console.log(r)
  }
}

function isComplete(r:RawItem|null)
{
  if(r?.price!==null &&r?.qty!==null)
  {
    console.log(r)
  }
}

function stockValue(r:RawItem|null) 
{
  if(r?.qty!==null && r?.price!==null)
  {
    console.log((r?.qty ?? 0 )*(r?.price??0))
  }
}

let highestPrice =rawItems.sort((a,b)=>(a?.price ?? 0)-(b?.price??0))
console.log(highestPrice[0]?.sku)

console.log(!(rawItems.filter(isComplete)))
