/**
 * @ author : Kavishka Prabath
 * @ since : 0.1.0
 **/

loadAllOrders();
bindOrderDetailsClickEvent();

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
            bindOrderDetailsClickEvent();
        }
    });
}

function bindOrderDetailsClickEvent(){
    $("#orderTable > tr").click('click', function () {

        tableRow = $(this);
        let oid = $(this).children(":eq(0)").text();

        $("#orderDetailTable").empty();
        $.ajax({
            url: "http://localhost:8080/pos/orders?option=SEARCH&orderId=" + oid,
            method: "GET",
            success: function (resp) {
                for (const orders of resp) {

                    let row = `<tr><td>${orders.oId}</td><td>${orders.iCode}</td><td>${orders.qty}</td><td>
                    ${orders.price}</td><td>${orders.total}</td></tr>`;
                    $("#orderDetailTable").append(row);

                }
            }

        });
    });
}

$("#btnSearchOrder").click(function () {
    let searchOid = $("#txtSearchOrderId").val();
    searchOrderByOrderDetailTable(searchOid);
    searchOrderByOrderTable(searchOid);
});

// Search Order details from Order Table and Order Detail Table
function searchOrderByOrderTable(orderId) {

    $.ajax({
        url: "http://localhost:8080/pos/order?option=SEARCHORDER&orderId=" + orderId,
        method: "GET",
        success: function (res) {
            if (res.status == 200) {
                $("#orderTable").empty();
                let tableRow = `<tr><td>${res.orderId}</td><td>${res.cid}</td><td>${res.orderDate}</td><td>${res.total}</td><td>${res.discount}</td><td>${res.subTotal}</td></tr>`;
                $("#orderTable").append(tableRow);
            } else {
                loadAllOrders();
                //loadOrderDetailTable();
                swal({
                    title: "Error!",
                    text: "Order Not Found",
                    icon: "warning",
                    button: "Close",
                    timer: 2000
                });
            }
        }
    });
}