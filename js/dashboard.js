window.addEventListener('scroll', function() {
    const heroText = document.querySelector('.welcome-text');
    const scrollPosition = window.scrollY;

    // Add class to trigger animation when user scrolls
    if (scrollPosition > 50) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});