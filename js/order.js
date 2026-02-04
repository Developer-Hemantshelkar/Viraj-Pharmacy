let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    const existing = cart.find(item => item.name === name);
  
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ name, qty: 1 });
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById("cartCount").innerText = cart.length;
    alert(name + " added to cart");
  }