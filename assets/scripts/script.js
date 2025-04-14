// Mobile navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const hamburgerIcon = document.querySelector('.hamburger');
  const closeIcon = document.querySelector('.close-icon');

  // Toggle mobile menu
  mobileNavToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });

  // Close mobile menu when clicking a nav link
  const mobileNavLinks = mobileMenu.querySelectorAll('a');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
      hamburgerIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideMenu = mobileMenu.contains(event.target);
    const isClickOnToggle = mobileNavToggle.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnToggle && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      hamburgerIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }
  });
});



document.addEventListener('DOMContentLoaded', function() {
  // Get all cards
  const cards = document.querySelectorAll('.card');
  
  // Add animation class to cards when they come into viewport
  function animateOnScroll() {
    cards.forEach(card => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (cardPosition < screenPosition) {
        card.classList.add('visible');
      }
    });
  }
  
  // Call once on load
  animateOnScroll();
  
  // Listen for scroll events
  window.addEventListener('scroll', animateOnScroll);
  
  // Add click event to cards for mobile
  cards.forEach(card => {
    card.addEventListener('click', function() {
      // For future interaction functionality
      console.log('Card clicked:', this.querySelector('.card-title').textContent);
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');
  
  function animateOnScroll() {
    cards.forEach(card => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (cardPosition < screenPosition) {
        card.classList.add('visible');
      }
    });
  }
  
  animateOnScroll();
  
  window.addEventListener('scroll', animateOnScroll);
  
  // Add click event to cards for mobile
  cards.forEach(card => {
    card.addEventListener('click', function() {
      // For future interaction functionality
      console.log('Card clicked:', this.querySelector('.card-title').textContent);
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  // Get all cards
  const cards = document.querySelectorAll('.news-card');
  
  // Add animation class to cards when they come into viewport
  function animateOnScroll() {
    cards.forEach(card => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (cardPosition < screenPosition) {
        card.classList.add('visible');
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }
    });
  }
  
  // Set initial styles for animation
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease ' + (index * 0.1) + 's';
  });
  
  // Call once on load
  animateOnScroll();
  
  // Listen for scroll events
  window.addEventListener('scroll', animateOnScroll);
  
  // Add click event to cards for mobile
  cards.forEach(card => {
    card.addEventListener('click', function() {
      console.log('Card clicked:', this.querySelector('.news-title').textContent);
    });
  });
  
  // Add scroll to top functionality
  const topBtn = document.querySelector('.top-btn');
  topBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Add click events to other floating buttons
  const inquiryBtn = document.querySelector('.inquiry-btn');
  inquiryBtn.addEventListener('click', function() {
    console.log('Inquiry button clicked');
  });
  
  const reservationBtn = document.querySelector('.reservation-btn');
  reservationBtn.addEventListener('click', function() {
    console.log('Reservation button clicked');
  });
  
  // Handle "more" button clicks
  const moreBtns = document.querySelectorAll('.more-btn');
  moreBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const sectionTitle = this.closest('.section-header').querySelector('.section-title').textContent;
      console.log(`More button clicked for: ${sectionTitle}`);
    });
  });
});document.addEventListener('DOMContentLoaded', function() {
  // Get all cards
  const cards = document.querySelectorAll('.news-card');
  
  // Add animation class to cards when they come into viewport
  function animateOnScroll() {
    cards.forEach(card => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (cardPosition < screenPosition) {
        card.classList.add('visible');
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }
    });
  }
  
  // Set initial styles for animation
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease ' + (index * 0.1) + 's';
  });
  
  // Call once on load
  animateOnScroll();
  
  // Listen for scroll events
  window.addEventListener('scroll', animateOnScroll);
  
  // Add click event to cards for mobile
  cards.forEach(card => {
    card.addEventListener('click', function() {
      console.log('Card clicked:', this.querySelector('.news-title').textContent);
    });
  });
  
  // Add scroll to top functionality
  const topBtn = document.querySelector('.top-btn');
  topBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Add click events to other floating buttons
  const inquiryBtn = document.querySelector('.inquiry-btn');
  inquiryBtn.addEventListener('click', function() {
    console.log('Inquiry button clicked');
  });
  
  const reservationBtn = document.querySelector('.reservation-btn');
  reservationBtn.addEventListener('click', function() {
    console.log('Reservation button clicked');
  });
  
  // Handle "more" button clicks
  const moreBtns = document.querySelectorAll('.more-btn');
  moreBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const sectionTitle = this.closest('.section-header').querySelector('.section-title').textContent;
      console.log(`More button clicked for: ${sectionTitle}`);
    });
  });
});




const track = document.querySelector('.carousel-track');
const slides = Array.from(document.querySelectorAll('.carousel-item'));

let currentIndex = 2;

updateCarousel();

setInterval(() => {
  // Move to the next slide
  // If we reach the end, loop back
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}, 4000);


function updateCarousel() {
 

  // Get the width of the container
  const containerWidth = document
    .querySelector('.carousel-container')
    .getBoundingClientRect().width;

  let offset = 0;
  for (let i = 0; i < currentIndex; i++) {
    offset += slides[i].getBoundingClientRect().width + 32; 
  }
  
  offset -= (slides[currentIndex].getBoundingClientRect().width / 2);
  offset -= (containerWidth / 2);

  track.style.transform = `translateX(${-offset}px)`;
}
