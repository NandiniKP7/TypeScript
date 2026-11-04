// # Day 10 Exercises

// ## Today's project: the spec

// Build this yourself. There is no step-by-step guide today.

// ## The mission
// A teacher has a list of students, each with a name and a list of test scores. Build a program that prints a report card line for each student, and a summary.

// ## The data
// Create `day10.ts` in your `ts-days` folder and run it with `npx tsx day10.ts`. Copy this data exactly:
// ```ts
const students = [
  { name: "Ana", scores: [90, 80, 100] },
  { name: "Ben", scores: [55, 65, 60] },
  { name: "Cara", scores: [] },
  { name: "Dan", scores: [40, 50, 30] },
];
let highestavg:number=0
let studName:string=''
let passedStudents:number=0
let failedStudents:number=0
for (const stud of students) {
  let avg = 0;
  console.log("StudentName", stud.name);
  if (stud.scores.length == 0) {
    console.log(stud.name, "skipped (no scores)");
    continue;
  }
  for (let i = 0; i < stud.scores.length; i++) {
    avg = avg + stud.scores[i] / stud.scores.length;
  }
  console.log(stud.name,avg);
  if (avg >= 90) {
    console.log("Grade A");
    passedStudents++
  } else if (avg >= 80 && avg < 90) {
    console.log("Grade B");
     passedStudents++
  } else if (avg >= 70 && avg < 80) {
    console.log("Garde C");
     passedStudents++
  } else if (avg >= 60 && avg < 70) {
    console.log("Grade D");
     passedStudents++
  } else {
    console.log("Fail");
    failedStudents++
  }
 
  if(avg>highestavg)
  {
    highestavg=avg
    studName=stud.name
    console.log("HighestScore:"+ stud.name,highestavg)
  }
  console.log("Passed Students:"+ passedStudents)
  console.log("FailedStudents:"+failedStudents)
}
console.log("Best student:", studName, highestavg)
console.log("Passed:", passedStudents, "of", passedStudents + failedStudents, "graded")
// ```

// ## Rules
// 1. For each student, work out the **average** score.
// 2. Give a **grade** from the average: 90 or more is A, 80 or more is B, 70 or more is C, 60 or more is D, anything lower is F.
// 3. A student with **no scores** is skipped, and the line says so.
// 4. A student **passes** with an average of 60 or more.
// 5. At the end, print the **best student** (highest average) and how many students passed out of those graded.

// ## Expected output
// Each line is printed with one `console.log` that has the pieces separated by commas, so every comma becomes one space. The spaces and colons below are exact.
// ```
// Ana average: 90 grade: A
// Ben average: 60 grade: D
// Cara skipped (no scores)
// Dan average: 40 grade: F
// Best student: Ana 90
// Passed: 2 of 3 graded
// ```

// ## Check yourself
// - [ ] The output matches exactly (6 lines).
// - [ ] Remove Cara from the list. Ana, Ben and Dan print the same, and the last line is `Passed: 2 of 3 graded`.
// - [ ] Change Dan's scores to `[95, 85, 90]`. His line becomes `Dan average: 90 grade: A`. The best student is still Ana, because a later student with an equal average does not replace the first. The last line is `Passed: 3 of 3 graded`.

// ## Plan before you code (5 minutes)
// Write answers in a comment at the top of your file:
// 1. What are the inputs and the expected output?
// 2. What are the smaller steps? (Hint: one loop over students, with a second loop inside for the scores.)
// 3. Which variables will you need to remember things between rounds?
// 4. Which tools from Days 1-9 will you use?

// ## Checklist
// - [ ] Uses `const` and `let` correctly
// - [ ] Uses a loop inside a loop
// - [ ] Uses `continue` for the student with no scores
// - [ ] Uses `if / else if / else` for the grade
// - [ ] Tracks the best student with a comparison
// - [ ] Output matches exactly

// ## Tips
// - Build one step at a time and run often. Get the average of one student printed first.
// - If you are stuck for 10 minutes, open Hint 1 below.
// - Count how many hints you use. This is your progress score.

// ---

// ## Hints for the main program
// <details><summary>Hint 1</summary>Make a loop over `students` with `for...of`. Inside it, make a second loop over `student.scores`.</details>
// <details><summary>Hint 2</summary>For an empty list, `student.scores.length === 0`. Print the skipped line and `continue`.</details>
// <details><summary>Hint 3</summary>Outside the loops, make `let bestName = ""`, `let bestAverage = -1`, `let graded = 0`, `let passed = 0`. Update them for each graded student.</details>

// ## Stretch 1: Class Average
// Print the average of all the students' averages (only graded students), as `Class average: <value>`.
// Use the same data as above. **Expected:** `Class average: 63.333333333333336` (any rounding of 63.33 is fine)

// ## Stretch 2: Grade Count
// Print how many students got each grade, in one line, with the pieces separated by commas in one `console.log` (so there is a space between every piece).
// **Expected (for the data above):** `A: 1 B: 0 C: 0 D: 1 F: 1`

// ## Stretch 3: Lowest Student
// Also print the student with the lowest average, in the form `Lowest student: <name> <average>`.
// **Expected (for the data above):** `Lowest student: Dan 40`

// ## Reflection (write in a comment)
// 1. How many hints did you use today?
// 2. What was the hardest part?
// 3. Which day's topic do you want to revisit?

// ## When you finish
// Paste your code and output here for review.
