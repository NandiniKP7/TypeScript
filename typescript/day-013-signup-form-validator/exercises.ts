// # Day 13 Exercises

// ## Today's project

// A signup form validator. Each signup has a name, an email and a password. The program cleans the name and email, checks all three with small functions, and prints what is wrong. The data:

// ```ts
const signups = [
  { name: "  Ana  ", email: " ana@example.com ", password: "secret123" },
  { name: "   ", email: "ben@example.com", password: "password1" },
  { name: "Cara", email: "cara.example.com", password: "short" },
];
// ```
for (const signup of signups) {
  console.log(UserNameValidator(signup.name))
  console.log(EmailValidator(signup.email))
  console.log(PasswordValidator(signup.password))
}
function UserNameValidator(name:string):string
{
    if(name.trim().length >= 2)
    {
      return "valid" +name
    }
    else{
      return "invalid" +name
    }
}

function EmailValidator(email:string):string
{
    if(email.trim().includes("@") && email.trim().includes(".") && !email.trim().includes(" ") )
    {
      return "valid"  +email
    }
    else{
      return "invalid" +email
    }
}
function PasswordValidator(password:string):string
{
    if(password.trim().length >= 8 && !password.trim().includes(" "))
    {
      return "valid" 
    }
    else{
      return "invalid" +password
    }
}
// Rules: a name needs at least 2 characters after trimming. An email must include `@` and `.` and must not include a space (after trimming). A password needs at least 8 characters (do not trim it). It prints:

// ```
// Signup 1: valid (Ana, ana@example.com)
// Signup 2: invalid
//   - name
// Signup 3: invalid
//   - email
//   - password
// Valid signups: 1 of 3
// ```

// **Build it yourself first.** Use today's `README.md` as your reference. If you are stuck for 15 minutes, open `project-walkthrough.md`.

// Open a hint only after 10 minutes of trying.

// **Core (about 30 minutes):** the project and Challenges 1-2. Challenges 3-4 are stretch: do them if you have time, or carry them to the next day.

// ## Challenge 1: Adult Check
// **Goal:** Write a yes/no function.
// **Requirements:** Write `isAdult(age: number): boolean` that is true for 18 or more. Call it with 17, 18 and 40 and print each answer.
// **Expected output:**
// ```
// false
// true
// true
// ```

function isAdult(age: number): boolean {
  if (age >=18) {
    return true;
  } else {
    return false;
  }
}
console.log(isAdult(17));
console.log(isAdult(18));
console.log(isAdult(40));
// <details><summary>Hint 1</summary>The whole function body can be one `return` with a comparison.</details>
// <details><summary>Hint 2</summary>The shape: `function isAdult(age: number): boolean { return ...; }`, where the return value is a comparison of `age` with 18.</details>

// ## Challenge 2: Username Cleaner
// **Goal:** Write a sanitizing function (it changes the value).
// **Requirements:** Write `cleanUsername(raw: string): string` that trims and lower-cases. Print the result of cleaning `"  NanDini "`, `"BOB"` and `"   "`, each inside square brackets so you can see the spaces.
// **Expected output:**
// ```
// [nandini]
// [bob]
// []
// ```
let arr: string[] = ["  NanDini ", "BOB", "   "];
function sanitizing(name: string) :string{
  return(name.trim().toLowerCase());
}
for (let a of arr) {
  console.log(sanitizing(a));
}
// <details><summary>Hint 1</summary>Chain `.trim().toLowerCase()` and return it.</details>
// <details><summary>Hint 2</summary>For the brackets use a template literal: `` `[${...}]` ``.</details>

// ## Challenge 3: Username Validator (stretch)
// **Goal:** Write a validation function that trims before checking.
// **Requirements:** Write `isValidUsername(u: string): boolean`. After trimming, the username must have 3 to 12 characters and no spaces inside. Test it on `["ab", "  ana  ", "a b c", "averyveryverylongname", "dan99", "     "]`, printing the original in quotes, a colon, and the answer.
// **Expected output:**
// ```
// "ab": false
// "  ana  ": true
// "a b c": false
// "averyveryverylongname": false
// "dan99": true
// "     ": false
// ```
let abc:string[] =["ab", "  ana  ", "a b c", "averyveryverylongname", "dan99", "     "]
function userNameValidator(username:string):boolean
{
  if(username.trim().length>=3 && username.trim().length<=12 && !username.trim().includes(" "))
  {
    return true
  }
  else{
    return false
  }
}
for(let user of abc)
{
   console.log(user+ ":"+ userNameValidator(user))
}

// <details><summary>Hint 1</summary>Trim into a variable first, then do every check on that variable.</details>
// <details><summary>Hint 2</summary>Combine three checks with `&&`: at least 3, at most 12, `!includes(" ")`.</details>

// ## Challenge 4 (mini boss, stretch): Phone Number Cleaner
// **Goal:** Sanitize, then validate, with a loop.
// **Requirements:** Write `cleanPhone(raw: string): string` that trims and removes every `-` and every space. For `["555-123-4567", " 5551234567 ", "555 12", "   ", "555 123 4567"]`, clean each one. If the cleaned text is empty print `empty`. If it has exactly 10 characters print `ok: ` and the cleaned number. Otherwise print `bad: ` and the cleaned text. At the end print how many were ok.
// **Expected output:**
// ```
// ok: 5551234567
// ok: 5551234567
// bad: 55512
// empty
// ok: 5551234567
// Good numbers: 3
// ```
// <details><summary>Hint 1</summary>`replaceAll("-", "")` removes dashes. You need a second `replaceAll` for spaces.</details>
// <details><summary>Hint 2</summary>Loop with `for...of`. Check empty first and use `continue`.</details>
// <details><summary>Hint 3</summary>Keep a `let good: number = 0` and add to it in the ok case.</details>

// ## When you finish
// Paste your code and output here for review.

let no:string[]=["555-123-4567", " 5551234567 ", "555 12", "   ", "555 123 4567"]
let validno=0
function cleanPhone(raw:string):string{
   let cleanstring= raw.trim().replaceAll("-","").replaceAll(" ","")
   if(cleanstring.length==10)
   {
    validno++
    return "ok:"+cleanstring 
   }
   else if(cleanstring.length==0)
   {
    return "empty"
   }
   else{
    return "bad" +cleanstring
   }
}

for( let n of no)
{
  console.log(cleanPhone(n))

}
console.log(validno)