/**
 * @ author : Kavishka Prabath
 * @ since : 0.1.0
 **/

loadAllOrders();

/* ------------------- Load All Orders to Order Table------------------- */
function loadAllOrders(){
    $("#orderTable").empty();
    $.ajax({
        url: "http://localhost:8080/pos/orders?option=GETALL",
        method: "GET",
        success: function (resp) {
            for (const orders of resp.data) {

                let row = `<tr><td>${orders.orderId}</td><td>${orders.cid}</td><td>${orders.orderDate}</td><td>
                ${orders.total}</td><td>${orders.discount}</td><td>${orders.subTotal}</td></tr>`;
                $("#orderTable").append(row);

            }
        }
    });
}