
console.log("Script loaded!");
// Select the button element
const themeToggleBtn = document.getElementById('theme-toggle');

// Add an event listener to the button
themeToggleBtn.addEventListener('click', () => {
    // Toggle dark mode by adding/removing the 'dark-mode' class to the body element
    document.body.classList.toggle('dark-mode');

    // Save user preference to localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
});

// Check if dark mode is enabled in localStorage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Set initial theme based on user preference
if (isDarkMode) {
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.remove('dark-mode');
}
