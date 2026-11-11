// ==================================================
// DAY 17 — TYPESCRIPT EXERCISES
// Topics: map(), object transformation, spread, typed results
// ==================================================

// ==================================================
// MAIN PROJECT — USER VIEW-MODEL BUILDER (CORE)
// ==================================================

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
};

type UserView = {
  id: number;
  displayName: string;
  email: string;
  isAdult: boolean;
};

const users: User[] = [
  {
    id: 1,
    firstName: "Ana",
    lastName: "Lopez",
    email: "ana@example.com",
    age: 30,
  },
  {
    id: 2,
    firstName: "Ben",
    lastName: "Ortiz",
    email: "BEN@Example.com",
    age: 16,
  },
  {
    id: 3,
    firstName: "Cara",
    lastName: "Singh",
    email: "cara@example.com",
    age: 41,
  },
];

// REQUIREMENTS:
// [ ] 1. Use map() to transform users into a new UserView[] array.
// [ ] 2. Preserve each user's id.
// [ ] 3. Create displayName by combining firstName and lastName with a space.
// [ ] 4. Convert email to lowercase.
// [ ] 5. Set isAdult to true when age >= 18, otherwise false.
// [ ] 6. Print the number of users.
// [ ] 7. Use forEach() to print each transformed user.
// [ ] 8. Print each user's id, displayName, email, and adult/minor status.
// [ ] 9. Use map() to create a separate array containing only display names.
// [ ] 10. Print all display names.
// [ ] 11. Use map() to create an array of ages increased by 1.
// [ ] 12. Print the ages for next year.
// [ ] 13. Create a new copy of the first user using spread (...).
// [ ] 14. In the new copy, increase age by 1.
// [ ] 15. Print the original first user's age and the copied user's age.
// [ ] 16. Ensure the original users array remains unchanged.

// EXPECTED OUTPUT:
// Users: 3
// 1: Ana Lopez <ana@example.com> adult
// 2: Ben Ortiz <ben@example.com> minor
// 3: Cara Singh <cara@example.com> adult
// Names: Ana Lopez, Ben Ortiz, Cara Singh
// Ages next year: 31, 17, 42
// Original age: 30, new age: 31

console.log("Users:", users.length);

const uv: UserView[] = users.map((u) => {
  let adult: boolean = true;
  if (u.age >= 18) {
    adult = true;
  } else {
    adult = false;
  }
 return {
    id: u.id,
    displayName: u.firstName + " " + u.lastName,
    email: u.email.toLowerCase(),
    isAdult: adult
  }});
console.log(uv)
const names = users.map((n) => n.firstName + " " + n.lastName);
console.log("Names:", names);

const ages = users.map((a) => a.age + 1);
console.log("Ages next year:", ages);

// ==================================================
// CHALLENGE 1 — TEMPERATURE CONVERTER (CORE)
// ==================================================

// REQUIREMENTS:
// [ ] 1. Use map() to convert each Celsius temperature to Fahrenheit.
// [ ] 2. Apply the formula: Fahrenheit = Celsius * 9 / 5 + 32.
// [ ] 3. Store the results in a new array.
// [ ] 4. Print the converted temperatures.
// [ ] 5. Keep the original celsius array unchanged.

// EXPECTED OUTPUT:
// 32, 68, 212
const celsius: number[] = [0, 20, 100];
const f: number[] = celsius.map((t) => (t * 9) / 5 + 32);
console.log(f);
// ==================================================
// CHALLENGE 2 — WORD FACTS (CORE)
// ==================================================

const words: string[] = ["tea", "coffee", "milk"];

// REQUIREMENTS:
// [ ] 1. Use map() to create an array of word lengths.
// [ ] 2. Print the word lengths.
// [ ] 3. Use a second map() on the original words array.
// [ ] 4. Convert every word to uppercase.
// [ ] 5. Add "!" to the end of each uppercase word.
// [ ] 6. Print the transformed words.
// [ ] 7. Print the number of words in the mapped array.

// EXPECTED OUTPUT:
// 3, 6, 4
// TEA! COFFEE! MILK!
// 3 words

const l: number[] = words.map((w) => w.length);
const u: string[] = words.map((w) => w.toUpperCase() + "!");
console.log(l);
console.log(u);
console.log(words.length, "words");
// ==================================================
// CHALLENGE 3 — HALF-PRICE SALE (STRETCH)
// ==================================================

