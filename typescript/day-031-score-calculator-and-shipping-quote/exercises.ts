// Day 31 Exercises: Flexible Score Calculator and Shipping Quote
// Complete each TODO yourself. No solutions or hints included.
// Run: npx tsx day31-exercises.ts

// ============================================================
// MAIN PROJECT: Flexible Score Calculator and Shipping Quote
// ============================================================
// Part A: scores
// Write totalScore(...scores), averageScore(...scores), bestScore(...scores).
// Each accepts any number of scores.
// With no scores, averageScore and bestScore return 0.
// Use (80, 92, 83) for total and best, and (80, 90, 85, 85) for the average.
function totalScore(...scores: number[]): number {
  let total = scores.reduce((acc, s) => acc + s, 0);
  return total;
}
function averageScore(...scores: number[]): number {
  if (scores.length==0) {
    return 0;
  } else {
    let avg = totalScore(...scores) / scores.length;
    return avg;
  }
}
function bestScore(...scores: number[]): number {
  if (scores.length ==0) {
    return 0;
  } else {
    let bestScoreDesc = [...scores].sort((a, b) => b - a);
    return bestScoreDesc[0];
  }
}
//
// Part B: shipping
// Write shippingQuote(weightKg, express, couponCode).
// Cost is 5 + weightKg * 2.
// If express is true, add 10.
// If the coupon is "SAVE5", subtract 5.
// The cost never goes below 0.
// express defaults to false. couponCode is optional.
// The last line must be made with shippingQuote(0, undefined, "SAVE5").
//
function shippingQuote(weightKg: number, express: boolean=false, couponCode?: string):number {
  let cost = 5;
  if (express === true && couponCode == "SAVE5") {
    cost = cost + weightKg * 2 + 10 - 5;
    return Math.max(0, cost);
  } else if (express === true && couponCode != "SAVE5") {
    cost = cost + weightKg * 2 + 10;
    return Math.max(0, cost);
  } else if (express === false && couponCode == "SAVE5") {
    cost = cost + weightKg * 2 - 5;
    return Math.max(0, cost);
  } else {
     cost = cost + weightKg * 2;
     return Math.max(0, cost);
    
  }
}
// TODO: Define the functions and print:
// Total: 255
// Average: 85
// Best: 92
// No scores: 0
// Standard 2kg: $9
// Express 2kg: $19
// Standard 2kg with SAVE5: $4
// Express 3kg with SAVE5: $16
// Standard 0kg with SAVE5: $0

// ============================================================
// CHALLENGE 1: Sum Any Amount
// ============================================================
// Goal: Rest parameters.
// Write sumAll(...numbers) that returns the total.
//
// TODO: Define sumAll and print sumAll(), sumAll(1, 2, 3), sumAll(10, 20)
//
// Expected:
// 0
// 6
// 30

function sumAll(...numbers: number[]): number {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
}
console.log(sumAll());
console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20));

// ============================================================
// CHALLENGE 2: Friendly Greeting
// ============================================================
// Goal: Default parameters.
// Write greet(name, greeting) where greeting defaults to "Hello".
// It returns text like "Hello, Ana!".
//
// TODO: Define greet and print greet("Ana"), greet("Ben", "Welcome"),
// greet("Cara", "Hi")
//
// Expected:
// Hello, Ana!
// Welcome, Ben!
// Hi, Cara!

function greet(name: string, greeting: string="Hello"): string {
  if (greeting === undefined) {
    greeting = "Hello";
  }
  return greeting + ", " + name + "!";
}
console.log(greet("Ana"));
console.log(greet("Ben", "Welcome"));
console.log(greet("Cara", "Hi"));
// ============================================================
// CHALLENGE 3: Optional Middle Name (OPTIONAL STRETCH)
// ============================================================
// Goal: Optional parameters and the undefined check.
// Write formatName(first, last, middle?).
// Without a middle name it returns "first last".
// With one it returns "first middle last".
//
// TODO: Define formatName and print formatName("Ana", "Lopez") and
// formatName("Ana", "Lopez", "Marie")
//
function formatName(first: string, last: string, middle?: string) {
  if (middle === undefined) {
    return first + " " + last;
  }
  return first + " " + middle + " " + last;
}
console.log(formatName("Ana", "Lopez"));
console.log(formatName("Ana", "Lopez", "Marie"));
// Expected:
// Ana Lopez
// Ana Marie Lopez

// ============================================================
// CHALLENGE 4: Invoice and Labels (OPTIONAL STRETCH)
// ============================================================
// Goal: Mix all three kinds of parameters, plus arrays and loops.
//
// invoiceTotal(prices: number[], taxRate, discount?): add up the prices
//   with a loop, subtract the discount if there is one, then add tax.
//   taxRate is a percentage and defaults to 10.
// labeled(label, ...values): returns "label: " followed by the values
//   joined with ", ".

// const prices: number[] = [20, 30, 50];

// function invoiceTotal(
//   prices: number[],
//   taxRate?: number,
//   discount?: number,
// ): number {
//   let discountedPrice = 0;
//   let total = 0;
//   let finaltotal=0
//   for (let i = 0; i < prices.length; i++) {
//     total = total + prices[i];
//   }
//   if (discount === undefined && taxRate === undefined) {
//     taxRate = 10;
//     finaltotal= total + (total * taxRate) / 100;
//     return finaltotal
//   } else if (taxRate !== undefined && discount !== undefined) {
//     taxRate = taxRate;
//     discount = discount;
//     discountedPrice = total - (total * discount) / 100;
//     finaltotal=discountedPrice + (discountedPrice * taxRate) / 100;
//     return finaltotal
//   }
//   else{
//     return finaltotal
//   }
// }
//---------not solved------------//
const prices: number[] = [20, 30, 50];

function invoiceTotal(
  prices: number[],
  taxRate: number = 10,
  discount?: number
): number {
  let total = 0;

  for (let i = 0; i < prices.length; i++) {
    total = total + prices[i];
  }

  if (discount !== undefined) {
    total = total - (total * discount) / 100;
  }

  return total + (total * taxRate) / 100;
}

function labeled(label: string, ...values: number[]): string {
  return label + ": " + values.join(", ");
}

console.log(invoiceTotal(prices));
console.log(invoiceTotal(prices, 0));
console.log(invoiceTotal(prices, 10, 20));
console.log(invoiceTotal(prices, undefined, 20));
console.log(labeled("Prices", 20, 30, 50));
console.log(labeled("One", 7));

// TODO: Define both functions and print the results of these calls, in order:
console.log(invoiceTotal(prices));
console.log(invoiceTotal(prices, 0));
console.log(invoiceTotal(prices, 10, 20));
console.log(invoiceTotal(prices, undefined, 20));
//labeled("Prices", 20, 30, 50)
// labeled("One", 7)
//
// Expected:
// 110
// 100
// 88
// 88
// Prices: 20, 30, 50
// One: 7
