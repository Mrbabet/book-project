// Załadowanie danych książki
const bookData = {
    // Dane API
  };
  
  // Funkcja inicjująca modal z danymi książki
  function initModal(bookData) {
    document.getElementById('bookImage').src = bookData.book_image;
    document.getElementById('bookImage').style.width = bookData.book_image_width + 'px';
    document.getElementById('bookImage').style.height = bookData.book_image_height + 'px';
    document.getElementById('bookTitle').textContent = bookData.title;
    document.getElementById('bookAuthor').textContent = bookData.author;
    document.getElementById('bookDescription').textContent = bookData.description;
  
    const buyLinksContainer = document.getElementById('buyLinks');
    bookData.buy_links.forEach(link => {
      const a = document.createElement('a');
      a.href = link.url;
      a.textContent = link.name;
      a.target = '_blank';
      buyLinksContainer.appendChild(a);
    });
  }
  
  // Wyświetlenie modala
  function showModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
  }
  
  // Ukrycie modala
  function hideModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
  
  // Obsługa przycisku zamknięcia modala
  const span = document.getElementsByClassName('close')[0];
  span.onclick = function() {
    hideModal();
  }
  
  // Obsługa kliknięcia poza modalem
  window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
      hideModal();
    }
  }
  
  // Obsługa przycisku "ADD TO SHOPPING LIST"
  const toggleButton = document.getElementById('toggleShoppingList');
  toggleButton.addEventListener('click', function() {
    const isAdded = toggleButton.textContent.includes('REMOVE');
    if(isAdded) {
      toggleButton.textContent = 'ADD TO SHOPPING LIST';
      // Usuń z localStorage
    } else {
      toggleButton.textContent = 'REMOVE FROM SHOPPING LIST';
      // Dodaj do localStorage
    }
  });
  
  // Uruchomienie inicjalizacji i pokazanie modala
  initModal(bookData);
  showModal();
  