type Product = {
  name: string;
  price: number;
};

const products: Product[] = [
  { name: "Pen", price: 2 },
  { name: "Book", price: 10 },
  { name: "Bag", price: 25 },
];

const prodnames: string[] = products.map(
  (n) => n.name + ": " + "" + "$" + n.price,
);
console.log(prodnames);
const fullprices: number[] = products.map((p) => p.price);
const halfprices: number[] = products.map((h) => h.price / 2);
console.log(fullprices);
console.log(halfprices);
// REQUIREMENTS:
// [ ] 1. Use map() to transform each product into a text label.
// [ ] 2. Each label must contain the product name and price.
// [ ] 3. Format label prices with 2 decimal places.
// [ ] 4. Use forEach() to print each label on a separate line.
// [ ] 5. Use map() to create a new sale products array.
// [ ] 6. Use spread (...) to copy each product object.
// [ ] 7. Reduce each copied product's price by 50%.
// [ ] 8. Print only the sale prices.
// [ ] 9. Print the original product prices.
// [ ] 10. Ensure the original products remain unchanged.

// EXPECTED OUTPUT:
// Pen: $2.00
// Book: $10.00
// Bag: $25.00
// 1, 5, 12.5
// 2, 10, 25

// ==================================================
// CHALLENGE 4 — STUDENT SUMMARIES (STRETCH)
// ==================================================

type Student = {
  name: string;
  scores: number[];
};

type Summary = {
  name: string;
  average: number;
  level: string;
};

const students: Student[] = [
  { name: "Ana", scores: [90, 80, 100] },
  { name: "Ben", scores: [55, 65, 60] },
  { name: "Dan", scores: [40, 50, 30] },
];
let total;
let avg;
for (let i = 0; i < students.length; i++) {
  students[i].scores;
  total = 0;
  avg = 0;
  for (let j = 0; j < students[i].scores.length; j++) {
    total = total + students[i].scores[j];
    avg = total / students[i].scores.length;
  }
  if (avg > 90) {
    console.log(students[i].name + ": " + avg + "(high)");
  } else if (avg > 60 && avg < 90) {
    console.log(students[i].name + ": " + avg + "(pass)");
  } else {
    console.log(students[i].name + ": " + avg + "(fail)");
  }
}
const summaries: Summary[] = students.map((student) => {
  let total = 0;
  let l = "high";
  for (let j = 0; j < student.scores.length; j++) {
    total += student.scores[j];
  }

  let avg = total / student.scores.length;

  if (avg >= 90) {
    l = "high";
  } else if (avg >= 60 && avg < 90) {
    l = "pass";
  } else {
    l = "fail";
  }
  return {
    name: student.name,
    average: avg,
    level: l,
  };
});

// REQUIREMENTS:
// [ ] 1. Use map() to transform Student[] into Summary[].
// [ ] 2. Each summary must contain name, average, and level.
// [ ] 3. Calculate the total of each student's scores.
// [ ] 4. Calculate average = total / number of scores.
// [ ] 5. Assign level based on average:
//         average >= 90 -> "high"
//         average >= 60 -> "pass"
//         average < 60  -> "fail"
// [ ] 6. Return a Summary object for each student.
// [ ] 7. Use forEach() with index to print each summary.
// [ ] 8. Print task numbers starting from 1.
// [ ] 9. Print name, average, and level.
// [ ] 10. Check whether Summary[] and Student[] have equal lengths.
// [ ] 11. Print the boolean result of that comparison.

// EXPECTED OUTPUT:
// 1. Ana: 90 (high)
// 2. Ben: 60 (pass)
// 3. Dan: 40 (fail)
// Same count: true

// ==================================================
// DAY 17 COMPLETION
// ==================================================

// CORE:
// [ ] Main Project — User View-Model Builder
// [ ] Challenge 1 — Temperature Converter
// [ ] Challenge 2 — Word Facts

// STRETCH:
// [ ] Challenge 3 — Half-Price Sale
// [ ] Challenge 4 — Student Summaries

// REVIEW CRITERIA:
// - Correct map() usage
// - Correct transformations and calculations
// - Correct TypeScript types
// - Original arrays/objects preserved where required
// - All functional requirements implemented
