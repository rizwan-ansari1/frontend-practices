const generateBtn = document.getElementById("generateBtn");
const errorMsg = document.getElementById("errorMsg");
const reportOutput = document.getElementById("reportOutput");

generateBtn.addEventListener("click", function () {
  console.log("Button was Clicked!");

  errorMsg.textContent = "";
  reportOutput.innerHtml = "";

  let name = document.getElementById("studentName").value.trim();
  let mark1 = document.getElementById("mark1").value.trim();
  let mark2 = document.getElementById("mark2").value.trim();
  let mark3 = document.getElementById("mark3").value.trim();

  if (name === "" || mark1 === "" || mark2 === "" || mark3 === "") {
    errorMsg.textContent = "Please Fill in all Feilds";
    return;
  }

  mark1 = Number(mark1);
  mark2 = Number(mark2);
  mark3 = Number(mark3);

  if (isNaN(mark1) || isNaN(mark2) || isNaN(mark3)) {
    errorMsg.textContent = "Marks must be numbers.";
    return;
  }

  let subjects = ["Math", "Science", "English"];
  let marks = [mark1, mark2, mark3];
  let total = 0;
  for (let i = 0; i < subjects.length; i++) {
    total = total + marks[i];
  }
  console.log("total is:", total);

  let average = total / subjects.length;
  average = average.toFixed(2);

  let grade = "";
  if (average >= 90) {
    grade = "A+";
  } else if (average >= 75) {
    grade = "A";
  } else if (average >= 60) {
    grade = "B";
  } else if (average >= 40) {
    grade = "B";
  } else {
    grade = "Fail";
  }

  console.log("the average and grade are :", average, grade);

  let listHTML = "";
  for (let i = 0; i < subjects.length; i++) {
    listHTML = listHTML + "<li>" + subjects[i] + ": " + marks[i] + "</li>";

    let displayName = name.toUpperCase();
    reportOutput.innerHTML =
      "<h2>" +
      displayName +
      "'s Report </h2>" +
      "<ul>" +
      listHTML +
      "</ul>" +
      "<p>Total:" +
      total +
      "</p>" +
      "<p> Average:" +
      average +
      "</p>" +
      "<p>Grade:" +
      grade +
      "</p>";
  }
});
