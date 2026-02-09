// Dark mode functionality
function darkMode() {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark-mode'); //toggles classes

    // Save preference to localStorage
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');

    // Update icon
    updateDarkModeIcon(isDark);
}

function updateDarkModeIcon(isDark) {
    const icon = document.querySelector('.dark-mode-toggle i');
    if (icon) {
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Initialize dark mode on page load
document.addEventListener('DOMContentLoaded', function() {
    const darkModePreference = localStorage.getItem('darkMode');
    const html = document.documentElement;

    if (darkModePreference === 'enabled') {
        html.classList.add('dark-mode');
        updateDarkModeIcon(true);
    } else {
        updateDarkModeIcon(false);
    }
});