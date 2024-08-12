document.addEventListener('DOMContentLoaded', function() {
    const itemList = document.getElementById('item-list');
    const cart = document.getElementById('cart');
    const addItemButton = document.getElementById('add-item-button');

    let items = [
        { id: 1, name: 'Item 1', price: 10 },
        { id: 2, name: 'Item 2', price: 20 },
        { id: 3, name: 'Item 3', price: 30 }
    ];
    
    let cartItems = [];

    function renderItems() {
        itemList.innerHTML = '';
        items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');
            itemDiv.innerHTML = `
                <h2>${item.name}</h2>
                <p>Price: $${item.price}</p>
                <button onclick="addToCart(${item.id})">Add to Cart</button>
            `;
            itemList.appendChild(itemDiv);
        });
    }

    function renderCart() {
        cart.innerHTML = '';
        cartItems.forEach(cartItem => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            cartItemDiv.innerHTML = `
                <h2>${cartItem.name}</h2>
                <p>Price: $${cartItem.price}</p>
                <button onclick="removeFromCart(${cartItem.id})">Remove</button>
            `;
            cart.appendChild(cartItemDiv);
        });
    }

    window.addToCart = function(id) {
        const item = items.find(item => item.id === id);
        cartItems.push(item);
        renderCart();
    }

    window.removeFromCart = function(id) {
        cartItems = cartItems.filter(cartItem => cartItem.id !== id);
        renderCart();
    }

    addItemButton.addEventListener('click', function() {
        const newItem = {
            id: items.length + 1,
            name: `Item ${items.length + 1}`,
            price: (items.length + 1) * 10
        };
        items.push(newItem);
        renderItems();
    });

    renderItems();
});
