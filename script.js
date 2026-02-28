let totalCount = document.getElementById("total-count");
let jobsCorner = document.getElementById("jobs-corner");

let allJobs = document.getElementById("allJobs");

totalCount.innerText = allJobs.children.length;
jobsCorner.innerText = allJobs.children.length;

// Buttons
const tabActive = ["btn", "btn-primary"];
// const tabActive = ["btn bg-white px-10 py-5"];
const tabInactive = ["btn", "btn-soft"];

let currentTab = "all";

function switchTab(tab) {
  console.log(tab);
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
}
