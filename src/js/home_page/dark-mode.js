const themeSwitcher = document.getElementById('darkModeToggle');
const html = document.querySelector('html');

if (localStorage.getItem('theme') === 'dark') {
  html.classList.add('dark-theme');
  themeSwitcher.checked = true;
}


themeSwitcher.addEventListener('change', function() {
  if (this.checked) {
    localStorage.setItem('theme', 'dark');
    html.classList.add('dark-theme');
    
  } else {
    localStorage.setItem('theme', 'light');
    html.classList.remove('dark-theme');
    
  }
});
