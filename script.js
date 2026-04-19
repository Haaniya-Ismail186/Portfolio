document.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = menuBtn ? menuBtn.querySelector('i') : null;
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            mobileMenu.classList.toggle('active');
            
            const isActive = mobileMenu.classList.contains('active');
            
            if (isActive) {
                menuIcon.className = 'fas fa-times';
                document.body.style.overflow = 'hidden';
            } else {
                menuIcon.className = 'fas fa-bars';
                document.body.style.overflow = 'auto';
            }
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                menuIcon.className = 'fas fa-bars';
                document.body.style.overflow = 'auto';
            });
        });

        document.addEventListener('click', (e) => {
            if (mobileMenu.classList.contains('active') && 
                !mobileMenu.contains(e.target) && 
                !menuBtn.contains(e.target)) {
                mobileMenu.classList.remove('active');
                menuIcon.className = 'fas fa-bars';
                document.body.style.overflow = 'auto';
            }
        });
    }

    try {
        if (document.querySelector('#typed')) {
            new Typed('#typed', {
                strings: [
                    'Frontend Developer', 
                    'Software Technology Student', 
                    'Web & App Enthusiast', 
                    'Certified Tax Accountant'
                ],
                typeSpeed: 60,
                backSpeed: 40,
                loop: true,
                backDelay: 1500
            });
        }
    } catch (error) {
        console.warn("Typed.js not found");
    }

    try {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '60px',
            duration: 1500,
            delay: 200,
            reset: false
        });

        sr.reveal('.glass', { interval: 150 });
        sr.reveal('.reveal-left', { origin: 'left' });
        sr.reveal('.reveal-right', { origin: 'right' });
        sr.reveal('.gradient-text', { delay: 100 });
        sr.reveal('.skill-card', { interval: 100, origin: 'bottom' });
        sr.reveal('.project-card', { interval: 200 });
        
    } catch (error) {
        console.warn("ScrollReveal not found");
    }
});
