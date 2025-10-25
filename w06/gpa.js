// GPA Calculator - Organizing Functions Exercise

/**
 * Gets grades from the input element

 */
function getGrades(inputSelector) {
  // get grades from the input box
  const grades = document.querySelector(inputSelector).value;
  // split them into an array (String.split(','))
  const gradesArray = grades.split(",");
  // clean up any extra spaces, and make the grades all uppercase. (Array.map())
  const cleanGrades = gradesArray.map((grade) => grade.trim().toUpperCase());
  console.log("Grades entered:", cleanGrades);
  // return grades
  return cleanGrades;
}

/**
 * Converts a letter grade to GPA points
 * @param {string} grade - Letter grade (A, B, C, D, F)
 * @returns {number} - GPA point value
 */
function lookupGrade(grade) {
  // converts the letter grade to it's GPA point value and returns it
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  } else if (grade === "C") {
    points = 2;
  } else if (grade === "D") {
    points = 1;
  }
  return points;
}

/**
 * Calculates GPA from an array of letter grades
 * @param {array} grades - Array of letter grades
 * @returns {string} - Calculated GPA rounded to 2 decimal places
 */
function calculateGpa(grades) {
  // gets a list of grades passed in
  // convert the letter grades to gpa points
  const gradePoints = grades.map((grade) => lookupGrade(grade));
  console.log("Grade points:", gradePoints);
  // calculates the GPA
  const gpa =
    gradePoints.reduce((total, num) => total + num) / gradePoints.length;
  // return the GPA
  return gpa.toFixed(2);
}

/**
 * Outputs the GPA to the specified HTML element
 * @param {string} gpa - The calculated GPA
 * @param {string} selector - CSS selector for output element
 */
function outputGpa(gpa, selector) {
  // takes a gpa value and displays it in the HTML in the element identified by the selector passed in
  const outputElement = document.querySelector(selector);
  outputElement.innerText = `GPA: ${gpa}`;
  console.log("Final GPA:", gpa);
}

/**
 * Handles the button click event
 * Orchestrates getting grades, calculating GPA, and displaying result
 */
function clickHandler() {
  // when the button in our html is clicked
  // get the grades entered into the input
  const grades = getGrades("#grades");
  // calculate the gpa from the grades entered
  const gpa = calculateGpa(grades);
  // display the gpa
  outputGpa(gpa, "#output");
}

// Add event listener to the submit button
document.querySelector("#submitButton").addEventListener("click", clickHandler);

console.log("GPA Calculator loaded successfully!");