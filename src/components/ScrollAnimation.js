export const fadeInOnScroll = () => {
    const sections = document.querySelectorAll('.section-animation');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1,
    });

    sections.forEach((section) => {
        observer.observe(section);
    });

    // Use setTimeout to add the fade-in class to any sections that are visible on page load.
    setTimeout(() => {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
                section.classList.add('fade-in');
            }
        });
    }, 100);  // Adjust the delay based on when your content is fully loaded.
};
