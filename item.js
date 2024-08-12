class UI {
    static cart = [];

    static addToCart (id) {       
        const items = [
            { id: 1, name: 'Item 1', price: 10 },
            { id: 2, name: 'Item 2', price: 20 },
            { id: 3, name: 'Item 3', price: 30 }
        ];

        const addedItem = items.find(item => item.id === id);
        if(addedItem) {
            // add items
            UI.cart.push(addedItem); 
            // update ui
            UI.cartStore(addedItem)

        };
    };

    static cartStore (addedItem) {
        const cart = document.querySelector('#cart');
        const cartDiv = document.createElement('div');
        cartDiv.classList.add('cart-item');
        cartDiv.setAttribute('data-id', addedItem.id)

        cartDiv.innerHTML = `
            <h2>${addedItem.name}</h2>
            <p>Price: $${addedItem.price}</p>
            <button onclick="UI.removeFromCart(${addedItem.id})">Remove</button>
        `;
        cart.appendChild(cartDiv);
    };

    static displayItems (id) {
        const items = [
            { id: 1, name: 'Item 1', price: 10 },
            { id: 2, name: 'Item 2', price: 20 },
            { id: 3, name: 'Item 3', price: 30 }
        ];

        const cartItems = items;
        cartItems.forEach((item) => UI.addItems(item));
    };
 
    static removeFromCart (id) {
        // update cart array
        UI.cart = UI.cart.filter(item => item.id !== id);

        // remove item from the dom
        const cart = document.querySelector('#cart');
        const cartItem = document.querySelector(`[data-id = "${id}"]`);
        if(cartItem) {
            cart.removeChild(cartItem);
        };
    }

    static addItems (item) {
        const list = document.querySelector('#item-list');
        const div = document.createElement('div');

        div.innerHTML = `
            <h2>${item.name}</h2>
            <p>Price: $${item.price}</p>
            <button onclick="UI.addToCart(${item.id})">Add to Cart</button>
        `
        list.appendChild(div);
    };
};

document.addEventListener('DOMContentLoaded', UI.displayItems);

