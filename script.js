// ReclAIm Website JavaScript - Focused on Stability
(function() {
    'use strict';

    // Theme Management
    const themeToggle = document.getElementById('theme-toggle');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    function setTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            darkIcon.classList.add('hidden');
            lightIcon.classList.remove('hidden');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            darkIcon.classList.remove('hidden');
            lightIcon.classList.add('hidden');
            localStorage.setItem('theme', 'light');
        }
    }

    // Initialize theme
    setTheme(currentTheme);

    // Theme toggle event listener
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const isDark = document.documentElement.classList.contains('dark');
            setTheme(isDark ? 'light' : 'dark');
        });
    }

    // Smooth Scrolling Navigation
    function scrollToElement(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Button Event Listeners
    const joinWaitlistBtn = document.getElementById('join-waitlist-btn');
    const learnMoreBtn = document.getElementById('learn-more-btn');

    if (joinWaitlistBtn) {
        joinWaitlistBtn.addEventListener('click', function() {
            scrollToElement('signup-section');
        });
    }

    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            scrollToElement('how-it-works');
        });
    }

    // Vanta Waves Background Implementation
    let vantaEffect = null;
    let isVantaLoaded = false;

    function loadScript(src) {
        return new Promise((resolve, reject) => {
            // Check if script already exists
            if (document.querySelector(`script[src="${src}"]`)) {
                resolve();
                return;
            }
            
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    async function initVantaWaves() {
        const vantaContainer = document.getElementById('vanta-waves');
        if (!vantaContainer || isVantaLoaded) return;

        try {
            // Load THREE.js from CDN
            await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js');
            
            // Load Vanta.js waves from CDN
            await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js');

            // Wait for scripts to initialize
            await new Promise(resolve => setTimeout(resolve, 200));

            // Initialize Vanta effect using global objects
            const VANTA = window.VANTA;
            const THREE = window.THREE;

            if (VANTA && THREE && VANTA.WAVES) {
                vantaEffect = VANTA.WAVES({
                    el: vantaContainer,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: 0x1e40af, // Blue-700 to match theme
                    shininess: 30.00,
                    waveHeight: 15.00,
                    waveSpeed: 0.75,
                    zoom: 1.2
                });
                
                isVantaLoaded = true;
                console.log('Vanta Waves effect loaded successfully');
            } else {
                console.warn('Vanta.js or THREE.js not loaded properly, using fallback gradient');
            }
        } catch (error) {
            console.warn('Failed to load Vanta.js, using fallback gradient:', error);
        }
    }

    // Initialize Vanta Waves with delay to ensure DOM is ready
    function initializeVanta() {
        // Add a delay to ensure the page is fully loaded
        setTimeout(initVantaWaves, 1000);
    }

    // Intersection Observer for animations (optional enhancement)
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);

        // Observe sections for animations
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // Error handling for critical functions
    function safeExecute(fn, errorMessage) {
        try {
            fn();
        } catch (error) {
            console.error(errorMessage, error);
        }
    }

    // Initialize everything when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        safeExecute(initializeVanta, 'Error initializing Vanta waves');
        safeExecute(initScrollAnimations, 'Error initializing scroll animations');
    });

    // Cleanup on page unload
    window.addEventListener('beforeunload', function() {
        if (vantaEffect) {
            try {
                vantaEffect.destroy();
            } catch (error) {
                console.error('Error destroying Vanta effect:', error);
            }
        }
    });

    // Handle window resize for Vanta effect
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            if (vantaEffect && vantaEffect.resize) {
                try {
                    vantaEffect.resize();
                } catch (error) {
                    console.error('Error resizing Vanta effect:', error);
                }
            }
        }, 250);
    });

})();
