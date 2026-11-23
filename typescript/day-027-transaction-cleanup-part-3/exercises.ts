// Day 27 — Exercises (starter file, no solutions)
// Run: npx tsx day27-exercises.ts
// Complete the TODOs yourself. The expected outputs are in exercises.md.

// ============================================================
// MAIN PROJECT — Transaction Cleanup and Summary
// ============================================================
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

const withdrawalLimit = 100;

// TODO 1: Use the Day 25 predicates to clean raw into Transaction[].
// TODO 2: Sort a COPY by id and group by account into Transaction[] arrays.
// TODO 3: For each account, reduce its transactions in order using:
//         { balance: number; lines: string[]; rejected: number[] }
//         Deposits add; withdrawals over 100 are rejected; fees and
//         withdrawals of 100 or less subtract.
// TODO 4: Print transaction lines, final balances, rejected IDs and bank total.

function isValid(r:RawTransaction | null):r is RawTransaction
{
  return r!==null
}
function isTransaction(t:RawTransaction | null):t is Transaction
{
  return t!==null && t.amount!=null
}

const sortedTrans=raw.filter(isTransaction).sort((a,b)=>a.id-b.id)
const aTrans= sortedTrans.filter(t=>t.account=="A")
const bTrans= sortedTrans.filter(t=>t.account=="B")

type bankTrans = {
  user: string;
  balance: number;
  rejected: number;
};

const abalance=aTrans.reduce<bankTrans>((acc,n)=>{
  if (n.kind == "deposit") {
      acc.balance = acc.balance + n.amount;
    } else if (n.kind == "withdrawal") {
      if (n.amount > 100) {
        acc.rejected = n.id;
      } else {
        acc.balance =acc.balance- n.amount;
      }
    }
    return acc;
  },
  { user: "A", balance: 0, rejected: 0 },
)


// ============================================================
// CHALLENGE 1 — Running Balance
// ============================================================
const changes1: number[] = [50, -20, 30, -100, 10];
type FinalBatch = { balance: number; history: number[] };
// TODO: One reduce (starting at 0) to calculate final balance,
//       recording each intermediate balance in a history array.
// TODO: Another reduce on history (starting at Infinity) for the minimum.
// Expected:
// 50, 30, 60, -40, -30
// -30
// -40
const total = changes1.reduce<FinalBatch>(
  (acc, t) => {
    acc.balance = acc.balance + t;
    acc.history.push(acc.balance);
    return acc;
  },
  { balance: 0, history: [] },
);
console.log(total);
let his = total.history;
console.log(his.sort((a, b) => a - b));
console.log(his[0]);

// ============================================================
// CHALLENGE 2 — Index and Array
// ============================================================
const words2: string[] = ["a", "bb", "ccc", "dd"];
// TODO: reduce<string[]> to produce "1/4 a", "2/4 bb", etc.
// TODO: Another reduce (starting at -1) to find the index of the
//       last word with at least 2 letters.
// Expected:
// 1/4 a
// 2/4 bb
// 3/4 ccc
// 4/4 dd
// 3
const w = words2.reduce<string[]>((acc, n, index, array) => {
  acc.push(`${index + 1}` + "/" + array.length, `${n}`);
  return acc;
}, []);
const lastWord = words2.reduce((acc, n, index, array) => {
  if (n.length >= 2) {
    return index;
  }
  return acc;
}, -1);
// ============================================================
// CHALLENGE 3 — Stock Fulfilment (stretch)
// ============================================================
type Order3 = { id: number; qty: number };
type finalOrder = { stock: number; filled: number[]; backordered: number[] };
const orders3: Order3[] = [
  { id: 1, qty: 4 },
  { id: 2, qty: 5 },
  { id: 3, qty: 2 },
  { id: 4, qty: 3 },
];
// TODO: Use one reduce with accumulator:
//       { stock: number; filled: number[]; backordered: number[] }
//       Start stock at 10. Fill only when qty <= stock remaining.
// Expected:
// Filled: 1, 2
// Backordered: 3, 4
// Stock left: 1

const ord = orders3.reduce<finalOrder>(
  (acc, n, index) => {
    if (n.qty <= acc.stock) {
      acc.stock -= n.qty;
      acc.filled.push(n.id);
    } else {
      acc.backordered.push(n.id);
    }
    return acc;
  },
  { stock: 10, filled: [], backordered: [] },
);
// ============================================================
// CHALLENGE 4 — Overdraft Guard (stretch)
// ============================================================
type Tx4 = {
  id: number;
  user: string;
  amount: number;
  kind: "deposit" | "withdrawal";
};
const transactions4: Tx4[] = [
  { id: 3, user: "ana", amount: 50, kind: "deposit" },
  { id: 1, user: "ben", amount: 100, kind: "deposit" },
  { id: 2, user: "ana", amount: 80, kind: "deposit" },
  { id: 5, user: "ana", amount: 200, kind: "withdrawal" },
  { id: 4, user: "ben", amount: 30, kind: "withdrawal" },
  { id: 6, user: "ben", amount: 90, kind: "withdrawal" },
];
// TODO: Sort a COPY by id, then group by user.
// TODO: Reduce each user's transactions in order. Reject withdrawals
//       exceeding the available balance, recording their IDs.
// TODO: Print one line per user; use "rejected none" if no IDs rejected.
// Expected:
// ben: balance 70, rejected 6
// ana: balance 130, rejected 5

type Groups = { [key: string]: Tx4[] };
type bt = { user: string; balance: number; rejected: number };
const sortedTrans4 = [...transactions4].sort((a, b) => a.id - b.id);
const anaTrans = sortedTrans4.filter((t) => t.user == "ana");
const benTrans = sortedTrans4.filter((t) => t.user == "ben");
const gps: Groups = sortedTrans4.reduce<Groups>((acc, t) => {
  const key = t.user;
  if (acc[key] === undefined) {
    acc[key] = [];
  }
  acc[key].push(t);
  return acc;
}, {});

console.log(gps);
console.log(anaTrans);

const at = anaTrans.reduce<bt>(
  (acc, n, index) => {
    if (n.kind == "deposit") {
      acc.balance = acc.balance + n.amount;
    } else if (n.kind == "withdrawal") {
      if (n.amount > acc.balance) {
        acc.rejected = n.id;
      } else {
        acc.balance =acc.balance- n.amount;
      }
    }
    return acc;
  },
  { user: "Anna", balance: 0, rejected: 0 },
);
const Bt = benTrans.reduce<bt>(
  (acc, n, index) => {
    if (n.kind == "deposit") {
      acc.balance = acc.balance + n.amount;
    } else if (n.kind == "withdrawal") {
      if (n.amount > acc.balance) {
        acc.rejected = n.id;
      } else {
        acc.balance =acc.balance- n.amount;
      }
    }
    return acc;
  },
  { user: "Ben", balance: 0, rejected: 0 },
);