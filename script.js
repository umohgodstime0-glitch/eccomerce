// JavaScript for Shine Jewel website

document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to all "Add to cart" buttons
    const addToCartButtons = document.querySelectorAll('button');
    addToCartButtons.forEach(button => {
        if (button.textContent.toLowerCase().includes('add to cart')) {
            button.addEventListener('click', function() {
                window.location.href = 'payment.html';
            });
        }
    });

    // Function to add item to cart
    function addToCart(title, price) {
        let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
        const parsedPrice = parseFloat(price.replace('$', ''));
        cart.push({ name: title, price: parsedPrice, quantity: 1 });
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    // Add click event listener to "SHOP NOW" button in feature section
    const shopNowButton = document.querySelector('.feature-text button');
    if (shopNowButton) {
        shopNowButton.addEventListener('click', function() {
            alert('Redirecting to shop page...');
            // You can add actual navigation here
            // window.location.href = 'shop.html';
        });
    }

    // Add smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.menu a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add search functionality (basic placeholder)
    const searchInput = document.querySelector('.input1');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = this.value.trim();
                if (query) {
                    alert(`Searching for: ${query}\nSearch functionality will be implemented soon!`);
                }
            }
        });
    }

    // Add hover effects for accessory items (enhance existing CSS)
    const accessoryItems = document.querySelectorAll('.accessory-item');
    accessoryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click event for category links
    const categoryLinks = document.querySelectorAll('.category a');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.textContent;
            alert(`Navigating to ${category} category. This page will be created soon!`);
        });
    });

    // Add responsive menu toggle (for future mobile menu)
    // This is a placeholder for when a mobile menu is added
    function toggleMenu() {
        const menu = document.querySelector('.menu');
        if (menu) {
            menu.classList.toggle('active');
        }
    }

    // You can call toggleMenu() when adding a hamburger menu button

    console.log('Shine Jewel JavaScript loaded successfully!');
});
