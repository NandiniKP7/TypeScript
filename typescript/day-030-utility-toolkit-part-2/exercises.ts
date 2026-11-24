// Day 30 Exercises: Utility Toolkit, Part 2
// Complete each TODO yourself. No solutions or hints included.
// Run: npx tsx day30-exercises.ts

// ============================================================
// MAIN PROJECT: Utility Toolkit, Part 2
// ============================================================
// Write five functions with typed parameters AND explicit return types.
//
// isEven(n): checks whether n is even.
// isAdult(age): checks whether age is 18 or older.
// gradeFor(score): 90 or more -> "A", 70 or more -> "C", otherwise "F".
// average(a, b, c): returns the average of three numbers.
// clamp(value, min, max): returns min if value is below min, max if value
//   is above max, otherwise returns value.
//
// TODO: Define the five functions and call them to print:
// 7 is even: false
// 12 is even: true
// Age 17 adult: false
// Age 30 adult: true
// 95 -> A
// 72 -> C
// 40 -> F
// Average of 80, 90, 100: 90
// clamp(150, 0, 100) = 100
// clamp(-5, 0, 100) = 0
// clamp(42, 0, 100) = 42

function isEven(n:number):boolean
{
   if(n%2==0)
   {
    return true
   }
   return false
}
function isAdult(age:number):boolean
{
    if(age>=18)
    {
        return true
    }
    return false
}
function grade(score:number): string
{
    if(score>=90)
    { 
     return "Grade A"
    }
    else if(score>=70 && score <90)
    {
        return  "Grade C"
    }
    else if(score<70) {
        return  "Grade F"
    }
    else
    {
       return "No Grade"
    }
}
function averageNumbers(a:number ,b:number, c:number):number
{
   let  total =a+b+c
    let avg =total/3
    return avg
}
function clamp(value:number, min:number ,max:number):number
{
    if(value<min)
    {
        return min
    }
    else if(value >max)
    {
        return max
    }
    else{
        return value
    }
}
// ============================================================
// CHALLENGE 1: Yes or No
// ============================================================
// Write isPositive(n: number): true only when n is above 0.
// Write isLongWord(word: string): true when word has 6 or more letters.
// Both functions must have explicit return types.
function isPositive(n: number): boolean {
  if (n > 0) {
    return true;
  }
  return false;
}

function isLongWord(word: string):boolean {
  if (word.length >= 6) {
    return true;
  }
  return false;
}
// TODO: Define both functions and print using these calls:
console.log(isPositive(5), isPositive(-2), isPositive(0));
console.log(isLongWord("cat"), isLongWord("keyboard"));
//
// Expected:
// true false false
// false true

// ============================================================
// CHALLENGE 2: Ticket Price
// ============================================================
// Write ticketPrice(age): number. Every path must return.
// Under 5: $0; under 18: $8; under 65: $15; otherwise: $10.

const ages30: number[] = [3, 12, 40, 70];

// TODO: Define ticketPrice and loop through ages30 to print:
// Age 3: $0
// Age 12: $8
// Age 40: $15
// Age 70: $10

function ticketPrice(age: number): string {
  if (age < 5) {
    return "Ticket price is $0";
  } else if (age < 18 && age >= 5) {
    return "Ticket price is $8";
  } else if (age < 65 && age >= 18) {
    return "Ticket price is $15";
  } else {
    return "Ticket price is $10";
  }
}

// ============================================================
// CHALLENGE 3: Max and Repeat (OPTIONAL STRETCH)
// ============================================================
// Write maxOfThree(a, b, c): number, without Math.max.
// Write repeatText(text: string, times: number): string, which joins
// text to itself `times` times using a loop.
//
// TODO: Define both functions and print the results of:
// maxOfThree(4, 9, 2)
// maxOfThree(10, 3, 10)
// repeatText("ab", 3)
// "[" + repeatText("x", 0) + "]"
//
// Expected:
// 9
// 10
// ababab
// []

function maxofThree(a: number, b: number, c: number): number {
  if (a >= b && a >=c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

function repeatText(text:string ,count:number):string 
{
    let result=""
    for (let i=0;i<count;i++)
    {
     result=result+text
    }
    return result
}

// ============================================================
// CHALLENGE 4: Password Checker (OPTIONAL STRETCH)
// ============================================================
// isValidPassword(password): boolean. False if fewer than 8 characters
//   or contains a space, otherwise true. Use early returns.
// passwordMessage(password): string. Returns "ok" or "invalid".
//   It must call isValidPassword.
// countValid(passwords: string[]): number. Counts valid passwords with a loop.

const passwords30: string[] = [
  "secret123",
  "short",
  "has space 1",
  "longenough",
];

// TODO: Define all three functions and print each password's message,
// followed by the valid count.
//
// Expected:
// secret123: ok
// short: invalid
// has space 1: invalid
// longenough: ok
// Valid count: 2
function isValidPassword(password: string): boolean {
  if (password.length < 8 || password.includes(" ")) {
    return false;
  }
  return true;
}
function passwordMessage(password: string): string {
  if (isValidPassword(password)) {
    return "ok";
  }
  return "invalid";
}
function countValidPasswords(passwords: string[]): number {
  let count = 0;
  for (let i = 0; i < passwords.length; i++) {
    if (isValidPassword(passwords[i])) {
      count++;
    }
  }
  return count;
}
