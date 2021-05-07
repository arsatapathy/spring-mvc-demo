$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8083/customer?id=123"
    }).then(function(customer) {
        $('.customerId').append(customer.customerId);
        $('.customerName').append(customer.customerName);
        $('.customerPhone').append(customer.customerPhone);
    });
});