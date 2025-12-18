let total = 0;

function addToCart(item, price) {
    let cart = document.getElementById("cart");
    let li = document.createElement("li");
    li.innerText = item + " - ₹" + price;
    cart.appendChild(li);

    total += price;
    document.getElementById("total").innerText = total;
}