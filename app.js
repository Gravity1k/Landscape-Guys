function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.navbar_menu');
    const mobileToggle = document.querySelector('#mobile-menu');
    
    if (mobileMenu && mobileToggle) {
      const isMenuActive = mobileMenu.classList.contains('active'); // Check if the menu is active
      
      if (isMenuActive) {
        mobileMenu.classList.remove('active'); // Hide the menu
        mobileToggle.classList.remove('is-active'); // Deactivate the toggle button
      } else {
        mobileMenu.classList.add('active'); // Show the menu
        mobileToggle.classList.add('is-active'); // Activate the toggle button
      }
    }
  }

  
  
  // Event listener for toggle
  document.addEventListener('DOMContentLoaded', function () {
    const mobileToggle = document.querySelector('#mobile-menu');
    mobileToggle.addEventListener('click', function () {
      toggleMobileMenu(); // Trigger the toggle function on click
    });

  });

  document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar"); // Select your navbar
  
    // Function to adjust the navbar's margin based on scroll position
    function adjustNavbarMargin() {
      const scrollPosition = window.scrollY; // Get the current scroll position
  
      if (scrollPosition > 120) {
        // If scrolled past 80 pixels, remove the margin and center the navbar
        navbar.style.margin = "0 auto"; // Centers the navbar horizontally
      } else {
        // If scrolled less than or equal to 80 pixels, reset the margin
        navbar.style.margin = "20px auto"; // Reset to original margin
      }
    }
  
    // Listen for the scroll event and adjust the navbar margin accordingly
    window.addEventListener("scroll", adjustNavbarMargin);
  });

  function redirectToSection(pageUrl, sectionId) {
    const fullUrl = `${pageUrl}#${sectionId}`;
    window.location.href = fullUrl; // Navigate to the specified page and section
}

document.querySelector('.navbar_links').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    redirectToSection('/index.html', 'services'); // Redirect to the home page's services section
});



// Hide the mobile menu function
function closeMobileMenu() {
    const mobileMenu = document.querySelector('.navbar_menu');
    const mobileToggle = document.querySelector('#mobile-menu');

    if (mobileMenu) {
        mobileMenu.classList.remove('active'); // Hide the menu
    }
    if (mobileToggle) {
        mobileToggle.classList.remove('is-active'); // Reset the toggle button
    }
}



  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');

    // Check if modal exists before proceeding with additional logic
    if (modal) { // Correct check to see if modal is not null
        modal.style.display = "none"; // Hide the modal by default

        const closeButton = modal.querySelector('.close-button');
        const carouselImage = modal.querySelector('#carousel-image');
        const leftArrow = modal.querySelector('.left-arrow');
        const rightArrow = modal.querySelector('.right-arrow');

        let currentImageIndex = 0; // Track the current image
        let images = []; // Store the array of images for the carousel

        // Logic to open modal when clicking on a card
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', function (e) {
                e.preventDefault(); // Prevent page navigation

                // Get the image URLs from the card's data-attribute
                images = this.getAttribute('data-images').split(','); // Split into an array
                currentImageIndex = 0; // Reset the index to the first image
                carouselImage.src = `images/${images[currentImageIndex]}`; // Set the initial image

                modal.style.display = 'flex'; // Show the modal
            });
        });

        // Arrow navigation logic
        leftArrow.addEventListener('click', () => {
            if (currentImageIndex > 0) {
                currentImageIndex--; // Move to the previous image
                carouselImage.src = `images/${images[currentImageIndex]}`; // Show the previous image
            }
        });

        rightArrow.addEventListener('click', () => {
            if (currentImageIndex < images.length - 1) {
                currentImageIndex++; // Move to the next image
                carouselImage.src = `images/${images[currentImageIndex]}`; // Show the next image
            }
        });
        
        closeButton.addEventListener('click', () => {
            console.log("Close button clicked");
            modal.style.display = 'none';
        });

        modal.addEventListener('touchstart', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
        

        // Close the modal when clicking outside the modal content
        modal.addEventListener('click', (event) => {
            if (event.target === modal) { // Check if click is outside modal content
                modal.style.display = 'none';
            }
        });
    }
});