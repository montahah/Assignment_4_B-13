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
const emptyState = document.getElementById("empty-state");

let currentTab = "all";

function switchTab(tab) {
  const tabs = ["all", "interview", "rejected"];
  currentTab = tab;
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
    section.classList.remove("hidden");
  }
  emptyState.classList.add("hidden");

  if (tab === "all") {
    allSection.classList.remove("hidden");
    interviewSection.classList.add("hidden");
    rejectSection.classList.add("hidden");
    if (allSection.children.length < 1) {
      emptyState.classList.remove("hidden");
    }
  } else if (tab === "interview") {
    interviewSection.classList.remove("hidden");
    allSection.classList.add("hidden");
    rejectSection.classList.add("hidden");
    if (interviewSection.children.length < 1) {
      emptyState.classList.remove("hidden");
    }
  } else {
    rejectSection.classList.remove("hidden");
    interviewSection.classList.add("hidden");
    allSection.classList.add("hidden");
    if (rejectSection.children.length < 1) {
      emptyState.classList.remove("hidden");
    }
  }
  updateStat();
}

// totalCount.innerText = allSection.children.length;
// jobsCorner.innerText = allSection.children.length;

switchTab(currentTab);

// All Sections
document
  .getElementById("all-sections")
  .addEventListener("click", function (event) {
    const clickedElement = event.target;
    const card = clickedElement.closest(".Card");
    const status = card.querySelector(".Status");
    const parent = card.parentNode;
    console.log(parent);

    if (clickedElement.classList.contains("interview-btn")) {
      status.innerText = "Interviewed";
      interviewSection.appendChild(card);
      updateStat();
    } else if (clickedElement.classList.contains("rejected-btn")) {
      status.innerText = "Rejected";
      rejectSection.appendChild(card);
      updateStat();
    } else if (clickedElement.classList.contains("delete-btn")) {
      parent.removeChild(card);
      updateStat();
    }
  });

function updateStat() {
  // totalCount.innerText = allSection.children.length;
  // interviewCount.innerText = interviewSection.children.length;
  // rejectCount.innerText = rejectSection.children.length;

  const counts = {
    all: allSection.children.length,
    interview: interviewSection.children.length,
    rejected: rejectSection.children.length,
  };

  totalCount.innerText = counts["all"];
  interviewCount.innerText = counts["interview"];
  rejectCount.innerText = counts["rejected"];

  jobsCorner.innerText = counts[currentTab];
}
updateStat();
