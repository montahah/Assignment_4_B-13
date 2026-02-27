let totalCount = document.getElementById("total-count");
let jobsCorner = document.getElementById("jobs-corner");

let allJobs = document.getElementById("allJobs");

totalCount.innerText = allJobs.children.length;
jobsCorner.innerText = allJobs.children.length;
