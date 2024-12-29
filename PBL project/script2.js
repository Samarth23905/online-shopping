function refreshPag() {
    location.reload();
}

document.getElementById('contact').addEventListener('click',() => {
    const num = "+917483314447";
    window.location.href = `tel:${num}`;
})

const search = document.getElementById('search');
const searchBar = document.getElementById('searchbar');

search.addEventListener('click', () => {
    if(searchBar.style.display === 'none' || searchBar.style.display === '') {
        searchBar.style.display = 'block';
    } else {
        searchBar.style.display = 'none';
    }
});

function sign() {
    window.location.href = 'sign.html';
}

let cart = [];
let totalPrice = 0; 
function addToCart(productName, productPrice) {
    cart.push({name:productName, price:productPrice});
    totalPrice += productPrice;
    const cartItems = document.getElementById('cartItems');
    const totPrice = document.getElementById('totalPrice');
    cartItems.innerHTML = "";
    cart.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price}`;
        cartItems.appendChild(li);
    });
    totPrice.textContent = `TOTAL: ₹${totalPrice}`;
}

function buy() {
    window.location.href = 'payment.html';
}
const searchButton = document.getElementById('searchButton');
const nameList = document.getElementById('nameList');
const searchInput = document.getElementById('searchInput');
searchButton.addEventListener('click', function () {
    const searchText = searchInput.value.trim();
    
    if (searchText) {
        nameList.style.display = 'block';
    } else {
        nameList.style.display = 'none';
    }
});

function filter() {
    window.location.href = 'filter.html';
}