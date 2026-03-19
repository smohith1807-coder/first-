// Get elements
const changeButton = document.querySelector('.change');
const popupOverlay = document.querySelector('.popupoverlay');
const popupBox = document.querySelector('.popupbox');
const container = document.querySelector('.container');
const startSection = document.querySelector('.start');

// Show popup when button is clicked
changeButton.addEventListener('click', function(event) {
    event.preventDefault();
    popupOverlay.style.display = 'block';
    popupBox.style.display = 'block';
    container.style.display = 'none';
    startSection.style.display = 'none';
    changeButton.style.display = 'none';
});

// Remove the overlay click event - popup won't close on click anymore
// If you want to add a close button later, you can add it here