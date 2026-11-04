# Day 10: Milestone 1, How to Build a Whole Program

**Project today:** Report Card Program (spec in `exercises.md`)
**Time:** 10 minutes reading, then build

No new topic today. The skill is **taking a written problem and building it yourself**.

---

**1. Every program has the same shape**

```
input  ->  steps  ->  output
```

Before you write code, write down:

1. **Input:** what data do I have? (here: a list of students, each with scores)
2. **Output:** what exactly must be printed? (here: one line per student, plus a summary)
3. **Steps:** what small jobs turn the input into the output?

For the report card, the steps could be:

1. Go through each student.
2. Skip a student with no scores.
3. Add up the scores and work out the average.
4. Turn the average into a grade.
5. Print the line, and keep track of the best student and the count that passed.
6. After the loop, print the summary.

---

**2. Build one step at a time**

Do not write the whole program at once. Build step 1, run it, then add step 2, run it, and so on.

```ts
// Step 1: just loop through and print each name
for (const student of students) {
  console.log(student.name);
}
```

Once that works, add the next piece. If something breaks, you know it is the last thing you added.

---

**3. Choose the right tool for each step**

| The step needs... | Use... | From day |
|---|---|---|
| a value that changes | `let` | 1 |
| to turn a number into a grade | `if / else if / else` | 3 |
| to check several things at once | `&&`, `\|\|`, `!` | 4 |
| to add up a list | a loop with a running total | 5 |
| to look at each item of a list | `for...of` | 8 |
| to ignore a bad item | `continue` | 8 |
| to remember the best so far | a variable plus a comparison | 5 |

---

**4. When the output is wrong, print**

Don't guess. Print the values in the middle of your program and find the first line where reality differs from what you expected.

```ts
console.log("sum so far:", sum);
```

---

**Recap**

- Write down input, output and steps before coding.
- Build and run one step at a time.
- Match each step to a tool you already know.
- Debug by printing, not guessing.

**Next:** open `exercises.md` for the spec.
