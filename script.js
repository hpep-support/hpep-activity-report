document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('[data-reveal]');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            
            if(elTop < triggerBottom) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Subtle parallax effect for hero
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        if (hero) {
            const scroll = window.pageYOffset;
            hero.style.backgroundPositionY = `${scroll * 0.5}px`;
        }
    });

    console.log('HPEP Landing Page initialized');
});
