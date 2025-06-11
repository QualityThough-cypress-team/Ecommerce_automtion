# Global E-Commerce Hub

A comprehensive e-commerce application featuring popup-based authentication, iframe promotional content from major retailers, and modular architecture similar to nopCommerce.

## Features

### 🔐 Authentication System
- **Popup-based Login/Signup**: Modern modal-based authentication
- **Form Validation**: Real-time validation with error messages
- **Session Management**: Persistent user sessions using localStorage
- **User Management**: Registration, login, logout functionality

### 🎯 Promotional Content
- **Slideshow Integration**: Rotating promotional banners
- **Iframe Support**: Embedded content from Flipkart, Amazon, and other retailers
- **Fallback Content**: Graceful degradation when iframes fail to load
- **Affiliate Links**: Direct links to partner retailers

### 🏪 E-Commerce Modules
- **Products Module**: Product listing, details, categories, search, and filters
- **Catalog Module**: Category browsing, brand showcase, featured products
- **Sales Module**: Sales dashboard, analytics, revenue tracking
- **Customers Module**: Customer management, statistics, search functionality
- **Admin Module**: Complete admin dashboard with data management

### 🌐 Global Affiliate Integration
- **Amazon**: Global marketplace integration
- **Flipkart**: India's leading e-commerce platform
- **Alibaba**: World's largest B2B trading platform
- **eBay**: Global online auction and marketplace

## Quick Start

1. **Install dependencies** (if not already installed)
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

   Or for production:
   ```bash
   npm start
   ```

3. **Open your browser**
   The application will automatically open at `http://localhost:8080`

## Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: CSS Grid, Flexbox, Custom CSS animations
- **Icons**: Font Awesome 6.0
- **Server**: http-server (Node.js)
- **Data Storage**: localStorage (for demo purposes)

## Available Scripts

- `npm start` - Start the production server on port 8080
- `npm run dev` - Start development server with live reload and no cache

## Project Structure

```
mytest/
├── index.html              # Main landing page
├── package.json            # Node.js dependencies
├── README.md              # Project documentation
├── css/
│   ├── main.css           # Main stylesheet
│   └── components.css     # Component-specific styles
├── js/
│   ├── app.js            # Main application logic
│   ├── auth.js           # Authentication management
│   ├── slideshow.js      # Promotional slideshow
│   ├── products.js       # Product management
│   └── admin.js          # Admin dashboard
├── pages/
│   ├── products.html     # Product catalog page
│   ├── catalog.html      # Category browsing
│   ├── sales.html        # Sales dashboard
│   ├── customers.html    # Customer management
│   └── admin.html        # Admin panel
└── cypress/              # Cypress testing files (original project)
```

## Usage Guide

### 🏠 Home Page
- **Promotional Slideshow**: View rotating banners from affiliate partners
- **Category Navigation**: Browse products by category
- **Partner Showcase**: Explore affiliate partner information

### 🔐 Authentication
- **Sign Up**: Click "Sign Up" to create a new account
- **Login**: Click "Login" to access existing account
- **Session Persistence**: Stay logged in across browser sessions

### 📦 Products
- **Browse Products**: View all available products with filtering
- **Search**: Find products by name, category, or description
- **Filters**: Filter by category, price range, and affiliate partner
- **Product Details**: Click any product for detailed information

### 📊 Admin Dashboard
- **Dashboard Overview**: View key metrics and statistics
- **Product Management**: Add, edit, and delete products
- **Order Management**: Track and manage customer orders
- **Customer Management**: View and manage customer accounts
- **Affiliate Management**: Manage partner relationships

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

**Global E-Hub** - Your gateway to worldwide shopping! 🛒🌍
