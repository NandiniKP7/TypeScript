
// ==================================================
// DAY 16 — TYPESCRIPT EXERCISES
// ==================================================

// MAIN PROJECT — RECEIPT PRINTER (CORE)

type Line = {
  name: string;
  price: number;
  quantity: number;
};

const lines: Line[] = [
  { name: "Coffee", price: 3.5, quantity: 2 },
  { name: "Bagel", price: 2.25, quantity: 1 },
  { name: "Juice", price: 4, quantity: 3 },
];
let itemprice
let total=0
console.log("RECEIPT")
lines.forEach((line, index)=>{
  itemprice=(line.quantity*line.price).toFixed(2)
  total=(line.quantity*line.price)+total
  console.log(`${index+1}.${line.name} `+  "  x"+  `${line.quantity}`+"  =" +`${itemprice}`,)
})
console.log("TOTAL",total.toFixed(2))
// REQUIREMENTS:
// [ ] 1. Print RECEIPT as the heading.
// [ ] 2. Use forEach() to process every item.
// [ ] 3. Print the line number starting from 1.
// [ ] 4. Print the item name and quantity.
// [ ] 5. Calculate line total = price * quantity.
// [ ] 6. Display each line total with 2 decimal places.
// [ ] 7. Calculate the grand total of all items.
// [ ] 8. Print the grand total with 2 decimal places.

// EXPECTED OUTPUT:
// RECEIPT
// 1. Coffee x2 = 7.00
// 2. Bagel x1 = 2.25
// 3. Juice x3 = 12.00
// TOTAL: 21.25


// ==================================================
// CHALLENGE 1 — LOUD COLORS (CORE)
// ==================================================

const colors: string[] = ["red", "green", "blue"];

colors.forEach((color)=>
{
 console.log(color.toUpperCase())
})
// REQUIREMENTS:
// [ ] Use forEach() to visit every color.
// [ ] Convert each color to uppercase.
// [ ] Print each color on a separate line.

// EXPECTED OUTPUT:
// RED
// GREEN
// BLUE


// ==================================================
// CHALLENGE 2 — SUM AND AVERAGE (CORE)
// ==================================================

const num: number[] = [4, 8, 15];
let sum=0
num.forEach((n)=>
{
  sum=sum+n
})
console.log("Sum:" ,sum)
console.log("Average", (sum/(num.length)).toFixed(1))
// REQUIREMENTS:
// [ ] Declare a variable to track the sum.
// [ ] Use forEach() to add every number to the sum.
// [ ] Print the final sum.
// [ ] Calculate the average.
// [ ] Print the average with 1 decimal place.

// EXPECTED OUTPUT:
// Sum: 27
// Average: 9.0


// ==================================================
// CHALLENGE 3 — ARROW PRACTICE (STRETCH)
// ==================================================

const values: number[] = [1, 2, 3, 4];

// REQUIREMENTS:
// [ ] Create an arrow function named square.
// [ ] It accepts a number and returns its square.
// [ ] Print square(4) and square(9).
// [ ] Create an arrow function named isEven.
// [ ] It accepts a number and returns a boolean.
// [ ] Use forEach() on values.
// [ ] Print whether each number is even or odd.

// EXPECTED OUTPUT:
// 16
// 81
// 1 is odd
// 2 is even
// 3 is odd
// 4 is even

const square=(n:number):number=>
{
  return n*n
}

console.log(square(4))
console.log(square(9))

const isEven=(a:number):boolean=>{
  if(a%2==0)
  {
   return true
  }
  else{
    return false
  }  
}

values.forEach((v)=>{
  if(isEven(v))
  {
    console.log(v ,"is" , "Even")
  }
  else
  {
    console.log(v ,"is" , "Odd")
  }
})
// ==================================================
// CHALLENGE 4 — TASK REPORT (STRETCH)
// ==================================================

type Task = {
  title: string;
  done: boolean;
  minutes: number;
};

const tasks: Task[] = [
  { title: "Write report", done: true, minutes: 45 },
  { title: "Email Dana", done: false, minutes: 10 },
  { title: "Review code", done: false, minutes: 30 },
  { title: "Plan week", done: true, minutes: 20 },
];

let doneMinutes=0
let leftMinutes=0
tasks.forEach((t,index)=>{
  if(t.done)
  {
    doneMinutes=doneMinutes+t.minutes
    console.log(`${index+1}.`+ "[x]" ,t.title+" "  +"("+ t.minutes +"min)")
  }
  else{
    leftMinutes=leftMinutes+t.minutes
    console.log(`${index+1}.`+"[]" ,t.title+" "  +"("+ t.minutes +"min)")
  } 
})
console.log("Done:", doneMinutes+" " +"min")
console.log("Left:", leftMinutes +" "+"min")
// REQUIREMENTS:
// [ ] 1. Declare two variables: doneMinutes and leftMinutes.
// [ ] 2. Use forEach() to process every task.
// [ ] 3. Print each task number starting from 1.
// [ ] 4. Print [x] when done is true.
// [ ] 5. Print [ ] when done is false.
// [ ] 6. Print the task title and minutes.
// [ ] 7. Add completed task minutes to doneMinutes.
// [ ] 8. Add incomplete task minutes to leftMinutes.
// [ ] 9. Print both totals.

// EXPECTED OUTPUT:
// 1. [x] Write report (45 min)
// 2. [ ] Email Dana (10 min)
// 3. [ ] Review code (30 min)
// 4. [x] Plan week (20 min)
// Done: 65 min
// Left: 40 min
