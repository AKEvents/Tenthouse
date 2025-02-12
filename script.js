function toggleTheme() {
    document.body.classList.toggle('dark');
    const themeToggle = document.querySelector('.theme-toggle');
    if (document.body.classList.contains('dark')) {
        themeToggle.textContent = '☀️ Light Mode';
    } else {
        themeToggle.textContent = '🌙 Dark Mode';
    }
}