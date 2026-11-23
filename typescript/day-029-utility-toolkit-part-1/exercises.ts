// Day 29 Exercises — Utility Toolkit, Part 1
// Complete each TODO yourself. No solutions are included.
// Run: npx tsx day29-exercises.ts

// MAIN PROJECT — Utility Toolkit, Part 1
// Create these reusable functions:
// greet(name): prints a greeting (does not need to return a value)
function greet(name:string)
{
    console.log("Hello",name+ "!")
}
// double(n): returns twice n
function double(n:number)
{
    return n*2
}
// add(a, b): returns their sum
function sumOfNum(a:number, b:number)
{
    return a+b
}
// square(n): returns n squared
function square(n:number)
{
    return n*n
}
// fullName(first, last): returns the full name
function fullName(first:string, last:string)
{
    return first+" "+last
}
// addTax(price): returns the price with 10% tax added
function  addTax(price:number)
{
    return price+price*10/100
}
// Call them to produce exactly:
// Hello, Ana!
// Hello, Ben!
// double(7) = 14
// add(2, 3) = 5
// square(9) = 81
// Ana Lopez
// Order total: 77
// The last line must call add() with the results of addTax(50) and addTax(20).

// TODO: Define the six functions and print the expected output.


// CHALLENGE 1 — Shout
// Write shout(text) that prints uppercase text followed by '!'.
// Call with "hello" and "typescript".
// Expected:
// HELLO!
// TYPESCRIPT!

// TODO: Write shout and call it twice.

function shout(text:string)
{
 return text.toUpperCase()+"!"
}
console.log(shout("hello"))
console.log(shout("typescript"))

// CHALLENGE 2 — Triple
// Write triple(n) that RETURNS n * 3.
// Print triple(4), triple(triple(2)), and triple(10) + 5.
// Expected:
// 12
// 18
// 35
function triple(num:number)
{
    return num*3
}
console.log(triple(4))

console.log(triple(triple(2)))

console.log(triple(10)+5)

// TODO: Write triple and print the three results.


// CHALLENGE 3 — Rectangle (OPTIONAL STRETCH)
// Write rectangleArea(width, height) and rectanglePerimeter(width, height).
// Both must return numbers.
// Print area and perimeter of 4 x 5, and area of 3 x 3.
// Expected:
// Area: 20
// Perimeter: 18
// Square 3x3 area: 9

// TODO: Write both functions and print the results.
function Area( w:number ,h:number)
{
    return w*h
}
function Perimeter(w:number, h:number)
{
    return 2 *(w+h)
}
console.log(Area(4,5))
console.log(Perimeter(4,5))
console.log(Perimeter(3,3))

// CHALLENGE 4 — Number and Name Helpers (OPTIONAL STRETCH)
// sumOf(numbers): takes number[], returns total using a loop.
// averageOf(numbers): returns average by CALLING sumOf(numbers).
// initials(first, last): returns uppercase first letters with dots (e.g. A.L.).
// Use the following data and names.
const challenge4Numbers: number[] = [4, 8, 15, 16, 23, 42];
// TODO: Print sum, average, initials("ana", "lopez"), initials("Ben", "Carter").
// Expected:
// Sum: 108
// Average: 18
// A.L.
// B.C.

function sumOf(num:number[])
{
    return num.reduce((acc,n)=>acc+n,0)
}
function AverageHelper(num:number[])
{
  return sumOf(num)/num.length
}
function initialsHelper(first:string ,last:string)
{
    return first[0].toUpperCase() +". " +last[0].toUpperCase()+"."
}
console.log(sumOf(challenge4Numbers))
console.log(AverageHelper(challenge4Numbers))
console.log(initialsHelper("ana", "lopez"))
console.log(initialsHelper("Ben", "Carter"))


function sumOfLoop(num:number[])
{
    let total=0
    for(let i=0 ;i<num.length;i++)
    {
   total=total+num[i]
    }
    return total
}