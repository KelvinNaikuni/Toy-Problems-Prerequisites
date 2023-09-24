function calculateGrade(){
// Prompt the user to input marks

const userInput = prompt("Enter your marks (0-100):");

// Parse the input as a number
const marks = parseFloat(userInput);
 
// Determine the grade based on the marks
 let grade;
if (marks > 79) {
  grade = "A";
} else if (marks >= 60 && marks <= 79) {
  grade = "B";
} else if (marks >= 50 && marks <= 59) {
  grade = "C";
} else if (marks >= 40 && marks <= 49) {
  grade = "D";
} else {
  grade = "E";
}
 // Display the grade to the user
 console.log(`Your grade is: ${grade}`);
}
// Call the function to calculate and display the grade
calculateGrade();
