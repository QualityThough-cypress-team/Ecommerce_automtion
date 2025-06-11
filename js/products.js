// Products Management Module
class ProductsManager {
    constructor() {
        this.products = [];
        this.filteredProducts = [];
        this.currentPage = 1;
        this.productsPerPage = 12;
        this.currentSort = 'name';
        this.currentFilters = {
            categories: [],
            priceRanges: [],
            affiliates: [],
            search: ''
        };
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.loadProducts();
            this.setupEventListeners();
            this.setupFilters();
        });
    }

    async loadProducts() {
        try {
            // Simulate API call to load products
            this.products = await this.fetchProducts();
            this.filteredProducts = [...this.products];
            this.renderProducts();
            this.updateProductCount();
            this.renderPagination();
        } catch (error) {
            console.error('Error loading products:', error);
            this.showError('Failed to load products. Please try again.');
        }
    }

    async fetchProducts() {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        return [
            {
                id: 1,
                name: 'Wireless Bluetooth Headphones',
                price: 79.99,
                category: 'Electronics',
                image: 'fas fa-headphones',
                rating: 4.5,
                reviews: 1250,
                affiliate: 'amazon',
                description: 'High-quality wireless headphones with noise cancellation'
            },
            {
                id: 2,
                name: 'Smart Fitness Watch',
                price: 199.99,
                category: 'Electronics',
                image: 'fas fa-clock',
                rating: 4.3,
                reviews: 890,
                affiliate: 'flipkart',
                description: 'Advanced fitness tracking with heart rate monitor'
            },
            {
                id: 3,
                name: 'Premium Cotton T-Shirt',
                price: 29.99,
                category: 'Fashion',
                image: 'fas fa-tshirt',
                rating: 4.7,
                reviews: 2100,
                affiliate: 'alibaba',
                description: 'Comfortable 100% cotton t-shirt in various colors'
            },
            {
                id: 4,
                name: 'Yoga Mat with Carrying Strap',
                price: 39.99,
                category: 'Sports & Fitness',
                image: 'fas fa-dumbbell',
                rating: 4.6,
                reviews: 750,
                affiliate: 'amazon',
                description: 'Non-slip yoga mat perfect for all types of yoga'
            },
            {
                id: 5,
                name: 'LED Desk Lamp',
                price: 49.99,
                category: 'Home & Garden',
                image: 'fas fa-lightbulb',
                rating: 4.4,
                reviews: 560,
                affiliate: 'flipkart',
                description: 'Adjustable LED desk lamp with multiple brightness levels'
            },
            {
                id: 6,
                name: 'Wireless Gaming Mouse',
                price: 89.99,
                category: 'Electronics',
                image: 'fas fa-mouse',
                rating: 4.8,
                reviews: 1890,
                affiliate: 'amazon',
                description: 'High-precision gaming mouse with RGB lighting'
            },
            {
                id: 7,
                name: 'Running Shoes',
                price: 129.99,
                category: 'Sports & Fitness',
                image: 'fas fa-running',
                rating: 4.5,
                reviews: 1456,
                affiliate: 'ebay',
                description: 'Lightweight running shoes with superior cushioning'
            },
            {
                id: 8,
                name: 'Coffee Maker',
                price: 159.99,
                category: 'Home & Garden',
                image: 'fas fa-coffee',
                rating: 4.2,
                reviews: 678,
                affiliate: 'alibaba',
                description: 'Programmable coffee maker with thermal carafe'
            },
            {
                id: 9,
                name: 'Smartphone Case',
                price: 24.99,
                category: 'Electronics',
                image: 'fas fa-mobile-alt',
                rating: 4.1,
                reviews: 2340,
                affiliate: 'flipkart',
                description: 'Protective smartphone case with card holder'
            },
            {
                id: 10,
                name: 'Winter Jacket',
                price: 189.99,
                category: 'Fashion',
                image: 'fas fa-user-tie',
                rating: 4.6,
                reviews: 890,
                affiliate: 'amazon',
                description: 'Waterproof winter jacket with thermal insulation'
            }
        ];
    }

    setupEventListeners() {
        // Search
        const searchInput = document.getElementById('productSearch');
        if (searchInput) {
            searchInput.addEventListener('input', this.debounce((e) => {
                this.currentFilters.search = e.target.value;
                this.applyFilters();
            }, 300));
        }

        // Sort
        const sortSelect = document.getElementById('sortSelect');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.currentSort = e.target.value;
                this.sortProducts();
                this.renderProducts();
            });
        }

        // View toggle
        const gridView = document.getElementById('gridView');
        const listView = document.getElementById('listView');
        
        if (gridView) {
            gridView.addEventListener('click', () => this.setViewMode('grid'));
        }
        
        if (listView) {
            listView.addEventListener('click', () => this.setViewMode('list'));
        }

        // Clear filters
        const clearFilters = document.getElementById('clearFilters');
        if (clearFilters) {
            clearFilters.addEventListener('click', () => this.clearAllFilters());
        }
    }

    setupFilters() {
        // Category filters
        const categoryFilters = document.querySelectorAll('input[type="checkbox"][value="Electronics"], input[type="checkbox"][value="Fashion"], input[type="checkbox"][value="Home & Garden"], input[type="checkbox"][value="Sports & Fitness"]');
        categoryFilters.forEach(filter => {
            filter.addEventListener('change', () => this.updateCategoryFilters());
        });

        // Price filters
        const priceFilters = document.querySelectorAll('input[type="checkbox"][value^="0-"], input[type="checkbox"][value^="50-"], input[type="checkbox"][value^="100-"], input[type="checkbox"][value="200+"]');
        priceFilters.forEach(filter => {
            filter.addEventListener('change', () => this.updatePriceFilters());
        });

        // Affiliate filters
        const affiliateFilters = document.querySelectorAll('input[type="checkbox"][value="amazon"], input[type="checkbox"][value="flipkart"], input[type="checkbox"][value="alibaba"], input[type="checkbox"][value="ebay"]');
        affiliateFilters.forEach(filter => {
            filter.addEventListener('change', () => this.updateAffiliateFilters());
        });
    }

    updateCategoryFilters() {
        const checkedCategories = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .filter(cb => ['Electronics', 'Fashion', 'Home & Garden', 'Sports & Fitness'].includes(cb.value))
            .map(cb => cb.value);
        
        this.currentFilters.categories = checkedCategories;
        this.applyFilters();
    }

    updatePriceFilters() {
        const checkedPrices = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .filter(cb => cb.value.includes('-') || cb.value.includes('+'))
            .map(cb => cb.value);
        
        this.currentFilters.priceRanges = checkedPrices;
        this.applyFilters();
    }

    updateAffiliateFilters() {
        const checkedAffiliates = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .filter(cb => ['amazon', 'flipkart', 'alibaba', 'ebay'].includes(cb.value))
            .map(cb => cb.value);
        
        this.currentFilters.affiliates = checkedAffiliates;
        this.applyFilters();
    }

    applyFilters() {
        this.filteredProducts = this.products.filter(product => {
            // Search filter
            if (this.currentFilters.search) {
                const searchTerm = this.currentFilters.search.toLowerCase();
                const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                                    product.category.toLowerCase().includes(searchTerm) ||
                                    product.description.toLowerCase().includes(searchTerm);
                if (!matchesSearch) return false;
            }

            // Category filter
            if (this.currentFilters.categories.length > 0) {
                if (!this.currentFilters.categories.includes(product.category)) return false;
            }

            // Price filter
            if (this.currentFilters.priceRanges.length > 0) {
                const matchesPrice = this.currentFilters.priceRanges.some(range => {
                    if (range === '0-50') return product.price <= 50;
                    if (range === '50-100') return product.price > 50 && product.price <= 100;
                    if (range === '100-200') return product.price > 100 && product.price <= 200;
                    if (range === '200+') return product.price > 200;
                    return false;
                });
                if (!matchesPrice) return false;
            }

            // Affiliate filter
            if (this.currentFilters.affiliates.length > 0) {
                if (!this.currentFilters.affiliates.includes(product.affiliate)) return false;
            }

            return true;
        });

        this.currentPage = 1;
        this.sortProducts();
        this.renderProducts();
        this.updateProductCount();
        this.renderPagination();
    }

    sortProducts() {
        this.filteredProducts.sort((a, b) => {
            switch (this.currentSort) {
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'rating':
                    return b.rating - a.rating;
                case 'newest':
                    return b.id - a.id;
                default:
                    return 0;
            }
        });
    }

    renderProducts() {
        const grid = document.getElementById('productsGrid');
        if (!grid) return;

        const startIndex = (this.currentPage - 1) * this.productsPerPage;
        const endIndex = startIndex + this.productsPerPage;
        const productsToShow = this.filteredProducts.slice(startIndex, endIndex);

        if (productsToShow.length === 0) {
            grid.innerHTML = '<div class="no-products">No products found matching your criteria.</div>';
            return;
        }

        grid.innerHTML = productsToShow.map(product => this.createProductCard(product)).join('');
        
        // Add event listeners to product cards
        this.setupProductCardEvents();
    }

    createProductCard(product) {
        const stars = this.generateStars(product.rating);
        
        return `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">
                    <i class="${product.image}"></i>
                </div>
                <div class="product-info">
                    <div class="affiliate-badge">${product.affiliate}</div>
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <div class="product-rating">
                        <div class="stars">${stars}</div>
                        <span class="rating-text">(${product.reviews} reviews)</span>
                    </div>
                    <button class="btn btn-primary add-to-cart" data-product-id="${product.id}">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                    <button class="btn btn-outline view-details" data-product-id="${product.id}">
                        View Details
                    </button>
                </div>
            </div>
        `;
    }

    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let stars = '';

        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }

        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }

        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }

        return stars;
    }

    setupProductCardEvents() {
        // Add to cart buttons
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = parseInt(btn.dataset.productId);
                this.addToCart(productId);
            });
        });

        // View details buttons
        document.querySelectorAll('.view-details').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = parseInt(btn.dataset.productId);
                this.showProductDetails(productId);
            });
        });

        // Product card click
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', () => {
                const productId = parseInt(card.dataset.productId);
                this.showProductDetails(productId);
            });
        });
    }

    addToCart(productId) {
        if (window.app) {
            window.app.addToCart(productId);
        }
    }

    showProductDetails(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const modal = document.getElementById('productModal');
        const details = document.getElementById('productDetails');
        
        if (modal && details) {
            details.innerHTML = this.createProductDetailsHTML(product);
            modal.style.display = 'block';
        }
    }

    createProductDetailsHTML(product) {
        const stars = this.generateStars(product.rating);
        
        return `
            <div class="product-details">
                <div class="product-detail-image">
                    <i class="${product.image}" style="font-size: 8rem; color: #667eea;"></i>
                </div>
                <div class="product-detail-info">
                    <div class="affiliate-badge">${product.affiliate}</div>
                    <h2>${product.name}</h2>
                    <div class="product-price" style="font-size: 2rem; margin: 1rem 0;">$${product.price.toFixed(2)}</div>
                    <div class="product-rating" style="margin-bottom: 1rem;">
                        <div class="stars">${stars}</div>
                        <span class="rating-text">(${product.reviews} reviews)</span>
                    </div>
                    <p class="product-description">${product.description}</p>
                    <div class="product-actions" style="margin-top: 2rem;">
                        <button class="btn btn-primary" onclick="window.app.addToCart(${product.id})">
                            <i class="fas fa-cart-plus"></i> Add to Cart
                        </button>
                        <button class="btn btn-outline" onclick="window.open('https://www.${product.affiliate}.com', '_blank')">
                            View on ${product.affiliate}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    updateProductCount() {
        const countElement = document.getElementById('productCount');
        if (countElement) {
            countElement.textContent = `Showing ${this.filteredProducts.length} products`;
        }
    }

    renderPagination() {
        const pagination = document.getElementById('pagination');
        if (!pagination) return;

        const totalPages = Math.ceil(this.filteredProducts.length / this.productsPerPage);
        
        if (totalPages <= 1) {
            pagination.innerHTML = '';
            return;
        }

        let paginationHTML = '';
        
        // Previous button
        paginationHTML += `<button ${this.currentPage === 1 ? 'disabled' : ''} onclick="productsManager.goToPage(${this.currentPage - 1})">Previous</button>`;
        
        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            paginationHTML += `<button class="${i === this.currentPage ? 'active' : ''}" onclick="productsManager.goToPage(${i})">${i}</button>`;
        }
        
        // Next button
        paginationHTML += `<button ${this.currentPage === totalPages ? 'disabled' : ''} onclick="productsManager.goToPage(${this.currentPage + 1})">Next</button>`;
        
        pagination.innerHTML = paginationHTML;
    }

    goToPage(page) {
        const totalPages = Math.ceil(this.filteredProducts.length / this.productsPerPage);
        if (page >= 1 && page <= totalPages) {
            this.currentPage = page;
            this.renderProducts();
            this.renderPagination();
            
            // Scroll to top of products
            document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth' });
        }
    }

    setViewMode(mode) {
        const grid = document.getElementById('productsGrid');
        if (grid) {
            grid.className = mode === 'list' ? 'products-list' : 'products-grid';
        }
    }

    clearAllFilters() {
        // Clear checkboxes
        document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            cb.checked = false;
        });

        // Clear search
        const searchInput = document.getElementById('productSearch');
        if (searchInput) {
            searchInput.value = '';
        }

        // Reset filters
        this.currentFilters = {
            categories: [],
            priceRanges: [],
            affiliates: [],
            search: ''
        };

        this.applyFilters();
    }

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

    showError(message) {
        const grid = document.getElementById('productsGrid');
        if (grid) {
            grid.innerHTML = `<div class="error-message">${message}</div>`;
        }
    }
}

// Initialize products manager
const productsManager = new ProductsManager();
