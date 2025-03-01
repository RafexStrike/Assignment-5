// Select the h3 element
const dateElement = document.getElementById('date');

// Get the current date
const today = new Date();

// Format the date as "Wed, Jul 28 2025"
const options = {
    weekday: 'short', // "Wed"
    month: 'short',   // "Jul"
    day: '2-digit',   // "28"
    year: 'numeric'   // "2025"
};
const formattedDate = today.toLocaleDateString('en-US', options).replace(/(\d+)/, '$1 '); // Adds space before day

// Set the text content of the h3
dateElement.textContent = formattedDate;