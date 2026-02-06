// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const navBrand = header.querySelector('.nav-brand h2');
    const navBrandSpan = header.querySelector('.nav-brand span');
    const navLinks = header.querySelectorAll('.nav-menu a');
    const hamburgerSpans = header.querySelectorAll('.hamburger span');
    
    const heroHeight = document.querySelector('.hero') ? document.querySelector('.hero').offsetHeight : 100;
    
    if (window.scrollY > heroHeight - 80) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.backdropFilter = 'blur(10px)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        if (navBrand) navBrand.style.color = '#FFAC49';
        if (navBrandSpan) navBrandSpan.style.color = '#666';
        navLinks.forEach(a => a.style.color = '#333');
        hamburgerSpans.forEach(s => s.style.background = '#333');
    } else {
        header.style.background = 'transparent';
        header.style.backdropFilter = 'none';
        header.style.boxShadow = 'none';
        if (navBrand) navBrand.style.color = 'white';
        if (navBrandSpan) navBrandSpan.style.color = 'rgba(255,255,255,0.8)';
        navLinks.forEach(a => a.style.color = 'white');
        hamburgerSpans.forEach(s => s.style.background = 'white');
    }
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.specialty-card, .bio-text, .contact-info');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Video placeholder click handler
document.querySelector('.video-placeholder').addEventListener('click', () => {
    alert('Em breve colocarei um video meu aqui. Enquanto isso, você pode me conhecer melhor através do meu perfil no Instagram!');
});

// WhatsApp button click tracking (optional)
document.querySelectorAll('[href*="wa.me"]').forEach(button => {
    button.addEventListener('click', () => {
        console.log('WhatsApp button clicked');
        // Aqui você pode adicionar tracking analytics se necessário
    });
});

// Form validation and interaction enhancements
document.addEventListener('DOMContentLoaded', () => {
    // Add loading animation to CTA buttons
    document.querySelectorAll('.cta-button, .whatsapp-button').forEach(button => {
        button.addEventListener('click', function(e) {
            // Add a subtle loading effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Add hover effects to cards
    document.querySelectorAll('.specialty-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}