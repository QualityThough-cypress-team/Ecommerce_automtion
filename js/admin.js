// Admin Dashboard Management
class AdminManager {
    constructor() {
        this.currentSection = 'dashboard';
        this.dashboardData = {
            products: 0,
            orders: 0,
            customers: 0,
            revenue: 0
        };
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.setupNavigation();
            this.loadDashboardData();
            this.setupEventListeners();
        });
    }

    setupNavigation() {
        const navLinks = document.querySelectorAll('.admin-nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = link.dataset.section;
                this.showSection(section);
                this.updateActiveNav(link);
            });
        });
    }

    showSection(sectionId) {
        // Hide all sections
        document.querySelectorAll('.admin-section').forEach(section => {
            section.classList.remove('active');
        });

        // Show selected section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            this.currentSection = sectionId;
            this.loadSectionData(sectionId);
        }
    }

    updateActiveNav(activeLink) {
        document.querySelectorAll('.admin-nav-link').forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
    }

    async loadDashboardData() {
        try {
            // Simulate API calls to get dashboard statistics
            const [products, orders, customers, revenue] = await Promise.all([
                this.fetchProductCount(),
                this.fetchOrderCount(),
                this.fetchCustomerCount(),
                this.fetchRevenue()
            ]);

            this.dashboardData = { products, orders, customers, revenue };
            this.updateDashboardStats();
        } catch (error) {
            console.error('Error loading dashboard data:', error);
        }
    }

    async fetchProductCount() {
        // Simulate API call
        await this.delay(500);
        return 247;
    }

    async fetchOrderCount() {
        await this.delay(600);
        return 1834;
    }

    async fetchCustomerCount() {
        await this.delay(400);
        return 892;
    }

    async fetchRevenue() {
        await this.delay(700);
        return 45670.50;
    }

    updateDashboardStats() {
        const elements = {
            totalProducts: document.getElementById('totalProducts'),
            totalOrders: document.getElementById('totalOrders'),
            totalCustomers: document.getElementById('totalCustomers'),
            totalRevenue: document.getElementById('totalRevenue')
        };

        if (elements.totalProducts) {
            this.animateNumber(elements.totalProducts, this.dashboardData.products);
        }
        if (elements.totalOrders) {
            this.animateNumber(elements.totalOrders, this.dashboardData.orders);
        }
        if (elements.totalCustomers) {
            this.animateNumber(elements.totalCustomers, this.dashboardData.customers);
        }
        if (elements.totalRevenue) {
            this.animateNumber(elements.totalRevenue, this.dashboardData.revenue, true);
        }
    }

    animateNumber(element, target, isCurrency = false) {
        const duration = 2000;
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (isCurrency) {
                element.textContent = `$${Math.floor(current).toLocaleString()}`;
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, 16);
    }

    async loadSectionData(sectionId) {
        switch (sectionId) {
            case 'products':
                await this.loadProductsData();
                break;
            case 'orders':
                await this.loadOrdersData();
                break;
            case 'customers':
                await this.loadCustomersData();
                break;
            case 'affiliates':
                await this.loadAffiliatesData();
                break;
            case 'analytics':
                await this.loadAnalyticsData();
                break;
        }
    }

    async loadProductsData() {
        const productsTable = document.getElementById('productsTable');
        if (!productsTable) return;

        productsTable.innerHTML = '<tr><td colspan="6">Loading products...</td></tr>';

        try {
            const products = await this.fetchProducts();
            this.renderProductsTable(products);
        } catch (error) {
            productsTable.innerHTML = '<tr><td colspan="6">Error loading products</td></tr>';
        }
    }

    async fetchProducts() {
        await this.delay(1000);
        return [
            { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: 79.99, affiliate: 'Amazon' },
            { id: 2, name: 'Smart Watch', category: 'Electronics', price: 199.99, affiliate: 'Flipkart' },
            { id: 3, name: 'Cotton T-Shirt', category: 'Fashion', price: 29.99, affiliate: 'Alibaba' },
            { id: 4, name: 'Yoga Mat', category: 'Sports', price: 39.99, affiliate: 'Amazon' },
            { id: 5, name: 'LED Lamp', category: 'Home', price: 49.99, affiliate: 'eBay' }
        ];
    }

    renderProductsTable(products) {
        const productsTable = document.getElementById('productsTable');
        if (!productsTable) return;

        productsTable.innerHTML = products.map(product => `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>$${product.price.toFixed(2)}</td>
                <td>${product.affiliate}</td>
                <td>
                    <div class="action-buttons">
                        <button class="btn btn-outline btn-small" onclick="adminManager.editProduct(${product.id})">
                            <i class="fas fa-edit"></i> Edit
                        </button>
                        <button class="btn btn-secondary btn-small" onclick="adminManager.deleteProduct(${product.id})">
                            <i class="fas fa-trash"></i> Delete
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    async loadOrdersData() {
        const ordersTable = document.getElementById('ordersTable');
        if (!ordersTable) return;

        ordersTable.innerHTML = '<tr><td colspan="6">Loading orders...</td></tr>';

        try {
            const orders = await this.fetchOrders();
            this.renderOrdersTable(orders);
        } catch (error) {
            ordersTable.innerHTML = '<tr><td colspan="6">Error loading orders</td></tr>';
        }
    }

    async fetchOrders() {
        await this.delay(800);
        return [
            { id: 1001, customer: 'John Doe', date: '2024-01-15', total: 159.98, status: 'Completed' },
            { id: 1002, customer: 'Jane Smith', date: '2024-01-14', total: 89.99, status: 'Processing' },
            { id: 1003, customer: 'Bob Johnson', date: '2024-01-13', total: 249.97, status: 'Shipped' },
            { id: 1004, customer: 'Alice Brown', date: '2024-01-12', total: 79.99, status: 'Pending' },
            { id: 1005, customer: 'Charlie Wilson', date: '2024-01-11', total: 199.98, status: 'Completed' }
        ];
    }

    renderOrdersTable(orders) {
        const ordersTable = document.getElementById('ordersTable');
        if (!ordersTable) return;

        ordersTable.innerHTML = orders.map(order => `
            <tr>
                <td>#${order.id}</td>
                <td>${order.customer}</td>
                <td>${order.date}</td>
                <td>$${order.total.toFixed(2)}</td>
                <td>
                    <span class="badge badge-${this.getStatusColor(order.status)}">
                        ${order.status}
                    </span>
                </td>
                <td>
                    <div class="action-buttons">
                        <button class="btn btn-outline btn-small" onclick="adminManager.viewOrder(${order.id})">
                            <i class="fas fa-eye"></i> View
                        </button>
                        <button class="btn btn-primary btn-small" onclick="adminManager.updateOrderStatus(${order.id})">
                            <i class="fas fa-edit"></i> Update
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    async loadCustomersData() {
        const customersTable = document.getElementById('customersTable');
        if (!customersTable) return;

        customersTable.innerHTML = '<tr><td colspan="6">Loading customers...</td></tr>';

        try {
            const customers = await this.fetchCustomers();
            this.renderCustomersTable(customers);
        } catch (error) {
            customersTable.innerHTML = '<tr><td colspan="6">Error loading customers</td></tr>';
        }
    }

    async fetchCustomers() {
        await this.delay(900);
        return [
            { id: 1, name: 'John Doe', email: 'john@example.com', joinDate: '2023-12-01', orders: 5 },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com', joinDate: '2023-11-15', orders: 3 },
            { id: 3, name: 'Bob Johnson', email: 'bob@example.com', joinDate: '2023-10-20', orders: 8 },
            { id: 4, name: 'Alice Brown', email: 'alice@example.com', joinDate: '2023-09-10', orders: 2 },
            { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', joinDate: '2023-08-05', orders: 12 }
        ];
    }

    renderCustomersTable(customers) {
        const customersTable = document.getElementById('customersTable');
        if (!customersTable) return;

        customersTable.innerHTML = customers.map(customer => `
            <tr>
                <td>${customer.id}</td>
                <td>${customer.name}</td>
                <td>${customer.email}</td>
                <td>${customer.joinDate}</td>
                <td>${customer.orders}</td>
                <td>
                    <div class="action-buttons">
                        <button class="btn btn-outline btn-small" onclick="adminManager.viewCustomer(${customer.id})">
                            <i class="fas fa-eye"></i> View
                        </button>
                        <button class="btn btn-primary btn-small" onclick="adminManager.editCustomer(${customer.id})">
                            <i class="fas fa-edit"></i> Edit
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    setupEventListeners() {
        // Add Product button
        const addProductBtn = document.getElementById('addProductBtn');
        if (addProductBtn) {
            addProductBtn.addEventListener('click', () => this.showAddProductModal());
        }

        // Add Affiliate button
        const addAffiliateBtn = document.getElementById('addAffiliateBtn');
        if (addAffiliateBtn) {
            addAffiliateBtn.addEventListener('click', () => this.showAddAffiliateModal());
        }
    }

    // Product Management
    editProduct(productId) {
        console.log('Edit product:', productId);
        // In a real application, this would open an edit modal
        alert(`Edit product ${productId} - This would open an edit form`);
    }

    deleteProduct(productId) {
        if (confirm('Are you sure you want to delete this product?')) {
            console.log('Delete product:', productId);
            // In a real application, this would make an API call
            alert(`Product ${productId} deleted successfully`);
            this.loadProductsData(); // Reload the table
        }
    }

    showAddProductModal() {
        // In a real application, this would show a modal with a form
        alert('Add Product Modal - This would show a form to add a new product');
    }

    // Order Management
    viewOrder(orderId) {
        console.log('View order:', orderId);
        alert(`View order ${orderId} - This would show order details`);
    }

    updateOrderStatus(orderId) {
        console.log('Update order status:', orderId);
        alert(`Update order ${orderId} status - This would show status update options`);
    }

    // Customer Management
    viewCustomer(customerId) {
        console.log('View customer:', customerId);
        alert(`View customer ${customerId} - This would show customer details`);
    }

    editCustomer(customerId) {
        console.log('Edit customer:', customerId);
        alert(`Edit customer ${customerId} - This would show customer edit form`);
    }

    // Affiliate Management
    showAddAffiliateModal() {
        alert('Add Affiliate Modal - This would show a form to add a new affiliate partner');
    }

    async loadAffiliatesData() {
        // Affiliate data is already rendered in HTML
        console.log('Affiliates section loaded');
    }

    async loadAnalyticsData() {
        // In a real application, this would load chart data
        console.log('Analytics section loaded');
    }

    // Utility Functions
    getStatusColor(status) {
        const colors = {
            'Completed': 'success',
            'Processing': 'warning',
            'Shipped': 'info',
            'Pending': 'secondary',
            'Cancelled': 'danger'
        };
        return colors[status] || 'secondary';
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Export/Import Functions
    exportData(type) {
        console.log(`Exporting ${type} data`);
        // In a real application, this would generate and download a file
        alert(`${type} data exported successfully`);
    }

    importData(type) {
        console.log(`Importing ${type} data`);
        // In a real application, this would show a file upload dialog
        alert(`Import ${type} data - This would show a file upload dialog`);
    }

    // Backup Functions
    createBackup() {
        console.log('Creating backup');
        alert('Backup created successfully');
    }

    restoreBackup() {
        if (confirm('Are you sure you want to restore from backup? This will overwrite current data.')) {
            console.log('Restoring backup');
            alert('Backup restored successfully');
        }
    }
}

// Initialize admin manager
const adminManager = new AdminManager();

// Add some CSS for badges
const style = document.createElement('style');
style.textContent = `
    .badge {
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        font-size: 0.75rem;
        font-weight: 500;
        text-transform: uppercase;
    }
    .badge-success { background: #28a745; color: white; }
    .badge-warning { background: #ffc107; color: #212529; }
    .badge-info { background: #17a2b8; color: white; }
    .badge-secondary { background: #6c757d; color: white; }
    .badge-danger { background: #dc3545; color: white; }
    .form-control {
        width: 100%;
        padding: 0.375rem 0.75rem;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        font-size: 1rem;
        line-height: 1.5;
    }
    .text-success { color: #28a745; }
    .text-info { color: #17a2b8; }
    .text-primary { color: #007bff; }
    .text-warning { color: #ffc107; }
`;
document.head.appendChild(style);
