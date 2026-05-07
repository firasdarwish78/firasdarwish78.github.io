
const destinations = [
    {
        id: 1,
        name: "Maldives",
        region: "asia",
        image:"images/maldives.jpg",
        description: "Paradise islands with crystal waters and overwater villas",
        highlights: ["Snorkeling", "Water Sports", "Spa Retreats"],
        bestTime: "November - April"
    },
    {
        id: 2,
        name: "Swiss Alps",
        region: "europe",
        image: "images/Swiss Alps.jpg",
        description: "Snow-capped peaks and luxury mountain lodges",
        highlights: ["Skiing", "Hiking", "Alpine Dining"],
        bestTime: "December - March"
    },
    {
        id: 3,
        name: "Dubai",
        region: "middle-east",
        image: "images/Dubai.jpg",
        description: "Ultra-modern luxury in the desert",
        highlights: ["Shopping", "Desert Safari", "Fine Dining"],
        bestTime: "October - April"
    },
    {
        id: 4,
        name: "Bali",
        region: "asia",
        image: "images/Bali.jpg",
        description: "Tropical paradise with ancient temples and rice terraces",
        highlights: ["Yoga", "Temples", "Beach Clubs"],
        bestTime: "April - October"
    },
    {
        id: 5,
        name: "Paris",
        region: "europe",
        image: "images/paris.jpg",
        description: "The City of Light with iconic landmarks and haute cuisine",
        highlights: ["Museums", "Dining", "Shopping"],
        bestTime: "April - June"
    },
    {
        id: 6,
        name: "Santorini",
        region: "europe",
        image: "images/santorini.jpg",
        description: "Greek island with white-washed buildings and sunset views",
        highlights: ["Wine Tasting", "Sunsets", "Local Cuisine"],
        bestTime: "May - September"
    },
    {
        id: 7,
        name: "Lebanon",
        region: "middle-east",
        image: "images/lebanon.jpg",
        description: "Mediterranean country with ancient ruins, coastal resorts, and vibrant cuisine",
        highlights: ["History", "Cuisine", "Beaches"],
        bestTime: "April - October"
    },
    {
        id: 8,
        name: "Tunisia",
        region: "africa",
        image: "images/Tunisia.jpg",
        description: " a North African country that blends a 3,000-year history with a stunning Mediterranean landscape",
        highlights: ["History", "Architacture" , "Land Scape"],
        bestTime: "September - November"
    }   
];

const packages = [
    {
        id: 1,
        name: "Island Escape",
        duration: "7",
        price: "$5,999",
        destination: "Maldives",
        image: "",
        includes: ["5-star overwater villa", "Daily spa treatments", "Gourmet dining", "Water sports", "Private yacht cruise"],
        rating: "4.9"
    },
    {
        id: 2,
        name: "Alpine Adventure",
        duration: "5",
        price: "$4,499",
        destination: "Swiss Alps",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663630274769/VowcXQcAwSrGGweZmWuhmA/hero-mountain-luxury-e7uxayhvAciR5CfGXAjW6V.webp",
        includes: ["Luxury mountain lodge", "Guided hiking tours", "Michelin-star dining", "Skiing lessons", "Helicopter tour"],
        rating: "4.8"
    },
    {
        id: 3,
        name: "Urban Luxury",
        duration: "4",
        price: "$3,799",
        destination: "Dubai",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663630274769/VowcXQcAwSrGGweZmWuhmA/hero-city-luxury-jMWBP2qrpVEQw39sQVjkyp.webp",
        includes: ["7-star hotel", "Desert safari", "Shopping tour", "Fine dining experiences", "Spa & wellness"],
        rating: "4.7"
    },
    {
        id: 4,
        name: "Tropical Paradise",
        duration: "7",
        price: "$6,299",
        destination: "Bali",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663630274769/VowcXQcAwSrGGweZmWuhmA/hero-tropical-luxury-jQycE52NLmY6oTFqrpC3mK.webp",
        includes: ["Private villa with pool", "Yoga retreats", "Temple tours", "Traditional massage", "Beach club access"],
        rating: "4.9"
    },
    {
        id: 5,
        name: "Parisian Romance",
        duration: "5",
        price: "$4,199",
        destination: "Paris",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663630274769/VowcXQcAwSrGGweZmWuhmA/hero-city-luxury-jMWBP2qrpVEQw39sQVjkyp.webp",
        includes: ["5-star hotel", "Museum tours", "Cooking classes", "Seine river cruise", "Champagne tasting"],
        rating: "4.8"
    },
    {
        id: 6,
        name: "Greek Islands",
        duration: "7",
        price: "$5,599",
        destination: "Santorini",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663630274769/VowcXQcAwSrGGweZmWuhmA/hero-tropical-luxury-jQycE52NLmY6oTFqrpC3mK.webp",
        includes: ["Luxury cliffside villa", "Wine tasting tours", "Sunset cruises", "Local cuisine experiences", "Island hopping"],
        rating: "4.9"
    }
];

