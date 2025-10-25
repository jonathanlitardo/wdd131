// ========================================
// ACTIVITY 1 - Map (Convert strings to HTML)
// ========================================
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`; //the html string made from step
}
const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join(''); // set the innerHTML
console.log("Activity 1 - Steps HTML:", stepsHtml);


// ========================================
// ACTIVITY 2 - Map (Convert grades to GPA points)
// ========================================
const grades = ["A", "B", "A"];

function convertGradeToPoints(grade) {
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

const gpaPoints = grades.map(convertGradeToPoints);
console.log("Activity 2 - GPA Points:", gpaPoints);


// ========================================
// ACTIVITY 3 - Reduce (Calculate GPA)
// ========================================
const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});
const gpa = pointsTotal / gpaPoints.length;
console.log("Activity 3 - GPA:", gpa);


// ========================================
// ACTIVITY 4 - Filter (Keep short words)
// ========================================
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function (word) {
  return word.length < 6;
});
console.log("Activity 4 - Short Words:", shortWords);


// ========================================
// ACTIVITY 5 - indexOf (Find lucky number)
// ========================================
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);
console.log("Activity 5 - Lucky Number Index:", luckyIndex);