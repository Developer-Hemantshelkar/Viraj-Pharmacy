let cart = JSON.parse(localStorage.getItem("cart")) || [];

const prices = {
  "Paracetamol": 50,
  "Vitamin C": 120,
  "Cold Syrup": 90,
  "Pain Relief Gel": 150
};

const cartItemsDiv = document.getElementById("cartItems");
const totalPriceEl = document.getElementById("totalPrice");
const summaryEl = document.getElementById("summary");

const TAX_RATE = 0.05;      // 5% tax
const DISCOUNT_RATE = 0.1; // 10% discount

function renderCart() {
  cartItemsDiv.innerHTML = "";
  summaryEl.innerHTML = "";

  // ✅ EMPTY CART MESSAGE
  if (cart.length === 0) {
    cartItemsDiv.innerHTML = `
      <p class="empty-cart">🛒 Your cart is empty</p>
    `;
    totalPriceEl.innerText = "0";
    return;
  }

  let subtotal = 0;

  cart.forEach((item, index) => {
    const price = prices[item.name] || 0;
    const itemTotal = price * item.qty;
    subtotal += itemTotal;

    cartItemsDiv.innerHTML += `
      <div class="cart-item">
        <strong>${item.name}</strong>
        <span>₹${price}</span>

        <div class="qty">
          <button onclick="changeQty(${index}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${index}, 1)">+</button>
        </div>

        <span>₹${itemTotal}</span>
        <button class="remove" onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });

  // ✅ TAX & DISCOUNT
  const tax = subtotal * TAX_RATE;
  const discount = subtotal >= 500 ? subtotal * DISCOUNT_RATE : 0;
  const finalTotal = subtotal + tax - discount;

  summaryEl.innerHTML = `
    <p>Subtotal: ₹${subtotal.toFixed(2)}</p>
    <p>Tax (5%): ₹${tax.toFixed(2)}</p>
    <p>Discount: −₹${discount.toFixed(2)}</p>
    <hr>
    <h3>Total: ₹${finalTotal.toFixed(2)}</h3>
    <button class="pay-btn" onclick="payNow()">Pay Now</button>
  `;

  totalPriceEl.innerText = finalTotal.toFixed(2);
}

function changeQty(index, change) {
  cart[index].qty += change;
  if (cart[index].qty < 1) cart[index].qty = 1;
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}
function payNow() {
    if (cart.length === 0) return;
  
    const subtotal = cart.reduce(
      (sum, item) => sum + (prices[item.name] || 0) * item.qty,
      0
    );
  
    const tax = subtotal * 0.05;
    const discount = subtotal >= 500 ? subtotal * 0.1 : 0;
    const total = subtotal + tax - discount;
  
    const order = {
      id: "ORD-" + Date.now(),
      date: new Date().toLocaleString(),
      items: cart,
      subtotal,
      tax,
      discount,
      total
    };
  
    // ✅ SAVE ORDER HISTORY
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));
  
    // ✅ GENERATE PDF
    generatePDF(order);
  
    // ✅ CLEAR CART
    localStorage.removeItem("cart");
    cart = [];
    document.getElementById("cartCount").innerText = 0;
  
    alert("✅ Payment Successful!");
    renderCart();
  }
  function generatePDF(order) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
  
    doc.setFontSize(16);
    doc.text("💊 Medicine Order Bill", 20, 20);
  
    doc.setFontSize(11);
    doc.text(`Order ID: ${order.id}`, 20, 35);
    doc.text(`Date: ${order.date}`, 20, 42);
  
    let y = 55;
    doc.text("Items:", 20, y);
    y += 8;
  
    order.items.forEach(item => {
      const price = prices[item.name];
      doc.text(
        `${item.name}  x${item.qty}  = ₹${price * item.qty}`,
        20,
        y
      );
      y += 7;
    });
  
    y += 5;
    doc.text(`Subtotal: ₹${order.subtotal}`, 20, y); y += 7;
    doc.text(`Tax: ₹${order.tax}`, 20, y); y += 7;
    doc.text(`Discount: ₹${order.discount}`, 20, y); y += 7;
  
    doc.setFontSize(13);
    doc.text(`Total Paid: ₹${order.total}`, 20, y + 5);
  
    doc.save(`${order.id}.pdf`);
  }
renderCart();