const dateElement = document.getElementById('date');
const today = new Date();

// Format the date as "Wed, Jul 28 2025"
const options = {
    weekday: 'short', // "Wed"
    month: 'short',   // "Jul"
    day: '2-digit',   // "28"
    year: 'numeric'   // "2025"
};
const formattedDate = today.toLocaleDateString('en-US', options).replace(/(\d+)/, '$1 '); // Adds space before day

dateElement.textContent = formattedDate;
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// Function to generate a random hex color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
const body = document.getElementById("body")

const themeButton = document.getElementById("themeButton");
themeButton.addEventListener("click", ()=>{
    let randomColor = getRandomColor()
    console.log(randomColor)
    body.style.backgroundColor = randomColor
})
