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
document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const form = event.target;
    const toast = document.getElementById('toast');
    
    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    
    // Basic client-side validation
    let hasError = false;
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    
    if (!firstName) {
        form.firstName.nextElementSibling.textContent = 'First name is required';
        hasError = true;
    }
    if (!lastName) {
        form.lastName.nextElementSibling.textContent = 'Last name is required';
        hasError = true;
    }
    if (!email) {
        form.email.nextElementSibling.textContent = 'Email is required';
        hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        form.email.nextElementSibling.textContent = 'Invalid email format';
        hasError = true;
    }
    if (!message) {
        form.message.nextElementSibling.textContent = 'Message is required';
        hasError = true;
    }
    
    if (hasError) return;
    
    // Show toast notification
    const showToast = (message, type) => {
        toast.textContent = message;
        toast.className = `toast ${type} show`;
        setTimeout(() => {
            toast.className = 'toast';
        }, 3000);
    };
    
    try {
        const response = await fetch('https://formspree.io/f/xpwdgobl', {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            showToast('Thank you! Your message has been sent.', 'success');
            form.reset();
        } else {
            showToast('Failed to send message. Please try again.', 'error');
        }
    } catch (error) {
        showToast('An error occurred. Please try again later.', 'error');
    }
});
  
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