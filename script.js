// All Count
let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectCount = document.getElementById("reject-count");

let jobsCorner = document.getElementById("jobs-corner");

// Buttons
const tabActive = ["btn", "btn-primary"];
const tabInactive = ["btn", "btn-soft"];

const allSection = document.getElementById("all-section");
const interviewSection = document.getElementById("interview-section");
const rejectSection = document.getElementById("reject-section");

let currentTab = "all";

function switchTab(tab) {
  const tabs = ["all", "interview", "rejected"];
  for (const t of tabs) {
    const tabName = document.getElementById("tab-" + t);
    if (t === tab) {
      tabName.classList.remove(...tabInactive);
      tabName.classList.add(...tabActive);
    } else {
      tabName.classList.remove(...tabActive);
      tabName.classList.add(...tabInactive);
    }
  }
  const pages = [allSection, interviewSection, rejectSection];
  for (const section of pages) {
    section.classList.add("hidden");
  }
  if (tab === "all") {
    allSection.classList.remove("hidden");
  } else if (tab === "interview") {
    interviewSection.classList.remove("hidden");
  } else if (tab === "rejected") {
    rejectSection.classList.remove("hidden");
  }
}

totalCount.innerText = allSection.children.length;
jobsCorner.innerText = allSection.children.length;

switchTab(currentTab);

// All Sections
document
  .getElementById("all-sections")
  .addEventListener("click", function (event) {
    const clickedElement = event.target;

    if (clickedElement.classList.contains("interview-btn")) {
      console.log("hello");
    } else if (clickedElement.classList.contains("rejected-btn")) {
      console.log("hello");
    } else if (clickedElement.classList.contains("delete-btn")) {
      console.log("hello");
    }
  });
