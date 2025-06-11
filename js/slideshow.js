// Promotional Slideshow Manager
class SlideshowManager {
    constructor() {
        this.currentSlide = 0;
        this.slides = [];
        this.autoPlayInterval = null;
        this.autoPlayDelay = 5000; // 5 seconds
        this.isPlaying = true;
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.setupSlideshow();
            this.loadAffiliateContent();
            this.startAutoPlay();
            this.setupEventListeners();
        });
    }

    setupSlideshow() {
        this.slides = document.querySelectorAll('.slide');
        this.indicators = document.querySelectorAll('.indicator');
        
        if (this.slides.length === 0) {
            console.warn('No slides found');
            return;
        }

        // Initialize first slide
        this.showSlide(0);
    }

    setupEventListeners() {
        // Navigation buttons
        const prevBtn = document.querySelector('.slide-nav.prev');
        const nextBtn = document.querySelector('.slide-nav.next');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.previousSlide());
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextSlide());
        }

        // Indicators
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });

        // Pause on hover
        const slideshowContainer = document.querySelector('.slideshow-container');
        if (slideshowContainer) {
            slideshowContainer.addEventListener('mouseenter', () => this.pauseAutoPlay());
            slideshowContainer.addEventListener('mouseleave', () => this.resumeAutoPlay());
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.previousSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        });

        // Touch/swipe support
        this.setupTouchEvents();
    }

    setupTouchEvents() {
        const slideshowContainer = document.querySelector('.slideshow-container');
        if (!slideshowContainer) return;

        let startX = 0;
        let endX = 0;

        slideshowContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        slideshowContainer.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe(startX, endX);
        });
    }

    handleSwipe(startX, endX) {
        const threshold = 50; // Minimum swipe distance
        const diff = startX - endX;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Swiped left - next slide
                this.nextSlide();
            } else {
                // Swiped right - previous slide
                this.previousSlide();
            }
        }
    }

    // Slide Navigation
    showSlide(index) {
        if (this.slides.length === 0) return;

        // Hide all slides
        this.slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Remove active from all indicators
        this.indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });

        // Show current slide
        if (this.slides[index]) {
            this.slides[index].classList.add('active');
        }

        // Update indicator
        if (this.indicators[index]) {
            this.indicators[index].classList.add('active');
        }

        this.currentSlide = index;
        this.loadSlideContent(index);
    }

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(nextIndex);
    }

    previousSlide() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(prevIndex);
    }

    goToSlide(index) {
        if (index >= 0 && index < this.slides.length) {
            this.showSlide(index);
        }
    }

    // Auto Play
    startAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }

        this.autoPlayInterval = setInterval(() => {
            if (this.isPlaying) {
                this.nextSlide();
            }
        }, this.autoPlayDelay);
    }

    pauseAutoPlay() {
        this.isPlaying = false;
    }

    resumeAutoPlay() {
        this.isPlaying = true;
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
        this.isPlaying = false;
    }

    // Affiliate Content Loading
    async loadAffiliateContent() {
        try {
            await this.loadFlipkartContent();
            await this.loadAmazonContent();
            await this.loadGlobalContent();
        } catch (error) {
            console.error('Error loading affiliate content:', error);
        }
    }

    async loadFlipkartContent() {
        // Simulate loading Flipkart promotional content
        const flipkartSlide = document.querySelector('.slide:first-child');
        if (flipkartSlide) {
            const iframe = flipkartSlide.querySelector('iframe');
            const fallback = flipkartSlide.querySelector('.fallback-slide');
            
            // Simulate iframe loading failure and show fallback
            setTimeout(() => {
                if (iframe) {
                    iframe.style.display = 'none';
                }
                if (fallback) {
                    fallback.style.display = 'block';
                    this.setupFallbackContent(fallback, {
                        title: 'Flipkart Mega Sale',
                        description: 'Up to 80% off on Electronics, Fashion & More',
                        buttonText: 'Shop Now',
                        background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
                        link: 'https://www.flipkart.com'
                    });
                }
            }, 1000);
        }
    }

    async loadAmazonContent() {
        // Simulate loading Amazon promotional content
        const amazonSlide = document.querySelector('.slide:nth-child(2)');
        if (amazonSlide) {
            const iframe = amazonSlide.querySelector('iframe');
            const fallback = amazonSlide.querySelector('.fallback-slide');
            
            setTimeout(() => {
                if (iframe) {
                    iframe.style.display = 'none';
                }
                if (fallback) {
                    fallback.style.display = 'block';
                    this.setupFallbackContent(fallback, {
                        title: 'Amazon Prime Day',
                        description: 'Exclusive deals for Prime members',
                        buttonText: 'Explore Deals',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        link: 'https://www.amazon.com'
                    });
                }
            }, 1500);
        }
    }

    async loadGlobalContent() {
        // Load global brands content
        const globalSlide = document.querySelector('.slide:nth-child(3)');
        if (globalSlide) {
            this.setupFallbackContent(globalSlide, {
                title: 'Global Brand Collection',
                description: 'Discover products from top international retailers',
                buttonText: 'Browse Catalog',
                background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                link: 'pages/catalog.html'
            });
        }
    }

    setupFallbackContent(slideElement, content) {
        const slideContent = slideElement.querySelector('.slide-content');
        if (slideContent) {
            const title = slideContent.querySelector('h2');
            const description = slideContent.querySelector('p');
            const button = slideContent.querySelector('button');

            if (title) title.textContent = content.title;
            if (description) description.textContent = content.description;
            if (button) {
                button.textContent = content.buttonText;
                button.addEventListener('click', () => {
                    if (content.link.startsWith('http')) {
                        window.open(content.link, '_blank');
                    } else {
                        window.location.href = content.link;
                    }
                });
            }
        }

        // Apply background
        slideElement.style.background = content.background;
    }

    loadSlideContent(index) {
        // Load specific content for each slide
        const slide = this.slides[index];
        if (!slide) return;

        // Add loading animation
        slide.classList.add('loading');
        
        setTimeout(() => {
            slide.classList.remove('loading');
            
            // Trigger any slide-specific animations
            this.animateSlideContent(slide);
        }, 300);
    }

    animateSlideContent(slide) {
        const content = slide.querySelector('.slide-content');
        if (content) {
            content.style.opacity = '0';
            content.style.transform = 'translateX(-50px)';
            
            setTimeout(() => {
                content.style.transition = 'all 0.6s ease-out';
                content.style.opacity = '1';
                content.style.transform = 'translateX(0)';
            }, 100);
        }
    }

    // Analytics and Tracking
    trackSlideView(slideIndex) {
        // Track slide views for analytics
        console.log(`Slide ${slideIndex + 1} viewed`);
        
        // In a real application, you would send this data to your analytics service
        if (window.gtag) {
            window.gtag('event', 'slide_view', {
                slide_index: slideIndex,
                slide_title: this.getSlideTitle(slideIndex)
            });
        }
    }

    trackSlideClick(slideIndex, element) {
        // Track clicks on slide elements
        console.log(`Slide ${slideIndex + 1} clicked:`, element);
        
        if (window.gtag) {
            window.gtag('event', 'slide_click', {
                slide_index: slideIndex,
                element_type: element.tagName.toLowerCase()
            });
        }
    }

    getSlideTitle(index) {
        const slide = this.slides[index];
        if (slide) {
            const title = slide.querySelector('h2');
            return title ? title.textContent : `Slide ${index + 1}`;
        }
        return 'Unknown';
    }

    // Public API
    play() {
        this.isPlaying = true;
        this.startAutoPlay();
    }

    pause() {
        this.pauseAutoPlay();
    }

    stop() {
        this.stopAutoPlay();
    }

    getCurrentSlide() {
        return this.currentSlide;
    }

    getTotalSlides() {
        return this.slides.length;
    }
}

// Global functions for HTML event handlers
function changeSlide(direction) {
    if (window.slideshowManager) {
        if (direction > 0) {
            window.slideshowManager.nextSlide();
        } else {
            window.slideshowManager.previousSlide();
        }
    }
}

function currentSlide(index) {
    if (window.slideshowManager) {
        window.slideshowManager.goToSlide(index - 1); // Convert to 0-based index
    }
}

// Initialize slideshow manager
window.slideshowManager = new SlideshowManager();
