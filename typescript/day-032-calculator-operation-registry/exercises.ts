// Day 32 Exercises: Calculator Operation Registry
// Complete each TODO yourself. No solutions or hints included.
// Run: npx tsx day32-exercises.ts

// ============================================================
// MAIN PROJECT: Calculator Operation Registry
// ============================================================
// Define type Operation = (a: number, b: number) => number
// Create five operations: add, subtract, multiply, divide, remainder.
// Store them in an array of objects with a symbol and a run function.
// Loop over the registry to print each operation applied to 8 and 2.
// Then write calculate(symbol, a, b) that finds the right entry and runs it.
// For an unknown symbol it prints "Unknown operator: <symbol>"
// and returns NaN.
//
// TODO: Define the type, operations, registry and calculate, then print:
// 8 + 2 = 10
// 8 - 2 = 6
// 8 * 2 = 16
// 8 / 2 = 4
// 8 % 2 = 0
// calculate("*", 6, 7) = 42
// Unknown operator: ?
// NaN
//
// The last two lines come from console.log(calculate("?", 1, 2))

type Operation = (a: number, b: number) => number;
const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const mul: Operation = (a, b) => a * b;
const div: Operation = (a, b) => a / b;
const mod: Operation = (a, b) => a % b;

const calcops: { name: string; run: Operation }[] = [
  {
    name: "+",
    run: add,
  },
  { name: "-", run: sub },
  { name: "*", run: mul },
  { name: "/", run: div },
  { name: "%", run: mod },
];

for (const op of calcops) {
  console.log("8 " + op.name + " 2 = " + op.run(8, 2));
}

function calculate(name: string, a: number, b: number) {
  for (const op of calcops) {
    if (op.name == name) {
      return op.run(a, b);
    }
  }
  console.log("Unknown operator: " + name);
  return NaN;
}

// ============================================================
// CHALLENGE 1: Formatters
// ============================================================
// Goal: Create and use a function type alias.
// Define type Formatter = (text: string) => string
// Create three formatters:
//   shout: upper case plus "!"
//   whisper: lower case plus "..."
//   bracket: wraps the text in "[" and "]"
// Apply each to "Hello".
//
// TODO: Define the type and formatters, then print:
// HELLO!
// hello...
// [Hello]

type Formatter = (text: string) => string;
const upperCase: Formatter = (text) => text.toUpperCase() + "!";
const lowerCase: Formatter = (text) => text.toLowerCase() + "...";
const wraps: Formatter = (text) => "[" + text + "]";

// ============================================================
// CHALLENGE 2: Checks
// ============================================================
// Goal: An alias that returns boolean, stored in an array.
// Define type Check = (n: number) => boolean
// Create isEven, isPositive and isBig (above 100).
// Put them in an array of { name, run } objects.
// For each number in [8, -3, 150], run every check and print
// "<n> <name>: <result>".
//
// TODO: Define the type, checks and array, then print:
// 8 even: true
// 8 positive: true
// 8 big: false
// -3 even: false
// -3 positive: false
// -3 big: false
// 150 even: true
// 150 positive: true
// 150 big: true

type check = (n: number) => boolean;
const mynum = [8, -3, 150];
const isEven: check = (n) => n % 2 == 0;
const isPositive: check = (n) => n > 0;
const isBig: check = (n) => n > 100;
const arr: { name: string; run: check }[] = [
  { name: "even", run: isEven },
  { name: "positive", run: isPositive },
  { name: "big", run: isBig },
];
for (const n of mynum) {
  for (const a of arr) {
    console.log(n + " " + a.name + ":" + a.run(n));
  }
}
// ============================================================
// CHALLENGE 3: Pricers (OPTIONAL STRETCH)
// ============================================================
// Goal: A contract with several functions of different behavior.
// Define type Pricer = (price: number, qty: number) => number
// Create:
//   full: price times quantity
//   half: half of the full price
//   bulk: full price, but 10% off when qty is 10 or more
// Print each pricer for (20, 3) and (20, 12), on one line per pricer.
//
// TODO: Define the type and pricers, then print:
// full: 60 240
// half: 30 120
// bulk: 60 216

type Pricer = (price: number, qty: number) => number;

const fullPrice: Pricer = (price, qty) => price * qty;
const halfPrice: Pricer = (price, qty) => (price * qty) / 2;
const bulkPrice: Pricer = (price, qty) => {
  if (qty >= 10) {
    return price * qty - (price * qty * 10) / 100;
  } else {
    return price * qty;
  }
};

const ops: { name: string; run: Pricer }[] = [
  { name: "full", run: fullPrice },
  { name: "half", run: halfPrice },
  { name: "bulk", run: bulkPrice },
];

for (const op of ops) {
  console.log(op.name + " :" + op.run(20, 3), op.run(20, 13));
}

// ============================================================
// CHALLENGE 4: Text Tools Registry (OPTIONAL STRETCH)
// ============================================================
// Goal: Build a registry like today's project, with a lookup function
// and a safe fallback.
//
// type Transform = (text: string) => string
// A registry array of { name, run } with these tools:
//   upper: upper case
//   lower: lower case
//   firstWord: text before the first space
//   short: first 5 characters
//   count: returns for example "3 words"
// runAll(text): prints "<name>: <result>" for every tool.
// runByName(name, text): returns the result of that tool,
//   or the original text if no tool has that name.
//
// TODO: Define everything, call runAll("Hello brave World"), then print
// runByName("upper", "abc") and runByName("nope", "abc").
//
// Expected:
// upper: HELLO BRAVE WORLD
// lower: hello brave world
// firstWord: Hello
// short: Hello
// count: 3 words
// ABC
// abc
type Transform = (text: string) => string;

const upper: Transform = (text) => text.toUpperCase();
const lower: Transform = (text) => text.toLowerCase();
const firstWord: Transform = (text) => {
  let temp = text.split(" ");
  return temp[0];
};
const short: Transform = (text) => {
  return text.slice(0, 5);
};
const count: Transform = (text) => {
  let count = text.split(" ").length;
  return count + "words";
};

const tools: { name: string; run: Transform }[] = [
  {
    name: "upper",
    run: upper,
  },
  {
    name: "lower",
    run: lower,
  },
  {
    name: "firstWord",
    run: firstWord,
  },
  {
    name: "short",
    run: short,
  },
  {
    name: "count",
    run: count,
  },
];

function runAll(text: string): void {
  for (const t of tools) {
    console.log(t.name + ": " + t.run(text));
  }
}

function runByName(op: string, text: string): void {
  for (const t of tools) {
    if (t.name == op) {
      console.log(t.name + ": " + t.run(text));
    }
  }
}
console.log(runByName("upper", "abc"));
console.log(runAll("Hello brave World"));
