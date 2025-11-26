// Menu Data
const menuItems = {
    curries: [
        {
            name: "Methi Malai Murg",
            description: "Chicken leg cooked in fresh cream and kasuri methi",
            price: "₹250",
            badge: "2 pcs",
            popular: true
        },
        {
            name: "Mutton Achari",
            description: "Tender mutton in tangy pickle spices",
            price: "₹400",
            badge: "4 pcs",
            popular: true
        }
    ],
    cakes: [
        {
            name: "New York Blueberry Cheesecake",
            description: "Small: ₹1000 | Medium: ₹1300 | Large: ₹1500 | Per Slice: ₹175",
            price: "₹175+",
            badge: "Bestseller",
            popular: true
        },
        {
            name: "New York Cheesecake",
            description: "Small: ₹800 | Medium: ₹1200 | Large: ₹1300 | Per Slice: ₹190",
            price: "₹190+",
            popular: true
        },
        {
            name: "Tea Time Carrot Cake",
            description: "Perfect companion for your afternoon tea",
            price: "₹300",
            badge: "Seasonal",
            popular: false
        },
        {
            name: "Chocochips Cookies",
            description: "Box of 8 delicious chocolate chip cookies",
            price: "₹250",
            badge: "8 pieces",
            popular: true
        }
    ]
};

// DOM Elements
const menuGrid = document.getElementById('menuGrid');
const categoryButtons = document.querySelectorAll('.category-btn');
const hamburger = document.querySelector('.hamburger');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderMenuItems('all');
    setupEventListeners();
    setupMobileMenu();
    setupSmoothScrolling();
    setupKonamiCode();
    setupScrollAnimations();
    setupHoverEffects();
});

// Render Menu Items
function renderMenuItems(category) {
    const items = category === 'all' 
        ? [...menuItems.curries, ...menuItems.cakes]
        : category === 'curries' 
        ? menuItems.curries 
        : menuItems.cakes;

    menuGrid.innerHTML = items.map((item, index) => `
        <div class="menu-item" data-category="${category === 'all' ? (menuItems.curries.includes(item) ? 'curries' : 'cakes') : category}">
            <div class="menu-item-header">
                <h3>${item.name}</h3>
                ${item.badge ? `<span class="menu-badge">${item.badge}</span>` : ''}
            </div>
            <p class="menu-item-description">${item.description}</p>
            <div class="menu-item-footer">
                <span class="menu-price">${item.price}</span>
            </div>
            ${item.popular ? `
                <div class="menu-item-meta popular">
                    <svg class="icon" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span>Popular Choice</span>
                </div>
            ` : ''}
            ${item.vegetarian ? `
                <div class="menu-item-meta vegetarian">
                    <svg class="icon" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Vegetarian</span>
                </div>
            ` : ''}
        </div>
    `).join('');

    // Add animation
    const menuItemsElements = menuGrid.querySelectorAll('.menu-item');
    menuItemsElements.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Category Filter
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            renderMenuItems(this.dataset.category);
        });
    });
}

// Mobile Menu
function setupMobileMenu() {
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            
            // Create mobile menu if it doesn't exist
            let mobileMenu = document.querySelector('.mobile-menu');
            if (!mobileMenu) {
                mobileMenu = document.createElement('div');
                mobileMenu.className = 'mobile-menu';
                mobileMenu.innerHTML = `
                    <a href="#menu" class="nav-link">Menu</a>
                    <a href="#about" class="nav-link">About</a>
                    <a href="#contact" class="nav-link">Contact</a>
                `;
                document.querySelector('.navbar').appendChild(mobileMenu);
            }
            
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on links
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('nav-link')) {
            const mobileMenu = document.querySelector('.mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });
}

// Smooth Scrolling
function setupSmoothScrolling() {
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
}

// Konami Code Easter Egg
function setupKonamiCode() {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', function(e) {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            
            if (konamiIndex === konamiCode.length) {
                triggerFoodRain();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

// Food Rain Easter Egg
function triggerFoodRain() {
    const foods = ['🍛', '🍰', '🥘', '🧁', '🍗', '🎂', '🌮', '🍪', '🥟', '🍕'];
    const container = document.body;
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const food = document.createElement('div');
            food.textContent = foods[Math.floor(Math.random() * foods.length)];
            food.style.cssText = `
                position: fixed;
                top: -50px;
                left: ${Math.random() * 100}%;
                font-size: ${Math.random() * 20 + 20}px;
                z-index: 9999;
                pointer-events: none;
                animation: fall ${Math.random() * 3 + 2}s linear;
            `;
            
            container.appendChild(food);
            
            // Remove food after animation
            setTimeout(() => {
                food.remove();
            }, 5000);
        }, i * 100);
    }
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.feature-card, .menu-item, .stat').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Add hover effects to interactive elements
function setupHoverEffects() {
    // Add ripple effect to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Performance optimization - Debounce scroll events
function debounce(func, wait) {
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

// Lazy loading for images (if added in the future)
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
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
    
    images.forEach(img => imageObserver.observe(img));
}