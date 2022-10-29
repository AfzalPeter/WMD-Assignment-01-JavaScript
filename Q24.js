/*  24.	More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
  */


// Tests for equality and inequality with strings
let a = "a", b="a";
console.log("is 'a'=='a' ? I predict True");
console.log("a" == "a");

console.log("is 'a'!=='a' ? I predict False");
console.log("a" !== "a");


// Tests using the lower case function
let c = "A", d="a";
console.log("is 'A'=='a' ? I predict False");
console.log("A" == "a");

console.log("is 'A'!=='a' ? I predict True");
console.log("A" !== "a");


// Numerical tests involving equality and inequality, 
var e = 5 , f= 8;
console.log("is 5 == 8 ? I predict False");
console.log(5 == 8);

console.log("is 5!==8 ? I predict True");
console.log(5 !== 8);

// greater than and less than, 
console.log("is 5>8 & 5<10 ? I predict False");
console.log(e>8 && e<10);

console.log("is 5<8 & 5<10 ? I predict True");
console.log(5<8 && 5<10);

//greater than or equal to, and less than or equal to

var age = 18;
console.log("is age>=3 && age < 12 ? I predict False");
console.log (age>=3 && age < 12);
console.log("is age>3 && age < 20 ? I predict True");
console.log (age>3 && age == 18);

// Tests using "and" and "or" operators
let x=6, y=3;
console.log("is x<10 && y>1 ? I predict True");
console.log(x<10 && y>1)
console.log("is x<10 && y<1 ? I predict False");
console.log(x<10 && y<1)

// Test whether an item is in a array 
// Test whether an item is not in a array

function is13(nums) {
    if (nums.indexOf(1) == -1 && nums.indexOf(3) == -1){
        return true;
    } else {
        return false;
    }
  }
  
  console.log("ia nums.indexOf(1) == -1 && nums.indexOf(3) == -1  ? I predict True");
  console.log(is13([7, 8]));
 
  console.log("ia nums.indexOf(1) == -1 && nums.indexOf(3) == -1  ? I predict False");
  console.log(is13([3, 2]));
  


    
