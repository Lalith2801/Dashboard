const darkMode = document.querySelector('.dark-mode');

darkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode-variables');
  darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
  darkMode.querySelector('span:nth-child(2)').classList.toggle('active');

  // Store the preference in localStorage
  localStorage.setItem('theme', document.body.classList.contains('dark-mode-variables') ? 'dark' : 'light');
});

// Apply stored theme on page load
window.addEventListener('load', () => {
  const storedTheme = localStorage.getItem('theme');

  if (storedTheme === 'dark') {
    document.body.classList.add('dark-mode-variables');
    // Update the dark mode toggle visual state if needed (optional)
  }
});
