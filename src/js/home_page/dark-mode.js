const checkbox = document.getElementById('darkModeToggle');
const header = document.getElementById('header'); 
checkbox.addEventListener('change', function() {
  if (this.checked) {
    document.body.classList.add('dark-mode');
    
  } else {
    document.body.classList.remove('dark-mode');
    
  }
});
