// # Day 12 Exercises

// ## Today's project

// A program that takes a messy to-do message, splits it into tasks, and reports on it. The raw message is `"  Meeting at 3pm, bring the REPORT, call Dana  "`. It prints:

// ```
// Cleaned: meeting at 3pm, bring the report, call dana
// Parts: 3
// - Meeting at 3pm (14 characters)
// - Bring the report (16 characters)
// - Call dana (9 characters)
// Updated: meeting at 3pm, bring the summary, call dana
// Preview: meeting at...
// Ending: dana
// ```

let raw:string ="  Meeting at 3pm, bring the REPORT, call Dana  "
let cleaned:string=raw.trim().toLowerCase()

let updated=cleaned.replace("report","summary")
let arr=cleaned.split(",")
console.log("Parts:",arr.length)
console.log(arr[0].trim(), arr[0].trim().length)
console.log(arr[1].trim(), arr[1].trim().length)
console.log(arr[2].trim(), arr[2].trim().length)
console.log("Ending:", arr[2].slice(-4))
console.log("Preview:", arr[0].substring(0,11))
// **Build it yourself first.** Use today's `README.md` as your reference. If you are stuck for 15 minutes, open `project-walkthrough.md`.

// Open a hint only after 10 minutes of trying.

// **Core (about 30 minutes):** the project and Challenges 1-2. Challenges 3-4 are stretch: do them if you have time, or carry them to the next day.

// ## Challenge 1: Date Parts
// **Goal:** Use `.slice()` to cut out pieces.
// **Requirements:** For `"2024-05-17"`, print the year, month and day using `.slice()` and a template literal.
// **Expected output:**
// ```
// Year: 2024
// Month: 05
// Day: 17
// ```

let date:string="2024-05-17"
let parts=date.split("-")
console.log("Year:", parts[0])
console.log("Month:", parts[1])
console.log("Day:", parts[2])
// <details><summary>Hint 1</summary>The year is positions 0 to 3, so `slice(0, 4)`.</details>
// <details><summary>Hint 2</summary>The month starts at position 5. The day has no end number: `slice(8)`.</details>

// ## Challenge 2: Replace It
// **Goal:** Know the difference between `replace` and `replaceAll`.
// **Requirements:** For `"I like cats. cats are fun."`, print it once with the first `cats` changed to `dogs`, and once with every `cats` changed.
// **Expected output:**
// ```
// I like dogs. cats are fun.
// I like dogs. dogs are fun.
// ```
let mystring="I like cats. cats are fun"
console.log(mystring.replace("cats","dogs"))
console.log(mystring.replaceAll("cats","dogs"))
// <details><summary>Hint 1</summary>Two different methods, same two arguments.</details>
// <details><summary>Hint 2</summary>The shape: `text.replace("cats", "dogs")` for the first match and `text.replaceAll("cats", "dogs")` for every match. Print each result.</details>

// ## Challenge 3: Name Flipper (stretch)
// **Goal:** Use `.split()` and a template literal.
// **Requirements:** For `"Ana Lopez"`, print it as `Last, First`. Then, for `"the quick brown fox"`, print how many words it has.
// **Expected output:**
// ```
// Lopez, Ana
// Words: 4
// ```
let mystr1:string="Ana Lopez"
let mystr2="the quick brown fox"
let zzy=mystr1.split(" ")
console.log(zzy[1],zzy[0])
let arr5=mystr2.split(" ")
console.log("Words:",arr5.length)
// <details><summary>Hint 1</summary>`split(" ")` gives an array. The first name is `[0]`.</details>
// <details><summary>Hint 2</summary>The number of words is the length of the array from `split(" ")`.</details>

// ## Challenge 4 (mini boss, stretch): Record Reader
// **Goal:** Combine `split`, `trim`, case methods and `continue`.
// **Requirements:** Each text line holds `name,age,city`. For `["  ana , 30 , paris ", "BEN,25,LONDON", "   "]`, print one sentence per line in the form `Ana is 30 and lives in Paris`. The name and city start with a capital letter and the rest is lower case. A line that is empty after trimming prints `(skipped)`.
// **Expected output:**
// ```
// Ana is 30 and lives in Paris
// Ben is 25 and lives in Londonclear

// (skipped)
// ```
const records = ["  ana , 30 , paris ", "BEN,25,LONDON", "   "];

for (const record of records) {
  if (record.trim() === "") {
    console.log("(skipped)");
    continue;
  }

  const [name, age, city] = record.toLowerCase().split(",");

  const cleanName = name.trim();
  const cleanCity = city.trim();

  const finalName = cleanName[0].toUpperCase() + cleanName.slice(1);
  const finalCity = cleanCity[0].toUpperCase() + cleanCity.slice(1);

  console.log(`${finalName} is ${age.trim()} and lives in ${finalCity}`);
}
// <details><summary>Hint 1</summary>Loop with `for...of`. Check `line.trim() === ""` first and use `continue`.</details>
// <details><summary>Hint 2</summary>`line.split(",")` gives three pieces. Trim each piece and store it in a variable.</details>
// <details><summary>Hint 3</summary>To capitalise: `name[0].toUpperCase() + name.slice(1).toLowerCase()`.</details>

// ## When you finish
// Paste your code and output here for review.
