// Work with the studentList array above
// You discovered that for each exam, there were extra credit points that were not added to
// the scores. Additionally, scores are missing for one exam.
// Your tasks:


// c. Display results
// Display results per the format shown below.
// Note/Hint:
//  There are many solutions to this exercise.
//  One approach is to use two loops
// o First loop updates the scores
// o Second loop adds the average to the scores
// Output:
// Hint:
// Write a loop iterating through all the students. Use console.log to format the output.

//Declare studentList Array
let studentList = [
  {
  firstName: "Allan",
  lastName: "Able",
  scores: [95, 85, 92, 98]
  },
  {
  firstName: "Amy",
  lastName: "Alexander",
  scores: [80, 88, 100]
  },
  {
  firstName: "Betty",
  lastName: "Barns",
  scores: [70, 80, 90, 100]
  },
  {
  firstName: "Bob",
  lastName: "Bones",
  scores: [75, 85, 95, 85]
  },
  {
  firstName: "Cindy",
  lastName: "Chase",
  scores: [95, 90, 92, 98]
  },
  {
  firstName: "Charles",
  lastName: "Chips",
  scores: [88, 99, 90]
  },
  ];

// a. Extra credit points
// For all students, update each score in the scores array by 5 points.
// Note: Update the existing array, don’t create a new one.
console.log("Extra credit points");
studentList.forEach(student => student.scores = student.scores.map(score => score +5));
console.log(studentList);

// b. Missing exam score
// For all students, calculate the average exam score and add that score to the scores
// array.
// Note: Update the existing array, don’t create a new one.
console.log("Missing exam score");

studentList.forEach(student => 
  student.scores.push(
    (student.scores.reduce(
      (sum, score) => sum+score, 0)
      /student.scores.length)
    )
  );

console.log(studentList);

// c. Display results
// Display results per the format shown below.
// Note/Hint:
//  There are many solutions to this exercise.
//  One approach is to use two loops
// o First loop updates the scores
// o Second loop adds the average to the scores
// Output:
// Hint:
// Write a loop iterating through all the students. Use console.log to format the output.
console.log("Display results");

studentList.forEach(student => {
  console.log(`Full name (last, first): ${student.lastName}, ${student.firstName}`);
  console.log(`Updated scores are: ${student.scores.join(', ')}`)}
);