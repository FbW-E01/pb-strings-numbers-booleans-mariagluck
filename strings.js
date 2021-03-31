// 1. Declare a variable and assign a string as its value. Make sure the string is at least 6 characters long. Print the variable to the console.

const breakfast = "friedEggs";
const longEnough = breakfast.length > 6;
console.log(breakfast);
console.log("Breakfast's string has min 6 characters: ", longEnough);

// 2. Access the 2nd and 6th elements of the string using index notation. Print the elements to the console.
console.log(breakfast[2]);
console.log(breakfast[6]);

// 3. Declare a variable called `name` and assign a string as its value. 
const firstName = "Lucrecia";

// 4. Declare a variable called `age` and assign a number as its value. 
const age = 1;

// 5. Declare a variable called `year` and assign a number as its value. 
const year = 2020;

// 6. Using your declared variables, print a string to the console. For example, "Basem is 37 in 2020". 
console.log(firstName, age, year);
console.log("In the year: " + year + " " + firstName, "was born and now she is: " + age);
console.log(`In the year: ${year} ${firstName} was born and now she is ${age}`);

 
// 7. Declare a variable called `isMarried` and assign it a boolean value. 
const isMarried = false;


// 8. Print a string to the console, indicating whether or not your person is married. For example, "Basem is married: true"
console.log(firstName + "is married is " + isMarried);

// 9. Declare a variable called `programmingLanguage` and assign "JavaScript" as its value. Declare a variable called `isFun` and give it a value of `true`.  Print "JavaScript is fun: true" to the console, using your declared variables. 

const programmingLanguage = "JavaScript";
const isFun = true;
console.log(programmingLanguage + " is fun: " + isFun);

// 10. Print the `J` and `S` of "JavaScript" from the variable `programmingLanguage` to the console. 

console.log(programmingLanguage[0]);
console.log(programmingLanguage[4]);


// 11. Print the length of the string "JavaScript" to the console.
console.log(programmingLanguage.length);