// ========== STATE ==========
let currentFilter = {
    destinations: 'all',
    packages: 'all'
};

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
    renderDestinations('all');
    renderPackages('all');
    setupParallaxScrolling();
    setupScrollAnimations();
});

// ========== PAGE NAVIGATION ==========
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// ========== SIGN IN MODAL ==========
function openSignIn() {
    const modal = document.getElementById('signInModal');
    modal.classList.add('active');
}

function closeSignIn() {
    const modal = document.getElementById('signInModal');
    modal.classList.remove('active');
}

function handleSignIn(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    
    alert(`Welcome back! Signed in as: ${email}`);
    form.reset();
    closeSignIn();
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('signInModal');
    if (event.target === modal) {
        closeSignIn();
    }
});

// ========== DESTINATIONS RENDERING ==========
function renderDestinations(filter) {
    const grid = document.getElementById('destinationsGrid');
    const filtered = filter === 'all' 
        ? destinations 
        : destinations.filter(d => d.region === filter);

    grid.innerHTML = filtered.map((dest, idx) => `
        <div class="destination-full-card" style="animation-delay: ${idx * 0.1}s">
            <img src="${dest.image}" alt="${dest.name}">
            <h3>${dest.name}</h3>
            <p>${dest.description}</p>
            <div class="highlights">
                ${dest.highlights.map(h => `<span class="highlight-tag">${h}</span>`).join('')}
            </div>
            <p class="best-time">Best Time: ${dest.bestTime}</p>
        </div>
    `).join('');

    currentFilter.destinations = filter;
}

function filterDestinations(filter) {
    // Update active button
    document.querySelectorAll('.filter-section .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    renderDestinations(filter);
}

// ========== PACKAGES RENDERING ==========
function renderPackages(filter) {
    const grid = document.getElementById('packagesGrid');
    const filtered = filter === 'all' 
        ? packages 
        : packages.filter(p => p.duration === filter);

    grid.innerHTML = filtered.map((pkg, idx) => `
        <div class="package-card" style="animation-delay: ${idx * 0.1}s">
            <div class="package-card-image">
                <img src="${pkg.image}" alt="${pkg.name}">
                <div class="package-duration">${pkg.duration} Days</div>
                <div class="package-rating">⭐ ${pkg.rating}</div>
            </div>
            <div class="package-card-content">
                <p class="package-destination">${pkg.destination}</p>
                <h3>${pkg.name}</h3>
                <div class="package-includes">
                    <p>What's Included:</p>
                    <ul>
                        ${pkg.includes.slice(0, 3).map(item => `<li>${item}</li>`).join('')}
                        ${pkg.includes.length > 3 ? `<li>+${pkg.includes.length - 3} more benefits</li>` : ''}
                    </ul>
                </div>
                <div class="package-footer">
                    <div>
                        <p class="package-price">Starting from</p>
                        <p class="package-price-amount">${pkg.price}</p>
                    </div>
                    <button class="btn btn-primary" onclick="alert('Booking feature coming soon!')">Book Now</button>
                </div>
            </div>
        </div>
    `).join('');

    currentFilter.packages = filter;
}

function filterPackages(filter) {
    // Update active button
    const buttons = document.querySelectorAll('.filter-section .filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    renderPackages(filter);
}

// ========== FORM SUBMISSIONS ==========
function handleContactSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    alert('Thank you for your message! Our specialists will contact you shortly.');
    form.reset();
}

function handleNewsletterSubmit(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    alert(`Thank you for subscribing! A confirmation email has been sent to ${email}`);
    event.target.reset();
}

// ========== PARALLAX SCROLLING ==========
function setupParallaxScrolling() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        parallaxElements.forEach(el => {
            const speed = el.getAttribute('data-parallax') || 0.5;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// ========== SCROLL ANIMATIONS ==========
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe destination and package cards
    document.querySelectorAll('.destination-card, .package-card, .feature-card').forEach(el => {
        observer.observe(el);
    });
}

// ========== SMOOTH SCROLL FOR NAVIGATION ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#home' && href !== '#destinations' && href !== '#packages' && href !== '#contact') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ========== ACTIVE NAV LINK TRACKING ==========
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.page');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ========== UTILITY FUNCTIONS ==========
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

// ========== MOBILE MENU TOGGLE ==========
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Close mobile menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});

// ========== KEYBOARD NAVIGATION ==========
document.addEventListener('keydown', function(e) {
    // Close modal with Escape key
    if (e.key === 'Escape') {
        closeSignIn();
    }
});

// ========== SCROLL TO TOP BUTTON ==========
window.addEventListener('scroll', function() {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (scrollButton) {
        if (window.scrollY > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    }
});

// ========== PERFORMANCE OPTIMIZATION ==========
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========== CONSOLE MESSAGE ==========
console.log('%cLuxeVoyage', 'font-size: 24px; color: #d4af37; font-weight: bold;');
console.log('%cLuxury Travel Agency Website', 'font-size: 14px; color: #1a1a1a;');
console.log('%cDesigned with elegance and precision', 'font-size: 12px; color: #666;');
