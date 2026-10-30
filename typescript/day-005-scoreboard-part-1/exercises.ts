// # Day 5 Exercises

// ## Today's project

// A program that goes through a list of test scores and prints the total, the average and the highest score. It prints:

// ```
// Score 1: 72
// Score 2: 95
// Score 3: 88
// Score 4: 60
// Score 5: 95
// Total: 410
// Average: 82
// Highest: 95
// ```

// What I added
// - Given input: Scores [72, 95, 88, 60, 95]
// - Requirements: Print each numbered score, calculate the total, average, and highest score.
// - Constraints: Use only concepts taught through Day 5.
// - Expected output: Preserved from your original file.
// **Build it yourself first.** Use today's `README.md` as your reference. If you are stuck for 15 minutes, open `project-walkthrough.md`.

let Scores =[72, 95, 88, 60, 95]
let calcTotal=0
let average=0
let HighestScore=Scores[0]

for(let i=0;i<Scores.length;i++)
{
    calcTotal=calcTotal+Scores[i]
    average=calcTotal/Scores.length
    console.log("Score"+[i+1]+":"+Scores[i])
    if(Scores[i]>HighestScore)
    {
        HighestScore=Scores[i]
    }
}
console.log(HighestScore)
console.log(calcTotal)
console.log(average)
// Open a hint only after 10 minutes of trying.

// **Core (about 30 minutes):** the project and Challenges 1-2. Challenges 3-4 are stretch: do them if you have time, or carry them to the next day.

// ## Challenge 1: Fruit List
// **Goal:** Print a list with numbers.
// **Requirements:** `const fruits: string[] = ["apple", "banana", "cherry"]`. Print each on its own line with its number.
// **Expected output:**
// ```
// 1 apple
// 2 banana
// 3 cherry
// ```
const fruits: string[] = ["apple", "banana", "cherry"]
for(let i=0;i<fruits.length;i++)
{
    console.log(i+1 +fruits[i])
}

// <details><summary>Hint 1</summary>A `for` loop with `fruits.length`.</details>
// <details><summary>Hint 2</summary>`console.log(i + 1, fruits[i]);`</details>

// ## Challenge 2: Sum 1 to 10
// **Goal:** Loop without a list.
// **Requirements:** Add the numbers 1 through 10 and print the result.
// **Expected output:** `55`
let total=0
for(let i=0;i<=10;i++)
{
    total=total+i
}
console.log(total)
// <details><summary>Hint 1</summary>`i` itself can be the number you add. Start `i` at 1.</details>
// <details><summary>Hint 2</summary>The condition should be `i <= 10`. Here `<=` is correct because 10 is included.</details>

// ## Challenge 3: Lowest and Highest (stretch)
// **Goal:** Find both ends of a list.
// **Requirements:** For `[14, 3, 27, 9, 21]`, print the lowest and highest numbers.
// **Expected output:**
// ```
// Lowest: 3
// Highest: 27
// ```

let numbers=[14,3,27,9,21]
let lowest=numbers[0]
for(let i=0;i<numbers.length;i++)
{
 if(numbers[i]<lowest)
 {
    lowest=numbers[i]
 }
}
console.log(lowest)

let highest=numbers[0]
for(let j=0;j<numbers.length;j++)
{
    if(numbers[j]>highest)
    {
        highest=numbers[j]
    }
}
console.log(highest)

// <details><summary>Hint 1</summary>Same as Step 6, with a second variable for the lowest.</details>
// <details><summary>Hint 2</summary>The shape: a second variable such as `lowest`, starting at the first item, and an `if` inside the loop that updates it when a number is smaller.</details>

// ## Challenge 4 (mini boss, stretch): Above Average
// **Goal:** Combine a total, an average, and a second loop.
// **Requirements:** For `[72, 95, 88, 60, 95]`, print how many scores are above the average, then print those scores.
// **Expected output:**
// ```
// Above average: 3
// 95
// 88
// 95
// ```
// <details><summary>Hint 1</summary>You need the average first. That needs one loop. Counting needs a second loop.</details>
// <details><summary>Hint 2</summary>In the second loop: `if (scores[i] > average) { ... }`</details>
let scores=[72, 95, 88, 60, 95]
let avg=0
let newscores=[]
for(let i=0; i<scores.length;i++)
{
    avg=avg+scores[i]/scores.length
    
}
for(let j=0;j<scores.length;j++)
{
    if(scores[j]>avg)
    {
        newscores.push(scores[j])
    }
}
console.log(newscores)
// ## When you finish
// Paste your code and output here for review.
