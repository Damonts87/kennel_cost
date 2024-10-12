function calculateCost() {
    const taxRate = 0.047;
    const dailyRate = parseFloat(document.getElementById("dogSize").value);
    const days = parseInt(document.getElementById("days").value);

    const subtotal = dailyRate * days;
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    document.getElementById("price").innerText = subtotal.toFixed(2);
    document.getElementById("tax").innerText = tax.toFixed(2);
    document.getElementById("total").innerText = total.toFixed(2);
}
