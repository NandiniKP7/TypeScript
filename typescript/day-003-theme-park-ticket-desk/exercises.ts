// # Day 3 Exercises

// ## Today's project

// A program that decides the ticket price from a visitor's age, and whether they can ride the rollercoaster. For age 15 and height 150 it prints:
//Project: Theme Park Ticket Desk

// Build a program using these inputs:
// - Age: 15 years
// - Height: 150 cm
// Ticket pricing rules:
// Age	   Ticket	Price
// Under 12	Child	$5
// 12–17	Teen	$7
// 18 and older	Adult	$12

// Rollercoaster rules:
// - Minimum height: 120 cm.
// - Visitors below 120 cm cannot ride.
// - Visitors under 8 who meet the height requirement need an adult accompanying them.
// Expected output:

// ```
// Teen ticket: 7
// You can ride!
// ```
const a: number = 15;
const h: number = 150;
if (h < 120) {
  console.log("you can't ride");
}
else{
    if(a<8){
     console.log(" Adult should accompany you")
    }
    console.log("you can ride")
}
if (a < 12) {
  console.log("Child Ticket: $", 5);

} else if (a >= 12 && a <= 17) {
  console.log("Teen Ticket: $", 7);
} else {
  console.log("Adult Ticket: $", 12);
}

// **Build it yourself first.** Use today's `README.md` as your reference. If you are stuck for 15 minutes, open `project-walkthrough.md`.

// Open a hint only after 10 minutes of trying.

// ## Challenge 1: Odd or Even
// **Goal:** Decide if a number is odd or even.
// **Requirements:** `const n: number = 7`. Print `Odd` or `Even`.
// **Expected output:** `Odd`
const n: number = 7;
if (n % 2 === 0) {
  console.log("Number is even", n);
} else {
  console.log("Number is odd", n);
}
// <details><summary>Hint 1</summary>An even number has no remainder when divided by 2.</details>
// <details><summary>Hint 2</summary>`if (n % 2 === 0)`</details>

// ## Challenge 2: Grade
// **Goal:** Turn a score into a letter grade.
// **Requirements:** 90 and above is A, 80 and above is B, 70 and above is C, anything lower is F. For `score = 83`, print the grade.
// **Expected output:** `B`
let score = 83;
if (score >= 90) {
  console.log("Grade A");
} else if (score < 90 && score >= 80) {
  console.log("Grade B");
} else if (score < 80 && score >= 70) {
  console.log("Grade C");
} else {
  console.log("Grade F");
}
// <details><summary>Hint 1</summary>Check the highest score first.</details>
// <details><summary>Hint 2</summary>Use `if`, two `else if`, and an `else`.</details>

// ## Challenge 3: Bus Fare
// **Goal:** Price by age.
// **Requirements:** Under 5 is free (0), under 18 is 1, under 65 is 2.5, and 65 or older is 1. For `age = 70`, print the fare.
// **Expected output:** `Fare: 1`

let age = 70;
if (age < 5) {
  console.log("Fare is:", 0);
} else if ((age >= 5 && age < 18) || age >= 65) {
  console.log("Fare is:", 1);
} else if (age >= 18 && age < 65) {
  console.log("Fare is:", 2.5);
}

// <details><summary>Hint 1</summary>Same shape as the ticket desk: one `if`, several `else if`, one `else`.</details>
// <details><summary>Hint 2</summary>Declare `let fare: number = 0;` above the `if` and set it inside.</details>

// ## Challenge 4 (mini boss): Roller Coaster Picker
// **Goal:** Combine `else if` and nesting.
// **Requirements:** Under 100 cm: print `Too short`. 100 to 119 cm: print `Kids coaster only`. 120 cm or more: print `Any coaster`, but if the visitor is under 12, also print `Adult must come along`. Test with several heights and ages.
// **Expected output for `height = 130`, `age = 10`:**
// ```
// Any coaster
// Adult must come along
// ```
// <details><summary>Hint 1</summary>Three branches on height. The age check is inside the last branch.</details>
// <details><summary>Hint 2</summary>Inside the `>= 120` block, add a second `if (age < 12)` with no `else`.</details>

let height = 130;
let ag = 10;
if (height < 100) {
  console.log("Too short");
} else if (height >= 100 && height <= 119) {
  console.log("kids coaster only");
} else {
  if (ag < 12) {
    console.log("Adult must come along ");
  }
  console.log("Any coaster");
}

// ## When you finish
// Paste your code and output here for review.
