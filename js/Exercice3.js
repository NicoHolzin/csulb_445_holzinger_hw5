// Complete the code to produce the output shown.
// Input: An array of student objects
// Processing:
// Use functional programming. Use filter, map, reduce, and pure functions.
// Hint: See tutorial, "Student Results"
// Output: An array of student objects with the shown properties. Shows students whose last
// name begins with "C": First and Last name; Min, Max, and Average Score.
// Note:
// Don’t use the Math.min() and/or the Math.max functions.
// The objective is to familiarize you with the reduce method.

//Declare studentList Array
const studentList = [
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


// TO DO - Write higher order functions / There are many solutions
//Declare cLastNameResults. Use functional programming (filter, map, reduce, and pure functions) to generate a new array of objects (don’t use a traditional loop)

const cLastNameResults = studentList
  .filter(student => student.lastName.startsWith('C'))  
  .map(student => {                                     
    const totalScores = student.scores.reduce((sum, score) => sum + score, 0);
    const minScore = student.scores.reduce((min, score) => (score < min ? score : min), student.scores[0]);
    const maxScore = student.scores.reduce((max, score) => (score > max ? score : max), student.scores[0]);
    const avgScore = totalScores / student.scores.length;
    
    return {
      firstName: student.firstName,
      lastName: student.lastName,
      minScore: minScore,
      maxScore: maxScore,
      avgScore: avgScore.toFixed(2)
    };
  });

console.log(cLastNameResults);