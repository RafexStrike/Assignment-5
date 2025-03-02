const dateElement = document.getElementById("date");
const today = new Date();

// Format the date as "Wed, Jul 28 2025"
const options = {
  weekday: "short", // "Wed"
  month: "short", // "Jul"
  day: "2-digit", // "28"
  year: "numeric", // "2025"
};
const formattedDate = today
  .toLocaleDateString("en-US", options)
  .replace(/(\d+)/, "$1 "); // Adds space before day

dateElement.textContent = formattedDate;
//
//
//
//
//
// Function to generate a random hex color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const body = document.getElementById("body");

const themeButton = document.getElementById("themeButton");
themeButton.addEventListener("click", () => {
  let randomColor = getRandomColor();
  console.log(randomColor);
  body.style.backgroundColor = randomColor;
});

// experimental queryselector all
const completeBtns = document.querySelectorAll(
  ".rounded-md.px-3.py-2.text-white"
);
const logHistorySection = document.getElementById("logHistorySection");
let taskCount = document.getElementById("taskCount");
let taskDue = document.getElementById("taskDue");
for (let completeBtn of completeBtns) {
  completeBtn.addEventListener("click", () => {
    let taskDone =
      completeBtn.parentNode.parentNode.parentNode.querySelector(
        "h2"
      ).innerText;
    let p = document.createElement("p");
    p.innerText = `You have completed the task: ${taskDone} at ${formattedDate}.`;
    logHistorySection.append(p);
    p.style.backgroundColor = "#F4F7FF";
    p.style.borderRadius = "8px";
    p.style.padding = "5px 10px";
    // making the button functionally disabled
    completeBtn.disabled = true;
    completeBtn.setAttribute("disabled", true);
    // ...and making the button look disabled!
    completeBtn.style.opacity = "0.5";
    completeBtn.style.cursor = "not-allowed";
    completeBtn.style.backgroundColor = "#9BA8F8";
    let currentDone = parseInt(taskCount.innerText);
    let newDone = currentDone + 1;
    taskCount.innerText = newDone;
    let currentDue = parseInt(taskDue.innerText);
    let newDue = currentDue - 1;
    taskDue.innerText = newDue;
  });
}
