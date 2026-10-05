/**
 * ReceiptVault — Privacy & Legal Policy Center
 * Pure Vanilla JavaScript — Zero external requests, zero analytics, zero cookies.
 */

document.addEventListener('DOMContentLoaded', function () {
  // Mobile navigation drawer toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', function () {
      const isExpanded = navLinks.classList.toggle('show');
      mobileToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
      mobileToggle.innerHTML = isExpanded ? '✕' : '☰';
    });

    // Close mobile menu on Esc key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.innerHTML = '☰';
      }
    });
  }

  // Active page link highlight
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
