document.addEventListener('DOMContentLoaded', function () {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the element is visible
            }
        });
    });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});



// The food truck icon
// Dev Dish's quarterly menu
// Developer's Favorites section and images
// Location and hours section