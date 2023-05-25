

var clearStorageButton = document.getElementById('clear-storage-button');

clearStorageButton.addEventListener('click', function() {
    localStorage.clear();
    console.log("Local storage cleared.");
  });


