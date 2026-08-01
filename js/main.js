document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuBtn = document.querySelector('#menu-btn');
  const navbar = document.querySelector('.navbar');

  if (menuBtn && navbar) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('fa-times');
      navbar.classList.toggle('active');
    });

    window.addEventListener('scroll', () => {
      menuBtn.classList.remove('fa-times');
      navbar.classList.remove('active');
    });
  }

  // Typed Text Animation
  const typingElement = document.querySelector('.typing-text');
  if (typingElement) {
    const words = [
      'Cloud Computing',
      'Data Engineering',
      'DevOps Pipelines',
      'AI/ML Systems'
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 100;
    const eraseSpeed = 50;
    const pauseTime = 1800;

    function typeEffect() {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }

      let currentSpeed = isDeleting ? eraseSpeed : typeSpeed;

      if (!isDeleting && charIndex === currentWord.length) {
        currentSpeed = pauseTime;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        currentSpeed = 400;
      }

      setTimeout(typeEffect, currentSpeed);
    }

    typeEffect();
  }

  // Active Navigation Link Highlighting on Scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar ul li a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
