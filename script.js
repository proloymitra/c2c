// Menu Data
const menuItems = {
    curries: [
        {
            name: "Methi Malai Murg",
            description: "Chicken leg cooked in fresh cream and kasuri methi",
            price: "₹250",
            badge: "2 pcs",
            popular: true,
            image: "methi-malai-murg.jpg",
            detailedDescription: "Succulent chicken legs slow-cooked in a rich, creamy gravy infused with aromatic kasuri methi (dried fenugreek leaves). This North Indian delicacy combines the subtle bitterness of methi with the smoothness of fresh cream, creating a perfectly balanced dish.",
            pairings: ["Butter Naan", "Jeera Rice", "Garlic Naan", "Steamed Basmati Rice"],
            funFact: "Kasuri methi is sun-dried fenugreek leaves from Kasur, Pakistan. Just a pinch transforms any curry into a restaurant-style dish! The leaves are known for their digestive properties and unique aroma."
        },
        {
            name: "Mutton Achari",
            description: "Tender mutton in tangy pickle spices",
            price: "₹400",
            badge: "4 pcs",
            popular: true,
            image: "mutton-achari.jpg",
            detailedDescription: "Premium mutton pieces marinated and cooked with traditional Indian pickle spices including mustard seeds, fennel, nigella seeds, and fenugreek. The tangy, spicy gravy is a perfect balance of heat and flavor that will transport you to the streets of Old Delhi.",
            pairings: ["Tandoori Roti", "Plain Paratha", "Pulao", "Roomali Roti"],
            funFact: "The 'achari' spice blend mimics the flavors of Indian pickles (achar). This cooking technique dates back to Mughal kitchens where royal chefs would preserve the tangy flavors of pickles in their curries!"
        },
        {
            name: "Chicken Kasha",
            description: "Full Plate (4pcs): ₹375 | Half Plate (2pcs): ₹200",
            price: "₹200+",
            badge: "Bengali Special",
            bengali: true,
            image: "chicken-kasha.jpg",
            detailedDescription: "An authentic Bengali home-style chicken curry featuring tender chicken pieces cooked in a rich, aromatic gravy with whole spices, onions, and tomatoes. This traditional kasha (curry) is slow-cooked to perfection, allowing the spices to penetrate deep into the meat, creating layers of flavor that define Bengali cuisine.",
            pairings: ["Steamed Rice", "Luchi (Bengali Puri)", "Plain Paratha", "Begun Bhaja (Fried Eggplant)"],
            funFact: "In Bengali households, 'kasha' refers to a dry-style curry where the gravy coats the meat rather than being soupy. The technique of bhuna (slow-cooking spices) is key to achieving the deep, complex flavors. This dish is a Sunday staple in Bengali homes!"
        }
    ],
    cakes: [
        {
            name: "New York Blueberry Cheesecake",
            description: "Small: ₹1000 | Medium: ₹1300 | Large: ₹1500 | Per Slice: ₹190",
            price: "₹190+",
            badge: "Bestseller",
            popular: true,
            image: "blueberry-cheesecake.jpg",
            detailedDescription: "Our signature New York-style cheesecake features a dense, creamy filling made with premium cream cheese on a buttery graham cracker crust. Topped with a luscious blueberry compote made from fresh blueberries, creating the perfect balance of tangy and sweet.",
            pairings: ["Hot Coffee", "Chai Latte", "Fresh Berries", "Whipped Cream"],
            funFact: "New York cheesecake originated in the 1900s and uses cream cheese invented in 1872 in New York! Our version requires 24 hours of chilling for the perfect texture. The blueberries are packed with antioxidants!"
        },
        {
            name: "New York Cheesecake",
            description: "Small: ₹800 | Medium: ₹1200 | Large: ₹1300 | Per Slice: ₹175",
            price: "₹175+",
            popular: true,
            image: "newyork-cheesecake.jpg",
            detailedDescription: "The classic! Pure, unadulterated New York-style cheesecake with a velvety smooth texture. Made with full-fat cream cheese, fresh eggs, and a hint of vanilla on our signature graham cracker crust. No toppings needed - perfection in its simplest form.",
            pairings: ["Espresso", "Fresh Strawberries", "Caramel Sauce", "Dark Chocolate Shavings"],
            funFact: "A true New York cheesecake should be so creamy it almost melts in your mouth! The secret? We bake it in a water bath to prevent cracks and ensure even cooking. Each cake uses nearly 2 pounds of cream cheese!"
        },
        {
            name: "Tea Time Carrot Cake",
            description: "Perfect companion for your afternoon tea",
            price: "₹300",
            badge: "Seasonal",
            popular: false,
            seasonal: true,
            image: "carrot-cake.jpg",
            detailedDescription: "Moist and flavorful carrot cake loaded with freshly grated carrots, crushed pineapple, and warm spices like cinnamon and nutmeg. Each slice is perfectly spiced and not overly sweet - ideal for your afternoon tea break.",
            pairings: ["Masala Chai", "English Breakfast Tea", "Ginger Tea", "Vanilla Ice Cream"],
            funFact: "Carrot cake became popular during WWII when sugar was rationed and carrots were used as a natural sweetener! Despite having vegetables, one slice can contain up to 2 servings of carrots. Healthy indulgence!"
        },
        {
            name: "Chocochips Cookies",
            description: "Box of 8 delicious chocolate chip cookies",
            price: "₹250",
            badge: "8 pieces",
            popular: true,
            image: "chocochip-cookies.jpg",
            detailedDescription: "Classic chocolate chip cookies with a perfect balance of crispy edges and chewy centers. Loaded with premium dark chocolate chips and a hint of sea salt. Baked fresh to order - the aroma alone is worth it!",
            pairings: ["Cold Milk", "Hot Chocolate", "Vanilla Ice Cream", "Coffee"],
            funFact: "The chocolate chip cookie was invented by accident in 1938 when Ruth Wakefield ran out of baker's chocolate and used chopped chocolate bars instead! Our cookies use Belgian chocolate chips for extra richness."
        },
        {
            name: "Caramel Pudding Slice",
            description: "Silky smooth caramel custard pudding",
            price: "₹100",
            badge: "Per Slice",
            popular: true,
            image: "caramel-pudding.jpg",
            detailedDescription: "A classic caramel pudding (flan) with a silky-smooth custard texture topped with golden caramel sauce. Made with farm-fresh eggs, pure vanilla, and whole milk, then slow-baked to achieve the perfect wobble. The caramel is made from scratch - no shortcuts here!",
            pairings: ["Black Coffee", "Vanilla Ice Cream", "Fresh Cream", "Mint Tea"],
            funFact: "Caramel pudding (also called flan or crème caramel) has been enjoyed since Roman times! The secret to our pudding's smooth texture is baking it in a water bath at low temperature. Each slice takes 3 hours to set perfectly in the fridge!"
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
            ${item.image ? `
                <div class="menu-item-image">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </div>
            ` : ''}
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
            ${item.seasonal ? `
                <div class="menu-item-meta seasonal">
                    <span>🌸 Seasonal</span>
                </div>
            ` : ''}
            ${item.bengali ? `
                <div class="menu-item-meta bengali">
                    <span>🍛 Bengali Special</span>
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

// Google Analytics Event Tracking
function trackEvent(eventName, category, label, value = null) {
    if (typeof gtag !== 'undefined') {
        const eventParams = {
            event_category: category,
            event_label: label
        };
        if (value !== null) {
            eventParams.value = value;
        }
        gtag('event', eventName, eventParams);
        console.log('GA Event:', eventName, eventParams);
    }
}

// Show Menu Item Popup
function showMenuItemPopup(item) {
    // Track popup view
    trackEvent('view_item', 'Menu', item.name);
    
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'menu-modal';
    modal.innerHTML = `
        <div class="menu-modal-overlay"></div>
        <div class="menu-modal-content">
            <button class="menu-modal-close">&times;</button>
            <div class="menu-modal-body">
                <div class="menu-modal-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="menu-modal-details">
                    <h2>${item.name}</h2>
                    <div class="menu-modal-price">${item.price}</div>
                    
                    <div class="menu-modal-section">
                        <h3>About This Dish</h3>
                        <p>${item.detailedDescription}</p>
                    </div>
                    
                    ${item.pairings && item.pairings.length > 0 ? `
                        <div class="menu-modal-section">
                            <h3>🍽️ Perfect Pairings</h3>
                            <div class="menu-modal-pairings">
                                ${item.pairings.map(pairing => `
                                    <span class="pairing-tag">${pairing}</span>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                    
                    ${item.funFact ? `
                        <div class="menu-modal-section fun-fact">
                            <h3>💡 Fun Fact</h3>
                            <p>${item.funFact}</p>
                        </div>
                    ` : ''}
                    
                    <div class="menu-modal-actions">
                        <a href="https://wa.me/919883128474?text=Hi! I'd like to order ${encodeURIComponent(item.name)}" 
                           class="btn btn-primary btn-order" 
                           target="_blank"
                           onclick="trackEvent('click_order', 'Menu', '${item.name}')">
                            Order on WhatsApp
                        </a>
                        <button class="btn btn-secondary" onclick="this.closest('.menu-modal').remove()">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners
    modal.querySelector('.menu-modal-overlay').addEventListener('click', () => {
        modal.remove();
        trackEvent('close_popup', 'Menu', item.name);
    });
    
    modal.querySelector('.menu-modal-close').addEventListener('click', () => {
        modal.remove();
        trackEvent('close_popup', 'Menu', item.name);
    });
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.style.overflow = '';
        }
    });
    
    // Animate in
    setTimeout(() => modal.classList.add('active'), 10);
}

// Setup Menu Item Click Handlers
function setupMenuItemClickHandlers() {
    document.addEventListener('click', (e) => {
        const menuItem = e.target.closest('.menu-item');
        if (menuItem) {
            const itemName = menuItem.querySelector('h3').textContent;
            const allItems = [...menuItems.curries, ...menuItems.cakes];
            const item = allItems.find(i => i.name === itemName);
            
            if (item && item.detailedDescription) {
                showMenuItemPopup(item);
            }
        }
    });
}

// Track Navigation Clicks
function setupNavigationTracking() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            trackEvent('click_navigation', 'Navigation', e.target.textContent);
        });
    });
    
    // Track category filter clicks
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            trackEvent('filter_menu', 'Menu', e.target.dataset.category);
        });
    });
    
    // Track CTA button clicks
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (!e.target.classList.contains('btn-order')) {
                trackEvent('click_cta', 'CTA', e.target.textContent.trim());
            }
        });
    });
}

// Initialize new features
document.addEventListener('DOMContentLoaded', function() {
    setupMenuItemClickHandlers();
    setupNavigationTracking();
    
    // Track page view
    trackEvent('page_view', 'Engagement', window.location.pathname);
});
