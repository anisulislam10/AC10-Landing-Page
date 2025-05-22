document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const header = document.querySelector('.header');
  
  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  
  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
  
  // Header scroll effect
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Form validation and submission
  const contactForm = document.getElementById('contactForm');
  const ac10ContactForm = document.getElementById('ac10ContactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Form validation logic here
      console.log('Form submitted!');
      // You would typically add AJAX submission here
      this.reset();
      
      // Show success message
      alert('Thank you for your inquiry! We will get back to you soon.');
    });
  }
  
  if (ac10ContactForm) {
    ac10ContactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Form validation logic here
      console.log('AC10 Form submitted!');
      // You would typically add AJAX submission here
      this.reset();
      
      // Show success message
      alert('Thank you for your inquiry about the AC10 Mini Candy Depositor! We will get back to you soon.');
    });
  }
  
  // Animate elements when they come into view
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.feature-card, .spec-item, .component-card, .video-wrapper');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Set initial state for animated elements
  document.querySelectorAll('.feature-card, .spec-item, .component-card, .video-wrapper').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  // Run once on load
  animateOnScroll();
  
  // Run on scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Add floating animation to feature icons
  
});


document.addEventListener('DOMContentLoaded', function() {
  const specRows = document.querySelectorAll('.spec-row');
  
  specRows.forEach(row => {
    const name = row.querySelector('.spec-name');
    
    name.addEventListener('click', function() {
      // Toggle the active class on the parent row
      row.classList.toggle('active');
    });
  });
});