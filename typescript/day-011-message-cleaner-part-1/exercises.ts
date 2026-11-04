// # Day 11 Exercises

// **Time:** 30 minutes. **Core:** the project and Challenges 1-2. Challenges 3-4 are stretch: do them if you have time, or carry them to the next day.

// ## Before you start

// Create `day11.ts` in your `ts-days` folder. Run it with `npx tsx day11.ts`.

// Start your file with this data. Copy it exactly (there are 3 spaces at the start and 3 at the end):

// ```ts
const raw: string = "   Hello Team, PLEASE review the report   ";
// ```
console.log(raw.length);
const cleaned = raw.trim().toLowerCase();
console.log("Cleaned:", cleaned);
console.log(cleaned.length);
if (cleaned.startsWith("hello")) {
  console.log("Greeting" + true);
} else {
  console.log("Greeting" + false);
}
if (cleaned.endsWith("?")) {
  console.log("Ends with a question mark:", true);
} else {
  console.log("Ends with a question mark:", false);
}
if (cleaned.includes("please")) {
  console.log("polite", true);
} else {
  console.log("polite", false);
}
console.log("FirstLetter:", cleaned[0]);
console.log("LastLetter:", cleaned[cleaned.length - 1]);
// ## Today's project: Message Cleaner, part 1

// **What it does:** cleans one messy message and reports facts about it.

// **Requirements**
// 1. Print the length of `raw` as `Original length: <length>`.
// 2. Make `const cleaned: string` from `raw`: no spaces at the ends, all lower case. Print `Cleaned: <cleaned>`.
// 3. Print `Cleaned length: <length of cleaned>`.
// 4. Print `Greeting: <true or false>`: does `cleaned` start with `hello`?
// 5. Print `Ends with a question mark: <true or false>`: does `cleaned` end with a question mark?
// 6. Print `Polite: <true or false>`: does `cleaned` include `please`?
// 7. Print `First letter: <first character>` and `Last letter: <last character>` of `cleaned`.

// **Expected output** (for the data above)

// ```
// Original length: 42
// Cleaned: hello team, please review the report
// Cleaned length: 36
// Greeting: true
// Ends with a question mark: false
// Polite: true
// First letter: h
// Last letter: t
// ```

// **Check yourself**
// - [ ] The output matches exactly.
// - [ ] Change `raw` to `"  Can you help?  "`. The output shows `Cleaned: can you help?`, `Greeting: false`, `Ends with a question mark: true`, `Polite: false`, `First letter: c`, `Last letter: ?`. Change it back afterwards.
// - [ ] Nothing about the cleaned text is typed in by hand.

// **Build it yourself first.** Use today's `README.md` as your reference. If you are stuck for 15 minutes, open `project-walkthrough.md`.

// Open a hint only after 10 minutes of trying.

// ## Challenges: extend your cleaner

// Add each challenge **at the bottom of `day11.ts`**, after the `Last letter:` line, and use the same `raw` message unless a challenge says otherwise. The output of each challenge appears after the project output.

// ## Challenge 1: Shout
// **Goal:** Use the upper-case method on cleaned text.
// **Requirements:** Print the message with the end spaces removed and in capitals, as `Shout: <text>`.
// **Expected output** (after `Last letter: t`):
// ```
// Shout: HELLO TEAM, PLEASE REVIEW THE REPORT
// ```

console.log("Shout:", raw.trim().toUpperCase());
// <details><summary>Hint 1</summary>Two methods, chained, on `raw`. Neither one changes `raw` itself.</details>
// <details><summary>Hint 2</summary>Shape: `raw.<method>().<method>()` inside the `console.log`.</details>

// ## Challenge 2: Spaces removed
// **Goal:** Compare two lengths.
// **Requirements:** Print how many characters were removed by cleaning, as `Spaces removed: <number>`. Work it out from the two lengths.
// **Expected output** (after the `Shout:` line):
// ```
// Spaces removed: 6
// ```
console.log(raw.length);
console.log(raw.trim().length);
console.log(raw.length - raw.trim().length);
// <details><summary>Hint 1</summary>You already printed both lengths. Use both.</details>
// <details><summary>Hint 2</summary>Shape: `raw.length - cleaned.length`.</details>

// ## Challenge 3 (stretch): Email cleaner
// **Goal:** Clean text and ask questions about it. Use this text, not `raw`: `"  Ana@Example.COM "`.
// **Requirements:** Make a cleaned copy (no end spaces, all lower case). Print it, then whether it ends with `.com`, then whether it includes `@`.
// **Expected output** (after `Spaces removed: 6`):
// ```
// ana@example.com
// true
// true
// ```
// <details><summary>Hint 1</summary>Chain two string methods, then store the result in a new variable.</details>
// <details><summary>Hint 2</summary>Ask the questions on the cleaned variable, not on the original.</details>
const raw2 = "  Ana@Example.COM ";
const cleanraw = raw2.trim().toLowerCase();
console.log(cleanraw)
console.log(cleanraw.endsWith(".com")) 
console.log(cleanraw.includes("@"))
// ## Challenge 4 (mini boss, stretch): Message sorter
// **Goal:** Clean each message and label it. Use this list:
// ```ts
// const messages: string[] = ["  Hello Ana  ", "   ", "URGENT: server down", "hello there", " please call me "];
// ```
// **Requirements:** Clean each message (trim, lower case). If it is empty after cleaning, print `(empty message)`. Otherwise print the cleaned text, ` -> `, and one label: `urgent` if it includes `urgent`, else `greeting` if it starts with `hello`, else `polite` if it includes `please`, else `none`.
// **Expected output** (after the Challenge 3 output):
// ```
const messages: string[] = ["  Hello Ana  ", "   ", "URGENT: server down", "hello there", " please call me "];
let cleanmsg:string
for(const msg of messages){
  cleanmsg= msg.trim().toLowerCase()
  if(cleanmsg.length==0)
  {
    console.log("empty message")
  }
  else if(cleanmsg.includes("urgent"))
  {
    console.log(cleanmsg, " -> urgent")
  }
  else if(cleanmsg.startsWith("hello"))
  {
    console.log(cleanmsg," -> greeting",)
  }
  else if(cleanmsg.includes("please"))
  {
    console.log(cleanmsg ," -> polite")
  }
  else{
    console.log("none")
  }
}

// hello ana -> greeting
// (empty message)
// urgent: server down -> urgent
// hello there -> greeting
// please call me -> polite
// ```
// <details><summary>Hint 1</summary>Loop with `for...of`. Clean first, then check `length === 0` and use `continue`.</details>
// <details><summary>Hint 2</summary>Use an `if / else if / else` chain to choose the label, and store it in a `let label: string`.</details>

// ## When you finish
// Paste your code and output here for review.
