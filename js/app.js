// Global E-Commerce Hub - Main Application
class ECommerceApp {
    constructor() {
        this.currentUser = null;
        this.products = [];
        this.categories = [];
        this.cart = [];
        this.init();
    }

    init() {
        this.loadUserSession();
        this.initializeEventListeners();
        this.loadInitialData();
        this.updateUI();
    }

    // User Session Management
    loadUserSession() {
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
        }
    }

    saveUserSession() {
        if (this.currentUser) {
            localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        } else {
            localStorage.removeItem('currentUser');
        }
    }

    // Event Listeners
    initializeEventListeners() {
        // Navigation
        document.addEventListener('DOMContentLoaded', () => {
            this.setupNavigation();
            this.setupModals();
            this.setupSearch();
        });

        // Window events
        window.addEventListener('resize', this.handleResize.bind(this));
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                if (link.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    this.scrollToSection(link.getAttribute('href').substring(1));
                }
            });
        });
    }

    setupModals() {
        // Modal close functionality
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal') || e.target.classList.contains('close')) {
                this.closeAllModals();
            }
        });

        // Escape key to close modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
    }

    setupSearch() {
        const searchInputs = document.querySelectorAll('input[type="search"], .search-input');
        searchInputs.forEach(input => {
            input.addEventListener('input', this.debounce(this.handleSearch.bind(this), 300));
        });
    }

    // Utility Functions
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    closeAllModals() {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
    }

    // Data Loading
    async loadInitialData() {
        try {
            await Promise.all([
                this.loadProducts(),
                this.loadCategories(),
                this.loadAffiliateData()
            ]);
        } catch (error) {
            console.error('Error loading initial data:', error);
            this.showAlert('Error loading data. Please refresh the page.', 'error');
        }
    }

    async loadProducts() {
        // Simulate API call - In real app, this would be an actual API
        return new Promise((resolve) => {
            setTimeout(() => {
                this.products = this.generateSampleProducts();
                resolve(this.products);
            }, 500);
        });
    }

    async loadCategories() {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.categories = [
                    { id: 1, name: 'Electronics', icon: 'fas fa-laptop' },
                    { id: 2, name: 'Fashion', icon: 'fas fa-tshirt' },
                    { id: 3, name: 'Home & Garden', icon: 'fas fa-home' },
                    { id: 4, name: 'Sports & Fitness', icon: 'fas fa-dumbbell' },
                    { id: 5, name: 'Books', icon: 'fas fa-book' },
                    { id: 6, name: 'Beauty', icon: 'fas fa-spa' }
                ];
                resolve(this.categories);
            }, 300);
        });
    }

    async loadAffiliateData() {
        // Load affiliate promotional content
        return new Promise((resolve) => {
            setTimeout(() => {
                this.affiliateData = {
                    flipkart: {
                        name: 'Flipkart',
                        deals: ['Electronics Sale - Up to 80% off', 'Fashion Week - 50% off'],
                        logo: 'assets/flipkart-logo.png'
                    },
                    amazon: {
                        name: 'Amazon',
                        deals: ['Prime Day Deals', 'Lightning Deals'],
                        logo: 'assets/amazon-logo.png'
                    },
                    alibaba: {
                        name: 'Alibaba',
                        deals: ['Wholesale Prices', 'Bulk Orders'],
                        logo: 'assets/alibaba-logo.png'
                    }
                };
                resolve(this.affiliateData);
            }, 200);
        });
    }

    generateSampleProducts() {
        const sampleProducts = [
            {
                id: 1,
                name: 'Wireless Bluetooth Headphones',
                price: 79.99,
                category: 'Electronics',
                image: 'assets/headphones.jpg',
                rating: 4.5,
                reviews: 1250,
                affiliate: 'amazon'
            },
            {
                id: 2,
                name: 'Smart Fitness Watch',
                price: 199.99,
                category: 'Electronics',
                image: 'assets/smartwatch.jpg',
                rating: 4.3,
                reviews: 890,
                affiliate: 'flipkart'
            },
            {
                id: 3,
                name: 'Premium Cotton T-Shirt',
                price: 29.99,
                category: 'Fashion',
                image: 'assets/tshirt.jpg',
                rating: 4.7,
                reviews: 2100,
                affiliate: 'alibaba'
            },
            {
                id: 4,
                name: 'Yoga Mat with Carrying Strap',
                price: 39.99,
                category: 'Sports & Fitness',
                image: 'assets/yogamat.jpg',
                rating: 4.6,
                reviews: 750,
                affiliate: 'amazon'
            },
            {
                id: 5,
                name: 'LED Desk Lamp',
                price: 49.99,
                category: 'Home & Garden',
                image: 'assets/desklamp.jpg',
                rating: 4.4,
                reviews: 560,
                affiliate: 'flipkart'
            }
        ];
        return sampleProducts;
    }

    // UI Updates
    updateUI() {
        this.updateAuthButtons();
        this.updateCartCount();
    }

    updateAuthButtons() {
        const loginBtn = document.getElementById('loginBtn');
        const signupBtn = document.getElementById('signupBtn');
        const userMenu = document.getElementById('userMenu');
        const userName = document.getElementById('userName');

        if (this.currentUser) {
            loginBtn.style.display = 'none';
            signupBtn.style.display = 'none';
            userMenu.style.display = 'flex';
            userName.textContent = this.currentUser.name;
        } else {
            loginBtn.style.display = 'inline-block';
            signupBtn.style.display = 'inline-block';
            userMenu.style.display = 'none';
        }
    }

    updateCartCount() {
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            cartCount.textContent = this.cart.length;
        }
    }

    // Search Functionality
    handleSearch(event) {
        const query = event.target.value.toLowerCase();
        if (query.length < 2) return;

        const filteredProducts = this.products.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        );

        this.displaySearchResults(filteredProducts);
    }

    displaySearchResults(products) {
        // This would update the product display
        console.log('Search results:', products);
    }

    // Event Handlers
    handleResize() {
        // Handle responsive behavior
        this.adjustLayoutForScreenSize();
    }

    handleScroll() {
        // Handle scroll events (e.g., lazy loading, sticky elements)
        this.handleStickyHeader();
    }

    adjustLayoutForScreenSize() {
        const isMobile = window.innerWidth <= 768;
        document.body.classList.toggle('mobile-view', isMobile);
    }

    handleStickyHeader() {
        const header = document.querySelector('.header');
        const scrolled = window.scrollY > 100;
        header.classList.toggle('scrolled', scrolled);
    }

    // Alert System
    showAlert(message, type = 'info') {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type}`;
        alertDiv.textContent = message;

        // Insert at top of page
        document.body.insertBefore(alertDiv, document.body.firstChild);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.parentNode.removeChild(alertDiv);
            }
        }, 5000);
    }

    // Cart Management
    addToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            this.cart.push(product);
            this.updateCartCount();
            this.showAlert(`${product.name} added to cart!`, 'success');
        }
    }

    removeFromCart(productId) {
        const index = this.cart.findIndex(p => p.id === productId);
        if (index > -1) {
            const product = this.cart.splice(index, 1)[0];
            this.updateCartCount();
            this.showAlert(`${product.name} removed from cart!`, 'info');
        }
    }

    // Logout
    logout() {
        this.currentUser = null;
        this.saveUserSession();
        this.updateUI();
        this.showAlert('Logged out successfully!', 'success');
    }
}

// Initialize the application
const app = new ECommerceApp();

// Global functions for HTML event handlers
window.app = app;
