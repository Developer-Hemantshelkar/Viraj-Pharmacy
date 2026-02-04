const orders = JSON.parse(localStorage.getItem("orders")) || [];
const container = document.getElementById("orderHistory");

if (orders.length === 0) {
  container.innerHTML = "<p>No orders yet.</p>";
} else {
  orders.reverse().forEach(order => {
    container.innerHTML += `
      <div class="order-card">
        <h4>${order.id}</h4>
        <p>${order.date}</p>
        <p>Total: ₹${order.total}</p>
        <button onclick='downloadOldPDF(${JSON.stringify(order)})'>
          Download Bill
        </button>
      </div>
    `;
  });
}
function downloadOldPDF(order) {
    generatePDF(order);
  }