// Authentication Module
class AuthManager {
    constructor() {
        this.users = this.loadUsers();
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        document.addEventListener('DOMContentLoaded', () => {
            this.setupAuthButtons();
            this.setupForms();
        });
    }

    setupAuthButtons() {
        const loginBtn = document.getElementById('loginBtn');
        const signupBtn = document.getElementById('signupBtn');
        const logoutBtn = document.getElementById('logoutBtn');

        if (loginBtn) {
            loginBtn.addEventListener('click', () => this.showLoginModal());
        }

        if (signupBtn) {
            signupBtn.addEventListener('click', () => this.showSignupModal());
        }

        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => this.logout());
        }

        // Modal switching
        const switchToSignup = document.getElementById('switchToSignup');
        const switchToLogin = document.getElementById('switchToLogin');

        if (switchToSignup) {
            switchToSignup.addEventListener('click', (e) => {
                e.preventDefault();
                this.hideLoginModal();
                this.showSignupModal();
            });
        }

        if (switchToLogin) {
            switchToLogin.addEventListener('click', (e) => {
                e.preventDefault();
                this.hideSignupModal();
                this.showLoginModal();
            });
        }
    }

    setupForms() {
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');

        if (loginForm) {
            loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        }

        if (signupForm) {
            signupForm.addEventListener('submit', (e) => this.handleSignup(e));
        }

        // Real-time validation
        this.setupFormValidation();
    }

    setupFormValidation() {
        // Login form validation
        const loginEmail = document.getElementById('loginEmail');
        const loginPassword = document.getElementById('loginPassword');

        if (loginEmail) {
            loginEmail.addEventListener('blur', () => this.validateEmail(loginEmail));
            loginEmail.addEventListener('input', () => this.clearError(loginEmail));
        }

        if (loginPassword) {
            loginPassword.addEventListener('blur', () => this.validatePassword(loginPassword));
            loginPassword.addEventListener('input', () => this.clearError(loginPassword));
        }

        // Signup form validation
        const signupName = document.getElementById('signupName');
        const signupEmail = document.getElementById('signupEmail');
        const signupPassword = document.getElementById('signupPassword');
        const confirmPassword = document.getElementById('confirmPassword');

        if (signupName) {
            signupName.addEventListener('blur', () => this.validateName(signupName));
            signupName.addEventListener('input', () => this.clearError(signupName));
        }

        if (signupEmail) {
            signupEmail.addEventListener('blur', () => this.validateEmail(signupEmail));
            signupEmail.addEventListener('input', () => this.clearError(signupEmail));
        }

        if (signupPassword) {
            signupPassword.addEventListener('blur', () => this.validatePassword(signupPassword));
            signupPassword.addEventListener('input', () => this.clearError(signupPassword));
        }

        if (confirmPassword) {
            confirmPassword.addEventListener('blur', () => this.validatePasswordConfirmation(signupPassword, confirmPassword));
            confirmPassword.addEventListener('input', () => this.clearError(confirmPassword));
        }
    }

    // Modal Management
    showLoginModal() {
        const modal = document.getElementById('loginModal');
        if (modal) {
            modal.style.display = 'block';
            document.getElementById('loginEmail').focus();
        }
    }

    hideLoginModal() {
        const modal = document.getElementById('loginModal');
        if (modal) {
            modal.style.display = 'none';
            this.clearForm('loginForm');
        }
    }

    showSignupModal() {
        const modal = document.getElementById('signupModal');
        if (modal) {
            modal.style.display = 'block';
            document.getElementById('signupName').focus();
        }
    }

    hideSignupModal() {
        const modal = document.getElementById('signupModal');
        if (modal) {
            modal.style.display = 'none';
            this.clearForm('signupForm');
        }
    }

    // Form Handling
    async handleLogin(event) {
        event.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Validate form
        if (!this.validateLoginForm(email, password)) {
            return;
        }

        // Show loading state
        const submitBtn = event.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<span class="loading-spinner"></span> Logging in...';
        submitBtn.disabled = true;

        try {
            // Simulate API call
            await this.delay(1000);
            
            const user = this.authenticateUser(email, password);
            if (user) {
                app.currentUser = user;
                app.saveUserSession();
                app.updateUI();
                this.hideLoginModal();
                app.showAlert(`Welcome back, ${user.name}!`, 'success');
            } else {
                this.showError('loginForm', 'Invalid email or password');
            }
        } catch (error) {
            this.showError('loginForm', 'Login failed. Please try again.');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }

    async handleSignup(event) {
        event.preventDefault();
        
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Validate form
        if (!this.validateSignupForm(name, email, password, confirmPassword)) {
            return;
        }

        // Show loading state
        const submitBtn = event.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<span class="loading-spinner"></span> Creating Account...';
        submitBtn.disabled = true;

        try {
            // Simulate API call
            await this.delay(1500);
            
            if (this.isEmailTaken(email)) {
                this.showError('signupForm', 'Email already exists');
                return;
            }

            const newUser = this.createUser(name, email, password);
            app.currentUser = newUser;
            app.saveUserSession();
            app.updateUI();
            this.hideSignupModal();
            app.showAlert(`Account created successfully! Welcome, ${newUser.name}!`, 'success');
        } catch (error) {
            this.showError('signupForm', 'Signup failed. Please try again.');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }

    // Validation Functions
    validateLoginForm(email, password) {
        let isValid = true;

        if (!this.validateEmail(document.getElementById('loginEmail'))) {
            isValid = false;
        }

        if (!this.validatePassword(document.getElementById('loginPassword'))) {
            isValid = false;
        }

        return isValid;
    }

    validateSignupForm(name, email, password, confirmPassword) {
        let isValid = true;

        if (!this.validateName(document.getElementById('signupName'))) {
            isValid = false;
        }

        if (!this.validateEmail(document.getElementById('signupEmail'))) {
            isValid = false;
        }

        if (!this.validatePassword(document.getElementById('signupPassword'))) {
            isValid = false;
        }

        if (!this.validatePasswordConfirmation(
            document.getElementById('signupPassword'),
            document.getElementById('confirmPassword')
        )) {
            isValid = false;
        }

        return isValid;
    }

    validateName(nameInput) {
        const name = nameInput.value.trim();
        if (name.length < 2) {
            this.showFieldError(nameInput, 'Name must be at least 2 characters long');
            return false;
        }
        this.clearError(nameInput);
        return true;
    }

    validateEmail(emailInput) {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            this.showFieldError(emailInput, 'Please enter a valid email address');
            return false;
        }
        this.clearError(emailInput);
        return true;
    }

    validatePassword(passwordInput) {
        const password = passwordInput.value;
        if (password.length < 6) {
            this.showFieldError(passwordInput, 'Password must be at least 6 characters long');
            return false;
        }
        this.clearError(passwordInput);
        return true;
    }

    validatePasswordConfirmation(passwordInput, confirmInput) {
        const password = passwordInput.value;
        const confirm = confirmInput.value;
        
        if (password !== confirm) {
            this.showFieldError(confirmInput, 'Passwords do not match');
            return false;
        }
        this.clearError(confirmInput);
        return true;
    }

    // User Management
    loadUsers() {
        const users = localStorage.getItem('users');
        return users ? JSON.parse(users) : [];
    }

    saveUsers() {
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    authenticateUser(email, password) {
        return this.users.find(user => 
            user.email === email && user.password === password
        );
    }

    isEmailTaken(email) {
        return this.users.some(user => user.email === email);
    }

    createUser(name, email, password) {
        const newUser = {
            id: Date.now(),
            name: name.trim(),
            email: email.trim(),
            password: password, // In real app, this would be hashed
            createdAt: new Date().toISOString(),
            role: 'customer'
        };

        this.users.push(newUser);
        this.saveUsers();
        return newUser;
    }

    logout() {
        app.logout();
    }

    // Utility Functions
    showFieldError(input, message) {
        input.classList.add('error');
        
        // Remove existing error message
        const existingError = input.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        // Add new error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        input.parentNode.appendChild(errorDiv);
    }

    clearError(input) {
        input.classList.remove('error');
        const errorMessage = input.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }

    showError(formId, message) {
        const form = document.getElementById(formId);
        if (form) {
            // Remove existing error
            const existingError = form.querySelector('.form-error');
            if (existingError) {
                existingError.remove();
            }

            // Add new error
            const errorDiv = document.createElement('div');
            errorDiv.className = 'alert alert-error form-error';
            errorDiv.textContent = message;
            form.insertBefore(errorDiv, form.firstChild);
        }
    }

    clearForm(formId) {
        const form = document.getElementById(formId);
        if (form) {
            form.reset();
            
            // Clear all errors
            const inputs = form.querySelectorAll('input');
            inputs.forEach(input => this.clearError(input));
            
            const formError = form.querySelector('.form-error');
            if (formError) {
                formError.remove();
            }
        }
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize authentication manager
const authManager = new AuthManager();
