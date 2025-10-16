document.addEventListener('DOMContentLoaded', () => {
    const totalAmountElement = document.getElementById('total-amount');
    const paymentForm = document.getElementById('payment-form');

    // Load cart total from localStorage
    const cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
    });
    totalAmountElement.textContent = `Total: $${total.toFixed(2)}`;

    // Handle form submission
    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Simple validation (in real app, use proper validation)
        const cardName = document.getElementById('card-name').value;
        const cardNumber = document.getElementById('card-number').value;
        const expiry = document.getElementById('expiry').value;
        const cvv = document.getElementById('cvv').value;

        if (cardName && cardNumber && expiry && cvv) {
            alert('Payment successful! Thank you for your purchase.');
            // Clear cart
            localStorage.removeItem('shoppingCart');
            // Redirect to home or confirmation page
            window.location.href = 'melody.html';
        } else {
            alert('Please fill in all fields.');
        }
    });
});
