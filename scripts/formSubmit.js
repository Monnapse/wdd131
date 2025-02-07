const submissionsElement = document.getElementById("submissions");

const submissions = localStorage.getItem("submissionsCount") || 0;
const newSubmissionCount = parseInt(submissions);

submissionsElement.textContent = newSubmissionCount;