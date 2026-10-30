// # Day 4 Exercises

// ## Today's project

// A program that decides whether a user can access an account. It prints `ACCESS GRANTED`, or one clear reason for denying access. For a valid user it prints:

// ```
// ACCESS GRANTED
// ```
// For a suspended user it prints:
// ```
// ACCESS DENIED: account is suspended
// ```

let userName: string = "nandini";
let userAge: number = 33;
let isVerified: boolean = true;
let isSuspended: boolean = false;

if (userName === "") {
  console.log("ACCESS DENIED: username is missing");
} else if (userAge < 18) {
  console.log("ACCESS DENIED: must be 18 or older.");
} else if (!isVerified) {
  console.log("ACCESS DENIED: account is not verified.");
} else if (isSuspended) {
  console.log("ACCESS DENIED: account is suspended");
} else {
  console.log("ACCESS GRANTED");
}
// **Build it yourself first.** Use today's `README.md` as your reference. If you are stuck for 15 minutes, open `project-walkthrough.md`.

// Open a hint only after 10 minutes of trying.

// **Core (about 30 minutes):** the project and Challenges 1-2. Challenges 3-4 are stretch: do them if you have time, or carry them to the next day.

// ## Challenge 1: Weekend Check
// **Goal:** Use `||`.
// **Requirements:** `const day: string = "Sunday"`. Print `Weekend` if the day is Saturday or Sunday, otherwise `Weekday`.
// **Expected output:** `Weekend`

let day = "Sunday";
if (day == "Saturday" || day == "Sunday") {
  console.log("Weekend");
} else {
  console.log("weekday");
}

// <details><summary>Hint 1</summary>Two comparisons joined with `||`.</details>
// <details><summary>Hint 2</summary>`day === "Saturday" || day === "Sunday"`</details>

// ## Challenge 2: Discount Eligibility
// **Goal:** Use `&&`, `||` and `!` together.
// **Requirements:** A customer gets a discount if they are a member, or if they are under 12 or over 64 and not a student. For `isMember = false`, `age = 70`, `isStudent = false`, print `Discount` or `No discount`.
// **Expected output:** `Discount`

let age: number = 12;
let membership: boolean = true;
let student: boolean = false;
if (membership === true) {
  console.log("discount");
} else if ((age < 12 || age > 64) && student === false) {
  console.log("discount");
} else {
  console.log("No Discount");
}

// <details><summary>Hint 1</summary>Write the rule as: member OR (age rule AND NOT student).</details>
// <details><summary>Hint 2</summary>`isMember || ((age < 12 || age > 64) && !isStudent)`</details>

// ## Challenge 3: Login (stretch)
// **Goal:** Give a specific reason for each failure.
// **Requirements:** The correct login is username `admin` and password `1234`. For `username = "admin"` and `password = "9999"`, print `Wrong password`. If the username is wrong, print `Unknown user`. If both are right, print `Welcome`.
// **Expected output:** `Wrong password`
let username: string = "admin";
let password: string = "9999";
if (username == "admin" && password == "1234") {
  console.log("Welcome");
} else if (username == "admin" && password != "1234") {
  console.log("Wrong Password");
} else if (username != "admin" && password == "1234") {
  console.log("Unknown user");
} else if (username != "admin" && password != "1234") {
  console.log("Unknown user");
}

// <details><summary>Hint 1</summary>Check the username first. Only then check the password.</details>
// <details><summary>Hint 2</summary>The shape: `if (username !== "admin") { ... } else if (password !== "1234") { ... } else { ... }`. Each branch prints one message.</details>

// ## Challenge 4 (mini boss, stretch): Loan Pre-Check
// **Goal:** Combine everything from today.
// **Requirements:** Approve a loan only if age is at least 18, income is at least 3000, credit score is at least 650, and there is no bankruptcy. If the applicant name is empty, deny with `Name is required`. Otherwise print the first problem found, or `APPROVED`.
// **Test with:** `name = "Sam"`, `age = 30`, `income = 2500`, `creditScore = 700`, `hasBankruptcy = false`.
// **Expected output:** `DENIED: income too low`

let n: string = "sam";
let a: number = 30;
let income: number = 2500;
let creditscore: number = 700;
let hasBankruptcy: boolean = false;
if (n === "") {
  console.log("Name is required");
} else if (a < 18) {
  console.log("DENIED  age is less than 18");
} else if (income < 3000) {
  console.log("DENIED income too low");
} else if (creditscore < 650) {
  console.log("DENIED creditscore too low");
} else if (hasBankruptcy) {
  console.log("DENIED you have hasBankruptcy");
} else if (
  n != " " &&
  age >= 18 &&
  income >= 3000 &&
  creditscore >= 650 &&
  hasBankruptcy === false
) {
  console.log("Approved");
}
// <details><summary>Hint 1</summary>Same shape as the access checker: a chain of `else if`s ending in `else`.</details>
// <details><summary>Hint 2</summary>Check the empty name first with `!name`.</details>

// ## When you finish
// Paste your code and output here for review.
