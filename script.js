// ==================== SMOOTH SCROLL & ANIMATIONS ====================

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'scrollFadeIn 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add animation to elements on scroll
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.skill-category, .project-card, .achievement-card, .stat-card, .timeline-item'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});

// ==================== PARALLAX SCROLLING ====================

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const parallaxElements = document.querySelectorAll('.sphere');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrollY * speed}px)`;
    });

    // Update navbar on scroll
    const navbar = document.querySelector('.navbar');
    if (scrollY > 50) {
        navbar.style.background = 'rgba(15, 15, 30, 0.95)';
        navbar.style.boxShadow = '0 5px 20px rgba(102, 126, 234, 0.1)';
    } else {
        navbar.style.background = 'rgba(15, 15, 30, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// ==================== NAVIGATION ====================

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger?.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Close mobile menu on link click
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.style.display = 'none';
    });
});

// ==================== ACTIVE NAV HIGHLIGHT ====================

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === '#' + current) {
            item.classList.add('active');
        }
    });
});

// ==================== FORM HANDLING ====================

const contactForm = document.getElementById('contactForm');

contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = {
        name: contactForm.querySelector('input[type="text"]').value,
        email: contactForm.querySelector('input[type="email"]').value,
        message: contactForm.querySelector('textarea').value
    };
    
    // Show success message
    const button = contactForm.querySelector('button');
    const originalText = button.textContent;
    button.textContent = '✓ Message Sent!';
    button.style.background = 'linear-gradient(135deg, #4ade80, #22c55e)';
    
    // Reset after 3 seconds
    setTimeout(() => {
        contactForm.reset();
        button.textContent = originalText;
        button.style.background = '';
    }, 3000);
    
    // You can send the form data to a backend service here
    console.log('Form submitted:', data);
});

// ==================== SCROLL TO ANCHOR ====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== MOUSE FOLLOW EFFECT (Optional) ====================

const mouseFollowCube = () => {
    const cube = document.querySelector('.cube');
    if (!cube) return;

    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        
        cube.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    });
};

// ==================== CARD HOVER EFFECTS ====================

const addCardHoverEffect = () => {
    const cards = document.querySelectorAll(
        '.project-card, .skill-category, .achievement-card, .stat-card'
    );
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
};

// ==================== ANIMATED COUNTER ====================

const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
};

// Trigger counters when stats section is visible
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const number = parseFloat(stat.textContent);
                if (!isNaN(number)) {
                    animateCounter(stat, number, 1500);
                }
            });
            entry.target.dataset.counted = 'true';
            statObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statObserver.observe(aboutStats);
}

// ==================== SKILL TAG ANIMATION ====================

const animateSkillTags = () => {
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.05}s`;
    });
};

// ==================== TEXT TYPING EFFECT ====================

const typeWriter = (element, text, speed = 50) => {
    let i = 0;
    element.textContent = '';
    
    const type = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    
    type();
};

// ==================== GLOW EFFECT ON MOUSE MOVE ====================

const addGlowEffect = () => {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        const glowX = x * 100;
        const glowY = y * 100;
        
        heroSection.style.setProperty('--glow-x', glowX + '%');
        heroSection.style.setProperty('--glow-y', glowY + '%');
    });
};

// ==================== LAZY LOAD IMAGES ====================

const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
};

// ==================== INITIALIZE ALL ====================

document.addEventListener('DOMContentLoaded', () => {
    // Check if in hero section
    const isHero = document.querySelector('.hero');
    if (isHero) {
        mouseFollowCube();
        addGlowEffect();
    }
    
    addCardHoverEffect();
    animateSkillTags();
    lazyLoadImages();

    // Add active class to nav on page load
    const activeSection = document.querySelector('section');
    if (activeSection) {
        const navLink = document.querySelector(
            `.nav-links a[href="#${activeSection.id}"]`
        );
        if (navLink) {
            navLink.classList.add('active');
        }
    }

    // Log initialization
    console.log('Portfolio loaded successfully! 🚀');
});

// ==================== KEYBOARD SHORTCUTS ====================

document.addEventListener('keydown', (e) => {
    // Press '/' to focus search or jump to about
    if (e.key === '/') {
        e.preventDefault();
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Press 'c' to focus contact
    if (e.key === 'c' || e.key === 'C') {
        if (!document.activeElement.matches('input, textarea')) {
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// ==================== THEME TOGGLE (Optional) ====================

const createThemeToggle = () => {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '🌙';
    themeToggle.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: rgba(102, 126, 234, 0.3);
        border: 2px solid rgba(102, 126, 234, 0.5);
        color: #667eea;
        font-size: 1.5rem;
        cursor: pointer;
        transition: 0.3s;
        z-index: 999;
    `;
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        themeToggle.innerHTML = document.body.classList.contains('light-theme') ? '☀️' : '🌙';
    });
    
    document.body.appendChild(themeToggle);
};

// createThemeToggle(); // Uncomment to enable

// ==================== PERFORMANCE MONITORING ====================

const logPerformance = () => {
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page Load Time: ${pageLoadTime}ms`);
    }
};

window.addEventListener('load', logPerformance);

// ==================== ACCESSIBILITY IMPROVEMENTS ====================

// Add focus visible styles
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('tab-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('tab-navigation');
});
