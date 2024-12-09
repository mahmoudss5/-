function trackOrder() {
    const orderID = document.getElementById('orderid').value;

    const orderData = {
        "12345": {
            shipDate: "2024-11-20",
            courierDate: "2024-11-21",
            currentLocation: "Warehouse City",
            expectedDelivery: "2024-11-25"
        },
        "67890": {
            shipDate: "2024-11-22",
            courierDate: "2024-11-23",
            currentLocation: "Distribution Hub",
            expectedDelivery: "2024-11-26"
        }
    };
    const details = orderData[orderID];
    if (!details) {
        alert("Order ID not found!");
        document.getElementById('orderDetails').style.display = 'none';
        return;
    }

    document.getElementById('shipDate').innerText = details.shipDate;
    document.getElementById('courierDate').innerText = details.courierDate;
    document.getElementById('currentLocation').innerText = details.currentLocation;
    document.getElementById('expectedDeliveryDate').innerText = details.expectedDelivery;

    document.getElementById('orderDetails').style.display = 'flex';
}

document.getElementById('button').addEventListener('click', trackOrder);
